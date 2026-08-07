import type { Metadata } from "next";
import Header from "@/components/Header";
import GenaiIntegrationPage from "@/components/genai-integration/GenaiIntegrationPage";

export const metadata: Metadata = {
  title: "GenAI Integration Services | Nexterse LLC",
  description:
    "Nexterse LLC integrates production-grade generative AI directly into your existing applications, workflows, and data systems — enterprise-grade security, zero data risk, deployed in 12 weeks.",
};

export default function GenaiIntegrationRoute() {
  return (
    <>
      <Header />
      <main>
        <GenaiIntegrationPage />
      </main>
    </>
  );
}
