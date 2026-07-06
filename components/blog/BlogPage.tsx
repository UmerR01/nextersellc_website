"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { BLOG_POSTS, CATEGORIES, BlogPost } from "./blogData";
import styles from "./BlogPage.module.css";

const POSTS_PER_PAGE = 12;

const ClockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
    <path d="M8 15C11.866 15 15 11.866 15 8C15 4.134 11.866 1 8 1C4.134 1 1 4.134 1 8C1 11.866 4.134 15 8 15Z" stroke="#5E6D8E" strokeWidth="1.5" strokeMiterlimit="10" />
    <path d="M8 4.981V8.481L10.333 10.648" stroke="#5E6D8E" strokeWidth="1.5" strokeLinecap="square" />
  </svg>
);

const SearchIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M10.875 18.75C15.224 18.75 18.75 15.224 18.75 10.875C18.75 6.526 15.224 3 10.875 3C6.526 3 3 6.526 3 10.875C3 15.224 6.526 18.75 10.875 18.75Z" stroke="#3CC4E5" strokeWidth="1.5" strokeLinecap="square" />
    <path d="M16.445 16.443L21.001 21" stroke="#3CC4E5" strokeWidth="1.5" strokeLinecap="square" />
  </svg>
);

function PostCard({ post }: { post: BlogPost }) {
  return (
    <article className={styles.postCard} id={`post-${post.id}`}>
      <a href={post.href} className={styles.postCardImageLink}>
        <div className={styles.imageWrapper}>
          <div className={styles.imageGradientWrapper}>
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              className={styles.postImage}
              sizes="(max-width: 768px) 100vw, (max-width: 992px) 50vw, 33vw"
            />
          </div>
        </div>
      </a>
      <div className={styles.postContent}>
        <div>
          <div className={styles.postCategories}>
            {post.categories.map((cat) => (
              <a key={cat.slug} className={styles.postCategory} href={`/blog?category=${cat.slug}`}>
                {cat.label}
              </a>
            ))}
          </div>
          <h2 className={styles.postTitle}>{post.title}</h2>
        </div>
        <div className={styles.postMeta}>
          <div className={styles.postMetaInner}>
            <div className={styles.authorPhoto}>
              <a href={post.author.href}>
                <Image
                  src={post.author.photo}
                  alt={post.author.name}
                  width={48}
                  height={48}
                  className={styles.authorAvatar}
                />
              </a>
            </div>
            <div className={styles.authorInfo}>
              <span>
                <a href={post.author.href}>{post.author.name}</a>
              </span>
              <span className={styles.postDateWrapper}>
                <span className={styles.postReadtime}>
                  <ClockIcon />
                  {post.readTime}
                </span>
                <span>| {post.date}</span>
              </span>
            </div>
          </div>
        </div>
        <a href={post.href} className={styles.postAbsoluteLink} aria-label={post.title} />
      </div>
    </article>
  );
}

const TOTAL_PAGES = 12;

function Pagination({ page, onPage }: { page: number; onPage: (p: number) => void }) {
  const showDots = TOTAL_PAGES > 3;
  return (
    <nav className={styles.paginationBlock} aria-label="Blog pages">
      <ul className={styles.pagination}>
        <li className={`${styles.paginationBtn} ${page === 1 ? styles.paginationDisabled : ""}`}>
          {page > 1 && (
            <a href="#" onClick={(e) => { e.preventDefault(); onPage(page - 1); }} aria-label="Previous page" />
          )}
        </li>
        <li className={page === 1 ? styles.paginationCurrent : ""}>
          {page === 1 ? (
            <span className={`${styles.pageNumber} ${styles.pageNumberCurrent}`}>1</span>
          ) : (
            <a href="#" onClick={(e) => { e.preventDefault(); onPage(1); }} className={styles.pageNumber}>1</a>
          )}
        </li>
        {page > 1 && page < TOTAL_PAGES && (
          <li className={styles.paginationCurrent}>
            <span className={`${styles.pageNumber} ${styles.pageNumberCurrent}`}>{page}</span>
          </li>
        )}
        {showDots && (
          <li>
            <span className={styles.dots}>…</span>
          </li>
        )}
        <li>
          {page === TOTAL_PAGES ? (
            <span className={`${styles.pageNumber} ${styles.pageNumberCurrent}`}>{TOTAL_PAGES}</span>
          ) : (
            <a href="#" onClick={(e) => { e.preventDefault(); onPage(TOTAL_PAGES); }} className={styles.pageNumber}>{TOTAL_PAGES}</a>
          )}
        </li>
        <li className={`${styles.paginationBtn} ${styles.paginationBtnNext} ${page === TOTAL_PAGES ? styles.paginationDisabled : ""}`}>
          {page < TOTAL_PAGES && (
            <a href="#" onClick={(e) => { e.preventDefault(); onPage(page + 1); }} aria-label="Next page" />
          )}
        </li>
      </ul>
    </nav>
  );
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const topRef = useRef<HTMLDivElement>(null);

  const filtered = BLOG_POSTS.filter((post) => {
    const matchesCat = !activeCategory || post.categories.some((c) => c.slug === activeCategory);
    const matchesSearch =
      !searchQuery ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.categories.some((c) => c.label.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  const pagePosts = filtered.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

  const handlePage = (p: number) => {
    setPage(p);
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleCategory = (slug: string) => {
    setActiveCategory(slug);
    setPage(1);
  };

  return (
    <section className={styles.section} role="main" ref={topRef}>
      <div className={styles.wrapper}>
        <div className={`${styles.wrapperMain} container`}>
          {/* Breadcrumb */}
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span>Blog</span>
          </nav>

          {/* Page title */}
          <h1 className={styles.pageTitle}>
            Valuable <span className={styles.accent}>insights</span>
          </h1>

          {/* Filter + Search */}
          <div className={styles.filterWrapper}>
            <div className={styles.blogCategory}>
              <ul className={styles.categoryList}>
                {CATEGORIES.map((cat) => (
                  <li key={cat.slug} className={activeCategory === cat.slug ? styles.categoryActive : ""}>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handleCategory(cat.slug);
                      }}
                      className={activeCategory === cat.slug ? styles.categoryLinkActive : ""}
                    >
                      {cat.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.blogSearch}>
              <form role="search" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  placeholder="Search for..."
                  value={searchQuery}
                  onChange={(e) => { setSearchQuery(e.target.value); setPage(1); }}
                  aria-label="Search posts"
                />
                <button type="submit" className={styles.searchButton} aria-label="Search">
                  <SearchIcon />
                </button>
              </form>
            </div>
          </div>

          {/* Posts grid */}
          <div className={styles.mainPosts}>
            <div className={styles.postsRow}>
              {pagePosts.length > 0 ? (
                pagePosts.map((post) => (
                  <div key={post.id} className={styles.postCol}>
                    <PostCard post={post} />
                  </div>
                ))
              ) : (
                <div className={styles.noResults}>
                  <p>No posts found. Try a different search or category.</p>
                </div>
              )}
            </div>
          </div>

          {/* Pagination */}
          {filtered.length > POSTS_PER_PAGE && (
            <Pagination page={page} onPage={handlePage} />
          )}
        </div>
      </div>
    </section>
  );
}
