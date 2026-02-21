import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import { defaultMetadata } from "@/lib/seo";

const challengePoints = [
  "Critical API endpoints accepted over-scoped tokens and lacked consistent authorization boundaries.",
  "Audit pressure increased due to SOC 2 readiness and PCI-aligned controls needed by enterprise buyers.",
  "Daily transaction volume was rising quickly, creating performance risk across fraud checks and settlement workflows.",
];

const results = [
  { label: "High-severity vulnerabilities", value: "14 -> 0 in 6 weeks" },
  { label: "Compliance readiness", value: "SOC 2 evidence pack completed" },
  { label: "p99 API latency", value: "480ms -> 220ms at 3x load" },
  { label: "Security test coverage", value: "42% -> 91% critical paths" },
];

const implementationSnippet = `app.MapPost("/v1/payouts", async (
    PayoutRequest request,
    ClaimsPrincipal user,
    IFraudPolicyEngine fraud,
    IPayoutService payouts,
    CancellationToken ct) =>
{
    if (!user.HasClaim("scope", "payouts:write"))
    {
        return Results.Forbid();
    }

    var riskResult = await fraud.EvaluateAsync(request, ct);
    if (!riskResult.Allowed)
    {
        return Results.BadRequest(new { error = "Blocked by risk policy" });
    }

    var result = await payouts.CreateAsync(request, ct);
    return Results.Ok(result);
})
.RequireAuthorization("payout_writer")
.RequireRateLimiting("payments-api")
.WithName("CreatePayout");`;

const testingSnippet = `name: security-quality-gate
on:
  pull_request:
  push:
    branches: [dev, main]

jobs:
  security:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: returntocorp/semgrep-action@v1
      - name: Dependency scan
        run: dotnet list src/Platform.Api package --vulnerable
      - name: OWASP ZAP baseline
        run: docker run --rm -t owasp/zap2docker-stable zap-baseline.py -t https://staging.api.example.com`;

export const metadata = defaultMetadata(
  "How We Secured a FinTech API Processing $2M Daily",
  "A fintech security case study covering threat modeling, architecture redesign, and secure implementation patterns.",
  "/work/fintech-security"
);

export default function FintechSecurityCaseStudyPage() {
  return (
    <article className="py-20 sm:py-24 lg:py-32" aria-labelledby="case-title">
      <Container>
        <div className="mx-auto max-w-4xl space-y-12">
          <header className="space-y-4">
            <p className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400 sm:text-sm">
              Case Study
            </p>
            <h1
              id="case-title"
              className="text-2xl font-semibold text-slate-900 dark:text-slate-50 sm:text-3xl lg:text-4xl"
            >
              How We Secured a FinTech API Processing $2M Daily
            </h1>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
              Client Context (anonymous): High-growth payment startup, Series A,
              50K users.
            </p>
          </header>

          <Section title="Challenge">
            <ul className="space-y-3">
              {challengePoints.map((point) => (
                <li
                  key={point}
                  className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-800/40 dark:text-slate-300 sm:text-base"
                >
                  {point}
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Our Process">
            <ol className="space-y-8">
              <li className="space-y-4">
                <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 sm:text-lg">
                  1. Threat Modeling
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 sm:text-base">
                  We mapped trust boundaries, identified misuse paths for payout
                  APIs, and ranked remediation by exploitability and blast radius.
                </p>
                <Diagram
                  src="/diagrams/fintech-threat-model.svg"
                  alt="Threat model diagram for fintech API platform"
                />
              </li>

              <li className="space-y-4">
                <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 sm:text-lg">
                  2. Architecture Redesign
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 sm:text-base">
                  We moved from a fragile point-to-point API model to a segmented
                  service architecture with policy enforcement and event-driven
                  settlement orchestration.
                </p>
                <Diagram
                  src="/diagrams/fintech-architecture-redesign.svg"
                  alt="Before and after architecture redesign diagram"
                />
              </li>

              <li className="space-y-4">
                <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 sm:text-lg">
                  3. Implementation
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 sm:text-base">
                  Security controls were embedded in endpoint policies, token scope
                  checks, and risk-scored command execution patterns.
                </p>
                <CodeBlock code={implementationSnippet} />
              </li>

              <li className="space-y-4">
                <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 sm:text-lg">
                  4. Testing
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 sm:text-base">
                  We introduced an automated security pipeline spanning SAST,
                  dependency scanning, and baseline dynamic tests before release.
                </p>
                <CodeBlock code={testingSnippet} />
              </li>
            </ol>
          </Section>

          <Section title="Results">
            <div className="grid gap-4 sm:grid-cols-2">
              {results.map((result) => (
                <article
                  key={result.label}
                  className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900 sm:p-5"
                >
                  <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    {result.label}
                  </p>
                  <p className="mt-2 text-base font-semibold text-slate-900 dark:text-slate-100 sm:text-lg">
                    {result.value}
                  </p>
                </article>
              ))}
            </div>
          </Section>

          <Section title="Team">
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
              Led by Feroze Basha, .NET Security Specialist.
            </p>
          </Section>

          <section className="pt-2">
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/work"
                className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
              >
                Back to Case Studies
              </Link>
              <Link
                href="/assessment"
                className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200"
              >
                Book Assessment
              </Link>
            </div>
          </section>
        </div>
      </Container>
    </article>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-5">
      <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50 sm:text-xl">
        {title}
      </h2>
      {children}
    </section>
  );
}

function Diagram({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <Image
        src={src}
        alt={alt}
        width={1400}
        height={820}
        loading="lazy"
        decoding="async"
        className="h-auto w-full"
      />
    </div>
  );
}

function CodeBlock({ code }: { code: string }) {
  return (
    <pre className="overflow-x-auto rounded-xl border border-slate-200 bg-slate-950 p-4 text-xs leading-relaxed text-slate-100 dark:border-slate-700 sm:text-sm">
      <code>{code}</code>
    </pre>
  );
}
