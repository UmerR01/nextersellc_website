"use client";

import { useState } from "react";
import Image from "next/image";
import CaseCards, { type CaseCard } from "@/components/home/CaseCards";
import ServicesReviewSlider from "@/components/services/ServicesReviewSlider";
import ServicesAchievements, { type Badge } from "@/components/services/ServicesAchievements";
import ServicesFaqBlock, { type FaqItem } from "@/components/services/ServicesFaqBlock";
import LetsStart from "@/components/home/LetsStart";
import AdlcBlog, { type AdlcFeaturedPost, type AdlcBlogPost } from "@/components/adlc/AdlcBlog";
import AisoftHero from "./AisoftHero";
import AisoftLogos from "./AisoftLogos";
import AisoftTechStack from "./AisoftTechStack";
import AisoftCitation from "./AisoftCitation";
import AisoftCrosslinks from "./AisoftCrosslinks";
import AisoftArticleLayout from "./AisoftArticleLayout";
import styles from "./AisoftPage.module.css";

// ─── ROI tiers (horizontal tabs with image) ──────────────────────────────────
type Tier = {
  icon: string;
  label: string;
  paragraphs: string[];
  bullets?: string[];
  linkText?: string;
  linkHref?: string;
  image: string;
};
const TIERS: Tier[] = [
  {
    icon: "/aisoft-development/03_AI-generative-AI-readiness-assessment-01.svg",
    label: "Tier 1: AI readiness & consulting",
    paragraphs: [
      "We pressure-test your business goals before you spend a dollar on development. Before we build anything, we check whether AI actually pays off for your specific use case.",
      "We audit:",
    ],
    bullets: [
      "Data availability and quality.",
      "Infrastructure and integration constraints.",
      "Security and compliance exposure.",
      "Operational workflow impact.",
      "Projected token consumption and cloud costs.",
    ],
    linkText: "AI Readiness Assessment",
    linkHref: "/services/ai-software-development",
    image: "/aisoft-development/07_software-development-team-in-the-office-1024x683.jpg",
  },
  {
    icon: "/aisoft-development/03_RAG-as-a-Service-01.svg",
    label: "Tier 2: RAG systems & copilots",
    paragraphs: [
      "We connect AI securely to your own business knowledge. This is where most companies start production AI. We build retrieval-augmented generation (RAG) systems and copilots that tap your internal documents, ERP, CRM, and knowledge bases.",
      "They run inside isolated cloud infrastructure (VPC), answer only from verified sources, cite where each answer came from, and enforce role-based access at the data layer. This tier turns static knowledge into working intelligence, and it never trains public models on your data.",
    ],
    linkText: "RAG as a Service",
    linkHref: "/services/ai-software-development",
    image: "/aisoft-development/11_aws-features-1024x684.jpg",
  },
  {
    icon: "/aisoft-development/03_Workflow-fit-02.svg",
    label: "Tier 3: Agentic workflows",
    paragraphs: [
      "This tier is for companies ready to automate complex processes that cross departments. Once AI stops just answering questions and starts running workflows, orchestration becomes the hard part.",
      "We govern each workflow with evaluation pipelines, adversarial testing, and cost simulations before it goes live. The multi-agent systems we design retrieve data, reason over your business rules, call APIs, trigger downstream actions, and hand off to a human whenever confidence drops too low.",
    ],
    linkText: "AI Agents Development",
    linkHref: "/services/ai-software-development",
    image: "/aisoft-development/11_gains-of-the-cloud-1024x684.jpg",
  },
  {
    icon: "/aisoft-development/03_Custom-AI-App-Development-2.svg",
    label: "Tier 4: Custom AI models development",
    paragraphs: [
      "This tier usually suits organizations that process large volumes of data or work under heavy regulation. For them, we design and deploy private model strategies.",
      "That includes fine-tuning small and large language models (SLMs and LLMs), adapting them to your domain, hosting them privately on AWS, Azure, or on-premise, routing between models, and optimizing token costs.",
    ],
    image: "/aisoft-development/07_software-development-team-1024x683.jpg",
  },
];

