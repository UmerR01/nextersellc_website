"use client";

import { useState } from "react";
import styles from "./TeamFaq.module.css";

const FAQS = [
  {
    q: "When was Nexterse LLC founded?",
    a: "Nexterse LLC was founded in 2020.",
  },
  {
    q: "How big is Nexterse LLC?",
    a: "Our team is 100+ specialists. 70% of our engineers are senior-level professionals with deep domain expertise across AI and enterprise software.",
  },
  {
    q: "Where is Nexterse LLC based?",
    a: "Headquarters at 7901 4th St N #27451, St. Petersburg, FL 33702, USA. Development center in Lahore, Pakistan.",
  },
  {
    q: "What does Nexterse LLC do?",
    a: "We build custom software across five lines: AI and agentic systems, custom and enterprise software, legacy modernization, MVP development for funded startups, and software product development. Across all five, we operate as the engineering partner who owns the build from discovery through launch.",
  },
  {
    q: "What certifications does Nexterse LLC hold?",
    a: "Nexterse LLC holds ISO 27001 (information security) and ISO 9001 (quality management) certifications, and maintains compliance with GDPR requirements for EU-based clients.",
  },
  {
    q: "Who owns the code Nexterse LLC writes?",
    a: "Our standard Master Service Agreement grants the Client full intellectual-property ownership of all custom code, designs, and deliverables upon project completion and final payment. NDA is standard on every engagement.",
  },
];

export default function TeamFaq() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set([0]));

  const handleToggle = (idx: number) => {
    setOpenItems((previous) => {
      const next = new Set(previous);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Frequently asked questions</h2>
        <div className={styles.faqList}>
          {FAQS.map((faq, idx) => {
            const isOpen = openItems.has(idx);
            return (
              <div
                key={idx}
                className={`${styles.faqItem} ${isOpen ? styles.active : ""}`}
              >
                <button
                  className={styles.question}
                  onClick={() => handleToggle(idx)}
                  aria-expanded={isOpen}
                >
                  <span className={styles.bullet} aria-hidden="true" />
                  <span>{faq.q}</span>
                </button>
                <div
                  className={styles.answer}
                  aria-hidden={!isOpen}
                >
                  <div className={styles.answerInner}>
                    <p>{faq.a}</p>
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
