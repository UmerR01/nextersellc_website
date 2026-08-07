"use client";

import { useState } from "react";
import Image from "next/image";
import CaseCards, { type CaseCard } from "@/components/home/CaseCards";
import LetsStart from "@/components/home/LetsStart";
import AdlcBlog, { type AdlcFeaturedPost, type AdlcBlogPost } from "@/components/adlc/AdlcBlog";
import MlHero from "./MlHero";
import MlReviews from "./MlReviews";
import MlAwards from "./MlAwards";
import MlFaq from "./MlFaq";
import MlIndustries from "./MlIndustries";
import MlArticleLayout from "./MlArticleLayout";
import styles from "./MlPage.module.css";

// ─── What ML capabilities does Nexterse LLC cover? (4 cards) ──────────────────
const SERVICES = [
  { icon: "/ml/04_Data-pipeline-engineering-01.svg", title: "Data & pipeline engineering", desc: "ETL and ELT workflows, real-time streaming, and feature pipelines that feed clean, consistent data into your models." },
  { icon: "/ml/04_Multi-modal-model-engineering-and-edge-AI-02.svg", title: "Multi-modal model engineering & edge AI", desc: "Models that combine sensor, video, and structured inputs, tuned with quantization and hardware-aware optimization to run in real time, including on edge devices." },
  { icon: "/ml/04_The-MLOps-and-Continuous-Learning-Pipeline-02.svg", title: "MLOps & continuous learning pipelines", desc: "Automated pipelines with model monitoring, drift detection, version control, and controlled retraining." },
  { icon: "/ml/04_System-integration-and-operational-embedding-02.svg", title: "System integration & operational embedding", desc: "Connecting models to your infrastructure through APIs and event-driven architecture, so predictions run inside the processes you already operate." },
];

// ─── Engagement options (3 cards) ──────────────────────────────────────────────
const ENGAGEMENT = [
  { icon: "/ml/04_ML-architecture-audit-02.svg", title: "ML architecture audit", desc: "We assess your data, infrastructure, and integration points, then hand back defined use cases, an architecture blueprint, and a prioritized roadmap. Start here when you need a clear foundation before anyone writes code." },
  { icon: "/ml/04_System-architecture-design-01.svg", title: "System architecture design", desc: "We design the full system before development begins: data flow, model placement, MLOps configuration, and the points where it connects to your existing systems. You get a build-ready blueprint with defined components and owners." },
  { icon: "/ml/04_Production-system-delivery-02.svg", title: "Production system delivery", desc: "We build and deploy the system into your environment: data pipelines, models, APIs, CI/CD, monitoring, and validation, delivered ready to run." },
];

// ─── ADLC (6 cards) ─────────────────────────────────────────────────────────────
const ADLC = [
  { icon: "/ml/04_Data-pipeline-engineering-03.svg", title: "Data pipelines prepared for real use", desc: "We structure your data into pipelines that clean and transform it the same way for training and for live operation, so the model behaves in production the way it did in testing." },
  { icon: "/ml/04_Model-development-aligned-with-business-metrics-02.svg", title: "Model development aligned with business metrics", desc: "Models train on your operational data and get measured against the metrics you actually care about, not benchmark accuracy alone." },
  { icon: "/ml/04_Validation-and-controlled-deployment-02.svg", title: "Validation and controlled deployment", desc: "Each model is tested against real scenarios and released through structured pipelines, so going live is predictable rather than risky." },
  { icon: "/ml/04_Integration-into-operational-workflows-02.svg", title: "Integration into your workflows", desc: "The model connects to your APIs, platforms, and systems, where it starts producing predictions that drive decisions or trigger actions." },
  { icon: "/ml/04_Continuous-performance-monitoring-02.svg", title: "Performance monitoring", desc: "Once it's live, we track accuracy and behavior on real data, so you can see how the model holds up over time." },
  { icon: "/ml/04_Structured-retraining-and-version-updates-03.svg", title: "Retraining and version updates", desc: "As new data arrives, models retrain through controlled pipelines. Each update is tested, versioned, and deployed without interrupting what's already running." },
];

