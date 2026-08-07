import type { Metadata } from "next";
import Header from "@/components/Header";
import PricingPage from "@/components/pricing/PricingPage";

export const metadata: Metadata = {
  title: "Pricing | How Much Will Your Software Cost? | Nexterse LLC",
  description:
    "Get a free cost and timeline estimation for your project. Nexterse LLC's business analysts, developers, and designers accurately analyze your requirements and provide a detailed project estimate.",
};

export default function PricingRoute() {
  return (
    <>
      <Header />
      <main>
        <PricingPage />
      </main>
    </>
  );
}
