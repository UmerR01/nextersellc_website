import type { Metadata } from "next";
import Header from "@/components/Header";
import BlogPage from "@/components/blog/BlogPage";
import LetsStart from "@/components/home/LetsStart";

export const metadata: Metadata = {
  title: "Blog – Valuable Insights | Nexterse LLC",
  description:
    "Read our latest articles on AI, enterprise software development, research, and engineering guides from the Nexterse LLC team.",
};

export default function BlogRoute() {
  return (
    <>
      <Header forceSolid />
      <main>
        <BlogPage />
        <LetsStart />
      </main>
    </>
  );
}
