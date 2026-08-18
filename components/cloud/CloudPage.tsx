"use client";

import { useState } from "react";
import Image from "next/image";
import CaseCards from "@/components/home/CaseCards";
import ServicesReviewSlider from "@/components/services/ServicesReviewSlider";
import ServicesAchievements from "@/components/services/ServicesAchievements";
import ServicesFaqBlock, { type FaqItem } from "@/components/services/ServicesFaqBlock";
import ServicesBlogSection, { type FeaturedPost, type BlogPost } from "@/components/services/ServicesBlogSection";
import LetsStart from "@/components/home/LetsStart";
import AipocLogos from "@/components/aipoc/AipocLogos";
import CloudArticleLayout from "./CloudArticleLayout";
import styles from "./CloudPage.module.css";

// ─── Services tabs ────────────────────────────────────────────────────────────
const SERVICE_TABS = [
  {
    icon: "/cloud/12_RD-Analysis.svg",
    label: "Cloud consulting",
    title: "Cloud consulting & assessment",
    image: "/web-app-development/01_RD-Analysis.jpg",
    desc: "Our cloud architects assess your current infrastructure, applications, and goals before any migration or build starts. We define the target cloud strategy, estimate total cost of ownership, and identify the workloads that benefit most from the cloud. If AI is part of the plan, we map where managed AI services and data pipelines fit into the architecture from day one.",
    bullets: [
      "Assess current infrastructure, workloads, and dependencies",
      "Choose the right cloud model — public, private, hybrid, or multi-cloud",
      "Estimate migration effort, TCO, and expected savings",
      "Define the target architecture and cloud landing zone",
      "Map AI and data services into the cloud roadmap",
      "Reduce avoidable rework and lock-in risk",
    ],
    linkLabel: "Cloud consulting",
    href: "/services/cloud-development",
  },
  {
    icon: "/cloud/12_App-Design.svg",
    label: "Cloud migration",
    title: "Cloud architecture & migration",
    image: "/web-app-development/01_App-Design.jpg",
    desc: "We design well-architected cloud environments and migrate your applications and data with minimal disruption. We follow proven patterns for reliability, security, performance, and cost, and choose the right migration approach for each workload — rehost, replatform, or refactor. For AI features, we account for data residency, managed model endpoints, and controlled access.",
    bullets: [
      "Design landing zones, networking, and account structure",
      "Plan rehost, replatform, refactor, or re-architect per workload",
      "Migrate applications, databases, and storage with validation",
      "Design for high availability, disaster recovery, and multi-region",
      "Set up identity, access, and secure network boundaries",
      "Preserve business continuity throughout the migration",
    ],
    linkLabel: "Cloud migration services",
    href: "/services/cloud-development",
  },
  {
    icon: "/cloud/12_Frontend-Backend-Development.svg",
    label: "Cloud-native dev",
    title: "Cloud-native development",
    image: "/web-app-development/01_Web-Development.jpg",
    desc: "Our engineers build cloud-native applications using containers, microservices, and serverless where they fit. We focus on scalable architecture, automated infrastructure, and maintainable code. When AI is required, we add model-facing services, retrieval flows, and monitoring through managed cloud AI platforms.",
    bullets: [
      "Build with containers (Docker, Kubernetes) and serverless functions",
      "Design microservices, event-driven, and API-first architectures",
      "Automate infrastructure as code (Terraform, CloudFormation)",
      "Process, store, and expose large volumes of data at scale",
      "Integrate managed databases, queues, caches, and AI services",
      "Keep systems elastic, resilient, and cost-aware under load",
    ],
    linkLabel: "Cloud-native development",
    href: "/services/cloud-development",
  },
  {
    icon: "/cloud/12_QA-Testing.svg",
    label: "DevOps & QA",
    title: "Cloud DevOps, security & QA",
    image: "/web-app-development/01_QA-Testing.jpg",
    desc: "Our DevOps and QA teams join the project from day one. We build CI/CD pipelines, automated testing, and observability so releases stay fast and safe. We cover functional quality, performance, security, and cost. For AI-enabled features, we also test output quality, grounding, fallback behavior, and monitoring rules.",
    bullets: [
      "Build CI/CD pipelines and automated deployments",
      "Add monitoring, logging, tracing, and alerting (observability)",
      "Run performance, load, security, and resilience testing",
      "Embed security scanning and compliance into pipelines (DevSecOps)",
      "Apply FinOps practices to keep cloud spend under control",
      "Shorten release cycles through earlier defect detection",
    ],
    linkLabel: "Cloud DevOps services",
    href: "/services/cloud-development",
  },
];

