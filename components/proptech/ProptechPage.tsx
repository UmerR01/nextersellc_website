"use client";

import { useState } from "react";
import Image from "next/image";
import CaseCards, { type CaseCard } from "@/components/home/CaseCards";
import ServicesReviewSlider from "@/components/services/ServicesReviewSlider";
import ServicesAchievements, { type Badge } from "@/components/services/ServicesAchievements";
import ServicesFaqBlock, { type FaqItem } from "@/components/services/ServicesFaqBlock";
import LetsStart from "@/components/home/LetsStart";
import AdlcBlog, { type AdlcFeaturedPost, type AdlcBlogPost } from "@/components/adlc/AdlcBlog";
import ProptechHero from "./ProptechHero";
import ProptechLogos from "./ProptechLogos";
import ProptechTechStack from "./ProptechTechStack";
import ProptechArticleLayout from "./ProptechArticleLayout";
import styles from "./ProptechPage.module.css";

// ─── Solutions (6 icon cards) ─────────────────────────────────────────────────
const SOLUTIONS = [
  { icon: "/proptech-development/06_Algorithmic-high-frequency-bidding-engines-02.svg", title: "Property & lease management platforms", desc: "We build custom platforms that unify leasing, accounting, maintenance, and tenant communication into one system. Rent rolls, work orders, and general-ledger data stay in sync, so your teams stop re-keying between spreadsheets and disconnected point tools." },
  { icon: "/proptech-development/06_Vectorized-CDPs-and-data-clean-rooms-01.svg", title: "Automated valuation models (AVM)", desc: "We develop AVM engines that price properties from comparable sales, rental yields, location signals, and market trends. Models are trained on your own transaction data and return an explainable valuation with a confidence band, not a black-box number." },
  { icon: "/proptech-development/06_Ad-exchanges-and-ad-servers-01.svg", title: "Listing & marketplace platforms", desc: "We engineer high-traffic listing portals and marketplaces with fast geospatial search, map-based discovery, and real-time availability. You control the matching logic, ranking, and how buyers, renters, and agents transact across your inventory." },
  { icon: "/proptech-development/06_AI-driven-campaign-orchestration-01.svg", title: "IoT smart-building & energy systems", desc: "We connect building sensors, meters, and BMS data into a single monitoring layer that tracks occupancy, energy, and equipment health in real time. Predictive maintenance workflows flag failures before they turn into costly downtime." },
  { icon: "/proptech-development/06_Ad-fraud-detection-systems-03.svg", title: "Digital twins & BIM visualization", desc: "We build virtual replicas of buildings and portfolios that combine 3D models, IoT telemetry, and AI to simulate occupancy, energy use, and maintenance scenarios before you commit capital to them in the physical asset." },
  { icon: "/proptech-development/06_Omnichannel-retail-media-network-platforms-03.svg", title: "Tenant experience & resident apps", desc: "Turn your buildings into a service. We engineer branded resident and tenant apps for payments, bookings, access control, and maintenance requests, backed by the same data layer that runs your operations." },
];

// ─── Results (numbers) ────────────────────────────────────────────────────────
const RESULTS = [
  "25-40% lower maintenance costs within 12 months",
  "Month-end close cut from 2 weeks to 3-5 days",
  "Sub-second geospatial search across millions of listings",
  "Real-time IoT ingestion from thousands of building sensors",
  "Unified data across leasing, accounting, and maintenance",
  "AVM valuations returned in under a second",
  "Zero data loss on legacy system migration",
  "Always-on availability across the portfolio",
  "Predictable performance and cost as the portfolio scales",
];

// ─── Margins → NOI (5 cards) ──────────────────────────────────────────────────
const MARGINS = [
  { icon: "/proptech-development/06_Platform-independence-02.svg", title: "Platform independence", desc: "We build proprietary property systems that replace stitched-together SaaS tools and give you full control over workflows, pricing logic, and data." },
  { icon: "/proptech-development/06_Economic-control-02.svg", title: "Operating-cost control", desc: "We design infrastructure that converts per-unit software fees into predictable operational costs and improves NOI as your portfolio scales." },
  { icon: "/proptech-development/06_Data-ownership-01.svg", title: "Data ownership", desc: "We unify property, tenant, and financial data into a single system you control, enabling consistent reporting, valuation, and forecasting." },
  { icon: "/proptech-development/06_Algorithmic-execution-01.svg", title: "Automated operations", desc: "We implement data-driven automation for rent, renewals, maintenance, and reconciliation that continuously reduces manual work across the portfolio." },
  { icon: "/proptech-development/06_Revenue-expansion-03.svg", title: "Revenue expansion", desc: "We build PropTech systems that let you monetize services, data, and marketplaces through proprietary platforms, creating new high-margin revenue streams." },
];

