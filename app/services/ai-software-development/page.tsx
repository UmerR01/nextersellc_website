import type { Metadata } from "next";
import Header from "@/components/Header";
import AisoftPage from "@/components/aisoft/AisoftPage";

export const metadata: Metadata = {
  title: "AI Software Development Services | Nexterse LLC",
  description:
    "Nexterse LLC builds custom AI on solid software — RAG systems, copilots, and agentic workflows delivered inside the Agentic Development Lifecycle (ADLC). Production-grade AI with enterprise security, private deployment, and full IP ownership.",
};

export default function AiSoftwareRoute() {
  return (
    <>
      <Header />
      <main>
        <AisoftPage />
      </main>
    </>
  );
}
