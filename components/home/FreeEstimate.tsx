import styles from "./FreeEstimate.module.css";

/** Free estimation — exact Sumato download-company-profile:
 *  Structure:
 *    <section>
 *      <div class="download-company-profile__bg parallax-wrapper">  ← bg image layer
 *      <div class="container">
 *        <div class="row">
 *          <div class="col-md-8">title + desc</div>
 *          <div class="col-md-4">button</div>
 */
export default function FreeEstimate() {
  return (
    <section className={styles.section} id="contact">
      {/* download-company-profile__bg parallax-wrapper
          position: absolute; left:50%; top:50%; transform:translate(-50%,-50%);
          max-width: 1420px; width: 100%; background: pricing-bg.svg */}
      {/* <div className={styles.bg} aria-hidden /> */}

      <div className={`container ${styles.row}`}>
        <div className={styles.text}>
          <h2 className={styles.title}>Get a Free Project Estimate</h2>
          <div className={styles.desc}>
            <p>Share details about your project and get a detailed proposal.</p>
          </div>
        </div>
        <div className={styles.action}>
          <a href="#contact" className={`btn btn-accent ${styles.cta}`}>
            Free estimation
          </a>
        </div>
      </div>
    </section>
  );
}
