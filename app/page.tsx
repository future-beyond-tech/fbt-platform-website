import Hero from "@/components/home/Hero";
import ClientsShowcase from "@/components/home/ClientsShowcase";
import Capabilities from "@/components/home/Capabilities";
import HowWeWorkPreview from "@/components/home/HowWeWorkPreview";
import Team from "@/components/home/Team";
import OrganizationChart from "@/components/home/OrganizationChart";
import CTA from "@/components/home/CTA";
import { defaultMetadata } from "@/lib/seo";

export const metadata = defaultMetadata(
  "Home",
  "Secure, scalable, and intelligent software engineering for startups and security-critical organizations.",
  "/"
);

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClientsShowcase />
      <Capabilities />
      <HowWeWorkPreview />
      <Team />
      <OrganizationChart />
      <CTA />
    </>
  );
}
