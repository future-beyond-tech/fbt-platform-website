import Container from "@/components/layout/Container";
import { SecurityChecklistModalTrigger } from "@/components/lead-magnets/SecurityChecklistModal";

const standards = [
  {
    category: "Protocol Compliance",
    items: [
      "OAuth 2.0 RFC 6749",
      "OpenID Connect Core 1.0",
      "PKCE RFC 7636",
      "JWT RFC 7519",
    ],
  },
  {
    category: "Architecture Principles",
    items: [
      "Clean Architecture and domain isolation",
      "Zero Trust identity controls",
      "Defense-in-depth strategy",
      "Audit-by-default design",
    ],
  },
  {
    category: "Operational Security",
    items: [
      "No secrets in code",
      "Automated security testing",
      "Blue-green deployment readiness",
      "Continuous monitoring and alerting",
    ],
  },
] as const;

export function Standards() {
  return (
    <section className="py-20 sm:py-24" aria-labelledby="zauth-standards-heading">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-16">
          <div>
            <h2
              id="zauth-standards-heading"
              className="text-3xl font-semibold text-slate-900 dark:text-slate-100"
            >
              How We Build Security
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              Every system follows enterprise-grade standards designed for
              longevity, compliance, and operational control.
            </p>
            <SecurityChecklistModalTrigger
              source="zauthsecurity-standards"
              buttonLabel="Download Security Standards Checklist"
              className="mt-7 inline-flex min-h-[44px] items-center justify-center rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200"
            />
          </div>

          <div className="space-y-8">
            {standards.map((standard) => (
              <article key={standard.category}>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                  {standard.category}
                </h3>
                <ul className="mt-3 space-y-2">
                  {standard.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-[10px] font-bold text-white"
                      >
                        +
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
