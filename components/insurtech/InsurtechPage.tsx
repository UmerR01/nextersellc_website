"use client";

import { useState } from "react";
import Image from "next/image";
import CaseCards from "@/components/home/CaseCards";
import ServicesReviewSlider from "@/components/services/ServicesReviewSlider";
import ServicesAchievements, { type Badge } from "@/components/services/ServicesAchievements";
import ServicesFaqBlock, { type FaqItem } from "@/components/services/ServicesFaqBlock";
import LetsStart from "@/components/home/LetsStart";
import AwesomeStories from "@/components/blog/AwesomeStories";
import InsurtechHero from "./InsurtechHero";
import AipocLogos from "@/components/aipoc/AipocLogos";
import ArticleLayout from "@/components/shared/ArticleLayout";
import styles from "./InsurtechPage.module.css";

// ─── Challenges (4 cards) ─────────────────────────────────────────────────────
const CHALLENGES = [
  {
    icon: "/insurtech-development/06_Disconnected-legacy-systems-and-EDI-bottlenecks-02.svg",
    title: "Disconnected legacy core systems and ACORD bottlenecks",
    desc: "Our InsurTech solutions unify these environments through API architecture and semantic middleware. Legacy policy administration, ACORD flat files, broker feeds, and claims data are translated into a single, structured operational layer, so underwriters and claims teams work from one source of truth instead of re-keying data across siloed core systems.",
  },
  {
    icon: "/insurtech-development/06_The-driver-shortage-and-retention-crisis-02.svg",
    title: "Slow, manual underwriting and quote-to-bind",
    desc: "Our AI-driven underwriting workflows evaluate risk signals, third-party data, and policy rules in real time. This collapses quote-to-bind from days to minutes, raises straight-through processing rates, and lets underwriters focus their time on the complex, high-value risks that actually need human judgment.",
  },
  {
    icon: "/insurtech-development/06_Freight-fraud-and-double-brokering-defense-02.svg",
    title: "Insurance fraud and deepfake claims defense",
    desc: "Our claims integrations include behavioral AI and automated fraud scoring. Claim patterns, image authenticity, document provenance, and ghost-broker signals are continuously evaluated, helping SIU teams flag AI-generated evidence and suspicious activity before payouts are approved.",
  },
  {
    icon: "/insurtech-development/06_Autonomous-supply-chain-control-01.svg",
    title: "Continuous, autonomous claims processing",
    desc: "AI claims control towers provide continuous monitoring of FNOL intake, third-party data, adjuster capacity, reserve movements, and regulatory deadlines. This architecture supports automated triage, straight-through settlement of simple claims, and more predictable performance across the claims lifecycle.",
  },
];

