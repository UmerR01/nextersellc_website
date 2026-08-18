"use client";

import { useState } from "react";
import Image from "next/image";
import CaseCards from "@/components/home/CaseCards";
import ServicesReviewSlider from "@/components/services/ServicesReviewSlider";
import ServicesAchievements, { type Badge } from "@/components/services/ServicesAchievements";
import ServicesFaqBlock, { type FaqItem } from "@/components/services/ServicesFaqBlock";
import LetsStart from "@/components/home/LetsStart";
import AdlcBlog, { type AdlcFeaturedPost, type AdlcBlogPost } from "@/components/adlc/AdlcBlog";
import RagHero from "./RagHero";
import AipocLogos from "@/components/aipoc/AipocLogos";
import RagTechStack from "./RagTechStack";
import RagArticleLayout from "./RagArticleLayout";
import styles from "./RagPage.module.css";

// ─── Intro leverage bullets ───────────────────────────────────────────────────
const LEVERAGE = [
  "Engineers search across legacy systems.",
  "Legal teams review entire contracts to locate a single clause.",
  "Compliance specialists manually verify policies before audits.",
  "Support escalates tickets because knowledge is scattered.",
];

// ─── End-to-end services (4 cards) ────────────────────────────────────────────
const SERVICES: { icon: string; title: string; paragraphs: string[]; bullets?: string[]; midParagraphs?: string[]; outcome: string }[] = [
  {
    icon: "/rag-development/03_Business-analysis-and-Java-project-planning-1.svg",
    title: "Discovery & feasibility",
    paragraphs: ["We assess your data quality, infrastructure, security posture, and projected usage.", "If RAG does not create value, we communicate that upfront."],
    outcome: "Architecture direction + ROI and token cost forecast.",
  },
  {
    icon: "/rag-development/03_Secure-and-governed-RAG-architecture-01.svg",
    title: "Architecture & secure design",
    paragraphs: ["We design RAG systems with:"],
    bullets: ["Secure ETL and data ingestion pipelines.", "Private vector databases.", "Hybrid search and re-ranking.", "RBAC at the retrieval level.", "PII masking layers.", "VPC-isolated LLM endpoints."],
    midParagraphs: ["Your data is vectorized privately and never trains public models."],
    outcome: "Secure, governed RAG blueprint.",
  },
  {
    icon: "/rag-development/03_AI-development-01.svg",
    title: "Development & integration",
    paragraphs: [
      "We build the full stack – including retrieval architecture, data pipelines, and orchestration.",
      "Our engineers connect your legacy ERP, CRM, SQL databases, PDFs, and intranets into a clean retrieval architecture.",
      "Multi-modal support handles tables, charts, and scanned documents.",
      "Continuous sync keeps knowledge up to date.",
    ],
    outcome: "Working RAG system integrated with real data.",
  },
  {
    icon: "/rag-development/03_Implementation-Continuous-Evaluation.svg",
    title: "Evaluation & production deployment",
    paragraphs: ["Before launch, we validate mathematically:"],
    bullets: ["Faithfulness – no invented answers.", "Context precision – correct document retrieval.", "Prompt-injection resilience.", "Token burn projections."],
    midParagraphs: ["We deploy inside AWS, Azure, or private infrastructure with monitoring and cost controls."],
    outcome: "Production-ready RAG system with governance built in.",
  },
];

