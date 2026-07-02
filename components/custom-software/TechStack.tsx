import styles from "./TechStack.module.css";

const ROWS: { title: string; tools: { src: string; alt: string }[] }[] = [
  {
    title: "AI foundational models",
    tools: [
      { src: "/custom-software/tech/tool_1.svg", alt: "AWS Bedrock" },
      { src: "/custom-software/tech/tool_2.svg", alt: "Mistral AI" },
      { src: "/custom-software/tech/tool_3.svg", alt: "Azure OpenAI" },
      { src: "/custom-software/tech/tool_4.svg", alt: "Anthropic" },
      { src: "/custom-software/tech/tool_5.svg", alt: "AI foundational model" },
      { src: "/custom-software/tech/tool_6.svg", alt: "AI foundational model" },
    ],
  },
  {
    title: "Orchestration & agent frameworks",
    tools: [
      { src: "/custom-software/tech/tool_7.svg", alt: "Orchestration framework" },
      { src: "/custom-software/tech/tool_8.svg", alt: "Agent framework" },
      { src: "/custom-software/tech/tool_9.svg", alt: "Agent framework" },
      { src: "/custom-software/tech/tool_10.svg", alt: "Agent framework" },
    ],
  },
  {
    title: "Software development",
    tools: [
      { src: "/custom-software/tech/tool_11.svg", alt: "Software development tool" },
      { src: "/custom-software/tech/tool_12.svg", alt: "Software development tool" },
      { src: "/custom-software/tech/tool_13.svg", alt: "Software development tool" },
      { src: "/custom-software/tech/tool_14.svg", alt: "Software development tool" },
      { src: "/custom-software/tech/tool_15.svg", alt: "Software development tool" },
      { src: "/custom-software/tech/tool_16.svg", alt: "Software development tool" },
      { src: "/custom-software/tech/tool_17.svg", alt: "Software development tool" },
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

export default function TechStack() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
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
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={tool.src}
                      alt={tool.alt}
                      className={styles.logoImg}
                    />
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
