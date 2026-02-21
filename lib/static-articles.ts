export type StaticMediumArticle = {
  title: string;
  link: string;
  pubDate: string;
  categories: string[];
  thumbnail?: string;
  description: string;
  author: string;
};

export const fallbackArticles: StaticMediumArticle[] = [
  {
    title: "Building ZAuthSecurity: Enterprise OAuth 2.0 from Scratch",
    link: "https://medium.com/@futurebeyond.tech",
    pubDate: "February 2025",
    categories: ["Security Engineering", "OAuth 2.0"],
    description:
      "How FBT approached enterprise-grade OAuth 2.0 architecture, threat boundaries, and long-term maintainability in production systems.",
    author: "FBT Engineering Team",
  },
  {
    title: "Multi-Tenant SaaS Architecture Lessons from Production",
    link: "https://medium.com/@futurebeyond.tech",
    pubDate: "January 2025",
    categories: ["Architecture", "Multi-Tenancy"],
    description:
      "Design principles and operational guardrails for multi-tenant platforms that need strong isolation and predictable scaling behavior.",
    author: "FBT Engineering Team",
  },
  {
    title: "Security Automation Patterns for Growing Engineering Teams",
    link: "https://medium.com/@futurebeyond.tech",
    pubDate: "December 2024",
    categories: ["Security", "Automation"],
    description:
      "Practical automation patterns for vulnerability triage, policy enforcement, and delivery pipeline hardening without slowing release velocity.",
    author: "FBT Engineering Team",
  },
];
