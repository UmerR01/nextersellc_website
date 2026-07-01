"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./ReviewSlider.module.css";

const REVIEWS = [
  {
    text: "The system has produced a significant competitive advantage in the industry thanks to Nexterse's well-thought opinions. They shouldered the burden of constantly updating a project management tool with a high level of detail and were committed to producing the best possible solution.",
    photo: "/engagement/01_photo.png",
    logo: null,
    name: "Alexander McCaig",
    position: "Co-Founder & CEO, Tartle",
  },
  {
    text: "Nectarin LLC aimed to develop a complex Ruby on Rails-based platform, which would be closely integrated with such systems as Google AdWords, Yandex Direct and Google Analytics.",
    photo: "/engagement/01_photo12.png",
    logo: null,
    name: "Andrey Kubka",
    position: "Product Technology Manager, Mediatron",
  },
  {
    text: "I was impressed by Nexterse's prices, especially for the project I wanted to do and in comparison to the quotes I received from a lot of other companies. Also, their communication skills were great; it never felt like a long-distance project. It felt like Nexterse was working next door because their project manager was always keeping me updated. Initially.",
    photo: "/engagement/12_5cc8378b669af259c74ec736_b_dorsinvil-2-1-1.jpg",
    logo: null,
    name: "Benjamin Dorsinvil",
    position: "Founder, SellBig",
  },
  {
    text: "We tried another company that one of our partners had used but they didn't work out. I feel that Nexterse does a better investigation of what we're asking for. They tell us how they plan to do a task and ask if that works for us. We chose them because their method worked with us.",
    photo: "/engagement/01_photo6.png",
    logo: null,
    name: "Damian Gevertz",
    position: "Founder & CEO, Widgety",
  },
  {
    text: "Nexterse is the firm to work with if you want to keep up to high standards. The professional workflows they stick to result in exceptional quality. Important, they help you think with the business logic of your application and they don't blindly follow what you are saying. Which is super important. Overall, great skills, good communication, and happy with the results so far.",
    photo: "/engagement/01_photo2.png",
    logo: null,
    name: "Domien Van Eynde",
    position: "Team Lead, Daiokan.com",
  },
  {
    text: "Together with the team, we have turned the MVP version of the service into a modern full-featured platform for online marketers. We are very satisfied with the work the Nexterse team has performed, and we would like to highlight the high level of technical expertise, coherence and efficiency of communication and flexibility in work. We can confidently say that Nexterse has put all our ideas into practice.",
    photo: "/engagement/01_photo7.png",
    logo: null,
    name: "Katerina Bromberg",
    position: "Co-Founder, MyMediAds.com",
  },
  {
    text: "We are absolutely convinced that cooperation between companies is only successful when based on effective teamwork (and Captain Obvious is on our side!). But the teams may vary on the degree of their cohesion.",
    photo: "/engagement/01_photo10.png",
    logo: null,
    name: "Maria Duyunova",
    position: "Director, Simplimagine LLC",
  },
  {
    text: "They are very sharp and have a high-quality team. I expect quality from people, and they have the kind of team I can work with. They were upfront about everything that needed to be done. I appreciated that the cost of the project turned out to be smaller than what we expected because they made some very good suggestions. They are very pleasant to work with.",
    photo: "/engagement/01_photo11.png",
    logo: null,
    name: "Michael Karbushev",
    position: "Senior Director of Engineering, Evolv",
  },
  {
    text: "Rivalfox had the pleasure to work with Nexterse in building out core portions of our product, and the results really couldn't have been better. Nexterse provided us with engineering expertise, enthusiasm and great people that were focused on creating quality features quickly.",
    photo: "/engagement/01_photo5.png",
    logo: null,
    name: "Paul S. Chun",
    position: "CTO, Rivalfox GmbH",
  },
  {
    text: "We'd like to thank Nexterse for the exceptional technical services provided for our business. It should be noted that we started our project's development with another team, but the communication and the development process in general were not transparent and on schedule. It resulted in a low-quality final product.",
    photo: null,
    logo: "/engagement/01_logo-1.svg",
    name: "Pratasevich Ivan",
    position: "Chief Executive Officer, Ivanco-Media LLC",
  },
  {
    text: "Nexterse succeeded in building a more manageable solution that is much easier to maintain.",
    photo: "/engagement/01_photo3.png",
    logo: null,
    name: "Yevgeniy Rozenblat",
    position: "Program Manager, TL Nika",
  },
  {
    text: "When looking for a strategic IT-partner for the development of a corporate ERP solution, we chose Nexterse. The company proved itself a reliable provider of IT services.",
    photo: "/engagement/01_photo9.png",
    logo: null,
    name: "Yuriy Semenchuk",
    position: "General Director, Business Car",
  },
  {
    text: "Thanks to Nexterse's can-do attitude, amazing work ethic, and willingness to tackle clients' problems as their own, they've become an integral part of our team. We've been truly impressed with their professionalism and performance and continue to work with the team on developing new applications. We are completely satisfied with the results of our cooperation and will be happy to recommend Nexterse as a reliable and competent partner for development of web-based solutions.",
    photo: null,
    logo: "/engagement/01_logo.svg",
    name: "Yury Haverman",
    position: "Founder, BoxForward",
  },
];

export default function ReviewSlider() {
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
