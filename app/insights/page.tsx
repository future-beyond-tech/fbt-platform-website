import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import { defaultMetadata } from "@/lib/seo";
import { fetchMediumArticles } from "@/lib/medium";
import { MediumArticleCard } from "@/components/MediumArticleCard";
import TrackedExternalLink from "@/components/TrackedExternalLink";
import PageViewEvent from "@/components/analytics/PageViewEvent";

const insightsTitle = "FBT Insights | Engineering, Security and AI";
const insightsDescription =
  "Latest engineering insights from the FBT team on architecture, security engineering, and AI automation.";
const baseMetadata = defaultMetadata(
  insightsTitle,
  insightsDescription,
  "/insights"
);

export const metadata: Metadata = {
  ...baseMetadata,
  keywords: [
    "software engineering blog",
    "security architecture",
    "AI automation",
    "Clean Architecture",
  ],
  alternates: {
    ...baseMetadata.alternates,
    types: {
      "application/rss+xml": "https://medium.com/feed/@futurebeyond.tech",
    },
  },
  openGraph: {
    ...baseMetadata.openGraph,
    title: insightsTitle,
    description: insightsDescription,
  },
  twitter: {
    ...baseMetadata.twitter,
    title: insightsTitle,
    description: insightsDescription,
  },
};

const topics = [
  { label: "Clean Architecture", slug: "clean-architecture" },
  { label: "Security Engineering", slug: "security-engineering" },
  { label: "OAuth 2.0", slug: "oauth2" },
  { label: "AI Automation", slug: "artificial-intelligence" },
  { label: "Microservices", slug: "microservices" },
  { label: "DevOps", slug: "devops" },
  { label: "Medical Device Security", slug: "medical-device-security" },
  { label: "Multi-Tenancy", slug: "multi-tenancy" },
] as const;

export default async function InsightsPage() {
  const articles = await fetchMediumArticles("futurebeyond.tech", 9);

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
      <PageViewEvent pagePath="/insights" pageTitle="FBT Insights Hub" />

      <section className="bg-slate-900 py-20 text-white sm:py-24">
        <Container>
          <div className="max-w-4xl space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                Medium Publication
              </span>
              <TrackedExternalLink
                href="https://medium.com/@futurebeyond.tech"
                className="inline-flex items-center gap-1 text-sm text-slate-400 transition-colors hover:text-white"
                eventName="medium_profile_click"
                eventParams={{ location: "insights_hero" }}
              >
                <span>@futurebeyond.tech</span>
                <span className="text-xs">{"->"}</span>
              </TrackedExternalLink>
            </div>

            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              FBT Insights
            </h1>
            <p className="max-w-2xl text-xl leading-relaxed text-slate-300">
              Engineering deep-dives from the team building enterprise SaaS.
              Security patterns, architecture decisions, and practical delivery
              lessons.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <TrackedExternalLink
                href="https://medium.com/@futurebeyond.tech"
                className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
                eventName="medium_profile_click"
                eventParams={{ location: "insights_hero_cta" }}
              >
                Follow on Medium
              </TrackedExternalLink>
              <a
                href="#topics"
                className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-slate-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
              >
                Browse by Topic
              </a>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          {articles.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((article, index) => (
                <MediumArticleCard
                  key={article.link}
                  article={article}
                  featured={index === 0}
                  location="insights_page"
                />
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-10 text-center dark:border-slate-700 dark:bg-slate-900/40">
              <p className="text-slate-600 dark:text-slate-300">
                Unable to load latest articles right now.
              </p>
              <TrackedExternalLink
                href="https://medium.com/@futurebeyond.tech"
                className="mt-4 inline-flex text-sm font-semibold text-emerald-600 transition-colors hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
                eventName="medium_profile_click"
                eventParams={{ location: "insights_fallback" }}
              >
                View on Medium {"->"}
              </TrackedExternalLink>
            </div>
          )}

          <div className="mt-12 text-center">
            <TrackedExternalLink
              href="https://medium.com/@futurebeyond.tech"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
              eventName="medium_profile_click"
              eventParams={{ location: "insights_bottom_link" }}
            >
              <span>View all articles on Medium</span>
              <span className="text-xs">{"->"}</span>
            </TrackedExternalLink>
          </div>
        </Container>
      </section>

      <section id="topics" className="bg-slate-50 py-16 dark:bg-slate-900/50">
        <Container>
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
            Browse by Topic
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {topics.map((topic) => (
              <TrackedExternalLink
                key={topic.slug}
                href={`https://medium.com/tag/${topic.slug}`}
                className="inline-flex min-h-[40px] items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 transition-colors hover:border-emerald-500 hover:text-emerald-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-emerald-500 dark:hover:text-emerald-400"
                eventName="medium_topic_click"
                eventParams={{ topic: topic.slug, location: "insights_topics" }}
              >
                {topic.label}
              </TrackedExternalLink>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-emerald-50 py-16 dark:bg-emerald-950/10">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-slate-100">
              Get Engineering Insights
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-slate-400">
              Follow FBT on Medium for weekly articles on enterprise
              architecture, security patterns, and lessons from shipping SaaS.
            </p>
            <TrackedExternalLink
              href="https://medium.com/@futurebeyond.tech"
              className="mt-8 inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-emerald-600 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
              eventName="medium_subscribe_click"
              eventParams={{ location: "insights_subscribe_cta" }}
            >
              <span>Follow @futurebeyond.tech</span>
            </TrackedExternalLink>
          </div>
        </Container>
      </section>
    </main>
  );
}
