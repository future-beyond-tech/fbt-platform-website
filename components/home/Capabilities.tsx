import Container from "@/components/layout/Container";

const capabilities = [
    {
        title: "Product Engineering",
        desc: "Scalable, production-ready systems. Recent: Migrated monolith to microservices handling 10K req/s.",
    },
    {
        title: "Security Engineering",
        desc: "Threat modeling to penetration testing. Recent: Achieved SOC 2 Type II for healthcare client in 8 weeks.",
    },
    {
        title: "AI Automation",
        desc: "Responsible AI for process automation. Recent: Built RAG pipeline reducing research time by 70%.",
    },
    {
        title: "Architecture Consulting",
        desc: "Technical decisions that last 5+ years. Recent: Designed event-driven system saving $30K/month in infrastructure.",
    },
];

export default function Capabilities() {
    return (
        <section className="py-20 sm:py-24 lg:py-32 bg-slate-50/50 dark:bg-slate-900/50" aria-labelledby="capabilities-heading">
            <Container>
                <div className="text-center">
                    <p className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400 sm:text-sm">
                        Capabilities
                    </p>
                    <h2 id="capabilities-heading" className="mt-3 text-xl font-semibold text-slate-900 dark:text-slate-50 sm:text-2xl">
                        What We Do
                    </h2>
                    <p className="mt-3 max-w-xl mx-auto text-sm text-slate-600 dark:text-slate-400 sm:mt-4 sm:text-base">
                        Our work focuses on long-term impact, security, and clarity.
                    </p>
                </div>

                <div className="mt-12 grid gap-6 sm:mt-16 sm:gap-8 md:grid-cols-2 lg:mt-20">
                    {capabilities.map((c) => (
                        <div
                            key={c.title}
                            className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm transition-shadow sm:p-8 hover:shadow-md"
                        >
                            <h3 className="text-base font-semibold text-slate-900 dark:text-slate-50 sm:text-lg">{c.title}</h3>
                            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 sm:mt-3 sm:text-base leading-relaxed">{c.desc}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
