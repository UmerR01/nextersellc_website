"use client";

import { useState } from "react";
import Image from "next/image";
import CaseCards from "@/components/home/CaseCards";
import ServicesReviewSlider from "@/components/services/ServicesReviewSlider";
import ServicesAchievements, { type Badge } from "@/components/services/ServicesAchievements";
import ServicesFaqBlock, { type FaqItem } from "@/components/services/ServicesFaqBlock";
import LetsStart from "@/components/home/LetsStart";
import LlmHero from "./LlmHero";
import AipocLogos from "@/components/aipoc/AipocLogos";
import LlmTechStack from "./LlmTechStack";
import ArticleLayout from "@/components/shared/ArticleLayout";
import styles from "./LlmPage.module.css";

// ─── LLM engineering services (4 cards) ───────────────────────────────────────
const SERVICES = [
  {
    icon: "/llm-development/04_Controlled-data-flow-by-design-02.svg",
    title: "Data curation and pipeline engineering",
    paragraphs: [
      "Model quality depends on data quality. We build the pipelines that ingest, filter, de-duplicate, structure, chunk, and tokenize enterprise data before it reaches the model. This includes work with documents, internal records, product knowledge, support content, and domain-specific text corpora.",
      "The goal is to make the training or retrieval layer robust: when the input data is inconsistent, outdated, or poorly structured, the model output remains consistent. We reduce that risk upstream.",
    ],
  },
  {
    icon: "/llm-development/03_LLM-fine-tuning-and-private-model-customization-01.svg",
    title: "Model fine-tuning with PEFT and LoRA",
    paragraphs: [
      "When prompt design and retrieval are not enough, we fine-tune open-source models for narrower tasks and stronger domain fit. We use parameter-efficient methods such as LoRA to adapt the model to your vocabulary, response format, reasoning patterns, and content rules without the cost of full-scale retraining.",
      "This approach works well when you need a model to write in a defined format, classify domain content, extract structured information, or support internal workflows where consistency matters more than general-purpose breadth.",
    ],
  },
  {
    icon: "/llm-development/03_Governance-Operational-Modeling-01.svg",
    title: "Custom model training",
    paragraphs: [
      "Some companies need more than adaptation. When the business case supports it, we design and train proprietary models on large internal datasets with full control over the architecture, training process, and deployment path.",
      "This work includes training strategy, experiment design, hyperparameter tuning, distributed training orchestration, evaluation pipelines, and production preparation. We recommend this route only when the data volume and expected return justify the cost.",
    ],
  },
  {
    icon: "/llm-development/04_Seamless-integration-into-your-maintenance-workflows-01.svg",
    title: "Inference optimization and quantization",
    paragraphs: [
      "A model has to be affordable to run after it’s built. We optimize inference so the system can operate with lower latency, lower infrastructure spend, and tighter deployment constraints. That includes quantization, model compression, serving optimization, and runtime tuning across cloud, on-premises, and edge environments.",
      "This is often what makes an LLM system viable beyond the pilot stage. A model that performs well in testing still has to meet cost, speed, and infrastructure requirements in production.",
    ],
  },
];

