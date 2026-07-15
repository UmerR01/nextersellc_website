import type { Metadata } from "next";
import Header from "@/components/Header";
import RagPage from "@/components/rag/RagPage";

export const metadata: Metadata = {
  title: "RAG Development Services | Nexterse LLC",
  description:
    "Nexterse LLC builds secure, production-grade Retrieval-Augmented Generation (RAG) systems — hybrid retrieval, deterministic grounding, VPC-isolated deployment, and RAGAS-validated accuracy — so your teams chat with proprietary data without hallucinations or data leakage.",
};

export default function RagRoute() {
  return (
    <>
      <Header />
      <main>
        <RagPage />
      </main>
    </>
  );
}
