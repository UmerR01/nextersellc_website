import type { Metadata } from "next";
import Header from "@/components/Header";
import ARHero from "@/components/ai-readiness/ARHero";
import ARFoundation from "@/components/ai-readiness/ARFoundation";
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
import ArticleLayout from "@/components/shared/ArticleLayout";
import AIAwards from "@/components/ai-consulting/AIAwards";
import AIRecentWorks from "@/components/ai-consulting/AIRecentWorks";
import AIReviews from "@/components/ai-consulting/AIReviews";
import AipocLogos from "@/components/aipoc/AipocLogos";
import LetsStart from "@/components/home/LetsStart";
import AwesomeStories from "@/components/blog/AwesomeStories";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "AI Readiness Assessment — Nexterse LLC",
  description:
    "Nexterse LLC fixed-scope AI readiness assessment reviews your data architecture, infrastructure, security, and ROI assumptions before you invest in AI development.",
};

const CONTENTS = [
  { href: "#foundation", label: "Things to check" },
  { href: "#audit-scope", label: "Audit scope" },
  { href: "#architecture", label: "AI-ready architecture" },
  { href: "#timeline", label: "Timeline" },
  { href: "#deliverables", label: "Deliverables" },
  { href: "#awards", label: "Awards" },
  { href: "#recent-cases", label: "Recent AI cases" },
  { href: "#faq", label: "FAQ" },
  { href: "#use-cases", label: "Use cases" },
  { href: "#path", label: "From assessment" },
];

export default function AIReadinessPage() {
  return (
    <>
      <Header />
      <main>
        <ARHero />

        <ArticleLayout contents={CONTENTS} ariaLabel="AI Readiness page contents">
          <div className={styles.sectionsSpacing}>
            <AipocLogos />
            <div id="foundation"><ARFoundation /></div>
            <div id="audit-scope"><ARWhatsInit /></div>
            <ARStakeholders />
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
        </ArticleLayout>

        <AwesomeStories category="ai" />
      </main>
    </>
  );
}
