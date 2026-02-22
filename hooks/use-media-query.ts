"use client";

import { useState, useEffect } from "react";

/**
 * Hook to match a media query. Use for conditional rendering only when necessary;
 * prefer CSS (Tailwind breakpoints) for styling.
 * @param query - CSS media query string (e.g. "(max-width: 768px)" or "(min-width: 1024px)")
 * @returns whether the query matches
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const media = window.matchMedia(query);
    setMatches(media.matches);
    const listener = (e: MediaQueryListEvent) => setMatches(e.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
}
