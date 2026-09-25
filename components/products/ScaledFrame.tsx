"use client";

import { useLayoutEffect, useRef, useState, type ReactNode } from "react";

export const FRAME_W = 720;
export const FRAME_RATIO = 0.77;

/**
 * Lays its children out at a fixed design size and scales them to the
 * container's width, so every wireframe keeps identical proportions (and
 * identical height) at any screen size — text never falls below the
 * browser's minimum font size on phones.
 */
export default function ScaledFrame({ children }: { children: ReactNode }) {
  const outerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.8);
  const [ready, setReady] = useState(false);

  useLayoutEffect(() => {
    const el = outerRef.current;
    if (!el) return;
    const update = () => setScale(el.getBoundingClientRect().width / FRAME_W);
    update();
    setReady(true);
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={outerRef} style={{ position: "relative", width: "100%", aspectRatio: `1 / ${FRAME_RATIO}` }}>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: FRAME_W,
          height: FRAME_W * FRAME_RATIO,
          transformOrigin: "top left",
          transform: `scale(${scale})`,
          visibility: ready ? "visible" : "hidden",
        }}
      >
        {children}
      </div>
    </div>
  );
}
