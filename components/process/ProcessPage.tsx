"use client";

import { useEffect } from "react";
import styles from "./ProcessPage.module.css";

// ─── Step data ────────────────────────────────────────────────────────────────
const STEPS = [
  {
    label: "Step 1",
    title: "Discovery",
    subtitle: "Where it all begins",
    body: "We sit with you to discuss how our innovative software solutions can address your businesses challenges, bottlenecks or hurdles. We can suggest what a new, refined process would look like, what tech to use and the steps to get you there. You know your business, we know tech!",
    side: "left" as const,
    icon: "search",
  },
  {
    label: "Step 2",
    title: "Design",
    subtitle: "Create its look",
    body: "After the discovery phase, we'll begin the design stages for your custom built application; map out user flows, ensure your content scales screen sizes and test your design decisions.",
    side: "right" as const,
    icon: "vector",
  },
  {
    label: "Step 3",
    title: "Workflows",
    subtitle: "Sketching out user journeys",
    body: "We sketch up workflows to represent the user's journey (UX/UI) in all scenarios, along with features they'll benefit from, this way you get to visualise your ideas on paper.",
    side: "left" as const,
    icon: "network",
  },
  {
    label: "Step 4",
    title: "Wireframes",
    subtitle: "Make it digital",
    body: "Making the Workflows digital – you get the opportunity to see your app idea in a clickable format for the first time so you can review your assets, features and functionality. It's the first step from concept to product/solution so any major changes are easier to notice, add and implement.",
    side: "right" as const,
    icon: "layout",
  },
  {
    label: "Step 5",
    title: "Development",
    subtitle: "Writing the code",
    body: "Now that we've defined the software requirements, designed the architecture and created a detailed plan for how to implement the mobile or desktop application, our developers will hardwire the features and functionalities on carefully chosen frameworks and programming languages.",
    side: "left" as const,
    icon: "code",
    lastLeft: false,
  },
  {
    label: "Step 6",
    title: "Testing",
    subtitle: "Assuring its quality",
    body: "Although things are tested throughout, now our specialist QA team will focus extensively on testing, ensuring the smoothness of the product's functionality and operation. You're part of that team! We'll give you access to the test environment to review completed functionalities and provide your feedback.",
    side: "right" as const,
    icon: "flask",
  },
  {
    label: "Step 7",
    title: "Launch",
    subtitle: "Go Live",
    body: "Now that the code is complete and thoroughly tested, it will be brought together into a deployable format then released to servers or Apple & Google Play Store(s).",
    side: "left" as const,
    icon: "cellular",
    isLast: true,
  },
];

// ─── SVG Icons ────────────────────────────────────────────────────────────────
function IconSearch() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="11" cy="11" r="7" />
      <line x1="16.5" y1="16.5" x2="22" y2="22" />
    </svg>
  );
}

function IconVector() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4 9a5 5 0 0 0 5 5 5 5 0 0 0 5-5 5 5 0 0 0-5-5 5 5 0 0 0-5 5z" />
      <path d="M4 9H2m18 0h-5M9 4V2m0 18v-5" />
      <circle cx="18" cy="18" r="3" />
      <line x1="15.5" y1="15.5" x2="13" y2="13" />
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

function IconFlask() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M9 3h6M9 3v8l-4.5 8a1 1 0 0 0 .9 1.5h13.2a1 1 0 0 0 .9-1.5L15 11V3" />
      <line x1="6.7" y1="15" x2="17.3" y2="15" />
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
  vector: IconVector,
  network: IconNetwork,
  layout: IconLayout,
  code: IconCode,
  flask: IconFlask,
  cellular: IconCellular,
};

