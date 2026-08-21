"use client";

import Image from "next/image";
import CaseCards from "@/components/home/CaseCards";
import ServicesReviewSlider from "@/components/services/ServicesReviewSlider";
import ServicesAchievements from "@/components/services/ServicesAchievements";
import ServicesFaqBlock, { type FaqItem } from "@/components/services/ServicesFaqBlock";
import LetsStart from "@/components/home/LetsStart";
import AwesomeStories from "@/components/blog/AwesomeStories";
import AipocLogos from "@/components/aipoc/AipocLogos";
import ArticleLayout from "@/components/shared/ArticleLayout";
import styles from "./HealthcarePage.module.css";

// ─── Processes we automate (4 audience cards) ─────────────────────────────────
const AUDIENCES = [
  {
    title: "For healthcare providers",
    bullets: [
      "AI copilots",
      "Ambient documentation tools",
      "Patient portals",
      "Remote patient monitoring",
      "Clinical workflow automation",
      "EHR-connected systems",
    ],
  },
  {
    title: "For digital health companies",
    bullets: [
      "Telehealth platforms",
      "AI triage tools",
      "Patient engagement apps",
      "Medical data retrieval systems",
      "HIPAA-aware product architecture",
    ],
  },
  {
    title: "For medical devices and IoMT teams",
    bullets: [
      "Connected device platforms",
      "Edge AI analytics",
      "Device data pipelines",
      "Monitoring dashboards",
      "Secure integrations with clinical systems",
    ],
  },
  {
    title: "For healthcare operations teams",
    bullets: [
      "Revenue cycle workflows",
      "Claim review tools",
      "Prior authorization support",
      "Coding assistance",
      "Internal automation for administrative processes",
    ],
  },
];

// ─── Services (6 dark cards) ──────────────────────────────────────────────────
const SERVICES = [
  {
    title: "Agentic EHR workflows",
    paragraphs: [
      "We build AI workflow layers for existing EHR environments. These systems can summarize patient histories, prepare visit context, extract data from clinical notes, draft structured documentation, and route tasks to the right user for review.",
      "The integration approach depends on the target system, available APIs, data access model, and internal governance rules. We can work with FHIR, SMART on FHIR, HL7, vendor-specific APIs, or custom middleware when the environment requires it.",
    ],
  },
  {
    title: "Medical RAG and clinical knowledge retrieval",
    paragraphs: [
      "We build retrieval systems that connect clinicians and internal teams to approved clinical content, patient history, protocols, policies, and structured records.",
      "A Medical RAG pipeline retrieves relevant context before the model drafts an answer. The system can show source references, restrict access by role, log requests, and send high-risk outputs for human review.",
    ],
  },
  {
    title: "Ambient clinical documentation",
    paragraphs: [
      "We develop ambient clinical documentation tools for in-person and telehealth encounters.",
      "The system can capture a consultation transcript, identify medical entities, structure the encounter, and prepare a SOAP note or visit summary for clinician review. The final note stays under the clinician's control before it enters the EHR.",
    ],
  },
  {
    title: "AI-driven revenue cycle workflows",
    paragraphs: [
      "We build AI middleware for coding support, claim review, prior authorization workflows, and denial-risk checks.",
      "The system can read clinical documentation, identify missing fields, suggest ICD-10 or CPT code candidates, compare the claim against payer rules, and flag issues before submission. This helps teams reduce preventable errors, speed up reviews, and identify where denials tend to recur.",
    ],
  },
  {
    title: "Digital front door and AI triage portals",
    paragraphs: [
      "We build patient-facing portals for intake, symptom collection, appointment routing, remote monitoring, and care-team communication.",
      "AI can structure patient input, ask approved follow-up questions, identify missing intake data, and route cases in accordance with the organization's rules. For diagnosis or treatment-related guidance, the system should use controlled clinical logic and human review.",
    ],
  },
  {
    title: "IoMT and edge AI for patient monitoring",
    paragraphs: [
      "We design IoMT systems that process device data near the source when latency, connectivity, safety requirements, and uptime make cloud-only processing a poor fit.",
      "Edge models can run on local gateways or supported devices to detect anomalies in ECG, SpO2, glucose, movement, and other telemetry data. Cloud systems can still handle population-level analysis, reporting, and long-term trend detection.",
    ],
  },
];

