import Link from "next/link";
import Container from "@/components/layout/Container";

export default function ResearchFeature() {
  return (
    <section className="bg-amber-50 py-16 dark:bg-amber-950/10" aria-labelledby="research-feature-heading">
      <Container>
        <div className="rounded-2xl border border-amber-200 bg-white p-6 shadow-sm dark:border-amber-900/40 dark:bg-slate-900">
          <p className="text-xs font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400">
            New Featured Research
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-slate-100">
            Deep Research: Medical Device Risk Management per ISO 14971
          </h2>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-600 dark:text-slate-400">
            A comprehensive reference on ISO 14971 risk management covering
            planning, analysis, controls, residual risk, post-market
            surveillance, and regulatory alignment across IVD, SaMD, and active
            implantables.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/research/medical-device-risk-management-iso-14971"
              className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200"
            >
              Read ISO 14971 Research
            </Link>
            <Link
              href="/research"
              className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              View All Research
            </Link>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400">
              FBT Research
            </p>
            <h2
              id="research-feature-heading"
              className="mt-2 text-2xl font-semibold text-slate-900 dark:text-slate-100"
            >
              Medical Device Vulnerability Assessment
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-400">
              Comprehensive technical analysis of security assessment
              methodologies for medical devices, including passive scanning,
              firmware analysis, and healthcare-focused CVSS risk scoring.
            </p>
          </div>
          <Link
            href="/research/medical-device-vulnerability-assessment"
            className="inline-flex min-h-[44px] shrink-0 items-center justify-center rounded-lg bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200"
          >
            Read Research
          </Link>
        </div>
      </Container>
    </section>
  );
}
