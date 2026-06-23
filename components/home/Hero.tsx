"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";

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

        {/* Layer 1 — sharp background video (revealed as doors open) */}
        <div className={styles.bg} aria-hidden>
          <video
            className={styles.bgVideo}
            src="/hero/nexterse_herov.webm"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className={styles.bgOverlay} />
          <div className={styles.bgCaption}>
            <span className={styles.bgKicker}>Nexterse</span>
            <p>Software engineering &amp; applied AI, built to outlast launch.</p>
          </div>
        </div>

        {/* Layer 2 — blur panels that move with the doors.
            filter:blur on a real video — no backdrop-filter, no compositor issues.
            The video's left offset counteracts the door's translateX so the blurred
            image stays aligned with the background video throughout the scroll. */}
        <div className={`${styles.doorBlur} ${styles.doorBlurLeft}`} aria-hidden>
          <video className={styles.doorBlurVideo} src="/hero/nexterse_herov.webm" autoPlay loop muted playsInline />
          <div className={styles.doorBlurTint} />
        </div>
        <div className={`${styles.doorBlur} ${styles.doorBlurRight}`} aria-hidden>
          <video className={`${styles.doorBlurVideo} ${styles.doorBlurVideoRight}`} src="/hero/nexterse_herov.webm" autoPlay loop muted playsInline />
          <div className={styles.doorBlurTint} />
        </div>

        {/* Layer 3 — door panels (transparent bg, just carry the content) */}
        <div className={`${styles.door} ${styles.doorLeft}`}>
          <div className={styles.doorContent}>
            <h1 className={`${styles.heading} ${styles.headingLeft}`}>
              We build
              <br />
              software that drives
              <br />
              business
            </h1>
            <Card
              className={styles.cardLeft}
              img="/hero/dev.png"
              title="Custom Software Development"
              desc="Purpose-built applications engineered for performance, scalability, and reliability—crafted to solve real business challenges."
              cta="Custom Software Development"
              href="#contact"
            />
          </div>
        </div>

        <div className={`${styles.door} ${styles.doorRight}`}>
          <div className={styles.doorContent}>
            <h1 className={`${styles.heading} ${styles.headingRight}`}>
              We build
              <br />
              AI that transforms
              <br />
              business
            </h1>
            <Card
              className={styles.cardRight}
              img="/hero/ai.png"
              title="Custom AI Development"
              desc="Intelligent solutions powered by machine learning, generative AI, automation, and AI agents—designed to enhance productivity and unlock innovation."
              cta="Custom AI Development"
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
