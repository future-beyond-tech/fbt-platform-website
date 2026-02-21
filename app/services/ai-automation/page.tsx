import Link from "next/link";
import Container from "@/components/layout/Container";
import { defaultMetadata } from "@/lib/seo";

export const metadata = defaultMetadata(
  "AI Automation Service",
  "AI automation services backed by production security intelligence and enterprise integration patterns.",
  "/services/ai-automation"
);

export default function AiAutomationServicePage() {
  return (
    <section
      className="py-20 sm:py-24 lg:py-32"
      aria-labelledby="ai-automation-heading"
    >
      <Container>
        <div className="mx-auto max-w-4xl space-y-8">
          <header className="space-y-4">
            <p className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400 sm:text-sm">
              Service
            </p>
            <h1
              id="ai-automation-heading"
              className="text-2xl font-semibold text-slate-900 dark:text-slate-50 sm:text-3xl"
            >
              AI Automation
            </h1>
          </header>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-8">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100 sm:text-xl">
              AI Integration at Scale
            </h2>
            <p className="mt-3 text-sm text-slate-700 dark:text-slate-300 sm:text-base">
              Our Vulnerability Assessment platform processes thousands of CVEs
              with AI:
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-300 sm:text-base">
              <li>- Contextual risk analysis</li>
              <li>- Natural language queries</li>
              <li>- Automated remediation suggestions</li>
              <li>- Continuous learning</li>
            </ul>
            <p className="mt-4 text-sm text-slate-700 dark:text-slate-300 sm:text-base">
              We can architect similar AI automation for your use case.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/products/vulnerability-ai"
                className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
              >
                See Platform
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
