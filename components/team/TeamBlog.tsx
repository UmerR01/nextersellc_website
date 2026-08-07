import Image from "next/image";
import Link from "next/link";
import styles from "./TeamBlog.module.css";

const FEATURED_POST = {
  img: "/team/01_careers-photo-6.jpg",
  imgAlt: "Nexterse LLC team workspace",
  title: "How to modernize legacy systems with custom AI",
  readTime: "26 mins",
  date: "June 24, 2026",
};

const SMALL_POSTS = [
  {
    title:
      "How to Deliver Software on Time with Agile and Release Planning in the AI Era",
    readTime: "18 mins",
    date: "June 22, 2026",
  },
  {
    title:
      "From Pilot to Production: Why Enterprise AI Stalls. The Framework to Scale It (2026)",
    readTime: "31 mins",
    date: "June 16, 2026",
  },
  {
    title:
      "AI Token Cost Calculation: A Pricing-Independent Framework for Forecasting LLM Spend (2026)",
    readTime: "33 mins",
    date: "June 10, 2026",
  },
];

function ClockIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="8" cy="8" r="6.5" stroke="#5e6d8e" strokeWidth="1.2" />
      <path
        d="M8 4.5V8L10.5 10"
        stroke="#5e6d8e"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function TeamBlog() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          We have awesome <span className={styles.accent}>stories</span> to tell you
        </h2>

        <div className={styles.grid}>
          {/* Featured post */}
          <div className={styles.featuredPost}>
            <div className={styles.featuredImgWrap}>
              <Image
                src={FEATURED_POST.img}
                alt={FEATURED_POST.imgAlt}
                width={800}
                height={300}
                className={styles.featuredImg}
              />
            </div>
            <p className={styles.postTitle}>{FEATURED_POST.title}</p>
            <div className={styles.postMeta}>
              <ClockIcon />
              <span>{FEATURED_POST.readTime}</span>
              <span aria-hidden="true">&middot;</span>
              <span>{FEATURED_POST.date}</span>
            </div>
          </div>

          {/* Small posts column */}
          <div className={styles.smallPostsCol}>
            <div className={styles.smallPosts}>
              {SMALL_POSTS.map((post, idx) => (
                <div key={idx} className={styles.smallPost}>
                  <p className={styles.postTitle}>{post.title}</p>
                  <div className={styles.postMeta}>
                    <ClockIcon />
                    <span>{post.readTime}</span>
                    <span aria-hidden="true">&middot;</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.moreLink}>
              <Link href="/blog" className={styles.moreLinkAnchor}>
                Read our latest insights
                <span className={styles.linkArrow} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
