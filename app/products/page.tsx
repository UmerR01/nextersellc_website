import type { Metadata } from "next";
import Header from "@/components/Header";
import ProductsPage from "@/components/products/ProductsPage";
import LetsStart from "@/components/home/LetsStart";

const title = "Products | Nexterse LLC";
const description =
  "Software we build and run ourselves: Xorris, SalesHub and Joblynk. Pick the one that fits your team, or use them together.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/products" },
  openGraph: { type: "website", title, description, url: "/products", siteName: "Nexterse LLC" },
};

export default function ProductsRoute() {
  return (
    <>
      <Header forceSolid />
      <main>
        <ProductsPage />
        <LetsStart variant="products" />
      </main>
    </>
  );
}
