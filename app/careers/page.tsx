import type { Metadata } from "next";
import Header from "@/components/Header";
import CareersHero from "@/components/careers/CareersHero";
import QuickFacts from "@/components/careers/QuickFacts";
import ImageSlider from "@/components/careers/ImageSlider";
import CrosslinksBlock from "@/components/careers/CrosslinksBlock";
import ScamAlert from "@/components/careers/ScamAlert";
import CareersApply from "@/components/careers/CareersApply";

export const metadata: Metadata = {
  title: "Careers at Nexterse LLC | Join Our Team",
  description:
    "Explore career opportunities at Nexterse LLC. We build cutting-edge software solutions and are always looking for talented engineers, designers, and product managers.",
};

export default function CareersPage() {
  return (
    <>
      <Header />
      <CareersHero />
      <QuickFacts />
      <CrosslinksBlock />
      <ScamAlert />
      <ImageSlider />
      <CareersApply />
    </>
  );
}
