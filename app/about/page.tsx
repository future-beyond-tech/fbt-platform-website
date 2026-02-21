import Container from "@/components/layout/Container";
import Link from "next/link";
import { defaultMetadata } from "@/lib/seo";

export const metadata = defaultMetadata(
  "About",
  "Learn about Future Beyond Technology's security-first engineering philosophy and long-term product mindset.",
  "/about"
);

export default function AboutPage() {
    return (
        <section className="py-20 sm:py-24 lg:py-32" aria-labelledby="about-heading">
            <Container>
                <div className="mx-auto max-w-3xl space-y-8 sm:space-y-10">
                    <header>
                        <p className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400 sm:text-sm">
                            Who we are
                        </p>
                        <h1 id="about-heading" className="mt-3 text-2xl font-semibold text-slate-900 dark:text-slate-50 sm:text-3xl">
                            About FBT
                        </h1>
                    </header>

                    <div className="space-y-6 text-sm text-slate-600 dark:text-slate-400 sm:text-base leading-relaxed">
                        <p>
                            FBT (Future Beyond Technology) was founded with a clear purpose:
                            to build secure, scalable, and intelligent technology systems
                            that stand the test of time.
                        </p>
                        <p>
                            We believe strong engineering, security-first thinking, and
                            deliberate architectural decisions are essential to building
                            technology that organizations can trust.
                        </p>
                        <p>
                            Our work focuses on long-term impact — helping startups and
                            security-critical organizations grow with confidence, today
                            and in the future.
                        </p>
                        <p>
                            We also build our own products to validate our engineering
                            standards in real execution. Our FBT PG SaaS Platform and
                            Vulnerability Assessment AI platform are active examples of
                            how we implement Clean Architecture, CQRS, multi-tenancy,
                            and security-first design in production-ready software.
                        </p>
                    </div>

                    <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                        <Link
                            href="/how-we-work"
                            className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
                        >
                            See How We Work
                        </Link>
                        <Link
                            href="/assessment"
                            className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200"
                        >
                            Book Assessment
                        </Link>
                    </div>
                </div>
            </Container>
        </section>
    );
}
