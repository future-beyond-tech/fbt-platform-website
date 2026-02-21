import Link from "next/link";
import Container from "@/components/layout/Container";
import { LatestMediumArticles } from "@/components/LatestMediumArticles";

export default async function LatestMediumSection() {
  return (
    <section className="bg-white py-16 dark:bg-slate-950 sm:py-20">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-slate-100">
              Latest From Medium
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 sm:text-base">
              Engineering insights from the FBT team.
            </p>
          </div>
          <Link
            href="/insights"
            className="hidden min-h-[44px] items-center justify-center rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 sm:inline-flex"
          >
            View all
          </Link>
        </div>

        <div className="mt-8">
          <LatestMediumArticles limit={3} location="homepage" />
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/insights"
            className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            View all insights
          </Link>
        </div>
      </Container>
    </section>
  );
}