// ─── Solutions (4 rich cards) ─────────────────────────────────────────────────
const SOLUTIONS = [
  {
    title: "Autonomous underwriting and claims control",
    blocks: [
      { head: "AI underwriting control towers", text: "Control towers monitor submissions, third-party data, exposure limits, and portfolio appetite in real time. When a risk falls inside defined rules, the system can auto-quote, bind, or route the case to an underwriter with a full risk summary." },
      { head: "Digital twin of the risk portfolio", text: "A digital twin creates a virtual model of your book using policy, exposure, and claims data. Teams can stress-test scenarios like a catastrophe event, rate change, or reinsurance shift before they affect live results." },
      { head: "Regulatory and NAIC compliance AI", text: "Compliance pipelines process model decisions, rating factors, and adverse-action reasons, automatically generating audit-ready documentation aligned with the NAIC Model Bulletin on the use of AI in insurance." },
    ],
  },
  {
    title: "Policy administration and distribution",
    blocks: [
      { head: "Agentic quote-to-bind", text: "AI agents process submissions, pull third-party data, apply rating rules, check appetite, and issue a bound policy with minimal manual work." },
      { head: "Policy administration software", text: "Quoting, issuance, endorsements, renewals, billing, and reporting are centralized within one streamlined policy lifecycle." },
      { head: "Continuous underwriting", text: "Underwriting combines telematics and third-party data to reassess risk in real time rather than only at annual renewal." },
      { head: "Digital distribution and agent portals", text: "Agent, broker, and direct-to-consumer portals handle quoting, document upload, e-signature, and policy servicing in a single flow." },
    ],
  },
  {
    title: "Claims, documents, and fraud integrity",
    blocks: [
      { head: "Predictive claims triage", text: "Machine learning models score incoming claims by severity and complexity, fast-tracking simple claims and routing complex ones to the right adjuster." },
      { head: "Computer vision damage assessment", text: "Computer vision evaluates photos and video of damage to estimate loss, detect inconsistencies, and support faster, more consistent claims decisions." },
      { head: "Deepfake and fraud detection", text: "AI models verify image authenticity, document provenance, and claimant behavior to flag AI-generated evidence and organized fraud before payout." },
      { head: "Document intelligence for FNOL", text: "Document understanding extracts structured data from ACORD forms, police reports, and medical records, removing manual intake from first notice of loss." },
    ],
  },
  {
    title: "Policyholder experience and operational efficiency",
    blocks: [
      { head: "Policyholder self-service", text: "Policy details, payments, claims filing, and status tracking are handled in a single branded app or portal, reducing call-center load." },
      { head: "Pricing and premium optimization", text: "Optimization systems continuously analyze loss experience, elasticity, and competitor rates to inform pricing decisions across the book." },
      { head: "Agent and adjuster activity monitoring", text: "Monitoring tracks productivity, cycle times, leakage, and SLA compliance across underwriting and claims operations." },
    ],
  },
];

// ─── Improves itself (3 cards) ────────────────────────────────────────────────
const IMPROVES = [
  {
    icon: "/insurtech-development/06_Internet-of-Things-and-telematics-systems-02.svg",
    title: "Telematics and usage-based insurance analytics",
    desc: "Connected vehicles, homes, and wearables continuously generate the data that defines risk, pricing, and prevention. Our telematics solutions create a single environment across underwriting and claims, giving actuaries, underwriters, and leadership full visibility into how policyholders behave and how risk changes over time.",
    linkLabel: "Custom software development",
    href: "/services/custom-software-development",
  },
  {
    icon: "/insurtech-development/06_Artificial-intelligence-and-agentic-workflows-01.svg",
    title: "Artificial intelligence and agentic workflows",
    desc: "Our AI solutions turn insurance operations into faster, more coordinated systems. AI works directly with policy administration and claims environments, processing live data and executing approved business logic within clearly defined rules. Your teams get faster decisions, stronger consistency, and fewer manual bottlenecks across daily operations.",
    linkLabel: "AI development",
    href: "/services/ai-software-development",
  },
  {
    icon: "/insurtech-development/06_Big-Data-and-machine-learning-02.svg",
    title: "Big Data and ML",
    desc: "Our Big Data and machine learning solutions turn fragmented policy and claims data into a continuous optimization layer across the insurance lifecycle. Pricing, reserving, and portfolio management move into one continuous process, so results stay predictable, loss ratios improve, and capital allocation becomes significantly more precise.",
    linkLabel: "Big Data development",
    href: "/services/big-data-development",
  },
];

// ─── Cases (5) ────────────────────────────────────────────────────────────────


