"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import CaseCards from "@/components/home/CaseCards";
import ServicesReviewSlider from "@/components/services/ServicesReviewSlider";
import ServicesAchievements, { type Badge } from "@/components/services/ServicesAchievements";
import ServicesFaqBlock, { type FaqItem } from "@/components/services/ServicesFaqBlock";
import LetsStart from "@/components/home/LetsStart";
import AwesomeStories from "@/components/blog/AwesomeStories";
import FintechHero from "./FintechHero";
import AipocLogos from "@/components/aipoc/AipocLogos";
import ArticleLayout from "@/components/shared/ArticleLayout";
import styles from "./FintechPage.module.css";

// ─── Core fintech solutions (5 vertical tabs) ─────────────────────────────────
const SOLUTIONS = [
  {
    label: "High-throughput transaction systems",
    desc: "We develop transaction-processing infrastructure that executes payments, settlements, and other financial operations in real time. The system supports high transaction volumes, maintains consistent performance, and ensures accuracy across complex financial workflows.",
  },
  {
    label: "AI-driven KYC/AML & fraud vectorization",
    desc: "We build machine learning systems that analyze transactional behavior and evaluate financial activity in real time. The system identifies patterns across large data streams, supports compliance processes, and delivers precise fraud detection with controlled model behavior.",
  },
  {
    label: "Core banking modernization",
    desc: "We transform legacy banking systems into flexible, API-driven architecture. New components are introduced gradually, allowing the system to evolve while maintaining full operational continuity and stable transaction processing.",
  },
  {
    label: "ISO 20022 payment infrastructure",
    desc: "We implement payment systems aligned with modern financial messaging standards. The system enables structured, data-rich transactions and supports seamless communication across banks, payment networks, and financial platforms.",
  },
  {
    label: "Institutional tokenization & smart contract security",
    desc: "We develop blockchain-based systems for managing tokenized assets and automated financial operations. The system ensures transparent transaction flows, verified execution logic, and infrastructure designed for institutional-grade usage.",
  },
];

// ─── Dual-engine (2 rich cards) ───────────────────────────────────────────────
const DUAL_ENGINE = [
  {
    icon: "/financial-development/04_Deterministic-QA-for-software-systems-01.svg",
    title: "Deterministic execution systems",
    paragraphs: [
      "This layer handles the core of financial operations.",
      "Transaction processing, payment orchestration, settlement logic, and ledger integrity are implemented as stable, predictable systems. Every operation executes with full traceability, controlled performance, and alignment with regulatory requirements.",
      "These systems form the execution backbone of the platform, ensuring consistency under high load and across complex financial workflows.",
    ],
  },
  {
    icon: "/financial-development/04_Governed-AI-by-Design-01.svg",
    title: "AI-driven decision systems",
    paragraphs: [
      "This layer introduces intelligence directly into operational processes.",
      "KYC and AML evaluation, fraud detection, risk scoring, and financial forecasting operate as embedded components within the system. Each model produces traceable outputs, aligned with defined rules and business logic.",
      "Decisions are applied in real time, enriching transaction flows while maintaining a governed and observable system behavior.",
    ],
  },
];

// ─── Benefits (6 icon cards) ──────────────────────────────────────────────────
const BENEFITS = [
  { icon: "/financial-development/06_Faster-product-launch-03.svg", title: "Faster product launch", desc: "Bring new financial products to market with defined architecture and predictable delivery timelines." },
  { icon: "/financial-development/06_Full-control-over-transaction-infrastructure-02.svg", title: "Full control over transaction infrastructure", desc: "Manage performance, data, and business logic within systems designed around your operations." },
  { icon: "/financial-development/06_Operational-efficiency-at-scale-02.svg", title: "Operational efficiency at scale", desc: "Transaction processing, validation, and AI-driven decision logic operate as part of a unified execution flow across high-volume financial workflows." },
  { icon: "/financial-development/06_Scalable-system-architecture-01.svg", title: "Scalable system architecture", desc: "Expand transaction capacity, integrations, and product lines without redesigning core systems." },
  { icon: "/financial-development/06_Built-in-regulatory-alignment-01.svg", title: "Built-in regulatory alignment", desc: "Keep reporting, monitoring, and audit processes aligned with financial requirements." },
  { icon: "/financial-development/06_Long-term-system-evolution-03.svg", title: "Long-term system evolution", desc: "Extend your platform with new services, integrations, and AI capabilities as your business grows." },
];

