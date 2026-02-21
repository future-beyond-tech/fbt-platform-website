import Container from "@/components/layout/Container";
import { defaultMetadata } from "@/lib/seo";
import AssessmentForm from "./AssessmentForm";

export const metadata = defaultMetadata(
  "Free Security & Architecture Assessment",
  "Book a free security and architecture assessment tailored for startups scaling past product-market fit.",
  "/assessment"
);

export default function AssessmentPage() {
  return (
    <section
      className="py-20 sm:py-24 lg:py-32"
      aria-labelledby="assessment-heading"
    >
      <Container>
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-10">
          <header className="space-y-4">
            <p className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400 sm:text-sm">
              Dedicated Assessment
            </p>
            <h1
              id="assessment-heading"
              className="text-2xl font-semibold text-slate-900 dark:text-slate-50 sm:text-3xl lg:text-4xl"
            >
              Free Security &amp; Architecture Assessment
            </h1>
            <p className="max-w-xl text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
              For startups scaling past product-market fit. Limited to 5
              assessments per month.
            </p>
          </header>

          <AssessmentForm />
        </div>
      </Container>
    </section>
  );
}
