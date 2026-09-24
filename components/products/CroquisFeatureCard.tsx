"use client";

import type { ReactNode } from "react";
import ScaledFrame from "./ScaledFrame";
import styles from "./CroquisFeatureCard.module.css";

/** Shared dark shell (Croquis brand navy + pale blue) for the Croquis
 * feature wireframes. */
export default function CroquisFeatureCard({ title, cta, children }: { title: string; cta?: ReactNode; children: ReactNode }) {
  return (
    <ScaledFrame>
      <div className={styles.root} aria-hidden>
        <div className={styles.headRow}>
          <h4 className={styles.title}>{title}</h4>
          {cta}
        </div>
        <div className={styles.body}>{children}</div>
      </div>
    </ScaledFrame>
  );
}