// ─── Pilot roadmap (5 process steps) ──────────────────────────────────────────
const PILOT_STEPS = [
  { title: "Week 1 – system definition", text: "We define architecture, transaction flows, integrations, and decision logic aligned with your business model." },
  { title: "Weeks 2–3 – system and data setup", text: "We build core components, connect data sources, and establish processing pipelines that support both transactional and analytical workloads." },
  { title: "Weeks 3–4 – execution validation", text: "We simulate real transaction scenarios to evaluate throughput, latency, and system behavior under operational conditions." },
  { title: "Weeks 4–5 – decision logic and AI validation", text: "We validate how AI models and automated decision flows operate within your transaction systems, ensuring consistent outputs and controlled behavior." },
  { title: "Weeks 5–6 – evaluation and production planning", text: "We finalize performance benchmarks, cost models, and define the architecture and rollout plan for full-scale deployment." },
];

// ─── Advanced financial engineering (4 rich cards) ────────────────────────────
const ADVANCED = [
  {
    icon: "/financial-development/06_Financial-RAG-systems-01.svg",
    title: "Financial RAG systems",
    paragraphs: [
      "A structured retrieval layer connects internal documentation, financial reports, and external data sources into a unified knowledge system.",
      "Users query this system in natural language and receive precise, context-aware answers with traceable references to the original data. We design these systems to ensure that every output remains grounded in verified sources and aligned with your internal data boundaries.",
    ],
  },
  {
    icon: "/financial-development/06_Agentic-ledger-reconciliation-03.svg",
    title: "Agentic ledger reconciliation",
    paragraphs: [
      "Reconciliation becomes part of the system’s continuous operation rather than a separate process.",
      "Transaction data flows across banking APIs, internal ledgers, and payment platforms, where records are automatically matched and aligned. We implement reconciliation logic that maintains consistent financial states across systems and provides full transaction traceability at any point in time.",
    ],
  },
  {
    icon: "/financial-development/06_Quantitative-machine-learning-pipelines-02.svg",
    title: "Quantitative machine learning pipelines",
    paragraphs: [
      "Financial decision-making is supported by structured machine learning systems integrated into your workflows.",
      "Market data, operational signals, and alternative datasets are processed through models designed for forecasting, pricing, and risk evaluation. We build these pipelines with clearly defined inputs, measurable outputs, and predictable behavior within your system architecture.",
    ],
  },
  {
    icon: "/financial-development/06_Integrated-into-your-architecture-03.svg",
    title: "Integrated into your architecture",
    paragraphs: [
      "All capabilities are introduced as part of a coherent system design.",
      "We define integration points, data flows, and execution boundaries so that each component operates within your infrastructure with full control and transparency. This allows advanced analytical capabilities to scale alongside your core systems without increasing operational complexity.",
    ],
  },
];

// ─── Industry-specific fintech (6 cards with images) ──────────────────────────
const INDUSTRIES = [
  { img: "/financial-development/01_20943819-300x200.jpg", title: "Banking software", desc: "Core banking systems, transaction engines, and API orchestration layers that unify financial operations across products, channels, and internal workflows." },
  { img: "/financial-development/01_20945410-300x300.jpg", title: "Payment processing systems", desc: "Payment processing infrastructure that manages authorization, clearing, and settlement within a single execution layer, connected to global financial networks." },
  { img: "/financial-development/01_19197351-300x200.jpg", title: "Trading & investment platforms", desc: "Trading platforms, portfolio systems, and analytics infrastructure that support real-time execution and continuous strategy evaluation." },
  { img: "/financial-development/01_20943833-300x200.jpg", title: "Lending", desc: "Loan origination systems, credit decision engines, and risk evaluation models that structure and automate lending operations." },
  { img: "/financial-development/01_20945463-300x200.jpg", title: "Corporate finance", desc: "Financial management systems, reconciliation engines, and reporting platforms that unify financial operations across the organization." },
  { img: "/financial-development/01_20944526-300x200.jpg", title: "Insurance software", desc: "Underwriting platforms, claims processing systems, and policy management infrastructure that structure insurance workflows end-to-end." },
];

