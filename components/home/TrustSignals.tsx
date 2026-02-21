import Container from "@/components/layout/Container";

const trustSignals = [
  "AWS Partner",
  "Microsoft Azure",
  "Docker",
  "Kubernetes",
  "OWASP Compliant",
  "ISO 27001 Aligned",
];

export default function TrustSignals() {
  return (
    <section
      className="border-y border-slate-200 bg-slate-50/70 py-8 dark:border-slate-800 dark:bg-slate-900/40"
      aria-labelledby="trust-signals-heading"
    >
      <Container>
        <div className="flex flex-col items-center gap-4 text-center sm:gap-5">
          <h2
            id="trust-signals-heading"
            className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-600 dark:text-slate-300"
          >
            Trusted Tools &amp; Standards:
          </h2>
          <ul className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3" role="list">
            {trustSignals.map((signal) => (
              <li
                key={signal}
                className="rounded-full border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 sm:text-sm"
              >
                {signal}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
