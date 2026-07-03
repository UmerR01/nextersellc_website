import { redirect } from "next/navigation";
import type { Metadata } from "next";
import Header from "@/components/Header";
import SdlcHero from "@/components/sdlc/SdlcHero";
import SdlcVsAdlc from "@/components/sdlc/SdlcVsAdlc";
import SdlcPhasesGlance from "@/components/sdlc/SdlcPhasesGlance";
import SdlcPhases from "@/components/sdlc/SdlcPhases";
import SdlcFrameworks from "@/components/sdlc/SdlcFrameworks";
import SdlcToolsTable from "@/components/sdlc/SdlcToolsTable";
import SdlcTeamRoles from "@/components/sdlc/SdlcTeamRoles";
import SdlcEstimation from "@/components/sdlc/SdlcEstimation";
import SdlcCases from "@/components/sdlc/SdlcCases";
import SdlcReviews from "@/components/sdlc/SdlcReviews";
import SdlcFaq from "@/components/sdlc/SdlcFaq";
import TeamAwards from "@/components/team/TeamAwards";
import LetsStart from "@/components/home/LetsStart";
import SdlcCrosslinks from "@/components/sdlc/SdlcCrosslinks";
import SdlcBlog from "@/components/sdlc/SdlcBlog";

export const metadata: Metadata = {
  title: "Software Development Lifecycle (SDLC) | Nexterse LLC",
  description:
    "Nexterse will take you through every stage of the software development life cycle (SDLC) – from business analysis through UX/UI and development to deployment and ongoing support.",
};

export default function SdlcPage() {
  redirect("/");
  return (
    <>
      <Header />
      <main>
        <SdlcHero />
        <SdlcVsAdlc />
        <SdlcPhasesGlance />
        <SdlcPhases />
        <SdlcFrameworks />
        <SdlcToolsTable />
        <SdlcTeamRoles />
        <SdlcEstimation />
        <SdlcCases />
        <SdlcReviews />
        <SdlcFaq />
        <TeamAwards />
        <LetsStart />
        <SdlcCrosslinks />
        <SdlcBlog />
      </main>
    </>
  );
}
