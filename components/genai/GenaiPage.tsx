"use client";

import { useState } from "react";
import Image from "next/image";
import CaseCards, { type CaseCard } from "@/components/home/CaseCards";
import ServicesReviewSlider from "@/components/services/ServicesReviewSlider";
import ServicesAchievements, { type Badge } from "@/components/services/ServicesAchievements";
import ServicesFaqBlock, { type FaqItem } from "@/components/services/ServicesFaqBlock";
import LetsStart from "@/components/home/LetsStart";
import GenaiHero from "./GenaiHero";
import GenaiLogos from "./GenaiLogos";
import GenaiTechStack from "./GenaiTechStack";
import GenaiCrosslinks from "./GenaiCrosslinks";
import GenaiArticleLayout from "./GenaiArticleLayout";
import styles from "./GenaiPage.module.css";

// ─── Why 80% of prototypes fail (4 cards) ─────────────────────────────────────
const CHALLENGES = [
  {
    icon: "/genai-development/03_The-hallucination-trap-01.svg",
    title: "The hallucination trap",
    paragraphs: [
      "In early demos, responses from GenAI models look impressive. In production, they must be defensible.",
      "When AI generates incorrect financial figures, misinterprets regulatory clauses, or fabricates technical details, consequences escalate quickly:",
    ],
    bullets: ["Legal intervenes.", "Compliance blocks rollout.", "Business stakeholders lose trust.", "Executive sponsors withdraw funding.", "Confidence collapses."],
    outro: "Our approach: We engineer systems that operate within defined accuracy boundaries and measurable validation controls.",
  },
  {
    icon: "/genai-development/03_The-security-exposure-trap-02.svg",
    title: "The security exposure problem",
    paragraphs: ["Prototypes often rely on public interfaces and loosely governed access. Once real teams begin using the system, sensitive information flows through it:"],
    bullets: ["Customer data.", "Financial records.", "Source code.", "Regulatory documentation."],
    outro: "Security reviews intensify. Risk committees intervene. Deployment pauses. The initiative stalls under scrutiny. Our fix: We deploy generative AI inside secure, isolated cloud environments with strict access controls and private endpoints. Your data remains inside your architecture. Your intellectual property remains protected.",
  },
  {
    icon: "/genai-development/03_The-token-burn-trap-01.svg",
    title: "The token burn crisis",
    paragraphs: ["A pilot used by five people can appear financially harmless. Scaling to hundreds of users turns cost into a board-level concern. Uncontrolled API usage leads to:"],
    bullets: ["Unpredictable monthly cloud bills.", "Budget overruns.", "Finance department intervention.", "Expansion freezes."],
    outro: "AI becomes categorized as too expensive to scale. Our fix: We model token usage and operational costs before production begins, optimize architecture for efficiency, and select the appropriate model for each use case so AI operates within defined financial boundaries.",
  },
  {
    icon: "/genai-development/03_The-governance-gap-trap-02.svg",
    title: "Prototype success is not production readiness",
    paragraphs: ["A successful demo creates momentum. Production introduces:"],
    bullets: ["Security audits.", "Compliance reviews.", "Infrastructure load.", "Executive oversight."],
    outro: "Without governance and structured engineering, projects slow down, budgets freeze, and internal support weakens. Our fix: We design for production from day one by embedding governance, cost control, and measurable reliability into the architecture before scaling begins.",
  },
];

// ─── GenAI ecosystem (4 vertical tabs) ────────────────────────────────────────
const ECOSYSTEM: { label: string; intro: string; bullets?: string[]; impact: string[] }[] = [
  {
    label: "RAG systems",
    intro: "It's about secure chatting with your proprietary data. We build secure generative AI systems that enable teams to query internal knowledge instantly across contracts, policies, technical documentation, regulatory files, and databases.",
    impact: ["Reduce internal knowledge search time by 60-80%.", "Eliminate document chaos across departments.", "Enable compliance-safe querying of regulatory documents.", "Accelerate onboarding for new employees.", "No data leakage. No fine-tuning required. No public model exposure."],
  },
  {
    label: "Custom copilots and AI assistants",
    intro: "We design AI copilots tailored to your workflows – no generic chatbots. These assistants operate inside your secure environment and connect directly to your internal tools.",
    bullets: ["Legal copilot that drafts contract summaries inside your internal portal.", "Customer support assistant integrated directly into your CRM.", "Finance copilot that explains KPI variance using internal data.", "HR assistant that navigates policy documentation instantly."],
    impact: ["Reduce manual drafting effort by up to 50%.", "Increase employee productivity without increasing headcount.", "Standardize internal knowledge responses.", "Minimize human error in repetitive workflows."],
  },
  {
    label: "Agentic workflows and autonomous systems",
    intro: "Move beyond text generation into operational automation. Generative AI delivers measurable value when it can take action.",
    bullets: ["Interpret complex tasks.", "Break them into execution steps.", "Retrieve required data.", "Trigger actions in ERP, CRM, or internal APIs.", "Validate outputs before completion."],
    impact: ["Automate workflows previously handled by 3-5 employees.", "Shorten operational cycles.", "Reduce process bottlenecks.", "Increase execution speed across departments."],
  },
  {
    label: "LLM fine-tuning and private model customization",
    intro: "Your own specialized AI model. Fully controlled. When your use case requires domain precision, we customize models specifically for your industry. Your intellectual property remains fully isolated.",
    bullets: ["Fine-tune open-source models such as Llama or Mistral.", "Train them on structured and unstructured proprietary datasets.", "Deploy them privately in your cloud or on-premise.", "Optimize for latency, cost, and inference efficiency."],
    impact: ["Increase response accuracy in niche-industry scenarios.", "Reduce token costs compared to large public models.", "Maintain full control over model behavior.", "Avoid dependency on consumer AI interfaces."],
  },
];

