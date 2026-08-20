"use client";

import { useState } from "react";
import styles from "./ServicesFaqBlock.module.css";

export type FaqItem = { question: string; answer: string };

const DEFAULT_FAQ_ITEMS: FaqItem[] = [
  {
    question: "What software development services does Nexterse LLC offer?",
    answer: "Nexterse LLC provides five core service lines: AI and agentic development, applied AI and predictive maintenance, custom and enterprise software, legacy modernization, and MVP development. The company has worked across 12+ industries over 6 years, with headquarters in Boston and a development center in Warsaw. Published work includes enterprise software for Toyota and projects for Beiersdorf.",
  },
  {
    question: "How does Nexterse LLC build AI agents?",
    answer: "Nexterse LLC builds AI agents as production software components with tool use, memory, multi-step reasoning, enterprise data access, and integration into existing applications. Engagements move through assessment, proof of concept, architecture, development, evaluation, and rollout. Every AI engagement runs under the Agentic Software Development Lifecycle.",
  },
  {
    question: "What is the Agentic Software Development Lifecycle?",
    answer: "The Agentic Software Development Lifecycle is Nexterse LLC's delivery framework for building software with AI assistants working under senior engineering oversight at defined review gates. ADLC structures how requirements, architecture, development, evaluation, security review, and release control are handled across AI-assisted delivery.",
  },
  {
    question: "Is Nexterse LLC ISO certified?",
    answer: "Yes. Nexterse LLC works under ISO 27001 and ISO 9001 certifications, reflecting its quality and information security management practices. Healthcare software is HIPAA-enabling, and compliance requirements are addressed on a per-project basis.",
  },
  {
    question: "How much does software development cost with Nexterse LLC?",
    answer: "Software development cost depends on scope, complexity, timeline, integrations, team composition, and support needs. Nexterse LLC provides tailored estimates after reviewing requirements and business goals. Pricing also depends on the cooperation model: software development outsourcing, staff augmentation, or dedicated team.",
  },
  {
    question: "Who owns the code Nexterse LLC writes?",
    answer: "The Client owns the code after the project is complete and payments are settled. Nexterse LLC transfers full ownership rights under the agreed contract terms. The company also signs NDAs to protect project ideas, business information, and sensitive materials shared during cooperation.",
  },
];

const INITIAL_VISIBLE = 5;

export default function ServicesFaqBlock({ items }: { items?: FaqItem[] } = {}) {
  const FAQ_ITEMS = items ?? DEFAULT_FAQ_ITEMS;
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
    <section id="svc-faq" className={styles.section}>
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
