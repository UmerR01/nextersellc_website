import type { Metadata } from "next";
import Header from "@/components/Header";
import AipocPage from "@/components/aipoc/AipocPage";

export const metadata: Metadata = {
  title: "AI PoC Development Services That Prove ROI in 4 Weeks | Nexterse LLC",
  description:
    "Nexterse LLC builds fixed-scope AI proofs of concept inside the Agentic Development Lifecycle (ADLC) — a working sandbox prototype, token-cost projection, security blueprint, and production roadmap, delivered in a transparent 4-week sprint.",
};

export default function AiPocRoute() {
  return (
    <>
      <Header />
      <main>
        <AipocPage />
      </main>
    </>
  );
}
