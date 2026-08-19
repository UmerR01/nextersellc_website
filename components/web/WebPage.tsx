"use client";

import { useState } from "react";
import Image from "next/image";
import CaseCards from "@/components/home/CaseCards";
import ServicesReviewSlider from "@/components/services/ServicesReviewSlider";
import ServicesAchievements from "@/components/services/ServicesAchievements";
import ServicesFaqBlock, { type FaqItem } from "@/components/services/ServicesFaqBlock";
import AwesomeStories from "@/components/blog/AwesomeStories";
import LetsStart from "@/components/home/LetsStart";
import AipocLogos from "@/components/aipoc/AipocLogos";
import ArticleLayout from "@/components/shared/ArticleLayout";
import styles from "./WebPage.module.css";

// ─── Hero background (career-style SVG) ───────────────────────────────────────
function HeroBg() {
  return (
    <>
      <div className={styles.desktopImage}>
        <svg preserveAspectRatio="xMidYMid slice" className={styles.bgSvg} width="1920" height="879" viewBox="0 0 1920 703" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="1920" height="703" fill="url(#web_d_paint0)" />
          <g clipPath="url(#web_d_clip0)">
            <rect width="1920" height="703" fill="url(#web_d_paint0)" />
            <g opacity="0.08">
              <path fillRule="evenodd" clipRule="evenodd" d="M-845.628 744.916L-688.82 -101.049L-883.335 -131.999L-1166 744.916L-845.628 744.916ZM-78.6641 352.883L-10.577 744.917L289.163 744.916L150.925 377.643L-78.6641 352.883ZM-588.25 744.917L-466.518 -82.4796L412.996 28.9404L825.646 744.916L544.475 744.916L309.265 237.337L-305.016 183.69L-267.877 744.916L-588.25 744.917Z" fill="#3CC4E5" />
            </g>
            <g opacity="0.08">
              <path fillRule="evenodd" clipRule="evenodd" d="M874.988 -647.181L1388.56 -730.869L1655.22 -246.923L1928.98 -316.113L1484.69 -947.631L656.166 -844.49L599.943 19.784L892.548 -54.1681L874.988 -647.181ZM1254.33 -550.397L1420.26 -187.351L1127.66 -113.399L1098.77 -529.125L1254.33 -550.397ZM1687.01 -978.365L1877.46 -996.427L2419.14 -439.644L2162.34 -374.741L1687.01 -978.365Z" fill="#3CC4E5" />
              <path fillRule="evenodd" clipRule="evenodd" d="M892.663 -53.7166L1231.16 682.73L1060.64 755.898L600.059 20.2355L892.663 -53.7166ZM1683.65 127.297L1655.34 -246.473L1929.1 -315.663L1887.62 51.6869L1683.65 127.297ZM1127.73 -113.128L1429.9 614.455L2207.46 309.673L2419.08 -439.5L2162.28 -374.597L2064.62 143.284L1515.96 334.075L1420.34 -187.08L1127.73 -113.128Z" fill="#3CC4E5" />
            </g>
            <g filter="url(#web_d_f0)">
              <ellipse cx="960" cy="401.5" rx="590" ry="289.5" fill="url(#web_d_paint1)" />
            </g>
            <g opacity="0.32" filter="url(#web_d_f1)">
              <circle cx="2010" cy="205" r="460" fill="#3CC4E5" />
            </g>
            <g opacity="0.32" filter="url(#web_d_f2)">
              <circle cx="19" cy="691" r="460" fill="#3CC4E5" />
            </g>
          </g>
          <defs>
            <filter id="web_d_f0" x="70" y="-188" width="1780" height="1179" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="135" result="effect1_foregroundBlur" />
            </filter>
            <filter id="web_d_f1" x="1050" y="-755" width="1920" height="1920" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="136" result="effect1_foregroundBlur" />
            </filter>
            <filter id="web_d_f2" x="-941" y="-269" width="1920" height="1920" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="136" result="effect1_foregroundBlur" />
            </filter>
            <linearGradient id="web_d_paint0" x1="1920" y1="-21.3031" x2="114.684" y2="922.394" gradientUnits="userSpaceOnUse">
              <stop stopColor="#02102C" />
              <stop offset="1" stopColor="#112244" />
            </linearGradient>
            <linearGradient id="web_d_paint1" x1="1550" y1="94.4545" x2="323.866" y2="572.726" gradientUnits="userSpaceOnUse">
              <stop stopColor="#02102C" />
              <stop offset="1" stopColor="#112244" />
            </linearGradient>
            <clipPath id="web_d_clip0">
              <rect width="1920" height="703" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className={styles.mobileImage}>
        <svg preserveAspectRatio="xMidYMid slice" className={styles.bgSvg} width="375" height="599" viewBox="0 0 375 599" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#web_mob_clip0)">
            <rect width="375" height="599" fill="url(#web_mob_paint0)" />
            <g opacity="0.48" filter="url(#web_mob_filter0)">
              <circle cx="254" cy="632" r="200" fill="#3CC4E5" />
            </g>
            <g opacity="0.48" filter="url(#web_mob_filter1)">
              <circle cx="450" cy="504" r="200" fill="#3CC4E5" />
            </g>
            <g opacity="0.04">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M494.865 321.841L245.422 343.352L178.087 600.544L42.2236 600.544L175.023 253.568L573.681 204L701.805 600.545L556.589 600.545L494.865 321.841ZM329.309 411.712L294.706 600.632L439.922 600.632L404.384 403.295L329.309 411.712ZM77.0156 263.084L-13.9575 277.113L-201 600.708L-73.5534 600.708L77.0156 263.084Z"
                fill="url(#web_mob_paint1)"
              />
            </g>
          </g>
          <defs>
            <filter id="web_mob_filter0" x="-146" y="232" width="800" height="800" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur" />
            </filter>
            <filter id="web_mob_filter1" x="50" y="104" width="800" height="800" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur" />
            </filter>
            <linearGradient id="web_mob_paint0" x1="375" y1="-18.1516" x2="-67.5941" y2="34.8811" gradientUnits="userSpaceOnUse">
              <stop stopColor="#02102C" />
              <stop offset="1" stopColor="#112244" />
            </linearGradient>
            <linearGradient id="web_mob_paint1" x1="336.885" y1="404.195" x2="339.508" y2="164.05" gradientUnits="userSpaceOnUse">
              <stop offset="0.3256" stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <clipPath id="web_mob_clip0">
              <rect width="375" height="599" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </>
  );
}

