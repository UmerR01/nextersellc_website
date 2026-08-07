"use client";

import { useState } from "react";
import Image from "next/image";
import CaseCards, { type CaseCard } from "@/components/home/CaseCards";
import ServicesReviewSlider from "@/components/services/ServicesReviewSlider";
import ServicesAchievements, { type Badge } from "@/components/services/ServicesAchievements";
import ServicesFaqBlock, { type FaqItem } from "@/components/services/ServicesFaqBlock";
import LetsStart from "@/components/home/LetsStart";
import AiIntegrationHero from "./AiIntegrationHero";
import AiIntegrationLogos from "./AiIntegrationLogos";
import AiIntegrationTechStack from "./AiIntegrationTechStack";
import AiIntegrationArticleLayout from "./AiIntegrationArticleLayout";
import styles from "./AiIntegrationPage.module.css";

// ─── Our AI integration services (6 cards) ────────────────────────────────────
const SERVICES = [
  { icon: "/ai-integration/03_Legacy-system-augmentation-01-1.svg", title: "Legacy system augmentation", desc: "We integrate copilots and task-specific AI features into ERP, CRM, HRIS, and other internal systems. That can include assisted data entry, report drafting, record lookup, workflow guidance, and natural-language access to legacy databases through a controlled application layer." },
  { icon: "/ai-integration/03_Intelligent-customer-portals-01-1.svg", title: "Intelligent customer portals", desc: "We integrate AI-powered search, guided self-service, dynamic content adaptation, and autonomous level-one support flows with web and mobile apps to improve user operations inside your products." },
  { icon: "/ai-integration/03_Predictive-analytics-and-forecasting-enablement-01-1.svg", title: "Predictive analytics and forecasting enablement", desc: "We integrate forecasting models into the business systems teams use for planning, inventory control, maintenance scheduling, risk monitoring, and demand analysis. Forecasts appear in the tools that teams already use, rather than in a separate data science environment." },
  { icon: "/ai-integration/03_AI-for-IoT-automation-02-1.svg", title: "AI for IoT automation", desc: "We support anomaly detection, maintenance alerts, process optimization, and automated responses inside industrial or asset-heavy environments by connecting AI models to IoT platforms." },
  { icon: "/ai-integration/03_Computer-vision-and-image-recognition-integration-1.svg", title: "Computer vision and image recognition integration", desc: "We embed vision models into platforms and systems that rely on image classification, object detection, document capture, or visual verification." },
  { icon: "/ai-integration/03_Natural-language-processing-and-speech-recognition-01-1.svg", title: "Natural language processing and speech recognition", desc: "We integrate NLP and speech components into customer service flows, internal knowledge systems, voice interfaces, and document-heavy operations that depend on transcription, intent detection, entity extraction, or text classification." },
];

// ─── Who we build AI solutions for (3 tabs) ───────────────────────────────────
const WHO_TABS = [
  {
    icon: "/ai-integration/03_Enterprises-01.svg",
    label: "Enterprises",
    title: "Enterprises",
    desc: "Enterprises usually work within tighter constraints: legacy architecture, fragmented data, stricter access rules, and higher operational risk. We design generative AI integration services for that environment. That can include API modernization, controlled model access, role-based retrieval, audit trails, and staged rollout across business units. The goal is to introduce AI where it supports the business while keeping security, reliability, and system behavior under control.",
  },
  {
    icon: "/ai-integration/03_Mid-size-businesses.svg",
    label: "Mid-size businesses",
    title: "Mid-size businesses",
    desc: "Mid-size businesses often have software that works, but too much work still happens outside it. Teams re-enter data, review documents by hand, search across disconnected tools, and depend on staff to interpret information that should be easier to access. Our AI integration services focus on improving that environment without forcing a full rebuild. We connect AI to the software your teams use, reducing manual effort and making the workflow easier to scale.",
  },
  {
    icon: "/ai-integration/03_Startups-02.svg",
    label: "Startups",
    title: "Startups",
    desc: "Startups usually need a focused use case and a fast route to release. We help define where AI adds value, connect it to the right product or workflow, and build a pilot that can be tested against user response and operating cost. The first step may be an AI feature in the product, automation for an internal task, a search layer over core content, or an integration foundation for later expansion.",
  },
];

