"use client";

import { useState } from "react";
import Image from "next/image";
import CaseCards from "@/components/home/CaseCards";
import ServicesReviewSlider from "@/components/services/ServicesReviewSlider";
import ServicesAchievements, { type Badge } from "@/components/services/ServicesAchievements";
import ServicesFaqBlock, { type FaqItem } from "@/components/services/ServicesFaqBlock";
import LetsStart from "@/components/home/LetsStart";
import AdlcBlog, { type AdlcFeaturedPost, type AdlcBlogPost } from "@/components/adlc/AdlcBlog";
import LogisticsHero from "./LogisticsHero";
import AipocLogos from "@/components/aipoc/AipocLogos";
import LogisticsArticleLayout from "./LogisticsArticleLayout";
import styles from "./LogisticsPage.module.css";

// ─── Challenges (4 cards) ─────────────────────────────────────────────────────
const CHALLENGES = [
  {
    icon: "/logistics-development/06_Disconnected-legacy-systems-and-EDI-bottlenecks-02.svg",
    title: "Disconnected legacy systems and EDI bottlenecks",
    desc: "Our logistics solutions unify these environments through API architecture and semantic EDI middleware. Legacy EDI 204/214 flows, carrier systems, warehouse operations, and ERP data are translated into a single, structured operational layer, enabling leadership to make faster decisions, execute more cleanly, and maintain a single source of operational truth.",
  },
  {
    icon: "/logistics-development/06_The-driver-shortage-and-retention-crisis-02.svg",
    title: "The driver shortage and retention crisis",
    desc: "Our AI-driven driver workflows account for Hours of Service (HOS), secure parking availability, dwell times, route profitability, and home-time planning. This improves route efficiency, supports driver productivity, and helps fleets operate more stably.",
  },
  {
    icon: "/logistics-development/06_Freight-fraud-and-double-brokering-defense-02.svg",
    title: "Freight fraud and double brokering defense",
    desc: "Our TMS integrations include behavioral AI and automated carrier vetting. Carrier activity, FMCSA authority changes, lane behavior, and onboarding patterns are continuously evaluated, helping dispatch teams work with verified partners and reduce disruption across carrier operations.",
  },
  {
    icon: "/logistics-development/06_Autonomous-supply-chain-control-01.svg",
    title: "Autonomous supply chain control",
    desc: "AI Supply Chain Control Towers provide continuous monitoring of telematics, weather conditions, port congestion, warehouse constraints, supplier timelines, and inventory flows. This architecture supports automated rerouting, execution continuity, and more reliable supply chain performance across the network.",
  },
];

