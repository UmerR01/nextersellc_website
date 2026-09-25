"use client";

import Count from "./Count";
import JoblynkFeatureCard from "./JoblynkFeatureCard";
import { PhosphorIcon } from "./phosphorPaths";
import { useReplay } from "./useReplay";
import styles from "./JoblynkTalentDiscoveryWireframe.module.css";

// Autonomous Talent Discovery: a live "scan" of the 750M+ profile pool
// narrowing down to a ranked shortlist of matches for one open role.
const MATCHES = [
  { name: "Sarah Mitchell", role: "Senior Backend Engineer", match: 97, source: "Active" as const },
  { name: "Jordan Brooks", role: "Backend Engineer", match: 93, source: "Passive" as const },
  { name: "Emily Carter", role: "Staff Backend Engineer", match: 90, source: "Passive" as const },
  { name: "Marcus Johnson", role: "Backend Engineer II", match: 88, source: "Active" as const },
];

export default function JoblynkTalentDiscoveryWireframe() {
  const { ref, cycle } = useReplay<HTMLDivElement>();

  return (
    <div ref={ref}>
      <JoblynkFeatureCard
        key={cycle}
        title="Talent Discovery"
        cta={
          <span className={styles.cta}>
            <PhosphorIcon name="MagnifyingGlass" />
            750M+ profiles
          </span>
        }
      >
        <div className={styles.searchBar}>
          <PhosphorIcon name="MagnifyingGlass" className={styles.searchIcon} />
          <span>Backend Engineer · Austin, TX · 5+ yrs · React &amp; Node</span>
          <span className={styles.scanning}>
            <span className={styles.scanDot} />
            Scanning
          </span>
        </div>

        <div className={styles.stats}>
          <span>
            <b>
              <Count to={750} duration={1400} />
              M+
            </b>{" "}
            profiles scanned
          </span>
          <span>
            <b>
              <Count to={214} delay={200} duration={1400} />
            </b>{" "}
            matches found
          </span>
        </div>

        <div className={styles.matches}>
          {MATCHES.map((m, i) => (
            <div key={m.name} className={styles.matchRow} style={{ animationDelay: `${0.6 + i * 0.15}s` }}>
              <span className={styles.avatar}>{m.name[0]}</span>
              <span className={styles.matchBody}>
                <span className={styles.matchName}>{m.name}</span>
                <span className={styles.matchRole}>{m.role}</span>
              </span>
              <span className={`${styles.sourceBadge} ${m.source === "Active" ? styles.sourceActive : styles.sourcePassive}`}>
                {m.source}
              </span>
              <span className={styles.matchScore}>{m.match}%</span>
            </div>
          ))}
        </div>
      </JoblynkFeatureCard>
    </div>
  );
}