// ─── Roadmap (3 phases) ───────────────────────────────────────────────────────
const ROADMAP = [
  {
    title: "Phase 1 – Core system and API auditing",
    paragraphs: [
      "The first step is an audit of your operational environment – core policy administration, claims workflows, and critical integration points across the insurance lifecycle.",
      "During this stage, we identify where manual work and system gaps create delays, increase leakage, and slow underwriting and claims. We also define baseline KPIs so every technical decision directly supports measurable business outcomes and loss-ratio improvement.",
      "At the end of this phase, you receive:",
    ],
    bullets: ["A system blueprint", "Integration architecture", "Rollout priorities", "A clear ROI model"],
  },
  {
    title: "Phase 2 – Shadow AI pilot",
    paragraphs: [
      "Before replacing operational workflows, the new system runs in parallel with your existing process. AI-driven underwriting and claims triage work alongside human teams while live operations continue without interruption. This lets us validate decision reliability and measure real impact under production conditions.",
      "Leadership receives clear proof of cost savings and accuracy improvements before production cutover, along with go/no-go criteria for scaling the solution across lines of business.",
    ],
    bullets: [],
  },
  {
    title: "Phase 3 – Compliance validation and phased rollout",
    paragraphs: [
      "We devote the third phase to validation against regulatory and audit requirements. Model decisions, adverse-action reasoning, and data lineage are tested to ensure the system holds up under examination and NAIC-aligned scrutiny. After validation, rollout moves in controlled stages across products, states, and teams.",
      "Deployment includes:",
    ],
    bullets: ["A controlled rollout", "Team enablement and education", "Post-launch operational support"],
  },
];

// ─── Cost factors (5 vertical tabs) ───────────────────────────────────────────
const COST_TABS = [
  {
    label: "Project complexity",
    desc: "The major portion of the price depends on a project's volume and complexity. Since insurance solutions vary from a single policyholder mobile app to an enterprise platform combining policy administration, underwriting, claims, and analytical dashboards, we discuss each business idea individually with a Client to offer the best quality-price ratio.",
  },
  {
    label: "UI/UX design",
    desc: "The cost of the UX/UI design portion of the project depends on the labor intensity that the frontend requires across agent, adjuster, and policyholder experiences.",
  },
  {
    label: "Third-party integrations",
    desc: "The more integrations you need – rating engines, third-party data, payment, e-signature, and legacy core systems – the more complex the architecture might be, or just the time needed to configure everything properly.",
  },
  {
    label: "Team composition",
    desc: "The composition and seniority of the team directly affect the budget and speed. Not only developers are needed, but also a business analyst with experience in insurance, UI/UX, QA (including autotests), DevOps/Cloud, and sometimes data/ML and actuarial specialists. A large team speeds up releases, but increases budget “burning” and the synchronization load; a small one is cheaper, but takes longer.",
  },
  {
    label: "Post-launch support",
    desc: "We recommend that you do not neglect post-release support. It includes monitoring, alerts, security patches, dependency updates, response to changes in third-party APIs, minor improvements, infrastructure maintenance (cloud, networks, storage), and SLA reporting. It's also valuable to get post-launch user training and development according to the roadmap.",
  },
];

// ─── Why Nexterse (4 cards) ───────────────────────────────────────────────────
const WHY_CARDS = [
  {
    icon: "/insurtech-development/06_ROI-first-architecture-02.svg",
    title: "ROI-first architecture",
    desc: "Every project starts with business economics. We define KPIs such as loss ratio, combined ratio, quote-to-bind time, straight-through processing rate, claims cycle time, and leakage before development begins. This allows leadership to see clear ROI, controlled TCO, and measurable business impact. 98% of our Clients are satisfied with our delivery quality, and 70% return with another project.",
  },
  {
    icon: "/insurtech-development/06_Legacy-EDI-to-AI-translation-01.svg",
    title: "Legacy core to AI translation",
    desc: "Your partners and core systems still run on ACORD flat files and legacy policy administration. AI needs structured APIs. We build semantic middleware that converts legacy formats into structured JSON and routes them into production-ready business systems and vector databases. This makes decades of insurance infrastructure usable for automation, analytics, and AI without replacing your ecosystem.",
  },
  {
    icon: "/insurtech-development/06_Fleet-ready-deployment-approach-01.svg",
    title: "Production-ready deployment approach",
    desc: "We use shadow pilots, parallel validation, and phased rollout before production cutover. AI underwriting runs alongside your underwriters first, claims triage is validated against historical outcomes, and automation is proven in live operations before it takes on more responsibility.",
  },
  {
    icon: "/insurtech-development/06_Enterprise-grade-security-and-system-reliability-01.svg",
    title: "Enterprise-grade security and compliance",
    desc: "We use ISO 9001- and ISO 27001-aligned processes, role-based access control, encrypted data flows, audit trails, and a zero-trust API architecture. AI agents never have direct access to the core database. All sensitive actions move through controlled middleware, so policyholder data stays protected and regulatory risk is minimal.",
  },
];

