"use client";
import Link from "next/link";
import styles from "./FAQHero.module.css";

export default function FAQHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bg}>
        <div className={styles.desktopImage}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1920 1080"
            preserveAspectRatio="xMidYMid slice"
            className={styles.bgSvg}
          >
            <defs>
              <linearGradient id="faqHeroBg" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#02102C" />
                <stop offset="100%" stopColor="#112244" />
              </linearGradient>
              <filter id="faqBlur1">
                <feGaussianBlur stdDeviation="80" />
              </filter>
              <filter id="faqBlur2">
                <feGaussianBlur stdDeviation="120" />
              </filter>
            </defs>
            <rect width="1920" height="1080" fill="url(#faqHeroBg)" />
            <circle
              cx="320"
              cy="400"
              r="380"
              fill="#127AFF"
              opacity="0.18"
              filter="url(#faqBlur1)"
            />
            <circle
              cx="1600"
              cy="700"
              r="420"
              fill="#FF415C"
              opacity="0.12"
              filter="url(#faqBlur2)"
            />
            <circle
              cx="960"
              cy="200"
              r="300"
              fill="#3CC4E5"
              opacity="0.08"
              filter="url(#faqBlur1)"
            />
          </svg>
        </div>
        <div className={styles.mobileImage}>
          <img src="/faq-hero-mobile.jpg" alt="" />
        </div>
      </div>

      <div className={styles.heroWrapper}>
        <div className={styles.container}>
          <div className={styles.inner}>
            <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <Link href="/about">About us</Link>
              <span>Frequently asked questions</span>
            </nav>

            <h1 className={styles.title}>
              <span className={styles.titleBlue}>FAQ</span> about Nexterse
            </h1>

            <div className={styles.description}>
              <p>
                Welcome to our FAQ page. Here you will find answers to the most
                commonly asked questions about our company, services, processes,
                and terms of cooperation. We have organized topics into
                categories to help you find what you need quickly.
              </p>
              <p>
                Drop us a line, if you don&apos;t find answers to your
                questions.
              </p>
            </div>

            <div className={styles.buttons}>
              <Link href="/contact" className={styles.btn}>
                <span>Get in touch</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
