import styles from "./ESDDataReadiness.module.css";

export default function ESDDataReadiness() {
  return (
    <section id="ai-starts-with-data-readiness" className={styles.section}>
      <div className={styles.container}>
        {/* Row 1: full-width title + description */}
        <h2 className={styles.title}>
          AI starts with <span className={styles.accent}>data readiness</span>
        </h2>
        <p className={styles.desc}>
          You can&apos;t point a large language model (LLM) at scattered SQL tables, shared drives, scanned PDFs,
          and inconsistent records and expect dependable output. Before we add copilots or agents, we run a data
          readiness audit. We inventory the sources, remove duplicates, define metadata, map permissions, pull
          content out of documents, and prepare the retrieval layer, so the AI has a controlled foundation to work
          from.
        </p>

        {/* Row 2: checklist left, image right */}
        <div className={styles.row}>
          <div className={styles.left}>
            <p className={styles.listTitle}>What the audit covers</p>
            <ul className={styles.list}>
              <li>Data source inventory across systems, folders, databases, and documents</li>
              <li>Permission mapping so retrieval respects the same access model as your staff</li>
              <li>Deduplication, normalization, chunking, and metadata design</li>
              <li>Pilot dataset preparation with baseline retrieval and answer evaluation</li>
            </ul>
          </div>
          <div className={styles.right}>
            <div className={styles.imgWrap}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/esd/03_Development-team-e1774868240359-963x1024.jpg"
                alt="Development team"
                className={styles.img}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
