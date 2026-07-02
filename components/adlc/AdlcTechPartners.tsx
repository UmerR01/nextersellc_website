import Image from "next/image";
import styles from "./AdlcTechPartners.module.css";

export default function AdlcTechPartners() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.titleBlock}>
          <h2 className={styles.title}>
            Our tech <span style={{ color: "#3CC4E5" }}>partners</span>
          </h2>
          <p className={styles.description}>
            Enterprise AI systems require secure infrastructure, reliable model
            providers, and scalable cloud platforms. Nexterse works with leading
            cloud and AI technology providers to deliver solutions that meet
            enterprise standards for security, scalability, and performance.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Cloud infrastructure providers</h3>
            <div className={styles.logos}>
              <div className={styles.logoItem}>
                <Image
                  src="/adlc/02_aws.svg"
                  alt="AWS"
                  width={150}
                  height={90}
                />
              </div>
              <div className={styles.logoItem}>
                <Image
                  src="/adlc/03_Microsoft-Azure-1.svg.svg"
                  alt="Microsoft Azure"
                  width={150}
                  height={37}
                />
              </div>
            </div>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>AI model providers</h3>
            <div className={styles.logos}>
              <div className={styles.logoItem}>
                <Image
                  src="/adlc/03_OpenAI.svg"
                  alt="OpenAI"
                  width={150}
                  height={46}
                />
              </div>
              <div className={styles.logoItem}>
                <Image
                  src="/adlc/03_anthropic-2.svg"
                  alt="Anthropic"
                  width={150}
                  height={32}
                />
              </div>
              <div className={styles.logoItem}>
                <Image
                  src="/adlc/03_Meta-Llama-1.svg"
                  alt="Meta Llama"
                  width={150}
                  height={42}
                />
              </div>
              <div className={styles.logoItem}>
                <Image
                  src="/adlc/03_mistral-ai-2.svg"
                  alt="Mistral AI"
                  width={150}
                  height={37}
                />
              </div>
              <div className={styles.logoItem}>
                <Image
                  src="/adlc/03_mistral-ai-3.svg"
                  alt="Mistral AI"
                  width={150}
                  height={48}
                />
              </div>
              <div className={styles.logoItem}>
                <Image
                  src="/adlc/03_DeepMind-2.svg"
                  alt="DeepMind"
                  width={150}
                  height={32}
                />
              </div>
              <div className={styles.logoItem}>
                <Image
                  src="/adlc/03_DeepSeek-1.svg"
                  alt="DeepSeek"
                  width={150}
                  height={31}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
