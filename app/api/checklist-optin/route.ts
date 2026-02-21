import { NextResponse } from "next/server";
import { Resend } from "resend";
import { checkRateLimit, getClientIp } from "@/lib/rateLimit";

const MAX_REQUESTS_PER_WINDOW = 12;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;

type ChecklistOptinPayload = {
  email: string;
};

type ValidationResult =
  | { success: true; data: ChecklistOptinPayload }
  | { success: false; error: string };

export async function POST(req: Request) {
  const clientIp = getClientIp(req);
  const rateLimit = checkRateLimit(
    `checklist-optin:${clientIp}`,
    MAX_REQUESTS_PER_WINDOW,
    RATE_LIMIT_WINDOW_MS
  );

  const responseHeaders = {
    "X-RateLimit-Limit": String(MAX_REQUESTS_PER_WINDOW),
    "X-RateLimit-Remaining": String(rateLimit.remaining),
  };

  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: "Too many requests. Please try again in a few minutes." },
      {
        status: 429,
        headers: {
          ...responseHeaders,
          "Retry-After": String(rateLimit.retryAfterSeconds),
        },
      }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request payload." },
      { status: 400, headers: responseHeaders }
    );
  }

  if (isHoneypotTriggered(body)) {
    return NextResponse.json({ success: true }, { headers: responseHeaders });
  }

  const validated = validatePayload(body);
  if (!validated.success) {
    return NextResponse.json(
      { error: validated.error },
      { status: 400, headers: responseHeaders }
    );
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL;
  const emailFrom =
    process.env.EMAIL_FROM ?? "FBT Website <onboarding@resend.dev>";

  if (!resendApiKey || !contactEmail) {
    console.warn(
      "Checklist opt-in email notifications are not configured. Missing RESEND_API_KEY or CONTACT_EMAIL."
    );
    return NextResponse.json(
      { success: true, captured: false },
      { headers: responseHeaders }
    );
  }

  try {
    const resend = new Resend(resendApiKey);
    const { error } = await resend.emails.send({
      from: emailFrom,
      to: contactEmail,
      replyTo: sanitizeSingleLine(validated.data.email),
      subject: "New checklist opt-in lead",
      text: `Checklist opt-in lead
Email: ${sanitizeSingleLine(validated.data.email)}
Source: Exit intent popup`,
    });

    if (error) {
      console.error("Checklist opt-in email error:", error);
      return NextResponse.json(
        { error: "Unable to submit right now. Please try again." },
        { status: 502, headers: responseHeaders }
      );
    }

    return NextResponse.json({ success: true }, { headers: responseHeaders });
  } catch (error) {
    console.error("Checklist opt-in capture error:", error);
    return NextResponse.json(
      { error: "Unable to submit right now. Please try again." },
      { status: 500, headers: responseHeaders }
    );
  }
}

function validatePayload(payload: unknown): ValidationResult {
  if (!payload || typeof payload !== "object") {
    return { success: false, error: "Invalid request payload." };
  }

  const body = payload as Record<string, unknown>;
  const email = normalizeText(body.email);

  if (!email || email.length > 254 || !isValidEmail(email)) {
    return { success: false, error: "Please provide a valid email address." };
  }

  return {
    success: true,
    data: { email },
  };
}

function isHoneypotTriggered(payload: unknown): boolean {
  if (!payload || typeof payload !== "object") {
    return false;
  }

  const website = normalizeText((payload as Record<string, unknown>).website);
  return Boolean(website);
}

function normalizeText(value: unknown): string | undefined {
  if (typeof value !== "string") {
    return undefined;
  }

  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function sanitizeSingleLine(value: string): string {
  return value.replace(/[\r\n]+/g, " ").trim();
}