// ─── Build vs Buy vs Adapt (3 horizontal tabs) ────────────────────────────────
const TIERS = [
  {
    icon: "/llm-development/03_RAG-as-a-Service-03.svg",
    label: "Tier 1. Enterprise RAG",
    para: "You do not need a new model if the main issue is access to internal knowledge. In this setup, we connect your documents, records, and source systems to a secure model through retrieval pipelines, vector search, and permissions-aware access controls.",
    bestFit: "Internal search, document Q&A, policy lookup, support knowledge tools.",
    whatYouGet: "Faster time to value, lower model risk, and stronger grounding in enterprise data.",
  },
  {
    icon: "/llm-development/03_LLM-fine-tuning-02.svg",
    label: "Tier 2. LLM Fine-Tuning",
    para: "Fine-tuning makes sense when the model needs to follow your terminology, output format, and domain logic more closely than prompt design or retrieval can support. We adapt an open-source model to the task with techniques such as LoRA and other parameter-efficient methods.",
    bestFit: "Medical drafting, legal review support, domain-specific copilots, proprietary coding workflows.",
    whatYouGet: "More consistent outputs, tighter domain alignment, and lower compute cost than full model training.",
  },
  {
    icon: "/llm-development/04_What-you-get-01.svg",
    label: "Tier 3. Custom Pre-Training",
    para: "Custom pre-training is the right path only when you have large proprietary datasets, strict deployment requirements, or a strong reason to reduce dependence on external model providers. This is the heaviest option, so we recommend it only when the business case supports the cost and complexity.",
    bestFit: "Highly regulated environments, proprietary research, large-scale domain corpora, zero-dependency model strategy.",
    whatYouGet: "Greater control over the model stack, tighter fit to internal data, and stronger long-term independence.",
  },
];

// ─── Cases (5) ────────────────────────────────────────────────────────────────


// ─── Why Nexterse (4 cards with photos) ───────────────────────────────────────
const WHY = [
  { img: "/llm-development/04_img-12-300x300.jpg", title: "Deep engineering coverage", desc: "We build the system end-to-end. That includes the data and model layers, the serving setup, and the surrounding software." },
  { img: "/llm-development/04_img-03-300x300.jpg", title: "Architecture matched to the use case", desc: "We start with the business problem, then choose the lightest architecture that can do the job well. Sometimes that means RAG. Sometimes it means targeted model adaptation. We move to a heavier build only when the case supports it." },
  { img: "/llm-development/04_img-01-300x300.jpg", title: "Integration built into delivery", desc: "We treat integration as core engineering work. Our team designs LLM systems to work with older enterprise systems and newer business applications." },
  { img: "/llm-development/04_img-02-300x300.jpg", title: "Deployment shaped around constraints", desc: "We deploy in private cloud, on internal infrastructure, or in local environments when the use case calls for it. The choice depends on data-handling rules, response targets, hardware limitations, and long-term costs." },
];

// ─── Dual-engine integration (4 vertical tabs) ────────────────────────────────
const DUAL = [
  {
    icon: "/llm-development/04_Seamless-integration-into-your-maintenance-workflows-01.svg",
    label: "Integration into modern software",
    body: [
      "We connect LLM functionality to web platforms, SaaS products, customer portals, internal dashboards, and workflow tools. That includes API integration, retrieval layers, user-facing interfaces, and orchestration logic that moves model outputs to the appropriate step in the process.",
      "For companies building AI-enabled features into existing products, this is often the fastest route from prototype to live use.",
    ],
  },
  {
    icon: "/llm-development/03_Traditional-software-01.svg",
    label: "Integration into legacy systems",
    body: [
      "We work with older ERP, CRM, document systems, internal databases, and on-premise applications that were never designed for LLM workflows. Our teams build the middleware and interface layer needed to connect those systems to the model without disrupting daily operations.",
      "This matters when the value sits inside older platforms, but the business still needs modern AI capabilities on top of them.",
    ],
  },
  {
    icon: "/llm-development/03_LLM-development-01.svg",
    label: "Software development around the model",
    body: [
      "Some use cases need a dedicated application around the model. We build internal tools, external products, admin panels, review interfaces, and workflow systems that make LLM outputs usable in context.",
      "That can include document review environments, support agent workspaces, knowledge tools, internal copilots, and domain-specific applications built around retrieval, generation, or classification tasks.",
    ],
  },
  {
    icon: "/llm-development/03_Governance-Operational-Modeling-01.svg",
    label: "Access, governance, and workflow control",
    body: [
      "Enterprise LLM systems need access boundaries, auditability, fallback logic, human review points, and system-level controls. We build these controls into the application and integration layer so the model fits your operating environment.",
    ],
  },
];

