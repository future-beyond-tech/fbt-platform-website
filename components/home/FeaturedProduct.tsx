import Link from "next/link";
import Container from "@/components/layout/Container";
import TrackedExternalLink from "@/components/TrackedExternalLink";
import { rentFlowOfficialUrl, investorBriefUrl } from "@/lib/siteConfig";

/**
 * Products section with RentFlow as flagship. Infrastructure-level language,
 * clear FBT = product company hierarchy. No agency tone.
 */
export default function FeaturedProduct() {
  return (
    <section
      className="py-20 sm:py-24 lg:py-28"
      aria-labelledby="featured-product-heading"
    >
      <Container>
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-10 lg:p-12">
          <p className="inline-flex rounded-full border border-emerald-300 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-800 dark:border-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
            Infrastructure Products
          </p>

          <h2
            id="featured-product-heading"
            className="mt-5 font-tiempos text-2xl font-semibold text-slate-900 dark:text-slate-50 sm:text-3xl lg:text-4xl"
          >
            Category-Defining Platforms, Built for Scale
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
            FBT builds vertical infrastructure software—enterprise-grade from
            day one. RentFlow leads as our flagship; more platforms follow.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {/* RentFlow — flagship, visually prioritized */}
            <article className="rounded-xl border-2 border-emerald-200 bg-emerald-50/50 p-6 dark:border-emerald-800/60 dark:bg-emerald-900/20 sm:p-8">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-emerald-600 px-2.5 py-1 text-xs font-medium text-white">
                  Flagship
                </span>
                <span className="text-sm font-medium text-emerald-800 dark:text-emerald-300">
                  RentFlow
                </span>
              </div>
              <h3 className="mt-3 text-lg font-semibold text-slate-900 dark:text-slate-100 sm:text-xl">
                <Link
                  href="/products/pg-management"
                  className="transition-colors hover:text-emerald-700 dark:hover:text-emerald-400"
                >
                  Rental infrastructure platform
                </Link>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300 sm:text-base">
                India&apos;s first usage-based{" "}
                <Link
                  href="/products/pg-management"
                  className="font-medium text-emerald-700 underline decoration-emerald-500/30 underline-offset-2 dark:text-emerald-400 dark:decoration-emerald-400/30"
                >
                  PG management operating system
                </Link>
                . Multi-tenant architecture, event-driven billing, scale from 1
                to 1,000+ properties.
              </p>
              <p className="mt-3 text-xs font-medium text-slate-600 dark:text-slate-400">
                Beta Q3 2026. Investor conversations open.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <TrackedExternalLink
                  href={rentFlowOfficialUrl}
                  className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600"
                  eventName="rentflow_official_click"
                  eventParams={{ location: "featured_product" }}
                >
                  Explore RentFlow
                </TrackedExternalLink>
                <Link
                  href={investorBriefUrl}
                  className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-800"
                >
                  Request Investor Brief
                </Link>
              </div>
            </article>

            {/* VulnAI — in development */}
            <article className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800/50 sm:p-8">
              <span className="rounded-full border border-slate-300 bg-white px-2.5 py-1 text-xs font-medium text-slate-600 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-400">
                In Development
              </span>
              <h3 className="mt-3 text-lg font-semibold text-slate-900 dark:text-slate-100 sm:text-xl">
                VulnAI
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300 sm:text-base">
                AI-powered vulnerability prioritization for security teams and
                DevSecOps workflows.
              </p>
              <p className="mt-3 text-xs font-medium text-slate-600 dark:text-slate-400">
                Release Aug 2026.
              </p>
              <Link
                href="/products/vulnerability-ai"
                className="mt-5 inline-flex min-h-[44px] items-center text-sm font-semibold text-slate-700 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
              >
                View Details
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </article>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/products"
              className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-400 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:bg-slate-800"
            >
              All Products
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200"
            >
              Contact
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
