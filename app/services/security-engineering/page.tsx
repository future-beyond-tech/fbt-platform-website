import Link from "next/link";
import Container from "@/components/layout/Container";
import { defaultMetadata } from "@/lib/seo";

export const metadata = defaultMetadata(
  "Security Engineering Service",
  "Security engineering services backed by our own security platform architecture and implementation standards.",
  "/services/security-engineering"
);

export default function SecurityEngineeringServicePage() {
  return (
    <section
      className="py-20 sm:py-24 lg:py-32"
      aria-labelledby="security-engineering-heading"
    >
      <Container>
        <div className="mx-auto max-w-4xl space-y-8">
          <header className="space-y-4">
            <p className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400 sm:text-sm">
              Service
            </p>
            <h1
              id="security-engineering-heading"
              className="text-2xl font-semibold text-slate-900 dark:text-slate-50 sm:text-3xl"
            >
              Security Engineering
            </h1>
          </header>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-8">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100 sm:text-xl">
              We Practice What We Preach
            </h2>
            <p className="mt-3 text-sm text-slate-700 dark:text-slate-300 sm:text-base">
              Our own security platform (releasing Aug 2026) is built to the
              same standards we recommend to clients:
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-300 sm:text-base">
              <li>- Zero Trust architecture</li>
              <li>- Immutable audit logs</li>
              <li>- Tenant isolation</li>
              <li>- SOC 2 aligned from day one</li>
            </ul>
            <p className="mt-4 text-sm text-slate-700 dark:text-slate-300 sm:text-base">
              We know enterprise security because we are building it.
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
                Book Assessment
              </Link>
            </div>
          </article>

          <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800/40 sm:p-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
              Zentra Proof
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-700 dark:text-slate-300">
              While many firms discuss security in theory, we built{" "}
              <strong>Zentra</strong> as a production-grade identity
              architecture baseline for our own product platforms.
            </p>
            <div className="mt-7 grid gap-4 md:grid-cols-3">
              <article className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900">
                <p className="text-3xl font-semibold text-emerald-600 dark:text-emerald-400">
                  190+
                </p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  C# files of security engineering depth
                </p>
              </article>
              <article className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900">
                <p className="text-3xl font-semibold text-emerald-600 dark:text-emerald-400">
                  10K+
                </p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  auth requests per second architecture target
                </p>
              </article>
              <article className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900">
                <p className="text-3xl font-semibold text-emerald-600 dark:text-emerald-400">
                  0
                </p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  production auth incidents in internal validation
                </p>
              </article>
            </div>
            <Link
              href="/products/zentra"
              className="mt-7 inline-flex min-h-[44px] items-center justify-center rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              See Zentra Details
            </Link>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300">
                <span className="text-lg font-bold">R</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                  Latest Research: Medical Device Security
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
                  Comprehensive analysis of vulnerability assessment methodologies
                  for medical devices, including passive scanning, healthcare
                  risk scoring, and FDA-aligned compliance practices.
                </p>
                <Link
                  href="/research/medical-device-vulnerability-assessment"
                  className="mt-5 inline-flex min-h-[44px] items-center justify-center rounded-lg border border-emerald-300 px-5 py-2.5 text-sm font-semibold text-emerald-700 transition-colors hover:bg-emerald-50 dark:border-emerald-700 dark:text-emerald-300 dark:hover:bg-emerald-900/20"
                >
                  Read the Research
                </Link>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </section>
  );
}
