import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Header from "@/components/Header";
import WhitepaperExtPage from "@/components/whitepapers/whitepaper-ext/WhitepaperExtPage";
import LetsStart from "@/components/home/LetsStart";
import { getWhitepaper, whitepapers } from "@/lib/whitepaper-data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return whitepapers.map((wp) => ({ slug: wp.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const wp = getWhitepaper(slug);
  if (!wp) return {};
  return { title: wp.meta.title, description: wp.meta.description };
}

export default async function WhitepaperPage({ params }: Props) {
  const { slug } = await params;
  const wp = getWhitepaper(slug);
  if (!wp) notFound();

  return (
    <>
      <Header />
      <main>
        <WhitepaperExtPage data={wp} />
        <LetsStart variant="whitepapers" />
      </main>
    </>
  );
}
