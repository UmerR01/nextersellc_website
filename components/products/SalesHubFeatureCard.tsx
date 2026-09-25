"use client";

import type { ReactNode } from "react";
import ScaledFrame from "./ScaledFrame";
import styles from "./SalesHubFeatureCard.module.css";

/**
 * Shared shell for the SalesHub "What you can do" feature wireframes —
 * same idea as XorrisFeatureCard, styled in SalesHub's own blue
 * (#0b3ea8) instead of Xorris's plum, matching the real SalesHub
 * dashboard's own panel chrome (white cards, light borders, blue accents).
 */
export default function SalesHubFeatureCard({
  title,
  cta,
  children,
}: {
  title: string;
  cta?: ReactNode;
  children: ReactNode;
}) {
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
