"use client";

import Image from "next/image";
import CaseCards, { type CaseCard } from "@/components/home/CaseCards";
import ServicesReviewSlider from "@/components/services/ServicesReviewSlider";
import ServicesAchievements, { type Badge } from "@/components/services/ServicesAchievements";
import ServicesFaqBlock, { type FaqItem } from "@/components/services/ServicesFaqBlock";
import LetsStart from "@/components/home/LetsStart";
import AdlcBlog from "@/components/adlc/AdlcBlog";
import OpenaiHero from "./OpenaiHero";
import OpenaiLogos from "./OpenaiLogos";
import OpenaiCrosslinks from "./OpenaiCrosslinks";
import OpenaiArticleLayout from "./OpenaiArticleLayout";
import styles from "./OpenaiPage.module.css";

// ─── ChatGPT-based software development services (6 cards) ───────────────────
const SERVICES: { icon: string; title: string; desc: string[]; linkText?: string; href?: string }[] = [
  {
    icon: "/openai-development/05_ChatGPT-application-development-03.svg",
    title: "ChatGPT app development",
    desc: [
      "We build custom ChatGPT-based applications for internal teams, customer portals, SaaS products, and enterprise workflows.",
      "Our team designs the application logic, user roles, data access rules, model routing, API integrations, and deployment setup, resulting in an LLM product that integrates seamlessly with your existing software environment.",
    ],
  },
  {
    icon: "/openai-development/05_RAG-vector-database-engineering-03.svg",
    title: "RAG & vector database engineering",
    desc: [
      "We do not rely only on what the model already knows. We build retrieval-augmented generation systems that connect the LLM to your company's knowledge.",
      "Our engineers design ETL pipelines that extract, clean, chunk, embed, and index data from sources such as SQL databases, PDFs, SharePoint, Google Drive, Confluence, and internal documentation. The LLM retrieves relevant context before generating an answer, which makes the system more useful for company-specific tasks.",
    ],
    linkText: "RAG development",
    href: "/services/rag-development",
  },
  {
    icon: "/openai-development/05_ChatGPT-integration-02.svg",
    title: "ChatGPT integration",
    desc: [
      "We integrate ChatGPT and other LLMs into existing web platforms, mobile apps, ERPs, CRMs, support systems, and analytics tools.",
      "The work can include API design, authentication, logging, permission checks, admin panels, prompt management, monitoring, and fallback logic. We also connect the LLM to business systems so it can assist with tasks rather than only answer questions.",
    ],
    linkText: "AI integration services",
    href: "/services/ai-software-development",
  },
  {
    icon: "/openai-development/05_LLM-agnostic-abstraction-layers-02.svg",
    title: "LLM-agnostic abstraction layers",
    desc: [
      "We build a routing layer that can switch between OpenAI, Azure OpenAI, Anthropic Claude, self-hosted Llama-family models, and other LLM endpoints based on cost, latency, availability, and compliance needs. This reduces vendor lock-in and gives your team more control over operating costs.",
    ],
    linkText: "LLM development",
    href: "/services/llm-development",
  },
  {
    icon: "/openai-development/05_AI-agent-development-03.svg",
    title: "AI agent development",
    desc: [
      "We build AI agents that can plan tasks, call tools, retrieve company knowledge, and interact with enterprise systems in accordance with defined rules.",
      "These agents can support workflows such as quote generation, vendor comparison, document review, order processing, internal support, and report drafting. For sensitive actions, we add human approval steps before the agent writes data back to a system.",
    ],
    linkText: "AI agent development",
    href: "/services/ai-software-development",
  },
  {
    icon: "/openai-development/05_Security-guardrails-and-prompt-injection-defense-03.svg",
    title: "Security guardrails and prompt injection defense",
    desc: [
      "We design middleware that checks user input, retrieved context, model output, and tool calls before they affect your application.",
      "This can include prompt injection detection, PII masking, output validation, access checks, audit logs, rate limits, and blocked-action policies. The goal is to keep the LLM useful without giving it uncontrolled access to data or business operations.",
    ],
  },
];

