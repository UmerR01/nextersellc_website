"use client";

import { useState } from "react";
import styles from "@/components/custom-software/CSFaqBlock.module.css";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "How is this different from hiring Accenture, IBM, or Deloitte?",
    answer: "Scope and focus. We only do GenAI integration for mid-market and enterprise – no pyramid of junior consultants, no 200-slide strategy decks, no multi-year master service agreements. You typically work directly with senior AI engineers, get to production in 90 days, and pay 40-70% less than a comparable Big Four engagement.",
  },
  {
    question: "How is this different from a generic dev shop that added “GenAI” to its homepage last year?",
    answer: "GenAI in production is a specialized discipline – evaluation harnesses, retrieval tuning, prompt injection defense, observability, cost governance, model routing. Generalist shops ship demos that break the first time they hit real data. We ship systems that operate reliably with your users and your auditors.",
  },
  {
    question: "Do we own the code?",
    answer: "Completely. Everything we build is your intellectual property, delivered in your repositories, running on your infrastructure. There are no ongoing license fees for the integrations we deliver.",
  },
  {
    question: "What models and platforms do you work with?",
    answer: "All major foundation models (OpenAI, Anthropic Claude, Google Gemini, Meta Llama, Mistral, Cohere, and others), all major clouds (AWS Bedrock, Azure OpenAI, Google Vertex AI), and fine-tuned or open-weight models when the use case calls for them. We recommend based on your use case.",
  },
  {
    question: "What if our data is messy?",
    answer: "Most clients operate with messy real-world data. Our methodology assumes this from the start. We identify what needs to be fixed, what can be handled within the system, and what may block progress. Data preparation is addressed as part of the integration process.",
  },
  {
    question: "How do you prevent hallucinations and risky outputs in production?",
    answer: "Retrieval-grounded generation, strict output guardrails, continuous evaluation harnesses, human-in-the-loop patterns where stakes are high, and real-time monitoring. We deliver controlled and reliable capabilities aligned with production requirements.",
  },
  {
    question: "Can you integrate with our existing enterprise systems?",
    answer: "Almost certainly. We routinely work with Salesforce, ServiceNow, SAP, Oracle, Workday, Jira, Dynamics, and custom Java, .NET, and Python applications, including mainframes. The integration audit confirms feasibility in your specific environment before you commit.",
  },
  {
    question: "What happens after the 90-day engagement?",
    answer: "Your call. Some clients take everything in-house and scale independently. Others continue in an advisory capacity or extend the engagement for additional integrations. Engagement structure remains flexible.",
  },
  {
    question: "How do you guarantee our proprietary corporate data is not used to train public AI models like ChatGPT?",
    answer: "We architect zero-trust AI enclaves. Sensitive data is processed within controlled environments using private model deployments. Depending on compliance requirements, we deploy private instances through enterprise cloud providers such as Azure OpenAI or AWS Bedrock under strict agreements. For full data sovereignty, we deploy open-source models such as Llama 3 or Mixtral on on-premise infrastructure. Data remains within your environment and is not used for model training.",
  },
  {
    question: "How do you prevent the generative AI from producing incorrect information?",
    answer: "We engineer retrieval-augmented generation pipelines with strict guardrails. The AI is restricted to using approved, vectorized corporate data sources. Output validation systems evaluate responses for factual consistency before delivery. If information is unavailable, the system returns a controlled fallback response.",
  },
  {
    question: "How do you control generative AI costs at scale?",
    answer: "We implement semantic caching and algorithmic query routing. Repeated queries are served from cache without additional token usage. New requests are routed to models based on complexity, using efficient models for simple tasks and advanced models for complex reasoning. This stabilizes cost behavior as usage grows.",
  },
];

const INITIAL_VISIBLE = 6;

export default function GenaiIntegrationFaq() {
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
    <section id="gaii-faq" className={styles.section}>
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
