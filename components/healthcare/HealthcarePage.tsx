"use client";

import Image from "next/image";
import CaseCards, { type CaseCard } from "@/components/home/CaseCards";
import ServicesReviewSlider from "@/components/services/ServicesReviewSlider";
import ServicesAchievements from "@/components/services/ServicesAchievements";
import ServicesFaqBlock, { type FaqItem } from "@/components/services/ServicesFaqBlock";
import LetsStart from "@/components/home/LetsStart";
import AdlcBlog, { type AdlcFeaturedPost, type AdlcBlogPost } from "@/components/adlc/AdlcBlog";
import HealthcareArticleLayout from "./HealthcareArticleLayout";
import styles from "./HealthcarePage.module.css";

// ─── Hero compliance logos ────────────────────────────────────────────────────
const HERO_LOGOS = [
  { src: "/healthcare-development/05_pci.svg", alt: "PCI badge" },
  { src: "/healthcare-development/05_owasp.svg", alt: "OWASP badge" },
  { src: "/healthcare-development/05_iso.svg", alt: "ISO compliance badge" },
  { src: "/healthcare-development/05_hipaa.svg", alt: "HIPAA badge" },
  { src: "/healthcare-development/05_gdpr.svg", alt: "GDPR badge" },
  { src: "/healthcare-development/05_fisma.svg", alt: "FISMA compliance badge" },
];

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

// ─── Cases (5) ────────────────────────────────────────────────────────────────
const HC_CASES: CaseCard[] = [
  {
    banner: "/healthcare-development/10_Cover-2-1.png",
    name: "Dental Imaging AI",
    title: "AI patient-flow platform for dental imaging",
    text: "A HIPAA-aligned AI platform for a dental imaging provider that reduced wait times by 37%, increased daily throughput by 22%, and lowered no-shows by 29%.",
    href: "/portfolio/hipaa-compliant-ai-powered-patient-management-platform-for-a-dental-imaging-provider",
    tags: ["AI inside", "Enterprise"],
  },
  {
    banner: "/healthcare-development/08_cover.png",
    name: "HRV Tracking",
    title: "Heart rate variability tracking IoT application",
    text: "Smart lightbulb integration for an HRV biofeedback app that replaces abstract score displays with real-time color feedback – users reach target coherence states ~35% more consistently.",
    href: "/portfolio/heart-rate-variability-tracking-iot-application",
    tags: ["IoT"],
  },
  {
    banner: "/healthcare-development/10_cover-img-1-1.png",
    name: "Glucose Monitoring",
    title: "Mobile application for 24/7 blood glucose monitoring",
    text: "Turned a wearable glucose sensor into a complete market-ready product – a HIPAA-compliant iOS and Android app that cuts glucose threshold detection time by up to 60% compared to manual scheduled checks.",
    href: "/portfolio/real-time-blood-glucose-monitoring-app",
    tags: ["IoT"],
  },
  {
    banner: "/healthcare-development/09_cover-img-1.png",
    name: "Health Monitoring",
    title: "Adaptive health monitoring app with 20,000+ downloads",
    text: "A mobile health app with 98% user satisfaction and ~65% program completion rate, delivering real-time blood pressure and pulse monitoring through a smart cuff across five wellness program categories.",
    href: "/portfolio/iot-power-mobile-app-for-wellness-programs",
    tags: ["IoT", "Startups"],
  },
  {
    banner: "/healthcare-development/01_cover-2.png",
    name: "Clinical Trials",
    title: "Clinical trial matching platform for enhanced patient recruitment",
    text: "AI-powered patient matching for cancer clinical trials, delivered in 3 months – cutting clinician eligibility screening time by 70%. Mobile app for patients, sponsor dashboard for trial management.",
    href: "/portfolio/clinical-trial-matching-platform",
    tags: ["AI inside", "Startups"],
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
const HC_BLOG_FEATURED: AdlcFeaturedPost = {
  href: "/blog/top-healthcare-software-development-companies",
  title: "Top Healthcare Software Development Companies for HIPAA & FHIR Projects",
  image: "/healthcare-development/08_Top-Healthcare-Providers-1024x578.png",
  imageAlt: "Top Healthcare Providers",
  readTime: "47 mins",
  date: "November 25, 2025",
};

const HC_BLOG_SIDE: AdlcBlogPost[] = [
  {
    href: "/blog/top-iot-devices-transforming-the-healthcare-landscape",
    title: "Top IoT Devices Transforming Healthcare Landscape in 2026",
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
  { title: "Interoperability with medical systems", text: "We integrate with EHRs, PACS, billing platforms, IoMT devices, patient portals, and internal healthcare systems. The integration path depends on the data format, API access, security model, and target workflow." },
  { title: "Security built into the system design", text: "Access control, encryption, PHI redaction, audit logging, and deployment boundaries are planned early. This reduces rework later, especially when the system touches patient records or clinical decision support." },
  { title: "Healthcare and IoT delivery experience", text: "Our team has worked on patient management, remote monitoring, device integration, and healthcare analytics systems. See our case studies with relevant projects." },
  { title: "Documentation for regulated environments", text: "We define requirements, risks, test logic, data flows, and release records in a reviewable format. This gives healthcare, security, and compliance teams a structured way to assess how the system works." },
  { title: "Controlled AI behavior", text: "We add retrieval limits, source references, confidence checks, fallback logic, and human approval where required by the workflow. AI output should stay traceable, reviewable, and bounded by the system’s intended use." },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function HealthcarePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroInner}>
            <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
              <a href="/">Home</a>
              <a href="/services">Industries</a>
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

      {/* ── Compliance logos ─────────────────────────────────────────────── */}
      <HealthcareArticleLayout>
        <section className={styles.logosSection}>
          <div className="container">
            <div className={styles.logosWrapper}>
              {HERO_LOGOS.map((logo) => (
                <Image
                  key={logo.src}
                  src={logo.src}
                  alt={logo.alt}
                  width={98}
                  height={64}
                  className={styles.complianceLogo}
                />
              ))}
            </div>
          </div>
        </section>

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
                src="/healthcare-development/09_pexels-alena-darmel-7710078-683x1024.jpg"
                alt="Healthcare software team collaborating on a project"
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
            cards={HC_CASES}
            windowed
          />
        </div>

        {/* ── Reviews ────────────────────────────────────────────────────── */}
        <ServicesReviewSlider />

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

        {/* ── FAQ Video ──────────────────────────────────────────────────── */}
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

        {/* ── Let's Start ────────────────────────────────────────────────── */}
        <LetsStart />

        {/* ── FAQ ────────────────────────────────────────────────────────── */}
        <div id="hc-faq">
          <ServicesFaqBlock items={HC_FAQ} />
        </div>

        {/* ── Awesome stories ────────────────────────────────────────────── */}
        <AdlcBlog featured={HC_BLOG_FEATURED} sidePosts={HC_BLOG_SIDE} />
      </HealthcareArticleLayout>
    </>
  );
}
