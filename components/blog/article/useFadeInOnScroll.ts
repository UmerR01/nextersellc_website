"use client";

import { useEffect } from "react";
import type { RefObject } from "react";

/**
 * Reveals elements carrying data-animate="fade-up" once they scroll into view,
 * mirroring the reference article's IntersectionObserver fade-in behavior.
 */
export function useFadeInOnScroll(containerRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = Array.from(container.querySelectorAll<HTMLElement>('[data-animate="fade-up"]'));
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-visible", "true");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px", threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [containerRef]);
}
