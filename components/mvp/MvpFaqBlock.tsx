"use client";

import { useState } from "react";
import styles from "./MvpFaqBlock.module.css";

const FAQ_ITEMS = [
  {
    q: "What is the difference between a PoC and an MVP for an AI product?",
    a: "A PoC answers the technical question: Can this model or retrieval setup do the job inside your data and workflow constraints? An MVP answers the market and product question: will users adopt and pay for this workflow once it is packaged as software?",
  },
  {
    q: "How do you estimate AI operating costs before launch?",
    a: "We test model usage on a bounded dataset, estimate token and retrieval patterns, and decide where caching, routing, or smaller models should sit. The result is an operating-cost model based on the intended workflow, not guesswork.",
  },
  {
    q: "Can you build an AI MVP with HIPAA-aligned handling or SOC 2-ready controls?",
    a: "Yes. We can design the MVP around private hosting options, role-based access, logging, retention rules, tenant separation, and stricter model-provider terms. Formal audits and attestations still happen outside the product build itself.",
  },
  {
    q: "How do you test an AI MVP if outputs vary?",
    a: "We combine normal QA with dataset-based AI evaluation. The system is scored on retrieval quality, faithfulness, latency, refusal behavior, and failure modes. We also test prompt injection and other abuse scenarios before release.",
  },
  {
    q: "How do you avoid building a thin wrapper with no moat?",
    a: "By putting your value in the product logic, the data flow, the retrieval layer, the permission model, and the workflow.",
  },
  {
    q: "How do you keep tenant data separated in a B2B AI MVP?",
    a: "By separating data at the storage and retrieval level, attaching tenant metadata to indexed content, and enforcing access rules before any generation step happens. The model only receives context that the user can access.",
  },
  {
    q: "Should we start with OpenAI or Claude, or move straight to an open-source model?",
    a: "That depends on speed, quality, hosting constraints, and budget. Many teams start with a strong hosted model to validate the product faster, then revisit routing or self-hosted options once real usage data exists.",
  },
  {
    q: "Will we need to rewrite the MVP when the product grows?",
    a: "Not if the MVP is scoped well and built on a stable architecture. The first release should stay lean, but the codebase, deployment model, and data layer should still support the next stage instead of forcing a reset.",
  },
];

const INITIAL_VISIBLE = 5;

export default function MvpFaqBlock() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set([0]));
  const [showAll, setShowAll] = useState(false);

  const visibleItems = showAll ? FAQ_ITEMS : FAQ_ITEMS.slice(0, INITIAL_VISIBLE);

  function toggle(index: number) {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  }

  return (
    <section id="mvp-faq" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>FAQ</h2>

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
                  <span>{item.q}</span>
                </button>
                <div className={styles.answer} aria-hidden={!isOpen}>
                  <div className={styles.answerInner}>
                    <p>{item.a}</p>
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
