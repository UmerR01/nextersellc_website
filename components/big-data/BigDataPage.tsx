import Image from "next/image";
import CaseCards from "@/components/home/CaseCards";
import LetsStart from "@/components/home/LetsStart";
import AwesomeStories from "@/components/blog/AwesomeStories";
import BigDataHero from "./BigDataHero";
import AipocLogos from "@/components/aipoc/AipocLogos";
import BigDataReviews from "./BigDataReviews";
import BigDataAwards from "./BigDataAwards";
import BigDataFaq from "./BigDataFaq";
import BigDataCrosslinks from "./BigDataCrosslinks";
import BigDataIndustries from "./BigDataIndustries";
import BigDataTechStack from "./BigDataTechStack";
import ArticleLayout from "@/components/shared/ArticleLayout";
import styles from "./BigDataPage.module.css";

// ─── Big Data services built for operational scale (6 cards) ─────────────────
const SERVICES = [
  { icon: "/big-data/05_AI-data-supply-chain-01.svg", title: "AI data supply chain & ETL", desc: "We build automated pipelines that collect, clean, validate, and unify data from all sources, including CRMs, ERPs, operational systems, and raw files. Data is continuously processed through controlled pipelines with built-in validation, deduplication, and transformation logic. This ensures that every dataset used for reporting, analytics, or AI is accurate and reliable." },
  { icon: "/big-data/05_Real-time-data-platforms-02.svg", title: "Real-time data platforms", desc: "Turn raw data into actionable insights. We develop advanced analytics solutions and interactive business intelligence dashboards, so you can discover trends, track KPIs, and make data-driven decisions confidently. We work with leading BI tools like Power BI, Tableau, and Looker that provide user-friendly data exploration." },
  { icon: "/big-data/05_Data-lakehouse-architecture.svg", title: "Data lakehouse architecture", desc: "As a part of our big data development services, we design and implement lakehouse architectures that combine scalable storage with efficient querying and processing. This creates a unified data layer where structured and unstructured data can be stored, accessed, and analyzed without fragmentation." },
  { icon: "/big-data/05_Agentic-decision-intelligence-02.svg", title: "Agentic decision intelligence", desc: "Static dashboards show what happened. Operational systems act on what is happening. We build data systems that monitor streams, detect patterns, and trigger actions automatically." },
  { icon: "/big-data/05_GenAI-privacy-and-data-provenance-03.svg", title: "GenAI privacy & data provenance", desc: "Each GenAI solution we develop has a governance layer that manages how data is processed, accessed, and used across the system." },
  { icon: "/big-data/05_Real-time-data-platforms-03.svg", title: "Big Data consulting", desc: "Unsure how to start or scale? We offer expert consulting on Big Data strategy and architecture. Our specialists advise on choosing the right tech stack (Hadoop, Spark, Kafka, NoSQL, cloud services) and designing a solution that meets your business goals." },
];

// ─── Stats (Engineering you can audit) ────────────────────────────────────────
const STATS = [
  { value: "6+", label: "years in software engineering" },
  { value: "350+", label: "systems delivered" },
  { value: "98%", label: "Client satisfaction" },
  { value: "25+", label: "countries worked with" },
  { value: "3+", label: "years' Client engagement" },
];

// ─── Why companies trust Nexterse LLC (4 cards) ───────────────────────────────
const WHY = [
  { icon: "/big-data/05_Vector-database-orchestration-03.svg", title: "Vector database orchestration", desc: "You cannot run AI on raw tables and expect accurate answers. Without a vector layer, your system cannot retrieve context properly. It guesses. That is where bad outputs come from. We convert your data into high-dimensional embeddings and engineer vector database architectures using Pinecone, Milvus, Weaviate, and pgvector. Your system retrieves meaning, not rows, and responds with actual context." },
  { icon: "/big-data/05_Data-governance-for-GenAI-01.svg", title: "Data governance for GenAI", desc: "If you cannot trace an output, you cannot trust it. Most systems push data into AI models without control. Sensitive information leaks. Outputs cannot be verified. Compliance becomes a risk. We enforce automated PII redaction and full data lineage across the pipeline. Every output is linked to a specific source inside your data platform. When a result appears, you know exactly where it came from." },
  { icon: "/big-data/05_Data-gravity-and-edge-processing-infrastructure-01.svg", title: "Data gravity and edge processing infrastructure", desc: "Moving petabytes of raw telemetry to the cloud for AI inference will bankrupt your IT budget. We move decisions to the data. Data is processed at the source – edge gateways, edge nodes, on-prem systems. High-volume streams are filtered, aggregated, and structured before anything reaches the cloud. Only high-value data moves upstream. Costs stay predictable. Systems stay fast." },
  { icon: "/big-data/05_Synthetic-data-generation-capability-01.svg", title: "Synthetic data generation capability", desc: "If your data is incomplete or restricted, your models will never reach production quality. Waiting for perfect datasets slows everything down. Using real data creates compliance risk. We build generative pipelines that produce synthetic datasets with the same statistical behavior as real data. You train, test, and validate systems without exposing sensitive information. Development moves forward without waiting on data access." },
];

