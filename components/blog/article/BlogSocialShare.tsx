"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./BlogSocialShare.module.css";

/**
 * Share intents for the CURRENT article — not the company's own social
 * profiles (those live in the site Footer). Facebook/LinkedIn/X crawl the
 * shared URL's Open Graph tags server-side to build their preview card, so
 * the title/image/link shown there come from generateMetadata in
 * app/blog/[slug]/page.tsx, not from anything passed here.
 *
 * Instagram has no web share-intent endpoint at all (it only accepts shares
 * from its own native app), so there's no working "share to Instagram" link
 * to build — clicking it copies the article link instead, the closest real
 * equivalent.
 */
export default function BlogSocialShare({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);

  const shareUrl = () =>
    typeof window !== "undefined" ? window.location.origin + window.location.pathname : "";

  const openShare = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer,width=600,height=600");
  };

  const items = [
    {
      key: "instagram",
      alt: copied ? "Link copied" : "Copy link",
      src: "/footer/icons/instagram-icon.svg",
      onClick: async () => {
        try {
          await navigator.clipboard.writeText(shareUrl());
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        } catch {
          // Clipboard API can be blocked (permissions, insecure context) —
          // there's no web share-intent fallback for Instagram either way.
        }
      },
    },
    {
      key: "linkedin",
      alt: "Share on LinkedIn",
      src: "/footer/icons/linkedin-icon.svg",
      onClick: () =>
        openShare(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl())}`),
    },
    {
      key: "facebook",
      alt: "Share on Facebook",
      src: "/footer/icons/facebook-app-round-icon.svg",
      onClick: () =>
        openShare(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl())}`),
    },
    {
      key: "x",
      alt: "Share on X (Twitter)",
      src: "/footer/icons/x-social-media-logo-icon.svg",
      onClick: () =>
        openShare(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl())}`
        ),
    },
  ];

  return (
    <ul className={styles.social}>
      {items.map((item) => (
        <li key={item.key}>
          <button type="button" onClick={item.onClick} aria-label={item.alt} title={item.alt} className={styles.shareBtn}>
            <Image src={item.src} alt="" width={18} height={18} loading="lazy" unoptimized />
          </button>
        </li>
      ))}
    </ul>
  );
}
