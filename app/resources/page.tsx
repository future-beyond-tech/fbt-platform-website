import Link from "next/link";
import Container from "@/components/layout/Container";
import { defaultMetadata } from "@/lib/seo";
import LeadMagnetForm from "./LeadMagnetForm";

const previewItems = [
  "Define trust boundaries between customer-facing APIs and internal services.",
  "Validate secrets rotation cadence for production and staging environments.",
  "Enforce CI checks for dependency vulnerabilities before every deploy.",
];

const resourceLinks = [
  { name: "Startup Security Checklist", href: "/resources/startup-security-checklist", featured: true },
  { name: "SOC 2 Evidence Tracker", href: "/resources/soc2-evidence-tracker", featured: false },
  { name: "Microservices Scorecard", href: "/resources/microservices-scorecard", featured: false },
  { name: "OAuth Threat Model", href: "/resources/oauth-threat-model", featured: false },
  { name: "ISO 14971 Checklist", href: "/resources/iso14971-checklist", featured: false },
];

export const metadata = defaultMetadata(
  "Free Resources & Lead Magnets",
  "Startup security checklist, SOC 2 evidence tracker, microservices scorecard, OAuth threat model, and ISO 14971 checklist for engineering leaders.",
  "/resources"
);

export default function ResourcesPage() {
  return (
    <section className="py-20 sm:py-24 lg:py-32" aria-labelledby="resources">
      <Container>
        <div className="mx-auto max-w-5xl space-y-12">
          <header className="space-y-4">
            <p className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400 sm:text-sm">
              Free Resources
            </p>
            <h1
              id="resources"
              className="text-2xl font-semibold text-slate-900 dark:text-slate-50 sm:text-3xl lg:text-4xl"
            >
              Lead Magnets &amp; Frameworks
            </h1>
            <p className="max-w-xl text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
              Checklists, scorecards, and templates to accelerate security and
              architecture readiness. No fluff—actionable frameworks only.
            </p>
          </header>

          <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-10">
            <div className="space-y-5">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100 sm:text-xl">
                The Startup Security Checklist
              </h2>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
                27 critical checks before your next audit or funding round.
              </p>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900/40 sm:p-6">
                <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 sm:text-base">
                  Preview
                </h3>
                <ul className="mt-4 space-y-3">
                  {previewItems.map((item) => (
                    <li
                      key={item}
                      className="rounded-lg border border-dashed border-slate-300 bg-white/80 px-4 py-3 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
                  Enter your email to unlock the full 3-page checklist PDF.
                </p>
              </div>
              <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
                Downloaded by 200+ engineering leaders
              </p>
            </div>
            <div className="lg:sticky lg:top-24 lg:self-start">
              <LeadMagnetForm />
            </div>
          </div>

          <div className="border-t border-slate-200 pt-10 dark:border-slate-800">
            <h2 className="text-base font-semibold text-slate-900 dark:text-slate-100 sm:text-lg">
              All resources
            </h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {resourceLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-[44px] items-center text-sm font-medium text-slate-700 underline decoration-slate-300 underline-offset-2 hover:text-slate-900 dark:text-slate-300 dark:decoration-slate-600 dark:hover:text-slate-100"
                  >
                    {item.name}
                    {item.featured && (
                      <span className="ml-2 text-xs text-slate-500 dark:text-slate-400">
                        (download here)
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
