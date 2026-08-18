import ServicesReviewSlider from "@/components/services/ServicesReviewSlider";
import styles from "./AIReviews.module.css";

export default function AIReviews() {
  return (
    <div className={styles.reviewSpacing}>
      <ServicesReviewSlider primary="ai" count={7} secondaryCount={2} />
    </div>
  );
}


