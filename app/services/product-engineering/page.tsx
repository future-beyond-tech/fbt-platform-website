import Link from "next/link";
import Container from "@/components/layout/Container";
import { defaultMetadata } from "@/lib/seo";

export const metadata = defaultMetadata(
  "Product Engineering Service",
  "FBT product engineering service with proven delivery from our own enterprise SaaS platforms.",
  "/services/product-engineering"
);

export default function ProductEngineeringServicePage() {
  return (
    <section
      className="py-20 sm:py-24 lg:py-32"
      aria-labelledby="product-engineering-heading"
    >
      <Container>
        <div className="mx-auto max-w-4xl space-y-8">
          <header className="space-y-4">
            <p className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400 sm:text-sm">
              Service
            </p>
            <h1
              id="product-engineering-heading"
              className="text-2xl font-semibold text-slate-900 dark:text-slate-50 sm:text-3xl"
            >
              Product Engineering
            </h1>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
              We design and ship enterprise SaaS with architecture discipline from
              day one.
            </p>
          </header>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-8">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100 sm:text-xl">
              Real-World Proof: Our SaaS Platforms
            </h2>
            <p className="mt-3 text-sm text-slate-700 dark:text-slate-300 sm:text-base">
              We do not just advise. We ship. Two enterprise platforms in active
              development:
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-300 sm:text-base">
              <li>FBT PG SaaS: multi-tenant from day one, Clean Architecture + CQRS, blue-green deployments</li>
              <li>Vulnerability Assessment AI: microservices architecture, AI integration, Kubernetes orchestration, enterprise security posture</li>
            </ul>
            <p className="mt-4 text-sm text-slate-700 dark:text-slate-300 sm:text-base">
              This is how we build products. Let&apos;s build yours.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/products"
                className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
              >
                Explore Products
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200"
              >
                Hire Our Team
              </Link>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}
