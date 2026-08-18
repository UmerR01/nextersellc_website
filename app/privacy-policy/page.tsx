import type { Metadata } from "next";
import Header from "@/components/Header";
import PrivacyPolicyPage from "@/components/privacy-policy/PrivacyPolicyPage";

export const metadata: Metadata = {
  title: "Privacy Policy | Nexterse LLC",
  description:
    "Privacy Policy for Nexterse LLC, a software and AI development company.",
};

export default function PrivacyPolicyRoute() {
  return (
    <>
      <Header forceSolid />
      <main>
        <PrivacyPolicyPage />
      </main>
    </>
  );
}
