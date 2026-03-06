import Link from "next/link";
import Container from "@/components/layout/Container";
import JsonLd from "@/components/seo/JsonLd";
import { defaultMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/siteConfig";
import { breadcrumbSchema } from "@/lib/structuredData";

const title = "Medical Device Cybersecurity & ISO 14971 Risk Management";
const description =
  "ISO 14971 risk management summary, vulnerability assessment methods for medical devices, tooling decision flowchart, and FDA-aligned cybersecurity practices.";

export const metadata = defaultMetadata(title, description, "/pillars/medical-device-cybersecurity");

export default function MedicalDeviceCybersecurityPillarPage() {
  const breadcrumbStructured = breadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Pillars", url: `${siteConfig.url}/pillars/medical-device-cybersecurity` },
    { name: "Medical Device Cybersecurity", url: `${siteConfig.url}/pillars/medical-device-cybersecurity` },
  ]);

  return (
    <article className="py-20 sm:py-24 lg:py-32" aria-labelledby="pillar-heading">
      <JsonLd data={breadcrumbStructured} />
      <Container>
        <div className="mx-auto max-w-3xl">
          <header className="space-y-4">
            <Link
              href="/research"
              className="text-sm font-medium text-slate-600 underline decoration-slate-300 underline-offset-2 hover:text-slate-900 dark:text-slate-400 dark:decoration-slate-700 dark:hover:text-slate-100"
            >
              Research
            </Link>
            <h1
              id="pillar-heading"
              className="text-2xl font-semibold text-slate-900 dark:text-slate-50 sm:text-3xl lg:text-4xl"
            >
              Medical Device Cybersecurity
            </h1>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
              Risk management and vulnerability assessment practices for medical devices, aligned with ISO 14971 and FDA expectations.
            </p>
          </header>

          <div className="mt-10 space-y-8 text-sm leading-relaxed text-slate-700 dark:text-slate-300 sm:text-base">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100 sm:text-xl">
              ISO 14971 Summary
            </h2>
            <p>
              ISO 14971 defines risk management for medical devices: hazard identification, risk analysis and evaluation, risk control, and residual risk acceptance. Cybersecurity risks are part of this framework. We summarize how to integrate security into the risk management file and production lifecycle. For a full technical treatment, see <Link href="/research/medical-device-risk-management-iso-14971" className="font-medium text-slate-900 underline dark:text-slate-100">Medical Device Risk Management (ISO 14971)</Link> and our <Link href="/resources/iso14971-checklist" className="font-medium text-slate-900 underline dark:text-slate-100">ISO 14971 Checklist</Link>.
            </p>

            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100 sm:text-xl">
              Vulnerability Assessment Methods Matrix
            </h2>
            <p>
              Passive scanning, firmware analysis, penetration testing, and healthcare-focused CVSS scoring each have a place in medical device security. We provide a matrix of methods, when to use them, and how they map to regulatory expectations. Details in <Link href="/research/medical-device-vulnerability-assessment" className="font-medium text-slate-900 underline dark:text-slate-100">Medical Device Vulnerability Assessment</Link>.
            </p>

            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100 sm:text-xl">
              Tooling Decision Flowchart
            </h2>
            <p>
              Choosing the right tooling for vulnerability assessment depends on device type, connectivity, and lifecycle stage. We outline a decision flowchart: build vs buy, when to use automated vs manual testing, and how to integrate results into the risk management file.
            </p>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900/40 sm:p-8">
              <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                Next steps
              </h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <Link href="/resources/iso14971-checklist" className="font-medium text-slate-900 underline dark:text-slate-100">
                    Download the ISO 14971 Checklist
                  </Link>
                </li>
                <li>
                  <Link href="/research/medical-device-vulnerability-assessment" className="font-medium text-slate-900 underline dark:text-slate-100">
                    Research: Vulnerability Assessment for Medical Devices
                  </Link>
                </li>
                <li>
                  <Link href="/assessment" className="font-medium text-slate-900 underline dark:text-slate-100">
                    Book a free Assessment
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
