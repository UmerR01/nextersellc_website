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
    text: "We start with an open conversation to understand your business goals, technical environment, constraints, and what success looks like for your team.",
  },
  {
    title: "Requirements & proposal",
    text: "We evaluate your requirements, surface risks early, and deliver a clear proposal covering scope, team composition, milestones, and engagement model.",
  },
  {
    title: "Agreement & team setup",
    text: "We finalize scope, sign the agreement, and set up the delivery team, with communication protocols, tooling, and governance ready before the first sprint.",
  },
  {
    title: "Build & iterate",
    text: "Development begins with quality built in from sprint one, backed by regular demos, transparent tracking, and fast escalation of any blockers.",
  },
  {
    title: "Grow, tune & sustain",
    text: "After launch, we tune performance, scale team capacity as your needs grow, and stay on as a long-term partner invested in your continued success.",
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
            A clear, structured engagement model that keeps every stakeholder aligned
            from the first conversation through long-term delivery.
          </p>
          <div className={`${styles.media} ${styles.desktopMedia}`}>
            <Image
              src="/cases/we_work.jpg"
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
            <a href="#get-modal-popup" className={styles.ctaBtn}>
              Start the conversation
            </a>
          </div>
        </div>

        <div className={`${styles.media} ${styles.mobileMedia}`}>
          <Image
            src="/cases/woman.jpg"
            alt="Working session"
            fill
            sizes="100vw"
            className={styles.mediaImg}
          />
        </div>
      </div>
    </section>
  );
}
