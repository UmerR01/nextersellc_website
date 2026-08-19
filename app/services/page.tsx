import type { Metadata } from "next";
import Header from "@/components/Header";
import ServicesHero from "@/components/services/ServicesHero";
import ArticleLayout from "@/components/shared/ArticleLayout";
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
import AwesomeStories from "@/components/blog/AwesomeStories";
import ServicesFaqBlock from "@/components/services/ServicesFaqBlock";
import ServicesCrosslinks from "@/components/services/ServicesCrosslinks";
import LetsStart from "@/components/home/LetsStart";

export const metadata: Metadata = {
  title: "Software Development Services | Nexterse LLC",
  description:
    "Nexterse LLC delivers AI, custom software, enterprise platform, and MVP development services. 14+ years, 350+ projects, ISO 27001 certified. Get in touch.",
};



const CONTENTS = [
  { href: "#svc-challenges", label: "Challenges" },
  { href: "#svc-services", label: "Services" },
  { href: "#svc-ai", label: "AI development" },
  { href: "#svc-applied-ai", label: "Applied AI services" },
  { href: "#svc-industries", label: "Industries" },
  { href: "#svc-process", label: "Process" },
  { href: "#svc-techstack", label: "Core tech stack" },
  { href: "#svc-quality", label: "Quality control" },
  { href: "#svc-cases", label: "Case studies" },
  { href: "#svc-awards", label: "Awards & recognitions" },
  { href: "#svc-cost", label: "What affects cost" },
  { href: "#svc-faq", label: "FAQ" },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <ServicesHero />
        <ArticleLayout contents={CONTENTS} ariaLabel="Services page contents">
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
          <AwesomeStories />
          <ServicesFaqBlock />
          <ServicesCrosslinks />
        </ArticleLayout>
      </main>
    </>
  );
}
