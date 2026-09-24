"use client";

import { useEffect, useState } from "react";
import JoblynkFeatureCard from "./JoblynkFeatureCard";
import { PhosphorIcon } from "./phosphorPaths";
import { useReplay } from "./useReplay";
import styles from "./JoblynkQualificationWireframe.module.css";

// Qualification & Validation: the checks that turn a candidate into an
// eligible, ready-to-move shortlist entry.
const CHECKS = [
  { label: "Compensation expectations", detail: "Within range · $115k–130k" },
  { label: "Work authorization", detail: "Eligible · US citizen" },
  { label: "Availability", detail: "Can start within 2 weeks" },
  { label: "Role-specific requirements", detail: "5+ yrs backend · confirmed" },
];

export default function JoblynkQualificationWireframe() {
  const { ref, cycle } = useReplay<HTMLDivElement>();
  const [checked, setChecked] = useState(0);

  useEffect(() => {
    setChecked(0);
  }, [cycle]);

  useEffect(() => {
    if (checked >= CHECKS.length) return;
    const id = setTimeout(() => setChecked((c) => c + 1), 500);
    return () => clearTimeout(id);
  }, [checked]);

  const allDone = checked >= CHECKS.length;

  return (
    <div ref={ref}>
      <JoblynkFeatureCard title="Qualification &amp; Validation" key={cycle}>
        <div className={styles.candidateRow}>
          <span className={styles.avatar}>SM</span>
          <span className={styles.candidateBody}>
            <span className={styles.candidateName}>Sarah Mitchell</span>
            <span className={styles.candidateRole}>Senior Backend Engineer</span>
          </span>
        </div>

        <div className={styles.checks}>
          {CHECKS.map((c, i) => (
            <div key={c.label} className={styles.checkRow}>
              <span className={checked > i ? styles.check : styles.checkEmpty}>
                {checked > i && <PhosphorIcon name="CheckCircle" />}
              </span>
              <span className={styles.checkBody}>
                <span className={styles.checkLabel}>{c.label}</span>
                <span className={styles.checkDetail}>{c.detail}</span>
              </span>
            </div>
          ))}
        </div>

        <div className={`${styles.banner} ${allDone ? styles.bannerOn : ""}`}>
          <PhosphorIcon name="CheckCircle" />
          Fully qualified &mdash; ready for the shortlist.
        </div>
      </JoblynkFeatureCard>
    </div>
  );
}
