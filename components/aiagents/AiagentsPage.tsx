"use client";

import Image from "next/image";
import CaseCards from "@/components/home/CaseCards";
import ServicesReviewSlider from "@/components/services/ServicesReviewSlider";
import ServicesAchievements, { type Badge } from "@/components/services/ServicesAchievements";
import ServicesFaqBlock, { type FaqItem } from "@/components/services/ServicesFaqBlock";
import LetsStart from "@/components/home/LetsStart";
import AwesomeStories from "@/components/blog/AwesomeStories";
import AiagentsHero from "./AiagentsHero";
import AipocLogos from "@/components/aipoc/AipocLogos";
import AiagentsTechStack from "./AiagentsTechStack";
import AiagentsCrosslinks from "./AiagentsCrosslinks";
import ArticleLayout from "@/components/shared/ArticleLayout";
import styles from "./AiagentsPage.module.css";

// ─── Services (3 link cards) ──────────────────────────────────────────────────
const SERVICES = [
  {
    icon: "/ai-agents-development/05_AI-agent-development-02.svg",
    title: "Custom AI agent development",
    desc: "We design AI agents around your business, from ones that automate repetitive tasks to virtual assistants that give customers a personalized experience. They draw on natural language processing (NLP), computer vision, and machine learning (ML), and they deliver measurable results across industries such as healthcare, finance, retail, and logistics.",
    linkText: "AI agents development",
    href: "/services/ai-agents-development",
  },
  {
    icon: "/ai-agents-development/03_roadmap-for-PoC-02.svg",
    title: "Proof-of-Concept (PoC) & MVP development",
    desc: "Not ready to commit to a full-scale build? Our proof-of-concept (PoC) and minimum viable product (MVP) services let you validate an idea quickly, without putting significant resources on the line first. These prototypes show your concept is feasible and give you something concrete to put in front of stakeholders or investors.",
    linkText: "AI PoC development",
    href: "/services/ai-poc-development",
  },
  {
    icon: "/ai-agents-development/03_AI-development-02.svg",
    title: "Enterprise software integration",
    desc: "We integrate AI agents into your existing systems with minimal downtime or disruption. Whether that means adding predictive analytics to your supply-chain tools or embedding a chatbot in your customer-service platform, we keep the transition smooth so you see efficiency gains from day one.",
    linkText: "AI integration services",
    href: "/services/ai-integration",
  },
];

// ─── Features (3 icon cards) ──────────────────────────────────────────────────
const FEATURES = [
  { icon: "/ai-agents-development/04_MLOps-and-continuous-learning-02.svg", title: "Continuous learning", desc: "Our AI agents learn and adapt over time by analyzing real-world data and user interactions. That keeps your systems relevant and effective as your business grows and the market shifts." },
  { icon: "/ai-agents-development/04_Predictive-Analytics-Dashboards-01.svg", title: "Predictive analytics", desc: "Our agents use machine learning models to forecast trends, spot opportunities, and flag risks before they arise. From demand forecasting to fraud detection, they give you insights you can act on, shaped around your industry." },
  { icon: "/ai-agents-development/05_Security-and-compliance-03.svg", title: "Security you can trust", desc: "We put data security first at every stage of development and deployment. As an ISO 27001-certified company, we follow strict security protocols and comply with regulations such as GDPR to protect your sensitive information." },
];

// ─── Process (6 steps with bullets) ───────────────────────────────────────────
const PROCESS = [
  { title: "Kickoff and Planning", bullets: ["Perform AI readiness assessment first.", "Conduct a collaborative kickoff meeting to align on goals, expectations, and communication processes.", "Define project milestones and create a detailed roadmap for development."] },
  { title: "Data preparation and analysis", bullets: ["Collect, clean, and preprocess data to ensure it meets the highest quality standards.", "Establish data governance policies for secure and efficient data management."] },
  { title: "Prototyping and PoC development", bullets: ["Develop proof-of-concept (PoC) or minimum viable product (MVP) to validate ideas quickly.", "Test prototypes in real-world scenarios to gather insights for refinement."] },
  { title: "AI Model design and training", bullets: ["Select appropriate machine learning frameworks such as TensorFlow or PyTorch.", "RAG development for grounded agents.", "LLM fine-tuning for agents.", "Train models iteratively while evaluating their performance against key metrics like accuracy and speed."] },
  { title: "System integration and testing", bullets: ["Integrate AI agents into your existing systems using APIs or custom-built interfaces.", "AI integration with ERP/CRM.", "Conduct rigorous testing (e.g., usability, performance, security) to ensure flawless functionality."] },
  { title: "Deployment and continuous improvement", bullets: ["Deploy the solution in live environments with full monitoring capabilities.", "Offer ongoing support to adapt the AI system as your business evolves."] },
];