// ─── Solutions ────────────────────────────────────────────────────────────────
const SOLUTIONS = [
  {
    label: "Cloud migration & modernization",
    title: "Cloud migration & modernization",
    desc: "We migrate on-premise and legacy applications to AWS, Azure, or Google Cloud with a workload-by-workload strategy. We rehost, replatform, or refactor based on business value and risk, modernize data stores, and re-architect toward managed services. The result is lower infrastructure cost, better scalability, and a foundation ready for automation and AI.",
  },
  {
    label: "Cloud-native app development",
    title: "Cloud-native application development",
    desc: "We build new applications designed for the cloud from the start — containerized, elastic, and observable. Using microservices, serverless functions, and managed data services, we deliver systems that scale with demand and stay resilient. AI capabilities such as retrieval, classification, and assistants are integrated through managed cloud AI platforms.",
  },
  {
    label: "SaaS on the cloud",
    title: "SaaS product development on the cloud",
    desc: "We design and develop multi-tenant SaaS products with tenant-aware architecture, elastic scaling, usage metering, and secure isolation. We build the release foundations, admin controls, and integration layers SaaS teams need. AI can be added for support automation, account insights, and embedded assistants that respect each tenant's data boundaries.",
  },
  {
    label: "Serverless & microservices",
    title: "Serverless & microservices",
    desc: "We build event-driven, serverless, and microservice architectures that scale automatically and reduce operational overhead. Using functions, managed queues, API gateways, and container orchestration, we deliver systems that are cost-efficient at low load and elastic at peak, with clear service boundaries and independent deployability.",
  },
  {
    label: "Cloud data platforms & AI",
    title: "Cloud data platforms & AI",
    desc: "We build cloud data platforms — data lakes, warehouses, and streaming pipelines — that turn raw data into a governed, usable asset. On top of that foundation we add analytics and AI: retrieval, forecasting, and model endpoints running on managed cloud services with access control and cost visibility built in.",
  },
];

// ─── Process steps ────────────────────────────────────────────────────────────
const PROCESS_STEPS = [
  {
    title: "Assessment",
    bullets: [
      "Review current infrastructure, workloads, and dependencies",
      "Define goals, constraints, compliance needs, and cloud scope",
    ],
  },
  {
    title: "Architecture & planning",
    bullets: [
      "Set target architecture, landing zone, and migration approach",
      "Outline networking, security, data flows, and release logic",
    ],
  },
  {
    title: "Design",
    bullets: [
      "Design services, data stores, and integration boundaries",
      "Define scaling, resilience, and disaster-recovery patterns",
    ],
  },
  {
    title: "Build & migrate",
    bullets: [
      "Build cloud-native services, APIs, and infrastructure as code",
      "Migrate applications and data with validation and rollback paths",
    ],
  },
  {
    title: "Testing & security",
    bullets: [
      "Test performance, resilience, security, and permissions",
      "Run load, failover, and compliance checks before release",
    ],
  },
  {
    title: "Deployment",
    bullets: [
      "Automate CI/CD, blue-green or canary releases, and monitoring",
      "Cut over workloads and track system health and cost",
    ],
  },
  {
    title: "Optimization & FinOps",
    bullets: [
      "Right-size resources and tune autoscaling and storage tiers",
      "Track spend, set budgets, and continuously reduce cloud cost",
    ],
  },
];

