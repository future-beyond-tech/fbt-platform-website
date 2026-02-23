import Link from "next/link";
import Container from "@/components/layout/Container";
import { investorBriefUrl } from "@/lib/siteConfig";

/**
 * Investment positioning at FBT level. Selective, strategic tone.
 * No "Invest Now" or desperate language.
 */
export default function InvestmentPositioning() {
  return (
    <section
      className="border-t border-slate-200 bg-slate-50 py-20 sm:py-24 lg:py-28 dark:border-slate-800 dark:bg-slate-900/40"
      aria-labelledby="invest-infrastructure-heading"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="invest-infrastructure-heading"
            className="font-tiempos text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl"
          >
            Invest in Infrastructure-First Products
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
            FBT builds scalable digital infrastructure. Current focus: RentFlow.
            Select investor conversations are open.
          </p>
          <Link
            href={investorBriefUrl}
            className="mt-8 inline-flex min-h-[48px] items-center justify-center rounded-lg border border-slate-300 bg-white px-8 py-3 text-base font-semibold text-slate-800 transition-colors hover:bg-slate-50 focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800 dark:focus-visible:ring-slate-100 dark:focus-visible:ring-offset-slate-900"
          >
            Request Investor Brief
          </Link>
        </div>
      </Container>
    </section>
  );
}