// ─── Challenges (6 vertical tabs) ─────────────────────────────────────────────
const CHALLENGES: { icon: string; label: string; body: string[]; how: string[] }[] = [
  {
    icon: "/rag-development/03_Business-analysis-and-Java-project-planning-1.svg",
    label: "Messy, fragmented data environments",
    body: [
      "Knowledge rarely lives in clean text files. It is scattered across scanned PDFs, complex financial tables, legacy SQL databases, SharePoint folders, ERP exports, slide decks, and archived reports.",
      "When documents are not properly parsed and structured before vectorization, retrieval quality declines and answer reliability suffers.",
    ],
    how: ["We treat data readiness as a foundational engineering phase. Before deployment, we assess, structure, and prepare knowledge so the retrieval layer operates on governed, high-quality inputs instead of raw, inconsistent documents."],
  },
  {
    icon: "/rag-development/03_Hybrid-retrieval-and-re-ranking-03.svg",
    label: "Retrieval precision determines answer accuracy",
    body: [
      "Large language models generate responses strictly from retrieved context.",
      "If the wrong paragraph is retrieved or partially relevant content is supplied, the model attempts to complete the answer. Hallucinations emerge in otherwise functioning systems.",
    ],
    how: [
      "We design retrieval as a controlled accuracy system with measurable evaluation criteria. Responses are constrained to verified context, and reliability is validated through structured testing before production rollout.",
      "If the answer does not exist in your documents, the system is programmed to say so rather than generate assumptions.",
    ],
  },
  {
    icon: "/rag-development/03_Red-teaming-and-prompt-injection-defense-01.svg",
    label: "Data exposure risks",
    body: ["Information has strict access boundaries. Many RAG implementations enforce permissions at the UI level while leaving the retrieval layer unrestricted. This creates internal data exposure risk."],
    how: ["Security enforcement begins at the infrastructure level. Access control, isolation, and governance are embedded into the retrieval architecture so the system only accesses data aligned with authenticated permissions. Proprietary data remains protected within controlled environments."],
  },
  {
    icon: "/rag-development/03_Implementation-Continuous-Evaluation.svg",
    label: "Knowledge changes daily",
    body: ["Contracts are revised. Policies are updated. CRM records expand. A static vector database becomes outdated quickly, reducing answer reliability over time."],
    how: ["We engineer RAG as a living system. Continuous synchronization mechanisms ensure knowledge remains aligned with the current state of business data. Your RAG system always reflects the latest version of organizational truth."],
  },
  {
    icon: "/rag-development/03_What-we-model-before-you-scale-02.svg",
    label: "Token costs scale with usage",
    body: ["RAG systems operate on token-based infrastructure. At a small scale, costs appear negligible. At high usage volumes, uncontrolled retrieval depth and prompt size inflate monthly cloud bills."],
    how: ["Cost governance is incorporated into architecture planning from the outset. Usage forecasting, prompt discipline, and infrastructure optimization are evaluated before scaling decisions are made, ensuring predictable total cost of ownership."],
  },
  {
    icon: "/rag-development/03_AI-development-01.svg",
    label: "Legacy systems are hard to connect",
    body: [
      "Knowledge often lives inside 10-15-year-old ERP systems, fragmented databases, and custom web platforms. Many AI vendors build impressive demos and encounter difficulties extracting structured data from legacy environments.",
      "Without integration, RAG becomes a disconnected tool.",
    ],
    how: ["We approach RAG as an integration initiative. Data sources are systematically connected to retrieval infrastructure through engineered extraction and normalization workflows that align legacy systems with modern AI environments."],
  },
];