// ─── Wrapper approach vs Dual-Engine LLM architecture (table) ─────────────────
const COMPARE_HEAD = ["Wrapper approach", "Dual-Engine LLM architecture"];
const COMPARE_ROWS: [string, string][] = [
  ["Static prompts with limited company context", "Dynamic semantic retrieval from approved company sources"],
  ["One model provider hardcoded into the app", "Routing layer for OpenAI, Claude, Azure-hosted models, and self-hosted LLMs"],
  ["Broad access to copied documents", "Permission-aware retrieval with user-level access checks"],
  ["Little visibility into hallucinations", "Evaluation pipelines that score answer quality against the retrieved context"],
  ["Prompt injection handled only through instructions", "Input checks, output validation, tool permissions, and audit logs"],
  ["Token costs grow with every repeated query", "Token monitoring, caching, batching, and fallback rules"],
  ["Hard to scale beyond a demo", "Service architecture, CI/CD, observability, and support workflows"],
];

// ─── Tech stack (4 text-card lists) ───────────────────────────────────────────
const TECH_ROWS = [
  { title: "Vector databases", items: ["Pinecone", "Weaviate", "pgvector", "Elasticsearch vector search"] },
  { title: "Orchestration and agent frameworks", items: ["LangChain", "LlamaIndex", "CrewAI", "Semantic Kernel"] },
  { title: "LLMOps and evaluation", items: ["LangSmith", "TruLens", "RAGAS", "custom evaluation pipelines"] },
  { title: "Inference and model routing", items: ["LiteLLM", "vLLM", "OpenAI", "self-hosted open-source models"] },
];

// ─── Business benefits of custom ChatGPT software (6 dark cards) ─────────────
const BENEFITS = [
  { icon: "/openai-development/05_Agentic-workflow-automation-01.svg", title: "Agentic workflow automation", desc: "We build AI agents that can retrieve data, prepare documents, compare records, generate drafts, and start workflows in ERP, CRM, logistics, HR, and finance systems. Human approval can stay in the loop for financial, legal, medical, or customer-facing actions." },
  { icon: "/openai-development/05_Permission-aware-company-knowledge-access-04.svg", title: "Permission-aware company knowledge access", desc: "A company AI assistant should not expose HR, financial, legal, or customer data to employees who cannot access it in the source system. We design RAG pipelines that check the user's corporate identity before retrieving documents. The assistant can only use the data that the employee is allowed to view." },
  { icon: "/openai-development/05_Data-privacy-and-zero-retention-ready-architecture-01.svg", title: "Data privacy and zero-retention-ready architecture", desc: "For sensitive use cases, we design architectures that limit what leaves your environment. This can include Azure OpenAI private networking, provider-level data controls, local PII redaction, encrypted storage, audit logging, and self-hosted LLM deployment. The exact setup depends on your compliance needs and the provider terms selected for the project." },
  { icon: "/openai-development/05_Lower-operational-cost-through-LLMOps-01.svg", title: "Lower operational cost through LLMOps", desc: "LLM costs can rise quickly when every user request goes straight to the most expensive model. We add model routing, semantic caching, token budgets, prompt compression, context trimming, and usage dashboards. Your team gets more control over API spend without removing the AI features users need." },
  { icon: "/openai-development/05_Better-answers-from-governed-data-pipelines-02.svg", title: "Better answers from governed data pipelines", desc: "A useful LLM application depends on the data pipeline behind it. We prepare enterprise knowledge for retrieval by cleaning documents, structuring metadata, splitting content into meaningful chunks, embedding it into a vector database, and testing retrieval quality. This gives the model better context and reduces unsupported answers." },
  { icon: "/openai-development/05_Safer-AI-behavior-in-production-01.svg", title: "Safer AI behavior in production", desc: "Enterprise AI needs boundaries around data, actions, and output. We add guardrails for prompt injection, sensitive data exposure, excessive tool access, invalid output, and unsupported claims. The system is tested before launch and monitored after deployment." },
];

