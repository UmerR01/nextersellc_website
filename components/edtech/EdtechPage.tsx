"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import CaseCards, { type CaseCard } from "@/components/home/CaseCards";
import ServicesReviewSlider from "@/components/services/ServicesReviewSlider";
import ServicesAchievements, { type Badge } from "@/components/services/ServicesAchievements";
import ServicesFaqBlock, { type FaqItem } from "@/components/services/ServicesFaqBlock";
import LetsStart from "@/components/home/LetsStart";
import AdlcBlog, { type AdlcFeaturedPost, type AdlcBlogPost } from "@/components/adlc/AdlcBlog";
import EdtechHero from "./EdtechHero";
import AipocLogos from "@/components/aipoc/AipocLogos";
import EdtechArticleLayout from "./EdtechArticleLayout";
import styles from "./EdtechPage.module.css";

// ─── Dual-engine (2 rich cards with bullets) ──────────────────────────────────
const DUAL_ENGINE = [
  {
    icon: "/edtech-development/06_Deterministic-system-layer-01.svg",
    title: "Deterministic system layer",
    intro: "We build the core platform that manages data, integrations, and learning operations.",
    bullets: [
      "LMS and platform architecture designed for scale",
      "LTI 1.3, SCORM, and xAPI integrations for interoperability",
      "Learning Record Store (LRS) for structured learning data",
      "Cloud infrastructure and data pipelines for stable performance",
    ],
    outro: "This layer ensures that all learning activity, content, and system interactions are structured, accessible, and ready for continuous processing.",
  },
  {
    icon: "/edtech-development/06_Intelligent-AI-layer-01.svg",
    title: "Intelligent AI layer",
    intro: "We implement AI systems that operate on top of this foundation and adapt learning in real time.",
    bullets: [
      "AI tutors and copilots integrated into learning workflows",
      "RAG-based knowledge systems grounded in your content",
      "Personalization engines adapting learning paths dynamically",
      "Behavioral analytics models analyzing learner interactions",
    ],
    outro: "This layer enables adaptive learning experiences while maintaining alignment with system logic and business goals.",
  },
];

// ─── Autonomous learning ecosystems (5 cards) ─────────────────────────────────
const ECOSYSTEMS: { icon: string; title: string; desc: string; link?: string; href?: string }[] = [
  { icon: "/edtech-development/06_Enterprise-RAG-02.svg", title: "Enterprise RAG generation", desc: "We engineer Enterprise RAG (Retrieval-Augmented Generation) pipelines that transform your internal knowledge into structured learning content. Your wikis, PDFs, and technical documentation are vectorized and organized into a unified knowledge layer.", link: "RAG development", href: "/services/rag-development" },
  { icon: "/edtech-development/06_Agentic-AI-01.svg", title: "Agentic AI tutors & adaptive mentorship", desc: "Agentic AI tutors that are designed for adaptive guided learning. These systems analyze learner behavior in real time, including interaction patterns and response timing, and adapt the learning path accordingly.", link: "AI agent development", href: "/services/ai-agents-development" },
  { icon: "/edtech-development/06_Spatial-computing-02.svg", title: "Spatial computing & XR training environments", desc: "For this edtech solution type, we design immersive training systems that handle operational and technical scenarios. Digital environments replicate real-world conditions, allowing users to train through interaction rather than observation." },
  { icon: "/edtech-development/06_Predictive-skill-gap-telemetry-1.svg", title: "Predictive skill-gap telemetry", desc: "These analytics systems connect learning activity with business performance. Machine learning models analyze micro-interactions, assessment results, and operational data from ERP systems to identify emerging skill gaps and performance patterns." },
  { icon: "/edtech-development/06_Learning-orchestration-01.svg", title: "Learning orchestration & adaptive delivery systems", desc: "We design learning orchestration systems that coordinate how content, AI, and user interactions work together in real time. These systems manage learning flows across courses, modules, and AI-driven interactions, ensuring that each learner receives the right content at the right moment." },
];