// ─── Reliable performance at portfolio scale (4 cards) ────────────────────────
const SCALE = [
  { icon: "/proptech-development/06_Controlled-latency-in-bidding-execution-02.svg", title: "Consistent response across the portfolio", desc: "Search, dashboards, and tenant-facing flows respond within tight latency thresholds, so experience stays fast whether you manage 500 or 500,000 units." },
  { icon: "/proptech-development/06_Stable-processing-under-high-bid-volume-02.svg", title: "Stable processing under sensor load", desc: "The system ingests continuous streams of IoT telemetry, transactions, and events without degradation, maintaining reliable performance during peak activity." },
  { icon: "/proptech-development/06_Efficient-data-handling-at-scale-03.svg", title: "Efficient data handling at scale", desc: "Operational and historical data live in the same system, so leasing, valuation, and reporting all rely on a single, consistent data layer." },
  { icon: "/proptech-development/06_Cost-efficiency-at-the-infrastructure-level-03.svg", title: "Cost efficiency at the infrastructure level", desc: "Data pipelines and processing are structured to avoid unnecessary compute, keeping infrastructure costs aligned with the value each property delivers." },
];

// ─── Cases (5) ────────────────────────────────────────────────────────────────
const PT_CASES: CaseCard[] = [
  {
    banner: "/proptech-development/01_Cover.png",
    name: "Property management",
    title: "A property management platform for a US multifamily operator",
    text: "Replaced a patchwork of spreadsheets and a 15-year-old accounting tool with one custom platform covering 100+ leasing, maintenance, and finance workflows – cutting month-end close from two weeks to four days.",
    href: "/portfolio",
    tags: ["Enterprise"],
  },
  {
    banner: "/proptech-development/02_Image-Mediatron.png",
    name: "Valuation",
    title: "AVM engine for a commercial real estate lender",
    text: "An explainable automated valuation model that prices commercial assets from comparable sales, rent rolls, and market signals in under a second – standardizing underwriting across a national loan book.",
    href: "/portfolio",
    tags: ["Enterprise"],
  },
  {
    banner: "/proptech-development/02_RivalFox-Main-image.png",
    name: "Smart buildings",
    title: "IoT smart-building monitoring platform",
    text: "Server consolidation and a real-time sensor pipeline cut infrastructure costs by ~35% and enabled predictive maintenance across a portfolio of office assets, reducing unplanned equipment downtime.",
    href: "/portfolio",
    tags: ["Startups"],
  },
  {
    banner: "/proptech-development/01_fuelz-main-screen-image-persp.png",
    name: "Marketplace",
    title: "Property listing & marketplace aggregator",
    text: "A listing aggregator that cut buyers’ search time with real-time price and availability comparison across 20+ providers, with built-in inquiry management and operator analytics.",
    href: "/portfolio",
    tags: ["Enterprise"],
  },
  {
    banner: "/proptech-development/01_Cover-1-1-3.png",
    name: "Tenant experience",
    title: "Resident experience and payments app",
    text: "A branded resident app for payments, bookings, and maintenance requests that improved on-time rent collection by ~35%, delivered in 6 months and integrated with the operator’s core management system.",
    href: "/portfolio",
    tags: ["Startups"],
  },
];