// ─── What your business gets from Big Data (6 cards) ──────────────────────────
const BENEFITS = [
  { icon: "/big-data/05_Faster-decisions-based-on-real-time-data-02.svg", title: "Faster decisions based on real-time data", desc: "Your teams operate on live data. Market changes, operational issues, and customer behavior are identified as they happen, allowing immediate action without waiting for analysis cycles." },
  { icon: "/big-data/05_Lower-infrastructure-costs-through-optimized-architecture-02.svg", title: "Lower infrastructure costs through optimized architecture", desc: "Data processing, storage, and transfer are structured to eliminate unnecessary load. Distributed pipelines, tiered storage, and edge processing reduce cloud expenses while maintaining performance at scale." },
  { icon: "/big-data/05_Reliable-data-for-analytics-and-AI-01.svg", title: "Reliable data for analytics and AI", desc: "Data pipelines enforce validation, deduplication, and consistency at every stage. Decisions and models operate on clean, structured data, reducing errors and increasing confidence across all data-driven operations." },
  { icon: "/big-data/05_Scalable-systems-that-support-growth-01.svg", title: "Scalable systems that support growth", desc: "The architecture is designed to handle increasing data volumes, users, and integrations without reengineering. As the business grows, the platform continues to perform without bottlenecks or structural limitations." },
  { icon: "/big-data/05_Faster-path-to-AI-and-automation-01.svg", title: "Faster path to AI and automation", desc: "Your data becomes structured, accessible, and ready for advanced use cases. Predictive models, automation workflows, and AI systems can be deployed on top of your existing data foundation without rebuilding infrastructure." },
  { icon: "/big-data/05_Full-visibility-across-operations-01.svg", title: "Full visibility across operations", desc: "Data from systems, applications, and devices is unified into a single operational view. Leadership gains direct access to performance metrics, system behavior, and business signals." },
];

// ─── How we deliver Big Data systems (6-step process) ─────────────────────────
const PROCESS: { title: string; text: string; bullets?: string[] }[] = [
  { title: "Discovery and audit", text: "A structured evaluation of your current data landscape – systems, pipelines, storage layers, and integrations – with a focus on where performance is lost and where costs accumulate. The outcome is a prioritized execution plan that connects technical changes to business impact: faster reporting cycles, consistent metrics, and reduced infrastructure waste." },
  { title: "Architecture and system design", text: "A system blueprint that defines how data is ingested, processed, stored, and accessed across the organization. The architecture accounts for real-time vs batch workloads, structured and unstructured data, integration with existing platforms, and future scaling requirements. This stage establishes how the platform behaves under growth, how it looks at launch.", bullets: ["Real-time vs batch workloads", "Structured and unstructured data", "Integration with existing platforms", "Future scaling requirements"] },
  { title: "Data pipeline development", text: "Reliable data flow across all sources – APIs, internal systems, streaming inputs, and historical datasets. Pipelines are built with embedded validation, deduplication, and transformation logic, ensuring that downstream systems operate on consistent and trustworthy data. This directly affects reporting accuracy, operational decisions, and model performance." },
  { title: "Platform implementation", text: "A unified data environment combining storage, processing, and integration layers into a single operational system. Instead of isolated tools, the platform functions as a connected infrastructure where data moves predictably between components and remains accessible across teams. This creates a stable foundation for analytics, automation, and AI use cases." },
  { title: "Testing and stabilization", text: "Verification of system behavior under production-like conditions: high data volumes, concurrent workloads, incomplete or delayed inputs, and failure scenarios. Monitoring, logging, and alerting are configured at this stage, ensuring that system performance is measurable and controlled before full rollout.", bullets: ["High data volumes", "Concurrent workloads", "Incomplete or delayed inputs", "Failure scenarios"] },
  { title: "Launch and scaling", text: "Deployment into live operations with full observability and defined scaling mechanisms. As data volume, usage, and integrations grow, the platform adapts without structural changes – maintaining performance while controlling infrastructure costs. Post-launch support focuses on optimization, expansion, and long-term system efficiency." },
];

