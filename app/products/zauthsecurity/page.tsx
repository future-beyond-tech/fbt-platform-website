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

const pageTitle = "Enterprise Authentication Architecture | FBT Security Expertise";
const pageDescription =
  "We built ZAuthSecurity, an enterprise OAuth 2.0 and OIDC framework for high-throughput multi-tenant systems. Now we architect custom identity systems for companies that cannot afford security failures.";
const baseMetadata = defaultMetadata(pageTitle, pageDescription, "/products/zauthsecurity");

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
    description: "Custom auth systems built by engineers who shipped ZAuthSecurity.",
    images: [
      {
        url: "/products/zauthsecurity/og-card.svg",
        width: 1200,
        height: 630,
        alt: "FBT ZAuthSecurity security expertise",
      },
    ],
  },
  twitter: {
    ...baseMetadata.twitter,
    title: "Enterprise Authentication Architecture | FBT",
    description: "Custom auth systems built by engineers who shipped ZAuthSecurity.",
    images: ["/products/zauthsecurity/og-card.svg"],
  },
};

const zauthSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "ZAuthSecurity Architecture Services",
      serviceType: "Authentication and Identity Architecture",
      provider: {
        "@type": "Organization",
        name: "FBT - Future Beyond Technology",
        url: "https://futurebeyondtech.com",
      },
      areaServed: "Global",
      url: "https://futurebeyondtech.com/products/zauthsecurity",
      description:
        "Enterprise authentication architecture and modernization services for OAuth 2.0, OIDC, MFA, RBAC, and audit-compliant identity systems.",
    },
  ],
};

export default function ZAuthSecurityPage() {
  return (
    <article className="min-h-screen bg-white dark:bg-slate-950">
      <PageViewEvent
        pagePath="/products/zauthsecurity"
        pageTitle="ZAuthSecurity Security Expertise"
      />
      <Hero />
      <Proof />
      <Services />
      <Standards />
      <CaseStudy />
      <FAQ />
      <CTA />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(zauthSchema) }}
      />
    </article>
  );
}