// ─── Pilot (3 rich cards) ─────────────────────────────────────────────────────
const PILOT: { icon: string; title: string; intro?: string; bullets: string[]; outro?: string }[] = [
  { icon: "/edtech-development/06_What-we-do-during-the-pilot-02.svg", title: "What we do during the pilot", bullets: ["Define system architecture and integration approach", "Connect core data sources and selected platforms", "Implement key AI components within controlled boundaries", "Run real learning scenarios and workflows", "Measure system performance, accuracy, and operational behavior"] },
  { icon: "/edtech-development/06_What-you-receive-01.svg", title: "What you receive", bullets: ["A working system prototype based on your use case", "Validated integration with your existing infrastructure", "Performance benchmarks across key learning and system metrics", "AI behavior evaluation aligned with your training requirements", "Cost and scaling projections based on real usage"] },
  { icon: "/edtech-development/06_Decision-clarity-01.svg", title: "Decision clarity", intro: "At the end of the pilot, you have a clear understanding of:", bullets: ["How the system performs in real conditions", "How it integrates into your existing ecosystem", "What outcomes it delivers for your organization", "What it will cost to scale"], outro: "This allows you to move forward with full implementation based on validated results and a defined execution plan." },
];

// ─── Legacy transformation (3 rich cards) ─────────────────────────────────────
const LEGACY: { icon: string; title: string; bullets?: string[]; paragraphs?: string[] }[] = [
  { icon: "/edtech-development/06_What-we-implement-02.svg", title: "What we implement", bullets: ["Structured content extraction from SCORM and legacy platforms", "Semantic indexing for fast and accurate content retrieval", "Unified knowledge layer for AI tutors and learning systems", "Seamless integration into your existing LMS and infrastructure"] },
  { icon: "/edtech-development/06_How-we-do-this-03.svg", title: "How we do this", paragraphs: ["We deconstruct legacy content into structured components, including text, media, and assessment logic.", "Each element is organized, enriched with metadata, and indexed for precise retrieval.", "The content is then connected into a unified knowledge layer that supports AI-driven interaction and continuous updates."] },
  { icon: "/edtech-development/06_What-you-get-02.svg", title: "What you get", bullets: ["Your entire content library becomes part of a single, connected system.", "Learning materials are accessible across courses, tools, and AI interfaces.", "New content is generated faster using existing knowledge.", "The platform supports continuous updates without manual restructuring."] },
];

// ─── Security & compliance (4 cards) ──────────────────────────────────────────
const SECURITY = [
  { icon: "/edtech-development/06_Data-protection-03.svg", title: "Data protection", desc: "Data flows are structured and controlled across the platform. Personal data is processed through defined pipelines, with encryption applied in transit and at rest. Sensitive information follows established handling policies aligned with organizational requirements." },
  { icon: "/edtech-development/06_Compliance-alignment-01.svg", title: "Compliance alignment", desc: "The platform aligns with regulatory and industry standards, including GDPR, SOC 2, FERPA, COPPA, ISO 27001, and ISO 9001. Compliance requirements are incorporated into system design and maintained throughout platform evolution." },
  { icon: "/edtech-development/06_Auditability-02.svg", title: "Auditability", desc: "We ensure that system activity remains fully traceable. Learning interactions, operational events, and AI-generated outputs are recorded and available for reporting and internal control. Every decision is transparent and traceable." },
  { icon: "/edtech-development/06_Accessibility-1-02.svg", title: "Accessibility", desc: "Interfaces and content follow WCAG standards. User interactions are designed to remain consistent and accessible across different environments and user needs. This creates a system that operates with clarity, integrates into existing governance processes, and supports long-term scalability." },
];

const COMPLIANCE_BADGES = [
  { src: "/edtech-development/05_owasp.svg", alt: "OWASP" },
  { src: "/edtech-development/05_iso.svg", alt: "ISO" },
  { src: "/edtech-development/05_pci.svg", alt: "PCI" },
  { src: "/edtech-development/05_gdpr.svg", alt: "GDPR" },
  { src: "/edtech-development/05_hipaa.svg", alt: "HIPAA" },
  { src: "/edtech-development/05_fisma.svg", alt: "FISMA" },
];

