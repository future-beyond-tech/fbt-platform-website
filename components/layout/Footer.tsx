import Link from "next/link";
import Container from "./Container";
import { siteConfig } from "@/lib/siteConfig";

const companyLinks = [
  { name: "About", href: "/about" },
  { name: "Team", href: "/team" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

const insightLinks = [
  { name: "Research", href: "/research" },
  { name: "Case Studies", href: "/work" },
  { name: "Technical Blog", href: "/blog" },
  { name: "Architecture Deep Dives", href: "/insights/architecture-deep-dives" },
];

const productCards = [
  {
    name: "ZAuthSecurity",
    href: "/products/zauthsecurity",
    status: "Security Expertise",
  },
  {
    name: "PG Management SaaS",
    href: "/products/pg-management",
    status: "Beta Q3 2024",
  },
  {
    name: "Vulnerability Assessment AI",
    href: "/products/vulnerability-ai",
    status: "Release Aug 2026",
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
                <Link
                  key={item.name}
                  href={item.href}
                  className="block rounded-xl border border-slate-200 bg-white p-3 transition-colors hover:border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-slate-600 dark:hover:bg-slate-800"
                >
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                    {item.name}
                  </p>
                  <p className="mt-1 text-xs font-medium text-emerald-700 dark:text-emerald-400">
                    {item.status}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-10 pt-8 border-t border-slate-200 dark:border-slate-800 text-center sm:text-left">
          <p className="text-xs text-slate-500 dark:text-slate-500 sm:text-sm">
            © {new Date().getFullYear()} Future Beyond Technology. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
