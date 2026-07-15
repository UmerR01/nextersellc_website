import type { Metadata } from "next";
import Header from "@/components/Header";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesArticleLayout from "@/components/services/ServicesArticleLayout";
import ServicesLogos from "@/components/services/ServicesLogos";
import ChallengesBlock from "@/components/services/ChallengesBlock";
import OurServicesCards from "@/components/services/OurServicesCards";
import ServicesDownloadCTA from "@/components/services/ServicesDownloadCTA";
import AIDevelopmentTabs from "@/components/services/AIDevelopmentTabs";
import IoTDevelopmentTabs from "@/components/services/IoTDevelopmentTabs";
import ServicesCitationBlock from "@/components/services/ServicesCitationBlock";
import DevPathSection from "@/components/services/DevPathSection";
import ComplianceBadgesRow from "@/components/services/ComplianceBadgesRow";
import ServicesIndustries from "@/components/services/ServicesIndustries";
import HowWeDeliverSteps from "@/components/services/HowWeDeliverSteps";
import ServicesTechStack from "@/components/services/ServicesTechStack";
import QualityControlBlock from "@/components/services/QualityControlBlock";
import CaseCards, { type CaseCard } from "@/components/home/CaseCards";
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
    "Nexterse LLC delivers AI, IoT, custom software, enterprise platform, and MVP development services. 14+ years, 350+ projects, ISO 27001 certified. Get in touch.",
};

const svcCases: CaseCard[] = [
  {
    banner: "/services-page/02_Frame-1787-1.png",
    name: "Dexai Robotics",
    title: "Graphical user interface for robot operation",
    text: "A GUI that freed Dexai Robotics' restaurant staff from engineer dependency — cutting robot setup time per shift by ~65% and reducing interaction errors by ~50% through real-time visual state monitoring and offline operation.",
    href: "/portfolio/dexai",
    tags: ["IoT", "Startups"],
  },
  {
    banner: "/services-page/12_Cover-2-1.png",
    name: "Wind Farm ML",
    title: "IoT and ML predictive maintenance for a 28-turbine wind farm",
    text: "A German operator runs 28 onshore turbines. Nexterse LLC built a predictive maintenance layer on top of the existing SCADA. Within 12 months, unplanned downtime fell by 38%, and availability rose to 97.7%.",
    href: "/portfolio/ml-based-predictive-maintenance-for-wind-farm",
    tags: ["IoT", "AI inside", "Enterprise"],
  },
  {
    banner: "/services-page/09_inbound_transportation_kanban_board011@2x.png",
    name: "Toyota ERP/CRM",
    title: "Toyota custom ERP/CRM system",
    text: "A custom ERP/CRM for Business Car Group — Russia's largest Toyota and Lexus dealer network — that replaced decade-old disjointed tools with a unified platform, cutting sales cycles by 30% across 20 dealer centers.",
    href: "/portfolio/scalex-custom-erp-system-for-automotive-industry",
    tags: ["Enterprise"],
  },
  {
    banner: "/services-page/10_Cover-1.png",
    name: "Steel Distributor",
    title: "Advanced structural analysis web app for a leading steel distributor",
    text: "Engineers complete structural analyses ~45% faster with a web platform that integrates the Client's Excel-based calculation logic, delivers real-time Shear, Deflection, and Moment visualization, and centralizes project records for geotechnical teams.",
    href: "/portfolio/advanced-structural-analysis-web-application",
    tags: ["Enterprise"],
  },
  {
    banner: "/services-page/07_Cover-right-2.png",
    name: "AI Knowledge Base",
    title: "AI-powered knowledge base for a global rights nonprofit",
    text: "A Middle Eastern nonprofit working in cultural preservation needed a single searchable repository for fragmented research on ethnic minorities. Nexterse LLC built a multilingual AI platform that now indexes 12,000+ artifacts across 18 countries.",
    href: "/portfolio/ai-knowledge-base-development",
    tags: ["AI inside", "Enterprise"],
  },
  {
    banner: "/services-page/01_Cover.png",
    name: "Media Buying System",
    title: "A media buying system for a leading US-based advertising agency",
    text: "50x faster ad operations and data processing cut from hours to under a minute — we replaced a 20-year-old FileMaker system with a custom platform covering 100+ operational workflows.",
    href: "/portfolio/media-buying-software-development",
    tags: ["Enterprise"],
  },
  {
    banner: "/services-page/06_Cover-1.png",
    name: "Event Platform",
    title: "Event platform for indie organizers across Europe",
    text: "A platform for indie event organizers that drove 8,000+ ticket sales in four months, with 54% of attendees completing post-event feedback — replacing a 4–5 tool workflow with a single dashboard.",
    href: "/portfolio/event-platform-development",
    tags: ["Startups"],
  },
  {
    banner: "/services-page/11_Cover-1-1.png",
    name: "AI Predictive Maintenance",
    title: "AI-powered predictive maintenance for a large industrial manufacturer",
    text: "An AIoT upgrade that cut unplanned downtime by 50% within 8 months, adding explainable ML and context analysis to the existing IoT platform.",
    href: "/portfolio/ai-powered-predictive-maintenance-for-a-large-industrial-manufacturer",
    tags: ["IoT", "AI inside", "Enterprise"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <ServicesHero />
        <ServicesArticleLayout>
          <ServicesLogos />
          <ChallengesBlock />
          <OurServicesCards />
          <ServicesDownloadCTA
            title="Get a free quote for your project development from our expert team!"
            variant="fintech"
          />
          <AIDevelopmentTabs />
          <IoTDevelopmentTabs />
          <ServicesCitationBlock />
          <DevPathSection />
          <ComplianceBadgesRow />
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
              cards={svcCases}
              heading={<>Our recent <span>works</span></>}
              windowed
            />
          </div>
          <ServicesReviewSlider />
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
