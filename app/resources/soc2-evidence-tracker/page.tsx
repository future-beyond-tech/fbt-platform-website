import Link from "next/link";
import Container from "@/components/layout/Container";
import JsonLd from "@/components/seo/JsonLd";
import { defaultMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/siteConfig";
import { breadcrumbSchema } from "@/lib/structuredData";

const title = "SOC 2 Evidence Tracker for Startups";
const description =
  "Structured SOC 2 evidence tracker: map controls to evidence, track completion, and stay audit-ready. Free template for engineering and security teams.";

export const metadata = defaultMetadata(title, description, "/resources/soc2-evidence-tracker");

export default function Soc2EvidenceTrackerResourcePage() {
  const breadcrumbStructured = breadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Resources", url: `${siteConfig.url}/resources` },
    { name: "SOC 2 Evidence Tracker", url: `${siteConfig.url}/resources/soc2-evidence-tracker` },
  ]);

  return (
    <section className="py-20 sm:py-24 lg:py-32" aria-labelledby="resource-heading">
      <JsonLd data={breadcrumbStructured} />
      <Container>
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-10">
          <div className="space-y-8">
            <header className="space-y-4">
              <Link
                href="/resources"
                className="text-sm font-medium text-slate-600 underline decoration-slate-300 underline-offset-2 hover:text-slate-900 dark:text-slate-400 dark:decoration-slate-700 dark:hover:text-slate-100"
              >
                All resources
              </Link>
              <h1
                id="resource-heading"
                className="text-2xl font-semibold text-slate-900 dark:text-slate-50 sm:text-3xl lg:text-4xl"
              >
                SOC 2 Evidence Tracker
              </h1>
              <p className="max-w-xl text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
                Map controls to evidence, track completion, and stay audit-ready
                without spreadsheets scattered across teams.
              </p>
            </header>

            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100 sm:text-xl">
              What You Get
            </h2>
            <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300 sm:text-base">
              A structured tracker that links SOC 2 control requirements to
              evidence artifacts, owners, and due dates. Use it alongside our{" "}
              <Link href="/blog/pass-soc-2-in-8-weeks" className="font-medium text-slate-900 underline dark:text-slate-100">
                8-week SOC 2 playbook
              </Link>{" "}
              and{" "}
              <Link href="/resources/startup-security-checklist" className="font-medium text-slate-900 underline dark:text-slate-100">
                Startup Security Checklist
              </Link>{" "}
              for a complete readiness workflow.
            </p>

            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100 sm:text-xl">
              Who It&apos;s For
            </h2>
            <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300 sm:text-base">
              Engineering and security leads who need to collect and maintain
              evidence for SOC 2 Type I or Type II without hiring a dedicated
              compliance team. Complements the evidence checkpoints in our{" "}
              <Link href="/pillars/startup-security-soc2" className="font-medium text-slate-900 underline dark:text-slate-100">
                Startup Security & SOC 2 pillar
              </Link>
              .
            </p>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900/40 sm:p-8">
              <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                Get the tracker
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Request the SOC 2 Evidence Tracker and we&apos;ll send it to your
                inbox. You can also get our Startup Security Checklist (PDF)
                from the main resources page.
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-flex min-h-[44px] items-center justify-center rounded-lg bg-slate-900 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200"
              >
                Request SOC 2 Evidence Tracker
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
