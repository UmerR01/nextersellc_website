"use client";

import { useState } from "react";
import styles from "./CrmPage.module.css";
import CrmArticleLayout from "./CrmArticleLayout";
import AipocLogos from "@/components/aipoc/AipocLogos";
import CaseCards from "@/components/home/CaseCards";
import ServicesReviewSlider from "@/components/services/ServicesReviewSlider";
import ServicesAchievements, { type Badge } from "@/components/services/ServicesAchievements";
import ServicesFaqBlock, { type FaqItem } from "@/components/services/ServicesFaqBlock";
import ServicesBlogSection, { type FeaturedPost, type BlogPost } from "@/components/services/ServicesBlogSection";
import LetsStart from "@/components/home/LetsStart";

// ─── Data ─────────────────────────────────────────────────────────────────────

const VT_TABS = [
  {
    label: "Predictable pipeline and forecasting",
    title: "Predictable pipeline and forecasting",
    content:
      "We structure your CRM around a clearly defined sales process, so every deal, stage, and activity is captured consistently. Pipeline data becomes reliable, forecasts reflect reality, and managers can see where revenue is progressing or stalling. With clean stage logic and automated activity tracking, reporting stops depending on manual spreadsheets and starts driving confident decisions.",
  },
  {
    label: "Higher adoption and less manual work",
    title: "Higher adoption and less manual work",
    content:
      "We design the CRM around how your teams actually sell and support customers, removing duplicate data entry and unnecessary clicks. Automated logging, smart defaults, and workflow rules cut the busywork that drives reps away from the system. When the CRM saves time instead of adding overhead, adoption rises and your data stays complete.",
  },
  {
    label: "Reduced revenue leakage and operational risk",
    title: "Reduced revenue leakage and operational risk",
    content:
      "We build automated follow-ups, escalation rules, and SLA tracking so leads and renewals do not fall through the cracks. Deals that go quiet are surfaced, tasks are routed to the right owner, and hand-offs between sales, marketing, and support stay consistent. The result is fewer missed opportunities and a revenue process that behaves predictably at scale.",
  },
  {
    label: "Stronger security and compliance control",
    title: "Stronger security and compliance control",
    content:
      "We embed role-based access, field-level permissions, and audit logging directly into the CRM so customer data is protected and traceable. Consent, data retention, and access rules are enforced in the platform, keeping you aligned with GDPR, HIPAA, or SOC 2 requirements. AI-assisted features operate through governed data access layers, so sensitive customer information is never exposed beyond policy.",
  },
  {
    label: "Reliable customer data for revenue decisions",
    title: "Reliable customer data for revenue decisions",
    content:
      "We unify contacts, accounts, and interactions into a single source of truth, with deduplication and validation built in. Data becomes consistently accessible across sales, marketing, and support, and clean enough for analytics and AI. Teams work from the same trusted customer record across reporting, automation, and AI-driven insights.",
  },
  {
    label: "Capacity for growth with an AI-ready CRM",
    title: "Capacity for growth with an AI-ready CRM",
    content:
      "We build the CRM on a clean data model and open APIs, so new channels, products, and integrations can be added without rework. AI capabilities such as lead scoring, next-best-action, and conversation summaries plug into structured data as your needs grow. Scaling becomes a controlled expansion of capabilities rather than a costly re-implementation.",
  },
];



// ─── Shared-component data ────────────────────────────────────────────────────

const LEGACY_BADGES: Badge[] = [
  { src: "/badges_fix/06_techreviewer_badge_2026-10.svg", alt: "techreviewer.co 2026 — Top CRM Development Companies" },
  { src: "/badges_fix/12_5ca49c9f6cb37e33319e1162_Goodfirms.svg", alt: "GoodFirms badge" },
  { src: "/badges_fix/12_5ca49c9f8ff5ad26d13b6845_TDA.svg", alt: "TDA badge" },
  { src: "/badges_fix/12_5ca49c9f6cb37e49a79e1163_changed.svg", alt: "AWS partner badge" },
  { src: "/badges_fix/01_top_clutch.co_software_developers_startup_massachusetts.svg", alt: "Clutch — Top startup software developers Massachusetts" },
  { src: "/badges_fix/01_top_clutch.co_software_developers_hospitality__leisure_massachusetts.svg", alt: "Clutch — Top hospitality software developers Massachusetts" },
  { src: "/badges_fix/01_top_clutch.co_python__django_developers_boston_2024.svg", alt: "Clutch — Top Python Django developers Boston 2024" },
  { src: "/badges_fix/01_top_clutch.co_nodejs_developers_boston_2024.svg", alt: "Clutch — Top Node.js developers Boston 2024" },
  { src: "/badges_fix/01_techreviewer_badge_2025-2.svg", alt: "TR top software developers 2025" },
  { src: "/badges_fix/01_techreviewer_badge_2025-1.svg", alt: "TR top web developers 2025" },
  { src: "/badges_fix/01_techreviewer_badge_2024-2.svg", alt: "TR top software developers 2024" },
  { src: "/badges_fix/01_techreviewer_badge_2024-1.svg", alt: "TR top web developers 2024" },
];

