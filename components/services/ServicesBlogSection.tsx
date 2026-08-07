import styles from "./ServicesBlogSection.module.css";

export type BlogPost = { href: string; title: string; readTime: string; date: string };
export type FeaturedPost = BlogPost & { image: string; imageAlt: string };

const DEFAULT_FEATURED: FeaturedPost = {
  href: "/blog/software-development-process",
  title: "Complete Guide: Software Development Process in 14 Steps",
  image: "/services-page/11_Software-Development-1024x578.jpg",
  imageAlt: "Complete Guide: Software Development Process in 14 Steps",
  readTime: "53 mins",
  date: "November 19, 2025",
};

const DEFAULT_SIDE_POSTS: BlogPost[] = [
  {
    href: "/blog/15-best-offshore-software-development-companies",
    title: "15 Top Offshore Software Development Companies in 2026",
    readTime: "36 mins",
    date: "March 3, 2026",
  },
  {
    href: "/blog/how-to-calculate-the-roi-of-custom-software-development",
    title: "How to Calculate the ROI of Custom Software Development: Formulas, TCO, and Benchmarks (2026)",
    readTime: "27 mins",
    date: "February 2, 2026",
  },
];

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

export default function ServicesBlogSection({
  featured,
  sidePosts,
}: {
  featured?: FeaturedPost;
  sidePosts?: BlogPost[];
} = {}) {
  const featuredPost = featured ?? DEFAULT_FEATURED;
  const sidePostList = sidePosts ?? DEFAULT_SIDE_POSTS;

  return (
    <section id="svc-blog" className={styles.section}>
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
                    src={featuredPost.image}
                    alt={featuredPost.imageAlt}
                    className={styles.featuredImg}
                    loading="lazy"
                  />
                </div>
              </div>
              <div className={styles.featuredPostTitle}>
                {featuredPost.title}
              </div>
              <div className={styles.postMeta}>
                <span className={styles.readTime}>
                  <ClockIcon />
                  {featuredPost.readTime}
                </span>
                <span className={styles.metaSep}>|</span>
                <span className={styles.postDate}>{featuredPost.date}</span>
              </div>
            </div>
          </div>

          <div className={styles.sideCol}>
            {sidePostList.map((post) => (
              <div key={post.href} className={styles.sidePost}>
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
