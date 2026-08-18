import type { Metadata } from "next";
import Header from "@/components/Header";
import CSHero from "@/components/custom-software/CSHero";
import CSArticleLayout from "@/components/custom-software/CSArticleLayout";
import AipocLogos from "@/components/aipoc/AipocLogos";
import CSServicesBlock from "@/components/custom-software/CSServicesBlock";
import DeliveryModels from "@/components/custom-software/DeliveryModels";
import TwoLifecycles from "@/components/custom-software/TwoLifecycles";
import CSAchievementsBlock from "@/components/custom-software/CSAchievementsBlock";
import CSDownloadCTA from "@/components/custom-software/CSDownloadCTA";
import CaseCards from "@/components/home/CaseCards";
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
    "Nexterse LLC delivers custom software product development for web, mobile, enterprise, and AI builds. ISO 27001 certified, HIPAA-enabling, PCI-aligned. Get in touch.",
};

export default function CustomSoftwareDevelopmentPage() {
  return (
    <>
      <Header />
      <main>
        <CSHero />
        <CSArticleLayout>
          <AipocLogos />
          <CSServicesBlock />
          <DeliveryModels />
          <TwoLifecycles />
          <CSAchievementsBlock />
          <CSDownloadCTA />
          <div id="cs-cases">
            <CaseCards heading={<>Our recent <span>case studies</span></>} windowed />
          </div>
          <CSReviewSlider primary="software" count={7} secondaryCount={2} />
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
