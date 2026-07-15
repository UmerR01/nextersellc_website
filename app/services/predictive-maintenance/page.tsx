import type { Metadata } from "next";
import Header from "@/components/Header";
import PredictivePage from "@/components/predictive/PredictivePage";

export const metadata: Metadata = {
  title: "AI-Powered Predictive Maintenance Software Development | Nexterse LLC",
  description:
    "Nexterse LLC designs and develops predictive maintenance systems for industrial environments — edge AI anomaly detection, RUL models, sensor fusion, CMMS/ERP integration, and offline-first edge deployment for legacy and brownfield assets.",
};

export default function PredictiveMaintenanceRoute() {
  return (
    <>
      <Header />
      <main>
        <PredictivePage />
      </main>
    </>
  );
}
