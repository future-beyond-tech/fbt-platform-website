import Link from "next/link";
import { defaultMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { Suspense } from "react";
import { SuccessMessage } from "./SuccessMessage";

export const metadata: Metadata = {
  ...defaultMetadata(
    "Spectra - Coming 2026",
    "Your SBOM is lying to you. Static documents. Dynamic threats. FBT is building the bridge between what was built and what is running.",
    "/sbom"
  ),
  title: "FBT | Spectra - Coming 2026",
  description:
    "Your SBOM is lying to you. Static documents. Dynamic threats. FBT is building the bridge between what was built and what is running.",
  robots: "index, follow",
  openGraph: {
    title: "FBT | Your SBOM is lying to you.",
    description: "Spectra. Supply chain security re-architected. Coming 2026.",
    type: "website",
  },
};

export default function SBOMTeaserPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* HERO SECTION */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950/20"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400">
            <span
              className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"
              aria-hidden
            />
            Coming 2026
          </div>

          <h1 className="font-tiempos mb-6 text-5xl font-bold leading-tight sm:text-6xl md:text-7xl">
            Your SBOM is{" "}
            <span className="text-red-400">lying</span> to you.
          </h1>

          <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl md:text-2xl">
            Static documents. Dynamic threats. The gap between &quot;what was
            built&quot; and &quot;what is running&quot; is where security breaks
            down.
          </p>

          <div className="mb-12 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-6 backdrop-blur-sm sm:p-8">
            <p className="mb-2 text-lg font-medium text-emerald-400">
              FBT is building the bridge.
            </p>
            <p className="text-sm text-slate-500 sm:text-base">
              Spectra. Supply chain security re-architected.
            </p>
          </div>

          <Suspense fallback={null}>
            <SuccessMessage />
          </Suspense>

          <form
            action="/api/waitlist"
            method="POST"
            className="mx-auto mb-6 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <input type="hidden" name="source" value="sbom" />
            <input
              type="email"
              name="email"
              placeholder="you@company.com"
              required
              className="flex-1 rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white placeholder-slate-500 transition-colors focus:border-emerald-500 focus:outline-none"
            />
            <button
              type="submit"
              className="whitespace-nowrap rounded-lg bg-emerald-500 px-6 py-3 font-medium text-white transition-colors hover:bg-emerald-600"
            >
              Notify Me at Launch
            </button>
          </form>

          <p className="text-xs text-slate-600">
            No spam. Unsubscribe anytime. We respect your inbox.
          </p>

          <div className="mt-16 border-t border-slate-800 pt-8">
            <p className="text-sm text-slate-500">
              From the team behind{" "}
              <Link
                href="/products/zentra"
                className="text-emerald-400 transition-colors hover:text-emerald-300"
              >
                Zentra
              </Link>
            </p>
          </div>
        </div>

        <div
          aria-hidden
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-slate-600"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* PROBLEM DEEP DIVE */}
      <section className="bg-slate-900 px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-tiempos mb-16 text-center text-3xl font-bold sm:text-4xl">
            The gap no one talks about
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-8">
              <h3 className="mb-4 text-lg font-bold text-red-400">
                Static SBOMs
              </h3>
              <ul className="space-y-3 text-sm text-slate-400">
                <li className="flex items-start gap-3">
                  <span className="text-red-400">×</span>
                  Tell you what was built at compile time
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400">×</span>
                  Become outdated immediately
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400">×</span>
                  Can&apos;t see runtime reality
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400">×</span>
                  Drown teams in false positives
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-8">
              <h3 className="mb-4 text-lg font-bold text-emerald-400">
                What you actually need
              </h3>
              <ul className="space-y-3 text-sm text-slate-400">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400">→</span>
                  See what&apos;s running in production
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400">→</span>
                  Know which vulnerabilities matter
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400">→</span>
                  Live documents, not dead exports
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400">→</span>
                  Actionable intelligence, not noise
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-slate-500">
              FBT is closing this gap.{" "}
              <a
                href="#waitlist"
                className="text-emerald-400 transition-colors hover:text-emerald-300"
              >
                Be first to see how →
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        id="waitlist"
        className="bg-slate-950 px-6 py-20"
        aria-labelledby="waitlist-heading"
      >
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="waitlist-heading"
            className="font-tiempos mb-4 text-3xl font-bold"
          >
            Get notified at launch
          </h2>
          <p className="mb-8 text-slate-400">
            Join the waitlist. No spam, just a heads up when we&apos;re ready.
          </p>

          <form
            action="/api/waitlist"
            method="POST"
            className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <input type="hidden" name="source" value="sbom" />
            <input
              type="email"
              name="email"
              placeholder="you@company.com"
              required
              className="flex-1 rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-lg bg-emerald-500 px-6 py-3 font-medium text-white transition-colors hover:bg-emerald-600"
            >
              Join Waitlist
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