// ─── ROI & TCO modeling (3 horizontal tabs) ───────────────────────────────────
const ROI_TABS = [
  {
    icon: "/genai-development/04_What-we-calculate-01.svg",
    label: "What we calculate",
    intro: "Before deployment and system expansion, we estimate:",
    bullets: ["Monthly token consumption based on expected user activity.", "Infrastructure required to support that load.", "Cost impact if usage grows.", "Total operating expense over 12–36 months."],
    outro: "You see the projected cost numbers before the first invoice arrives from the working system in production.",
    image: "/genai-development/04_img-08.jpg",
  },
  {
    icon: "/genai-development/04_How-we-approach-ROI-03.svg",
    label: "How we approach ROI",
    intro: "We start with the business case:",
    bullets: ["Which workflow is being improved.", "How much time is saved.", "How often the task occurs.", "What that time costs your organization."],
    outro: "Then we compare the current operating cost and the projected AI operating cost. The objective is measurable economic improvement, so you know what to expect.",
    image: "/genai-development/04_img-12.jpg",
  },
  {
    icon: "/genai-development/04_What-you-get-01.svg",
    label: "What you get",
    intro: "As a result, you will have the following deliverables at your table:",
    bullets: ["Estimated monthly AI operating cost.", "Scaling forecast under growth scenarios.", "Breakeven projection.", "Clear total cost of ownership outlook."],
    outro: "These artifacts serve one goal: to allow you to make an informed investment decision, plan budgets confidently, and scale generative AI without financial surprises.",
    image: "/genai-development/04_img-01.jpg",
  },
];

// ─── Pilot & prove (2 phases) ──────────────────────────────────────────────────
const PILOT = [
  {
    title: "Phase 1 – AI readiness assessment (2 weeks)",
    paragraphs: ["Before building anything, we evaluate whether your data, infrastructure, and governance model can support a production-grade GenAI system.", "We assess:"],
    bullets: ["Data availability and structure.", "Security and compliance constraints.", "Integration feasibility.", "Infrastructure readiness.", "Token cost exposure."],
    midParagraph: "At the end of this phase, you receive:",
    midBullets: ["A clear feasibility report.", "Risk and compliance overview.", "Architecture direction.", "Initial ROI logic."],
    outro: "If the projected ROI is insufficient or security constraints make the initiative non-viable, we do not move forward with development.",
  },
  {
    title: "Phase 2 – Pilot & prove build (4-6 weeks)",
    paragraphs: ["Once the first phase is complete and the ROI is acceptable, we move to the development phase. We design and deploy a controlled GenAI prototype inside your secure environment. The pilot includes:"],
    bullets: ["Secure architecture setup.", "RAG or copilot implementation.", "Deterministic grounding configuration.", "Token consumption modeling.", "Evaluation and red-team testing."],
    outro: "This is a measurable, production-aligned system. At the end of the pilot, you receive a fully functional GenAI capability and a clear go/no-go decision framework for moving into full production.",
  },
];

// ─── Zero data leakage (4 cards) ──────────────────────────────────────────────
const LEAKAGE = [
  { icon: "/genai-development/03_Private-controlled-deployment-1.svg", title: "Private, controlled deployment", paragraphs: ["We deploy models through enterprise APIs such as Azure OpenAI and AWS Bedrock, or host fine-tuned open-source models like Llama 3 or Mistral inside your private cloud or on-premise infrastructure."], bullets: ["Your data never becomes training material for public models.", "Your intellectual property remains fully isolated."] },
  { icon: "/genai-development/03_Secure-data-indexing-and-retrieval-01.svg", title: "Secure data indexing and retrieval", paragraphs: ["When building RAG systems, we never send raw company documents to external services. Your PDFs, databases, and internal knowledge bases are:"], bullets: ["Indexed locally.", "Vectorized inside your private infrastructure.", "Stored in enterprise-grade vector databases.", "Protected by strict role-based access controls (RBAC)."], outro: "If a user does not have access to a document, the AI does not access it." },
  { icon: "/genai-development/03_VPC-isolation-and-network-security-02.svg", title: "VPC isolation and network security", paragraphs: ["Your GenAI system operates as a mission-critical business application with defined security boundaries and infrastructure controls. Every production deployment is isolated within your virtual private cloud (VPC). We implement:"], bullets: ["Network-level isolation.", "Encrypted data at rest and in transit.", "API gateway control layers.", "Strict identity and access management."] },
  { icon: "/genai-development/03_Compliance-ready-by-design-02.svg", title: "Compliance-ready by design", paragraphs: ["We build systems your compliance team can confidently approve. For regulated industries such as finance, healthcare, and energy, we design architectures aligned with:"], bullets: ["SOC 2 requirements.", "HIPAA constraints.", "GDPR principles.", "Internal audit controls."] },
];

