"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import AwesomeStories from "@/components/blog/AwesomeStories";
import styles from "./LegacyPage.module.css";

// ─── Data ─────────────────────────────────────────────────────────────────────

const VT_TABS = [
  {
    label: "Predictable delivery and planning",
    icon: "/legacy-modernization/11_1-1.svg",
    iconActive: "/legacy-modernization/11_1-2.svg",
    title: "Predictable delivery and planning",
    content:
      "We restructure applications so dependencies are visible, boundaries are clear, and changes behave consistently across environments. At the same time, we introduce API layers that allow AI-driven features such as copilots or decision support to integrate without disrupting core workflows. Release cycles stabilize, estimates become reliable, and new capabilities can be introduced with confidence.",
  },
  {
    label: "Lower and more controllable operating costs",
    icon: "/legacy-modernization/11_2-1.svg",
    iconActive: "/legacy-modernization/11_2-2.svg",
    title: "Lower and more controllable operating costs",
    content:
      "We reduce structural complexity inside the system and streamline how infrastructure and services are used. AI workloads are introduced through controlled pipelines, with clear cost boundaries and measurable usage patterns. This keeps operations and AI-driven functionality predictable from a cost perspective.",
  },
  {
    label: "Reduced operational and financial exposure",
    icon: "/legacy-modernization/11_3-1.svg",
    iconActive: "/legacy-modernization/11_3-2.svg",
    title: "Reduced operational and financial exposure",
    content:
      "We design systems to behave consistently under varying load and usage conditions, including AI-driven interactions. AI components operate through isolated layers, ensuring that core systems remain stable while new capabilities are introduced. This creates a controlled environment where system behavior remains consistent as complexity grows.",
  },
  {
    label: "Stronger security and compliance control",
    icon: "/legacy-modernization/11_4-1.svg",
    iconActive: "/legacy-modernization/11_4-2.svg",
    title: "Stronger security and compliance control",
    content:
      "We embed security and compliance logic directly into system architecture, data handling, and access control. AI interactions are governed through defined data access layers, ensuring that sensitive information remains protected and traceable. Audit processes remain structured as new AI capabilities are introduced.",
  },
  {
    label: "Reliable data for financial decisions",
    icon: "/legacy-modernization/11_5-1.svg",
    iconActive: "/legacy-modernization/11_5-2.svg",
    title: "Reliable data for financial decisions",
    content:
      "We align data structures, ownership, and flows across systems, preparing them for analytics and AI usage. Data becomes consistently accessible through structured pipelines, enabling AI models to operate on clean, governed inputs. Teams work with the same trusted data across reporting, automation, and AI-driven insights.",
  },
  {
    label: "Capacity for growth with AI-ready infrastructure",
    icon: "/legacy-modernization/11_6-1.svg",
    iconActive: "/legacy-modernization/11_6-2.svg",
    title: "Capacity for growth with AI-ready infrastructure",
    content:
      "We design systems that support new integrations, channels, and AI capabilities without introducing instability or disproportionate cost increases. Modern architecture allows you to extend functionality with copilots, automation, and advanced analytics as needed, without reworking the foundation. Growth becomes a controlled expansion of capabilities rather than a structural challenge.",
  },
];

const CASES = [
  {
    href: "#",
    bg: "linear-gradient(280.31deg, #780013 -2.24%, #B31E35 76.47%)",
    tech: "AI-powered stack",
    title: "AI-powered predictive maintenance for a large industrial manufacturer",
    desc: "An AI upgrade that cut unplanned downtime by 50% within 8 months, adding explainable ML and context analysis to the existing monitoring platform.",
    tags: ["AI inside", "Enterprise"],
    imgRight: "/legacy-modernization/11_Cover-1-1.png",
    imgLeft: "/legacy-modernization/11_Cover-1-2.png",
  },
  {
    href: "#",
    bg: "linear-gradient(259.16deg, #02102C -0.49%, #112244 100%)",
    tech: "AI-powered stack",
    title: "AI-powered knowledge base for a global rights nonprofit",
    desc: "A Middle Eastern nonprofit working in cultural preservation needed a single searchable repository for fragmented research on ethnic minorities. Nexterse LLC built a multilingual AI platform that now indexes 12,000+ artifacts across 18 countries.",
    tags: ["AI inside", "Enterprise"],
    imgRight: "/legacy-modernization/07_Cover-right-2.png",
    imgLeft: "/legacy-modernization/07_Cover-left-2.png",
  },
  {
    href: "#",
    bg: "linear-gradient(281.09deg, #36185F 2.55%, #7349AC 72.04%)",
    tech: "AI-powered stack",
    title: "AI/ML route optimization for a freight delivery service",
    desc: "Lifted on-time delivery to 98% – without expanding the fleet. An AI/ML platform that plans and reoptimizes B2B/B2C routes in real time with traffic, weather, and capacity constraints, cutting last-mile costs by 22%.",
    tags: ["AI inside", "Enterprise"],
    imgRight: "/legacy-modernization/10_Cover-1-1.png",
    imgLeft: "/legacy-modernization/10_Cover-1-2.png",
  },
];

