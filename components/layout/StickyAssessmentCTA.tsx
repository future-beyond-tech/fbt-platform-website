"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Container from "./Container";

export default function StickyAssessmentCTA() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (pathname !== "/") {
      return;
    }

    const hero = document.getElementById("home-hero");
    if (!hero) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(hero);

    return () => observer.disconnect();
  }, [pathname]);

  const showBar = pathname === "/" && isVisible;

  return (
    <div
      className={`fixed left-0 right-0 top-14 z-40 transition-all duration-300 sm:top-16 ${
        showBar
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0 pointer-events-none"
      }`}
      aria-hidden={!showBar}
    >
      <div className="border-y border-slate-200 bg-white/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/85 dark:border-slate-800 dark:bg-slate-900/95 dark:supports-[backdrop-filter]:bg-slate-900/85">
        <Container>
          <div className="flex min-h-[52px] items-center justify-between gap-3 py-2">
            <Link
              href="/"
              className="text-sm font-semibold tracking-tight text-slate-900 dark:text-slate-50"
            >
              FBT
            </Link>
            <Link
              href="/assessment"
              className="inline-flex min-h-[40px] items-center justify-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200"
            >
              Book Assessment -&gt;
            </Link>
          </div>
        </Container>
      </div>
    </div>
  );
}
