import { NextResponse } from "next/server";
import { Resend } from "resend";
import { checkRateLimit, getClientIp } from "@/lib/rateLimit";

const MAX_REQUESTS_PER_WINDOW = 8;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const ALLOWED_CHALLENGES = new Set([
  "Security",
  "Scale",
  "AI Integration",
  "Legacy Debt",
]);
const ALLOWED_TIMELINES = new Set(["Immediate", "1-3 months", "Exploring"]);

type AssessmentPayload = {
  name: string;
  company: string;
  email: string;
  currentTechStack: string;
  biggestChallenge: string;
  timeline: string;
};

type ValidationResult =
  | { success: true; data: AssessmentPayload }
  | { success: false; error: string };

export async function POST(req: Request) {
  const clientIp = getClientIp(req);
  const rateLimit = checkRateLimit(
    `assessment:${clientIp}`,
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
      "Assessment lead capture email is not configured. Missing RESEND_API_KEY or CONTACT_EMAIL."
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
      subject: `New free assessment request from ${sanitizeSingleLine(data.name)}`,
      text: `Name: ${sanitizeSingleLine(data.name)}
Company: ${sanitizeSingleLine(data.company)}
Email: ${sanitizeSingleLine(data.email)}
Biggest Challenge: ${sanitizeSingleLine(data.biggestChallenge)}
Timeline: ${sanitizeSingleLine(data.timeline)}

Current Tech Stack:
${sanitizeMultiline(data.currentTechStack)}`,
    });

    if (error) {
      console.error("Assessment lead email error:", error);
      return NextResponse.json(
        { error: "Unable to submit right now. Please try again." },
        { status: 502, headers: responseHeaders }
      );
    }

    return NextResponse.json({ success: true }, { headers: responseHeaders });
  } catch (error) {
    console.error("Assessment lead capture error:", error);
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
  const company = normalizeText(body.company);
  const email = normalizeText(body.email);
  const currentTechStack = normalizeText(body.currentTechStack);
  const biggestChallenge = normalizeText(body.biggestChallenge);
  const timeline = normalizeText(body.timeline);

  if (!name || name.length < 2 || name.length > 120) {
    return { success: false, error: "Please provide a valid name." };
  }

  if (!company || company.length < 2 || company.length > 120) {
    return { success: false, error: "Please provide a valid company name." };
  }

  if (!email || email.length > 254 || !isValidEmail(email)) {
    return { success: false, error: "Please provide a valid email address." };
  }

  if (!currentTechStack || currentTechStack.length < 10 || currentTechStack.length > 3000) {
    return {
      success: false,
      error: "Please provide your current tech stack details.",
    };
  }

  if (!biggestChallenge || !ALLOWED_CHALLENGES.has(biggestChallenge)) {
    return { success: false, error: "Please select a valid challenge." };
  }

  if (!timeline || !ALLOWED_TIMELINES.has(timeline)) {
    return { success: false, error: "Please select a valid timeline." };
  }

  return {
    success: true,
    data: {
      name,
      company,
      email,
      currentTechStack,
      biggestChallenge,
      timeline,
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

function sanitizeMultiline(value: string): string {
  return value.replace(/\r/g, "").trim();
}
