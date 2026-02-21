import Hero from "@/components/home/Hero";
import ZAuthSecurityHighlight from "@/components/home/ZAuthSecurityHighlight";
import ResearchFeature from "@/components/home/ResearchFeature";
import LatestMediumSection from "@/components/home/LatestMediumSection";
import FeaturedProduct from "@/components/home/FeaturedProduct";
import SampleProjects from "@/components/home/SampleProjects";
import ClientsShowcase from "@/components/home/ClientsShowcase";
import Capabilities from "@/components/home/Capabilities";
import HowWeWorkPreview from "@/components/home/HowWeWorkPreview";
import Team from "@/components/home/Team";
import OrganizationChart from "@/components/home/OrganizationChart";
import CTA from "@/components/home/CTA";
import SBOMTeaserSection from "@/components/home/SBOMTeaserSection";
import BuiltByTrustBar from "@/components/home/BuiltByTrustBar";
import { defaultMetadata } from "@/lib/seo";
import type { Metadata } from "next";

const homeTitle =
  "They're Architected | FBT - Enterprise SaaS & Security";
const homeDescription =
  "Enterprise SaaS & security frameworks built for long-term scale. Clean Architecture, multi-tenant systems, and security-first engineering by FBT.";
const homeBaseMetadata = defaultMetadata(undefined, homeDescription, "/");

export const metadata: Metadata = {
  ...homeBaseMetadata,
  title: homeTitle,
  description: homeDescription,
  keywords: [
    "enterprise SaaS",
    "Clean Architecture",
    "security frameworks",
    "multi-tenant",
    "FBT",
  ],
  openGraph: {
    ...homeBaseMetadata.openGraph,
    title: homeTitle,
    description: homeDescription,
    images: [
      {
        url: "/og-engineering-authority.svg",
        width: 1200,
        height: 630,
        alt: "Ideas aren't accidental. They're architected. Enterprise SaaS & security frameworks built for long-term scale.",
      },
    ],
  },
  twitter: {
    ...homeBaseMetadata.twitter,
    title: homeTitle,
    description: homeDescription,
    images: ["/og-engineering-authority.svg"],
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ZAuthSecurityHighlight />
      <ResearchFeature />
      <LatestMediumSection />
      <FeaturedProduct />
      <SampleProjects />
      <ClientsShowcase />
      <Capabilities />
      <HowWeWorkPreview />
      <Team />
      <OrganizationChart />
      <CTA />
      <SBOMTeaserSection />
      <BuiltByTrustBar />
    </>
  );
}
