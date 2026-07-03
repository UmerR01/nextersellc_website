import type { Metadata } from "next";
import Header from "@/components/Header";
import InsightsHero from "@/components/insights/InsightsHero";
import InsightsLibrary from "@/components/insights/InsightsLibrary";
import LetsStart from "@/components/home/LetsStart";

export const metadata: Metadata = {
  title: "Guides & Checklists Library | Nexterse LLC",
  description:
    "Welcome to our guides, checklists and templates library. Here you can find useful materials that will help you to plan, develop and release the best software product.",
};

export default function LibraryPage() {
  return (
    <>
      <Header />
      <main>
        <InsightsHero />
        <InsightsLibrary afterContent={<LetsStart variant="library" />} />
      </main>
    </>
  );
}
