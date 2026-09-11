// Registry of every blog post rendered through BlogArticleTemplate.
// To publish a new post: add its data file next to this one, then add one
// line here. See track/blog-template-guide.md for the full walkthrough.
import type { BlogArticleData } from "../types";
// how-to-modernize-legacy-systems-with-custom-ai.ts is deliberately NOT
// registered below — it's still SumatoSoft-branded placeholder content
// (see its own top-of-file comment) and must not resolve on the live
// site until it's actually rewritten. Removing it from ARTICLES makes
// /blog/how-to-modernize-legacy-systems-with-custom-ai 404 via
// getArticleBySlug() below, and drops it from generateStaticParams() in
// app/blog/[slug]/page.tsx. The data file itself is kept (not deleted)
// as a reusable structural template for whoever writes the real version.
import aiCostReductionPlaybook from "./ai-cost-reduction-playbook";
import deliverSoftwareOnTimeAgileReleasePlanningAiEra from "./deliver-software-on-time-agile-release-planning-ai-era";
import fromPilotToProductionWhyEnterpriseAiStalls from "./from-pilot-to-production-why-enterprise-ai-stalls";
import aiTokenCostCalculationFramework from "./ai-token-cost-calculation-framework";
import aiAdoptionEnterprisesSuccessCasesKpis from "./ai-adoption-enterprises-success-cases-kpis";
import whatIsAdlcAgenticDevelopmentLifecycle from "./what-is-adlc-agentic-development-lifecycle";
import aiReadinessPilotsToProductionResearch from "./ai-readiness-pilots-to-production-research";
import softwareDevelopmentCostEstimationMethods from "./software-development-cost-estimation-methods";
import aiRoi2026PaybackBenchmarks from "./ai-roi-2026-payback-benchmarks";
import typesOfSoftwareDeveloperRolesExplained from "./types-of-software-developer-roles-explained";
import advantagesOfAppliedAiBusinessBenefits from "./advantages-of-applied-ai-business-benefits";

export const ARTICLES: BlogArticleData[] = [
  aiCostReductionPlaybook,
  deliverSoftwareOnTimeAgileReleasePlanningAiEra,
  fromPilotToProductionWhyEnterpriseAiStalls,
  aiTokenCostCalculationFramework,
  aiAdoptionEnterprisesSuccessCasesKpis,
  whatIsAdlcAgenticDevelopmentLifecycle,
  aiReadinessPilotsToProductionResearch,
  softwareDevelopmentCostEstimationMethods,
  aiRoi2026PaybackBenchmarks,
  typesOfSoftwareDeveloperRolesExplained,
  advantagesOfAppliedAiBusinessBenefits,
];

export function getArticleBySlug(slug: string): BlogArticleData | undefined {
  return ARTICLES.find((article) => article.slug === slug);
}
