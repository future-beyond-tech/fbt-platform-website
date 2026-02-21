import Container from "@/components/layout/Container";
import { defaultMetadata } from "@/lib/seo";
import LeadMagnetForm from "./LeadMagnetForm";

const previewItems = [
  "Define trust boundaries between customer-facing APIs and internal services.",
  "Validate secrets rotation cadence for production and staging environments.",
  "Enforce CI checks for dependency vulnerabilities before every deploy.",
];

export const metadata = defaultMetadata(
  "The Startup Security Checklist",
  "Get the 27-point startup security checklist before your next audit or funding round.",
  "/resources"
);

export default function ResourcesPage() {
  return (
    <section className="py-20 sm:py-24 lg:py-32" aria-labelledby="resources">
      <Container>
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-10">
          <header className="space-y-5">
            <p className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400 sm:text-sm">
              Free Resource
            </p>
            <h1
              id="resources"
              className="text-2xl font-semibold text-slate-900 dark:text-slate-50 sm:text-3xl lg:text-4xl"
            >
              The Startup Security Checklist
            </h1>
            <p className="max-w-xl text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
              27 critical checks before your next audit or funding round.
            </p>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900/40 sm:p-6">
              <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-100 sm:text-base">
                Preview (blurred)
              </h2>
              <ul className="mt-4 space-y-3">
                {previewItems.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-dashed border-slate-300 bg-white/80 px-4 py-3 text-sm text-slate-700 blur-[2px] select-none dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
                Enter your email to unlock the full 3-page checklist PDF.
              </p>
            </div>

            <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
              Downloaded by 200+ engineering leaders
            </p>
          </header>

          <LeadMagnetForm />
        </div>
      </Container>
    </section>
  );
}
