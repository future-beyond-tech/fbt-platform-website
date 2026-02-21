import Link from "next/link";
import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import PageViewEvent from "@/components/analytics/PageViewEvent";
import { defaultMetadata } from "@/lib/seo";
import { ResearchDownloadModalTrigger } from "@/components/lead-magnets/ResearchDownloadModal";

const title =
  "FBT Research | Security Engineering and Medical Device Cybersecurity";
const description =
  "Original research and technical analysis from FBT engineering. Medical device vulnerability assessment, authentication architecture, and enterprise security practices.";
const baseMetadata = defaultMetadata(title, description, "/research");

export const metadata: Metadata = {
  ...baseMetadata,
  openGraph: {
    ...baseMetadata.openGraph,
    title,
    description,
  },
  twitter: {
    ...baseMetadata.twitter,
    title,
    description,
  },
};

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
      <PageViewEvent pagePath="/research" pageTitle="FBT Research Hub" />

      <section className="bg-slate-900 py-20 text-white sm:py-24">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              FBT Research
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-slate-300">
              Original technical analysis from engineers building enterprise
              security systems in production environments.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20" aria-labelledby="publications-heading">
        <Container>
          <div className="space-y-8">
            <h2
              id="publications-heading"
              className="text-2xl font-semibold text-slate-900 dark:text-slate-100"
            >
              Research Publications
            </h2>

            <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-900">
                  Medical Device Security
                </span>
                <span className="text-sm text-slate-500 dark:text-slate-400">
                  February 2025
                </span>
              </div>

              <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
                Technical Details of Vulnerability Assessments for Medical
                Products
              </h3>

              <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">
                Comprehensive analysis of methodologies, tools, and regulatory
                frameworks for medical device cybersecurity assessments. Includes
                passive network scanning, firmware analysis, penetration testing
                adaptations, and healthcare-focused CVSS scoring.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Vulnerability Assessment",
                  "Medical Devices",
                  "FDA Compliance",
                  "MITRE CVSS",
                  "Penetration Testing",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded bg-slate-100 px-2 py-1 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/research/medical-device-vulnerability-assessment"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200"
                >
                  Read Full Research
                </Link>
                <ResearchDownloadModalTrigger
                  source="research-hub-card"
                  researchTitle="Technical Details of Vulnerability Assessments for Medical Products"
                  buttonLabel="Download Research Kit"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
                />
              </div>
            </article>

            <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center dark:border-slate-700 dark:bg-slate-900/50">
              <p className="text-slate-600 dark:text-slate-400">
                More research publications are in development.
              </p>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                Upcoming topics include OAuth 2.0 security patterns,
                multi-tenant architecture case studies, and AI security
                automation.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-emerald-50 py-16 dark:bg-emerald-950/10">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
              Need Medical Device Security Expertise?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">
              Our research informs our consulting work. We help medical device
              manufacturers implement secure, compliant vulnerability assessment
              programs.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
              >
                Discuss Your Project
              </Link>
              <Link
                href="/services/security-engineering"
                className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-white dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
              >
                Security Services
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