const REVIEWS = [
  {
    text: "The system has produced a significant competitive advantage in the industry thanks to Nexterse LLC's well-thought opinions. They shouldered the burden of constantly updating a project management tool with a high level of detail and were committed to producing the best possible solution.",
    photo: "/legacy-modernization/01_photo.png",
    name: "Alexander McCaig",
    position: "Co-Founder & CEO, Tartle",
    logo: null,
  },
  {
    text: "I was impressed by Nexterse LLC's prices, especially for the project I wanted to do and in comparison to the quotes I received from a lot of other companies. Also, their communication skills were great; it never felt like a long-distance project. It felt like Nexterse LLC was working next door because their project manager was always keeping me updated.",
    photo: "/legacy-modernization/12_5cc8378b669af259c74ec736_b_dorsinvil-2-1-1.jpg",
    name: "Benjamin Dorsinvil",
    position: "Founder, SellBig",
    logo: null,
  },
  {
    text: "We tried another company that one of our partners had used but they didn't work out. I feel that Nexterse LLC does a better investigation of what we're asking for. They tell us how they plan to do a task and ask if that works for us. We chose them because their method worked with us.",
    photo: "/legacy-modernization/01_photo6.png",
    name: "Damian Gevertz",
    position: "Founder & CEO, Widgety",
    logo: null,
  },
  {
    text: "Nexterse LLC is the firm to work with if you want to keep up to high standards. The professional workflows they stick to result in exceptional quality. Important, they help you think with the business logic of your application and they don't blindly follow what you are saying. Which is super important. Overall, great skills, good communication, and happy with the results so far.",
    photo: "/legacy-modernization/01_photo2.png",
    name: "Domien Van Eynde",
    position: "Team Lead, Daiokan.com",
    logo: null,
  },
  {
    text: "They are very sharp and have a high-quality team. I expect quality from people, and they have the kind of team I can work with. They were upfront about everything that needed to be done. I appreciated that the cost of the project turned out to be smaller than what we expected because they made some very good suggestions. They are very pleasant to work with.",
    photo: "/legacy-modernization/01_photo11.png",
    name: "Michael Karbushev",
    position: "Senior Director of Engineering, Evolv",
    logo: null,
  },
  {
    text: "Rivalfox had the pleasure to work with Nexterse LLC in building out core portions of our product, and the results really couldn't have been better. Nexterse LLC provided us with engineering expertise, enthusiasm and great people that were focused on creating quality features quickly.",
    photo: "/legacy-modernization/01_photo5.png",
    name: "Paul S. Chun",
    position: "CTO, Rivalfox GmbH",
    logo: null,
  },
  {
    text: "Nexterse LLC succeeded in building a more manageable solution that is much easier to maintain.",
    photo: "/legacy-modernization/01_photo3.png",
    name: "Yevgeniy Rozenblat",
    position: "Program Manager, TL Nika",
    logo: null,
  },
  {
    text: "When looking for a strategic IT-partner for the development of a corporate ERP solution, we chose Nexterse LLC. The company proved itself a reliable provider of IT services.",
    photo: "/legacy-modernization/01_photo9.png",
    name: "Yuriy Semenchuk",
    position: "General Director, Business Car",
    logo: null,
  },
  {
    text: "Thanks to Nexterse LLC's can-do attitude, amazing work ethic, and willingness to tackle clients' problems as their own, they've become an integral part of our team. We've been truly impressed with their professionalism and performance and continue to work with the team on developing new applications. We are completely satisfied with the results of our cooperation and will be happy to recommend Nexterse LLC as a reliable and competent partner for development of web-based solutions.",
    photo: null,
    name: "Yury Haverman",
    position: "Founder, BoxForward",
    logo: "/legacy-modernization/01_logo.svg",
  },
  {
    text: "Together with the team, we have turned the MVP version of the service into a modern full-featured platform for online marketers. We are very satisfied with the work the Nexterse LLC team has performed, and we would like to highlight the high level of technical expertise, coherence and efficiency of communication and flexibility in work. We can confidently say that Nexterse LLC has put all our ideas into practice.",
    photo: "/legacy-modernization/01_photo7.png",
    name: "Katerina Bromberg",
    position: "Co-Founder, MyMediAds.com",
    logo: null,
  },
];

const ACHIEVEMENTS = [
  { src: "/badges_fix/legacy-modernization__06_techreviewer_badge_2026-10.svg", alt: "techreviewer.co 2026 – Nexterse LLC listed among Top Legacy Software Modernization Companies" },
  { src: "/badges_fix/badge-goodfirms.svg", alt: "Goodfirms badge icon" },
  { src: "/badges_fix/badge-tda.svg", alt: "TDA badge icon" },
  { src: "/badges_fix/badge-aws.svg", alt: "AWS partner badge icon" },
  { src: "/badges_fix/legacy-modernization__01_top_clutch.co_software_developers_startup_massachusetts.svg", alt: "top_clutch.co top startup software developers Massachusetts" },
  { src: "/badges_fix/legacy-modernization__01_top_clutch.co_software_developers_hospitality__leisure_massachusetts.svg", alt: "top_clutch.co top hospitality software developers Massachusetts" },
  { src: "/badges_fix/legacy-modernization__01_top_clutch.co_python__django_developers_boston_2024.svg", alt: "top_clutch.co top Python Django developers Boston 2024" },
  { src: "/badges_fix/legacy-modernization__01_top_clutch.co_nodejs_developers_boston_2024.svg", alt: "top_clutch.co top Node.js developers Boston 2024" },
  { src: "/badges_fix/legacy-modernization__01_techreviewer_badge_2025-2.svg", alt: "TR top software developers 2025" },
  { src: "/badges_fix/legacy-modernization__01_techreviewer_badge_2025-1.svg", alt: "TR top web developers 2025" },
  { src: "/badges_fix/legacy-modernization__01_techreviewer_badge_2024-2.svg", alt: "TR top software developers 2024" },
  { src: "/badges_fix/legacy-modernization__01_techreviewer_badge_2024-1.svg", alt: "TR top web developers 2024" },
];

