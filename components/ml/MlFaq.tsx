"use client";

import { useState } from "react";
import styles from "@/components/custom-software/CSFaqBlock.module.css";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "How much does machine learning development cost?",
    answer: "Machine learning costs depend on three things: how ready your data is, how complex the model is, and how deeply the system integrates with your operations. As a general guide, a focused feasibility study or ML architecture audit typically starts in the low five figures, while a full custom model — built, validated, and deployed into production — usually ranges from roughly $50,000 to $250,000+, depending on scope and the number of models. The biggest cost driver is rarely the model itself; it's data preparation.",
  },
  {
    question: "How long does it take to build a machine learning model?",
    answer: "A straightforward model with clean, available data can move from kickoff to production in roughly 6–10 weeks. A more complex system — computer vision, custom data collection and labeling, edge deployment, or deep enterprise integration — typically takes three to six months. Across most engagements, model training is rarely the bottleneck; data preparation, feature engineering, and integration account for the majority of the timeline.",
  },
  {
    question: "When should a business hire an ML development company?",
    answer: "Bring in an external ML partner when the problem is real, the data exists, and your internal team can't close the gap alone — or when a pilot has stalled. The classic signals: a proof of concept that won't reach production, a model whose accuracy has plateaued, or a previous vendor who left you an undocumented model with no retraining pipeline. What rarely pays off is hiring before you've confirmed ML is the right tool at all — which is why our first conversation is always about whether ML, a rules engine, or a simpler approach fits best.",
  },
  {
    question: "Should we build ML in-house or outsource it?",
    answer: "Build in-house if you have a mature data-science team, clean and accessible data, and ML models that are core to your product's differentiation. Outsource if you're running your first ML project, your team is strong on research but thin on production engineering, or you need to move faster than internal hiring allows. Nexterse LLC's dual-engine team exists for exactly that gap — data scientists who build the model and software engineers who operationalize it — so your ML doesn't stall between the lab and your live systems. Many enterprises engage us for the initial build while growing internal MLOps capability in parallel.",
  },
  {
    question: "What's the difference between ML and AI development?",
    answer: "Machine learning is a subset of AI, so all ML development is AI development — but not the reverse. The distinction that matters for buyers is between classical ML and generative AI. Classical ML — fraud detection, predictive maintenance, demand forecasting, image classification — trains on your structured or labeled data, and is deterministic, auditable, and cost-efficient. Generative AI produces new content and runs on large foundation models. The common 2026 mistake is defaulting to Gen AI for problems a well-trained classification or regression model would solve more reliably and far more cheaply.",
  },
  {
    question: "How do you choose a machine learning development partner?",
    answer: "Ask operational questions, not credential questions. A capable partner can explain how they handle messy or unlabeled data, how they validate a model before it goes live, and how they manage performance degradation after deployment. Ask for industry-specific examples with real detail — the problem, the approach, the result, and what went wrong. Vendor neutrality matters too: Nexterse LLC builds on containerized, open-source standards (Kubeflow, Docker, MLflow) with no vendor lock-in, so you own the IP and choose the infrastructure. And the same team handles consulting and engineering — no handoff where context gets lost.",
  },
  {
    question: "Which industries benefit most from custom machine learning?",
    answer: "Industries where the data is proprietary, the domain is specialized, or accuracy requirements exceed what off-the-shelf tools deliver. Nexterse LLC works most often in fintech (risk scoring, anomaly detection), healthcare (diagnostics support, governed clinical data), logistics (routing, demand forecasting), and manufacturing and energy (predictive maintenance, quality and yield). The common thread: value comes from a model trained on your data, for your problem, in your environment.",
  },
  {
    question: "What makes an ML model production-ready rather than a prototype?",
    answer: "A model that scores well on a benchmark is not a finished product. Production readiness means it holds up under messy real-world inputs, integrates with your existing systems via APIs and event flows, and is wrapped in MLOps — drift monitoring and automated retraining — so accuracy doesn't quietly decay after launch. Nexterse LLC engineers this through our agentic development lifecycle (ADLC), versioning code, data, and model weights together for full traceability.",
  },
];

const INITIAL_VISIBLE = 6;

export default function MlFaq() {
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
    <section id="ml-faq" className={styles.section}>
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
