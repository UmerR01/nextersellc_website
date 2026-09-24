"use client";

import { useEffect } from "react";
import styles from "./PartnersProcess.module.css";

// ─── Step data — partnership journey, start to onboarding/completion ──────────
const STEPS = [
  {
    label: "Step 1",
    title: "Application",
    subtitle: "Tell us about your business",
    body: "You share what you do, who you serve, and where our work overlaps: technology, industry focus, or the kind of clients you bring us.",
    side: "left" as const,
    icon: "search",
  },
  {
    label: "Step 2",
    title: "Review & Fit Check",
    subtitle: "We assess alignment",
    body: "Our team reviews the fit: technical overlap, shared standards, and whether a partnership actually benefits both sides before we go further.",
    side: "right" as const,
    icon: "network",
  },
  {
    label: "Step 3",
    title: "Partnership Terms",
    subtitle: "Aligning the details",
    body: "We agree on how the partnership works in practice: referral terms, co-delivery scope, communication channels, and shared expectations.",
    side: "left" as const,
    icon: "layout",
  },
  {
    label: "Step 4",
    title: "Onboarding",
    subtitle: "Getting you set up",
    body: "You're introduced to our delivery team, given access to what you need, and walked through how we run joint engagements day to day.",
    side: "right" as const,
    icon: "code",
  },
  {
    label: "Step 5",
    title: "Go Live Together",
    subtitle: "The partnership starts working",
    body: "First joint engagement, referral, or integration goes live, with both teams actively involved and a clear owner on each side.",
    side: "left" as const,
    icon: "cellular",
    isLast: true,
  },
];

// ─── SVG Icons — same set as components/process/ProcessPage.tsx ──────────────
function IconSearch() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="11" cy="11" r="7" />
      <line x1="16.5" y1="16.5" x2="22" y2="22" />
    </svg>
  );
}
function IconNetwork() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="5" r="2" />
      <circle cx="5" cy="19" r="2" />
      <circle cx="19" cy="19" r="2" />
      <path d="M12 7v4M12 11l-5.3 5.3M12 11l5.3 5.3" />
    </svg>
  );
}
function IconLayout() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="1" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="9" y1="9" x2="9" y2="21" />
    </svg>
  );
}
function IconCode() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}
function IconCellular() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="18" width="3" height="3" rx="0.5" fill="currentColor" stroke="none" />
      <rect x="7" y="14" width="3" height="7" rx="0.5" fill="currentColor" stroke="none" />
      <rect x="12" y="10" width="3" height="11" rx="0.5" fill="currentColor" stroke="none" />
      <rect x="17" y="6" width="3" height="15" rx="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

const ICONS: Record<string, React.FC> = {
  search: IconSearch,
  network: IconNetwork,
  layout: IconLayout,
  code: IconCode,
  cellular: IconCellular,
};

