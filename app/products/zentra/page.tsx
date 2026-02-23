import type { Metadata } from "next";
import { defaultMetadata } from "@/lib/seo";
import PageViewEvent from "@/components/analytics/PageViewEvent";
import { Hero } from "./sections/Hero";
import { Proof } from "./sections/Proof";
import { Services } from "./sections/Services";
import { Standards } from "./sections/Standards";
import { CaseStudy } from "./sections/CaseStudy";
import { FAQ } from "./sections/FAQ";
import { CTA } from "./sections/CTA";
import TrackedExternalLink from "@/components/TrackedExternalLink";

const pageTitle = "Enterprise Authentication Architecture | FBT Security Expertise";
const pageDescription =
  "We built Zentra, an enterprise OAuth 2.0 and OIDC framework for high-throughput multi-tenant systems. Now we architect custom identity systems for companies that cannot afford security failures.";
const baseMetadata = defaultMetadata(pageTitle, pageDescription, "/products/zentra");

export const metadata: Metadata = {
  ...baseMetadata,
  keywords: [
    "OAuth 2.0",
    "OpenID Connect",
    "authentication architecture",
    "identity management",
    "security engineering",
  ],
  openGraph: {
    ...baseMetadata.openGraph,
    title: "Enterprise Authentication Architecture | FBT",
    description: "Custom auth systems built by engineers who shipped Zentra.",
    images: [
      {
        url: "/products/zentra/og-card.svg",
        width: 1200,
        height: 630,
        alt: "FBT Zentra security expertise",
      },
    ],
  },
  twitter: {
    ...baseMetadata.twitter,
    title: "Enterprise Authentication Architecture | FBT",
    description: "Custom auth systems built by engineers who shipped Zentra.",
    images: ["/products/zentra/og-card.svg"],
  },
};

const zentraSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Zentra Architecture Services",
      serviceType: "Authentication and Identity Architecture",
      provider: {
        "@type": "Organization",
        name: "FBT - Future Beyond Technology",
        url: "https://futurebeyondtech.com",
      },
      areaServed: "Global",
      url: "https://futurebeyondtech.com/products/zentra",
      description:
        "Enterprise authentication architecture and modernization services for OAuth 2.0, OIDC, MFA, RBAC, and audit-compliant identity systems.",
    },
  ],
};

export default function ZentraPage() {
  return (
    <article className="min-h-screen bg-white dark:bg-slate-950">
      <PageViewEvent
        pagePath="/products/zentra"
        pageTitle="Zentra Security Expertise"
      />
      <Hero />
      <Proof />
      <Services />
      <Standards />
      <CaseStudy />
      <FAQ />

      <section className="bg-slate-50 py-12 dark:bg-slate-900/60">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
            Related on Medium
          </h2>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 sm:text-base">
            Read our latest security engineering articles and architecture notes.
          </p>
          <TrackedExternalLink
            href="https://medium.com/tag/security-engineering"
            className="mt-6 inline-flex min-h-[44px] items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:border-emerald-500 hover:text-emerald-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-emerald-500 dark:hover:text-emerald-400"
            eventName="medium_topic_click"
            eventParams={{ topic: "security-engineering", location: "zentra_page" }}
          >
            Security Engineering on Medium {"->"}
          </TrackedExternalLink>
        </div>
      </section>

      <CTA />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(zentraSchema) }}
      />
    </article>
  );
}
