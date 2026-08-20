"use client";

import { useState } from "react";
import Image from "next/image";
import CaseCards from "@/components/home/CaseCards";
import LetsStart from "@/components/home/LetsStart";
import AwesomeStories from "@/components/blog/AwesomeStories";
import GenaiIntegrationHero from "./GenaiIntegrationHero";
import AipocLogos from "@/components/aipoc/AipocLogos";
import GenaiIntegrationReviews from "./GenaiIntegrationReviews";
import GenaiIntegrationAwards from "./GenaiIntegrationAwards";
import GenaiIntegrationFaq from "./GenaiIntegrationFaq";
import GenaiIntegrationCrosslinks from "./GenaiIntegrationCrosslinks";
import ArticleLayout from "@/components/shared/ArticleLayout";
import styles from "./GenaiIntegrationPage.module.css";

// --- Why most enterprise AI initiatives fail (6 open items) ----------------
const WHY_FAIL = [
  { icon: "/genai-integration/05_The-pilot-graveyard-03.svg", title: "The pilot graveyard", desc: "Your pilots work in controlled environments, then fail under real conditions. Production introduces fragmented data, edge cases, and compliance constraints that the pilot never accounted for. The result is a growing backlog of demos with no operational impact." },
  { icon: "/genai-integration/05_The-integration-iceberg-01.svg", title: "The integration iceberg", desc: "The model is only a small part of the system. The majority of effort sits in retrieval pipelines, access control, orchestration, evaluation, and monitoring. Without this foundation, AI remains disconnected from business operations." },
  { icon: "/genai-integration/05_The-shadow-AI-problem-02.svg", title: "The shadow AI problem", desc: "Teams already use generative AI - outside controlled environments. Sensitive data is shared through public tools without visibility or governance. This creates immediate exposure risks and long-term compliance issues." },
  { icon: "/genai-integration/05_The-API-wrapper-trap-01.svg", title: "The API wrapper trap", desc: "Connecting your system directly to a public LLM API creates fragile architecture. Data flows are uncontrolled, vendor dependency increases, and compliance boundaries become unclear. This approach does not meet enterprise requirements." },
  { icon: "/genai-integration/05_The-hallucination-liability.svg", title: "The hallucination liability", desc: "Generative AI produces outputs probabilistically. Without grounding and validation, responses can be incorrect or fabricated. In enterprise workflows, this leads to operational errors, reputational damage, and regulatory risk." },
  { icon: "/genai-integration/05_The-big-consulting-bottleneck-01.svg", title: "The big consulting bottleneck", desc: "Large consulting firms prioritize analysis before execution. Timelines extend, costs escalate, and delivery lags behind the pace of model evolution. By the time recommendations are finalized, the landscape has already shifted." },
];

// ─── What and where we integrate (8 cards) ────────────────────────────────────
const INTEGRATE = [
  { icon: "/genai-integration/05_RAG-over-proprietary-data-04.svg", title: "RAG over proprietary data", desc: "Our services enable accurate, context-aware access to internal knowledge. Documents, tickets, databases, and structured data are unified into a retrieval layer that supports reliable question answering. Responses are grounded in verified company data, ensuring consistency across teams and eliminating unsupported outputs." },
  { icon: "/genai-integration/05_Agentic-workflows-01.svg", title: "Agentic workflows", desc: "Our approach introduces AI agents that execute multi-step processes across systems. These agents retrieve data, trigger actions, generate outputs, and interact with APIs within clearly defined boundaries and approval logic." },
  { icon: "/genai-integration/05_Document-intelligence-01.svg", title: "Document intelligence", desc: "Our solutions transform unstructured documents into structured, usable information. Contracts, invoices, reports, and compliance materials are analyzed, classified, and converted into data that supports downstream systems and operational decisions." },
  { icon: "/genai-integration/05_Customer-facing-AI-01.svg", title: "Customer-facing AI", desc: "Our integrations extend directly into your product experience. AI assistants guide users, support onboarding, provide contextual help, and personalize interactions based on real usage patterns and behavioral data." },
  { icon: "/genai-integration/05_Voice-and-multimodal-systems-02.svg", title: "Voice and multimodal systems", desc: "Our capabilities go beyond text-based interactions. Voice, images, documents, and recorded conversations are processed into structured insights, enabling summaries, analysis, and automated follow-ups across communication channels." },
  { icon: "/genai-integration/05_Model-governance-layer-01.svg", title: "Model governance layer", desc: "Our architecture includes a centralized governance layer across all AI operations. Model selection, routing, access control, logging, and cost management are handled within a unified system, ensuring controlled and predictable behavior." },
  { icon: "/genai-integration/05_Data-pipeline-modernization-01.svg", title: "Data pipeline modernization", desc: "Our generative AI integration services establish the infrastructure required for reliable AI execution. Data pipelines, vector databases, embedding systems, and evaluation frameworks support retrieval, processing, and continuous system improvement." },
  { icon: "/genai-integration/05_Stack-agnostic-integration.svg", title: "Stack-agnostic integration", desc: "Our work adapts to your existing technology landscape – OpenAI, Anthropic Claude, Azure OpenAI, AWS Bedrock, Google Vertex AI, open-source models, your databases, your cloud, your identity provider. Integration is aligned with your current architecture." },
];

