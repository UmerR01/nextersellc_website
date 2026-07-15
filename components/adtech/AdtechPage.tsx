"use client";

import { useState } from "react";
import Image from "next/image";
import CaseCards, { type CaseCard } from "@/components/home/CaseCards";
import ServicesReviewSlider from "@/components/services/ServicesReviewSlider";
import ServicesAchievements, { type Badge } from "@/components/services/ServicesAchievements";
import ServicesFaqBlock, { type FaqItem } from "@/components/services/ServicesFaqBlock";
import LetsStart from "@/components/home/LetsStart";
import AdlcBlog, { type AdlcFeaturedPost, type AdlcBlogPost } from "@/components/adlc/AdlcBlog";
import AdtechHero from "./AdtechHero";
import AdtechLogos from "./AdtechLogos";
import AdtechTechStack from "./AdtechTechStack";
import AdtechArticleLayout from "./AdtechArticleLayout";
import styles from "./AdtechPage.module.css";

// ─── Solutions (6 icon cards) ─────────────────────────────────────────────────
const SOLUTIONS = [
  { icon: "/adtech-development/06_Algorithmic-high-frequency-bidding-engines-02.svg", title: "Algorithmic high-frequency bidding engines", desc: "We develop custom DSP and SSP systems that execute real-time bidding decisions in under 50 milliseconds. Each decision is based on predictive models that evaluate user intent, pricing dynamics, and campaign performance at the moment of the auction." },
  { icon: "/adtech-development/06_Vectorized-CDPs-and-data-clean-rooms-01.svg", title: "Vectorized CDPs and data clean rooms", desc: "We build first-party data platforms that unify customer data into structured, queryable profiles. Data is processed through embedding models and matched in controlled environments, allowing you to activate audiences across partners while maintaining full data ownership and compliance." },
  { icon: "/adtech-development/06_Ad-exchanges-and-ad-servers-01.svg", title: "Ad exchanges and ad servers", desc: "We engineer transaction systems that handle high volumes of bid requests and ad delivery events with consistent performance. You control auction logic, pricing models, and inventory distribution across your ecosystem." },
  { icon: "/adtech-development/06_AI-driven-campaign-orchestration-01.svg", title: "AI-driven campaign orchestration", desc: "We implement agent-based systems that continuously monitor campaign performance, test variations, and adjust budgets across channels. Campaign optimization becomes a controlled, ongoing process rather than a manual task." },
  { icon: "/adtech-development/06_Ad-fraud-detection-systems-03.svg", title: "Ad fraud detection systems", desc: "We deploy machine learning models directly into the bid stream to evaluate behavioral signals in real time. This allows your system to filter invalid traffic and maintain clean, high-quality campaign performance." },
  { icon: "/adtech-development/06_Omnichannel-retail-media-network-platforms-03.svg", title: "Omnichannel retail media network platforms", desc: "Monetize your audience as a direct revenue channel. We engineer custom retail media networks that turn your traffic, search, and customer data into a structured advertising business, with proprietary ad serving infrastructure and self-serve advertiser portals." },
];

// ─── Results (numbers) ────────────────────────────────────────────────────────
const RESULTS = [
  "Sub-50 ms bid execution",
  "Millions of bid requests processed per second",
  "50× faster media-buying platform performance",
  "25-40% reduction in advertising spend",
  "Billions of events processed daily",
  "Real-time data ingestion and decisioning",
  "Zero performance degradation under peak load",
  "Always-on system availability",
  "Predictable latency, throughput, and cost at scale",
];

// ─── Margins (5 cards) ────────────────────────────────────────────────────────
const MARGINS = [
  { icon: "/adtech-development/06_Platform-independence-02.svg", title: "Platform independence", desc: "We develop proprietary bidding systems that replace external DSPs and give you full control over execution, pricing logic, and campaign dynamics." },
  { icon: "/adtech-development/06_Economic-control-02.svg", title: "Economic control", desc: "We design infrastructure that converts platform-based fees into predictable operational costs and improves margin efficiency as spend scales." },
  { icon: "/adtech-development/06_Data-ownership-01.svg", title: "Data ownership", desc: "We unify audience and performance data into a single system you control, enabling consistent targeting, measurement, and activation." },
  { icon: "/adtech-development/06_Algorithmic-execution-01.svg", title: "Algorithmic execution", desc: "We implement machine-driven bidding and optimization that continuously improves campaign performance based on real-time data." },
  { icon: "/adtech-development/06_Revenue-expansion-03.svg", title: "Revenue expansion", desc: "We build AdTech systems that allow you to monetize audience, inventory, and data through proprietary platforms, creating new high-margin revenue streams." },
];

