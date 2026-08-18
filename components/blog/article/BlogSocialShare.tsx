import Image from "next/image";
import styles from "./BlogSocialShare.module.css";

const SOCIAL_ICONS = [
  { src: "/footer/icons/instagram-icon.svg", alt: "Instagram", href: "https://www.instagram.com/nextersepakistan/" },
  { src: "/footer/icons/linkedin-icon.svg", alt: "LinkedIn", href: "https://www.linkedin.com/company/nexterse/" },
  { src: "/footer/icons/facebook-app-round-icon.svg", alt: "Facebook", href: "https://www.facebook.com/nexterse/" },
  { src: "/footer/icons/x-social-media-logo-icon.svg", alt: "X (Twitter)", href: "https://x.com/nexterseinfo" },
];

export default function BlogSocialShare() {
  return (
    <ul className={styles.social}>
      {SOCIAL_ICONS.map((icon) => (
        <li key={icon.href}>
          <a target="_blank" href={icon.href} rel="noreferrer noopener" aria-label={icon.alt}>
            <Image src={icon.src} alt={icon.alt} width={18} height={18} loading="lazy" unoptimized />
          </a>
        </li>
      ))}
    </ul>
  );
}