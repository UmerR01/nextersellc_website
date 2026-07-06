import type { Metadata } from "next";
import Header from "@/components/Header";
import DevelopmentPage from "@/components/process/DevelopmentPage";
import LetsStart from "@/components/home/LetsStart";

export const metadata: Metadata = {
  title: "Our Development Process | Nexterse LLC",
  description:
    "Nexterse LLC's software development process: discovery & planning, prototype & design, development & QA, release, post-release support, testing, and implementation.",
};

export default function DevelopmentRoute() {
  return (
    <>
      <Header startTransparent />
      <main>
        <DevelopmentPage />
        <LetsStart variant="process" />
      </main>
    </>
  );
}
