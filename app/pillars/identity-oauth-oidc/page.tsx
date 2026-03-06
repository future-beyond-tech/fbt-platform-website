import Link from "next/link";
import Container from "@/components/layout/Container";
import JsonLd from "@/components/seo/JsonLd";
import { defaultMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/siteConfig";
import { breadcrumbSchema } from "@/lib/structuredData";

const title = "Identity, OAuth 2.0 & OpenID Connect: Security Patterns";
const description =
  "OAuth 2.0 and OIDC security patterns, threat models, reference architectures, and implementation checklists for startups building identity and access control.";

export const metadata = defaultMetadata(title, description, "/pillars/identity-oauth-oidc");

export default function IdentityOAuthOidcPillarPage() {
  const breadcrumbStructured = breadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Pillars", url: `${siteConfig.url}/pillars/identity-oauth-oidc` },
    { name: "Identity, OAuth & OIDC", url: `${siteConfig.url}/pillars/identity-oauth-oidc` },
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
              Identity, OAuth 2.0 &amp; OpenID Connect
            </h1>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
              Security patterns, threat models, and implementation guidance for teams adopting OAuth 2.0 and OIDC for authentication and authorization.
            </p>
          </header>

          <div className="mt-10 space-y-8 text-sm leading-relaxed text-slate-700 dark:text-slate-300 sm:text-base">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100 sm:text-xl">
              OAuth 2.0 Security Patterns
            </h2>
            <p>
              Correct use of grants, token storage, refresh rotation, and scope design reduces the attack surface for identity and API access. We summarize the main threat vectors—token leakage, redirect manipulation, scope escalation—and the patterns that mitigate them in production.
            </p>

            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100 sm:text-xl">
              Threat Models
            </h2>
            <p>
              A structured threat model for OAuth/OIDC deployments helps teams prioritize hardening: which components are in scope, what an attacker might target, and which controls are non-negotiable. Use our <Link href="/resources/oauth-threat-model" className="font-medium text-slate-900 underline dark:text-slate-100">OAuth Threat Model template</Link> to run a lightweight assessment.
            </p>

            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100 sm:text-xl">
              Reference Architectures
            </h2>
            <p>
              We outline reference architectures for B2B SaaS (tenant-aware identity, SSO), consumer apps (social + email, consent), and API-first products (machine-to-machine, scoped tokens). Each maps to common compliance and scale requirements.
            </p>

            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100 sm:text-xl">
              Implementation Checklists
            </h2>
            <p>
              Before going live: PKCE for public clients, short-lived access tokens, secure refresh handling, and logging that does not expose tokens. The OAuth Threat Model template includes an implementation checklist so you can validate your deployment.
            </p>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900/40 sm:p-8">
              <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                Next steps
              </h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <Link href="/resources/oauth-threat-model" className="font-medium text-slate-900 underline dark:text-slate-100">
                    Download the OAuth Threat Model Template
                  </Link>
                </li>
                <li>
                  <Link href="/assessment" className="font-medium text-slate-900 underline dark:text-slate-100">
                    Book a free Architecture Assessment
                  </Link>
                </li>
                <li>
                  <Link href="/services/security-engineering" className="font-medium text-slate-900 underline dark:text-slate-100">
                    Security &amp; Vulnerability Engineering
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
