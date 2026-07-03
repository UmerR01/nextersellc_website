"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./TeamHero.module.css";
import AboutNavHeroBackground from "@/components/AboutNavHeroBackground";

// Change this value to control how long every statistic takes to count up.
const COUNT_UP_DURATION_MS = 1800;

const STATS = [
  { value: 98, symbol: "%", label: "Satisfaction rate" },
  { value: 350, symbol: "+", label: "projects delivered" },
  { value: 25, symbol: "+", label: "countries served" },
  { value: 3, symbol: "+", label: "years' client engagement" },
  { value: 14, symbol: "+", label: "years on the market" },
];

function CountUp({ target }: { target: number }) {
  const [displayed, setDisplayed] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplayed(target);
      return;
    }

    let animationFrame = 0;
    const startedAt = performance.now();

    const update = (now: number) => {
      const progress = Math.min((now - startedAt) / COUNT_UP_DURATION_MS, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setDisplayed(Math.round(target * easedProgress));

      if (progress < 1) animationFrame = requestAnimationFrame(update);
    };

    animationFrame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animationFrame);
  }, [target]);

  return <>{displayed}</>;
}

export default function TeamHero() {
  return (
    <section className={styles.hero}>
      {/* Desktop SVG background */}
      <div className={styles.desktopBg} aria-hidden="true">
        <svg
          preserveAspectRatio="xMidYMid slice"
          className={styles.bgSvg}
          width="1920"
          height="771"
          viewBox="0 0 1920 771"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="1920" height="771" fill="url(#paint0_linear)" />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="1920"
              y1="-23.3637"
              x2="46.904"
              y2="869.408"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#02102C" />
              <stop offset="1" stopColor="#112244" />
            </linearGradient>
            <filter
              id="filter0"
              x="714"
              y="179"
              width="744"
              height="744"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feGaussianBlur stdDeviation="135" />
            </filter>
            <filter
              id="filter1"
              x="1108"
              y="0"
              width="812"
              height="812"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feGaussianBlur stdDeviation="136" />
            </filter>
            <filter
              id="filter2"
              x="0"
              y="114"
              width="812"
              height="812"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feGaussianBlur stdDeviation="136" />
            </filter>
          </defs>
          <g filter="url(#filter0)">
            <ellipse cx="1086" cy="551" rx="102" ry="102" fill="#3CC4E5" fillOpacity="0.48" />
          </g>
          <g filter="url(#filter1)">
            <circle cx="1514" cy="406" r="270" fill="#3CC4E5" fillOpacity="0.48" />
          </g>
          <g filter="url(#filter2)">
            <circle cx="406" cy="520" r="270" fill="#3CC4E5" fillOpacity="0.48" />
          </g>
        </svg>
      </div>

      {/* Mobile SVG background */}
      <div className={styles.mobileBg} aria-hidden="true">
        <svg
          preserveAspectRatio="xMidYMid slice"
          width="375"
          height="511"
          viewBox="0 0 375 511"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: "100%", height: "100%" }}
        >
          <rect width="375" height="511" fill="url(#mpaint0)" />
          <defs>
            <linearGradient
              id="mpaint0"
              x1="375"
              y1="0"
              x2="0"
              y2="511"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#02102C" />
              <stop offset="1" stopColor="#112244" />
            </linearGradient>
            <filter
              id="mfilter0"
              x="-100"
              y="100"
              width="575"
              height="575"
              filterUnits="userSpaceOnUse"
            >
              <feGaussianBlur stdDeviation="80" />
            </filter>
            <filter
              id="mfilter1"
              x="50"
              y="-50"
              width="450"
              height="450"
              filterUnits="userSpaceOnUse"
            >
              <feGaussianBlur stdDeviation="80" />
            </filter>
          </defs>
          <g filter="url(#mfilter0)">
            <circle cx="187" cy="387" r="207" fill="#3CC4E5" fillOpacity="0.48" />
          </g>
          <g filter="url(#mfilter1)">
            <circle cx="275" cy="125" r="175" fill="#3CC4E5" fillOpacity="0.48" />
          </g>
        </svg>
      </div>

      <AboutNavHeroBackground />
      <div className={styles.heroWrapper}>
        <div className={styles.container}>
          <div className={styles.inner}>
            <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
              <Link href="/" className={styles.breadcrumbLink}>Home</Link>
              <span className={styles.breadcrumbSep}>&gt;</span>
              <span className={styles.breadcrumbCurrent}>About Nexterse LLC</span>
            </nav>

            <h1 className={styles.title}>
              About <span className={styles.accent}>Nexterse LLC</span>
            </h1>

            <p className={styles.subtitle}>
              Engineering you can audit. Code you can scale. Partners you can trust.
            </p>

            <div className={styles.numbers}>
              {STATS.map((stat) => (
                <div key={stat.label} className={styles.numberItem}>
                  <div className={styles.numberData}>
                    <span className={styles.numberValue}>
                      <CountUp target={stat.value} />
                    </span>
                    <span className={styles.numberSymbol}>{stat.symbol}</span>
                  </div>
                  <div className={styles.numberLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
