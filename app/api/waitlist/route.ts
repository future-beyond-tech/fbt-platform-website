import { NextRequest, NextResponse } from "next/server";
import { checkRateLimit, getClientIp } from "@/lib/rateLimit";

const MAX_REQUESTS_PER_WINDOW = 10;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;

export async function POST(request: NextRequest) {
  const clientIp = getClientIp(request);
  const rateLimit = checkRateLimit(
    `waitlist:${clientIp}`,
    MAX_REQUESTS_PER_WINDOW,
    RATE_LIMIT_WINDOW_MS
  );

  if (!rateLimit.allowed) {
    return NextResponse.redirect(
      new URL("/sbom?error=rate_limit", request.url),
      { status: 303 }
    );
  }

  try {
    const formData = await request.formData();
    const email = (formData.get("email") as string)?.trim();
    const source = (formData.get("source") as string) || "sbom";

    if (!email || !email.includes("@")) {
      return NextResponse.redirect(
        new URL("/sbom?error=invalid_email", request.url),
        { status: 303 }
      );
    }

    // TODO: Store in your database (Airtable, Notion, Supabase, etc.)
    // Example: await addToWaitlist(email, source)
    // Or send to email service (ConvertKit, Mailchimp, Resend list, etc.)
    // Example: await subscribeToList(email, 'sbom-waitlist')
    console.log("Waitlist signup:", { email, source });

    const base = new URL(request.url).origin;
    const redirectPath = source === "sbom" ? "/sbom" : "/";
    return NextResponse.redirect(new URL(`${redirectPath}?success=1`, base), {
      status: 303,
    });
  } catch (error) {
    console.error("Waitlist error:", error);
    return NextResponse.redirect(
      new URL("/sbom?error=1", request.url),
      { status: 303 }
    );
  }
}