// ─── Solutions (4 rich cards) ─────────────────────────────────────────────────
const SOLUTIONS = [
  {
    title: "Autonomous supply chain control",
    blocks: [
      { head: "AI supply chain control towers", text: "AI Control Towers monitor telematics, weather, port congestion, supplier delays, warehouse constraints, and carrier performance in real time. When disruption risks arise, the system can automatically trigger rerouting, rebooking, dispatch updates, and ERP synchronization." },
      { head: "Digital twin of the supply chain", text: "A Digital Twin creates a virtual model of your supply chain using ERP, telematics, and operational data. Teams can test disruptions like port strikes, supplier delays, or fuel spikes before they affect live operations." },
      { head: "Scope 3 emissions and carbon AI", text: "Carbon-tracking pipelines process telematics, routing patterns, fuel usage, and carrier activity across the network, automatically generating audit-ready Scope 3 reporting." },
    ],
  },
  {
    title: "Freight execution and transportation management",
    blocks: [
      { head: "Agentic freight matching", text: "AI agents process load requests, evaluate carriers, negotiate rates, verify compliance, and assign the optimal carrier with minimal manual work." },
      { head: "Freight management software", text: "Shipment planning, carrier coordination, freight auditing, billing, and reporting are centralized within one streamlined execution flow." },
      { head: "Transit time optimization and management", text: "Transit optimization combines traffic, warehouse readiness, delivery windows, and carrier availability to inform routing decisions in real time." },
      { head: "Last-mile delivery solutions", text: "Dispatching, route planning, delivery tracking, notifications, and proof of delivery are handled in a single flow." },
    ],
  },
  {
    title: "Warehouse, yard, and product integrity",
    blocks: [
      { head: "Predictive warehouse operations", text: "Machine learning models anticipate congestion points, optimize labor allocation, improve dock scheduling, and support faster inventory movement." },
      { head: "Automated yard management system (YMS)", text: "Computer Vision-powered YMS uses OCR on gate cameras and yard devices to identify trailers, verify seal integrity, monitor movement, and prioritize yard operations." },
      { head: "Cold chain and predictive spoilage prevention", text: "Sensor monitoring and predictive models analyze refrigeration performance, voltage, and vibration telemetry to detect reefer failures before they occur." },
      { head: "Product integrity and damage control", text: "Monitoring systems track handling conditions across storage and transportation, identifying risks before product quality is compromised." },
    ],
  },
  {
    title: "Fleet performance and operational efficiency",
    blocks: [
      { head: "Fleet management solutions", text: "Vehicle health, maintenance schedules, fuel consumption, location tracking, and driver performance are managed within a single decision layer." },
      { head: "Fuel price volatility optimization", text: "Optimization systems continuously analyze route efficiency, idle time, fuel usage, and carrier performance." },
      { head: "Driver activity monitoring", text: "Driver monitoring tracks route behavior, dwell times, idle periods, operational efficiency, and Hours of Service compliance." },
    ],
  },
];

// ─── Improves itself (3 cards) ────────────────────────────────────────────────
const IMPROVES = [
  {
    icon: "/logistics-development/06_Internet-of-Things-and-telematics-systems-02.svg",
    title: "Telematics and predictive monitoring systems",
    desc: "Your fleet continuously generates the data that defines delivery speed, maintenance planning, and asset performance. Our telematics solutions create a single operational environment across transportation and warehouse operations, giving dispatchers, operators, and leadership full visibility into how assets move and perform.",
    linkLabel: "Predictive maintenance development",
    href: "/services/predictive-maintenance",
  },
  {
    icon: "/logistics-development/06_Artificial-intelligence-and-agentic-workflows-01.svg",
    title: "Artificial intelligence and agentic workflows",
    desc: "Our AI solutions turn logistics operations into faster, more coordinated systems. AI works directly with ERP and TMS environments, processing live data and executing approved business logic within clearly defined operational rules. Your teams get faster execution, stronger consistency, and fewer manual bottlenecks across daily logistics operations.",
    linkLabel: "AI development",
    href: "/services/ai-software-development",
  },
  {
    icon: "/logistics-development/06_Big-Data-and-machine-learning-02.svg",
    title: "Big Data and ML",
    desc: "Our Big Data and machine learning solutions turn fragmented operational data into a continuous optimization layer across the supply chain. Planning, resource allocation, and performance management move into one continuous optimization process, so execution stays efficient, growth remains predictable, and resource allocation becomes significantly more precise.",
    linkLabel: "Big Data development",
    href: "/services/ai-software-development",
  },
];

// ─── Cases (5) ────────────────────────────────────────────────────────────────


// ─── Roadmap (3 phases) ───────────────────────────────────────────────────────
const ROADMAP = [
  {
    title: "Phase 1 – Telemetry and API auditing",
    paragraphs: [
      "The first step is an audit of your operational environment – core systems, warehouse workflows, and critical integration points across the supply chain.",
      "During this stage, we identify where operational inefficiencies create delays, increase manual work, and reduce delivery performance. We also define baseline KPIs so every technical decision directly supports measurable business outcomes and margin improvement.",
      "At the end of this phase, you receive:",
    ],
    bullets: ["A system blueprint", "Integration architecture", "Rollout priorities", "A clear ROI model"],
  },
  {
    title: "Phase 2 – Shadow AI pilot",
    paragraphs: [
      "Before replacing operational workflows, the new system runs in parallel with your existing process. AI-driven planning and dispatching work alongside human teams while live operations continue without interruption. This allows us to validate execution reliability and measure real operational impact under production conditions.",
      "Leadership receives clear proof of cost savings and performance improvements before production cutover, along with go/no-go criteria for scaling the solution across the business.",
    ],
    bullets: [],
  },
  {
    title: "Phase 3 – Hardware-in-the-loop (HITL) testing and phased fleet rollout",
    paragraphs: [
      "We devote the third phase to field testing with real devices. System behavior is tested against real field hardware and warehouse infrastructure to ensure stable system performance under real field conditions. After validation, rollout moves in controlled stages across locations, fleets, and operational teams.",
      "Deployment includes:",
    ],
    bullets: ["A controlled rollout", "Team enablement and education", "Post-launch operational support"],
  },
];

