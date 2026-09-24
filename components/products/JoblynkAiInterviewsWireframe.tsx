"use client";

import { useEffect, useState } from "react";
import Count from "./Count";
import JoblynkFeatureCard from "./JoblynkFeatureCard";
import { PhosphorIcon } from "./phosphorPaths";
import { useReplay } from "./useReplay";
import styles from "./JoblynkAiInterviewsWireframe.module.css";

// AI Interviews: a structured first-round call, transcribed live. Each
// candidate answer moves the live scorecard — not always upward, since a
// weaker answer on one dimension can cost points even as others improve.
const TRANSCRIPT = [
  { who: "AI" as const, text: "Walk me through a system you designed end to end." },
  { who: "Candidate" as const, text: "I led the redesign of our payments queue, moved it onto Kafka to handle the load." },
  { who: "AI" as const, text: "What was the hardest tradeoff you made there?" },
  { who: "Candidate" as const, text: "Balancing consistency and latency under peak traffic." },
  { who: "AI" as const, text: "How do you handle disagreement with a teammate on approach?" },
  { who: "Candidate" as const, text: "I lay out the tradeoffs and let the data settle it." },
] as const;

// One snapshot per candidate answer (transcript indices 1, 3, 5).
const SCORE_STEPS = [
  { technical: 74, communication: 70, roleFit: 65 },
  { technical: 90, communication: 68, roleFit: 72 },
  { technical: 92, communication: 88, roleFit: 88 },
];

const DIMENSIONS = [
  { key: "technical" as const, label: "Technical Depth" },
  { key: "communication" as const, label: "Communication" },
  { key: "roleFit" as const, label: "Role Fit" },
];

export default function JoblynkAiInterviewsWireframe() {
  const { ref, cycle } = useReplay<HTMLDivElement>();
  const [shown, setShown] = useState(0);

  useEffect(() => {
    setShown(0);
  }, [cycle]);

  useEffect(() => {
    if (shown >= TRANSCRIPT.length) return;
    const id = setTimeout(() => setShown((s) => s + 1), 650);
    return () => clearTimeout(id);
  }, [shown]);

  const stepIndex = shown > 5 ? 2 : shown > 3 ? 1 : shown > 1 ? 0 : -1;
  const scores = stepIndex >= 0 ? SCORE_STEPS[stepIndex] : { technical: 0, communication: 0, roleFit: 0 };
  const complete = shown >= TRANSCRIPT.length;

  return (
    <div ref={ref}>
      <JoblynkFeatureCard
        key={cycle}
        title="AI Interviews"
        cta={
          <span className={styles.liveBadge}>
            <span className={styles.liveDot} />
            Live
          </span>
        }
      >
        <div className={styles.transcript}>
          {TRANSCRIPT.map((t, i) => (
            <div
              key={i}
              className={`${styles.line} ${t.who === "AI" ? styles.lineAi : styles.lineCandidate}`}
              style={{ opacity: shown > i ? 1 : 0 }}
            >
              <span className={styles.who}>{t.who}</span>
              {t.text}
            </div>
          ))}
        </div>

        <div className={styles.scores}>
          {DIMENSIONS.map((d) => (
            <div key={d.key} className={styles.scoreRow}>
              <span className={styles.scoreLabel}>{d.label}</span>
              <span className={styles.scoreTrack}>
                <span className={styles.scoreFill} style={{ width: `${scores[d.key]}%` }} />
              </span>
              <span className={styles.scoreValue}>
                <Count to={scores[d.key]} duration={500} />%
              </span>
            </div>
          ))}
        </div>

        <div className={`${styles.footer} ${complete ? styles.footerDone : ""}`}>
          <PhosphorIcon name="CheckCircle" className={styles.footerIcon} />
          {complete ? "Validated automatically, ready for recruiter review" : "Interview in progress, scoring live"}
        </div>
      </JoblynkFeatureCard>
    </div>
  );
}
