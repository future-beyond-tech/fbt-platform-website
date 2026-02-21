"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";

const STORAGE_KEY = "fbt_exit_intent_dismissed_until";
const DISMISS_DAYS = 3;

export default function ExitIntentPopup() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [email, setEmail] = useState("");

  const shouldEnable = useMemo(
    () => !pathname.startsWith("/thank-you"),
    [pathname]
  );

  useEffect(() => {
    if (!shouldEnable) {
      setIsOpen(false);
      return;
    }

    if (isDismissed()) {
      return;
    }

    const isMobile = window.matchMedia("(max-width: 1023px)").matches;
    let hasTriggered = false;

    const openPopup = () => {
      if (hasTriggered) {
        return;
      }
      hasTriggered = true;
      setIsOpen(true);
    };

    if (!isMobile) {
      const handleMouseLeave = (event: MouseEvent) => {
        if (event.clientY <= 0) {
          openPopup();
        }
      };

      document.addEventListener("mouseleave", handleMouseLeave);
      return () => document.removeEventListener("mouseleave", handleMouseLeave);
    }

    let lastScrollY = window.scrollY;
    let maxScrollY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      maxScrollY = Math.max(maxScrollY, currentY);

      const scrollingUp = currentY < lastScrollY;
      const scrollableHeight = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight
      );
      const reachedHalfPage = maxScrollY / scrollableHeight >= 0.5;
      const scrolledUpEnough = maxScrollY - currentY >= window.innerHeight * 0.5;

      if (scrollingUp && reachedHalfPage && scrolledUpEnough) {
        openPopup();
      }

      lastScrollY = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [shouldEnable]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isOpen]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim()) {
      setErrorMessage("Please provide a valid email address.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/checklist-optin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, website: "" }),
      });

      if (!response.ok) {
        const result = (await response.json().catch(() => null)) as
          | { error?: string }
          | null;
        setErrorMessage(
          result?.error ??
            "Unable to submit right now. Please try again in a moment."
        );
        return;
      }

      setIsSubmitted(true);
      setDismissed();
      window.open(
        "/resources/startup-security-checklist.pdf",
        "_blank",
        "noopener,noreferrer"
      );
    } catch {
      setErrorMessage(
        "Unable to submit right now. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  function closePopup() {
    setDismissed();
    setIsOpen(false);
  }

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/60 px-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-intent-heading"
    >
      <div className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-6 shadow-xl dark:border-slate-700 dark:bg-slate-900 sm:p-8">
        <h2
          id="exit-intent-heading"
          className="text-xl font-semibold text-slate-900 dark:text-slate-50 sm:text-2xl"
        >
          Wait! Get our Security Checklist
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
          27 checks that caught $2M+ in vulnerabilities before they became
          breaches
        </p>

        {isSubmitted ? (
          <p className="mt-6 text-sm text-emerald-700 dark:text-emerald-400">
            Checklist sent. If the file did not open,{" "}
            <a
              href="/resources/startup-security-checklist.pdf"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-2"
            >
              open it here
            </a>
            .
          </p>
        ) : (
          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Email"
                className="min-h-[44px] flex-1 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-base text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-50 dark:placeholder:text-slate-500 dark:focus:border-slate-50 dark:focus:ring-slate-50"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-75 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200"
              >
                {isSubmitting ? "Sending..." : "Send Me The Checklist"}
              </button>
            </div>
            {errorMessage && (
              <p className="text-sm text-red-600 dark:text-red-400">
                {errorMessage}
              </p>
            )}
          </form>
        )}

        <button
          type="button"
          onClick={closePopup}
          className="mt-5 text-sm font-medium text-slate-500 underline decoration-slate-300 underline-offset-2 transition-colors hover:text-slate-700 dark:text-slate-400 dark:decoration-slate-600 dark:hover:text-slate-200"
        >
          [No thanks, I&apos;ll risk it]
        </button>
      </div>
    </div>
  );
}

function isDismissed(): boolean {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return false;
    }
    const timestamp = Number(raw);
    return Number.isFinite(timestamp) && timestamp > Date.now();
  } catch {
    return false;
  }
}

function setDismissed() {
  try {
    const until = Date.now() + DISMISS_DAYS * 24 * 60 * 60 * 1000;
    window.localStorage.setItem(STORAGE_KEY, String(until));
  } catch {
    // Ignore storage errors in private mode and still allow dismissal per session.
  }
}