// ─── Cost factors (5 vertical tabs) ───────────────────────────────────────────
const COST_TABS = [
  {
    label: "Project complexity",
    desc: "The major portion of the price depends on a project's volume and complexity. Since transportation and logistics solutions vary from a single mobile application for couriers to an enterprise platform combining TMS, WMS, last-mile, and analytical dashboards, we discuss each business idea individually with a Client to offer the best quality-price ratio.",
  },
  {
    label: "UI/UX design",
    desc: "The cost of the UX/UI design portion of the project depends on the labor intensity that the frontend requires.",
  },
  {
    label: "Third-party integrations",
    desc: "The more integrations you need, the more complex the architecture might be, or just the time needed to configure everything properly.",
  },
  {
    label: "Team composition",
    desc: "The composition and seniority of the team directly affect the budget and speed. Not only developers are needed, but also a business analyst with experience in logistics, UI/UX, QA (including autotests), DevOps/Cloud, and sometimes data/ML specialists. A large team speeds up releases, but increases budget “burning” and the synchronization load; a small one is cheaper, but takes longer.",
  },
  {
    label: "Post-launch support",
    desc: "We recommend that you do not neglect post-release support. It includes monitoring, alerts, security patches, dependency updates, response to changes in third-party APIs, minor improvements, infrastructure maintenance (cloud, networks, storage), and SLA reporting. It's also valuable to get post-launch user training and development according to the roadmap.",
  },
];

// ─── Why Nexterse (4 cards) ───────────────────────────────────────────────────
const WHY_CARDS = [
  {
    icon: "/logistics-development/06_ROI-first-architecture-02.svg",
    title: "ROI-first architecture",
    desc: "Every project starts with business economics. We define KPIs such as cost-per-mile, OTIF, fleet utilization, empty miles, dock dwell time, and spoilage loss before development begins. This allows leadership to see clear ROI, controlled TCO, and measurable business impact. 98% of our Clients are satisfied with our delivery quality, and 70% return with another project.",
  },
  {
    icon: "/logistics-development/06_Legacy-EDI-to-AI-translation-01.svg",
    title: "Legacy EDI to AI translation",
    desc: "Your 3PL partners still use EDI 204s and 214s. AI uses structured APIs. We build semantic EDI middleware that converts legacy flat files into structured JSON and routes them into production-ready business systems and vector databases. This makes decades of logistics infrastructure usable for automation, analytics, and AI without replacing your partner ecosystem.",
  },
  {
    icon: "/logistics-development/06_Fleet-ready-deployment-approach-01.svg",
    title: "Fleet-ready deployment approach",
    desc: "We use shadow pilots, hardware-in-the-loop testing, and phased rollout before production cutover. AI routing runs in parallel with dispatchers first, predictive maintenance is tested on real telematics hardware, and warehouse automation is validated in live operations.",
  },
  {
    icon: "/logistics-development/06_Enterprise-grade-security-and-system-reliability-01.svg",
    title: "Enterprise-grade security and system reliability",
    desc: "We use ISO 9001- and ISO 27001-aligned processes, role-based access control, encrypted data flows, audit trails, and a zero-trust API architecture. AI agents never have direct access to the ERP database. All sensitive actions move through controlled middleware, so your operations stay protected and compliance risk is minimal.",
  },
];

