import Container from "@/components/layout/Container";
import { defaultMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/siteConfig";
import AssessmentForm from "./AssessmentForm";

const assessmentTitle = "Free Architecture Assessment";
const assessmentDescription =
  "Get a free architecture scorecard. We analyze your current setup and identify 3 critical improvements for scale, security, and cost optimization.";
const baseMeta = defaultMetadata(assessmentTitle, assessmentDescription, "/assessment");

export const metadata = {
  ...baseMeta,
  openGraph: {
    ...baseMeta.openGraph,
    title: `${assessmentTitle} | ${siteConfig.name}`,
    description: "Discover your architecture readiness score in 5 minutes",
  },
};

const valueProps = [
  "Architecture readiness scorecard tailored to your stack",
  "3 critical improvements for scale, security, and cost",
  "30-minute follow-up review to prioritize next steps",
];

const trustBadges = [
  "SOC 2 & compliance readiness",
  "Clean Architecture & microservices",
  "Security & vulnerability assessment",
];

export default function AssessmentPage() {
  return (
    <section
      className="py-20 sm:py-24 lg:py-32"
      aria-labelledby="assessment-heading"
    >
      <Container>
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-10">
          <div className="space-y-8">
            <header className="space-y-4">
              <p className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400 sm:text-sm">
                Free Assessment
              </p>
              <h1
                id="assessment-heading"
                className="text-2xl font-semibold text-slate-900 dark:text-slate-50 sm:text-3xl lg:text-4xl"
              >
                Discover Your Architecture Readiness Score
              </h1>
              <p className="max-w-xl text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
                We analyze your current setup and identify 3 critical improvements
                for scale, security, and cost optimization. For startups scaling
                past product-market fit. Limited to 5 assessments per month.
              </p>
            </header>

            <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
              200+ engineering leaders assessed
            </p>

            <div>
              <h2 className="text-base font-semibold text-slate-900 dark:text-slate-100 sm:text-lg">
                What you get
              </h2>
              <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-300 sm:text-base">
                {valueProps.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-emerald-600 dark:text-emerald-400" aria-hidden>
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900/40 sm:p-6">
              <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-100 sm:text-base">
                We cover
              </h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {trustBadges.map((badge) => (
                  <li
                    key={badge}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
                  >
                    {badge}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:sticky lg:top-24 lg:self-start">
            <AssessmentForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
