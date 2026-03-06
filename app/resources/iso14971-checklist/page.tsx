import Link from "next/link";
import Container from "@/components/layout/Container";
import JsonLd from "@/components/seo/JsonLd";
import { defaultMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/siteConfig";
import { breadcrumbSchema } from "@/lib/structuredData";

const title = "ISO 14971 Risk Management Checklist for Medical Devices";
const description =
  "ISO 14971 risk management checklist: hazard identification, risk analysis, risk control, and residual risk for medical device cybersecurity.";

export const metadata = defaultMetadata(title, description, "/resources/iso14971-checklist");

export default function Iso14971ChecklistResourcePage() {
  const breadcrumbStructured = breadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Resources", url: `${siteConfig.url}/resources` },
    { name: "ISO 14971 Checklist", url: `${siteConfig.url}/resources/iso14971-checklist` },
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
                ISO 14971 Risk Management Checklist
              </h1>
              <p className="max-w-xl text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
                A practical checklist for integrating risk management—including
                cybersecurity—into the medical device lifecycle, aligned with
                ISO 14971.
              </p>
            </header>

            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100 sm:text-xl">
              What It Covers
            </h2>
            <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300 sm:text-base">
              Hazard identification, risk analysis and evaluation, risk control
              measures, residual risk acceptance, and production feedback. We
              tie cybersecurity risks into the same framework so your risk
              management file stays coherent. For the full technical treatment,
              see{" "}
              <Link href="/research/medical-device-risk-management-iso-14971" className="font-medium text-slate-900 underline dark:text-slate-100">
                Medical Device Risk Management (ISO 14971)
              </Link>{" "}
              and our{" "}
              <Link href="/pillars/medical-device-cybersecurity" className="font-medium text-slate-900 underline dark:text-slate-100">
                Medical Device Cybersecurity pillar
              </Link>
              .
            </p>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900/40 sm:p-8">
              <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                Get the checklist
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Request the ISO 14971 Checklist and we&apos;ll send it to you.
                For vulnerability assessment methodology, see our{" "}
                <Link href="/research/medical-device-vulnerability-assessment" className="font-medium text-slate-900 underline dark:text-slate-100">
                  Medical Device Vulnerability Assessment
                </Link>{" "}
                research.
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-flex min-h-[44px] items-center justify-center rounded-lg bg-slate-900 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200"
              >
                Request ISO 14971 Checklist
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
