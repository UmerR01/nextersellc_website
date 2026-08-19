import Image from "next/image";
import { BLOG_POSTS } from "@/components/blog/blogData";
import styles from "./RelatedPosts.module.css";

const ClockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
    <path d="M8 15C11.866 15 15 11.866 15 8C15 4.134 11.866 1 8 1C4.134 1 1 4.134 1 8C1 11.866 4.134 15 8 15Z" stroke="#5E6D8E" strokeWidth="1.5" strokeMiterlimit="10" />
    <path d="M8 4.981V8.481L10.333 10.648" stroke="#5E6D8E" strokeWidth="1.5" strokeLinecap="square" />
  </svg>
);

/**
 * Picks the 3 most relevant other posts by shared category count (most
 * shared categories first), falling back to array order — the rest of the
 * list, not a random slice — to fill any remaining slots. Ties keep the
 * original BLOG_POSTS order, which is already newest-first.
 */
function pickRelated(currentId: string): typeof BLOG_POSTS {
  const current = BLOG_POSTS.find((p) => p.id === currentId);
  const others = BLOG_POSTS.filter((p) => p.id !== currentId);
  if (!current) return others.slice(0, 3);

  const currentSlugs = new Set(current.categories.map((c) => c.slug));
  const scored = others
    .map((post, index) => ({
      post,
      index,
      shared: post.categories.filter((c) => currentSlugs.has(c.slug)).length,
    }))
    .sort((a, b) => b.shared - a.shared || a.index - b.index);

  return scored.slice(0, 3).map((s) => s.post);
}

export default function RelatedPosts({ currentId }: { currentId: string }) {
  const posts = pickRelated(currentId);

  return (
    <section className={styles.related}>
      <div className="container">
        <h2 className={styles.title}>
          You might also <span>like</span>
        </h2>
        <div className={styles.grid}>
          {posts.map((post) => (
            <article key={post.id} className={styles.card}>
              <a href={post.href} className={styles.imageLink}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    className={styles.image}
                    sizes="(max-width: 768px) 100vw, (max-width: 992px) 50vw, 33vw"
                  />
                </div>
              </a>
              <div className={styles.content}>
                <div className={styles.categories}>
                  {post.categories.map((cat) => (
                    <a key={cat.slug} href={`/blog?category=${cat.slug}`}>
                      {cat.label}
                    </a>
                  ))}
                </div>
                <h3 className={styles.cardTitle}>{post.title}</h3>
                <div className={styles.meta}>
                  <span className={styles.metaLine}>
                    <ClockIcon />
                    {post.readTime}
                    <span>| {post.date}</span>
                  </span>
                </div>
              </div>
              <a href={post.href} className={styles.absoluteLink} aria-label={post.title} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