// ─── Security cards ───────────────────────────────────────────────────────────
const SECURITY_CARDS = [
  {
    icon: "/cloud/02_Client-security-1.svg",
    title: "Client security",
    bullets: [
      "Signing NDA and SLA from the start",
      "Clear policies that secure your intellectual property",
      "Secure authentication and access control for cloud accounts",
    ],
  },
  {
    icon: "/cloud/02_Data-security-2.svg",
    title: "Data security",
    bullets: [
      "Adherence to GDPR, HIPAA, SOC 2, ISO 27001",
      "AES-256 encryption at rest and TLS 1.2+ in transit",
      "Zero trust security model",
      "Automated backups, snapshots, and disaster recovery",
    ],
  },
  {
    icon: "/cloud/02_Application-security-2.svg",
    title: "Application security",
    bullets: [
      "Automated continuous scanning for vulnerabilities",
      "Real-time DDoS & bot protection (WAF)",
      "Compliance with OWASP's Top 10 guidelines",
      "Regular security patches and automated updates",
    ],
  },
  {
    icon: "/cloud/02_Network-security-1.svg",
    title: "Cloud network security",
    bullets: [
      "VPCs, security groups, firewalls, and intrusion detection",
      "Network segmentation and private subnets for isolation",
      "Encrypted tunnels and VPN for secure remote access",
      "OAuth 2.0, JWT tokens, and API gateways",
    ],
  },
  {
    icon: "/cloud/02_DevSecOps-1.svg",
    title: "DevSecOps",
    bullets: [
      "Automated security checks in CI/CD pipelines",
      "Infrastructure-as-code scanning and policy as code",
      "Safeguarding containerized workloads against misconfigurations",
      "Centralized logging & real-time security monitoring",
    ],
  },
];

