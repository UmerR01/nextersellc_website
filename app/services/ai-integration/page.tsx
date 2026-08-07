import type { Metadata } from "next";
import Header from "@/components/Header";
import AiIntegrationPage from "@/components/ai-integration/AiIntegrationPage";

export const metadata: Metadata = {
  title: "AI Integration Services | Nexterse LLC",
  description:
    "Nexterse LLC provides AI integration services for companies that need to connect AI to legacy software and customer-facing platforms — updating the integration layer, connecting the right data sources, and adding AI features without compromising performance or security.",
};

export default function AiIntegrationRoute() {
  return (
    <>
      <Header />
      <main>
        <AiIntegrationPage />
      </main>
    </>
  );
}