// ─── Cases (3, clone content) ─────────────────────────────────────────────────
const EDT_CASES: CaseCard[] = [
  {
    banner: "/edtech-development/01_Image-elerning.png",
    name: "Language learning",
    title: "Language learning app development",
    text: "An AI-powered online language learning platform for a US-based startup that achieved a 43% course completion rate in its first year, taking offline language training into a new international online market.",
    href: "/portfolio/elearning-app",
    tags: ["Startups"],
  },
  {
    banner: "/edtech-development/02_Umergence-persp-2.png",
    name: "Umergence",
    title: "Umergence crowdfunding and project management platform",
    text: "~40% less coordination overhead for startup founders – one platform covering fundraising, project management, and talent hiring, with built-in EDGAR compliance.",
    href: "/portfolio/umergence-startup-platform-development",
    tags: ["Startups"],
  },
  {
    banner: "/edtech-development/09_cover-img-1.png",
    name: "Health monitoring",
    title: "Adaptive health monitoring app with 20,000+ downloads",
    text: "A mobile health app with 98% user satisfaction and ~65% program completion rate, delivering real-time blood pressure and pulse monitoring through a smart cuff across five wellness program categories.",
    href: "/portfolio/iot-power-mobile-app-for-wellness-programs",
    tags: ["IoT", "Startups"],
  },
];

// ─── Business benefits ────────────────────────────────────────────────────────
const BENEFIT_STATS = [
  { num: "2×", label: "faster course development" },
  { num: "30%", label: "increase in learner engagement" },
  { num: "25%", label: "reduction in training costs" },
];
const BENEFIT_CARDS = [
  { icon: "/edtech-development/06_Improved-business-performance-02.svg", title: "Improved business performance" },
  { icon: "/edtech-development/06_Integrations-into-your-existing-ecosystem-01.svg", title: "Integrations into your existing ecosystem" },
  { icon: "/edtech-development/06_Measurable-results-03.svg", title: "Measurable results" },
];

function CountUpStat({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = Math.max(700, value * 42);
    const startedAt = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(value * eased));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [value]);

  return <>{count}{suffix}</>;
}

// ─── Stages (7 process steps) ─────────────────────────────────────────────────
const STAGES = [
  { title: "Strategy and planning", paragraphs: ["We define how your learning platform operates within your business.", "Architecture, integrations, data flows, and success metrics are established from the start."] },
  { title: "UX/UI design and prototyping", paragraphs: ["We design clear workflows for learners, instructors, and administrators.", "Interactive prototypes allow early validation before development begins."] },
  { title: "Development and integration", paragraphs: ["We build the core system in iterations and connect it to your ecosystem.", "LMS, ERP, HR, payment, and content systems operate as a unified platform."] },
  { title: "AI layer implementation", paragraphs: ["We introduce AI capabilities directly into the system architecture.", "RAG pipelines, adaptive learning logic, and AI tutors are configured using your data and business rules."] },
  { title: "QA and system validation", paragraphs: ["We test the platform across functionality, performance, security, and compliance.", "AI behavior is evaluated alongside system logic to ensure consistent outputs."] },
  { title: "Deployment and onboarding", paragraphs: ["We deploy the platform in your infrastructure and support adoption across teams.", "Data migration and user onboarding are executed as part of the rollout."] },
  { title: "Continuous improvement and scaling", paragraphs: ["We evolve the platform based on usage data and business priorities.", "Both system capabilities and AI models are refined in a controlled, measurable way."] },
];

