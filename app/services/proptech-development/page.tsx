import type { Metadata } from "next";
import Header from "@/components/Header";
import ProptechPage from "@/components/proptech/ProptechPage";

export const metadata: Metadata = {
  title: "PropTech Product Development Company | Nexterse LLC",
  description:
    "Nexterse LLC engineers property management platforms, automated valuation models (AVM), IoT smart-building systems, and digital twins — unifying fragmented portfolio data and turning real estate into measurable, high-NOI assets.",
};

export default function ProptechRoute() {
  return (
    <>
      <Header />
      <main>
        <ProptechPage />
      </main>
    </>
  );
}
