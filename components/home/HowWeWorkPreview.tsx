import Container from "@/components/layout/Container";

export default function HowWeWorkPreview() {
    const principles = [
        "Security-first engineering",
        "Clean Architecture & SOLID principles",
        "Clear documentation & maintainability",
        "No shortcuts, no fragile systems",
    ];
    return (
        <section id="methodology" className="py-20 sm:py-24 lg:py-32" aria-labelledby="how-we-work-heading">
            <Container>
                <div className="text-center">
                    <p className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400 sm:text-sm">
                        Methodology
                    </p>
                    <h2 id="how-we-work-heading" className="mt-3 text-xl font-semibold text-slate-900 dark:text-slate-50 sm:text-2xl">
                        How We Work
                    </h2>
                    <p className="mt-3 max-w-xl mx-auto text-sm text-slate-600 dark:text-slate-400 sm:mt-4 sm:text-base">
                        We approach every project with a security-first mindset and
                        long-term ownership.
                    </p>
                </div>

                <ul className="mx-auto mt-10 max-w-md space-y-3 text-sm text-slate-700 dark:text-slate-300 sm:mt-14 sm:space-y-4 sm:text-base" role="list">
                    {principles.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400 dark:bg-slate-600" aria-hidden />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </Container>
        </section>
    );
}
