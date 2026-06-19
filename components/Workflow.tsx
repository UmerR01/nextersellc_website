import Image from "next/image";
import styles from "./Workflow.module.css";

/**
 * Collaboration process — replicated from Zoolatech's
 * "cs_cont_proc_6_bn-section": header + image on the left, a connected
 * vertical timeline of numbered steps on the right. Our light theme.
 */
const STEPS = [
  {
    title: "First call",
    text: "We start with a focused conversation to understand your business objectives, technical landscape, constraints, and success criteria.",
  },
  {
    title: "Discovery and proposal",
    text: "Our team reviews requirements, assesses risks, and proposes a clear delivery plan — including team structure, timeline, and engagement model.",
  },
  {
    title: "Contract and onboarding",
    text: "We finalize the scope and agreements, assign delivery ownership, and onboard the team with clear processes, communication, and governance in place.",
  },
  {
    title: "Delivery and execution",
    text: "The engineering work begins with embedded quality, regular checkpoints, and transparent progress tracking to ensure stable, predictable delivery.",
  },
  {
    title: "Scale, optimize, and support",
    text: "We continuously improve performance, scale teams or systems as needed, and support long-term success through optimization and ongoing collaboration.",
  },
];

export default function Workflow() {
  return (
    <section className={styles.section} id="process">
      <div className={`container ${styles.content}`}>
        <div className={styles.left}>
          <span className={styles.eyebrow}>Workflow</span>
          <h2 className={styles.title}>Our Collaboration Process</h2>
          <p className={styles.sub}>
            A transparent and structured collaboration process that keeps teams aligned and
            delivery predictable.
          </p>
          <div className={styles.media}>
            <Image
              src="/cases/woman.jpg"
              alt="Working session"
              fill
              sizes="(max-width: 860px) 100vw, 440px"
              className={styles.mediaImg}
            />
          </div>
        </div>

        <div className={styles.right}>
          <ol className={styles.timeline}>
            {STEPS.map((s, i) => (
              <li key={s.title} className={styles.step}>
                <span className={styles.dot} aria-hidden />
                <div className={styles.stepLabel}>Step {i + 1}</div>
                <h3 className={styles.stepTitle}>{s.title}</h3>
                <p className={styles.stepText}>{s.text}</p>
              </li>
            ))}
          </ol>

          <div className={styles.ctaBox}>
            <p className={styles.ctaText}>
              Ready to move forward? Let&apos;s discuss your goals, challenges,
              and the best way to start working together.
            </p>
            <a href="#contact" className={styles.ctaBtn}>
              Contact Sales →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
