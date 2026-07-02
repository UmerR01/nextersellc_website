import Image from "next/image";
import styles from "./AdlcBlog.module.css";

const ClockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
    <path
      d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z"
      stroke="#5E6D8E"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
    <path
      d="M8 4.98108V8.48108L10.3333 10.6477"
      stroke="#5E6D8E"
      strokeWidth="1.5"
      strokeLinecap="square"
    />
  </svg>
);

const sidePosts = [
  {
    href: "https://sumatosoft.com/blog/modernize-legacy-systems-with-custom-ai",
    title: "How to modernize legacy systems with custom AI",
    readTime: "26 mins",
    date: "June 24, 2026",
  },
  {
    href: "https://sumatosoft.com/blog/what-is-release-planning-in-scrum-the-way-to-deliver-project-on-time",
    title: "How to Deliver Software on Time with Agile and Release Planning in the AI Era",
    readTime: "18 mins",
    date: "June 22, 2026",
  },
  {
    href: "https://sumatosoft.com/blog/from-pilot-to-production",
    title: "From Pilot to Production: Why Enterprise AI Stalls. The Framework to Scale It (2026)",
    readTime: "31 mins",
    date: "June 16, 2026",
  },
];

export default function AdlcBlog() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.sectionTitle}>
          We have awesome <span style={{ color: "#3CC4E5" }}>stories</span> to tell you
        </h2>

        <div className={styles.postsGrid}>
          <div className={styles.featuredCol}>
            <a
              rel="dofollow"
              className={styles.featuredPost}
              href="https://sumatosoft.com/blog/ai-cost-reduction-playbook"
            >
              <div className={styles.featuredImageWrapper}>
                <div className={styles.featuredImgInner}>
                  <Image
                    src="/adlc/06_The-AI-Cost-Spiral-7-Hidden-Drivers-1024x578.jpg"
                    alt="The AI Cost Spiral - 7 Hidden Drivers"
                    width={1024}
                    height={578}
                    className={styles.featuredImg}
                  />
                </div>
              </div>
              <div className={styles.postTitle}>
                The AI Cost Reduction Playbook – 9 Mechanisms, 7 Hidden Drivers, and Real-World
                Case Studies (2026 Edition)
              </div>
              <div className={styles.postMeta}>
                <span className={styles.readTime}>
                  <ClockIcon />
                  32 mins
                </span>
                <span className={styles.metaSep}>|</span>
                <span className={styles.postDate}>July 1, 2026</span>
              </div>
            </a>
          </div>

          <div className={styles.sideCol}>
            {sidePosts.map((post) => (
              <a
                key={post.href}
                rel="dofollow"
                className={styles.sidePost}
                href={post.href}
              >
                <div className={styles.postTitle}>{post.title}</div>
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

            <div className={styles.allArticlesLink}>
              <a
                rel="dofollow"
                href="https://sumatosoft.com/blog"
                className={styles.linkPrimary}
              >
                All articles
                <span className={styles.linkArrow} aria-hidden>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
                    <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" d="M4 10h12M11 5l5 5-5 5" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
