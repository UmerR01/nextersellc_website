"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./QuickFacts.module.css";

const NUMBER_CARDS = [
  { number: 5, symbol: "+", title: "Years on market" },
  { number: 3, symbol: "+", title: "Years Client engagement" },
  { number: 100, symbol: "+", title: "Happy Clients" },
];

const ICON_CARDS = [
  { src: "/careers/01_Education.svg", alt: "Graduation hat icon", title: "Edu opportunities" },
  { src: "/careers/01_Remote-work.svg", alt: "Remote work icon", title: "Remote work" },
  { src: "/careers/01_Schedule.svg", alt: "Flexible schedule icon", title: "Flexible schedule" },
  { src: "/careers/01_Treats.svg", alt: "Company treats icon", title: "Company treats" },
  { src: "/careers/01_World-international.svg", alt: "International projects icon", title: "International projects" },
  { src: "/careers/01_Games.svg", alt: "Corporate activities icon", title: "Corporate activities" },
];

function CounterNumber({ target, symbol }: { target: number; symbol: string }) {
  const spanRef = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = spanRef.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const animate = () => {
      if (animated.current) return;
      animated.current = true;
      if (reduced || target <= 0) {
        el.textContent = String(Math.max(target, 0));
        return;
      }
      const start = performance.now();
      const duration = 900;
      const step = (now: number) => {
        const t = Math.min((now - start) / duration, 1);
        el.textContent = String(Math.floor(t * target));
        if (t < 1) requestAnimationFrame(step);
        else el.textContent = String(target);
      };
      requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "100px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardNumber} ref={spanRef}>0</div>
      <div className={styles.cardSymbol}>{symbol}</div>
    </div>
  );
}

export default function QuickFacts() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Quick <span className={styles.titleAccent}>facts</span>
        </h2>
        <div className={styles.cards}>
          <div className={styles.row}>
            {NUMBER_CARDS.map((card, i) => (
              <div key={i} className={styles.col}>
                <div className={styles.card}>
                  <CounterNumber target={card.number} symbol={card.symbol} />
                  <div className={styles.cardTitle}>{card.title}</div>
                </div>
              </div>
            ))}
            {ICON_CARDS.map((card, i) => (
              <div key={i} className={styles.col}>
                <div className={styles.card}>
                  <div className={styles.cardWrapper}>
                    <Image
                      src={card.src}
                      alt={card.alt}
                      width={56}
                      height={56}
                      className={styles.cardIcon}
                      loading="lazy"
                    />
                  </div>
                  <div className={styles.cardTitle}>{card.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
