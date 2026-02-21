"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Container from "@/components/layout/Container";

declare global {
  interface Window {
    gtag?: (
      command: "event",
      eventName: string,
      params?: Record<string, string | number>
    ) => void;
  }
}

const HERO_VARIANT_KEY = "fbt_home_hero_variant";
const HERO_VARIANTS = {
  A: {
    heading: "We Build Enterprise SaaS That Lasts",
    subheading:
      "Product engineering studio behind two mission-critical platforms. We ship multi-tenant, security-first systems and help you do the same.",
  },
  B: {
    heading: "We Build and Ship Enterprise SaaS",
    subheading:
      "Product engineering studio behind two mission-critical platforms. We build multi-tenant, security-first systems and help your team deliver with the same discipline.",
  },
} as const;

export default function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const saved = window.localStorage.getItem(HERO_VARIANT_KEY);
    const resolved: "A" | "B" =
      saved === "A" || saved === "B"
        ? saved
        : Math.random() > 0.5
          ? "A"
          : "B";

    window.localStorage.setItem(HERO_VARIANT_KEY, resolved);

    const copy = HERO_VARIANTS[resolved];
    if (headingRef.current) {
      headingRef.current.textContent = copy.heading;
    }
    if (subheadingRef.current) {
      subheadingRef.current.textContent = copy.subheading;
    }

    if (typeof window.gtag === "function") {
      window.gtag("event", "hero_variant_view", { variant: resolved });
    }
  }, []);

  return (
    <section
      id="home-hero"
      className="relative overflow-hidden py-20 sm:py-28 lg:py-32"
      aria-labelledby="hero-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-slate-100/90 via-white to-white dark:from-slate-900 dark:via-slate-950/90 dark:to-slate-950"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-12 -z-10 h-64 w-[85%] -translate-x-1/2 rounded-full bg-sky-100/60 blur-3xl dark:bg-sky-950/40"
      />

      <Container>
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-600 dark:text-slate-400 sm:text-sm">
            Future Beyond Technology
          </p>
          <h1
            id="hero-heading"
            ref={headingRef}
            className="mx-auto mt-4 max-w-4xl text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl md:text-5xl lg:text-6xl"
          >
            {HERO_VARIANTS.A.heading}
          </h1>

          <p
            ref={subheadingRef}
            className="mx-auto mt-5 max-w-3xl text-base text-slate-700 dark:text-slate-300 sm:mt-7 sm:text-lg"
          >
            {HERO_VARIANTS.A.subheading}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:mt-12 sm:flex-row sm:justify-center sm:gap-4">
            <Link
              href="/products"
              className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800 focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200 dark:focus-visible:ring-slate-50 dark:focus-visible:ring-offset-slate-900"
            >
              Explore Our Products
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-400 hover:bg-slate-50 focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:bg-slate-800 dark:focus-visible:ring-slate-50 dark:focus-visible:ring-offset-slate-900"
            >
              Hire Us For Your Build
            </Link>
          </div>

          <div className="mt-10 grid gap-4 text-left sm:mt-12 md:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                FBT PG SaaS
              </h2>
              <p className="mt-1 text-sm font-medium text-slate-700 dark:text-slate-300">
                PG Management
              </p>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
                Beta: Q3 2024
              </p>
              <p className="mt-1 text-sm text-emerald-700 dark:text-emerald-400">
                50+ waitlist
              </p>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                Vulnerability Assessment AI
              </h2>
              <p className="mt-1 text-sm font-medium text-slate-700 dark:text-slate-300">
                Security Automation
              </p>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
                Release: Aug 2026
              </p>
              <p className="mt-1 text-sm text-emerald-700 dark:text-emerald-400">
                Early access open
              </p>
            </article>
          </div>
        </div>
      </Container>
    </section>
  );
}
