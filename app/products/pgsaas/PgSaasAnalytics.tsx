"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (
      command: "event",
      eventName: string,
      params?: Record<string, string | number>
    ) => void;
  }
}

export default function PgSaasAnalytics() {
  useEffect(() => {
    if (typeof window === "undefined" || typeof window.gtag !== "function") {
      return;
    }

    window.gtag("event", "page_view", {
      page_path: "/products/pg-management",
      page_title: "FBT PG SaaS Platform",
    });
  }, []);

  useEffect(() => {
    const target = document.getElementById("technical-architecture");
    if (!target) {
      return;
    }

    let fired = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (
          fired ||
          !entry.isIntersecting ||
          typeof window === "undefined" ||
          typeof window.gtag !== "function"
        ) {
          return;
        }

        fired = true;
        window.gtag("event", "architecture_section_view", {
          section: "technical-architecture",
          page_path: "/products/pg-management",
        });
        observer.disconnect();
      },
      { threshold: 0.35 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return null;
}
