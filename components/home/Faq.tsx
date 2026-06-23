"use client";

import { useState } from "react";
import styles from "./Faq.module.css";

/** FAQ — replicated from Sumato's "faq-block": list with circle bullets,
 *  active item shows blue border-top + blue text, answer slides down.
 *  First item open by default, "Load more" reveals hidden items. */
const FAQS = [
  {
    q: "What results can we realistically expect?",
    aHtml: (
      <>
        <p>Results depend on the solution type, but our clients consistently see measurable improvements in operational efficiency, time-to-market, and system reliability.</p>
        <p>For AI implementations, we target clear KPIs before build begins — cost reduction, accuracy thresholds, or automation rates — so success is defined, not assumed.</p>
      </>
    ),
    hidden: false,
  },
  {
    q: "How do you ensure the quality of what gets shipped?",
    aHtml: (
      <>
        <p>Quality is embedded throughout delivery — not bolted on at the end. Senior engineers lead every engagement, peer review is mandatory, and automated test coverage is a delivery gate.</p>
        <p>For AI systems, we apply evaluation frameworks, deterministic grounding, and red-teaming to verify accuracy and stability before any model reaches production.</p>
      </>
    ),
    hidden: false,
  },
  {
    q: "How long will development take?",
    aHtml: (
      <>
        <p>Timelines are scoped during discovery and depend on product complexity, compliance requirements, and integration depth.</p>
        <p>We commit to a structured roadmap with defined milestones — not a rough estimate followed by months of ambiguity.</p>
      </>
    ),
    hidden: false,
  },
  {
    q: "What development methodologies do you follow?",
    aHtml: (
      <>
        <p>For software products, we apply modern Agile practices within a structured SDLC — iterative delivery, continuous integration, and regular client checkpoints.</p>
        <p>For AI and agentic systems, we use our Agentic Development Lifecycle (ADLC) — a framework purpose-built for probabilistic AI systems, covering hallucination control, token cost modeling, and continuous evaluation.</p>
      </>
    ),
    hidden: false,
  },
  {
    q: "We don't need AI — can you build traditional software?",
    aHtml: (
      <>
        <p>Absolutely. If AI doesn't add measurable value to your use case, we build with proven engineering practices — no AI overhead, no unnecessary complexity.</p>
        <p>We recommend AI only when it has a clear, quantifiable impact on your business.</p>
      </>
    ),
    hidden: true,
  },
  {
    q: "Is our data safe? Will it be used to train AI models?",
    aHtml: (
      <>
        <p>Your data never leaves your secure boundary. We architect AI systems using VPC-isolated deployments — Azure OpenAI, AWS Bedrock, or private open-source models.</p>
        <p>No proprietary data is shared with third-party model providers or used to train public AI systems, ever.</p>
      </>
    ),
    hidden: true,
  },
  {
    q: "What does post-launch support look like?",
    aHtml: (
      <>
        <p>We offer structured support tiers covering bug resolution, performance monitoring, and iterative improvements. For AI systems, this includes model drift detection, cost tracking, and evaluation-driven updates.</p>
        <p>Most clients stay with us as a long-term delivery partner — we're built for continuity, not handoffs.</p>
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
