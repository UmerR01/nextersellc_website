"use client";
import { useState } from "react";
import styles from "./ARFAQ.module.css";

const FAQS = [
  {
    q: "What is an AI readiness assessment, and how is it different from an AI maturity assessment?",
    a: "An AI readiness assessment answers a near-term delivery question: can this business support a given AI initiative with a fair chance of success? An AI maturity assessment is broader. It looks at how advanced your organization is across strategy, culture, governance, and enablement. Readiness concerns launch conditions, while maturity concerns longer-range capability.",
    hidden: false,
  },
  {
    q: "Why is an AI readiness assessment important for enterprises?",
    a: "Because enterprise AI lives inside constraints of data ownership, access control, compliance, integration debt, and budget discipline. All listed parameters shape whether a use case can move from idea to production. Without that review, teams often fund pilots that never scale.",
    hidden: false,
  },
  {
    q: "Do AI readiness assessments help decide whether we should build AI at all?",
    a: "Yes. A strong AI assessment should be able to say \"do not build this with AI\" when the use case calls for rules-based software, workflow redesign, or data modernization first.",
    hidden: false,
  },
  {
    q: "What are the key components of an artificial intelligence assessment?",
    a: "At minimum, it should cover data quality and accessibility, infrastructure and hosting fit, security and governance, and expected economics. For enterprise work, it should also define ownership, approval points, and integration limits.",
    hidden: false,
  },
  {
    q: "What is a generative AI assessment, and how is it different?",
    a: "A generative AI assessment focuses on use cases that involve LLMs, RAG, copilots, summarization, document search, content generation, or agent-like behavior. It pays more attention to retrieval quality, hallucination risk, prompt controls, model-hosting options, and token spend.",
    hidden: true,
  },
  {
    q: "How can AI readiness assessment consulting help my business?",
    a: "It helps you avoid paying for the wrong build. It gives your team a clearer scope, a more defensible budget, and a better sense of whether the first step should be a pilot, a data project, or a software modernization effort.",
    hidden: true,
  },
  {
    q: "How long does an AI readiness assessment take, and how much is it?",
    a: "It is a fixed-price 14-day engagement, so teams get answers fast without rolling into open-ended consulting work. You can start with our free questionnaire.",
    hidden: true,
  },
  {
    q: "What are the common issues companies face without an AI readiness assessment?",
    a: "Poor retrieval, access-control gaps, token cost surprises, weak user adoption, and pilots that look promising in a demo but fail under enterprise conditions.",
    hidden: true,
  },
  {
    q: "Do you need to ingest our proprietary data to do the review?",
    a: "No. The audit can be structured around your architecture, schemas, metadata, workflows, and security model. Raw business data can remain inside your environment.",
    hidden: true,
  },
  {
    q: "We already know our data is messy. Should we wait?",
    a: "No. The assessment helps define what to clean first and what can wait. That matters because many teams lose time fixing the wrong sources.",
    hidden: true,
  },
];

export default function ARFAQ() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set([0]));
  const [showAll, setShowAll] = useState(false);

  const visible = showAll ? FAQS : FAQS.filter((f) => !f.hidden);

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
      <div className="container">
        <h2 className={styles.title}>Frequently asked questions</h2>
        <div className={styles.cards}>
          {visible.map((item, i) => {
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
                  <div className={styles.answerInner}>
                    <p>{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {!showAll && (
          <div className={styles.loadMore}>
            <button className={styles.loadMoreBtn} onClick={() => setShowAll(true)}>
              Load more &rsaquo;
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
