import Link from "next/link";
import Container from "@/components/layout/Container";

export default function ResearchFeature() {
  return (
    <section className="bg-amber-50 py-16 dark:bg-amber-950/10" aria-labelledby="research-feature-heading">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
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