// ─── Services tabs ────────────────────────────────────────────────────────────
const SERVICE_TABS = [
  {
    icon: "/web-app-development/12_RD-Analysis.svg",
    label: "R&D & Analysis",
    title: "R&D & Analysis",
    image: "/web-app-development/01_RD-Analysis.jpg",
    desc: "Our R&D and business analysis team evaluates your business and ideas before launching development. We define the product scope, reduce market and technical risk, and prepare the system for future growth. If AI is part of the plan, we use ADLC from the start. We define where AI fits in the product, what data it can use, how results will be checked, and what controls the system needs before release.",
    bullets: [
      "Validate the business case and product scope",
      "Choose the technology stack and integration approach",
      "Estimate cost, effort, and delivery stages",
      "Define the solution vision and release plan",
      "Map AI use cases, data flows, and guardrails through ADLC",
      "Reduce avoidable costs and late rework",
    ],
    linkLabel: "Business analysis",
    href: "/services/business-analysis",
  },
  {
    icon: "/web-app-development/12_App-Design.svg",
    label: "UX/UI design",
    title: "UX/UI design",
    image: "/web-app-development/01_App-Design.jpg",
    desc: "We follow a thorough web design approach focused on how people interact with websites, ensuring interfaces are not only user-friendly but also designed for targeted action. For AI features, we account for response states, approval steps, citation patterns, and user control.",
    bullets: [
      "Research users, roles, workflows, and decision points",
      "Build information architecture, navigation logic, screen structure, and content hierarchy",
      "Create wireframes, prototypes, interface concepts, and design systems",
      "Design for desktop, tablet, mobile, and mixed-device use",
      "Shape AI interactions, review flows, fallback states, and user feedback patterns",
      "Refine usability through testing, iteration, observation, and product input",
    ],
    linkLabel: "UI/UX design",
    href: "/services/ui-ux-design",
  },
  {
    icon: "/web-app-development/12_Frontend-Backend-Development.svg",
    label: "Frontend & Backend",
    title: "Frontend & Backend development",
    image: "/web-app-development/01_Web-Development.jpg",
    desc: "Our frontend and backend engineers build custom web applications for products ranging in complexity. We focus on stable architecture and maintainable code. When AI is required, we add model-facing services, retrieval flows, orchestration logic, and monitoring via an ADLC-based process.",
    bullets: [
      "Integrate with third-party systems and internal platforms",
      "Process, store, analyze, and expose large volumes of data",
      "Enforce security across users, workflows, access rules, and data handling",
      "Keep interfaces accurate, responsive, stable, and fast",
      "Build scalable architecture for core logic, background jobs, AI services, and future growth",
      "Support modernization, refactoring, extension, and phased replacement of legacy parts",
    ],
    linkLabel: "Back-end development services",
    href: "/services/back-end-development-services",
  },
  {
    icon: "/web-app-development/12_QA-Testing.svg",
    label: "QA & Testing",
    title: "QA & Testing",
    image: "/web-app-development/01_QA-Testing.jpg",
    desc: "Our QA team joins the project from day one. This lets us test the product as it is built and not after the main work is done. We cover functional quality, performance, security, and cross-device behavior. For AI-enabled features, we also test output quality, grounding, fallback behavior, and ADLC-defined monitoring rules.",
    bullets: [
      "Improve product quality throughout development",
      "Keep the delivery progress visible and documented",
      "Automate repeatable test flows, regression checks, smoke tests, and release checks",
      "Reduce the risk of missed requirements, unstable releases, and hidden defects",
      "Test AI behavior against defined evaluation criteria and fallback paths",
      "Shorten release cycles through earlier defect detection and tighter feedback loops",
    ],
    linkLabel: "Quality assurance",
    href: "/services/quality-assurance",
  },
];

