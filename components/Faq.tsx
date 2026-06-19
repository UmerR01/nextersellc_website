"use client";

import { useState } from "react";
import styles from "./Faq.module.css";

/** FAQ — replicated from Sumato's "faq-block": list with circle bullets,
 *  active item shows blue border-top + blue text, answer slides down.
 *  First item open by default, "Load more" reveals hidden items. */
const FAQS = [
  {
    q: "How long will development take?",
    aHtml: (
      <>
        <p>Timeline depends on:</p>
        <ul>
          <li>Product complexity.</li>
          <li>Quality and compliance requirements.</li>
          <li>Integration dependencies.</li>
        </ul>
        <p>After discovery, we provide a clear roadmap with delivery milestones.</p>
      </>
    ),
    hidden: false,
  },
  {
    q: "How do you guarantee product quality?",
    aHtml: (
      <>
        <p>We follow structured delivery processes, use experienced senior engineers, and apply rigorous QA practices.</p>
        <p>For AI systems, we use evaluation frameworks, deterministic grounding, and red-teaming to ensure accuracy and stability.</p>
      </>
    ),
    hidden: false,
  },
  {
    q: "What methodologies do you use?",
    aHtml: (
      <>
        <p>For traditional systems, we use modern Agile frameworks within a structured SDLC.</p>
        <p>For autonomous AI systems, we apply the Agentic Development Lifecycle (ADLC) — introducing hallucination control, cost modeling, and AI-specific risk management.</p>
      </>
    ),
    hidden: false,
  },
  {
    q: "What is the difference between standard software development and the ADLC?",
    aHtml: (
      <>
        <p>Standard software development (SDLC) manages deterministic systems with predictable outputs.</p>
        <p>The ADLC governs probabilistic AI systems and adds structured controls such as hallucination evaluation, token cost forecasting, red-teaming, and continuous AI monitoring.</p>
      </>
    ),
    hidden: false,
  },
  {
    q: "We need a standard web or legacy application. Do we have to use AI?",
    aHtml: (
      <>
        <p>No. If AI does not create measurable value for your business case, we build traditional software using proven engineering practices. AI is applied when it supports ROI.</p>
      </>
    ),
    hidden: true,
  },
  {
    q: "Will our proprietary company data be used to train public AI models?",
    aHtml: (
      <>
        <p>No. We deploy secure architectures using VPC-isolated environments — Azure OpenAI, AWS Bedrock, or private open-source models. Your data remains within your secure cloud boundary and is never used to train public models.</p>
      </>
    ),
    hidden: true,
  },
  {
    q: "What happens after launch?",
    aHtml: (
      <>
        <p>We provide ongoing support, maintenance, and system optimization. For AI solutions, we monitor model performance and cost efficiency over time.</p>
      </>
    ),
    hidden: true,
  },
];

export default function Faq() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set([0]));
  const [showAll, setShowAll] = useState(false);

  const visibleFaqs = showAll ? FAQS : FAQS.filter((f) => !f.hidden);

  const toggle = (i: number) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  return (
    <section className={styles.section} id="faq">
      <div className={`container ${styles.wrapper}`}>
        <h2 className={styles.title}>Frequently asked questions</h2>

        <div className={styles.cards}>
          {visibleFaqs.map((item, i) => {
            const isOpen = openItems.has(i);
            return (
              <div key={item.q} className={`${styles.card} ${isOpen ? styles.active : ""}`}>
                <button
                  className={styles.question}
                  aria-expanded={isOpen}
                  onClick={() => toggle(i)}
                >
                  <span className={styles.bullet} aria-hidden />
                  <span>{item.q}</span>
                </button>
                <div className={styles.answer} aria-hidden={!isOpen}>
                  <div className={styles.answerInner}>{item.aHtml}</div>
                </div>
              </div>
            );
          })}
        </div>

        {!showAll && (
          <div className={styles.loadMore}>
            <button className={styles.loadMoreLink} onClick={() => setShowAll(true)}>
              Load more ›
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
