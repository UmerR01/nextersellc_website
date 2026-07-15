import type { Metadata } from "next";
import Header from "@/components/Header";
import InsurtechPage from "@/components/insurtech/InsurtechPage";

export const metadata: Metadata = {
  title: "AI-Driven InsurTech & Insurance Software Development | Nexterse LLC",
  description:
    "Nexterse LLC engineers AI-driven InsurTech platforms — policy administration, underwriting, claims automation, fraud detection, and distribution — connecting your core systems, third-party data, and workflows into straight-through processing systems.",
};

export default function InsurtechRoute() {
  return (
    <>
      <Header />
      <main>
        <InsurtechPage />
      </main>
    </>
  );
}
