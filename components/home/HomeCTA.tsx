import Link from "next/link";
import styles from "./HomeCTA.module.css";

function IconArrow() {
  return (
    <svg className={styles.arrowIcon} width={25} height={24} viewBox="0 0 25 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <g clipPath="url(#cta-arrow-clip)">
        <path opacity={0.6} d="M4.54 18.75L9.22 12L4.54 5.25H0.4L5.08 12L0.4 18.75H4.54Z" fill="white" />
        <path opacity={0.8} d="M12.23 18.75L16.91 12L12.23 5.25H8.09L12.77 12L8.09 18.75H12.23Z" fill="white" />
        <path d="M19.92 18.75L24.6 12L19.92 5.25H15.78L20.46 12L15.78 18.75H19.92Z" fill="white" />
      </g>
      <defs>
        <clipPath id="cta-arrow-clip">
          <rect width={24} height={24} transform="translate(0.5)" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default function HomeCTA() {
  return (
    <section className={styles.section} data-section="home-cta">
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.left}>
            <p className={styles.eyebrow}>We Have Got You Covered!</p>
            <h2 className={styles.title}>
              Take your Business Vision to New Heights with a Trusted IT Company!
            </h2>
          </div>
          <div className={styles.right}>
            <Link href="/contact" className={styles.btn}>
              Hire Dedicated Developers <IconArrow />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
