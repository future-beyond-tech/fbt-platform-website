import Container from "@/components/layout/Container";
import Link from "next/link";
import { defaultMetadata } from "@/lib/seo";

export const metadata = defaultMetadata(
  "How We Work",
  "A security-first, architecture-driven approach to building reliable, enterprise-grade software systems.",
  "/how-we-work"
);

const principles = [
    {
        title: "Security as a Design Constraint",
        description:
            "Security is addressed at design time, not after deployment. Threats, trust boundaries, and misuse cases are considered before implementation begins.",
    },
    {
        title: "Architecture Before Implementation",
        description:
            "We invest time upfront in architecture and system boundaries to prevent long-term complexity, rework, and fragile integrations.",
    },
    {
        title: "Explicit Technical Decisions",
        description:
            "Key decisions are made deliberately, documented clearly, and revisited when assumptions change. No hidden or accidental architecture.",
    },
    {
        title: "Maintainability as a Requirement",
        description:
            "Systems are designed to be understood, tested, and evolved by teams over time—not just delivered and abandoned.",
    },
    {
        title: "Measured, Responsible Engineering",
        description:
            "We avoid shortcuts that create future risk. Trade-offs are evaluated carefully with long-term impact in mind.",
    },
];

const phases = [
    {
        step: "01",
        title: "Context & Risk Understanding",
        description:
            "We begin by understanding the product context, stakeholders, system boundaries, and risk profile. This includes security considerations, regulatory constraints, and operational realities.",
    },
    {
        step: "02",
        title: "Architecture & Design Alignment",
        description:
            "We define clear architectural boundaries, data flows, and responsibility ownership. Security and scalability are addressed as part of the design—not layered on later.",
    },
    {
        step: "03",
        title: "Implementation with Guardrails",
        description:
            "Engineering work follows agreed architectural and security guidelines. Patterns, conventions, and validation mechanisms ensure consistency and quality.",
    },
    {
        step: "04",
        title: "Review, Validation & Hardening",
        description:
            "We validate assumptions, review critical paths, and address edge cases. Security, reliability, and operational readiness are verified before release.",
    },
    {
        step: "05",
        title: "Long-Term Ownership",
        description:
            "We treat systems as long-lived assets. Documentation, handover clarity, and future change-readiness are part of delivery—not optional extras.",
    },
];

export default function HowWeWorkPage() {
    return (
        <section
            className="py-20 sm:py-24 lg:py-32"
            aria-labelledby="how-we-work-heading"
        >
            <Container>
                <div className="mx-auto max-w-4xl space-y-16">
                    {/* Header */}
                    <header className="max-w-3xl space-y-4">
                        <p className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400 sm:text-sm">
                            Our Approach
                        </p>
                        <h1
                            id="how-we-work-heading"
                            className="text-2xl font-semibold text-slate-900 dark:text-slate-50 sm:text-3xl"
                        >
                            How We Work
                        </h1>
                        <p className="text-sm text-slate-600 dark:text-slate-400 sm:text-base leading-relaxed">
                            FBT operates with a security-first, architecture-driven mindset.
                            Our approach is designed to reduce long-term risk, improve clarity,
                            and ensure systems remain reliable and maintainable as they evolve.
                        </p>
                    </header>

                    {/* Principles */}
                    <section className="space-y-8">
                        <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50 sm:text-xl">
                            Engineering Principles
                        </h2>
                        <ul className="space-y-6">
                            {principles.map((item) => (
                                <li key={item.title} className="space-y-2">
                                    <h3 className="text-sm font-medium text-slate-900 dark:text-slate-100 sm:text-base">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 sm:text-base leading-relaxed">
                                        {item.description}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Phases */}
                    <section className="space-y-8">
                        <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50 sm:text-xl">
                            How Engagements Typically Progress
                        </h2>
                        <ol className="space-y-8">
                            {phases.map((phase) => (
                                <li key={phase.step} className="flex gap-6">
                                    <div className="text-sm font-medium text-slate-400 dark:text-slate-500">
                                        {phase.step}
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-sm font-medium text-slate-900 dark:text-slate-100 sm:text-base">
                                            {phase.title}
                                        </h3>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 sm:text-base leading-relaxed">
                                            {phase.description}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </section>

                    <section className="pt-2">
                        <div className="flex flex-col gap-3 sm:flex-row">
                            <Link
                                href="/services"
                                className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
                            >
                                View Services
                            </Link>
                            <Link
                                href="/assessment"
                                className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200"
                            >
                                Book Assessment
                            </Link>
                        </div>
                    </section>
                </div>
            </Container>
        </section>
    );
}
