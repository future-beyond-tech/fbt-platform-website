import Container from "@/components/layout/Container";

const faqs = [
  {
    question: "Can we buy Zentra as an off-the-shelf product?",
    answer:
      "Not as a generic packaged SKU. We license and customize architecture patterns for enterprise environments or build equivalent systems tailored to your stack and compliance needs.",
  },
  {
    question: "Why not use Auth0, Okta, or IdentityServer?",
    answer:
      "Managed providers can be a fit, but many teams hit limits around customization, control, and long-term cost. We design identity systems you can govern directly with architecture aligned to your requirements.",
  },
  {
    question: "How long does custom auth development take?",
    answer:
      "Typical engagements run 8-12 weeks for OAuth 2.0 and OIDC foundations with MFA and RBAC. Legacy dependencies and regulated workflows can extend timelines.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes. We support security updates, reliability hardening, and roadmap enhancements through SLA-backed support models.",
  },
  {
    question: "What technologies do you support?",
    answer:
      "Our strongest implementation depth is in .NET ecosystems, and we architect identity controls for Java, Node.js, Python, and Go environments.",
  },
  {
    question: "Is this suitable for regulated industries?",
    answer:
      "Yes. We build for high-compliance environments with auditability, encryption controls, and policy-driven access governance.",
  },
] as const;

export function FAQ() {
  return (
    <section className="bg-slate-50 py-20 dark:bg-slate-900/50" aria-labelledby="zentra-faq-heading">
      <Container>
        <div className="mx-auto max-w-3xl space-y-6">
          <h2
            id="zentra-faq-heading"
            className="text-center text-3xl font-semibold text-slate-900 dark:text-slate-100"
          >
            Frequently Asked Questions
          </h2>

          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
              >
                <summary className="cursor-pointer text-left text-sm font-semibold text-slate-900 dark:text-slate-100 sm:text-base">
                  {faq.question}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
