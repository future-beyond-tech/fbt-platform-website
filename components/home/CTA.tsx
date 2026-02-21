import Container from "@/components/layout/Container";

export default function CTA() {
  return (
    <section
      className="bg-slate-900 py-20 text-white dark:bg-slate-950 sm:py-28 lg:py-32"
      aria-labelledby="cta-heading"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="cta-heading" className="text-2xl font-semibold text-white sm:text-3xl">
            Start with a Free Architecture Assessment
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-300 sm:text-base">
            No commitment. We&apos;ll review your current setup and identify 3
            critical improvements.
          </p>

          <form
            name="free-assessment-request"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            action="/assessment?submitted=true"
            className="mt-8 space-y-4 sm:mt-10"
          >
            <input type="hidden" name="form-name" value="free-assessment-request" />
            <input type="hidden" name="requestType" value="homepage-footer-cta" />

            <div className="hidden" aria-hidden="true">
              <label htmlFor="bot-field">Do not fill this out</label>
              <input id="bot-field" name="bot-field" type="text" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="mx-auto flex max-w-xl flex-col gap-3 sm:flex-row">
              <label htmlFor="assessment-email" className="sr-only">
                Work email address
              </label>
              <input
                id="assessment-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@company.com"
                className="min-h-[44px] w-full rounded-lg border border-slate-600 bg-slate-800 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/70"
              />
              <button
                type="submit"
                className="inline-flex min-h-[44px] shrink-0 items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-medium text-slate-900 transition-colors hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 dark:focus-visible:ring-offset-slate-950"
              >
                Book Assessment
              </button>
            </div>
          </form>

          <p className="mt-4 text-xs text-slate-300 sm:text-sm">
            We respect your inbox. No spam, ever.
          </p>
        </div>
      </Container>
    </section>
  );
}
