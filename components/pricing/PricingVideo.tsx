"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./PricingVideo.module.css";

// TODO: paste the real embed URL here (e.g. "https://www.youtube.com/embed/VIDEO_ID")
const VIDEO_URL = "";

export default function PricingVideo() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    if (!VIDEO_URL) return;
    const el = wrapRef.current;
    if (!el) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSrc(VIDEO_URL);
          observer.unobserve(entry.target);
        }
      });
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  if (!VIDEO_URL) return null;

  return (
    <section id="pricing-video" className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>
          What to expect <span className={styles.accent}>after submitting the survey</span>
        </h2>
        <div className={styles.iframeWrap} ref={wrapRef}>
          <iframe
            width="100%"
            height="100%"
            src={src ?? undefined}
            frameBorder="0"
            loading="lazy"
            allowFullScreen
            title="Nexterse LLC"
          />
        </div>
      </div>
    </section>
  );
}