// ─── Agentic blueprints for enterprise use cases (Industries, 4 cards) ────────
const INDUSTRIES: { icon: string; title: string; desc: string[]; linkText?: string; href?: string }[] = [
  {
    icon: "/openai-development/05_compliance-and-audit-copilots-01.svg",
    title: "FinTech: compliance and audit copilots",
    desc: [
      "We build RAG-based assistants that retrieve internal policies, regulatory documents, contract clauses, transaction records, and audit notes.",
      "Risk and compliance teams can ask questions across large document sets, compare contract language against internal rules, and prepare review notes with source references. Access controls restrict which records each user can retrieve.",
    ],
    linkText: "Fintech software development",
    href: "/services/financial-software-development",
  },
  {
    icon: "/openai-development/05_Logistics-and-supply-chain-02.svg",
    title: "Logistics and supply chain: autonomous RFQ agents",
    desc: [
      "We build agentic workflows that process inbound vendor emails, extract pricing terms, compare them with ERP data, and draft negotiation responses.",
      "A human reviewer can approve the response before the system sends it or updates the CRM. This keeps procurement teams in control while reducing manual comparison work.",
    ],
    linkText: "Logistics software development",
    href: "/industries/logistics-software-development",
  },
  {
    icon: "/openai-development/05_Healthcare-01.svg",
    title: "Healthcare: clinical operations assistants",
    desc: [
      "We build AI assistants for administrative and operational workflows, such as patient intake support, appointment coordination, insurance document processing, and internal knowledge search.",
      "For regulated environments, we design access controls, PII masking, audit logs, and deployment architecture to meet the organization's compliance requirements.",
    ],
    linkText: "Healthcare software development",
    href: "/industries/healthcare-software-development",
  },
  {
    icon: "/openai-development/05_Manufacturing-04.svg",
    title: "Manufacturing: maintenance and operations copilots",
    desc: [
      "We connect LLMs to manuals, machine logs, maintenance records, sensor summaries, and internal procedures.",
      "Engineers can ask questions about equipment behavior, retrieve troubleshooting steps, compare historical incidents, and prepare maintenance notes. The system can suggest next steps while leaving final decisions to the responsible team.",
    ],
  },
];

// ─── Awards & recognitions (11 badges) ────────────────────────────────────────
const OPENAI_BADGES: Badge[] = [
  { src: "/openai-development/05_top_clutch.co_generative_ai_company_boston_2026-2.svg", alt: "Clutch 2026 — Top Generative AI Company in Boston" },
  { src: "/openai-development/06_techreviewer_badge_2026-15.svg", alt: "techreviewer.co 2026 — Top GenAI Development Companies" },
  { src: "/openai-development/05_top_clutch.co_artificial_intelligence_company_boston_2026-2.svg", alt: "Clutch 2026 — Top Artificial Intelligence Company in Boston" },
  { src: "/openai-development/06_techreviewer_badge_2026-01.svg", alt: "techreviewer.co 2026 — Top AI Consulting Companies" },
  { src: "/openai-development/06_techreviewer_badge_2026-02.svg", alt: "techreviewer.co 2026 — Top AI Readiness Assessment Companies" },
  { src: "/openai-development/06_top-ai-development-companies.svg", alt: "GoodFirms — Top AI Development Company" },
  { src: "/openai-development/06_techreviewer_badge_2026-04.svg", alt: "techreviewer.co 2026 — Top AI Software Development Companies" },
  { src: "/openai-development/06_techreviewer_badge_2026-16.svg", alt: "techreviewer.co 2026 — Top AI Integration Companies" },
  { src: "/openai-development/06_techreviewer_badge_2026-03.svg", alt: "techreviewer.co 2026 — Top AI PoC Development Companies" },
  { src: "/openai-development/06_techreviewer_badge_2026-05.svg", alt: "techreviewer.co 2026 — Top AI Agents Development Companies" },
  { src: "/openai-development/06_techreviewer_badge_2026-06.svg", alt: "techreviewer.co 2026 — Top RAG Development Companies" },
  { src: "/openai-development/06_techreviewer_badge_2026-07.svg", alt: "techreviewer.co 2026 — Top LLM Development Companies" },
];

// ─── Recent software we made → Case studies (3) ───────────────────────────────
const OPENAI_CASES: CaseCard[] = [
  {
    banner: "/openai-development/04_Cover-right-1-1.png",
    name: "AI · Insurance",
    title: "AI readiness assessment for an insurance company",
    text: "An AI readiness assessment for a European insurance group that identified up to 35% projected cost reduction in claims processing, with two use cases launched in a pilot across three business units.",
    href: "/portfolio/ai-readiness-assessment-for-insurance-company",
    tags: ["AI inside", "Enterprise"],
  },
  {
    banner: "/openai-development/05_Cover-right-1.png",
    name: "AI · Retail",
    title: "AI-driven legacy online retail platform modernization",
    text: "Nexterse LLC modernized a UK omnichannel retailer's legacy eCommerce platform to headless commerce – without disrupting checkout or payment flows – enabling AI-driven personalization that improved product conversion rates by 25%.",
    href: "/portfolio/ai-driven-legacy-online-retail-platform-modernization",
    tags: ["AI inside", "Enterprise"],
  },
  {
    banner: "/openai-development/10_Cover-2-1.png",
    name: "AI · Healthcare",
    title: "AI patient-flow platform for dental imaging",
    text: "A HIPAA-aligned AI platform for a dental imaging provider that reduced wait times by 37%, increased daily throughput by 22%, and lowered no-shows by 29%.",
    href: "/portfolio/hipaa-compliant-ai-powered-patient-management-platform-for-a-dental-imaging-provider",
    tags: ["AI inside", "Enterprise"],
  },
];