// ─── Solutions ────────────────────────────────────────────────────────────────
const SOLUTIONS = [
  {
    label: "Enterprise software",
    title: "Enterprise web apps",
    desc: "We develop corporate web applications for internal operations and complex processes. These include ERP, CRM, HRM, billing systems, approval systems, and other tools that underpin a company's daily operations. We also add AI features when needed: internal assistants, corporate content search, document management, and automation of routine tasks based on roles and access rights.",
  },
  {
    label: "MVPs and AI PoCs",
    title: "MVPs and AI PoCs",
    desc: "We help startups and product teams launch MVPs and AI PoCs to validate their ideas before full development. At this stage, we evaluate the use case, technical feasibility, support costs, and the path to the next release. Such a project may include chat interfaces, knowledge-base search, document processing, and highly specialized task-specific assistants.",
  },
  {
    label: "Applied AI solutions",
    title: "Applied AI solutions",
    desc: "We build AI-powered web applications for operational dashboards, analytics, and data-driven decision support built on your existing systems. We also develop AI applications for anomaly detection, maintenance support, event interpretation, and data-driven recommendations based on live and historical operational data.",
  },
  {
    label: "SaaS product development",
    title: "SaaS product development",
    desc: "We design and develop SaaS products with tenant-aware architecture, admin controls, integration layers, and stable release foundations. AI can be added to these products for support automation, content handling, account insights, usage analysis, and embedded assistants that work within each tenant's data boundaries.",
  },
  {
    label: "Super apps",
    title: "Super apps",
    desc: "We provide development and consulting services for building all-in-one platforms that integrate multiple services—e-commerce, banking, communication, and transportation—into a unified ecosystem. Super apps eliminate the need for multiple standalone applications and are designed to handle high traffic and diverse functionality.",
  },
];

// ─── Process steps ────────────────────────────────────────────────────────────
const PROCESS_STEPS = [
  {
    title: "Research",
    bullets: [
      "Interview stakeholders and review workflows",
      "Define goals, users, constraints, and AI scope",
    ],
  },
  {
    title: "Discovery",
    bullets: [
      "Set requirements, scope, milestones, and success criteria",
      "Outline architecture, data flows, ADLC checks, and release logic",
    ],
  },
  {
    title: "Design",
    bullets: [
      "Map key journeys and admin flows",
      "Design screens, response states, citations, and approvals",
    ],
  },
  {
    title: "Programming",
    bullets: [
      "Build frontend, backend, APIs, and integrations",
      "Add retrieval, model routing, monitoring, and controls",
    ],
  },
  {
    title: "QA and evaluation",
    bullets: [
      "Test logic, performance, security, and permissions",
      "Review output quality, grounding, fallback paths, and logs",
    ],
  },
  {
    title: "Launch",
    bullets: [
      "Prepare release, handover, monitoring, and support",
      "Deploy the product and track system health",
    ],
  },
  {
    title: "Improvement",
    bullets: [
      "Refine workflows and expand features",
      "Update prompts, retrieval rules, metrics, and guardrails",
    ],
  },
];

// ─── Security cards ───────────────────────────────────────────────────────────
const SECURITY_CARDS = [
  {
    icon: "/web-app-development/02_Client-security-1.svg",
    title: "Client security",
    bullets: [
      "Signing NDA and SLA from the start",
      "Clear policies that secure your intellectual property",
      "Secure authentication and access control for internal systems",
    ],
  },
  {
    icon: "/web-app-development/02_Data-security-2.svg",
    title: "Data security",
    bullets: [
      "Adherence to GDPR, HIPAA, SOC 2, ISO 27001",
      "AES-256 encryption at rest and TLS 1.2+ in transit",
      "Zero trust security model",
      "Automatic data backups and disaster recovery",
    ],
  },
  {
    icon: "/web-app-development/02_Application-security-2.svg",
    title: "Application security",
    bullets: [
      "Automated continuous scanning for vulnerabilities",
      "Real-time DDoS & bot protection",
      "Compliance with OWASP's Top 10 guidelines",
      "Regular security patches and updates",
    ],
  },
  {
    icon: "/web-app-development/02_Network-security-1.svg",
    title: "Network security",
    bullets: [
      "Firewalls & intrusion detection systems (IDS)",
      "Network segmentation for breach isolation",
      "Encrypted tunnels for secure remote access",
      "OAuth 2.0, JWT tokens, and API gateways",
    ],
  },
  {
    icon: "/web-app-development/02_DevSecOps-1.svg",
    title: "DevSecOps",
    bullets: [
      "Automated security checks in CI/CD pipelines",
      "Best security practices and regular code reviews",
      "Safeguarding containerized apps against misconfigurations",
      "Logging & real-time security monitoring",
    ],
  },
];

