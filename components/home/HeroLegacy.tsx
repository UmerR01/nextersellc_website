"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";

// Preserved as-is for instant revert — see Hero.tsx's USE_GLASS_HERO switch.
// Three concurrent <video> elements (1 sharp + 2 blurred copies) plus manual
// scroll-position math to keep the blurred copies pixel-aligned across
// breakpoints. Heavier to decode/paint than HeroGlass, kept only as a fallback.
export default function HeroLegacy() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);

  useEffect(() => {
    const wrap = wrapRef.current;
    const stage = stageRef.current;
    if (!wrap || !stage) return;

    let ticking = false;

    const recoverVideos = () => {
      const videos = videoRefs.current.filter(
        (video): video is HTMLVideoElement => video !== null,
      );

      for (const video of videos) {
        video.muted = true;
        if (video.readyState === 0 || video.networkState === HTMLMediaElement.NETWORK_NO_SOURCE) {
          video.load();
        }
        void video.play().catch(() => {
          // A later pageshow/visibility/focus event retries muted playback.
        });
      }

      const master = videos[0];
      if (!master || master.readyState < 2) return;
      for (const copy of videos.slice(1)) {
        if (copy.readyState >= 1 && Math.abs(copy.currentTime - master.currentTime) > 0.35) {
          copy.currentTime = master.currentTime;
        }
      }
    };

    const update = () => {
      ticking = false;
      const rect = wrap.getBoundingClientRect();
      const distance = wrap.offsetHeight - window.innerHeight;
      const progress = distance > 0 ? clamp(-rect.top / distance, 0, 1) : 0;
      // On stacked layouts, finish the door movement before the sticky stage
      // releases so the revealed video gets a deliberate pause before the
      // following section enters the viewport.
      const isStacked = window.matchMedia("(max-width: 767px)").matches;
      const doorProgress = isStacked ? clamp(progress / 0.72, 0, 1) : progress;
      stage.style.setProperty("--p", doorProgress.toFixed(4));
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    const onPageActive = () => {
      if (document.visibilityState === "hidden") return;
      update();
      recoverVideos();
    };

    update();
    recoverVideos();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    window.addEventListener("pageshow", onPageActive);
    window.addEventListener("focus", onPageActive);
    document.addEventListener("visibilitychange", onPageActive);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("pageshow", onPageActive);
      window.removeEventListener("focus", onPageActive);
      document.removeEventListener("visibilitychange", onPageActive);
    };
  }, []);

  return (
    <section className={styles.wrap} ref={wrapRef} id="top">
      <div className={styles.stage} ref={stageRef}>

        {/* Layer 1 — sharp background video (revealed as doors open) */}
        <div className={styles.bg} aria-hidden>
          <video
            ref={(node) => { videoRefs.current[0] = node; }}
            className={styles.bgVideo}
            src="/hero/nexterse_herov.webm"
            preload="auto"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className={styles.bgOverlay} />
          <div className={styles.bgCaption}>
            <span className={styles.bgKicker}>Nexterse LLC</span>
            <p>Custom software and AI systems engineered to outlast launch.</p>
          </div>
        </div>

        {/* Layer 2 — blur panels that move with the doors.
            filter:blur on a real video — no backdrop-filter, no compositor issues.
            The video's left offset counteracts the door's translateX so the blurred
            image stays aligned with the background video throughout the scroll. */}
        <div className={`${styles.doorBlur} ${styles.doorBlurLeft}`} aria-hidden>
          <video ref={(node) => { videoRefs.current[1] = node; }} className={styles.doorBlurVideo} src="/hero/nexterse_herov.webm" preload="auto" autoPlay loop muted playsInline />
          <div className={styles.doorBlurTint} />
        </div>
        <div className={`${styles.doorBlur} ${styles.doorBlurRight}`} aria-hidden>
          <video ref={(node) => { videoRefs.current[2] = node; }} className={`${styles.doorBlurVideo} ${styles.doorBlurVideoRight}`} src="/hero/nexterse_herov.webm" preload="auto" autoPlay loop muted playsInline />
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
              desc="Applications engineered for performance, scalability, and reliability, built to solve real business problems."
              cta="Custom Software Development"
              href="/services/custom-software-development"
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
              desc="Intelligent solutions powered by machine learning, generative AI, automation, and AI agents, designed to boost productivity and unlock innovation."
              cta="Custom AI Development"
              href="/services/ai-software-development"
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
