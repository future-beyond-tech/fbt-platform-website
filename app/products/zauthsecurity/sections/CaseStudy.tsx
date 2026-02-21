import Container from "@/components/layout/Container";

const proofItems = [
  {
    title: "FBT PG SaaS",
    points: [
      "50+ tenants on waitlist",
      "1,000+ beds modelled in architecture planning",
      "Zero auth-related incidents in internal validation",
      "Tenant isolation enforced by design",
    ],
  },
  {
    title: "Vulnerability Assessment AI",
    points: [
      "Enterprise security platform design baseline",
      "Multi-tenant identity boundaries from day one",
      "SOC 2 aligned security posture",
      "Release window: August 2026",
    ],
  },
] as const;

export function CaseStudy() {
  return (
    <section className="bg-slate-900 py-20 text-white" aria-labelledby="zauth-proof-cases-heading">
      <Container>
        <div className="space-y-12">
          <header className="text-center">
            <h2 id="zauth-proof-cases-heading" className="text-3xl font-semibold">
              Real-World Proof
            </h2>
            <p className="mt-4 text-slate-300">
              ZAuthSecurity powers our own product roadmap. The same architecture
              approach can secure your platform.
            </p>
          </header>

          <div className="grid gap-6 md:grid-cols-2">
            {proofItems.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-slate-700 bg-slate-800 p-8"
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  {item.points.map((point) => (
                    <li key={point}>- {point}</li>
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
