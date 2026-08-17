import type { Metadata } from "next";
import Header from "@/components/Header";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesArticleLayout from "@/components/services/ServicesArticleLayout";
import AipocLogos from "@/components/aipoc/AipocLogos";
import ChallengesBlock from "@/components/services/ChallengesBlock";
import OurServicesCards from "@/components/services/OurServicesCards";
import ServicesDownloadCTA from "@/components/services/ServicesDownloadCTA";
import AIDevelopmentTabs from "@/components/services/AIDevelopmentTabs";
import IoTDevelopmentTabs from "@/components/services/IoTDevelopmentTabs";
import DevPathSection from "@/components/services/DevPathSection";
import ServicesIndustries from "@/components/services/ServicesIndustries";
import HowWeDeliverSteps from "@/components/services/HowWeDeliverSteps";
import ServicesTechStack from "@/components/services/ServicesTechStack";
import QualityControlBlock from "@/components/services/QualityControlBlock";
import CaseCards from "@/components/home/CaseCards";
import ServicesReviewSlider from "@/components/services/ServicesReviewSlider";
import ServicesAchievements from "@/components/services/ServicesAchievements";
import DevelopmentCostBlock from "@/components/services/DevelopmentCostBlock";
import WhyChooseUs from "@/components/services/WhyChooseUs";
import ServicesBlogSection from "@/components/services/ServicesBlogSection";
import ServicesFaqBlock from "@/components/services/ServicesFaqBlock";
import ServicesCrosslinks from "@/components/services/ServicesCrosslinks";
import LetsStart from "@/components/home/LetsStart";

export const metadata: Metadata = {
  title: "Software Development Services | Nexterse LLC",
  description:
    "Nexterse LLC delivers AI, custom software, enterprise platform, and MVP development services. 14+ years, 350+ projects, ISO 27001 certified. Get in touch.",
};



export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <ServicesHero />
        <ServicesArticleLayout>
          <AipocLogos />
          <ChallengesBlock />
          <OurServicesCards />
          <ServicesDownloadCTA
            title="Get a free quote for your project development from our expert team!"
            variant="fintech"
          />
          <AIDevelopmentTabs />
          <IoTDevelopmentTabs />
          <DevPathSection />
          <ServicesDownloadCTA
            title="Transform your business with custom software. Start Now!"
            variant="fintech"
          />
          <ServicesIndustries />
          <HowWeDeliverSteps />
          <ServicesTechStack />
          <QualityControlBlock />
          <div id="svc-cases">
            <CaseCards
              heading={<>Our recent <span>works</span></>}
              windowed
            />
          </div>
          <ServicesReviewSlider primary="software" count={7} secondaryCount={2} />
          <ServicesAchievements />
          <DevelopmentCostBlock />
          <WhyChooseUs />
          <LetsStart />
          <ServicesBlogSection />
          <ServicesFaqBlock />
          <ServicesCrosslinks />
        </ServicesArticleLayout>
      </main>
    </>
  );
}
