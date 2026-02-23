import Container from "@/components/layout/Container";
import PageViewEvent from "@/components/analytics/PageViewEvent";
import { defaultMetadata } from "@/lib/seo";

const comparisonRows = [
  ["Industry", "Real Estate", "Cybersecurity"],
  ["Target Users", "PG Owners", "Security Teams"],
  ["Status", "Beta Q3 2026", "Release Aug 2026"],
  ["Architecture", "Modular Monolith", "Microservices"],
  ["Key Tech", ".NET 8, CQRS", ".NET 8 + Python AI"],
  [
    "Multi-Tenancy",
    "Shared DB",
    "Shared DB -> Enterprise isolation",
  ],
  ["Early Access", "Open now", "Open Q1 2026"],
] as const;

export const metadata = defaultMetadata(
  "Compare FBT Platforms",
  "Side-by-side comparison of RentFlow (rentflow.in) and VulnAI platforms. RentFlow early access and investor info at rentflow.in.",
  "/products/compare"
);

export default function ProductsComparePage() {
  return (
    <section
      className="py-20 sm:py-24 lg:py-32"
      aria-labelledby="products-compare-heading"
    >
      <PageViewEvent pagePath="/products/compare" pageTitle="Compare FBT Platforms" />
      <Container>
        <div className="mx-auto max-w-5xl space-y-8">
          <header className="space-y-4">
            <p className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400 sm:text-sm">
              Products
            </p>
            <h1
              id="products-compare-heading"
              className="text-2xl font-semibold text-slate-900 dark:text-slate-50 sm:text-3xl"
            >
              Compare Our Platforms
            </h1>
          </header>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-6">
            <table className="w-full min-w-[720px] text-left">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-700">
                  <th className="py-3 text-sm font-semibold text-slate-900 dark:text-slate-100">
                    Category
                  </th>
                  <th className="py-3 text-sm font-semibold text-slate-900 dark:text-slate-100">
                    RentFlow
                  </th>
                  <th className="py-3 text-sm font-semibold text-slate-900 dark:text-slate-100">
                    VulnAI
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr
                    key={row[0]}
                    className="border-b border-slate-100 last:border-b-0 dark:border-slate-800"
                  >
                    <td className="py-3 text-sm font-medium text-slate-900 dark:text-slate-100">
                      {row[0]}
                    </td>
                    <td className="py-3 text-sm text-slate-700 dark:text-slate-300">
                      {row[1]}
                    </td>
                    <td className="py-3 text-sm text-slate-700 dark:text-slate-300">
                      {row[2]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-800/50">
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Common DNA:
            </p>
            <ul className="mt-2 space-y-1 text-sm text-slate-700 dark:text-slate-300">
              <li>✓ Clean Architecture</li>
              <li>✓ Event-driven design</li>
              <li>✓ Security-first controls</li>
              <li>✓ DevOps maturity</li>
              <li>✓ Enterprise scalability</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
