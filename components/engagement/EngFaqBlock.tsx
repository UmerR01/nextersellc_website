"use client";

import { useState } from "react";
import styles from "./EngFaqBlock.module.css";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question:
      "How do I choose between Fixed Price, Time and Materials, Time and Materials with a cap, and a Dedicated Team?",
    answer:
      "Match the model to your scope clarity, budget flexibility, and timeline. Fixed Price suits bounded, well-specified work; Time and Materials suits evolving scope; Time and Materials with a cap suits flexible scope on a firm budget; a Dedicated Team suits long-term ownership.",
  },
  {
    question:
      "What is the difference between Time and Materials and Time and Materials with a cap?",
    answer:
      "Both bills for actual hours worked. Time and Materials with a cap adds a not-to-exceed ceiling, so you keep the flexibility while your total spend stays protected.",
  },
  {
    question:
      "What is the minimum engagement duration for each model?",
    answer:
      "Fixed Price projects run for about 2 months, Time and Materials and the capped variant for about 3 months, and a Dedicated Team is built for 6 months or more. Our minimum project size is $25K.",
  },
  {
    question:
      "Can we start with one model and switch to another mid-project?",
    answer:
      "Yes. A common path is a Fixed Price discovery, then a Time and Materials with a cap MVP, then a Dedicated Team for production. Contracts are structured to allow the move.",
  },
  {
    question: "What are your typical hourly rates?",
    answer:
      "Rates fall in the $50 to $99 per hour range, depending on role and seniority.",
  },
  {
    question: "Who owns the IP and the code at the end of an engagement?",
    answer:
      "You do. IP transfers to the Client on full payment under the terms of the SOW, and handover includes documentation and deployment scripts.",
  },
  {
    question:
      "What happens if a Dedicated Team member is not a fit?",
    answer:
      "We replace them at no additional cost within the early window defined in your contract, so a poor individual fit does not become your problem.",
  },
  {
    question: "Can we speak to current Clients as a reference?",
    answer:
      "Yes. Reference calls with current Clients are available on request for serious engagements.",
  },
  {
    question: "How fast can we sign an NDA?",
    answer:
      "Quickly. We sign before the technical discussion, so scoping can start without delay.",
  },
  {
    question:
      "Which engagement model is best for AI and ML projects?",
    answer:
      "Time and Materials with a cap is the primary recommendation, because AI performance is established through evaluation rather than specification. Fixed Price is discouraged for production AI and acceptable only for bounded proofs of concept.",
  },
  {
    question:
      "What insurance do you carry and how are liability caps handled?",
    answer:
      "We carry professional indemnity and errors-and-omissions coverage, and liability caps are negotiated per SOW.",
  },
  {
    question:
      "How long from contract signing to the first sprint demo?",
    answer:
      "The first sprint demo lands within 2 weeks of kickoff, after a discovery phase of two to four weeks, where one applies.",
  },
];

const INITIAL_VISIBLE = 5;

export default function EngFaqBlock() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set([0]));
  const [showAll, setShowAll] = useState(false);

  const visibleItems = showAll
    ? FAQ_ITEMS
    : FAQ_ITEMS.slice(0, INITIAL_VISIBLE);

  function toggle(index: number) {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Frequently asked questions</h2>

        <div className={styles.list}>
          {visibleItems.map((item, i) => {
            const isOpen = openItems.has(i);
            return (
              <div key={i} className={`${styles.item} ${isOpen ? styles.active : ""}`}>
                <button
                  className={styles.question}
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                >
                  <span className={styles.bullet} aria-hidden="true" />
                  <span>{item.question}</span>
                </button>
                <div className={styles.answer} aria-hidden={!isOpen}>
                  <div className={styles.answerInner}>
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {!showAll && (
          <div className={styles.loadMoreWrap}>
            <button className={styles.loadMoreBtn} onClick={() => setShowAll(true)}>
              Load more
              <span className={styles.linkArrow} aria-hidden="true" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
