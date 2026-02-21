import Hero from "@/components/home/Hero";
import ZAuthSecurityHighlight from "@/components/home/ZAuthSecurityHighlight";
import FeaturedProduct from "@/components/home/FeaturedProduct";
import SampleProjects from "@/components/home/SampleProjects";
import ClientsShowcase from "@/components/home/ClientsShowcase";
import Capabilities from "@/components/home/Capabilities";
import HowWeWorkPreview from "@/components/home/HowWeWorkPreview";
import Team from "@/components/home/Team";
import OrganizationChart from "@/components/home/OrganizationChart";
import CTA from "@/components/home/CTA";
import BuiltByTrustBar from "@/components/home/BuiltByTrustBar";
import { defaultMetadata } from "@/lib/seo";
import type { Metadata } from "next";

const homeTitle = "Future Beyond Tech | We Build Enterprise SaaS That Lasts";
const homeDescription =
  "Product engineering studio behind enterprise SaaS platforms and consulting builds. We ship multi-tenant, security-first systems and help teams do the same.";
const homeBaseMetadata = defaultMetadata(undefined, homeDescription, "/");

export const metadata: Metadata = {
  ...homeBaseMetadata,
  title: homeTitle,
  description: homeDescription,
  openGraph: {
    ...homeBaseMetadata.openGraph,
    title: homeTitle,
    description: homeDescription,
  },
  twitter: {
    ...homeBaseMetadata.twitter,
    title: homeTitle,
    description: homeDescription,
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ZAuthSecurityHighlight />
      <FeaturedProduct />
      <SampleProjects />
      <ClientsShowcase />
      <Capabilities />
      <HowWeWorkPreview />
      <Team />
      <OrganizationChart />
      <CTA />
      <BuiltByTrustBar />
    </>
  );
}