// ─── FAQ (clone content, 8) ───────────────────────────────────────────────────
const EDT_FAQ: FaqItem[] = [
  { question: "How do you prevent Generative AI tutors from “hallucinating” incorrect academic facts or corporate policies?", answer: "We never let an LLM generate educational content from its base training weights. We implement strict Retrieval-Augmented Generation (RAG) with “LLM-as-a-Judge” evaluators. The AI is physically restricted to citing answers exclusively from your approved corporate curriculum. If the RAG pipeline cannot find the answer in the source text, it defaults to a safe “I don’t know” state." },
  { question: "How do we process and store complex telemetry from VR/XR training simulations in a standard LMS?", answer: "Standard SCORM packages cannot track spatial data (e.g., where a user looked or how their hands moved). We engineer xAPI (Experience API) middleware and Learning Record Stores (LRS). The VR headset streams high-frequency JSON statements directly to the LRS, capturing hyper-granular spatial telemetry that your traditional LMS can then query for compliance reporting." },
  { question: "How do we migrate 10 years of legacy SCORM courses into a new AI-driven Learning Experience Platform (LXP)?", answer: "You do not need to rebuild them manually. We engineer Semantic Ingestion Pipelines. We build custom parsers that deconstruct your legacy SCORM zip files, extract the text, video, and quiz metadata, vectorize the content, and sink it directly into the new platform’s semantic database, making decades of legacy content instantly searchable by your new AI copilots." },
  { question: "How do we mathematically prove the ROI of an AI-driven learning platform by connecting it to actual employee performance in Workday or SAP?", answer: "We architect Bi-Directional Telemetry Pipelines. The AI doesn’t just push completion scores to the LMS; it ingests live KPI data (e.g., sales quota attainment, manufacturing error rates) from your ERP via secure REST APIs. Our machine learning models run regression analyses comparing learning interactions with real-world output, autonomously calculating the exact financial ROI of specific training modules and identifying hidden skill gaps." },
  { question: "Corporate compliance regulations change constantly. How do we prevent our AI-generated courses from teaching outdated or legally void information?", answer: "We engineer Automated Content Decay Detection. Your RAG (Retrieval-Augmented Generation) pipeline is continuously synchronized with your central corporate policy databases. When a source document (like a compliance manual) is updated by the legal team, the AI automatically flags all downstream courses, quizzes, and simulations that relied on the old vector data, triggering an autonomous re-generation of the outdated modules." },
  { question: "How do you ensure dynamically generated AI training content remains fully compliant with strict ADA and WCAG 2.2 accessibility standards?", answer: "Compliance cannot be an afterthought; it must be algorithmic. We build Accessibility-as-Code into the generation pipeline. When the AI creates a module, it autonomously generates perfectly timed VTT subtitle files, semantic HTML screen-reader tags (ARIA), and descriptive alt-text for all AI-generated imagery, ensuring full compliance for neurodivergent and visually/auditory impaired workforces without manual remediation." },
  { question: "Our field technicians and factory workers train in environments with poor Wi-Fi. Can they still use AI-driven adaptive learning without constant cloud connectivity?", answer: "Yes. We implement Offline-First Edge AI Architectures. Instead of relying on heavy cloud LLMs, we deploy Small Language Models (SLMs) and quantized adaptive algorithms directly to the employee’s mobile device or localized factory gateway. The AI assesses and adapts to the learner locally in real-time, syncing the telemetry back to the central Learning Record Store (LRS) only when a secure connection is re-established." },
  { question: "In Multi-Modal AI roleplay simulations (e.g., sales or medical triage), how do you prevent the high latency that usually ruins conversational immersion?", answer: "Standard API calls to cloud LLMs create a 3-second delay, destroying the realism of a high-pressure roleplay. We engineer Streaming Voice-to-Voice Pipelines utilizing technologies like WebRTC and predictive token streaming. By bypassing the traditional text-transcription middle layer and streaming the AI’s audio response token-by-token, we reduce conversational latency to under 300 milliseconds, matching human reaction times." },
];

// ─── Awards (clone badges) ────────────────────────────────────────────────────
const EDT_BADGES: Badge[] = [
  { src: "/edtech-development/06_techreviewer_badge_2026-12.svg", alt: "techreviewer.co 2026 — Top Software Development Companies" },
  { src: "/edtech-development/06_top-website-development-companies.svg", alt: "GoodFirms — Top Website Development Company" },
  { src: "/edtech-development/06_top-software-development-companies.svg", alt: "GoodFirms — Top Software Development Company" },
  { src: "/edtech-development/03_Badge-1-1.svg", alt: "Top software development company in Massachusetts" },
  { src: "/edtech-development/12_5ca49c9f6cb37e33319e1162_Goodfirms.svg", alt: "GoodFirms badge" },
  { src: "/edtech-development/12_5ca49c9f8ff5ad26d13b6845_TDA.svg", alt: "TDA badge" },
  { src: "/edtech-development/12_5ca49c9f6cb37e49a79e1163_changed.svg", alt: "AWS partner badge" },
  { src: "/edtech-development/12_Custom-Web-Design-Development-2025.svg", alt: "Custom Web Design Development 2025" },
  { src: "/edtech-development/12_Mobile-Software-Development-2025.svg", alt: "Mobile Software Development 2025" },
  { src: "/edtech-development/12_Business-Intelligence-Services-2024.svg", alt: "Business Intelligence Services 2024" },
  { src: "/edtech-development/12_Machine-Learning-Development-2024.svg", alt: "Machine Learning Development 2024" },
  { src: "/edtech-development/12_Responsive-Design-Development-2025.svg", alt: "Responsive Design Development 2025" },
  { src: "/edtech-development/12_Branding-Services-2025.svg", alt: "Branding Services 2025" },
  { src: "/edtech-development/01_top_clutch.co_software_developers_startup_massachusetts.svg", alt: "Clutch — Top startup software developers Massachusetts" },
  { src: "/edtech-development/01_top_clutch.co_user_experience_company_information_technology_boston.svg", alt: "Clutch — Top UX company IT Boston" },
];

