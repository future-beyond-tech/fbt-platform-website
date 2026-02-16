import Container from "@/components/layout/Container";

type Person = {
  name: string;
  title: string;
};

type Branch = {
  manager: Person;
  reports: Person[];
};

const founder: Person = {
  name: "Feroze Basha",
  title: "Founder & Lead Software Engineer",
};

const branches: Branch[] = [
  {
    manager: {
      name: "Gorantla Srikanth",
      title: "Technical Manager",
    },
    reports: [
      {
        name: "Srihariharan",
        title: "Full Stack Developer",
      },
      {
        name: "Jerold Benjamin",
        title: "AI Solutions Engineer",
      },
    ],
  },
  {
    manager: {
      name: "Abdul Hameed",
      title: "HR & Operations Manager",
    },
    reports: [],
  },
  {
    manager: {
      name: "Kohilavani",
      title: "Marketing Executive",
    },
    reports: [],
  },
];

export default function OrganizationChart() {
  return (
    <section
      id="organization"
      className="py-20 sm:py-24 lg:py-32"
      aria-labelledby="organization-heading"
    >
      <Container>
        <div className="mx-auto max-w-6xl space-y-14 sm:space-y-16">
          <header className="text-center">
            <p className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400 sm:text-sm">
              Organization
            </p>
            <h2
              id="organization-heading"
              className="mt-3 text-2xl font-semibold text-slate-900 dark:text-slate-50 sm:text-3xl"
            >
              Organizational Structure
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-sm text-slate-600 dark:text-slate-400 sm:text-base">
              Clear ownership and reporting lines that keep engineering delivery
              focused, reliable, and scalable.
            </p>
          </header>

          <div className="flex flex-col items-center space-y-16">
            <div className="flex flex-col items-center">
              <OrgNode person={founder} />
              <Connector className="mt-5 h-10" />
            </div>

            <div className="w-full">
              <div className="mx-auto hidden w-11/12 border-t border-slate-300 dark:border-slate-700 md:block lg:w-4/5" />

              <div className="mt-1 grid gap-12 md:grid-cols-2 md:gap-14 lg:grid-cols-3">
                {branches.map((branch) => (
                  <BranchColumn key={branch.manager.name} branch={branch} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function BranchColumn({ branch }: { branch: Branch }) {
  const firstReport = branch.reports[0];
  const hasMultipleReports = branch.reports.length > 1;

  return (
    <section aria-label={`${branch.manager.name} team`} className="flex flex-col items-center">
      <Connector className="h-8" />
      <OrgNode person={branch.manager} />

      {firstReport ? <Connector className="mt-5 h-8" /> : null}

      {hasMultipleReports ? (
        <div className="w-full max-w-lg">
          <div className="hidden justify-center sm:flex">
            <div className="w-4/5 border-t border-slate-300 dark:border-slate-700" />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {branch.reports.map((report) => (
              <div key={report.name} className="flex flex-col items-center">
                <Connector className="h-6" />
                <OrgNode person={report} />
              </div>
            ))}
          </div>
        </div>
      ) : firstReport ? (
        <div className="flex flex-col items-center">
          <Connector className="h-6" />
          <OrgNode person={firstReport} />
        </div>
      ) : null}
    </section>
  );
}

function OrgNode({ person }: { person: Person }) {
  return (
    <article className="w-full max-w-xs rounded-xl border border-slate-200 bg-white px-6 py-4 text-center shadow-md transition hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
      <h3 className="font-semibold text-slate-900 dark:text-slate-50">{person.name}</h3>
      <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{person.title}</p>
    </article>
  );
}

function Connector({ className }: { className?: string }) {
  return (
    <div
      className={`w-px bg-slate-300 dark:bg-slate-700 ${className ?? ""}`}
      aria-hidden="true"
    />
  );
}
