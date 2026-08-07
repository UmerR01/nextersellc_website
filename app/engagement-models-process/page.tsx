import type { Metadata } from "next";
import Header from "@/components/Header";
import EngagementHero from "@/components/engagement/EngagementHero";
import AipocLogos from "@/components/aipoc/AipocLogos";
import AchievementsBlock from "@/components/engagement/AchievementsBlock";
import WhyModelMatters from "@/components/engagement/WhyModelMatters";
import OurServicesBlock from "@/components/engagement/OurServicesBlock";
import ModelsBlock from "@/components/engagement/ModelsBlock";
import ComparisonTable from "@/components/engagement/ComparisonTable";
import AIProjectsBlock from "@/components/engagement/AIProjectsBlock";
import DownloadCTA from "@/components/engagement/DownloadCTA";
import IndustryTable from "@/components/engagement/IndustryTable";
import SwitchingModels from "@/components/engagement/SwitchingModels";
import RiskTable from "@/components/engagement/RiskTable";
import ContractingProcess from "@/components/engagement/ContractingProcess";
import HowWeRunProjects from "@/components/engagement/HowWeRunProjects";
import CasesBlock from "@/components/home/CaseCards";
import ReviewSlider from "@/components/engagement/ReviewSlider";
import WhySumatoSoft from "@/components/engagement/WhySumatoSoft";
import EngAwardsBlock from "@/components/engagement/EngAwardsBlock";
import EngFaqBlock from "@/components/engagement/EngFaqBlock";
import LetsStart from "@/components/home/LetsStart";
import EngCrosslinksBlock from "@/components/engagement/EngCrosslinksBlock";
import BlogSection from "@/components/engagement/BlogSection";

export const metadata: Metadata = {
  title: "Engagement Models & Process | Nexterse LLC",
  description:
    "Explore Nexterse LLC's flexible engagement models – Fixed Price, Time & Material, T&M with Budget Cap, and Dedicated Team. Find the right model for your custom software project.",
};

export default function EngagementModelsPage() {
  return (
    <>
      <Header />
      <EngagementHero />
      <AipocLogos />
      <AchievementsBlock />
      <WhyModelMatters />
      <OurServicesBlock />
      <ModelsBlock />
      <ComparisonTable />
      <AIProjectsBlock />
      <DownloadCTA />
      <IndustryTable />
      <SwitchingModels />
      <RiskTable />
      <ContractingProcess />
      <HowWeRunProjects />
      <CasesBlock />
      <ReviewSlider />
      <WhySumatoSoft />
      <EngAwardsBlock />
      <EngFaqBlock />
      <LetsStart />
      <EngCrosslinksBlock />
      <BlogSection />
    </>
  );
}
