"use client";

import { useState } from "react";
import Image from "next/image";
import CaseCards from "@/components/home/CaseCards";
import ServicesReviewSlider from "@/components/services/ServicesReviewSlider";
import ServicesAchievements from "@/components/services/ServicesAchievements";
import ServicesFaqBlock, { type FaqItem } from "@/components/services/ServicesFaqBlock";
import LetsStart from "@/components/home/LetsStart";
import AwesomeStories from "@/components/blog/AwesomeStories";
import PredictiveHero from "./PredictiveHero";
import AipocLogos from "@/components/aipoc/AipocLogos";
import ArticleLayout from "@/components/shared/ArticleLayout";
import styles from "./PredictivePage.module.css";

// ─── Solutions we develop (8 cards) ───────────────────────────────────────────
const SOLUTIONS = [
  {
    icon: "/predictive-maintenance/04_Edge-AI-anomaly-detection-systems-03.svg",
    title: "Edge AI anomaly detection systems",
    desc: "We deploy machine learning models directly on industrial gateways to monitor vibration, acoustic, and thermal signals in real time.",
  },
  {
    icon: "/predictive-maintenance/04_Cloud-based-predictive-analytics-platforms-02.svg",
    title: "Cloud-based predictive analytics platforms",
    desc: "We build centralized AI platforms that aggregate telemetry across facilities and apply predictive models at scale.",
  },
  {
    icon: "/predictive-maintenance/04_Real-time-alerting-and-maintenance-orchestration-01.svg",
    title: "Real-time alerting and maintenance orchestration",
    desc: "We implement alert pipelines that trigger only on statistically significant anomalies and integrate directly into your existing workflows.",
  },
  {
    icon: "/predictive-maintenance/04_CMMS-and-ERP-integration-01.svg",
    title: "CMMS and ERP",
    desc: "We connect predictive models to your operational systems.",
  },
  {
    icon: "/predictive-maintenance/04_Remaining-useful-life-prediction-models-03.svg",
    title: "Remaining useful life (RUL) prediction models",
    desc: "We develop models that estimate how long a component can operate before failure.",
  },
  {
    icon: "/predictive-maintenance/04_Multi-modal-sensor-fusion-systems-02.svg",
    title: "Multi-modal sensor fusion systems",
    desc: "We combine data from vibration sensors, microphones, thermal cameras, and operational logs into a unified model.",
  },
  {
    icon: "/predictive-maintenance/04_Fleet-level-asset-monitoring-01.svg",
    title: "Fleet-level asset monitoring",
    desc: "We engineer systems that monitor thousands of assets across locations, prioritize maintenance based on business impact.",
  },
  {
    icon: "/predictive-maintenance/04_Custom-dashboards-and-operator-interfaces-01.svg",
    title: "Custom dashboards and operator interfaces",
    desc: "We build interfaces tailored to your workflows, from engineering dashboards to executive summaries.",
  },
];