// ─── Cases (5) ────────────────────────────────────────────────────────────────
const GENAI_CASES: CaseCard[] = [
  {
    banner: "/genai-development/07_Cover-right-1-1.png",
    name: "SMBs · AI inside",
    title: "GenAI product-description engine for an online retailer",
    text: "A governed GenAI engine that generates SEO-ready product descriptions grounded in catalog attributes, with brand-tone guardrails, automated claim checks, and human approval before publishing.",
    href: "/portfolio/genai-product-description-engine-for-a-multi-category-online-retailer",
    tags: ["SMBs", "AI inside"],
  },
  {
    banner: "/genai-development/05_tablet-cover-right.png",
    name: "AI · Fintech",
    title: "AI integration of anti-fraud and underwriting for a fintech firm",
    text: "A fintech company needed to integrate AI scoring into its application and transaction workflow. Nexterse LLC linked risk sources, a feature store, and a decision engine to speed up decisions and improve the quality of anti-fraud controls.",
    href: "/portfolio/ai-integration-fintech",
    tags: ["AI inside", "Enterprise"],
  },
  {
    banner: "/genai-development/04_Cover-1.png",
    name: "AI · Real estate",
    title: "RAG-based knowledge platform for a commercial real estate operator",
    text: "An internal RAG platform that cut operational retrieval time by 45% across 18 commercial properties. It unifies lease, vendor, maintenance, and compliance documentation into one retrieval layer with citation-based answers and role-based access.",
    href: "/portfolio/case-study-rag-based-knowledge-platform-for-a-commercial-real-estate-operator",
    tags: ["AI inside", "Enterprise"],
  },
  {
    banner: "/genai-development/04_Cover-right-1-1.png",
    name: "AI · Insurance",
    title: "AI readiness assessment for an insurance company",
    text: "An AI readiness assessment for a European insurance group that identified up to 35% projected cost reduction in claims processing, with two use cases launched in a pilot across three business units.",
    href: "/portfolio/ai-readiness-assessment-for-insurance-company",
    tags: ["AI inside", "Enterprise"],
  },
  {
    banner: "/genai-development/10_Cover-1-1.png",
    name: "AI · Logistics",
    title: "AI/ML route optimization for a freight delivery service",
    text: "Lifted on-time delivery to 98% – without expanding the fleet. An AI/ML platform that plans and reoptimizes B2B/B2C routes in real time with traffic, weather, and capacity constraints, cutting last-mile costs by 22%.",
    href: "/portfolio/ai-ml-route-optimization-for-a-freight-delivery-service",
    tags: ["AI inside", "Enterprise"],
  },
];

