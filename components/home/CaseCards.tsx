"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./CaseCards.module.css";

export type CaseCard = {
  banner: string;
  name: string;
  title: string;
  text: string;
  href?: string;
  tags?: string[];
  stats?: string[];
};

const CARDS: CaseCard[] = [
  {
    banner: "/cases/si-digital.webp",
    name: "Who is Nexterse LLC?",
    title: "Your digital partner for strategic outcomes",
    text: "We drive business profitability by steering advanced technologies, responsible delivery, and human-centered collaboration toward your endgame.",
    stats: [
      "+12% labor productivity for a Fortune Global 500 manufacturer",
      "+22% logistics hub availability for high-load supply chains",
      "2× faster time to market for a FinTech startup",
    ],
  },
  {
    banner: "/cases/si-rhythm.webp",
    name: "Industrial Rhythm Harmonization",
    title: "An AI-assisted industrial transparency solution for long-term resilience",
    text: "We restore and stabilize the production and operational rhythm of industrial enterprises by transforming real-time data into actionable insight.",
    tags: ["Real-time data", "Predictive insight", "Operational resilience", "Process visibility", "Anomaly detection", "Continuous monitoring"],
  },
  {
    banner: "/cases/si-tech.webp",
    name: "The AI Era is Here",
    title: "We bridge the gap between tech progress and business advantage",
    text: "AI reshapes how industries think, decide, and grow. Navigate new tech responsibly, strategically, and data-first.",
    tags: ["AI strategy", "Data for AI", "Secure AI adoption", "AI automation", "Agentic AI", "MLOps & LLMOps"],
  },
  {
    banner: "/cases/si-value.webp",
    name: "Trade & Industry Value Chain",
    title: "We bring value where industries meet",
    text: "As boundaries between industries fade, siloed thinking no longer works — success comes from connecting capabilities across the value chain.",
    tags: ["Supply chain", "Logistics", "Manufacturing", "Fintech", "Retail", "Enterprise"],
  },
];

export default function CaseCards({
  cards = CARDS,
  heading,
  windowed = false,
}: {
  cards?: CaseCard[];
  heading?: React.ReactNode;
  windowed?: boolean;
}) {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState<-1 | 0 | 1>(0);
  const touchStartX = useRef<number | null>(null);
  const count = cards.length;

  const go = (steps: number) => {
    setDirection(steps > 0 ? 1 : -1);
    setActive((i) => (i + steps + count) % count);
  };

  const onTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const onTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    const endX = event.changedTouches[0]?.clientX;
    if (endX === undefined) return;
    const distance = touchStartX.current - endX;
    touchStartX.current = null;
    if (Math.abs(distance) < 50) return;
    go(distance > 0 ? 1 : -1);
  };

  // In windowed mode: render a sliding window of up to 4 cards at a time.
  // The window only shifts when the active card would otherwise fall
  // outside it — clicking a card that is already visible just moves the
  // "active" flag to that same DOM node, so the flex-grow transition
  // (same one non-windowed mode relies on) actually plays.
  const windowSize = windowed ? Math.min(4, count) : count;
  const [windowStart, setWindowStart] = useState(0);

  useEffect(() => {
    if (!windowed) return;
    setWindowStart((start) => {
      const offset = (active - start + count) % count;
      if (offset < windowSize) return start;
      const preferredOffset = windowSize > 1 ? 1 : 0;
      return (active - preferredOffset + count) % count;
    });
  }, [active, windowed, windowSize, count]);

  const windowIndices = windowed
    ? Array.from({ length: windowSize }, (_, pos) => (windowStart + pos) % count)
    : cards.map((_, i) => i);

  const renderCards = windowIndices.map((cardIdx, windowPos) => {
    const card = cards[cardIdx];
    const isActive = cardIdx === active;
    const isTabletNext = cardIdx === (active + 1) % count;

    const handleClick = () => {
      if (isActive) return;
      setDirection(1);
      setActive(cardIdx);
    };

    return (
      <article
        key={windowed ? `w${windowPos}` : card.name}
        className={`${styles.card} ${isActive ? styles.active : ""} ${
          isActive && direction === 1
            ? styles.slideNext
            : isActive && direction === -1
              ? styles.slidePrev
              : ""
        } ${isTabletNext ? styles.tabletNext : ""}`}
        onClick={handleClick}
      >
        <Image
          src={card.banner}
          alt={card.name}
          fill
          sizes="(max-width:767px) 100vw, 60vw"
          className={styles.banner}
        />
        <div className={styles.mask} />

        <div className={styles.name}>{card.name}</div>

        <div className={styles.body}>
          <h3 className={styles.title}>{card.title}</h3>
          <p className={styles.text}>{card.text}</p>
        </div>

        <div className={styles.meta}>
          {card.tags ? (
            <ul className={styles.tags}>
              {card.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          ) : (
            <ul className={styles.stats}>
              {card.stats?.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          )}

          <div className={styles.nav}>
            <button
              aria-label="Previous case"
              onClick={(e) => { e.stopPropagation(); go(-1); }}
            >
              ←
            </button>
            <button
              aria-label="Next case"
              onClick={(e) => { e.stopPropagation(); go(1); }}
            >
              →
            </button>
          </div>
        </div>

        <span className={styles.arrow} aria-hidden>↗</span>
      </article>
    );
  });

  return (
    <section className={styles.section} id="case-studies">
      <div className="container">
        <h2 className={styles.heading}>
          {heading ?? <>Case studies <span>that move the numbers</span></>}
        </h2>

        <div
          className={styles.cards}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          aria-label="Case studies carousel"
        >
          {renderCards}
        </div>
      </div>
    </section>
  );
}
