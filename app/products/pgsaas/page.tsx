import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import TrackedCtaLink from "@/components/analytics/TrackedCtaLink";
import TrackedExternalLink from "@/components/TrackedExternalLink";
import { defaultMetadata } from "@/lib/seo";
import { rentFlowOfficialUrl } from "@/lib/siteConfig";
import PgSaasWaitlistForm from "./PgSaasWaitlistForm";
import PgSaasAnalytics from "./PgSaasAnalytics";

const problemRows = [
  {
    pain: "Excel rent tracking",
    impact: "15% revenue leakage",
    solution: "Automated invoice generation",
  },
  {
    pain: "Manual power calculation",
    impact: "Tenant disputes and billing errors",
    solution: "Per-room meter auto-split",
  },
  {
    pain: "No tenant lifecycle view",
    impact: "High churn and poor experience",
    solution: "KYC -> Onboarding -> Notice -> Vacate tracking",
  },
  {
    pain: "No multi-property control",
    impact: "Operational chaos across teams",
    solution: "Single dashboard with unlimited properties",
  },
] as const;

const capabilityCards = [
  {
    icon: "🏠",
    title: "Property Hierarchy",
    points: [
      "Property -> Floor -> Room -> Bed",
      "AC and Non-AC categorization",
      "Dynamic rent per bed",
      "Real-time occupancy",
    ],
  },
  {
    icon: "👥",
    title: "Tenant Lifecycle",
    points: [
      "Digital KYC and agreements",
      "Security deposit tracking",
      "Active, Notice, and Vacated states",
      "Blacklist management",
    ],
  },
  {
    icon: "💰",
    title: "Automated Billing",
    points: [
      "Monthly invoice auto-generation",
      "Late fee calculation",
      "Partial payment handling",
      "Immutable paid invoices and PDF receipts",
    ],
  },
  {
    icon: "⚡",
    title: "Power Bill Automation",
    points: [
      "Per-room meter readings",
      "Auto formula: (Current-Previous) x Rate",
      "Split by sharing count",
      "Transparent historical tracking",
    ],
  },
  {
    icon: "💳",
    title: "Payment Integration",
    points: [
      "Razorpay and Stripe native integration",
      "Webhook validation with idempotency",
      "Auto-reconciliation",
      "Real-time payment status sync",
    ],
  },
  {
    icon: "📊",
    title: "Analytics Dashboard",
    points: [
      "Occupancy percentage",
      "Revenue and pending dues metrics",
      "Power consumption insights",
      "Revenue vs expense trends",
    ],
  },
] as const;

const phaseTimeline = [
  { label: "Phase 0: Governance and Architecture", status: "COMPLETE", icon: "✅" },
  { label: "Phase 1: Multi-Tenant Core", status: "IN PROGRESS", icon: "🔄" },
  { label: "Phase 2: Billing Engine", status: "IN PROGRESS", icon: "🔄" },
  { label: "Phase 3: Payments and Notifications", status: "PLANNED", icon: "⏳" },
  { label: "Phase 4: Analytics and Intelligence", status: "PLANNED", icon: "⏳" },
  { label: "Phase 5: Scale and Optimization", status: "PLANNED", icon: "⏳" },
] as const;

const personas = [
  {
    icon: "🏠",
    title: "Single PG Owner",
    text: "Automate your first property. Stop using Excel. Start with professional-grade management from day one.",
  },
  {
    icon: "🏢",
    title: "Multi-Property Operator",
    text: "Manage 10+ properties from one dashboard. Standardize operations across locations with real-time visibility.",
  },
  {
    icon: "🚀",
    title: "Enterprise Coliving Chain",
    text: "White-label ready with dedicated infrastructure options, API access for integrations, and custom feature development.",
  },
] as const;

const faqItems = [
  {
    q: "Is this available now?",
    a: "The platform is currently in development (Phase 2). Beta access opens in Q3 2026. Join the waitlist for early access.",
  },
  {
    q: "Can I migrate from my current Excel or legacy system?",
    a: "Yes. We provide migration tooling and white-glove onboarding for early access customers.",
  },
  {
    q: "Is my data secure?",
    a: "Yes. We enforce JWT authentication, encrypted data handling, tenant isolation, and audit logging. The implementation is SOC 2 aligned.",
  },
  {
    q: "What about mobile apps?",
    a: "The platform is web-first and mobile-responsive. Native iOS and Android apps are planned in Phase 4.",
  },
  {
    q: "Can I self-host?",
    a: "Initial release is SaaS-first. Enterprise dedicated infrastructure options are available for qualifying deployments.",
  },
  {
    q: "How does this differ from other PG software?",
    a: "It is built on true multi-tenancy, event-driven internals, and enterprise scaling practices with power billing automation designed for production reliability.",
  },
] as const;

