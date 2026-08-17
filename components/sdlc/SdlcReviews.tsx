"use client";

import TeamReviewSlider from "@/components/team/TeamReviewSlider";

export default function SdlcReviews() {
  return (
    <TeamReviewSlider
      primary="software"
      count={7}
      secondaryCount={2}
      linkLabel="All Reviews"
      linkHref="/testimonials"
    />
  );
}