// ─── ML maturity model (3 levels) ──────────────────────────────────────────────
const MATURITY = [
  {
    icon: "/ml/04_Structured-analytics-02.svg",
    label: "Level 1. Structured analytics",
    title: "Structured analytics",
    text: "ML runs separately from your systems. Models produce predictions, but no one's day-to-day work depends on them.",
    example: "Example: a demand forecast runs weekly in a notebook and gets exported to Excel for manual planning.",
  },
  {
    icon: "/ml/04_Predictive-MLOps-systems-03.svg",
    label: "Level 2. Predictive MLOps systems",
    title: "Predictive MLOps systems",
    text: "ML is embedded in your systems. Predictions reach workflows and get used inside your platforms.",
    example: "Example: a fraud model scores transactions in real time and flags suspicious activity inside your payment system.",
  },
  {
    icon: "/ml/04_Agentic-and-edge-AI-systems-03.svg",
    label: "Level 3. Agentic & edge AI systems",
    title: "Agentic & edge AI systems",
    text: "ML executes decisions. Systems process data in real time and act inside operations.",
    example: "Example: a logistics system spots a delay, reroutes shipments, updates the ERP, and notifies stakeholders without a human in the loop.",
  },
];

// ─── Tech stack (4 cards) ───────────────────────────────────────────────────────
const TECH_CARDS = [
  { title: "Machine learning algorithms", desc: "We use supervised models (logistic regression, decision trees, XGBoost, SVMs) for classification, scoring, and forecasting; unsupervised models for clustering and anomaly detection; time-series models (ARIMA, Prophet, ML ensembles) for demand and risk forecasting; and hybrid pipelines that mix rules and ML to handle edge cases. We choose models on empirical benchmarks and validate them against your KPIs." },
  { title: "Deep learning", desc: "When the data is unstructured or the problem is too complex for classical ML, we build and train neural networks: CNNs for visual input, RNNs and Transformers for sequence and language tasks, autoencoders for noise reduction and anomaly detection, and custom architectures for multi-modal inputs. We support distributed training, GPU and TPU acceleration, and model versioning." },
  { title: "AutoML", desc: "We use AutoML tools (Vertex AI, SageMaker Autopilot, H2O.ai, MLJAR) to reach a first model faster in prototyping. We audit every generated model and benchmark it against custom-built alternatives, so it stays a starting point rather than a black box." },
  { title: "Big data processing", desc: "For high-volume data we build distributed pipelines on Spark, Hadoop, and Airflow; real-time streaming with Kafka and Flink; and ETL and ELT pipelines that handle terabytes a day for training and inference." },
];

const TECH_TABLE: { service: string; tools: string }[] = [
  { service: "ML & AI frameworks/libraries", tools: "TensorFlow, PyTorch, Scikit-learn, Keras, XGBoost, LightGBM, OpenCV, Hugging Face Transformers, spaCy, NLTK, FastText, LangChain, MLlib (Apache Spark)." },
  { service: "Programming languages", tools: "Python, R, Java, C++, JavaScript / TypeScript (for frontend/backend integration), Go, Scala." },
  { service: "Data & pipeline tools", tools: "Apache Airflow, Apache Kafka, Apache Spark, Pandas, NumPy, Dask, dbt (for data transformation)." },
  { service: "Cloud platforms & infrastructure", tools: "AWS (SageMaker, EC2, S3, Lambda), Microsoft Azure (Machine Learning, Blob Storage), Google Cloud Platform (Vertex AI, BigQuery, AutoML), IBM Cloud, DigitalOcean (for small-scale deployments), Snowflake." },
  { service: "DevOps & MLOps", tools: "Docker, Kubernetes, MLflow, DVC, Kubeflow, Jenkins, GitHub Actions, Terraform, Prometheus + Grafana (for monitoring)." },
  { service: "Databases & storages", tools: "PostgreSQL, MySQL, MongoDB, Cassandra, Redis, ElasticSearch, Amazon Redshift, BigQuery, MinIO (S3-compatible object storage)." },
  { service: "Visualization & dashboarding", tools: "Power BI, Tableau, Looker, Grafana, Streamlit, Dash by Plotly, Superset." },
];

