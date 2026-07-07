import type { Metadata } from "next";
import Header from "@/components/Header";
import MvpHero from "@/components/mvp/MvpHero";
import MvpArticleLayout from "@/components/mvp/MvpArticleLayout";
import MvpPage from "@/components/mvp/MvpPage";
import LetsStart from "@/components/home/LetsStart";

export const metadata: Metadata = { title: "MVP Development | Nexterse LLC" };

export default function MvpRoute() {
  return (
    <>
      <Header />
      <main>
        <MvpHero />
        <MvpArticleLayout>
          <MvpPage />
          <LetsStart variant="process" />
        </MvpArticleLayout>
      </main>
    </>
  );
}