const LEGACY_FAQ: FaqItem[] = [
  {
    question: "Should we build a custom CRM or configure an off-the-shelf platform like Salesforce or HubSpot?",
    answer: "It depends on how unique your sales, service, and data processes are. Off-the-shelf CRMs are fast to start and cost-effective for standard workflows. A custom CRM makes sense when you have non-standard pipeline logic, deep integrations, high per-seat licensing costs at scale, or data ownership and compliance requirements. We assess your processes, total cost of ownership, and roadmap, then recommend build, configure, or a hybrid approach.",
  },
  {
    question: "How do you migrate data from our old CRM or spreadsheets without losing history?",
    answer: "We map your source fields to the new data model, deduplicate and validate records, and run the migration in staged, repeatable batches. Contacts, accounts, deals, activity history, and attachments are transferred with referential integrity preserved. We reconcile record counts before and after each batch and run a parallel period so nothing is lost before you switch over.",
  },
  {
    question: "Our reps don't use the current CRM. How do you improve adoption?",
    answer: "Low adoption usually comes from friction, not resistance. We design the CRM around how your team actually sells — removing duplicate data entry, automating activity logging, adding smart defaults, and surfacing only the fields that matter at each stage. We involve reps early, keep the interface fast, and integrate email, calendar, and telephony so the CRM saves time instead of adding overhead.",
  },
  {
    question: "Can you integrate the CRM with our email, ERP, marketing, and support tools?",
    answer: "Yes. We build integrations with email and calendar (Microsoft 365, Google Workspace), marketing automation, ERP and billing systems, support desks, telephony, and payment providers. We use native APIs, webhooks, and an integration layer with retry and logging, so customer data stays synchronized across systems without manual re-entry.",
  },
  {
    question: "How do you add AI features like lead scoring or copilots to a CRM safely?",
    answer: "We connect AI to a clean, governed data layer rather than directly to raw records. Lead scoring, next-best-action, deal-risk flags, and conversation summaries run through structured pipelines with role-based access and audit logging. Sensitive customer data is masked where needed, and AI outputs are presented as assistive suggestions that a person can review before acting.",
  },
  {
    question: "How do you keep customer data (PII) secure and compliant in the CRM?",
    answer: "We implement role-based and field-level access control, encryption at rest and in transit, consent and data-retention rules, and full audit logging. Access follows least-privilege principles, and data handling is designed to align with GDPR, HIPAA, or SOC 2 depending on your industry. Compliance logic lives inside the platform rather than in manual processes.",
  },
  {
    question: "How long does it take to implement a custom CRM?",
    answer: "A focused CRM with core pipeline, contact management, and a few integrations can reach a usable first release in a few months, with capabilities added incrementally after that. Timelines depend on the number of workflows, integrations, data volume for migration, and reporting needs. We scope in phases so your team gets value from an early release instead of waiting for a single large launch.",
  },
  {
    question: "Can we roll out the new CRM without disrupting live sales operations?",
    answer: "Yes. We roll out incrementally — module by module or team by team — while the existing system keeps running. Data is synchronized during the transition, users move over in controlled groups, and each stage is validated against real workflows before expanding. This keeps pipeline continuity intact and avoids a risky all-at-once cutover.",
  },
  {
    question: "How do you make CRM reports and forecasts trustworthy?",
    answer: "Reliable reporting starts with a clean data model, consistent pipeline stages, deduplicated records, and automated activity capture. We enforce validation rules so data stays complete, then build dashboards and forecasts on that foundation. When the underlying data is governed, forecasts reflect reality and leaders can plan against them with confidence.",
  },
];

const LEGACY_BLOG_FEATURED: FeaturedPost = {
  href: "/blog/custom-crm-vs-off-the-shelf",
  title: "Custom CRM vs. Off-the-Shelf: A 2026 Decision Framework for Cost, Adoption, and AI-Readiness",
  image: "/crm-development/06_The-AI-Cost-Spiral-7-Hidden-Drivers-1024x578.jpg",
  imageAlt: "Custom CRM vs. Off-the-Shelf decision framework",
  readTime: "32 mins",
  date: "July 1, 2026",
};

const LEGACY_BLOG_SIDE: BlogPost[] = [
  {
    href: "/blog/crm-data-migration-checklist",
    title: "The CRM Data Migration Checklist: Move Off Your Old CRM Without Losing History",
    readTime: "26 mins",
    date: "June 24, 2026",
  },
  {
    href: "/blog/crm-adoption-playbook",
    title: "The CRM Adoption Playbook: How to Get Your Sales Team to Actually Use the CRM",
    readTime: "18 mins",
    date: "June 22, 2026",
  },
];