// ─── Tech stack (SVG logos extracted from sumatosoft-web) ─────────────────────
const TECH_ROWS: { label: string; compact?: boolean; logos: { src: string; alt: string }[] }[] = [
  {
    label: "Backend development",
    logos: [
      { src: "/web-app-development/tech/row1_1.svg", alt: "Java" },
      { src: "/web-app-development/tech/row1_2.svg", alt: ".NET" },
      { src: "/web-app-development/tech/row1_3.svg", alt: "Node.js" },
      { src: "/web-app-development/tech/row1_4.svg", alt: "Python" },
      { src: "/web-app-development/tech/row1_5.svg", alt: "PostgreSQL" },
      { src: "/web-app-development/tech/row1_6.svg", alt: "MongoDB" },
    ],
  },
  {
    label: "Frontend development",
    logos: [
      { src: "/web-app-development/tech/row2_1.svg", alt: "React" },
      { src: "/web-app-development/tech/row2_2.svg", alt: "Angular" },
      { src: "/web-app-development/tech/row2_3.svg", alt: "Vue.js" },
      { src: "/web-app-development/tech/row2_4.svg", alt: "Next.js" },
      { src: "/web-app-development/tech/row2_5.svg", alt: "TypeScript" },
      { src: "/web-app-development/tech/row2_6.svg", alt: "Redux" },
      { src: "/web-app-development/tech/row2_7.svg", alt: "GraphQL" },
    ],
  },
  {
    label: "AI development",
    compact: true,
    logos: [
      { src: "/web-app-development/tech/row3_1.svg", alt: "LangChain" },
      { src: "/web-app-development/tech/row3_2.svg", alt: "LlamaIndex" },
      { src: "/web-app-development/tech/row3_3.svg", alt: "OpenAI" },
      { src: "/web-app-development/tech/row3_4.svg", alt: "HuggingFace" },
      { src: "/web-app-development/tech/row3_5.svg", alt: "PyTorch" },
    ],
  },
];

// ─── Web-specific FAQ ─────────────────────────────────────────────────────────
const WEB_FAQ: FaqItem[] = [
  {
    question: "What makes your custom web application development services different when AI is in scope?",
    answer: "Most teams can build a web interface and connect it to an API. The harder part is designing the backend, data flow, permissions, monitoring, and rollout model so AI features strengthen the product. We handle the web platform and the AI layer together.",
  },
  {
    question: "Can you build a custom web app that is ready for AI, even if we are not adding AI on day one?",
    answer: "Yes. Many clients want to modernize the product first, then add AI after the core workflows, data model, and access controls are in better shape. We can prepare the architecture so that later AI integration does not require a full rebuild.",
  },
  {
    question: "How do you prevent AI features from exposing sensitive data?",
    answer: "We define access at the application and data access levels. That includes role-based permissions, protected service boundaries, auditability, and controlled retrieval rules. In regulated environments, we also design data handling flows that restrict what leaves protected systems.",
  },
  {
    question: "How do you keep AI features from slowing down the interface?",
    answer: "We use asynchronous patterns where needed, so the main interface stays responsive while heavier tasks run in the background or stream results progressively. The right approach depends on the use case, latency target, and deployment model.",
  },
  {
    question: "Can you build a custom web app that uses open-source models or private model hosting?",
    answer: "Yes. We can design web applications that connect to public model APIs, private cloud deployments, or self-hosted model infrastructure, depending on the security model, data sensitivity, and performance requirements.",
  },
  {
    question: "How do you avoid vendor lock-in if the app starts with one model provider?",
    answer: "We separate model-facing logic from the main application where possible. That makes it easier to change providers, introduce routing rules, or later move some workloads to another environment.",
  },
  {
    question: "How do you keep AI-related cloud costs under control?",
    answer: "We plan for it at the architecture stage. That can include caching, model routing, retrieval tuning, background jobs, and usage controls by tenant or user group. The goal is to keep the cost profile understandable before the feature set expands.",
  },
  {
    question: "Do you test AI-enabled features differently from standard web features?",
    answer: "Yes. Standard QA covers functional behavior, performance, security, and regression risk. AI-enabled features also require output review, grounding checks, fallback logic, and post-release monitoring, as model behavior is probabilistic rather than fixed.",
  },
];

// ─── Web-specific blog posts ──────────────────────────────────────────────────
const WEB_BLOG_FEATURED = {
  href: "/blog/agentic-rag-enterprise-guide",
  title: "Agentic RAG: The Complete Enterprise Implementation Guide for 2026",
  image: "/web-app-development/07_Score-answers-not-impressions-1024x576.jpg",
  imageAlt: "Agentic RAG Enterprise Implementation Guide",
  readTime: "35 mins",
  date: "July 3, 2026",
};

const WEB_BLOG_SIDE = [
  {
    href: "/blog/10-questions-ai-development-company",
    title: "10 Questions to Ask an AI Development Company before Signing",
    readTime: "18 mins",
    date: "July 7, 2026",
  },
  {
    href: "/blog/ai-cost-reduction-playbook",
    title: "The AI Cost Reduction Playbook – 9 Mechanisms, 7 Hidden Drivers, and Real-World Case Studies (2026 Edition)",
    readTime: "32 mins",
    date: "July 1, 2026",
  },
];

// ─── Engagement models ────────────────────────────────────────────────────────
const ENGAGEMENT_MODELS = [
  {
    label: "Outsourcing",
    title: "Outsourcing",
    desc: "This is a classic approach in which we take complete responsibility for the entire development process. Our project management team organizes the work for our designers, developers, QA specialists, and other team members. You act as a stakeholder who focuses on strategic goals, communicating with our business analysts on project and business requirements and with our project managers on the project status.",
  },
  {
    label: "Outstaffing",
    title: "Outstaffing",
    desc: "We strengthen your in-house team with our highly skilled developers, designers, business analysts, scrum masters, and QA specialists. Our experts work alongside your team shoulder to shoulder without the overhead of hiring full-time employees.",
  },
  {
    label: "Dedicated team",
    title: "Dedicated team",
    desc: "A team of developers, designers, and QA specialists working exclusively on your project under your supervision. You retain complete control over the team management and oversight while our experts take care of the project execution.",
  },
];

