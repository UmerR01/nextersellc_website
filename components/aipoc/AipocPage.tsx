"use client";

import { useState } from "react";
import Image from "next/image";
import CaseCards from "@/components/home/CaseCards";
import ServicesReviewSlider from "@/components/services/ServicesReviewSlider";
import ServicesAchievements, { type Badge } from "@/components/services/ServicesAchievements";
import ServicesFaqBlock, { type FaqItem } from "@/components/services/ServicesFaqBlock";
import LetsStart from "@/components/home/LetsStart";
import AwesomeStories from "@/components/blog/AwesomeStories";
import AipocHero from "./AipocHero";
import AipocLogos from "./AipocLogos";
import AipocTechLogos from "./AipocTechLogos";
import AipocCrosslinks from "./AipocCrosslinks";
import ArticleLayout from "@/components/shared/ArticleLayout";
import styles from "./AipocPage.module.css";

// ─── ADLC six ideas (services-results) ────────────────────────────────────────
const ADLC_IDEAS = [
  "AI is an operational component.",
  "Development is policy-driven.",
  "Quality gates are built in.",
  "Automation follows guardrails with explicit decision rules.",
  "Token costs and delivery telemetry stay observable.",
  "Workflows are human-led but AI-executed.",
];

// ─── 4-week sprint (process steps) ────────────────────────────────────────────
const SPRINT = [
  {
    title: "Week 1: Hypothesis, scope, and guardrails",
    intro: "We define the business problem, the success metric, and the boundaries. This week",
    bullets: [
      "We agree on one measurable business outcome.",
      "We define what the PoC will and will not do.",
      "We identify data sources and access constraints.",
      "We set handling rules for sensitive information.",
      "We outline failure conditions and refusal rules.",
      "We also establish the review path for stakeholders.",
    ],
  },
  {
    title: "Week 2: Data mapping and architecture design",
    intro: "We map your data environment onto the solution path. This week",
    bullets: [
      "We review source systems, documents, and data quality.",
      "We identify what we can use now and what needs cleanup.",
      "We select the model access path that fits your use case and governance needs.",
      "We define the retrieval, context, and access strategies.",
      "We design the deployment path for a private or tightly controlled environment.",
    ],
  },
  {
    title: "Week 3: Engineering the sandbox",
    intro: "We build the proof of concept in a controlled environment, using human-led, AI-executed workflows. This week",
    bullets: [
      "We set up the agent-driven workflow.",
      "We handle core orchestration for retrieval, reasoning, and tool use.",
      "We build structured task chains for the scoped use case.",
      "We add response controls and policy gates.",
      "We handle memory and state where needed.",
      "We add an interface layer for stakeholder review.",
    ],
  },
  {
    title: "Week 4: Red-teaming, evaluation, and ROI readout",
    intro: "We stress-test the solution before you make a decision. This week",
    bullets: [
      "We test against unsafe outputs, weak retrieval, and broken logic paths.",
      "We pressure-test prompt handling and output controls.",
      "We review edge cases and governance gaps.",
      "We finalize the runtime cost model.",
      "We present the PoC, the architecture blueprint, and the production roadmap.",
    ],
  },
];

// ─── Build vs Buy comparison table ────────────────────────────────────────────
const COMPARE_HEAD = ["Feature", "Off-the-shelf AI SaaS", "Typical agency “Free PoC”", "Nexterse LLC Pilot & Prove"];
const COMPARE_ROWS = [
  ["Data privacy", "Shared vendor environment and limited control over data boundaries", "Often built on public APIs with loose handling of company data", "Private deployment design with controlled access and enterprise-grade boundaries"],
  ["Customization", "Limited to vendor workflows and roadmap", "Thin wrapper around an API", "Custom agentic architecture aligned to your use case and systems."],
  ["Financial predictability", "Per-seat or bundled pricing hides scaling costs.", "No clear usage model for token, retrieval, and infra costs.", "Cost-per-query model and runtime cost projection based on agreed assumptions."],
  ["IP ownership", "You do not own the product.", "Ownership terms are often unclear.", "You own the code, prompts, architecture, and delivered assets."],
];

// ─── Cases (5, clone content) ─────────────────────────────────────────────────