// ─── Flexible deployment (3 horizontal tabs) ──────────────────────────────────
const DEPLOY = [
  {
    icon: "/llm-development/04_Cloud-based-predictive-analytics-platforms-01.svg",
    label: "Private cloud deployment",
    para: "We deploy the model inside your private cloud environment (AWS, Azure, or Google Cloud) and align it with your internal security model. The setup includes isolated infrastructure, role-based access controls, monitoring, and the service layer that connects the model to your systems.",
    bestFit: "Companies that need stronger control over data handling and runtime setup without moving the full workload onto internal servers.",
  },
  {
    icon: "/llm-development/03_Isolated-production-grade-deployment-02.svg",
    label: "On-premises deployment",
    para: "When internal policy or system constraints require local hosting, we adapt the model to run on your own infrastructure. This work covers inference tuning, capacity planning, containerized rollout, and support for internal networking requirements.",
    bestFit: "Organizations that need tighter control over where the model runs, how data is stored, and how the serving environment is managed.",
  },
  {
    icon: "/llm-development/04_Visual-monitoring-at-the-edge-03.svg",
    label: "Edge and local inference",
    para: "Some LLM use cases need to run close to devices, equipment, or field operations where connectivity is limited or response time matters. In these cases, we reduce model size through quantization and runtime optimization, enabling inference to occur locally on constrained hardware.",
    bestFit: "Factory environments, mobile workflows, offline field tools, and device-level assistants.",
  },
];

// ─── Who builds the system (4 role cards) ─────────────────────────────────────
const WHO = [
  { icon: "/llm-development/04_Full-ownership-of-data-02.svg", title: "Data architects", desc: "They build the data pipelines behind the system. This role handles ingestion, deduplication, data shaping, storage design, and retrieval architecture to ensure the model operates on reliable inputs." },
  { icon: "/llm-development/03_Data-engineering-AI-foundations-04.svg", title: "NLP and ML engineers", desc: "They own model selection, fine-tuning setup, evaluation logic, and training workflows. This role adapts the model to your domain and measures its performance on the task." },
  { icon: "/llm-development/03_LLM-development-01.svg", title: "LLMOps specialists", desc: "They build the deployment pipeline and production controls. This role manages model serving, monitoring, rollback planning, runtime health, and ongoing model updates." },
  { icon: "/llm-development/03_Traditional-software-01.svg", title: "Software engineers", desc: "They connect the model to the business application. This role builds APIs, middleware, user-facing interfaces, and workflow logic to enable the LLM to operate within real systems." },
];

// ─── ADLC process (5 steps) ───────────────────────────────────────────────────
const ADLC = [
  { title: "Define the use case", text: "We map the business task, target users, success criteria, and operating constraints. AI may help summarize source materials or group requirements, but our team sets the final scope and delivery plan." },
  { title: "Review data and systems", text: "We assess source data, access rules, software dependencies, and deployment limits. AI can help process large volumes of content and surface patterns. Our engineers verify the findings and choose the right path for the project." },
  { title: "Design and build the system", text: "We design the architecture, then build the data pipelines, model layer, serving setup, and integrations. AI may assist with code drafts, documentation drafts, and test generation. Developers revise that output and harden it for production use." },
  { title: "Validate in a controlled environment", text: "We test output quality, failure handling, latency, cost, and workflow fit. AI can help generate edge cases and test scenarios. Our team reviews the results, tunes the system, and adds human review steps where risk warrants them." },
  { title: "Deploy and improve", text: "We deploy with monitoring, versioning, access control, and update workflows. After launch, we track system behavior, review output quality, and refine the solution as requirements change." },
];

