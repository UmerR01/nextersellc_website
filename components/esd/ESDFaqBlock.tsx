"use client";

import { useState } from "react";
import styles from "./ESDFaqBlock.module.css";

const FAQS = [
  {
    question: "How do you integrate Generative AI into an on-premise legacy system without using public cloud APIs?",
    answer:
      "We can deploy the AI layer inside private infrastructure rather than routing requests through public endpoints. In regulated environments, that may mean self-hosted open-source models, isolated networking, private gateways, and enterprise middleware that keeps the data path inside your environment.",
  },
  {
    question: "How do you protect tenant data when AI features are added to a large enterprise platform?",
    answer:
      "Access control has to be enforced before retrieval happens. We map the user's identity and permissions to the retrieval layer, so the model only receives content the user is already allowed to view. In multi-tenant systems, that also means tenant isolation in storage, indexing, and logging.",
  },
  {
    question: "Our monolith already struggles under load. Will an LLM make it worse?",
    answer:
      "It will if you push the AI workload through the monolith itself. We usually separate the AI-heavy workflow into its own service and let it run asynchronously, so the core application doesn't have to carry model latency, retrieval calls, or long-running agent logic.",
  },
  {
    question: "How do you test an enterprise system when AI outputs are not identical every time?",
    answer:
      "We don't rely on pass-fail checks alone. We combine standard quality assurance (QA) with retrieval tests, guarded evaluation datasets, and model-specific metrics to track whether the system stays grounded, permission-safe, and useful after every release.",
  },
  {
    question: "Should we fine-tune a model on our enterprise data or use RAG?",
    answer:
      "In most enterprise cases, we start with retrieval-augmented generation (RAG). It's easier to update, easier to govern, and better suited to data that changes often. We consider fine-tuning when the task depends on proprietary reasoning patterns, strict output formats, or domain-specific behavior that retrieval alone can't provide.",
  },
  {
    question: "Our data is spread across SQL servers, SharePoint, and scanned PDFs. Can an AI copilot still use it?",
    answer:
      "Yes, but the data layer has to be prepared first. We build ingestion and transformation pipelines, parse the documents, define metadata, shape the retrieval index, and test what the system can actually find before we put a copilot in front of users.",
    hidden: true,
  },
  {
    question: "How do you maintain auditability when AI generates answers from enterprise data?",
    answer:
      "We log the prompt, the retrieved sources, the model response, and any downstream action. That gives security teams, compliance staff, and product owners a record they can review when they need to understand what happened.",
    hidden: true,
  },
  {
    question: "Do we need to stop operations to modernize a monolith into an AI-ready architecture?",
    answer:
      "No. We usually phase the work. That means finding one painful workflow, extracting or wrapping it first, adding the new service alongside the legacy system, and modernizing step by step rather than trying to replace everything at once.",
    hidden: true,
  },
];

const INITIAL_VISIBLE = 5;

export default function ESDFaqBlock() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set([0]));
  const [showAll, setShowAll] = useState(false);

  const visibleItems = showAll ? FAQS : FAQS.slice(0, INITIAL_VISIBLE);

  function toggle(index: number) {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  }

  return (
    <section id="frequently-asked-questions" className={styles.section}>
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
