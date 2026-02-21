import Container from "@/components/layout/Container";
import TrackedCtaLink from "@/components/analytics/TrackedCtaLink";
import { SecurityChecklistModalTrigger } from "@/components/lead-magnets/SecurityChecklistModal";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-24 text-white lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-72px] top-[-72px] h-80 w-80 rounded-full bg-emerald-500/15 blur-3xl"
      />
      <Container>
        <div className="max-w-3xl">
          <p className="inline-flex rounded-full border border-emerald-400 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-300">
            Security Engineering
          </p>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Enterprise Authentication,
            <span className="text-emerald-400"> Architected</span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-slate-300 sm:text-xl">
            We built <strong>ZAuthSecurity</strong> to support high-stakes product
            environments. Now we design custom identity systems for companies
            that cannot afford security gaps, lockouts, or compliance failures.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <TrackedCtaLink
              href="/assessment"
              eventName="cta_click"
              eventParams={{
                page: "/products/zauthsecurity",
                type: "architecture-review",
                section: "hero",
              }}
              className="inline-flex min-h-[48px] items-center justify-center rounded-lg bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-emerald-400"
            >
              Book Architecture Review
            </TrackedCtaLink>
            <SecurityChecklistModalTrigger
              source="zauthsecurity-hero"
              buttonLabel="Download Security Standards"
              className="inline-flex min-h-[48px] items-center justify-center rounded-lg border border-slate-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