// ─── Process (6 steps, paragraph descriptions) ────────────────────────────────
const PROCESS_STEPS = [
  {
    title: "Discovery",
    text: "The healthcare software development process starts with a comprehensive analysis. We examine business goals, clinical workflows, regulatory and data privacy requirements (such as HIPAA or GDPR), and patient care objectives. If needed, we run a proof of concept and prepare documents that will lay the foundation for further project development, including functional specifications, risk assessments, and compliance guidelines that set the direction for the project.",
  },
  {
    title: "Design & Architecture",
    text: "In the next stage of our healthcare development services, we design user interfaces and define the software architecture based on scalability, interoperability (FHIR/HL7), security protocols, and system integration requirements.",
  },
  {
    title: "Development",
    text: "Guided by the artifacts created in the discovery and design phases, our engineering team builds the software using agile methodology. We follow healthcare development best practices and strict coding standards to ensure modularity, maintainability, and compliance with healthcare regulations.",
  },
  {
    title: "Testing and QA",
    text: "We conduct comprehensive testing that may include manual and automated functional tests, integration tests, security and vulnerability assessments, usability testing, performance evaluations, and regulatory compliance checks (e.g., IEC 62304, ISO 13485). All testing is tailored to project needs and verified with the Client to ensure the solution meets expectations from both user and clinical perspectives.",
  },
  {
    title: "Integrations",
    text: "We ensure seamless integration of your solution with third-party healthcare systems such as EHRs, HIEs, LIS, RIS, PACS, and external APIs, ensuring secure exchange of sensitive data.",
  },
  {
    title: "Support and maintenance",
    text: "Our development team continually fine-tunes the mHealth software, provides upgrades, and offers technical support for as long as you require our expertise and guidance. We proactively monitor system health, fix critical issues, implement enhancements, and ensure that the software remains compliant and secure.",
  },
];

// ─── FAQ (from clone) ─────────────────────────────────────────────────────────
const HC_FAQ: FaqItem[] = [
  {
    question: "How do you reduce hallucination risk in a medical AI copilot?",
    answer: "We do not rely solely on the model's answer from general training. We build the copilot around approved clinical sources, patient-specific EHR context, retrieval controls, source references, output validation, and human review for high-risk cases. For some workflows, we also add evaluator models that compare the answer against retrieved sources before the response reaches the user. This reduces unsupported claims, but it does not remove the need for clinical governance.",
  },
  {
    question: "Can we use generative AI with patient records under HIPAA?",
    answer: "Yes, with the right legal, technical, and operational controls. The deployment must account for PHI access, vendor agreements, encryption, retention rules, audit trails, role-based access, and breach response. In many cases, this means using a HIPAA-eligible cloud service under a BAA, deploying a private model, or redacting PHI before model processing.",
  },
  {
    question: "How do you integrate predictive models into Epic or Oracle Health?",
    answer: "We start with the workflow and data access model. Depending on the environment, we can use SMART on FHIR, FHIR APIs, HL7 interfaces, bulk data export, or vendor-specific integration paths. The model should not sit outside the clinical workflow if clinicians need to act on its output. We design alerts, summaries, or recommendations so they can appear in the user's existing system when the EHR and governance model allow it.",
  },
  {
    question: "What is the difference between cloud AI and edge AI for IoMT?",
    answer: "Cloud AI works well for cross-patient analytics, long-term trends, model training, and reporting. Edge AI works better when latency, uptime, or local response matters. For example, a local gateway can analyze device telemetry and trigger an alert even when the cloud connection is unstable.",
  },
  {
    question: "Can Nexterse LLC build FDA-regulated healthcare AI software?",
    answer: "We can build software with the documentation, traceability, risk controls, testing records, and development discipline needed for regulated healthcare products. Whether the product needs FDA submission depends on its intended use, claims, users, and clinical risk. FDA guidance on clinical decision support software and AI-enabled medical devices should be assessed early, before architecture and page claims are finalized.",
  },
];

// ─── Awesome stories (blog, clone content) ────────────────────────────────────
const HC_BLOG_FEATURED = {
  href: "/blog/top-healthcare-software-development-companies",
  title: "Top Healthcare Software Development Companies for HIPAA & FHIR Projects",
  image: "/healthcare-development/08_Top-Healthcare-Providers-1024x578.png",
  imageAlt: "Top Healthcare Providers",
  readTime: "47 mins",
  date: "November 25, 2025",
};

