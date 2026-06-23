import type { Metadata } from "next";
import Header from "@/components/Header";
import ARHero from "@/components/ai-readiness/ARHero";
import ARFoundation from "@/components/ai-readiness/ARFoundation";
import ARQuiz from "@/components/ai-readiness/ARQuiz";
import ARStakeholders from "@/components/ai-readiness/ARStakeholders";
import ARWhatsInit from "@/components/ai-readiness/ARWhatsInit";
import ARChecklist from "@/components/ai-readiness/ARChecklist";
import ARArchitecture from "@/components/ai-readiness/ARArchitecture";
import ARTimeline from "@/components/ai-readiness/ARTimeline";
import ARDeliverables from "@/components/ai-readiness/ARDeliverables";
import ARTalkExpert from "@/components/ai-readiness/ARTalkExpert";
import ARUseCases from "@/components/ai-readiness/ARUseCases";
import ARPath from "@/components/ai-readiness/ARPath";
import ARMoreAbout from "@/components/ai-readiness/ARMoreAbout";
import ARFAQ from "@/components/ai-readiness/ARFAQ";
import ARTableOfContents from "@/components/ai-readiness/ARTableOfContents";
import AIAwards from "@/components/ai-consulting/AIAwards";
import AIRecentWorks from "@/components/ai-consulting/AIRecentWorks";
import AIReviews from "@/components/ai-consulting/AIReviews";
import LogosMarquee from "@/components/home/LogosMarquee";
import LetsStart from "@/components/home/LetsStart";
import Stories from "@/components/home/Stories";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "AI Readiness Assessment — Nexterse",
  description:
    "Nexterse fixed-scope AI readiness assessment reviews your data architecture, infrastructure, security, and ROI assumptions before you invest in AI development.",
};

export default function AIReadinessPage() {
  return (
    <>
      <Header />
      <main>
        <ARHero />

        <div className={styles.layout}>
          <div className={styles.mainContent}>
            <LogosMarquee />
            <div id="foundation"><ARFoundation /></div>
            <ARQuiz />
            <ARStakeholders />
            <div id="audit-scope"><ARWhatsInit /></div>
            <ARChecklist />
            <div id="architecture"><ARArchitecture /></div>
            <div id="timeline"><ARTimeline /></div>
            <div id="deliverables"><ARDeliverables /></div>
            <div id="awards"><AIAwards /></div>
            <div id="recent-cases"><AIRecentWorks /></div>
            <AIReviews />
            <div id="faq"><ARFAQ /></div>
            <ARTalkExpert />
            <div id="use-cases"><ARUseCases /></div>
            <div id="path"><ARPath /></div>
            <LetsStart />
            <ARMoreAbout />
          </div>

          <aside className={styles.tocColumn}>
            <ARTableOfContents />
          </aside>
        </div>

        <Stories />
      </main>
    </>
  );
}
