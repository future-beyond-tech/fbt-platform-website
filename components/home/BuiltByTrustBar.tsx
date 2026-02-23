import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import TrackedExternalLink from "@/components/TrackedExternalLink";
import { rentFlowOfficialUrl } from "@/lib/siteConfig";

export default function BuiltByTrustBar() {
  return (
    <section
      className="border-t border-slate-200 bg-slate-50/80 py-12 dark:border-slate-800 dark:bg-slate-900/50"
      aria-labelledby="built-by-fbt-heading"
    >
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400 sm:text-sm">
              Built by FBT
            </p>
            <h2
              id="built-by-fbt-heading"
              className="mt-2 text-2xl font-semibold text-slate-900 dark:text-slate-50 sm:text-3xl"
            >
              Infrastructure Products in Motion
            </h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <article className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900">
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                  RentFlow
                </p>
                <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                  50+ waitlist
                </p>
                <p className="mt-1 text-xs font-medium text-emerald-700 dark:text-emerald-400">
                  Beta Q3 2026
                </p>
                <TrackedExternalLink
                  href={rentFlowOfficialUrl}
                  className="mt-2 inline-block text-xs font-semibold text-emerald-700 hover:underline dark:text-emerald-400"
                  eventName="rentflow_official_click"
                  eventParams={{ location: "built_by_trust_bar" }}
                >
                  RentFlow.in →
                </TrackedExternalLink>
              </article>
              <article className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900">
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                  VulnAI
                </p>
                <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                  25+ early access
                </p>
                <p className="mt-1 text-xs font-medium text-emerald-700 dark:text-emerald-400">
                  Release Aug 2026
                </p>
              </article>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/products"
                className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
              >
                See Our Products
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <Image
              src="/products/team/fbt-team-photo.svg"
              alt="FBT product engineering team"
              width={900}
              height={620}
              className="h-auto w-full"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
