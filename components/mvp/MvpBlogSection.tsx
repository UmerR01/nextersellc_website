import styles from "./MvpBlogSection.module.css";

const ClockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
    <path
      d="M8 15C11.866 15 15 11.866 15 8C15 4.134 11.866 1 8 1C4.134 1 1 4.134 1 8C1 11.866 4.134 15 8 15Z"
      stroke="#5E6D8E"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
    <path
      d="M8 4.981V8.481L10.333 10.648"
      stroke="#5E6D8E"
      strokeWidth="1.5"
      strokeLinecap="square"
    />
  </svg>
);

const ArrowIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
    <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" d="M4 10h12M11 5l5 5-5 5" />
  </svg>
);

const FEATURED = {
  href: "#",
  image: "/mvp/06_Agentic-RAG-The-Complete-Enterprise-Implementation-Guide-1024x578.jpg",
  title: "Agentic RAG: The Complete Enterprise Implementation Guide for 2026",
  readTime: "35 mins",
  date: "July 3, 2026",
};

const SIDE_POSTS = [
  {
    href: "#",
    title: "The AI Cost Reduction Playbook – 9 Mechanisms, 7 Hidden Drivers, and Real-World Case Studies (2026 Edition)",
    readTime: "32 mins",
    date: "July 1, 2026",
  },
  {
    href: "#",
    title: "How to modernize legacy systems with custom AI",
    readTime: "26 mins",
    date: "June 24, 2026",
  },
  {
    href: "#",
    title: "How to Deliver Software on Time with Agile and Release Planning in the AI Era",
    readTime: "18 mins",
    date: "June 22, 2026",
  },
];

export default function MvpBlogSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          We have awesome <span className={styles.accent}>stories</span> to tell you
        </h2>
        <div className={styles.postsGrid}>
          <div className={styles.featuredCol}>
            <a href={FEATURED.href} className={styles.featuredPost}>
              <div className={styles.featuredImageWrapper}>
                <div className={styles.featuredImgInner}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={FEATURED.image}
                    alt={FEATURED.title}
                    className={styles.featuredImg}
                    loading="lazy"
                  />
                </div>
              </div>
              <div className={styles.featuredPostTitle}>{FEATURED.title}</div>
              <div className={styles.postMeta}>
                <span className={styles.readTime}>
                  <ClockIcon />
                  {FEATURED.readTime}
                </span>
                <span className={styles.metaSep}>|</span>
                <span className={styles.postDate}>{FEATURED.date}</span>
              </div>
            </a>
          </div>

          <div className={styles.sideCol}>
            {SIDE_POSTS.map((post) => (
              <a key={post.href + post.title} href={post.href} className={styles.sidePost}>
                <div className={styles.sidePostTitle}>{post.title}</div>
                <div className={styles.postMeta}>
                  <span className={styles.readTime}>
                    <ClockIcon />
                    {post.readTime}
                  </span>
                  <span className={styles.metaSep}>|</span>
                  <span className={styles.postDate}>{post.date}</span>
                </div>
              </a>
            ))}
            <div className={styles.allArticlesWrapper}>
              <a href="/blog" className={styles.allArticlesLink}>
                All articles
                <span className={styles.linkArrow} aria-hidden>
                  <ArrowIcon />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