// ─── One approach for software modernization and AI integration (4-step dark process) ──
const PROCESS = [
  { title: "Stage 1. We prepare the system for integration", text: "We start with the connection layer by reviewing how the system exposes data, handles service calls, and supports integration. Where needed, we strengthen APIs, middleware, event flows, and data contracts to provide the AI layer with a stable foundation." },
  { title: "Stage 2. We design AI as part of the application", text: "We integrate AI into the application itself, including model calls, fallback logic, latency handling, access rules, and human review points. This helps ensure the feature aligns with the product's existing behavior and operating requirements." },
  { title: "Stage 3. We run software delivery and AI delivery together", text: "Our software development lifecycle covers the deterministic parts of the system, including backend services, interfaces, infrastructure, and testing. In parallel, our agentic development lifecycle covers prompt design, retrieval behavior, tool use, and safety controls. Running both tracks together helps the integration hold up in production." },
  { title: "Stage 4. We build the full integration path", text: "We design the data path, permission model, orchestration layer, and application behavior as one system. This allows the AI feature to operate within the business workflow, with the right controls and context from the start." },
];

// ─── Our ADLC integration methodology (4 cards, 2-col) ────────────────────────
const ADLC = [
  { icon: "/ai-integration/03_API-and-data-readiness-audit-02.svg", title: "API and data readiness audit", desc: "We review the system the AI will connect to, including data sources, API quality, event flows, and the access model. We also assess whether the environment can support retrieval pipelines, vector indexing, payload sizes, and the latency required by the use case. If key integration points are missing, we define what needs to be added before introducing the AI layer." },
  { icon: "/ai-integration/03_Intent-and-scope-framing-01.svg", title: "Intent and scope framing", desc: "We define what the AI can access, what it can do, which tools it can use, and where review points must stay. That includes user roles, prompt rules, retrieval sources, and fallback paths. This stage establishes the operating boundaries early, keeping the integration aligned with the workflow and risk profile." },
  { icon: "/ai-integration/03_Sandbox-integration-02.svg", title: "Sandbox integration", desc: "We build the first version in a cloned or isolated environment that closely reflects the production workflow for testing. At this stage, we connect the model layer, retrieval logic, business rules, and interface components. We then assess output quality, latency, failure patterns, and cost before wider rollout." },
  { icon: "/ai-integration/03_Red-teaming-hardening-and-release-planning-01.svg", title: "Red-teaming, hardening, and release planning", desc: "Before release, we test the integration against prompt injection, access boundary issues, data leakage risks, and workflow edge cases. We then refine prompts, filters, orchestration rules, and review logic. This phase ends with a release plan that defines guardrails, monitoring, and the path to production." },
];

// ─── Business benefits of AI integration (8 icon cards) ───────────────────────
const BENEFITS = [
  { icon: "/ai-integration/03_Faster-operational-flow-02.svg", title: "Faster operational flow" },
  { icon: "/ai-integration/03_Better-predictive-insight-03.svg", title: "Better predictive insight" },
  { icon: "/ai-integration/03_Lower-manual-effort-at-scale-02.svg", title: "Lower manual effort at scale" },
  { icon: "/ai-integration/03_Fewer-avoidable-errors-2.svg", title: "Fewer avoidable errors" },
  { icon: "/ai-integration/03_More-personalized-user-experience-01.svg", title: "More personalized user experience" },
  { icon: "/ai-integration/03_Stronger-use-of-existing-systems-02.svg", title: "Stronger use of existing systems" },
  { icon: "/ai-integration/03_Scalable-growth-with-tighter-control.svg", title: "Scalable growth with tighter control" },
  { icon: "/ai-integration/03_Better-return-on-investment-01.svg", title: "Better return on investment" },
];

