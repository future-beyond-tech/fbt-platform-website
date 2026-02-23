import Container from "@/components/layout/Container";
import Link from "next/link";
import { defaultMetadata } from "@/lib/seo";
import ShareButton from "@/components/ShareButton";
import {
  FounderImageHero,
  FounderImageAvatar,
} from "@/components/about/FounderImage";

export const metadata = defaultMetadata(
  "About",
  "Learn about Future Beyond Technology's security-first engineering philosophy and long-term product mindset.",
  "/about"
);

export default function AboutPage() {
  return (
    <main>
      <section className="py-20 sm:py-24 lg:py-32" aria-labelledby="about-heading">
        <Container>
          <div className="mx-auto max-w-3xl space-y-8 sm:space-y-10">
            <header>
              <p className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400 sm:text-sm">
                Who we are
              </p>
              <h1
                id="about-heading"
                className="mt-3 text-2xl font-semibold text-slate-900 dark:text-slate-50 sm:text-3xl"
              >
                About FBT
              </h1>
            </header>

            <div className="space-y-6 text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
              <p>
                FBT (Future Beyond Technology) was founded with a clear purpose:
                to build secure, scalable, and intelligent technology systems
                that stand the test of time.
              </p>
              <p>
                We believe strong engineering, security-first thinking, and
                deliberate architectural decisions are essential to building
                technology that organizations can trust.
              </p>
              <p>
                Our work focuses on long-term impact - helping startups and
                security-critical organizations grow with confidence, today and
                in the future.
              </p>
              <p>
                We also build our own products to validate our engineering
                standards in real execution. Our RentFlow and
                VulnAI platform are active examples of how
                we implement Clean Architecture, CQRS, multi-tenancy, and
                security-first design in production-ready software.
              </p>
            </div>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <Link
                href="/how-we-work"
                className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
              >
                See How We Work
              </Link>
              <Link
                href="/assessment"
                className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200"
              >
                Book Assessment
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 dark:bg-slate-950 sm:py-24" aria-labelledby="origin-story-heading">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800">
                <FounderImageHero />
              </div>
              <div className="absolute -bottom-5 -right-5 flex h-24 w-24 items-center justify-center rounded-2xl border border-emerald-200 bg-emerald-50 dark:border-emerald-900/40 dark:bg-emerald-900/20">
                <svg
                  className="h-12 w-12 text-emerald-600 dark:text-emerald-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0121 18.382V7.618a1 1 0 01-.553-.894L15 4m0 13V4m0 0L9 7"
                  />
                </svg>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-600 dark:text-emerald-400">
                Our Philosophy
              </p>
              <h2
                id="origin-story-heading"
                className="font-tiempos mt-4 text-3xl font-bold text-slate-900 dark:text-slate-100 sm:text-4xl"
              >
                Built on Architecture.
                <br />
                Designed for Beyond.
              </h2>

              <blockquote className="mt-8 border-l-4 border-emerald-500 pl-6">
                <p className="text-lg italic leading-relaxed text-slate-700 dark:text-slate-300 sm:text-xl">
                  Most teams chase the latest framework. We chase the principles
                  that outlast frameworks. Clean Architecture isn&apos;t a
                  buzzword for us&mdash;it&apos;s how we sleep at night knowing
                  our systems will still run in 2030.
                </p>
              </blockquote>

              <p className="mt-7 text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
                Every product we&apos;ve built&mdash;ZAuthSecurity, RentFlow,
                VulnAI&mdash;started with the same
                question: &quot;Will this architecture survive 5 years of
                scale?&quot; If the answer isn&apos;t an immediate yes, we
                redesign until it is.
              </p>

              <div className="mt-7 flex items-center gap-4">
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-slate-200 dark:border-slate-700">
                  <FounderImageAvatar />
                </div>
                <div>
                  <p className="text-base font-semibold text-slate-900 dark:text-slate-100">
                    Feroze Basha
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Founder and Lead Engineer, FBT
                  </p>
                </div>
              </div>

              <div className="mt-8 border-t border-slate-200 pt-6 dark:border-slate-800">
                <p className="mb-4 text-sm text-slate-500 dark:text-slate-400">
                  Share our philosophy:
                </p>
                <ShareButton
                  text={`"Ideas don't fall into place. They're architected. We engineer what others imagine." — Feroze Basha, FBT`}
                  url="https://futurebeyondtech.com/about"
                  quoteId="engineering_authority_v1"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
