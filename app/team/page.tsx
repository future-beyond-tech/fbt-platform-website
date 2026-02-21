import Container from "@/components/layout/Container";
import Link from "next/link";
import Team from "@/components/home/Team";
import { defaultMetadata } from "@/lib/seo";

export const metadata = defaultMetadata(
  "Team",
  "Meet the FBT team building secure, enterprise-grade SaaS platforms and client systems.",
  "/team"
);

export default function TeamPage() {
  return (
    <>
      <section className="pt-20 sm:pt-24 lg:pt-32" aria-labelledby="team-page-heading">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400 sm:text-sm">
              Company
            </p>
            <h1
              id="team-page-heading"
              className="mt-3 text-2xl font-semibold text-slate-900 dark:text-slate-50 sm:text-3xl"
            >
              Team
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
              Engineers and operators behind our consulting engagements and product
              platforms.
            </p>
          </div>
        </Container>
      </section>
      <Team />
      <section className="pb-20 sm:pb-24 lg:pb-28">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/about"
                className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
              >
                Back to About
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200"
              >
                Contact
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
