import Link from "next/link";
import Container from "@/components/layout/Container";
import { defaultMetadata } from "@/lib/seo";

export const metadata = defaultMetadata(
  "You're on the PG SaaS Waitlist",
  "Confirmation page for FBT PG SaaS early access waitlist.",
  "/products/pg-management/waitlist"
);

export default function PgSaasWaitlistConfirmationPage() {
  return (
    <section className="py-20 sm:py-24 lg:py-32" aria-labelledby="waitlist-confirm">
      <Container>
        <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-10">
          <p className="text-xs font-medium uppercase tracking-wider text-emerald-700 dark:text-emerald-400 sm:text-sm">
            Waitlist confirmed
          </p>
          <h1
            id="waitlist-confirm"
            className="mt-3 text-2xl font-semibold text-slate-900 dark:text-slate-50 sm:text-3xl"
          >
            You&apos;re on the early access list.
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
            We sent a confirmation email with next steps. Beta onboarding is
            targeted for Q3 2026, and early access members receive launch
            benefits first.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/products/pg-management"
              className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              Back to Product Page
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200"
            >
              Contact for Enterprise Demo
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