// ─── Deliverables (vertical tabs) ─────────────────────────────────────────────
const DELIVERABLES = [
  {
    icon: "/aipoc-development/03_Layer_1-7-1.svg",
    label: "Functional sandbox prototype",
    desc: "A working prototype built around one tightly scoped use case. We build it on a controlled slice of your data, or on a sanitized dataset, to find out whether the use case works in your environment and under your constraints. Typical formats include:",
    points: ["RAG knowledge bot for internal search and Q&A", "Agent workflow for multi-step tasks with controlled tool access", "Document intake flow for extraction, validation, and routing", "Hybrid system combining ML models with LLM components"],
  },
  {
    icon: "/aipoc-development/03_Token-cost-projection-2.svg",
    label: "Token-cost projection",
    desc: "A cost model that shows what the system will cost to run in production under agreed usage assumptions. You also get a budget view of how those costs change as usage grows. It covers the real cost drivers such as:",
    points: ["Prompt length and context size", "Retrieved content volume and chunking choices", "Response length targets", "Number of model calls per request (agent steps, retries)", "Retrieval and embedding usage", "Supporting infrastructure (compute, storage, logging, monitoring)"],
  },
  {
    icon: "/aipoc-development/03_Guardrails-before-autonomy-3.svg",
    label: "Security architecture blueprint",
    desc: "An architecture blueprint for a private, enterprise-grade deployment path, so your security team can review the controls on paper before anything scales. It includes:",
    points: ["Data ingress and retrieval flow", "Access boundaries and permission layers", "Isolation options (network and environment separation)", "Model access route design (AWS Bedrock / Azure OpenAI patterns)", "Secret and key handling approach", "Audit logs, retention, and traceability rules"],
  },
  {
    icon: "/aipoc-development/01_Workflow-management-systems.svg",
    label: "Production roadmap",
    desc: "A plan that keeps you from starting over if the PoC is approved. It outlines:",
    points: ["Build phases and deliverables", "Integration points with your systems", "Evaluation checkpoints and acceptance criteria", "Release governance and control points", "Monitoring and support requirements", "Options for fixed-scope follow-on work where feasible"],
  },
  {
    icon: "/aipoc-development/03_Traceability-and-auditability-2.svg",
    label: "Executive readout",
    desc: "A structured readout for both technical and business stakeholders. It answers:",
    points: ["What the PoC was designed to prove", "What worked and what did not", "What it will cost to run under the agreed assumptions", "What controls are required for safe operation", "Whether the case is strong enough to proceed"],
  },
];

// ─── IP protection (6 icon cards) ─────────────────────────────────────────────
const IP_CARDS = [
  { icon: "/aipoc-development/03_Zero-public-training-2.svg", title: "Zero public training", desc: "We never treat your proprietary documents and internal data as training fuel for public models. We design the solution path around enterprise-safe model access and controlled data handling." },
  { icon: "/aipoc-development/03_Guardrails-before-autonomy-3.svg", title: "Guardrails before autonomy", desc: "We never hand decision-making to an unconstrained workflow. High-risk actions only run after review steps, approval logic, or hard stop conditions." },
  { icon: "/aipoc-development/03_Controlled-tool-access-2.svg", title: "Controlled tool access", desc: "If a system can call an external service, retrieve data, or trigger an internal action, those limits are built into its design, not added afterward." },
  { icon: "/aipoc-development/03_Traceability-and-auditability-2.svg", title: "Traceability and auditability", desc: "You should be able to review the inputs, the retrieval paths, the outputs, and the execution decisions. When the system makes a weak recommendation, you need a clear way to see why." },
  { icon: "/aipoc-development/03_Budget-constrained-AI-workflows-3.svg", title: "Budget-constrained AI workflows", desc: "We never let the system run as an open meter. Cost visibility and usage limits are part of how we govern delivery." },
  { icon: "/aipoc-development/03_You-own-the-output-2.svg", title: "You own the output", desc: "The code, the prompts, the architecture, and the delivered assets all belong to your company under the project agreement." },
];

// ─── Why ADLC (6 icon+title cards) ────────────────────────────────────────────
const WHY_CARDS = [
  { icon: "/aipoc-development/03_Layer_1-7-1.svg", title: "AI is an operational component." },
  { icon: "/aipoc-development/03_Traceability-and-auditability-1.svg", title: "Development is policy-driven." },
  { icon: "/aipoc-development/12_Quality-control.svg", title: "Quality gates are built in." },
  { icon: "/aipoc-development/03_Guardrails-before-autonomy-1.svg", title: "Automation follows guardrails with explicit decision rules." },
  { icon: "/aipoc-development/03_Token-cost-projection-2.svg", title: "Token costs and delivery telemetry stay observable." },
  { icon: "/aipoc-development/01_Workflow-management-systems.svg", title: "Workflows are human-led but AI-executed." },
];


