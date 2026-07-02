import { redirect } from "next/navigation";
import type { Metadata } from "next";
import Header from "@/components/Header";
import AdlcHero from "@/components/adlc/AdlcHero";
import AdlcLogos from "@/components/adlc/AdlcLogos";
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
import AdlcBlog from "@/components/adlc/AdlcBlog";
import AdlcArticleLayout from "@/components/adlc/AdlcArticleLayout";
import CaseCards from "@/components/home/CaseCards";

export const metadata: Metadata = {
  title: "Agentic Development Lifecycle (ADLC) | Nexterse LLC",
  description:
    "Nexterse engineers secure, predictable AI systems using the Agentic Development Lifecycle (ADLC) — a structured 7-phase framework that controls risk, manages costs, and delivers measurable ROI.",
};

export default function AdlcPage() {
  redirect("/");
  return (
    <>
      <Header />
      <main>
        <AdlcHero />
        <AdlcArticleLayout>
          <AdlcLogos />
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
          <AdlcBlog />
        </AdlcArticleLayout>
      </main>
    </>
  );
}