// ─── ADLC process for ChatGPT and LLM applications (7 phases) ────────────────
const PROCESS = [
  { title: "AI feasibility sprint", text: "We start with a 2- to 4-week feasibility sprint when the use case, data quality, or operating costs need proof before full development. Our team reviews the target workflow, samples the data, builds a small RAG or agentic prototype, and estimates token usage, latency, retrieval quality, and implementation risks. You get a working prototype and an architecture blueprint before committing to a full build." },
  { title: "Data discovery and access design", text: "We map the data sources the LLM may use and the systems it may interact with. This includes company documents, databases, CRM records, ERP data, ticket histories, product catalogs, policies, and third-party APIs. We also define user roles, access rules, retention limits, logging requirements, and approval steps." },
  { title: "Vectorization and RAG engineering", text: "We build the retrieval pipeline that turns company knowledge into a searchable context. The work can include OCR, document parsing, semantic chunking, metadata design, embedding generation, vector indexing, re-ranking, and retrieval testing. The LLM receives only the context needed for a given task." },
  { title: "Agentic architecture and tool integration", text: "We design how the LLM will interact with business systems. For assistant use cases, this may mean search and summarization. For agentic workflows, it can include tool calls, API actions, workflow orchestration, human approval gates, rollback logic, and admin controls." },
  { title: "Security guardrails and red-team testing", text: "We test the system against prompt injection, unauthorized data access, unsafe tool calls, sensitive data exposure, and invalid outputs. Then we add controls such as input classifiers, output validators, PII redaction, role-based retrieval, allowlisted tools, and audit trails." },
  { title: "LLMOps deployment", text: "We prepare the application for production use. This includes CI/CD, prompt versioning, evaluation datasets, monitoring dashboards, model fallback rules, token budgets, semantic caching, and incident response procedures." },
  { title: "Continuous evaluation and improvement", text: "After launch, we monitor answer quality, retrieval precision, hallucination risk, latency, cost, and user feedback. When source data, prompts, models, or business rules change, we update the evaluation suite and deployment controls to maintain system stability." },
];

// ─── FAQ (8) ───────────────────────────────────────────────────────────────────
const OPENAI_FAQ: FaqItem[] = [
  { question: "How do you prevent the LLM from hallucinating when answering questions about our company data?", answer: "We use retrieval-augmented generation, which means the model receives relevant context from your approved knowledge base before answering. We also add evaluation checks that compare the answer against the retrieved context. For higher-risk use cases, the system can block low-confidence answers, show source references, or route the request to a human reviewer." },
  { question: "What happens if an employee tries to access sensitive HR or financial data through the AI copilot?", answer: "We build permission-aware retrieval. The system verifies the employee's corporate identity using tools such as Okta, Microsoft Entra, or other identity providers. The RAG pipeline retrieves only the documents and records that the user is allowed to access." },
  { question: "How do you reduce prompt injection risk?", answer: "We add guardrails before and after the LLM call. The architecture can include input classification, prompt injection detection, retrieved-context validation, output checks, allowlisted tools, and audit logs. If a request tries to override system instructions or access restricted data, the middleware can block it before it reaches the core workflow." },
  { question: "Do we have to send confidential customer data to OpenAI?", answer: "No. The right architecture depends on your compliance needs, provider terms, and deployment requirements. Options can include Azure OpenAI with enterprise data controls, OpenAI API with configured retention settings, local PII redaction before the LLM call, or self-hosted open-source models deployed inside your infrastructure." },
  { question: "Why do we need RAG if modern models support very large context windows?", answer: "Large context windows do not remove the need for retrieval. Sending long prompts is expensive and can degrade answer quality when relevant information is buried deep within a long input. Research on long-context models found that performance can drop when the relevant information appears in the middle of the context. RAG reduces the prompt to the most relevant passages and helps control cost." },
  { question: "What happens if our main LLM provider is down or rate-limited?", answer: "We can design the application with an LLM routing layer. If the primary model endpoint fails, times out, or reaches a rate limit, the application can route selected requests to another approved model. The fallback behavior depends on the use case, response requirements, compliance rules, and available providers." },
  { question: "Should we fine-tune a model on our internal data or use RAG?", answer: "Most enterprise knowledge assistant use cases start with RAG. RAG connects the model to current company data without retraining it whenever a document changes. Fine-tuning is more useful when the model needs to follow a narrow output style, domain-specific syntax, coding patterns, or a regulated document format." },
  { question: "Can an LLM work with scanned PDFs, old decks, and messy SharePoint folders?", answer: "Yes, but the data pipeline matters. Before integrating the LLM, we can build ETL pipelines that extract text through OCR, parse documents, split content into meaningful chunks, add metadata, and index the cleaned content in a vector database. The assistant then retrieves prepared knowledge instead of guessing from raw files." },
  { question: "How do you test an LLM application if the answers vary?", answer: "We replace simple pass/fail testing with evaluation pipelines. Before deployment, we test prompts against expected behavior and score outputs for retrieval quality, context use, faithfulness, formatting, and unsafe content. If a new build fails to meet the accepted threshold, the deployment can be blocked or sent for review." },
];

