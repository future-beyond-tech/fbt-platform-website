import Image from "next/image";
import Container from "@/components/layout/Container";

const capabilities = [
  {
    icon: "S1",
    title: "OAuth 2.0 and OpenID Connect",
    description:
      "Production-ready auth flows that reduce sign-in friction while enforcing strict access controls.",
  },
  {
    icon: "S2",
    title: "Multi-Factor Authentication",
    description:
      "Policy-driven MFA options to protect high-risk actions without slowing trusted users.",
  },
  {
    icon: "S3",
    title: "Role-Based Access Control",
    description:
      "Granular, tenant-aware permissions that keep sensitive data isolated and auditable.",
  },
  {
    icon: "S4",
    title: "Multi-Database Support",
    description:
      "Flexible identity architecture for SQL Server, PostgreSQL, MySQL, and SQLite environments.",
  },
  {
    icon: "S5",
    title: "Complete Audit Trails",
    description:
      "Immutable, compliance-ready event histories for authentication and authorization activity.",
  },
  {
    icon: "S6",
    title: "Security-First Architecture",
    description:
      "Designed for long-term maintainability and controlled change in enterprise systems.",
  },
] as const;

export function Proof() {
  return (
    <section className="py-20 sm:py-24" aria-labelledby="zauth-proof-heading">
      <Container>
        <div className="space-y-12">
          <header className="mx-auto max-w-3xl text-center">
            <h2
              id="zauth-proof-heading"
              className="text-3xl font-semibold text-slate-900 dark:text-slate-100"
            >
              Built for Real Product Pressure
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
              We built ZAuthSecurity because our own platforms needed enterprise
              identity controls from day one. The same architecture discipline is
              now available to your team.
            </p>
          </header>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability) => (
              <article
                key={capability.title}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-colors hover:border-emerald-500 dark:border-slate-800 dark:bg-slate-900"
              >
                <p className="text-2xl" aria-hidden="true">
                  {capability.icon}
                </p>
                <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-slate-100">
                  {capability.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {capability.description}
                </p>
              </article>
            ))}
          </div>

          <div
            id="architecture-diagram"
            className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-6"
          >
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Architecture Overview
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              No source code exposure. This view highlights system boundaries and
              control points used in enterprise deployments.
            </p>
            <div className="mt-4 overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700">
              <Image
                src="/products/zauthsecurity/architecture-overview.svg"
                alt="ZAuthSecurity architecture overview diagram"
                width={1400}
                height={760}
                className="h-auto w-full"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
