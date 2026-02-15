"use client";

import Script from "next/script";
import { useCallback, useEffect, useRef, useState } from "react";

type TurnstileApi = {
  render: (
    container: HTMLElement,
    options: {
      sitekey: string;
      callback: (token: string) => void;
      "expired-callback"?: () => void;
      "error-callback"?: () => void;
      theme?: "auto" | "light" | "dark";
    }
  ) => string;
  reset: (widgetId?: string) => void;
  remove: (widgetId: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

export default function ContactForm() {
  const captchaEnabled = Boolean(turnstileSiteKey);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(
    "Something went wrong while sending your message. Please try again or email us directly."
  );
  const [captchaToken, setCaptchaToken] = useState("");
  const [captchaError, setCaptchaError] = useState<string | null>(null);
  const captchaContainerRef = useRef<HTMLDivElement>(null);
  const captchaWidgetIdRef = useRef<string | null>(null);

  const renderTurnstile = useCallback(() => {
    if (
      !captchaEnabled ||
      !turnstileSiteKey ||
      !captchaContainerRef.current ||
      !window.turnstile ||
      captchaWidgetIdRef.current
    ) {
      return;
    }

    captchaWidgetIdRef.current = window.turnstile.render(
      captchaContainerRef.current,
      {
        sitekey: turnstileSiteKey,
        theme: "auto",
        callback: (token: string) => {
          setCaptchaToken(token);
          setCaptchaError(null);
        },
        "expired-callback": () => {
          setCaptchaToken("");
          setCaptchaError("Captcha expired. Please complete it again.");
        },
        "error-callback": () => {
          setCaptchaToken("");
          setCaptchaError(
            "Captcha failed to load. Refresh the page and try again."
          );
        },
      }
    );
  }, [captchaEnabled]);

  useEffect(() => {
    renderTurnstile();

    return () => {
      if (window.turnstile && captchaWidgetIdRef.current) {
        window.turnstile.remove(captchaWidgetIdRef.current);
        captchaWidgetIdRef.current = null;
      }
    };
  }, [renderTurnstile]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");
    setErrorMessage(
      "Something went wrong while sending your message. Please try again or email us directly."
    );

    const form = e.currentTarget;
    const formData = new FormData(form);

    if (!captchaEnabled) {
      setStatus("error");
      setErrorMessage(
        "Captcha is not configured. Please email us directly at contact@futurebeyondtech.com."
      );
      setLoading(false);
      return;
    }

    if (!captchaToken) {
      setStatus("error");
      setErrorMessage("Please complete the captcha challenge.");
      setLoading(false);
      return;
    }

    const payload = {
      name: readFormValue(formData.get("name")),
      email: readFormValue(formData.get("email")),
      company: readFormValue(formData.get("company")),
      message: readFormValue(formData.get("message")),
      website: readFormValue(formData.get("website")),
      captchaToken,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus("success");
        setCaptchaError(null);
        form.reset();
        setCaptchaToken("");
        if (window.turnstile && captchaWidgetIdRef.current) {
          window.turnstile.reset(captchaWidgetIdRef.current);
        }
        return;
      }

      const result = (await res.json().catch(() => null)) as
        | { error?: string }
        | null;
      setStatus("error");
      setErrorMessage(result?.error ?? "Request failed. Please try again.");
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {captchaEnabled && (
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
          strategy="afterInteractive"
          onLoad={renderTurnstile}
        />
      )}

      <form
        className="mt-12 space-y-5 sm:mt-16 sm:space-y-6"
        noValidate
        onSubmit={handleSubmit}
      >
        <Input label="Name" placeholder="Your full name" />
        <Input label="Email" type="email" placeholder="you@example.com" />
        <Input
          label="Company"
          placeholder="Company or startup name"
          required={false}
        />
        <Textarea
          label="Message"
          placeholder="Tell us briefly about your project, challenge, or idea."
        />

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

        {captchaEnabled ? (
          <div>
            <p className="mb-2 text-sm text-slate-700 dark:text-slate-300">
              Complete the captcha before sending your message.
            </p>
            <div ref={captchaContainerRef} />
            {captchaError && (
              <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                {captchaError}
              </p>
            )}
          </div>
        ) : (
          <p className="text-sm text-red-600 dark:text-red-400">
            Captcha is not configured. Please email us directly at
            {" "}
            contact@futurebeyondtech.com.
          </p>
        )}

        <div className="pt-2 sm:pt-4">
          <button
            type="submit"
            disabled={loading || !captchaEnabled}
            className="w-full min-h-[44px] rounded-lg bg-slate-900 dark:bg-slate-50 px-6 py-3 text-sm font-medium text-white dark:text-slate-900 transition-colors hover:bg-slate-800 dark:hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-70 focus-visible:ring-2 focus-visible:ring-slate-900 dark:focus-visible:ring-slate-50 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900"
          >
            {loading ? "Sending…" : "Send Message"}
          </button>
        </div>

        {status === "success" && (
          <p className="text-sm text-emerald-600 dark:text-emerald-400">
            Thanks for reaching out. We&rsquo;ve received your message and will
            get back to you shortly.
          </p>
        )}

        {status === "error" && (
          <p className="text-sm text-red-600 dark:text-red-400">
            {errorMessage}
          </p>
        )}
      </form>
    </>
  );
}

/* ---------- Input Component ---------- */

function Input({
  label,
  type = "text",
  placeholder,
  required = true,
}: {
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  const id = label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-slate-700 dark:text-slate-300"
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        required={required}
        className="mt-2 w-full min-h-[44px] rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-3 text-base text-slate-900 dark:text-slate-50 placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-colors focus:border-slate-900 dark:focus:border-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-slate-50"
      />
    </div>
  );
}

/* ---------- Textarea Component ---------- */

function Textarea({
  label,
  placeholder,
}: {
  label: string;
  placeholder?: string;
}) {
  const id = label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-slate-700 dark:text-slate-300"
      >
        {label}
      </label>
      <textarea
        id={id}
        name={id}
        rows={5}
        required
        placeholder={placeholder}
        className="mt-2 w-full min-h-[120px] rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-3 text-base text-slate-900 dark:text-slate-50 placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-colors focus:border-slate-900 dark:focus:border-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-slate-50"
      />
    </div>
  );
}

function readFormValue(value: FormDataEntryValue | null): string {
  return typeof value === "string" ? value : "";
}