// ─── FAQ (5) ──────────────────────────────────────────────────────────────────
const LOG_FAQ: FaqItem[] = [
  {
    question: "How do you prevent an AI routing algorithm from “hallucinating” an impossible delivery route?",
    answer: "We never use Generative AI to draw a physical map. We engineer a Dual-Engine Routing Architecture. We use strict, deterministic heuristic algorithms (like Dijkstra's or Reinforcement Learning models) to calculate the physical route based on weight limits and bridge heights. The LLM is only used as the “Translation Agent” to summarize the route output and communicate exceptions to the customer.",
  },
  {
    question: "Can we deploy predictive maintenance AI to our fleet if our trucks frequently drive through “dead zones” with zero cellular connectivity?",
    answer: "Yes. We engineer Offline-First Edge AI Telematics. The predictive machine learning models are compressed (TinyML) and installed directly on the truck's onboard edge gateway. The AI continuously monitors engine CAN bus data (like oil pressure and vibration) locally. If an anomaly is detected, it triggers an instant dashboard warning for the driver and syncs the telemetry to the cloud later when the truck enters a Wi-Fi or 5G zone.",
  },
  {
    question: "How do we safely integrate Agentic AI workflows with our legacy on-premises ERP (e.g., SAP or Oracle)?",
    answer: "We do not rely on fragile screen scraping or direct database injection. We engineer Zero-Trust API Abstraction Layers. We build secure middleware that sits in front of your legacy ERP. The AI agents interact only with this middleware using strictly formatted webhooks and REST APIs. This ensures the AI can draft purchase orders and update inventory without ever gaining direct, dangerous access to your core SQL databases.",
  },
  {
    question: "Can AI help us consolidate LTL (Less-Than-Truckload) shipments into multi-stop FTL (Full Truckload) runs automatically?",
    answer: "Yes. Manual LTL consolidation leaves a massive volume of space empty. We engineer 3D Volumetric AI Consolidation algorithms. The system ingests the dimensions, weight, and delivery windows of thousands of LTL pallets. It uses complex spatial-packing mathematics to build multi-stop FTL routes autonomously, maximizing trailer utilization and slashing your linehaul costs.",
  },
  {
    question: "How do you handle the massive latency of processing telematics from 10,000 trucks simultaneously?",
    answer: "Sending millions of telemetry pings to a central cloud database every second will crash standard applications and inflate AWS costs. We use Distributed Stream Processing Architectures (such as Apache Flink). This allows our systems to process, filter, and analyze the high-velocity fleet data in-stream (in memory) before it even hits the database, ensuring your AI Control Tower updates in sub-second real-time.",
  },
];