// ─── Cases (3, clone content) ───────────────────────────────────────────────────
const ML_CASES: CaseCard[] = [
  {
    banner: "/ml/11_Cover-1-1.png",
    name: "AI-powered stack",
    title: "AI-powered predictive maintenance for a large industrial manufacturer",
    text: "An AIoT upgrade that cut unplanned downtime by 50% within 8 months, adding explainable ML and context analysis to the existing IoT platform.",
    href: "/portfolio/ai-powered-predictive-maintenance-for-a-large-industrial-manufacturer",
    tags: ["IoT", "AI inside", "Enterprise"],
  },
  {
    banner: "/ml/10_Cover-1-1.png",
    name: "AI-powered stack",
    title: "AI/ML route optimization for a freight delivery service",
    text: "Lifted on-time delivery to 98% – without expanding the fleet. An AI/ML platform that plans and reoptimizes B2B/B2C routes in real time with traffic, weather, and capacity constraints, cutting last-mile costs by 22%.",
    href: "/portfolio/ai-ml-route-optimization-for-a-freight-delivery-service",
    tags: ["AI inside", "Enterprise"],
  },
  {
    banner: "/ml/12_Cover-2-1.png",
    name: "AI-powered stack",
    title: "IoT and ML predictive maintenance for a 28-turbine wind farm",
    text: "A German operator runs 28 onshore turbines. Nexterse LLC built a predictive maintenance layer on top of the existing SCADA. Within 12 months, unplanned downtime fell by 38%, and availability rose to 97.7%.",
    href: "/portfolio/ml-based-predictive-maintenance-for-wind-farm",
    tags: ["IoT", "AI inside", "Enterprise"],
  },
];

// ─── Why choose Nexterse LLC for ML development (4 cards) ──────────────────────
const WHY = [
  { icon: "/ml/04_Jupyter-Notebook-to-Production-04.svg", title: "From notebook to production.", desc: "Data scientists build models. Software engineers build applications. We do both. Most failed pilots break at the seam between them, when Python scripts never get connected to the legacy SQL databases or live API limits they have to work with. Our team builds that connection and the CI/CD pipelines that put the model into real use." },
  { icon: "/ml/04_The-MLOps-and-Continuous-Learning-Pipeline-03.svg", title: "MLOps that keeps models honest.", desc: "Models lose accuracy the moment they meet live data. We build automated pipelines with telemetry (MLflow, Weights & Biases) that watch for data drift. When accuracy drops below your threshold, the pipeline pulls the new data and triggers a retraining cycle, so the model gets sharper over time instead of quietly decaying." },
  { icon: "/ml/04_AI-Governance-Shadow-ML-03.svg", title: "Governance built into the architecture.", desc: "We engineer explainability into the model from the start, using SHAP and LIME so every decision can be traced and explained to a regulator. That matters in finance, healthcare, and logistics, where an unexplained “shadow” model is a liability." },
  { icon: "/ml/04_Add-the-Vendor-Lock-In-Warning-02.svg", title: "No Vendor Lock-In", desc: "We build on containerized, open-source standards (Kubeflow, Docker, MLflow). Run inference on SageMaker, Azure, or your own on-premise hardware. You own the IP and control the infrastructure." },
];

// ─── Awesome stories (blog) ──────────────────────────────────────────────────────
const ML_BLOG_FEATURED: AdlcFeaturedPost = {
  href: "/blog/it-outsourcing-overview-trends",
  title: "Overview & Trends: IT Outsourcing in 2026",
  image: "/ml/03_5da6e29c58568a3c60f7b538_IT-Outsourcing-2019-Overview-_-Trends.jpg",
  imageAlt: "The code for new release",
  readTime: "28 mins",
  date: "December 7, 2025",
};
const ML_BLOG_SIDE: AdlcBlogPost[] = [
  { href: "/blog/ai-development-costs", title: "What Affects AI Development Cost in 2026", readTime: "40 mins", date: "March 11, 2026" },
  { href: "/blog/ai-powered-iot-overview", title: "What's AIoT: The Next Wave of Innovation", readTime: "27 mins", date: "February 27, 2026" },
  { href: "/blog/aiot-in-manufacturing", title: "AIoT in Manufacturing: Real Cases, ROI, and a Pilot Playbook", readTime: "27 mins", date: "March 2, 2026" },
];

