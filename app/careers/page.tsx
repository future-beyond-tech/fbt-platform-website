import Link from "next/link";
import Container from "@/components/layout/Container";
import { defaultMetadata } from "@/lib/seo";

export const metadata = defaultMetadata(
  "Careers",
  "Careers at FBT: join a product studio building secure enterprise SaaS and mission-critical systems.",
  "/careers"
);

export default function CareersPage() {
  return (
    <section className="py-20 sm:py-24 lg:py-32" aria-labelledby="careers-heading">
      <Container>
        <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-10">
          <p className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400 sm:text-sm">
            Company
          </p>
          <h1
            id="careers-heading"
            className="mt-3 text-2xl font-semibold text-slate-900 dark:text-slate-50 sm:text-3xl"
          >
            Careers at FBT
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
            We are building a product studio focused on secure, enterprise-grade
            SaaS platforms and architecture-intensive client systems. If that
            sounds like your type of work, we would like to hear from you.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex min-h-[44px] items-center justify-center rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200"
          >
            Contact
          </Link>
        </div>
      </Container>
    </section>
  );
}