// ─── Predictable execution (4 cards) ──────────────────────────────────────────
const BIDDING = [
  { icon: "/adtech-development/06_Controlled-latency-in-bidding-execution-02.svg", title: "Controlled latency in bidding execution", desc: "Bidding and decisioning logic operates within tightly defined latency thresholds, allowing each auction to be evaluated and executed without delay under high load." },
  { icon: "/adtech-development/06_Stable-processing-under-high-bid-volume-02.svg", title: "Stable processing under high bid volume", desc: "The system processes continuous streams of bid requests and campaign signals without performance degradation, maintaining consistent execution during peak traffic." },
  { icon: "/adtech-development/06_Efficient-data-handling-at-scale-03.svg", title: "Efficient data handling at scale", desc: "Operational and historical data are processed within the same system, allowing targeting, optimization, and reporting to rely on a unified data layer." },
  { icon: "/adtech-development/06_Cost-efficiency-at-the-infrastructure-level-03.svg", title: "Cost efficiency at the infrastructure level", desc: "Data pipelines and decisioning logic are structured to reduce unnecessary processing, keeping infrastructure costs aligned with actual campaign value." },
];

// ─── Cases (5) ────────────────────────────────────────────────────────────────
const ADT_CASES: CaseCard[] = [
  {
    banner: "/adtech-development/01_Cover.png",
    name: "Media buying",
    title: "A media buying system for a leading US-based advertising agency",
    text: "50x faster ad operations and data processing cut from hours to under a minute – we replaced a 20-year-old FileMaker system with a custom platform covering 100+ operational workflows.",
    href: "/portfolio/media-buying-software-development",
    tags: ["Enterprise"],
  },
  {
    banner: "/adtech-development/02_Image-Mediatron.png",
    name: "Mediatron",
    title: "Mediatron: online advertising management platform",
    text: "A PPC campaign management platform for a leading digital marketing agency that reduced ad spend by 25-40% through automated bidding – consolidating campaigns from Google Ads, Yandex Direct, and Google Analytics into one automated dashboard.",
    href: "/portfolio/mediatron-online-advertising-management-platform",
    tags: ["Enterprise"],
  },
  {
    banner: "/adtech-development/02_RivalFox-Main-image.png",
    name: "RivalFox",
    title: "RivalFox marketing tracking tool",
    text: "Server consolidation and performance overhaul cut infrastructure costs by ~35% and improved application response time by ~40% for a competitive intelligence SaaS serving digital marketers. DSL-based analytics engine added from scratch for competitor campaign tracking.",
    href: "/portfolio/rivalfox-digital-marketing-tracking-tool",
    tags: ["Startups"],
  },
  {
    banner: "/adtech-development/01_fuelz-main-screen-image-persp.png",
    name: "Fuelz",
    title: "Fuelz aggregator web platform",
    text: "A heating oil price aggregator that cut buyers’ delivery costs by up to 20% through real-time price comparison across 20+ UK suppliers, with built-in order management and operator analytics.",
    href: "/portfolio/aggregator-web-platform",
    tags: ["Enterprise"],
  },
  {
    banner: "/adtech-development/01_Cover-1-1-3.png",
    name: "Content ads",
    title: "Content ads management platform",
    text: "A content ad platform that improved campaign CTR by ~35%, delivered in 6 months for a Singapore ad-tech startup connecting with DoubleClick, Sizmek, and AppNexus.",
    href: "/portfolio/advertising-platform-development",
    tags: ["Startups"],
  },
];

