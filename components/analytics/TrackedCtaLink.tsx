"use client";

import type { ReactNode } from "react";
import Link from "next/link";

declare global {
  interface Window {
    gtag?: (
      command: "event",
      eventName: string,
      params?: Record<string, string | number>
    ) => void;
  }
}

type TrackedCtaLinkProps = {
  href: string;
  eventName: string;
  eventParams?: Record<string, string | number>;
  className: string;
  children: ReactNode;
};

export default function TrackedCtaLink({
  href,
  eventName,
  eventParams,
  className,
  children,
}: TrackedCtaLinkProps) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => {
        if (typeof window === "undefined" || typeof window.gtag !== "function") {
          return;
        }

        window.gtag("event", eventName, eventParams);
      }}
    >
      {children}
    </Link>
  );
}
