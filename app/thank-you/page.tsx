import Link from "next/link";
import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import { defaultMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...defaultMetadata(
    "Assessment Request Received",
    "Thanks for requesting a free security and architecture assessment.",
    "/thank-you"
  ),
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <section className="py-20 sm:py-24 lg:py-32" aria-labelledby="thank-you">
      <Container>
        <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-10">
          <p className="text-xs font-medium uppercase tracking-wider text-emerald-700 dark:text-emerald-400 sm:text-sm">
            Request received
          </p>
          <h1
            id="thank-you"
            className="mt-3 text-2xl font-semibold text-slate-900 dark:text-slate-50 sm:text-3xl"
          >
            Thanks. Your free assessment request is in.
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
            We review submissions within 48 hours and send a prioritized
            list of concrete security and architecture actions.
          </p>

          <div className="mt-8 space-y-4 rounded-xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-800/40 sm:p-6">
            <h2 className="text-base font-semibold text-slate-900 dark:text-slate-100 sm:text-lg">
              What happens next
            </h2>
            <ol className="space-y-2 text-sm text-slate-700 dark:text-slate-300 sm:text-base">
              <li>1. You receive a confirmation email from our team.</li>
              <li>
                2. We prepare initial architecture and risk observations within
                48 hours.
              </li>
              <li>
                3. You walk through findings with us and agree on practical next
                actions.
              </li>
            </ol>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://calendly.com/futurebeyondtech"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-slate-900 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200"
            >
              Book Assessment Call
            </a>
            <Link
              href="/"
              className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              Go to Homepage
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
