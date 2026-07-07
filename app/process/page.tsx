import type { Metadata } from "next";
import Header from "@/components/Header";
import ProcessPage from "@/components/process/ProcessPage";
import LetsStart from "@/components/home/LetsStart";

export const metadata: Metadata = {
  title: "Our Software Development Process | Nexterse LLC",
  description:
    "Discover Nexterse LLC's complete software and app development process. From initial discovery and design to development, testing, and deployment — a clear, phased approach to transformation.",
};

export default function ProcessRoute() {
  return (
    <>
      <Header startTransparent />
      <main>
        <ProcessPage />
        <LetsStart variant="process" />
      </main>
    </>
  );
}
