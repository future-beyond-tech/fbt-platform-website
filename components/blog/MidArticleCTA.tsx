import Link from "next/link";

export default function MidArticleCTA({ topic }: { topic: string }) {
  return (
    <aside className="my-10 rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800/40 sm:p-7">
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 sm:text-lg">
        Want us to audit your {topic}? Book a free assessment
      </h3>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 sm:text-base">
        We identify risk, architecture bottlenecks, and the fastest next
        improvements for your team.
      </p>
      <Link
        href="/assessment"
        className="mt-4 inline-flex min-h-[44px] items-center justify-center rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200"
      >
        Book Assessment
      </Link>
    </aside>
  );
}