// ─── Accuracy & hallucination control (4 cards) ───────────────────────────────
const ACCURACY: { icon: string; title: string; paragraphs: string[]; bullets?: string[]; outro?: string }[] = [
  {
    icon: "/rag-development/03_Deterministic-grounding-04.svg",
    title: "Deterministic grounding",
    paragraphs: ["Basic RAG retrieves approximate context. Advanced RAG retrieves precise context.", "We implement hybrid search architectures combining:"],
    bullets: ["Semantic search.", "Keyword search.", "Metadata filtering.", "Re-ranking algorithms."],
    outro: "This ensures the model receives the most relevant paragraphs before generating an answer. The LLM operates on complete and properly ranked context.",
  },
  {
    icon: "/rag-development/03_Hybrid-retrieval-and-re-ranking-03.svg",
    title: "Hybrid retrieval & re-ranking",
    paragraphs: ["Basic RAG retrieves approximate context. Advanced RAG retrieves precise context.", "We implement hybrid search architectures combining:"],
    bullets: ["Semantic search.", "Keyword search.", "Metadata filtering.", "Re-ranking algorithms."],
    outro: "This ensures the model receives the most relevant paragraphs before generating an answer. The LLM operates on complete and properly ranked context.",
  },
  {
    icon: "/rag-development/03_Algorithmic-evaluation-and-faithfulness-scoring-03.svg",
    title: "Algorithmic evaluation – RAGAS & faithfulness scoring",
    paragraphs: ["We do not rely on manual spot checks. Before deployment, we use automated evaluation frameworks such as RAGAS to score system performance on measurable metrics:"],
    bullets: ["Faithfulness – Did the model strictly use the retrieved context?", "Context precision – Did the retrieval layer supply the correct documents?", "Answer relevancy – Does the response resolve the user’s query?"],
    outro: "This allows us to mathematically validate accuracy before legal or compliance teams review the system.",
  },
  {
    icon: "/rag-development/03_Red-teaming-and-prompt-injection-defense-01.svg",
    title: "Red-teaming & prompt injection defense",
    paragraphs: ["Production systems must withstand adversarial behavior. We deliberately stress-test the system to identify weaknesses before deployment. Before rollout, we simulate:"],
    bullets: ["Prompt injection attempts.", "Data extraction manipulation.", "Role escalation attempts.", "Guardrail bypass scenarios."],
  },
];

// ─── Secure & governed architecture (6 cards) ─────────────────────────────────
const SECURE: { title: string; paragraphs: string[]; bullets?: string[]; outro?: string }[] = [
  {
    title: "Dual-engine integration capability",
    paragraphs: ["Organizational knowledge rarely lives in one system. Because Nexterse LLC engineers both traditional software and AI systems, we build the full bridge:"],
    bullets: ["Secure extraction from legacy ERP and SQL systems.", "Structured ingestion services.", "Normalized knowledge layers.", "Integration into modern vector infrastructure."],
  },
  {
    title: "Isolated, production-grade deployment",
    paragraphs: ["Your proprietary data remains inside your cloud perimeter. We deploy RAG systems through:"],
    bullets: ["VPC-isolated infrastructure.", "Private LLM endpoints.", "Open-source model hosting in secure environments.", "Encrypted data channels."],
    outro: "At query time, only the relevant context is retrieved and transmitted to the model. The model processes the request within a controlled endpoint and does not retain data. Public training is excluded. Data exposure remains strictly controlled.",
  },
  {
    title: "Governance embedded in the retrieval layer",
    paragraphs: ["Access control is implemented at the architectural level. Security is enforced before generation begins. The AI retrieves only what the authenticated user is authorized to access. We embed governance directly into retrieval logic, ensuring:"],
    bullets: ["User-aligned document access.", "Role-aware knowledge boundaries.", "Infrastructure-level enforcement.", "Audit-ready traceability."],
  },
  {
    title: "Built for compliance-grade environments",
    paragraphs: ["We build systems that compliance teams can approve and CIOs can confidently support. Every deployment is engineered to satisfy governance requirements, including:"],
    bullets: ["Isolation boundaries.", "Encryption standards.", "Audit logging.", "Usage monitoring.", "Controlled retention policies."],
  },
  {
    title: "PII protection & data safeguarding",
    paragraphs: ["Sensitive information requires structural protection. Before indexing, data can pass through controlled preprocessing layers designed to safeguard personally identifiable and regulated information. Retrieval operates within defined compliance boundaries while preserving data integrity and traceability."],
  },
  {
    title: "Living knowledge infrastructure",
    paragraphs: ["Organizational knowledge changes daily. We design RAG systems as continuously aligned knowledge environments that reflect evolving policies, contracts, and operational records without manual rebuilding cycles. The system evolves together with your data."],
  },
];

