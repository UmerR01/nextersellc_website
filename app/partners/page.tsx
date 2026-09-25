import type { Metadata } from "next";
import Header from "@/components/Header";
import PartnersHero from "@/components/partners/PartnersHero";
import OurPartners from "@/components/partners/OurPartners";
import SisterCompanies from "@/components/partners/SisterCompanies";
import WhyPartner from "@/components/partners/WhyPartner";

export const metadata: Metadata = {
  title: "Partners | Nexterse LLC",
  description:
    "Nexterse LLC's technology and solution partner network — proven integrations, shared expertise, and joint delivery across industries.",
};

export default function PartnersPage() {
  return (
    <>
      <Header />
      <main>
        <PartnersHero />
        <OurPartners />
        <SisterCompanies />
        <WhyPartner />
      </main>
    </>
  );
}