// ─── Challenges (9 cards) ─────────────────────────────────────────────────────
const CHALLENGES = [
  {
    icon: "/predictive-maintenance/04_Unplanned-downtime-and-emergency-failures-02.svg",
    title: "Unplanned downtime and emergency failures",
    paragraphs: [
      "Failures surface at the moment of breakdown, leaving no room for planned intervention.",
      "We implement detection models that identify early deviations in equipment behavior, allowing maintenance teams to plan interventions ahead of failure and maintain production continuity.",
    ],
  },
  {
    icon: "/predictive-maintenance/04_Over-maintenance-driven-by-rigid-schedules-02.svg",
    title: "Over-maintenance driven by rigid schedules",
    paragraphs: [
      "Maintenance follows predefined intervals rather than actual equipment condition, increasing unnecessary service activity.",
      "We design condition-based systems that evaluate real-time equipment behavior and trigger maintenance only when it is operationally justified.",
    ],
  },
  {
    icon: "/predictive-maintenance/04_Limited-visibility-into-actual-equipment-condition-02.svg",
    title: "Limited visibility into actual equipment condition",
    paragraphs: [
      "Equipment performance is assessed without continuous, structured data, limiting the ability to track gradual changes.",
      "We establish a unified data layer across assets, enabling continuous monitoring and consistent evaluation of equipment condition.",
    ],
  },
  {
    icon: "/predictive-maintenance/04_The-rule-based-false-alarm-trap-03.svg",
    title: "The rule-based false alarm trap",
    paragraphs: [
      "Threshold-based monitoring produces alerts that are not aligned with how machines actually operate, reducing signal reliability.",
      "We deploy adaptive ML models that learn asset-specific behavior and generate context-aware alerts based on real operational patterns.",
    ],
  },
  {
    icon: "/predictive-maintenance/04_PdM-disconnected-from-maintenance-actions-02.svg",
    title: "PdM disconnected from maintenance actions",
    paragraphs: [
      "Predictive signals remain isolated from execution, requiring manual interpretation and follow-up.",
      "We connect detection outputs directly to maintenance workflows, linking signals with work orders, priorities, and scheduling systems.",
    ],
  },
  {
    icon: "/predictive-maintenance/04_The-brownfield-AI-challenge-04.svg",
    title: "The brownfield AI challenge",
    paragraphs: [
      "Existing equipment operates across mixed generations and protocols, limiting direct integration with modern systems.",
      "We design edge-based architectures that integrate with legacy infrastructure, extract operational data, and enable predictive capabilities without disrupting existing processes.",
    ],
  },
  {
    icon: "/predictive-maintenance/04_Over-maintenance-driven-by-rigid-schedules-03.svg",
    title: "Inefficient spare parts and maintenance planning",
    paragraphs: [
      "Uncertainty about when failures will occur forces companies to overstock spare parts or react too late when parts are unavailable. Both scenarios tie up capital and increase operational risk.",
    ],
  },
  {
    icon: "/predictive-maintenance/04_Limited-visibility-into-actual-equipment-condition-01.svg",
    title: "Subtle performance degradation goes unnoticed",
    paragraphs: [
      "Small changes in vibration, temperature, load, or efficiency often develop slowly and stay below alarm thresholds. Over time, these inefficiencies increase energy consumption, accelerate wear, and raise operating costs without obvious symptoms.",
    ],
  },
  {
    icon: "/predictive-maintenance/03_cost-and-infrastructure-estimate-03.svg",
    title: "Unpredictable cost and ownership of PdM systems",
    paragraphs: [
      "SMBs are cautious of PdM initiatives that become expensive to scale or require dedicated internal teams. Concerns about platform lock-in, rising subscription costs, and long-term support obligations often slow down or block adoption.",
    ],
  },
];

