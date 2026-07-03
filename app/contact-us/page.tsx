import type { Metadata } from "next";
import Header from "@/components/Header";
import ContactHero from "@/components/contact/ContactHero";
import ContactFormSection from "@/components/contact/ContactFormSection";
import AchievementsSlider from "@/components/contact/AchievementsSlider";
import SlideDesk from "@/components/contact/SlideDesk";
import VideoSection from "@/components/contact/VideoSection";

export const metadata: Metadata = {
  title: "Contact Nexterse LLC - Get a Free Project Quote",
  description:
    "Nexterse LLC is a USA-based software development partner. Get in touch to develop your software product!",
};

export default function ContactUsPage() {
  return (
    <>
      <Header />
      <ContactHero />
      <ContactFormSection />
      <AchievementsSlider />
      <SlideDesk />
      <VideoSection />
    </>
  );
}
