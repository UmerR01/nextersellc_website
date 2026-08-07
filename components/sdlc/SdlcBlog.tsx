import Image from "next/image";
import styles from "./SdlcBlog.module.css";

const ClockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
    <path d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z" stroke="#5E6D8E" strokeWidth="1.5" strokeMiterlimit="10" />
    <path d="M8 4.98108V8.48108L10.3333 10.6477" stroke="#5E6D8E" strokeWidth="1.5" strokeLinecap="square" />
  </svg>
);

const sidePosts = [
  {
    title: "How to modernize legacy systems with custom AI",
    readTime: "26 mins",
    date: "June 24, 2026",
  },
  {
    title: "How to Deliver Software on Time with Agile and Release Planning in the AI Era",
    readTime: "18 mins",
    date: "June 22, 2026",
  },
  {
    title: "From Pilot to Production: Why Enterprise AI Stalls. The Framework to Scale It (2026)",
    readTime: "31 mins",
    date: "June 16, 2026",
  },
];

export default function SdlcBlog() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.sectionTitle}>
          We have awesome <span className={styles.accent}>stories</span> to tell you
        </h2>
        <div className={styles.postsGrid}>
          <div className={styles.featuredCol}>
            <div className={styles.featuredPost}>
              <div className={styles.featuredImage}>
                <div className={styles.featuredImageWrapper}>
                  <Image
                    src="/sdlc/06_The-AI-Cost-Spiral-7-Hidden-Drivers-1024x578.jpg"
                    alt="The AI Cost Spiral - 7 Hidden Drivers"
                    fill
                    className={styles.featuredImg}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div className={styles.featuredTitle}>
                The AI Cost Reduction Playbook – 9 Mechanisms, 7 Hidden Drivers, and Real-World Case Studies (2026 Edition)
              </div>
              <div className={styles.postMeta}>
                <span className={styles.readTime}>
                  <ClockIcon />
                  32 mins
                </span>
                <span className={styles.metaSep}>|</span>
                <span className={styles.postDate}>July 1, 2026</span>
              </div>
            </div>
          </div>
          <div className={styles.sideCol}>
            {sidePosts.map((post, i) => (
              <div key={i} className={styles.sidePost}>
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
            <div className={styles.allLink}>
              <a href="/blog" className={styles.link}>
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
