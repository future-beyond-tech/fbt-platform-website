import Link from "next/link";
import Container from "./Container";
import { siteConfig, rentFlowOfficialUrl } from "@/lib/siteConfig";
import TrackedExternalLink from "@/components/TrackedExternalLink";

const companyLinks = [
  { name: "About", href: "/about" },
  { name: "How We Work", href: "/how-we-work" },
  { name: "Services", href: "/services" },
  { name: "Team", href: "/team" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

const insightLinks = [
  { name: "Insights Hub", href: "/insights" },
  { name: "Research", href: "/research" },
  { name: "Resources", href: "/resources" },
  { name: "Case Studies", href: "/work" },
  { name: "Medium Blog", href: "/insights" },
  { name: "Architecture Deep Dives", href: "/insights/architecture-deep-dives" },
];

const productCards = [
  {
    name: "ZAuthSecurity",
    href: "/products/zauthsecurity",
    status: "Security Expertise",
  },
  {
    name: "RentFlow",
    href: "/products/pg-management",
    status: "Beta Q3 2026",
    officialSiteUrl: rentFlowOfficialUrl,
  },
  {
    name: "VulnAI",
    href: "/products/vulnerability-ai",
    status: "Release Aug 2026",
  },
  {
    name: "Supply Chain (Soon)",
    href: "/sbom",
    status: "Coming 2026",
  },
] as const;

export default function Footer() {
  return (
    <footer
      className="border-t border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/50 py-12 sm:py-16"
      role="contentinfo"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr_1.4fr] lg:gap-12">
          <div className="text-center sm:text-left">
            <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">
              {siteConfig.name}
            </p>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              {siteConfig.tagline}
            </p>
            <Link
              href="/products"
              className="mt-4 inline-flex min-h-[44px] items-center justify-center rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              See Our Products
            </Link>
          </div>

          <nav aria-label="Footer company links">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
              Company
            </p>
            <ul className="mt-3 space-y-2">
              {companyLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-slate-600 dark:text-slate-400 transition-colors hover:text-slate-900 dark:hover:text-slate-100 focus-visible:rounded focus-visible:ring-2 focus-visible:ring-slate-900 dark:focus-visible:ring-slate-50 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer insight links">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
              Insights
            </p>
            <ul className="mt-3 space-y-2">
              {insightLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-slate-600 dark:text-slate-400 transition-colors hover:text-slate-900 dark:hover:text-slate-100 focus-visible:rounded focus-visible:ring-2 focus-visible:ring-slate-900 dark:focus-visible:ring-slate-50 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <section aria-label="Footer product cards">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
              Built by FBT
            </p>
            <div className="mt-3 space-y-3">
              {productCards.map((item) => (
                <div
                  key={item.name}
                  className="rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-700 dark:bg-slate-900"
                >
                  <Link
                    href={item.href}
                    className="block transition-colors hover:opacity-90 focus-visible:rounded focus-visible:ring-2 focus-visible:ring-slate-900 dark:focus-visible:ring-slate-50"
                  >
                    <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                      {item.name}
                    </p>
                    <p className="mt-1 text-xs font-medium text-emerald-700 dark:text-emerald-400">
                      {item.status}
                    </p>
                  </Link>
                  {"officialSiteUrl" in item && item.officialSiteUrl && (
                    <TrackedExternalLink
                      href={item.officialSiteUrl}
                      className="mt-2 inline-flex min-h-[36px] items-center text-xs font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
                      eventName="rentflow_official_click"
                      eventParams={{ location: "footer" }}
                    >
                      Official site: RentFlow.in →
                    </TrackedExternalLink>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-8 dark:border-slate-800">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-3">
              <span className="text-xs text-slate-500 dark:text-slate-400 sm:text-sm">
                Follow our journey:
              </span>
              <TrackedExternalLink
                href="https://medium.com/@futurebeyond.tech"
                className="inline-flex min-h-[40px] items-center gap-2 rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
                eventName="medium_profile_click"
                eventParams={{ location: "footer" }}
              >
                <span>Medium</span>
                <span className="text-xs">{"->"}</span>
              </TrackedExternalLink>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-500 sm:text-sm">
              © {new Date().getFullYear()} Future Beyond Technology. All rights
              reserved.
            </p>
          </div>

          <div className="mt-8 border-t border-slate-200 pt-6 text-center dark:border-slate-800">
            <p className="font-tiempos text-base italic text-slate-500 dark:text-slate-400 sm:text-lg">
              &quot;Ideas don&apos;t fall into place&mdash;{" "}
              <span className="text-emerald-600 dark:text-emerald-400">
                they&apos;re architected.
              </span>
              &quot;
            </p>
            <p className="mt-2 text-xs text-slate-500 dark:text-slate-500 sm:text-sm">
              Built with precision. Designed for beyond.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