// ─── Security tabs (3) ─────────────────────────────────────────────────────────
const SECURITY = [
  {
    label: "What we bring on day one",
    bullets: [
      "SOC 2 Type II-aligned engineering and delivery processes.",
      "Deployment inside your cloud (AWS, Azure, GCP) with full environment control.",
      "Private model endpoints with zero data retention and no use of your data for training.",
      "Role-based access control integrated with your identity provider (Okta, Azure AD, Ping).",
      "Full audit logs across prompts, retrieval steps, model responses, and system actions.",
      "PII and PHI redaction pipelines before data enters AI processing layers.",
      "Red-team testing and prompt injection defenses built into the system lifecycle.",
      "Compliance alignment with GDPR, HIPAA, PCI, and industry-specific regulations.",
    ],
  },
  {
    label: "How security is enforced in practice",
    bullets: [
      "Data access is enforced before retrieval, not after generation.",
      "Only authorized data is available to each request, based on user role and context.",
      "Every model interaction is logged, traceable, and reviewable.",
      "AI outputs follow defined policies, with validation before delivery in sensitive workflows.",
      "External model usage is controlled through private endpoints and approved providers only.",
    ],
  },
  {
    label: "Designed for enterprise approval",
    bullets: [
      "Architecture is transparent and documented before implementation.",
      "Data flows are explicitly defined and approved.",
      "Model usage policies are clear and enforceable.",
      "Risk boundaries are visible and testable.",
      "Auditability is built into the system from the first deployment.",
    ],
  },
];

// ─── Dual-engine AI architecture (6 cards) ────────────────────────────────────
const DUAL_ENGINE = [
  { icon: "/genai-integration/05_Private-air-gapped-LLMs-01.svg", title: "Private, air-gapped LLMs", desc: "We deploy models within your controlled environment – private cloud VPCs or on-premise infrastructure. Your data does not pass through public endpoints and is never used for external model training. This ensures full control over data flow, storage, and processing." },
  { icon: "/genai-integration/05_Enterprise-RAG-01.svg", title: "Enterprise RAG (retrieval-augmented generation)", desc: "We connect AI directly to your verified data sources. Documents, databases, tickets, and internal knowledge are structured, indexed, and retrieved in real time. Responses are grounded in your data and constrained to approved sources, ensuring consistent and reliable outputs." },
  { icon: "/genai-integration/05_Agentic-system-orchestration-01.svg", title: "Agentic system orchestration", desc: "We build AI agents that operate across your systems. These agents can read inputs, retrieve context, make structured decisions, and execute actions through APIs. Workflows such as support handling, reporting, and internal operations become coordinated, multi-step processes." },
  { icon: "/genai-integration/05_Model-agnostic-architecture-01.svg", title: "Model-agnostic architecture", desc: "We design your system to remain independent from any single model provider. AI capabilities are routed through an abstraction layer that allows switching between models such as GPT, Claude, Gemini, or open-source alternatives without disrupting your system or workflows." },
  { icon: "/genai-integration/05_Governed-execution-layer-01.svg", title: "Governed execution layer", desc: "Every interaction with AI passes through a control layer. Access rights, data visibility, and allowed actions are enforced before any response is generated. Outputs are validated, logged, and monitored to ensure alignment with business rules and compliance requirements." },
  { icon: "/genai-integration/05_Evaluation-and-continuous-control-02.svg", title: "Evaluation and continuous control", desc: "We implement evaluation pipelines that measure response accuracy, consistency, and system performance under real conditions. AI behavior is continuously monitored and refined, allowing the system to improve while remaining stable and predictable in production." },
];

