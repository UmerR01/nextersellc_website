"use client";

import { useState } from "react";
import styles from "@/components/custom-software/CSFaqBlock.module.css";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "How do you handle “Data Gravity” when processing petabytes of data for real-time AI inference?",
    answer: "Moving petabytes of data to an LLM is impossible. We solve the Data Gravity problem by moving the intelligence to the data. We utilize edge-vectorization and distributed processing (Spark/Flink) to summarize and vectorize data locally at the source, transmitting only high-value semantic embeddings to the central cloud for AI reasoning.",
  },
  {
    question: "What is the difference between a data lake and a vector database for enterprise AI?",
    answer: "A data lake is for storage. A vector database is for retrieval. While your data lake (like S3 or Snowflake) stores the raw “memory” of your company, we architect a vector DB layer on top of it. This layer stores semantic embeddings, allowing your LLMs to find relevant information by meaning.",
  },
  {
    question: "How do we prevent “Garbage In, Garbage Out” in our AI models?",
    answer: "AI is only as smart as its context. We implement semantic data cleansing. Our pipelines use small language models (SLMs) to audit your data for reasoning quality, ensuring that the documents fed into your RAG system are high-signal, accurate, and non-contradictory.",
  },
  {
    question: "How do we prepare our legacy SQL data warehouse for generative AI and RAG pipelines?",
    answer: "LLMs cannot natively query unstructured data trapped in legacy relational databases without hallucinating. We engineer semantic ETL bridges. We extract your legacy SQL data, apply semantic chunking algorithms, and sink the transformed data into a modern vector database. This allows your enterprise AI to instantly retrieve historical database context using natural language.",
  },
  {
    question: "How do you prevent our proprietary Big Data from being leaked to public models like OpenAI?",
    answer: "We engineer zero-trust data gateways. Your data never leaves your secure VPC. We utilize private cloud endpoints (like Azure OpenAI) which guarantee zero-retention, meaning your data is never logged or used for model training. For absolute data sovereignty, we can deploy open-source models (like Llama 3) entirely on your bare-metal, on-premise infrastructure.",
  },
];

const INITIAL_VISIBLE = 5;

export default function BigDataFaq() {
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
    <section id="bd-faq" className={styles.section}>
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

        {!showAll && FAQ_ITEMS.length > INITIAL_VISIBLE && (
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
