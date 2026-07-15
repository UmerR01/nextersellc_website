import type { Metadata } from "next";
import Header from "@/components/Header";
import CrmPage from "@/components/crm/CrmPage";

export const metadata: Metadata = {
  title: "CRM Development | Nexterse LLC",
  description:
    "We design and build custom CRM platforms that unify customer data, automate workflows, and drive adoption — integrated with your tools and ready for AI copilots, lead scoring, and automation.",
};

export default function CrmDevelopmentRoute() {
  return (
    <>
      <Header />
      <main>
        <CrmPage />
      </main>
    </>
  );
}
