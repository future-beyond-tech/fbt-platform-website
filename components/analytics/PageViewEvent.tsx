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

type PageViewEventProps = {
  pagePath: string;
  pageTitle: string;
};

export default function PageViewEvent({ pagePath, pageTitle }: PageViewEventProps) {
  useEffect(() => {
    if (typeof window === "undefined" || typeof window.gtag !== "function") {
      return;
    }

    window.gtag("event", "page_view", {
      page_path: pagePath,
      page_title: pageTitle,
    });
  }, [pagePath, pageTitle]);

  return null;
}