// ─── Pilot & Prove program (2 cards) ─────────────────────────────────────────
const PILOT: { title: string; paragraphs: string[]; bullets?: string[]; outro?: string }[] = [
  {
    title: "What we build",
    paragraphs: [
      "Inside an isolated cloud sandbox (VPC), we connect AI to your internal systems through secure middleware and set role-based access controls at the retrieval level.",
      "We configure a deterministic RAG architecture so every response is grounded in a real source, set benchmarks for accuracy and consistency, simulate real user workflows, and project your monthly token consumption under realistic load.",
      "You get to see how the system performs under real operating conditions.",
    ],
  },
  {
    title: "What you get",
    paragraphs: ["At the end of the pilot & prove phase, you walk away with:"],
    bullets: [
      "a validated architecture blueprint",
      "documented security and governance controls",
      "measured retrieval accuracy and response benchmarks",
      "a production token-consumption forecast",
      "a rollout roadmap with cost projections",
      "a clear investment model for scaling.",
    ],
    outro: "Your leadership team can judge the initiative on hard data, projected costs, and measurable outcomes.",
  },
];

// ─── Cases (5, clone content) ─────────────────────────────────────────────────
const AIS_CASES: CaseCard[] = [
  {
    banner: "/aisoft-development/11_Cover-1-1.png",
    name: "AI-powered stack",
    title: "AI-powered predictive maintenance for a large industrial manufacturer",
    text: "An AIoT upgrade that cut unplanned downtime by 50% within 8 months, adding explainable ML and context analysis to the existing IoT platform.",
    href: "/portfolio/ai-powered-predictive-maintenance-for-a-large-industrial-manufacturer",
    tags: ["IoT", "AI inside", "Enterprise"],
  },
  {
    banner: "/aisoft-development/07_Cover-right-2.png",
    name: "AI-powered stack",
    title: "AI-powered knowledge base for a global rights nonprofit",
    text: "A Middle Eastern nonprofit working in cultural preservation needed a single searchable repository for fragmented research on ethnic minorities. Nexterse LLC built a multilingual AI platform that now indexes 12,000+ artifacts across 18 countries.",
    href: "/portfolio/ai-knowledge-base-development",
    tags: ["AI inside", "Enterprise"],
  },
  {
    banner: "/aisoft-development/10_Cover-1-1.png",
    name: "AI-powered stack",
    title: "AI/ML route optimization for a freight delivery service",
    text: "Lifted on-time delivery to 98% – without expanding the fleet. An AI/ML platform that plans and reoptimizes B2B/B2C routes in real time with traffic, weather, and capacity constraints, cutting last-mile costs by 22%.",
    href: "/portfolio/ai-ml-route-optimization-for-a-freight-delivery-service",
    tags: ["AI inside", "Enterprise"],
  },
  {
    banner: "/aisoft-development/10_Cover-2-1.png",
    name: "AI-powered stack",
    title: "AI patient-flow platform for dental imaging",
    text: "A HIPAA-aligned AI platform for a dental imaging provider that reduced wait times by 37%, increased daily throughput by 22%, and lowered no-shows by 29%.",
    href: "/portfolio/hipaa-compliant-ai-powered-patient-management-platform-for-a-dental-imaging-provider",
    tags: ["AI inside", "Enterprise"],
  },
  {
    banner: "/aisoft-development/12_Cover-2-1.png",
    name: "AI-powered stack",
    title: "IoT and ML predictive maintenance for a 28-turbine wind farm",
    text: "A German operator runs 28 onshore turbines. Nexterse LLC built a predictive maintenance layer on top of the existing SCADA. Within 12 months, unplanned downtime fell by 38%, and availability rose to 97.7%.",
    href: "/portfolio/ml-based-predictive-maintenance-for-wind-farm",
    tags: ["IoT", "AI inside", "Enterprise"],
  },
];

// ─── Pragmatic guarantees (3 icon cards) ──────────────────────────────────────
const GUARANTEES = [
  {
    icon: "/aisoft-development/03_LLM-directly-to-your-core-database-02.svg",
    title: "We will NOT bolt an LLM directly to your core database.",
    desc: "We design secure middleware and API abstraction layers that shield your legacy systems from instability, latency, and injection attacks.",
  },
  {
    icon: "/aisoft-development/03_your-proprietary-data-to-train-public-models-02.svg",
    title: "We will NOT use your proprietary data to train public models.",
    desc: "Your data stays inside your own controlled infrastructure. We deploy AI in secure, isolated cloud (VPC) environments with strict access controls and full auditability.",
  },
  {
    icon: "/aisoft-development/03_AI-where-it-does-not-create-business-value-02.svg",
    title: "We will NOT push AI where it does not create business value.",
    desc: "If a deterministic, traditional build gets you the result faster and cheaper, that is what we recommend. We are dual-engine engineers. We build AI that earns a return and structured software that keeps things stable.",
  },
];

