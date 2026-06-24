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
import AITableOfContents from "@/components/ai-consulting/AITableOfContents";
import LogosMarquee from "@/components/home/LogosMarquee";
import LetsStart from "@/components/home/LetsStart";
import Stories from "@/components/home/Stories";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "AI Consulting Services — Nexterse",
  description:
    "Stop guessing how AI fits into your business. Nexterse AI consulting helps organizations identify the highest-ROI opportunities and design secure, production-ready AI solutions.",
};

export default function AIConsultingPage() {
  return (
    <>
      <Header />
      <main>
        <AIHero />

        <div className={styles.layout}>
          {/* ── Left: all page sections ── */}
          <div className={styles.mainContent}>
            <LogosMarquee />
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
            <div id="faq"><AIFaq /></div>
            <AIAwards />
            <LetsStart />
          </div>

          {/* ── Right: sticky contents sidebar ── */}
          <aside className={styles.tocColumn}>
            <AITableOfContents />
          </aside>
        </div>

        <Stories />
      </main>
    </>
  );
}
