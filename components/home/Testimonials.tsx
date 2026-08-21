"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./Testimonials.module.css";

type Card =
  | { type: "image"; image: string; text: string }
  | { type: "icons"; icons: string[]; text: string }
  | { type: "counter"; value: number; suffix: string; text: string };

type Slide = {
  image: string;
  video?: string;
  title: string;
  subtitle: string;
  cards: Card[];
};

const SLIDES: Slide[] = [
  {
    image: "/cases/cordoba.jpg",
    video: "/cases/metanoiapilates.mp4",
    title: "Metanoia Pilates",
    subtitle: "A modern booking and ecommerce platform",
    cards: [
      { type: "image", image: "/cases/Maryia D..png", text: "Maryia D." },
      {
        type: "icons",
        icons: ["/cases/shopify_logo.jpeg", "/cases/php_logo.jpeg", "/cases/stripe.jpeg"],
        text: "Built on Shopify, PHP, and Stripe",
      },
      { type: "counter", value: 83, suffix: "%", text: "Increased customer bookings by 83%" },
      { type: "image", image: "/cases/pos.jpg", text: "Used daily by multiple Pilates instructors" },
    ],
  },
  {
    image: "/cases/transferconnex.webp",
    video: "/cases/The Quay.mp4",
    title: "The Quay",
    subtitle: "Digital transformation for restaurant bookings",
    cards: [
      { type: "image", image: "/cases/Graham Ackling.png", text: "Graham Ackling" },
      {
        type: "icons",
        icons: ["/cases/react_logo.png", "/cases/django_logo.jpeg"],
        text: "Built on React and Django",
      },
      { type: "counter", value: 60, suffix: "%", text: "Increased brand visibility by more than 60%" },
      { type: "image", image: "/cases/automate-booking.jpg", text: "Automated restaurant booking management" },
    ],
  },
];

const N = SLIDES.length;
// Three copies for seamless infinite loop
const TRACK = [...SLIDES, ...SLIDES, ...SLIDES];

export default function Testimonials() {
  const [pos, setPos] = useState(N); // start at middle copy
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => () => clearTimeout(timerRef.current), []);

  const go = (dir: 1 | -1) => {
    if (animating) return;
    const next = pos + dir;
    setPos(next);
    setAnimating(true);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setAnimating(false);
      // Silent jump back to middle copy to keep loop seamless
      if (next >= 2 * N) setPos(next - N);
      else if (next < N) setPos(next + N);
    }, 520);
  };

  return (
    <section className={styles.section} id="insights">
      <div className={styles.container}>
        <div className={styles.head}>
          <h2 className={styles.eyebrow}>Featured Testimonials</h2>
          <div className={styles.arrows}>
            <button className={styles.arrow} aria-label="Previous" onClick={() => go(-1)}>
              <span className={`${styles.arrowIcon} ${styles.arrowPrev}`} aria-hidden="true" />
            </button>
            <button className={styles.arrow} aria-label="Next" onClick={() => go(1)}>
              <span className={`${styles.arrowIcon} ${styles.arrowNext}`} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className={styles.viewport}>
          <div
            className={styles.track}
            style={
              {
                "--total": TRACK.length,
                transform: `translateX(calc(-${pos} / ${TRACK.length} * 100%))`,
                transition: animating ? "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)" : "none",
              } as React.CSSProperties
            }
          >
            {TRACK.map((slide, i) => (
              <div key={i} className={styles.slideWrap} aria-hidden={i < N || i >= 2 * N}>
                <div className={styles.grid}>
                  <article className={styles.featured}>
                    {slide.video ? (
                      <video
                        className={styles.featuredImg}
                        src={slide.video}
                        poster={slide.image}
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                    ) : (
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        sizes="50vw"
                        className={styles.featuredImg}
                      />
                    )}
                    <div className={styles.featuredOverlay} />
                    <span className={styles.playBadge} aria-hidden>
                      ▶
                    </span>
                    <div className={styles.featuredBody}>
                      <h3 className={styles.featuredTitle}>{slide.title}</h3>
                      <p className={styles.featuredSub}>{slide.subtitle}</p>
                    </div>
                  </article>

                  <div className={styles.points}>
                    {slide.cards.map((card, j) => (
                      <PointCard key={j} card={card} />
                    ))}
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

function PointCard({ card }: { card: Card }) {
  if (card.type === "image") {
    return (
      <article className={`${styles.point} ${styles.pointImage}`}>
        <Image src={card.image} alt="" fill sizes="25vw" className={styles.pointImg} />
        <div className={styles.pointOverlay} />
        <h4 className={styles.pointText}>{card.text}</h4>
      </article>
    );
  }
  if (card.type === "icons") {
    return (
      <article className={`${styles.point} ${styles.pointSolid} ${styles.pointAccentDark}`}>
        <div className={styles.pointIcons}>
          {card.icons.map((src) => (
            <Image key={src} src={src} alt="" width={48} height={48} className={styles.pointIcon} />
          ))}
        </div>
        <h4 className={styles.pointTextLight}>{card.text}</h4>
      </article>
    );
  }
  return (
    <article className={`${styles.point} ${styles.pointSolid} ${styles.pointAccentDark}`}>
      <CountUp value={card.value} suffix={card.suffix} />
      <h4 className={styles.pointTextLight}>{card.text}</h4>
    </article>
  );
}

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<number | null>(null);

  useEffect(() => {
    const duration = 1200;
    let start: number | null = null;
    const step = (t: number) => {
      if (start === null) start = t;
      const p = Math.min((t - start) / duration, 1);
      setN(Math.round(p * value));
      if (p < 1) ref.current = requestAnimationFrame(step);
    };
    ref.current = requestAnimationFrame(step);
    return () => {
      if (ref.current) cancelAnimationFrame(ref.current);
    };
  }, [value]);

  return (
    <div className={styles.counter}>
      {n}
      <span>{suffix}</span>
    </div>
  );
}