// ─── Tech stack ───────────────────────────────────────────────────────────────
const TECH_ROWS: { label: string; compact?: boolean; logos: { src: string; alt: string }[] }[] = [
  {
    label: "Backend & cloud services",
    logos: [
      { src: "/web-app-development/tech/row1_1.svg", alt: "Java" },
      { src: "/web-app-development/tech/row1_2.svg", alt: ".NET" },
      { src: "/web-app-development/tech/row1_3.svg", alt: "Node.js" },
      { src: "/web-app-development/tech/row1_4.svg", alt: "Python" },
      { src: "/web-app-development/tech/row1_5.svg", alt: "PostgreSQL" },
      { src: "/web-app-development/tech/row1_6.svg", alt: "MongoDB" },
      { src: "/ai-consulting/tech-logos/aws.svg", alt: "AWS" },
      { src: "/ai-consulting/tech-logos/azure.svg", alt: "Microsoft Azure" },
      { src: "/ai-consulting/tech-logos/gcp.svg", alt: "Google Cloud" },
      { src: "/ai-consulting/tech-logos/docker.svg", alt: "Docker" },
    ],
  },
  {
    label: "Frontend & interfaces",
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
    label: "Data & AI",
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

// ─── Cloud-specific FAQ ───────────────────────────────────────────────────────
const CLOUD_FAQ: FaqItem[] = [
  {
    question: "Which cloud provider should we choose — AWS, Azure, or Google Cloud?",
    answer: "It depends on your existing stack, team skills, compliance needs, and the managed services you rely on. AWS offers the broadest service catalog, Azure integrates tightly with Microsoft environments, and Google Cloud is strong for data and AI workloads. We assess your requirements and recommend a single-cloud, hybrid, or multi-cloud approach — and design so you are not unnecessarily locked in.",
  },
  {
    question: "How do you migrate our applications to the cloud without downtime?",
    answer: "We migrate workload by workload rather than all at once. Depending on each application, we rehost, replatform, or refactor, run the old and new environments in parallel, and cut over using controlled traffic routing and validated rollback paths. Data is migrated in staged, verified batches so business operations continue throughout.",
  },
  {
    question: "How do you keep our cloud costs under control?",
    answer: "We apply FinOps from the architecture stage. That includes right-sizing resources, autoscaling, reserved or spot capacity where it fits, storage tiering, and cost dashboards with budgets and alerts. We make spend visible per service and team, so the cost profile stays understandable as usage grows.",
  },
  {
    question: "Is the cloud secure enough for regulated data like healthcare or finance?",
    answer: "Yes, when it is architected correctly. Major cloud providers offer compliance-ready services and certifications (HIPAA, SOC 2, ISO 27001, PCI DSS). We implement encryption at rest and in transit, least-privilege access, network isolation, audit logging, and data-residency controls so regulated workloads meet their requirements.",
  },
  {
    question: "What is the difference between lift-and-shift and cloud-native modernization?",
    answer: "Lift-and-shift (rehosting) moves an application to the cloud with minimal changes — fast, but it carries existing inefficiencies. Cloud-native modernization refactors the application to use containers, managed services, and autoscaling, which improves scalability and cost efficiency and prepares it for AI. We often combine both: rehost first for speed, then modernize the highest-value workloads.",
  },
  {
    question: "Can you build serverless or containerized architectures?",
    answer: "Yes. We design event-driven serverless systems (functions, managed queues, API gateways) for elastic, low-overhead workloads, and containerized microservices on Kubernetes for services that need more control. We choose the right model per workload and often mix both within one platform.",
  },
  {
    question: "How do you add AI to a cloud application without exposing sensitive data?",
    answer: "We connect AI to a governed data layer with role-based access, protected service boundaries, and controlled retrieval rules. We use managed model endpoints or private deployments depending on data sensitivity, and design data-handling flows that restrict what leaves protected systems. AI outputs are monitored and, where needed, reviewed before they drive actions.",
  },
  {
    question: "Do you provide ongoing cloud management and support after launch?",
    answer: "Yes. We offer managed cloud operations — monitoring, cost optimization, security patching, scaling, incident response, and continuous improvement. You can run operations in-house with our support, or have our team manage the environment under a defined SLA.",
  },
];

// ─── Cloud-specific blog posts ────────────────────────────────────────────────
const CLOUD_BLOG_FEATURED: FeaturedPost = {
  href: "/blog/cloud-migration-strategy-guide",
  title: "Cloud Migration Strategy: The Complete Enterprise Playbook for 2026",
  image: "/web-app-development/07_Score-answers-not-impressions-1024x576.jpg",
  imageAlt: "Cloud Migration Strategy Enterprise Playbook",
  readTime: "35 mins",
  date: "July 3, 2026",
};

const CLOUD_BLOG_SIDE: BlogPost[] = [
  {
    href: "/blog/10-questions-cloud-development-company",
    title: "10 Questions to Ask a Cloud Development Company before Signing",
    readTime: "18 mins",
    date: "July 7, 2026",
  },
  {
    href: "/blog/cloud-cost-optimization-playbook",
    title: "The Cloud Cost Optimization Playbook – FinOps Mechanisms and Real-World Case Studies (2026 Edition)",
    readTime: "32 mins",
    date: "July 1, 2026",
  },
];

// ─── Engagement models ────────────────────────────────────────────────────────
const ENGAGEMENT_MODELS = [
  {
    label: "Outsourcing",
    title: "Outsourcing",
    desc: "This is a classic approach in which we take complete responsibility for the entire cloud development and migration process. Our project management team organizes the work for our cloud architects, engineers, DevOps, and QA specialists. You act as a stakeholder who focuses on strategic goals, communicating with our business analysts on requirements and with our project managers on status.",
  },
  {
    label: "Outstaffing",
    title: "Outstaffing",
    desc: "We strengthen your in-house team with our highly skilled cloud engineers, architects, DevOps specialists, and QA experts. Our specialists work alongside your team shoulder to shoulder without the overhead of hiring full-time employees.",
  },
  {
    label: "Dedicated team",
    title: "Dedicated team",
    desc: "A team of cloud architects, engineers, DevOps, and QA specialists working exclusively on your project under your supervision. You retain complete control over team management and oversight while our experts take care of the project execution.",
  },
];

// ─── Industries ───────────────────────────────────────────────────────────────
const INDUSTRIES = [
  {
    icon: "/cloud/01_E-learning-applications.svg",
    title: "E-learning",
    desc: "We build scalable cloud platforms for e-learning portals, LMS systems, and content delivery. The cloud handles traffic spikes during peak enrollment, while AI can support learner assistance, content search, and Q&A over internal materials.",
    linkLabel: "Edtech cloud development",
    href: "/services/edtech-development",
  },
  {
    icon: "/cloud/01_Ecommerce.svg",
    title: "E-commerce & Retail",
    desc: "We develop elastic cloud commerce platforms, catalog systems, and order management that scale for seasonal peaks. AI can support product discovery, pricing analysis, support workflows, and demand forecasting on top of cloud data pipelines.",
    linkLabel: "E-commerce development",
    href: "/services/retail-ecommerce-development",
  },
  {
    icon: "/cloud/01_Transport-Logistics.svg",
    title: "Transport & Logistics",
    desc: "We build cloud platforms for freight booking, warehouse operations, fleet management, and delivery control. The cloud handles high-volume telemetry and events, while AI can help with route planning, exception handling, and demand prediction.",
    linkLabel: "Logistics cloud development",
    href: "/services/logistics-development",
  },
  {
    icon: "/cloud/01_Marketing-automation.svg",
    title: "AdTech",
    desc: "We develop cloud advertising platforms for campaign management, audience segmentation, reporting, and analytics. Elastic infrastructure processes large event streams, and AI can support content classification, lead routing, and customer insights.",
    linkLabel: "AdTech cloud development",
    href: "/services/adtech-development",
  },
  {
    icon: "/cloud/01_Healthcare.svg",
    title: "Healthcare & Lifestyle",
    desc: "We build secure, compliant cloud applications for patient services, records management, and internal workflows. Where policy allows, AI can support document intake, search, triage, and staff knowledge access within HIPAA-aligned cloud environments.",
    linkLabel: "Healthcare cloud development",
    href: "/services/healthcare-development",
  },
  {
    icon: "/cloud/01_Fintech-applications.svg",
    title: "Fintech",
    desc: "We build secure cloud applications for payments, compliance, risk control, and operational workflows. Compliance-ready cloud services and strong isolation support regulated workloads, while AI can support investigations, document review, and transaction analysis.",
    linkLabel: "Fintech cloud development",
    href: "/services/financial-development",
  },
];

// ─── Approach items ───────────────────────────────────────────────────────────
const APPROACH_ITEMS = [
  {
    label: "Project scoping",
    title: "Project scoping",
    desc: "We define cloud goals, business requirements, migration scope, and delivery boundaries before development starts.",
    bullets: [
      "Run stakeholder interviews and architecture workshops",
      "Document workloads, dependencies, integration points, and success metrics",
      "Define the target cloud model and where AI and data services fit",
      "Prepare a roadmap with milestones, migration waves, dependencies, and priorities",
    ],
  },
  {
    label: "Resource allocation",
    title: "Project resource allocation",
    desc: "We assign the team structure based on project scope, architecture choices, migration complexity, and delivery pace.",
    bullets: [],
  },
  {
    label: "Cost estimation",
    title: "Project cost estimation",
    desc: "We estimate costs against scope, team mix, infrastructure choices, and cloud usage patterns, including expected run-rate.",
    bullets: [],
  },
  {
    label: "Risk management",
    title: "Risk management",
    desc: "We track delivery, security, migration, and cost risks from the first phase to release and steady-state operation.",
    bullets: [],
  },
  {
    label: "Knowledge management",
    title: "Knowledge management & sharing",
    desc: "We document the architecture and runbooks so your team can operate, extend, audit, and govern the environment after release.",
    bullets: [],
  },
  {
    label: "Code review",
    title: "Code & infrastructure review",
    desc: "We review code and infrastructure as code for maintainability, security, performance, and fit with the agreed architecture.",
    bullets: [],
  },
  {
    label: "Reporting",
    title: "Reporting",
    desc: "We keep reporting structured so the team can track progress, risks, spend, and release status across migration waves.",
    bullets: [
      "Report on scope changes, milestone status, budget impact, and risk shifts",
    ],
  },
  {
    label: "Post-launch support",
    title: "Post-launch support & operations",
    desc: "We support the environment after release — monitoring, patching, scaling, and fixing issues tied to the agreed scope.",
    bullets: [],
  },
  {
    label: "Predictable operating costs",
    title: "Predictable operating costs",
    desc: "Cloud and AI features can distort a product's cost profile if resources are over-provisioned or each request triggers heavy calls. We design for control and FinOps from the start.",
    bullets: [],
  },
];

export default function CloudPage() {
  const [activeServiceTab, setActiveServiceTab] = useState(0);
  const [activeSolutionTab, setActiveSolutionTab] = useState(0);
  const [activeEngagementTab, setActiveEngagementTab] = useState(0);
  const [activeApproachTab, setActiveApproachTab] = useState(0);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroBgWrapper} aria-hidden="true">
          <div className={styles.heroBgDesktop}>
            <svg preserveAspectRatio="xMidYMid slice" className={styles.heroBgSvg} width="1920" height="703" viewBox="0 0 1920 703" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="1920" height="703" fill="url(#cld_d_paint0)" />
              <g clipPath="url(#cld_d_clip0)">
                <rect width="1920" height="703" fill="url(#cld_d_paint0)" />
                <g opacity="0.08">
                  <path fillRule="evenodd" clipRule="evenodd" d="M-845.628 744.916L-688.82 -101.049L-883.335 -131.999L-1166 744.916L-845.628 744.916ZM-78.6641 352.883L-10.577 744.917L289.163 744.916L150.925 377.643L-78.6641 352.883ZM-588.25 744.917L-466.518 -82.4796L412.996 28.9404L825.646 744.916L544.475 744.916L309.265 237.337L-305.016 183.69L-267.877 744.916L-588.25 744.917Z" fill="#3CC4E5" />
                </g>
                <g opacity="0.08">
                  <path fillRule="evenodd" clipRule="evenodd" d="M874.988 -647.181L1388.56 -730.869L1655.22 -246.923L1928.98 -316.113L1484.69 -947.631L656.166 -844.49L599.943 19.784L892.548 -54.1681L874.988 -647.181ZM1254.33 -550.397L1420.26 -187.351L1127.66 -113.399L1098.77 -529.125L1254.33 -550.397ZM1687.01 -978.365L1877.46 -996.427L2419.14 -439.644L2162.34 -374.741L1687.01 -978.365Z" fill="#3CC4E5" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M892.663 -53.7166L1231.16 682.73L1060.64 755.898L600.059 20.2355L892.663 -53.7166ZM1683.65 127.297L1655.34 -246.473L1929.1 -315.663L1887.62 51.6869L1683.65 127.297ZM1127.73 -113.128L1429.9 614.455L2207.46 309.673L2419.08 -439.5L2162.28 -374.597L2064.62 143.284L1515.96 334.075L1420.34 -187.08L1127.73 -113.128Z" fill="#3CC4E5" />
                </g>
                <g filter="url(#cld_d_f0)">
                  <ellipse cx="960" cy="401.5" rx="590" ry="289.5" fill="url(#cld_d_paint1)" />
                </g>
                <g opacity="0.32" filter="url(#cld_d_f1)">
                  <circle cx="2010" cy="205" r="460" fill="#3CC4E5" />
                </g>
                <g opacity="0.32" filter="url(#cld_d_f2)">
                  <circle cx="19" cy="691" r="460" fill="#3CC4E5" />
                </g>
              </g>
              <defs>
                <filter id="cld_d_f0" x="70" y="-188" width="1780" height="1179" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="135" result="effect1_foregroundBlur" />
                </filter>
                <filter id="cld_d_f1" x="1050" y="-755" width="1920" height="1920" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="136" result="effect1_foregroundBlur" />
                </filter>
                <filter id="cld_d_f2" x="-941" y="-269" width="1920" height="1920" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="136" result="effect1_foregroundBlur" />
                </filter>
                <linearGradient id="cld_d_paint0" x1="1920" y1="-21.3031" x2="114.684" y2="922.394" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#02102C" />
                  <stop offset="1" stopColor="#112244" />
                </linearGradient>
                <linearGradient id="cld_d_paint1" x1="1550" y1="94.4545" x2="323.866" y2="572.726" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#02102C" />
                  <stop offset="1" stopColor="#112244" />
                </linearGradient>
                <clipPath id="cld_d_clip0">
                  <rect width="1920" height="703" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className={styles.heroBgMobile}>
            <svg preserveAspectRatio="xMidYMid slice" className={styles.heroBgSvg} width="375" height="559" viewBox="0 0 375 559" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#cld_m_clip0)">
                <rect width="375" height="559" fill="url(#cld_m_paint0)" />
                <g opacity="0.48" filter="url(#cld_m_f0)">
                  <circle cx="254" cy="592" r="200" fill="#3CC4E5" />
                </g>
                <g opacity="0.48" filter="url(#cld_m_f1)">
                  <circle cx="450" cy="464" r="200" fill="#3CC4E5" />
                </g>
                <g opacity="0.04">
                  <path fillRule="evenodd" clipRule="evenodd" d="M494.863 277.841L245.42 299.352L178.085 556.545L42.2216 556.545L175.021 209.568L573.679 160L701.803 556.545L556.587 556.545L494.863 277.841ZM329.311 367.713L294.708 556.633L439.924 556.633L404.386 359.296L329.311 367.713ZM77.0156 219.084L-13.9575 233.113L-201 556.708L-73.5534 556.708L77.0156 219.084Z" fill="url(#cld_m_paint1)" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M556.585 556.774L485.509 940.226L573.677 954.254L701.801 556.774L556.585 556.774ZM208.943 734.474L178.082 556.777L42.2183 556.777L104.877 723.251L208.943 734.474ZM439.928 556.779L384.75 931.813L-13.9071 881.31L-200.949 556.779L-73.5029 556.779L33.1111 786.85L311.546 811.166L294.712 556.779L439.928 556.779Z" fill="url(#cld_m_paint2)" />
                </g>
              </g>
              <defs>
                <filter id="cld_m_f0" x="-146" y="192" width="800" height="800" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur" />
                </filter>
                <filter id="cld_m_f1" x="50" y="64" width="800" height="800" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur" />
                </filter>
                <linearGradient id="cld_m_paint0" x1="375" y1="-16.9394" x2="-66.6674" y2="39.7691" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#02102C" />
                  <stop offset="1" stopColor="#112244" />
                </linearGradient>
                <linearGradient id="cld_m_paint1" x1="336.884" y1="360.195" x2="339.506" y2="120.051" gradientUnits="userSpaceOnUse">
                  <stop offset="0.325638" stopColor="white" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="cld_m_paint2" x1="372.84" y1="1019.42" x2="376.294" y2="567.487" gradientUnits="userSpaceOnUse">
                  <stop offset="0.0301665" stopColor="white" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
                <clipPath id="cld_m_clip0">
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
              <span>Cloud Development</span>
            </nav>
            <h1 className={styles.heroTitle}>
              Custom <span className={styles.accent}>cloud development</span> for scalable, AI-ready products
            </h1>
            <p className={styles.heroDesc}>
              Nexterse designs, migrates, and builds cloud platforms that scale with demand, stay secure, and are ready for AI. We architect cloud-native systems, move legacy workloads to AWS, Azure, or Google Cloud, and prepare your data and infrastructure for copilots, retrieval, automation, and model-driven features.
            </p>
            <div className={styles.heroActions}>
              <a href="#get-modal-popup" className={`btn btn-accent ${styles.heroBtn}`}>
                Book Free Consultation
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

      

      <CloudArticleLayout>
        <AipocLogos />

        {/* ── Benefits ─────────────────────────────────────────────────── */}
        <section id="cloud-benefits" className={styles.benefitSection}>
          <div className="container">
            <h2 className={styles.benefitTitle}>
              Why build on the cloud with <span className={styles.accent}>Nexterse</span>?
            </h2>
            <p className={styles.benefitDesc}>
              Our team builds and migrates cloud platforms for companies across industries and regions. We choose the cloud model and services based on business logic, scale, compliance constraints, and long-term run cost.
              <br />
              We use our ADLC alongside a well-architected cloud process. We define the workload, prepare the data and infrastructure, set evaluation and cost criteria, and add monitoring. This reduces rework and makes it easier to move AI features from PoC to production.
            </p>
            <div className={styles.benefitStats}>
              {[
                {
                  icon: "/cloud/01_Less-time-or-cost.svg",
                  stat: "30%",
                  title: "less time to market",
                  desc: "with cloud-native development",
                },
                {
                  icon: "/cloud/03_AI-consulting-03.svg",
                  stat: "40%",
                  title: "lower infrastructure cost",
                  desc: "through cloud optimization & FinOps",
                },
                {
                  icon: "/cloud/03_Audit-rescue-mission-1.svg",
                  stat: "99.9%",
                  title: "uptime and availability",
                  desc: "with resilient cloud architecture",
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
        <section id="cloud-services" className={`${styles.blockDark} ${styles.serviceBlock}`}>
          <div className="container">
            <h2 className={styles.svcTitle}>
              Cloud development <span className={styles.accent}>services</span>
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
                    {tab.linkLabel && (
                      <a href={tab.href} className={styles.tabPanelLink}>
                        {tab.linkLabel}
                        <span className={styles.linkArrow} aria-hidden="true" />
                      </a>
                    )}
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
        <section id="cloud-solutions" className={`${styles.blockLight} ${styles.solutionsBlock}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>
              Cloud <span className={styles.accent}>solutions</span> we build
            </h2>
            <p className={styles.sectionDesc}>
              We build cloud solutions tailored to specific business needs. We consider workloads, data structure, access rights, compliance, and integrations. If a project requires AI, we build it into the architecture from the start: we define scenarios, restrict data access, and establish quality, cost, and control rules.
            </p>
            <div className={styles.vertTabsWrap}>
              <div className={styles.vertTabList} role="tablist" aria-label="Cloud solutions">
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
        <div className={`${styles.inlineCta} ${styles.cloudGradientCta}`}>
          <div className="container">
            <div className={styles.inlineCtaInner}>
              <div>
                <h2 className={styles.inlineCtaTitle}>Get Your Free Consultation</h2>
                <p className={styles.inlineCtaDesc}>Unlock the potential of scalable cloud solutions today!</p>
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
                  icon: "/cloud/03_Generative-AI-integration-02.svg",
                  title: "Cloud AI & ML services",
                  desc: "We integrate managed cloud AI — language models, retrieval, classifiers, and automation flows — into products where they support a defined business task.",
                  linkLabel: "AI integration on the cloud",
                },
                {
                  icon: "/cloud/03_Zero-Data-Leakage-03.svg",
                  title: "Zero-leakage security (RBAC)",
                  desc: "We enforce role-based access control and strict data boundaries so users, services, and AI features only access what they are allowed to use.",
                  linkLabel: null,
                },
                {
                  icon: "/cloud/03_LLM-agentic-architecture-design-03.svg",
                  title: "Cloud-native microservices",
                  desc: "We structure services so components — including AI — can be added, scaled, or updated independently without disrupting the core platform.",
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
        <section id="cloud-process" className={`${styles.blockDark} ${styles.processBlock} ${styles.cloudGradientBlock}`}>
          <div className="container">
            <h2 className={styles.sectionTitleWhite}>
              Cloud development <span className={styles.accent}>process</span>
            </h2>
            <p className={styles.sectionDescWhite}>
              We run SDLC and ADLC as one process, so the cloud platform and its AI layer are scoped, designed, built, migrated, tested, and released together.
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
        <div id="cloud-cases">
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
              Comprehensive multi-layer <span className={styles.accent}>cloud security</span> measures
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
        <section id="cloud-tech-stack" className={styles.techStackSection}>
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
          </div>
        </section>

        {/* ── Engagement Models ─────────────────────────────────────────── */}
        <div id="cloud-engagement-models" className={styles.engagementWrap}>
          <div className="container">
            <h2 className={styles.sectionTitleWhite}>
              Cloud development <span className={styles.accent}>engagement models</span>
            </h2>
            <p className={styles.sectionDescWhite}>
              Depending on your business needs, project scope, and team structure, we offer three flexible cooperation models for our cloud development services.
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
        <section id="cloud-industries" className={`${styles.blockLight} ${styles.industriesBlock}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>
              <span className={styles.accent}>Industry</span>-specific cloud development
            </h2>
            <p className={styles.sectionDesc}>
              We specialize in developing multi-integrated, easily customizable, and fully controllable cloud solutions. Where the use case supports it, we add AI for search, classification, and forecasting on top of scalable cloud data.
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
        <section id="cloud-approach" className={`${styles.blockWhite} ${styles.approachBlock}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>
              Our cloud development <span className={styles.accent}>approach</span>
            </h2>
            <p className={styles.sectionDesc}>
              We run cloud development and migration through a structured process that covers scope, team setup, cost control, and post-launch operations. When AI is part of the product, we extend SDLC with ADLC, so use case design, data preparation, evaluation, and rollout are handled inside the same process.
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
        <div id="cloud-faq">
          <ServicesFaqBlock items={CLOUD_FAQ} />
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
                    { text: "Enterprise software ", last: "development", href: "/services/enterprise-software-development" },
                    { text: "Custom software product ", last: "development", href: "/services/custom-software-development" },
                    { text: "Web app ", last: "development", href: "/services/web-app-development" },
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
                    { text: "Guides & checklists ", last: "library", href: "/library" },
                    { text: "Free ", last: "whitepapers", href: "/whitepapers" },
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
        <ServicesBlogSection featured={CLOUD_BLOG_FEATURED} sidePosts={CLOUD_BLOG_SIDE} />
      </CloudArticleLayout>
    </>
  );
}