// ─── FAQ (7) ──────────────────────────────────────────────────────────────────
const PDM_FAQ: FaqItem[] = [
  {
    question: "How do you train a machine learning model if our machines haven't broken down recently (lack of failure data)?",
    answer: "This is the cold start problem in PdM. We do not wait for failures. We use unsupervised anomaly detection algorithms such as autoencoders. The model is trained for 2-4 weeks on normal operating behavior. If telemetry deviates from this baseline, the system flags it as an anomaly.",
  },
  {
    question: "If the factory loses internet connectivity, does the predictive maintenance system stop working?",
    answer: "No. We engineer offline-first edge AI. The quantized machine learning model runs directly on the local gateway. It continues monitoring, triggering local actions, and caching telemetry during outages. Data syncs with the cloud once connectivity is restored.",
  },
  {
    question: "If we connect our legacy manufacturing equipment to a cloud AI for predictive maintenance, how do we prevent hackers from accessing the factory floor?",
    answer: "We do not expose operational technology to the public internet. We implement unidirectional data architectures using secure edge gateways. Telemetry flows outward for analysis, while inbound commands are blocked. External access to PLCs is not possible.",
  },
  {
    question: "Should we use vibration sensors, acoustic monitors, or thermal cameras for AI predictive maintenance?",
    answer: "Relying on a single sensor creates blind spots. We implement multi-modal sensor fusion. Vibration detects mid-stage wear. Acoustic AI identifies high-frequency micro-cracks earlier. Thermal imaging reveals electrical imbalances. These signals are analyzed together to improve accuracy and reduce false positives.",
  },
  {
    question: "How long does it take for the AI to learn our equipment's baseline before it can predict failures?",
    answer: "Unsupervised autoencoder models typically require 14 to 30 days of continuous operation to establish a baseline. We also use transfer learning from similar assets to accelerate this process, allowing earlier detection of micro-anomalies.",
  },
  {
    question: "Does it make financial sense to put AI predictive maintenance sensors on every machine in our facility?",
    answer: "No. We conduct an asset criticality assessment and focus on bottleneck equipment where failures impact operations. Low-risk assets remain on standard maintenance schedules to preserve budget efficiency.",
  },
  {
    question: "Our maintenance team already checks multiple systems. Will this AI add another dashboard to monitor?",
    answer: "No. We implement agentic CMMS workflows. The system integrates directly into your existing CMMS and ERP. When an anomaly is detected, a work order is created automatically with diagnostics and context. Your team reviews and approves actions within existing workflows.",
  },
];

// ─── Digital twins ────────────────────────────────────────────────────────────
const DT_IMPLEMENT = [
  "Real-time synchronization between physical assets and their digital counterparts",
  "Simulation models reflecting machine behavior under varying loads and conditions",
  "Scenario testing for production changes, maintenance timing, and system stress",
  "Integration with predictive models to evaluate how detected anomalies evolve over time",
];
const DT_USES = [
  "Assess how increased production load affects asset lifespan",
  "Evaluate maintenance timing based on projected degradation patterns",
  "Test operational adjustments before applying them to live systems",
  "Understand system dependencies across production lines",
];

// ─── Tech stack (vertical tabs, 10 categories) ────────────────────────────────
const TECH_TABS = [
  {
    label: "Embedded & firmware (sensors, edge devices)",
    desc: "Used for data acquisition, low-power operation, and reliable signal capture.",
    points: ["C / C++", "Rust (growing adoption for safety-critical components)", "Zephyr RTOS", "FreeRTOS", "Embedded Linux", "ESP32", "STM32", "nRF52", "Industrial gateways (ARM / x86)"],
  },
  {
    label: "Sensors & hardware interfaces",
    desc: "Retrofit-first, non-invasive by design.",
    points: ["Vibration (MEMS, IEPE via gateways)", "Temperature", "Current (clamp-on CT sensors)", "Pressure", "Acoustic / ultrasound"],
  },
  {
    label: "Industrial & sensor connectivity",
    desc: "Chosen for coexistence with OT environments and unreliable networks.",
    points: ["MQTT", "HTTPS / REST", "OPC UA", "Modbus TCP / RTU", "Vendor-specific PLC interfaces (read-only)", "Wi-Fi", "LoRaWAN", "Bluetooth Low Energy"],
  },
  {
    label: "Edge & gateway software",
    desc: "Responsible for buffering, preprocessing, and fault tolerance.",
    points: ["Linux (industrial distributions)", "Docker / container runtimes (lightweight)", "Local data buffering (SQLite, file-based queues)", "Secure device provisioning & identity"],
  },
  {
    label: "Cloud & backend infrastructure",
    desc: "Designed for predictable cost and gradual scaling.",
    points: ["AWS / Azure / GCP (cloud-agnostic architecture)", "Custom data ingestion services", "Object storage for raw signals", "Time-series databases: InfluxDB, TimescaleDB, Amazon Timestream"],
  },
  {
    label: "Data processing & analytics",
    desc: "Signal processing and machine learning tuned to industrial data.",
    points: ["Python", "NumPy / SciPy", "Pandas", "Scikit-learn", "Signal processing libraries (FFT, spectral analysis)", "TensorFlow / PyTorch (only when justified)"],
  },
  {
    label: "APIs & integrations",
    desc: "Connecting predictive outputs to operational systems.",
    points: ["REST APIs", "Webhooks", "CMMS / EAM integrations", "ERP / MES integration (when available)", "UpKeep", "Fiix", "SAP B1", "Custom CMMS systems"],
  },
  {
    label: "Frontend & user interfaces",
    desc: "Status-first views built for operators, not BI overload.",
    points: ["React / TypeScript", "Web dashboards", "Mobile-friendly UI", "Status-first views (normal / warning / critical)", "Trend visualisation (not BI overload)"],
  },
  {
    label: "Security & access control",
    desc: "Structured control across data pipelines and devices.",
    points: ["TLS encryption", "Device authentication", "Role-based access control", "Audit logs", "Secure OTA updates"],
  },
  {
    label: "Deployment & operations",
    desc: "Controlled rollout, monitoring, and recovery.",
    points: ["CI/CD pipelines", "Remote monitoring & logging", "Controlled updates", "Backup & export mechanisms"],
  },
];

