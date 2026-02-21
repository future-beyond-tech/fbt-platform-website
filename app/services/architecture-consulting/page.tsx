import Link from "next/link";
import Container from "@/components/layout/Container";
import { defaultMetadata } from "@/lib/seo";

export const metadata = defaultMetadata(
  "Architecture Consulting Service",
  "Architecture consulting for teams building secure, scalable systems with long-term maintainability.",
  "/services/architecture-consulting"
);

export default function ArchitectureConsultingPage() {
  return (
    <section
      className="py-20 sm:py-24 lg:py-32"
      aria-labelledby="architecture-consulting-heading"
    >
      <Container>
        <div className="mx-auto max-w-4xl space-y-8">
          <header className="space-y-4">
            <p className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400 sm:text-sm">
              Service
            </p>
            <h1
              id="architecture-consulting-heading"
              className="text-2xl font-semibold text-slate-900 dark:text-slate-50 sm:text-3xl"
            >
              Architecture Consulting
            </h1>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
              We help teams define scalable architecture boundaries, security
              controls, and delivery guardrails before complexity grows.
            </p>
          </header>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-8">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100 sm:text-xl">
              Outcomes we optimize for
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-300 sm:text-base">
              <li>- Clear domain boundaries and ownership</li>
              <li>- Safer deployment and rollback strategy</li>
              <li>- Performance and scalability by design</li>
              <li>- Security controls aligned to business risk</li>
            </ul>
            <Link
              href="/contact"
              className="mt-5 inline-flex min-h-[44px] items-center justify-center rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200"
            >
              Book Assessment
            </Link>
          </article>
        </div>
      </Container>
    </section>
  );
}
