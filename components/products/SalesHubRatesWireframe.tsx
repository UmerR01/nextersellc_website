"use client";

import { useEffect, useState } from "react";
import SalesHubFeatureCard from "./SalesHubFeatureCard";
import { PhosphorIcon } from "./phosphorPaths";
import { useReplay } from "./useReplay";
import styles from "./SalesHubRatesWireframe.module.css";

// Recreated from the real product rate table (products.html's rate-table
// columns: Network, Age Band, Male, Female, Service Type, Gross Rate,
// Commission Rate) and the TOB manager (network_plan_tob.html: table-of-
// benefits rows per plan, visa and TPA).
const RATES = [
  { network: "Prime Network", band: "18-35", male: "1,240", female: "1,180", service: "Inpatient", gross: "1,240" },
  { network: "Prime Network", band: "36-50", male: "1,610", female: "1,540", service: "Inpatient", gross: "1,610" },
  { network: "Standard Network", band: "18-35", male: "860", female: "820", service: "Outpatient", gross: "860" },
];

const TOB_ROWS = ["Room & Board", "Maternity Cover", "Basic Dental", "Basic Optical"];

export default function SalesHubRatesWireframe() {
  const { ref, cycle } = useReplay<HTMLDivElement>();
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    setFlash(false);
    const id = setTimeout(() => setFlash(true), 1600);
    return () => clearTimeout(id);
  }, [cycle]);

  return (
    <div ref={ref}>
      <SalesHubFeatureCard
        key={cycle}
        title="Rates & TOB"
        cta={
          <span className={styles.cta}>
            <PhosphorIcon name="Percent" />
            Price Matrix
          </span>
        }
      >
        <div className={styles.table}>
          <div className={styles.headRow}>
            <span>Network</span>
            <span>Age Band</span>
            <span>Male</span>
            <span>Female</span>
            <span>Service Type</span>
            <span>Gross Rate</span>
          </div>
          {RATES.map((r, i) => (
            <div key={r.network + r.band + r.service} className={styles.row} style={{ animationDelay: `${i * 0.1}s` }}>
              <span>{r.network}</span>
              <span className={styles.muted}>{r.band}</span>
              <span className={styles.muted}>{r.male}</span>
              <span className={styles.muted}>{r.female}</span>
              <span className={styles.muted}>{r.service}</span>
              <span className={`${styles.gross} ${i === 0 && flash ? styles.grossUpdated : ""}`}>
                AED {i === 0 && flash ? "1,295" : r.gross}
              </span>
            </div>
          ))}
        </div>

        <div className={styles.tobCard}>
          <div className={styles.tobHead}>
            <span className={styles.tobTitle}>Table of Benefits: Prime Network</span>
            <span className={`${styles.syncTag} ${flash ? styles.syncTagOn : ""}`}>
              <PhosphorIcon name="CheckCircle" />
              {flash ? "Synced" : "Syncing…"}
            </span>
          </div>
          <div className={styles.tobRows}>
            {TOB_ROWS.map((t, i) => (
              <span key={t} className={styles.tobChip} style={{ animationDelay: `${0.2 + i * 0.08}s` }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </SalesHubFeatureCard>
    </div>
  );
}