// ─── Cases (3, clone content) ─────────────────────────────────────────────────


// ─── Benefits (6 icon cards) ──────────────────────────────────────────────────
const BENEFITS = [
  { icon: "/ai-agents-development/05_Faster-path-to-AI-and-automation-01.svg", title: "Automation", desc: "Automation saves time and cuts operating costs by handling repetitive tasks." },
  { icon: "/ai-agents-development/05_Forecasting-and-decision-making-01.svg", title: "Decision-making", desc: "Better decision-making comes from insights you can act on." },
  { icon: "/ai-agents-development/04_Custom-dashboards-and-operator-interfaces-02.svg", title: "Personalization", desc: "Personalization gives customers an experience that builds engagement and loyalty." },
  { icon: "/ai-agents-development/03_Proving-the-ROI-first-02.svg", title: "ROI", desc: "You reach a faster return on investment with reliable, enterprise-grade AI." },
  { icon: "/ai-agents-development/06_Fast-operational-wins-from-new-data-01.svg", title: "Customer satisfaction", desc: "Customer satisfaction improves through more personal interactions." },
  { icon: "/ai-agents-development/04_Agentic-and-edge-AI-systems-01.svg", title: "Competitive advantage", desc: "You also gain a competitive edge from technology built around your sector." },
];

// ─── Why (6 cards, title + desc) ──────────────────────────────────────────────
const WHY_CARDS = [
  { title: "Cutting-edge technology and innovation", desc: "We work with current AI tools, including machine-learning frameworks, natural-language models, and generative AI, so your business keeps pace as the field moves quickly." },
  { title: "Proven track record", desc: "We’ve completed more than 350 projects across over 20 industries, including healthcare, retail, finance, logistics, and manufacturing, so we bring real domain knowledge to every engagement. We design solutions for where your business is going, not only where it is today." },
  { title: "Custom solutions", desc: "No two businesses are alike, and neither are our solutions. We take the time to understand your specific challenges and goals before we design AI agents that fit your workflows." },
  { title: "Client-centric philosophy", desc: "Our team takes the time to understand your challenges and goals, then delivers solutions that produce measurable results and stay within budget." },
  { title: "Trusted by global brands", desc: "Leading organizations such as Toyota rely on Nexterse LLC for solutions that produce measurable results and hold to a high standard of quality." },
  { title: "ISO-certified security", desc: "As an ISO 27001-certified company, we follow rigorous security protocols at every stage, from data collection to deployment, and we comply with GDPR and other global regulations." },
];

// ─── Awards (clone badges, 12) ────────────────────────────────────────────────
const AIA_BADGES: Badge[] = [
  { src: "/badges_fix/06_techreviewer_badge_2026-05.svg", alt: "techreviewer.co 2026 — Top AI Agents Development Companies" },
  { src: "/badges_fix/05_top_clutch.co_artificial_intelligence_company_boston_2026-2.svg", alt: "Clutch 2026 — Top Artificial Intelligence Company in Boston" },
  { src: "/badges_fix/06_techreviewer_badge_2026-01.svg", alt: "techreviewer.co 2026 — Top AI Consulting Companies" },
  { src: "/badges_fix/06_techreviewer_badge_2026-02.svg", alt: "techreviewer.co 2026 — Top AI Readiness Assessment Companies" },
  { src: "/badges_fix/05_top_clutch.co_generative_ai_company_boston_2026-2.svg", alt: "Clutch 2026 — Top Generative AI Company in Boston" },
  { src: "/badges_fix/06_top-ai-development-companies.svg", alt: "GoodFirms — Top AI Development Company" },
  { src: "/badges_fix/06_techreviewer_badge_2026-04.svg", alt: "techreviewer.co 2026 — Top AI Software Development Companies" },
  { src: "/badges_fix/06_techreviewer_badge_2026-16.svg", alt: "techreviewer.co 2026 — Top AI Integration Companies" },
  { src: "/badges_fix/06_techreviewer_badge_2026-03.svg", alt: "techreviewer.co 2026 — Top AI PoC Development Companies" },
  { src: "/badges_fix/06_techreviewer_badge_2026-06.svg", alt: "techreviewer.co 2026 — Top RAG Development Companies" },
  { src: "/badges_fix/06_techreviewer_badge_2026-07.svg", alt: "techreviewer.co 2026 — Top LLM Development Companies" },
  { src: "/badges_fix/06_techreviewer_badge_2026-15.svg", alt: "techreviewer.co 2026 — Top GenAI Development Companies" },
];

