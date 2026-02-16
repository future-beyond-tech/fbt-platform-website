import Container from "@/components/layout/Container";

type TeamMember = {
  name: string;
  role: string;
  bio: string;
  linkedinUrl?: string;
};

const leadership: TeamMember[] = [
  {
    name: "Feroze Basha",
    role: "Founder & Lead Software Engineer",
    bio: "Leads strategic and technical vision, specializing in .NET, microservices, enterprise architecture, and cloud-native systems.",
    linkedinUrl: "",
  },
  {
    name: "Gorantla Srikanth",
    role: "Technical Manager",
    bio: "Oversees technical governance, architecture, code quality, and deployment strategy.",
    linkedinUrl: "",
  },
];

const coreEngineering: TeamMember[] = [
  {
    name: "Srihariharan",
    role: "Full Stack Developer",
    bio: "Builds backend APIs and frontend experiences following FBT's architecture standards.",
    linkedinUrl: "",
  },
  {
    name: "Jerold Benjamin",
    role: "AI Solutions Engineer",
    bio: "Designs and implements AI chatbots, RAG pipelines, and automation solutions.",
    linkedinUrl: "",
  },
];

const businessAndOperations: TeamMember[] = [
  {
    name: "Abdul Hameed",
    role: "HR & Operations Manager",
    bio: "Manages onboarding, internal operations, and HR documentation.",
    linkedinUrl: "",
  },
  {
    name: "Kohilavani",
    role: "Marketing Executive",
    bio: "Leads marketing strategy, outreach, and brand growth.",
    linkedinUrl: "",
  },
];

export default function Team() {
  return (
    <section
      id="team"
      className="py-20 sm:py-24 lg:py-32 bg-slate-50/60 dark:bg-slate-900/50"
      aria-labelledby="team-heading"
    >
      <Container>
        <div className="mx-auto max-w-5xl space-y-14 sm:space-y-16">
          <header className="text-center">
            <h2
              id="team-heading"
              className="text-2xl font-semibold text-slate-900 dark:text-slate-50 sm:text-3xl"
            >
              Meet the Future Beyond Tech Team
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-sm text-slate-600 dark:text-slate-400 sm:text-base">
              Our team combines deep engineering expertise with strategic
              operations to deliver scalable technology solutions for clients.
            </p>
          </header>

          <section aria-labelledby="team-leadership-heading" className="space-y-6">
            <h3
              id="team-leadership-heading"
              className="text-lg font-semibold text-slate-900 dark:text-slate-50 sm:text-xl"
            >
              Leadership
            </h3>
            <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
              {leadership.map((member) => (
                <TeamCard key={member.name} member={member} />
              ))}
            </div>
          </section>

          <section
            aria-labelledby="team-core-engineering-heading"
            className="space-y-6"
          >
            <h3
              id="team-core-engineering-heading"
              className="text-lg font-semibold text-slate-900 dark:text-slate-50 sm:text-xl"
            >
              Core Engineering
            </h3>
            <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
              {coreEngineering.map((member) => (
                <TeamCard key={member.name} member={member} />
              ))}
            </div>
          </section>

          <section
            aria-labelledby="team-business-operations-heading"
            className="space-y-6"
          >
            <h3
              id="team-business-operations-heading"
              className="text-lg font-semibold text-slate-900 dark:text-slate-50 sm:text-xl"
            >
              Business &amp; Operations
            </h3>
            <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
              {businessAndOperations.map((member) => (
                <TeamCard key={member.name} member={member} />
              ))}
            </div>
          </section>
        </div>
      </Container>
    </section>
  );
}

function TeamCard({ member }: { member: TeamMember }) {
  const initials = getInitials(member.name);
  const hasLinkedIn = Boolean(member.linkedinUrl?.trim());

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 sm:p-7">
      <header className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <div
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-gradient-to-br from-slate-100 to-slate-200 text-sm font-semibold text-slate-700 dark:border-slate-700 dark:from-slate-800 dark:to-slate-700 dark:text-slate-200"
            aria-hidden="true"
          >
            {initials}
          </div>
          <div>
            <h4 className="text-base font-semibold text-slate-900 dark:text-slate-50 sm:text-lg">
              {member.name}
            </h4>
            <p className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-300">
              {member.role}
            </p>
          </div>
        </div>

        {hasLinkedIn ? (
          <a
            href={member.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`${member.name} on LinkedIn`}
            className="rounded-md p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-700 focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200 dark:focus-visible:ring-slate-50 dark:focus-visible:ring-offset-slate-900"
          >
            <LinkedInIcon />
          </a>
        ) : (
          <span
            aria-hidden="true"
            className="rounded-md p-2 text-slate-300 dark:text-slate-600"
          >
            <LinkedInIcon />
          </span>
        )}
      </header>

      <p className="mt-5 text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
        {member.bio}
      </p>
    </article>
  );
}

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M6.94 8.5H3.56V20h3.38V8.5Zm.22-3.56A1.96 1.96 0 0 0 5.2 3a1.97 1.97 0 0 0 0 3.94 1.97 1.97 0 0 0 1.96-2Zm12.78 8.33c0-3.02-1.61-4.92-4.27-4.92-1.97 0-2.85 1.08-3.34 1.84V8.5H8.96V20h3.38v-5.7c0-1.5.28-2.95 2.15-2.95 1.85 0 1.88 1.72 1.88 3.05V20h3.37v-6.73Z" />
    </svg>
  );
}

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) {
    return parts[0].slice(0, 2).toUpperCase();
  }

  return `${parts[0][0] ?? ""}${parts[parts.length - 1][0] ?? ""}`.toUpperCase();
}
