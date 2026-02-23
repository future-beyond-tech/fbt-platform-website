"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Container from "./Container";
import TrackedExternalLink from "@/components/TrackedExternalLink";
import { rentFlowOfficialUrl, vyxnosResearchUrl } from "@/lib/siteConfig";

type NavLinkItem = {
  name: string;
  href: string;
  description?: string;
  officialSiteUrl?: string;
  badge?: "flagship" | "in-development";
};

type NavGroup = {
  name: string;
  items: NavLinkItem[];
};

function getDesktopMenuId(groupName: string): string {
  return `desktop-menu-${groupName.toLowerCase().replace(/\s+/g, "-")}`;
}

const navGroups: NavGroup[] = [
  {
    name: "Products",
    items: [
      { name: "Overview", href: "/products" },
      {
        name: "RentFlow",
        href: "/products/pg-management",
        description: "Flagship — PG & co-living operating system",
        officialSiteUrl: rentFlowOfficialUrl,
        badge: "flagship",
      },
      {
        name: "Zentra",
        href: "/products/zentra",
        description: "Enterprise auth architecture",
      },
      {
        name: "VYXNOS",
        href: vyxnosResearchUrl,
        description: "Autonomous Security Intelligence Platform",
      },
      {
        name: "VulnAI",
        href: "/products/vulnerability-ai",
        description: "Security intelligence automation platform",
        badge: "in-development",
      },
      {
        name: "Spectra",
        href: "/sbom",
        description: "Coming 2026",
        badge: "in-development",
      },
    ],
  },
  {
    name: "Services",
    items: [
      { name: "Overview", href: "/services" },
      { name: "Product Engineering", href: "/services/product-engineering" },
      { name: "Security Engineering", href: "/services/security-engineering" },
      { name: "AI Automation", href: "/services/ai-automation" },
      {
        name: "Architecture Consulting",
        href: "/services/architecture-consulting",
      },
    ],
  },
  {
    name: "Insights",
    items: [
      { name: "Insights Hub", href: "/insights" },
      { name: "Research", href: "/research" },
      { name: "Resources", href: "/resources" },
      { name: "Case Studies", href: "/work" },
      { name: "Medium Blog", href: "/insights" },
      {
        name: "Architecture Deep Dives",
        href: "/insights/architecture-deep-dives",
      },
    ],
  },
  {
    name: "Company",
    items: [
      { name: "About", href: "/about" },
      { name: "How We Work", href: "/how-we-work" },
      { name: "Team", href: "/team" },
      { name: "Careers", href: "/careers" },
    ],
  },
];