// ─── Industries ───────────────────────────────────────────────────────────────
const INDUSTRIES = [
  {
    icon: "/web-app-development/01_E-learning-applications.svg",
    title: "E-learning",
    desc: "We build e-learning portals, LMS platforms, knowledge systems, and content management tools. AI can support learner assistance, document search, content tagging, and Q&A over internal materials.",
    linkLabel: "Edtech web development",
    href: "/services/edtech-development",
  },
  {
    icon: "/web-app-development/01_Ecommerce.svg",
    title: "E-commerce & Retail",
    desc: "We develop commerce platforms, catalog systems, inventory tools, and order management applications. AI can support product discovery, pricing analysis, support workflows, and demand forecasting.",
    linkLabel: "E-commerce development",
    href: "/services/retail-ecommerce-development",
  },
  {
    icon: "/web-app-development/01_Transport-Logistics.svg",
    title: "Transport & Logistics",
    desc: "We build web applications for freight booking, warehouse operations, fleet management, and delivery control. AI can help with route planning, exception handling, document processing, and demand prediction.",
    linkLabel: "Logistics web development",
    href: "/services/logistics-development",
  },
  {
    icon: "/web-app-development/01_Marketing-automation.svg",
    title: "AdTech",
    desc: "We develop advertising platforms for campaign management, audience segmentation, reporting, and analytics. AI can support content classification, lead routing, performance analysis, and customer insights.",
    linkLabel: "AdTech development",
    href: "/services/adtech-development",
  },
  {
    icon: "/web-app-development/01_Healthcare.svg",
    title: "Healthcare & Lifestyle",
    desc: "We build secure web applications for patient services, records management, medical inventory, and internal workflows. Where policy allows, AI can support document intake, search, triage, and staff knowledge access.",
    linkLabel: "Healthcare web development",
    href: "/services/healthcare-development",
  },
  {
    icon: "/web-app-development/01_Fintech-applications.svg",
    title: "Fintech",
    desc: "We build secure web applications for payments, compliance, risk control, and operational workflows. AI can support investigations, document review, transaction analysis, and internal knowledge retrieval.",
    linkLabel: "Fintech web development",
    href: "/services/financial-development",
  },
];

// ─── Approach items ───────────────────────────────────────────────────────────
const APPROACH_ITEMS = [
  {
    label: "Project scoping",
    title: "Project scoping",
    desc: "We define product goals, business requirements, AI scope, and delivery boundaries before development starts.",
    bullets: [
      "Run stakeholder interviews and workshops",
      "Document user flows, business rules, integration points, and success metrics",
      "Define where AI fits in the product and where deterministic logic should stay in control",
      "Prepare a roadmap with milestones, release scope, dependencies, and priorities",
    ],
  },
  {
    label: "Resource allocation",
    title: "Project resource allocation",
    desc: "We assign the team structure based on product scope, architecture choices, AI workload, and delivery pace.",
    bullets: [],
  },
  {
    label: "Cost estimation",
    title: "Project cost estimation",
    desc: "We estimate costs against scope, team mix, infrastructure choices, and AI usage patterns.",
    bullets: [],
  },
  {
    label: "Risk management",
    title: "Risk management",
    desc: "We track delivery, security, integration, and AI-specific risks from the first phase to release.",
    bullets: [],
  },
  {
    label: "Knowledge management",
    title: "Knowledge management & sharing",
    desc: "We document the system so your team can support, extend, audit, and govern it after release.",
    bullets: [],
  },
  {
    label: "Code review",
    title: "Code review",
    desc: "We review code for maintainability, security, performance, and fit with the agreed architecture.",
    bullets: [],
  },
  {
    label: "Reporting",
    title: "Reporting",
    desc: "We keep reporting structured so the team can track progress, risks, spend, and release status.",
    bullets: [
      "Report on scope changes, milestone status, budget impact, and risk shifts",
    ],
  },
  {
    label: "Post-launch warranty",
    title: "Post-launch warranty",
    desc: "We support the product after release and fix issues tied to the agreed scope.",
    bullets: [],
  },
  {
    label: "Predictable operating costs",
    title: "Predictable operating costs",
    desc: "AI features can distort a web product's cost profile if each request triggers a heavy model call. We design for control from the start.",
    bullets: [],
  },
];

const CONTENTS = [
  { href: "#web-benefits", label: "Benefits" },
  { href: "#web-services", label: "Services" },
  { href: "#web-solutions", label: "Solutions" },
  { href: "#web-process", label: "Process" },
  { href: "#web-cases", label: "Case studies" },
  { href: "#web-tech-stack", label: "Tech stack" },
  { href: "#web-industries", label: "Industries" },
  { href: "#web-approach", label: "Approach" },
  { href: "#web-faq", label: "FAQ" },
];

