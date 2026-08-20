import type { MetadataRoute } from "next";
import { ARTICLES } from "@/components/blog/article/articles";

const BASE_URL = "https://nexterse.com";

// Scoped to the blog (per the request that prompted this file) plus the
// handful of top-level pages a blog post links back to. Not a full
// site-wide sitemap yet — expanding to every route is a separate task.
const STATIC_ROUTES = [
  "",
  "/blog",
  "/about-us",
  "/services",
  "/pricing",
  "/contact-us",
  "/library",
  "/whitepapers",
  "/careers",
  "/faq",
  "/testimonials",
  "/adlc",
  "/sdlc",
  "/engagement-models-process",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((path) => ({
    url: `${BASE_URL}${path}`,
    changeFrequency: path === "" || path === "/blog" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/blog" ? 0.9 : 0.6,
  }));

  const blogEntries: MetadataRoute.Sitemap = ARTICLES.map((article) => ({
    url: `${BASE_URL}/blog/${article.slug}`,
    lastModified: article.dateISO,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticEntries, ...blogEntries];
}
