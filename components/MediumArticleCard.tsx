import type { MediumArticle } from "@/lib/medium";
import TrackedExternalLink from "@/components/TrackedExternalLink";

type MediumArticleCardProps = {
  article: MediumArticle;
  featured?: boolean;
  location?: string;
};

export function MediumArticleCard({
  article,
  featured = false,
  location = "insights_page",
}: MediumArticleCardProps) {
  return (
    <article
      className={`group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md dark:border-slate-700 dark:bg-slate-900 ${
        featured ? "md:col-span-2 lg:col-span-1" : ""
      }`}
    >
      {article.thumbnail && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={article.thumbnail}
            alt={article.title}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
          />
        </div>
      )}

      <div className="p-6">
        {article.categories.length > 0 && (
          <div className="mb-3 flex flex-wrap gap-2">
            {article.categories.slice(0, 2).map((category) => (
              <span
                key={category}
                className="rounded bg-slate-100 px-2 py-1 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-300"
              >
                {category}
              </span>
            ))}
          </div>
        )}

        <h3 className="text-lg font-semibold text-slate-900 transition-colors group-hover:text-emerald-600 dark:text-slate-100 dark:group-hover:text-emerald-400">
          <TrackedExternalLink
            href={article.link}
            className="inline-flex items-start gap-2"
            eventName="medium_article_clicked"
            eventParams={{
              title: article.title,
              category: article.categories[0] ?? "uncategorized",
              location,
            }}
          >
            <span>{article.title}</span>
            <span className="text-xs text-slate-400 transition-opacity group-hover:opacity-100 sm:opacity-0">
              {"->"}
            </span>
          </TrackedExternalLink>
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          {article.description}
        </p>

        <div className="mt-5 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <span>{article.pubDate}</span>
          <span>{article.readingTimeMinutes} min read</span>
        </div>
      </div>
    </article>
  );
}
