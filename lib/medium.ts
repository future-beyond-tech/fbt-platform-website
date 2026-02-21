import { fallbackArticles } from "@/lib/static-articles";

export interface MediumArticle {
  title: string;
  link: string;
  pubDate: string;
  categories: string[];
  thumbnail?: string;
  description: string;
  author: string;
  readingTimeMinutes: number;
}

type RssToJsonItem = {
  title?: string;
  link?: string;
  pubDate?: string;
  categories?: string[];
  thumbnail?: string;
  author?: string;
  description?: string;
  content?: string;
};

type RssToJsonResponse = {
  status?: string;
  items?: RssToJsonItem[];
};

export async function fetchMediumArticles(
  username = "futurebeyond.tech",
  limit = 6
): Promise<MediumArticle[]> {
  const safeLimit = Number.isFinite(limit) ? Math.max(1, Math.min(limit, 20)) : 6;
  const fallback = fallbackArticles.slice(0, safeLimit).map((article) => ({
    ...article,
    readingTimeMinutes: estimateReadTime(article.description),
  }));

  try {
    const rssUrl = `https://medium.com/feed/@${username}`;
    const endpoint = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(
      rssUrl
    )}`;

    const response = await fetch(endpoint, {
      next: { revalidate: 3600 },
      signal: AbortSignal.timeout(6000),
    });

    if (!response.ok) {
      throw new Error(`Medium fetch failed: ${response.status}`);
    }

    const data = (await response.json()) as RssToJsonResponse;
    if (data.status !== "ok" || !Array.isArray(data.items)) {
      throw new Error("Unexpected RSS2JSON response shape");
    }

    const parsed = data.items
      .slice(0, safeLimit)
      .map((item) => {
        const rawHtml = item.content ?? item.description ?? "";
        const description = cleanDescription(rawHtml);
        const pubDate = formatDate(item.pubDate);

        return {
          title: item.title?.trim() || "Untitled article",
          link: item.link?.trim() || `https://medium.com/@${username}`,
          pubDate,
          categories: Array.isArray(item.categories) ? item.categories : [],
          thumbnail: extractThumbnail(item.thumbnail ?? rawHtml),
          description,
          author: item.author?.trim() || "FBT Engineering Team",
          readingTimeMinutes: estimateReadTime(stripHtml(rawHtml)),
        } satisfies MediumArticle;
      })
      .filter((article) => Boolean(article.link));

    return parsed.length > 0 ? parsed : fallback;
  } catch (error) {
    console.error("Error fetching Medium articles:", error);
    return fallback;
  }
}

function extractThumbnail(value: string): string | undefined {
  if (!value) {
    return undefined;
  }

  if (value.startsWith("http://") || value.startsWith("https://")) {
    return value;
  }

  const imgMatch = value.match(/<img[^>]+src="([^"]+)"/i);
  return imgMatch?.[1];
}

function cleanDescription(html: string): string {
  const text = stripHtml(html).replace(/\s+/g, " ").trim();
  if (text.length <= 160) {
    return text;
  }
  return `${text.slice(0, 157)}...`;
}

function stripHtml(html: string): string {
  return html
    .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?>[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&");
}

function estimateReadTime(text: string): number {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

function formatDate(value?: string): string {
  if (!value) {
    return "Recent";
  }

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "Recent";
  }

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