// ─── Awards (11 clone badges) ──────────────────────────────────────────────────
const AII_BADGES: Badge[] = [
  { src: "/ai-integration/06_techreviewer_badge_2026-16.svg", alt: "techreviewer.co 2026 — Top AI Integration Companies" },
  { src: "/ai-integration/05_top_clutch.co_artificial_intelligence_company_boston_2026-2.svg", alt: "Clutch 2026 — Top Artificial Intelligence Company in Boston" },
  { src: "/ai-integration/06_top-ai-development-companies.svg", alt: "GoodFirms — Top AI Development Company" },
  { src: "/ai-integration/06_techreviewer_badge_2026-04.svg", alt: "techreviewer.co 2026 — Top AI Software Development Companies" },
  { src: "/ai-integration/06_techreviewer_badge_2026-01.svg", alt: "techreviewer.co 2026 — Top AI Consulting Companies" },
  { src: "/ai-integration/06_techreviewer_badge_2026-02.svg", alt: "techreviewer.co 2026 — Top AI Readiness Assessment Companies" },
  { src: "/ai-integration/05_top_clutch.co_generative_ai_company_boston_2026-2.svg", alt: "Clutch 2026 — Top Generative AI Company in Boston" },
  { src: "/ai-integration/06_techreviewer_badge_2026-03.svg", alt: "techreviewer.co 2026 — Top AI PoC Development Companies" },
  { src: "/ai-integration/06_techreviewer_badge_2026-05.svg", alt: "techreviewer.co 2026 — Top AI Agents Development Companies" },
  { src: "/ai-integration/06_techreviewer_badge_2026-06.svg", alt: "techreviewer.co 2026 — Top RAG Development Companies" },
  { src: "/ai-integration/06_techreviewer_badge_2026-07.svg", alt: "techreviewer.co 2026 — Top LLM Development Companies" },
];

// ─── Our recent AI cases (4) ───────────────────────────────────────────────────
const AII_CASES: CaseCard[] = [
  {
    banner: "/ai-integration/05_tablet-cover-right.png",
    name: "AI · Fintech",
    title: "AI integration of anti-fraud and underwriting for a fintech firm",
    text: "A fintech company needed to integrate AI scoring into its application and transaction workflow. Nexterse LLC linked risk sources, a feature store, and a decision engine to speed up decisions and improve the quality of anti-fraud controls.",
    href: "/portfolio/ai-integration-fintech",
    tags: ["AI inside", "Enterprise"],
  },
  {
    banner: "/ai-integration/07_Cover-right-2.png",
    name: "AI · Nonprofit",
    title: "AI-powered knowledge base for a global rights nonprofit",
    text: "A Middle Eastern nonprofit working in cultural preservation needed a single searchable repository for fragmented research on ethnic minorities. Nexterse LLC built a multilingual AI platform that now indexes 12,000+ artifacts across 18 countries.",
    href: "/portfolio/ai-knowledge-base-development",
    tags: ["AI inside", "Enterprise"],
  },
  {
    banner: "/ai-integration/10_Cover-1-1.png",
    name: "AI · Logistics",
    title: "AI/ML route optimization for a freight delivery service",
    text: "Lifted on-time delivery to 98% – without expanding the fleet. An AI/ML platform that plans and reoptimizes B2B/B2C routes in real time with traffic, weather, and capacity constraints, cutting last-mile costs by 22%.",
    href: "/portfolio/ai-ml-route-optimization-for-a-freight-delivery-service",
    tags: ["AI inside", "Enterprise"],
  },
  {
    banner: "/ai-integration/10_Cover-2-1.png",
    name: "AI · Healthcare",
    title: "AI patient-flow platform for dental imaging",
    text: "A HIPAA-aligned AI platform for a dental imaging provider that reduced wait times by 37%, increased daily throughput by 22%, and lowered no-shows by 29%.",
    href: "/portfolio/hipaa-compliant-ai-powered-patient-management-platform-for-a-dental-imaging-provider",
    tags: ["AI inside", "Enterprise"],
  },
];

