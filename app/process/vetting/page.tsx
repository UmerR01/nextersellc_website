import type { Metadata } from "next";
import Header from "@/components/Header";
import VettingPage from "@/components/process/VettingPage";
import LetsStart from "@/components/home/LetsStart";

export const metadata: Metadata = {
  title: "Expert Vetting Process | Nexterse LLC",
  description:
    "Nexterse LLC's rigorous 7-stage vetting process: job application, online assessment, HR interview, coding tests, technical interview, training assessment, and internship.",
};

export default function VettingRoute() {
  return (
    <>
      <Header startTransparent />
      <main>
        <VettingPage />
        <LetsStart variant="process" />
      </main>
    </>
  );
}
