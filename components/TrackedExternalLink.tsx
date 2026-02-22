"use client";

import type { ReactNode } from "react";

declare global {
  interface Window {
    gtag?: (
      command: "event",
      eventName: string,
      params?: Record<string, string | number>
    ) => void;
  }
}

type TrackedExternalLinkProps = {
  href: string;
  className?: string;
  children: ReactNode;
  eventName?: string;
  eventParams?: Record<string, string | number>;
  target?: "_blank" | "_self";
  rel?: string;
  onClick?: () => void;
};

export default function TrackedExternalLink({
  href,
  className,
  children,
  eventName = "external_link_click",
  eventParams,
  target = "_blank",
  rel = "noopener noreferrer",
  onClick,
}: TrackedExternalLinkProps) {
  function handleClick() {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", eventName, {
        href,
        ...(eventParams ?? {}),
      });
    }
    onClick?.();
  }

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
