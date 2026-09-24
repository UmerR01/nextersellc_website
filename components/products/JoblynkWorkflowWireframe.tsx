"use client";

import { useEffect, useState } from "react";
import JoblynkFeatureCard from "./JoblynkFeatureCard";
import { PhosphorIcon } from "./phosphorPaths";
import { useReplay } from "./useReplay";
import styles from "./JoblynkWorkflowWireframe.module.css";

// Workflow Automation: job intake to candidate delivery running end to
// end, with a recruiter only needed at the one step that still needs a
// human decision.
const STEPS = [
  { label: "Job Intake", icon: "FileText" as const, human: false, event: "Senior Backend Engineer req created" },
  { label: "Sourcing", icon: "MagnifyingGlass" as const, human: false, event: "18 candidates sourced from the talent pool" },
  { label: "Outreach", icon: "PhoneCall" as const, human: false, event: "12 outreach touches sent across voice, SMS & email" },
  { label: "Interview", icon: "ChatCircleText" as const, human: false, event: "5 AI interviews completed" },
  { label: "Qualification", icon: "CheckCircle" as const, human: false, event: "3 candidates fully qualified" },
  { label: "Recruiter Review", icon: "UsersThree" as const, human: true, event: "Shortlist delivered to the recruiter" },
];

export default function JoblynkWorkflowWireframe() {
  const { ref, cycle } = useReplay<HTMLDivElement>();
  const [active, setActive] = useState(0);

  useEffect(() => {
    setActive(0);
  }, [cycle]);

  useEffect(() => {
    if (active >= STEPS.length - 1) return;
    const id = setTimeout(() => setActive((a) => a + 1), 550);
    return () => clearTimeout(id);
  }, [active]);

  return (
    <div ref={ref}>
      <JoblynkFeatureCard title="Workflow Automation" key={cycle}>
        <div className={styles.pipeline}>
          <span className={styles.track} />
          <span className={styles.trackFill} style={{ width: `${(active / (STEPS.length - 1)) * 84}%` }} />
          {STEPS.map((s, i) => {
            const done = i < active;
            const isActive = i === active;
            return (
              <div key={s.label} className={styles.stepWrap}>
                <div
                  className={`${styles.node} ${done ? styles.nodeDone : ""} ${isActive ? styles.nodeActive : ""} ${
                    s.human ? styles.nodeHuman : ""
                  }`}
                >
                  <PhosphorIcon name={s.icon} />
                </div>
                <span className={styles.stepLabel}>{s.label}</span>
              </div>
            );
          })}
        </div>

        <div className={styles.feed}>
          {STEPS.map((s, i) =>
            active > i ? (
              <div key={s.label} className={styles.feedRow}>
                <PhosphorIcon name="CheckCircle" className={styles.feedIcon} />
                {s.event}
              </div>
            ) : null
          )}
        </div>

        <div className={styles.footer}>
          <span className={styles.footerChip}>
            <span className={styles.dotAuto} />
            Automated
          </span>
          <span className={styles.footerChip}>
            <span className={styles.dotHuman} />
            Needs a recruiter
          </span>
        </div>
      </JoblynkFeatureCard>
    </div>
  );
}
