import { NextResponse } from "next/server";
import { Resend } from "resend";
import { checkRateLimit, getClientIp } from "@/lib/rateLimit";

const MAX_REQUESTS_PER_WINDOW = 12;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const ALLOWED_TYPES = new Set(["security-checklist"]);

type LeadMagnetPayload = {
  email: string;
  type: string;
  source?: string;
};

type ValidationResult =
  | { success: true; data: LeadMagnetPayload }
  | { success: false; error: string };

export async function POST(req: Request) {
  const clientIp = getClientIp(req);
  const rateLimit = checkRateLimit(
    `lead-magnets:${clientIp}`,
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

  const data = validated.data;
  const webhookUrl = process.env.LEAD_MAGNET_WEBHOOK_URL;

  if (webhookUrl) {
    try {
      const webhookResponse = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          submittedAt: new Date().toISOString(),
          source: data.source ?? "website",
        }),
      });

      if (!webhookResponse.ok) {
        console.error("Lead magnet webhook failed:", webhookResponse.status);
      }
    } catch (error) {
      console.error("Lead magnet webhook error:", error);
    }
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL;
  const emailFrom =
    process.env.EMAIL_FROM ?? "FBT Website <onboarding@resend.dev>";

  if (!resendApiKey) {
    return NextResponse.json(
      { success: true, captured: Boolean(webhookUrl) },
      { headers: responseHeaders }
    );
  }

  try {
    const resend = new Resend(resendApiKey);
    const tasks: Promise<unknown>[] = [];

    if (contactEmail) {
      tasks.push(
        resend.emails.send({
          from: emailFrom,
          to: contactEmail,
          replyTo: sanitizeSingleLine(data.email),
          subject: "New lead magnet signup: security-checklist",
          text: `Lead Magnet Signup
Type: ${sanitizeSingleLine(data.type)}
Email: ${sanitizeSingleLine(data.email)}
Source: ${sanitizeSingleLine(data.source ?? "website")}
`,
        })
      );
    }

    tasks.push(
      resend.emails.send({
        from: emailFrom,
        to: sanitizeSingleLine(data.email),
        subject: "Your Enterprise Auth Checklist",
        text: `Thanks for requesting the Enterprise Auth Architecture Checklist.

This checklist covers:
- OAuth 2.0 and OIDC implementation guardrails
- Common identity vulnerability patterns
- Compliance-focused audit and access controls

Reply to this email if you want a live architecture review with the FBT team.
`,
      })
    );

    await Promise.all(tasks);
    return NextResponse.json({ success: true }, { headers: responseHeaders });
  } catch (error) {
    console.error("Lead magnet email error:", error);
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
  const type = normalizeText(body.type);
  const source = normalizeText(body.source);

  if (!email || email.length > 254 || !isValidEmail(email)) {
    return { success: false, error: "Please provide a valid email address." };
  }

  if (!type || !ALLOWED_TYPES.has(type)) {
    return { success: false, error: "Unsupported lead magnet type." };
  }

  if (source && source.length > 200) {
    return { success: false, error: "Invalid source value." };
  }

  return {
    success: true,
    data: { email, type, source },
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
