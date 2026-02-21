import Link from "next/link";
import Container from "@/components/layout/Container";
import { defaultMetadata } from "@/lib/seo";
import { blogPosts } from "@/lib/blogPosts";

export const metadata = defaultMetadata(
  "Blog",
  "Security and architecture deep-dives for startups scaling critical systems.",
  "/blog"
);

export default function BlogIndexPage() {
  return (
    <section className="py-20 sm:py-24 lg:py-32" aria-labelledby="blog-heading">
      <Container>
        <div className="mx-auto max-w-5xl space-y-10">
          <header className="space-y-4">
            <p className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400 sm:text-sm">
              Insights
            </p>
            <h1
              id="blog-heading"
              className="text-2xl font-semibold text-slate-900 dark:text-slate-50 sm:text-3xl lg:text-4xl"
            >
              FBT Blog
            </h1>
            <p className="max-w-3xl text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
              Deep technical content for startup teams that need secure,
              scalable systems without avoidable technical debt.
            </p>
          </header>

          <div className="grid gap-6">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-8"
              >
                <p className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  Target keyword: {post.targetKeyword}
                </p>
                <h2 className="mt-2 text-lg font-semibold text-slate-900 dark:text-slate-100 sm:text-xl">
                  {post.title}
                </h2>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 sm:text-base">
                  {post.excerpt}
                </p>
                <p className="mt-3 text-sm font-medium text-slate-700 dark:text-slate-300">
                  Hook: {post.hook}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-5 inline-flex min-h-[44px] items-center justify-center rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200"
                >
                  Read Article
                </Link>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