// ─── Process (7 phases) ───────────────────────────────────────────────────────
const PROCESS_STEPS = [
  {
    title: "Phase 1 – asset scope & operational alignment",
    text: "We define where predictive maintenance delivers measurable impact. Equipment is prioritized based on failure cost, maintenance frequency, and operational criticality. Sensor strategy is selected per asset – vibration, acoustic, thermal, or combined – with clear data ownership and integration boundaries.",
  },
  {
    title: "Phase 2 – data pipeline & system integration",
    text: "We establish a reliable data layer across your environment. Sensors, PLCs, SCADA, and existing systems are connected through ingestion pipelines that support real-time and historical data flows. Data is normalized, timestamped, and structured for consistent processing across assets.",
  },
  {
    title: "Phase 3 – pilot deployment on real equipment",
    text: "The system is deployed on a controlled set of assets using live production data. This phase validates signal stability, data consistency, and system behavior within your actual operating conditions. Integration with maintenance workflows is tested end-to-end.",
  },
  {
    title: "Phase 4 – model development & signal calibration",
    text: "Machine learning models learn normal operating behavior at the asset level. Anomaly detection is tuned to reduce noise and surface early deviations that align with real failure patterns. Each model is calibrated to the mechanical and operational specifics of the equipment.",
  },
  {
    title: "Phase 5 – deployment architecture (edge or cloud)",
    text: "The execution layer is defined based on your infrastructure and operational requirements. Edge deployment enables low-latency processing and continuous operation without connectivity. Cloud deployment supports centralized analytics, cross-asset insights, and fleet-level visibility.",
  },
  {
    title: "Phase 6 – integration into maintenance workflows",
    text: "Predictive signals are embedded into your operational systems. Alerts trigger work orders, maintenance scheduling, and escalation paths inside CMMS, ERP, or internal tools. Technician feedback is captured and fed back into the system for continuous refinement.",
  },
  {
    title: "Phase 7 – performance monitoring & controlled scaling",
    text: "System performance is tracked across signal accuracy, response time, and maintenance outcomes. Models are refined as new data becomes available. The platform expands across additional assets and facilities through a modular rollout aligned with your operations.",
  },
];

