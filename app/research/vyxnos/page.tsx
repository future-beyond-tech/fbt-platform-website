import type { Metadata } from "next";
import { defaultMetadata } from "@/lib/seo";
import PageViewEvent from "@/components/analytics/PageViewEvent";
import VyxnosContent from "./VyxnosContent";

const articleTitle =
  "VYXNOS — Autonomous Security Intelligence Platform | FBT Research";
const articleDescription =
  "Market analysis and implementation strategy for AI-native global security infrastructure: edge-native inference, WASM plugin architecture, and autonomous predictive defense. A product by FBT Technologies.";
const baseMetadata = defaultMetadata(
  articleTitle,
  articleDescription,
  "/research/vyxnos"
);

export const metadata: Metadata = {
  ...baseMetadata,
  keywords: [
    "VYXNOS",
    "autonomous security",
    "AI-native security",
    "edge AI",
    "WASM",
    "market analysis",
  ],
  openGraph: {
    ...baseMetadata.openGraph,
    title: articleTitle,
    description: articleDescription,
    type: "article",
  },
  twitter: {
    ...baseMetadata.twitter,
    title: articleTitle,
    description: articleDescription,
  },
};

export default function VyxnosResearchPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <PageViewEvent
        pagePath="/research/vyxnos"
        pageTitle="VYXNOS — Autonomous Security Intelligence Platform"
      />
      <VyxnosContent />
    </main>
  );
}
