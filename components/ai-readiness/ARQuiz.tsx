"use client";
import { useState } from "react";
import styles from "./ARQuiz.module.css";

const QUESTIONS = [
  {
    q: "How would you describe the state of your business data?",
    options: [
      "Structured, centralized, and well-documented",
      "Mostly organized but spread across several systems",
      "Siloed across departments with limited access controls",
      "Unstructured, scattered, or largely undocumented",
    ],
    scores: [3, 2, 1, 0],
  },
  {
    q: "How mature is your cloud infrastructure?",
    options: [
      "Cloud-native with modern CI/CD and observability",
      "Partially migrated with some legacy components",
      "Mostly on-premise with limited cloud usage",
      "No cloud infrastructure yet",
    ],
    scores: [3, 2, 1, 0],
  },
  {
    q: "Do you have defined data access controls and role-based permissions?",
    options: [
      "Yes, fully implemented and regularly reviewed",
      "Partially — some areas have controls, others do not",
      "Access is mostly informal and historically accumulated",
      "No formal access control model exists",
    ],
    scores: [3, 2, 1, 0],
  },
  {
    q: "Have you identified a specific AI use case you want to validate?",
    options: [
      "Yes, with clear success criteria and stakeholder alignment",
      "We have a general idea but haven't scoped it fully",
      "We're exploring several options without a clear priority",
      "We don't yet know what problem we want to solve with AI",
    ],
    scores: [3, 2, 1, 0],
  },
  {
    q: "What compliance frameworks apply to your data?",
    options: [
      "None — data is not regulated",
      "We follow general best practices but no formal framework",
      "One or more frameworks apply (GDPR, HIPAA, SOC 2, etc.)",
      "We're unsure what frameworks apply to us",
    ],
    scores: [3, 2, 1, 0],
  },
  {
    q: "Have you estimated the ROI or business impact of your target AI use case?",
    options: [
      "Yes, with quantified metrics and a business case",
      "Informally — we have a sense but no numbers",
      "No — we haven't thought about ROI yet",
      "We're focused on the technology, not the business case",
    ],
    scores: [3, 2, 1, 0],
  },
  {
    q: "How does leadership view AI adoption in your organization?",
    options: [
      "Fully aligned and sponsoring specific initiatives",
      "Supportive but not yet committed to a budget",
      "Curious but skeptical — still needs convincing",
      "No executive visibility on AI yet",
    ],
    scores: [3, 2, 1, 0],
  },
];

function getResult(score: number): { label: string; desc: string } {
  if (score >= 17) {
    return {
      label: "High readiness",
      desc: "Your organization has strong foundations for AI. A focused assessment can help you validate architecture choices and move quickly to a proof-of-concept.",
    };
  }
  if (score >= 11) {
    return {
      label: "Moderate readiness",
      desc: "You have a good starting point but some gaps to address. A readiness assessment will identify the specific blockers and give you a prioritized action plan.",
    };
  }
  if (score >= 5) {
    return {
      label: "Early stage",
      desc: "There are foundational elements to put in place before AI development begins. An assessment will show you where to invest first to maximize your chances of success.",
    };
  }
  return {
    label: "Foundation needed",
    desc: "A data and infrastructure foundation must come before AI. Our assessment will define a pragmatic roadmap starting from where you are today.",
  };
}

export default function ARQuiz() {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [done, setDone] = useState(false);

  const total = QUESTIONS.length;

  const handleNext = () => {
    if (selected === null) return;
    const newAnswers = [...answers, QUESTIONS[currentQ].scores[selected]];
    if (currentQ + 1 < total) {
      setAnswers(newAnswers);
      setCurrentQ(currentQ + 1);
      setSelected(null);
    } else {
      setAnswers(newAnswers);
      setDone(true);
    }
  };

  const totalScore = answers.reduce((a, b) => a + b, 0);
  const result = done ? getResult(totalScore) : null;

  return (
    <section className={styles.section} id="quiz">
      <div className={`container ${styles.inner}`}>
        {/* Left panel */}
        <div className={styles.left}>
          <p className={styles.eyebrow}>Take a basic AI readiness assessment</p>
          <h2 className={styles.title}>
            Take a <span>free basic AI readiness</span> assessment
          </h2>
        </div>

        {/* Right panel */}
        <div className={styles.right}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.cardLabel}>AI Readiness Assessment</span>
              {!done && (
                <span className={styles.progress}>
                  Question {currentQ + 1} / {total}
                </span>
              )}
            </div>

            {!done ? (
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
                <button
                  className={`btn btn-accent ${styles.nextBtn}`}
                  onClick={handleNext}
                  disabled={selected === null}
                >
                  {currentQ + 1 < total ? "Next" : "See results"}
                </button>
              </>
            ) : (
              <div className={styles.result}>
                <div className={styles.resultLabel}>{result!.label}</div>
                <p className={styles.resultDesc}>{result!.desc}</p>
                <a href="#contact" className="btn btn-accent">
                  Book your AI readiness assessment
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
