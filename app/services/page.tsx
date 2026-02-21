import Container from "@/components/layout/Container";
import { defaultMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata = defaultMetadata(
  "Services",
  "Secure, scalable, and intelligent software engineering for startups and security-critical organizations.",
  "/services"
);
export default function ServicesPage() {
  return (
    <section
      className="py-20 sm:py-24 lg:py-32"
      aria-labelledby="services-heading"
    >
      <Container>
        <div className="space-y-12 sm:space-y-16">
          <header className="text-center">
            <p className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400 sm:text-sm">
              Offerings
            </p>
            <h1
              id="services-heading"
              className="mt-3 text-2xl font-semibold text-slate-900 dark:text-slate-50 sm:text-3xl"
            >
              Our Services
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 dark:text-slate-400 sm:mt-4 sm:text-base">
              We help organizations build secure, scalable, and intelligent
              systems designed for long-term ownership.
            </p>
          </header>

          <div className="grid gap-6 sm:gap-8 md:gap-10 md:grid-cols-2">
            <Service
              title="Product Engineering"
              description="We design and build production-grade software products using clean architecture, modern stacks, and scalable delivery workflows."
            >
              <div className="mt-5 rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/50">
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                  Real-World Proof: Our SaaS Platforms
                </p>
                <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
                  We do not just advise. We ship. Two enterprise platforms in
                  active development:
                </p>
                <ul className="mt-2 space-y-1 text-sm text-slate-700 dark:text-slate-300">
                  <li>- FBT PG SaaS: multi-tenant from day one, Clean Architecture + CQRS, blue-green deployments</li>
                  <li>- Vulnerability Assessment AI: microservices architecture, AI integration, Kubernetes orchestration</li>
                </ul>
                <p className="mt-3 text-sm text-slate-700 dark:text-slate-300">
                  This is how we build products. Let&apos;s build yours.
                </p>
                <Link
                  href="/services/product-engineering"
                  className="mt-3 inline-flex min-h-[44px] items-center justify-center rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200"
                >
                  View Service
                </Link>
              </div>
            </Service>

            <Service
              title="Security Engineering"
              description="We identify and mitigate risks early through threat modeling, vulnerability engineering, and secure-by-design practices."
            >
              <div className="mt-5 rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/50">
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                  We Practice What We Preach
                </p>
                <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
                  Our own security platform (releasing Aug 2026) is built to the
                  same standards we recommend:
                </p>
                <ul className="mt-2 space-y-1 text-sm text-slate-700 dark:text-slate-300">
                  <li>- Zero Trust architecture</li>
                  <li>- Immutable audit logs</li>
                  <li>- Tenant isolation</li>
                  <li>- SOC 2 aligned from day one</li>
                </ul>
                <Link
                  href="/services/security-engineering"
                  className="mt-3 inline-flex min-h-[44px] items-center justify-center rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200"
                >
                  View Service
                </Link>
              </div>
            </Service>

            <Service
              title="AI Automation"
              description="We apply AI responsibly to automate analysis, decision support, and operational workflows for high-impact teams."
            >
              <div className="mt-5 rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/50">
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                  AI Integration at Scale
                </p>
                <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
                  Our Vulnerability Assessment platform processes thousands of
                  CVEs with AI:
                </p>
                <ul className="mt-2 space-y-1 text-sm text-slate-700 dark:text-slate-300">
                  <li>- Contextual risk analysis</li>
                  <li>- Natural language queries</li>
                  <li>- Automated remediation suggestions</li>
                  <li>- Continuous learning</li>
                </ul>
                <Link
                  href="/services/ai-automation"
                  className="mt-3 inline-flex min-h-[44px] items-center justify-center rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200"
                >
                  View Service
                </Link>
              </div>
            </Service>

            <Service
              title="Architecture Consulting"
              description="We guide teams in making the right architecture decisions early to avoid expensive rewrites and technical debt."
            >
              <Link
                href="/services/architecture-consulting"
                className="mt-5 inline-flex min-h-[44px] items-center justify-center rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200"
              >
                View Service
              </Link>
            </Service>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Service({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children?: React.ReactNode;
}) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-slate-800 dark:bg-slate-900 sm:p-8">
      <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50 sm:text-xl">
        {title}
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:mt-4 sm:text-base">
        {description}
      </p>
      {children}
    </article>
  );
}
