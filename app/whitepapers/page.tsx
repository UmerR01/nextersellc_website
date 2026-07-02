import type { Metadata } from "next";
import Header from "@/components/Header";
import WhitepaperHero from "@/components/whitepapers/WhitepaperHero";
import WhitepaperGrid from "@/components/whitepapers/WhitepaperGrid";
import WhitepaperSubscribe from "@/components/whitepapers/WhitepaperSubscribe";
import TeamAwards from "@/components/team/TeamAwards";
import LetsStart from "@/components/home/LetsStart";

export const metadata: Metadata = {
  title: "Whitepapers | Nexterse LLC",
  description:
    "Nexterse team shares insights and experience in software development. Every whitepaper here is written by an expert in the topic with more than 8 years of experience in their position.",
};

export default function WhitepapersPage() {
  return (
    <>
      <Header forceSolid />
      <main>
        <WhitepaperHero />
        <WhitepaperGrid />
        <WhitepaperSubscribe />
        <TeamAwards />
        <LetsStart variant="whitepapers" />
      </main>
    </>
  );
}
