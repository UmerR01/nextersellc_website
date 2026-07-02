"use client";

import { useState } from "react";
import styles from "./CSFaqBlock.module.css";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "How does Nexterse LLC ensure software quality during development?",
    answer:
      "Quality starts at the acceptance criteria. Before a build begins, we agree on the conditions the software must meet to be accepted, then test against them throughout. QA runs inside every sprint, not as a final scramble. We also invest in business analysis and architecture early, since most quality problems are decisions made badly at the start.",
  },
  {
    question: "How does Nexterse LLC decide between SDLC and ADLC for my project?",
    answer:
      "We match the lifecycle to the build. Standard products, web apps, mobile apps, IoT systems, and legacy modernization run on our traditional SDLC, with deterministic processes and senior-led teams. AI-led builds, such as agents, RAG systems, LLM applications, and governed AI deployments run on our ADLC, which adds gates for hallucination control, token modeling, red-teaming, and model governance. Mixed builds use both, and we recommend the fit during scoping.",
  },
  {
    question: "What role does UI/UX design play in software product development?",
    answer:
      "No software product ships without UI/UX decisions, whether or not a designer is on the team. Even a build on a ready component library has to answer the same questions: can users find the contact page, does the layout survive a phone screen, do colors and type stay consistent from one screen to the next? Products that get this right are the ones people open a second time.",
  },
  {
    question: "How does Nexterse LLC secure a software product?",
    answer:
      "Security depends on what the system actually handles. A logistics dashboard and a payments platform do not need identical protections, so we scope the work to the project. The toolbox includes threat modeling, least-privilege access, OWASP and SANS coding standards, static and dynamic code analysis, penetration testing, encryption at rest and in transit, and multi-factor authentication. We have been building this practice since 2012.",
  },
  {
    question: "How does Nexterse LLC handle post-launch support and maintenance?",
    answer:
      "After launch, the baseline is simple: we fix bugs and hand over everything your team needs to run the product, documentation and training included. Many Clients stop there. Others keep us on for new features, technology updates, scaling work, or 24/7 monitoring. The scope is yours to set, and it can change as the product matures.",
  },
  {
    question: "How does Nexterse LLC help at the idea and concept stage?",
    answer:
      "A lot of expensive problems can be caught before development starts. At the concept stage, our analysts research the market and competitors, sketch user personas, check regulatory constraints, and shape the idea into a product vision a team can build against. When an idea needs evidence, we run a proof of concept. A flaw found on paper costs a fraction of one found in code.",
  },
];

const INITIAL_VISIBLE = 5;

export default function CSFaqBlock() {
  const [openIndex, setOpenIndex] = useState<number>(0);
  const [showAll, setShowAll] = useState(false);

  const visibleItems = showAll
    ? FAQ_ITEMS
    : FAQ_ITEMS.slice(0, INITIAL_VISIBLE);

  function toggle(index: number) {
    setOpenIndex(openIndex === index ? -1 : index);
  }

  return (
    <section id="cs-faq" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Frequently asked questions</h2>

        <div className={styles.list}>
          {visibleItems.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className={styles.item}>
                <button
                  className={styles.question}
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <span
                    className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`}
                    aria-hidden="true"
                  />
                </button>
                {isOpen && (
                  <div className={styles.answer}>
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {!showAll && (
          <button className={styles.loadMore} onClick={() => setShowAll(true)}>
            Load more
            <span className={styles.loadMoreArrow} aria-hidden="true" />
          </button>
        )}
      </div>
    </section>
  );
}
