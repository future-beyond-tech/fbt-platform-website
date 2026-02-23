import Link from "next/link";
import Container from "@/components/layout/Container";
import PageViewEvent from "@/components/analytics/PageViewEvent";
import TrackedCtaLink from "@/components/analytics/TrackedCtaLink";
import TrackedExternalLink from "@/components/TrackedExternalLink";
import { defaultMetadata } from "@/lib/seo";
import { rentFlowOfficialUrl } from "@/lib/siteConfig";

export const metadata = defaultMetadata(
  "FBT Products | Infrastructure-First SaaS Platforms",
  "RentFlow — India's first usage-based rental operating system for PG & co-living. Zentra, VulnAI. Enterprise-grade infrastructure software by FBT.",
  "/products"
);

export default function ProductsPage() {
  return (
    <section
      className="py-20 sm:py-24 lg:py-32"
      aria-labelledby="products-heading"
    >
      <PageViewEvent pagePath="/products" pageTitle="FBT Products Overview" />
      <Container>
        <div className="mx-auto max-w-6xl space-y-12">
          <header className="space-y-4">
            <p className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400 sm:text-sm">
              Infrastructure Products
            </p>
            <h1
              id="products-heading"
              className="text-2xl font-semibold text-slate-900 dark:text-slate-50 sm:text-3xl lg:text-4xl"
            >
              Platforms Built for Scale
            </h1>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
              RentFlow leads as our flagship. Zentra and VulnAI extend our
              infrastructure-first approach. Clean, scalable, enterprise-grade.
            </p>
          </header>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* RentFlow — flagship, first in grid */}
            <article className="order-first rounded-2xl border-2 border-emerald-200 bg-white p-6 shadow-sm dark:border-emerald-800/50 dark:bg-slate-900 sm:p-8 lg:col-span-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-emerald-600 px-2.5 py-1 text-xs font-medium text-white">
                  Flagship
                </span>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  RentFlow
                </span>
              </div>
              <h2 className="mt-2 text-xl font-semibold text-slate-900 dark:text-slate-100 sm:text-2xl">
                Rental infrastructure platform
              </h2>
              <p className="mt-3 text-sm font-medium text-emerald-700 dark:text-emerald-400">
                Status: In Beta (Q3 2026)
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
                India&apos;s first usage-based operating system for PG &amp;
                co-living. Multi-tenant architecture, event-driven billing, scale
                from 1 to 1,000+ properties.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li>- Clean Architecture + CQRS</li>
                <li>- Event-driven billing engine</li>
                <li>- Multi-tenant by design</li>
                <li>- Blue-green deployment</li>
              </ul>
              <p className="mt-3 text-xs text-slate-600 dark:text-slate-400">
                Investor conversations open.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <TrackedExternalLink
                  href={rentFlowOfficialUrl}
                  className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600"
                  eventName="rentflow_official_click"
                  eventParams={{ location: "products_page_card" }}
                >
                  Explore RentFlow
                </TrackedExternalLink>
                <Link
                  href="/products/pg-management"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200"
                >
                  View Details
                </Link>
                <Link
                  href="/products/pg-management#early-access"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-400 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:bg-slate-800"
                >
                  Join Waitlist
                </Link>
              </div>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-8">
              <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                🔐 Zentra
              </p>
              <h2 className="mt-2 text-xl font-semibold text-slate-900 dark:text-slate-100 sm:text-2xl">
                Security Expertise
              </h2>
              <p className="mt-3 text-sm font-medium text-emerald-700 dark:text-emerald-400">
                Status: Available now
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
                Enterprise authentication architecture for teams that need secure
                identity systems without vendor lock-in.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li>- OAuth 2.0 and OIDC architecture</li>
                <li>- MFA and RBAC design</li>
                <li>- Audit and compliance controls</li>
                <li>- Security modernization roadmap</li>
              </ul>
              <div className="mt-6 flex flex-col gap-3">
                <Link
                  href="/products/zentra"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200"
                >
                  View Details
                </Link>
                <Link
                  href="/assessment"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-400 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:bg-slate-800"
                >
                  Book Architecture Review
                </Link>
              </div>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-8">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-slate-300 bg-white px-2.5 py-1 text-xs font-medium text-slate-600 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-400">
                  In Development
                </span>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  🛡 VulnAI
                </span>
              </div>
              <h2 className="mt-2 text-xl font-semibold text-slate-900 dark:text-slate-100 sm:text-2xl">
                Automated Security Intelligence
              </h2>
              <p className="mt-3 text-sm font-medium text-emerald-700 dark:text-emerald-400">
                Status: Release Aug 2026
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
                AI-powered vulnerability prioritization for DevSecOps teams.
                Contextual risk scoring that reduces alert fatigue.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li>- Microservices architecture</li>
                <li>- AI contextual analysis</li>
                <li>- Enterprise RBAC + audit</li>
                <li>- Kubernetes-orchestrated delivery</li>
              </ul>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/products/vulnerability-ai"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200"
                >
                  View Details
                </Link>
                <Link
                  href="/products/vulnerability-ai#early-access"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-400 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:bg-slate-800"
                >
                  Early Access
                </Link>
              </div>
            </article>
          </div>

          <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800/50 sm:p-8">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 sm:text-2xl">
              Why Infrastructure-First?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300 sm:text-base">
              FBT builds vertical infrastructure platforms—not one-off projects.
              RentFlow, VulnAI, and Zentra share the same architecture
              discipline: scalable, secure, and built for long-term leadership.
            </p>
            <TrackedCtaLink
              href="/contact"
              eventName="hire_team_click"
              eventParams={{ source_page: "/products", cta_label: "Contact" }}
              className="mt-5 inline-flex min-h-[44px] items-center justify-center rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200"
            >
              Contact
            </TrackedCtaLink>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 sm:text-2xl">
                Compare Our Platforms
              </h2>
              <Link
                href="/products/compare"
                className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
              >
                Compare Details
              </Link>
            </div>
            <div className="mt-5 overflow-x-auto">
              <table className="w-full min-w-[700px] text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-700">
                    <th className="py-2 font-semibold text-slate-900 dark:text-slate-100">
                      Metric
                    </th>
                    <th className="py-2 font-semibold text-slate-900 dark:text-slate-100">
                      RentFlow
                    </th>
                    <th className="py-2 font-semibold text-slate-900 dark:text-slate-100">
                      Vulnerability AI
                    </th>
                  </tr>
                </thead>
                <tbody className="text-slate-700 dark:text-slate-300">
                  <tr className="border-b border-slate-100 dark:border-slate-800">
                    <td className="py-2">Industry</td>
                    <td className="py-2">Real Estate</td>
                    <td className="py-2">Cybersecurity</td>
                  </tr>
                  <tr className="border-b border-slate-100 dark:border-slate-800">
                    <td className="py-2">Status</td>
                    <td className="py-2">Beta Q3 2026</td>
                    <td className="py-2">Release Aug 2026</td>
                  </tr>
                  <tr className="border-b border-slate-100 dark:border-slate-800">
                    <td className="py-2">Architecture</td>
                    <td className="py-2">Modular Monolith</td>
                    <td className="py-2">Microservices</td>
                  </tr>
                  <tr className="border-b border-slate-100 dark:border-slate-800">
                    <td className="py-2">Core Tech</td>
                    <td className="py-2">.NET 8, CQRS</td>
                    <td className="py-2">.NET 8 + Python AI</td>
                  </tr>
                  <tr className="border-b border-slate-100 dark:border-slate-800">
                    <td className="py-2">Early Access</td>
                    <td className="py-2">Open now</td>
                    <td className="py-2">Open Q1 2026</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
              Common DNA: Clean Architecture, event-driven design, security-first
              controls, DevOps maturity, and enterprise scalability.
            </p>
          </section>
        </div>
      </Container>
    </section>
  );
}
