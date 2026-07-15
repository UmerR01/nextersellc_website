import type { Metadata } from "next";
import Header from "@/components/Header";
import CloudPage from "@/components/cloud/CloudPage";

export const metadata: Metadata = {
  title: "Cloud Development Services | Nexterse LLC",
  description:
    "Nexterse designs, migrates, and builds scalable cloud platforms on AWS, Azure, and Google Cloud. Cloud consulting, migration, cloud-native development, DevOps, security, and FinOps — ready for AI.",
};

export default function CloudDevelopmentRoute() {
  return (
    <>
      <Header />
      <main>
        <CloudPage />
      </main>
    </>
  );
}
