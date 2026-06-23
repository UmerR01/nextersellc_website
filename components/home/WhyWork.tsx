"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./WhyWork.module.css";

/**
 * Why companies work with us — replicated from Satva's "text-reveal-container"
 * (a scroll-driven word-by-word reveal of the CHALLENGES paragraph) followed
 * by the "Why work with Satva" value cards. Brought into our theme.
 */
const REVEAL =
  "Most software projects don’t fail from lack of talent — they fail from poor communication, shifting scope, and teams that disappear after launch. We’re built to fix exactly that.";

const REASONS = [
  {
    title: "Outcomes, not outputs",
    text: "We don’t measure success by tickets closed or features shipped. We stay accountable for real-world results — performance, adoption, and business impact — long after the build ends.",
  },
  {
    title: "Your team, not a vendor",
    text: "We embed into your product process, not alongside it. Clients stay with us because we treat their goals as our own — not because of a contract, but because that’s how we work.",
  },
  {
    title: "Transparent pricing, zero surprises",
    text: "Fixed-scope or ongoing capacity — either way, you always know exactly what you’re paying for and why. No scope creep, no hidden costs, no retroactive negotiations.",
  },
];

export default function WhyWork() {
  const revealRef = useRef<HTMLParagraphElement>(null);
  const [progress, setProgress] = useState(0);

  // Drive the reveal from the paragraph's position in the viewport.
  useEffect(() => {
    const el = revealRef.current;
    if (!el) return;
    let ticking = false;
    const update = () => {
      ticking = false;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.85;
      const end = vh * 0.35;
      const p = (start - rect.top) / (start - end);
      setProgress(Math.min(1, Math.max(0, p)));
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const words = REVEAL.split(" ");
  const revealedCount = progress * words.length;

  return (
    <section className={styles.section} id="why-us">
      <div className="container">
        <span className={styles.eyebrow}>Why most software projects stall</span>
        <p className={styles.reveal} ref={revealRef}>
          {words.map((w, i) => (
            <span
              key={i}
              className={styles.word}
              style={{ opacity: i < revealedCount ? 1 : 0.22 }}
            >
              {w}{" "}
            </span>
          ))}
        </p>

        <div className={styles.why}>
          <div className={styles.whyHead}>
            <h2 className={styles.title}>Why companies choose Nexterse</h2>
            <p className={styles.sub}>
              We cut through the noise with senior-led teams, defined accountability,
              and a culture of shipping software that actually works.
            </p>
          </div>
          <div className={styles.cards}>
            {REASONS.map((r) => (
              <div key={r.title} className={styles.card}>
                <h3 className={styles.cardTitle}>{r.title}</h3>
                <p className={styles.cardText}>{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
