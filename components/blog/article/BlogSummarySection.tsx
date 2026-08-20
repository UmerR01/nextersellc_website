"use client";

import { Fragment } from "react";
import styles from "./BlogSummarySection.module.css";
import type { RichText } from "./types";

/** Always-present page-template Summary section (item 8 of the article
 *  template). Tags moved to their own BlogTagsSection — see that file. */
export default function BlogSummarySection({
  summary,
  id = "h-summary",
  heading = "Summary",
}: {
  summary: RichText;
  id?: string;
  heading?: string;
}) {
  return (
    <div className={styles.section}>
      <h2 id={id} className={styles.title}>
        {heading}
      </h2>
      <p className={styles.text}>
        {summary.map((span, i) => {
          let node: React.ReactNode = span.text;
          if (span.bold) node = <strong>{node}</strong>;
          if (span.italic) node = <em>{node}</em>;
          if (span.highlight) node = <span style={{ color: "var(--color-accent)", fontWeight: 500 }}>{node}</span>;
          return <Fragment key={i}>{node}</Fragment>;
        })}
      </p>
    </div>
  );
}
