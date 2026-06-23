import Image from "next/image";
import styles from "./Workflow.module.css";

/**
 * Collaboration process — replicated from Zoolatech's
 * "cs_cont_proc_6_bn-section": header + image on the left, a connected
 * vertical timeline of numbered steps on the right. Our light theme.
 */
const STEPS = [
  {
    title: "Initial conversation",
    text: "We open with a direct discussion to map your business goals, technical environment, constraints, and what success looks like — no sales pitch, just clarity.",
  },
  {
    title: "Requirements & proposal",
    text: "Our team evaluates your requirements, identifies risks early, and delivers a structured proposal covering scope, team composition, milestones, and engagement model.",
  },
  {
    title: "Agreement & team setup",
    text: "We lock in scope, sign off on agreements, and establish delivery ownership — with communication protocols, tooling, and governance ready before the first sprint.",
  },
  {
    title: "Build & iterate",
    text: "Engineering gets underway with quality embedded from sprint one — regular demos, transparent tracking, and early escalation of any blockers.",
  },
  {
    title: "Grow, tune & sustain",
    text: "Post-launch, we optimize performance, adapt team capacity as your needs evolve, and remain a long-term partner invested in your continued growth.",
  },
];

export default function Workflow() {
  return (
    <section className={styles.section} id="process">
      <div className={`container ${styles.content}`}>
        <div className={styles.left}>
          <span className={styles.eyebrow}>Workflow</span>
          <h2 className={styles.title}>How We Work Together</h2>
          <p className={styles.sub}>
            A structured, no-surprises engagement model designed to keep every stakeholder
            aligned from first conversation to long-term delivery.
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
              Have a project in mind? Tell us what you&apos;re building and we&apos;ll
              map out the fastest path to getting it done right.
            </p>
            <a href="#contact" className={styles.ctaBtn}>
              Start the conversation →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
