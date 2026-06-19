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
    video: "https://satvasoftech.com/wp-content/uploads/2025/07/Cordoba-Rewards-Sample.mp4",
    title: "Cordoba Rewards",
    subtitle: "A comprehensive rewards and loyalty platform",
    cards: [
      { type: "image", image: "/cases/woman.jpg", text: "Built scalable loyalty management system" },
      {
        type: "icons",
        icons: ["/cases/apple.png", "/cases/android.png"],
        text: "Developed mobile apps for iOS and Android",
      },
      { type: "counter", value: 35, suffix: "%", text: "Increased customer retention by 35%" },
      { type: "image", image: "/cases/pos.jpg", text: "Integrated with multiple POS systems" },
    ],
  },
  {
    image: "/cases/transferconnex.webp",
    video: "https://satvasoftech.com/wp-content/uploads/2025/07/Essential-Fire-Services-Sample.mp4",
    title: "Essential Fire Services",
    subtitle: "Digital transformation for emergency services",
    cards: [
      { type: "image", image: "/cases/team.jpg", text: "Automated emergency dispatch system" },
      { type: "icons", icons: ["/cases/mobile-dev.webp"], text: "Mobile-first approach for field teams" },
      { type: "counter", value: 40, suffix: "%", text: "Reduced response time by 40%" },
      { type: "image", image: "/cases/woman.jpg", text: "Real-time incident tracking and management" },
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
              ←
            </button>
            <button className={styles.arrow} aria-label="Next" onClick={() => go(1)}>
              →
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
                      <div className={styles.featuredActions}>
                        <a href="#contact" className="btn btn-outline">
                          View case study
                        </a>
                      </div>
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
      <article className={`${styles.point} ${styles.pointSolid}`}>
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
    <article className={`${styles.point} ${styles.pointSolid}`}>
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
