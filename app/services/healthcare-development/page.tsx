import type { Metadata } from "next";
import Header from "@/components/Header";
import HealthcarePage from "@/components/healthcare/HealthcarePage";

export const metadata: Metadata = {
  title: "Healthcare AI Software Development Services | Nexterse LLC",
  description:
    "Nexterse LLC designs and develops HIPAA-aware healthcare AI systems — EHR copilots, Medical RAG, ambient clinical documentation, AI triage portals, and IoMT edge monitoring — with secure architecture, PHI controls, audit trails, and human review.",
};

export default function HealthcareRoute() {
  return (
    <>
      <Header />
      <main>
        <HealthcarePage />
      </main>
    </>
  );
}
