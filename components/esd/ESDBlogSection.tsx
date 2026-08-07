import styles from "./ESDBlogSection.module.css";

const ClockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
    <path
      d="M8 15C11.866 15 15 11.866 15 8C15 4.134 11.866 1 8 1C4.134 1 1 4.134 1 8C1 11.866 4.134 15 8 15Z"
      stroke="#5E6D8E" strokeWidth="1.5" strokeMiterlimit="10"
    />
    <path d="M8 4.981V8.481L10.333 10.648" stroke="#5E6D8E" strokeWidth="1.5" strokeLinecap="square" />
  </svg>
);

const SIDE_POSTS = [
  {
    title: "What Affects AI Development Cost in 2026",
    readTime: "40 mins",
    date: "March 11, 2026",
  },
  {
    title: "Custom CRM development for enterprises: when to build, what it takes, and why it matters more in the AI-agent era",
    readTime: "27 mins",
    date: "January 15, 2026",
  },
  {
    title: "Complete Guide: Software Development Process in 14 Steps",
    readTime: "53 mins",
    date: "November 19, 2025",
  },
];

export default function ESDBlogSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          We have awesome <span className={styles.accent}>stories</span> to tell you
        </h2>
        <div className={styles.postsGrid}>
          <div className={styles.featuredCol}>
            <div className={styles.featuredPost}>
              <div className={styles.featuredImageWrapper}>
                <div className={styles.featuredImgInner}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/esd/07_16-Types-of-IT-Services_featured-picture-2-1024x853.png"
                    alt="16 Types of IT Services to Drive Business Efficiency"
                    className={styles.featuredImg}
                    loading="lazy"
                  />
                </div>
              </div>
              <div className={styles.featuredPostTitle}>
                16 Types of IT Services to Drive Business Efficiency
              </div>
              <div className={styles.postMeta}>
                <span className={styles.readTime}>
                  <ClockIcon />
                  29 mins
                </span>
                <span className={styles.metaSep}>|</span>
                <span className={styles.postDate}>November 5, 2024</span>
              </div>
            </div>
          </div>

          <div className={styles.sideCol}>
            {SIDE_POSTS.map((post) => (
              <div key={post.title} className={styles.sidePost}>
                <div className={styles.sidePostTitle}>{post.title}</div>
                <div className={styles.postMeta}>
                  <span className={styles.readTime}>
                    <ClockIcon />
                    {post.readTime}
                  </span>
                  <span className={styles.metaSep}>|</span>
                  <span className={styles.postDate}>{post.date}</span>
                </div>
              </div>
            ))}
            <div className={styles.allArticlesWrapper}>
              <a href="/blog" className={styles.allArticlesLink}>
                All articles
                <span className={styles.linkArrow} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
