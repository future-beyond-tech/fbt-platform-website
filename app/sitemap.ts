import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/siteConfig";
import { blogPosts } from "@/lib/blogPosts";

const stableLastModified = new Date(siteConfig.lastModified);

type RouteEntry = {
  path: string;
  changeFrequency?: MetadataRoute.Sitemap[0]["changeFrequency"];
  priority?: number;
};

const routeEntries: RouteEntry[] = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/about", priority: 0.7 },
  { path: "/services", changeFrequency: "monthly", priority: 0.9 },
  { path: "/services/product-engineering", changeFrequency: "monthly", priority: 0.9 },
  { path: "/services/security-engineering", changeFrequency: "monthly", priority: 0.9 },
  { path: "/services/ai-automation", changeFrequency: "monthly", priority: 0.9 },
  { path: "/services/architecture-consulting", changeFrequency: "monthly", priority: 0.9 },
  { path: "/pillars/microservices-scale-readiness", changeFrequency: "weekly", priority: 0.9 },
  { path: "/pillars/startup-security-soc2", changeFrequency: "weekly", priority: 0.9 },
  { path: "/pillars/identity-oauth-oidc", changeFrequency: "weekly", priority: 0.9 },
  { path: "/pillars/medical-device-cybersecurity", changeFrequency: "weekly", priority: 0.9 },
  { path: "/pillars/ai-automation-engineering", changeFrequency: "weekly", priority: 0.9 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.8 },
  { path: "/research", changeFrequency: "weekly", priority: 0.8 },
  { path: "/research/vyxnos", changeFrequency: "monthly", priority: 0.8 },
  { path: "/research/medical-device-risk-management-iso-14971", changeFrequency: "monthly", priority: 0.8 },
  { path: "/research/medical-device-vulnerability-assessment", changeFrequency: "monthly", priority: 0.8 },
  { path: "/resources", changeFrequency: "monthly", priority: 0.8 },
  { path: "/resources/startup-security-checklist", changeFrequency: "monthly", priority: 0.8 },
  { path: "/resources/soc2-evidence-tracker", changeFrequency: "monthly", priority: 0.8 },
  { path: "/resources/microservices-scorecard", changeFrequency: "monthly", priority: 0.8 },
  { path: "/resources/oauth-threat-model", changeFrequency: "monthly", priority: 0.8 },
  { path: "/resources/iso14971-checklist", changeFrequency: "monthly", priority: 0.8 },
  { path: "/assessment", changeFrequency: "monthly", priority: 0.9 },
  { path: "/how-we-work", priority: 0.7 },
  { path: "/contact", priority: 0.7 },
  { path: "/insights", changeFrequency: "weekly", priority: 0.7 },
  { path: "/insights/architecture-deep-dives", changeFrequency: "monthly", priority: 0.7 },
  { path: "/products", changeFrequency: "weekly", priority: 0.8 },
  { path: "/products/pg-management", changeFrequency: "weekly", priority: 0.8 },
  { path: "/products/pg-management/waitlist", changeFrequency: "monthly", priority: 0.7 },
  { path: "/products/zentra", changeFrequency: "monthly", priority: 0.8 },
  { path: "/products/vulnerability-ai", changeFrequency: "weekly", priority: 0.8 },
  { path: "/products/vulnerability-ai/early-access", changeFrequency: "monthly", priority: 0.7 },
  { path: "/products/compare", changeFrequency: "monthly", priority: 0.7 },
  { path: "/sbom", changeFrequency: "monthly", priority: 0.6 },
  { path: "/work", changeFrequency: "monthly", priority: 0.7 },
  { path: "/work/fintech-security", changeFrequency: "monthly", priority: 0.7 },
  { path: "/work/manufacturing-ai", changeFrequency: "monthly", priority: 0.7 },
  { path: "/team", priority: 0.6 },
  { path: "/careers", changeFrequency: "weekly", priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = routeEntries.map((entry) => ({
    url: `${siteConfig.url}${entry.path}`,
    lastModified: stableLastModified,
    changeFrequency: entry.changeFrequency ?? "weekly",
    priority: entry.priority ?? 0.8,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: stableLastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticEntries, ...blogEntries];
}