// ─── Start with a scoped AI pilot (4 bullet blocks) ───────────────────────────
const PILOT_POINTS = [
  { label: "One defined use case", text: "We select a workflow with explicit boundaries and a measurable downside in its current form. Common starting points include document review, internal search, support triage, and forecasting support." },
  { label: "A working integration", text: "We connect the AI layer to the system, data source, or workflow it needs to support. The result is a functioning pilot built around your environment and constraints." },
  { label: "Cost and risk visibility", text: "We estimate token usage, infrastructure impact, review requirements, and likely operating costs before you scale. We also identify the main technical and governance risks early." },
  { label: "A scale path", text: "If the pilot performs well, you leave with a plan for the next stage. That includes architecture updates, rollout priorities, control requirements, and the steps needed to extend the use case." },
];

// ─── Why companies choose Nexterse LLC (4 cards) ──────────────────────────────
const WHY_CARDS = [
  { icon: "/ai-integration/03_We-work-with-the-system-you-already-have-01.svg", title: "We work with the system you already have", desc: "We integrate AI into existing software, including legacy and fragmented environments. That may involve API modernization, middleware, and data-flow redesign to ensure the AI layer operates reliably." },
  { icon: "/ai-integration/03_We-build-for-production-use-01.svg", title: "We build for production use", desc: "We design AI features as part of the application they live in. That includes latency handling, access control, fallback logic, and review points. The integration is built for rollout and ongoing operation." },
  { icon: "/ai-integration/03_We-stay-model-agnostic-03.svg", title: "We stay model-agnostic", desc: "We choose the model and deployment approach around your environment. The decision depends on security requirements, cost limits, and the control your team needs after launch." },
  { icon: "/ai-integration/03_We-tie-delivery-to-a-defined-use-case-02.svg", title: "We tie delivery to a defined use case", desc: "We connect AI to a workflow or product function that can be assessed against a concrete outcome. That may be time saved, lower manual effort, support deflection, or stronger output quality." },
];

// ─── FAQ (5) ────────────────────────────────────────────────────────────────────
const AII_FAQ: FaqItem[] = [
  { question: "What are AI integration services?", answer: "This is the integration of AI into a company's existing software, data, and workflows. This could include generative AI features in a product, automated individual tasks, predictive models, or AI-powered search of internal content with access controls." },
  { question: "Our legacy software lacks modern APIs. Can you still integrate AI?", answer: "Yes. In many projects, this is where it all starts. We create the necessary APIs, connectors, and middleware to enable the system to work with AI. If integration points already exist, we use them and refine them where necessary." },
  { question: "Will AI integration slow down our existing application?", answer: "It shouldn't, if the architecture is designed correctly. We move resource-intensive AI operations out of the main user flow where necessary. This keeps the application responsive, while the AI handles search, response generation, and background tasks separately." },
  { question: "Do we have to use OpenAI?", answer: "No. We work with OpenAI, Azure OpenAI, Anthropic, AWS Bedrock, Gemini, and private open-source models. The choice depends on your use case, security requirements, budget, and deployment needs." },
  { question: "How long does the AI integration process take?", answer: "A pilot for a single scenario can be completed in a few weeks. A broader integration takes longer because you need to prepare the API, configure access, conduct testing, and plan the launch. It usually makes sense to start with a single scenario and then expand the solution." },
  { question: "Do I need technical knowledge to use your AI integration services?", answer: "No. Your team needs to understand the process you want to improve and the expected outcome. We handle the technical architecture and the integration itself. Your responsibility is to define the task, verify the results, and identify any manual control points." },
];

