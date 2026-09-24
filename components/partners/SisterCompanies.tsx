"use client";

import { useEffect } from "react";
import Image from "next/image";
import styles from "./SisterCompanies.module.css";

const FLAGS: Record<string, { src: string; label: string }> = {
  us: { src: "/flags/us.svg", label: "USA" },
  ae: { src: "/flags/ae.svg", label: "UAE" },
  de: { src: "/flags/de.svg", label: "Germany" },
  it: { src: "/flags/it.svg", label: "Italy" },
};

// Real sister companies, researched from their own sites/listings where
// public. tech-trio.com actually redirects to an unrelated NYSE-listed
// semiconductor-testing company (Trio-Tech International, California) —
// not this sister company — so Tech Trio's copy stays a placeholder
// rather than borrowing that unrelated business's description; only its
// URL is used, as given. Each company uses its own image from
// public/partner/.
const COMPANIES = [
  {
    name: "Softwise Solutions",
    countries: ["us"],
    copy: "A US IT staffing and consulting firm with over 20 years of experience. It places talent through contract, contract to hire and direct hire roles, and works with employers across IT and healthcare. Alongside Nexterse, it also supports cloud, data and Salesforce work for enterprise clients.",
    cta: "Explore",
    href: "https://www.softwisesolutions.com/",
    image: "/partner/softwise.jpg",
  },
  {
    name: "Tech Trio",
    countries: ["ae", "de"],
    copy: "An IT solutions company delivering networking and infrastructure services across the UAE and Germany. It works with Nexterse on engagements that pair reliable networks with the software built on top of them.",
    cta: "Explore",
    href: "https://www.tech-trio.com/",
    image: "/partner/tech.jpg",
  },
  {
    name: "OrionHub Marketing",
    countries: ["ae"],
    copy: "A Dubai digital marketing agency. It builds fast, responsive, user-friendly websites, runs SEO and Google Ads to drive qualified traffic and measurable leads, and creates the design and branding that helps a business stand out. It delivers alongside Nexterse for shared clients.",
    cta: "Explore",
    href: "https://orionhubmarketing.ae/",
    image: "/partner/Orion.jpg",
  },
  {
    name: "Insure Bazar",
    countries: ["ae"],
    copy: "A UAE insurance brokerage helping customers compare and buy cover for health, car, home, fire, business and travel. Working with Nexterse gives it the delivery capacity to keep building out its platform.",
    cta: "Explore",
    href: "http://www.insurebazaar.ae/",
    image: "/partner/insure.jpg",
  },
  {
    name: "Kodeconsole",
    countries: ["it"],
    copy: "A software studio working on modern tech stacks: Next.js and React web apps, React Native and Flutter mobile apps, AI integration, Zoho CRM, API development, UI/UX design, and DevOps automation. It partners with Nexterse on client builds that need extra engineering bandwidth.",
    cta: "Explore",
    href: "https://www.kodeconsole.com/",
    image: "/partner/kode.jpg",
  },
];

// Rail + scroll animation copied from PartnersProcess.tsx's timeline
// (same GSAP/ScrollTrigger technique, same icon-circle/line CSS values) —
// only the inner SVG icon is swapped for a step number, and the circle
// stays left-aligned the way PartnersProcess's own icon collapses to on
// mobile, instead of centered between two columns.
export default function SisterCompanies() {
  useEffect(() => {
    let ctx: ReturnType<typeof import("gsap").gsap.context> | null = null;

    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        gsap.set(".sister-card-el", { autoAlpha: 0, yPercent: 50 });
        gsap.set(".sister-icon-el", { scale: 0.5 });

        document
          .querySelectorAll<HTMLElement>(".sister-progress-bar-el, .sister-icon-el, .sister-icon-bg")
          .forEach((item) => {
            const tl = gsap.timeline({
              scrollTrigger: {
                scrub: 0.2,
                trigger: item,
                start: "clamp(top 60%)",
                end: "top 25%",
              },
            });

            const bar = item.closest<HTMLElement>(".sister-progress-bar-el");
            const icon = item.closest<HTMLElement>(".sister-icon-el");
            const bg = item.closest<HTMLElement>(".sister-icon-bg");

            if (bar) tl.to(bar, { ease: "none", height: "100%" }, 0);
            if (icon) tl.fromTo(icon, { scale: 0.5 }, { color: "#fff", scale: 1 }, 0);
            if (bg) tl.to(bg, { backgroundColor: "#3cc4e5" }, 0);
          });

        document.querySelectorAll<HTMLElement>(".sister-card-el").forEach((item) => {
          gsap.timeline({
            scrollTrigger: {
              scrub: 0.2,
              trigger: item,
              start: "clamp(top 80%)",
              end: "top 50%",
            },
          }).fromTo(item, { autoAlpha: 0, yPercent: 50 }, { autoAlpha: 1, yPercent: 0 }, 0);
        });

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
    <section className={styles.section} id="sister-companies">
      <div className="container">
        <h2 className={styles.heading}>
          Our Sister <span className={styles.accent}>Companies</span>
        </h2>

        <div className={styles.timeline}>
          {COMPANIES.map((c, i) => {
            const isLast = i === COMPANIES.length - 1;
            return (
              <div key={c.name} className={`${styles.step} sister-step`}>
                <div className={styles.rail}>
                  <div className={`${styles.iconBg} sister-icon-bg`}>
                    <span className={`${styles.circleNum} sister-icon-el`}>{i + 1}</span>
                  </div>
                  {!isLast && (
                    <div className={styles.lineTrack}>
                      <div className={`${styles.progressBar} sister-progress-bar-el`} />
                    </div>
                  )}
                </div>

                <div className={`${styles.media} sister-card-el`}>
                  <Image
                    src={c.image}
                    alt={c.name}
                    fill
                    sizes="(max-width: 700px) 100vw, 45vw"
                    className={styles.image}
                  />
                </div>
                <div className={`${styles.text} sister-card-el`}>
                  <h3 className={`${styles.name} ${styles.accent}`}>{c.name}</h3>
                  <div className={styles.flags}>
                    {c.countries.map((code) => (
                      <span key={code} className={styles.flagChip}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={FLAGS[code].src} alt="" className={styles.flagIcon} />
                        {FLAGS[code].label}
                      </span>
                    ))}
                  </div>
                  <p className={styles.copy}>{c.copy}</p>
                  <a href={c.href} target="_blank" rel="noopener noreferrer" className="btn btn-accent">
                    {c.cta}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
