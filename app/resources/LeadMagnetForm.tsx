"use client";

import { FormEvent, useState } from "react";

const stages = ["pre-seed", "seed", "Series A+", "Growth"] as const;

export default function LeadMagnetForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const formData = new FormData(form);
    const payload = {
      firstName: readFormValue(formData.get("firstName")),
      email: readFormValue(formData.get("email")),
      companyStage: readFormValue(formData.get("companyStage")),
      website: readFormValue(formData.get("website")),
    };

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/lead-magnet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
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
      form.reset();
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

  return (
    <form
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-8"
      onSubmit={handleSubmit}
    >
      <div className="space-y-5">
        <Input
          label="First Name"
          name="firstName"
          placeholder="Your first name"
        />
        <Input
          label="Email"
          name="email"
          type="email"
          placeholder="you@company.com"
        />
        <div>
          <label
            htmlFor="companyStage"
            className="block text-sm font-medium text-slate-700 dark:text-slate-300"
          >
            Company Stage
          </label>
          <select
            id="companyStage"
            name="companyStage"
            required
            defaultValue=""
            className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-50 dark:focus:border-slate-50 dark:focus:ring-slate-50"
          >
            <option value="" disabled>
              Select your stage
            </option>
            {stages.map((stage) => (
              <option key={stage} value={stage}>
                {stage}
              </option>
            ))}
          </select>
        </div>

        <div className="hidden" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input
            id="website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex min-h-[44px] w-full items-center justify-center rounded-lg bg-slate-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-75 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200"
        >
          {isSubmitting ? "Preparing Checklist..." : "Download Checklist"}
        </button>
      </div>

      {errorMessage && (
        <p className="mt-4 text-sm text-red-600 dark:text-red-400">
          {errorMessage}
        </p>
      )}

      {isSubmitted && (
        <p className="mt-4 text-sm text-emerald-700 dark:text-emerald-400">
          Checklist unlocked. If the download did not start,{" "}
          <a
            href="/resources/startup-security-checklist.pdf"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-2"
          >
            open the PDF here
          </a>
          .
        </p>
      )}
    </form>
  );
}

function Input({
  label,
  name,
  placeholder,
  type = "text",
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-slate-700 dark:text-slate-300"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-50 dark:placeholder:text-slate-500 dark:focus:border-slate-50 dark:focus:ring-slate-50"
      />
    </div>
  );
}

function readFormValue(value: FormDataEntryValue | null): string {
  return typeof value === "string" ? value : "";
}
