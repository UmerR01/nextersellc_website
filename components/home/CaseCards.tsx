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
    banner: "/cases/digital.jpg",
    name: "Better Digital Experiences",
    title: "A Modern Web Platform Built for Performance & Growth",
    text: "We partnered with WorkHive to build a modern, responsive web experience focused on usability, performance, and scalability for long-term growth.",
    stats: [
      "100% Responsive Across All Devices",
      "Optimized for Speed & Performance",
      "Scalable Architecture for Future Growth",
    ],
  },
  {
    banner: "/cases/automate.jpg",
    name: "Automate. Connect. Scale.",
    title: "Transforming Business Operations with CRM & Automation",
    text: "We helped Lifty streamline operations through CRM customization and intelligent automation, connecting processes and reducing repetitive work.",
    tags: ["Centralized CRM", "Workflow Automation", "Connected Data Systems"],
  },
  {
    banner: "/cases/insurance.jpg",
    name: "Technology Built for Insurance",
    title: "Building a Custom Software Platform for Insurance Operations",
    text: "We developed a custom software platform tailored to the insurance business, bringing essential processes into one centralized system for teams.",
    stats: [
      "Custom-Built for Insurance Operations",
      "Centralized Policy & Customer Management",
      "Streamlined End-to-End Business Workflows",
    ],
  },
  {
    banner: "/cases/travel.jpg",
    name: "Digitizing Travel Experiences",
    title: "Building a Smarter Digital Experience for Travel & Tourism",
    text: "We helped A to Z Travel and Tours strengthen its digital presence with a modern solution that simplifies interactions and showcases travel services.",
    tags: ["Digital Travel Services", "Responsive Design", "Customer Engagement"],
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
              className={styles.navPrev}
              aria-label="Previous case"
              onClick={(e) => { e.stopPropagation(); go(-1); }}
            >
              <span className={styles.navArrow} aria-hidden="true" />
            </button>
            <button
              className={styles.navNext}
              aria-label="Next case"
              onClick={(e) => { e.stopPropagation(); go(1); }}
            >
              <span className={styles.navArrow} aria-hidden="true" />
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