// ─── ROI forecasting (3 cards) ────────────────────────────────────────────────
const ROI: { icon: string; title: string; bullets: string[]; outro: string }[] = [
  {
    icon: "/rag-development/03_What-we-model-before-you-scale-02.svg",
    title: "What we model before you scale",
    bullets: ["Expected monthly token consumption.", "Infrastructure and vector database load.", "Scaling scenarios based on user growth.", "Cost comparison vs. current manual workflows."],
    outro: "You receive a projected operating cost range before full deployment begins.",
  },
  {
    icon: "/rag-development/03_How-we-reduce-token-waste-02.svg",
    title: "How we reduce token waste",
    bullets: ["Context compression and smart chunking.", "Hybrid retrieval to minimize prompt size.", "Re-ranking to prevent over-fetching.", "Model-size optimization per use case."],
    outro: "Well-architected RAG systems operate inside defined economic boundaries.",
  },
  {
    icon: "/rag-development/03_What-you-get-03.svg",
    title: "What you get",
    bullets: ["Estimated monthly AI operating cost.", "Scaling cost forecast.", "ROI breakeven projection.", "Clear total cost of ownership (TCO) model."],
    outro: "AI built with financial predictability and operational control.",
  },
];

// ─── 4-week pilot (process steps) ─────────────────────────────────────────────
const PILOT: { title: string; paragraphs: string[]; bullets?: string[]; outro?: string }[] = [
  {
    title: "Week 1 – Data & architecture assessment",
    paragraphs: ["We securely analyze a defined slice of your data (e.g., 500 HR documents, 1,000 support tickets, or one CRM dataset). We evaluate data quality, structure, access controls, and compliance constraints.", "You receive:"],
    bullets: ["RAG feasibility confirmation.", "Data ingestion strategy.", "Security & deployment model recommendation (AWS Bedrock, Azure OpenAI, or private open-source)."],
  },
  {
    title: "Week 2 – Secure RAG architecture build",
    paragraphs: ["We design and deploy a production-grade RAG sandbox inside a VPC-isolated environment.", "This includes:"],
    bullets: ["Secure vector database setup.", "Hybrid search (semantic + keyword).", "Role-based access controls (RBAC).", "PII masking pipeline (if required).", "Deterministic grounding prompts."],
    outro: "Your data remains fully private. Nothing trains public models.",
  },
  {
    title: "Week 3 – Accuracy & hallucination testing",
    paragraphs: ["We measure system performance using defined evaluation criteria. Using automated evaluation frameworks (such as RAGAS), we score:"],
    bullets: ["Faithfulness – the model strictly uses retrieved documents.", "Context precision – the retrieval layer supplies the correct data.", "Answer accuracy – the output matches ground truth."],
    outro: "We also perform prompt-injection red-teaming to stress test security guardrails.",
  },
  {
    title: "Week 4 – Token cost & ROI modeling",
    paragraphs: ["Before scaling, we simulate real-world usage."],
  },
];

// ─── Cases (5) ────────────────────────────────────────────────────────────────


// ─── FAQ (6) ──────────────────────────────────────────────────────────────────
const RAG_FAQ: FaqItem[] = [
  { question: "Can RAG understand complex tables and charts in our PDFs?", answer: "Yes. We use advanced OCR and specialized document parsing models such as Unstructured.io to ensure tables and images are vectorized correctly instead of being treated as raw text. As a professional RAG as a service provider, we help you to solve this issue." },
  { question: "Will the AI provide a source for its answers?", answer: "Yes. We engineer RAG prompts with deterministic grounding, forcing the LLM to output a direct link or page number to the exact internal document used to generate the answer." },
  { question: "Our data is scattered across scanned PDFs, legacy SQL databases, and SharePoint. Do we need to organize it before building a RAG system?", answer: "No. Handling messy data is a core part of our work. Before building the AI layer, our engineers create robust ETL pipelines – extract, transform, load. We use advanced OCR and semantic chunking to parse PDFs, accurately extract tables, and centralize the information in a clean vector database. We build both the data foundation and the AI system." },
  { question: "How can we trust the answers the AI gives? What happens if it hallucinates a company policy?", answer: "We eliminate hallucinations using deterministic grounding. The system prompt restricts the LLM strictly to retrieved context. If the answer is not present in your documents, the AI responds that there is not enough information to answer. Every response includes a clickable citation linking to the exact page and paragraph of the source document." },
  { question: "Will our proprietary contracts and internal data be sent to OpenAI and used to train public models?", answer: "No. We build RAG systems using VPC-isolated cloud architectures through AWS Bedrock or Azure OpenAI. Your data is indexed in a private vector database, and prompts are processed in a secure zero data retention environment. Your IP remains within your infrastructure and is never used to train public foundational models." },
  { question: "When we update a contract or internal policy, how does the AI know? Do we have to manually rebuild the database?", answer: "Your AI always retrieves the latest information. As professional RAG developers, we engineer continuous data sync pipelines connected to your CMS, CRM, or document drives. When a document is updated, the system detects the change, re-vectorizes that specific file in the background, and updates the database in near real time." },
];