// ─── Awesome stories (blog, clone content) ────────────────────────────────────
const EDT_BLOG_FEATURED: AdlcFeaturedPost = {
  href: "/blog/iot-solutions-for-education",
  title: "IoT in Education: Use Cases, Benefits, and Best Practices",
  image: "/edtech-development/11_20944385-1024x683.jpg",
  imageAlt: "Interactive learning tools",
  readTime: "11 mins",
  date: "February 18, 2026",
};
const EDT_BLOG_SIDE: AdlcBlogPost[] = [
  { href: "/blog/15-best-offshore-software-development-companies", title: "15+ Top Offshore Software Development Companies in 2026", readTime: "37 mins", date: "March 3, 2026" },
  { href: "/blog/software-outsourcing-rates-overview", title: "Software Outsourcing Costs [2026 Updated] – Overview", readTime: "22 mins", date: "December 23, 2024" },
  { href: "/blog/it-outsourcing-overview-trends", title: "Overview & Trends: IT Outsourcing in 2026", readTime: "28 mins", date: "December 7, 2025" },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function EdtechPage() {
  const [activeLegacy, setActiveLegacy] = useState(0);
  const legacyTab = LEGACY[activeLegacy];

  return (
    <>
      <EdtechHero />

      <EdtechArticleLayout>
        <AipocLogos />

        {/* ── Dual-engine education software ─────────────────────────────── */}
        <section className={`${styles.blockLight} ${styles.edtechDualEngine}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>
              <span className={styles.accent}>Dual-engine</span> education software development
            </h2>
            <p className={styles.sectionDesc}>
              We act as a dual-engine software development company, designing learning systems as a coordinated architecture where platform infrastructure and AI operate as a single system. This approach ensures predictable system behavior, controlled AI outputs, and consistent performance as the platform scales.
            </p>
            <div className={styles.hcAudienceGrid}>
              {DUAL_ENGINE.map((c) => (
                <div key={c.title} className={styles.solRichCard}>
                  <Image src={c.icon} alt={c.title} width={56} height={56} className={styles.ecomServiceIcon} />
                  <h3 className={styles.ecomServiceTitle}>{c.title}</h3>
                  <p className={styles.ecomServiceIntro}>{c.intro}</p>
                  <ul className={styles.ecomBullets}>
                    {c.bullets.map((b) => <li key={b}>{b}</li>)}
                  </ul>
                  <p className={styles.ecomServiceIntro}>{c.outro}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA: build next-gen edtech ─────────────────────────────────── */}
        <div className={`${styles.inlineCta} ${styles.edtechGradientCta}`}>
          <div className="container">
            <div className={styles.inlineCtaInner}>
              <div>
                <h2 className={styles.inlineCtaTitle}>Let’s build your next-gen edtech solution!</h2>
                <p className={styles.inlineCtaDesc}>Ready to create an online school or corporate training portal? We build scalable, secure, and user-friendly platforms.</p>
              </div>
              <a href="#get-modal-popup" className={`btn btn-accent ${styles.inlineCtaBtn}`}>Get in touch</a>
            </div>
          </div>
        </div>

        {/* ── Autonomous learning ecosystems ─────────────────────────────── */}
        <section id="edt-ecosystems" className={`${styles.blockWhite} ${styles.ecosystemsOpen}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>
              We engineer <span className={styles.accent}>autonomous</span> learning ecosystems
            </h2>
            <div className={styles.ecomServicesGrid}>
              {ECOSYSTEMS.map((c) => {
                const inner = (
                  <>
                    <Image src={c.icon} alt={c.title} width={56} height={56} className={styles.ecomServiceIcon} />
                    <h3 className={styles.ecomServiceTitle}>{c.title}</h3>
                    <p className={styles.ecomServiceIntro}>{c.desc}</p>
                    {c.link && (
                      <span className={`${styles.improvesLink} ${styles.ecosystemLink}`}>
                        {c.link}
                        <span className={styles.linkArrow} aria-hidden />
                      </span>
                    )}
                    {c.link && <span className={styles.improvesLink}>{c.link} ›</span>}
                  </>
                );
                return c.href ? (
                  <a key={c.title} href={c.href} className={styles.ecomServiceCard}>{inner}</a>
                ) : (
                  <div key={c.title} className={styles.ecomServiceCard}>{inner}</div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── 4-6 week pilot ─────────────────────────────────────────────── */}
        <section id="edt-pilot" className={`${styles.blockWhite} ${styles.pilotOpen}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>
              4-6 week <span className={styles.accent}>pilot</span> and validation
            </h2>
            <p className={styles.sectionDesc}>
              We validate your EdTech system before full-scale development through a structured pilot. The pilot is designed to confirm how the system performs in your environment, using your data, integrations, and learning scenarios.
            </p>
            <div className={styles.ecomServicesGrid}>
              {PILOT.map((c) => (
                <div key={c.title} className={styles.ecomServiceCard}>
                  <Image src={c.icon} alt={c.title} width={56} height={56} className={styles.ecomServiceIcon} />
                  <h3 className={styles.ecomServiceTitle}>{c.title}</h3>
                  {c.intro && <p className={styles.ecomServiceIntro}>{c.intro}</p>}
                  <ul className={styles.ecomBullets}>
                    {c.bullets.map((b) => <li key={b}>{b}</li>)}
                  </ul>
                  {c.outro && <p className={styles.ecomServiceIntro}>{c.outro}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA: launch the pilot ──────────────────────────────────────── */}
        <div className={`${styles.inlineCta} ${styles.edtechGradientCta}`}>
          <div className="container">
            <div className={styles.inlineCtaInner}>
              <div>
                <h2 className={styles.inlineCtaTitle}>Let’s launch the pilot</h2>
                <p className={styles.inlineCtaDesc}>Need interactive courses and content? We develop custom modules that align with your curriculum and goals.</p>
              </div>
              <a href="#get-modal-popup" className={`btn btn-accent ${styles.inlineCtaBtn}`}>Book a call</a>
            </div>
          </div>
        </div>

        {/* ── Legacy edtech transformation ───────────────────────────────── */}
        <section id="edt-legacy" className={`${styles.blockWhite} ${styles.legacyTabsBlock}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>
              <span className={styles.accent}>Legacy</span> edtech software transformation
            </h2>
            <p className={styles.sectionDesc}>
              Turn existing content into an intelligent learning system. We transform your existing learning content into a structured, AI-ready system. SCORM packages, course materials, and assessments are extracted, organized, and converted into a unified knowledge layer. Content becomes searchable, reusable, and available for AI-driven learning experiences. Your platform evolves from static course delivery to a system that continuously adapts and expands.
            </p>
            <div className={styles.legacyTabs}>
              {LEGACY.map((c, index) => (
                <button
                  key={c.title}
                  type="button"
                  className={`${styles.legacyTabBtn}${activeLegacy === index ? ` ${styles.legacyTabBtnActive}` : ""}`}
                  onClick={() => setActiveLegacy(index)}
                >
                  <Image src={c.icon} alt="" width={56} height={56} className={styles.legacyTabIcon} />
                  <span>{c.title}</span>
                </button>
              ))}
            </div>
            <div className={styles.legacyTabPanel}>
              <h3 className={styles.legacyPanelTitle}>{legacyTab.title}</h3>
              {legacyTab.bullets && (
                <ul className={styles.legacyBullets}>
                  {legacyTab.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
              )}
              {legacyTab.paragraphs && legacyTab.paragraphs.map((p) => (
                <p key={p} className={styles.legacyPanelText}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        {/* ── Security, compliance, and governance ───────────────────────── */}
        <section id="edt-security" className={`${styles.blockWhite} ${styles.securityOpen}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>
              <span className={styles.accent}>Security</span>, compliance, and governance
            </h2>
            <p className={styles.sectionDesc}>
              EdTech systems operate as part of your organization’s core infrastructure. Security, compliance, and governance are built into the architecture and applied consistently across all components as a part of our education software development services.
            </p>
            <div className={styles.hcAudienceGrid}>
              {SECURITY.map((c) => (
                <div key={c.title} className={styles.ecomServiceCard}>
                  <Image src={c.icon} alt={c.title} width={56} height={56} className={styles.ecomServiceIcon} />
                  <h3 className={styles.ecomServiceTitle}>{c.title}</h3>
                  <p className={styles.ecomServiceIntro}>{c.desc}</p>
                </div>
              ))}
            </div>
            <div className={styles.edtBadges}>
              {COMPLIANCE_BADGES.map((b) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={b.alt} src={b.src} alt={b.alt} className={styles.edtBadge} loading="lazy" />
              ))}
            </div>
          </div>
        </section>

        {/* ── Case studies ───────────────────────────────────────────────── */}
        <div id="edt-cases">
          <CaseCards
            heading={<>Recent software we <span>developed</span></>}
            cards={EDT_CASES}
            windowed
          />
        </div>

        {/* ── Reviews ────────────────────────────────────────────────────── */}
        <ServicesReviewSlider />

        {/* ── Business benefits in numbers ───────────────────────────────── */}
        <section id="edt-benefits" className={`${styles.blockWhite} ${styles.benefitsOpen}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>
              <span className={styles.accent}>Business benefits</span> in numbers and facts
            </h2>
            <div className={styles.benefitsGrid}>
              {BENEFIT_STATS.map((f) => (
                <div key={f.label} className={styles.benefitCell}>
                  <div className={styles.benefitNumber}>
                    <CountUpStat
                      value={Number.parseInt(f.num, 10)}
                      suffix={f.num.includes("%") ? "%" : "x"}
                    />
                  </div>
                  <div className={styles.benefitLabel}>{f.label}</div>
                </div>
              ))}
              {BENEFIT_CARDS.map((c) => (
                <div key={c.title} className={styles.benefitCell}>
                  <Image src={c.icon} alt={c.title} width={72} height={72} className={styles.benefitIconLarge} />
                  <h3 className={styles.benefitCellTitle}>{c.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Stages of edtech development ───────────────────────────────── */}
        <section id="edt-process" className={`${styles.blockWhite} ${styles.processOpen}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>
              <span className={styles.accent}>Stages</span> of edtech software development
            </h2>
            <p className={styles.sectionDesc}>
              We deliver EdTech systems through a structured process where platform engineering and AI development evolve together.
            </p>
            <div className={styles.processGrid}>
              {STAGES.map((step, i) => (
                <div key={step.title} className={styles.processStep}>
                  <div className={styles.processNum}>{i + 1}</div>
                  <div className={styles.processStepBody}>
                    <h3 className={styles.processStepTitle}>{step.title}</h3>
                    {step.paragraphs.map((p) => (
                      <p key={p} className={styles.processStepText}>{p}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Awards & Recognitions ──────────────────────────────────────── */}
        <ServicesAchievements badges={EDT_BADGES} />

        {/* ── FAQ ────────────────────────────────────────────────────────── */}
        <div id="edt-faq">
          <ServicesFaqBlock items={EDT_FAQ} />
        </div>

        {/* ── Let's Start ────────────────────────────────────────────────── */}
        <LetsStart />

        {/* ── Awesome stories (blog) ─────────────────────────────────────── */}
        <AdlcBlog featured={EDT_BLOG_FEATURED} sidePosts={EDT_BLOG_SIDE} />
      </EdtechArticleLayout>
    </>
  );
}
