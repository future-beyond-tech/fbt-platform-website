import Link from "next/link";
import Container from "@/components/layout/Container";

export default function FeaturedProduct() {
  return (
    <section
      className="py-16 sm:py-20 lg:py-24"
      aria-labelledby="featured-product-heading"
    >
      <Container>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-8 lg:p-10">
          <p className="inline-flex rounded-full border border-emerald-300 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-800 dark:border-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
            Product Studio
          </p>

          <h2
            id="featured-product-heading"
            className="mt-4 text-2xl font-semibold text-slate-900 dark:text-slate-50 sm:text-3xl"
          >
            We don&apos;t just advise. We build and ship enterprise SaaS.
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
            Two platforms in active delivery prove how we engineer at scale.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <article className="rounded-xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-800/50">
              <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 sm:text-lg">
                🏢 FBT PG SaaS Platform
              </h3>
              <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
                Multi-tenant PG management for rent, power billing, and tenant lifecycle.
              </p>
              <p className="mt-2 text-sm font-medium text-emerald-700 dark:text-emerald-400">
                In Beta (Q3 2026)
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-800/50">
              <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 sm:text-lg">
                🛡 Vulnerability Assessment AI
              </h3>
              <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
                AI-powered vulnerability prioritization for security teams and DevSecOps workflows.
              </p>
              <p className="mt-2 text-sm font-medium text-emerald-700 dark:text-emerald-400">
                In Development (Release Aug 2026)
              </p>
            </article>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/products"
              className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-400 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:bg-slate-800"
            >
              Explore Our Products
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200"
            >
              Hire Our Team
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
