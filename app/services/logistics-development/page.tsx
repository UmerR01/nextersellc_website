import type { Metadata } from "next";
import Header from "@/components/Header";
import LogisticsPage from "@/components/logistics/LogisticsPage";

export const metadata: Metadata = {
  title: "AI-Driven Logistics & Supply Chain Software Development | Nexterse LLC",
  description:
    "Nexterse LLC engineers AI-driven logistics and supply chain platforms — TMS, WMS, telematics, freight execution, control towers, and predictive operations — connecting your physical operations, ERP, and workflows into autonomous control systems.",
};

export default function LogisticsRoute() {
  return (
    <>
      <Header />
      <main>
        <LogisticsPage />
      </main>
    </>
  );
}
