"use client";

import { useEffect, useState } from "react";
import Count from "./Count";
import JoblynkFeatureCard from "./JoblynkFeatureCard";
import { PhosphorIcon } from "./phosphorPaths";
import { useReplay } from "./useReplay";
import styles from "./JoblynkAtsWireframe.module.css";

// ATS Integration: the candidates table (name, profiles, job title,
// company, location, work auth, status) where each record flips from a
// purple "Stale" pill to a green "Synced" check as it lands in the ATS.
// Layout follows the real candidates list.
const ROWS = [
  { name: "Sarah Mitchell", job: "Senior Backend Engineer", co: "Brightcart Commerce", loc: "Seattle, WA", auth: "U.S. Citizen", li: true },
  { name: "Michael Rodriguez", job: "Platform Engineer", co: "Datapulse Analytics", loc: "Atlanta, GA", auth: "U.S. Citizen", li: true },
  { name: "Emily Johnson", job: "DevOps Engineer", co: "Mountainview Logistics", loc: "Denver, CO", auth: "Green Card", li: true },
  { name: "David Chen", job: "Senior Platform Engineer", co: "Streamlayer Media", loc: "San Francisco, CA", auth: "U.S. Citizen", li: true },
  { name: "Jordan Brooks", job: "Security Engineer", co: "Securepay Financial", loc: "New Jersey, NJ", auth: "U.S. Citizen", li: false },
  { name: "Ashley Turner", job: "Maintenance Lead", co: "Sunrun", loc: "Sacramento, CA", auth: "U.S. Citizen", li: false },
  { name: "Marcus Johnson", job: "Backend Engineer II", co: "Cloudnova Solutions", loc: "Austin, TX", auth: "U.S. Citizen", li: true },
  { name: "Emma Garcia", job: "Technical Recruiter", co: "Apple/volt", loc: "Phoenix, AZ", auth: "U.S. Citizen", li: false },
];

export default function JoblynkAtsWireframe() {
  const { ref, cycle } = useReplay<HTMLDivElement>(12000);
  const [synced, setSynced] = useState(0);

  useEffect(() => {
    setSynced(0);
  }, [cycle]);

  useEffect(() => {
    if (synced >= ROWS.length) return;
    const id = setTimeout(() => setSynced((s) => s + 1), synced === 0 ? 1100 : 480);
    return () => clearTimeout(id);
  }, [synced]);

  return (
    <div ref={ref}>
      <JoblynkFeatureCard
        key={cycle}
        title="ATS Integration"
        cta={
          <span className={styles.cta}>
            <PhosphorIcon name="CheckCircle" />
            {synced >= ROWS.length ? "Synced to your ATS" : "Syncing to your ATS"}
          </span>
        }
      >
        <div className={styles.toolbar}>
          <i className={styles.box} />
          <b>
            Candidates (<Count to={146} duration={900} />)
          </b>
          <span className={styles.toggle}>
            <PhosphorIcon name="GridFour" />
          </span>
        </div>

        <div className={styles.table}>
          <div className={`${styles.tr} ${styles.th}`}>
            <span>Name</span>
            <span>Profiles</span>
            <span>Job title</span>
            <span>Company</span>
            <span>Location</span>
            <span>Work auth</span>
            <span>Status</span>
          </div>
          {ROWS.map((r, i) => {
            const done = synced > i;
            return (
              <div key={r.name} className={`${styles.tr} ${styles.row}`} style={{ animationDelay: `${i * 0.07}s` }}>
                <span className={styles.name}>
                  <i className={styles.box} />
                  {r.name}
                </span>
                <span className={styles.profiles}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  {r.li && <em>in</em>}
                </span>
                <span className={styles.muted}>{r.job}</span>
                <span className={styles.co}>{r.co}</span>
                <span className={styles.muted}>{r.loc}</span>
                <span className={styles.muted}>{r.auth}</span>
                <span className={done ? styles.synced : styles.stale}>
                  {done ? (
                    <>
                      <PhosphorIcon name="CheckCircle" />
                      Synced
                    </>
                  ) : (
                    <>
                      <i />
                      Stale
                    </>
                  )}
                </span>
              </div>
            );
          })}
        </div>
      </JoblynkFeatureCard>
    </div>
  );
}
