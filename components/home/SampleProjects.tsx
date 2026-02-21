import Link from "next/link";
import Container from "@/components/layout/Container";

type ProjectCard = {
  title: string;
  challenge: string;
  approach: string;
  outcome: string;
  tags: string[];
  href: string;
};

const projects: ProjectCard[] = [
  {
    title: "FinTech API Security Overhaul",
    challenge:
      "Startup handling $2M daily transactions had authentication vulnerabilities",
    approach:
      "Zero-trust architecture, JWT hardening, automated threat detection",
    outcome: "SOC 2 readiness in 6 weeks, 99.9% security test pass rate",
    tags: [".NET Core", "Azure AD", "Docker", "OWASP"],
    href: "/work/fintech-security",
  },
  {
    title: "Manufacturing AI Automation",
    challenge:
      "Manual quality control causing 15% defect rate and production delays",
    approach:
      "Computer vision pipeline, edge deployment, real-time alerting",
    outcome: "Defect detection in <200ms, 40% reduction in waste",
    tags: ["Python", "TensorFlow", "AWS IoT", "Kubernetes"],
    href: "/work/manufacturing-ai",
  },
];

export default function SampleProjects() {
  return (
    <section
      className="py-20 sm:py-24 lg:py-32"
      aria-labelledby="sample-projects-heading"
    >
      <Container>
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400 sm:text-sm">
            Sample Engagements
          </p>
          <h2
            id="sample-projects-heading"
            className="mt-3 text-2xl font-semibold text-slate-900 dark:text-slate-50 sm:text-3xl"
          >
            How We Solve Real Problems
          </h2>
        </div>

        <div className="mt-10 grid gap-6 sm:mt-14 sm:gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-slate-800 dark:bg-slate-900 sm:p-8"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 sm:text-xl">
                {project.title}
              </h3>

              <div className="mt-5 space-y-3 text-sm text-slate-700 dark:text-slate-300 sm:text-base">
                <p>
                  <span className="font-semibold text-slate-900 dark:text-slate-100">
                    Challenge:
                  </span>{" "}
                  {project.challenge}
                </p>
                <p>
                  <span className="font-semibold text-slate-900 dark:text-slate-100">
                    Our Approach:
                  </span>{" "}
                  {project.approach}
                </p>
                <p>
                  <span className="font-semibold text-slate-900 dark:text-slate-100">
                    Outcome:
                  </span>{" "}
                  {project.outcome}
                </p>
              </div>

              <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technology stack">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 sm:text-sm"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Link
                  href={project.href}
                  className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:border-slate-400 hover:bg-slate-50 focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:bg-slate-800 dark:focus-visible:ring-slate-50 dark:focus-visible:ring-offset-slate-900"
                >
                  See Case Study
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
