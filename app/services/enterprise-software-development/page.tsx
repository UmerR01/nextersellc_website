import type { Metadata } from "next";
import Header from "@/components/Header";
import ESDHero from "@/components/esd/ESDHero";
import AipocLogos from "@/components/aipoc/AipocLogos";
import ESDServicesBlock from "@/components/esd/ESDServicesBlock";
import ESDDataReadiness from "@/components/esd/ESDDataReadiness";
import ESDArchitectureImage from "@/components/esd/ESDArchitectureImage";
import ESDDownloadCTA from "@/components/esd/ESDDownloadCTA";
import ESDVerticalTabs from "@/components/esd/ESDVerticalTabs";
import CaseCards from "@/components/home/CaseCards";
import TeamReviewSlider from "@/components/team/TeamReviewSlider";
import ESDIndustries from "@/components/esd/ESDIndustries";
import ESDStandards from "@/components/esd/ESDStandards";
import ESDApproach from "@/components/esd/ESDApproach";
import ESDQualityPractices from "@/components/esd/ESDQualityPractices";
import ESDTechStack from "@/components/esd/ESDTechStack";
import ESDSecurityPosture from "@/components/esd/ESDSecurityPosture";
import ESDServicesBenefits from "@/components/esd/ESDServicesBenefits";
import ESDReliablePartner from "@/components/esd/ESDReliablePartner";
import ESDAwardsBlock from "@/components/esd/ESDAwardsBlock";
import LetsStart from "@/components/home/LetsStart";
import ESDFaqBlock from "@/components/esd/ESDFaqBlock";
import AwesomeStories from "@/components/blog/AwesomeStories";
import ESDCrosslinks from "@/components/esd/ESDCrosslinks";
import ArticleLayout from "@/components/shared/ArticleLayout";

export const metadata: Metadata = {
  title: "Enterprise Software Development Services | Nexterse LLC",
  description:
    "Nexterse LLC builds and updates enterprise systems for companies that need stable operation, deep integration, and room to grow. We work with your core platforms, existing solutions, and internal tools.",
};

const CONTENTS = [
  { href: "#comprehensive-enterprise-software-services", label: "Services" },
  { href: "#ai-starts-with-data-readiness", label: "AI readiness audit" },
  { href: "#recent-works", label: "Case studies" },
  { href: "#enterprise-solution-built-for-your-industry", label: "Industries" },
  { href: "#enterprise-software-development-approach", label: "Approach" },
  { href: "#our-expertise-in-tools-and-technologies", label: "Key tech stack" },
  { href: "#ai-first-security-posture", label: "AI-first security posture" },
  { href: "#benefits-custom-enterprise-software", label: "Benefits" },
  { href: "#awards-recognitions", label: "Rewards" },
  { href: "#frequently-asked-questions", label: "FAQ" },
];

export default function EnterpriseSDPage() {
  return (
    <>
      <Header />
      <main>
        <ESDHero />
        <ArticleLayout contents={CONTENTS} ariaLabel="Enterprise software development page contents">
          <AipocLogos />
          <ESDServicesBlock />
          <ESDDataReadiness />
          <ESDArchitectureImage />
          <ESDDownloadCTA />
          <ESDVerticalTabs />
          <div id="recent-works">
            <CaseCards />
          </div>
          <TeamReviewSlider primary="software" count={7} secondaryCount={2} />
          <ESDIndustries />
          <ESDStandards />
          <ESDApproach />
          <ESDQualityPractices />
          <ESDTechStack />
          <ESDSecurityPosture />
          <ESDServicesBenefits />
          <ESDReliablePartner />
          <ESDAwardsBlock />
          <LetsStart />
          <ESDFaqBlock />
          <AwesomeStories category="enterprise" />
          <ESDCrosslinks />
        </ArticleLayout>
      </main>
    </>
  );
}