const FAQ_ITEMS = [
  {
    q: "Do we need to migrate our legacy on-premise application to the cloud before we can integrate AI?",
    a: "Not necessarily. While cloud migration (AWS/Azure) offers the best scalability, highly regulated industries (defense, healthcare) cannot move data to the public cloud. We can modernize your on-premise architecture by containerizing your legacy app (Docker/Kubernetes) and deploying locally hosted, quantized small language models (SLMs) directly onto your private servers.",
  },
  {
    q: "How do you safely connect an AI copilot to a fragile, legacy SQL database?",
    a: "We never connect an LLM directly to a legacy transactional database, as heavy AI querying will cause the system to crash. We build a secure read-replica architecture. We sync your legacy database to a modern, decoupled vector database. The AI queries the vector database, keeping your core legacy system stable and secure.",
  },
  {
    q: "How do you modernize undocumented legacy code when the original developers have left the company?",
    a: 'We use a combination of static code analysis and AI-assisted context mapping. We deploy secure LLMs to analyze your legacy codebase, reverse-engineer the undocumented business logic, and generate comprehensive architectural diagrams. This allows us to safely refactor the code without guessing how the original logic worked.',
  },
  {
    q: 'What is the difference between "lift and shift" and "AI-ready modernization"?',
    a: '"Lift and shift" moves your old, inefficient code from a local server to the cloud and leaves technical debt unchanged. "AI-ready modernization" refactors the code into API-first microservices, allowing your system to securely transmit data payloads to AI orchestration layers such as LangChain or LlamaIndex without latency or security issues.',
  },
  {
    q: "How do you modernize legacy systems written in outdated languages when the original developers have retired?",
    a: "We do not rely on manual, line-by-line translation. We use AI-assisted code refactoring. We deploy fine-tuned large language models to read your legacy codebase (like COBOL, Delphi, or early Java), map the undocumented business rules, and translate the logic into modern, secure frameworks (like Node.js or modern Java/Python). Our architects validate and optimize the new codebase, reducing modernization timelines by up to 50%.",
  },
  {
    q: "How do we safely connect an AI copilot or modern microservice to our fragile legacy relational database?",
    a: "We avoid direct querying of the legacy database by AI or high-traffic services. We engineer change data capture (CDC) pipelines. As transactions occur in your legacy database, the pipeline streams changes in real time to a modern read-replica or vector database. AI and modern applications query the replica, keeping your core system stable and secure.",
    hidden: true,
  },
  {
    q: 'Why shouldn\'t we just "lift and shift" our legacy monolith to AWS or Azure before trying to integrate AI?',
    a: '"Lift and shift" relocates technical debt without improving system structure. If your monolith is not decoupled into APIs, an LLM cannot securely interact with it. We apply AI-ready cloud refactoring by containerizing the application and decoupling the data layer, enabling REST or GraphQL APIs that support agentic AI and copilots.',
    hidden: true,
  },
  {
    q: "How do you guarantee the modernized software will calculate business logic (like billing or logistics) exactly the same way the old legacy software did?",
    a: "We implement shadow testing (parallel runs). We duplicate live production traffic and send it to both the legacy system and the modernized system. Automated diff checks confirm that outputs match before switching production, ensuring full consistency.",
    hidden: true,
  },
  {
    q: "How do you ensure our sensitive customer data (PII) isn't leaked or exposed while modernizing our legacy infrastructure?",
    a: "We implement zero-trust ETL (extract, transform, load) pipelines. Before data is moved or vectorized for AI, it passes through automated redaction that anonymizes personally identifiable information and encrypts data at rest using AES-256. This maintains compliance with HIPAA, GDPR, and SOC 2 throughout the modernization process.",
    hidden: true,
  },
];

// ─── Clock SVG ───────────────────────────────────────────────────────────────
const ClockSVG = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
    <path d="M8 15C11.866 15 15 11.866 15 8C15 4.134 11.866 1 8 1C4.134 1 1 4.134 1 8C1 11.866 4.134 15 8 15Z" stroke="#5E6D8E" strokeWidth="1.5" strokeMiterlimit="10" />
    <path d="M8 4.981V8.481L10.333 10.648" stroke="#5E6D8E" strokeWidth="1.5" strokeLinecap="square" />
  </svg>
);

