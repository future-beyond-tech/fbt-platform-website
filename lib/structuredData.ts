import { siteConfig } from "./siteConfig";

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