// ─── FAQ ───────────────────────────────────────────────────────────────────────
const PT_FAQ: FaqItem[] = [
  {
    question: "How do you keep valuations trustworthy when we combine automated models with human appraisers?",
    answer: "When providing PropTech software development, we engineer AVMs to be explainable rather than black-box. Every valuation ships with the comparables, weighting, and market signals that drove it, plus a confidence band. Appraisers review edge cases where confidence is low, and their overrides feed back into model training, so automation and human judgment reinforce each other instead of competing.",
  },
  {
    question: "How do you prevent AI from producing inaccurate or non-compliant property listings and disclosures?",
    answer: "Accuracy and fair-housing compliance are critical. We restrict generative features to a curated knowledge base of your verified property data, disclosure templates, and jurisdiction-specific rules using RAG guardrails. An automated “LLM-as-a-judge” checks each generated description and disclosure against compliance rules before it is published, so nothing goes live unchecked.",
  },
  {
    question: "How do we migrate off Yardi, MRI, or AppFolio without disrupting live operations?",
    answer: "We run a parallel, phased migration rather than a risky big-bang cutover. Your new platform is built alongside the legacy system, and we move data through a validated ETL pipeline that transforms – not just copies – records into the new structure. We migrate one portfolio or module at a time, reconcile financials against the source system, and only sunset the legacy tool once numbers match with zero data loss.",
  },
  {
    question: "How do you handle the cost of querying years of transaction, sensor, and portfolio data for real-time reporting?",
    answer: "As an expert PropTech development company, we build analytics on columnar data warehouses with materialized views, rollups, and tiered retention. That lets asset managers query years of leasing, IoT, and financial data in sub-second time with predictable, minimal cloud costs, instead of exporting everything to spreadsheets for manual reconciliation.",
  },
  {
    question: "Can AI automate lease abstraction and maintenance triage?",
    answer: "Yes. We engineer document-understanding pipelines that extract key terms, dates, and clauses from leases into structured, searchable data, with human review on low-confidence fields. For operations, we build triage models that classify and route maintenance requests, estimate urgency, and auto-assign vendors, so routine work moves without manual dispatching.",
  },
];

// ─── Unified data (4 cards) ───────────────────────────────────────────────────
const DATA = [
  { title: "Single source of property truth", desc: "We consolidate leasing, financial, and asset data into one reliable layer. Rent rolls, work orders, and general-ledger entries form a consistent representation of each property across your systems." },
  { title: "Cross-system reconciliation", desc: "Machine-driven matching connects records that live in different tools – accounting, maintenance, CRM – so the same unit, tenant, and lease resolve to one identity portfolio-wide." },
  { title: "Real-time signal enrichment", desc: "We incorporate live IoT, occupancy, and market signals to strengthen decisions. Sensor data, timing, and usage patterns are evaluated together to keep operations and valuation current." },
  { title: "Secure data collaboration", desc: "Controlled environments let you share data with lenders, investors, and partners under defined access rules, preserving data ownership and integrity while enabling collaboration." },
];

// ─── Delivery structure (4 steps) ─────────────────────────────────────────────
const DELIVERY = [
  {
    title: "Discovery and system definition",
    paragraphs: ["1-4 weeks to define architecture, scope, and cost model.", "We map workflows, data flows, integrations, and infrastructure requirements across your portfolio.", "You receive a system blueprint, delivery plan, and cost projection aligned with your unit count and expected scale."],
    bullets: ["Operating on legacy or stitched-together SaaS tools", "Fragmented data across accounting, leasing, and maintenance", "No clear architecture or cost model for scaling"],
  },
  {
    title: "MVP platform",
    paragraphs: ["3-6 months to launch a working PropTech system.", "Core components operate on real data: management portal, data pipelines, and reporting.", "You validate workflows, integrations, and early performance indicators in a controlled environment."],
    bullets: ["Need to validate a management portal or AVM on real data", "No internal system for controlled performance testing", "Early-stage transition from point tools to owned infrastructure"],
  },
  {
    title: "Full-scale platform",
    paragraphs: ["6-18+ months, depending on integrations and scale.", "The system handles production portfolios with optimized performance, throughput, and infrastructure cost.", "Advanced capabilities are introduced: AI valuation, IoT monitoring, and multi-property orchestration."],
    bullets: ["Scaling to portfolio-level data and multiple asset types", "Integrating with accounting, banking, and IoT systems", "Expanding capabilities beyond core management workflows"],
  },
  {
    title: "Continuous evolution",
    paragraphs: ["Ongoing optimization and system expansion.", "Models are refined, infrastructure is tuned, and new capabilities are added based on operational data.", "The platform evolves alongside your portfolio, markets, and business strategy."],
    bullets: ["The platform is actively used in daily operations", "Performance optimization becomes continuous", "New features and capabilities are introduced over time"],
  },
];