// ─── SDLC vs ADLC (2 link cards) ──────────────────────────────────────────────
const SDLC = [
  {
    title: "Traditional Agile SDLC",
    desc: "For over a decade we’ve built enterprise software across industries, wiring complex systems together, modernizing legacy platforms, and shipping solutions that hold up under real operational load. We know how production systems behave, how business logic shifts over time, and how to engineer software that stays maintainable years later. That experience is the foundation under everything we build.",
    linkText: "SDLC",
    href: "/adlc",
  },
  {
    title: "Agentic development lifecycle (ADLC)",
    desc: "Modern AI is a core discipline for us, not a bolt-on. We design and ship intelligent systems, including RAG architectures, copilots, and autonomous agents, with the same rigor we bring to classic software. For us AI isn’t a demo. It’s a production-ready capability we fit carefully into a real business.",
    linkText: "ADLC",
    href: "/adlc",
  },
];

// ─── ADLC 5 phases (dark process) ─────────────────────────────────────────────
const ADLC = [
  {
    title: "Phase 1 – business hypothesis and data mapping",
    text: "We define the business goal before we pick a single model. Together we pin down the workflow you want to improve, the outcome you’ll measure it against, and the decision the AI will support. Then we map your data. We find where the knowledge lives, how it moves between teams, and where we’ll need to connect structured and unstructured sources. From day one, the system aims at a target you’ve defined.",
  },
  {
    title: "Phase 2 – guardrail framing and architecture design",
    text: "A probabilistic system needs hard boundaries, which we call guardrails. We decide which sources it can draw on, how it reaches your data, who is allowed to see what, and when it should refuse to answer at all. These rules aren’t bolted on afterward. We build them into the architecture itself, and it plugs into your ERP, CRM, data warehouses, and internal tools, with full logging and an audit trail throughout.",
  },
  {
    title: "Phase 3 – continuous evaluation and release gating",
    text: "We measure how the system behaves before anyone outside the test group touches it. Our evaluation pipelines, including frameworks built for retrieval-augmented generation (RAG), check whether answers stay faithful to the source, whether retrieval lands on the right material, and whether the system responds consistently and accurately against the thresholds we set. Nothing scales until the numbers clear the bar.",
  },
  {
    title: "Phase 4 – adversarial testing and production validation",
    text: "Production brings scale, simultaneous users, and edge cases the test environment never sees. To stay ahead of them, we attack the system on purpose, red-teaming it and simulating prompt-injection attempts to find where it breaks. We confirm it holds up under load, that each interaction costs what we projected, that it doesn’t disrupt neighboring systems, and that it behaves predictably no matter how users phrase their requests. Only once it proves reliable under real conditions does it move to production.",
  },
  {
    title: "Phase 5 – operational governance and continuous optimization",
    text: "Going live doesn’t end the oversight. We keep watching answer quality, how current the data stays, how people actually use the system, and what it costs to run. When we adjust it, we document every change and tie it back to where your business is headed. The system improves on purpose, and you can measure that improvement.",
  },
];

// ─── Security (vertical tabs) ─────────────────────────────────────────────────
const SECURITY = [
  {
    title: "Infrastructure-level security",
    desc: "We deploy AI inside your own controlled cloud, AWS or Azure, using private networking, isolated workloads, and encrypted data flows. Access runs on fine-grained, role-based permissions that match your internal policies.",
  },
  {
    title: "Data governance by design",
    desc: "We decide how data is taken in, processed, stored, and accessed before any model integration starts. The system can redact or mask sensitive information automatically, and it enforces access policies at both the application and retrieval levels.",
  },
  {
    title: "Compliance alignment",
    desc: "Our delivery processes follow ISO 27001 and support regulations such as GDPR and the EU AI Act where they apply. We build documentation, audit trails, and model-lifecycle transparency into the development process itself.",
  },
  {
    title: "Operational oversight",
    desc: "We build in monitoring, logging, and performance tracking from day one, so you can trace model outputs, system behavior, and infrastructure usage across every environment.",
  },
];

