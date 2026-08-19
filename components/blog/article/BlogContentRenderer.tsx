"use client";

import { Fragment } from "react";
import styles from "./BlogArticleBody.module.css";
import type { ContentBlock, RichText } from "./types";

/** Renders a run of text spans. `highlight` is the only emphasis that carries
 *  color — it is a <span>, never an <a>, so it can never navigate. */
function RichRun({ text }: { text: RichText }) {
  return (
    <>
      {text.map((span, i) => {
        let node: React.ReactNode = span.text;
        if (span.bold) node = <strong>{node}</strong>;
        if (span.italic) node = <em>{node}</em>;
        if (span.highlight) node = <span className={styles.highlight}>{node}</span>;
        return <Fragment key={i}>{node}</Fragment>;
      })}
    </>
  );
}

export default function BlogContentRenderer({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div>
      {blocks.map((block, i) => {
        switch (block.type) {
          case "heading": {
            const Tag = `h${block.level}` as "h2" | "h3" | "h4";
            return (
              <Tag key={i} id={block.id}>
                {block.text}
              </Tag>
            );
          }

          case "paragraph":
            return (
              <p key={i}>
                <RichRun text={block.text} />
              </p>
            );

          case "detail":
            return (
              <p key={i}>
                <span className={styles.detailLead}>{block.lead}</span>{" "}
                <RichRun text={block.text} />
              </p>
            );

          case "tick-list":
            return (
              <ul key={i}>
                {block.items.map((item, j) => (
                  <li key={j}>
                    <RichRun text={item} />
                  </li>
                ))}
              </ul>
            );

          case "numbered-list":
            return (
              <ol key={i}>
                {block.items.map((item, j) => (
                  <li key={j}>
                    <RichRun text={item} />
                  </li>
                ))}
              </ol>
            );

          case "table":
            return (
              <table key={i}>
                <thead>
                  <tr>
                    {block.headers.map((h, j) => (
                      <th key={j}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {block.rows.map((row, j) => (
                    <tr key={j}>
                      {row.map((cell, k) => (
                        <td key={k}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            );

          case "divider":
            return <hr key={i} />;

          default:
            return null;
        }
      })}
    </div>
  );
}
