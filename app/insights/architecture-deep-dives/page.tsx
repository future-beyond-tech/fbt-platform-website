import Link from "next/link";
import Container from "@/components/layout/Container";
import { defaultMetadata } from "@/lib/seo";

const deepDives = [
  {
    title: "PG SaaS Platform Architecture",
    description:
      "Clean Architecture, CQRS, multi-tenancy, and event-driven billing decisions.",
    href: "/products/pg-management#technical-architecture",
  },
  {
    title: "Vulnerability AI Platform Architecture",
    description:
      "Microservices, AI processing pipeline, tenant security, and Kubernetes deployment model.",
    href: "/products/vulnerability-ai#architecture-overview",
  },
  {
    title: "Microservices at Scale",
    description:
      "Where startup microservices fail and how to enforce reliable boundaries and delivery speed.",
    href: "/blog/microservices-architecture-fail-at-scale",
  },
];

export const metadata = defaultMetadata(
  "Architecture Deep Dives",
  "Detailed architecture breakdowns from FBT product platforms and engineering decisions.",
  "/insights/architecture-deep-dives"
);

export default function ArchitectureDeepDivesPage() {
  return (
    <section
      className="py-20 sm:py-24 lg:py-32"
      aria-labelledby="architecture-deep-dives-heading"
    >
      <Container>
        <div className="mx-auto max-w-5xl space-y-10">
          <header className="space-y-4">
            <p className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400 sm:text-sm">
              Insights
            </p>
            <h1
              id="architecture-deep-dives-heading"
              className="text-2xl font-semibold text-slate-900 dark:text-slate-50 sm:text-3xl"
            >
              Architecture Deep Dives
            </h1>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
              Technical walkthroughs of architecture decisions from real systems.
            </p>
          </header>

          <div className="grid gap-5">
            {deepDives.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-8"
              >
                <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100 sm:text-xl">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 sm:text-base">
                  {item.description}
                </p>
                <Link
                  href={item.href}
                  className="mt-5 inline-flex min-h-[44px] items-center justify-center rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200"
                >
                  See Architecture
                </Link>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