// ─── Awards (clone badges, 13) ────────────────────────────────────────────────
const RAG_BADGES: Badge[] = [
  { src: "/badges_fix/06_techreviewer_badge_2026-06.svg", alt: "techreviewer.co 2026 — Top RAG Development Companies" },
  { src: "/badges_fix/06_techreviewer_badge_2026-07.svg", alt: "techreviewer.co 2026 — Top LLM Development Companies" },
  { src: "/badges_fix/06_techreviewer_badge_2026-04.svg", alt: "techreviewer.co 2026 — Top AI Software Development Companies" },
  { src: "/badges_fix/05_top_clutch.co_artificial_intelligence_company_boston_2026-2.svg", alt: "Clutch 2026 — Top Artificial Intelligence Company in Boston" },
  { src: "/badges_fix/06_techreviewer_badge_2026-01.svg", alt: "techreviewer.co 2026 — Top AI Consulting Companies" },
  { src: "/badges_fix/06_techreviewer_badge_2026-02.svg", alt: "techreviewer.co 2026 — Top AI Readiness Assessment Companies" },
  { src: "/badges_fix/05_top_clutch.co_generative_ai_company_boston_2026-2.svg", alt: "Clutch 2026 — Top Generative AI Company in Boston" },
  { src: "/badges_fix/06_top-ai-development-companies.svg", alt: "GoodFirms — Top AI Development Company" },
  { src: "/badges_fix/06_techreviewer_badge_2026-16.svg", alt: "techreviewer.co 2026 — Top AI Integration Companies" },
  { src: "/badges_fix/06_techreviewer_badge_2026-03.svg", alt: "techreviewer.co 2026 — Top AI PoC Development Companies" },
  { src: "/badges_fix/06_techreviewer_badge_2026-05.svg", alt: "techreviewer.co 2026 — Top AI Agents Development Companies" },
  { src: "/badges_fix/06_techreviewer_badge_2026-15.svg", alt: "techreviewer.co 2026 — Top GenAI Development Companies" },
];

