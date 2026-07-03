import styles from "./WhitepaperHero.module.css";

export default function WhitepaperHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.breadcrumbs}>
            <a href="/">Home</a>
            <span>Whitepapers</span>
          </div>

          <h1 className={styles.title}>
            <span className={styles.accent}>Whitepapers</span>
          </h1>

          <div className={styles.description}>
            <p>
              Nexterse team shares insights and experience in software
              development. Every whitepaper here is written by an expert in the
              topic with more than 8 years of experience in their position.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