// ─── Transition off legacy systems (4 cards) ──────────────────────────────────
const TRANSITION = [
  { icon: "/proptech-development/06_Parallel-system-deployment-01.svg", title: "Parallel system deployment", desc: "We build your custom PropTech infrastructure alongside your existing platform, allowing both to operate simultaneously from day one. This keeps rent collection, accounting, and operations running while the new system is introduced." },
  { icon: "/proptech-development/06_Controlled-traffic-routing-01.svg", title: "Phased portfolio migration", desc: "We move one property, region, or module at a time through a validated ETL pipeline, enabling real-world validation before scaling. This lets you evaluate the new system on live data before it takes on more responsibility." },
  { icon: "/proptech-development/06_Performance-benchmarking-02.svg", title: "Financial reconciliation", desc: "We reconcile balances, ledgers, and rent rolls against your legacy system to provide a clear, data-backed comparison. This gives you a transparent view that numbers match before any cutover decision." },
  { icon: "/proptech-development/06_Full-transition-to-owned-infrastructure-02.svg", title: "Full transition to owned infrastructure", desc: "Your system becomes the primary operating layer, with complete control over workflows, data, and cost structure. You get direct control over operations, margins, and the long-term scalability of your software." },
];

// ─── Why companies build (6 cards) ────────────────────────────────────────────
const WHY_CARDS = [
  { icon: "/proptech-development/06_Dual-Engine-architecture-for-AdTech-systems-02.svg", title: "Dual-Engine architecture for PropTech systems", desc: "We bring together deep experience in deterministic software engineering and applied AI to build PropTech systems. Deterministic infrastructure manages accounting, leasing, and integrations with full control and predictability. AI models operate on top of this foundation, valuing assets, predicting maintenance, and improving decisions in real time." },
  { icon: "/proptech-development/06_Lower-infrastructure-cost-per-impression-03.svg", title: "Lower infrastructure cost per unit", desc: "Processing and data handling are optimized at the system level, keeping cloud costs stable as your portfolio and sensor volume grow. AI models cut unnecessary processing by prioritizing high-value signals and assets." },
  { icon: "/proptech-development/06_Clean-traffic-and-controlled-spend-with-AI-03.svg", title: "Accurate data and controlled spend with AI", desc: "We use machine learning to validate incoming data and flag anomalies before they reach reporting or valuation. Decisions and budget are directed toward measurable, high-quality outcomes." },
  { icon: "/proptech-development/06_Continuous-campaign-optimization-with-AI-agents-02.svg", title: "Continuous operations optimization with AI agents", desc: "AI-driven workflows evaluate performance, triage maintenance, and reallocate resources across the portfolio. Optimization runs continuously, without delays between analysis and action." },
  { icon: "/proptech-development/06_Secure-use-of-first-party-data-in-AI-systems-02.svg", title: "Secure use of first-party data in AI systems", desc: "Property, tenant, and financial data are unified and used within controlled environments. AI models operate on this data to improve valuation and operations while access and usage remain clearly governed." },
  { icon: "/proptech-development/05_Security-and-compliance-01.svg", title: "Security & compliance by design", desc: "Security and privacy are built into our architecture from day one. We ensure compliance with regulations such as fair-housing and data-protection rules, and protect your data and reputation." },
];

