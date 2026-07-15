import type { Metadata } from "next";
import Header from "@/components/Header";
import MobilePage from "@/components/mobile/MobilePage";

export const metadata: Metadata = {
  title: "AI-Powered Mobile App Development | Nexterse LLC",
  description:
    "We build iOS, Android, and cross-platform mobile apps that combine mobile product engineering with AI system design. Full-cycle from consulting to deployment and support.",
};

export default function MobileAppDevelopmentRoute() {
  return (
    <>
      <Header />
      <main>
        <MobilePage />
      </main>
    </>
  );
}
