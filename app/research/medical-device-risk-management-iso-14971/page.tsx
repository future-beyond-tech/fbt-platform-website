import type { Metadata } from "next";
import { defaultMetadata } from "@/lib/seo";
import PageViewEvent from "@/components/analytics/PageViewEvent";
import Iso14971Content from "./Iso14971Content";

const articleTitle =
  "Deep Research: Medical Device Risk Management per ISO 14971 | FBT Research";
const articleDescription =
  "Comprehensive deep research on ISO 14971:2019 medical device risk management: planning, analysis, control, verification, residual risk, benefit-risk, and post-market surveillance.";
const baseMetadata = defaultMetadata(
  articleTitle,
  articleDescription,
  "/research/medical-device-risk-management-iso-14971"
);

export const metadata: Metadata = {
  ...baseMetadata,
  keywords: [
    "ISO 14971",
    "medical device risk management",
    "IVD risk management",
    "SaMD risk management",
    "post-market surveillance",
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

export default function MedicalDeviceRiskManagementIso14971Page() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <PageViewEvent
        pagePath="/research/medical-device-risk-management-iso-14971"
        pageTitle="Deep Research: Medical Device Risk Management per ISO 14971"
      />
      <Iso14971Content />
    </main>
  );
}