// ─── FAQ (clone content) ──────────────────────────────────────────────────────
const ADT_FAQ: FaqItem[] = [
  {
    question: "How do you solve the identity resolution problem in a cookieless Adtech environment?",
    answer: "When providing Adtech software development, we engineer first-party graphing and probabilistic matching. By combining authenticated deterministic data (logins, emails) with privacy-safe probabilistic signals (contextual behavior, edge-device telemetry), our machine learning models accurately stitch together cross-device user identities without relying on deprecated third-party cookies.",
  },
  {
    question: "How do you prevent Generative AI from producing off-brand or non-compliant ad copy in a real-time DCO system?",
    answer: "Brand safety is critical. We implement strict RAG guardrails and output parsers. The generative AI is restricted to a curated vector database of your approved brand voice, compliance rules, and legal disclaimers. Furthermore, an automated “LLM-as-a-judge” audits every generated creative for brand safety in milliseconds before it is served to an exchange.",
  },
  {
    question: "How do we transition from a white-label DSP to a custom-built DSP without pausing our active media buying?",
    answer: "We engineer a strangler fig migration strategy. We build your custom algorithmic DSP infrastructure in parallel with your white-label solution. We deploy an API routing layer that slowly redirects a small percentage of your bid stream (e.g., 5%) to the new custom engine for mathematical backtesting. Once the custom DSP proves a higher win-rate and ROAS, we systematically scale the traffic and sunset the legacy platform with zero downtime.",
  },
  {
    question: "How do you handle the massive OLAP database costs of querying billions of ad impressions for real-time reporting?",
    answer: "As an expert Adtech product development company, we engineer our analytics dashboards using columnar OLAP databases (like ClickHouse or Apache Druid). We implement advanced data rollups, materialized views, and aggressive data retention policies that allow your advertisers to query billions of rows of impression data in sub-second real-time with highly predictable, minimal cloud costs.",
  },
  {
    question: "Can AI autonomously generate and optimize our programmatic landing pages?",
    answer: "Yes. We engineer generative conversion rate optimization (CRO) pipelines. When a user clicks a dynamic ad, the destination landing page evolves in real time. Our backend architecture uses real-time API webhooks to instruct an LLM to dynamically rewrite the landing page headline, imagery, and CTA to match the specific ad creative and user context that drove the click, ensuring maximum conversion continuity.",
  },
];

// ─── Identity resolution (4 cards) ────────────────────────────────────────────
const IDENTITY = [
  { title: "First-party identity graphing", desc: "We consolidate customer data into a single, reliable identity layer. Logins, transactions, and CRM signals form a consistent representation of each user across your systems." },
  { title: "Probabilistic matching", desc: "Machine learning models extend identity coverage beyond deterministic data, connecting users across devices and sessions while maintaining accuracy." },
  { title: "Context-driven enrichment", desc: "We incorporate real-time contextual signals to strengthen targeting decisions. Content, timing, and behavioral patterns are evaluated together to increase relevance at the moment of interaction." },
  { title: "Secure data collaboration", desc: "Data clean room environments enable collaboration with partners and publishers under controlled access rules. We ensure that audience matching operates within defined boundaries, preserving data ownership and integrity." },
];

// ─── Delivery structure (4 steps) ─────────────────────────────────────────────
const DELIVERY = [
  {
    title: "Discovery and system definition",
    paragraphs: ["1-4 weeks to define architecture, scope, and cost model.", "We map bidding logic, data flows, integrations, and infrastructure requirements.", "You receive a system blueprint, delivery plan, and cost projection aligned with your expected traffic and scale."],
    bullets: ["Operating on third-party DSPs or SSPs", "Fragmented data across multiple systems", "No clear architecture or cost model for scaling"],
  },
  {
    title: "MVP platform",
    paragraphs: ["3-6 months to launch a working Adtech system.", "Core components operate on real traffic: bidding engine, data pipelines, and reporting.", "You validate execution speed, bidding logic, and early performance indicators in a controlled environment."],
    bullets: ["Need to validate a custom bidding engine on real traffic", "No internal system for controlled performance testing", "Early-stage transition from external platforms to owned infrastructure"],
  },
  {
    title: "Full-scale platform",
    paragraphs: ["6-18+ months, depending on integrations and scale.", "The system handles production traffic with optimized latency, throughput, and infrastructure cost.", "Advanced capabilities are introduced: AI optimization, fraud detection, and multi-channel orchestration."],
    bullets: ["Scaling to production-level traffic and multiple channels", "Integrating with internal and external systems", "Expanding capabilities beyond core bidding logic"],
  },
  {
    title: "Continuous evolution",
    paragraphs: ["Ongoing optimization and system expansion.", "Models are refined, infrastructure is tuned, and new capabilities are added based on performance data.", "The platform evolves alongside your traffic volume, markets, and business strategy."],
    bullets: ["The platform is actively used in daily operations", "Performance optimization becomes continuous", "New features and capabilities are introduced over time"],
  },
];

