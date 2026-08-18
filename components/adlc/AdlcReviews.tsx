"use client";

import TeamReviewSlider from "@/components/team/TeamReviewSlider";

export default function AdlcReviews() {
  return (
    <TeamReviewSlider
      primary="ai"
      count={7}
      secondaryCount={2}
      linkLabel="All Reviews"
      linkHref="/testimonials"
    />
  );
}
