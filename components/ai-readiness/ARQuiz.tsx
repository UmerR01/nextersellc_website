"use client";
import { useEffect, useState } from "react";
import styles from "./ARQuiz.module.css";

const QUESTIONS = [
  {
    q: "What is the primary business problem you are trying to solve right now?",
    options: [
      "We need a reliable, highly secure core software platform (e.g., ERP, portal, or mobile app). (Score: 0)",
      "We need to unlock our internal knowledge and make our documents instantly searchable. (Score: 2)",
      "We want to automate complex, multi-step workflows that currently require human reasoning. (Score: 3)",
      "We aren't sure yet; we just know we need to explore AI before our competitors do. (Score: 1)",
    ],
    scores: [0, 2, 3, 1],
  },
  {
    q: "AI is only as smart as the data it accesses. How would you describe the current state of your proprietary data?",
    options: [
      "Highly centralized, clean, and easily accessible via modern APIs or cloud databases. (Score: 3)",
      "Mostly digitized, but siloed across several different SaaS tools and legacy systems. (Score: 2)",
      "Fragmented, unstructured, highly manual, or trapped in legacy on-premise servers. (Score: 0)",
    ],
    scores: [3, 2, 0],
  },
  {
    q: "What level of security and regulatory compliance does your industry require?",
    options: [
      "Extremely strict (HIPAA, SOC2, FinServ). Data cannot ever leave our private environment. (Score: 3)",
      "Standard corporate privacy. We want to protect IP, but aren't heavily regulated. (Score: 2)",
      "Low risk. We are mostly dealing with public or non-sensitive data. (Score: 1)",
    ],
    scores: [3, 2, 1],
  },
  {
    q: "Where does your primary technology stack currently live?",
    options: [
      "Fully cloud-native (AWS, Azure, GCP). (Score: 3)",
      "A mix of cloud and off-the-shelf SaaS applications. (Score: 2)",
      "Heavily reliant on legacy, on-premise architecture. (Score: 0)",
    ],
    scores: [3, 2, 0],
  },
  {
    q: "How does your leadership team view the financial investment into new technology?",
    options: [
      "We need guaranteed, deterministic outcomes and exact budgets before starting. (Score: 0)",
      "We are willing to fund a short, structured Proof of Concept to calculate ROI before scaling. (Score: 3)",
      "We want immediate, plug-and-play AI features without custom engineering. (Score: 1)",
    ],
    scores: [0, 3, 1],
  },
];

const CONTACT_STEPS = [
  { field: "name", placeholder: "Your name", type: "text" },
  { field: "email", placeholder: "Your email", type: "email" },
] as const;

const TOTAL_STEPS = QUESTIONS.length + CONTACT_STEPS.length;

export default function ARQuiz() {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [contact, setContact] = useState({ name: "", email: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!isLoading) return;
    const timer = window.setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);
    }, 1200);
    return () => window.clearTimeout(timer);
  }, [isLoading]);

  const isQuestionStep = currentQ < QUESTIONS.length;
  const contactStep = isQuestionStep ? null : CONTACT_STEPS[currentQ - QUESTIONS.length];
  const contactValue = contactStep ? contact[contactStep.field] : "";

  const handleNext = () => {
    if (isQuestionStep) {
      if (selected === null) return;
      setAnswers((current) => [...current, QUESTIONS[currentQ].scores[selected]]);
      setSelected(null);
      setCurrentQ((value) => value + 1);
      return;
    }

    if (!contactStep || !contactValue.trim()) return;
    if (currentQ + 1 < TOTAL_STEPS) {
      setCurrentQ((value) => value + 1);
      return;
    }
    setIsLoading(true);
  };

  const isNextDisabled = isQuestionStep ? selected === null : !contactValue.trim();

  return (
    <section className={styles.section} id="quiz">
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          <p className={styles.eyebrow}>Take a basic AI readiness assessment</p>
          <h2 className={styles.title}>
            How AI-ready is your business?
            <br />
            (free assessment)
          </h2>
        </div>

        <div className={styles.right}>
          <div className={`${styles.card} ${isLoading ? styles.loadingCard : ""}`}>
            <div className={styles.cardHeader}>
              <span className={styles.cardLabel}>AI Readiness Assessment</span>
              {!isLoading && !submitted && (
                <span className={styles.progress}>
                  Question {currentQ + 1} <span>/ {TOTAL_STEPS}</span>
                </span>
              )}
            </div>

            {isLoading ? (
              <div className={styles.loadingPanel} aria-label="Loading assessment result"><span /><span /><span /></div>
            ) : submitted ? (
              <div className={styles.result}>
                <div className={styles.successIcon} aria-hidden>
                  <svg viewBox="0 0 120 120" fill="none">
                    <circle cx="60" cy="60" r="42" stroke="currentColor" strokeWidth="2" />
                    <path d="M43 61.5L56 74.5L83 45" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className={styles.resultLabel}>Thank you for submission!</div>
                <p className={styles.resultDesc}>We will send score to your email.</p>
              </div>
            ) : isQuestionStep ? (
              <>
                <p className={styles.question}>{QUESTIONS[currentQ].q}</p>
                <div className={styles.options}>
                  {QUESTIONS[currentQ].options.map((opt, i) => (
                    <label key={i} className={`${styles.option} ${selected === i ? styles.optionSelected : ""}`}>
                      <input
                        type="radio"
                        name={`q${currentQ}`}
                        value={i}
                        checked={selected === i}
                        onChange={() => setSelected(i)}
                        className={styles.radio}
                      />
                      <span className={styles.optionText}>{opt}</span>
                    </label>
                  ))}
                </div>
                <button className={`btn btn-accent ${styles.nextBtn}`} onClick={handleNext} disabled={isNextDisabled}>
                  Next
                </button>
              </>
            ) : (
              <>
                <div className={styles.inputStep}>
                  <input
                    type={contactStep!.type}
                    value={contactValue}
                    onChange={(event) => setContact((current) => ({ ...current, [contactStep!.field]: event.target.value }))}
                    placeholder={contactStep!.placeholder}
                    aria-label={contactStep!.placeholder}
                  />
                </div>
                <button className={`btn btn-accent ${styles.nextBtn}`} onClick={handleNext} disabled={isNextDisabled}>
                  {currentQ + 1 < TOTAL_STEPS ? "Next" : "Finish"}
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
