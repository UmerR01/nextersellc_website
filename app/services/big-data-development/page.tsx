import type { Metadata } from "next";
import Header from "@/components/Header";
import BigDataPage from "@/components/big-data/BigDataPage";

export const metadata: Metadata = {
  title: "Big Data Development Services | Nexterse LLC",
  description:
    "Nexterse LLC designs and builds high-performance data platforms, automated ETL pipelines, and scalable architectures that turn fragmented data into decision systems and AI-ready infrastructure.",
};

export default function BigDataRoute() {
  return (
    <>
      <Header />
      <main>
        <BigDataPage />
      </main>
    </>
  );
}
