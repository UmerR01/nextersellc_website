import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import ProductDetail from "@/components/products/ProductDetail";
import { PRODUCTS, getProduct } from "@/components/products/productsData";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) return {};
  const title = `${p.name} ${p.suffix} | Nexterse LLC`;
  return {
    title,
    description: p.description,
    alternates: { canonical: `/products/${p.slug}` },
    openGraph: {
      type: "website",
      title,
      description: p.description,
      url: `/products/${p.slug}`,
      siteName: "Nexterse LLC",
    },
  };
}

export default async function ProductRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  return (
    <>
      <Header forceSolid />
      <main>
        <ProductDetail product={product} />
      </main>
    </>
  );
}
