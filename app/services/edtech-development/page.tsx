import type { Metadata } from "next";
import Header from "@/components/Header";
import EdtechPage from "@/components/edtech/EdtechPage";

export const metadata: Metadata = {
  title: "AI-Driven EdTech & Corporate Learning Software Development | Nexterse LLC",
  description:
    "Nexterse LLC builds intelligent learning platforms where deterministic platform infrastructure and AI operate as one system — AI tutors, RAG knowledge systems, XR training, and predictive skill-gap telemetry integrated with your LMS, ERP, and business data.",
};

export default function EdtechRoute() {
  return (
    <>
      <Header />
      <main>
        <EdtechPage />
      </main>
    </>
  );
}