export const metadata = defaultMetadata(
  "RentFlow | Enterprise Multi-Tenant Rent Management Software",
  "RentFlow official site: rentflow.in. Enterprise-grade SaaS for PG owners and coliving chains. Automated rent, power billing, tenant lifecycle. Early access and investor info at rentflow.in. Built with Clean Architecture, CQRS, multi-tenancy. Beta Q3 2026.",
  "/products/pg-management"
);

const pgSaasSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "FBT — Future Beyond Technology",
      url: "https://futurebeyondtech.com",
    },
    {
      "@type": "SoftwareApplication",
      name: "RentFlow",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Enterprise-grade multi-tenant rent management platform for rent, power billing, and tenant lifecycle automation.",
      publisher: {
        "@type": "Organization",
        name: "FBT — Future Beyond Technology",
      },
      url: "https://futurebeyondtech.com/products/pg-management",
      sameAs: "https://rentflow.in",
    },
    {
      "@type": "Offer",
      name: "RentFlow Early Access",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/PreOrder",
      eligibleCustomerType: "Business",
      url: "https://futurebeyondtech.com/products/pg-management#early-access",
      description:
        "Early access waitlist with six months free at launch for selected PG operators.",
    },
  ],
};

export default function PgSaasPage() {
  return (
    <article className="py-20 sm:py-24 lg:py-32" aria-labelledby="pgsaas-heading">
      <PgSaasAnalytics />
      <Container>
        <div className="mx-auto max-w-6xl space-y-20">
          <section
            aria-labelledby="rentflow-official-heading"
            className="rounded-2xl border border-emerald-200 bg-emerald-50/80 p-5 dark:border-emerald-800 dark:bg-emerald-950/40 sm:p-6"
          >
            <h2
              id="rentflow-official-heading"
              className="text-lg font-semibold text-emerald-900 dark:text-emerald-100 sm:text-xl"
            >
              RentFlow now has an official site
            </h2>
            <p className="mt-2 text-sm text-emerald-800 dark:text-emerald-200 sm:text-base">
              Know more about the product, join early access, or explore investor opportunities—all in one place.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <TrackedExternalLink
                href={rentFlowOfficialUrl}
                className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-800 dark:bg-emerald-600 dark:hover:bg-emerald-700"
                eventName="rentflow_official_click"
                eventParams={{ cta: "know_more", location: "product_banner" }}
              >
                Visit RentFlow.in →
              </TrackedExternalLink>
              <TrackedExternalLink
                href={`${rentFlowOfficialUrl}#early-access`}
                className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-emerald-600 px-5 py-2.5 text-sm font-semibold text-emerald-800 transition-colors hover:bg-emerald-100 dark:border-emerald-500 dark:text-emerald-200 dark:hover:bg-emerald-900/50"
                eventName="rentflow_official_click"
                eventParams={{ cta: "early_access", location: "product_banner" }}
              >
                Early Access
              </TrackedExternalLink>
              <TrackedExternalLink
                href={`${rentFlowOfficialUrl}#investors`}
                className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-emerald-600 px-5 py-2.5 text-sm font-semibold text-emerald-800 transition-colors hover:bg-emerald-100 dark:border-emerald-500 dark:text-emerald-200 dark:hover:bg-emerald-900/50"
                eventName="rentflow_official_click"
                eventParams={{ cta: "investors", location: "product_banner" }}
              >
                Become an Investor
              </TrackedExternalLink>
            </div>
          </section>

          <header className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-center">
            <div>
              <p className="inline-flex rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-800 dark:border-amber-700 dark:bg-amber-900/30 dark:text-amber-300">
                Currently in Development - Phase 2
              </p>
              <h1
                id="pgsaas-heading"
                className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl lg:text-5xl"
              >
                Enterprise-Grade RentFlow, Built for Scale
              </h1>
              <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
                Multi-tenant SaaS platform automating rent, power billing, and
                tenant lifecycle for PG owners and coliving chains. From single
                property to 100+ locations.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="#early-access"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200"
                >
                  Join Early Access Waitlist
                </Link>
                <TrackedExternalLink
                  href={rentFlowOfficialUrl}
                  className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600"
                  eventName="rentflow_official_click"
                  eventParams={{ cta: "header", location: "product_page" }}
                >
                  Official site: RentFlow.in →
                </TrackedExternalLink>
                <Link
                  href="#technical-architecture"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-400 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:bg-slate-800"
                >
                  See Technical Architecture →
                </Link>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <Image
                src="/products/pg-management/dashboard-wireframe.svg"
                alt="RentFlow dashboard wireframe"
                width={1300}
                height={850}
                className="h-auto w-full"
                loading="eager"
                priority
              />
            </div>
          </header>

          <section className="rounded-xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-800/50">
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Also in development:{" "}
              <Link
                href="/products/vulnerability-ai"
                className="font-semibold text-sky-700 underline decoration-sky-300 underline-offset-2 dark:text-sky-300"
              >
                VulnAI
              </Link>{" "}
              for security automation teams.
            </p>
          </section>

          <section aria-labelledby="problem-statement" className="space-y-6">
            <h2
              id="problem-statement"
              className="text-2xl font-semibold text-slate-900 dark:text-slate-50 sm:text-3xl"
            >
              Why RentFlow: A SaaS Revolution
            </h2>

            <div className="hidden overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 md:block">
              <table className="w-full text-left">
                <thead className="bg-slate-100 dark:bg-slate-800/60">
                  <tr>
                    <th className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-100">
                      Traditional Pain
                    </th>
                    <th className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-100">
                      Business Impact
                    </th>
                    <th className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-100">
                      Our Solution
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {problemRows.map((row) => (
                    <tr
                      key={row.pain}
                      className="border-t border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900"
                    >
                      <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">
                        {row.pain}
                      </td>
                      <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">
                        {row.impact}
                      </td>
                      <td className="px-4 py-3 text-sm font-medium text-slate-900 dark:text-slate-100">
                        {row.solution}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid gap-4 md:hidden">
              {problemRows.map((row) => (
                <article
                  key={row.pain}
                  className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    Traditional Pain
                  </p>
                  <p className="mt-1 text-sm font-medium text-slate-900 dark:text-slate-100">
                    {row.pain}
                  </p>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    Business Impact
                  </p>
                  <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">
                    {row.impact}
                  </p>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    Our Solution
                  </p>
                  <p className="mt-1 text-sm font-medium text-slate-900 dark:text-slate-100">
                    {row.solution}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section aria-labelledby="capabilities" className="space-y-6">
            <h2
              id="capabilities"
              className="text-2xl font-semibold text-slate-900 dark:text-slate-50 sm:text-3xl"
            >
              What the Platform Delivers
            </h2>
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <Image
                src="/products/pg-management/property-hierarchy.svg"
                alt="Property hierarchy visualization from property to bed"
                width={1400}
                height={500}
                className="h-auto w-full"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {capabilityCards.map((card) => (
                <article
                  key={card.title}
                  className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900"
                >
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                    <span className="mr-2" aria-hidden="true">
                      {card.icon}
                    </span>
                    {card.title}
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {card.points.map((point) => (
                      <li
                        key={point}
                        className="text-sm leading-relaxed text-slate-700 dark:text-slate-300"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section aria-labelledby="consulting-to-product" className="space-y-6">
            <h2
              id="consulting-to-product"
              className="text-2xl font-semibold text-slate-900 dark:text-slate-50 sm:text-3xl"
            >
              From Consulting to Product
            </h2>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-8">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 sm:text-xl">
                Why We Built This
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300 sm:text-base">
                After architecting systems for 10+ startups, we saw the same gap:
                PG operators needed enterprise-grade software but were forced to
                use basic tools.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300 sm:text-base">
                So we built it ourselves and applied the same standards we
                recommend:
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-300 sm:text-base">
                <li>✓ Clean Architecture (no shortcuts)</li>
                <li>✓ Multi-tenancy from day one</li>
                <li>✓ Event-driven for scalability</li>
                <li>✓ Security-first (tenant isolation and audit logs)</li>
                <li>✓ DevOps maturity (blue-green deployments)</li>
              </ul>
              <p className="mt-4 text-sm font-medium text-slate-900 dark:text-slate-100 sm:text-base">
                This is not theory. This is how we build.
              </p>
            </div>
          </section>

          <section
            id="technical-architecture"
            aria-labelledby="architecture-heading"
            className="space-y-8"
          >
            <h2
              id="architecture-heading"
              className="text-2xl font-semibold text-slate-900 dark:text-slate-50 sm:text-3xl"
            >
              Built With Enterprise Architecture Standards
            </h2>

            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-6">
                <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 sm:text-lg">
                    Architecture Approach
                  </h3>
                  <p className="mt-3 text-sm text-slate-700 dark:text-slate-300">
                    Phase 1-2 runs as a modular monolith. Phase 3+ extracts
                    high-load modules into independently deployable services.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                    <li>✓ Clean Architecture</li>
                    <li>✓ CQRS + Vertical Slice</li>
                    <li>✓ Event-driven internal communication</li>
                    <li>✓ Multi-tenant by design</li>
                  </ul>
                </section>

                <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 sm:text-lg">
                    Security Model
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                    <li>Authentication: JWT with refresh token rotation</li>
                    <li>
                      Authorization: SuperAdmin, PGOwner, Manager, Accountant,
                      Tenant
                    </li>
                    <li>
                      Data Security: TenantId enforcement at database and query
                      layers
                    </li>
                  </ul>
                </section>

                <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 sm:text-lg">
                    Multi-Tenancy and Tech Stack
                  </h3>
                  <p className="mt-3 text-sm text-slate-700 dark:text-slate-300">
                    Current model uses shared database + TenantId + global query
                    filters. Enterprise tenancy can move to dedicated database
                    isolation.
                  </p>
                  <p className="mt-3 text-sm text-slate-700 dark:text-slate-300">
                    Backend: .NET 8, MediatR, EF Core, PostgreSQL, Redis
                    <br />
                    Frontend: Next.js, TypeScript, React Query
                    <br />
                    DevOps: Docker, blue-green deployment, GHCR, automated CI/CD
                  </p>
                  <p className="mt-3 text-sm text-slate-700 dark:text-slate-300">
                    Internal events: InvoiceGeneratedEvent, PaymentReceivedEvent,
                    and TenantVacatedEvent are handled asynchronously for
                    scalability.
                  </p>
                </section>
              </div>

              <div className="space-y-6">
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900">
                  <Image
                    src="/products/pg-management/architecture-clean-cqrs.svg"
                    alt="Clean Architecture and CQRS diagram for RentFlow platform"
                    width={1200}
                    height={1000}
                    className="h-auto w-full"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </section>

          <section aria-labelledby="development-status" className="space-y-6">
            <h2
              id="development-status"
              className="text-2xl font-semibold text-slate-900 dark:text-slate-50 sm:text-3xl"
            >
              Current Development Status
            </h2>
            <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
              <ul className="space-y-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                {phaseTimeline.map((phase) => (
                  <li
                    key={phase.label}
                    className="flex items-start gap-3 border-b border-slate-100 pb-3 text-sm text-slate-700 last:border-b-0 last:pb-0 dark:border-slate-800 dark:text-slate-300"
                  >
                    <span aria-hidden="true">{phase.icon}</span>
                    <span>
                      <span className="font-medium text-slate-900 dark:text-slate-100">
                        {phase.label}
                      </span>{" "}
                      {phase.status}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900">
                <Image
                  src="/products/pg-management/roadmap-timeline.svg"
                  alt="RentFlow development roadmap timeline"
                  width={1200}
                  height={700}
                  className="h-auto w-full"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300 sm:text-base">
              Currently in Phase 1-2. Core tenant management and billing engine
              are under active development. Beta release is targeting Q3 2026.
            </p>
          </section>

          <section aria-labelledby="personas-heading" className="space-y-6">
            <h2
              id="personas-heading"
              className="text-2xl font-semibold text-slate-900 dark:text-slate-50 sm:text-3xl"
            >
              Built For Every Scale of PG Operation
            </h2>
            <div className="grid gap-5 md:grid-cols-3">
              {personas.map((persona) => (
                <article
                  key={persona.title}
                  className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900"
                >
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                    <span className="mr-2" aria-hidden="true">
                      {persona.icon}
                    </span>
                    {persona.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    {persona.text}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section id="early-access" aria-labelledby="early-access-heading">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800/40 sm:p-8 lg:p-10">
              <h2
                id="early-access-heading"
                className="text-2xl font-semibold text-slate-900 dark:text-slate-50 sm:text-3xl"
              >
                Be Among the First
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300 sm:text-base">
                Join the early access program. Get 6 months free at launch and
                shape the product roadmap.
              </p>

              <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                <PgSaasWaitlistForm />

                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-8">
                  <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 sm:text-lg">
                    Early access benefits
                  </h3>
                  <ul className="mt-4 space-y-3 text-sm text-slate-700 dark:text-slate-300 sm:text-base">
                    <li>✅ 6 months free at launch</li>
                    <li>✅ Direct input on feature roadmap</li>
                    <li>✅ White-glove onboarding</li>
                    <li>✅ Lifetime discount for early supporters</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section aria-labelledby="credibility-heading" className="space-y-6">
            <h2
              id="credibility-heading"
              className="text-2xl font-semibold text-slate-900 dark:text-slate-50 sm:text-3xl"
            >
              Why This Architecture Matters
            </h2>
            <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300 sm:text-base">
              This is not a simple CRUD app. This is how we build enterprise
              software for long-term ownership and predictable change.
            </p>
            <ul className="grid gap-3 sm:grid-cols-2">
              <li className="rounded-lg border border-slate-200 bg-white p-4 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
                Clean Architecture: business logic isolated, testable, maintainable
              </li>
              <li className="rounded-lg border border-slate-200 bg-white p-4 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
                CQRS: read and write separation for clarity and performance
              </li>
              <li className="rounded-lg border border-slate-200 bg-white p-4 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
                Event-Driven: scalable, loosely coupled modules
              </li>
              <li className="rounded-lg border border-slate-200 bg-white p-4 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
                Multi-Tenant: SaaS-ready from day one
              </li>
              <li className="rounded-lg border border-slate-200 bg-white p-4 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
                Blue-Green Deployment: zero-downtime updates
              </li>
              <li className="rounded-lg border border-slate-200 bg-white p-4 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
                Domain-Driven Design: business invariants enforced in code
              </li>
            </ul>
            <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300 sm:text-base">
              Result: software that can run for 5+ years without a full rewrite.
            </p>
            <p className="text-sm font-medium text-slate-900 dark:text-slate-100 sm:text-base">
              Need this level of engineering for your product?
            </p>
            <TrackedCtaLink
              href="/contact"
              eventName="hire_team_click"
              eventParams={{
                source_page: "/products/pg-management",
                cta_label: "Let's Talk",
              }}
              className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200"
            >
              Let&apos;s Talk
            </TrackedCtaLink>
          </section>

          <section aria-labelledby="faq-heading" className="space-y-5">
            <h2
              id="faq-heading"
              className="text-2xl font-semibold text-slate-900 dark:text-slate-50 sm:text-3xl"
            >
              FAQ
            </h2>
            <div className="space-y-3">
              {faqItems.map((item) => (
                <details
                  key={item.q}
                  className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
                >
                  <summary className="cursor-pointer text-sm font-semibold text-slate-900 dark:text-slate-100 sm:text-base">
                    {item.q}
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300 sm:text-base">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-slate-900 px-6 py-10 text-center text-white dark:border-slate-700 dark:bg-slate-950 sm:px-8 sm:py-12">
            <h2 className="text-2xl font-semibold sm:text-3xl">
              Ready to Modernize Your PG Operation?
            </h2>
            <p className="mt-3 text-sm text-slate-200 sm:text-base">
              Join 50+ PG owners already on the waitlist.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="#early-access"
                className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-100"
              >
                Join Waitlist
              </Link>
              <TrackedCtaLink
                href="/contact"
                eventName="hire_team_click"
                eventParams={{
                  source_page: "/products/pg-management",
                  cta_label: "Contact for Enterprise Demo",
                }}
                className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Contact for Enterprise Demo
              </TrackedCtaLink>
            </div>
          </section>
        </div>
      </Container>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pgSaasSchema) }}
      />
    </article>
  );
}
