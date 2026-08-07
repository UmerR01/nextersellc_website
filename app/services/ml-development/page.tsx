import type { Metadata } from "next";
import Header from "@/components/Header";
import MlPage from "@/components/ml/MlPage";

export const metadata: Metadata = {
  title: "Machine Learning (ML) Development & Consulting Services | Nexterse LLC",
  description:
    "Nexterse LLC builds custom models, MLOps pipelines, and production deployment engineered as one system, so your ML reaches production, keeps learning, and stays under your control.",
};

export default function MlRoute() {
  return (
    <>
      <Header />
      <main>
        <MlPage />
      </main>
    </>
  );
}
