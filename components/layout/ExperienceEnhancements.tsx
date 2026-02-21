"use client";

import dynamic from "next/dynamic";

const StickyAssessmentCTA = dynamic(
  () => import("@/components/layout/StickyAssessmentCTA"),
  { ssr: false }
);
const ExitIntentPopup = dynamic(() => import("@/components/lead/ExitIntentPopup"), {
  ssr: false,
});
const LiveChatWidget = dynamic(
  () => import("@/components/layout/LiveChatWidget"),
  { ssr: false }
);

export default function ExperienceEnhancements() {
  return (
    <>
      <StickyAssessmentCTA />
      <ExitIntentPopup />
      <LiveChatWidget />
    </>
  );
}
