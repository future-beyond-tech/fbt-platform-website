import Link from "next/link";
import Container from "@/components/layout/Container";
import JsonLd from "@/components/seo/JsonLd";
import { defaultMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/siteConfig";
import { breadcrumbSchema } from "@/lib/structuredData";

const title = "Microservices Readiness Scorecard";
const description =
  "Score your team and architecture before scaling microservices. Deployment, observability, domain boundaries, and cost baselines in one scorecard.";

export const metadata = defaultMetadata(title, description, "/resources/microservices-scorecard");

export default function MicroservicesScorecardResourcePage() {
  const breadcrumbStructured = breadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Resources", url: `${siteConfig.url}/resources` },
    { name: "Microservices Scorecard", url: `${siteConfig.url}/resources/microservices-scorecard` },
  ]);

  return (
    <section className="py-20 sm:py-24 lg:py-32" aria-labelledby="resource-heading">
      <JsonLd data={breadcrumbStructured} />
      <Container>
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-10">
          <div className="space-y-8">
            <header className="space-y-4">
              <Link
                href="/resources"
                className="text-sm font-medium text-slate-600 underline decoration-slate-300 underline-offset-2 hover:text-slate-900 dark:text-slate-400 dark:decoration-slate-700 dark:hover:text-slate-100"
              >
                All resources
              </Link>
              <h1
                id="resource-heading"
                className="text-2xl font-semibold text-slate-900 dark:text-slate-50 sm:text-3xl lg:text-4xl"
              >
                Microservices Readiness Scorecard
              </h1>
              <p className="max-w-xl text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
                Score deployment frequency, rollback time, tracing coverage,
                domain ownership, and failure-blast radius before adding more
                services.
              </p>
            </header>

            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100 sm:text-xl">
              Why Score Readiness?
            </h2>
            <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300 sm:text-base">
              Teams that split a monolith before they have observability and
              deployment discipline often see p95 latency and incident rate
              worsen. The scorecard helps you decide when and how to evolve your
              architecture. For the full framework, see our{" "}
              <Link href="/pillars/microservices-scale-readiness" className="font-medium text-slate-900 underline dark:text-slate-100">
                Microservices Scale Readiness pillar
              </Link>{" "}
              and{" "}
              <Link href="/blog/microservices-architecture-fail-at-scale" className="font-medium text-slate-900 underline dark:text-slate-100">
                Why Your Microservices Will Fail at Scale
              </Link>
              .
            </p>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900/40 sm:p-8">
              <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                Get the scorecard
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Request the Microservices Scorecard and we&apos;ll send it to
                you. Or book a free architecture assessment for a tailored
                readiness review.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-slate-900 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200"
                >
                  Request Scorecard
                </Link>
                <Link
                  href="/assessment"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
                >
                  Free Assessment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