// ─── Main component ───────────────────────────────────────────────────────────
export default function ProcessPage() {
  useEffect(() => {
    let ctx: ReturnType<typeof import("gsap").gsap.context> | null = null;

    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        // Set initial states
        gsap.set(".timeline-card-left, .timeline-card-right", {
          autoAlpha: 0,
          yPercent: 50,
        });
        gsap.set(".timeline-card-final", {
          autoAlpha: 0,
        });
        gsap.set(".timeline-icon-el", {
          scale: 0.5,
        });

        // Animate progress bars, icons, icon backgrounds
        document
          .querySelectorAll<HTMLElement>(
            ".timeline-progress-bar-el, .timeline-icon-el, .timeline-icon-bg"
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

            const bar = item.closest<HTMLElement>(".timeline-progress-bar-el");
            const icon = item.closest<HTMLElement>(".timeline-icon-el");
            const bg = item.closest<HTMLElement>(".timeline-icon-bg");

            if (bar) tl.to(bar, { ease: "none", height: "100%" }, 0);
            if (icon) tl.fromTo(icon, { scale: 0.5 }, { color: "#fff", scale: 1 }, 0);
            if (bg) tl.to(bg, { backgroundColor: "#3cc4e5" }, 0);
          });

        // Animate step cards (left / right)
        document
          .querySelectorAll<HTMLElement>(".timeline-card-left, .timeline-card-right")
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

        // Animate final card
        const final = document.querySelector<HTMLElement>(".timeline-card-final");
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

        // Refresh after load
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
    <div className={styles.page}>
      {/* Fixed dark background */}
      <div className={styles.fixedBg} aria-hidden />

      <div className={styles.main}>
        {/* ── HERO ───────────────────────────────────────────────────── */}
        <section className={styles.hero}>
          {/* Theme background */}
          <div className={styles.heroGradient} aria-hidden />

          {/* Hero card */}
          <div className={styles.heroCard}>
            <p className={styles.heroEyebrow}>A Clear, Phased Approach to Transformation</p>
            <div className={styles.heroDivider} aria-hidden />
            <div className={styles.heroTitle}>
              <h1>
                Our Software Development Process
              </h1>
            </div>
            <div className={styles.heroBody}>
              <div className={styles.heroSubtitle}>
                The key to delivering you the best outcome
              </div>
              <p className={styles.heroDesc}>
                Our process outlines, in clearly defined phases, our plan to develop a solution to transform your business or its processes. It allows us to produce high-quality, cost efficient applications in the shortest possible time. Each phase is delivered to you to review and approve before we move onto the next one.
              </p>
              <a href="#get-modal-popup" className={`btn btn-accent ${styles.heroCta}`}>
                Let&apos;s talk
              </a>
            </div>
          </div>
        </section>

        {/* ── TIMELINE ──────────────────────────────────────────────── */}
        <section className={styles.timelineSection}>
          <div className={styles.timelineContainer}>
            {STEPS.map((step, i) => {
              const Icon = ICONS[step.icon];
              const isLeft = step.side === "left";
              const isLastStep = !!step.isLast;

              return (
                <div key={i} className={`${styles.step} timeline-step`}>
                  {/* LEFT column – card or empty */}
                  {isLeft ? (
                    <div
                      className={`${styles.cardLeft} timeline-card-left`}
                      style={{ order: 0 }}
                    >
                      <div className={isLastStep ? styles.cardInnerLaunch : styles.cardInnerLeft}>
                        <div className={`${styles.cardBox}`}>
                          <div className={styles.stepMeta}>
                            <span className={styles.eyebrowBox}>{step.label}</span>
                            <h2 className={styles.stepTitle}>{step.title}</h2>
                            <span className={styles.stepSubtitle}>{step.subtitle}</span>
                          </div>
                          <p className={styles.stepText}>{step.body}</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className={styles.cardEmpty} style={{ order: 0 }} aria-hidden />
                  )}

                  {/* CENTER column */}
                  <div
                    className={`${styles.centerCol}`}
                    style={{ order: 1 }}
                  >
                    <div className={`${styles.iconBg} timeline-icon-bg`}>
                      <span className={`${styles.timelineIcon} timeline-icon-el`}>
                        <Icon />
                      </span>
                    </div>
                    <div className={styles.lineTrack}>
                      <div className={`${styles.progressBar} timeline-progress-bar-el`} />
                    </div>
                  </div>

                  {/* RIGHT column – card or empty */}
                  {!isLeft ? (
                    <div
                      className={`${styles.cardRight} timeline-card-right`}
                      style={{ order: 2 }}
                    >
                      <div className={styles.cardInnerRight}>
                        <div className={styles.cardBox}>
                          <div className={styles.stepMeta}>
                            <span className={styles.eyebrowBox}>{step.label}</span>
                            <h2 className={styles.stepTitle}>{step.title}</h2>
                            <span className={styles.stepSubtitle}>{step.subtitle}</span>
                          </div>
                          <p className={styles.stepText}>{step.body}</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className={styles.cardEmpty} style={{ order: 2 }} aria-hidden />
                  )}
                </div>
              );
            })}

            {/* The End */}
            <div className={`${styles.finalStep} timeline-step`}>
              <div className={`${styles.finalCardOuter} timeline-card-final`}>
                <div className={styles.finalCard}>
                  <div className={styles.finalHeading}>
                    <h2 className={styles.finalTitle}>The End</h2>
                    <span className={styles.finalSubtitle}>…very rarely</span>
                  </div>
                  <p className={styles.finalText}>
                    There will always be room for new improvements and features which makes launching an app a cyclical process, one that we will continue to be a part of to support and maintain your new digital product.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
