import type { Product } from "./productsData";
import styles from "./PlaceholderWireframe.module.css";

const initials = (name: string) =>
  name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

/**
 * Generic stand-in for products that don't have a dedicated wireframe yet.
 * Not meant to represent any real screen — swap for a real per-product
 * wireframe once the product's actual UI is available to recreate.
 */
export default function PlaceholderWireframe({ name, colors }: { name: string; colors: Product["colors"] }) {
  return (
    <div className={styles.root} aria-hidden style={{ ["--p-solid" as string]: colors.solid, ["--p-accent" as string]: colors.accent }}>
      <span className={styles.mark}>{initials(name)}</span>
      <div className={styles.bars}>
        <span className={styles.bar} style={{ width: "70%", animationDelay: "0s" }} />
        <span className={styles.bar} style={{ width: "45%", animationDelay: "0.15s" }} />
        <span className={styles.bar} style={{ width: "58%", animationDelay: "0.3s" }} />
      </div>
      <span className={styles.caption}>Product preview coming soon</span>
    </div>
  );
}