// ─── Awesome stories (blog) ────────────────────────────────────────────────────
const BD_BLOG_FEATURED = {
  href: "/blog/enterprise-ai-adoption-risks",
  title: "Top 7 Enterprise AI Adoption Risks in 2026 — and How to De-Risk Them",
  image: "/big-data/07_figure-1-og-1200x630-1-300x175.png",
  imageAlt: "Enterprise AI risk matrix",
  readTime: "29 mins",
  date: "July 15, 2026",
};
const BD_BLOG_SIDE = [
  { href: "/blog/ai-and-big-data-synergy", title: "AI and Big Data: How They Work Together", readTime: "15 mins", date: "January 28, 2026" },
  { href: "/blog/best-10-companies-providing-data-visualization-services", title: "Best 10 Companies Providing Data Visualization Services", readTime: "29 mins", date: "December 30, 2025" },
  { href: "/blog/ai-ready-data-visualization-best-practices-examples", title: "AI-Ready Data Visualization – Best Practices & Examples", readTime: "28 mins", date: "December 26, 2025" },
];

const CONTENTS = [
  { href: "#bd-services", label: "Services" },
  { href: "#bd-why", label: "Why Nexterse LLC" },
  { href: "#bd-cases", label: "Case studies" },
  { href: "#bd-techstack", label: "Tech stack" },
  { href: "#bd-industries", label: "Industries" },
  { href: "#bd-benefits", label: "Benefits" },
  { href: "#bd-faq", label: "FAQ" },
  { href: "#bd-process", label: "Process" },
];

