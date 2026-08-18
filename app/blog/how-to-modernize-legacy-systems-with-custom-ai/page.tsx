import type { Metadata } from "next";
import Header from "@/components/Header";
import LetsStart from "@/components/home/LetsStart";
import BlogArticleHero from "@/components/blog/article/BlogArticleHero";
import BlogArticleLayout from "@/components/blog/article/BlogArticleLayout";
import RelatedPosts from "@/components/blog/article/RelatedPosts";
import ArticleBody from "./ArticleBody";
import bodyStyles from "@/components/blog/article/BlogArticleBody.module.css";

export const metadata: Metadata = {
  title: "How to modernize legacy systems with custom AI | Nexterse LLC",
  description:
    "A practical guide to embedding AI into legacy systems instead of rewriting them: why it matters, how to evaluate a partner, and what to watch out for.",
};

export default function BlogArticlePage() {
  return (
    <>
      <Header forceSolid />
      <main>
        <BlogArticleLayout>
          <BlogArticleHero />
          <div className={bodyStyles.body}>
            <ArticleBody />
          </div>
        </BlogArticleLayout>
        <RelatedPosts currentId="252495" />
        <LetsStart />
      </main>
    </>
  );
}
