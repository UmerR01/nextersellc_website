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

// Candidate footage for the video tile: a 5 second, muted, 560x472 (2x the
// tile) H.264 clip, ~90 KB, cut from the original 4K clip (kept outside
// public/ in assets-source/). It plays once per run, alongside the transcript
// and scoring, and the call switches off when the scoring is done. If it
// fails to load the tile falls back to the "Camera is off" state.
const CLIP_SRC = "/products/joblynk/interview.mp4";
const CLIP_POSTER = "/products/joblynk/interview-poster.jpg";

export default function JoblynkAiInterviewsWireframe() {
  const { ref, cycle } = useReplay<HTMLDivElement>();
  const [shown, setShown] = useState(0);
  const [clipReady, setClipReady] = useState(false);
  // The call has ended: transcript finished and the final scores have settled.
  const [over, setOver] = useState(false);

  useEffect(() => {
    setShown(0);
    setOver(false);
  }, [cycle]);

  useEffect(() => {
    if (shown >= TRANSCRIPT.length) return;
    const id = setTimeout(() => setShown((s) => s + 1), 650);
    return () => clearTimeout(id);
  }, [shown]);

  const stepIndex = shown > 5 ? 2 : shown > 3 ? 1 : shown > 1 ? 0 : -1;
  const scores = stepIndex >= 0 ? SCORE_STEPS[stepIndex] : { technical: 0, communication: 0, roleFit: 0 };
  const complete = shown >= TRANSCRIPT.length;

  useEffect(() => {
    if (!complete) return;
    const id = setTimeout(() => setOver(true), 800);
    return () => clearTimeout(id);
  }, [complete]);
  // Whoever said the latest line is "speaking" until the interview wraps up.
  const speaker = shown > 0 && !complete ? TRANSCRIPT[shown - 1].who : null;

  return (
    <div ref={ref}>
      <JoblynkFeatureCard
        key={cycle}
        title="AI Interviews"
        cta={
          <span className={`${styles.liveBadge} ${over ? styles.doneBadge : ""}`}>
            <span className={styles.liveDot} />
            {over ? "Completed" : "Live"}
          </span>
        }
      >
        <div className={styles.stage}>
          {/* Video call: the candidate's tile (camera off until they allow
              it, as in the real interview screen) with the AI interviewer
              as a picture-in-picture tile. Whoever is speaking is ringed. */}
          <div className={`${styles.video} ${clipReady ? styles.videoLive : ""} ${over ? styles.videoOver : ""}`}>
            <video
              className={styles.clip}
              src={CLIP_SRC}
              poster={CLIP_POSTER}
              autoPlay
              muted
              playsInline
              preload="auto"
              onLoadedData={() => setClipReady(true)}
              onError={() => setClipReady(false)}
            />
            <div className={`${styles.camOff} ${speaker === "Candidate" ? styles.speaking : ""}`}>
              <span className={styles.camCircle}>
                <svg viewBox="0 0 24 24" aria-hidden>
                  <rect x="3" y="6.5" width="12" height="11" rx="2.2" />
                  <path d="M15 10.5 21 7.5v9l-6-3z" />
                </svg>
              </span>
              <span className={styles.camLabel}>{over ? "Interview complete" : "Camera is off"}</span>
            </div>

            <div className={`${styles.pip} ${speaker === "AI" ? styles.speaking : ""}`}>
              <span className={styles.agentAvatar} aria-hidden>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/products/joblynk/sarah-agent.jpg" alt="" />
              </span>
              <span className={styles.pipText}>
                <span className={styles.pipName}>Sarah</span>
                <span className={styles.wave} aria-hidden>
                  {[0, 1, 2, 3].map((b) => (
                    <i key={b} style={{ animationDelay: `${b * 0.12}s` }} className={speaker === "AI" ? styles.waveOn : ""} />
                  ))}
                </span>
              </span>
            </div>

            <span className={styles.namePill}>Candidate</span>

            <div className={styles.controls}>
              <span className={styles.ctl}>
                <svg viewBox="0 0 24 24" aria-hidden>
                  <rect x="9" y="3.5" width="6" height="11" rx="3" />
                  <path d="M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v3" />
                </svg>
              </span>
              <span className={styles.ctl}>
                <svg viewBox="0 0 24 24" aria-hidden>
                  <rect x="3" y="6.5" width="12" height="11" rx="2.2" />
                  <path d="M15 10.5 21 7.5v9l-6-3zM4 4l16 16" />
                </svg>
              </span>
              <span className={`${styles.ctl} ${styles.ctlEnd}`}>
                <svg viewBox="0 0 24 24" aria-hidden>
                  <path d="M4 14.5c4.7-4 11.3-4 16 0l-2 2.6-3-1.6v-2.4a9 9 0 0 0-6 0v2.4l-3 1.6z" />
                </svg>
              </span>
            </div>
          </div>

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
