"use client";

import styles from "./BlogTagsSection.module.css";

/**
 * Always-present page-template Tags section — a dedicated "Tags" h2 heading
 * followed by the post's related tags. Rendered as <div>/<span>, not a
 * <ul>, on purpose: the shared body typography puts a tick-mark icon on
 * every <ul><li>, which would otherwise bleed into these tag pills.
 */
export default function BlogTagsSection({
  tags,
  id = "h-tags",
  heading = "Tags",
}: {
  tags: string[];
  id?: string;
  heading?: string;
}) {
  if (tags.length === 0) return null;

  return (
    <div className={styles.section}>
      <h2 id={id} className={styles.title}>
        {heading}
      </h2>
      <div className={styles.list}>
        {tags.map((tag) => (
          <span key={tag} className={styles.tag}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
