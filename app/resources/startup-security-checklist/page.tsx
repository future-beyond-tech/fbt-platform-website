import Link from "next/link";
import Container from "@/components/layout/Container";
import JsonLd from "@/components/seo/JsonLd";
import LeadMagnetForm from "../LeadMagnetForm";
import { defaultMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/siteConfig";
import { breadcrumbSchema } from "@/lib/structuredData";

const title =
  "Startup Security Checklist: 50-Point Framework for SOC 2 Readiness";
const description =
  "Free 27-point startup security checklist. Why startups fail security audits, how to use the framework, and what to fix before your next audit or funding round.";

export const metadata = defaultMetadata(title, description, "/resources/startup-security-checklist");

const previewChecklistItems = [
  "Define trust boundaries between customer-facing APIs and internal services.",
  "Validate secrets rotation cadence for production and staging environments.",
  "Enforce CI checks for dependency vulnerabilities before every deploy.",
  "Document and test authorization policy at API and domain layers.",
  "Ensure no secrets or PII in logs, traces, or error messages.",
  "Run lightweight threat modeling for new high-impact features.",
  "Assign ownership for dependency updates by service or module.",
  "Implement pre-commit or CI secret scanning.",
  "Verify cross-tenant and role-escalation test coverage.",
  "Establish incident response and communication playbooks.",
];

export default function StartupSecurityChecklistResourcePage() {
  const breadcrumbStructured = breadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Resources", url: `${siteConfig.url}/resources` },
    { name: "Startup Security Checklist", url: `${siteConfig.url}/resources/startup-security-checklist` },
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
                Startup Security Checklist: 50-Point Framework for SOC 2
                Readiness
              </h1>
              <p className="max-w-xl text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
                27 critical checks before your next audit or funding round. Used by
                200+ engineering leaders.
              </p>
            </header>

            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100 sm:text-xl">
              Why Startups Fail Security Audits
            </h2>
            <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300 sm:text-base">
              Most failures come from a small set of repeated gaps: broken
              authorization, secrets in code or config, outdated dependencies,
              sensitive data in logs, and security left until the last moment.
              Our checklist addresses each with concrete, actionable items. For
              the full analysis, see{" "}
              <Link
                href="/blog/startup-security-mistakes-from-50-codebases"
                className="font-medium text-slate-900 underline dark:text-slate-100"
              >
                We Analyzed 50 Startup Codebases
              </Link>{" "}
              and the{" "}
              <Link
                href="/pillars/startup-security-soc2"
                className="font-medium text-slate-900 underline dark:text-slate-100"
              >
                Startup Security & SOC 2 pillar
              </Link>
              .
            </p>

            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100 sm:text-xl">
              The 50-Point Checklist (Preview)
            </h2>
            <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300 sm:text-base">
              Below are the first 10 points. Enter your email to unlock the full
              3-page checklist PDF.
            </p>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300 sm:text-base">
              {previewChecklistItems.map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-slate-500 dark:text-slate-400" aria-hidden>
                    {i + 1}.
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100 sm:text-xl">
              How to Use This Framework
            </h2>
            <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300 sm:text-base">
              Run through the checklist before a fundraise, audit, or
              enterprise deal. Assign owners and target dates for each gap. Pair
              it with our{" "}
              <Link
                href="/resources/soc2-evidence-tracker"
                className="font-medium text-slate-900 underline dark:text-slate-100"
              >
                SOC 2 Evidence Tracker
              </Link>{" "}
              for a full readiness workflow.
            </p>

            <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
              Downloaded by 200+ engineering leaders
            </p>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900/40 sm:p-6">
              <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                Related resources
              </h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <Link
                    href="/resources/soc2-evidence-tracker"
                    className="font-medium text-slate-900 underline dark:text-slate-100"
                  >
                    SOC 2 Evidence Tracker
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/pass-soc-2-in-8-weeks"
                    className="font-medium text-slate-900 underline dark:text-slate-100"
                  >
                    How to Pass SOC 2 in 8 Weeks
                  </Link>
                </li>
                <li>
                  <Link
                    href="/assessment"
                    className="font-medium text-slate-900 underline dark:text-slate-100"
                  >
                    Free Architecture Assessment
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:sticky lg:top-24 lg:self-start">
            <LeadMagnetForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
