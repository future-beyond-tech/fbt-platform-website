import Link from "next/link";
import Container from "@/components/layout/Container";
import JsonLd from "@/components/seo/JsonLd";
import { defaultMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/siteConfig";
import { breadcrumbSchema } from "@/lib/structuredData";

const title = "Startup Security & Fast SOC 2 Compliance";
const description =
  "The $50K mistake every startup makes, plus a practical 8-week SOC 2 timeline, evidence checkpoints, and the 5 recurring security mistakes we see in startup codebases.";

export const metadata = defaultMetadata(title, description, "/pillars/startup-security-soc2");

export default function StartupSecuritySoc2PillarPage() {
  const breadcrumbStructured = breadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Pillars", url: `${siteConfig.url}/pillars/startup-security-soc2` },
    { name: "Startup Security & SOC 2", url: `${siteConfig.url}/pillars/startup-security-soc2` },
  ]);

  return (
    <article className="py-20 sm:py-24 lg:py-32" aria-labelledby="pillar-heading">
      <JsonLd data={breadcrumbStructured} />
      <Container>
        <div className="mx-auto max-w-3xl">
          <header className="space-y-4">
            <Link
              href="/blog"
              className="text-sm font-medium text-slate-600 underline decoration-slate-300 underline-offset-2 hover:text-slate-900 dark:text-slate-400 dark:decoration-slate-700 dark:hover:text-slate-100"
            >
              Blog &amp; Pillars
            </Link>
            <h1
              id="pillar-heading"
              className="text-2xl font-semibold text-slate-900 dark:text-slate-50 sm:text-3xl lg:text-4xl"
            >
              Startup Security &amp; Fast SOC 2 Compliance
            </h1>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
              How to avoid the most expensive startup security mistakes and run a tight, evidence-based SOC 2 readiness program without hiring a full security team.
            </p>
          </header>

          <div className="mt-10 space-y-8 text-sm leading-relaxed text-slate-700 dark:text-slate-300 sm:text-base">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100 sm:text-xl">
              The $50K Mistake Every Startup Makes
            </h2>
            <p>
              Delaying security design until an enterprise deal or audit forces your hand leads to rework, scope creep, and last-minute consultants. The fix is not “do everything upfront”—it is aligning controls with risk and evidence with audit requirements from the start. We outline the five recurring mistakes we see in startup codebases and how to fix them in <Link href="/blog/startup-security-mistakes-from-50-codebases" className="font-medium text-slate-900 underline dark:text-slate-100">We Analyzed 50 Startup Codebases: 5 Security Mistakes Everyone Makes</Link>.
            </p>

            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100 sm:text-xl">
              Five Recurring Startup Security Mistakes
            </h2>
            <p>
              Broken authorization on internal APIs, secrets in source or client config, over-trusting third-party packages, logging sensitive data by default, and adding security controls too late. Each has a concrete remediation path. Use our <Link href="/resources/startup-security-checklist" className="font-medium text-slate-900 underline dark:text-slate-100">Startup Security Checklist</Link> and <Link href="/resources/soc2-evidence-tracker" className="font-medium text-slate-900 underline dark:text-slate-100">SOC 2 Evidence Tracker</Link> to stay on track.
            </p>

            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100 sm:text-xl">
              8-Week SOC 2 Timeline
            </h2>
            <p>
              Fast SOC 2 compliance for startups is possible with tight scope, clear ownership, and weekly execution. We break it into evidence collection phases, control implementation checkpoints, and review prep. See the full playbook in <Link href="/blog/pass-soc-2-in-8-weeks" className="font-medium text-slate-900 underline dark:text-slate-100">How to Pass SOC 2 in 8 Weeks (Without Hiring a Full Security Team)</Link>.
            </p>

            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100 sm:text-xl">
              Evidence Checkpoints
            </h2>
            <p>
              SOC 2 readiness depends on continuous evidence: access reviews, change management, incident response, and vendor risk. We provide a structured set of checkpoints so you are not scrambling in the final weeks. The SOC 2 Evidence Tracker helps you map controls to evidence and track completion.
            </p>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900/40 sm:p-8">
              <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                Next steps
              </h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <Link href="/resources/startup-security-checklist" className="font-medium text-slate-900 underline dark:text-slate-100">
                    Download the Startup Security Checklist
                  </Link>
                </li>
                <li>
                  <Link href="/resources/soc2-evidence-tracker" className="font-medium text-slate-900 underline dark:text-slate-100">
                    Get the SOC 2 Evidence Tracker
                  </Link>
                </li>
                <li>
                  <Link href="/assessment" className="font-medium text-slate-900 underline dark:text-slate-100">
                    Book a free Security &amp; Architecture Assessment
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </article>
  );
}
