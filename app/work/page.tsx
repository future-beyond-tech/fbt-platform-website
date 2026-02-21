import Link from "next/link";
import Container from "@/components/layout/Container";
import { defaultMetadata } from "@/lib/seo";

const caseStudies = [
  {
    title: "How We Secured a FinTech API Processing $2M Daily",
    href: "/work/fintech-security",
    summary:
      "Threat modeling, architecture redesign, and security automation for a high-growth payments platform.",
  },
  {
    title: "How We Scaled a Manufacturing AI Vision Pipeline",
    href: "/work/manufacturing-ai",
    summary:
      "A resilient edge-to-cloud computer vision pipeline with measurable gains in quality and uptime.",
  },
];

export const metadata = defaultMetadata(
  "Case Studies",
  "Real-world examples of FBT security and architecture engagements across fintech and manufacturing AI.",
  "/work"
);

export default function WorkPage() {
  return (
    <section className="py-20 sm:py-24 lg:py-32" aria-labelledby="work-heading">
      <Container>
        <div className="mx-auto max-w-4xl space-y-10">
          <header className="space-y-4">
            <p className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400 sm:text-sm">
              Client Outcomes
            </p>
            <h1
              id="work-heading"
              className="text-2xl font-semibold text-slate-900 dark:text-slate-50 sm:text-3xl"
            >
              Case Studies
            </h1>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
              Selected examples of security-first architecture work and measurable
              engineering outcomes.
            </p>
          </header>

          <div className="grid gap-6">
            {caseStudies.map((study) => (
              <article
                key={study.href}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-8"
              >
                <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100 sm:text-xl">
                  {study.title}
                </h2>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 sm:text-base">
                  {study.summary}
                </p>
                <Link
                  href={study.href}
                  className="mt-5 inline-flex min-h-[44px] items-center justify-center rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200"
                >
                  See Case Study
                </Link>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
