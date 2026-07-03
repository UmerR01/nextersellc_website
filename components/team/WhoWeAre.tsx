import Image from "next/image";
import styles from "./WhoWeAre.module.css";

export default function WhoWeAre() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          {/* Left column */}
          <div className={styles.left}>
            <div className={styles.titleBlock}>
              <h2 className={styles.title}>
                <span className={styles.accent}>Who</span> we are
              </h2>
            </div>
            <div className={styles.desc}>
              <p>
                Nexterse LLC is an AI-powered software development company for established companies
                and enterprises, like Toyota, Beiersdorf, and the World Bank, that need custom AI
                and IoT systems to enter new markets, ship new products, or modernize an existing
                stack. Our work covers six lines: AI and agentic development, IoT and AIoT
                solutions, custom and enterprise software, legacy modernization, MVP development,
                and software product development. Across all six, we operate as the engineering
                partner who owns the build from discovery through launch.
              </p>
              <p>
                We run projects under two delivery frameworks: our proprietary Agentic Software
                Development Lifecycle (ADLC) for AI-led builds, and the traditional Software
                Development Lifecycle (SDLC) for projects where AI assistance is not the primary
                lever.
              </p>
            </div>
          </div>

          {/* Right column */}
          <div className={styles.right}>
            <div className={styles.imageWrap}>
              <Image
                src="/team/12_Rectangle-1995-1-1.jpg"
                alt="Nexterse LLC office"
                width={856}
                height={1000}
                className={styles.officeImage}
                priority
              />
              <div className={styles.addressCard}>
                <div className={styles.cardHeading}>Headquarters</div>
                <div className={styles.cardDesc}>
                  7901 4th St N #27451
                  <br />
                  St. Petersburg, FL 33702, USA
                  <br />
                  <br />
                  <strong>Dev Center</strong>
                  <br />
                  Lahore, Pakistan
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