// ─── FAQ (5) ──────────────────────────────────────────────────────────────────
const INS_FAQ: FaqItem[] = [
  {
    question: "How do you prevent an AI underwriting model from making biased or non-compliant decisions?",
    answer: "We never let a black-box model decide alone. We engineer a Dual-Engine Underwriting Architecture. Deterministic, auditable rules enforce eligibility, filed rates, and regulatory constraints, while machine learning scores risk within those boundaries. Every decision produces an explainable reason code and adverse-action documentation, aligned with the NAIC Model Bulletin, so compliance teams can defend it under examination.",
  },
  {
    question: "Can we deploy AI claims automation without losing control over reserves and large-loss decisions?",
    answer: "Yes. We engineer Human-in-the-Loop claims workflows. AI handles straight-through settlement for simple, low-value claims and triages the rest. Any claim above a configurable severity, reserve, or fraud-score threshold is automatically escalated to a human adjuster with a full evidence summary, so automation accelerates volume without ever auto-paying a complex or high-exposure loss.",
  },
  {
    question: "How do we safely integrate Agentic AI workflows with our legacy on-premises policy administration system (e.g., Guidewire or a mainframe)?",
    answer: "We do not rely on fragile screen scraping or direct database injection. We engineer Zero-Trust API Abstraction Layers. We build secure middleware that sits in front of your core system. AI agents interact only with this middleware using strictly formatted webhooks and REST APIs. This lets the AI draft endorsements and update records without ever gaining direct, dangerous access to your core policy database.",
  },
  {
    question: "Can AI detect AI-generated or manipulated evidence in claims photos and documents?",
    answer: "Yes. As deepfake and photo-editing fraud rises, we engineer multi-signal authenticity checks. The system analyzes image metadata, pixel-level manipulation artifacts, document provenance, and claimant behavior patterns, then combines these into a fraud score. Suspicious submissions are routed to your SIU team with the specific signals that triggered the flag, rather than being auto-approved.",
  },
  {
    question: "How do you handle the massive data volume of continuous underwriting from telematics devices?",
    answer: "Sending millions of telemetry pings to a central database every second will crash standard applications and inflate cloud costs. We use Distributed Stream Processing Architectures (such as Apache Flink). This lets our systems process, filter, and analyze high-velocity policyholder data in-stream before it hits the database, ensuring your risk models and pricing update in near real-time without runaway infrastructure spend.",
  },
];

