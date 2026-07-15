import type { Metadata } from "next";
import Header from "@/components/Header";
import AiagentsPage from "@/components/aiagents/AiagentsPage";

export const metadata: Metadata = {
  title: "AI Agents Development Services | Nexterse LLC",
  description:
    "Nexterse LLC builds custom AI agents that automate workflows, support better decisions, and open new rooms to grow — delivered through the Agentic Development Lifecycle (ADLC) with enterprise-grade security and ISO 27001-certified processes.",
};

export default function AiAgentsRoute() {
  return (
    <>
      <Header />
      <main>
        <AiagentsPage />
      </main>
    </>
  );
}