// ─── Security & compliance (4 rich cards) ─────────────────────────────────────
const SECURITY = [
  {
    icon: "/financial-development/06_Role-based-and-data-level-access-control-02.svg",
    title: "Role-based and data-level access control",
    paragraphs: [
      "Access to financial data is structured through role-based and attribute-based controls.",
      "Every interaction with sensitive information is defined, traceable, and aligned with your internal policies and regulatory requirements.",
    ],
  },
  {
    icon: "/financial-development/06_PCI-DSS-GDPR-SOC2-alignment-03.svg",
    title: "PCI DSS, GDPR, SOC2 alignment",
    paragraphs: [
      "Your system is built to operate within established financial standards, including PCI DSS, GDPR, and SOC2.",
      "Regulatory requirements are reflected in system architecture, data flows, and operational processes from the start.",
    ],
  },
  {
    icon: "/financial-development/06_PII-redaction-and-controlled-data-pipelines-01.svg",
    title: "PII redaction and controlled data pipelines",
    paragraphs: [
      "Sensitive data is handled through controlled processing pipelines, including data isolation, encryption, and selective redaction. This ensures that financial and personal data are consistently managed according to compliance expectations.",
    ],
  },
  {
    icon: "/financial-development/06_Zero-trust-infrastructure-02.svg",
    title: "Zero-trust infrastructure",
    paragraphs: [
      "We design secure environments using zero-trust principles, where system components interact through verified and controlled channels. This creates a stable and governed execution environment for financial operations.",
    ],
  },
];

// ─── Integration ──────────────────────────────────────────────────────────────
const INTEGRATIONS = [
  "Core Banking Systems (Temenos, Finacle, FIS, Fiserv)",
  "Payment networks (SWIFT, SEPA, ACH)",
  "KYC and AML providers",
  "Trading and analytics platforms",
  "Internal enterprise systems (CRM, ERP, other internal tools)",
];

// ─── Cases (3, clone content) ─────────────────────────────────────────────────


// ─── Why Clients trust (4 cards with bullet lists) ────────────────────────────
const WHY_CARDS = [
  {
    title: "Proven delivery",
    bullets: ["350+ custom software systems delivered", "6+ years in software engineering", "98% Client satisfaction", "Clients across 25+ countries"],
  },
  {
    title: "System-level execution",
    bullets: [
      "High-throughput transaction platforms with embedded decision logic",
      "AI-driven KYC/AML and fraud detection integrated into transaction flows",
      "Financial data platforms combining real-time processing with machine learning models",
      "Quantitative ML systems supporting risk evaluation and financial decision-making",
    ],
  },
  {
    title: "Controlled AI systems",
    bullets: [
      "Controlled AI pipelines operating within defined data boundaries",
      "Model outputs aligned with business rules and system logic",
      "AI integrated into operational workflows, not isolated components",
      "Consistent performance across changing data and transaction conditions",
    ],
  },
  {
    title: "Measured performance",
    bullets: ["Stable transaction processing under load", "Predictable AI-driven outputs", "Consistent data across integrated systems", "Reliable system behavior at scale"],
  },
];

// ─── What never changes (4 dark cards) ────────────────────────────────────────
const NEVER_CHANGES = [
  {
    icon: "/financial-development/01_Risk-management.svg",
    title: "Risk-controlled delivery",
    paragraphs: [
      "We define scope, timelines, and cost structure upfront. Each stage is validated against clear criteria, so execution remains predictable and aligned with business goals.",
      "When needed, we validate assumptions through focused pilot stages before scaling.",
    ],
  },
  {
    icon: "/financial-development/02_Transparency-Cooperation.svg",
    title: "Full transparency",
    paragraphs: [
      "You always see the current state of the system and delivery progress.",
      "We work with shared metrics, structured reporting, and clear documentation, so decisions are made with full visibility.",
    ],
  },
  {
    icon: "/financial-development/02_Compliance-and-standards-expertise.svg",
    title: "Built-in compliance",
    paragraphs: [
      "Compliance is embedded into system architecture from the start.",
      "We design solutions aligned with financial regulations and internal governance standards, including PCI DSS, SOC2, GDPR, and industry-specific requirements.",
    ],
  },
  {
    icon: "/financial-development/02_Security-and-Compliance.svg",
    title: "Security by design",
    paragraphs: [
      "Security is implemented across infrastructure, data, and access layers.",
      "We apply encryption, access control, and monitoring practices that support stable, secure operation at scale.",
    ],
  },
];

// ─── Quick facts ──────────────────────────────────────────────────────────────
const QUICK_FACTS = [
  { num: "98%", label: "User satisfaction rate" },
  { num: "350+", label: "Successful projects" },
  { num: "25+", label: "Countries" },
  { num: "70%", label: "Senior engineers" },
  { num: "3+", label: "Years of Clients’ engagement" },
  { num: "6+", label: "Years on the market" },
];