// ─── Awards (clone badges) ────────────────────────────────────────────────────
const INS_BADGES: Badge[] = [
  { src: "/badges_fix/06_techreviewer_badge_2026-12.svg", alt: "techreviewer.co 2026 — Top Software Development Companies" },
  { src: "/badges_fix/06_techreviewer_badge_2026-09.svg", alt: "techreviewer.co 2026 — Top Enterprise Software Development Companies" },
  { src: "/badges_fix/12_5ca49c9f6cb37e33319e1162_Goodfirms.svg", alt: "GoodFirms badge" },
  { src: "/badges_fix/12_5ca49c9f8ff5ad26d13b6845_TDA.svg", alt: "TDA badge" },
  { src: "/badges_fix/12_5ca49c9f6cb37e49a79e1163_changed.svg", alt: "AWS partner badge" },
  { src: "/badges_fix/12_Custom-Web-Design-Development-2025.svg", alt: "Custom Web Design Development 2025" },
  { src: "/badges_fix/12_Mobile-Software-Development-2025.svg", alt: "Mobile Software Development 2025" },
  { src: "/badges_fix/12_Responsive-Design-Development-2025.svg", alt: "Responsive Design Development 2025" },
  { src: "/badges_fix/12_Business-Intelligence-Services-2024.svg", alt: "Business Intelligence Services 2024" },
  { src: "/badges_fix/01_top_clutch.co_user_experience_company_manufacturing_boston.svg", alt: "Clutch — Top UX company Boston" },
  { src: "/badges_fix/01_top_clutch.co_user_experience_company_information_technology_boston.svg", alt: "Clutch — Top UX company IT Boston" },
  { src: "/badges_fix/01_top_clutch.co_software_developers_supply_chain_logistics_and_transport_boston.svg", alt: "Clutch — Top software developers Boston" },
];

// ─── Awesome guides (blog) ────────────────────────────────────────────────────
const INS_BLOG_FEATURED = {
  href: "/blog/top-offshore-software-development-companies",
  title: "15+ Top Offshore Software Development Companies in 2026",
  image: "/insurtech-development/06_Top-Offshore-Software-Development-Companies-1024x578.png",
  imageAlt: "Top Offshore Software Development Companies",
  readTime: "37 mins",
  date: "March 3, 2026",
};
const INS_BLOG_SIDE = [
  { href: "/blog/software-outsourcing-rates-overview", title: "Software Outsourcing Costs [2026 Updated] – Overview", readTime: "22 mins", date: "December 23, 2024" },
  { href: "/blog/ai-in-insurance-underwriting-claims", title: "AI in Insurance: How It Is Reshaping Underwriting and Claims", readTime: "23 mins", date: "March 15, 2025" },
];

// ─── Component ────────────────────────────────────────────────────────────────
const CONTENTS = [
  { href: "#ins-challenges", label: "Challenges" },
  { href: "#ins-solutions", label: "Solutions" },
  { href: "#ins-cases", label: "Case studies" },
  { href: "#ins-roadmap", label: "Roadmap" },
  { href: "#ins-faq", label: "FAQ" },
  { href: "#ins-cost", label: "Cost factors" },
  { href: "#ins-why", label: "Why Nexterse LLC" },
];

