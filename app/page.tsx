import Hero from "@/components/home/Hero";
import FlagshipProductRentFlow from "@/components/home/FlagshipProductRentFlow";
import InfrastructureThesis from "@/components/home/InfrastructureThesis";
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
import InvestmentPositioning from "@/components/home/InvestmentPositioning";
import CTA from "@/components/home/CTA";
import SBOMTeaserSection from "@/components/home/SBOMTeaserSection";
import BuiltByTrustBar from "@/components/home/BuiltByTrustBar";
import { defaultMetadata } from "@/lib/seo";
import type { Metadata } from "next";

const homeTitle =
  "Future Beyond Tech | Infrastructure-First SaaS Products";
const homeDescription =
  "Future Beyond Tech builds enterprise-grade infrastructure software platforms, starting with RentFlow — India's first usage-based rental operating system.";
const homeBaseMetadata = defaultMetadata(undefined, homeDescription, "/");

export const metadata: Metadata = {
  ...homeBaseMetadata,
  title: homeTitle,
  description: homeDescription,
  keywords: [
    "infrastructure SaaS",
    "RentFlow",
    "PG management operating system",
    "rental infrastructure platform",
    "usage-based SaaS",
    "Future Beyond Tech",
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
        alt: "Future Beyond Tech — Infrastructure-first SaaS products. RentFlow: India's first usage-based rental operating system.",
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
      <FlagshipProductRentFlow />
      <InfrastructureThesis />
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
      <InvestmentPositioning />
      <CTA />
      <SBOMTeaserSection />
      <BuiltByTrustBar />
    </>
  );
}