function AnimatedStatNumber({ value, suffix, active }: { value: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setCount(value);
      return;
    }

    const duration = Math.min(1800, Math.max(900, value * 8));
    const startedAt = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(value * eased));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    setCount(0);
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, value]);

  return <>{count}{suffix}</>;
}

function splitStatValue(value: string) {
  const match = value.match(/^(\d+)(.*)$/);
  return {
    value: match ? Number(match[1]) : 0,
    suffix: match ? match[2] : "",
  };
}

// ─── FAQ (clone content) ──────────────────────────────────────────────────────
const FIN_FAQ: FaqItem[] = [
  {
    question: "How do you prevent Generative AI from “hallucinating” when giving automated financial or investment advice?",
    answer: "We engineer Deterministic AI Guardrails. Our systems never allow an LLM to generate financial figures or investment advice from its base training weights. The AI is strictly limited to extracting numbers directly from your verified internal databases or Bloomberg/Reuters APIs. Furthermore, an automated “LLM-as-a-judge” parses every output to verify mathematical accuracy before the user sees it.",
  },
  {
    question: "How do you handle the latency requirements for high-frequency trading (HFT) or real-time payment processing when using Machine Learning?",
    answer: "You cannot query a cloud-based ML model during a sub-millisecond transaction. We implement Edge-Inference and In-Memory Caching (using technologies like Redis Enterprise or Aerospike). We train the fraud/pricing models offline, compile them into highly optimized C++ or Rust binaries, and deploy them directly alongside the transaction matching engine to ensure inference occurs in under 5 milliseconds.",
  },
  {
    question: "How do you ensure AI integration complies with strict banking regulations like PCI-DSS and SOC2?",
    answer: "We implement Compliance-as-Code. Our architecture utilizes Zero-Trust network micro-segmentation. The AI models are hosted in completely isolated VPCs without internet access. Before any financial data is processed by the AI, it passes through an automated PII/PAN (Primary Account Number) redaction layer, ensuring your core compliance certifications are never compromised.",
  },
  {
    question: "How do we extract data for Machine Learning from our legacy AS/400 or COBOL mainframe without causing system degradation?",
    answer: "You cannot query a legacy mainframe directly with heavy ML workloads. We engineer Change Data Capture (CDC) Pipelines. We read the transactional database logs directly (without querying the database itself) and stream those state changes in real-time via Apache Kafka into a modern cloud Data Lakehouse. Your AI models train on this synchronized cloud data, putting exactly zero compute stress on your critical mainframe.",
  },
  {
    question: "How do you handle multi-tenant data architecture for a B2B FinTech SaaS without violating SOC2 or GDPR?",
    answer: "We engineer Siloed Multi-Tenancy with Row-Level Security (RLS). While the application compute layer is shared for cost-efficiency, the database layer utilizes strict logical isolation. Every tenant’s data is encrypted with their own unique, rotating Customer-Managed Key (CMK), ensuring that a breach or misconfiguration in one tenant’s environment physically cannot expose another bank’s data.",
  },
  {
    question: "Can AI autonomously execute trades or approve high-value wire transfers?",
    answer: "Yes, but never without a deterministic safety net. We architect Human-in-the-Loop (HITL) and Algorithmic Circuit Breakers. The AI is granted autonomous execution rights only within strict, mathematically defined parameters (e.g., “approve transfers under $10,000 to known vendors”). If a transaction breaches a confidence threshold or an anomaly score, the AI autonomously routes the payload to a human compliance officer for manual review.",
  },
];

// ─── Awards (clone badges) ────────────────────────────────────────────────────
const FIN_BADGES: Badge[] = [
  { src: "/badges_fix/06_techreviewer_badge_2026-09.svg", alt: "techreviewer.co 2026 — Top Enterprise Software Development Companies" },
  { src: "/badges_fix/06_techreviewer_badge_2026-12.svg", alt: "techreviewer.co 2026 — Top Software Development Companies" },
  { src: "/badges_fix/06_techreviewer_badge_2026-04.svg", alt: "techreviewer.co 2026 — Top AI Software Development Companies" },
  { src: "/badges_fix/12_5ca49c9f6cb37e33319e1162_Goodfirms.svg", alt: "GoodFirms badge" },
  { src: "/badges_fix/12_5ca49c9f8ff5ad26d13b6845_TDA.svg", alt: "TDA badge" },
  { src: "/badges_fix/12_5ca49c9f6cb37e49a79e1163_changed.svg", alt: "AWS partner badge" },
  { src: "/badges_fix/12_Custom-Web-Design-Development-2025.svg", alt: "Custom Web Design Development 2025" },
  { src: "/badges_fix/12_Mobile-Software-Development-2025.svg", alt: "Mobile Software Development 2025" },
  { src: "/badges_fix/12_Responsive-Design-Development-2025.svg", alt: "Responsive Design Development 2025" },
  { src: "/badges_fix/12_Business-Intelligence-Services-2024.svg", alt: "Business Intelligence Services 2024" },
  { src: "/badges_fix/01_top_clutch.co_user_experience_company_manufacturing_boston.svg", alt: "Clutch — Top UX company manufacturing Boston" },
  { src: "/badges_fix/01_top_clutch.co_user_experience_company_information_technology_boston.svg", alt: "Clutch — Top UX company IT Boston" },
  { src: "/badges_fix/01_top_clutch.co_software_developers_supply_chain_logistics_and_transport_boston.svg", alt: "Clutch — Top supply chain, logistics & transport software developers Boston" },
];

