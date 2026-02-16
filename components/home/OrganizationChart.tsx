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

          <MobileChart />
          <DesktopChart />
        </div>
      </Container>
    </section>
  );
}

function MobileChart() {
  return (
    <div className="lg:hidden">
      <div className="flex flex-col items-center">
        <OrgNode person={founder} />
        <Connector className="mt-5 h-8" />
      </div>

      <div className="relative mx-auto mt-2 w-full max-w-sm pl-6">
        <div
          className="absolute left-2 top-0 bottom-0 w-px bg-slate-300 dark:bg-slate-700"
          aria-hidden="true"
        />

        <ol className="space-y-8">
          {branches.map((branch) => (
            <li key={branch.manager.name} className="relative">
              <div className="absolute left-0 top-6 h-px w-6 bg-slate-300 dark:bg-slate-700" aria-hidden="true" />

              <div className="pl-6">
                <OrgNode person={branch.manager} />

                {branch.reports.length > 0 ? (
                  <ol className="relative mt-4 space-y-4 pl-6 before:pointer-events-none before:absolute before:left-0 before:top-0 before:bottom-5 before:w-px before:bg-slate-300 dark:before:bg-slate-700">
                    {branch.reports.map((report) => (
                      <li key={report.name} className="relative">
                        <div
                          className="absolute -left-6 top-6 h-px w-6 bg-slate-300 dark:bg-slate-700"
                          aria-hidden="true"
                        />
                        <OrgNode person={report} />
                      </li>
                    ))}
                  </ol>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

function DesktopChart() {
  return (
    <div className="hidden lg:flex lg:flex-col lg:items-center lg:space-y-16">
      <div className="flex flex-col items-center">
        <OrgNode person={founder} />
        <Connector className="mt-5 h-10" />
      </div>

      <div className="w-full">
        <div className="mx-auto w-11/12 border-t border-slate-300 dark:border-slate-700 lg:w-4/5" />

        <div className="mt-1 grid gap-12 lg:grid-cols-3 lg:gap-14">
          {branches.map((branch) => (
            <BranchColumn key={branch.manager.name} branch={branch} />
          ))}
        </div>
      </div>
    </div>
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