const HC_BLOG_SIDE = [
  {
    href: "/blog/top-ai-tools-transforming-the-healthcare-landscape",
    title: "Top AI Tools Transforming Healthcare Landscape in 2026",
    readTime: "24 mins",
    date: "November 29, 2024",
  },
  {
    href: "/blog/software-outsourcing-rates-overview",
    title: "Software Outsourcing Costs [2026 Updated] – Overview",
    readTime: "22 mins",
    date: "December 23, 2024",
  },
  {
    href: "/blog/best-software-developers-in-eastern-europe",
    title: "Top 15 Software Developers in Eastern Europe in 2026",
    readTime: "43 mins",
    date: "February 28, 2026",
  },
];

// ─── Security & compliance in healthcare ──────────────────────────────────────
const HC_COMPLIANCE = [
  { head: "HIPAA compliance", rest: "protecting ePHI through access controls, multi-factor authentication, and encryption." },
  { head: "Regulatory mastery", rest: "we build software that complies with GDPR, HL7, FHIR, ISO 27001, and DICOM standards." },
  { head: "Data encryption", rest: "securing sensitive data both at rest and in transit." },
  { head: "Audit trails", rest: "logging all access and modifications to maintain full traceability of actions within the system." },
  { head: "Risk assessments", rest: "regularly identifying and mitigating system vulnerabilities." },
  { head: "Data backup and recovery", rest: "ensuring software availability and integrity with tested recovery plans." },
  { head: "Security audits", rest: "performing frequent internal and external vulnerability checks to keep the healthcare software secure." },
  { head: "Training", rest: "educating users and admins on secure data handling practices." },
];

// ─── Why Nexterse LLC (services-results) ───────────────────────────────────────
const HC_WHY = [
  { title: "Healthcare-specific AI architecture", text: "AI workflows are built around PHI controls, auditability, EHR context, source limits, and clinical review. The model’s role is defined before development starts, so the system supports the workflow instead of adding another unmanaged tool." },
  { title: "Interoperability with medical systems", text: "We integrate with EHRs, PACS, billing platforms, patient portals, and internal healthcare systems. The integration path depends on the data format, API access, security model, and target workflow." },
  { title: "Security built into the system design", text: "Access control, encryption, PHI redaction, audit logging, and deployment boundaries are planned early. This reduces rework later, especially when the system touches patient records or clinical decision support." },
  { title: "Healthcare and applied AI delivery experience", text: "Our team has worked on patient management, remote monitoring, device integration, and healthcare analytics systems. See our case studies with relevant projects." },
  { title: "Documentation for regulated environments", text: "We define requirements, risks, test logic, data flows, and release records in a reviewable format. This gives healthcare, security, and compliance teams a structured way to assess how the system works." },
  { title: "Controlled AI behavior", text: "We add retrieval limits, source references, confidence checks, fallback logic, and human approval where required by the workflow. AI output should stay traceable, reviewable, and bounded by the system’s intended use." },
];

// ─── Component ────────────────────────────────────────────────────────────────
const CONTENTS = [
  { href: "#hc-processes", label: "Processes we automate" },
  { href: "#hc-services", label: "Services" },
  { href: "#hc-cases", label: "Case studies & reviews" },
  { href: "#hc-process", label: "Process" },
  { href: "#hc-faq-video", label: "FAQ Video" },
  { href: "#hc-faq", label: "FAQ" },
];