// ─── Awesome stories (blog) ───────────────────────────────────────────────────
const RAG_BLOG_FEATURED: AdlcFeaturedPost = {
  href: "/blog/ai-legacy-modernization-companies",
  title: "Top AI Legacy Modernization Companies (2026): Who Actually Embeds AI into Old Systems",
  image: "/rag-development/07_Figure-1-Enablement-vs-migration.png",
  imageAlt: "AI legacy modernization — enablement vs migration",
  readTime: "20 mins",
  date: "July 13, 2026",
};
const RAG_BLOG_SIDE: AdlcBlogPost[] = [
  { href: "/blog/eu-ai-act-custom-ai-development", title: "The EU AI Act: How It Changes AI development and What It Means for Custom AI", readTime: "25 mins", date: "July 9, 2026" },
  { href: "/blog/questions-to-ask-ai-development-company", title: "10 questions to Ask an AI Development Company before Signing", readTime: "18 mins", date: "July 7, 2026" },
  { href: "/blog/agentic-rag-enterprise-implementation-guide", title: "Agentic RAG: The Complete Enterprise Implementation Guide for 2026", readTime: "35 mins", date: "July 3, 2026" },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function RagPage() {
  const [activeChallenge, setActiveChallenge] = useState(0);
  const challenge = CHALLENGES[activeChallenge];

  return (
    <>
      <RagHero />

      <RagArticleLayout>
        <AipocLogos />
        {/* ── Intro: RAG transforms your data ─────────────────────────────── */}
        <section className={`${styles.blockLight} ${styles.ragIntroBlock}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>RAG <span className={styles.accent}>transforms</span> your data into leverage</h2>
            <p className={styles.sectionDesc}>
              Your company already has the information it needs. The risk comes from fragmented sources, inconsistent versions, and delayed access to critical knowledge.
            </p>
            <ul className={styles.ecomBullets} style={{ maxWidth: 760, margin: "28px auto 0" }}>
              {LEVERAGE.map((b) => <li key={b}>{b}</li>)}
            </ul>
            <p className={styles.sectionDesc} style={{ marginTop: 24 }}>
              RAG removes search friction and shortens decision cycles. Instead of digging through files, your teams receive precise, citation-backed answers inside a secure environment.
            </p>
          </div>
        </section>

        {/* ── End-to-end RAG services (4 cards) ───────────────────────────── */}
        <section id="rag-services" className={`${styles.blockWhite} ${styles.ragServicesBlock}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>End-to-end RAG development <span className={styles.accent}>services</span></h2>
            <p className={styles.sectionDesc}>We engineer production-ready RAG systems – securely, predictably, and with measurable ROI.</p>
            <div className={styles.ecomServicesGrid}>
              {SERVICES.map((c) => (
                <div key={c.title} className={styles.ecomServiceCard}>
                  <Image src={c.icon} alt={c.title} width={56} height={56} className={styles.ecomServiceIcon} />
                  <h3 className={styles.ecomServiceTitle}>{c.title}</h3>
                  {c.paragraphs.map((p) => <p key={p} className={styles.ecomServiceIntro}>{p}</p>)}
                  {c.bullets && <ul className={styles.ecomBullets}>{c.bullets.map((b) => <li key={b}>{b}</li>)}</ul>}
                  {c.midParagraphs?.map((p) => <p key={p} className={styles.ecomServiceIntro}>{p}</p>)}
                  <p className={styles.ecomServiceIntro}><strong>Outcome</strong>: {c.outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA: Start your AI journey today ────────────────────────────── */}
        <div className={styles.inlineCta}>
          <div className="container">
            <div className={styles.inlineCtaInner}>
              <div>
                <h2 className={styles.inlineCtaTitle}>Start your AI journey today</h2>
                <p className={styles.inlineCtaDesc}>Contact us and discuss how we can transform your data into valuable AI assets.</p>
              </div>
              <a href="#get-modal-popup" className={`btn btn-accent ${styles.inlineCtaBtn}`}>Book a call</a>
            </div>
          </div>
        </div>

        {/* ── Challenges (vertical tabs) ──────────────────────────────────── */}
        <section className={`${styles.blockLight} ${styles.ragChallengesBlock}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}><span className={styles.accent}>Challenges</span> limiting RAG effectiveness</h2>
            <p className={styles.sectionDesc}>
              Retrieval-augmented generation can transform how organizations access knowledge. Complex environments introduce structural challenges that require deliberate engineering. Here is what typically limits RAG effectiveness – and how we address it.
            </p>
            <div className={styles.vertTabsWrap}>
              <div className={styles.vertTabList} role="tablist" aria-label="RAG challenges">
                {CHALLENGES.map((t, i) => (
                  <button
                    key={t.label}
                    role="tab"
                    aria-selected={activeChallenge === i}
                    className={`${styles.vertTabBtn} ${activeChallenge === i ? styles.vertTabBtnActive : ""}`}
                    onClick={() => setActiveChallenge(i)}
                  >
                    <Image src={t.icon} alt="" width={56} height={56} className={styles.vertTabIcon} aria-hidden="true" />
                    <span>{t.label}</span>
                  </button>
                ))}
              </div>
              <div className={styles.vertTabContent}>
                <h3 className={styles.vertTabTitle}>{challenge.label}</h3>
                {challenge.body.map((p) => <p key={p} className={styles.vertTabDesc}>{p}</p>)}
                <p className={styles.vertTabDesc}><strong>How we solve it</strong></p>
                {challenge.how.map((p) => <p key={p} className={styles.vertTabDesc}>{p}</p>)}
              </div>
            </div>
          </div>
        </section>

        {/* ── Accuracy & hallucination control (4 cards) ──────────────────── */}
        <section id="rag-accuracy" className={`${styles.blockWhite} ${styles.ragAccuracyBlock}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Accuracy &amp; hallucination control <span className={styles.accent}>framework</span></h2>
            <p className={styles.sectionDesc}>
              RAG systems fail when the model guesses. We engineer systems that eliminate guessing. As a part of our agentic development lifecycle (ADLC), we implement measurable, enforceable accuracy controls that transform probabilistic LLMs into governed systems.
            </p>
            <div className={styles.ecomServicesGrid}>
              {ACCURACY.map((c) => (
                <div key={c.title} className={styles.ecomServiceCard}>
                  <Image src={c.icon} alt={c.title} width={56} height={56} className={styles.ecomServiceIcon} />
                  <h3 className={styles.ecomServiceTitle}>{c.title}</h3>
                  {c.paragraphs.map((p) => <p key={p} className={styles.ecomServiceIntro}>{p}</p>)}
                  {c.bullets && <ul className={styles.ecomBullets}>{c.bullets.map((b) => <li key={b}>{b}</li>)}</ul>}
                  {c.outro && <p className={styles.ecomServiceIntro}>{c.outro}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Secure & governed RAG architecture (6 cards) ────────────────── */}
        <section id="rag-secure" className={`${styles.blockLight} ${styles.ragSecureBlock}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Secure &amp; governed RAG <span className={styles.accent}>architecture</span></h2>
            <p className={styles.sectionDesc}>
              RAG establishes control over how knowledge is retrieved and used. At Nexterse LLC, we engineer retrieval-augmented generation as governed infrastructure. Every component protects intellectual property, enforces access boundaries, and ensures controlled behavior in regulated environments.
            </p>
            <div className={styles.ecomServicesGrid}>
              {SECURE.map((c) => (
                <div key={c.title} className={styles.ecomServiceCard}>
                  <h3 className={styles.ecomServiceTitle}>{c.title}</h3>
                  {c.paragraphs.map((p) => <p key={p} className={styles.ecomServiceIntro}>{p}</p>)}
                  {c.bullets && <ul className={styles.ecomBullets}>{c.bullets.map((b) => <li key={b}>{b}</li>)}</ul>}
                  {c.outro && <p className={styles.ecomServiceIntro}>{c.outro}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Forecasting AI ROI (3 dark cards) ───────────────────────────── */}
        <section id="rag-roi" className={`${styles.blockDark} ${styles.ragRoiBlock}`}>
          <div className="container">
            <h2 className={styles.sectionTitleWhite}><span className={styles.accent}>Forecasting</span> your AI ROI – no surprise cloud bills</h2>
            <p className={styles.sectionDescWhite}>
              A RAG system that answers correctly and consumes unlimited tokens creates financial risk. We engineer cost predictability from day one.
            </p>
            <div className={styles.ecomServicesGrid}>
              {ROI.map((c) => (
                <div key={c.title} className={styles.ecomServiceCard}>
                  <Image src={c.icon} alt={c.title} width={56} height={56} className={styles.ecomServiceIcon} />
                  <h3 className={styles.ecomServiceTitle}>{c.title}</h3>
                  <ul className={styles.ecomBullets}>{c.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
                  <p className={styles.ecomServiceIntro}>{c.outro}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── RAG vs Fine-tuning (image) ──────────────────────────────────── */}
        <section id="rag-vsft" className={styles.blockWhite}>
          <div className="container">
            <h2 className={styles.sectionTitle}>RAG vs. Fine-tuning – strategic decision <span className={styles.accent}>matrix</span></h2>
            <p className={styles.sectionDesc}>
              For most enterprise knowledge systems, RAG delivers faster ROI, stronger governance, and lower operational risk. Fine-tuning becomes strategically justified only when deep behavioral control or domain-specific reasoning is required.
            </p>
            <div className={styles.ragMatrixWrap}>
              <Image
                src="/rag-development/03_RAG-vs.-Fine-tuning-strategic-decision-matrix-table-clean-v2.png"
                alt="RAG vs. Fine-tuning — strategic decision matrix"
                width={1560}
                height={1523}
                className={styles.ragMatrixImg}
              />
            </div>
          </div>
        </section>

        {/* ── FAQ ─────────────────────────────────────────────────────────── */}
        <div id="rag-faq">
          <ServicesFaqBlock items={RAG_FAQ} />
        </div>

        {/* ── Tech stack ──────────────────────────────────────────────────── */}
        <RagTechStack />

        {/* ── Awards & recognitions ───────────────────────────────────────── */}
        <ServicesAchievements
          badges={RAG_BADGES}
          description="Leading analyst agencies that track the best AI and RAG development companies worldwide have recognized Nexterse LLC. Our values and our partners help us deliver services at that level."
        />

        {/* ── CTA: Talk to our AI experts ─────────────────────────────────── */}
        <div className={styles.inlineCta}>
          <div className="container">
            <div className={styles.inlineCtaInner}>
              <div>
                <h2 className={styles.inlineCtaTitle}>Talk to our AI experts</h2>
                <p className={styles.inlineCtaDesc}>Get personalized advice for your unique project needs.</p>
              </div>
              <a href="#get-modal-popup" className={`btn btn-accent ${styles.inlineCtaBtn}`}>Get in Touch</a>
            </div>
          </div>
        </div>

        {/* ── Cases + Reviews ─────────────────────────────────────────────── */}
        <div id="rag-cases">
          <CaseCards
            heading={<>Our recent AI <span>works</span></>}
            windowed
          />
        </div>
        <ServicesReviewSlider primary="ai" count={7} secondaryCount={2} />

        {/* ── 4-week pilot (dark process) ─────────────────────────────────── */}
        <section id="rag-pilot" className={`${styles.blockDark} ${styles.ragPilotBlock}`}>
          <div className="container">
            <h2 className={styles.sectionTitleWhite}>Prove the value of your data in <span className={styles.accent}>4 weeks</span></h2>
            <p className={styles.sectionDescWhite}>
              Avoid committing to a full rollout before seeing measurable results. Our 4-week pilot &amp; prove engagement allows you to validate technical feasibility, quantify ROI, and forecast operational token costs – before scaling to production. This is a fixed-scope, fixed-price sandbox designed to eliminate uncertainty.
            </p>
            <div className={styles.processGrid}>
              {PILOT.map((step, i) => (
                <div key={step.title} className={styles.processStep}>
                  <div className={styles.processNum}>{i + 1}</div>
                  <div className={styles.processStepBody}>
                    <h3 className={styles.processStepTitle}>{step.title}</h3>
                    {step.paragraphs.map((p) => <p key={p} className={styles.processStepText}>{p}</p>)}
                    {step.bullets && <ul className={styles.processStepBullets}>{step.bullets.map((b) => <li key={b}>{b}</li>)}</ul>}
                    {step.outro && <p className={styles.processStepText}>{step.outro}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Let's Start ─────────────────────────────────────────────────── */}
        <LetsStart />

        {/* ── Awesome stories (blog) ──────────────────────────────────────── */}
        <AdlcBlog featured={RAG_BLOG_FEATURED} sidePosts={RAG_BLOG_SIDE} />
      </RagArticleLayout>
    </>
  );
}
