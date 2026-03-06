import Link from "next/link";
import Container from "@/components/layout/Container";
import JsonLd from "@/components/seo/JsonLd";
import { defaultMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/siteConfig";
import { breadcrumbSchema } from "@/lib/structuredData";

const title = "OAuth 2.0 Threat Model Template";
const description =
  "Lightweight OAuth 2.0 and OIDC threat model template: token leakage, redirect manipulation, scope escalation, and implementation checklist.";

export const metadata = defaultMetadata(title, description, "/resources/oauth-threat-model");

export default function OAuthThreatModelResourcePage() {
  const breadcrumbStructured = breadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Resources", url: `${siteConfig.url}/resources` },
    { name: "OAuth Threat Model", url: `${siteConfig.url}/resources/oauth-threat-model` },
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
                OAuth 2.0 Threat Model Template
              </h1>
              <p className="max-w-xl text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
                A structured threat model for OAuth 2.0 and OIDC deployments:
                main threat vectors and an implementation checklist before
                go-live.
              </p>
            </header>

            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100 sm:text-xl">
              What&apos;s Inside
            </h2>
            <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300 sm:text-base">
              Token leakage and storage, redirect manipulation, scope
              escalation, and client authentication. Plus a checklist: PKCE for
              public clients, short-lived access tokens, secure refresh
              handling, and logging that does not expose tokens. For the full
              context, see our{" "}
              <Link href="/pillars/identity-oauth-oidc" className="font-medium text-slate-900 underline dark:text-slate-100">
                Identity, OAuth & OIDC pillar
              </Link>
              .
            </p>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900/40 sm:p-8">
              <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                Get the template
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Request the OAuth Threat Model template and we&apos;ll send it
                to you. For hands-on security engineering support, see our{" "}
                <Link href="/services/security-engineering" className="font-medium text-slate-900 underline dark:text-slate-100">
                  Security &amp; Vulnerability Engineering
                </Link>{" "}
                services.
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-flex min-h-[44px] items-center justify-center rounded-lg bg-slate-900 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200"
              >
                Request OAuth Threat Model
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
