import type { Metadata } from "next";
import Header from "@/components/Header";
import LegacyPage from "@/components/legacy/LegacyPage";
import LetsStart from "@/components/home/LetsStart";

export const metadata: Metadata = {
  title: "Legacy Software Modernization | Nexterse LLC",
  description:
    "We modernize legacy applications into structured, API-first systems that support AI, scale with demand, and remain stable in production.",
};

export default function LegacyModernizationRoute() {
  return (
    <>
      <Header forceSolid />
      <main>
        <LegacyPage />
        <LetsStart />
      </main>
    </>
  );
}