// ─── Tech stack (4 cards) ─────────────────────────────────────────────────────
const TECH = [
  { title: "Foundational models and access paths", bullets: ["Azure OpenAI", "AWS Bedrock", "Anthropic", "Meta Llama", "and more"] },
  { title: "Orchestration and agent frameworks", bullets: ["LangChain", "AutoGen", "LlamaIndex", "CrewAI", "and more"] },
  { title: "Vector databases and retrieval", bullets: ["Pinecone", "Weaviate", "pgvector", "Qdrant", "and more"] },
  { title: "Evaluation, guardrails, and observability", bullets: ["Response evaluation frameworks", "Logging and traceability layers", "Access control and policy enforcement", "Usage monitoring and budget tracking"] },
];

// ─── FAQ (clone content, 9) ───────────────────────────────────────────────────
const AIP_FAQ: FaqItem[] = [
  { question: "When does a business need an AI PoC?", answer: "When the idea is promising but unproven, building it blind would be expensive. A PoC makes sense when you’re unsure the model will hit the accuracy you need. It also helps when leadership wants evidence before funding a full build, or when a vendor’s demo looks great but you don’t know if it holds up on your data. If the approach is already proven for your use case, you can often skip the PoC and go straight to a pilot. We’ll tell you which situation you’re in." },
  { question: "How is an AI PoC different from an MVP or a pilot?", answer: "A PoC tests feasibility in a controlled scope. An MVP is a minimal but real product you put in front of users. A pilot runs a validated solution with a limited group before full rollout. They come in that order. Starting with an MVP before feasibility is proven is how budgets get spent on ideas that were never going to work." },
  { question: "How much does an AI PoC cost?", answer: "It’s a fixed scope and a fixed price, agreed before we start, so there are no open-ended hours. A 4-week AI PoC typically falls in the low-to-mid five figures. The exact number is set by the complexity of the use case and how ready your data is. You leave with a working prototype, an accuracy report, a cost model, a security blueprint, and a go or no-go recommendation. If the PoC says no, you’ve spent a fraction of a full build to avoid a much larger mistake." },
  { question: "Who owns the IP of the PoC?", answer: "You do. The code, the prompts, the architecture, and the delivered materials all belong to your company under the project agreement." },
  { question: "What if the PoC fails?", answer: "Then it may have saved you from a bigger mistake. A strong proof of concept doesn’t exist to force a “yes.” It exists to tell the truth early. If the sprint shows that your data isn’t ready, the economics don’t hold up, or the use case needs a different architecture, that is still a good outcome. You avoid funding a larger build on weak assumptions, and you leave with a roadmap for what needs to change." },
  { question: "Do you need all of our data upfront?", answer: "No. In many cases the first sprint should use a controlled subset of your data, a sanitized dataset, or a narrower set of documents. The goal is to answer the feasibility question without creating unnecessary exposure." },
  { question: "Can this run inside our environment?", answer: "Yes. We define the deployment path around your governance needs, hosting standards, and access requirements. The exact setup depends on your current infrastructure and security policies." },
  { question: "Why not just buy an AI tool instead?", answer: "Sometimes buying is the right answer. But off-the-shelf tools are built around vendor constraints. If your use case touches sensitive data or a business process that needs tight control, a focused proof of concept can tell you whether a custom path is justified before you spend more." },
  { question: "Why not ask an agency for a free PoC?", answer: "Because “free” usually means a lightweight demo built to start a larger project. That can be useful for a sales conversation, but it is not the same as a controlled engagement built to answer the cost, security, and ownership questions." },
];