// ─── Industries (7 vertical tabs) ──────────────────────────────────────────────
const INDUSTRIES: { label: string; intro: string; bullets: string[]; impact: string[] }[] = [
  { label: "Fintech and insurance", intro: "In financial services, decisions move at the speed of regulation. Underwriters, compliance officers, and risk teams operate under constant pressure – navigating policy documents, regulatory updates, and fragmented internal data. Generative AI delivers value here when it understands both quantitative models and regulatory mandates. We build:", bullets: ["SOC2-ready RAG systems that query 500-page regulatory PDFs in seconds.", "Automated underwriting copilots trained on internal policy frameworks.", "Risk summarization assistants integrated into claims management platforms."], impact: ["Faster underwriting cycles.", "Reduced manual document review.", "Improved audit traceability."] },
  { label: "Healthcare", intro: "Healthcare teams manage extensive documentation. Clinicians and administrators handle discharge notes, compliance forms, and internal protocols while patient care requires speed and precision. AI systems in this environment must improve efficiency while maintaining strict privacy protection at all times. We engineer:", bullets: ["HIPAA-compliant, VPC-isolated LLM deployments.", "On-premise models that summarize discharge notes without exposing PII.", "Clinical knowledge assistants grounded in internal medical protocols."], impact: ["Reduced administrative workload.", "Faster documentation turnaround.", "Zero public cloud exposure."] },
  { label: "Logistics and supply chain", intro: "When shipments stall, revenue slows. Supply chain leaders work in environments where delays cascade, data exists in silos, and decisions must be made within minutes rather than waiting for periodic reports. We build:", bullets: ["AI assistants that analyze shipment delays in real time.", "Multi-agent systems that reconcile ERP and warehouse data.", "Predictive document processing for invoices and customs paperwork."], impact: ["Shorter response times.", "Improved operational visibility.", "Reduced manual reconciliation effort."] },
  { label: "Energy and utilities", intro: "In energy and utilities, downtime represents operational risk. Engineers rely on decades of maintenance logs, compliance documentation, and technical manuals to diagnose incidents quickly and prevent escalation. We implement:", bullets: ["Secure RAG systems querying maintenance manuals and compliance reports.", "Incident analysis copilots trained on historical outage logs.", "AI-driven reporting tools for regulatory submissions."], impact: ["Faster root-cause analysis.", "Reduced downtime investigation effort.", "Improved compliance reporting speed."] },
  { label: "Life sciences", intro: "Research advances rapidly. Documentation progresses at a different pace. Life sciences teams navigate complex trial data, regulatory frameworks, and dense scientific literature where timely insight influences product timelines. We develop:", bullets: ["Scientific literature intelligence systems grounded in internal research data.", "AI summarization tools for clinical trial documentation.", "Secure GenAI assistants supporting regulatory submission preparation."], impact: ["Accelerated research workflows.", "Reduced document synthesis time.", "Improved regulatory readiness."] },
  { label: "AdTech and media", intro: "Marketing teams generate vast amounts of campaign metrics, audience data, and performance dashboards. Insights must be extracted in time to guide the next strategic move. We design:", bullets: ["Campaign performance copilots grounded in proprietary analytics.", "Automated reporting systems integrated with ad platforms.", "AI assistants for content adaptation across channels."], impact: ["Faster campaign iteration cycles.", "Reduced manual reporting overhead.", "Increased data-driven decision velocity."] },
  { label: "IoT and industrial systems", intro: "Factories and industrial sites produce continuous streams of telemetry. Machine logs, sensor data, and maintenance records accumulate faster than teams can review them. Operational decisions depend on accurate and timely interpretation of that data. We build:", bullets: ["AI copilots that interpret machine logs and telemetry streams.", "Incident summarization systems grounded in historical maintenance data.", "Secure GenAI interfaces for industrial dashboards."], impact: ["Reduced troubleshooting time.", "Improved operational transparency.", "Faster maintenance decision cycles."] },
];

// ─── ADLC process (7 phases) ──────────────────────────────────────────────────
const ADLC = [
  { title: "Phase 1 – business hypothesis & guardrails", text: "Before a single token is consumed, we define the economic logic. We start with the business case. What decision is being accelerated? What manual workflow is being replaced? What financial boundary makes this initiative viable? At this stage we lock in: ROI expectations, acceptable error thresholds, data sensitivity classifications, and maximum token exposure. If the economics do not work on paper, the initiative does not proceed." },
  { title: "Phase 2 – secure architecture design", text: "Security is engineered first and embedded into the foundation. We design the system as if it were handling regulated financial data: model endpoints are deployed inside your cloud perimeter, vector databases are isolated, access is controlled at the retrieval layer, every interaction is logged and auditable, consumer-grade interfaces are excluded, API calls are controlled and monitored, and data ownership is clearly defined." },
  { title: "Phase 3 – context engineering & deterministic grounding", text: "This phase reduces hallucination risk. Large language models predict plausible answers. Operational systems require verifiable answers. We enforce grounding through retrieval-augmented generation. The model is restricted to approved internal sources. If the answer does not exist in your indexed data, the system responds accordingly. The objective of this phase is to bring traceability and verifiability to the system." },
  { title: "Phase 4 – controlled build & agent orchestration", text: "This phase is about building automation with structured control. When the solution requires more than question-answer interactions, we design structured agent workflows. Instead of a single model generating free-form outputs, we create bounded execution chains: one agent retrieves, one agent reasons, one agent validates, one agent executes actions in external systems. Every step operates within defined constraints. Autonomy is deliberate and governed." },
  { title: "Phase 5 – algorithmic evaluation & red teaming", text: "The system must pass quantitative evaluation and adversarial testing before it is granted operational authority. We measure context precision, faithfulness to source material, and consistency under varied prompts using frameworks such as RAGAS. We then conduct adversarial testing: prompt injection attempts, data extraction simulations, and guardrail bypass scenarios. Systems that fail validation are refined before release." },
  { title: "Phase 6 – token economics & scalability modeling", text: "Performance must align with cost control, or the system becomes too expensive to maintain. Generative AI introduces token consumption as an operational variable that must be managed. We simulate real-world usage volumes, project monthly inference costs, and optimize prompt structure and retrieval size. When appropriate, workloads are shifted to smaller fine-tuned models to reduce ongoing expense. Financial forecasting becomes built into the architecture." },
  { title: "Phase 7 – production deployment & continuous governance", text: "Production systems require ongoing control mechanisms. Once deployed, the system is treated as operational infrastructure. We implement real-time usage monitoring, token consumption dashboards, automated re-evaluation pipelines, security log auditing, and access control reviews. Model behavior is re-scored periodically to detect drift, cost thresholds are monitored against projected budgets, and guardrails are re-tested after architecture changes. The system remains under structured supervision and never runs unattended." },
];