// ─── Main Component ──────────────────────────────────────────────────────────
export default function CrmPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroBgWrapper} aria-hidden="true">
          <div className={styles.heroBgDesktop}>
            <svg preserveAspectRatio="xMidYMid slice" className={styles.heroBgSvg} width="1920" height="703" viewBox="0 0 1920 703" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="1920" height="703" fill="url(#crm_d_paint0)" />
              <g clipPath="url(#crm_d_clip0)">
                <rect width="1920" height="703" fill="url(#crm_d_paint0)" />
                <g opacity="0.08">
                  <path fillRule="evenodd" clipRule="evenodd" d="M-845.628 744.916L-688.82 -101.049L-883.335 -131.999L-1166 744.916L-845.628 744.916ZM-78.6641 352.883L-10.577 744.917L289.163 744.916L150.925 377.643L-78.6641 352.883ZM-588.25 744.917L-466.518 -82.4796L412.996 28.9404L825.646 744.916L544.475 744.916L309.265 237.337L-305.016 183.69L-267.877 744.916L-588.25 744.917Z" fill="#3CC4E5" />
                </g>
                <g opacity="0.08">
                  <path fillRule="evenodd" clipRule="evenodd" d="M874.988 -647.181L1388.56 -730.869L1655.22 -246.923L1928.98 -316.113L1484.69 -947.631L656.166 -844.49L599.943 19.784L892.548 -54.1681L874.988 -647.181ZM1254.33 -550.397L1420.26 -187.351L1127.66 -113.399L1098.77 -529.125L1254.33 -550.397ZM1687.01 -978.365L1877.46 -996.427L2419.14 -439.644L2162.34 -374.741L1687.01 -978.365Z" fill="#3CC4E5" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M892.663 -53.7166L1231.16 682.73L1060.64 755.898L600.059 20.2355L892.663 -53.7166ZM1683.65 127.297L1655.34 -246.473L1929.1 -315.663L1887.62 51.6869L1683.65 127.297ZM1127.73 -113.128L1429.9 614.455L2207.46 309.673L2419.08 -439.5L2162.28 -374.597L2064.62 143.284L1515.96 334.075L1420.34 -187.08L1127.73 -113.128Z" fill="#3CC4E5" />
                </g>
                <g filter="url(#crm_d_f0)">
                  <ellipse cx="960" cy="401.5" rx="590" ry="289.5" fill="url(#crm_d_paint1)" />
                </g>
                <g opacity="0.32" filter="url(#crm_d_f1)">
                  <circle cx="2010" cy="205" r="460" fill="#3CC4E5" />
                </g>
                <g opacity="0.32" filter="url(#crm_d_f2)">
                  <circle cx="19" cy="691" r="460" fill="#3CC4E5" />
                </g>
              </g>
              <defs>
                <filter id="crm_d_f0" x="70" y="-188" width="1780" height="1179" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="135" result="effect1_foregroundBlur" />
                </filter>
                <filter id="crm_d_f1" x="1050" y="-755" width="1920" height="1920" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="136" result="effect1_foregroundBlur" />
                </filter>
                <filter id="crm_d_f2" x="-941" y="-269" width="1920" height="1920" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="136" result="effect1_foregroundBlur" />
                </filter>
                <linearGradient id="crm_d_paint0" x1="1920" y1="-21.3031" x2="114.684" y2="922.394" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#02102C" />
                  <stop offset="1" stopColor="#112244" />
                </linearGradient>
                <linearGradient id="crm_d_paint1" x1="1550" y1="94.4545" x2="323.866" y2="572.726" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#02102C" />
                  <stop offset="1" stopColor="#112244" />
                </linearGradient>
                <clipPath id="crm_d_clip0">
                  <rect width="1920" height="703" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className={styles.heroBgMobile}>
            <svg preserveAspectRatio="xMidYMid slice" className={styles.heroBgSvg} width="375" height="559" viewBox="0 0 375 559" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#crm_m_clip0)">
                <rect width="375" height="559" fill="url(#crm_m_paint0)" />
                <g opacity="0.48" filter="url(#crm_m_f0)">
                  <circle cx="254" cy="592" r="200" fill="#3CC4E5" />
                </g>
                <g opacity="0.48" filter="url(#crm_m_f1)">
                  <circle cx="450" cy="464" r="200" fill="#3CC4E5" />
                </g>
                <g opacity="0.04">
                  <path fillRule="evenodd" clipRule="evenodd" d="M494.863 277.841L245.42 299.352L178.085 556.545L42.2216 556.545L175.021 209.568L573.679 160L701.803 556.545L556.587 556.545L494.863 277.841ZM329.311 367.713L294.708 556.633L439.924 556.633L404.386 359.296L329.311 367.713ZM77.0156 219.084L-13.9575 233.113L-201 556.708L-73.5534 556.708L77.0156 219.084Z" fill="url(#crm_m_paint1)" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M556.585 556.774L485.509 940.226L573.677 954.254L701.801 556.774L556.585 556.774ZM208.943 734.474L178.082 556.777L42.2183 556.777L104.877 723.251L208.943 734.474ZM439.928 556.779L384.75 931.813L-13.9071 881.31L-200.949 556.779L-73.5029 556.779L33.1111 786.85L311.546 811.166L294.712 556.779L439.928 556.779Z" fill="url(#crm_m_paint2)" />
                </g>
              </g>
              <defs>
                <filter id="crm_m_f0" x="-146" y="192" width="800" height="800" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur" />
                </filter>
                <filter id="crm_m_f1" x="50" y="64" width="800" height="800" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur" />
                </filter>
                <linearGradient id="crm_m_paint0" x1="375" y1="-16.9394" x2="-66.6674" y2="39.7691" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#02102C" />
                  <stop offset="1" stopColor="#112244" />
                </linearGradient>
                <linearGradient id="crm_m_paint1" x1="336.884" y1="360.195" x2="339.506" y2="120.051" gradientUnits="userSpaceOnUse">
                  <stop offset="0.325638" stopColor="white" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="crm_m_paint2" x1="372.84" y1="1019.42" x2="376.294" y2="567.487" gradientUnits="userSpaceOnUse">
                  <stop offset="0.0301665" stopColor="white" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
                <clipPath id="crm_m_clip0">
                  <rect width="375" height="559" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <div className="container">
          <div className={styles.heroInner}>
            <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
              <a href="/">Home</a>
              <span className={styles.breadcrumbSep}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path stroke="rgba(255,255,255,0.5)" strokeLinecap="square" d="m6 4 4 4-4 4" />
                </svg>
              </span>
              <a href="/services">Services</a>
              <span className={styles.breadcrumbSep}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path stroke="rgba(255,255,255,0.5)" strokeLinecap="square" d="m6 4 4 4-4 4" />
                </svg>
              </span>
              <span>CRM development</span>
            </nav>
            <h1 className={styles.heroTitle}>
              <span className={styles.accent}>CRM development.</span>
              {" "}Build a CRM your team actually uses
            </h1>
            <p className={styles.heroDesc}>
              We design and build custom CRM platforms around how your sales, marketing, and support teams really work — unifying customer data, automating manual workflows, and giving leaders a reliable view of the pipeline.
              Our engineers model your sales process, integrate your existing tools, and prepare your CRM for AI copilots, lead scoring, and intelligent automation.
            </p>
            <a href="#get-modal-popup" className={`btn btn-accent ${styles.heroBtn}`}>Get in touch</a>
          </div>
        </div>
      </section>

      <CrmArticleLayout>

      <AipocLogos />

      {/* ── 3. SERVICES CARDS ────────────────────────────────────────────── */}
      <section className={`${styles.industrySection} ${styles.servicesSection}`} id="services">
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              CRM development <span className={styles.accent}>services</span>
            </h2>
            <p className={styles.sectionDesc}>
              CRM development is not a single activity. It is a sequence of structured decisions about your sales process, data model, integrations, and rollout.
              We deliver CRM as a set of clearly defined services, so you can engage exactly where your revenue operations need progress — with full visibility into scope, effort, and outcomes.
            </p>
          </div>
          <div className={styles.cardsRow}>
            {[
              {
                title: "CRM consulting & requirements discovery",
                body: "We establish a precise understanding of how your teams sell, market, and support customers today. We map your pipeline stages, data sources, integrations, and reporting needs, and identify where manual work, data gaps, and low adoption hurt revenue. Requirements are captured in a shared, prioritized view.",
                result: "A clear process map, a target CRM data model, and a phased plan with explicit trade-offs — allowing decisions to be made with confidence and alignment across sales, marketing, and support.",
              },
              {
                title: "Custom CRM development",
                body: "We build CRM platforms tailored to your pipeline, roles, and workflows — contact and account management, deal stages, quoting, activity tracking, automation rules, and dashboards. The interface is designed for speed and adoption, so reps capture data as a byproduct of their work rather than extra overhead.",
                result: "A CRM your team actually uses, with clean pipeline data, automated follow-ups, and reporting that reflects reality.",
              },
              {
                title: "CRM integration & data migration",
                body: "We connect the CRM to email, calendar, ERP, marketing automation, support desks, telephony, and billing, and migrate your existing records without losing history. Data is deduplicated, validated, and synchronized across systems through a resilient integration layer with logging and retries.",
                result: "A single source of truth for customer data, synchronized systems, and a clean migration with pipeline continuity preserved.",
              },
              {
                title: "AI-accelerated CRM",
                body: "We add AI where it creates measurable value — lead and deal scoring, next-best-action, churn and deal-risk flags, conversation summaries, and automated data entry. AI connects to a governed data layer with role-based access, and outputs are presented as assistive suggestions your team can review before acting.",
                result: "Reps focus on high-intent accounts, less time is lost to manual entry, and AI insights operate on clean, governed customer data.",
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

      {/* ── 5. DOWNLOAD CTA 1 ────────────────────────────────────────────── */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaRow}>
            <div>
              <h2 className={styles.ctaTitle}>Get your CRM roadmap</h2>
              <p className={styles.ctaDesc}>Receive a phased, low-risk plan to build or replace your CRM without disrupting sales operations.</p>
            </div>
            <div>
              <a href="#get-modal-popup" className={`btn btn-accent ${styles.ctaHeaderBtn}`}>Get in touch</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. VERTICAL TABS ─────────────────────────────────────────────── */}
      <section className={styles.vtSection} id="outcomes">
        <div className="container">
          <h2 className={styles.vtTitle}>
            Business <span className={styles.accent}>outcomes</span> after CRM development
          </h2>
          <p className={styles.vtDesc}>
            A CRM matters when it improves pipeline predictability, drives adoption, and makes revenue easier to forecast and control.
            The outcomes below describe what changes once your CRM stops creating manual work and starts driving reliable decisions.
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
      <section className={`${styles.sbSection} ${styles.sbDark} ${styles.architectureChallenges}`} id="challenges">
        <div className="container">
          <h2 className={styles.sbTitleDark}>
            Your CRM blocks revenue <span className={styles.accent}>growth</span>
          </h2>
          <p className={styles.sbDescDark}>
            The CRM keeps running, but how it is structured defines how far your revenue operations can go. Automation, analytics, and AI require clean data and flexible workflows. In a poorly-fit or off-the-shelf CRM stretched beyond its design, that flexibility is limited.
          </p>
          <div className={styles.sbGrid3}>
            {[
              {
                icon: "/crm-development/03_Change-becomes-expensive-and-unpredictable-03.svg",
                title: "Low user adoption",
                desc: "Reps avoid a CRM that adds clicks and duplicate data entry. When the system is not used consistently, the pipeline is incomplete, forecasts drift, and managers lose trust in the numbers.",
              },
              {
                icon: "/crm-development/03_Systems-run-the-business-but-logic-is-not-fully-visible-02.svg",
                title: "Manual data entry",
                desc: "Emails, calls, and meetings are logged by hand — or not at all. Time that should go to selling is lost to admin work, and the activity data that drives insight stays incomplete.",
              },
              {
                icon: "/crm-development/03_Technical-debt-becomes-an-ongoing-workload-03.svg",
                title: "Rigid workflows",
                desc: "The CRM was configured for how you worked years ago. Changing a stage, field, or automation turns into a project, so processes bend around the tool instead of the tool serving the process.",
              },
              {
                icon: "/crm-development/03_Data-exists-but-remains-fragmented-01.svg",
                title: "Fragmented customer data",
                desc: "Contacts and history are spread across the CRM, spreadsheets, inboxes, and marketing tools with duplicates and inconsistent ownership. No one sees the full customer picture in one place.",
              },
              {
                icon: "/crm-development/03_Security-and-compliance-move-out-of-alignment-01.svg",
                title: "Security and compliance",
                desc: "Access rules, data retention, and consent handling reflect earlier requirements. As privacy standards evolve, keeping customer PII protected and auditable becomes increasingly complex.",
              },
              {
                icon: "/crm-development/03_AI-initiatives-are-constrained-by-system-structure-01.svg",
                title: "AI initiatives constrained",
                desc: "Lead scoring, copilots, and next-best-action need stable APIs, consistent data, and governed access. A CRM with messy data and no integration layer cannot support these capabilities reliably.",
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
              <h2 className={styles.ctaTitle}>Request a CRM audit</h2>
              <p className={styles.ctaDesc}>Identify adoption gaps, data quality issues, and automation opportunities in your current CRM.</p>
            </div>
            <div>
              <a href="#get-modal-popup" className={`btn btn-accent ${styles.ctaHeaderBtn}`}>Book a meeting</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. SERVICES RESULTS ──────────────────────────────────────────── */}
      <section className={styles.srSection} id="software-we-modernize">
        <div className="container">
          <h2 className={styles.srTitle}>
            CRM <span className={styles.accent}>platforms</span> we build
          </h2>
          <div className={styles.srRow}>
            <div className={styles.srTextCol}>
              <p className={styles.srText}>
                We build and customize CRM platforms that support real revenue operations, carry your customer data, and connect sales, marketing, and support — while preparing them for AI integration and data-driven workflows.
              </p>
              <ul className={styles.srList}>
                <li>Custom sales CRM with pipeline, deals, and quoting</li>
                <li>B2B and B2C contact and account management platforms</li>
                <li>Marketing automation and lead-nurturing workflows</li>
                <li>Customer service and support-desk CRM modules</li>
                <li>Integrations with email, ERP, billing, telephony, and marketing tools</li>
                <li>Customer data platforms, reporting pipelines, and analytics prepared for AI use</li>
                <li>AI integration layer, including APIs, data pipelines, and lead-scoring models</li>
              </ul>
              <p className={styles.srText}>
                If a system holds your customer relationships, drives your pipeline, or connects multiple revenue teams, we build it with a structure that keeps operations stable and enables controlled, scalable growth — with AI capabilities embedded where they create measurable value.
              </p>
            </div>
            <div className={styles.srImgCol}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/crm-development/03_pexels-fauxels-3184653-683x1024.jpg"
                alt="Development team discussing the project"
                className={styles.srImg}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 10. CASES BLOCK ──────────────────────────────────────────────── */}
      <CaseCards
        heading={<>Custom CRM software <span>we developed</span></>}
        windowed
      />

      {/* ── 11. REVIEW SLIDER ────────────────────────────────────────────── */}
      <ServicesReviewSlider primary="software" count={6} secondaryCount={1} />

      {/* ── 12. SERVICES BLOCK — LANGUAGES (dark) ────────────────────────── */}
      <section className={`${styles.sbSection} ${styles.sbDark} ${styles.languagesSection}`}>
        <div className="container">
          <h2 className={styles.sbTitleDark}>
            We speak <span className={styles.accent}>both</span> languages: CRM systems and LLMs
          </h2>
          <p className={styles.sbDescDark}>
            As a dual-engine engineering firm, we build reliable, structured CRM platforms while introducing governed AI capabilities as a native part of the system. This allows your CRM to remain stable in daily use while becoming ready for modern AI-driven revenue workflows.
          </p>
          <div className={styles.sbGrid2}>
            {[
              {
                icon: "/crm-development/03_Data-ETL-and-vectorization-01.svg",
                title: "Customer data unification and enrichment",
                desc: "We turn scattered customer data into a structured, usable asset. We design ETL pipelines that extract, clean, deduplicate, and standardize records across your CRM, spreadsheets, marketing tools, and support systems, then enrich and structure them for retrieval and analysis. Customer history is no longer locked in isolated silos — it becomes a single, searchable source of truth usable across applications and AI layers, supporting reporting, automation, and AI-driven interaction without extra operational complexity.",
              },
              {
                icon: "/crm-development/03_AI-accelerated-legacy-translation-01.svg",
                title: "AI-accelerated CRM workflows",
                desc: "We add AI to the CRM with controlled engineering workflows. We use governed AI tooling for lead and deal scoring, next-best-action, deal-risk detection, conversation summaries, and automated data capture from emails and calls. Outputs are presented as assistive suggestions your team can review, so the CRM works faster while decisions stay with people. The result is less manual work, sharper prioritization, and insights grounded in your real customer data.",
              },
              {
                icon: "/crm-development/03_Incremental-modernization-with-architectural-continuity-01.svg",
                title: "Incremental CRM rollout with operational continuity",
                desc: "We deliver CRM in controlled steps, without disrupting how your teams sell and support customers. We avoid a risky all-at-once launch. Instead, we roll out modules and teams progressively, introduce modern interfaces, and evolve the platform in stages. Each step integrates with your existing tools while preparing for future capabilities. This keeps pipeline operations stable while steadily improving CRM structure, adoption, and performance.",
              },
              {
                icon: "/crm-development/03_Security-and-access-control-as-part-of-the-architecture-01.svg",
                title: "Security and access control as part of the CRM",
                desc: "We embed modern security standards directly into the CRM design. We implement role-based and field-level access control, secure API mediation, and modern authentication mechanisms such as OAuth 2.0. Customer data handling and system interaction follow clearly defined rules, ensuring that access, usage, and integrations remain consistent and auditable. This creates a CRM that aligns with current privacy and compliance expectations while remaining adaptable to future requirements.",
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
              <h2 className={styles.ctaTitle}>Request a CRM development quote</h2>
              <p className={styles.ctaDesc}>Identify hidden opportunities, risks, and planning gaps in your current CRM solution.</p>
            </div>
            <div>
              <a href="#get-modal-popup" className={`btn btn-accent ${styles.ctaHeaderBtn}`}>Get in touch</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 14. RISK MANAGEMENT (Services Block, light) ──────────────────── */}
      <section className={`${styles.sbSection} ${styles.sbLight} ${styles.riskSection}`} id="risk-management">
        <div className="container">
          <h2 className={styles.sbTitleLight}>
            <span className={styles.accent}>Risk</span> control &amp; engineering discipline
          </h2>
          <p className={styles.sbDescLight}>
            CRM development is executed as a controlled engineering process with clearly defined system behavior at every stage. Each change is introduced through structured release mechanics, validated against real workloads, and aligned with production constraints. The result is a predictable rollout with stable, observable CRM performance.
          </p>
          <div className={styles.sbGrid3}>
            {[
              {
                icon: "/crm-development/11_Link.svg",
                title: "No-downtime execution as a standard approach",
                desc: "Changes are introduced through phased releases, parallel environments, and controlled traffic routing. Components are updated incrementally, allowing new and existing logic to operate side by side while behavior is continuously observed and validated.",
              },
              {
                icon: "/crm-development/11_Link.svg",
                title: "Data integrity built into every step",
                desc: "Data handling follows a defined validation flow. Schemas, dependencies, and records are verified before and after each transformation. Migration steps are repeatable, traceable, and aligned with production data structures, ensuring consistency across systems.",
              },
              {
                icon: "/crm-development/11_Link.svg",
                title: "Validation under real operating conditions",
                desc: "System changes are tested against realistic data volumes, integrations, and performance scenarios. Business logic, edge cases, and system behavior are evaluated before release, ensuring alignment with production conditions.",
              },
              {
                icon: "/crm-development/11_Link.svg",
                title: "Controlled coexistence of system components",
                desc: "Existing and newly built CRM modules operate within clearly defined boundaries. Interfaces are explicit, responsibilities are separated, and interactions are observable. This structure allows individual modules to evolve independently while maintaining overall CRM coherence.",
              },
              {
                icon: "/crm-development/11_Link.svg",
                title: "Governed AI integration layer",
                desc: "AI capabilities are introduced as controlled system components within the architecture. Model access is mediated through APIs and middleware, with defined input and output boundaries, rate control, and usage policies. Data used for AI processing follows structured pipelines, including transformation, validation, and access control.",
              },
              {
                icon: "/crm-development/11_Link.svg",
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
            <span className={styles.accent}>Cost</span> of the wrong CRM in an AI-driven environment
          </h2>
          <p className={styles.csDesc}>
            AI depends on structured data, clear interfaces, and adaptable systems. In a poorly-fit CRM, adding lead scoring, copilots, or automation requires additional preparation — cleaning data, aligning fields, defining APIs, and untangling integrations across tools.
          </p>
          <p className={styles.csDesc}>
            At the same time, low adoption and manual data entry keep absorbing your team's capacity. Reps split effort between selling and feeding a system that gives little back, which extends cycles and quietly increases the total cost of ownership through licensing, workarounds, and lost deals.
          </p>
          <p className={styles.csDesc}>
            A well-built CRM operates differently. With a clean data model and accessible customer data, automation and AI capabilities are introduced with predictable effort, and costs stabilize as the platform becomes easier to evolve.
          </p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/crm-development/02_Cumulative-Cost-Projection-5-Years.png"
            alt="Cumulative Cost Projection (5 Years)"
            className={styles.csImg}
          />
        </div>
      </section>

      {/* ── 17. APPROACH (industry-focused) ──────────────────────────────── */}
      <section className={`${styles.industrySection} ${styles.approachSection}`} id="approach">
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Phased CRM rollout <span className={styles.accent}>approach</span>
            </h2>
            <p className={styles.sectionDesc}>
              We deliver CRM through controlled, incremental rollout. Instead of forcing your teams onto an entire new platform overnight, we roll it out step by step — introducing modules, integrations, and AI capabilities where they deliver immediate value.
            </p>
          </div>
          <div className={styles.cardsRow}>
            {[
              {
                title: "Incremental rollout with operational continuity",
                body: "We start with a single workflow or team and deliver it as a working slice of the CRM. This new capability operates alongside your current tools, handling a defined scope without disrupting surrounding processes. Each step is self-contained, observable, and validated with real users before moving further. The CRM grows in place, while your pipeline keeps running.",
              },
              {
                title: "Structured modeling of your sales process",
                body: "Sales, marketing, and support processes are often implicit and spread across tools. We model this logic into clearly defined CRM stages, roles, and automation rules with explicit ownership.",
                lead: "This creates:",
                bullets: [
                  "Consistent pipeline stages and definitions",
                  "Predictable behavior as processes change",
                  "Clear data ownership across teams",
                ],
                outro: "Over time, the business shifts from scattered spreadsheets to a single, governed customer record.",
              },
              {
                title: "AI integration at the right data layer",
                body: "AI capabilities are introduced only after the CRM has clean, governed data to support them. We connect lead scoring, copilots, and automation to structured data pipelines and API layers — never to messy, ungoverned records directly. This enables consistent interaction with customer data, reliable performance, and controlled integration with existing workflows. AI becomes a managed part of the CRM, not an external add-on.",
              },
              {
                title: "Controlled evolution toward a unified CRM",
                body: "As individual modules go live, reliance on spreadsheets and disconnected tools gradually narrows. The CRM takes on more responsibility, while ad-hoc workarounds are phased out naturally. This approach results in steady improvement, higher adoption, and a platform that becomes easier to extend, integrate, and scale over time.",
              },
            ].map((card) => (
              <div key={card.title} className={styles.cardCol}>
                <div className={styles.industryCard}>
                  <h3 className={styles.industryCardTitle}>{card.title}</h3>
                  <p className={styles.industryCardBody}>{card.body}</p>
                  {"lead" in card && card.lead && <p className={styles.approachLead}>{card.lead}</p>}
                  {"bullets" in card && card.bullets && (
                    <ul className={styles.approachList}>
                      {card.bullets.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  )}
                  {"outro" in card && card.outro && <p className={styles.industryCardBody}>{card.outro}</p>}
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
            Zero-disruption CRM migration <span className={styles.accent}>pipeline</span>
          </h2>
          <p className={styles.processDesc}>
            CRM delivery progresses through a structured pipeline designed for continuous sales operation, controlled change, and measurable advancement. Each phase builds on verified outputs, allowing the rollout to move forward without disrupting revenue activity.
          </p>
          <div className={styles.processSteps}>
            {[
              {
                num: "1",
                title: "Phase 1: Discovery and pipeline mapping",
                desc: "We analyze how your teams sell, market, and support customers using a combination of stakeholder interviews and review of your current tools and data. Pipeline stages, workflows, integrations, and reporting needs are translated into a structured process map. This creates a shared, accurate understanding of how revenue operations work today and defines clear boundaries for the CRM.",
              },
              {
                num: "2",
                title: "Phase 2: Data model and API layer",
                desc: "We design a clean CRM data model — contacts, accounts, deals, and activities — and introduce an API layer that connects your interfaces and integrations to it. This standardizes data exchange and creates a controlled environment where new modules can be built and deployed independently, ready for automation and AI.",
              },
              {
                num: "3",
                title: "Phase 3: Incremental module rollout",
                desc: "High-impact workflows are rolled out module by module, or team by team, as working slices of the CRM. Each capability operates alongside your existing tools, with clearly defined interfaces and controlled user onboarding. Functionality is transferred step by step, maintaining pipeline continuity while adoption grows.",
              },
              {
                num: "4",
                title: "Phase 4: Data migration and AI enablement",
                desc: "Existing customer records are cleaned, deduplicated, and migrated through validated, repeatable batches with history preserved. We then connect AI capabilities — lead scoring, summaries, next-best-action — to the governed data layer, enabling intelligent interaction with customer data without affecting the stability of core operations.",
              },
              {
                num: "5",
                title: "Continuous validation and controlled progress",
                desc: "Each phase is executed with defined validation criteria, adoption metrics, and clear transition checkpoints. This ensures the CRM rollout remains predictable, observable, and aligned with both technical and revenue objectives at every step.",
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
      <ServicesAchievements badges={LEGACY_BADGES} />

      {/* ── 20. FAQ ──────────────────────────────────────────────────────── */}
      <ServicesFaqBlock items={LEGACY_FAQ} />

      {/* ── 21. BLOG SECTION ─────────────────────────────────────────────── */}
      <ServicesBlogSection featured={LEGACY_BLOG_FEATURED} sidePosts={LEGACY_BLOG_SIDE} />

      {/* ── 21b. LET'S START ─────────────────────────────────────────────── */}
      <LetsStart />

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
                  { label: "Custom software development", href: "/services/custom-software-development" },
                  { label: "Web app development", href: "/services/web-app-development" },
                  { label: "AI development", href: "/services/ai-software-development" },
                  { label: "Enterprise software development", href: "/services/enterprise-software-development" },
                  { label: "CRM integration & migration", href: "/services/crm-development" },
                ].map((l) => (
                  <a key={l.label} href={l.href} className={styles.clLink}>
                    <span className={styles.clLinkLabel}>{l.label}<span className={styles.clArrow} /></span>
                  </a>
                ))}
              </div>
            </div>
            <div className={styles.clCol}>
              <p className={styles.clColTitle}>Processes</p>
              <div className={styles.clList}>
                {[
                  { label: "Engagement models", href: "/engagement-models-process" },
                  { label: "Pricing", href: "/pricing" },
                  { label: "FAQ", href: "/faq" },
                ].map((l) => (
                  <a key={l.label} href={l.href} className={styles.clLink}>
                    <span className={styles.clLinkLabel}>{l.label}<span className={styles.clArrow} /></span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      </CrmArticleLayout>
    </>
  );
}
