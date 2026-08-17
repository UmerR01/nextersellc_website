import AipocLogos from "@/components/aipoc/AipocLogos";
import styles from "./PricingLogos.module.css";

export default function PricingLogos() {
  return (
    <section id="pricing-clients" className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>
          Our <span className={styles.accent}>Clients</span>
        </h2>
      </div>
      <AipocLogos />
    </section>
  );
}