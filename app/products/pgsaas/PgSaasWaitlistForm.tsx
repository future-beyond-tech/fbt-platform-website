"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

const propertyTypes = ["Single PG", "Multi-Property", "Enterprise Chain"] as const;
const bedCountOptions = ["1-10", "11-50", "51-200", "200+"] as const;
const painPoints = [
  "Rent tracking",
  "Power billing",
  "Tenant management",
  "Multi-property control",
  "Reporting",
] as const;

declare global {
  interface Window {
    gtag?: (
      command: "event",
      eventName: string,
      params?: Record<string, string | number>
    ) => void;
  }
}

export default function PgSaasWaitlistForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
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
      name: readFormValue(formData.get("name")),
      email: readFormValue(formData.get("email")),
      phone: readFormValue(formData.get("phone")),
      propertyType: readFormValue(formData.get("propertyType")),
      bedCount: readFormValue(formData.get("bedCount")),
      painPoint: readFormValue(formData.get("painPoint")),
      website: readFormValue(formData.get("website")),
    };

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/pgsaas-waitlist", {
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
            "Unable to join waitlist right now. Please try again in a moment."
        );
        return;
      }

      if (typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag("event", "waitlist_signup", {
          product: "pg_management_saas",
          property_type: payload.propertyType,
          bed_count: payload.bedCount,
          pain_point: payload.painPoint,
        });
      }

      router.push("/products/pg-management/waitlist");
    } catch {
      setErrorMessage(
        "Unable to join waitlist right now. Please check your connection and try again."
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
      <div className="grid gap-5 sm:grid-cols-2">
        <Input label="Name" name="name" placeholder="Your full name" />
        <Input
          label="Email"
          name="email"
          type="email"
          placeholder="you@company.com"
        />
        <Input
          label="Phone"
          name="phone"
          type="tel"
          placeholder="+91 90000 00000"
        />
        <Select label="Property Type" name="propertyType" options={propertyTypes} />
        <Select label="Number of Beds" name="bedCount" options={bedCountOptions} />
        <Select
          label="Biggest Pain Point"
          name="painPoint"
          options={painPoints}
        />
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
        className="mt-6 inline-flex min-h-[44px] w-full items-center justify-center rounded-lg bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-75 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200"
      >
        {isSubmitting ? "Joining Waitlist..." : "Join Waitlist"}
      </button>

      {errorMessage && (
        <p className="mt-3 text-sm text-red-600 dark:text-red-400">
          {errorMessage}
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

function Select({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: readonly string[];
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-slate-700 dark:text-slate-300"
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        required
        defaultValue=""
        className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-50 dark:focus:border-slate-50 dark:focus:ring-slate-50"
      >
        <option value="" disabled>
          Select an option
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

function readFormValue(value: FormDataEntryValue | null): string {
  return typeof value === "string" ? value : "";
}
