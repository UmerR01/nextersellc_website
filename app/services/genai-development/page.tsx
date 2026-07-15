import type { Metadata } from "next";
import Header from "@/components/Header";
import GenaiPage from "@/components/genai/GenaiPage";

export const metadata: Metadata = {
  title: "Generative AI (GenAI) Development Services | Nexterse LLC",
  description:
    "Nexterse LLC engineers production-grade generative AI systems — RAG, copilots, agentic workflows, and fine-tuned private models — with deterministic grounding, VPC isolation, token-cost modeling, and red-team validation built in from day one.",
};

export default function GenaiRoute() {
  return (
    <>
      <Header />
      <main>
        <GenaiPage />
      </main>
    </>
  );
}
