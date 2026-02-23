import Container from "@/components/layout/Container";
import TrackedCtaLink from "@/components/analytics/TrackedCtaLink";

const services = [
  {
    icon: "A1",
    title: "Custom Auth Development",
    description:
      "Build a Zentra-equivalent identity foundation for your stack with OAuth 2.0, OIDC, MFA, RBAC, and audit controls.",
    timeline: "8-12 weeks",
    investment: "From $80K",
  },
  {
    icon: "A2",
    title: "Security Architecture Review",
    description:
      "Audit your current authentication implementation and receive a prioritized remediation roadmap.",
    timeline: "2-3 weeks",
    investment: "From $15K",
  },
  {
    icon: "A3",
    title: "Identity Modernization",
    description:
      "Migrate legacy identity systems to modern standards with controlled rollout and zero-downtime planning.",
    timeline: "12-16 weeks",
    investment: "From $120K",
  },
] as const;

export function Services() {
  return (
    <section className="bg-slate-50 py-20 dark:bg-slate-900/50" aria-labelledby="zentra-services-heading">
      <Container>
        <div className="space-y-12">
          <header className="mx-auto max-w-3xl text-center">
            <h2
              id="zentra-services-heading"
              className="text-3xl font-semibold text-slate-900 dark:text-slate-100"
            >
              How We Help You
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
              Three engagement paths, all backed by architecture patterns proven
              in production environments.
            </p>
          </header>

          <div className="grid gap-6 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="flex flex-col rounded-xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900"
              >
                <p className="text-3xl" aria-hidden="true">
                  {service.icon}
                </p>
                <h3 className="mt-4 text-xl font-semibold text-slate-900 dark:text-slate-100">
                  {service.title}
                </h3>
                <p className="mt-3 flex-grow text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {service.description}
                </p>

                <div className="mt-6 space-y-2 rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm dark:border-slate-700 dark:bg-slate-800/50">
                  <p className="flex items-center justify-between">
                    <span className="text-slate-500 dark:text-slate-400">
                      Timeline
                    </span>
                    <span className="font-semibold text-slate-900 dark:text-slate-100">
                      {service.timeline}
                    </span>
                  </p>
                  <p className="flex items-center justify-between">
                    <span className="text-slate-500 dark:text-slate-400">
                      Investment
                    </span>
                    <span className="font-semibold text-slate-900 dark:text-slate-100">
                      {service.investment}
                    </span>
                  </p>
                </div>

                <TrackedCtaLink
                  href="/contact"
                  eventName="cta_click"
                  eventParams={{
                    page: "/products/zentra",
                    type: "schedule-consultation",
                    service: service.title,
                  }}
                  className="mt-6 inline-flex min-h-[44px] items-center justify-center rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200"
                >
                  Schedule Consultation
                </TrackedCtaLink>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
