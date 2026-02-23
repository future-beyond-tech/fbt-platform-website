"use client";

import { FormEvent, useState } from "react";

declare global {
  interface Window {
    gtag?: (
      command: "event",
      eventName: string,
      params?: Record<string, string | number>
    ) => void;
  }
}

type SecurityChecklistModalTriggerProps = {
  buttonLabel?: string;
  className?: string;
  source?: string;
};

export function SecurityChecklistModalTrigger({
  buttonLabel = "Download Security Standards",
  className,
  source = "unknown",
}: SecurityChecklistModalTriggerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email) {
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/lead-magnets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          type: "security-checklist",
          source,
          website,
        }),
      });

      if (!response.ok) {
        const result = (await response.json().catch(() => null)) as
          | { error?: string }
          | null;
        setErrorMessage(
          result?.error ?? "Unable to submit. Please try again in a moment."
        );
        return;
      }

      setSubmitted(true);
      if (typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag("event", "lead_magnet_signup", {
          type: "security-checklist",
          source,
        });
      }
    } catch {
      setErrorMessage(
        "Unable to submit right now. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <button
        type="button"
        className={className}
        onClick={() => {
          setIsOpen(true);
          if (typeof window !== "undefined" && typeof window.gtag === "function") {
            window.gtag("event", "cta_click", {
              page: "/products/zentra",
              type: "download-checklist",
              source,
            });
          }
        }}
      >
        {buttonLabel}
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-900/70 px-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="security-checklist-title"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-xl dark:border-slate-700 dark:bg-slate-900 sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <h3
                id="security-checklist-title"
                className="text-lg font-semibold text-slate-900 dark:text-slate-100"
              >
                Enterprise Auth Architecture Checklist
              </h3>
              <button
                type="button"
                aria-label="Close modal"
                className="rounded-md border border-slate-300 px-2.5 py-1.5 text-sm text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
                onClick={() => setIsOpen(false)}
              >
                Close
              </button>
            </div>

            {submitted ? (
              <div className="mt-5 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900 dark:border-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-200">
                Check your email for the download link and implementation
                checklist.
              </div>
            ) : (
              <form className="mt-5 space-y-4" onSubmit={handleSubmit}>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  50-point checklist covering OAuth 2.0 implementation, common
                  vulnerability patterns, and compliance requirements.
                </p>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Work email
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="work-email@company.com"
                    className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-50 dark:placeholder:text-slate-500 dark:focus:border-slate-50 dark:focus:ring-slate-50"
                  />
                </label>

                <div className="hidden" aria-hidden="true">
                  <label htmlFor={`website-${source}`}>Website</label>
                  <input
                    id={`website-${source}`}
                    name="website"
                    value={website}
                    onChange={(event) => setWebsite(event.target.value)}
                    autoComplete="off"
                    tabIndex={-1}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex min-h-[44px] w-full items-center justify-center rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-75 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200"
                >
                  {isSubmitting ? "Submitting..." : "Download Free Checklist"}
                </button>

                {errorMessage && (
                  <p className="text-sm text-red-600 dark:text-red-400">
                    {errorMessage}
                  </p>
                )}

                <p className="text-xs text-slate-500 dark:text-slate-400">
                  No spam. Unsubscribe any time.
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
