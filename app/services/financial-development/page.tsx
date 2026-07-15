import type { Metadata } from "next";
import Header from "@/components/Header";
import FintechPage from "@/components/fintech/FintechPage";

export const metadata: Metadata = {
  title: "Enterprise AI Fintech Development & Infrastructure | Nexterse LLC",
  description:
    "Nexterse LLC builds institutional financial systems where deterministic transaction infrastructure and AI-driven decision models operate as one controlled architecture — KYC/AML, core banking, ISO 20022 payments, and quantitative ML, engineered for PCI-DSS, SOC2, and GDPR environments.",
};

export default function FinancialRoute() {
  return (
    <>
      <Header />
      <main>
        <FintechPage />
      </main>
    </>
  );
}
