import Link from "next/link";
import Container from "@/components/layout/Container";
import JsonLd from "@/components/seo/JsonLd";
import { defaultMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/siteConfig";
import { breadcrumbSchema } from "@/lib/structuredData";

const title = "Microservices Scale Readiness: Scorecard, Anti-Patterns & Migration";
const description =
  "Data-backed framework for microservices scalability. Readiness scorecard, 7 anti-patterns that break scale, migration sequencing, and cost baselines for startups.";

export const metadata = defaultMetadata(title, description, "/pillars/microservices-scale-readiness");

export default function MicroservicesScaleReadinessPillarPage() {
  const breadcrumbStructured = breadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Pillars", url: `${siteConfig.url}/pillars/microservices-scale-readiness` },
    { name: "Microservices Scale Readiness", url: `${siteConfig.url}/pillars/microservices-scale-readiness` },
  ]);

  return (
    <article className="py-20 sm:py-24 lg:py-32" aria-labelledby="pillar-heading">
      <JsonLd data={breadcrumbStructured} />
      <Container>
        <div className="mx-auto max-w-3xl">
          <header className="space-y-4">
            <Link
              href="/blog"
              className="text-sm font-medium text-slate-600 underline decoration-slate-300 underline-offset-2 hover:text-slate-900 dark:text-slate-400 dark:decoration-slate-700 dark:hover:text-slate-100"
            >
              Blog &amp; Pillars
            </Link>
            <h1
              id="pillar-heading"
              className="text-2xl font-semibold text-slate-900 dark:text-slate-50 sm:text-3xl lg:text-4xl"
            >
              Microservices Scale Readiness
            </h1>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
              A practical framework for teams that have adopted—or are considering—microservices. Based on patterns we see across dozens of codebases and production environments.
            </p>
          </header>

          <div className="mt-10 space-y-8 text-sm leading-relaxed text-slate-700 dark:text-slate-300 sm:text-base">
            <p>
              Most microservices scalability problems are not about technology choice; they are about readiness. Teams split a monolith before they have observability, deployment discipline, or clear domain boundaries. This pillar ties together a <strong>readiness scorecard</strong>, the <strong>seven anti-patterns</strong> that most often break scale, <strong>migration sequencing</strong>, and <strong>cost baselines</strong> so you can decide when and how to evolve your architecture.
            </p>

            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100 sm:text-xl">
              Readiness Scorecard
            </h2>
            <p>
              Before adding more services, score yourself on: deployment frequency and rollback time, cross-service tracing coverage, domain ownership clarity, and failure-blast radius. Teams that score below a minimum threshold consistently see p95 latency and incident rate worsen after further splitting. We provide a downloadable <Link href="/resources/microservices-scorecard" className="font-medium text-slate-900 underline dark:text-slate-100">Microservices Scorecard</Link> to run this assessment.
            </p>

            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100 sm:text-xl">
              Seven Anti-Patterns That Break Scale
            </h2>
            <p>
              Distributed monolith behavior, shared-database coupling, missing idempotency and retry policies, unclear service boundaries, observability gaps, deployment bottlenecks, and cost sprawl from over-provisioning. Each has measurable indicators and remediation steps. For a deep dive with real metrics, read <Link href="/blog/microservices-architecture-fail-at-scale" className="font-medium text-slate-900 underline dark:text-slate-100">Why Your Microservices Architecture Will Fail at Scale</Link>.
            </p>

            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100 sm:text-xl">
              Migration Sequencing
            </h2>
            <p>
              The right order matters: extract high-change, well-bounded domains first; introduce contracts and run dual-write where needed; then decompose the core. Skipping to “split everything” leads to coordination overload and regression risk. We help teams sequence migrations so each step delivers value without blocking the rest of the system.
            </p>

            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100 sm:text-xl">
              Cost Baselines
            </h2>
            <p>
              Microservices can reduce or increase cost depending on how they are operated. We use baselines for compute, data transfer, and operational overhead so you can compare “before and after” and set targets. This prevents surprise cloud bills and aligns architecture decisions with business constraints.
            </p>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900/40 sm:p-8">
              <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                Next steps
              </h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <Link href="/resources/microservices-scorecard" className="font-medium text-slate-900 underline dark:text-slate-100">
                    Download the Microservices Scorecard
                  </Link>
                </li>
                <li>
                  <Link href="/assessment" className="font-medium text-slate-900 underline dark:text-slate-100">
                    Book a free Architecture Assessment
                  </Link> — we analyze your current setup and identify 3 critical improvements.
                </li>
                <li>
                  <Link href="/blog/microservices-architecture-fail-at-scale" className="font-medium text-slate-900 underline dark:text-slate-100">
                    Read: Why Your Microservices Will Fail at Scale
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </article>
  );
}