// ─── Awesome stories (blog, clone content) ────────────────────────────────────
const FIN_BLOG_FEATURED = {
  href: "/blog/eu-ai-act-custom-ai-development",
  title: "The EU AI Act: How It Changes AI development and What It Means for Custom AI",
  image: "/financial-development/07_Figure-6-in-force-vs-coming.svg",
  imageAlt: "The EU AI Act — in force vs coming",
  readTime: "25 mins",
  date: "July 9, 2026",
};
const FIN_BLOG_SIDE = [
  { href: "/blog/questions-to-ask-ai-development-company", title: "10 questions to Ask an AI Development Company before Signing", readTime: "18 mins", date: "July 7, 2026" },
  { href: "/blog/blog-agentic-rag-enterprise-implementation-guide", title: "Agentic RAG: The Complete Enterprise Implementation Guide for 2026", readTime: "35 mins", date: "July 3, 2026" },
  { href: "/blog/ai-cost-reduction-playbook", title: "The AI Cost Reduction Playbook – 9 Mechanisms, 7 Hidden Drivers, and Real-World Case Studies (2026 Edition)", readTime: "32 mins", date: "July 1, 2026" },
];

// ─── Cross-links (3 columns, clone content) ───────────────────────────────────
const CROSSLINKS = [
  {
    heading: "Key AI services",
    links: [
      { text: "Enterprise RAG ", last: "systems", href: "/services/rag-development" },
      { text: "Custom AI copilots and ", last: "agents", href: "/services/ai-agents-development" },
      { text: "Enterprise software ", last: "development", href: "/services/enterprise-software-development" },
    ],
  },
  {
    heading: "Other enterprise services",
    links: [
      { text: "MVP ", last: "development", href: "/process/mvp" },
      { text: "CRM ", last: "development", href: "/services/crm-development" },
      { text: "Predictive maintenance ", last: "systems", href: "/services/predictive-maintenance" },
    ],
  },
  {
    heading: "About Nexterse LLC",
    links: [
      { text: "About ", last: "us", href: "/about-us" },
      { text: "Contact ", last: "us", href: "/contact-us" },
      { text: "", last: "Careers", href: "/careers" },
    ],
  },
];

// ─── Component ────────────────────────────────────────────────────────────────
const CONTENTS = [
  { href: "#fin-solutions", label: "Solutions" },
  { href: "#fin-benefits", label: "Benefits" },
  { href: "#fin-advanced", label: "Advanced tech" },
  { href: "#fin-industry", label: "Industry solutions" },
  { href: "#fin-security", label: "Security & compliance" },
  { href: "#fin-cases", label: "Case studies" },
  { href: "#fin-faq", label: "FAQ" },
  { href: "#fin-why", label: "Why Nexterse LLC" },
];

