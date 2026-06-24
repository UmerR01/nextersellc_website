import Image from "next/image";
import styles from "./AIBlueprint.module.css";

const ITEMS = [
  {
    title: "A focused list of top AI opportunities",
    desc: "We dig into your biggest bottlenecks, the data you've got, and where automation can make a real difference.",
  },
  {
    title: "A hands-on AI architecture plan",
    desc: "Our engineers sketch out the technical setup you'll need to launch the solution safely inside your current systems.",
  },
  {
    title: "A clear security and governance game plan",
    desc: "AI needs to play by the rules — especially with sensitive data. Our blueprint spells out how we'll keep your data safe, who gets access, and how we'll monitor the models.",
  },
  {
    title: "A straightforward cost and infrastructure estimate",
    desc: "Leaders get a no-nonsense breakdown of what it'll take to run the system — from cloud costs and model fees to integration work.",
  },
  {
    title: "A step-by-step roadmap for your first Proof of Concept",
    desc: "We map out what the first pilot will look like: the scope, the timeline, and exactly how we'll build it using our Agentic Development Lifecycle (ADLC).",
  },
];

export default function AIBlueprint() {
  return (
    <section className={styles.section} id="deliverables">
      <div className="container">
        <div className={styles.titleRow}>
          <h2 className={styles.title}>
            The <span>output</span>: your executive AI blueprint
          </h2>
          <p className={styles.titleDesc}>
            At the end of the engagement, you receive a structured AI Blueprint that your leadership
            team can act on immediately. It translates business goals, data readiness, and technology
            constraints into a practical implementation plan for artificial intelligence inside your
            organization. Your executive AI blueprint includes:
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

        <p className={styles.bottom}>
          <strong>This blueprint sets the stage for your AI transformation.</strong>{" "}
          It helps your team get everyone on board, secure funding, and launch with confidence.
          Instead of vague ideas, you get a concrete plan that ties your business goals directly
          to a clear, technical path into production.
        </p>
      </div>
    </section>
  );
}
