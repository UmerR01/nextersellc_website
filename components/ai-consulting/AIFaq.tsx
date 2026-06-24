"use client";
import { useState } from "react";
import styles from "./AIFaq.module.css";

const FAQS = [
  {
    q: "Will your consulting engagement just be a sales pitch for a massive AI development project?",
    a: (
      <p>
        Absolutely not. Nexterse is a &ldquo;Dual-Engine&rdquo; engineering firm, meaning our
        consulting is 100% objective. If our audit reveals that your business bottleneck is better
        solved with traditional, deterministic software — like a standard ERP upgrade or data
        modernization — we will tell you. We don&rsquo;t force AI where a conventional SDLC is the
        safer, more cost-effective choice.
      </p>
    ),
    hidden: false,
  },
  {
    q: "Our company data is siloed and a bit of a mess. Is it too early for us to engage in AI Consulting?",
    a: (
      <>
        <p>
          This is actually the perfect time to engage. The #1 reason AI projects fail is that
          companies try to build models on top of fragmented data.
        </p>
        <p>
          Our first step is always an AI Readiness Assessment. If your data isn&rsquo;t ready for
          Generative AI or Agentic workflows, we will provide a pragmatic Data Modernization
          Blueprint to help you centralize and clean your infrastructure first.
        </p>
      </>
    ),
    hidden: false,
  },
  {
    q: "Is your AI consulting an open-ended, hourly engagement?",
    a: (
      <p>
        No. We know executives need financial predictability. Our core consulting services — like
        the AI Viability Audit or the ROI Discovery Sprint — are time-boxed (typically 2 to 4
        weeks) and fixed-price. You will know exactly what the engagement costs and exactly what
        deliverables you will receive on day one.
      </p>
    ),
    hidden: false,
  },
  {
    q: "What exactly do we receive at the end of the consulting engagement?",
    a: (
      <p>
        You won&rsquo;t just receive a theoretical slide deck. We deliver an actionable Executive
        AI Blueprint — a prioritized list of AI use cases ranked by fastest ROI, a detailed cloud
        architecture and security schematic, a cost-per-token cloud hosting projection, and a
        fixed-price proposal to build a 4-week Proof of Concept using our Agentic Development
        Lifecycle (ADLC).
      </p>
    ),
    hidden: false,
  },
  {
    q: "How do you handle our proprietary data during the consulting and auditing phase?",
    a: (
      <>
        <p>
          Security starts on day one, not just during development. We operate under strict NDAs
          and ISO 27001-certified processes.
        </p>
        <p>
          During the technical audit, we evaluate your data architecture, APIs, and infrastructure
          flow. We do not need to extract, copy, or ingest your sensitive raw data or PII to
          design your secure AI blueprint.
        </p>
      </>
    ),
    hidden: true,
  },
  {
    q: "Do we need to have our own AI team to work with you?",
    a: (
      <>
        <p>
          No. Most of our clients engage us precisely because they don&rsquo;t yet have AI
          expertise in-house. We work directly with your technical leads, product owners, and
          executive stakeholders.
        </p>
        <p>
          If you do have an internal AI team, we collaborate with them to accelerate the work and
          build internal capability alongside the consulting engagement.
        </p>
      </>
    ),
    hidden: true,
  },
];

export default function AIFaq() {
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
      <div className="container">
        <h2 className={styles.title}>Frequently asked questions</h2>

        <div className={styles.cards}>
          {visibleFaqs.map((item, i) => {
            const isOpen = openItems.has(i);
            return (
              <div
                key={item.q}
                className={`${styles.card} ${isOpen ? styles.active : ""}`}
              >
                <button
                  className={styles.question}
                  aria-expanded={isOpen}
                  onClick={() => toggle(i)}
                >
                  <span className={styles.bullet} aria-hidden />
                  <span>{item.q}</span>
                </button>
                <div className={styles.answer} aria-hidden={!isOpen}>
                  <div className={styles.answerInner}>{item.a}</div>
                </div>
              </div>
            );
          })}
        </div>

        {!showAll && (
          <div className={styles.loadMore}>
            <button
              className={styles.loadMoreBtn}
              onClick={() => setShowAll(true)}
            >
              Load more ›
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
