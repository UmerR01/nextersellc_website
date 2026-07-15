import type { Metadata } from "next";
import Header from "@/components/Header";
import OpenaiPage from "@/components/openai/OpenaiPage";

export const metadata: Metadata = {
  title: "ChatGPT-based Software Development & Integration | Nexterse LLC",
  description:
    "Nexterse LLC designs custom ChatGPT and LLM-based software for companies that need RAG pipelines, agentic workflows, LLM routing layers, and security guardrails for enterprise-grade AI systems.",
};

export default function OpenaiRoute() {
  return (
    <>
      <Header />
      <main>
        <OpenaiPage />
      </main>
    </>
  );
}
