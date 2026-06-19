"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./WhyWork.module.css";

/**
 * Why companies work with us — replicated from Satva's "text-reveal-container"
 * (a scroll-driven word-by-word reveal of the CHALLENGES paragraph) followed
 * by the "Why work with Satva" value cards. Brought into our theme.
 */
const REVEAL =
  "We solve the common frustrations that plague software development projects. No poor communication, no constant delays, and no overcomplicated process — just a smooth, successful journey.";

const REASONS = [
  {
    title: "Delivery, not theatre",
    text: "We’re not a slide-deck consultancy or a body-shop. We build real software, with real teams, and we stay accountable for outcomes long after kickoff.",
  },
  {
    title: "Partnership over transactions",
    text: "Our clients stay with us because we care about what they’re trying to achieve, not just what we’re building. We are part of your team, not a supplier.",
  },
  {
    title: "Commercial clarity from day one",
    text: "Clear pricing, defined scope or capacity, and no surprises. Whether it’s a fixed project or ongoing delivery, you always know what you’re paying for and why.",
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
        <span className={styles.eyebrow}>Challenges of the software development process</span>
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
            <h2 className={styles.title}>Why companies work with us</h2>
            <p className={styles.sub}>
              We remove the friction through clear ownership, experienced teams, and clear
              accountability.
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
