import Image from "next/image";
import Container from "@/components/layout/Container";
import { defaultMetadata } from "@/lib/seo";

const challengePoints = [
  "Computer vision models drifted between plants because lighting, camera angle, and line speed varied by shift.",
  "Inference workloads were tightly coupled to line controllers, causing downtime when model updates failed.",
  "Security and governance controls for training data, model artifacts, and edge deployment were inconsistent.",
];

const results = [
  { label: "False positive defect alerts", value: "22% -> 7%" },
  { label: "Inspection throughput", value: "+34% without added hardware" },
  { label: "Model rollout reliability", value: "99.3% successful edge deployments" },
  { label: "Audit readiness", value: "Full model lineage and access logs" },
];

const implementationSnippet = `public sealed class SignedModelLoader : IModelLoader
{
    private readonly IArtifactVerifier _verifier;
    private readonly IInferenceRuntime _runtime;

    public async Task<ModelHandle> LoadAsync(ModelArtifact artifact, CancellationToken ct)
    {
        var signatureOk = await _verifier.VerifyAsync(artifact, ct);
        if (!signatureOk)
        {
            throw new SecurityException("Model signature verification failed.");
        }

        var handle = await _runtime.LoadAsync(artifact.Path, ct);
        return handle.WithFallback("last-known-good");
    }
}`;

const testingSnippet = `suite: vision-pipeline-validation
stages:
  - name: data-contract-tests
    command: pytest tests/contracts --maxfail=1
  - name: model-regression
    command: python tests/regression/run.py --dataset smoke_v3
  - name: edge-chaos-tests
    command: dotnet test tests/EdgeRuntime.Tests --filter Category=Chaos
  - name: security-gates
    command: trivy fs --exit-code 1 .`;

export const metadata = defaultMetadata(
  "How We Scaled a Manufacturing AI Vision Pipeline",
  "A manufacturing AI case study focused on secure architecture, resilient computer vision deployment, and measurable production gains.",
  "/work/manufacturing-ai"
);

export default function ManufacturingAiCaseStudyPage() {
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
              How We Scaled a Manufacturing AI Vision Pipeline
            </h1>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
              Client Context (anonymous): Global manufacturing group, multi-plant
              operations, high-mix production with strict quality SLAs.
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
                  We mapped model supply-chain risks, camera ingestion trust
                  zones, and attack paths from edge devices into cloud control
                  surfaces.
                </p>
                <Diagram
                  src="/diagrams/manufacturing-cv-pipeline.svg"
                  alt="Computer vision pipeline diagram across edge and cloud"
                />
              </li>

              <li className="space-y-4">
                <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 sm:text-lg">
                  2. Architecture Redesign
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 sm:text-base">
                  We introduced a decoupled edge-to-cloud architecture with signed
                  model distribution, event buffering, and plant-level failover.
                </p>
                <Diagram
                  src="/diagrams/manufacturing-edge-cloud.svg"
                  alt="Architecture redesign with resilient edge-cloud synchronization"
                />
              </li>

              <li className="space-y-4">
                <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 sm:text-lg">
                  3. Implementation
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 sm:text-base">
                  Secure model loading and last-known-good rollback patterns were
                  implemented in the .NET edge runtime to reduce line stoppage
                  risk.
                </p>
                <CodeBlock code={implementationSnippet} />
              </li>

              <li className="space-y-4">
                <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 sm:text-lg">
                  4. Testing
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 sm:text-base">
                  CI included data contracts, model regression checks, edge chaos
                  tests, and infrastructure security gates for every release.
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
              Led by Feroze Basha, .NET Security Specialist, in partnership with
              AI platform and MLOps engineers.
            </p>
          </Section>
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
