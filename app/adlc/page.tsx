import type { Metadata } from "next";
import Header from "@/components/Header";
import AdlcHero from "@/components/adlc/AdlcHero";
import AipocLogos from "@/components/aipoc/AipocLogos";
import AdlcVerticalTabs from "@/components/adlc/AdlcVerticalTabs";
import AdlcDiagram from "@/components/adlc/AdlcDiagram";
import AdlcValueCards from "@/components/adlc/AdlcValueCards";
import AdlcAiEcosystem from "@/components/adlc/AdlcAiEcosystem";
import AdlcParadigmShift from "@/components/adlc/AdlcParadigmShift";
import AdlcPrinciples from "@/components/adlc/AdlcPrinciples";
import AdlcStartCTA from "@/components/adlc/AdlcStartCTA";
import AdlcTechPartners from "@/components/adlc/AdlcTechPartners";
import AdlcReviews from "@/components/adlc/AdlcReviews";
import TeamAwards from "@/components/team/TeamAwards";
import LetsStart from "@/components/home/LetsStart";
import AwesomeStories from "@/components/blog/AwesomeStories";
import ArticleLayout from "@/components/shared/ArticleLayout";
import CaseCards from "@/components/home/CaseCards";

export const metadata: Metadata = {
  title: "Agentic Development Lifecycle (ADLC) | Nexterse LLC",
  description:
    "Nexterse engineers secure, predictable AI systems using the Agentic Development Lifecycle (ADLC) — a structured 7-phase framework that controls risk, manages costs, and delivers measurable ROI.",
};

const CONTENTS = [
  { href: "#adlc-phases", label: "ADLC phases" },
  { href: "#adlc-value", label: "Value" },
  { href: "#adlc-ai-ecosystem", label: "AI ecosystem" },
  { href: "#adlc-new-standards", label: "New standards" },
  { href: "#adlc-principles", label: "ADLC principles" },
  { href: "#adlc-cases", label: "Our recent AI cases" },
];

export default function AdlcPage() {
  return (
    <>
      <Header />
      <main>
        <AdlcHero />
        <ArticleLayout contents={CONTENTS} ariaLabel="ADLC page contents">
          <AipocLogos />
          <AdlcVerticalTabs />
          <AdlcDiagram />
          <AdlcValueCards />
          <AdlcAiEcosystem />
          <AdlcParadigmShift />
          <AdlcPrinciples />
          <AdlcStartCTA />
          <AdlcTechPartners />
          <div id="adlc-cases">
            <CaseCards />
          </div>
          <AdlcReviews />
          <TeamAwards />
          <LetsStart />
          <AwesomeStories category="ai" />
        </ArticleLayout>
      </main>
    </>
  );
}
