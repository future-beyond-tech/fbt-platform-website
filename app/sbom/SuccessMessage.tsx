"use client";

import { useSearchParams } from "next/navigation";

export function SuccessMessage() {
  const searchParams = useSearchParams();
  const success = searchParams.get("success");
  const error = searchParams.get("error");

  if (success) {
    return (
      <div className="mb-6 rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4">
        <p className="font-medium text-emerald-400">
          ✓ You&apos;re on the list. We&apos;ll notify you at launch.
        </p>
      </div>
    );
  }

  if (error === "invalid_email") {
    return (
      <div className="mb-6 rounded-lg border border-red-500/30 bg-red-500/10 p-4">
        <p className="font-medium text-red-400">
          Please enter a valid email address.
        </p>
      </div>
    );
  }

  if (error === "rate_limit") {
    return (
      <div className="mb-6 rounded-lg border border-amber-500/30 bg-amber-500/10 p-4">
        <p className="font-medium text-amber-400">
          Too many attempts. Please try again in a few minutes.
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mb-6 rounded-lg border border-red-500/30 bg-red-500/10 p-4">
        <p className="font-medium text-red-400">
          Something went wrong. Please try again.
        </p>
      </div>
    );
  }

  return null;
}
