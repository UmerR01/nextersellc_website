import { redirect } from "next/navigation";
import type { Metadata } from "next";
import Header from "@/components/Header";
import CSHero from "@/components/custom-software/CSHero";
import CSArticleLayout from "@/components/custom-software/CSArticleLayout";
import CSLogos from "@/components/custom-software/CSLogos";
import CSServicesBlock from "@/components/custom-software/CSServicesBlock";
import ComplianceBadges from "@/components/custom-software/ComplianceBadges";
import DeliveryModels from "@/components/custom-software/DeliveryModels";
import TwoLifecycles from "@/components/custom-software/TwoLifecycles";
import CSAchievementsBlock from "@/components/custom-software/CSAchievementsBlock";
import CSCitationBlock from "@/components/custom-software/CSCitationBlock";
import CSDownloadCTA from "@/components/custom-software/CSDownloadCTA";
import CSCasesBlock from "@/components/custom-software/CSCasesBlock";
import CSReviewSlider from "@/components/custom-software/CSReviewSlider";
import DevelopmentProcess from "@/components/custom-software/DevelopmentProcess";
import TechStack from "@/components/custom-software/TechStack";
import CSAdvancedTech from "@/components/custom-software/CSAdvancedTech";
import CSIndustries from "@/components/custom-software/CSIndustries";
import HowWePriceWork from "@/components/custom-software/HowWePriceWork";
import WhyTeams from "@/components/custom-software/WhyTeams";
import CSAwardsBlock from "@/components/custom-software/CSAwardsBlock";
import CSFaqBlock from "@/components/custom-software/CSFaqBlock";
import LetsStart from "@/components/home/LetsStart";
import CSBlogSection from "@/components/custom-software/CSBlogSection";

export const metadata: Metadata = {
  title: "Software Product Development Company | Nexterse LLC",
  description:
    "Nexterse LLC delivers custom software product development for web, mobile, IoT, enterprise, and AI builds. ISO 27001 certified, HIPAA-enabling, PCI-aligned. Get in touch.",
};

export default function CustomSoftwareDevelopmentPage() {
  redirect("/");
  return (
    <>
      <Header />
      <main>
        <CSHero />
        <CSArticleLayout>
          <CSLogos />
          <CSServicesBlock />
          <ComplianceBadges />
          <DeliveryModels />
          <TwoLifecycles />
          <CSAchievementsBlock />
          <CSCitationBlock />
          <CSDownloadCTA />
          <CSCasesBlock />
          <CSReviewSlider />
          <DevelopmentProcess />
          <TechStack />
          <CSAdvancedTech />
          <CSIndustries />
          <HowWePriceWork />
          <WhyTeams />
          <CSAwardsBlock />
          <CSFaqBlock />
          <LetsStart />
          <CSBlogSection />
        </CSArticleLayout>
      </main>
    </>
  );
}
