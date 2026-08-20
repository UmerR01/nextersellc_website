import Image from "next/image";
import { BLOG_POSTS, type BlogPost } from "./blogData";
import styles from "./AwesomeStories.module.css";

const ClockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
    <path d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z" stroke="#5E6D8E" strokeWidth="1.5" strokeMiterlimit="10" />
    <path d="M8 4.98108V8.48108L10.3333 10.6477" stroke="#5E6D8E" strokeWidth="1.5" strokeLinecap="square" />
  </svg>
);

function PostMeta({ post }: { post: BlogPost }) {
  return (
    <div className={styles.meta}>
      <span className={styles.readTime}>
        <ClockIcon />
        {post.readTime}
      </span>
      <span className={styles.metaSep}>|</span>
      <span>{post.date}</span>
    </div>
  );
}

/**
 * Picks 4 posts (1 featured + 3 side) from the centralized BLOG_POSTS list,
 * biased toward the given category so each page shows topically relevant
 * stories, then fills any remaining slots with the most recent posts
 * overall so the section is never short of content.
 */
function pickPosts(category: string | undefined, excludeId: string | undefined): BlogPost[] {
  const pool = BLOG_POSTS.filter((p) => p.id !== excludeId);
  const matching = category ? pool.filter((p) => p.categories.some((c) => c.slug === category)) : [];
  const rest = pool.filter((p) => !matching.includes(p));
  return [...matching, ...rest].slice(0, 4);
}

interface Props {
  /** Bias post selection toward this category slug (e.g. "ai", "enterprise",
   *  "development", "guides") — see CATEGORIES in blogData.ts. Falls back to
   *  the most recent posts overall once matching posts run out. */
  category?: string;
  /** Exclude a specific post (e.g. the article this section appears on). */
  excludeId?: string;
}

export default function AwesomeStories({ category, excludeId }: Props) {
  const [featured, ...sidePosts] = pickPosts(category, excludeId);
  if (!featured) return null;

  return (
    <section className={styles.section} id="insights-blog">
      <div className="container">
        <h2 className={styles.title}>
          We have awesome <span className={styles.titleAccent}>stories</span> to tell you
        </h2>

        <div className={styles.grid}>
          <a href={featured.href} className={styles.feature}>
            <div className={styles.featureImage}>
              <div className={styles.featureImageWrapper}>
                <Image
                  src={featured.image}
                  alt={featured.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className={styles.featureTitle}>{featured.title}</div>
            <PostMeta post={featured} />
          </a>

          <div className={styles.sidebar}>
            {sidePosts.map((post) => (
              <a key={post.id} href={post.href} className={styles.sidePost}>
                <div className={styles.sideTitle}>{post.title}</div>
                <PostMeta post={post} />
              </a>
            ))}

            <div className={styles.allLinkWrap}>
              <a href="/blog" className={styles.allLink}>
                All articles<span className={styles.allLinkArrow} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
