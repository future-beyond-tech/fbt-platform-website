import Link from "next/link";
import Container from "@/components/layout/Container";
import TrackedExternalLink from "@/components/TrackedExternalLink";
import { rentFlowOfficialUrl, investorBriefUrl } from "@/lib/siteConfig";

/**
 * Flagship product section: positions RentFlow as FBT's first vertical
 * infrastructure platform. Placed directly below Hero for clear hierarchy.
 */
export default function FlagshipProductRentFlow() {
  return (
    <section
      className="relative border-t border-slate-800 bg-slate-900/60 py-20 sm:py-24 lg:py-28"
      aria-labelledby="flagship-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-slate-950/50 to-transparent"
      />
      <Container>
        <div className="mx-auto max-w-4xl">
          <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-emerald-400/90 sm:text-sm">
            Flagship Product
          </p>
          <h2
            id="flagship-heading"
            className="mt-3 text-center font-tiempos text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            RentFlow
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-slate-300 sm:text-lg">
            India&apos;s first{" "}
            <Link
              href="/products/pg-management"
              className="font-medium text-emerald-400 underline decoration-emerald-500/50 underline-offset-2 transition-colors hover:text-emerald-300"
            >
              usage-based rental operating system
            </Link>{" "}
            for PG &amp; co-living infrastructure. Multi-tenant architecture,
            event-driven billing, built for scale from one property to 1,000+.
          </p>

          <ul className="mx-auto mt-8 flex max-w-xl flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-slate-400 sm:gap-x-10">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" aria-hidden />
              Multi-tenant architecture
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" aria-hidden />
              Event-driven billing
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" aria-hidden />
              Scale: 1 → 1,000+ properties
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" aria-hidden />
              Infrastructure-first
            </li>
          </ul>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
            <TrackedExternalLink
              href={rentFlowOfficialUrl}
              className="inline-flex min-h-[48px] items-center justify-center rounded-lg bg-emerald-500 px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-emerald-400 focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
              eventName="rentflow_official_click"
              eventParams={{ cta: "explore_rentflow", location: "flagship_section" }}
            >
              Explore RentFlow
            </TrackedExternalLink>
            <Link
              href={investorBriefUrl}
              className="inline-flex min-h-[48px] items-center justify-center rounded-lg border border-slate-600 bg-transparent px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-slate-800 focus-visible:ring-2 focus-visible:ring-slate-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            >
              Request Investor Brief
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