// ─── Cooperation (2 rich cards with bullets) ──────────────────────────────────
const COOPERATION = [
  {
    icon: "/proptech-development/12_Time-estimates.svg",
    title: "Timelines: fast and predictable",
    tab: "Timelines",
    bullets: [
      "Discovery (1-4 weeks): We meet to understand your goals and plan the project, ensuring a strong start.",
      "MVP (3-6 months): We build a core version of your platform, like a management portal or AVM, for quick testing and early results.",
      "Full platform (6-18+ months): Complex solutions with advanced features like AI valuation or high-volume IoT processing take longer, depending on your needs.",
      "Ongoing support: After launch, we add features, update systems, and adapt to your changing goals.",
    ],
    note: "You’ll get a clear roadmap after discovery, with regular updates to track progress.",
  },
  {
    icon: "/proptech-development/02_Quality-management-controls.svg",
    title: "Quality: built to last",
    tab: "Quality",
    bullets: [
      "Skilled team: Experienced developers, designers, and testers, trained in PropTech and real estate, work on your project.",
      "Thorough testing: We test every feature – automated, manual, performance, and security – to ensure reliability.",
      "Clean code: Regular reviews ensure your platform is scalable and easy to maintain.",
      "Support agreements: Post-launch, we offer clear response times and uptime guarantees.",
      "Your ownership: All code and IP are yours, protected by strong confidentiality agreements.",
      "Warranty: We fix any post-launch issues to keep your platform stable.",
      "Your success: We communicate often, adapt to your needs, and deliver a solution that meets your goals.",
    ],
    note: "",
  },
];

// ─── Awards (clone badges) ────────────────────────────────────────────────────
const PT_BADGES: Badge[] = [
  { src: "/proptech-development/06_techreviewer_badge_2026-12.svg", alt: "techreviewer.co 2026 — Top Software Development Companies" },
  { src: "/proptech-development/06_techreviewer_badge_2026-04.svg", alt: "techreviewer.co 2026 — Top AI Software Development Companies" },
  { src: "/proptech-development/06_techreviewer_badge_2026-11.svg", alt: "techreviewer.co 2026 — Top Machine Learning Development Companies" },
  { src: "/proptech-development/03_Badge-1-1.svg", alt: "Top software development company in Massachusetts" },
  { src: "/proptech-development/12_5ca49c9f6cb37e33319e1162_Goodfirms.svg", alt: "GoodFirms badge" },
  { src: "/proptech-development/12_5ca49c9f8ff5ad26d13b6845_TDA.svg", alt: "TDA badge" },
  { src: "/proptech-development/12_5ca49c9f6cb37e49a79e1163_changed.svg", alt: "AWS partner badge" },
  { src: "/proptech-development/03_Badge-3.svg", alt: "Top developers reward" },
  { src: "/proptech-development/12_Mobile-Software-Development-2025.svg", alt: "Mobile Software Development 2025" },
  { src: "/proptech-development/12_Machine-Learning-Development-2024.svg", alt: "Machine Learning Development 2024" },
  { src: "/proptech-development/12_Custom-Web-Design-Development-2025.svg", alt: "Custom Web Design Development 2025" },
  { src: "/proptech-development/12_iOS-Development-2024.svg", alt: "iOS Development 2024" },
  { src: "/proptech-development/12_Responsive-Design-Development-2025.svg", alt: "Responsive Design Development 2025" },
  { src: "/proptech-development/12_Data-analysis-development-2024.svg", alt: "Data analysis development 2024" },
];

// ─── Awesome stories (blog) ───────────────────────────────────────────────────
const PT_BLOG_FEATURED: AdlcFeaturedPost = {
  href: "/blog/eu-ai-act-custom-ai-development",
  title: "The EU AI Act: How It Changes AI development and What It Means for Custom AI",
  image: "/proptech-development/07_Figure-6-in-force-vs-coming.svg",
  imageAlt: "The EU AI Act — in force vs coming",
  readTime: "25 mins",
  date: "July 9, 2026",
};
const PT_BLOG_SIDE: AdlcBlogPost[] = [
  { href: "/blog/questions-to-ask-ai-development-company", title: "10 questions to Ask an AI Development Company before Signing", readTime: "18 mins", date: "July 7, 2026" },
  { href: "/blog/blog-agentic-rag-enterprise-implementation-guide", title: "Agentic RAG: The Complete Enterprise Implementation Guide for 2026", readTime: "35 mins", date: "July 3, 2026" },
  { href: "/blog/ai-cost-reduction-playbook", title: "The AI Cost Reduction Playbook – 9 Mechanisms, 7 Hidden Drivers, and Real-World Case Studies (2026 Edition)", readTime: "32 mins", date: "July 1, 2026" },
];