// ─── FAQ (6) ──────────────────────────────────────────────────────────────────
const LLM_FAQ: FaqItem[] = [
  { question: "Who owns the model and the related assets after delivery?", answer: "Ownership terms depend on the engagement model, but for custom LLM work, the client typically receives full rights to the delivered solution. That can include model artifacts, pipeline logic, deployment setup, and the project’s integration layer." },
  { question: "Do we need to invest in GPU hardware before the project starts?", answer: "Not in most cases. Training and testing can run on cloud infrastructure provisioned for the engagement. For production, we size the environment around the chosen architecture, expected traffic, and cost target. In some cases, existing on-premise hardware is enough." },
  { question: "How long does fine-tuning usually take?", answer: "A secure sandbox or pilot version may be available within several weeks. Broader scopes take longer because evaluation, integration, and review logic add work beyond the model itself." },
  { question: "How secure are LLM systems built for enterprise use?", answer: "Security depends on system design. We shape the solution around access control, data isolation, audit requirements, infrastructure boundaries, and the way the model connects to internal systems. The level of control also depends on whether the system runs in a private cloud, on internal servers, or in another managed environment." },
  { question: "When is fine-tuning the right choice, and when is RAG enough?", answer: "RAG is often enough when the task depends on current internal knowledge and grounded answers. Fine-tuning makes more sense when the model must follow domain language, output structure, decision rules, or task-specific behavior more closely." },
  { question: "Can the model work with legacy software and internal tools?", answer: "Yes, if the integration layer is designed with the existing environment in mind. In many projects, the hard part is the middleware, API logic, permissions handling, and workflow design around it." },
];

// ─── Awards (12 clone badges) ─────────────────────────────────────────────────
const LLM_BADGES: Badge[] = [
  { src: "/badges_fix/06_techreviewer_badge_2026-07.svg", alt: "techreviewer.co 2026 — Top LLM Development Companies" },
  { src: "/badges_fix/06_techreviewer_badge_2026-06.svg", alt: "techreviewer.co 2026 — Top RAG Development Companies" },
  { src: "/badges_fix/06_techreviewer_badge_2026-15.svg", alt: "techreviewer.co 2026 — Top GenAI Development Companies" },
  { src: "/badges_fix/05_top_clutch.co_generative_ai_company_boston_2026-2.svg", alt: "Clutch 2026 — Top Generative AI Company in Boston" },
  { src: "/badges_fix/05_top_clutch.co_artificial_intelligence_company_boston_2026-2.svg", alt: "Clutch 2026 — Top Artificial Intelligence Company in Boston" },
  { src: "/badges_fix/06_techreviewer_badge_2026-01.svg", alt: "techreviewer.co 2026 — Top AI Consulting Companies" },
  { src: "/badges_fix/06_techreviewer_badge_2026-02.svg", alt: "techreviewer.co 2026 — Top AI Readiness Assessment Companies" },
  { src: "/badges_fix/06_top-ai-development-companies.svg", alt: "GoodFirms — Top AI Development Company" },
  { src: "/badges_fix/06_techreviewer_badge_2026-04.svg", alt: "techreviewer.co 2026 — Top AI Software Development Companies" },
  { src: "/badges_fix/06_techreviewer_badge_2026-16.svg", alt: "techreviewer.co 2026 — Top AI Integration Companies" },
  { src: "/badges_fix/06_techreviewer_badge_2026-03.svg", alt: "techreviewer.co 2026 — Top AI PoC Development Companies" },
  { src: "/badges_fix/06_techreviewer_badge_2026-05.svg", alt: "techreviewer.co 2026 — Top AI Agents Development Companies" },
];

// ─── Component ────────────────────────────────────────────────────────────────
const CONTENTS = [
  { href: "#llm-services", label: "Services" },
  { href: "#llm-tiers", label: "Build vs. Buy vs. Adapt" },
  { href: "#llm-cases", label: "Case studies" },
  { href: "#llm-tco", label: "TCO" },
  { href: "#llm-why", label: "Why Nexterse" },
  { href: "#llm-dualengine", label: "Dual-engine integration" },
  { href: "#llm-deployment", label: "Flexible deployment" },
  { href: "#llm-tech", label: "Tech stack" },
  { href: "#llm-adlc", label: "Agentic development process" },
  { href: "#llm-faq", label: "FAQ" },
];