// ─── Main component ────────────────────────────────────────────────────────────
export default function PartnersProcess() {
  useEffect(() => {
    let ctx: ReturnType<typeof import("gsap").gsap.context> | null = null;

    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        gsap.set(".partners-timeline-card-left, .partners-timeline-card-right", {
          autoAlpha: 0,
          yPercent: 50,
        });
        gsap.set(".partners-timeline-card-final", { autoAlpha: 0 });
        gsap.set(".partners-timeline-icon-el", { scale: 0.5 });

        document
          .querySelectorAll<HTMLElement>(
            ".partners-timeline-progress-bar-el, .partners-timeline-icon-el, .partners-timeline-icon-bg"
          )
          .forEach((item) => {
            const tl = gsap.timeline({
              scrollTrigger: {
                scrub: 0.2,
                trigger: item,
                start: "clamp(top 60%)",
                end: "top 25%",
              },
            });

            const bar = item.closest<HTMLElement>(".partners-timeline-progress-bar-el");
            const icon = item.closest<HTMLElement>(".partners-timeline-icon-el");
            const bg = item.closest<HTMLElement>(".partners-timeline-icon-bg");

            if (bar) tl.to(bar, { ease: "none", height: "100%" }, 0);
            if (icon) tl.fromTo(icon, { scale: 0.5 }, { color: "#fff", scale: 1 }, 0);
            if (bg) tl.to(bg, { backgroundColor: "#3cc4e5" }, 0);
          });

        document
          .querySelectorAll<HTMLElement>(".partners-timeline-card-left, .partners-timeline-card-right")
          .forEach((item) => {
            gsap.timeline({
              scrollTrigger: {
                scrub: 0.2,
                trigger: item,
                start: "clamp(top 80%)",
                end: "top 50%",
              },
            }).fromTo(item, { autoAlpha: 0, yPercent: 50 }, { autoAlpha: 1, yPercent: 0 }, 0);
          });

        const final = document.querySelector<HTMLElement>(".partners-timeline-card-final");
        if (final) {
          gsap.timeline({
            scrollTrigger: {
              scrub: 0.2,
              trigger: final,
              start: "clamp(top 80%)",
              end: "top 50%",
            },
          }).fromTo(final, { autoAlpha: 0 }, { autoAlpha: 1 }, 0);
        }

        const refresher = () => {
          setTimeout(() => {
            ScrollTrigger.sort();
            ScrollTrigger.getAll().forEach((r) => r.refresh());
          }, 92);
        };
        window.addEventListener("load", refresher);
      });
    })();

    return () => {
      ctx?.revert();
    };
  }, []);

  return (
    <section className={styles.section} id="partnership-process">
      <div className="container">
        <div className={styles.head}>
          <span className={styles.eyebrow}>How It Works</span>
          <h2 className={styles.title}>Our Partnership Process</h2>
          <p className={styles.sub}>From first conversation to a live, working partnership.</p>
        </div>

        <div className={styles.timelineContainer}>
          {STEPS.map((step, i) => {
            const Icon = ICONS[step.icon];
            const isLeft = step.side === "left";
            const isLastStep = !!step.isLast;

            return (
              <div key={i} className={`${styles.step} partners-timeline-step`}>
                {isLeft ? (
                  <div className={`${styles.cardLeft} partners-timeline-card-left`}>
                    <div className={isLastStep ? styles.cardInnerLaunch : styles.cardInnerLeft}>
                      <div className={styles.cardBox}>
                        <div className={styles.stepMeta}>
                          <span className={styles.eyebrowBox}>{step.label}</span>
                          <h3 className={styles.stepTitle}>{step.title}</h3>
                          <span className={styles.stepSubtitle}>{step.subtitle}</span>
                        </div>
                        <p className={styles.stepText}>{step.body}</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className={`${styles.cardEmpty} ${styles.cardEmptyLeft}`} aria-hidden />
                )}

                <div className={styles.centerCol}>
                  <div className={`${styles.iconBg} partners-timeline-icon-bg`}>
                    <span className={`${styles.timelineIcon} partners-timeline-icon-el`}>
                      <Icon />
                    </span>
                  </div>
                  <div className={styles.lineTrack}>
                    <div className={`${styles.progressBar} partners-timeline-progress-bar-el`} />
                  </div>
                </div>

                {!isLeft ? (
                  <div className={`${styles.cardRight} partners-timeline-card-right`}>
                    <div className={styles.cardInnerRight}>
                      <div className={styles.cardBox}>
                        <div className={styles.stepMeta}>
                          <span className={styles.eyebrowBox}>{step.label}</span>
                          <h3 className={styles.stepTitle}>{step.title}</h3>
                          <span className={styles.stepSubtitle}>{step.subtitle}</span>
                        </div>
                        <p className={styles.stepText}>{step.body}</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className={`${styles.cardEmpty} ${styles.cardEmptyRight}`} aria-hidden />
                )}
              </div>
            );
          })}

          {/* Completion */}
          <div className={`${styles.finalStep} partners-timeline-step`}>
            <div className={`${styles.finalCardOuter} partners-timeline-card-final`}>
              <div className={styles.finalCard}>
                <div className={styles.finalHeading}>
                  <h3 className={styles.finalTitle}>You&rsquo;re Onboard</h3>
                  <span className={styles.finalSubtitle}>…and just getting started</span>
                </div>
                <p className={styles.finalText}>
                  From here it&rsquo;s an ongoing working relationship: joint delivery, referrals, and
                  check-ins to keep the partnership genuinely active, not a one-time signature.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
