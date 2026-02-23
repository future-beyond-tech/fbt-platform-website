"use client";

import { useEffect } from "react";
import Link from "next/link";
import Container from "@/components/layout/Container";
import TrackedExternalLink from "@/components/TrackedExternalLink";
import { rentFlowOfficialUrl } from "@/lib/siteConfig";

declare global {
  interface Window {
    gtag?: (
      command: "event",
      eventName: string,
      params?: Record<string, string | number>
    ) => void;
  }
}

export default function Hero() {
  useEffect(() => {
    if (typeof window === "undefined" || typeof window.gtag !== "function") {
      return;
    }

    window.gtag("event", "quote_viewed", {
      quote_id: "theyre_architected_hybrid",
      page_path: "/",
    });
  }, []);

  return (
    <section
      id="home-hero"
      className="relative isolate flex min-h-screen flex-col justify-center overflow-hidden bg-slate-950 py-20 px-4 sm:px-6 lg:px-8 sm:py-24 lg:py-28"
      aria-labelledby="hero-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950/30"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <Container>
        <div className="relative mx-auto w-full max-w-6xl">
          <p className="mb-4 text-center text-xs font-medium uppercase tracking-[0.2em] text-slate-400 sm:text-sm">
            Future Beyond Technology
          </p>

          {/* LAYER 1: THE HOOK */}
          <div className="mb-6 text-center">
            <h1
              id="hero-heading"
              className="font-tiempos text-5xl font-bold tracking-tight text-emerald-400 sm:text-6xl md:text-7xl lg:text-8xl"
            >
              <span className="block">Ideas aren&apos;t accidental.</span>
              <span className="block">They&apos;re architected.</span>
            </h1>
          </div>

          {/* LAYER 2: THE CLARITY */}
          <div className="mb-12 text-center">
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-slate-300 sm:text-2xl md:text-3xl">
              Enterprise SaaS &amp; security frameworks{" "}
              <span className="font-medium text-white">
                built for long-term scale.
              </span>
            </p>

            <div className="mt-4 flex items-center justify-center gap-3 text-sm text-slate-500">
              <div className="h-px w-8 bg-slate-700" />
              <span>Feroze Basha, Founder</span>
              <div className="h-px w-8 bg-slate-700" />
            </div>
          </div>

          {/* LAYER 3: THE PROOF (Product Cards) */}
          <div className="mx-auto mb-12 grid max-w-4xl gap-6 md:grid-cols-2">
            {/* RentFlow */}
            <div className="group rounded-xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur transition-colors hover:border-emerald-500/50">
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <h3 className="mb-1 text-lg font-bold text-white">
                    RentFlow
                  </h3>
                  <p className="text-sm text-slate-400">
                    RentFlow Platform
                  </p>
                </div>
                <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-xs font-medium text-emerald-400">
                  Beta Q3 2026
                </span>
              </div>

              <div className="mb-6 space-y-2">
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Multi-tenant architecture
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Event-driven billing
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  50+ waitlist · Official site: rentflow.in
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <TrackedExternalLink
                  href={rentFlowOfficialUrl}
                  className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-400 [&>svg]:group-hover:translate-x-1"
                  eventName="rentflow_official_click"
                  eventParams={{ cta: "hero_primary", location: "hero" }}
                >
                  Visit RentFlow.in
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </TrackedExternalLink>
                <Link
                  href="/products/pg-saas"
                  className="inline-flex min-h-[44px] items-center text-sm font-medium text-emerald-400 transition-colors hover:text-emerald-300 [&>svg]:group-hover:translate-x-1"
                >
                  Our build
                  <svg className="ml-1 h-4 w-4 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* VulnAI */}
            <div className="group rounded-xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur transition-colors hover:border-emerald-500/50">
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <h3 className="mb-1 text-lg font-bold text-white">
                    VulnAI
                  </h3>
                  <p className="text-sm text-slate-400">
                    Security Automation Platform
                  </p>
                </div>
                <span className="rounded-full bg-blue-500/10 px-2 py-1 text-xs font-medium text-blue-400">
                  Aug 2026
                </span>
              </div>

              <div className="mb-6 space-y-2">
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                  AI-powered prioritization
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                  Microservices architecture
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                  Early access open
                </div>
              </div>

              <Link
                href="/products/vulnerability-ai"
                className="inline-flex items-center text-sm font-medium text-blue-400 transition-colors hover:text-blue-300 [&>svg]:group-hover:translate-x-1"
              >
                Get Early Access
                <svg
                  className="ml-1 h-4 w-4 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/products"
              className="inline-flex min-h-[48px] items-center justify-center rounded-lg bg-emerald-500 px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-emerald-600 focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            >
              Explore All Products
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-[48px] items-center justify-center rounded-lg border border-slate-600 bg-transparent px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-slate-800 focus-visible:ring-2 focus-visible:ring-slate-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            >
              Hire FBT For Your Build
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              <span>3 Products in Development</span>
            </div>
            <div className="flex items-center gap-2">
              <div
                className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 [animation-delay:75ms]"
                aria-hidden
              />
              <span>Clean Architecture Specialists</span>
            </div>
            <div className="flex items-center gap-2">
              <div
                className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 [animation-delay:150ms]"
                aria-hidden
              />
              <span>Security-First Engineering</span>
            </div>
          </div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <div
        aria-hidden="true"
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
  );
}
