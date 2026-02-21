import { fetchMediumArticles } from "@/lib/medium";
import { MediumArticleCard } from "@/components/MediumArticleCard";
import TrackedExternalLink from "@/components/TrackedExternalLink";

export async function LatestMediumArticles({
  limit = 3,
  location = "homepage",
}: {
  limit?: number;
  location?: string;
}) {
  const articles = await fetchMediumArticles("futurebeyond.tech", limit);

  if (articles.length === 0) {
    return (
      <div className="rounded-xl border border-slate-200 bg-slate-50 p-8 text-center text-slate-600 dark:border-slate-700 dark:bg-slate-900/40 dark:text-slate-300">
        <p>Latest articles are loading.</p>
        <TrackedExternalLink
          href="https://medium.com/@futurebeyond.tech"
          className="mt-3 inline-flex items-center justify-center text-sm font-semibold text-emerald-600 transition-colors hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
          eventName="medium_profile_click"
          eventParams={{ location }}
        >
          View on Medium {"->"}
        </TrackedExternalLink>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {articles.map((article) => (
        <MediumArticleCard key={article.link} article={article} location={location} />
      ))}
    </div>
  );
}
