import { siteConfig, rentFlowOfficialUrl, founderName } from "./siteConfig";

export const organizationAndServiceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description,
      sameAs: ["https://www.linkedin.com/company/futurebeyondtech"],
    },
    {
      "@type": "Person",
      "@id": `${siteConfig.url}#founder`,
      name: founderName,
      jobTitle: "Founder",
      worksFor: { "@id": `${siteConfig.url}#organization` },
      url: siteConfig.url,
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${siteConfig.url}#product-rentflow`,
      name: "RentFlow",
      applicationCategory: "BusinessApplication",
      applicationSubCategory: "Property and rental management",
      description:
        "India's first usage-based operating system for PG and co-living infrastructure. Multi-tenant architecture, event-driven billing, scale from 1 to 1,000+ properties.",
      url: rentFlowOfficialUrl,
      author: { "@id": `${siteConfig.url}#organization` },
      provider: { "@id": `${siteConfig.url}#organization` },
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/PreOrder",
        price: "0",
        priceCurrency: "INR",
      },
    },
    {
      "@type": "Product",
      "@id": `${siteConfig.url}#product-rentflow-product`,
      name: "RentFlow",
      description:
        "Usage-based rental infrastructure platform for PG and co-living. Multi-tenant, event-driven billing, enterprise-grade.",
      brand: { "@id": `${siteConfig.url}#organization` },
      url: rentFlowOfficialUrl,
    },
    {
      "@type": "Service",
      "@id": `${siteConfig.url}#service-security`,
      serviceType: "Security and Vulnerability Engineering",
      name: "Security and Vulnerability Engineering",
      description:
        "Threat modeling, vulnerability assessment, and secure-by-design implementation support for startups.",
      provider: {
        "@id": `${siteConfig.url}#organization`,
      },
      areaServed: "Global",
      url: `${siteConfig.url}/services`,
    },
    {
      "@type": "Service",
      "@id": `${siteConfig.url}#service-architecture`,
      serviceType: "Architecture and Consulting",
      name: "Architecture and Consulting",
      description:
        "Architecture reviews, technical decision support, and system design guidance for scaling teams.",
      provider: {
        "@id": `${siteConfig.url}#organization`,
      },
      areaServed: "Global",
      url: `${siteConfig.url}/services`,
    },
    {
      "@type": "Service",
      "@id": `${siteConfig.url}#service-ai`,
      serviceType: "AI Automation",
      name: "AI Automation",
      description:
        "Design and implementation of secure AI-enabled workflows, model integration, and intelligent automation.",
      provider: {
        "@id": `${siteConfig.url}#organization`,
      },
      areaServed: "Global",
      url: `${siteConfig.url}/services`,
    },
  ],
};