// ─── Why Nexterse LLC (6 dark cards) ──────────────────────────────────────────
const WHY = [
  { icon: "/openai-development/05_AI-feasibility-and-strategy-sprint-01.svg", title: "AI feasibility and strategy sprint", desc: "Before writing the core application code, we can run a 2- to 4-week AI feasibility sprint. We take a sample of your enterprise data, build a localized RAG proof of concept, and measure retrieval quality, response accuracy, token cost, latency, and implementation risk. You get a working prototype and an architecture blueprint before the full build." },
  { icon: "/openai-development/05_Data-privacy-and-PII-redaction-architecture-02.svg", title: "Data privacy and PII redaction architecture", desc: "We design data flows that reduce exposure of sensitive information. For use cases that need additional protection, we add PII redaction middleware before the LLM call. Local models can mask sensitive fields such as financial data, patient names, customer records, and employee identifiers. After the LLM responds, middleware restores the allowed data for authorized users." },
  { icon: "/openai-development/05_AI-tech-debt-rescue-02.svg", title: "AI tech debt rescue", desc: "We help teams replace fragile AI prototypes with maintainable software. Our engineers refactor unstructured LangChain scripts, unstable vector searches, unmanaged prompts, and single-provider integrations into production-ready services. The new architecture can include RBAC, monitoring, model routing, caching, CI/CD, and support workflows." },
  { icon: "/openai-development/05_LLMOps-and-token-cost-management-02.svg", title: "LLMOps and token cost management", desc: "We build cost controls into the application architecture. This can include semantic caching with Redis, model routing, token budgets, context trimming, fallback models, and usage dashboards. Repeated or low-risk requests can be routed away from expensive model calls when the architecture allows it." },
  { icon: "/openai-development/05_Dual-Engine-engineering-approach-02.svg", title: "Dual-Engine engineering approach", desc: "Nexterse LLC combines traditional software engineering with the Agentic Development Lifecycle. The SDLC side covers deterministic application logic, APIs, databases, UI, infrastructure, and integrations. The ADLC side covers prompts, RAG, agents, guardrails, model evaluations, red-team testing, and LLMOps." },
  { icon: "/openai-development/05_Enterprise-software-background-01.svg", title: "Enterprise software background", desc: "Nexterse LLC has experience building custom software for enterprise workflows, regulated data, legacy integrations, and long-term product support. For LLM projects, this matters because the AI layer still needs stable software architecture, secure deployment, user management, observability, and maintainable code." },
];

// ─── Quick facts (key numbers) ─────────────────────────────────────────────────
const QUICK_FACTS = [
  { number: "98", suffix: "%", title: "User satisfaction rate" },
  { number: "350", suffix: "+", title: "Successful projects" },
  { number: "3", suffix: "+", title: "Years' Client engagement" },
];