export default function FintechPage() {
  const [activeSolution, setActiveSolution] = useState(0);
  const [activeDualEngine, setActiveDualEngine] = useState(0);
  const [statsActive, setStatsActive] = useState(false);
  const statsRef = useRef<HTMLDivElement | null>(null);
  const dualEngine = DUAL_ENGINE[activeDualEngine];

  useEffect(() => {
    const node = statsRef.current;
    if (!node || statsActive) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [statsActive]);

  return (
    <>
      <FintechHero />

      <ArticleLayout contents={CONTENTS} ariaLabel="Fintech page contents">
        <AipocLogos />

        {/* ── Core fintech solutions (vertical tabs) ─────────────────────── */}
        <section id="fin-solutions" className={styles.blockLight}>
          <div className="container">
            <h2 className={styles.sectionTitle}>
              Core <span className={styles.accent}>fintech solutions</span> we develop
            </h2>
            <p className={styles.sectionDesc}>
              Our services cover custom fintech software development of systems that form the operational backbone of financial products, from transaction processing to compliance-driven workflows.
            </p>
            <div className={styles.vertTabsWrap}>
              <div className={styles.vertTabList} role="tablist" aria-label="Core fintech solutions">
                {SOLUTIONS.map((t, i) => (
                  <button
                    key={t.label}
                    role="tab"
                    aria-selected={activeSolution === i}
                    className={`${styles.vertTabBtn} ${activeSolution === i ? styles.vertTabBtnActive : ""}`}
                    onClick={() => setActiveSolution(i)}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
              <div className={styles.vertTabContent}>
                <h3 className={styles.vertTabTitle}>{SOLUTIONS[activeSolution].label}</h3>
                <p className={styles.vertTabDesc}>{SOLUTIONS[activeSolution].desc}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Dual-engine fintech engineering ────────────────────────────── */}
        <section className={styles.blockWhite}>
          <div className="container">
            <h2 className={styles.sectionTitle}>
              <span className={styles.accent}>Dual</span>-engine fintech engineering
            </h2>
            <p className={styles.sectionDesc}>
              Nexterse LLC operates as a Dual-Engine engineering firm. We develop systems that combine deterministic transaction execution and AI-driven decisioning within a single, controlled architecture. Every transaction and every decision follows defined logic, measurable outputs, and consistent system behavior.
            </p>
            <div className={styles.dualEngineTabs} role="tablist" aria-label="Dual-engine fintech engineering">
              {DUAL_ENGINE.map((engine, index) => (
                <button
                  key={engine.title}
                  type="button"
                  role="tab"
                  aria-selected={activeDualEngine === index}
                  className={`${styles.dualEngineTab}${activeDualEngine === index ? ` ${styles.dualEngineTabActive}` : ""}`}
                  onClick={() => setActiveDualEngine(index)}
                >
                  <Image src={engine.icon} alt="" width={56} height={56} className={styles.dualEngineIcon} />
                  <span>{engine.title}</span>
                </button>
              ))}
            </div>
            <div className={styles.dualEnginePanel} role="tabpanel">
              <h3 className={styles.dualEnginePanelTitle}>{dualEngine.title}</h3>
              {dualEngine.paragraphs.map((paragraph) => (
                <p key={paragraph} className={styles.dualEnginePanelText}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        {/* ── Benefits ───────────────────────────────────────────────────── */}
        <section id="fin-benefits" className={`${styles.blockLight} ${styles.benefitsOpen}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>
              <span className={styles.accent}>Benefits</span> fintech systems bring
            </h2>
            <p className={styles.sectionDesc}>
              We design and build fintech systems as structured, production-ready infrastructure. Each system is defined by its architecture, transaction logic, and integration model, enabling it to operate predictably under real financial workloads and regulatory requirements.
            </p>
            <div className={styles.benefitsGrid}>
              {BENEFITS.map((c) => (
                <div key={c.title} className={styles.benefitItem}>
                  <Image src={c.icon} alt={c.title} width={56} height={56} className={styles.benefitIcon} />
                  <h3 className={styles.benefitTitle}>{c.title}</h3>
                  <p className={styles.benefitDesc}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA: Unlock your Fintech vision ────────────────────────────── */}
        <div className={styles.inlineCta}>
          <div className="container">
            <div className={styles.inlineCtaInner}>
              <div>
                <h2 className={styles.inlineCtaTitle}>Unlock your Fintech vision.</h2>
                <p className={styles.inlineCtaDesc}>Start building the financial future you envision today.</p>
              </div>
              <a href="#get-modal-popup" className={`btn btn-accent ${styles.inlineCtaBtn}`}>Get in touch</a>
            </div>
          </div>
        </div>

        {/* ── Pilot and prove (process steps) ────────────────────────────── */}
        <section className={`${styles.blockWhite} ${styles.pilotProcessSection}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>
              <span className={styles.accent}>Pilot and prove</span> your fintech system in 4-6 weeks
            </h2>
            <p className={styles.sectionDesc}>
              We run a structured pilot phase that validates your fintech system under real operating conditions before full-scale development. Within 4-6 weeks, you receive a working system foundation, measured performance data, and clear cost visibility for production rollout.
            </p>
            <div className={styles.processGrid}>
              {PILOT_STEPS.map((step, i) => (
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

        {/* ── Advanced financial engineering ─────────────────────────────── */}
        <section id="fin-advanced" className={`${styles.blockWhite} ${styles.advancedEngineeringSection}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>
              <span className={styles.accent}>Advanced</span> financial engineering capabilities
            </h2>
            <p className={styles.sectionDesc}>
              We extend financial systems beyond transaction processing by embedding intelligence directly into operations. These capabilities function as controlled components within your architecture, expanding how data is processed, interpreted, and applied across the business.
            </p>
            <div className={styles.hcAudienceGrid}>
              {ADVANCED.map((c) => (
                <div key={c.title} className={styles.ecomServiceCard}>
                  <Image src={c.icon} alt={c.title} width={56} height={56} className={styles.ecomServiceIcon} />
                  <h3 className={styles.ecomServiceTitle}>{c.title}</h3>
                  {c.paragraphs.map((p) => (
                    <p key={p} className={styles.ecomServiceIntro}>{p}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Industry-specific fintech solutions ────────────────────────── */}
        <section id="fin-industry" className={`${styles.blockWhite} ${styles.finIndustrySection}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>
              <span className={styles.accent}>Industry</span>-specific fintech solutions
            </h2>
            <p className={styles.sectionDesc}>
              Our custom fintech software development is tailored to different financial business models. Each system is designed to match how transactions are processed, how decisions are applied, and how operations are structured within your organization.
            </p>
            <div className={styles.finIndustryGrid}>
              {INDUSTRIES.map((c) => (
                <div key={c.title} className={styles.finIndustryCard}>
                  <div className={styles.finIndustryCopy}>
                    <h3 className={styles.finIndustryTitle}>{c.title}</h3>
                    <p className={styles.finIndustryDesc}>{c.desc}</p>
                  </div>
                  <Image src={c.img} alt={c.title} width={300} height={200} className={styles.finIndustryImg} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA: Revolutionize your financial services ─────────────────── */}
        <div className={styles.inlineCta}>
          <div className="container">
            <div className={styles.inlineCtaInner}>
              <div>
                <h2 className={styles.inlineCtaTitle}>Revolutionize your financial services.</h2>
                <p className={styles.inlineCtaDesc}>Get a free consultation to transform your operations.</p>
              </div>
              <a href="#get-modal-popup" className={`btn btn-accent ${styles.inlineCtaBtn}`}>Book a call</a>
            </div>
          </div>
        </div>

        {/* ── Security and compliance by architecture ────────────────────── */}
        <section id="fin-security" className={`${styles.blockWhite} ${styles.securityOpenSection}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>
              <span className={styles.accent}>Security</span> and compliance by architecture
            </h2>
            <p className={styles.sectionDesc}>
              Security and compliance are embedded directly into how your fintech system is designed and built. We engineer architectures where data access, transaction control, and system behavior are governed at every level. AI-driven decision flows operate within defined data boundaries and access control rules. Each model follows the same governance structure as transaction systems, ensuring consistent behavior aligned with your security policies and regulatory requirements.
            </p>
            <div className={styles.securityOpenGrid}>
              {SECURITY.map((c) => (
                <div key={c.title} className={styles.securityOpenItem}>
                  <Image src={c.icon} alt={c.title} width={56} height={56} className={styles.securityOpenIcon} />
                  <h3 className={styles.securityOpenTitle}>{c.title}</h3>
                  {c.paragraphs.map((p) => (
                    <p key={p} className={styles.securityOpenText}>{p}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Integration with the financial ecosystem ───────────────────── */}
        <section className={`${styles.blockLight} ${styles.finIntegrationSection}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>
              <span className={styles.accent}>Integration</span> with the financial ecosystem
            </h2>
            <div className={styles.finSplit}>
              <div className={styles.finSplitText}>
                <p>
                  We integrate your fintech system into the infrastructure your business already operates, ensuring consistent data flow, controlled execution, and predictable system behavior. Each integration is designed as part of the overall architecture, so every system communicates through clearly defined interfaces and operates within governed boundaries.
                </p>
                <p>
                  AI models and decision systems operate across integrated data flows, applying logic consistently as transactions move between internal systems, external providers, and financial networks.
                </p>
                <ul className={styles.ecomBullets}>
                  {INTEGRATIONS.map((i) => <li key={i}>{i}</li>)}
                </ul>
              </div>
              <Image
                src="/esd/data-readiness.jpg"
                alt="Integration with the financial ecosystem"
                width={683}
                height={1024}
                className={styles.finSplitImg}
              />
            </div>
          </div>
        </section>

        {/* ── Success stories → Case studies ─────────────────────────────── */}
        <div id="fin-cases">
          <CaseCards
            heading={<>Success stories of our <span>Clients</span></>}
            windowed
          />
        </div>

        {/* ── Reviews ────────────────────────────────────────────────────── */}
        <ServicesReviewSlider primary="software" count={6} secondaryCount={1} lead={["Sharon Nouh"]} />

        {/* ── Awards & Recognitions ──────────────────────────────────────── */}
        <ServicesAchievements badges={FIN_BADGES} />

        {/* ── FAQ ────────────────────────────────────────────────────────── */}
        <div id="fin-faq">
          <ServicesFaqBlock items={FIN_FAQ} />
        </div>

        {/* ── CTA: Streamline your finances ──────────────────────────────── */}
        <div className={styles.inlineCta}>
          <div className="container">
            <div className={styles.inlineCtaInner}>
              <div>
                <h2 className={styles.inlineCtaTitle}>Streamline your finances and operations.</h2>
                <p className={styles.inlineCtaDesc}>Discover custom fintech solutions that boost your ROI.</p>
              </div>
              <a href="#get-modal-popup" className={`btn btn-accent ${styles.inlineCtaBtn}`}>Book a consultation</a>
            </div>
          </div>
        </div>

        {/* ── Why Clients trust Nexterse ─────────────────────────────────── */}
        <section id="fin-why" className={`${styles.blockLight} ${styles.finWhySection}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>
              <span className={styles.accent}>Why</span> Clients trust Nexterse LLC with fintech development
            </h2>
            <p className={styles.sectionDesc}>
              We design and deliver fintech solutions where transaction infrastructure and AI operate as one controlled architecture.
            </p>
            <div className={styles.hcAudienceGrid}>
              {WHY_CARDS.map((c) => (
                <div key={c.title} className={styles.ecomServiceCard}>
                  <h3 className={styles.ecomServiceTitle}>{c.title}</h3>
                  <ul className={styles.ecomBullets}>
                    {c.bullets.map((b) => <li key={b}>{b}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── What never changes (dark) ──────────────────────────────────── */}
        <section className={`${styles.blockDark} ${styles.neverChangesSection}`}>
          <div className="container">
            <h2 className={styles.sectionTitleWhite}>
              What <span className={styles.accent}>never</span> changes in our services
            </h2>
            <p className={styles.sectionDescWhite}>
              While cooperation models adapt to your needs, the principles behind delivery remain consistent.
            </p>
            <div className={styles.hcAudienceGrid}>
              {NEVER_CHANGES.map((c) => (
                <div key={c.title} className={styles.solutionCard}>
                  <Image src={c.icon} alt={c.title} width={56} height={56} className={styles.ecomServiceIcon} />
                  <h3 className={styles.solutionCardTitle}>{c.title}</h3>
                  {c.paragraphs.map((p) => (
                    <p key={p} className={styles.solutionCardIntro}>{p}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Quick facts ────────────────────────────────────────────────── */}
        <section className={`${styles.blockWhite} ${styles.finStatsSection}`}>
          <div className="container">
            <div ref={statsRef} className={styles.finStats}>
              {QUICK_FACTS.map((f) => {
                const stat = splitStatValue(f.num);

                return (
                <div key={f.label} className={styles.finStat}>
                  <div className={styles.finStatNum}>
                    <AnimatedStatNumber value={stat.value} suffix={stat.suffix} active={statsActive} />
                  </div>
                  <div className={styles.finStatLabel}>{f.label}</div>
                </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Awesome stories (blog) ─────────────────────────────────────── */}
        <AwesomeStories category="enterprise" />

        {/* ── Let's Start ────────────────────────────────────────────────── */}
        <LetsStart />

        {/* ── Cross-links ────────────────────────────────────────────────── */}
        <section className={styles.clSection}>
          <div className={styles.clBg} />
          <div className="container">
            <h2 className={styles.clTitle}>More about <span className={styles.accent}>Nexterse LLC</span></h2>
            <div className={styles.clGrid}>
              {CROSSLINKS.map((col) => (
                <div key={col.heading}>
                  <p className={styles.clColTitle}>{col.heading}</p>
                  <ul className={styles.clList}>
                    {col.links.map((link) => (
                      <li key={link.last + link.text} className={styles.clItem}>
                        <a href={link.href} className={styles.clLink}>
                          {link.text}
                          <span className={styles.clLinkLast}>
                            {link.last}
                            <span className={styles.clArrow} />
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ArticleLayout>
    </>
  );
}