const actionLinks = [
  {
    name: "Contact",
    href: "/contact",
    className:
      "inline-flex min-h-[48px] items-center justify-center rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800",
  },
  {
    name: "Book Assessment",
    href: "/assessment",
    className:
      "inline-flex min-h-[48px] items-center justify-center rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200",
  },
] as const;

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDesktopGroup, setOpenDesktopGroup] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-sm dark:border-slate-800/80 dark:bg-slate-900/95 dark:supports-[backdrop-filter]:bg-slate-900/80">
      <Container>
        <div className="flex h-14 items-center justify-between gap-3 sm:h-16">
          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className="shrink-0 font-semibold text-base tracking-tight text-slate-900 dark:text-slate-50 sm:text-lg transition-colors hover:text-slate-700 dark:hover:text-slate-300 focus-visible:rounded focus-visible:ring-2 focus-visible:ring-slate-900 dark:focus-visible:ring-slate-50 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900"
          >
            FBT
          </Link>

          <nav
            className="hidden items-center gap-1 lg:gap-2 md:flex"
            aria-label="Main navigation"
          >
            {navGroups.map((group) => {
              const isGroupActive = group.items.some((item) =>
                pathname.startsWith(item.href)
              );
              const isDesktopGroupOpen = openDesktopGroup === group.name;
              const desktopMenuId = getDesktopMenuId(group.name);

              return (
                <div
                  key={group.name}
                  className="relative"
                  onMouseEnter={() => setOpenDesktopGroup(group.name)}
                  onMouseLeave={() => {
                    setOpenDesktopGroup((current) =>
                      current === group.name ? null : current
                    );
                  }}
                  onFocus={() => setOpenDesktopGroup(group.name)}
                  onBlur={(event) => {
                    const nextTarget = event.relatedTarget as Node | null;
                    if (!event.currentTarget.contains(nextTarget)) {
                      setOpenDesktopGroup((current) =>
                        current === group.name ? null : current
                      );
                    }
                  }}
                >
                  <button
                    type="button"
                    className={`inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-slate-900 dark:focus-visible:ring-slate-50 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900 ${
                      isGroupActive
                        ? "bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-100"
                        : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-100"
                    }`}
                    aria-haspopup="menu"
                    aria-expanded={isDesktopGroupOpen}
                    aria-controls={desktopMenuId}
                    onClick={() =>
                      setOpenDesktopGroup((current) =>
                        current === group.name ? null : group.name
                      )
                    }
                    onKeyDown={(event) => {
                      if (event.key === "Escape") {
                        setOpenDesktopGroup(null);
                        event.currentTarget.blur();
                      }
                    }}
                  >
                    {group.name}
                    <svg
                      viewBox="0 0 20 20"
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      aria-hidden="true"
                    >
                      <path d="M5 7.5 10 12.5 15 7.5" />
                    </svg>
                  </button>

                  <div
                    id={desktopMenuId}
                    role="menu"
                    className={`absolute left-0 top-full z-20 mt-2 w-80 max-h-[min(70vh,28rem)] flex flex-col rounded-xl border border-slate-200 bg-white shadow-xl transition-all duration-150 dark:border-slate-700 dark:bg-slate-900 ${
                      isDesktopGroupOpen
                        ? "visible opacity-100"
                        : "invisible opacity-0"
                    }`}
                  >
                    <div className="overflow-y-auto overscroll-contain p-3 [scrollbar-gutter:stable]">
                    {group.items.map((item) => {
                      const isExternal = item.href.startsWith("http");
                      if (item.officialSiteUrl) {
                        return (
                          <div
                            key={item.name}
                            className={`rounded-lg border p-3 ${
                              pathname.startsWith(item.href)
                                ? "border-slate-300 bg-slate-100 dark:border-slate-600 dark:bg-slate-800"
                                : "border-transparent hover:border-slate-300 hover:bg-slate-50 dark:hover:border-slate-600 dark:hover:bg-slate-800"
                            }`}
                          >
                            <Link
                              href={item.href}
                              onClick={() => {
                                setIsMenuOpen(false);
                                setOpenDesktopGroup(null);
                              }}
                              className="block focus-visible:rounded focus-visible:ring-2 focus-visible:ring-slate-900 dark:focus-visible:ring-slate-50"
                            >
                              <div className="flex flex-wrap items-center gap-2">
                                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                                  {item.name}
                                </p>
                                {item.badge === "flagship" && (
                                  <span className="rounded bg-emerald-100 px-1.5 py-0.5 text-[10px] font-medium text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-300">
                                    Flagship
                                  </span>
                                )}
                              </div>
                              {item.description && (
                                <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                                  {item.description}
                                </p>
                              )}
                            </Link>
                            <TrackedExternalLink
                              href={item.officialSiteUrl}
                              onClick={() => {
                                setIsMenuOpen(false);
                                setOpenDesktopGroup(null);
                              }}
                              className="mt-2 inline-block text-xs font-medium text-emerald-600 dark:text-emerald-400 hover:underline"
                              eventName="rentflow_official_click"
                              eventParams={{ location: "navbar_desktop" }}
                            >
                              Visit RentFlow.in →
                            </TrackedExternalLink>
                          </div>
                        );
                      }
                      if (isExternal) {
                        return (
                          <TrackedExternalLink
                            key={item.name}
                            href={item.href}
                            onClick={() => {
                              setIsMenuOpen(false);
                              setOpenDesktopGroup(null);
                            }}
                            className={`block rounded-lg border p-3 transition-colors focus-visible:ring-2 focus-visible:ring-slate-900 dark:focus-visible:ring-slate-50 ${
                              pathname === item.href
                                ? "border-slate-300 bg-slate-100 dark:border-slate-600 dark:bg-slate-800"
                                : "border-transparent hover:border-slate-300 hover:bg-slate-50 dark:hover:border-slate-600 dark:hover:bg-slate-800"
                            }`}
                            eventName="vyxnos_nav_click"
                            eventParams={{ location: "navbar_desktop" }}
                          >
                            <div className="flex flex-wrap items-center gap-2">
                              <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                                {item.name}
                              </p>
                            </div>
                            {item.description && (
                              <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                                {item.description}
                              </p>
                            )}
                          </TrackedExternalLink>
                        );
                      }
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => {
                            setIsMenuOpen(false);
                            setOpenDesktopGroup(null);
                          }}
                          className={`block rounded-lg p-3 transition-colors focus-visible:ring-2 focus-visible:ring-slate-900 dark:focus-visible:ring-slate-50 ${
                            pathname.startsWith(item.href)
                              ? "border border-slate-300 bg-slate-100 dark:border-slate-600 dark:bg-slate-800"
                              : "border border-transparent hover:border-slate-300 hover:bg-slate-50 dark:hover:border-slate-600 dark:hover:bg-slate-800"
                          }`}
                        >
                          <div className="flex flex-wrap items-center gap-2">
                            <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                              {item.name}
                            </p>
                            {item.badge === "flagship" && (
                              <span className="rounded bg-emerald-100 px-1.5 py-0.5 text-[10px] font-medium text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-300">
                                Flagship
                              </span>
                            )}
                            {item.badge === "in-development" && (
                              <span className="rounded border border-slate-300 bg-white px-1.5 py-0.5 text-[10px] font-medium text-slate-600 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-400">
                                In Development
                              </span>
                            )}
                          </div>
                          {item.description && (
                            <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                              {item.description}
                            </p>
                          )}
                        </Link>
                      );
                    })}
                    </div>
                  </div>
                </div>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            {actionLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={item.className}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <button
            type="button"
            className="md:hidden min-h-[48px] rounded-lg border border-slate-300 dark:border-slate-700 px-3 py-2 text-base font-medium text-slate-700 dark:text-slate-200 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800 focus-visible:ring-2 focus-visible:ring-slate-900 dark:focus-visible:ring-slate-50 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? "Close" : "Menu"}
          </button>
        </div>

        {isMenuOpen && (
          <div
            id="mobile-nav"
            className="border-t border-slate-200 md:hidden dark:border-slate-800 max-h-[calc(100vh-4rem)] min-h-0 flex flex-col overflow-hidden"
          >
            <nav
              className="flex flex-col gap-1 overflow-y-auto overscroll-contain py-3 pb-[env(safe-area-inset-bottom)] [scrollbar-gutter:stable]"
              aria-label="Mobile navigation"
            >
              {navGroups.map((group) => (
                <div
                  key={group.name}
                  className="rounded-lg border border-slate-200 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-800/50"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    {group.name}
                  </p>
                  {group.items.map((item) => {
                    const isExternal = item.href.startsWith("http");
                    const isActive = !isExternal && pathname.startsWith(item.href);
                    if (isExternal) {
                      return (
                        <div key={item.name} className="mt-2">
                          <TrackedExternalLink
                            href={item.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="flex min-h-[48px] items-center rounded-md px-3 py-2 text-base font-medium text-slate-700 transition-colors hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700 focus-visible:ring-2 focus-visible:ring-slate-900 dark:focus-visible:ring-slate-50 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900"
                            eventName="vyxnos_nav_click"
                            eventParams={{ location: "navbar_mobile" }}
                          >
                            {item.name}
                          </TrackedExternalLink>
                        </div>
                      );
                    }
                    return (
                      <div key={item.name} className="mt-2">
                        <Link
                          href={item.href}
                          onClick={() => setIsMenuOpen(false)}
                          className={`flex min-h-[48px] items-center rounded-md px-3 py-2 text-base font-medium transition-colors focus-visible:ring-2 focus-visible:ring-slate-900 dark:focus-visible:ring-slate-50 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900 ${
                            isActive
                              ? "bg-slate-100 text-slate-900 dark:bg-slate-700 dark:text-slate-100"
                              : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
                          }`}
                        >
                          {item.name}
                        </Link>
                        {"officialSiteUrl" in item && item.officialSiteUrl && (
                          <TrackedExternalLink
                            href={item.officialSiteUrl}
                            onClick={() => setIsMenuOpen(false)}
                            className="ml-3 inline-flex min-h-[44px] items-center text-sm font-medium text-emerald-600 dark:text-emerald-400"
                            eventName="rentflow_official_click"
                            eventParams={{ location: "navbar_mobile" }}
                          >
                            RentFlow.in →
                          </TrackedExternalLink>
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}

              <div className="mt-2 grid gap-2 sm:grid-cols-2">
                {actionLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={item.className}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}