// ─── Awards (clone badges) ────────────────────────────────────────────────────
const AIP_BADGES: Badge[] = [
  { src: "/badges_fix/06_techreviewer_badge_2026-03.svg", alt: "techreviewer.co 2026 — Top AI PoC Development Companies" },
  { src: "/badges_fix/05_top_clutch.co_artificial_intelligence_company_boston_2026-2.svg", alt: "Clutch 2026 — Top Artificial Intelligence Company in Boston" },
  { src: "/badges_fix/06_techreviewer_badge_2026-01.svg", alt: "techreviewer.co 2026 — Top AI Consulting Companies" },
  { src: "/badges_fix/06_techreviewer_badge_2026-02.svg", alt: "techreviewer.co 2026 — Top AI Readiness Assessment Companies" },
  { src: "/badges_fix/05_top_clutch.co_generative_ai_company_boston_2026-2.svg", alt: "Clutch 2026 — Top Generative AI Company in Boston" },
  { src: "/badges_fix/06_top-ai-development-companies.svg", alt: "GoodFirms — Top AI Development Company" },
  { src: "/badges_fix/06_techreviewer_badge_2026-04.svg", alt: "techreviewer.co 2026 — Top AI Software Development Companies" },
  { src: "/badges_fix/06_techreviewer_badge_2026-16.svg", alt: "techreviewer.co 2026 — Top AI Integration Companies" },
  { src: "/badges_fix/06_techreviewer_badge_2026-05.svg", alt: "techreviewer.co 2026 — Top AI Agents Development Companies" },
  { src: "/badges_fix/06_techreviewer_badge_2026-06.svg", alt: "techreviewer.co 2026 — Top RAG Development Companies" },
  { src: "/badges_fix/06_techreviewer_badge_2026-07.svg", alt: "techreviewer.co 2026 — Top LLM Development Companies" },
  { src: "/badges_fix/06_techreviewer_badge_2026-15.svg", alt: "techreviewer.co 2026 — Top GenAI Development Companies" },
];

// ─── Awesome stories (blog) ───────────────────────────────────────────────────
const AIP_BLOG_FEATURED = {
  href: "/blog/eu-ai-act-custom-ai-development",
  title: "The EU AI Act: How It Changes AI development and What It Means for Custom AI",
  image: "/aipoc-development/07_Figure-6-in-force-vs-coming.svg",
  imageAlt: "The EU AI Act — in force vs coming",
  readTime: "25 mins",
  date: "July 9, 2026",
};
const AIP_BLOG_SIDE = [
  { href: "/blog/questions-to-ask-ai-development-company", title: "10 questions to Ask an AI Development Company before Signing", readTime: "18 mins", date: "July 7, 2026" },
  { href: "/blog/agentic-rag-enterprise-implementation-guide", title: "Agentic RAG: The Complete Enterprise Implementation Guide for 2026", readTime: "35 mins", date: "July 3, 2026" },
  { href: "/blog/ai-cost-reduction-playbook", title: "The AI Cost Reduction Playbook – 9 Mechanisms, 7 Hidden Drivers, and Real-World Case Studies (2026 Edition)", readTime: "32 mins", date: "July 1, 2026" },
];

// ─── Component ────────────────────────────────────────────────────────────────
const CONTENTS = [
  { href: "#ai-hype", label: "ADLC PoC" },
  { href: "#ai-process", label: "Process" },
  { href: "#ai-buildvsbuy", label: "Build vs. Buy vs. Nexterse" },
  { href: "#ai-cases", label: "Case studies & reviews" },
  { href: "#ai-deliverables", label: "Deliverables" },
  { href: "#ai-ip", label: "IP protection" },
  { href: "#ai-why", label: "Why Nexterse" },
  { href: "#ai-tech", label: "Tech stack" },
  { href: "#ai-faq", label: "FAQ" },
];