export default function InsurtechPage() {
  const [activeCost, setActiveCost] = useState(COST_TABS.length - 1);

  return (
    <>
      <InsurtechHero />

      <ArticleLayout contents={CONTENTS} ariaLabel="InsurTech page contents">
        <AipocLogos />

        {/* ── Challenges ─────────────────────────────────────────────────── */}
        <section id="ins-challenges" className={`${styles.blockLight} ${styles.logisticsChallengesBlock}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>
              Business <span className={styles.accent}>challenges</span> we address
            </h2>
            <p className={styles.sectionDesc}>
              As insurance operations grow, speed, accuracy, and decision quality define profitability. Underwriting, claims handling, distribution, and compliance all depend on how well systems work together. We develop custom InsurTech software that improves execution across underwriting, claims, fraud defense, and policyholder experience — for faster decisions, stronger loss ratios, and an insurance environment built for scale.
            </p>
            <div className={styles.logisticsChallengesGrid}>
              {CHALLENGES.map((c) => (
                <div key={c.title} className={styles.logisticsChallengeItem}>
                  <Image src={c.icon} alt={c.title} width={56} height={56} className={styles.logisticsChallengeIcon} />
                  <h3 className={styles.logisticsChallengeTitle}>{c.title}</h3>
                  <p className={styles.logisticsChallengeDesc}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Solutions ──────────────────────────────────────────────────── */}
        <section id="ins-solutions" className={`${styles.blockWhite} ${styles.logisticsSolutionsBlock}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>
              Custom InsurTech <span className={styles.accent}>solutions</span> we build
            </h2>
            <div className={styles.logisticsSolutionsGrid}>
              {SOLUTIONS.map((s) => (
                <div key={s.title} className={styles.logisticsSolutionItem}>
                  <h3 className={styles.logisticsSolutionTitle}>{s.title}</h3>
                  {s.blocks.map((b) => (
                    <div key={b.head} className={styles.logisticsSolutionBlock}>
                      <p className={styles.logisticsSolutionSubhead}>{b.head}</p>
                      <p className={styles.logisticsSolutionText}>{b.text}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA: Revolutionize ─────────────────────────────────────────── */}
        <div className={`${styles.inlineCta} ${styles.logisticsGradientCta}`}>
          <div className="container">
            <div className={styles.inlineCtaInner}>
              <div>
                <h2 className={styles.inlineCtaTitle}>Revolutionize Your Insurance Operations</h2>
                <p className={styles.inlineCtaDesc}>Move beyond off-the-shelf limits. Create an innovative software platform designed for your unique needs.</p>
              </div>
              <a href="#get-modal-popup" className={`btn btn-accent ${styles.inlineCtaBtn}`}>Book free consultation</a>
            </div>
          </div>
        </div>

        {/* ── Improves itself (3 cards) ──────────────────────────────────── */}
        <section className={`${styles.blockLight} ${styles.logisticsImprovesBlock}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>
              We build an insurance system that <span className={styles.accent}>improves</span> itself
            </h2>
            <p className={styles.sectionDesc}>
              Insurance performance depends on how quickly operations turn data into decisions. Underwriting, claims handling, distribution, and pricing require systems that function as a single structure. We build insurance environments where policy administration, claims, third-party data, and operational workflows work as one decision layer — AI and machine learning support live execution and help the system grow with your business.
            </p>
            <div className={styles.logisticsImprovesGrid}>
              {IMPROVES.map((c) => (
                <a key={c.title} href={c.href} className={styles.logisticsImprovesItem}>
                  <Image src={c.icon} alt={c.title} width={56} height={56} className={styles.logisticsImprovesIcon} />
                  <h3 className={styles.logisticsImprovesTitle}>{c.title}</h3>
                  <p className={styles.logisticsImprovesDesc}>{c.desc}</p>
                  <span className={styles.improvesLink}>
                    {c.linkLabel}
                    <span className={styles.improvesArrow} aria-hidden />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── Case studies ───────────────────────────────────────────────── */}
        <div id="ins-cases">
          <CaseCards
            heading={<>InsurTech software we <span>developed</span></>}
            windowed
          />
        </div>

        {/* ── Reviews ────────────────────────────────────────────────────── */}
        <ServicesReviewSlider primary="software" count={6} secondaryCount={1} />

        {/* ── CTA: Start Your Transformation ─────────────────────────────── */}
        <div className={`${styles.inlineCta} ${styles.logisticsGradientCta}`}>
          <div className="container">
            <div className={styles.inlineCtaInner}>
              <div>
                <h2 className={styles.inlineCtaTitle}>Start Your Transformation</h2>
                <p className={styles.inlineCtaDesc}>The future of insurance is custom. Partner with us to build the software that will define your success.</p>
              </div>
              <a href="#get-modal-popup" className={`btn btn-accent ${styles.inlineCtaBtn}`}>Get a quote</a>
            </div>
          </div>
        </div>

        {/* ── Roadmap ────────────────────────────────────────────────────── */}
        <section id="ins-roadmap" className={styles.processBlock}>
          <div className="container">
            <h2 className={styles.sectionTitleWhite}>
              Production-ready deployment <span className={styles.accent}>roadmap</span>
            </h2>
            <div className={styles.processIntro}>
              <p>
                Replacing insurance infrastructure requires more than a standard software rollout. Underwriting must stay uninterrupted, claims must keep moving, and compliance must hold across every product and state.
              </p>
              <p>
                Our deployment model is built for operational continuity. Performance is validated before cutover, ROI is proven before scale, and rollout happens in controlled stages without disrupting the business.
              </p>
            </div>
            <div className={styles.processGrid}>
              {ROADMAP.map((step, i) => (
                <div key={step.title} className={styles.processStep}>
                  <div className={styles.processNum}>{i + 1}</div>
                  <div className={styles.processStepBody}>
                    <h3 className={styles.processStepTitle}>{step.title}</h3>
                    {step.paragraphs.map((p) => (
                      <p key={p} className={styles.processStepText}>{p}</p>
                    ))}
                    {step.bullets.length > 0 && (
                      <ul className={styles.processStepBullets}>
                        {step.bullets.map((b) => <li key={b}>{b}</li>)}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ────────────────────────────────────────────────────────── */}
        <div id="ins-faq">
          <ServicesFaqBlock items={INS_FAQ} />
        </div>

        {/* ── Cost factors (vertical tabs) ───────────────────────────────── */}
        <section id="ins-cost" className={styles.blockWhite}>
          <div className="container">
            <h2 className={styles.sectionTitle}>
              <span className={styles.accent}>Cost</span> factors of custom InsurTech software
            </h2>
            <div className={styles.vertTabsWrap}>
              <div className={styles.vertTabList} role="tablist" aria-label="Cost factors">
                {COST_TABS.map((t, i) => (
                  <button
                    key={t.label}
                    role="tab"
                    aria-selected={activeCost === i}
                    className={`${styles.vertTabBtn} ${activeCost === i ? styles.vertTabBtnActive : ""}`}
                    onClick={() => setActiveCost(i)}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
              <div className={styles.vertTabContent}>
                <h3 className={styles.vertTabTitle}>{COST_TABS[activeCost].label}</h3>
                <p className={styles.vertTabDesc}>{COST_TABS[activeCost].desc}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Why Nexterse ───────────────────────────────────────────────── */}
        <section id="ins-why" className={styles.logisticsWhyBlock}>
          <div className="container">
            <h2 className={styles.logisticsWhyTitle}>
              <span className={styles.accent}>Why</span> insurers trust Nexterse LLC
            </h2>
            <div className={styles.logisticsWhyGrid}>
              {WHY_CARDS.map((c) => (
                <div key={c.title} className={styles.logisticsWhyItem}>
                  <Image src={c.icon} alt={c.title} width={56} height={56} className={styles.logisticsWhyIcon} />
                  <h3 className={styles.logisticsWhyItemTitle}>{c.title}</h3>
                  <p className={styles.logisticsWhyText}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Awards & Recognitions ──────────────────────────────────────── */}
        <ServicesAchievements badges={INS_BADGES} />

        {/* ── Awesome guides (blog) ──────────────────────────────────────── */}
        <AwesomeStories category="enterprise" />

        {/* ── Let's Start ────────────────────────────────────────────────── */}
        <LetsStart />

        {/* ── Cross-links ────────────────────────────────────────────────── */}
        <section className={styles.clSection}>
          <div className={styles.clBg} />
          <div className="container">
            <h2 className={styles.clTitle}>More about our <span className={styles.accent}>services</span></h2>
            <div className={styles.clGrid}>
              <div>
                <p className={styles.clColTitle}>Related services</p>
                <ul className={styles.clList}>
                  {[
                    { text: "AI ", last: "development", href: "/services/ai-software-development" },
                    { text: "Predictive ", last: "maintenance", href: "/services/predictive-maintenance" },
                    { text: "Enterprise software ", last: "development", href: "/services/enterprise-software-development" },
                  ].map((link) => (
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
            </div>
          </div>
        </section>
      </ArticleLayout>
    </>
  );
}
