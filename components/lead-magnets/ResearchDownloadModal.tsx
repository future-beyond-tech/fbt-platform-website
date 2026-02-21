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

type ResearchDownloadModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  researchTitle?: string;
  source?: string;
};

type TriggerProps = {
  buttonLabel?: string;
  className?: string;
  researchTitle?: string;
  source?: string;
};

type FormDataState = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  role: string;
  website: string;
};

const roleOptions = [
  { value: "security", label: "Security Engineer" },
  { value: "compliance", label: "Compliance or Regulatory" },
  { value: "product", label: "Product Manager" },
  { value: "executive", label: "Executive" },
  { value: "other", label: "Other" },
] as const;

const initialState: FormDataState = {
  firstName: "",
  lastName: "",
  email: "",
  company: "",
  role: "",
  website: "",
};

export function ResearchDownloadModal({
  open,
  onOpenChange,
  researchTitle = "Medical Device Vulnerability Assessment",
  source = "unknown",
}: ResearchDownloadModalProps) {
  const [formData, setFormData] = useState<FormDataState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage(null);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/lead-magnets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          type: "research-download",
          research: researchTitle,
          source,
        }),
      });

      if (!response.ok) {
        const result = (await response.json().catch(() => null)) as
          | { error?: string }
          | null;
        setErrorMessage(
          result?.error ?? "Unable to submit your request right now."
        );
        return;
      }

      setSubmitted(true);
      if (typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag("event", "lead_magnet_signup", {
          type: "research-download",
          source,
          research: researchTitle,
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

  if (!open) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-900/70 px-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="research-download-title"
      onClick={() => onOpenChange(false)}
    >
      <div
        className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-6 shadow-xl dark:border-slate-700 dark:bg-slate-900 sm:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <h3
            id="research-download-title"
            className="text-lg font-semibold text-slate-900 dark:text-slate-100"
          >
            Download Research and Security Checklist
          </h3>
          <button
            type="button"
            aria-label="Close modal"
            className="rounded-md border border-slate-300 px-2.5 py-1.5 text-sm text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
            onClick={() => onOpenChange(false)}
          >
            Close
          </button>
        </div>

        {submitted ? (
          <div className="mt-5 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900 dark:border-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-200">
            Download request confirmed. We sent the research package to{" "}
            <strong>{formData.email}</strong>.
          </div>
        ) : (
          <form className="mt-5 space-y-4" onSubmit={handleSubmit}>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Get the full research PDF and medical device security checklist.
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              <Input
                label="First Name"
                value={formData.firstName}
                onChange={(value) =>
                  setFormData((prev) => ({ ...prev, firstName: value }))
                }
              />
              <Input
                label="Last Name"
                value={formData.lastName}
                onChange={(value) =>
                  setFormData((prev) => ({ ...prev, lastName: value }))
                }
              />
            </div>

            <Input
              label="Work Email"
              type="email"
              value={formData.email}
              onChange={(value) =>
                setFormData((prev) => ({ ...prev, email: value }))
              }
            />

            <Input
              label="Company"
              value={formData.company}
              onChange={(value) =>
                setFormData((prev) => ({ ...prev, company: value }))
              }
            />

            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
              Role
              <select
                required
                value={formData.role}
                onChange={(event) =>
                  setFormData((prev) => ({ ...prev, role: event.target.value }))
                }
                className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-base text-slate-900 focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-50 dark:focus:border-slate-50 dark:focus:ring-slate-50"
              >
                <option value="">Select your role...</option>
                {roleOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>

            <div className="hidden" aria-hidden="true">
              <label htmlFor={`website-${source}`}>Website</label>
              <input
                id={`website-${source}`}
                name="website"
                value={formData.website}
                onChange={(event) =>
                  setFormData((prev) => ({ ...prev, website: event.target.value }))
                }
                autoComplete="off"
                tabIndex={-1}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex min-h-[44px] w-full items-center justify-center rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-75"
            >
              {isSubmitting ? "Submitting..." : "Download Now"}
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
  );
}

export function ResearchDownloadModalTrigger({
  buttonLabel = "Download Research Kit",
  className,
  researchTitle = "Medical Device Vulnerability Assessment",
  source = "unknown",
}: TriggerProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className={className}
        onClick={() => {
          setOpen(true);
          if (typeof window !== "undefined" && typeof window.gtag === "function") {
            window.gtag("event", "cta_click", {
              type: "download-research-kit",
              source,
              research: researchTitle,
            });
          }
        }}
      >
        {buttonLabel}
      </button>
      <ResearchDownloadModal
        open={open}
        onOpenChange={setOpen}
        researchTitle={researchTitle}
        source={source}
      />
    </>
  );
}

function Input({
  label,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
}) {
  return (
    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
      {label}
      <input
        required
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-50 dark:placeholder:text-slate-500 dark:focus:border-slate-50 dark:focus:ring-slate-50"
      />
    </label>
  );
}
