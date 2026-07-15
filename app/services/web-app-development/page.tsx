import type { Metadata } from "next";
import Header from "@/components/Header";
import WebPage from "@/components/web/WebPage";

export const metadata: Metadata = {
  title: "Custom Web App Development Services | Nexterse LLC",
  description:
    "Nexterse builds custom web software and AI-ready web products. Full-cycle from R&D and UI/UX design through development, QA, and post-launch support.",
};

export default function WebAppDevelopmentRoute() {
  return (
    <>
      <Header />
      <main>
        <WebPage />
      </main>
    </>
  );
}
