"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";

/**
 * Hero — Satva's scroll-driven "sliding door" behaviour fused with Sumato's
 * two-column dev / AI cards.
 *
 * A tall wrapper provides scroll distance; an inner stage is sticky and pinned
 * to the viewport. Scroll progress (0 → 1) is written to a CSS custom property
 * `--p` on the stage, which drives the two door panels apart to reveal the
 * background. Each door carries one Sumato card, so the cards slide outward
 * with the doors.
 */
export default function Hero() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const stage = stageRef.current;
    if (!wrap || !stage) return;

    let ticking = false;

    const update = () => {
      ticking = false;
      const rect = wrap.getBoundingClientRect();
      const distance = wrap.offsetHeight - window.innerHeight;
      // 0 while the top is at/below the viewport top, 1 once fully scrolled past.
      const progress = distance > 0 ? clamp(-rect.top / distance, 0, 1) : 0;
      stage.style.setProperty("--p", progress.toFixed(4));
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

  return (
    <section className={styles.wrap} ref={wrapRef} id="top">
      <div className={styles.stage} ref={stageRef}>
        {/* Background revealed as the doors part */}
        <div className={styles.bg} aria-hidden>
          <div className={styles.bgGrid} />
          <div className={styles.bgGlowBlue} />
          <div className={styles.bgGlowRed} />
          <div className={styles.bgCaption}>
            <span className={styles.bgKicker}>Nexterse</span>
            <p>Software engineering &amp; applied AI, built to outlast launch.</p>
          </div>
        </div>

        {/* LEFT DOOR */}
        <div className={`${styles.door} ${styles.doorLeft}`}>
          <div className={styles.doorContent}>
            <h1 className={`${styles.heading} ${styles.headingLeft}`}>
              We build
              <br />
              the partnership
            </h1>
            <Card
              className={styles.cardLeft}
              img="/hero/dev.png"
              title="Traditional software development"
              desc="Structured, rule-based, deterministic. Built on proven human methodologies and explicit code."
              cta="Custom software development"
              href="#contact"
            />
          </div>
        </div>

        {/* RIGHT DOOR */}
        <div className={`${styles.door} ${styles.doorRight}`}>
          <div className={styles.doorContent}>
            <h1 className={`${styles.heading} ${styles.headingRight}`}>
              software &amp; AI
              <br />
              that outlasts it
            </h1>
            <Card
              className={styles.cardRight}
              img="/hero/ai.png"
              title="AI-driven software development"
              desc="Experimental, adaptive, probabilistic. Data-driven models, continuous learning, and automated optimization."
              cta="Custom AI development"
              href="#contact"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

function Card({
  className,
  img,
  title,
  desc,
  cta,
  href,
}: {
  className: string;
  img: string;
  title: string;
  desc: string;
  cta: string;
  href: string;
}) {
  return (
    <div className={`${styles.card} ${className}`}>
      <div className={styles.cardImage}>
        <Image src={img} alt="" width={341} height={223} priority />
      </div>
      <div className={styles.cardTitle}>{title}</div>
      <p className={styles.cardDesc}>{desc}</p>
      <a href={href} className="btn btn-outline">
        {cta}
      </a>
    </div>
  );
}

function clamp(v: number, min: number, max: number) {
  return Math.min(max, Math.max(min, v));
}
