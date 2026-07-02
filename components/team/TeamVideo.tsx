"use client";

import { useRef, useState, useEffect } from "react";
import styles from "./TeamVideo.module.css";

const VIDEO_URL =
  "https://www.youtube.com/embed/ZTh9cDjyf8U?si=CQO7ZVqX19iF5D8s";

export default function TeamVideo() {
  const sectionRef = useRef<HTMLElement>(null);
  const [src, setSrc] = useState<string>("");

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSrc(VIDEO_URL);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.container}>
        <div className={styles.videoBlock}>
          {src && (
            <iframe
              src={src}
              title="Nexterse LLC company video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          )}
        </div>
      </div>
    </section>
  );
}