// ─── Transition (4 cards) ─────────────────────────────────────────────────────
const TRANSITION = [
  { icon: "/adtech-development/06_Parallel-system-deployment-01.svg", title: "Parallel system deployment", desc: "We build your custom Adtech infrastructure alongside your current platform, allowing both environments to operate simultaneously from day one. This keeps your revenue-generating campaigns running while the new system is introduced." },
  { icon: "/adtech-development/06_Controlled-traffic-routing-01.svg", title: "Controlled traffic routing", desc: "A defined portion of live bid traffic is routed through the new system, enabling real-time validation under actual market conditions. This approach allows you to evaluate the new Adtech software’s performance on real traffic before increasing system responsibility." },
  { icon: "/adtech-development/06_Performance-benchmarking-02.svg", title: "Performance benchmarking", desc: "We measure win rates, ROAS, latency, and cost efficiency across both systems to provide a clear, data-backed comparison. This gives you a transparent view of performance improvements before making scaling decisions." },
  { icon: "/adtech-development/06_Full-transition-to-owned-infrastructure-02.svg", title: "Full transition to owned infrastructure", desc: "Your system becomes the primary execution layer, with complete control over bidding logic, data, and cost structure. So you get direct control over performance, margins, and long-term scalability of your software." },
];

// ─── Why companies build (6 cards) ────────────────────────────────────────────
const WHY_CARDS = [
  { icon: "/adtech-development/06_Dual-Engine-architecture-for-AdTech-systems-02.svg", title: "Dual-Engine architecture for Adtech systems", desc: "We bring together deep experience in deterministic software engineering and applied AI to build Adtech systems. Deterministic infrastructure manages bidding logic, data pipelines, and integrations with full control and predictability. AI models operate on top of this foundation, evaluating signals, predicting outcomes, and improving decisions in real time." },
  { icon: "/adtech-development/06_Lower-infrastructure-cost-per-impression-03.svg", title: "Lower infrastructure cost per impression", desc: "Execution and data processing are optimized at the system level, keeping cloud costs stable as traffic and bid volume grow. AI models reduce unnecessary processing by prioritizing high-value impressions." },
  { icon: "/adtech-development/06_Clean-traffic-and-controlled-spend-with-AI-03.svg", title: "Clean traffic and controlled spend with AI", desc: "We use machine learning models to evaluate traffic quality during bidding and filter invalid activity before the budget is allocated. Spend is directed toward measurable, high-quality impressions." },
  { icon: "/adtech-development/06_Continuous-campaign-optimization-with-AI-agents-02.svg", title: "Continuous campaign optimization with AI agents", desc: "AI-driven workflows evaluate campaign performance, test variations, and reallocate budget across channels. Optimization runs continuously without delays between analysis and execution." },
  { icon: "/adtech-development/06_Secure-use-of-first-party-data-in-AI-systems-02.svg", title: "Secure use of first-party data in AI systems", desc: "Customer data is unified and used within controlled environments. AI models operate on this data to improve targeting and decision-making while access and usage remain clearly governed." },
  { icon: "/adtech-development/05_Security-and-compliance-01.svg", title: "Security & compliance by design", desc: "Security and privacy are built into our architecture from day one. We ensure compliance with regulations and protect your data and reputation." },
];

