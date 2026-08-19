"use client";

import styles from "./BlogFAQSection.module.css";
import type { FaqItem } from "./types";

/**
 * Always-present page-template FAQ section (item 7 of the article template).
 * Section title is h2, each question is h3 — both use dedicated classes
 * (not the generic body h2/h3 styles), so sizing and spacing stay fully
 * deliberate regardless of tag choice.
 */
export default function BlogFAQSection({
  items,
  id = "h-frequently-asked-questions",
  heading = "Frequently asked questions",
}: {
  items: FaqItem[];
  id?: string;
  heading?: string;
}) {
  if (items.length === 0) return null;

  return (
    <div className={styles.section}>
      <h2 id={id} className={styles.title}>
        {heading}
      </h2>
      {items.map((item, i) => (
        <div key={i} className={styles.item}>
          <h3 className={styles.question}>{item.question}</h3>
          <p className={styles.answer}>{item.answer}</p>
        </div>
      ))}
    </div>
  );
}