// ─── Security & data control (6 cards) ────────────────────────────────────────
const SECURITY = [
  {
    icon: "/predictive-maintenance/04_Controlled-data-flow-by-design-01.svg",
    title: "Controlled data flow by design",
    intro: "Your operational technology (OT) environment remains isolated and stable. We implement unidirectional data pipelines through secure edge gateways, where telemetry flows outward for analysis without exposing machines to inbound access.",
    bullets: [
      "Stable operation of PLCs and industrial controllers",
      "Separation between production systems and AI layers",
      "Predictable, controlled data exchange",
    ],
  },
  {
    icon: "/predictive-maintenance/04_Edge-level-processing-and-local-decisioning-02.svg",
    title: "Edge-level processing and local decisioning",
    intro: "Machine-level intelligence runs directly at the edge. Our Edge ML models process vibration, acoustic, thermal, and visual signals locally – enabling immediate anomaly detection and response without relying on constant connectivity.",
    bullets: [
      "Low-latency detection and action",
      "Continuity of operation in offline conditions",
      "Consistent system behavior across environments",
    ],
  },
  {
    icon: "/predictive-maintenance/04_Structured-access-and-permission-control-03.svg",
    title: "Structured access and permission control",
    intro: "Every data interaction follows defined access logic. We implement role-based and attribute-based access control across data pipelines, model interaction, and dashboards.",
    bullets: [
      "Users access only relevant operational data",
      "Clear separation of roles across teams and systems",
      "Governed interaction with AI-generated insights",
    ],
  },
  {
    icon: "/predictive-maintenance/04_Full-traceability-of-system-actions-01.svg",
    title: "Full traceability of system actions",
    intro: "Every signal, prediction, and automated action is recorded. We design systems with end-to-end auditability, enabling teams to trace how data moves, how models respond, and how decisions are triggered.",
    bullets: [
      "Transparent system behavior",
      "Verifiable AI outputs",
      "Operational accountability at every step",
    ],
  },
  {
    icon: "/predictive-maintenance/04_Secure-integration-with-existing-systems-03.svg",
    title: "Secure integration with existing systems",
    intro: "Predictive maintenance becomes part of your existing workflow. We integrate AI pipelines directly into CMMS, ERP, and industrial platforms through controlled middleware layers – without disrupting core systems.",
    bullets: [
      "Stable integration with current infrastructure",
      "Consistent data exchange across systems",
      "Seamless adoption within existing operations",
    ],
  },
  {
    icon: "/predictive-maintenance/04_Data-protection-and-compliance-alignment-01.svg",
    title: "Data protection and compliance alignment",
    intro: "Data handling follows structured and controlled processes across the entire lifecycle. We implement encryption, secure storage, and controlled data processing pipelines aligned with security standards.",
    bullets: [
      "Protection of sensitive operational data",
      "Consistent data governance across environments",
    ],
  },
];

// ─── Why Nexterse (6 cards) ───────────────────────────────────────────────────
const WHY_CARDS = [
  {
    icon: "/predictive-maintenance/04_Dual-engine-engineering-02.svg",
    title: "Dual-engine engineering: software + applied AI in one system",
    desc: "We design predictive maintenance as a unified architecture – combining edge ML, cloud systems, and industrial data pipelines into one controlled environment.",
  },
  {
    icon: "/predictive-maintenance/04_Edge-first-architecture-for-industrial-operations-02.svg",
    title: "Edge-first architecture for industrial operations",
    desc: "Machine learning models are deployed directly on your equipment through secure edge gateways, ensuring stable performance, low latency, and full control over operational data.",
  },
  {
    icon: "/predictive-maintenance/04_Production-ready-systems-from-day-one-02.svg",
    title: "Production-ready systems from day one",
    desc: "We deliver predictive maintenance systems built for real operations – integrated into workflows, connected to your infrastructure, and ready for continuous use and refinement.",
  },
  {
    icon: "/predictive-maintenance/04_Seamless-integration-into-your-maintenance-workflows-02.svg",
    title: "Seamless integration into your maintenance workflows",
    desc: "Predictive insights are delivered directly into your CMMS, ERP, and operational systems, transforming signals into structured maintenance actions your team can execute immediately.",
  },
  {
    icon: "/predictive-maintenance/04_Modular-architecture-that-scales-with-your-operations-03.svg",
    title: "Modular architecture that scales with your operations",
    desc: "Data collection, analytics, integrations, and interfaces are built as independent components, allowing your system to expand across assets and facilities without redesign.",
  },
  {
    icon: "/predictive-maintenance/04_Transparent-systems-your-team-can-operate-confidently-01.svg",
    title: "Transparent systems your team can operate confidently",
    desc: "All signals, models, and workflows are structured, observable, and adjustable. Your team works with clear diagnostics and controlled logic aligned with daily operations.",
  },
];

