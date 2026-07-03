"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./VideoSection.module.css";

const VIDEO_SRC = "https://www.youtube.com/embed/WwdU_eDKeVQ?si=0dl8O0jKUi2jH2VJ";

export default function VideoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [videoSrc, setVideoSrc] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVideoSrc(VIDEO_SRC);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h2 className={styles.title}>What happens next?</h2>
          </div>
          <div className={styles.videoBlock}>
            {videoSrc && (
              <iframe
                width="100%"
                src={videoSrc}
                style={{ border: "none" }}
                loading="lazy"
                allowFullScreen
                title="What happens next at Nexterse LLC"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