export default function AiIntegrationPage() {
  const [activeWho, setActiveWho] = useState(0);

  return (
    <>
      <AiIntegrationHero />

      <AiIntegrationArticleLayout>
        <AiIntegrationLogos />
        {/* ── Our AI integration services (6 cards) ─────────────────────── */}
        <section id="aii-services" className={`${styles.blockWhite} ${styles.aiIntegrationServicesBlock}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Our AI integration <span className={styles.accent}>services</span></h2>
            <p className={styles.sectionDesc}>
              Most companies need generative AI integration services that fit their existing systems, data management, and access practices. Our AI integration consulting services focus on the implementation layer: APIs, permissions, workflows, model orchestration, and the business logic that supports them.
            </p>
            <div className={styles.ecomServicesGrid}>
              {SERVICES.map((c) => (
                <div key={c.title} className={styles.ecomServiceCard}>
                  <Image src={c.icon} alt={c.title} width={56} height={56} className={styles.ecomServiceIcon} />
                  <h3 className={styles.ecomServiceTitle}>{c.title}</h3>
                  <p className={styles.ecomServiceIntro}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── How AI integration fits into existing software (image) ───────── */}
        <div className={styles.architectureSection}>
          <div className="container">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/ai-integration/03_How-AI-integration-fits-into-existing-software.png"
              alt="How AI integration fits into existing software"
              className={styles.architectureImg}
              loading="lazy"
            />
          </div>
        </div>

        {/* ── CTA: Book your free AI strategy call ─────────────────────────── */}
        <div className={styles.inlineCta}>
          <div className="container">
            <div className={styles.inlineCtaInner}>
              <div>
                <h2 className={styles.inlineCtaTitle}>Book your free AI strategy call</h2>
                <p className={styles.inlineCtaDesc}>Not sure where to start? Chat with our lead architects to find the high-impact AI wins for your business.</p>
              </div>
              <a href="#get-modal-popup" className={`btn btn-accent ${styles.inlineCtaBtn}`}>Book a meeting</a>
            </div>
          </div>
        </div>

        {/* ── Who we build AI solutions for (icon tabs) ────────────────────── */}
        <section id="aii-who" className={`${styles.blockLight} ${styles.aiIntegrationWhoBlock}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}><span className={styles.accent}>Who</span> we build AI solutions for</h2>
            <p className={styles.sectionDesc}>Our AI integration approach depends on company size, system complexity, and rollout scope.</p>
            <div className={styles.tabsWrap}>
              <div className={styles.tabsNav} role="tablist" aria-label="Who we build AI solutions for">
                {WHO_TABS.map((tab, i) => (
                  <button
                    key={tab.label}
                    role="tab"
                    aria-selected={activeWho === i}
                    className={`${styles.tabBtn} ${activeWho === i ? styles.tabBtnActive : ""}`}
                    onClick={() => setActiveWho(i)}
                  >
                    <img src={tab.icon} alt="" className={styles.tabIcon} />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>
              <div className={styles.tabPanelActive}>
                <div className={styles.tabPanelContent}>
                  <h3 className={styles.tabPanelTitle}>{WHO_TABS[activeWho].title}</h3>
                  <p className={styles.tabPanelDesc}>{WHO_TABS[activeWho].desc}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── One approach for software modernization and AI integration ──── */}
        <section id="aii-process" className={`${styles.blockDark} ${styles.aiIntegrationProcessBlock}`}>
          <div className="container">
            <h2 className={styles.sectionTitleWhite}>One <span className={styles.accent}>approach</span> for software modernization and AI integration</h2>
            <p className={styles.sectionDescWhite}>
              At Nexterse LLC, AI integration starts with the system it has to work inside. We review the application logic, data flows, APIs, access rules, and performance requirements, then strengthen the foundation where needed before adding the AI layer. This helps us adapt the solution to different project types and integrate AI in a way that aligns with the software, workflow, and the level of control the business needs.
            </p>
            <div className={styles.processGrid}>
              {PROCESS.map((step, i) => (
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

        {/* ── CTA: Get your integration quote ──────────────────────────────── */}
        <div className={styles.inlineCta}>
          <div className="container">
            <div className={styles.inlineCtaInner}>
              <div>
                <h2 className={styles.inlineCtaTitle}>Get your integration quote</h2>
                <p className={styles.inlineCtaDesc}>Ready to build? Give us a few details about your project and receive a transparent, tiered pricing proposal.</p>
              </div>
              <a href="#get-modal-popup" className={`btn btn-accent ${styles.inlineCtaBtn}`}>Get in touch</a>
            </div>
          </div>
        </div>

        {/* ── Our ADLC integration methodology (4 cards, 2-col) ────────────── */}
        <section id="aii-adlc" className={`${styles.blockWhite} ${styles.aiIntegrationAdlcBlock}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Our <span className={styles.accent}>ADLC</span> integration methodology</h2>
            <p className={styles.sectionDesc}>
              AI integration depends on the parts around the model: APIs, data access, application logic, and control points. Our delivery approach combines software modernization with AI evaluation, so the integration fits the system and can be rolled out with confidence.
            </p>
            <div className={styles.ecomServicesGrid}>
              {ADLC.map((c) => (
                <div key={c.title} className={styles.ecomServiceCard}>
                  <Image src={c.icon} alt={c.title} width={56} height={56} className={styles.ecomServiceIcon} />
                  <h3 className={styles.ecomServiceTitle}>{c.title}</h3>
                  <p className={styles.ecomServiceIntro}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Business benefits of AI integration (8 icon cards) ───────────── */}
        <section id="aii-benefits" className={`${styles.blockWhite} ${styles.aiIntegrationBenefitsBlock}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Business <span className={styles.accent}>benefits</span> of AI integration</h2>
            <div className={styles.ecomServicesGrid}>
              {BENEFITS.map((c) => (
                <div key={c.title} className={styles.ecomServiceCard}>
                  <Image src={c.icon} alt={c.title} width={56} height={56} className={styles.ecomServiceIcon} />
                  <h3 className={styles.ecomServiceTitle}>{c.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Awards & Recognitions ─────────────────────────────────────────── */}
        <ServicesAchievements
          badges={AII_BADGES}
          description="Nexterse LLC has been recognized by the leading analytics agencies as the top AI integration company worldwide. Our values and expertise help us provide professional AI integration services."
        />

        {/* ── Cases + Reviews ─────────────────────────────────────────────── */}
        <div id="aii-cases">
          <CaseCards
            heading={<>Our recent AI <span>cases</span></>}
            cards={AII_CASES}
            windowed
          />
        </div>
        <ServicesReviewSlider />

        {/* ── Tech stack ────────────────────────────────────────────────────── */}
        <AiIntegrationTechStack />

        {/* ── Start with a scoped AI pilot ─────────────────────────────────── */}
        <section id="aii-pilot" className={`${styles.blockLight} ${styles.aiIntegrationPilotBlock}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}><span className={styles.accent}>Start</span> with a scoped AI pilot</h2>
            <p className={styles.sectionDesc}>
              As the first step, most companies need one defined use case tied to a costly bottleneck. Our AI pilot-and-prove engagement is built for that stage. We identify a workflow in your current software, integrate a focused AI capability, and assess whether it is worth wider rollout.
            </p>
            <div className={styles.pilotBody}>
              <div className={styles.pilotList}>
                <p className={styles.pilotIntro}>What the pilot includes:</p>
                {PILOT_POINTS.map((p) => (
                  <div key={p.label} className={styles.pilotItem}>
                    <h3 className={styles.pilotItemTitle}>{p.label}</h3>
                    <p className={styles.pilotItemText}>{p.text}</p>
                  </div>
                ))}
              </div>
              <div className={styles.pilotImageWrap}>
                <Image
                  src="/ai-consulting/imgs/03_pexels-fauxels-3184653-683x1024.jpg"
                  alt="Development team discussing a scoped AI pilot"
                  width={683}
                  height={1024}
                  className={styles.pilotImage}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Why companies choose Nexterse LLC (4 cards) ──────────────────── */}
        <section id="aii-why" className={`${styles.blockWhite} ${styles.aiIntegrationWhyChooseBlock}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}><span className={styles.accent}>Why</span> companies choose Nexterse LLC for AI integration services</h2>
            <p className={styles.sectionDesc}>
              Nexterse LLC brings software engineering and AI delivery into one engagement, making your path from pilot to production consistent.
            </p>
            <div className={styles.ecomServicesGrid}>
              {WHY_CARDS.map((c) => (
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
        <div id="aii-faq">
          <ServicesFaqBlock items={AII_FAQ} />
        </div>

        {/* ── Let's Start ─────────────────────────────────────────────────── */}
        <LetsStart />
      </AiIntegrationArticleLayout>
    </>
  );
}