// ─── FAQ (clone content, 8) ───────────────────────────────────────────────────
const AIA_FAQ: FaqItem[] = [
  { question: "What are AI Agents, and how can they help my business?", answer: "AI agents are software systems that carry out specific tasks on their own, such as automating a workflow or handling a customer conversation, using machine learning (ML) and natural language processing (NLP). Putting them to work in your operations cuts the cost of manual tasks, improves efficiency, and lets you offer a more personalized experience." },
  { question: "How long does it take to develop an AI agent?", answer: "It depends on how complex the solution is. A simple chatbot can be ready in 4-6 weeks. A custom enterprise-grade solution integrated across multiple systems may take several months. We work in an agile way, which keeps delivery on time without losing flexibility." },
  { question: "Can AI agents be integrated into my existing systems?", answer: "Yes. We specialize in integrating AI agents into existing IT infrastructure, including your CRM, ERP, and custom software platforms. We handle compatibility and keep disruption to a minimum throughout the process." },
  { question: "Are AI agents secure and compliant?", answer: "Yes. As an ISO 27001-certified company, we hold to high security standards and comply with regulations such as GDPR and the EU AI Act. Your data is protected at every stage of development and deployment." },
  { question: "What technologies does Nexterse LLC use for AI agent development?", answer: "We build AI agents with tools such as GPT-4, TensorFlow, PyTorch, and Stable Diffusion. Our solutions combine natural language processing (NLP), computer vision, and machine learning (ML) to get the most out of each use case." },
  { question: "How do you ensure the reliability of AI agents?", answer: "We run rigorous testing, including unit, integration, and performance testing under real-world conditions. We also add safeguards such as validation tools (for example, Pydantic) to catch errors and prevent nonsensical output." },
  { question: "What data is required to train an AI agent?", answer: "It depends on the use case, but it usually includes structured datasets such as customer records, unstructured data such as text or images, or interaction logs. We clean, preprocess, and label the data so training produces high-quality results." },
  { question: "Do I need a large budget for custom AI solutions?", answer: "Not necessarily. We tailor each solution to fit your budget while keeping the impact high. Whether you’re a startup or an enterprise, we build solutions that scale as your business grows." },
  { question: "How does Nexterse LLC ensure project success?", answer: "We follow a transparent process built on detailed roadmaps, regular updates, rigorous testing, and close collaboration with you at every stage of development." },
];

// ─── Awesome stories (blog) ───────────────────────────────────────────────────
const AIA_BLOG_FEATURED = {
  href: "/blog/ai-development-costs",
  title: "What Affects AI Development Cost in 2026",
  image: "/ai-agents-development/05_AI-development-costs-1024x578.jpg",
  imageAlt: "AI development costs",
  readTime: "40 mins",
  date: "March 11, 2026",
};
const AIA_BLOG_SIDE = [
  { href: "/blog/software-development-process", title: "Complete Guide: Software Development Process in 14 Steps", readTime: "53 mins", date: "November 19, 2025" },
  { href: "/blog/integrating-ai-into-business", title: "Integrating AI into Business: A Complete Guide For 2026", readTime: "36 mins", date: "March 9, 2025" },
  { href: "/blog/outsource-web-development-decision-making-framework", title: "Outsource Web Development: Decision-Making Framework 2026", readTime: "45 mins", date: "December 5, 2025" },
];

// ─── Component ────────────────────────────────────────────────────────────────
const CONTENTS = [
  { href: "#ai-services", label: "Services" },
  { href: "#ai-features", label: "Features" },
  { href: "#ai-process", label: "Process" },
  { href: "#ai-cases", label: "Case studies & reviews" },
  { href: "#ai-tech", label: "Tech stack" },
  { href: "#ai-benefits", label: "Benefits" },
  { href: "#ai-why", label: "Why Nexterse" },
  { href: "#ai-faq", label: "FAQ" },
];

