"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./CaseCards.module.css";

/**
 * Case studies — replicated from Soft Industry's "#hero-cards" expanding-card
 * accordion. Inactive cards collapse to a slim banner with a vertical label;
 * the active card expands (flex:1) and reveals its body (title, text, View
 * More, and a feature-tag grid or stat list) with nav arrows. 0.6s transition.
 */
type CaseCard = {
  banner: string;
  name: string;
  title: string;
  text: string;
  tags?: string[];
  stats?: string[];
};

const CARDS: CaseCard[] = [
  {
    banner: "/cases/si-digital.webp",
    name: "Who is Nexterse?",
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

export default function CaseCards() {
  const [active, setActive] = useState(2);
  const count = CARDS.length;
  const go = (dir: number) => setActive((i) => (i + dir + count) % count);

  return (
    <section className={styles.section} id="case-studies">
      <div className="container">
        <h2 className={styles.heading}>
          Case studies <span>that move the numbers</span>
        </h2>

        <div className={styles.cards}>
          {CARDS.map((card, i) => (
            <article
              key={card.name}
              className={`${styles.card} ${i === active ? styles.active : ""}`}
              onClick={() => setActive(i)}
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
                <a href="#contact" className={styles.viewMore}>
                  View More <span aria-hidden>↗</span>
                </a>
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
                    onClick={(e) => {
                      e.stopPropagation();
                      go(-1);
                    }}
                  >
                    ←
                  </button>
                  <button
                    aria-label="Next case"
                    onClick={(e) => {
                      e.stopPropagation();
                      go(1);
                    }}
                  >
                    →
                  </button>
                </div>
              </div>

              <span className={styles.arrow} aria-hidden>
                ↗
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
