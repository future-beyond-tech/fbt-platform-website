import { NextResponse } from "next/server";
import { Resend } from "resend";
import { checkRateLimit, getClientIp } from "@/lib/rateLimit";

const MAX_REQUESTS_PER_WINDOW = 12;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const ALLOWED_STAGES = new Set(["pre-seed", "seed", "Series A+", "Growth"]);

type LeadPayload = {
  firstName: string;
  email: string;
  companyStage: string;
};

type ValidationResult =
  | { success: true; data: LeadPayload }
  | { success: false; error: string };

export async function POST(req: Request) {
  const clientIp = getClientIp(req);
  const rateLimit = checkRateLimit(
    `lead-magnet:${clientIp}`,
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
      "Lead magnet email notifications are not configured. Missing RESEND_API_KEY or CONTACT_EMAIL."
    );
    return NextResponse.json(
      { success: true, captured: false },
      { headers: responseHeaders }
    );
  }

  const data = validated.data;

  try {
    const resend = new Resend(resendApiKey);
    const { error } = await resend.emails.send({
      from: emailFrom,
      to: contactEmail,
      replyTo: sanitizeSingleLine(data.email),
      subject: `New checklist download lead: ${sanitizeSingleLine(data.firstName)}`,
      text: `Lead magnet signup
First Name: ${sanitizeSingleLine(data.firstName)}
Email: ${sanitizeSingleLine(data.email)}
Company Stage: ${sanitizeSingleLine(data.companyStage)}
Source: /resources`,
    });

    if (error) {
      console.error("Lead magnet email error:", error);
      return NextResponse.json(
        { error: "Unable to submit right now. Please try again." },
        { status: 502, headers: responseHeaders }
      );
    }

    return NextResponse.json({ success: true }, { headers: responseHeaders });
  } catch (error) {
    console.error("Lead magnet capture error:", error);
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
  const firstName = normalizeText(body.firstName);
  const email = normalizeText(body.email);
  const companyStage = normalizeText(body.companyStage);

  if (!firstName || firstName.length < 2 || firstName.length > 120) {
    return { success: false, error: "Please provide a valid first name." };
  }

  if (!email || email.length > 254 || !isValidEmail(email)) {
    return { success: false, error: "Please provide a valid email address." };
  }

  if (!companyStage || !ALLOWED_STAGES.has(companyStage)) {
    return { success: false, error: "Please select a valid company stage." };
  }

  return {
    success: true,
    data: {
      firstName,
      email,
      companyStage,
    },
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
