"use client";
import { useState } from "react";
import { FAQ_PANELS } from "./FAQData";
import styles from "./FAQBlock.module.css";

export default function FAQBlock() {
  const [activeTab, setActiveTab] = useState(1);

  const blockId = "nexterse-faq";

  return (
    <section className={styles.block}>
      <div className={styles.container}>
        <div className={styles.inner}>
          {/* ── Desktop layout ── */}
          <div className={styles.desktop}>
            <div className={styles.tabs} role="tablist">
              {FAQ_PANELS.map((panel) => (
                <button
                  key={panel.id}
                  className={`${styles.tab} ${activeTab === panel.id ? styles.tabActive : ""}`}
                  role="tab"
                  aria-selected={activeTab === panel.id}
                  aria-controls={`${blockId}-faq-panel-${panel.id}`}
                  onClick={() => setActiveTab(panel.id)}
                >
                  {panel.tab}
                </button>
              ))}
            </div>

            <div className={styles.panels}>
              {FAQ_PANELS.map((panel) => (
                <div
                  key={panel.id}
                  id={`${blockId}-faq-panel-${panel.id}`}
                  className={`${styles.panel} ${activeTab === panel.id ? styles.panelActive : ""}`}
                  role="tabpanel"
                >
                  <div className={styles.faqList}>
                    <div className={styles.listTitle}>{panel.title}</div>
                    {panel.questions.map((item, i) => (
                      <details
                        key={i}
                        className={styles.item}
                        name={`${blockId}-desktop-${panel.id}-questions`}
                        open={i === 0}
                      >
                        <summary className={styles.question}>
                          <span className={styles.bullet} />
                          <span className={styles.questionText}>{item.q}</span>
                        </summary>
                        <div className={styles.answer}>
                          <div
                            className={styles.answerText}
                            dangerouslySetInnerHTML={{ __html: item.a }}
                          />
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Mobile layout ── */}
          <div className={styles.mobile}>
            {FAQ_PANELS.map((panel, pi) => (
              <details
                key={panel.id}
                className={styles.category}
                name={`${blockId}-categories`}
                open={pi === 0}
              >
                <summary className={styles.categoryTitle}>
                  {panel.tab}
                </summary>
                <div className={styles.categoryContent}>
                  <div className={styles.faqList}>
                    {panel.questions.map((item, i) => (
                      <details
                        key={i}
                        className={styles.item}
                        name={`${blockId}-mobile-${panel.id}-questions`}
                        open={i === 0 && pi === 0}
                      >
                        <summary className={styles.question}>
                          <span className={styles.bullet} />
                          <span className={styles.questionText}>{item.q}</span>
                        </summary>
                        <div className={styles.answer}>
                          <div
                            className={styles.answerText}
                            dangerouslySetInnerHTML={{ __html: item.a }}
                          />
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