// ─── From concept to production in 12 weeks (4 phases) ───────────────────────
const PROCESS = [
  {
    title: "Week 1-2: integration audit",
    text: "We analyze your systems, data flows, workflows, and compliance constraints to identify where generative AI creates measurable business impact. This is a focused discovery phase. We map how AI will operate inside your existing architecture – across CRM, ERP, internal tools, and data platforms – and define exactly what is feasible within your environment. Each opportunity is evaluated against business impact, implementation complexity and operational risk. You receive a prioritized roadmap of GenAI use cases, along with a clear execution plan and cost model, before any development begins.",
    bullets: ["Integration roadmap document", "Prioritized use case list with ROI assumptions", "Architecture outline aligned to your systems", "Token usage and cost projections", "Executive readout with go-no-go recommendations"],
  },
  {
    title: "Week 3-5: architecture and secure foundation",
    text: "We build the core infrastructure that allows AI to operate inside your systems in a controlled, secure, and observable way. This includes setting up your private model access layer, retrieval pipelines, evaluation framework, and governance controls. Every component is designed to integrate with your identity provider, data sources, and existing services. AI becomes part of your system architecture, governed by the same rules as your software. Security, access control, and auditability are enforced at the foundation level.",
    bullets: ["Running AI foundation deployed in your environment", "RAG pipelines connected to your data sources", "Model routing and abstraction layer", "Evaluation and monitoring framework", "Security validation and internal approval readiness"],
  },
  {
    title: "Week 6-10: build and embed",
    text: "We implement the first production-grade GenAI capabilities directly into your applications and workflows. This includes copilots, internal assistants, document processing pipelines, or agent-based automations – depending on what was prioritized during the audit. Each integration is built to function within real user workflows. AI interacts with your systems through controlled APIs, follows defined business rules, and operates within approved data boundaries. All components are tested end-to-end with real data, real edge cases, and real user scenarios.",
    bullets: ["Production-ready GenAI features integrated into your systems", "End-to-end tested workflows with real data", "User-facing interfaces or embedded components", "Evaluation reports (accuracy, reliability, performance)", "Staging environment ready for controlled rollout"],
  },
  {
    title: "Week 11-12: validate, launch, scale",
    text: "We validate system behavior under production conditions and prepare for controlled rollout. This includes load testing, adversarial testing, and evaluation of AI outputs against defined quality and compliance criteria. Any edge cases are resolved before full deployment. The rollout is phased, allowing you to introduce AI capabilities without disrupting ongoing operations. Your team receives full documentation, operational guidelines, and the ability to scale independently. AI becomes a stable, governed part of your system.",
    bullets: ["Live production deployment", "Performance and reliability validation results", "Operations runbook and governance guidelines", "Scaling roadmap with next-phase opportunities", "Knowledge transfer to your internal teams"],
  },
];

// ─── Cases (4, clone content) ─────────────────────────────────────────────────