export default function AipocPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <AipocHero />

      <ArticleLayout contents={CONTENTS} ariaLabel="AI PoC development page contents">
        <AipocLogos />
        {/* ── AI hype / ADLC PoC ─────────────────────────────────────────── */}
        <section id="ai-hype" className={`${styles.blockLight} ${styles.hypeBlock}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>
              AI hype is expensive. We engineered a <span className={styles.accent}>safer way.</span>
            </h2>
            <p className={styles.sectionDesc}>
              80% of enterprise AI projects never reach production, and we know where they stall. A team throws together a quick prototype, stakeholders get interested, and then the friction starts. Security teams question the data flow. Finance teams ask what token usage, infrastructure, and monitoring will cost at scale. Delivery teams discover the “quick PoC” was built with shortcuts that have no place in a production path.
            </p>
            <div className={styles.finSplit}>
              <div className={styles.finSplitText}>
                <p>
                  We don’t treat an AI proof of concept as a vague discovery phase followed by a loose prototype. We run it within our Agentic Development Lifecycle (ADLC), a delivery model where AI works within defined boundaries from day one.
                </p>
                <p><strong>ADLC is built around six ideas.</strong></p>
                <ul className={styles.ecomBullets}>
                  {ADLC_IDEAS.map((i) => <li key={i}>{i}</li>)}
                </ul>
                <p>Together these strengthen the traditional software lifecycle (SDLC) by improving throughput, visibility, and control.</p>
              </div>
              <Image
                src="/aipoc-development/03_pexels-fauxels-3184653-683x1024.jpg"
                alt="Development team discussing the project"
                width={683}
                height={1024}
                className={styles.finSplitImg}
              />
            </div>
          </div>
        </section>

        {/* ── 4-week ADLC sprint (dark process) ──────────────────────────── */}
        <section id="ai-process" className={`${styles.blockDark} ${styles.processBlock}`}>
          <div className="container">
            <h2 className={styles.sectionTitleWhite}>
              What happens inside the <span className={styles.accent}>4-week ADLC sprint</span>
            </h2>
            <p className={styles.sectionDescWhite}>
              The sprint is transparent by design. Every week has its own purpose, its own outputs, and a clear part to play in reducing uncertainty. Agents run the delivery, inside a controlled framework.
            </p>
            <div className={styles.processGrid}>
              {SPRINT.map((step, i) => (
                <div key={step.title} className={styles.processStep}>
                  <div className={styles.processNum}>{i + 1}</div>
                  <div className={styles.processStepBody}>
                    <h3 className={styles.processStepTitle}>{step.title}</h3>
                    <p className={styles.processStepText}>{step.intro}</p>
                    <ul className={styles.processStepBullets}>
                      {step.bullets.map((b) => <li key={b}>{b}</li>)}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA: Book your free AI discovery call ──────────────────────── */}
        <div className={styles.inlineCta}>
          <div className="container">
            <div className={styles.inlineCtaInner}>
              <div>
                <h2 className={styles.inlineCtaTitle}>Book your free AI discovery call</h2>
                <p className={styles.inlineCtaDesc}>Discuss your business challenge with our AI experts and find out exactly how a PoC can solve it.</p>
              </div>
              <a href="#get-modal-popup" className={`btn btn-accent ${styles.inlineCtaBtn}`}>Get a fixed-scope PoC quote</a>
            </div>
          </div>
        </div>

        {/* ── Build vs Buy vs Nexterse (table) ───────────────────────────── */}
        <section id="ai-buildvsbuy" className={`${styles.blockWhite} ${styles.buildVsBuyBlock}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Build vs. Buy vs. Nexterse LLC</h2>
            <p className={styles.sectionDesc}>
              When a client says “we need <span className={styles.inlineAccent}>full AI software development services</span>,” there are usually four paths on the table. You can buy an off-the-shelf AI tool, ask an agency for a quick pilot, run a controlled proof of concept built for a real production decision, or take an <span className={styles.inlineAccent}>AI readiness assessment</span> first. If you need evidence for a go/no-go decision, those options narrow fast.
            </p>
            <div className={styles.compareWrap}>
              <table className={styles.compareTable}>
                <thead>
                  <tr>{COMPARE_HEAD.map((h) => <th key={h} scope="col">{h}</th>)}</tr>
                </thead>
                <tbody>
                  {COMPARE_ROWS.map((row) => (
                    <tr key={row[0]}>
                      {row.map((cell, ci) => (ci === 0 ? <td key={ci}>{cell}</td> : <td key={ci}>{cell}</td>))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── Case studies ───────────────────────────────────────────────── */}
        <div id="ai-cases">
          <CaseCards
            heading={<>What AI PoCs has <span>Nexterse LLC</span> delivered?</>}
            windowed
          />
        </div>

        {/* ── Reviews ────────────────────────────────────────────────────── */}
        <ServicesReviewSlider primary="ai" count={7} secondaryCount={2} />

        {/* ── Awards & Recognitions ──────────────────────────────────────── */}
        <ServicesAchievements badges={AIP_BADGES} />

        {/* ── Deliverables (vertical tabs) ───────────────────────────────── */}
        <section id="ai-deliverables" className={`${styles.blockLight} ${styles.deliverablesBlock}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>What do you get from the AI PoC?</h2>
            <p className={styles.sectionDesc}>
              Most AI PoC services stop at “you get a prototype,” which is not enough for a serious buying decision. Nexterse LLC’s AI Pilot &amp; Prove program delivers a full decision package instead. You get a working sandbox build, a cost model you can budget against, a security blueprint your team can review, and a clear plan for the next build.
            </p>
            <div className={styles.vertTabsWrap}>
              <div className={styles.vertTabList} role="tablist" aria-label="AI PoC deliverables">
                {DELIVERABLES.map((t, i) => (
                  <button
                    key={t.label}
                    role="tab"
                    aria-selected={activeTab === i}
                    className={`${styles.vertTabBtn} ${activeTab === i ? styles.vertTabBtnActive : ""}`}
                    onClick={() => setActiveTab(i)}
                  >
                    <Image src={t.icon} alt="" width={56} height={56} className={styles.deliverableIcon} aria-hidden />
                    <span>{t.label}</span>
                  </button>
                ))}
              </div>
              <div className={styles.vertTabContent}>
                <h3 className={styles.vertTabTitle}>{DELIVERABLES[activeTab].label}</h3>
                <p className={styles.vertTabDesc}>{DELIVERABLES[activeTab].desc}</p>
                <ul className={styles.ecomBullets}>
                  {DELIVERABLES[activeTab].points.map((p) => <li key={p}>{p}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── IP protection (6 cards) ────────────────────────────────────── */}
        <section id="ai-ip" className={`${styles.blockWhite} ${styles.ipBlock}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Your data is your IP. It stays that way.</h2>
            <p className={styles.sectionDesc}>
              Nexterse LLC’s AI PoC model is built on security-by-design AI. In practice, that means we use controlled access patterns and design the solution to be auditable from the start. Nexterse LLC is ISO 27001 certified and works in line with regulations, including GDPR and the EU AI Act.
            </p>
            <div className={styles.ecomServicesGrid}>
              {IP_CARDS.map((c) => (
                <div key={c.title} className={styles.ecomServiceCard}>
                  <Image src={c.icon} alt={c.title} width={56} height={56} className={styles.ecomServiceIcon} />
                  <h3 className={styles.ecomServiceTitle}>{c.title}</h3>
                  <p className={styles.ecomServiceIntro}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA: Build your AI PoC in 4 weeks ──────────────────────────── */}
        <div className={styles.inlineCta}>
          <div className="container">
            <div className={styles.inlineCtaInner}>
              <div>
                <h2 className={styles.inlineCtaTitle}>Build your AI PoC in 4 weeks</h2>
                <p className={styles.inlineCtaDesc}>Accelerate your innovation. Let our team turn your concept into a working model quickly and cost-effectively.</p>
              </div>
              <a href="#get-modal-popup" className={`btn btn-accent ${styles.inlineCtaBtn}`}>Discuss your AI PoC</a>
            </div>
          </div>
        </div>

        {/* ── Why Nexterse ADLC (6 icon+title cards) ─────────────────────── */}
        <section id="ai-why" className={`${styles.blockLight} ${styles.whyAdlcBlock}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Why Nexterse ADLC?</h2>
            <p className={styles.sectionDesc}>
              We don’t treat an AI proof of concept as a vague discovery phase followed by a loose prototype. We run it inside our Agentic Development Lifecycle (ADLC), a delivery model where AI works within defined boundaries from day one. ADLC is built around six ideas.
            </p>
            <div className={styles.ecomServicesGrid}>
              {WHY_CARDS.map((c) => (
                <div key={c.title} className={styles.whyIconCard}>
                  <Image src={c.icon} alt={c.title} width={56} height={56} className={styles.ecomServiceIcon} />
                  <h3 className={styles.ecomServiceTitle}>{c.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Tech stack (4 cards) ───────────────────────────────────────── */}
        <section id="ai-tech" className={`${styles.blockWhite} ${styles.techStackBlock}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>What’s in the AI PoC <span className={styles.accent}>tech stack?</span></h2>
            <p className={styles.sectionDesc}>
              We pick tools based on your use case, how sensitive your data is, the performance you expect, and where the solution needs to run.
            </p>
            <div className={styles.hcAudienceGrid}>
              {TECH.map((c) => (
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

        {/* ── Tech logos marquee ─────────────────────────────────────────── */}
        <AipocTechLogos />

        {/* ── More about (crosslinks) ────────────────────────────────────── */}
        <AipocCrosslinks />

        {/* ── FAQ ────────────────────────────────────────────────────────── */}
        <div id="ai-faq">
          <ServicesFaqBlock items={AIP_FAQ} />
        </div>

        {/* ── Let's Start ────────────────────────────────────────────────── */}
        <LetsStart />

        {/* ── Awesome stories (blog) ─────────────────────────────────────── */}
        <AwesomeStories category="ai" />
      </ArticleLayout>
    </>
  );
}