// ─── Awards (clone badges) ────────────────────────────────────────────────────
const LOG_BADGES: Badge[] = [
  { src: "/badges_fix/06_techreviewer_badge_2026-12.svg", alt: "techreviewer.co 2026 — Top Software Development Companies" },
  { src: "/badges_fix/06_techreviewer_badge_2026-09.svg", alt: "techreviewer.co 2026 — Top Enterprise Software Development Companies" },
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

// ─── Awesome guides (blog, clone content) ─────────────────────────────────────
const LOG_BLOG_FEATURED: AdlcFeaturedPost = {
  href: "/blog/top-offshore-software-development-companies",
  title: "15+ Top Offshore Software Development Companies in 2026",
  image: "/logistics-development/06_Top-Offshore-Software-Development-Companies-1024x578.png",
  imageAlt: "Top Offshore Software Development Companies",
  readTime: "37 mins",
  date: "March 3, 2026",
};
const LOG_BLOG_SIDE: AdlcBlogPost[] = [
  { href: "/blog/software-outsourcing-rates-overview", title: "Software Outsourcing Costs [2026 Updated] – Overview", readTime: "22 mins", date: "December 23, 2024" },
  { href: "/blog/ai-in-logistics-fleet-management", title: "Exploring: 11 Ways AI Is Transforming Logistics", readTime: "23 mins", date: "March 15, 2025" },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function LogisticsPage() {
  const [activeCost, setActiveCost] = useState(COST_TABS.length - 1);

  return (
    <>
      <LogisticsHero />

      <LogisticsArticleLayout>
        <AipocLogos />

        {/* ── Challenges ─────────────────────────────────────────────────── */}
        <section id="log-challenges" className={`${styles.blockLight} ${styles.logisticsChallengesBlock}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>
              Business <span className={styles.accent}>challenges</span> we address
            </h2>
            <p className={styles.sectionDesc}>
              As logistics operations grow, speed, coordination, and decision quality define profitability. Dispatching, warehouse execution, carrier management, and supply chain planning all depend on how well systems work together. We develop custom logistics software that improves execution across fleet performance, warehouse efficiency, carrier reliability, and supply chain planning — for faster decisions, stronger margins, and a logistics environment built for scale.
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
        <section id="log-solutions" className={`${styles.blockWhite} ${styles.logisticsSolutionsBlock}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>
              Custom logistics <span className={styles.accent}>solutions</span> we build
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
                <h2 className={styles.inlineCtaTitle}>Revolutionize Your Logistics</h2>
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
              We build a logistics system that <span className={styles.accent}>improves</span> itself
            </h2>
            <p className={styles.sectionDesc}>
              Logistics performance depends on how quickly operations turn data into action. Fleet movement, warehouse execution, delivery planning, and supplier coordination require systems that function as a single structure. We build logistics environments where telematics, ERP, TMS, WMS, and operational workflows work as one decision layer — AI and machine learning support live execution and help the system grow with your business.
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
        <div id="log-cases">
          <CaseCards
            heading={<>Logistics software we <span>developed</span></>}
            windowed
          />
        </div>

        {/* ── Reviews ────────────────────────────────────────────────────── */}
        <ServicesReviewSlider primary="software" count={6} secondaryCount={1} lead={["Krenar Komoni"]} />

        {/* ── CTA: Start Your Transformation ─────────────────────────────── */}
        <div className={`${styles.inlineCta} ${styles.logisticsGradientCta}`}>
          <div className="container">
            <div className={styles.inlineCtaInner}>
              <div>
                <h2 className={styles.inlineCtaTitle}>Start Your Transformation</h2>
                <p className={styles.inlineCtaDesc}>The future of logistics is custom. Partner with us to build the software that will define your success.</p>
              </div>
              <a href="#get-modal-popup" className={`btn btn-accent ${styles.inlineCtaBtn}`}>Get a quote</a>
            </div>
          </div>
        </div>

        {/* ── Roadmap ────────────────────────────────────────────────────── */}
        <section id="log-roadmap" className={styles.processBlock}>
          <div className="container">
            <h2 className={styles.sectionTitleWhite}>
              Fleet-ready deployment <span className={styles.accent}>roadmap</span>
            </h2>
            <div className={styles.processIntro}>
              <p>
                Replacing logistics infrastructure requires more than a standard software rollout. Dispatching must stay uninterrupted, telematics must remain stable, and warehouse operations must continue without delays across physical assets.
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
        <div id="log-faq">
          <ServicesFaqBlock items={LOG_FAQ} />
        </div>

        {/* ── Cost factors (vertical tabs) ───────────────────────────────── */}
        <section id="log-cost" className={styles.blockWhite}>
          <div className="container">
            <h2 className={styles.sectionTitle}>
              <span className={styles.accent}>Cost</span> factors of custom logistics software
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
        <section id="log-why" className={styles.logisticsWhyBlock}>
          <div className="container">
            <h2 className={styles.logisticsWhyTitle}>
              <span className={styles.accent}>Why</span> logistics operators trust Nexterse LLC
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
        <ServicesAchievements badges={LOG_BADGES} />

        {/* ── Awesome guides (blog) ──────────────────────────────────────── */}
        <AdlcBlog featured={LOG_BLOG_FEATURED} sidePosts={LOG_BLOG_SIDE} />

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
      </LogisticsArticleLayout>
    </>
  );
}