// ─── What production-grade GenAI integration delivers (6 cards) ──────────────
const DELIVERABLES = [
  { icon: "/genai-integration/05_faster-workflows-01.svg", title: "30-70% faster workflows", desc: "Copilots, summarizers, and AI agents operate directly inside your existing tools – CRM, ERP, support platforms, and internal systems. Tasks that previously required manual coordination are executed in seconds. Time savings are measured at the level of actual work completed per employee, per week." },
  { icon: "/genai-integration/05_support-deflection-01.svg", title: "2-5x support deflection", desc: "Context-aware assistants retrieve answers from your internal documentation, tickets, and product data. Responses are grounded in your actual systems, reducing escalation volume while maintaining accuracy and consistency across customer interactions." },
  { icon: "/genai-integration/05_higher-conversion-01.svg", title: "15-40% higher conversion", desc: "AI-driven personalization is embedded directly into product flows, onboarding, and content delivery. Recommendations, guidance, and interactions adapt to user context in real time, increasing engagement and conversion across key revenue paths." },
  { icon: "/genai-integration/05_auditable-and-compliant-operations-02.svg", title: "100% auditable and compliant operations", desc: "Every prompt, response, data retrieval, and system action is logged, traceable, and governed. Access is role-controlled, outputs are monitored, and decisions are fully reviewable. This aligns AI behavior with enterprise compliance requirements including GDPR, HIPAA, and SOC 2." },
  { icon: "/genai-integration/05_Predictable-AI-cost-control-01.svg", title: "Predictable AI cost control", desc: "Token usage, model selection, and workload distribution are engineered and modeled before scaling. Requests are routed to the most efficient models, repeated queries are cached, and cost behavior remains stable as usage grows." },
  { icon: "/genai-integration/05_Continuous-system-improvement-02.svg", title: "Continuous system improvement", desc: "AI performance is not static. Evaluation pipelines measure accuracy, relevance, and system behavior over time. Feedback loops refine retrieval, prompts, and model selection, ensuring the system improves under real usage conditions without disrupting operations." },
];

// ─── Why choose us (stats + comparison table) ─────────────────────────────────
const STATS = [
  { value: "6+", label: "years in software engineering" },
  { value: "350+", label: "systems delivered" },
  { value: "98%", label: "client satisfaction" },
  { value: "25+", label: "clients across countries" },
  { value: "ISO 27001", label: "aligned processes" },
];

const COMPARE_HEAD = ["Criteria", "Nexterse LLC", "Big consultancies", "Generic dev shops"];
const COMPARE_ROWS = [
  ["Time to production", "90 days", "9–18 months", "Unpredictable"],
  ["GenAI specialization", "100% focused", "One of many practices", "Generalists who added AI last quarter"],
  ["Security & compliance", "Enterprise-grade by default", "Enterprise-grade", "Often an afterthought"],
  ["Team composition", "Senior AI engineers only", "Heavy pyramid with juniors", "Mixed seniority"],
  ["Code & IP ownership", "Yours, day one", "Often licensed / co-owned", "Varies"],
  ["Post-launch support", "Embedded or advisory, flexible", "Fixed multi-year contracts", "Usually none"],
  ["Model flexibility", "All major + open-source", "Partnership-limited", "Limited"],
  ["Risk reversal", "Fixed-fee audit, scoped phases", "Time & materials", "Time & materials"],
  ["Deployment flexibility", "VPC, private cloud, on-prem", "Mostly cloud-first", "Limited options"],
];

// ─── FAQ items now live in GenaiIntegrationFaq (clone content, custom-software UI) ─

// ─── Awesome stories (blog) ───────────────────────────────────────────────────
const GAII_BLOG_FEATURED = {
  href: "/blog/enterprise-ai-adoption-risks",
  title: "Top 7 Enterprise AI Adoption Risks in 2026 — and How to De-Risk Them",
  image: "/genai-integration/07_figure-1-og-1200x630-1.png",
  imageAlt: "Enterprise AI adoption risks",
  readTime: "29 mins",
  date: "July 15, 2026",
};
const GAII_BLOG_SIDE = [
  { href: "/blog/ai-legacy-modernization-companies", title: "Top AI Legacy Modernization Companies (2026): Who Actually Embeds AI into Old Systems", readTime: "20 mins", date: "July 13, 2026" },
  { href: "/blog/eu-ai-act-custom-ai-development", title: "The EU AI Act: How It Changes AI Development and What It Means for Custom AI", readTime: "25 mins", date: "July 9, 2026" },
  { href: "/blog/questions-to-ask-ai-development-company", title: "10 questions to Ask an AI Development Company before Signing", readTime: "18 mins", date: "July 7, 2026" },
];

// ─── Component ────────────────────────────────────────────────────────────────
const CONTENTS = [
  { href: "#gaii-fail", label: "Why initiatives fail" },
  { href: "#gaii-integrate", label: "What and where we integrate" },
  { href: "#gaii-security", label: "Security" },
  { href: "#gaii-dual-engine", label: "Dual-engine AI architecture" },
  { href: "#gaii-process", label: "Concept to production" },
  { href: "#gaii-cases", label: "Case studies" },
  { href: "#gaii-deliverables", label: "Deliverables" },
  { href: "#gaii-why", label: "Why choose us" },
  { href: "#gaii-faq", label: "FAQ" },
];

