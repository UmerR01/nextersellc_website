// Registry of every blog post rendered through BlogArticleTemplate.
// To publish a new post: add its data file next to this one, then add one
// line here. See track/blog-template-guide.md for the full walkthrough.
import type { BlogArticleData } from "../types";
import howToModernizeLegacySystemsWithCustomAi from "./how-to-modernize-legacy-systems-with-custom-ai";
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
  howToModernizeLegacySystemsWithCustomAi,
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
