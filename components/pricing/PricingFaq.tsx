"use client";

import { useState } from "react";
import styles from "@/components/custom-software/CSFaqBlock.module.css";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "How do you calculate custom software development costs?",
    answer: "We calculate costs through a structured process: the Client completes a survey, followed by a call with our team and a free discovery session. After discussing project details with the discovery team, we shape the solution and provide a detailed estimation with all necessary artifacts, ensuring transparency and accuracy.",
  },
  {
    question: "What factors influence software development cost?",
    answer: "Key factors include the project's complexity, the number and intricacy of features, the development team's location and expertise, the technology stack used, and the timeline for delivery. External integrations, compliance requirements, and post-launch support also play significant roles in determining the final cost.",
  },
];

export default function PricingFaq() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set([0]));

  function toggle(index: number) {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  }

  return (
    <section id="pricing-faq" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Frequently asked questions</h2>

        <div className={styles.list}>
          {FAQ_ITEMS.map((item, i) => {
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
      </div>
    </section>
  );
}
