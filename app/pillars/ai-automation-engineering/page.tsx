import Link from "next/link";
import Container from "@/components/layout/Container";
import JsonLd from "@/components/seo/JsonLd";
import { defaultMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/siteConfig";
import { breadcrumbSchema } from "@/lib/structuredData";

const title = "AI Automation Engineering: Build vs Buy Framework";
const description =
  "Cost and risk framework for build vs buy AI automation. Decision framework, build scenarios, buy scenarios, hybrid approaches, and when to invest in custom AI pipelines.";

export const metadata = defaultMetadata(title, description, "/pillars/ai-automation-engineering");

export default function AiAutomationEngineeringPillarPage() {
  const breadcrumbStructured = breadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Pillars", url: `${siteConfig.url}/pillars/ai-automation-engineering` },
    { name: "AI Automation Engineering", url: `${siteConfig.url}/pillars/ai-automation-engineering` },
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
              AI Automation Engineering
            </h1>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
              A cost and risk framework for deciding when to build vs buy your AI pipeline, with concrete scenarios and a decision worksheet.
            </p>
          </header>

          <div className="mt-10 space-y-8 text-sm leading-relaxed text-slate-700 dark:text-slate-300 sm:text-base">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100 sm:text-xl">
              Build vs Buy: Cost &amp; Risk Analysis
            </h2>
            <p>
              The $50K mistake is often choosing build or buy for the wrong reasons. We break down total cost (engineering, infra, tooling, opportunity cost), execution risk, and strategic control. For the full framework, read <Link href="/blog/build-vs-buy-ai-pipeline" className="font-medium text-slate-900 underline dark:text-slate-100">The $50K Mistake: When to Build vs Buy Your AI Pipeline</Link>.
            </p>

            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100 sm:text-xl">
              Decision Framework
            </h2>
            <p>
              Key questions: How unique is your use case? Do you have in-house ML/LLM expertise? What is your timeline to value? We provide a decision worksheet that maps answers to build, buy, or hybrid recommendations.
            </p>

            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100 sm:text-xl">
              Build Scenarios
            </h2>
            <p>
              Building makes sense when you need deep customization, proprietary data pipelines, or long-term cost control and you have the team to maintain it. We outline the prerequisites and typical timelines so you can plan realistically.
            </p>

            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100 sm:text-xl">
              Buy &amp; Hybrid Approaches
            </h2>
            <p>
              Buying or using managed services accelerates time-to-value when the use case is well-covered by existing tools and you want to focus on product, not platform. Hybrid approaches—buy for commodity, build for differentiator—often offer the best tradeoff. We help teams map their roadmap to the right mix.
            </p>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900/40 sm:p-8">
              <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                Next steps
              </h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <Link href="/blog/build-vs-buy-ai-pipeline" className="font-medium text-slate-900 underline dark:text-slate-100">
                    Read: The $50K Mistake (Build vs Buy AI)
                  </Link>
                </li>
                <li>
                  <Link href="/assessment" className="font-medium text-slate-900 underline dark:text-slate-100">
                    Book a free Architecture Assessment
                  </Link>
                </li>
                <li>
                  <Link href="/services/ai-automation" className="font-medium text-slate-900 underline dark:text-slate-100">
                    AI Automation Services
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