// ─── Industries (8 cards, icon + bullets + link) ──────────────────────────────
const INDUSTRIES: { icon: string; title: string; bullets: string[]; linkText?: string; href: string }[] = [
  {
    icon: "/aisoft-development/11_Banking-Finance.png",
    title: "Banking and finance",
    bullets: ["trading solutions", "advisory services", "customer service automation", "personalization solutions", "pattern recognition and fraud prevention"],
    linkText: "AI in fintech",
    href: "/services/fintech-development",
  },
  {
    icon: "/aisoft-development/11_Marketing-automation.png",
    title: "Sales & marketing",
    bullets: ["predictive and prescriptive analytics", "content curation solutions", "AI and machine learning-enabled attribution", "cross-channels personalized interactions", "personalized and scaling messaging"],
    linkText: "AI in adtech",
    href: "/services/adtech-development",
  },
  {
    icon: "/aisoft-development/11_Vector-1.png",
    title: "Healthcare",
    bullets: ["nursing assistants development", "AI-assisted consultation, diagnosis & treatment", "managing medical records and other data", "health monitoring", "healthcare system analysis"],
    linkText: "AI in healthcare",
    href: "/services/healthcare-software-development",
  },
  {
    icon: "/aisoft-development/11_Education.png",
    title: "Education",
    bullets: ["differentiated and individualized learning", "AI tutoring", "smart content", "global learning", "automation of admin tasks"],
    linkText: "AI in education",
    href: "/services/edtech-development",
  },
  {
    icon: "/aisoft-development/03_Logistics-and-Transportation.svg",
    title: "Logistics & Transportation",
    bullets: ["AI-driven route optimization", "predictive fleet maintenance", "intelligent demand forecasting", "real-time tracking and visibility", "automated logistics management"],
    linkText: "AI in logistics",
    href: "/services",
  },
  {
    icon: "/aisoft-development/03_Retail.svg",
    title: "Retail",
    bullets: ["personalized product recommendations", "inventory forecasting and management", "dynamic pricing optimization", "customer behavior analytics", "AI-powered virtual assistants and chatbots"],
    href: "/services",
  },
  {
    icon: "/aisoft-development/03_Manufacturing.svg",
    title: "Manufacturing",
    bullets: ["predictive maintenance and asset optimization", "AI-powered quality inspection and defect detection", "robotic process automation (RPA)", "supply-chain forecasting and planning", "automated quality assurance"],
    href: "/services",
  },
  {
    icon: "/aisoft-development/11_eCommerce-cart-1-1.png",
    title: "Ecommerce",
    bullets: ["AI-assisted search", "speech recognition services", "relevant offers for buyers", "virtual agents and intelligent automation tools", "personalized shopping experience"],
    href: "/services",
  },
];

// ─── Data privacy (5 icon cards) ──────────────────────────────────────────────
const PRIVACY = [
  {
    icon: "/aisoft-development/03_VPC-isolated-deployment-architecture-3.svg",
    title: "VPC-isolated deployment architecture",
    desc: "Your AI runs inside your own cloud, AWS or Azure, walled off with VPC isolation, private subnets, security groups, and IAM policies. The models live inside your security perimeter and reach your internal systems through controlled middleware, never by touching your database directly.",
  },
  {
    icon: "/aisoft-development/03_Vector-level-role-based-access-control-03.svg",
    title: "Vector-level role-based access control (RBAC)",
    desc: "We control access at the retrieval layer. Role- and attribute-based rules (RBAC and ABAC) mean a user can only pull the data they’re cleared to see, and we check those permissions before the system retrieves anything or writes a word.",
  },
  {
    icon: "/aisoft-development/03_Automated-PII-redaction-pipeline-01.svg",
    title: "Automated PII redaction pipeline",
    desc: "Before any sensitive data gets indexed or reaches a model, it runs through an automated pipeline that finds and redacts personal information (PII). We use entity recognition, masking, and tokenization to keep protected data out of layers it was never meant to reach.",
  },
  {
    icon: "/aisoft-development/03_Private-model-invocation-and-secure-API-mediation-01.svg",
    title: "Private model invocation and secure API mediation",
    desc: "We reach foundation models either through secure API gateways or through private endpoints we deploy for you. Every call is logged and rate-limited, and middleware inside your own infrastructure governs all of it.",
  },
  {
    icon: "/aisoft-development/03_Audit-logging-and-access-traceability-02.svg",
    title: "Audit logging and access traceability",
    desc: "We log every interaction, each retrieval, each generated answer, and each system call, so you can trace any of them later. The audit trail gives you operational transparency and the records your compliance team needs.",
  },
];

