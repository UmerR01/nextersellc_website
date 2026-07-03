"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./CSReviewSlider.module.css";

const REVIEWS = [
  {
    text: "The system has produced a significant competitive advantage in the industry thanks to Nexterse LLC's well-thought opinions. They shouldered the burden of constantly updating a project management tool with a high level of detail and were committed to producing the best possible solution.",
    photo: "/custom-software/01_photo.png",
    logo: null,
    name: "Alexander McCaig",
    position: "Co-Founder & CEO, Tartle",
  },
  {
    text: "We tried another company that one of our partners had used but they didn't work out. I feel that Nexterse LLC does a better investigation of what we're asking for. They tell us how they plan to do a task and ask if that works for us. We chose them because their method worked with us.",
    photo: "/custom-software/01_photo6.png",
    logo: null,
    name: "Damian Gevertz",
    position: "Founder & CEO, Widgety",
  },
  {
    text: "Nexterse LLC is the firm to work with if you want to keep up to high standards. The professional workflows they stick to result in exceptional quality. Important, they help you think with the business logic of your application and they don't blindly follow what you are saying. Which is super important. Overall, great skills, good communication, and happy with the results so far.",
    photo: "/custom-software/01_photo2.png",
    logo: null,
    name: "Domien Van Eynde",
    position: "Team Lead, Daiokan.com",
  },
  {
    text: "Rivalfox had the pleasure to work with Nexterse LLC in building out core portions of our product, and the results really couldn't have been better. Nexterse LLC provided us with engineering expertise, enthusiasm and great people that were focused on creating quality features quickly.",
    photo: "/custom-software/01_photo5.png",
    logo: null,
    name: "Paul S. Chun",
    position: "CTO, Rivalfox GmbH",
  },
  {
    text: "Nexterse LLC succeeded in building a more manageable solution that is much easier to maintain.",
    photo: "/custom-software/01_photo3.png",
    logo: null,
    name: "Yevgeniy Rozenblat",
    position: "Program Manager, TL Nika",
  },
];

export default function CSReviewSlider() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? REVIEWS.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === REVIEWS.length - 1 ? 0 : c + 1));

  const review = REVIEWS[current];

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.slide}>
          <div className={styles.left}>
            <div className={styles.text}>{review.text}</div>
          </div>
          <div className={styles.right}>
            <div className={styles.authorData}>
              {review.photo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={review.photo} alt={review.name} className={styles.photo} width={96} height={96} loading="lazy" />
              ) : review.logo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={review.logo} alt={review.name} className={styles.logoImg} width={180} height={75} loading="lazy" />
              ) : null}
              <div className={styles.authorText}>
                <div className={styles.authorName}>{review.name}</div>
                <div className={styles.authorPosition}>{review.position}</div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.nav}>
            <button className={styles.navBtn} onClick={prev} aria-label="Previous review">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
              </svg>
            </button>
            <button className={styles.navBtn} onClick={next} aria-label="Next review">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
              </svg>
            </button>
          </div>
          <Link href="/testimonials" className={styles.allLink}>
            All Reviews
            <span className={styles.allLinkArrow} />
          </Link>
        </div>
      </div>
    </section>
  );
}
