import type { Metadata } from "next";
import Header from "@/components/Header";
import FAQHero from "@/components/faq/FAQHero";
import FAQBlock from "@/components/faq/FAQBlock";
import LetsStart from "@/components/home/LetsStart";

export const metadata: Metadata = {
  title: "FAQ | Nexterse",
  description:
    "Frequently asked questions about Nexterse – our company, services, processes, AI development, pricing, and legal terms.",
};

export default function FAQPage() {
  return (
    <>
      <Header />
      <FAQHero />
      <FAQBlock />
      <LetsStart />
    </>
  );
}