// ─── Awards (clone badges, 15) ────────────────────────────────────────────────
const AIS_BADGES: Badge[] = [
  { src: "/aisoft-development/05_top_clutch.co_artificial_intelligence_company_boston_2026-2.svg", alt: "Clutch 2026 — Top Artificial Intelligence Company in Boston" },
  { src: "/aisoft-development/05_top_clutch.co_generative_ai_company_boston_2026-2.svg", alt: "Clutch 2026 — Top Generative AI Company in Boston" },
  { src: "/aisoft-development/06_top-ai-development-companies.svg", alt: "GoodFirms — Top AI Development Company" },
  { src: "/aisoft-development/06_techreviewer_badge_2026-01.svg", alt: "techreviewer.co 2026 — Top AI Consulting Companies" },
  { src: "/aisoft-development/06_techreviewer_badge_2026-04.svg", alt: "techreviewer.co 2026 — Top AI Software Development Companies" },
  { src: "/aisoft-development/06_techreviewer_badge_2026-16.svg", alt: "techreviewer.co 2026 — Top AI Integration Companies" },
  { src: "/aisoft-development/05_top_clutch.co_machine_learning_company_boston_2026-2.svg", alt: "Clutch 2026 — Top Machine Learning Company in Boston" },
  { src: "/aisoft-development/05_top_clutch.co_voice_and_speech_recognition_company_boston_2026-2.svg", alt: "Clutch 2026 — Top Voice and Speech Recognition Company in Boston" },
  { src: "/aisoft-development/05_top_clutch.co_robotics_company_boston_2026-2.svg", alt: "Clutch 2026 — Top Robotics Company in Boston" },
  { src: "/aisoft-development/06_techreviewer_badge_2026-03.svg", alt: "techreviewer.co 2026 — Top AI PoC Development Companies" },
  { src: "/aisoft-development/06_techreviewer_badge_2026-05.svg", alt: "techreviewer.co 2026 — Top AI Agents Development Companies" },
  { src: "/aisoft-development/06_techreviewer_badge_2026-06.svg", alt: "techreviewer.co 2026 — Top RAG Development Companies" },
  { src: "/aisoft-development/06_techreviewer_badge_2026-07.svg", alt: "techreviewer.co 2026 — Top LLM Development Companies" },
  { src: "/aisoft-development/06_techreviewer_badge_2026-11.svg", alt: "techreviewer.co 2026 — Top Machine Learning Development Companies" },
  { src: "/aisoft-development/06_techreviewer_badge_2026-15.svg", alt: "techreviewer.co 2026 — Top GenAI Development Companies" },
];

// ─── FAQ (clone content, 8) ───────────────────────────────────────────────────
const AIS_FAQ: FaqItem[] = [
  { question: "How much does enterprise AI development cost?", answer: "Cost depends on scope, data readiness, and how many systems the AI connects to. As a general guide, a proof-of-concept or pilot runs in the low-to-mid five figures. A full production build usually falls between roughly $100,000 and $400,000+, set by model complexity, integrations, and compliance scope. Ongoing monitoring and retraining add about 15–20% of the build cost per year. Our 4–6 week pilot puts a firm cost boundary around the work before you commit to production, including projected cloud and token spend." },
  { question: "How long does it take to move from idea to production?", answer: "A pilot can be delivered in four to six weeks. A production build follows once the pilot validates feasibility. It usually takes three to nine months, set by how many systems it connects to and how ready your data is. Data readiness is the biggest variable, and we surface it during the pilot rather than mid-build." },
  { question: "Will our proprietary data be used to train public AI models?", answer: "No. Enterprise deployments run inside private infrastructure. Your data stays isolated and never trains external foundation models." },
  { question: "Can AI integrate with our legacy systems?", answer: "Yes, and it’s most of what we do. We connect models to your existing systems through secure middleware and APIs. The AI reads and writes through a controlled layer instead of touching your database directly. We’ve modernized and integrated legacy platforms for 14+ years, which is what makes the AI layer safe to add." },
  { question: "How do you ensure model quality and reliability?", answer: "We evaluate every AI system against defined performance metrics before release, then keep quality steady over time through continuous monitoring, structured testing, and controlled iteration." },
  { question: "What is the difference between standard software development and AI development?", answer: "Traditional software follows deterministic logic. AI systems work probabilistically, so they need structured evaluation, guardrails, and monitoring to stay reliable. Building production-grade AI takes both disciplines together." },
  { question: "Do we have to use AI if we only need a standard application?", answer: "No. Your business objectives drive the architecture. If a conventional build gives you better efficiency and predictability, that’s what we recommend." },
  { question: "How do you keep cloud and token costs under control?", answer: "We model expected usage during the pilot, then design around it. That means model selection, prompt optimization, caching, and routing simpler tasks to cheaper models. You see a projected monthly cost before production." },
];

