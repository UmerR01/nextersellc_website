import Image from "next/image";
import styles from "./AIBlueprint.module.css";

const ITEMS = [
  {
    title: "A focused list of top AI opportunities",
    desc: "A focused list of your top AI opportunities. We examine your most significant bottlenecks, the data you already hold, and the places where automation can make a real difference.",
  },
  {
    title: "A hands-on AI architecture plan",
    desc: "A practical AI architecture plan. Our engineers map the technical setup needed to launch the solution safely within your current systems.",
  },
  {
    title: "A clear security and governance game plan",
    desc: "A clear security and governance plan. AI must operate within strict rules, especially around sensitive data, so the blueprint sets out how we protect your data, who can access it, and how models are monitored.",
  },
  {
    title: "A straightforward cost and infrastructure estimate",
    desc: "Leaders get a practical breakdown of what it will take to run the system, from cloud costs and model fees to integration work.",
  },
  {
    title: "A step-by-step roadmap for your first Proof of Concept",
    desc: "We map out what the first pilot will look like: the scope, the timeline, and exactly how we will build it using our Agentic Development Lifecycle (ADLC).",
  },
];

export default function AIBlueprint() {
  return (
    <section className={styles.section} id="deliverables">
      <div className="container">
        <div className={styles.titleRow}>
          <h2 className={styles.title}>What&apos;s in your executive AI blueprint?</h2>
          <p className={styles.titleDesc}>
            At the end of the engagement, you receive a structured AI Blueprint your leadership
            team can act on right away. It is a thorough document that turns your business goals,
            data readiness, and technology constraints into a practical plan for putting AI to work
            inside your organization. Your executive AI blueprint includes five things.
          </p>
        </div>

        <div className={styles.body}>
          <div className={styles.list}>
            {ITEMS.map((item) => (
              <div key={item.title} className={styles.item}>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <p className={styles.itemDesc}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div className={styles.imageWrap}>
            <Image
              src="/ai-consulting/imgs/03_pexels-fauxels-3184653-683x1024.jpg"
              alt="Development team discussing the AI blueprint"
              width={683}
              height={1024}
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
