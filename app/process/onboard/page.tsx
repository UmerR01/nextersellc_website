import type { Metadata } from "next";
import Header from "@/components/Header";
import OnboardPage from "@/components/process/OnboardPage";
import LetsStart from "@/components/home/LetsStart";

export const metadata: Metadata = {
  title: "Client Onboarding Process | Nexterse LLC",
  description:
    "Nexterse LLC's client-centric onboarding process designed for seamless integration and innovative solutions. Free consultation, tailored proposals, and a strong foundation for long-term partnership.",
};

export default function OnboardRoute() {
  return (
    <>
      <Header startTransparent />
      <main>
        <OnboardPage />
        <LetsStart variant="process" />
      </main>
    </>
  );
}
