import Image from "next/image";
import styles from "./ServicesTechStack.module.css";

type Tool = { src: string; alt: string; badge?: boolean };

const ROWS: { title: string; tools: Tool[] }[] = [
  {
    title: "AI foundational models",
    tools: [
      { src: "/custom-software/tech/tool_1.svg", alt: "AWS Bedrock" },
      { src: "/custom-software/tech/tool_2.svg", alt: "Mistral AI" },
      { src: "/custom-software/tech/tool_3.svg", alt: "Azure OpenAI" },
      { src: "/custom-software/tech/tool_4.svg", alt: "Anthropic" },
      { src: "/custom-software/tech/tool_5.svg", alt: "AI foundational model" },
    ],
  },
  {
    title: "Orchestration & agent frameworks",
    tools: [
      { src: "/custom-software/tech/tool_7.svg", alt: "LangChain" },
      { src: "/custom-software/tech/tool_8.svg", alt: "LlamaIndex" },
      { src: "/custom-software/tech/tool_9.svg", alt: "AutoGen" },
      { src: "/custom-software/tech/tool_10.svg", alt: "CrewAI" },
    ],
  },
  {
    title: "Software development",
    tools: [
      { src: "/custom-software/tech/tool_11.svg", alt: "Java" },
      { src: "/custom-software/tech/tool_12.svg", alt: ".NET", badge: true },
      { src: "/custom-software/tech/tool_13.svg", alt: "PHP" },
      { src: "/custom-software/tech/tool_14.svg", alt: "R" },
      { src: "/custom-software/tech/tool_15.svg", alt: "Python" },
      { src: "/custom-software/tech/tool_16.svg", alt: "Node.js" },
      { src: "/custom-software/tech/tool_17.svg", alt: "JavaScript", badge: true },
    ],
  },
  {
    title: "Mobile development",
    tools: [
      { src: "/custom-software/tech/tool_18.svg", alt: "React Native" },
      { src: "/custom-software/tech/tool_19.svg", alt: "iOS" },
      { src: "/custom-software/tech/tool_20.svg", alt: "Android" },
    ],
  },
];

export default function ServicesTechStack() {
  return (
    <section id="svc-techstack" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>
            <span className={styles.accent}>Core tech stack</span> we work with
          </h2>
          <div className={styles.tools}>
            {ROWS.map((row) => (
              <div key={row.title} className={styles.row}>
                <div className={styles.rowTitle}>{row.title}</div>
                <div className={styles.logos}>
                  {row.tools.map((tool) => (
                    <div key={tool.src} className={styles.logo}>
                      <Image
                        src={tool.src}
                        alt={tool.alt}
                        width={120}
                        height={40}
                        className={styles.logoImg}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
