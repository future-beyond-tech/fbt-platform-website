import { NextResponse } from "next/server";
import { Resend } from "resend";
import { checkRateLimit, getClientIp } from "@/lib/rateLimit";

const MAX_REQUESTS_PER_WINDOW = 10;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;

const ALLOWED_PROPERTY_TYPES = new Set([
  "Single PG",
  "Multi-Property",
  "Enterprise Chain",
]);
const ALLOWED_BED_COUNTS = new Set(["1-10", "11-50", "51-200", "200+"]);
const ALLOWED_PAIN_POINTS = new Set([
  "Rent tracking",
  "Power billing",
  "Tenant management",
  "Multi-property control",
  "Reporting",
]);

type WaitlistPayload = {
  name: string;
  email: string;
  phone: string;
  propertyType: string;
  bedCount: string;
  painPoint: string;
};

type ValidationResult =
  | { success: true; data: WaitlistPayload }
  | { success: false; error: string };

export async function POST(req: Request) {
  const clientIp = getClientIp(req);
  const rateLimit = checkRateLimit(
    `pgsaas-waitlist:${clientIp}`,
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

  const webhookUrl = process.env.PGSAAS_WAITLIST_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      const webhookResponse = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          source: "website_pgsaas_waitlist",
          submittedAt: new Date().toISOString(),
        }),
      });

      if (!webhookResponse.ok) {
        console.error("PG SaaS waitlist webhook failed:", webhookResponse.status);
      }
    } catch (error) {
      console.error("PG SaaS waitlist webhook error:", error);
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

    const sendTasks: Promise<unknown>[] = [];

    if (contactEmail) {
      sendTasks.push(
        resend.emails.send({
          from: emailFrom,
          to: contactEmail,
          replyTo: sanitizeSingleLine(data.email),
          subject: `New PG SaaS waitlist signup: ${sanitizeSingleLine(data.name)}`,
          text: `PG SaaS Waitlist Signup
Name: ${sanitizeSingleLine(data.name)}
Email: ${sanitizeSingleLine(data.email)}
Phone: ${sanitizeSingleLine(data.phone)}
Property Type: ${sanitizeSingleLine(data.propertyType)}
Number of Beds: ${sanitizeSingleLine(data.bedCount)}
Biggest Pain Point: ${sanitizeSingleLine(data.painPoint)}
Source: /products/pg-management`,
        })
      );
    }

    sendTasks.push(
      resend.emails.send({
        from: emailFrom,
        to: sanitizeSingleLine(data.email),
        subject: "You're on the list: FBT PG SaaS Early Access",
        text: `Hi ${sanitizeSingleLine(data.name)},

You're on the list for FBT PG SaaS Platform early access.

What to expect next:
- We will share beta onboarding windows before public release.
- You can submit product feedback directly to the core team.
- Early access users get 6 months free at launch and onboarding support.

Current status: In development (Phase 1-2), beta opening Q3 2024.

If you have questions, reply to this email and our team will help.

- FBT Product Team`,
      })
    );

    await Promise.all(sendTasks);

    return NextResponse.json({ success: true }, { headers: responseHeaders });
  } catch (error) {
    console.error("PG SaaS waitlist email error:", error);
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
  const name = normalizeText(body.name);
  const email = normalizeText(body.email);
  const phone = normalizeText(body.phone);
  const propertyType = normalizeText(body.propertyType);
  const bedCount = normalizeText(body.bedCount);
  const painPoint = normalizeText(body.painPoint);

  if (!name || name.length < 2 || name.length > 120) {
    return { success: false, error: "Please provide a valid name." };
  }

  if (!email || email.length > 254 || !isValidEmail(email)) {
    return { success: false, error: "Please provide a valid email address." };
  }

  if (!phone || phone.length < 7 || phone.length > 30) {
    return { success: false, error: "Please provide a valid phone number." };
  }

  if (!propertyType || !ALLOWED_PROPERTY_TYPES.has(propertyType)) {
    return { success: false, error: "Please select a valid property type." };
  }

  if (!bedCount || !ALLOWED_BED_COUNTS.has(bedCount)) {
    return { success: false, error: "Please select a valid bed range." };
  }

  if (!painPoint || !ALLOWED_PAIN_POINTS.has(painPoint)) {
    return { success: false, error: "Please select a valid pain point." };
  }

  return {
    success: true,
    data: {
      name,
      email,
      phone,
      propertyType,
      bedCount,
      painPoint,
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