// ─── Zero-hallucination systems (4 cards) ─────────────────────────────────────
const HALLUCINATION = [
  { title: "Deterministic grounding – RAG architecture", desc: "We restrict the model to retrieved, verified data only. Your documents, databases, intranet knowledge, policies, contracts, and technical manuals are securely indexed inside your private infrastructure. If the answer does not exist in approved data sources, the system is programmed to respond: “Insufficient data available.” No guessing. No fabrication. No invented citations. Every response can be source-linked and auditable." },
  { title: "Algorithmic evaluation before human review", desc: "We replace subjective validation with quantifiable accuracy thresholds before production approval. Before business users interact with the system, we measure it mathematically. Using structured evaluation frameworks such as RAGAS and custom scoring pipelines, we assess context precision, faithfulness to source documents, retrieval accuracy, and response consistency." },
  { title: "Adversarial red-teaming and prompt injection testing", desc: "Enterprise AI must withstand hostile inputs besides normal expected usage. With our approach, if the system can be manipulated into unsafe behavior, it does not pass deployment review. Before deployment, our engineers simulate prompt injection attacks, data exfiltration attempts, context override exploits, and policy bypass scenarios. We attempt to break the system before users interact with it, ensuring it can withstand attacks." },
  { title: "Controlled AI", desc: "Many vendors deploy a working prototype and move directly to production, assuming issues will surface and be corrected later. In enterprise environments, that approach creates legal, compliance, and financial exposure. We deploy governed systems with retrieval-restricted reasoning, enforced response policies, quantitative evaluation thresholds, red-team validated security controls, and pre-modeled token consumption limits. The GenAI software we develop is auditable, measurable, and economically predictable." },
];

// ─── FAQ (10) ──────────────────────────────────────────────────────────────────
const GENAI_FAQ: FaqItem[] = [
  { question: "How much does generative AI development cost?", answer: "Cost depends on the use case, how ready your data is, and how many systems the AI connects to. As a guide, a RAG or copilot pilot runs in the low-to-mid five figures. A full production build usually falls between roughly $80,000 and $350,000+, set by the model approach (hosted API vs. fine-tuned private model), integrations, and compliance scope. Token usage is a running cost on top, which is why we model it before you commit. Our 4–6 week pilot puts a firm cost boundary around the work, including projected token spend." },
  { question: "How long does a generative AI build take?", answer: "A pilot can be delivered in four to six weeks. A production build follows once the pilot proves feasibility. It usually takes two to six months, set by integration depth and how ready your data is. Data readiness is the biggest variable, and we surface it during the pilot rather than mid-build." },
  { question: "Will you use ChatGPT for this?", answer: "We use enterprise-grade model endpoints such as Azure OpenAI, AWS Bedrock, or privately hosted open-source models. We do not build production systems on consumer-grade interfaces. Your data is processed inside secure, controlled environments and is never used to train public models." },
  { question: "Can we run these models entirely on-premise?", answer: "Yes. For organizations with strict regulatory or internal security requirements, we deploy fine-tuned open-source models such as Llama or Mistral directly within your private cloud or on-premise infrastructure." },
  { question: "Who owns the AI we build?", answer: "You retain full ownership of the architecture, source code, integrations, prompt frameworks, vector databases, and fine-tuned models. There is no proprietary lock-in." },
  { question: "How does Nexterse LLC approach generative AI development?", answer: "We follow a structured engineering framework called the agentic development lifecycle (ADLC). It governs each stage of development – from business hypothesis validation and secure architecture design to deterministic grounding, evaluation, cost modeling, and production governance. Every system is engineered for security, measurable accuracy, and financial predictability." },
  { question: "What makes Nexterse LLC the right choice for generative AI development projects?", answer: "As a professional gen AI development company, we combine advanced software engineering with governed GenAI architecture. Our systems are built for production from day one, with embedded cost controls, security isolation, deterministic grounding, and structured evaluation. We design for compliance, scalability, and measurable ROI." },
  { question: "How do you ensure scalable deployment of GenAI solutions?", answer: "Scalability is engineered into the architecture before deployment. We simulate usage volumes, model token consumption, implement monitoring dashboards, and design infrastructure that scales horizontally. Performance, cost, and access controls are continuously monitored post-deployment." },
  { question: "What are the potential risks of generative AI development and implementation?", answer: "Common risks include hallucinated outputs, sensitive data exposure, uncontrolled token costs, weak governance, and lack of integration with core systems. Without structured engineering, these risks can halt deployment." },
  { question: "What techniques do you use to minimize hallucinations in GenAI models?", answer: "We implement deterministic grounding using retrieval-augmented generation (RAG), restrict model responses to verified internal data, measure context precision and faithfulness through evaluation frameworks such as RAGAS, and perform red-team testing to validate guardrails before deployment." },
];

