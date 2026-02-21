import Link from "next/link";

export default function SBOMTeaserSection() {
  return (
    <section
      className="bg-slate-900 px-6 py-16 sm:px-8"
      aria-labelledby="sbom-teaser-heading"
    >
      <div className="mx-auto max-w-4xl text-center">
        <span className="text-sm font-medium uppercase tracking-wide text-emerald-400">
          Coming 2026
        </span>
        <h2
          id="sbom-teaser-heading"
          className="font-tiempos mt-2 mb-4 text-3xl font-bold text-white"
        >
          Your SBOM is lying to you.
        </h2>
        <p className="mb-6 text-slate-400">
          FBT is building the bridge between static documents and runtime
          reality.
        </p>
        <Link
          href="/sbom"
          className="inline-flex items-center font-medium text-emerald-400 transition-colors hover:text-emerald-300 focus-visible:rounded focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
        >
          Learn more →
        </Link>
      </div>
    </section>
  );
}
