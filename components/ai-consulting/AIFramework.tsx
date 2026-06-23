import styles from "./AIFramework.module.css";

type Step = {
  title: string;
  paragraphs: string[];
  list?: string[];
  postList?: string;
};

const STEPS: Step[] = [
  {
    title: "Step 1: Data & Infrastructure audit",
    paragraphs: [
      "No AI project gets off the ground without good, accessible, and secure data.",
      "So, we start by having our engineers comb through your setup — everything from data sources and quality to APIs, system integrations, cloud capacity, and security rules.",
      "We check if your business is ready for AI, whether that's generative assistants, predictive models, or more advanced workflows. If your systems need some work, we'll lay out a modernization plan, so you're set up for AI before building anything.",
    ],
  },
  {
    title: "Step 2: Use-case discovery & prioritization",
    paragraphs: [
      "AI should solve real operational headaches — the stuff that actually slows you down.",
      "We sit down with your team and hunt for AI opportunities across departments: operations, support, finance, logistics, engineering. Then we rank each idea based on the impact it'll have, how tough it is to pull off, and how quickly you'll see results.",
      "In the end, you get a clear list of AI projects that make sense for your business — knowledge assistants, document automation, predictive analytics, and smart dashboards.",
    ],
  },
  {
    title: "Step 3: Build vs. Buy evaluation",
    paragraphs: [
      "You don't need to reinvent the wheel for every problem. We help you figure out if it's smarter to buy off-the-shelf AI tools or build something custom. We compare what's out there — existing platforms, SaaS tools, costs, integration needs, and how they handle your data and IP.",
      "Many companies end up adopting a hybrid approach that blends commercial AI with custom solutions — usually the fastest, most flexible, and cost-effective way forward.",
    ],
  },
  {
    title: "Step 4: Security & Governance mapping",
    paragraphs: [
      "AI needs guardrails. No way around it.",
      "We design a governance plan so your AI systems play by the rules. That includes tight access controls, human checks at key decision points, ongoing monitoring, and ensuring you meet standards like ISO 27001, SOC 2, or whatever your industry requires.",
      "This layer keeps your AI reliable, transparent, and in line with your policies.",
    ],
  },
  {
    title: "Step 5: The result",
    paragraphs: [
      "At the end, you walk away with a real plan — a step-by-step blueprint for bringing AI into your business.",
      "You get:",
    ],
    list: [
      "A ranked list of AI projects with the biggest impact.",
      "A secure architecture for rolling out AI.",
      "A full breakdown of costs and infrastructure for your first proof of concept.",
      "A recommended development roadmap built on our Agentic Development Lifecycle (ADLC) methodology.",
    ],
    postList:
      "Instead of jumping between random tools, you get a clear path to building AI systems that actually drive results.",
  },
];

export default function AIFramework() {
  return (
    <section className={styles.section} id="framework">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>
            AI consulting <span>framework</span>
          </h2>
          <p className={styles.desc}>
            Our AI consulting framework is meant to give you a real plan — one
            that actually fits your data, your tech, and what your business
            cares about. First, we do a deep technical dive into your systems
            and look for the real places where AI makes a difference.
            Our framework has four steps, each one designed to take you from a
            first look to a plan you can run with.
          </p>
        </div>

        <div className={styles.steps}>
          {STEPS.map((s, i) => (
            <div key={s.title} className={styles.step}>
              <div className={styles.stepNum}>
                <span>{i + 1}</span>
              </div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{s.title}</h3>
                <div className={styles.stepDesc}>
                  {s.paragraphs.map((p, pi) => (
                    <p key={pi}>{p}</p>
                  ))}
                  {s.list && (
                    <ul className={styles.stepList}>
                      {s.list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                  {s.postList && <p>{s.postList}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