export default function MlPage() {
  const [activeLevel, setActiveLevel] = useState(0);

  return (
    <>
      <MlHero />

      <MlArticleLayout>
        {/* ── What ML capabilities does Nexterse LLC cover? ── */}
        <section id="ml-services" className={styles.blockWhite}>
          <div className="container">
            <h2 className={styles.sectionTitle}>
              What machine learning capabilities does Nexterse LLC <span className={styles.accent}>cover</span>?
            </h2>
            <p className={styles.sectionDesc}>The services we offer across the ML lifecycle.</p>
            <div className={`${styles.ecomServicesGrid} ${styles.capabilitiesGrid}`}>
              {SERVICES.map((c) => (
                <div key={c.title} className={`${styles.ecomServiceCard} ${styles.capabilityCard}`}>
                  <Image src={c.icon} alt={c.title} width={56} height={56} className={styles.ecomServiceIcon} />
                  <h3 className={styles.ecomServiceTitle}>{c.title}</h3>
                  <p className={styles.ecomServiceIntro}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA: Transform Your Business with ML ── */}
        <section className={styles.inlineCta}>
          <div className="container">
            <div className={styles.inlineCtaInner}>
              <div>
                <h2 className={styles.inlineCtaTitle}>Transform Your Business with ML</h2>
                <p className={styles.inlineCtaDesc}>Go beyond off-the-shelf solutions. We build custom machine learning models that solve your unique challenges and drive real results.</p>
              </div>
              <a href="#get-modal-popup" className={`btn btn-accent ${styles.inlineCtaBtn}`}>Get free consultation</a>
            </div>
          </div>
        </section>

        {/* ── Which industries do Nexterse LLC's ML services support? ── */}
        <MlIndustries />

        {/* ── How can you engage Nexterse LLC for ML development? ── */}
        <section id="ml-engagement" className={styles.blockWhite}>
          <div className="container">
            <h2 className={styles.sectionTitle}>
              How can you <span className={styles.accent}>engage</span> Nexterse LLC for ML development?
            </h2>
            <p className={styles.sectionDesc}>Three ways to start, depending on how far along you are.</p>
            <div className={`${styles.ecomServicesGrid} ${styles.engagementGrid}`}>
              {ENGAGEMENT.map((c) => (
                <div key={c.title} className={`${styles.ecomServiceCard} ${styles.engagementCard}`}>
                  <Image src={c.icon} alt={c.title} width={56} height={56} className={styles.ecomServiceIcon} />
                  <h3 className={styles.ecomServiceTitle}>{c.title}</h3>
                  <p className={styles.ecomServiceIntro}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── How does Nexterse LLC build ML for continuous learning (ADLC)? ── */}
        <section id="ml-adlc" className={`${styles.blockWhite} ${styles.adlcSection}`}>
          <div className="container">
            <h2 className={`${styles.sectionTitle} ${styles.adlcTitle}`}>
              How does Nexterse LLC build ML for continuous learning (<span className={styles.accent}>ADLC</span>)?
            </h2>
            <div className={styles.adlcIntro}>
              <p>
                We treat machine learning as something that runs and improves over time, not a model handed over once and forgotten. Our <span className={styles.accent}>agentic development lifecycle (ADLC)</span> links every stage, so the model that goes live keeps performing as your data shifts.
              </p>
              <p>
                In practice, the model doesn&rsquo;t sit in a dashboard waiting to be checked. It scores the transaction, flags the anomaly, or reroutes the shipment inside the process that already runs it, then logs the result so the next version trains on it.
              </p>
            </div>
            <div className={`${styles.ecomServicesGrid} ${styles.adlcGrid}`}>
              {ADLC.map((c) => (
                <div key={c.title} className={`${styles.ecomServiceCard} ${styles.adlcCard}`}>
                  <Image src={c.icon} alt={c.title} width={56} height={56} className={styles.ecomServiceIcon} />
                  <h3 className={styles.ecomServiceTitle}>{c.title}</h3>
                  <p className={styles.ecomServiceIntro}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── What does enterprise ML maturity look like? ── */}
        <section id="ml-maturity" className={styles.blockWhite}>
          <div className="container">
            <h2 className={styles.sectionTitle}>
              What does enterprise ML <span className={styles.accent}>maturity</span> look like?
            </h2>
            <p className={styles.sectionDesc}>
              Machine learning tends to mature in three stages. Knowing which one you&rsquo;re in tells you what to fix next. We move ML systems from one level to the next.
            </p>
            <div className={styles.maturityTabs} role="tablist" aria-label="ML maturity levels">
              {MATURITY.map((m, i) => (
                <button
                  key={m.label}
                  role="tab"
                  aria-selected={activeLevel === i}
                  className={`${styles.maturityTabBtn} ${activeLevel === i ? styles.maturityTabBtnActive : ""}`}
                  onClick={() => setActiveLevel(i)}
                >
                  <Image src={m.icon} alt={m.label} width={40} height={40} />
                  <span>{m.label}</span>
                </button>
              ))}
            </div>
            <div className={styles.maturityPanel}>
              <h3 className={styles.maturityPanelTitle}>{MATURITY[activeLevel].title}</h3>
              <p className={styles.maturityPanelText}>{MATURITY[activeLevel].text}</p>
              <p className={styles.maturityPanelExample}>{MATURITY[activeLevel].example}</p>
            </div>
          </div>
        </section>

        {/* ── What business impact can machine learning deliver? ── */}
        <section id="ml-impact" className={styles.blockLight}>
          <div className="container">
            <h2 className={styles.sectionTitle}>
              What business <span className={styles.accent}>impact</span> can machine learning deliver?
            </h2>
            <div className={styles.impactWrap}>
              <div className={styles.impactText}>
                <p>Machine learning earns its place when it runs inside your operations. Here&rsquo;s what Nexterse LLC&rsquo;s systems have delivered:</p>
                <ul className={styles.impactList}>
                  <li><strong>50% less unplanned downtime in 8 months</strong> from explainable predictive maintenance added to a manufacturer&rsquo;s existing IoT platform.</li>
                  <li><strong>98% on-time delivery and 22% lower last-mile cost</strong> from real-time route optimization for a freight service, with no extra trucks added.</li>
                  <li><strong>38% less unplanned downtime and 97.7% availability in 12 months</strong> from a predictive-maintenance layer on a German operator&rsquo;s 28-turbine wind farm.</li>
                </ul>
                <p>The pattern holds across projects: models embedded in live operations, producing gains you can measure on the bottom line.</p>
              </div>
              <div className={styles.impactImage}>
                <Image src="/ml/03_pexels-fauxels-3184653-683x1024.jpg" alt="Development team discussing the project" width={683} height={1024} />
              </div>
            </div>
          </div>
        </section>

        {/* ── What is Nexterse LLC's ML technology stack? ── */}
        <section id="ml-techstack" className={styles.blockWhite}>
          <div className="container">
            <h2 className={styles.sectionTitle}>
              What is Nexterse LLC&rsquo;s ML technology <span className={styles.accent}>stack</span>?
            </h2>
            <p className={styles.sectionDesc}>We pick tools based on the task, your data, and what your infrastructure supports. Here&rsquo;s what we work with.</p>
            <div className={`${styles.ecomServicesGrid} ${styles.techCardsGrid}`}>
              {TECH_CARDS.map((c) => (
                <div key={c.title} className={`${styles.ecomServiceCard} ${styles.techCard}`}>
                  <h3 className={styles.ecomServiceTitle}>{c.title}</h3>
                  {c.title === "Big data processing" ? (
                    <p className={styles.ecomServiceIntro}>For <span className={styles.accent}>high-volume data</span> we build distributed pipelines on Spark, Hadoop, and Airflow; real-time streaming with Kafka and Flink; and ETL and ELT pipelines that handle terabytes a day for training and inference.</p>
                  ) : (
                    <p className={styles.ecomServiceIntro}>{c.desc}</p>
                  )}
                </div>
              ))}
            </div>
            <div className={styles.techTableWrap}>
              <table className={styles.techTable}>
                <thead>
                  <tr>
                    <th scope="col">Services</th>
                    <th scope="col">Tools samples</th>
                  </tr>
                </thead>
                <tbody>
                  {TECH_TABLE.map((row) => (
                    <tr key={row.service}>
                      <td>{row.service}</td>
                      <td>{row.tools}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── What ML projects has Nexterse LLC delivered? ── */}
        <div id="ml-cases">
          <CaseCards heading={<>What ML <span>projects</span> has Nexterse LLC delivered?</>} cards={ML_CASES} windowed />
        </div>

        {/* ── Reviews ── */}
        <MlReviews />

        {/* ── Why choose Nexterse LLC for ML development? ── */}
        <section id="ml-why" className={`${styles.blockWhite} ${styles.whySection}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>
              Why choose <span className={styles.accent}>Nexterse LLC</span> for ML development?
            </h2>
            <div className={`${styles.ecomServicesGrid} ${styles.whyGrid}`}>
              {WHY.map((c) => (
                <div key={c.title} className={`${styles.ecomServiceCard} ${styles.whyCard}`}>
                  <Image src={c.icon} alt={c.title} width={56} height={56} className={styles.ecomServiceIcon} />
                  <h3 className={styles.ecomServiceTitle}>{c.title}</h3>
                  <p className={styles.ecomServiceIntro}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Awards & Recognitions ── */}
        <MlAwards />

        {/* ── FAQ ── */}
        <MlFaq />

        {/* ── Let's Start ── */}
        <LetsStart />

        {/* ── Awesome stories (blog) ── */}
        <AdlcBlog featured={ML_BLOG_FEATURED} sidePosts={ML_BLOG_SIDE} />
      </MlArticleLayout>
    </>
  );
}
