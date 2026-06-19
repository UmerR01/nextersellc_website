"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./Quotes.module.css";

const SLIDES = [
  {
    quote:
      '"Their work ethic is amazing, they will often work weekends to meet deadlines and improve the quality of the app."',
    portrait: "/cases/unitask.webp",
    logo: "/cases/logo-unitaskr.png",
    company: "UniTaskr",
    category: ", High Growth Startup",
  },
  {
    quote: '"Their attention to detail and dedication to the project are impressive."',
    portrait: "/cases/transferconnex.webp",
    logo: "/cases/logo-transferconnex.png",
    company: "TransferConnex",
    category: ", Financial Solutions",
  },
  {
    quote:
      '"You\'ve been an absolute dream to work with and have restored our faith in the site to be honest."',
    portrait: "/cases/countertalk.webp",
    logo: "/cases/logo-countertalk.png",
    company: "CounterTalk",
    category: ", Early-Stage Startup",
  },
  {
    quote:
      '"Exceptional, professional, outstanding customer service, always go above and beyond, quick response, very impressive."',
    portrait: "/cases/cordoba-portrait.webp",
    logo: "/cases/logo-cordoba.png",
    company: "Cordoba Rewards",
    category: ", High Growth Startup",
  },
  {
    quote:
      '"We wanted to automate our back-office functions and the team did that efficiently for us. We wanted all manual checks to be removed and automate all functions."',
    portrait: "/cases/currencies.webp",
    logo: "/cases/logo-currencies.png",
    company: "Currencies 4 You",
    category: ", Financial Solutions",
  },
];

const N = SLIDES.length;
// Three copies of the slides for seamless infinite loop
const TRACK = [...SLIDES, ...SLIDES, ...SLIDES];

export default function Quotes() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();
  const [slideW, setSlideW] = useState(0);
  const [gapPx, setGapPx] = useState(32);
  const [pos, setPos] = useState(N); // start at second copy
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const compute = () => {
      const w = el.clientWidth;
      const mobile = window.innerWidth <= 767;
      const g = mobile ? 0 : 32;
      const pp = mobile ? 1 : 2;
      setGapPx(g);
      setSlideW((w - g * (pp - 1)) / pp);
    };
    compute();
    const ro = new ResizeObserver(compute);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => () => clearTimeout(timerRef.current), []);

  const go = (dir: 1 | -1) => {
    if (animating) return;
    const next = pos + dir;
    setPos(next);
    setAnimating(true);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setAnimating(false);
      // Silent jump to keep middle copy visible
      if (next >= 2 * N) setPos(next - N);
      else if (next < N) setPos(next + N);
    }, 520);
  };

  const step = slideW + gapPx;
  const translateX = slideW > 0 ? -(pos * step) : 0;

  return (
    <section className={styles.section} id="clients">
      <div className={styles.container}>

        <div className={styles.headerRow}>
          <div className={styles.headerText}>
            <h2 className={styles.title}>Trusted by Global Clients</h2>
            <div className={styles.sub}>
              Trusted by businesses around the world for their digital transformation journey
            </div>
          </div>

          <div className={styles.arrowsWrap}>
            <button className={styles.arrow} type="button" aria-label="Previous slide" onClick={() => go(-1)}>
              ←
            </button>
            <button className={styles.arrow} type="button" aria-label="Next slide" onClick={() => go(1)}>
              →
            </button>
        
          </div>
        </div>

        <div className={styles.viewport} ref={viewportRef}>
          <div
            className={styles.track}
            style={{
              transform: slideW > 0 ? `translateX(${translateX}px)` : undefined,
              transition: animating ? "transform 0.5s ease" : "none",
              gap: `${gapPx}px`,
            }}
          >
            {TRACK.map((slide, i) => (
              <div
                key={i}
                className={styles.card}
                style={slideW > 0 ? { width: slideW } : undefined}
                aria-hidden={i < N || i >= 2 * N}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={slide.portrait}
                  alt={slide.company}
                  className={styles.portrait}
                />
                <div className={styles.panel}>
                  <div className={styles.quoteWrap}>
                    <span className={styles.quoteText}>{slide.quote}</span>
                  </div>
                  <div className={styles.brand}>
                    <div className={styles.logoWrap}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={slide.logo} alt={slide.company} className={styles.logo} />
                    </div>
                    <div className={styles.nameRow}>
                      <h3 className={styles.name}>{slide.company}</h3>
                      <h3 className={styles.role}>{slide.category}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
