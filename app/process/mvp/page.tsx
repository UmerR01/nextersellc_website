import type { Metadata } from "next";
import Header from "@/components/Header";
import MvpHero from "@/components/mvp/MvpHero";
import ArticleLayout from "@/components/shared/ArticleLayout";
import MvpPage from "@/components/mvp/MvpPage";
import LetsStart from "@/components/home/LetsStart";

export const metadata: Metadata = { title: "MVP Development | Nexterse LLC" };

const CONTENTS = [
  { href: "#mvp-services",     label: "Services" },
  { href: "#mvp-why-mvp",      label: "Why MVP" },
  { href: "#mvp-process",      label: "Process" },
  { href: "#mvp-pipeline",     label: "AI vs traditional MVP" },
  { href: "#mvp-deliverables", label: "Deliverables" },
  { href: "#mvp-cases",        label: "Our recent works" },
  { href: "#mvp-tech-stack",   label: "MVP tech stack for AI products" },
  { href: "#mvp-scale",        label: "From MVP to enterprise scale" },
  { href: "#mvp-faq",          label: "FAQ" },
];

export default function MvpRoute() {
  return (
    <>
      <Header />
      <main>
        <MvpHero />
        <ArticleLayout contents={CONTENTS} ariaLabel="MVP page contents">
          <MvpPage />
          <LetsStart variant="process" />
        </ArticleLayout>
      </main>
    </>
  );
}
