import type { Metadata } from "next";
import Header from "@/components/Header";
import AIHero from "@/components/ai-consulting/AIHero";
import AIDualRisks from "@/components/ai-consulting/AIDualRisks";
import AIWhyFails from "@/components/ai-consulting/AIWhyFails";
import AIConsultingServices from "@/components/ai-consulting/AIConsultingServices";
import AITalkExperts from "@/components/ai-consulting/AITalkExperts";
import AIFramework from "@/components/ai-consulting/AIFramework";
import AIEngagements from "@/components/ai-consulting/AIEngagements";
import AITechStack from "@/components/ai-consulting/AITechStack";
import AIWontForce from "@/components/ai-consulting/AIWontForce";
import AIBlueprint from "@/components/ai-consulting/AIBlueprint";
import AIRecentWorks from "@/components/ai-consulting/AIRecentWorks";
import AIReviews from "@/components/ai-consulting/AIReviews";
import AIMaturity from "@/components/ai-consulting/AIMaturity";
import AIFaq from "@/components/ai-consulting/AIFaq";
import AIAwards from "@/components/ai-consulting/AIAwards";
import ArticleLayout from "@/components/shared/ArticleLayout";
import AipocLogos from "@/components/aipoc/AipocLogos";
import LetsStart from "@/components/home/LetsStart";
import AwesomeStories from "@/components/blog/AwesomeStories";

export const metadata: Metadata = {
  title: "AI Consulting Services — Nexterse LLC",
  description:
    "Stop guessing how AI fits into your business. Nexterse LLC AI consulting helps organizations identify the highest-ROI opportunities and design secure, production-ready AI solutions.",
};

const CONTENTS = [
  { href: "#services", label: "Services" },
  { href: "#framework", label: "Framework" },
  { href: "#engagements", label: "Engagement options" },
  { href: "#tech-stack", label: "Tech stack" },
  { href: "#sdlc", label: "SDLC vs ADLC" },
  { href: "#deliverables", label: "Deliverables" },
  { href: "#recent-cases", label: "Our recent AI cases" },
  { href: "#maturity", label: "Check AI maturity" },
  { href: "#faq", label: "FAQ" },
  { href: "#awards", label: "Awards" },
];

export default function AIConsultingPage() {
  return (
    <>
      <Header />
      <main>
        <AIHero />

        <ArticleLayout contents={CONTENTS} ariaLabel="AI Consulting page contents">
          <AipocLogos />
          <AIDualRisks />
          <AIWhyFails />
          <div id="services"><AIConsultingServices /></div>
          <AITalkExperts />
          <div id="framework"><AIFramework /></div>
          <div id="engagements"><AIEngagements /></div>
          <div id="tech-stack"><AITechStack /></div>
          <div id="sdlc"><AIWontForce /></div>
          <div id="deliverables"><AIBlueprint /></div>
          <div id="recent-cases"><AIRecentWorks /></div>
          <AIReviews />
          <div id="maturity"><AIMaturity /></div>
          <AIFaq />
          <AIAwards />
          <LetsStart />
        </ArticleLayout>

        <AwesomeStories category="ai" />
      </main>
    </>
  );
}
