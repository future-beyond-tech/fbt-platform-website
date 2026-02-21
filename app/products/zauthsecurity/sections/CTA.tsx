import Container from "@/components/layout/Container";
import TrackedCtaLink from "@/components/analytics/TrackedCtaLink";
import { SecurityChecklistModalTrigger } from "@/components/lead-magnets/SecurityChecklistModal";

export function CTA() {
  return (
    <section className="bg-emerald-500 py-20" aria-labelledby="zauth-cta-heading">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <h2
            id="zauth-cta-heading"
            className="text-3xl font-semibold text-white sm:text-4xl"
          >
            Don&apos;t Let Authentication Become Your Weak Link
          </h2>
          <p className="mt-5 text-lg text-emerald-100">
            Most breaches start with identity gaps. We architect authentication
            systems that protect revenue, users, and compliance outcomes.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <TrackedCtaLink
              href="/assessment"
              eventName="cta_click"
              eventParams={{
                page: "/products/zauthsecurity",
                type: "book-architecture-review",
                section: "final-cta",
              }}
              className="inline-flex min-h-[48px] items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-emerald-700 transition-colors hover:bg-slate-100"
            >
              Book Free Architecture Review
            </TrackedCtaLink>
            <SecurityChecklistModalTrigger
              source="zauthsecurity-final-cta"
              buttonLabel="Download Standards Checklist"
              className="inline-flex min-h-[48px] items-center justify-center rounded-lg border border-white px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-600"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