export default function WebPage() {
  const [activeServiceTab, setActiveServiceTab] = useState(0);
  const [activeSolutionTab, setActiveSolutionTab] = useState(0);
  const [activeEngagementTab, setActiveEngagementTab] = useState(0);
  const [activeApproachTab, setActiveApproachTab] = useState(0);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.bgWrapper}>
          <HeroBg />
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
              <span>Web App Development</span>
            </nav>
            <h1 className={styles.heroTitle}>
              Custom <span className={styles.accent}>web software development</span> for AI-ready products
            </h1>
            <p className={styles.heroDesc}>
              Nexterse builds web products that support today&apos;s modern workflows and are ready for AI features. We design and develop secure custom web software and modernize legacy apps by preparing the backend with data flows and APIs needed for copilots, retrieval, automation, and model-driven features.
            </p>
            <div className={styles.heroActions}>
              <a href="#get-modal-popup" className={`btn btn-accent ${styles.heroBtn}`}>
                Book Free Consultation
              </a>
              <a href="/about-us" className={`btn btn-outline ${styles.heroSecondaryBtn}`}>
                About us
              </a>
              <div className={styles.ratings} aria-label="Clients rate our services five out of five">
                <p className={styles.ratingsLabel}>Clients rate our services</p>
                <div className={styles.ratingsBadge}>
                  <span className={styles.ratingStars} aria-hidden="true">★★★★★</span>
                  <span className={styles.ratingsScore}>5,0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      <ArticleLayout contents={CONTENTS} ariaLabel="Web page contents">
        <AipocLogos />

        {/* ── Benefits ─────────────────────────────────────────────────── */}
        <section id="web-benefits" className={styles.benefitSection}>
          <div className="container">
            <h2 className={styles.benefitTitle}>
              Why make custom web apps with <span className={styles.accent}>Nexterse</span>?
            </h2>
            <p className={styles.benefitDesc}>
              Our team builds custom web applications for companies across industries and regions. We choose the technology stack based on business logic, scale, integration constraints, and long-term support requirements.
              <br />
              We use our ADLC alongside the standard web development process. We define the use case, prepare the data and retrieval layer, set evaluation criteria, and add monitoring. This helps reduce rework and makes it easier to move AI features from PoC to production.
            </p>
            <div className={styles.benefitStats}>
              {[
                {
                  icon: "/web-app-development/01_Less-time-or-cost.svg",
                  stat: "30%",
                  title: "less time to market",
                  desc: "with custom web development",
                },
                {
                  icon: "/web-app-development/03_AI-consulting-03.svg",
                  stat: "25%",
                  title: "reduction in project overhead",
                  desc: "through web consulting",
                },
                {
                  icon: "/web-app-development/03_Audit-rescue-mission-1.svg",
                  stat: "90%",
                  title: "success in reviving stalled projects",
                  desc: "through rescue missions",
                },
              ].map((item) => (
                <div key={item.stat} className={styles.benefitItem}>
                  <Image src={item.icon} alt={item.title} width={64} height={64} className={styles.benefitIcon} />
                  <p className={styles.benefitItemTitle}>
                    <span className={styles.accent}>{item.stat}</span> {item.title}
                    <br />
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Services tabs ─────────────────────────────────────────────── */}
        <section id="web-services" className={`${styles.blockDark} ${styles.serviceBlock}`}>
          <div className="container">
            <h2 className={styles.svcTitle}>
              Custom web application development <span className={styles.accent}>services</span>
            </h2>
            <div className={styles.tabsWrap}>
              <div className={styles.tabsNav} role="tablist">
                {SERVICE_TABS.map((tab, i) => (
                  <button
                    key={tab.label}
                    role="tab"
                    aria-selected={activeServiceTab === i}
                    className={`${styles.tabBtn} ${activeServiceTab === i ? styles.tabBtnActive : ""}`}
                    onClick={() => setActiveServiceTab(i)}
                  >
                    <Image src={tab.icon} alt={tab.label} width={40} height={40} className={styles.tabIcon} />
                    {tab.label}
                  </button>
                ))}
              </div>
              {SERVICE_TABS.map((tab, i) => (
                <div
                  key={tab.label}
                  role="tabpanel"
                  className={activeServiceTab === i ? styles.tabPanelActive : styles.tabPanel}
                >
                  <div className={styles.tabPanelContent}>
                    <h3 className={styles.tabPanelTitle}>{tab.title}</h3>
                    <p className={styles.tabPanelDesc}>{tab.desc}</p>
                    <ul className={styles.tabBullets}>
                      {tab.bullets.map((b) => <li key={b}>{b}</li>)}
                    </ul>
                  </div>
                  <Image
                    src={tab.image}
                    alt={tab.title}
                    width={600}
                    height={400}
                    className={styles.tabPanelImg}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Solutions ─────────────────────────────────────────────────── */}
        <section id="web-solutions" className={`${styles.blockLight} ${styles.solutionsBlock}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>
              Web <span className={styles.accent}>applications</span> we develop
            </h2>
            <p className={styles.sectionDesc}>
              We develop web applications tailored to specific business needs. We consider workflows, data structure, access rights, and integrations. If a project requires AI, we build it into the architecture from the start: we define scenarios, restrict data access, and establish quality criteria and control rules.
            </p>
            <div className={styles.vertTabsWrap}>
              <div className={styles.vertTabList} role="tablist" aria-label="Web solutions">
                {SOLUTIONS.map((s, i) => (
                  <button
                    key={s.label}
                    role="tab"
                    aria-selected={activeSolutionTab === i}
                    className={`${styles.vertTabBtn} ${activeSolutionTab === i ? styles.vertTabBtnActive : ""}`}
                    onClick={() => setActiveSolutionTab(i)}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
              <div className={styles.vertTabContent}>
                <h3 className={styles.vertTabTitle}>{SOLUTIONS[activeSolutionTab].title}</h3>
                <p className={styles.vertTabDesc}>{SOLUTIONS[activeSolutionTab].desc}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Inline CTA ────────────────────────────────────────────────── */}
        <div className={styles.inlineCta}>
          <div className="container">
            <div className={styles.inlineCtaInner}>
              <div>
                <h2 className={styles.inlineCtaTitle}>Get Your Free Consultation</h2>
                <p className={styles.inlineCtaDesc}>Unlock the potential of custom web solutions today!</p>
              </div>
              <a href="#get-modal-popup" className={`btn btn-accent ${styles.inlineCtaBtn}`}>
                Get in Touch
              </a>
            </div>
          </div>
        </div>

        {/* ── AI Services 3 cards ───────────────────────────────────────── */}
        <section className={styles.aiCardsSection}>
          <div className="container">
            <div className={styles.aiCardsGrid}>
              {[
                {
                  icon: "/web-app-development/03_Generative-AI-integration-02.svg",
                  title: "AI services integration",
                  desc: "We integrate language models, retrieval, classifiers, and automation flows into web products where they support a defined business task.",
                  linkLabel: "AI integration into web apps",
                },
                {
                  icon: "/web-app-development/03_Zero-Data-Leakage-03.svg",
                  title: "Zero-leakage security (RBAC)",
                  desc: "We enforce role-based access control and strict data boundaries so users, services, and AI features only access what they are allowed to use.",
                  linkLabel: null,
                },
                {
                  icon: "/web-app-development/03_LLM-agentic-architecture-design-03.svg",
                  title: "LLM-ready microservices",
                  desc: "We structure backend services so that AI components can be added or updated without disrupting the core application.",
                  linkLabel: null,
                },
              ].map((card) => (
                <div key={card.title} className={styles.aiCard}>
                  <Image src={card.icon} alt={card.title} width={56} height={56} className={styles.cardIcon} />
                  <h3 className={styles.aiCardTitle}>{card.title}</h3>
                  <p className={styles.aiCardDesc}>{card.desc}</p>
                  {card.linkLabel && (
                    <a href="/services/ai-integration" className={styles.cardLink}>
                      {card.linkLabel}
                      <span className={styles.aiCardArrow} />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Process ───────────────────────────────────────────────────── */}
        <section id="web-process" className={`${styles.blockDark} ${styles.processBlock} ${styles.webGradientBlock}`}>
          <div className="container">
            <h2 className={styles.sectionTitleWhite}>
              Web development <span className={styles.accent}>process</span>
            </h2>
            <p className={styles.sectionDescWhite}>
              We run SDLC and ADLC as one process, so the web app and its AI layer are scoped, designed, built, tested, and released together.
            </p>
            <div className={styles.processGrid}>
              {PROCESS_STEPS.map((step, i) => (
                <div key={step.title} className={styles.processStep}>
                  <div className={styles.processNum}>{i + 1}</div>
                  <div className={styles.processStepBody}>
                    <h3 className={styles.processStepTitle}>{step.title}</h3>
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

{/* ── Case Studies ──────────────────────────────────────────────── */}
        <div id="web-cases">
          <CaseCards
            heading={<>Our recent <span>works</span></>}
            windowed
          />
        </div>

        {/* ── Review Slider ─────────────────────────────────────────────── */}
        <ServicesReviewSlider primary="software" count={7} secondaryCount={2} />

{/* ── Security ──────────────────────────────────────────────────── */}
        <section className={`${styles.blockLight} ${styles.securityBlock}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>
              Comprehensive multi-layer <span className={styles.accent}>web security</span> measures
            </h2>
            <div className={styles.securityGrid}>
              {SECURITY_CARDS.map((card) => (
                <div key={card.title} className={styles.securityCard}>
                  <Image src={card.icon} alt={card.title} width={48} height={48} className={styles.securityIcon} />
                  <h3 className={styles.securityCardTitle}>{card.title}</h3>
                  <ul className={styles.securityBullets}>
                    {card.bullets.map((b) => <li key={b}>{b}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Tech Stack ────────────────────────────────────────────────── */}
        <section id="web-tech-stack" className={styles.techStackSection}>
          <div className="container">
            <h2 className={styles.techStackTitle}>
              Core <span className={styles.accent}>tech stack</span> we use
            </h2>
            <div className={styles.techRows}>
              {TECH_ROWS.map((row) => (
                <div key={row.label} className={styles.techRow}>
                  <div className={styles.techRowLabel}>{row.label}</div>
                  <div className={styles.techLogos}>
                    {row.logos.map((logo) => (
                      <Image
                        key={logo.src}
                        src={logo.src}
                        alt={logo.alt}
                        width={120}
                        height={48}
                        className={`${styles.techLogoImg} ${row.compact ? styles.techLogoImgSm : ""}`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.archImgWrap}>
              <Image
                src="/web-app-development/04_Web-architecture-for-AI-powered-solutions-clean.png"
                alt="Web architecture for AI-powered solutions"
                width={1200}
                height={600}
                className={styles.archImg}
              />
            </div>
          </div>
        </section>

        {/* ── Engagement Models ─────────────────────────────────────────── */}
        <div id="web-engagement-models" className={styles.engagementWrap}>
          <div className="container">
            <h2 className={styles.sectionTitleWhite}>
              Web development <span className={styles.accent}>engagement models</span>
            </h2>
            <p className={styles.sectionDescWhite}>
              Depending on your business needs, project scope, and team structure, we offer three flexible cooperation models for our custom web application development services.
            </p>
            <div className={styles.engVertTabsWrap}>
              <div className={styles.engVertTabList} role="tablist" aria-label="Engagement models">
                {ENGAGEMENT_MODELS.map((m, i) => (
                  <button
                    key={m.label}
                    role="tab"
                    aria-selected={activeEngagementTab === i}
                    className={`${styles.engVertTabBtn} ${activeEngagementTab === i ? styles.engVertTabBtnActive : ""}`}
                    onClick={() => setActiveEngagementTab(i)}
                  >
                    {m.label}
                  </button>
                ))}
                <a href="/engagement-models-process" className={styles.engModelLink}>
                  Engagement models
                  <span className={styles.engModelArrow} />
                </a>
              </div>
              <div className={styles.engVertTabContent}>
                <h3 className={styles.engVertTabTitle}>{ENGAGEMENT_MODELS[activeEngagementTab].title}</h3>
                <p className={styles.engVertTabDesc}>{ENGAGEMENT_MODELS[activeEngagementTab].desc}</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Industries ────────────────────────────────────────────────── */}
        <section id="web-industries" className={`${styles.blockLight} ${styles.industriesBlock}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>
              <span className={styles.accent}>Industry</span>-specific web development
            </h2>
            <p className={styles.sectionDesc}>
              We specialize in developing multi-integrated, easily customizable, and fully controllable custom web software. Where the use case supports it, we add AI for search, classification, and forecasting.
            </p>
            <div className={styles.industryGrid}>
              {INDUSTRIES.map((ind) => (
                <a key={ind.title} href={ind.href} className={styles.industryCard}>
                  <Image src={ind.icon} alt={ind.title} width={48} height={48} className={styles.industryCardIcon} />
                  <h3 className={styles.industryCardTitle}>{ind.title}</h3>
                  <p className={styles.industryCardDesc}>{ind.desc}</p>
                  <span className={styles.industryCardLink}>
                    {ind.linkLabel}
                    <span className={styles.industryArrow} />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── Approach ──────────────────────────────────────────────────── */}
        <section id="web-approach" className={`${styles.blockWhite} ${styles.approachBlock}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>
              Our web development <span className={styles.accent}>approach</span>
            </h2>
            <p className={styles.sectionDesc}>
              We run custom web application development through a structured process that covers scope, team setup, cost control, and post-launch support. When AI is part of the product, we extend SDLC with ADLC, so use case design, data preparation, evaluation, and rollout are handled inside the same process.
            </p>
            <div className={styles.approachVertTabsWrap}>
              <div className={styles.approachVertTabList} role="tablist" aria-label="Development approach">
                {APPROACH_ITEMS.map((item, i) => (
                  <button
                    key={item.label}
                    role="tab"
                    aria-selected={activeApproachTab === i}
                    className={`${styles.approachVertTabBtn} ${activeApproachTab === i ? styles.approachVertTabBtnActive : ""}`}
                    onClick={() => setActiveApproachTab(i)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <div className={styles.approachVertTabContent}>
                <h3 className={styles.approachVertTabTitle}>{APPROACH_ITEMS[activeApproachTab].title}</h3>
                <p className={styles.approachVertTabDesc}>{APPROACH_ITEMS[activeApproachTab].desc}</p>
                {APPROACH_ITEMS[activeApproachTab].bullets.length > 0 && (
                  <ul className={styles.approachVertTabBullets}>
                    {APPROACH_ITEMS[activeApproachTab].bullets.map((b) => <li key={b}>{b}</li>)}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ── Awards & Recognitions ─────────────────────────────────────── */}
        <ServicesAchievements />

        {/* ── FAQ ───────────────────────────────────────────────────────── */}
        <div id="web-faq">
          <ServicesFaqBlock items={WEB_FAQ} />
        </div>

        {/* ── Cross-links ───────────────────────────────────────────────── */}
        <section className={styles.clSection}>
          <div className={styles.clBg} />
          <div className="container">
            <h2 className={styles.clTitle}>More about Nexterse LLC</h2>
            <div className={styles.clGrid}>
              <div>
                <p className={styles.clColTitle}>Services</p>
                <ul className={styles.clList}>
                  {[
                    { text: "Enterprise web ", last: "development", href: "/services/enterprise-software-development" },
                    { text: "Custom software product ", last: "development", href: "/services/custom-software-development" },
                    { text: "CRM ", last: "development", href: "/services/crm-development" },
                    { text: "Mobile app ", last: "development", href: "/services/mobile-app-development" },
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
              <div>
                <p className={styles.clColTitle}>Insights</p>
                <ul className={styles.clList}>
                  {[
                    { text: "", last: "FAQ", href: "/faq" },
                    { text: "Guides & checklists ", last: "library", href: "/library" },
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

        {/* ── Let's Start ───────────────────────────────────────────────── */}
        <LetsStart />

        {/* ── Blog ──────────────────────────────────────────────────────── */}
        <AwesomeStories category="development" />
      </ArticleLayout>
    </>
  );
}
