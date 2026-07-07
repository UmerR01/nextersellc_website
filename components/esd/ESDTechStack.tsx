import styles from "./ESDTechStack.module.css";

const ROWS: { title: string; tools: { src: string; alt: string }[] }[] = [
  {
    title: "AI / LLM Platforms",
    tools: [
      { src: "/esd/tech/ai-llm_1.svg", alt: "Anthropic" },
      { src: "/esd/tech/ai-llm_2.svg", alt: "Mistral AI" },
      { src: "/esd/tech/ai-llm_3.svg", alt: "Azure OpenAI" },
      { src: "/esd/tech/ai-llm_4.svg", alt: "OpenAI" },
      { src: "/esd/tech/ai-llm_5.svg", alt: "AWS Bedrock" },
    ],
  },
  {
    title: "RAG and orchestration",
    tools: [
      { src: "/esd/tech/rag_1.svg", alt: "LangChain" },
      { src: "/esd/tech/rag_2.svg", alt: "LangGraph" },
      { src: "/esd/tech/rag_3.svg", alt: "LlamaIndex" },
      { src: "/esd/tech/rag_4.svg", alt: "CrewAI" },
    ],
  },
  {
    title: "Backend development",
    tools: [
      { src: "/esd/tech/backend_1.svg", alt: "Java" },
      { src: "/esd/tech/backend_2.svg", alt: ".NET" },
      { src: "/esd/tech/backend_3.svg", alt: "R" },
      { src: "/esd/tech/backend_4.svg", alt: "Node.js" },
      { src: "/esd/tech/backend_5.svg", alt: "PHP" },
      { src: "/esd/tech/backend_6.svg", alt: "Python" },
    ],
  },
  {
    title: "Frontend development",
    tools: [
      { src: "/esd/tech/frontend_1.svg", alt: "React" },
      { src: "/esd/tech/frontend_2.svg", alt: "Next.js" },
      { src: "/esd/tech/frontend_3.svg", alt: "Vue.js" },
      { src: "/esd/tech/frontend_4.svg", alt: "Django" },
      { src: "/esd/tech/frontend_5.svg", alt: "jQuery" },
    ],
  },
  {
    title: "Mobile development",
    tools: [
      { src: "/esd/tech/mobile_1.svg", alt: "iOS" },
      { src: "/esd/tech/mobile_2.svg", alt: "Android" },
      { src: "/custom-software/tech/tool_18.svg", alt: "React Native" },
    ],
  },
];

export default function ESDTechStack() {
  return (
    <section id="our-expertise-in-tools-and-technologies" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Our expertise in <span className={styles.accent}>tools</span> and technologies
        </h2>
        <p className={styles.desc}>
          At Nexterse LLC, we choose the tools, technologies, and platforms that fit each enterprise project. Our
          experience spans programming languages, frameworks, databases, and cloud services, so we can weigh several
          architecture options and pick the best one rather than forcing every business onto a single stack.
        </p>
        <div className={styles.rows}>
          {ROWS.map((row) => (
            <div key={row.title} className={styles.row}>
              <div className={styles.rowTitle}>{row.title}</div>
              <div className={styles.logos}>
                {row.tools.map((tool) => (
                  <div key={tool.src} className={styles.logo}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={tool.src} alt={tool.alt} className={styles.logoImg} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
