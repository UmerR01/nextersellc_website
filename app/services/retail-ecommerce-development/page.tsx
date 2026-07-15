import type { Metadata } from "next";
import Header from "@/components/Header";
import EcommercePage from "@/components/ecommerce/EcommercePage";

export const metadata: Metadata = {
  title: "Custom eCommerce Development Services | Nexterse LLC",
  description:
    "Nexterse LLC develops and improves eCommerce platforms — custom stores, Shopify and Shopify Plus, marketplaces, B2B portals, and mobile commerce. Architecture, integrations, performance, security, and post-launch support.",
};

export default function RetailEcommerceRoute() {
  return (
    <>
      <Header />
      <main>
        <EcommercePage />
      </main>
    </>
  );
}
