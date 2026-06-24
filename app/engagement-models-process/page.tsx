import type { Metadata } from "next";
import Header from "@/components/Header";
import EngagementHero from "@/components/engagement/EngagementHero";
import WhyNavCards from "@/components/engagement/WhyNavCards";
import ModelsBlock from "@/components/engagement/ModelsBlock";
import ComparisonTable from "@/components/engagement/ComparisonTable";
import DownloadCTA from "@/components/engagement/DownloadCTA";
import ProjectOrganization from "@/components/engagement/ProjectOrganization";
import CasesBlock from "@/components/engagement/CasesBlock";
import ReviewSlider from "@/components/engagement/ReviewSlider";
import EngAwardsBlock from "@/components/engagement/EngAwardsBlock";
import LetsStart from "@/components/home/LetsStart";
import EngCrosslinksBlock from "@/components/engagement/EngCrosslinksBlock";

export const metadata: Metadata = {
  title: "Engagement Models & Process | Nexterse",
  description:
    "Explore Nexterse's flexible engagement models – Fixed Price, Time & Material, T&M with Budget Cap, and Dedicated Team. Find the right model for your custom software project.",
};

export default function EngagementModelsPage() {
  return (
    <>
      <Header />
      <EngagementHero />
      <WhyNavCards />
      <ModelsBlock />
      <ComparisonTable />
      <DownloadCTA />
      <ProjectOrganization />
      <CasesBlock />
      <ReviewSlider />
      <EngAwardsBlock />
      <LetsStart />
      <EngCrosslinksBlock />
    </>
  );
}