// ─── Awesome stories (blog, clone content) ────────────────────────────────────
const PDM_BLOG_FEATURED = {
  href: "/blog/trends-in-ai-predictive-maintenance",
  title: "9 Trends in AI-Powered Predictive Maintenance for 2026 [Updated]",
  image: "/predictive-maintenance/12_IoT-Trends-1024x578.png",
  imageAlt: "AI Predictive Maintenance Trends",
  readTime: "30 mins",
  date: "December 18, 2025",
};
const PDM_BLOG_SIDE = [
  { href: "/blog/applied-ai-predictive-maintenance-overview", title: "What's Applied AI: The Next Wave of Predictive Maintenance", readTime: "27 mins", date: "February 27, 2026" },
  { href: "/blog/ai-in-manufacturing", title: "AI in Manufacturing: Real Cases, ROI, and a Pilot Playbook", readTime: "27 mins", date: "March 2, 2026" },
  { href: "/blog/top-ai-predictive-maintenance-companies", title: "Top AI Predictive Maintenance Companies in 2026", readTime: "21 mins", date: "December 30, 2025" },
];

// ─── Component ────────────────────────────────────────────────────────────────
const CONTENTS = [
  { href: "#pdm-challenges", label: "Challenges" },
  { href: "#pdm-cases", label: "Case studies" },
  { href: "#pdm-faq", label: "FAQ" },
  { href: "#pdm-digital-twins", label: "Digital twins" },
  { href: "#pdm-tech-stack", label: "Tech stack" },
  { href: "#pdm-process", label: "Process" },
  { href: "#pdm-security", label: "Security and data control" },
  { href: "#pdm-why", label: "Why Nexterse LLC" },
];

