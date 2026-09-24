"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Ticks a `cycle` counter every `ms` while the given element is on
 * screen, so a wireframe's entrance animations can be keyed to it and
 * replay each time — same pattern XorrisDashboard/SalesHubDashboard use.
 */
export function useReplay<T extends HTMLElement>(ms = 9000) {
  const ref = useRef<T>(null);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let visible = true;
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
    });
    io.observe(el);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return () => io.disconnect();
    }

    const id = setInterval(() => {
      if (visible) setCycle((c) => c + 1);
    }, ms);
    return () => {
      io.disconnect();
      clearInterval(id);
    };
  }, [ms]);

  return { ref, cycle };
}