// ─── Awesome stories (blog) ───────────────────────────────────────────────────
const AIS_BLOG_FEATURED: AdlcFeaturedPost = {
  href: "/blog/eu-ai-act-custom-ai-development",
  title: "The EU AI Act: How It Changes AI development and What It Means for Custom AI",
  image: "/aisoft-development/07_Figure-6-in-force-vs-coming.svg",
  imageAlt: "The EU AI Act — in force vs coming",
  readTime: "25 mins",
  date: "July 9, 2026",
};
const AIS_BLOG_SIDE: AdlcBlogPost[] = [
  { href: "/blog/questions-to-ask-ai-development-company", title: "10 questions to Ask an AI Development Company before Signing", readTime: "18 mins", date: "July 7, 2026" },
  { href: "/blog/agentic-rag-enterprise-implementation-guide", title: "Agentic RAG: The Complete Enterprise Implementation Guide for 2026", readTime: "35 mins", date: "July 3, 2026" },
  { href: "/blog/ai-cost-reduction-playbook", title: "The AI Cost Reduction Playbook – 9 Mechanisms, 7 Hidden Drivers, and Real-World Case Studies (2026 Edition)", readTime: "32 mins", date: "July 1, 2026" },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function AisoftPage() {
  const [activeTier, setActiveTier] = useState(0);
  const [activeSec, setActiveSec] = useState(0);
  const tier = TIERS[activeTier];

  return (
    <>
      <AisoftHero />

      <AisoftArticleLayout>
        <AisoftLogos />
        {/* ── ROI tiers (horizontal tabs) ────────────────────────────────── */}
        <section id="ai-tiers" className={styles.serviceBlock}>
          <div className="container">
            <h2 className={styles.svcTitle}>
              What AI services does <span className={styles.accent}>Nexterse LLC</span> offer, by ROI tier?
            </h2>
            <p className={styles.svcDesc}>
              The right AI tier depends on where you stand today: your budget, how ready your data is, your compliance exposure, and how complex your operations are. We organize AI work into these tiers and weigh the risk, the return, and whether each step is feasible in production.
            </p>
            <div className={styles.tabsWrap}>
              <div className={styles.tabsNav} role="tablist" aria-label="AI service tiers">
                {TIERS.map((t, i) => (
                  <button
                    key={t.label}
                    role="tab"
                    aria-selected={activeTier === i}
                    className={`${styles.tabBtn} ${activeTier === i ? styles.tabBtnActive : ""}`}
                    onClick={() => setActiveTier(i)}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={t.icon} alt="" className={styles.tabIcon} />
                    <span>{t.label}</span>
                  </button>
                ))}
              </div>
              <div className={styles.tabPanelActive}>
                <div className={styles.tabPanelContent}>
                  <h3 className={styles.tabPanelTitle}>{tier.label}</h3>
                  {tier.paragraphs.map((p) => (
                    <p key={p} className={styles.tabPanelDesc}>{p}</p>
                  ))}
                  {tier.bullets && (
                    <ul className={styles.tabBullets}>
                      {tier.bullets.map((b) => <li key={b}>{b}</li>)}
                    </ul>
                  )}
                  {tier.linkText && tier.linkHref && (
                    <a href={tier.linkHref} className={styles.tabPanelLink}>{tier.linkText} →</a>
                  )}
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={tier.image} alt={tier.label} className={styles.tabPanelImg} />
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA: AI that delivers business value ────────────────────────── */}
        <div className={styles.inlineCta}>
          <div className="container">
            <div className={styles.inlineCtaInner}>
              <div>
                <h2 className={styles.inlineCtaTitle}>AI that delivers business value</h2>
                <p className={styles.inlineCtaDesc}>Contact us and get a roadmap tailored to your needs.</p>
              </div>
              <a href="#get-modal-popup" className={styles.inlineCtaBtn}>Get an AI project estimate</a>
            </div>
          </div>
        </div>

        {/* ── Pilot & Prove program (2 cards) ─────────────────────────────── */}
        <section id="ai-pilot" className={`${styles.blockLight} ${styles.pilotBlock}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>What is the AI pilot &amp; prove program?</h2>
            <p className={styles.sectionDesc}>
              Our <span className={styles.accent}>pilot &amp; prove program</span> is a structured 4-6 week engagement that tests three things before full deployment: whether the system works technically, whether your operations are ready for it, and whether it makes economic sense. Rather than experiment in a vacuum, we build a secure, production-realistic environment using a controlled slice of your real data and infrastructure.
            </p>
            <div className={styles.twoColCards}>
              {PILOT.map((c) => (
                <div key={c.title} className={styles.ecomServiceCard}>
                  <h3 className={styles.ecomServiceTitle}>{c.title}</h3>
                  {c.paragraphs.map((p) => <p key={p} className={styles.ecomServiceIntro}>{p}</p>)}
                  {c.bullets && (
                    <ul className={styles.ecomBullets}>
                      {c.bullets.map((b) => <li key={b}>{b}</li>)}
                    </ul>
                  )}
                  {c.outro && <p className={styles.ecomServiceIntro}>{c.outro}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Cases + Reviews ─────────────────────────────────────────────── */}
        <div id="ai-cases">
          <CaseCards
            heading={<>What AI has <span>Nexterse LLC</span> built?</>}
            cards={AIS_CASES}
            windowed
          />
        </div>
        <ServicesReviewSlider />

        {/* ── Pragmatic guarantees (3 icon cards) ─────────────────────────── */}
        <section id="ai-guarantees" className={`${styles.blockWhite} ${styles.guaranteesBlock}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Why Nexterse LLC: our pragmatic guarantees</h2>
            <p className={styles.sectionDesc}>
              We bring engineering discipline and commercial sense to every engagement. We don’t treat AI as a cure-all. We look at your architecture, your data, your risk, and your costs first. Then we tell you where AI belongs and, just as honestly, where it doesn’t.
            </p>
            <div className={styles.ecomServicesGrid}>
              {GUARANTEES.map((c) => (
                <div key={c.title} className={styles.ecomServiceCard}>
                  <Image src={c.icon} alt={c.title} width={56} height={56} className={styles.ecomServiceIcon} />
                  <h3 className={styles.ecomServiceTitle}>{c.title}</h3>
                  <p className={styles.ecomServiceIntro}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SDLC vs ADLC (2 link cards) ─────────────────────────────────── */}
        <section id="ai-sdlc" className={`${styles.blockLight} ${styles.sdlcBlock}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Can you add AI to our legacy systems?</h2>
            <p className={styles.sectionDesc}>
              AI works best on top of solid software, not in place of it. We take the systems you’ve built up over the years and add an intelligent layer on top, without tearing out what already works. We can do this because we’ve shipped traditional software for over 14 years. That makes us a dual-engine firm, with classic engineering and modern AI under one roof.
            </p>
            <div className={styles.twoColCards}>
              {SDLC.map((c) => (
                <a key={c.title} href={c.href} className={`${styles.ecomServiceCard} ${styles.sdlcLinkCard}`}>
                  <h3 className={styles.ecomServiceTitle}>{c.title}</h3>
                  <p className={styles.ecomServiceIntro}>{c.desc}</p>
                  <span className={styles.sdlcCardLink}>{c.linkText}<span className={styles.sdlcArrow} aria-hidden="true" /></span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── ADLC (dark process, 5 phases) ───────────────────────────────── */}
        <section id="ai-adlc" className={styles.processBlock}>
          <div className="container">
            <h2 className={styles.sectionTitleWhite}>
              How does Nexterse LLC engineer production AI? (ADLC)
            </h2>
            <p className={styles.sectionDescWhite}>
              Traditional software follows deterministic logic: meet a condition, and a predefined action runs. AI systems work differently. They generate responses from probability, context, and learned patterns. That difference calls for its own engineering discipline, the agentic development lifecycle (ADLC).
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

        {/* ── Security (vertical tabs) ────────────────────────────────────── */}
        <section id="ai-security" className={`${styles.blockLight} ${styles.securityTabsBlock}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>How does Nexterse LLC secure enterprise AI?</h2>
            <p className={styles.sectionDesc}>
              AI systems have to run inside clear technical, legal, and operational boundaries. We build those boundaries straight into the architecture rather than adding them later.
            </p>
            <div className={styles.engVertTabsWrap}>
              <div className={styles.engVertTabContent}>
                <h3 className={styles.engVertTabTitle}>{SECURITY[activeSec].title}</h3>
                <p className={styles.engVertTabDesc}>{SECURITY[activeSec].desc}</p>
              </div>
              <div className={styles.engVertTabList} role="tablist" aria-label="Enterprise AI security">
                {SECURITY.map((t, i) => (
                  <button
                    key={t.title}
                    role="tab"
                    aria-selected={activeSec === i}
                    className={`${styles.engVertTabBtn} ${activeSec === i ? styles.engVertTabBtnActive : ""}`}
                    onClick={() => setActiveSec(i)}
                  >
                    {t.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Industries (8 cards) ────────────────────────────────────────── */}
        <section id="ai-industries" className={styles.industriesBlock}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Which industries does Nexterse LLC <span className={styles.accent}>build AI for?</span></h2>
            <p className={styles.sectionDesc}>
              We’ve delivered AI development across more than 20 industries, building custom, industry-specific software for both new and established businesses. Our work spans big-data analysis, AI development, and machine learning, and we’ve already created value for more than 350 companies worldwide.
            </p>
            <div className={styles.industryGrid}>
              {INDUSTRIES.map((c) => (
                <a key={c.title} href={c.href} className={styles.industryCard}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.icon} alt="" className={styles.industryCardIcon} />
                  <h3 className={styles.industryCardTitle}>{c.title}</h3>
                  <ul className={styles.industryBullets}>
                    {c.bullets.map((b) => <li key={b}>{b}</li>)}
                  </ul>
                  {c.linkText && (
                    <span className={styles.industryCardLink}>
                      {c.linkText}<span className={styles.industryArrow} />
                    </span>
                  )}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── CEO citation ────────────────────────────────────────────────── */}
        <AisoftCitation />

        {/* ── Awards & recognitions ───────────────────────────────────────── */}
        <div id="ai-awards">
          <ServicesAchievements
            badges={AIS_BADGES}
            description="Leading analyst agencies that track the best AI software development companies worldwide have recognized Nexterse LLC. Our values and our partners help us deliver services at that level."
          />
        </div>

        {/* ── Tech stack ──────────────────────────────────────────────────── */}
        <AisoftTechStack />

        {/* ── Data privacy (5 icon cards) ─────────────────────────────────── */}
        <section id="ai-privacy" className={`${styles.blockLight} ${styles.privacyBlock}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Your data never trains public models</h2>
            <p className={styles.sectionDesc}>
              Enterprise AI needs a clear architecture. Your proprietary information stays fully under your control at every stage of development and deployment.
            </p>
            <div className={styles.ecomServicesGrid}>
              {PRIVACY.map((c) => (
                <div key={c.title} className={styles.ecomServiceCard}>
                  <Image src={c.icon} alt={c.title} width={56} height={56} className={styles.ecomServiceIcon} />
                  <h3 className={styles.ecomServiceTitle}>{c.title}</h3>
                  <p className={styles.ecomServiceIntro}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ─────────────────────────────────────────────────────────── */}
        <div id="ai-faq">
          <ServicesFaqBlock items={AIS_FAQ} />
        </div>

        {/* ── More about (crosslinks) ─────────────────────────────────────── */}
        <AisoftCrosslinks />

        {/* ── Let's Start ─────────────────────────────────────────────────── */}
        <LetsStart />

        {/* ── Awesome stories (blog) ──────────────────────────────────────── */}
        <AdlcBlog featured={AIS_BLOG_FEATURED} sidePosts={AIS_BLOG_SIDE} />
      </AisoftArticleLayout>
    </>
  );
}
