import Image from "next/image";
import styles from "./AIConsultingServices.module.css";

const SERVICES = [
  {
    icon: "/ai-consulting/imgs/03_AI-generative-AI-readiness-assessment-01.svg",
    iconAlt: "AI readiness assessment",
    title: "AI & generative AI readiness assessment",
    href: "/ai-consulting#services",
    body: (
      <>
        <p>
          Jumping into AI without checking your foundation is risky. Our
          readiness assessment takes a close look at your current setup and
          shows you the quickest route to real AI results. The outcome is a
          clear roadmap with realistic timelines and measurable ROI.
        </p>
        <p><b>Key activities include:</b></p>
        <ul>
          <li>Data availability and quality evaluation.</li>
          <li>Cloud and infrastructure capability analysis.</li>
          <li>Security and compliance posture review.</li>
          <li>AI opportunity identification across departments.</li>
        </ul>
      </>
    ),
    linkLabel: "AI readiness assessment",
  },
  {
    icon: "/ai-consulting/imgs/03_AI-strategy-use-case-prioritization-01.svg",
    iconAlt: "AI strategy use-case prioritization",
    title: "AI strategy & use-case prioritization",
    href: null,
    body: (
      <>
        <p>
          Many organizations struggle with identifying where AI creates the
          most business value. We work with executive and operational teams to
          identify high-impact opportunities and prioritize initiatives based
          on:
        </p>
        <ul>
          <li>Expected ROI.</li>
          <li>Implementation complexity.</li>
          <li>Data readiness.</li>
          <li>Strategic alignment with business objectives.</li>
        </ul>
      </>
    ),
    linkLabel: null,
  },
  {
    icon: "/ai-consulting/imgs/03_LLM-agentic-architecture-design-03.svg",
    iconAlt: "LLM agentic architecture design",
    title: "LLM & agentic architecture design",
    href: null,
    body: (
      <>
        <p>
          Modern AI systems increasingly rely on large language models and
          multi-agent architectures to automate complex workflows. Our
          architects design secure, scalable AI infrastructure that integrates
          with your existing enterprise systems.
        </p>
        <p><b>This includes:</b></p>
        <ul>
          <li>Retrieval-augmented generation (RAG) architectures for enterprise knowledge.</li>
          <li>Multi-agent orchestration frameworks.</li>
          <li>Integration with CRM, ERP, and internal data platforms.</li>
          <li>Model selection and model-agnostic architecture design.</li>
        </ul>
      </>
    ),
    linkLabel: null,
  },
  {
    icon: "/ai-consulting/imgs/03_Data-engineering-AI-foundations-02.svg",
    iconAlt: "Data engineering AI foundations",
    title: "Data engineering & AI foundations",
    href: "/ai-consulting#services",
    body: (
      <>
        <p>
          Data readiness remains the most common barrier to successful AI
          implementation. We help organizations modernize their data
          infrastructure so AI systems can operate on reliable, accessible,
          and well-governed data.
        </p>
        <p><b>Typical engagements include:</b></p>
        <ul>
          <li>Data platform architecture design.</li>
          <li>Data pipeline development and integration.</li>
          <li>Unstructured data preparation for AI systems.</li>
          <li>Data governance frameworks for AI operations.</li>
        </ul>
      </>
    ),
    linkLabel: "Data Analytics services",
  },
  {
    icon: "/ai-consulting/imgs/03_AI-governance-02.svg",
    iconAlt: "AI governance security compliance",
    title: "AI governance, security & compliance strategy",
    href: null,
    body: (
      <>
        <p>
          Enterprise AI systems must meet strict requirements for security,
          privacy, and regulatory compliance. Our consulting practice helps
          organizations design governance frameworks that ensure AI operates
          within clear operational guardrails.
        </p>
        <p><b>This includes:</b></p>
        <ul>
          <li>AI risk and compliance assessments.</li>
          <li>Legacy modernization for AI readiness.</li>
          <li>Bias monitoring and explainability frameworks.</li>
          <li>Data privacy and model security architecture.</li>
          <li>Human-in-the-loop oversight models.</li>
        </ul>
      </>
    ),
    linkLabel: null,
  },
  {
    icon: "/ai-consulting/imgs/03_Cost-per-token-02.svg",
    iconAlt: "Cost per token ROI modeling",
    title: "Cost-per-token & ROI modeling",
    href: null,
    body: (
      <>
        <p>
          One of the most overlooked risks in AI implementation is
          uncontrolled infrastructure and model usage costs. We build
          financial models that estimate the true operational cost of AI
          systems before development begins.
        </p>
        <p><b>This includes:</b></p>
        <ul>
          <li>Cloud infrastructure forecasting.</li>
          <li>Token consumption modelling for LLM workloads.</li>
          <li>Operational cost simulations.</li>
          <li>ROI projections for AI initiatives.</li>
        </ul>
      </>
    ),
    linkLabel: null,
  },
];

export default function AIConsultingServices() {
  return (
    <section className={styles.section} id="services">
      <div className="container">
        <h2 className={styles.title}>
          Our core <span>AI consulting services</span>
        </h2>
        <p className={styles.desc}>
          AI can drive real results for your business, but you need the right
          setup to make it work. That&apos;s where our AI consulting comes in.
          We help you stop tinkering and start building AI systems that
          deliver, making sure your tech, data, and business plans sync up.
        </p>

        <div className={styles.grid}>
          {SERVICES.map((s) => (
            <div key={s.title} className={styles.card}>
              <Image
                src={s.icon}
                alt={s.iconAlt}
                width={56}
                height={56}
                className={styles.cardIcon}
              />
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <div className={styles.cardBody}>{s.body}</div>
              {s.linkLabel && s.href && (
                <a href={s.href} className={styles.cardLink}>
                  {s.linkLabel}
                  <span>→</span>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
