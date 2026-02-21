import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import Container from "@/components/layout/Container";

const CLIENTS_DIR = path.join(process.cwd(), "public", "Clients");
const SUPPORTED_EXTENSIONS = new Set([
  ".png",
  ".jpg",
  ".jpeg",
  ".webp",
  ".avif",
  ".svg",
]);

function getClientLogoFiles() {
  try {
    return fs
      .readdirSync(CLIENTS_DIR)
      .filter((file) => SUPPORTED_EXTENSIONS.has(path.extname(file).toLowerCase()))
      .sort((a, b) => a.localeCompare(b));
  } catch {
    return [];
  }
}

function formatClientName(fileName: string) {
  const cleaned = path
    .basename(fileName, path.extname(fileName))
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/[_-]+/g, " ")
    .replace(/\blogo\b/gi, "")
    .replace(/\s+/g, " ")
    .trim();

  return cleaned || "Client";
}

function getLogoScaleClass(fileName: string) {
  const normalized = fileName.toLowerCase();

  if (normalized.includes("firose")) {
    return "scale-[1.65] group-hover:scale-[1.78]";
  }

  if (normalized.includes("jmk")) {
    return "scale-[1.55] group-hover:scale-[1.68]";
  }

  if (normalized.includes("arperfumes")) {
    return "scale-[1.6] group-hover:scale-[1.72]";
  }

  if (normalized.includes("stanbros")) {
    return "scale-[1.3] group-hover:scale-[1.42]";
  }

  return "scale-[1.3] group-hover:scale-[1.4]";
}

export default function ClientsShowcase() {
  const logos = getClientLogoFiles();

  if (logos.length === 0) {
    return null;
  }

  return (
    <section
      className="relative overflow-hidden py-14 sm:py-16 lg:py-20"
      aria-labelledby="clients-showcase-heading"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-16 h-40 w-[80%] -translate-x-1/2 rounded-full bg-slate-200/60 blur-3xl dark:bg-slate-800/50"
      />
      <Container>
        <div className="relative rounded-3xl border border-slate-200/80 bg-gradient-to-b from-white via-slate-50 to-white p-6 shadow-[0_20px_45px_-30px_rgba(15,23,42,0.55)] dark:border-slate-700/80 dark:from-slate-900 dark:via-slate-900/70 dark:to-slate-950 sm:p-8 lg:p-12">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 sm:text-sm">
              Trusted by organizations
            </p>
            <h2
              id="clients-showcase-heading"
              className="mt-3 text-2xl font-semibold text-slate-900 dark:text-slate-50 sm:text-3xl"
            >
              Companies We Work With
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 dark:text-slate-400 sm:text-base">
              Proven delivery for growth-stage teams and enterprise operations.
            </p>
          </div>

          <ul
            role="list"
            className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4"
          >
            {logos.map((logoFile) => (
              <li
                key={logoFile}
                className="group relative h-32 overflow-hidden rounded-2xl border border-slate-200/90 bg-gradient-to-b from-white to-slate-100/80 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_28px_-18px_rgba(15,23,42,0.45)] dark:border-slate-700/80 dark:from-slate-900 dark:to-slate-800/80"
              >
                <Image
                  src={`/Clients/${logoFile}`}
                  alt={`${formatClientName(logoFile)} logo`}
                  fill
                  loading="lazy"
                  sizes="(min-width: 1024px) 280px, (min-width: 640px) 45vw, 92vw"
                  className={`object-contain p-2 sm:p-3 saturate-110 contrast-110 drop-shadow-[0_10px_20px_rgba(2,6,23,0.25)] transition-transform duration-500 ease-out ${getLogoScaleClass(logoFile)}`}
                />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
