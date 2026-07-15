"use client";
import Link from "next/link";
import styles from "./LogisticsHero.module.css";

export default function LogisticsHero() {
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
              <linearGradient id="logHeroBg" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#02102C" />
                <stop offset="100%" stopColor="#112244" />
              </linearGradient>
              <filter id="logBlur1">
                <feGaussianBlur stdDeviation="80" />
              </filter>
              <filter id="logBlur2">
                <feGaussianBlur stdDeviation="120" />
              </filter>
            </defs>
            <rect width="1920" height="1080" fill="url(#logHeroBg)" />
            <circle cx="320" cy="400" r="380" fill="#3CC4E5" opacity="0.18" filter="url(#logBlur1)" />
            <circle cx="1600" cy="700" r="420" fill="#3CC4E5" opacity="0.12" filter="url(#logBlur2)" />
            <circle cx="960" cy="200" r="300" fill="#3CC4E5" opacity="0.08" filter="url(#logBlur1)" />
          </svg>
        </div>
      </div>

      <div className={styles.heroWrapper}>
        <div className={styles.container}>
          <div className={styles.inner}>
            <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <Link href="/services">Services</Link>
              <span>Logistics software development</span>
            </nav>

            <h1 className={styles.title}>
              AI-driven <span className={styles.titleBlue}>logistics &amp; supply chain</span> software development
            </h1>

            <div className={styles.description}>
              <p>
                Stop building tracking dashboards that humans have to monitor. We engineer AI-driven logistics platforms that connect your physical operations, telematics, ERP systems, and supply chain workflows into autonomous control systems.
              </p>
            </div>

            <div className={styles.buttons}>
              <a href="#get-modal-popup" className={`btn btn-accent ${styles.btn}`}>
                <span>Get in touch</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
