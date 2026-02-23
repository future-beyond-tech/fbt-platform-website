import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/siteConfig";

const routes = [
  "",
  "/about",
  "/services",
  "/how-we-work",
  "/contact",
  "/assessment",
  "/resources",
  "/blog",
  "/blog/microservices-architecture-fail-at-scale",
  "/blog/startup-security-mistakes-from-50-codebases",
  "/blog/build-vs-buy-ai-pipeline",
  "/blog/pass-soc-2-in-8-weeks",
  "/research",
  "/research/vyxnos",
  "/research/medical-device-risk-management-iso-14971",
  "/research/medical-device-vulnerability-assessment",
  "/insights",
  "/products",
  "/products/pg-management",
  "/products/pg-management/waitlist",
  "/products/zentra",
  "/products/vulnerability-ai",
  "/products/vulnerability-ai/early-access",
  "/products/compare",
  "/sbom",
  "/services/product-engineering",
  "/services/security-engineering",
  "/services/ai-automation",
  "/services/architecture-consulting",
  "/team",
  "/careers",
  "/insights/architecture-deep-dives",
  "/work",
  "/work/fintech-security",
  "/work/manufacturing-ai",
];
const stableLastModified = new Date(siteConfig.lastModified);

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: stableLastModified,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8,
  }));
}
