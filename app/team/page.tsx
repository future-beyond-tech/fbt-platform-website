import Container from "@/components/layout/Container";
import Team from "@/components/home/Team";
import { defaultMetadata } from "@/lib/seo";

export const metadata = defaultMetadata(
  "Team",
  "Meet the FBT team building secure, enterprise-grade SaaS platforms and client systems.",
  "/team"
);

export default function TeamPage() {
  return (
    <>
      <section className="pt-20 sm:pt-24 lg:pt-32" aria-labelledby="team-page-heading">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400 sm:text-sm">
              Company
            </p>
            <h1
              id="team-page-heading"
              className="mt-3 text-2xl font-semibold text-slate-900 dark:text-slate-50 sm:text-3xl"
            >
              Team
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
              Engineers and operators behind our consulting engagements and product
              platforms.
            </p>
          </div>
        </Container>
      </section>
      <Team />
    </>
  );
}