export default function OpenaiPage() {
  return (
    <>
      <OpenaiHero />
      <OpenaiLogos />

      <OpenaiArticleLayout>
        {/* ── ChatGPT-based software development services (6 cards) ────────── */}
        <section id="oai-services" className={styles.blockWhite}>
          <div className="container">
            <h2 className={styles.sectionTitle}>ChatGPT-based software development <span className={styles.accent}>services</span></h2>
            <div className={styles.ecomServicesGrid}>
              {SERVICES.map((c) => (
                <div key={c.title} className={styles.ecomServiceCard}>
                  <Image src={c.icon} alt={c.title} width={56} height={56} className={styles.ecomServiceIcon} />
                  <h3 className={styles.ecomServiceTitle}>{c.title}</h3>
                  {c.desc.map((p) => <p key={p} className={styles.ecomServiceIntro}>{p}</p>)}
                  {c.href && (
                    <a href={c.href} className={styles.cardLink}>
                      {c.linkText} <span aria-hidden>&rarr;</span>
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* ── Wrapper approach vs Dual-Engine LLM architecture (table) ──── */}
            <div className={styles.compareWrap}>
              <table className={styles.compareTable}>
                <thead>
                  <tr>{COMPARE_HEAD.map((h) => <th key={h} scope="col">{h}</th>)}</tr>
                </thead>
                <tbody>
                  {COMPARE_ROWS.map((row) => (
                    <tr key={row[0]}>
                      <td>{row[0]}</td>
                      <td>{row[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── CTA: Let's make OpenAI-powered software ───────────────────────── */}
        <div className={styles.inlineCta}>
          <div className="container">
            <div className={styles.inlineCtaInner}>
              <div>
                <h2 className={styles.inlineCtaTitle}>Let&rsquo;s make OpenAI-powered software designed to solve your specific challenges.</h2>
                <p className={styles.inlineCtaDesc}>Book a free consultation and let&rsquo;s build something groundbreaking!</p>
              </div>
              <a href="https://meetings.hubspot.com/elizabeth-khrushchynskaya" target="_blank" rel="noreferrer" className={`btn btn-accent ${styles.inlineCtaBtn}`}>Book a call</a>
            </div>
          </div>
        </div>

        {/* ── GenAI technology stack ────────────────────────────────────────── */}
        <section id="oai-techstack" className={styles.blockLight}>
          <div className="container">
            <h2 className={styles.sectionTitle}>GenAI technology <span className={styles.accent}>stack</span></h2>
            <div className={styles.techListGrid}>
              {TECH_ROWS.map((row) => (
                <div key={row.title} className={styles.techListCard}>
                  <h3 className={styles.techListTitle}>{row.title}</h3>
                  <ul>{row.items.map((i) => <li key={i}>{i}</li>)}</ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Business benefits of custom ChatGPT software (dark) ───────────── */}
        <section id="oai-benefits" className={styles.blockDark}>
          <div className="container">
            <h2 className={styles.sectionTitleWhite}>Business <span className={styles.accent}>benefits</span> of custom ChatGPT software</h2>
            <div className={styles.cardsRow3}>
              {BENEFITS.map((c) => (
                <div key={c.title} className={styles.serviceCardDark}>
                  <Image src={c.icon} alt={c.title} width={56} height={56} className={styles.cardIcon} />
                  <h3 className={styles.cardTitleWhite}>{c.title}</h3>
                  <p className={styles.cardDescWhite}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA: Have a vision for an AI-powered app? ─────────────────────── */}
        <div className={styles.inlineCta}>
          <div className="container">
            <div className={styles.inlineCtaInner}>
              <div>
                <h2 className={styles.inlineCtaTitle}>Have a vision for an AI-powered app? Our expert developers can bring it to life with OpenAI&rsquo;s cutting-edge models.</h2>
                <p className={styles.inlineCtaDesc}>Let&rsquo;s discuss your project!</p>
              </div>
              <a href="#get-modal-popup" className={`btn btn-accent ${styles.inlineCtaBtn}`}>Get in Touch</a>
            </div>
          </div>
        </div>

        {/* ── Agentic blueprints for enterprise use cases (Industries) ──────── */}
        <section id="oai-industries" className={styles.blockWhite}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Agentic blueprints for <span className={styles.accent}>enterprise use cases</span></h2>
            <div className={styles.ecomServicesGrid}>
              {INDUSTRIES.map((c) => (
                <div key={c.title} className={styles.ecomServiceCard}>
                  <Image src={c.icon} alt={c.title} width={56} height={56} className={styles.ecomServiceIcon} />
                  <h3 className={styles.ecomServiceTitle}>{c.title}</h3>
                  {c.desc.map((p) => <p key={p} className={styles.ecomServiceIntro}>{p}</p>)}
                  {c.href && (
                    <a href={c.href} className={styles.cardLink}>
                      {c.linkText} <span aria-hidden>&rarr;</span>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Awards & recognitions ─────────────────────────────────────────── */}
        <ServicesAchievements
          badges={OPENAI_BADGES}
          description="Nexterse LLC has been recognized by the leading analytics agencies as the top ChatGPT application development company worldwide. Our values and expertise help us provide professional ChatGPT application development services."
        />

        {/* ── Recent software we made → Case studies + Reviews ──────────────── */}
        <div id="oai-cases">
          <CaseCards
            heading={<>Recent <span>software</span> we made</>}
            cards={OPENAI_CASES}
            windowed
          />
        </div>
        <ServicesReviewSlider />

        {/* ── CTA: From virtual assistants to AI-driven analytics ───────────── */}
        <div className={styles.inlineCta}>
          <div className="container">
            <div className={styles.inlineCtaInner}>
              <div>
                <h2 className={styles.inlineCtaTitle}>From virtual assistants to AI-driven analytics—unlock the potential of ChatGPT.</h2>
                <p className={styles.inlineCtaDesc}>Talk to our experts!</p>
              </div>
              <a href="#get-modal-popup" className={`btn btn-accent ${styles.inlineCtaBtn}`}>Get in Touch</a>
            </div>
          </div>
        </div>

        {/* ── Our ADLC process for ChatGPT and LLM applications (dark) ─────── */}
        <section id="oai-process" className={styles.blockDark}>
          <div className="container">
            <h2 className={styles.sectionTitleWhite}>Our ADLC process for ChatGPT and <span className={styles.accent}>LLM applications</span></h2>
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

        {/* ── FAQ: Things to Know about ChatGPT Development ─────────────────── */}
        <div id="oai-faq">
          <ServicesFaqBlock items={OPENAI_FAQ} />
        </div>

        {/* ── Why Nexterse LLC (dark cards) ─────────────────────────────────── */}
        <section id="oai-why" className={styles.blockDark}>
          <div className="container">
            <h2 className={styles.sectionTitleWhite}><span className={styles.accent}>Why</span> Nexterse LLC</h2>
            <div className={styles.cardsRow3}>
              {WHY.map((c) => (
                <div key={c.title} className={styles.serviceCardDark}>
                  <Image src={c.icon} alt={c.title} width={56} height={56} className={styles.cardIcon} />
                  <h3 className={styles.cardTitleWhite}>{c.title}</h3>
                  <p className={styles.cardDescWhite}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Key numbers about Nexterse LLC ────────────────────────────────── */}
        <section className={styles.blockWhite}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Key <span className={styles.accent}>numbers</span> about Nexterse LLC</h2>
            <div className={styles.quickFactsGrid}>
              {QUICK_FACTS.map((f) => (
                <div key={f.title}>
                  <div className={styles.quickFactNumber}>{f.number}<span>{f.suffix}</span></div>
                  <div className={styles.quickFactTitle}>{f.title}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Let's Start ────────────────────────────────────────────────────── */}
        <LetsStart />

        {/* ── More about (crosslinks) ────────────────────────────────────────── */}
        <OpenaiCrosslinks />

        {/* ── We have awesome stories to tell you ───────────────────────────── */}
        <AdlcBlog
          featured={{
            href: "https://sumatosoft.com/blog/top-chatgpt-alternatives-for-business-use",
            title: "Top 10 ChatGPT Alternatives for Business Use in 2026",
            image: "/openai-development/04_AI-alternatives-1024x578.jpg",
            imageAlt: "AI alternatives",
            readTime: "37 mins",
            date: "December 24, 2025",
          }}
          sidePosts={[
            {
              href: "https://sumatosoft.com/blog/top-ai-development-companies",
              title: "Top Choice: 20 AI Development Companies in 2026",
              readTime: "38 mins",
              date: "January 8, 2026",
            },
            {
              href: "https://sumatosoft.com/blog/ai-development-costs",
              title: "What Affects AI Development Cost in 2026",
              readTime: "40 mins",
              date: "March 11, 2026",
            },
            {
              href: "https://sumatosoft.com/blog/integrating-ai-into-business",
              title: "Integrating AI into Business: A Complete Guide For 2026",
              readTime: "36 mins",
              date: "March 9, 2025",
            },
          ]}
        />
      </OpenaiArticleLayout>
    </>
  );
}