// ─── Main Component ──────────────────────────────────────────────────────────
export default function LegacyPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [showAllFaq, setShowAllFaq] = useState(false);

  // Cases swiper
  const casePrevRef = useRef<HTMLDivElement>(null);
  const caseNextRef = useRef<HTMLDivElement>(null);
  const caseSwiperRef = useRef<SwiperType | null>(null);

  // Reviews swiper
  const revPrevRef = useRef<HTMLDivElement>(null);
  const revNextRef = useRef<HTMLDivElement>(null);
  const revSwiperRef = useRef<SwiperType | null>(null);

  // Achievements swiper
  const achPrevRef = useRef<HTMLDivElement>(null);
  const achNextRef = useRef<HTMLDivElement>(null);
  const achSwiperRef = useRef<SwiperType | null>(null);

  const visibleFaq = showAllFaq ? FAQ_ITEMS : FAQ_ITEMS.filter((f) => !f.hidden);

  return (
    <>
      {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroInner}>
            <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
              <a href="/">Home</a>
              <a href="/services">Services</a>
              <span>Legacy software modernization</span>
            </nav>
            <h1 className={styles.heroTitle}>
              <span className={styles.accent}>Legacy software modernization.</span>
              {" "}Make your monolith AI-ready
            </h1>
            <p className={styles.heroDesc}>
              We modernize legacy applications into structured, API-first systems that support AI, scale with demand, and remain stable in production.
              Our engineers refactor core logic, decouple dependencies, and prepare your data and architecture for seamless integration with modern AI copilots and intelligent workflows.
            </p>
            <a href="#contact" className={styles.heroBtn}>Get in Touch</a>
          </div>
        </div>
      </section>

      {/* ── 2. CLIENT LOGOS ─────────────────────────────────────────────── */}
      <section className={styles.logosSection}>
        <div className="container">
          <div className={styles.logosWrapper}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/legacy-modernization/12_5c98e3297e3bc92bd580af14_toyota_l-1.svg" alt="Toyota logo" className={styles.logoImg} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/legacy-modernization/12_5ecba50d2b50b63a7a1871ad_beiersdorf-logo-1.svg" alt="Beiersdorf logo" className={styles.logoImg} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/legacy-modernization/01_ClimeCo.svg" alt="ClimeCo" className={styles.logoImg} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/legacy-modernization/12_5ecce35506c123c4936b0303_dexai-logo-1.svg" alt="Dexai logo" className={styles.logoImg} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/legacy-modernization/10_SMI_Logo-1-2-2.svg" alt="SMI logo" className={styles.logoImg} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/legacy-modernization/01_Tartle.svg" alt="Tartle" className={styles.logoImg} />
          </div>
        </div>
      </section>

      {/* ── 3. SERVICES CARDS ────────────────────────────────────────────── */}
      <section className={styles.industrySection} id="services">
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Legacy software modernization <span className={styles.accent}>services</span>
            </h2>
            <p className={styles.sectionDesc}>
              Legacy modernization is not a single activity. It is a sequence of structured decisions, architectural changes, and controlled execution stages.
              We design modernization as a set of clearly defined services, so you can engage exactly where your system requires progress — with full visibility into scope, effort, and outcomes.
            </p>
          </div>
          <div className={styles.cardsRow}>
            {[
              {
                title: "Legacy system assessment & consulting",
                body: "We establish a precise understanding of how your system operates today. We analyze architecture, data flows, integrations, and operational behavior using a combination of expert review and AI-assisted system mapping. Undocumented logic, hidden dependencies, and structural constraints are identified and documented in a shared system view.",
                result: "A clear system map, defined risk zones, and modernization options with explicit trade-offs — allowing decisions to be made with confidence and alignment across teams.",
              },
              {
                title: "Application & architecture modernization",
                body: "We restructure application architecture so systems remain stable in production and predictable under change. Components are reorganized, boundaries are clarified, and coupling is reduced. Core business logic is preserved while the system becomes easier to extend, integrate, and maintain.",
                result: "Stable releases, fewer unintended side effects, and an architecture that supports ongoing development without operational friction.",
              },
              {
                title: "Cloud & infrastructure modernization",
                body: "We redesign infrastructure to behave consistently under load and adapt to changing operational requirements. Environments, deployment pipelines, and hosting models are structured to support scalability, recovery, and controlled delivery. Infrastructure becomes aligned with both technical and regulatory expectations.",
                result: "Predictable deployments, defined recovery paths, and infrastructure that supports growth without operational strain.",
              },
              {
                title: "AI-accelerated legacy transformation",
                body: "We apply AI directly to the modernization process to increase speed, accuracy, and visibility. Legacy codebases are analyzed using AI-assisted mapping, enabling faster understanding of undocumented logic. Outdated technologies are translated into modern frameworks, and regression tests are generated automatically to validate behavior.",
                result: "Faster modernization cycles, improved accuracy of system understanding, and a structured transition from legacy environments to modern, maintainable architectures.",
              },
            ].map((card) => (
              <div key={card.title} className={styles.cardCol}>
                <div className={styles.industryCard}>
                  <h3 className={styles.industryCardTitle}>{card.title}</h3>
                  <p className={styles.industryCardBody}>
                    {card.body}
                    <br /><br />
                    <i>Result:</i>
                    <br />
                    {card.result}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. COMPLIANCE LOGOS ──────────────────────────────────────────── */}
      <section className={styles.complianceSection}>
        <div className="container">
          <div className={styles.complianceWrapper}>
            {[
              { src: "/legacy-modernization/05_pci.svg", alt: "PCI compliance" },
              { src: "/legacy-modernization/05_owasp.svg", alt: "OWASP" },
              { src: "/legacy-modernization/05_iso.svg", alt: "ISO compliance" },
              { src: "/legacy-modernization/05_hipaa.svg", alt: "HIPAA compliance" },
              { src: "/legacy-modernization/05_gdpr.svg", alt: "GDPR compliance" },
              { src: "/legacy-modernization/05_fisma.svg", alt: "FISMA compliance" },
            ].map((b) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={b.src} src={b.src} alt={b.alt} className={styles.complianceImg} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. DOWNLOAD CTA 1 ────────────────────────────────────────────── */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaRow}>
            <div>
              <h2 className={styles.ctaTitle}>Get your modernization roadmap</h2>
              <p className={styles.ctaDesc}>Receive a phased, low-risk plan to upgrade your software without disrupting operations.</p>
            </div>
            <div>
              <a href="#contact" className={styles.ctaBtn}>Get in touch</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. VERTICAL TABS ─────────────────────────────────────────────── */}
      <section className={styles.vtSection} id="outcomes">
        <div className="container">
          <h2 className={styles.vtTitle}>
            Business <span className={styles.accent}>outcomes</span> after modernization
          </h2>
          <p className={styles.vtDesc}>
            From a financial standpoint, modernization matters when it improves predictability, reduces exposure, and makes spending easier to justify and control.
            The outcomes below describe what changes once systems stop driving unplanned costs and operational risk.
          </p>

          {/* Desktop */}
          <div className={styles.vtTabs}>
            <div className={styles.vtMenu}>
              {VT_TABS.map((tab, i) => (
                <button
                  key={i}
                  className={`${styles.vtMenuItem} ${activeTab === i ? styles.vtMenuActive : ""}`}
                  onClick={() => setActiveTab(i)}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={activeTab === i ? tab.iconActive : tab.icon}
                    alt=""
                    className={styles.vtTabIcon}
                  />
                  {tab.label}
                </button>
              ))}
            </div>
            <div className={styles.vtContent}>
              {VT_TABS.map((tab, i) => (
                <div
                  key={i}
                  className={`${styles.vtPanel} ${activeTab === i ? styles.vtPanelActive : ""}`}
                  aria-hidden={activeTab !== i}
                >
                  <h3 className={styles.vtPanelTitle}>{tab.title}</h3>
                  <p className={styles.vtPanelDesc}>{tab.content}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile accordion */}
          <div className={styles.vtMobile}>
            {VT_TABS.map((tab, i) => (
              <details key={i} open={i === 0} className={styles.vtDetails}>
                <summary className={styles.vtSummary}>{tab.label}</summary>
                <div className={styles.vtDetailContent}>{tab.content}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. CHALLENGES (Services Block, dark) ─────────────────────────── */}
      <section className={`${styles.sbSection} ${styles.sbDark}`} id="challenges">
        <div className="container">
          <h2 className={styles.sbTitleDark}>
            Your architecture blocks AI <span className={styles.accent}>innovation</span>
          </h2>
          <p className={styles.sbDescDark}>
            The system continues to operate, but its structure defines how far new initiatives can go. AI, analytics, and integrations require flexibility at the architectural level. In legacy environments, this flexibility is limited.
          </p>
          <div className={styles.sbGrid3}>
            {[
              {
                icon: "/legacy-modernization/03_Change-becomes-expensive-and-unpredictable-03.svg",
                title: "Costly changes",
                desc: "Small updates expand into multi-system efforts. Dependencies are not always visible, and changes affect areas beyond their original scope. Estimates lose consistency, and release cycles extend.",
              },
              {
                icon: "/legacy-modernization/03_Systems-run-the-business-but-logic-is-not-fully-visible-02.svg",
                title: "Systems run the business",
                desc: "Critical business rules are embedded in legacy code, undocumented flows, and long-standing assumptions. Understanding how the system behaves requires time, context, and specific expertise.",
              },
              {
                icon: "/legacy-modernization/03_Technical-debt-becomes-an-ongoing-workload-03.svg",
                title: "Technical debt",
                desc: "Maintenance, fixes, and support consume a growing share of engineering capacity. Effort shifts toward keeping the system stable instead of moving it forward.",
              },
              {
                icon: "/legacy-modernization/03_Data-exists-but-remains-fragmented-01.svg",
                title: "Fragmented data",
                desc: "Information is distributed across systems with inconsistent structure and ownership. Access depends on manual processes, and data cannot be used directly across workflows.",
              },
              {
                icon: "/legacy-modernization/03_Security-and-compliance-move-out-of-alignment-01.svg",
                title: "Security and compliance",
                desc: "Access models, libraries, and data handling approaches reflect earlier requirements. As standards evolve, maintaining alignment becomes increasingly complex.",
              },
              {
                icon: "/legacy-modernization/03_AI-initiatives-are-constrained-by-system-structure-01.svg",
                title: "AI initiatives constrained",
                desc: "Modern AI workflows require stable APIs, consistent data, and controlled integration points. Legacy systems were not designed for this interaction model, which limits how AI capabilities can be introduced.",
              },
            ].map((item) => (
              <div key={item.title} className={styles.sbItem3}>
                <div className={styles.sbItemWhite}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.icon} alt="" className={styles.sbIcon} />
                  <h3 className={styles.sbItemTitleDark}>{item.title}</h3>
                  <p className={styles.sbItemDescDark}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. DOWNLOAD CTA 2 ────────────────────────────────────────────── */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaRow}>
            <div>
              <h2 className={styles.ctaTitle}>Request a legacy audit</h2>
              <p className={styles.ctaDesc}>Identify hidden risks, security gaps, and performance bottlenecks in your current code.</p>
            </div>
            <div>
              <a href="#contact" className={styles.ctaBtn}>Book a meeting</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. SERVICES RESULTS ──────────────────────────────────────────── */}
      <section className={styles.srSection} id="software-we-modernize">
        <div className="container">
          <div className={styles.srRow}>
            <div className={styles.srTextCol}>
              <h2 className={styles.srTitle}>
                Legacy <span className={styles.accent}>software</span> we modernize
              </h2>
              <p className={styles.srText}>
                We modernize business-critical applications and platforms that support real operations, carry transactional load, and connect multiple parts of the organization — while preparing them for AI integration and data-driven workflows.
              </p>
              <ul className={styles.srList}>
                <li>Core transaction and processing systems</li>
                <li>Custom ERP, CRM, and internal operational platforms</li>
                <li>Backend services and business logic layers</li>
                <li>Complex integrations between internal and third-party systems</li>
                <li>Data platforms, reporting pipelines, and analytics foundations prepared for AI use</li>
                <li>AI integration layer, including APIs, data pipelines, and vector-ready data structures</li>
                <li>Legacy web, desktop, and hybrid applications that have evolved over time</li>
              </ul>
              <p className={styles.srText}>
                If a system supports core workflows, holds critical data, or connects multiple parts of the business, we modernize it with a structure that keeps operations stable and enables controlled, scalable evolution with AI capabilities embedded where they create measurable value.
              </p>
            </div>
            <div className={styles.srImgCol}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/legacy-modernization/03_pexels-fauxels-3184653-683x1024.jpg"
                alt="Development team discussing the project"
                className={styles.srImg}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 10. CASES BLOCK ──────────────────────────────────────────────── */}
      <section className={styles.casesSection} id="case-studies">
        <div className="container">
          <h2 className={styles.casesTitle}>
            Our recent <span className={styles.accent}>works</span>
          </h2>
          <div className={styles.casesSwiper}>
            <Swiper
              modules={[Navigation]}
              slidesPerView={1}
              spaceBetween={0}
              loop
              onSwiper={(sw) => { caseSwiperRef.current = sw; }}
              onBeforeInit={(sw) => {
                if (typeof sw.params.navigation === "object") {
                  sw.params.navigation.prevEl = casePrevRef.current;
                  sw.params.navigation.nextEl = caseNextRef.current;
                }
              }}
              navigation={{
                prevEl: casePrevRef.current,
                nextEl: caseNextRef.current,
              }}
            >
              {CASES.map((c, i) => (
                <SwiperSlide key={i}>
                  <a href={c.href} className={styles.caseCard} style={{ background: c.bg }}>
                    <div className={styles.caseWrapper}>
                      <div className={styles.caseContent}>
                        <span className={styles.caseTech}>{c.tech}</span>
                        <h3 className={styles.caseTitle}>{c.title}</h3>
                        <p className={styles.caseDesc}>{c.desc}</p>
                        <div className={styles.caseTags}>
                          {c.tags.map((t) => <span key={t} className={styles.caseTag}>{t}</span>)}
                        </div>
                      </div>
                      <div className={styles.caseImagesGrid}>
                        <div className={styles.caseImgRight}>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={c.imgRight} alt={c.title} loading="lazy" />
                        </div>
                        <div className={styles.caseImgLeft}>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={c.imgLeft} alt={c.title} loading="lazy" />
                        </div>
                      </div>
                    </div>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className={styles.casesNav}>
            <div className={styles.casesNavBtns}>
              <div
                ref={casePrevRef}
                className={`${styles.casesNavBtn} ${styles.casesNavBtnPrev}`}
                onClick={() => caseSwiperRef.current?.slidePrev()}
              />
              <div
                ref={caseNextRef}
                className={styles.casesNavBtn}
                onClick={() => caseSwiperRef.current?.slideNext()}
              />
            </div>
            <a href="#" className={styles.casesAllLink}>View all case studies</a>
          </div>
        </div>
      </section>

      {/* ── 11. REVIEW SLIDER ────────────────────────────────────────────── */}
      <section className={styles.reviewSection}>
        <div className="container">
          <div className={styles.reviewSwiper}>
            <Swiper
              modules={[Navigation]}
              slidesPerView={1}
              spaceBetween={0}
              loop
              onSwiper={(sw) => { revSwiperRef.current = sw; }}
              onBeforeInit={(sw) => {
                if (typeof sw.params.navigation === "object") {
                  sw.params.navigation.prevEl = revPrevRef.current;
                  sw.params.navigation.nextEl = revNextRef.current;
                }
              }}
              navigation={{
                prevEl: revPrevRef.current,
                nextEl: revNextRef.current,
              }}
            >
              {REVIEWS.map((r, i) => (
                <SwiperSlide key={i}>
                  <div className={styles.reviewSlide}>
                    <p className={styles.reviewText}>{r.text}</p>
                    <div>
                      <div className={styles.reviewAuthorData}>
                        {r.photo ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={r.photo} alt={r.name} className={styles.reviewPhoto} />
                        ) : r.logo ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={r.logo} alt={r.name} className={styles.reviewLogo} />
                        ) : null}
                        <div className={styles.reviewAuthorText}>
                          <div className={styles.reviewName}>{r.name}</div>
                          <div className={styles.reviewPosition}>{r.position}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className={styles.reviewNav}>
            <div className={styles.reviewNavBtns}>
              <div
                ref={revPrevRef}
                className={`${styles.reviewNavBtn} ${styles.reviewNavBtnPrev}`}
                onClick={() => revSwiperRef.current?.slidePrev()}
              />
              <div
                ref={revNextRef}
                className={styles.reviewNavBtn}
                onClick={() => revSwiperRef.current?.slideNext()}
              />
            </div>
            <a href="/testimonials" className={styles.reviewAllLink}>All Reviews</a>
          </div>
        </div>
      </section>

      {/* ── 12. SERVICES BLOCK — LANGUAGES (dark) ────────────────────────── */}
      <section className={`${styles.sbSection} ${styles.sbDark}`}>
        <div className="container">
          <h2 className={styles.sbTitleDark}>
            We speak <span className={styles.accent}>both</span> languages: legacy code and LLMs
          </h2>
          <p className={styles.sbDescDark}>
            As a dual-engine engineering firm, we modernize deterministic legacy systems while introducing governed AI capabilities as a native part of the platform. This allows your software to remain stable in production while becoming ready for modern AI-driven workflows.
          </p>
          <div className={styles.sbGrid2}>
            {[
              {
                icon: "/legacy-modernization/03_Data-ETL-and-vectorization-01.svg",
                title: "Data ETL and vectorization",
                desc: "We transform legacy data into a structured, usable asset for AI. We design ETL pipelines that extract, clean, and standardize data across fragmented systems, then structure it for modern retrieval and analysis. Historical data is no longer locked in isolated databases — it becomes accessible, searchable, and usable across applications and AI layers. This creates a consistent data foundation that supports reporting, automation, and AI-driven interaction without additional operational complexity.",
              },
              {
                icon: "/legacy-modernization/03_AI-accelerated-legacy-translation-01.svg",
                title: "AI-accelerated legacy translation",
                desc: "We modernize legacy systems with AI-assisted engineering workflows. We use controlled AI tooling to map undocumented business logic, translate legacy code into modern frameworks, and generate regression-safe updates. This allows modernization to progress faster while maintaining alignment with existing system behavior. The result is a codebase that is easier to maintain, extend, and integrate — while preserving the logic your business depends on.",
              },
              {
                icon: "/legacy-modernization/03_Incremental-modernization-with-architectural-continuity-01.svg",
                title: "Incremental modernization with architectural continuity",
                desc: "We modernize systems in controlled steps, without disrupting how the business operates. We avoid replacing entire systems at once. Instead, we extract and upgrade individual components, introduce modern interfaces, and evolve the architecture progressively. Each step integrates with the existing system while preparing it for future capabilities. This approach keeps operations stable while steadily improving system structure, flexibility, and performance.",
              },
              {
                icon: "/legacy-modernization/03_Security-and-access-control-as-part-of-the-architecture-01.svg",
                title: "Security and access control as part of the architecture",
                desc: "We embed modern security standards directly into the system design. We implement structured access control, secure API mediation, and modern authentication mechanisms such as OAuth 2.0. Data handling and system interaction follow clearly defined rules, ensuring that access, usage, and integrations remain consistent and controlled. This creates a system that aligns with current security expectations while remaining adaptable to future requirements.",
              },
            ].map((item) => (
              <div key={item.title} className={styles.sbItem2}>
                <div className={styles.sbItemWhite}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.icon} alt="" className={styles.sbIcon} />
                  <h3 className={styles.sbItemTitleDark}>{item.title}</h3>
                  <p className={styles.sbItemDescDark}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 13. DOWNLOAD CTA 3 ────────────────────────────────────────────── */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaRow}>
            <div>
              <h2 className={styles.ctaTitle}>Request a legacy modernization quote</h2>
              <p className={styles.ctaDesc}>Identify hidden opportunities, risks, and planning gaps in your current solution.</p>
            </div>
            <div>
              <a href="#contact" className={styles.ctaBtn}>Get in Touch</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 14. RISK MANAGEMENT (Services Block, light) ──────────────────── */}
      <section className={`${styles.sbSection} ${styles.sbLight}`} id="risk-management">
        <div className="container">
          <h2 className={styles.sbTitleLight}>
            <span className={styles.accent}>Risk</span> control &amp; engineering discipline
          </h2>
          <p className={styles.sbDescLight}>
            Modernization is executed as a controlled engineering process with clearly defined system behavior at every stage. Each change is introduced through structured release mechanics, validated against real workloads, and aligned with production constraints. The result is predictable system evolution with stable, observable system performance.
          </p>
          <div className={styles.sbGrid3}>
            {[
              {
                icon: "/legacy-modernization/11_Link.svg",
                title: "No-downtime execution as a standard approach",
                desc: "Changes are introduced through phased releases, parallel environments, and controlled traffic routing. Components are updated incrementally, allowing new and existing logic to operate side by side while behavior is continuously observed and validated.",
              },
              {
                icon: "/legacy-modernization/11_Link.svg",
                title: "Data integrity built into every step",
                desc: "Data handling follows a defined validation flow. Schemas, dependencies, and records are verified before and after each transformation. Migration steps are repeatable, traceable, and aligned with production data structures, ensuring consistency across systems.",
              },
              {
                icon: "/legacy-modernization/11_Link.svg",
                title: "Validation under real operating conditions",
                desc: "System changes are tested against realistic data volumes, integrations, and performance scenarios. Business logic, edge cases, and system behavior are evaluated before release, ensuring alignment with production conditions.",
              },
              {
                icon: "/legacy-modernization/11_Link.svg",
                title: "Controlled coexistence of system components",
                desc: "Legacy and modernized components operate within clearly defined boundaries. Interfaces are explicit, responsibilities are separated, and interactions are observable. This structure allows individual components to evolve independently while maintaining overall system coherence.",
              },
              {
                icon: "/legacy-modernization/11_Link.svg",
                title: "Governed AI integration layer",
                desc: "AI capabilities are introduced as controlled system components within the architecture. Model access is mediated through APIs and middleware, with defined input and output boundaries, rate control, and usage policies. Data used for AI processing follows structured pipelines, including transformation, validation, and access control.",
              },
              {
                icon: "/legacy-modernization/11_Link.svg",
                title: "Rollback and recovery as engineered capabilities",
                desc: "Each release includes predefined rollback paths and recovery procedures. These are validated before deployment and aligned with system dependencies, ensuring that system state remains consistent and controlled throughout the transition.",
              },
            ].map((item) => (
              <div key={item.title} className={styles.sbItem3}>
                <div>
                  <h3 className={styles.sbItemTitleLight}>{item.title}</h3>
                  <p className={styles.sbItemDescLight}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 16. COST OF LEGACY ───────────────────────────────────────────── */}
      <section className={styles.csSection} id="cost-of-legacy">
        <div className="container">
          <h2 className={styles.csTitle}>
            <span className={styles.accent}>Cost</span> of legacy systems in an AI-driven environment
          </h2>
          <p className={styles.csDesc}>
            AI depends on structured data, clear interfaces, and adaptable systems. In legacy environments, introducing AI requires additional preparation — aligning data, defining APIs, and coordinating dependencies across systems.
          </p>
          <p className={styles.csDesc}>
            At the same time, ongoing maintenance continues to absorb engineering capacity. Teams split effort between supporting existing systems and enabling new AI capabilities, which extends timelines and increases overall cost.
          </p>
          <p className={styles.csDesc}>
            Modernized systems operate differently. With clean architecture and accessible data, AI capabilities are introduced with predictable effort, and costs stabilize as systems become easier to evolve.
          </p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/legacy-modernization/02_Cumulative-Cost-Projection-5-Years.png"
            alt="Cumulative Cost Projection (5 Years)"
            className={styles.csImg}
          />
        </div>
      </section>

      {/* ── 17. APPROACH (industry-focused) ──────────────────────────────── */}
      <section className={styles.industrySection} id="approach">
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Strangler fig AI integration <span className={styles.accent}>approach</span>
            </h2>
            <p className={styles.sectionDesc}>
              We modernize legacy systems through controlled, incremental transformation. Instead of replacing entire platforms, we evolve them step by step — introducing modern architecture and AI capabilities where they deliver immediate value.
            </p>
          </div>
          <div className={styles.cardsRow}>
            {[
              {
                title: "Incremental modernization with operational continuity",
                body: "We isolate a single workflow or system boundary and redesign it as an independent service. This new component operates alongside the existing system, handling a defined scope without disrupting surrounding processes. Each step is self-contained, observable, and validated before moving further. The system evolves in place, while business operations continue as usual.",
              },
              {
                title: "Structured extraction of legacy functionality",
                body: "Legacy systems often contain tightly coupled logic that spans multiple components. We reorganize this logic into clearly defined services with explicit interfaces and responsibilities. This creates stable boundaries between components, predictable behavior under change, and clear ownership across teams. Over time, the system shifts from implicit dependencies to explicit architecture.",
              },
              {
                title: "AI integration at the right architectural layer",
                body: "AI capabilities are introduced only after the system can support them properly. We connect AI to modernized services, structured data pipelines, and API layers — never to fragile legacy components directly. This enables consistent interaction with operational data, reliable performance under load, and controlled integration with existing workflows. AI becomes a managed part of the system, not an external add-on.",
              },
              {
                title: "Controlled evolution toward a modern architecture",
                body: "As individual components are modernized, the role of the legacy system gradually narrows. New services take on more responsibility, while older parts are phased out naturally. This approach results in steady architectural improvement, reduced dependency on legacy constraints, and a system that becomes easier to extend, integrate, and scale over time.",
              },
            ].map((card) => (
              <div key={card.title} className={styles.cardCol}>
                <div className={styles.industryCard}>
                  <h3 className={styles.industryCardTitle}>{card.title}</h3>
                  <p className={styles.industryCardBody}>{card.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 18. PROCESS (The Way We Develop) ─────────────────────────────── */}
      <section className={styles.processSection} id="process">
        <div className="container">
          <h2 className={styles.processTitle}>
            Zero-downtime migration <span className={styles.accent}>pipeline</span>
          </h2>
          <p className={styles.processDesc}>
            Modernization progresses through a structured pipeline designed for continuous system operation, controlled change, and measurable advancement. Each phase builds on verified outputs, allowing modernization to move forward without disrupting business activity.
          </p>
          <div className={styles.processSteps}>
            {[
              {
                num: "1",
                title: "Phase 1: AI-assisted monolith mapping",
                desc: "We analyze your legacy system using a combination of expert review and AI-assisted code interpretation. Undocumented logic, hidden dependencies, and implicit workflows are translated into a structured system map. This creates a shared, accurate understanding of how the system operates today and defines clear boundaries for modernization work.",
              },
              {
                num: "2",
                title: "Phase 2: API abstraction layer",
                desc: "We introduce an API layer that separates your user interfaces and integrations from the legacy core. This layer stabilizes system interaction, standardizes data exchange, and creates a controlled environment where new components can be developed and deployed independently of the existing system.",
              },
              {
                num: "3",
                title: "Phase 3: Strangler fig extraction",
                desc: "High-impact workflows are incrementally extracted from the legacy system and implemented as independent services. Each extracted component operates alongside the existing system, with clearly defined interfaces and controlled traffic routing. Functionality is transferred step by step, maintaining continuity while the architecture evolves.",
              },
              {
                num: "4",
                title: "Phase 4: Vectorization and AI injection",
                desc: "Legacy data is structured, cleaned, and prepared for modern use through continuous data pipelines. We introduce vector-based data layers and connect AI capabilities directly to modernized components, enabling intelligent interaction with historical and operational data without affecting the stability of core systems.",
              },
              {
                num: "5",
                title: "Continuous validation and controlled progress",
                desc: "Each phase is executed with defined validation criteria, measurable outputs, and clear transition checkpoints. This ensures that modernization remains predictable, observable, and aligned with both technical and business objectives at every step.",
              },
            ].map((step) => (
              <div key={step.num} className={styles.processStep}>
                <div className={styles.processNum}>{step.num}</div>
                <div>
                  <h3 className={styles.processStepTitle}>{step.title}</h3>
                  <p className={styles.processStepDesc}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 19. ACHIEVEMENTS ─────────────────────────────────────────────── */}
      <section className={styles.achSection}>
        <div className="container">
          <h2 className={styles.achTitle}>
            <span className={styles.accent}>Awards</span> &amp; Recognitions
          </h2>
          <div className={styles.achSwiper}>
            <Swiper
              modules={[Navigation]}
              slidesPerView={4}
              spaceBetween={24}
              loop
              onSwiper={(sw) => { achSwiperRef.current = sw; }}
              onBeforeInit={(sw) => {
                if (typeof sw.params.navigation === "object") {
                  sw.params.navigation.prevEl = achPrevRef.current;
                  sw.params.navigation.nextEl = achNextRef.current;
                }
              }}
              navigation={{
                prevEl: achPrevRef.current,
                nextEl: achNextRef.current,
              }}
              breakpoints={{
                0: { slidesPerView: 2, spaceBetween: 16 },
                576: { slidesPerView: 3, spaceBetween: 20 },
                992: { slidesPerView: 4, spaceBetween: 24 },
                1200: { slidesPerView: 5, spaceBetween: 24 },
              }}
            >
              {ACHIEVEMENTS.map((a, i) => (
                <SwiperSlide key={i} className={styles.achSlide}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={a.src} alt={a.alt} className={styles.achImg} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className={styles.achNav}>
            <div
              ref={achPrevRef}
              className={`${styles.achNavBtn} ${styles.achNavBtnPrev}`}
              onClick={() => achSwiperRef.current?.slidePrev()}
            />
            <div
              ref={achNextRef}
              className={styles.achNavBtn}
              onClick={() => achSwiperRef.current?.slideNext()}
            />
          </div>
        </div>
      </section>

      {/* ── 20. FAQ ──────────────────────────────────────────────────────── */}
      <section className={styles.faqSection} id="faq">
        <div className="container">
          <h2 className={styles.faqTitle}>Frequently asked questions</h2>
          {visibleFaq.map((item, i) => (
            <details key={i} className={styles.faqItem} open={i === 0}>
              <summary className={styles.faqSummary}>{item.q}</summary>
              <p className={styles.faqAnswer}>{item.a}</p>
            </details>
          ))}
          {!showAllFaq && (
            <button className={styles.faqLoadMore} onClick={() => setShowAllFaq(true)}>
              Load more
            </button>
          )}
        </div>
      </section>

      {/* ── 21. BLOG SECTION ─────────────────────────────────────────────── */}
      <AwesomeStories category="ai" />

      {/* ── 22. CROSSLINKS ───────────────────────────────────────────────── */}
      <section className={styles.clSection}>
        <div className="container">
          <h2 className={styles.clTitle}>
            More about <span className={styles.accent}>Nexterse LLC</span>
          </h2>
          <div className={styles.clGrid}>
            <div className={styles.clCol}>
              <p className={styles.clColTitle}>Key services</p>
              <div className={styles.clList}>
                {[
                  { label: "Software product development", href: "/services/software-product-development" },
                  { label: "Predictive maintenance development", href: "/services/predictive-maintenance" },
                  { label: "AI development", href: "/services/ai-software-development" },
                  { label: "Enterprise software development", href: "/services/enterprise-software-development" },
                  { label: "AI integration into legacy software", href: "/services/ai-integration" },
                ].map((l) => (
                  <a key={l.label} href={l.href} className={styles.clLink}>{l.label}</a>
                ))}
              </div>
            </div>
            <div className={styles.clCol}>
              <p className={styles.clColTitle}>Processes</p>
              <div className={styles.clList}>
                {[
                  { label: "How we work", href: "/how-we-work" },
                  { label: "Engagement models", href: "/engagement-models" },
                  { label: "Pricing", href: "/pricing" },
                ].map((l) => (
                  <a key={l.label} href={l.href} className={styles.clLink}>{l.label}</a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
