import type { Metadata } from "next";
import Header from "@/components/Header";
import AdtechPage from "@/components/adtech/AdtechPage";

export const metadata: Metadata = {
  title: "Adtech Product Development Company | Nexterse LLC",
  description:
    "Nexterse LLC engineers algorithmic bidding engines, first-party data platforms, and AI-driven media buying infrastructure — sub-50 ms real-time bidding, vectorized CDPs, ad fraud detection, and retail media networks built for the post-cookie era.",
};

export default function AdtechRoute() {
  return (
    <>
      <Header />
      <main>
        <AdtechPage />
      </main>
    </>
  );
}