// ─── Cooperation (2 rich cards with bullets) ──────────────────────────────────
const COOPERATION = [
  {
    icon: "/adtech-development/12_Time-estimates.svg",
    title: "Timelines: fast and predictable",
    tab: "Timelines",
    bullets: [
      "Discovery (1-4 weeks): We meet to understand your goals and plan the project, ensuring a strong start.",
      "MVP (3-6 months): We build a core version of your platform, like a basic DSP or CDP, for quick testing and early results.",
      "Full platform (6-18+ months): Complex solutions with advanced features like AI or high-volume data processing take longer, depending on your needs.",
      "Ongoing support: After launch, we add features, update systems, and adapt to your changing goals.",
    ],
    note: "You’ll get a clear roadmap after discovery, with regular updates to track progress.",
  },
  {
    icon: "/adtech-development/02_Quality-management-controls.svg",
    title: "Quality: built to last",
    tab: "Quality",
    bullets: [
      "Skilled team: Experienced developers, designers, and testers, trained in Adtech and Martech, work on your project.",
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
const ADT_BADGES: Badge[] = [
  { src: "/adtech-development/06_techreviewer_badge_2026-12.svg", alt: "techreviewer.co 2026 — Top Software Development Companies" },
  { src: "/adtech-development/06_techreviewer_badge_2026-04.svg", alt: "techreviewer.co 2026 — Top AI Software Development Companies" },
  { src: "/adtech-development/06_techreviewer_badge_2026-11.svg", alt: "techreviewer.co 2026 — Top Machine Learning Development Companies" },
  { src: "/adtech-development/03_Badge-1-1.svg", alt: "Top software development company in Massachusetts" },
  { src: "/adtech-development/12_5ca49c9f6cb37e33319e1162_Goodfirms.svg", alt: "GoodFirms badge" },
  { src: "/adtech-development/12_5ca49c9f8ff5ad26d13b6845_TDA.svg", alt: "TDA badge" },
  { src: "/adtech-development/12_5ca49c9f6cb37e49a79e1163_changed.svg", alt: "AWS partner badge" },
  { src: "/adtech-development/03_Badge-3.svg", alt: "Top developers reward" },
  { src: "/adtech-development/12_Mobile-Software-Development-2025.svg", alt: "Mobile Software Development 2025" },
  { src: "/adtech-development/12_Machine-Learning-Development-2024.svg", alt: "Machine Learning Development 2024" },
  { src: "/adtech-development/12_Custom-Web-Design-Development-2025.svg", alt: "Custom Web Design Development 2025" },
  { src: "/adtech-development/12_iOS-Development-2024.svg", alt: "iOS Development 2024" },
  { src: "/adtech-development/12_Responsive-Design-Development-2025.svg", alt: "Responsive Design Development 2025" },
  { src: "/adtech-development/12_Data-analysis-development-2024.svg", alt: "Data analysis development 2024" },
];

// ─── Awesome stories (blog, clone content) ────────────────────────────────────
const ADT_BLOG_FEATURED: AdlcFeaturedPost = {
  href: "/blog/eu-ai-act-custom-ai-development",
  title: "The EU AI Act: How It Changes AI development and What It Means for Custom AI",
  image: "/adtech-development/07_Figure-6-in-force-vs-coming.svg",
  imageAlt: "The EU AI Act — in force vs coming",
  readTime: "25 mins",
  date: "July 9, 2026",
};
const ADT_BLOG_SIDE: AdlcBlogPost[] = [
  { href: "/blog/questions-to-ask-ai-development-company", title: "10 questions to Ask an AI Development Company before Signing", readTime: "18 mins", date: "July 7, 2026" },
  { href: "/blog/blog-agentic-rag-enterprise-implementation-guide", title: "Agentic RAG: The Complete Enterprise Implementation Guide for 2026", readTime: "35 mins", date: "July 3, 2026" },
  { href: "/blog/ai-cost-reduction-playbook", title: "The AI Cost Reduction Playbook – 9 Mechanisms, 7 Hidden Drivers, and Real-World Case Studies (2026 Edition)", readTime: "32 mins", date: "July 1, 2026" },
];

// ─── Cross-links (3 columns, clone content) ───────────────────────────────────
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
export default function AdtechPage() {
  const [activeCooperation, setActiveCooperation] = useState(0);
  const cooperation = COOPERATION[activeCooperation];

  return (
    <>
      <AdtechHero />

      <AdtechArticleLayout>
        <AdtechLogos />

        {/* ── Solutions ──────────────────────────────────────────────────── */}
        <section id="adt-solutions" className={`${styles.blockWhite} ${styles.solutionsOpen}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>
              <span className={styles.accent}>Adtech software</span> engineered for speed, control, and scale
            </h2>
            <p className={styles.sectionDesc}>
              We design and build core Adtech infrastructure that operates in real time, processes high data volumes, and gives you full control over bidding, targeting, and monetization.
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
        <section id="adt-results" className={`${styles.blockWhite} ${styles.resultsOpen}`}>
          <div className="container">
            <div className={styles.resultsOpenInner}>
              <h2 className={styles.sectionTitle}>
                Our Adtech solutions in <span className={styles.accent}>numbers</span>
              </h2>
              <ul className={`${styles.ecomBullets} ${styles.adtResultsGrid}`}>
                {RESULTS.map((r) => <li key={r}>{r}</li>)}
              </ul>
            </div>
          </div>
        </section>

        {/* ── Margins ────────────────────────────────────────────────────── */}
        <section className={`${styles.blockWhite} ${styles.marginsOpen}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>
              At scale, Adtech defines your <span className={styles.accent}>margins</span>
            </h2>
            <p className={styles.sectionDesc}>
              As advertising operations grow, performance is increasingly determined by the systems that support them. We build Adtech infrastructure that gives you direct control over how bidding, data, and optimization operate across your business. As a result, advertising operates as a controlled system where performance, cost, and growth are directly aligned with your business strategy.
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
                <h2 className={styles.inlineCtaTitle}>Get Your Free Adtech Consultation</h2>
                <p className={styles.inlineCtaDesc}>Let’s explore how custom software can revolutionize your advertising and marketing efforts.</p>
              </div>
              <a href="#get-modal-popup" className={`btn btn-accent ${styles.inlineCtaBtn}`}>Get in touch</a>
            </div>
          </div>
        </div>

        {/* ── Predictable execution under bidding load ───────────────────── */}
        <section id="adt-bidding" className={`${styles.blockWhite} ${styles.biddingOpen}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>
              Predictable execution under real-time bidding <span className={styles.accent}>load</span>
            </h2>
            <p className={styles.sectionDesc}>
              Nexterse LLC Adtech systems are designed to operate under continuous bid flow, where every millisecond and every request directly impacts performance and cost. Execution remains stable as traffic grows, campaigns scale, and data volume increases.
            </p>
            <div className={styles.hcAudienceGrid}>
              {BIDDING.map((c) => (
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
        <div id="adt-cases">
          <CaseCards
            heading={<>Adtech software we <span>made</span></>}
            cards={ADT_CASES}
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
                <p className={styles.inlineCtaDesc}>Turn advertising from a variable cost into a controlled, high-margin asset.</p>
              </div>
              <a href="#get-modal-popup" className={`btn btn-accent ${styles.inlineCtaBtn}`}>Book a call</a>
            </div>
          </div>
        </div>

        {/* ── Awards & Recognitions ──────────────────────────────────────── */}
        <ServicesAchievements badges={ADT_BADGES} />

        {/* ── FAQ ────────────────────────────────────────────────────────── */}
        <div id="adt-faq">
          <ServicesFaqBlock items={ADT_FAQ} />
        </div>

        {/* ── Tech stack ─────────────────────────────────────────────────── */}
        <div id="adt-tech">
          <AdtechTechStack />
        </div>

        {/* ── Identity resolution ────────────────────────────────────────── */}
        <section id="adt-identity" className={`${styles.blockWhite} ${styles.identityOpen}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>
              <span className={styles.accent}>Identity</span> resolution without third-party cookies
            </h2>
            <p className={styles.sectionDesc}>
              Identity defines how precisely users are acquired, how efficiently the budget is allocated, and how predictably campaigns scale. As a part of our Adtech software development, we design an identity layer that provides a continuous, unified view of your audience without relying on third-party cookies.
            </p>
            <div className={styles.hcAudienceGrid}>
              {IDENTITY.map((c) => (
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

        {/* ── Transition ─────────────────────────────────────────────────── */}
        <section className={`${styles.blockWhite} ${styles.transitionOpen}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>
              Transition from third-party platforms <span className={styles.accent}>without</span> disruption
            </h2>
            <p className={styles.sectionDesc}>
              We transition your advertising operations from external platforms such as Google Display &amp; Video 360 and The Trade Desk to your own infrastructure through a controlled, measurable rollout.
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
                <h2 className={styles.inlineCtaTitle}>Solve Your Toughest Adtech Challenges</h2>
                <p className={styles.inlineCtaDesc}>Our team has the experience to build the custom solutions you need.</p>
              </div>
              <a href="#get-modal-popup" className={`btn btn-accent ${styles.inlineCtaBtn}`}>Get in touch</a>
            </div>
          </div>
        </div>

        {/* ── Why companies build Adtech with Nexterse ───────────────────── */}
        <section id="adt-why" className={`${styles.blockWhite} ${styles.whyOpen}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>
              <span className={styles.accent}>Why</span> companies build Adtech with Nexterse LLC
            </h2>
            <p className={styles.sectionDesc}>
              Adtech performance improves when deterministic systems and AI decisioning operate together within one architecture. Nexterse LLC is a top-notch Adtech development company that designs and delivers this combined model as a unified system, where infrastructure and AI operate in sync and produce measurable results at scale.
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
              Partnering with us means entering a collaboration built on clear expectations, transparent processes, and a shared commitment to excellence. We understand that investing in custom Adtech and Martech solutions is a significant decision, and we aim to provide clarity on project execution, financial commitment, and the quality you will receive.
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
                  src="/adtech-development/02_Time-series-analytics-solutions.jpg"
                  alt="Adtech cooperation planning"
                  width={520}
                  height={340}
                  className={styles.cooperationImage}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Awesome stories (blog) ─────────────────────────────────────── */}
        <AdlcBlog featured={ADT_BLOG_FEATURED} sidePosts={ADT_BLOG_SIDE} />

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
      </AdtechArticleLayout>
    </>
  );
}