export default function LlmPage() {
  const [activeTier, setActiveTier] = useState(0);
  const [activeDeploy, setActiveDeploy] = useState(0);
  const [activeDual, setActiveDual] = useState(0);
  const tier = TIERS[activeTier];
  const deploy = DEPLOY[activeDeploy];

  return (
    <>
      <LlmHero />

      <ArticleLayout contents={CONTENTS} ariaLabel="LLM development page contents">
        <AipocLogos />
        {/* ── LLM engineering services (4 cards) ──────────────────────────── */}
        <section id="llm-services" className={`${styles.blockWhite} ${styles.llmServicesBlock}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Our LLM engineering <span className={styles.accent}>services</span></h2>
            <p className={styles.sectionDesc}>
              Most of the model development work sits in data preparation, system design, deployment planning, and evaluation. Nexterse LLC builds the full LLM delivery path, from ingestion pipelines and model adaptation to inference optimization and production rollout in your cloud or internal environment.
            </p>
            <div className={styles.ecomServicesGrid}>
              {SERVICES.map((c) => (
                <div key={c.title} className={styles.ecomServiceCard}>
                  <Image src={c.icon} alt={c.title} width={56} height={56} className={styles.ecomServiceIcon} />
                  <h3 className={styles.ecomServiceTitle}>{c.title}</h3>
                  {c.paragraphs.map((p) => <p key={p} className={styles.ecomServiceIntro}>{p}</p>)}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── LLM integration diagram ─────────────────────────────────────── */}
        <section className={styles.blockLight}>
          <div className="container">
            <div className={styles.llmDiagramWrap}>
              <Image
                src="/llm-development/04_LLM-Integration-Across-Enterprise-Systems-clean.png"
                alt="LLM integration across enterprise systems"
                width={1560}
                height={874}
                className={styles.llmDiagramImg}
              />
            </div>
          </div>
        </section>

        {/* ── Build vs Buy vs Adapt (horizontal tabs) ─────────────────────── */}
        <section id="llm-tiers" className={`${styles.serviceBlock} ${styles.llmTiersBlock}`}>
          <div className="container">
            <h2 className={styles.svcTitle}>Build vs. Buy vs. <span className={styles.accent}>Adapt</span></h2>
            <p className={styles.svcDesc}>The goal is to solve your business problem with the right level of engineering.</p>
            <div className={styles.tabsWrap}>
              <div className={styles.tabsNav} role="tablist" aria-label="LLM tiers">
                {TIERS.map((t, i) => (
                  <button
                    key={t.label}
                    role="tab"
                    aria-selected={activeTier === i}
                    className={`${styles.tabBtn} ${activeTier === i ? styles.tabBtnActive : ""}`}
                    onClick={() => setActiveTier(i)}
                  >
                    <img src={t.icon} alt="" className={styles.tabIcon} />
                    <span>{t.label}</span>
                  </button>
                ))}
              </div>
              <div className={styles.tabPanelContent}>
                <h3 className={styles.tabPanelTitle}>{tier.label}</h3>
                <p className={styles.tabPanelDesc}>{tier.para}</p>
                <ul className={styles.tierTakeaways}>
                  <li><strong>Best fit for:</strong> {tier.bestFit}</li>
                  <li><strong>What you get:</strong> {tier.whatYouGet}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA: Book your free discovery call ──────────────────────────── */}
        <div className={styles.inlineCta}>
          <div className="container">
            <div className={styles.inlineCtaInner}>
              <div>
                <h2 className={styles.inlineCtaTitle}>Book your free discovery call</h2>
                <p className={styles.inlineCtaDesc}>Discuss your business challenge with our LLM development experts and find out exactly how we can solve it.</p>
              </div>
              <a href="#get-modal-popup" className={`btn btn-accent ${styles.inlineCtaBtn}`}>Book a meeting</a>
            </div>
          </div>
        </div>

        {/* ── Cases + Reviews ─────────────────────────────────────────────── */}
        <div id="llm-cases">
          <CaseCards
            heading={<>Our recent AI <span>cases</span></>}
            windowed
          />
        </div>
        <ServicesReviewSlider primary="ai" count={7} secondaryCount={2} />

        {/* ── TCO ─────────────────────────────────────────────────────────── */}
        <section id="llm-tco" className={`${styles.blockLight} ${styles.llmTcoBlock}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Total cost of ownership <span className={styles.accent}>(TCO)</span></h2>
            <div className={styles.llmTcoBox}>
              <p className={styles.llmTcoText}>
                External model APIs are easy to start with, but usage-based pricing can become expensive at scale. A hosted custom model can lower long-term inference cost when the workload is steady enough.
              </p>
              <p className={styles.llmTcoLabel}>What we compare during scoping or pilot work</p>
              <ul className={styles.ecomBullets}>
                <li><strong>API path:</strong> Token-based usage costs, vendor dependence, scaling curve, and integration overhead.</li>
                <li><strong>Hosted model path:</strong> Infrastructure cost, serving setup, maintenance effort, and expected unit economics over time.</li>
              </ul>
              <p className={styles.llmTcoLabel}>What you get</p>
              <p className={styles.llmTcoText}>A side-by-side cost view tied to your projected usage, deployment model, and operating constraints.</p>
            </div>
          </div>
        </section>

        {/* ── Why Nexterse (4 cards with photos) ──────────────────────────── */}
        <section id="llm-why" className={`${styles.blockWhite} ${styles.llmWhyBlock}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}><span className={styles.accent}>Why</span> companies choose Nexterse LLC for LLM development</h2>
            <div className={styles.hcAudienceGrid}>
              {WHY.map((c) => (
                <div key={c.title} className={styles.llmWhyCard}>
                  <div className={styles.llmWhyCardText}>
                    <h3 className={styles.ecomServiceTitle}>{c.title}</h3>
                    <p className={styles.ecomServiceIntro}>{c.desc}</p>
                  </div>
                  <Image src={c.img} alt={c.title} width={300} height={300} className={styles.llmWhyImg} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Awards & recognitions ───────────────────────────────────────── */}
        <ServicesAchievements
          badges={LLM_BADGES}
          description="Leading analyst agencies that track the best LLM and AI development companies worldwide have recognized Nexterse LLC. Our values and our partners help us deliver services at that level."
        />

        {/* ── CTA: Prototype your AI product ──────────────────────────────── */}
        <div className={styles.inlineCta}>
          <div className="container">
            <div className={styles.inlineCtaInner}>
              <div>
                <h2 className={styles.inlineCtaTitle}>Prototype your AI product</h2>
                <p className={styles.inlineCtaDesc}>From “napkin sketch” to MVP. Our rapid development sprints help you launch an LLM-powered feature in weeks, not months.</p>
              </div>
              <a href="#get-modal-popup" className={`btn btn-accent ${styles.inlineCtaBtn}`}>Book a meeting</a>
            </div>
          </div>
        </div>

        {/* ── Dual-engine integration (vertical tabs) ─────────────────────── */}
        <section id="llm-dualengine" className={`${styles.blockLight} ${styles.llmDualBlock}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}><span className={styles.accent}>Dual-</span>engine integration</h2>
            <p className={styles.sectionDesc}>
              A strong model must connect to the systems your teams already use to deliver outputs within real workflows, while respecting permissions.
            </p>
            <div className={styles.vertTabsWrap}>
              <div className={styles.vertTabList} role="tablist" aria-label="Dual-engine integration">
                {DUAL.map((t, i) => (
                  <button
                    key={t.label}
                    role="tab"
                    aria-selected={activeDual === i}
                    className={`${styles.vertTabBtn} ${activeDual === i ? styles.vertTabBtnActive : ""}`}
                    onClick={() => setActiveDual(i)}
                  >
                    <Image src={t.icon} alt="" width={56} height={56} className={styles.vertTabIcon} />
                    <span>{t.label}</span>
                  </button>
                ))}
              </div>
              <div className={styles.vertTabContent}>
                <h3 className={styles.vertTabTitle}>{DUAL[activeDual].label}</h3>
                {DUAL[activeDual].body.map((p) => <p key={p} className={styles.vertTabDesc}>{p}</p>)}
              </div>
            </div>
          </div>
        </section>

        {/* ── Flexible deployment (horizontal tabs) ───────────────────────── */}
        <section id="llm-deployment" className={`${styles.serviceBlock} ${styles.llmDeploymentBlock}`}>
          <div className="container">
            <h2 className={styles.svcTitle}>Flexible <span className={styles.accent}>deployment</span></h2>
            <p className={styles.svcDesc}>We base deployment decisions on data sensitivity, latency targets, hardware limits, and long-term operating cost.</p>
            <div className={styles.tabsWrap}>
              <div className={styles.tabsNav} role="tablist" aria-label="Deployment options">
                {DEPLOY.map((t, i) => (
                  <button
                    key={t.label}
                    role="tab"
                    aria-selected={activeDeploy === i}
                    className={`${styles.tabBtn} ${activeDeploy === i ? styles.tabBtnActive : ""}`}
                    onClick={() => setActiveDeploy(i)}
                  >
                    <img src={t.icon} alt="" className={styles.tabIcon} />
                    <span>{t.label}</span>
                  </button>
                ))}
              </div>
              <div className={styles.tabPanelContent}>
                <h3 className={styles.tabPanelTitle}>{deploy.label}</h3>
                <p className={styles.tabPanelDesc}>{deploy.para}</p>
                <p className={styles.tabPanelDesc}><strong>Best fit for:</strong> {deploy.bestFit}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Tech stack ──────────────────────────────────────────────────── */}
        <LlmTechStack />

        {/* ── Who builds the system (4 role cards) ────────────────────────── */}
        <section className={`${styles.blockLight} ${styles.llmWhoBlock}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}><span className={styles.accent}>Who</span> builds the system</h2>
            <p className={styles.sectionDesc}>
              LLM delivery takes data engineering, infrastructure design, software integration, and production oversight. For this, our engineering team employs:
            </p>
            <div className={styles.llmWhoGrid}>
              {WHO.map((c) => (
                <div key={c.title} className={styles.llmWhoCard}>
                  <Image src={c.icon} alt={c.title} width={56} height={56} className={styles.llmWhoIcon} />
                  <h3 className={styles.llmWhoTitle}>{c.title}</h3>
                  <p className={styles.llmWhoDesc}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ADLC process (dark process) ─────────────────────────────────── */}
        <section id="llm-adlc" className={`${styles.processBlock} ${styles.llmAdlcBlock}`}>
          <div className="container">
            <h2 className={styles.sectionTitleWhite}>Our ADLC <span className={styles.accent}>process</span></h2>
            <p className={styles.sectionDescWhite}>
              We use the Agentic Development Lifecycle to move from business needs to production in controlled stages. AI helps us speed up analysis, draft parts of the solution, generate code scaffolds, and expand test coverage. Our engineers review, edit, and validate that work before it moves forward.
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

        {/* ── FAQ ─────────────────────────────────────────────────────────── */}
        <div id="llm-faq">
          <ServicesFaqBlock items={LLM_FAQ} />
        </div>

        {/* ── Let's Start ─────────────────────────────────────────────────── */}
        <LetsStart />
      </ArticleLayout>
    </>
  );
}