export default function BigDataPage() {
  return (
    <>
      <BigDataHero />

      <ArticleLayout contents={CONTENTS} ariaLabel="Big Data development page contents">
        <AipocLogos />

        {/* ── Big Data services built for operational scale ── */}
        <section id="bd-services" className={`${styles.blockWhite} ${styles.servicesBlock}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>
              Big Data <span className={styles.accent}>services</span> built for operational scale
            </h2>
            <p className={styles.sectionDesc}>
              We design and implement Big Data systems that turn fragmented data into a structured, reliable, and usable layer for decision-making and automation. Each service is focused on how data moves, how it is controlled, and how it creates business value.
            </p>
            <div className={styles.ecomServicesGrid}>
              {SERVICES.map((c) => (
                <div key={c.title} className={styles.ecomServiceCard}>
                  <Image src={c.icon} alt={c.title} width={56} height={56} className={styles.ecomServiceIcon} />
                  <h3 className={styles.ecomServiceTitle}>{c.title}</h3>
                  <p className={styles.ecomServiceIntro}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA: Schedule a Free Big Data Consultation ── */}
        <section className={styles.inlineCta}>
          <div className="container">
            <div className={styles.inlineCtaInner}>
              <div>
                <h2 className={styles.inlineCtaTitle}>Schedule a Free Big Data Consultation</h2>
                <p className={styles.inlineCtaDesc}>Let&rsquo;s talk about your data goals and how to turn raw information into business value.</p>
              </div>
              <a href="#get-modal-popup" className={`btn btn-accent ${styles.inlineCtaBtn}`}>Book a call</a>
            </div>
          </div>
        </section>

        {/* ── Why companies trust Nexterse LLC (engineering stats + reasons) ── */}
        <section id="bd-why" className={`${styles.blockWhite} ${styles.whyTrustBlock}`}>
          <div className="container">
            <div className={styles.engineeringIntro}>
              <h2 className={styles.engineeringTitle}>Engineering you can audit. Code you can scale. Partners you can trust.</h2>
              <div className={styles.statsGrid}>
                {STATS.map((s) => (
                  <div key={s.label} className={styles.statCard}>
                    <div className={styles.statValue}>{s.value}</div>
                    <div className={styles.statLabel}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <h2 className={styles.sectionTitle}>
              <span className={styles.accent}>Why</span> companies trust Nexterse LLC
            </h2>
            <p className={styles.sectionDesc}>
              We build AI-powered data platforms that can actually handle real-world usage. Most data platforms can store, process, and generate reports. But when you connect AI, real-time decisions, or high-load operations, the system starts failing. Context is missing. Costs increase. Outputs cannot be trusted. We handle it. Let us explain how.
            </p>
            <div className={styles.ecomServicesGrid}>
              {WHY.map((c) => (
                <div key={c.title} className={styles.ecomServiceCard}>
                  <Image src={c.icon} alt={c.title} width={56} height={56} className={styles.ecomServiceIcon} />
                  <h3 className={styles.ecomServiceTitle}>{c.title}</h3>
                  <p className={styles.ecomServiceIntro}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA: Request a Project Estimate ── */}
        <section className={styles.inlineCta}>
          <div className="container">
            <div className={styles.inlineCtaInner}>
              <div>
                <h2 className={styles.inlineCtaTitle}>Request a Project Estimate</h2>
                <p className={styles.inlineCtaDesc}>Receive a detailed estimate for building your Big Data platform — no commitment required.</p>
              </div>
              <a href="#get-modal-popup" className={`btn btn-accent ${styles.inlineCtaBtn}`}>Get in touch</a>
            </div>
          </div>
        </section>

        {/* ── Our recent works ── */}
        <div id="bd-cases">
          <CaseCards heading={<>Our recent <span>works</span></>} windowed />
        </div>

        {/* ── Reviews ── */}
        <BigDataReviews />

        {/* ── Technologies we work with ── */}
        <BigDataTechStack />

        {/* ── Image showcase: What it takes to build a Data-powered app ── */}
        <section className={styles.blockWhite}>
          <div className="container">
            <h2 className={styles.sectionTitle}>
              What it takes to <span className={styles.accent}>build</span> a Data-powered app
            </h2>
            <div className={styles.imageShowcase}>
              <Image
                src="/big-data/05_What-it-takes-to-build-a-Data-powered-app-clean.png"
                alt="What it takes to build a Data-powered app"
                width={3120}
                height={1428}
              />
            </div>
          </div>
        </section>

        {/* ── Built for high-volume and regulated environments (industries) ── */}
        <BigDataIndustries />

        {/* ── CTA: Turn Big Data into Big Results ── */}
        <section className={styles.inlineCta}>
          <div className="container">
            <div className={styles.inlineCtaInner}>
              <div>
                <h2 className={styles.inlineCtaTitle}>Turn Big Data into Big Results</h2>
                <p className={styles.inlineCtaDesc}>We help you extract insights, optimize operations, and innovate faster with end-to-end data systems.</p>
              </div>
              <a href="#get-modal-popup" className={`btn btn-accent ${styles.inlineCtaBtn}`}>Get in touch</a>
            </div>
          </div>
        </section>

        {/* ── What your business gets from Big Data ── */}
        <section id="bd-benefits" className={`${styles.blockLight} ${styles.benefitsBlock}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>
              <span className={styles.accent}>What</span> your business gets from Big Data
            </h2>
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

        {/* ── FAQ ── */}
        <BigDataFaq />

        {/* ── CTA: See Real Big Data Projects in Action ── */}
        <section className={styles.inlineCta}>
          <div className="container">
            <div className={styles.inlineCtaInner}>
              <div>
                <h2 className={styles.inlineCtaTitle}>See Real Big Data Projects in Action</h2>
                <p className={styles.inlineCtaDesc}>Explore how we&rsquo;ve helped companies turn massive datasets into measurable impact.</p>
              </div>
              <a href="#get-modal-popup" className={`btn btn-accent ${styles.inlineCtaBtn}`}>Get in touch</a>
            </div>
          </div>
        </section>

        {/* ── How we deliver Big Data systems ── */}
        <section id="bd-process" className={`${styles.blockWhite} ${styles.deliveryProcessBlock}`}>
          <div className="container">
            <h2 className={styles.sectionTitleWhite}>
              <span className={styles.accent}>How</span> we deliver Big Data systems
            </h2>
            <p className={styles.sectionDescWhite}>
              Our delivery model is designed to move from fragmented data environments to a production-grade platform with clear control over performance, cost, and scalability. Each stage contributes directly to how the system operates in real conditions – how it is built.
            </p>
            <div className={styles.processGrid}>
              {PROCESS.map((step, i) => (
                <div key={step.title} className={styles.processStep}>
                  <div className={styles.processNum}>{i + 1}</div>
                  <div className={styles.processStepBody}>
                    <h3 className={styles.processStepTitle}>{step.title}</h3>
                    <p className={styles.processStepText}>{step.text}</p>
                    {step.bullets && (
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

        {/* ── Awards & Recognitions ── */}
        <BigDataAwards />

        {/* ── Let's Start ── */}
        <LetsStart />

        {/* ── Awesome stories (blog) ── */}
        <AwesomeStories category="ai" />

        {/* ── More about Nexterse LLC (crosslinks) ── */}
        <BigDataCrosslinks />
      </ArticleLayout>
    </>
  );
}
