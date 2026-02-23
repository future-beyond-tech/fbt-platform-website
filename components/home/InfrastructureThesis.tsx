import Container from "@/components/layout/Container";

/**
 * Infrastructure thesis: positions FBT as building digital infrastructure,
 * not just software. Confident, long-term tone. RentFlow as first execution.
 */
export default function InfrastructureThesis() {
  return (
    <section
      className="border-t border-slate-200 bg-white py-20 sm:py-24 lg:py-28 dark:border-slate-800 dark:bg-slate-950/50"
      aria-labelledby="infrastructure-thesis-heading"
    >
      <Container>
        <div className="mx-auto max-w-3xl">
          <h2
            id="infrastructure-thesis-heading"
            className="font-tiempos text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl lg:text-4xl"
          >
            We Build Digital Infrastructure, Not Just Software
          </h2>
          <div className="mt-8 space-y-6 text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
            <p>
              FBT identifies fragmented markets, designs scalable operating
              layers, and applies enterprise-grade architecture from day one. We
              build for long-term market leadership—not short-term projects.
            </p>
            <p>
              <strong className="font-semibold text-slate-800 dark:text-slate-200">
                RentFlow is our first vertical infrastructure platform.
              </strong>{" "}
              A usage-based rental operating system for PG and co-living
              infrastructure, built to scale and built to last.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
