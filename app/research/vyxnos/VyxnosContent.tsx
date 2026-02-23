import Link from "next/link";
import Container from "@/components/layout/Container";
import TrackedExternalLink from "@/components/TrackedExternalLink";
import { vyxnosResearchUrl } from "@/lib/siteConfig";

export default function VyxnosContent() {
  return (
    <article className="min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* Hero */}
      <header className="border-b border-slate-200 bg-slate-900 py-16 text-white dark:border-slate-800 dark:bg-slate-900">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-wider text-teal-300">
            FBT Research · AI-Native Security
          </p>
          <h1 className="mt-4 font-tiempos text-4xl font-bold tracking-tight sm:text-5xl">
            VYXNOS — Autonomous Security Intelligence Platform
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            Market analysis and implementation strategy for AI-native global security
            infrastructure. A product by FBT Technologies.
          </p>
        </Container>
      </header>

      <Container>
        <div className="mx-auto max-w-3xl space-y-12 py-12 sm:py-16">
          {/* Executive summary */}
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
              Executive Summary
            </h2>
            <div className="mt-2 h-1 w-16 bg-teal-600" />
            <p className="mt-6 leading-relaxed text-slate-600 dark:text-slate-400">
              VYXNOS has a unique opportunity to build the first true &quot;step-down transformer&quot; for
              AI-native security infrastructure, converting frontier AI capabilities into deployable,
              autonomous, globally distributed security outcomes. Only 6% of organizations have developed
              an advanced AI security strategy, while 64% lack full visibility into their AI risks —
              creating a critical market gap that VYXNOS is positioned to address.
            </p>
          </section>

          {/* About VYXNOS */}
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
              About VYXNOS
            </h2>
            <div className="mt-2 h-1 w-16 bg-teal-600" />
            <p className="mt-6 leading-relaxed text-slate-600 dark:text-slate-400">
              VYXNOS is an AI-native autonomous security platform built by FBT Technologies. It combines
              predictive defense, edge-native inference, and WASM-based extensibility to deliver global,
              self-evolving security infrastructure. The 20-stage autonomous architecture establishes a
              closed learning loop: observe → extract features → update model → adjust policy → deploy
              globally → monitor effect → repeat.
            </p>
          </section>

          {/* Key differentiators */}
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
              Key Differentiators
            </h2>
            <div className="mt-2 h-1 w-16 bg-teal-600" />
            <ul className="mt-6 space-y-4">
              <li className="flex gap-3">
                <span className="text-teal-600 dark:text-teal-400" aria-hidden>•</span>
                <span className="text-slate-600 dark:text-slate-400">
                  <strong className="text-slate-800 dark:text-slate-200">Edge-native AI inference</strong> — &lt;10ms latency and cold start (WASM) vs 50–200ms cloud round-trip.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal-600 dark:text-teal-400" aria-hidden>•</span>
                <span className="text-slate-600 dark:text-slate-400">
                  <strong className="text-slate-800 dark:text-slate-200">WASM-Native AI plugins</strong> — Sandboxed ONNX execution and customer-extensible security models.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal-600 dark:text-teal-400" aria-hidden>•</span>
                <span className="text-slate-600 dark:text-slate-400">
                  <strong className="text-slate-800 dark:text-slate-200">Autonomous predictive defense</strong> — Closed learning loop with no current market equivalent at Stage 20.
                </span>
              </li>
            </ul>
          </section>

          {/* CTA */}
          <section className="rounded-2xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
              Full research report
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-400">
              The complete market analysis, implementation roadmap, risk mitigation, and success
              metrics are available on the VYXNOS research site.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <TrackedExternalLink
                href={vyxnosResearchUrl}
                className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-teal-700"
                eventName="vyxnos_full_report_click"
                eventParams={{ location: "research_article" }}
              >
                Open full report on VYXNOS →
              </TrackedExternalLink>
              <Link
                href="/research"
                className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
              >
                Back to Research
              </Link>
            </div>
          </section>
        </div>
      </Container>
    </article>
  );
}