export default function PredictivePage() {
  const [activeTech, setActiveTech] = useState(0);
  const [activeInfraTech, setActiveInfraTech] = useState(4);
  const primaryTechTabs = TECH_TABS.slice(0, 4);
  const infrastructureTechTabs = TECH_TABS.slice(4, 9);

  return (
    <>
      <PredictiveHero />

      <ArticleLayout contents={CONTENTS} ariaLabel="Predictive maintenance page contents">
        <AipocLogos />

        {/* ── Solutions we develop ───────────────────────────────────────── */}
        <section className={`${styles.blockWhite} ${styles.solutionsIntroBlock}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>
              Predictive maintenance <span className={styles.accent}>solutions</span> we develop
            </h2>
            <p className={styles.sectionDesc}>
              Our predictive maintenance systems turn machine data into reliable, actionable maintenance workflows. Each solution is engineered around your equipment, infrastructure, and operational requirements.
            </p>
            <div className={`${styles.ecomServicesGrid} ${styles.pdmSolutionsGrid}`}>
              {SOLUTIONS.map((s) => (
                <div key={s.title} className={`${styles.ecomServiceCard} ${styles.pdmSolutionCard}`}>
                  <Image src={s.icon} alt={s.title} width={56} height={56} className={styles.ecomServiceIcon} />
                  <h3 className={styles.ecomServiceTitle}>{s.title}</h3>
                  <p className={styles.ecomServiceIntro}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Challenges ─────────────────────────────────────────────────── */}
        <section id="pdm-challenges" className={`${styles.blockWhite} ${styles.pdmChallengesBlock}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>
              <span className={styles.accent}>Challenges</span> SMBs face with predictive maintenance
            </h2>
            <p className={styles.sectionDesc}>
              Predictive maintenance becomes effective when detection, infrastructure, and maintenance workflows operate as one system. In SMB environments, these areas require alignment before PdM delivers consistent operational value.
            </p>
            <div className={`${styles.ecomServicesGrid} ${styles.pdmChallengesGrid}`}>
              {CHALLENGES.map((c) => (
                <div key={c.title} className={`${styles.ecomServiceCard} ${styles.pdmChallengeCard}`}>
                  <Image src={c.icon} alt={c.title} width={56} height={56} className={styles.ecomServiceIcon} />
                  <h3 className={styles.ecomServiceTitle}>{c.title}</h3>
                  {c.paragraphs.map((p) => (
                    <p key={p} className={styles.ecomServiceIntro}>{p}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Case studies ───────────────────────────────────────────────── */}
        <div id="pdm-cases">
          <CaseCards
            heading={<>Our recent PdM <span>works</span></>}
            windowed
          />
        </div>

        {/* ── Reviews ────────────────────────────────────────────────────── */}
        <ServicesReviewSlider primary="ai" count={7} secondaryCount={2} />

        {/* ── FAQ ────────────────────────────────────────────────────────── */}
        <div id="pdm-faq">
          <ServicesFaqBlock items={PDM_FAQ} />
        </div>

        {/* ── Digital twins ──────────────────────────────────────────────── */}
        <section id="pdm-digital-twins" className={`${styles.blockLight} ${styles.digitalTwinBlock}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>
              AI-powered <span className={styles.accent}>digital twin</span> solutions
            </h2>
            <p className={styles.sectionDesc}>
              We build AI-powered digital twins of your critical equipment and production systems – virtual environments where operational behavior is continuously modeled, analyzed, and optimized.
            </p>
            <div className={`${styles.resultsRow} ${styles.digitalTwinRow}`}>
              <div className={styles.dtLists}>
                <p className={styles.dtHeading}>What we implement</p>
                <ul className={styles.resultsList}>
                  {DT_IMPLEMENT.map((p) => <li key={p}>{p}</li>)}
                </ul>
                <p className={styles.dtHeading}>How your team uses it</p>
                <ul className={styles.resultsList}>
                  {DT_USES.map((p) => <li key={p}>{p}</li>)}
                </ul>
                <p className={styles.dtHeading}>Result</p>
                <p className={styles.ecomServiceIntro}>Operational decisions are supported by modeled outcomes, not assumptions.</p>
              </div>
              <div className={styles.resultsImgCol}>
                <Image
                  src="/predictive-maintenance/03_Development-team-3-683x1024.jpg"
                  alt="Development team"
                  width={683}
                  height={1024}
                  className={styles.resultsImg}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Book a free consultation CTA ───────────────────────────────── */}
        <div className={`${styles.inlineCta} ${styles.predictiveGradientCta}`}>
          <div className="container">
            <div className={styles.inlineCtaInner}>
              <div>
                <h2 className={styles.inlineCtaTitle}>Book a free consultation</h2>
                <p className={styles.inlineCtaDesc}>Schedule a 30-minute call with a Senior AI Architect to discuss your current infrastructure and predictive goals.</p>
              </div>
              <a href="#get-modal-popup" className={`btn btn-accent ${styles.inlineCtaBtn}`}>Get in Touch</a>
            </div>
          </div>
        </div>

        {/* ── Tech stack (vertical tabs) ─────────────────────────────────── */}
        <section id="pdm-tech-stack" className={`${styles.blockWhite} ${styles.techStackBlock}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>
              Predictive maintenance <span className={styles.accent}>technology</span> stack
            </h2>
            <div className={`${styles.vertTabsWrap} ${styles.techStackWrap}`}>
              <div className={styles.vertTabList} role="tablist" aria-label="Technology stack">
                {primaryTechTabs.map((t, i) => (
                  <button
                    key={t.label}
                    role="tab"
                    aria-selected={activeTech === i}
                    className={`${styles.vertTabBtn} ${activeTech === i ? styles.vertTabBtnActive : ""}`}
                    onClick={() => setActiveTech(i)}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
              <div className={styles.vertTabContent}>
                <h3 className={styles.vertTabTitle}>{TECH_TABS[activeTech].label}</h3>
                <p className={styles.vertTabDesc}>{TECH_TABS[activeTech].desc}</p>
                <ul className={styles.techChips}>
                  {TECH_TABS[activeTech].points.map((p) => (
                    <li key={p} className={styles.techChip}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={`${styles.vertTabsWrap} ${styles.techStackWrap} ${styles.techStackWrapAlt}`}>
              <div className={styles.vertTabContent}>
                <h3 className={styles.vertTabTitle}>{TECH_TABS[activeInfraTech].label}</h3>
                <p className={styles.vertTabDesc}>{TECH_TABS[activeInfraTech].desc}</p>
                <ul className={styles.techChips}>
                  {TECH_TABS[activeInfraTech].points.map((p) => (
                    <li key={p} className={styles.techChip}>{p}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.vertTabList} role="tablist" aria-label="Infrastructure technology stack">
                {infrastructureTechTabs.map((t) => {
                  const i = TECH_TABS.findIndex((tab) => tab.label === t.label);
                  return (
                    <button
                      key={t.label}
                      role="tab"
                      aria-selected={activeInfraTech === i}
                      className={`${styles.vertTabBtn} ${activeInfraTech === i ? styles.vertTabBtnActive : ""}`}
                      onClick={() => setActiveInfraTech(i)}
                    >
                      {t.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ── Process ────────────────────────────────────────────────────── */}
        <section id="pdm-process" className={styles.processBlock}>
          <div className="container">
            <h2 className={styles.sectionTitleWhite}>
              <span className={styles.accent}>How</span> we deliver predictive maintenance software
            </h2>
            <p className={styles.sectionDescWhite}>
              We engineer predictive maintenance systems as structured platforms that integrate into your operations and scale across assets without rework.
            </p>
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

        {/* ── Security & data control ────────────────────────────────────── */}
        <section id="pdm-security" className={`${styles.blockLight} ${styles.securityControlBlock}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>
              Operational <span className={styles.accent}>security</span> and data control
            </h2>
            <p className={styles.sectionDesc}>
              AI-driven maintenance systems operate inside critical industrial environments. We design every component with structured control, clear access boundaries, and full operational visibility.
            </p>
            <div className={`${styles.hcAudienceGrid} ${styles.securityControlGrid}`}>
              {SECURITY.map((s) => (
                <div key={s.title} className={`${styles.ecomServiceCard} ${styles.securityControlCard}`}>
                  <Image src={s.icon} alt={s.title} width={56} height={56} className={styles.ecomServiceIcon} />
                  <h3 className={styles.ecomServiceTitle}>{s.title}</h3>
                  <p className={styles.ecomServiceIntro}>{s.intro}</p>
                  <ul className={styles.ecomBullets}>
                    {s.bullets.map((b) => <li key={b}>{b}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Nexterse ───────────────────────────────────────────────── */}
        <section id="pdm-why" className={`${styles.blockWhite} ${styles.whyChooseBlock}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>
              <span className={styles.accent}>Why</span> choose Nexterse LLC
            </h2>
            <p className={styles.sectionDesc}>
              We design PdM systems to fit real SMB conditions. Our solutions remain practical, controllable, and valuable as operations evolve, while we keep supporting our Clients with predictive maintenance development services.
            </p>
            <div className={`${styles.ecomServicesGrid} ${styles.whyChooseGrid}`}>
              {WHY_CARDS.map((w) => (
                <div key={w.title} className={`${styles.ecomServiceCard} ${styles.whyChooseCard}`}>
                  <Image src={w.icon} alt={w.title} width={56} height={56} className={styles.ecomServiceIcon} />
                  <h3 className={styles.ecomServiceTitle}>{w.title}</h3>
                  <p className={styles.ecomServiceIntro}>{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Awards & Recognitions ──────────────────────────────────────── */}
        <ServicesAchievements />

        {/* ── Let's Start ────────────────────────────────────────────────── */}
        <LetsStart />

        {/* ── Awesome stories ────────────────────────────────────────────── */}
        <AwesomeStories category="ai" />
      </ArticleLayout>
    </>
  );
}
