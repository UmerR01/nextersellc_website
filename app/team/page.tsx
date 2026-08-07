import type { Metadata } from "next";
import Header from "@/components/Header";
import TeamHero from "@/components/team/TeamHero";
import AipocLogos from "@/components/aipoc/AipocLogos";
import WhoWeAre from "@/components/team/WhoWeAre";
import BestTech from "@/components/team/BestTech";
import CompanyHistory from "@/components/team/CompanyHistory";
import TeamSlider from "@/components/team/TeamSlider";
import CaseCards from "@/components/home/CaseCards";
import TeamReviewSlider from "@/components/team/TeamReviewSlider";
import ProjectSuccess from "@/components/team/ProjectSuccess";
import DownloadCTA from "@/components/team/DownloadCTA";
import WayWeWork from "@/components/team/WayWeWork";
import TeamAwards from "@/components/team/TeamAwards";
import OurValues from "@/components/team/OurValues";
import OfficePhotos from "@/components/team/OfficePhotos";
import TeamFaq from "@/components/team/TeamFaq";
import TeamVideo from "@/components/team/TeamVideo";
import LetsStart from "@/components/home/LetsStart";
import TeamBlog from "@/components/team/TeamBlog";

export const metadata: Metadata = {
  title: "About Nexterse LLC | AI-Powered Software Development Company",
  description:
    "Meet Nexterse LLC — an AI-powered software development company delivering custom AI and IoT systems, enterprise software, and legacy modernization across 25+ countries.",
};

export default function TeamPage() {
  return (
    <>
      <Header />
      <main>
        <TeamHero />
        <AipocLogos />
        <WhoWeAre />
        <BestTech />
        <CompanyHistory />
        <TeamSlider />
        <CaseCards />
        <TeamReviewSlider />
        <ProjectSuccess />
        <DownloadCTA />
        <WayWeWork />
        <TeamAwards />
        <OurValues />
        <OfficePhotos />
        <TeamFaq />
        <TeamVideo />
        <LetsStart />
        <TeamBlog />
      </main>
    </>
  );
}
