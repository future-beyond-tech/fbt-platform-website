import Link from "next/link";
import Container from "@/components/layout/Container";

export default function ZAuthSecurityHighlight() {
  return (
    <section className="bg-slate-50 py-16 dark:bg-slate-900/50" aria-labelledby="zauth-highlight-heading">
      <Container>
        <div className="rounded-2xl bg-slate-900 p-8 text-white sm:p-10 md:p-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="inline-flex rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-950">
                Available Now
              </p>
              <h2
                id="zauth-highlight-heading"
                className="mt-4 text-2xl font-semibold sm:text-3xl"
              >
                ZAuthSecurity
              </h2>
              <p className="mt-3 text-slate-300">
                Enterprise OAuth 2.0 and OIDC architecture built for high-stakes
                product environments. We built it. We can architect yours.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/products/zauthsecurity"
                className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-emerald-400"
              >
                Explore
              </Link>
              <Link
                href="/products/zauthsecurity#architecture-diagram"
                className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-slate-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
              >
                View Architecture
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
