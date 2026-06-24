import Image from "next/image";
import styles from "./AIDualRisks.module.css";

const RISKS = [
  {
    icon: "/ai-consulting/imgs/03_Getting-caught-up-in-the-hype-03.svg",
    title: "Getting caught up in the hype",
    body: "Too many organizations chase the latest AI trends without thinking about the actual problems they need to solve. Teams spend big on custom AI models or experimental platforms when a simpler approach would deliver results faster and for less money. Companies end up with expensive prototypes that never make it into the real world.",
    how: "At Nexterse, we keep things grounded. Before recommending any AI solution, we look hard at your data, your operations, and what it will cost to run. We only move forward with solutions that deliver clear, measurable value.",
  },
  {
    icon: "/ai-consulting/imgs/03_The-price-of-standing-still-03.svg",
    title: "The price of standing still",
    body: "Some organizations hesitate — worried about security, ROI, or readiness. This leads to years of delay. Meanwhile, competitors are already using AI to automate tedious tasks, accelerate product development, and analyze business data in real time. If you wait too long, you lose efficiency and fall behind as AI becomes the industry standard.",
    how: "We take a practical approach. Our consulting process starts by identifying high-impact opportunities that deliver real value fast — no need for a massive overhaul on day one. We help you move ahead with AI safely, smartly, and at the right pace.",
  },
];

export default function AIDualRisks() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>
          The <span>dual risks</span> of the AI era
        </h2>
        <p className={styles.desc}>
          Some companies rush into AI without a real business reason. Others drag
          their feet and fall behind competitors already using AI to boost
          productivity. The key is avoiding both mistakes.
        </p>

        <div className={styles.grid}>
          {RISKS.map((r) => (
            <div key={r.title} className={styles.col}>
              <div className={styles.card}>
                <Image
                  src={r.icon}
                  alt=""
                  width={56}
                  height={56}
                  className={styles.cardIcon}
                />
                <h3 className={styles.cardTitle}>{r.title}</h3>
                <p className={styles.cardBody}>{r.body}</p>
                <div className={styles.cardHow}>
                  <span className={styles.cardHowLabel}>How we handle this risk:</span>
                  <p className={styles.cardHowText}>{r.how}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.ctaBanner}>
          <div className={styles.ctaText}>
            <h3>Start your AI journey today</h3>
            <p>Contact our experts to discuss how AI can transform your business.</p>
          </div>
          <a href="#contact" className="btn btn-accent">Book a call</a>
        </div>
      </div>
    </section>
  );
}