// ─── Awards (12 clone badges) ──────────────────────────────────────────────────
const GENAI_BADGES: Badge[] = [
  { src: "/genai-development/06_techreviewer_badge_2026-15.svg", alt: "techreviewer.co 2026 — Top GenAI Development Companies" },
  { src: "/genai-development/05_top_clutch.co_generative_ai_company_boston_2026-2.svg", alt: "Clutch 2026 — Top Generative AI Company in Boston" },
  { src: "/genai-development/05_top_clutch.co_artificial_intelligence_company_boston_2026-2.svg", alt: "Clutch 2026 — Top Artificial Intelligence Company in Boston" },
  { src: "/genai-development/06_techreviewer_badge_2026-01.svg", alt: "techreviewer.co 2026 — Top AI Consulting Companies" },
  { src: "/genai-development/06_techreviewer_badge_2026-02.svg", alt: "techreviewer.co 2026 — Top AI Readiness Assessment Companies" },
  { src: "/genai-development/06_top-ai-development-companies.svg", alt: "GoodFirms — Top AI Development Company" },
  { src: "/genai-development/06_techreviewer_badge_2026-04.svg", alt: "techreviewer.co 2026 — Top AI Software Development Companies" },
  { src: "/genai-development/06_techreviewer_badge_2026-16.svg", alt: "techreviewer.co 2026 — Top AI Integration Companies" },
  { src: "/genai-development/06_techreviewer_badge_2026-03.svg", alt: "techreviewer.co 2026 — Top AI PoC Development Companies" },
  { src: "/genai-development/06_techreviewer_badge_2026-05.svg", alt: "techreviewer.co 2026 — Top AI Agents Development Companies" },
  { src: "/genai-development/06_techreviewer_badge_2026-06.svg", alt: "techreviewer.co 2026 — Top RAG Development Companies" },
  { src: "/genai-development/06_techreviewer_badge_2026-07.svg", alt: "techreviewer.co 2026 — Top LLM Development Companies" },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function GenaiPage() {
  const [activeEco, setActiveEco] = useState(0);
  const [activeRoi, setActiveRoi] = useState(0);
  const [activeIndustry, setActiveIndustry] = useState(0);
  const roi = ROI_TABS[activeRoi];

  return (
    <>
      <GenaiHero />
      <GenaiLogos />

      <GenaiArticleLayout>
        {/* ── Why 80% of prototypes fail (4 cards) ────────────────────────── */}
        <section id="genai-challenges" className={styles.blockWhite}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Why 80% of generative AI prototypes never reach production</h2>
            <p className={styles.sectionDesc}>
              Generative AI demos create excitement. Production environments expose operational reality. Across industries, companies launch promising generative AI pilots, then watch them stall once real users, real data, and formal governance enter the picture. Here is where projects break.
            </p>
            <div className={styles.ecomServicesGrid}>
              {CHALLENGES.map((c) => (
                <div key={c.title} className={styles.ecomServiceCard}>
                  <Image src={c.icon} alt={c.title} width={56} height={56} className={styles.ecomServiceIcon} />
                  <h3 className={styles.ecomServiceTitle}>{c.title}</h3>
                  {c.paragraphs.map((p) => <p key={p} className={styles.ecomServiceIntro}>{p}</p>)}
                  <ul className={styles.ecomBullets}>{c.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
                  <p className={styles.ecomServiceIntro}>{c.outro}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── GenAI ecosystem (vertical tabs) ─────────────────────────────── */}
        <section id="genai-ecosystem" className={styles.blockLight}>
          <div className="container">
            <h2 className={styles.sectionTitle}>What generative AI systems does <span className={styles.accent}>Nexterse LLC</span> build?</h2>
            <p className={styles.sectionDesc}>
              As a professional gen AI development company, we design, engineer, secure, and scale GenAI systems. Every solution is production-ready, governance-controlled, and economically modeled before deployment.
            </p>
            <div className={styles.vertTabsWrap}>
              <div className={styles.vertTabList} role="tablist" aria-label="GenAI ecosystem">
                {ECOSYSTEM.map((t, i) => (
                  <button
                    key={t.label}
                    role="tab"
                    aria-selected={activeEco === i}
                    className={`${styles.vertTabBtn} ${activeEco === i ? styles.vertTabBtnActive : ""}`}
                    onClick={() => setActiveEco(i)}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
              <div className={styles.vertTabContent}>
                <h3 className={styles.vertTabTitle}>{ECOSYSTEM[activeEco].label}</h3>
                <p className={styles.vertTabDesc}>{ECOSYSTEM[activeEco].intro}</p>
                {ECOSYSTEM[activeEco].bullets && (
                  <ul className={styles.ecomBullets}>{ECOSYSTEM[activeEco].bullets!.map((b) => <li key={b}>{b}</li>)}</ul>
                )}
                <p className={styles.vertTabDesc}><strong>Business impact:</strong></p>
                <ul className={styles.ecomBullets}>{ECOSYSTEM[activeEco].impact.map((b) => <li key={b}>{b}</li>)}</ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── Awards & recognitions ───────────────────────────────────────── */}
        <ServicesAchievements
          badges={GENAI_BADGES}
          description="Leading analyst agencies that track the best generative AI development companies worldwide have recognized Nexterse LLC. Our values and our partners help us deliver services at that level."
        />

        {/* ── ROI & TCO modeling (horizontal tabs w/ image) ────────────────── */}
        <section id="genai-roi" className={styles.serviceBlock}>
          <div className="container">
            <h2 className={styles.svcTitle}>How do you model the <span className={styles.accent}>ROI and total cost</span> of generative AI?</h2>
            <p className={styles.svcDesc}>
              Generative AI systems introduce new operational costs: tokens used to generate responses. When usage grows, those token costs grow with it, so we start managing these costs from the start. We calculate expected token usage before full-scale development begins.
            </p>
            <div className={styles.tabsWrap}>
              <div className={styles.tabsNav} role="tablist" aria-label="ROI and TCO modeling">
                {ROI_TABS.map((t, i) => (
                  <button
                    key={t.label}
                    role="tab"
                    aria-selected={activeRoi === i}
                    className={`${styles.tabBtn} ${activeRoi === i ? styles.tabBtnActive : ""}`}
                    onClick={() => setActiveRoi(i)}
                  >
                    <img src={t.icon} alt="" className={styles.tabIcon} />
                    <span>{t.label}</span>
                  </button>
                ))}
              </div>
              <div className={styles.tabPanelActive}>
                <div className={styles.tabPanelContent}>
                  <h3 className={styles.tabPanelTitle}>{roi.label}</h3>
                  <p className={styles.tabPanelDesc}>{roi.intro}</p>
                  <ul className={styles.tabBullets}>{roi.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
                  <p className={styles.tabPanelDesc}>{roi.outro}</p>
                </div>
                <img src={roi.image} alt={roi.label} className={styles.tabPanelImg} />
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA: Book your free GenAI discovery call ────────────────────── */}
        <div className={styles.inlineCta}>
          <div className="container">
            <div className={styles.inlineCtaInner}>
              <div>
                <h2 className={styles.inlineCtaTitle}>Book your free GenAI discovery call</h2>
                <p className={styles.inlineCtaDesc}>Discuss your business challenge with our GenAI experts.</p>
              </div>
              <a href="#get-modal-popup" className={`btn btn-accent ${styles.inlineCtaBtn}`}>Book a meeting</a>
            </div>
          </div>
        </div>

        {/* ── Pilot & prove program (dark process) ─────────────────────────── */}
        <section id="genai-pilot" className={styles.blockDark}>
          <div className="container">
            <h2 className={styles.sectionTitleWhite}>Start small: the <span className={styles.accent}>4-6 week pilot</span> & prove program</h2>
            <p className={styles.sectionDescWhite}>
              To control the risk of AI initiatives with open-ended budgets and undefined expectations, we offer our 4-6 week program. Our pilot &amp; prove program is a fixed-scope, controlled entry point designed to validate feasibility, economics, and security before full-scale deployment. It consists of 2 phases.
            </p>
            <div className={styles.processGrid}>
              {PILOT.map((step, i) => (
                <div key={step.title} className={styles.processStep}>
                  <div className={styles.processNum}>{i + 1}</div>
                  <div className={styles.processStepBody}>
                    <h3 className={styles.processStepTitle}>{step.title}</h3>
                    {step.paragraphs.map((p) => <p key={p} className={styles.processStepText}>{p}</p>)}
                    <ul className={styles.processStepBullets}>{step.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
                    {step.midParagraph && <p className={styles.processStepText}>{step.midParagraph}</p>}
                    {step.midBullets && <ul className={styles.processStepBullets}>{step.midBullets.map((b) => <li key={b}>{b}</li>)}</ul>}
                    <p className={styles.processStepText}>{step.outro}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Zero data leakage (4 cards) ──────────────────────────────────── */}
        <section id="genai-leakage" className={styles.blockWhite}>
          <div className="container">
            <h2 className={styles.sectionTitle}>How does Nexterse LLC prevent data leakage in <span className={styles.accent}>generative AI?</span></h2>
            <p className={styles.sectionDesc}>
              Generative AI should strengthen your infrastructure – not weaken it. We never route sensitive company data through consumer-grade interfaces or uncontrolled public endpoints. Every GenAI system we build is deployed inside secure, governance-controlled environments designed for compliance, isolation, and auditability.
            </p>
            <div className={styles.ecomServicesGrid}>
              {LEAKAGE.map((c) => (
                <div key={c.title} className={styles.ecomServiceCard}>
                  <Image src={c.icon} alt={c.title} width={56} height={56} className={styles.ecomServiceIcon} />
                  <h3 className={styles.ecomServiceTitle}>{c.title}</h3>
                  {c.paragraphs.map((p) => <p key={p} className={styles.ecomServiceIntro}>{p}</p>)}
                  <ul className={styles.ecomBullets}>{c.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
                  {c.outro && <p className={styles.ecomServiceIntro}>{c.outro}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Cases + Reviews ─────────────────────────────────────────────── */}
        <div id="genai-cases">
          <CaseCards
            heading={<>What generative AI has <span>Nexterse LLC</span> built?</>}
            cards={GENAI_CASES}
            windowed
          />
        </div>
        <ServicesReviewSlider />

        {/* ── Industries (vertical tabs) ───────────────────────────────────── */}
        <section id="genai-industries" className={styles.blockLight}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Which industries does Nexterse LLC build <span className={styles.accent}>generative AI</span> for?</h2>
            <p className={styles.sectionDesc}>
              Generative AI creates measurable value when it understands operational constraints, regulatory pressure, and data architecture specific to your industry. We build industry-calibrated GenAI systems that integrate directly into real workflows.
            </p>
            <div className={styles.vertTabsWrap}>
              <div className={styles.vertTabList} role="tablist" aria-label="Industries">
                {INDUSTRIES.map((t, i) => (
                  <button
                    key={t.label}
                    role="tab"
                    aria-selected={activeIndustry === i}
                    className={`${styles.vertTabBtn} ${activeIndustry === i ? styles.vertTabBtnActive : ""}`}
                    onClick={() => setActiveIndustry(i)}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
              <div className={styles.vertTabContent}>
                <h3 className={styles.vertTabTitle}>{INDUSTRIES[activeIndustry].label}</h3>
                <p className={styles.vertTabDesc}>{INDUSTRIES[activeIndustry].intro}</p>
                <ul className={styles.ecomBullets}>{INDUSTRIES[activeIndustry].bullets.map((b) => <li key={b}>{b}</li>)}</ul>
                <p className={styles.vertTabDesc}><strong>Impact:</strong></p>
                <ul className={styles.ecomBullets}>{INDUSTRIES[activeIndustry].impact.map((b) => <li key={b}>{b}</li>)}</ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── Tech stack ──────────────────────────────────────────────────── */}
        <GenaiTechStack />

        {/* ── ADLC process (dark, 7 phases) ────────────────────────────────── */}
        <section id="genai-adlc" className={styles.blockDark}>
          <div className="container">
            <h2 className={styles.sectionTitleWhite}>How does Nexterse LLC engineer production of generative AI? <span className={styles.accent}>(ADLC)</span></h2>
            <p className={styles.sectionDescWhite}>
              Generative AI behaves differently from deterministic software. It interprets, predicts, and generates outputs. The agentic development lifecycle (ADLC) is our engineering framework for turning probabilistic models into governed systems. Each phase addresses a specific failure point that causes most GenAI initiatives to stall.
            </p>
            <div className={styles.processGrid}>
              {ADLC.map((step, i) => (
                <div key={step.title} className={styles.processStep}>
                  <div className={styles.processNum}>{i + 1}</div>
                  <div className={styles.processStepBody}>
                    <h3 className={styles.processStepTitle}>{step.title}</h3>
                    <p className={styles.processStepText}>{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Zero-hallucination systems (4 cards) ─────────────────────────── */}
        <section id="genai-hallucination" className={styles.blockWhite}>
          <div className="container">
            <h2 className={styles.sectionTitle}>How does Nexterse LLC prevent <span className={styles.accent}>hallucinations?</span></h2>
            <div className={styles.ecomServicesGrid}>
              {HALLUCINATION.map((c) => (
                <div key={c.title} className={styles.ecomServiceCard}>
                  <h3 className={styles.ecomServiceTitle}>{c.title}</h3>
                  <p className={styles.ecomServiceIntro}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ─────────────────────────────────────────────────────────── */}
        <div id="genai-faq">
          <ServicesFaqBlock items={GENAI_FAQ} />
        </div>

        {/* ── Let's Start ─────────────────────────────────────────────────── */}
        <LetsStart />

        {/* ── More about (crosslinks) ─────────────────────────────────────── */}
        <GenaiCrosslinks />
      </GenaiArticleLayout>
    </>
  );
}
