import type { Metadata } from "next";
import Header from "@/components/Header";
import LlmPage from "@/components/llm/LlmPage";

export const metadata: Metadata = {
  title: "LLM Development Services | Nexterse LLC",
  description:
    "Nexterse LLC designs and deploys enterprise LLM systems — data pipelines, PEFT/LoRA fine-tuning, custom model training, inference optimization, and flexible cloud, on-premises, or edge deployment with full control over data, infrastructure, and model behavior.",
};

export default function LlmRoute() {
  return (
    <>
      <Header />
      <main>
        <LlmPage />
      </main>
    </>
  );
}