export default function GenaiIntegrationPage() {
  const [activeSec, setActiveSec] = useState(0);

  return (
    <>
      <GenaiIntegrationHero />

      <ArticleLayout contents={CONTENTS} ariaLabel="GenAI integration page contents">
        <AipocLogos />

        {/* ── Big Data services built for operational scale ── */}
        <section id="gaii-fail" className={`${styles.blockLight} ${styles.failBlock}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>
              Why most enterprise AI initiatives <span className={styles.accent}>fail</span> in production
            </h2>
            <p className={styles.sectionDesc}>
              You&rsquo;ve seen what generative AI can do. You&rsquo;ve tested use cases. You&rsquo;ve explored pilots. Yet the transition from experimentation to production keeps stalling. The issue is the system around it - integration, governance, data control, and operational readiness. This is where most AI initiatives break.
            </p>
            <div className={styles.ecomServicesGrid}>
              {WHY_FAIL.map((c) => (
                <div key={c.title} className={styles.ecomServiceCard}>
                  <Image src={c.icon} alt={c.title} width={56} height={56} className={styles.ecomServiceIcon} />
                  <h3 className={styles.ecomServiceTitle}>{c.title}</h3>
                  <p className={styles.ecomServiceIntro}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── What and where we integrate ──────────────────────────────────── */}
        <section id="gaii-integrate" className={`${styles.blockWhite} ${styles.integrateBlock}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>
              <span className={styles.accent}>What</span> we integrate. <span className={styles.accent}>Where</span> we integrate it.
            </h2>
            <p className={styles.sectionDesc}>
              Stack-agnostic. Model-agnostic. Cloud-agnostic. Built around your systems, your data, and your workflows. Our AI solutions bring intelligent assistance directly into the tools your teams rely on. These copilots generate responses, summarize information, and support decision-making within existing workflows, without introducing new interfaces.
            </p>
            <div className={styles.ecomServicesGrid}>
              {INTEGRATE.map((c) => (
                <div key={c.title} className={styles.ecomServiceCard}>
                  <Image src={c.icon} alt={c.title} width={56} height={56} className={styles.ecomServiceIcon} />
                  <h3 className={styles.ecomServiceTitle}>{c.title}</h3>
                  <p className={styles.ecomServiceIntro}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Built for security teams. Approved by CISOs (vertical tabs) ──── */}
        <section id="gaii-security" className={`${styles.blockLight} ${styles.securityBlock}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>
              Built for <span className={styles.accent}>security</span> teams. Approved by CISOs
            </h2>
            <p className={styles.sectionDesc}>
              We design GenAI systems the way enterprise security teams expect them to be built – controlled, auditable, and aligned with your existing governance model.
            </p>
            <div className={styles.securityTabsWrap}>
              <div className={styles.securityTabList} role="tablist" aria-label="GenAI integration security">
                {SECURITY.map((t, i) => (
                  <button
                    key={t.label}
                    role="tab"
                    aria-selected={activeSec === i}
                    className={`${styles.securityTabBtn} ${activeSec === i ? styles.securityTabBtnActive : ""}`}
                    onClick={() => setActiveSec(i)}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
              <div className={styles.securityTabContent}>
                <h3 className={styles.securityTabTitle}>{SECURITY[activeSec].label}</h3>
                <ul className={styles.ecomBullets}>
                  {SECURITY[activeSec].bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── Dual-engine AI architecture (6 cards) ────────────────────────── */}
        <section id="gaii-dual-engine" className={`${styles.blockWhite} ${styles.dualEngineBlock}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>
              <span className={styles.accent}>Dual-engine</span> AI architecture
            </h2>
            <p className={styles.sectionDesc}>
              We engineer generative AI as part of your system architecture. Our approach in generative AI integration services introduces a controlled integration layer between your deterministic software systems and probabilistic AI models. This allows AI to operate inside your infrastructure with defined behavior, governed access, and predictable outcomes. Your existing applications, data platforms, and workflows remain the foundation. We extend them with AI capabilities that follow the same rules, security boundaries, and operational logic as the rest of your system.
            </p>
            <div className={styles.ecomServicesGrid}>
              {DUAL_ENGINE.map((c) => (
                <div key={c.title} className={styles.ecomServiceCard}>
                  <Image src={c.icon} alt={c.title} width={56} height={56} className={styles.ecomServiceIcon} />
                  <h3 className={styles.ecomServiceTitle}>{c.title}</h3>
                  <p className={styles.ecomServiceIntro}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── From concept to production in 12 weeks (dark process) ───────── */}
        <section id="gaii-process" className={`${styles.blockDark} ${styles.processBlock}`}>
          <div className="container">
            <h2 className={styles.sectionTitleWhite}>
              From concept to production in <span className={styles.accent}>12 weeks</span>
            </h2>
            <p className={styles.sectionDescWhite}>
              A structured, outcome-driven delivery model designed for real enterprise environments. Fixed phases. Clear deliverables. Full visibility from day one.
            </p>
            <div className={styles.processGrid}>
              {PROCESS.map((step, i) => (
                <div key={step.title} className={styles.processStep}>
                  <div className={styles.processNum}>{i + 1}</div>
                  <div className={styles.processStepBody}>
                    <h3 className={styles.processStepTitle}>{step.title}</h3>
                    <p className={styles.processStepText}>{step.text}</p>
                    <p className={styles.processStepDeliverables}><strong>Deliverables:</strong></p>
                    <ul className={styles.processStepBullets}>
                      {step.bullets.map((b) => <li key={b}>{b}</li>)}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Awards & recognitions ────────────────────────────────────────── */}
        <GenaiIntegrationAwards />

        {/* ── Our recent AI cases ───────────────────────────────────────────── */}
        <div id="gaii-cases">
          <CaseCards
            heading={<>Our recent AI <span>cases</span></>}

            windowed
          />
        </div>

        {/* ── Reviews ───────────────────────────────────────────────────────── */}
        <GenaiIntegrationReviews />

        {/* ── What production-grade GenAI integration actually delivers ────── */}
        <section id="gaii-deliverables" className={`${styles.blockWhite} ${styles.deliverablesBlock}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>
              <span className={styles.accent}>What</span> production-grade GenAI integration actually delivers
            </h2>
            <p className={styles.sectionDesc}>
              Our generative AI integration services offer measured outcomes across real deployments. Built inside your systems, validated under real operating conditions.
            </p>
            <div className={styles.ecomServicesGrid}>
              {DELIVERABLES.map((c) => (
                <div key={c.title} className={styles.ecomServiceCard}>
                  <Image src={c.icon} alt={c.title} width={56} height={56} className={styles.ecomServiceIcon} />
                  <h3 className={styles.ecomServiceTitle}>{c.title}</h3>
                  <p className={styles.ecomServiceIntro}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why choose us (stats + comparison table) ─────────────────────── */}
        <section id="gaii-why" className={`${styles.blockLight} ${styles.whyBlock}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>
              <span className={styles.accent}>Why</span> choose us
            </h2>
            <div className={styles.statsGrid}>
              {STATS.map((s) => (
                <div key={s.label} className={styles.statCard}>
                  <div className={styles.statValue}>{s.value}</div>
                  <div className={styles.statLabel}>{s.label}</div>
                </div>
              ))}
            </div>
            <div className={styles.compareWrap}>
              <table className={styles.compareTable}>
                <thead>
                  <tr>{COMPARE_HEAD.map((h) => <th key={h} scope="col">{h}</th>)}</tr>
                </thead>
                <tbody>
                  {COMPARE_ROWS.map((row) => (
                    <tr key={row[0]}>
                      {row.map((cell, ci) => <td key={ci}>{cell}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────────────────── */}
        <GenaiIntegrationFaq />

        {/* ── Let's Start ───────────────────────────────────────────────────── */}
        <LetsStart />

        {/* ── Awesome stories (blog) ────────────────────────────────────────── */}
        <AwesomeStories category="ai" />

        {/* ── More about Nexterse LLC (crosslinks) ─────────────────────────── */}
        <GenaiIntegrationCrosslinks />
      </ArticleLayout>
    </>
  );
}