export default function AiagentsPage() {
  return (
    <>
      <AiagentsHero />

      <ArticleLayout contents={CONTENTS} ariaLabel="AI agents development page contents">
        <AipocLogos />
        {/* ── Services ───────────────────────────────────────────────────── */}
        <section id="ai-services" className={`${styles.blockWhite} ${styles.agentsServicesBlock}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Our AI agents development <span className={styles.accent}>services</span></h2>
            <div className={styles.ecomServicesGrid}>
              {SERVICES.map((c) => (
                <a key={c.title} href={c.href} className={styles.ecomServiceCard}>
                  <Image src={c.icon} alt={c.title} width={56} height={56} className={styles.ecomServiceIcon} />
                  <h3 className={styles.ecomServiceTitle}>{c.title}</h3>
                  <p className={styles.ecomServiceIntro}>{c.desc}</p>
                  <span className={styles.cardLink}>{c.linkText}<span className={styles.serviceArrow} aria-hidden="true" /></span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── Features ───────────────────────────────────────────────────── */}
        <section id="ai-features" className={styles.blockLight}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Transformative AI Agents <span className={styles.accent}>features</span></h2>
            <div className={styles.ecomServicesGrid}>
              {FEATURES.map((c) => (
                <div key={c.title} className={styles.ecomServiceCard}>
                  <Image src={c.icon} alt={c.title} width={56} height={56} className={styles.ecomServiceIcon} />
                  <h3 className={styles.ecomServiceTitle}>{c.title}</h3>
                  <p className={styles.ecomServiceIntro}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Process (dark, 6 steps) ────────────────────────────────────── */}
        <section id="ai-process" className={`${styles.blockWhite} ${styles.agentsProcessBlock}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Comprehensive AI agents development <span className={styles.accent}>process</span></h2>
            <p className={styles.sectionDesc}>
              A step-by-step approach to building AI agents, run through our Agentic Development Lifecycle (ADLC).
            </p>
            <div className={styles.processGrid}>
              {PROCESS.map((step, i) => (
                <div key={step.title} className={styles.processStep}>
                  <div className={styles.processNum}>{i + 1}</div>
                  <div className={styles.processStepBody}>
                    <h3 className={styles.processStepTitle}>{step.title}</h3>
                    <ul className={styles.processStepBullets}>
                      {step.bullets.map((b) => <li key={b}>{b}</li>)}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Case studies ───────────────────────────────────────────────── */}
        <div id="ai-cases">
          <CaseCards
            heading={<>Our recent AI <span>software</span></>}
            windowed
          />
        </div>

        {/* ── Reviews ────────────────────────────────────────────────────── */}
        <ServicesReviewSlider primary="ai" count={7} secondaryCount={2} />

        {/* ── Tech stack ─────────────────────────────────────────────────── */}
        <AiagentsTechStack />

        {/* ── Benefits (6 icon cards) ────────────────────────────────────── */}
        <section id="ai-benefits" className={styles.blockLight}>
          <div className="container">
            <h2 className={styles.sectionTitle}>AI Agents built to bring your unique <span className={styles.accent}>benefits</span></h2>
            <div className={styles.ecomServicesGrid}>
              {BENEFITS.map((c) => (
                <div key={c.title} className={styles.ecomServiceCard}>
                  <Image src={c.icon} alt={c.title} width={56} height={56} className={styles.ecomServiceIcon} />
                  <h3 className={styles.ecomServiceTitle}>{c.title}</h3>
                  <p className={styles.ecomServiceIntro}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Nexterse (6 cards) ─────────────────────────────────────── */}
        <section id="ai-why" className={styles.blockWhite}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Why Choose <span className={styles.accent}>Nexterse LLC</span> for AI Agent Development</h2>
            <div className={styles.ecomServicesGrid}>
              {WHY_CARDS.map((c) => (
                <div key={c.title} className={styles.ecomServiceCard}>
                  <h3 className={styles.ecomServiceTitle}>{c.title}</h3>
                  <p className={styles.ecomServiceIntro}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Awards & Recognitions ──────────────────────────────────────── */}
        <ServicesAchievements badges={AIA_BADGES} />

        {/* ── FAQ ────────────────────────────────────────────────────────── */}
        <div id="ai-faq">
          <ServicesFaqBlock items={AIA_FAQ} />
        </div>

        {/* ── Let's Start ────────────────────────────────────────────────── */}
        <LetsStart />

        {/* ── More about (crosslinks) ────────────────────────────────────── */}
        <AiagentsCrosslinks />

        {/* ── Awesome stories (blog) ─────────────────────────────────────── */}
        <AwesomeStories category="ai" />
      </ArticleLayout>
    </>
  );
}