export default function HealthcarePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroBgWrapper} aria-hidden="true">
          <div className={styles.heroBgDesktop}>
            <svg preserveAspectRatio="xMidYMid slice" className={styles.heroBgSvg} width="1920" height="703" viewBox="0 0 1920 703" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="1920" height="703" fill="url(#hc_d_paint0)" />
              <g clipPath="url(#hc_d_clip0)">
                <rect width="1920" height="703" fill="url(#hc_d_paint0)" />
                <g opacity="0.08">
                  <path fillRule="evenodd" clipRule="evenodd" d="M-845.628 744.916L-688.82 -101.049L-883.335 -131.999L-1166 744.916L-845.628 744.916ZM-78.6641 352.883L-10.577 744.917L289.163 744.916L150.925 377.643L-78.6641 352.883ZM-588.25 744.917L-466.518 -82.4796L412.996 28.9404L825.646 744.916L544.475 744.916L309.265 237.337L-305.016 183.69L-267.877 744.916L-588.25 744.917Z" fill="#3CC4E5" />
                </g>
                <g opacity="0.08">
                  <path fillRule="evenodd" clipRule="evenodd" d="M874.988 -647.181L1388.56 -730.869L1655.22 -246.923L1928.98 -316.113L1484.69 -947.631L656.166 -844.49L599.943 19.784L892.548 -54.1681L874.988 -647.181ZM1254.33 -550.397L1420.26 -187.351L1127.66 -113.399L1098.77 -529.125L1254.33 -550.397ZM1687.01 -978.365L1877.46 -996.427L2419.14 -439.644L2162.34 -374.741L1687.01 -978.365Z" fill="#3CC4E5" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M892.663 -53.7166L1231.16 682.73L1060.64 755.898L600.059 20.2355L892.663 -53.7166ZM1683.65 127.297L1655.34 -246.473L1929.1 -315.663L1887.62 51.6869L1683.65 127.297ZM1127.73 -113.128L1429.9 614.455L2207.46 309.673L2419.08 -439.5L2162.28 -374.597L2064.62 143.284L1515.96 334.075L1420.34 -187.08L1127.73 -113.128Z" fill="#3CC4E5" />
                </g>
                <g filter="url(#hc_d_f0)">
                  <ellipse cx="960" cy="401.5" rx="590" ry="289.5" fill="url(#hc_d_paint1)" />
                </g>
                <g opacity="0.32" filter="url(#hc_d_f1)">
                  <circle cx="2010" cy="205" r="460" fill="#3CC4E5" />
                </g>
                <g opacity="0.32" filter="url(#hc_d_f2)">
                  <circle cx="19" cy="691" r="460" fill="#3CC4E5" />
                </g>
              </g>
              <defs>
                <filter id="hc_d_f0" x="70" y="-188" width="1780" height="1179" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="135" result="effect1_foregroundBlur" />
                </filter>
                <filter id="hc_d_f1" x="1050" y="-755" width="1920" height="1920" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="136" result="effect1_foregroundBlur" />
                </filter>
                <filter id="hc_d_f2" x="-941" y="-269" width="1920" height="1920" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="136" result="effect1_foregroundBlur" />
                </filter>
                <linearGradient id="hc_d_paint0" x1="1920" y1="-21.3031" x2="114.684" y2="922.394" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#02102C" />
                  <stop offset="1" stopColor="#112244" />
                </linearGradient>
                <linearGradient id="hc_d_paint1" x1="1550" y1="94.4545" x2="323.866" y2="572.726" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#02102C" />
                  <stop offset="1" stopColor="#112244" />
                </linearGradient>
                <clipPath id="hc_d_clip0">
                  <rect width="1920" height="703" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className={styles.heroBgMobile}>
            <svg preserveAspectRatio="xMidYMid slice" className={styles.heroBgSvg} width="375" height="559" viewBox="0 0 375 559" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#hc_m_clip0)">
                <rect width="375" height="559" fill="url(#hc_m_paint0)" />
                <g opacity="0.48" filter="url(#hc_m_f0)">
                  <circle cx="254" cy="592" r="200" fill="#3CC4E5" />
                </g>
                <g opacity="0.48" filter="url(#hc_m_f1)">
                  <circle cx="450" cy="464" r="200" fill="#3CC4E5" />
                </g>
                <g opacity="0.04">
                  <path fillRule="evenodd" clipRule="evenodd" d="M494.863 277.841L245.42 299.352L178.085 556.545L42.2216 556.545L175.021 209.568L573.679 160L701.803 556.545L556.587 556.545L494.863 277.841ZM329.311 367.713L294.708 556.633L439.924 556.633L404.386 359.296L329.311 367.713ZM77.0156 219.084L-13.9575 233.113L-201 556.708L-73.5534 556.708L77.0156 219.084Z" fill="url(#hc_m_paint1)" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M556.585 556.774L485.509 940.226L573.677 954.254L701.801 556.774L556.585 556.774ZM208.943 734.474L178.082 556.777L42.2183 556.777L104.877 723.251L208.943 734.474ZM439.928 556.779L384.75 931.813L-13.9071 881.31L-200.949 556.779L-73.5029 556.779L33.1111 786.85L311.546 811.166L294.712 556.779L439.928 556.779Z" fill="url(#hc_m_paint2)" />
                </g>
              </g>
              <defs>
                <filter id="hc_m_f0" x="-146" y="192" width="800" height="800" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur" />
                </filter>
                <filter id="hc_m_f1" x="50" y="64" width="800" height="800" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur" />
                </filter>
                <linearGradient id="hc_m_paint0" x1="375" y1="-16.9394" x2="-66.6674" y2="39.7691" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#02102C" />
                  <stop offset="1" stopColor="#112244" />
                </linearGradient>
                <linearGradient id="hc_m_paint1" x1="336.884" y1="360.195" x2="339.506" y2="120.051" gradientUnits="userSpaceOnUse">
                  <stop offset="0.325638" stopColor="white" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="hc_m_paint2" x1="372.84" y1="1019.42" x2="376.294" y2="567.487" gradientUnits="userSpaceOnUse">
                  <stop offset="0.0301665" stopColor="white" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
                <clipPath id="hc_m_clip0">
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
              <span>Healthcare software development</span>
            </nav>
            <h1 className={styles.heroTitle}>
              Healthcare <span className={styles.accent}>AI software</span> development services
            </h1>
            <p className={styles.heroDesc}>
              Nexterse LLC designs and develops HIPAA-aware healthcare AI systems for clinical, operational, patient-facing, and connected-device workflows. We build them with secure architecture, controlled data access, auditability, fallback logic, role-based permissions, and human review from the first design stage.
            </p>
            <ul className={styles.heroPoints}>
              <li>HIPAA-aware AI system design</li>
              <li>EHR, FHIR, HL7, and DICOM integrations</li>
              <li>Medical RAG with approved source control</li>
              <li>Ambient documentation and EHR copilots</li>
              <li>IoMT and edge-based patient monitoring</li>
              <li>PHI controls, audit trails, fallback logic, and human review</li>
            </ul>
            <div className={styles.heroActions}>
              <a href="#get-modal-popup" className={`btn btn-accent ${styles.heroBtn}`}>
                Book free consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      <ArticleLayout contents={CONTENTS} ariaLabel="Healthcare page contents">
        <AipocLogos />

        {/* ── Processes we automate ──────────────────────────────────────── */}
        <section id="hc-processes" className={`${styles.blockLight} ${styles.healthcareWorkflowBlock}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>
              Healthcare AI software development for clinical and operational <span className={styles.accent}>workflows</span>
            </h2>
            <p className={styles.sectionDesc}>
              Healthcare AI projects need more than a model connected to medical data. They need the right data boundaries, integration points, user permissions, review steps, and release controls. Nexterse LLC builds healthcare AI software for providers, digital health companies, medical device teams, and healthcare operations teams. We design systems around clinical workflows, regulatory limits, interoperability requirements, and the way healthcare teams already work.
            </p>
            <div className={styles.hcAudienceGrid}>
              {AUDIENCES.map((a) => (
                <div key={a.title} className={styles.hcAudienceCard}>
                  <h3 className={styles.hcAudienceTitle}>{a.title}</h3>
                  <ul className={styles.hcAudienceBullets}>
                    {a.bullets.map((b) => <li key={b}>{b}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Services (dark cards) ──────────────────────────────────────── */}
        <section id="hc-services" className={`${styles.blockDark} ${styles.healthcareServicesBlock}`}>
          <div className="container">
            <h2 className={styles.sectionTitleWhite}>
              Healthcare AI <span className={styles.accent}>software</span> we develop
            </h2>
            <div className={styles.solutionsGrid}>
              {SERVICES.map((s) => (
                <div key={s.title} className={styles.hcSolutionItem}>
                  <h3 className={styles.hcSolutionTitle}>{s.title}</h3>
                  {s.paragraphs.map((p) => (
                    <p key={p} className={styles.hcSolutionText}>{p}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Security and compliance in healthcare ──────────────────────── */}
        <section id="hc-security" className={`${styles.blockLight} ${styles.healthcareComplianceBlock}`}>
          <div className="container">
            <h2 className={styles.sectionTitle} style={{ textAlign: "center" }}>
              <span className={styles.accent}>Security</span> and compliance in healthcare
            </h2>
            <ul className={styles.hcComplianceList}>
              {HC_COMPLIANCE.map((c) => (
                <li key={c.head}><strong>{c.head}</strong> – {c.rest}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── CTA: Request a Project Estimate ────────────────────────────── */}
        <div className={`${styles.inlineCta} ${styles.projectEstimateCta}`}>
          <div className="container">
            <div className={styles.inlineCtaInner}>
              <div>
                <h2 className={styles.inlineCtaTitle}>Request a Project Estimate</h2>
                <p className={styles.inlineCtaDesc}>Receive a detailed cost and time estimate based on your requirements. No strings attached.</p>
              </div>
              <a href="#get-modal-popup" className={`btn btn-accent ${styles.inlineCtaBtn}`}>Book a call</a>
            </div>
          </div>
        </div>

        {/* ── Why Nexterse LLC (services-results) ────────────────────────── */}
        <section id="hc-why" className={`${styles.blockWhite} ${styles.healthcareWhyBlock}`}>
          <div className="container">
            <h2 className={styles.sectionTitle} style={{ textAlign: "center" }}>
              <span className={styles.accent}>Why</span> Nexterse LLC healthcare AI software development services
            </h2>
            <div className={styles.hcSplit}>
              <div className={styles.hcWhyList}>
                {HC_WHY.map((w) => (
                  <div key={w.title}>
                    <p className={styles.hcWhyItemTitle}>{w.title}</p>
                    <p className={styles.hcWhyItemText}>{w.text}</p>
                  </div>
                ))}
              </div>
              <Image
                src="/esd/data-readiness.jpg"
                alt="Why Nexterse LLC healthcare AI software development services"
                width={683}
                height={1024}
                className={styles.hcSplitImg}
              />
            </div>
          </div>
        </section>

        {/* ── Awards & Recognitions ──────────────────────────────────────── */}
        <ServicesAchievements />

        {/* ── CTA: Secure Your Patient Data ──────────────────────────────── */}
        <div className={`${styles.inlineCta} ${styles.projectEstimateCta}`}>
          <div className="container">
            <div className={styles.inlineCtaInner}>
              <div>
                <h2 className={styles.inlineCtaTitle}>Secure Your Patient Data with Confidence</h2>
                <p className={styles.inlineCtaDesc}>Work with a team that builds HIPAA-compliant systems designed to protect sensitive health information.</p>
              </div>
              <a href="#get-modal-popup" className={`btn btn-accent ${styles.inlineCtaBtn}`}>Get in Touch</a>
            </div>
          </div>
        </div>

        {/* ── Case studies ───────────────────────────────────────────────── */}
        <div id="hc-cases">
          <CaseCards
            heading={<>Custom <span>healthcare software</span> we developed</>}
            windowed
          />
        </div>

        {/* ── Reviews ────────────────────────────────────────────────────── */}
        <ServicesReviewSlider primary="software" count={6} secondaryCount={1} />

        {/* ── CTA: Start Your Custom Healthcare Project ──────────────────── */}
        <div className={`${styles.inlineCta} ${styles.projectEstimateCta}`}>
          <div className="container">
            <div className={styles.inlineCtaInner}>
              <div>
                <h2 className={styles.inlineCtaTitle}>Start Your Custom Healthcare Project</h2>
                <p className={styles.inlineCtaDesc}>Tell us your idea and we’ll develop a secure, scalable, and compliant solution from the ground up.</p>
              </div>
              <a href="#get-modal-popup" className={`btn btn-accent ${styles.inlineCtaBtn}`}>Get in touch</a>
            </div>
          </div>
        </div>

        {/* ── Process ────────────────────────────────────────────────────── */}
        <section id="hc-process" className={`${styles.blockWhite} ${styles.healthcareProcessBlock}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>
              The <span className={styles.accent}>way</span> we develop healthcare software
            </h2>
            <div className={styles.processGrid}>
              {PROCESS_STEPS.map((step, i) => (
                <div key={step.title} className={styles.processStep}>
                  <div className={styles.processNum}>{i + 1}</div>
                  <div className={styles.processStepBody}>
                    <h3 className={styles.processStepTitle}>{step.title}</h3>
                    <p className={styles.processStepText}>{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Video — disabled until real Nexterse LLC YouTube video is linked
        <section id="hc-faq-video" className={styles.blockLight}>
          <div className="container">
            <h2 className={styles.sectionTitle}>
              <span className={styles.accent}>FAQ</span> about Nexterse LLC services
            </h2>
            <div className={styles.videoWrapper}>
              <iframe
                className={styles.videoFrame}
                src="https://www.youtube.com/embed/PbQKBrhN8Tw"
                title="Nexterse LLC FAQ"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>
        </section>
        */}

        {/* ── Let's Start ────────────────────────────────────────────────── */}
        <LetsStart />

        {/* ── FAQ ────────────────────────────────────────────────────────── */}
        <div id="hc-faq">
          <ServicesFaqBlock items={HC_FAQ} />
        </div>

        {/* ── Awesome stories ────────────────────────────────────────────── */}
        <AwesomeStories category="enterprise" />
      </ArticleLayout>
    </>
  );
}