// ─── Cross-links (3 columns) ──────────────────────────────────────────────────
const CROSSLINKS = [
  {
    heading: "Key AI services",
    links: [
      { text: "Enterprise RAG ", last: "systems", href: "/services/ai-software-development" },
      { text: "Custom AI copilots and ", last: "agents", href: "/services/ai-software-development" },
      { text: "Enterprise software ", last: "development", href: "/services/enterprise-software-development" },
    ],
  },
  {
    heading: "Other enterprise services",
    links: [
      { text: "Legacy software ", last: "modernization", href: "/services/custom-software-development" },
      { text: "IoT security & compliance ", last: "frameworks", href: "/services/predictive-maintenance" },
      { text: "Predictive maintenance ", last: "systems", href: "/services/predictive-maintenance" },
    ],
  },
  {
    heading: "About Nexterse LLC",
    links: [
      { text: "350+ delivered software ", last: "projects", href: "/portfolio" },
      { text: "98% client satisfaction — read our ", last: "reviews", href: "/testimonials" },
      { text: "Get a free project ", last: "estimate", href: "/contact-us" },
      { text: "14+ years in custom software ", last: "development", href: "/about" },
    ],
  },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function ProptechPage() {
  const [activeCooperation, setActiveCooperation] = useState(0);
  const cooperation = COOPERATION[activeCooperation];

  return (
    <>
      <ProptechHero />

      <ProptechArticleLayout>
        <ProptechLogos />

        {/* ── Solutions ──────────────────────────────────────────────────── */}
        <section id="pt-solutions" className={`${styles.blockWhite} ${styles.solutionsOpen}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>
              <span className={styles.accent}>PropTech software</span> engineered for control, data, and scale
            </h2>
            <p className={styles.sectionDesc}>
              We design and build core PropTech infrastructure that unifies portfolio data, operates in real time, and gives you full control over how properties are managed, valued, and monetized.
            </p>
            <div className={styles.ecomServicesGrid}>
              {SOLUTIONS.map((c) => (
                <div key={c.title} className={styles.ecomServiceCard}>
                  <Image src={c.icon} alt={c.title} width={56} height={56} className={styles.ecomServiceIcon} />
                  <h3 className={styles.ecomServiceTitle}>{c.title}</h3>
                  <p className={styles.ecomServiceIntro}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Results in numbers ─────────────────────────────────────────── */}
        <section id="pt-results" className={`${styles.blockWhite} ${styles.resultsOpen}`}>
          <div className="container">
            <div className={styles.resultsOpenInner}>
              <h2 className={styles.sectionTitle}>
                Our PropTech solutions in <span className={styles.accent}>numbers</span>
              </h2>
              <ul className={`${styles.ecomBullets} ${styles.adtResultsGrid}`}>
                {RESULTS.map((r) => <li key={r}>{r}</li>)}
              </ul>
            </div>
          </div>
        </section>

        {/* ── Margins / NOI ──────────────────────────────────────────────── */}
        <section className={`${styles.blockWhite} ${styles.marginsOpen}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>
              At scale, PropTech defines your <span className={styles.accent}>NOI</span>
            </h2>
            <p className={styles.sectionDesc}>
              As portfolios grow, performance is increasingly determined by the systems that support them. We build PropTech infrastructure that gives you direct control over how leasing, data, and operations run across your business. As a result, real estate operates as a controlled system where performance, cost, and growth are directly aligned with your strategy.
            </p>
            <div className={styles.ecomServicesGrid}>
              {MARGINS.map((c) => (
                <div key={c.title} className={styles.ecomServiceCard}>
                  <Image src={c.icon} alt={c.title} width={56} height={56} className={styles.ecomServiceIcon} />
                  <h3 className={styles.ecomServiceTitle}>{c.title}</h3>
                  <p className={styles.ecomServiceIntro}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA: Free consultation ─────────────────────────────────────── */}
        <div className={`${styles.inlineCta} ${styles.adtechGradientCta}`}>
          <div className="container">
            <div className={styles.inlineCtaInner}>
              <div>
                <h2 className={styles.inlineCtaTitle}>Get Your Free PropTech Consultation</h2>
                <p className={styles.inlineCtaDesc}>Let’s explore how custom software can modernize how you build, manage, and operate real estate.</p>
              </div>
              <a href="#get-modal-popup" className={`btn btn-accent ${styles.inlineCtaBtn}`}>Get in touch</a>
            </div>
          </div>
        </div>

        {/* ── Reliable performance at portfolio scale ────────────────────── */}
        <section id="pt-scale" className={`${styles.blockWhite} ${styles.biddingOpen}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>
              Reliable performance across large property <span className={styles.accent}>portfolios</span>
            </h2>
            <p className={styles.sectionDesc}>
              Nexterse LLC PropTech systems are designed to operate under continuous data flow, where every transaction, sensor reading, and query affects performance and cost. Execution stays stable as portfolios grow, asset types multiply, and data volume increases.
            </p>
            <div className={styles.hcAudienceGrid}>
              {SCALE.map((c) => (
                <div key={c.title} className={styles.ecomServiceCard}>
                  <Image src={c.icon} alt={c.title} width={56} height={56} className={styles.ecomServiceIcon} />
                  <h3 className={styles.ecomServiceTitle}>{c.title}</h3>
                  <p className={styles.ecomServiceIntro}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Case studies ───────────────────────────────────────────────── */}
        <div id="pt-cases">
          <CaseCards
            heading={<>PropTech software we <span>made</span></>}
            cards={PT_CASES}
            windowed
          />
        </div>

        {/* ── Reviews ────────────────────────────────────────────────────── */}
        <ServicesReviewSlider />

        {/* ── CTA: Build competitive edge ────────────────────────────────── */}
        <div className={`${styles.inlineCta} ${styles.adtechGradientCta}`}>
          <div className="container">
            <div className={styles.inlineCtaInner}>
              <div>
                <h2 className={styles.inlineCtaTitle}>Build Your Competitive Edge</h2>
                <p className={styles.inlineCtaDesc}>Turn buildings and portfolios into controlled, data-driven, high-NOI assets.</p>
              </div>
              <a href="#get-modal-popup" className={`btn btn-accent ${styles.inlineCtaBtn}`}>Book a call</a>
            </div>
          </div>
        </div>

        {/* ── Awards & Recognitions ──────────────────────────────────────── */}
        <ServicesAchievements badges={PT_BADGES} />

        {/* ── FAQ ────────────────────────────────────────────────────────── */}
        <div id="pt-faq">
          <ServicesFaqBlock items={PT_FAQ} />
        </div>

        {/* ── Tech stack ─────────────────────────────────────────────────── */}
        <div id="pt-tech">
          <ProptechTechStack />
        </div>

        {/* ── Unified data ───────────────────────────────────────────────── */}
        <section id="pt-data" className={`${styles.blockWhite} ${styles.identityOpen}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>
              A single <span className={styles.accent}>source of truth</span> across fragmented property data
            </h2>
            <p className={styles.sectionDesc}>
              Real estate runs on a fragile mesh of spreadsheets, manual re-entry, and siloed tools with separate logins for accounting, maintenance, and communication. As part of our PropTech software development, we design a data layer that provides a continuous, unified view of every property, lease, and tenant.
            </p>
            <div className={styles.hcAudienceGrid}>
              {DATA.map((c) => (
                <div key={c.title} className={styles.ecomServiceCard}>
                  <h3 className={styles.ecomServiceTitle}>{c.title}</h3>
                  <p className={styles.ecomServiceIntro}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Clear delivery structure ───────────────────────────────────── */}
        <section className={`${styles.blockWhite} ${styles.deliveryOpen}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>
              Clear <span className={styles.accent}>delivery</span> and investment structure
            </h2>
            <p className={styles.sectionDesc}>
              We define architecture, timelines, and cost before development starts. Each stage delivers a measurable, evaluable result that can be used in operations.
            </p>
            <div className={styles.processGrid}>
              {DELIVERY.map((step, i) => (
                <div key={step.title} className={styles.processStep}>
                  <div className={styles.processNum}>{i + 1}</div>
                  <div className={styles.processStepBody}>
                    <h3 className={styles.processStepTitle}>{step.title}</h3>
                    {step.paragraphs.map((p) => (
                      <p key={p} className={styles.processStepText}>{p}</p>
                    ))}
                    <p className={styles.processStepText}><strong>When this stage applies:</strong></p>
                    <ul className={styles.processStepBullets}>
                      {step.bullets.map((b) => <li key={b}>{b}</li>)}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Transition off legacy systems ──────────────────────────────── */}
        <section className={`${styles.blockWhite} ${styles.transitionOpen}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>
              Migrate off legacy property systems <span className={styles.accent}>without</span> disruption
            </h2>
            <p className={styles.sectionDesc}>
              We move your operations from legacy platforms such as Yardi, MRI, and AppFolio to your own infrastructure through a controlled, measurable rollout that keeps rent collection, accounting, and reporting running throughout.
            </p>
            <div className={styles.hcAudienceGrid}>
              {TRANSITION.map((c) => (
                <div key={c.title} className={styles.ecomServiceCard}>
                  <Image src={c.icon} alt={c.title} width={56} height={56} className={styles.ecomServiceIcon} />
                  <h3 className={styles.ecomServiceTitle}>{c.title}</h3>
                  <p className={styles.ecomServiceIntro}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA: Solve toughest challenges ─────────────────────────────── */}
        <div className={`${styles.inlineCta} ${styles.adtechGradientCta}`}>
          <div className="container">
            <div className={styles.inlineCtaInner}>
              <div>
                <h2 className={styles.inlineCtaTitle}>Solve Your Toughest PropTech Challenges</h2>
                <p className={styles.inlineCtaDesc}>Our team has the experience to build the custom property software you need.</p>
              </div>
              <a href="#get-modal-popup" className={`btn btn-accent ${styles.inlineCtaBtn}`}>Get in touch</a>
            </div>
          </div>
        </div>

        {/* ── Why companies build PropTech with Nexterse ─────────────────── */}
        <section id="pt-why" className={`${styles.blockWhite} ${styles.whyOpen}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>
              <span className={styles.accent}>Why</span> companies build PropTech with Nexterse LLC
            </h2>
            <p className={styles.sectionDesc}>
              PropTech performance improves when deterministic systems and AI decisioning operate together within one architecture. Nexterse LLC is a top-notch PropTech development company that designs and delivers this combined model as a unified system, where infrastructure and AI operate in sync and produce measurable results at scale.
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

        {/* ── Cooperation: timing and quality ────────────────────────────── */}
        <section className={`${styles.blockWhite} ${styles.cooperationOpen}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>
              Cooperation with Nexterse LLC: <span className={styles.accent}>timing and quality</span> guarantees
            </h2>
            <p className={styles.sectionDesc}>
              Partnering with us means entering a collaboration built on clear expectations, transparent processes, and a shared commitment to excellence. We understand that investing in custom PropTech solutions is a significant decision, and we aim to provide clarity on project execution, financial commitment, and the quality you will receive.
            </p>
            <div className={styles.cooperationTabs}>
              {COOPERATION.map((c, index) => (
                <button
                  key={c.title}
                  type="button"
                  className={`${styles.cooperationTab} ${activeCooperation === index ? styles.cooperationTabActive : ""}`}
                  onClick={() => setActiveCooperation(index)}
                >
                  <Image src={c.icon} alt="" width={56} height={56} className={styles.cooperationTabIcon} />
                  <span>{c.tab}</span>
                </button>
              ))}
            </div>
            <div className={styles.cooperationContent}>
              <div className={styles.cooperationCopy}>
                <h3 className={styles.cooperationTitle}>{cooperation.title}</h3>
                <ul className={styles.cooperationBullets}>
                  {cooperation.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
                {cooperation.note && <p className={styles.cooperationNote}>{cooperation.note}</p>}
              </div>
              <div className={styles.cooperationImageWrap}>
                <Image
                  src="/proptech-development/02_Time-series-analytics-solutions.jpg"
                  alt="PropTech cooperation planning"
                  width={520}
                  height={340}
                  className={styles.cooperationImage}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Awesome stories (blog) ─────────────────────────────────────── */}
        <AdlcBlog featured={PT_BLOG_FEATURED} sidePosts={PT_BLOG_SIDE} />

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
      </ProptechArticleLayout>
    </>
  );
}
