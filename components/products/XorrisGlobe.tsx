"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./XorrisGlobe.module.css";

type Country = { id: string; name: string; lat: number; lng: number; count: number };

export const GLOBE_COUNTRIES: Country[] = [
  { id: "us", name: "United States", lat: 40.7, lng: -74, count: 14 },
  { id: "gb", name: "United Kingdom", lat: 51.5, lng: -0.1, count: 9 },
  { id: "de", name: "Germany", lat: 52.5, lng: 13.4, count: 5 },
  { id: "ae", name: "United Arab Emirates", lat: 25.2, lng: 55.3, count: 6 },
  { id: "in", name: "India", lat: 28.6, lng: 77.2, count: 11 },
  { id: "sg", name: "Singapore", lat: 1.35, lng: 103.8, count: 4 },
  { id: "jp", name: "Japan", lat: 35.7, lng: 139.7, count: 7 },
  { id: "au", name: "Australia", lat: -33.9, lng: 151.2, count: 3 },
];

type Ring = [number, number][];
type World = { land: Ring[]; borders: Ring[]; active: Record<string, Ring[]> };

const PLUM = "#812986";
const PLUM_DARK = "#5a1860";
const RAD = Math.PI / 180;
const SPIN_DEG_PER_MS = 0.014;
const HOLD_MS = 2400;

const wrap = (d: number) => ((((d + 180) % 360) + 360) % 360) - 180;

/**
 * Rotating plum globe (same look as the Xorris dashboard globe: plum sphere,
 * white country outlines, pins). Each time a pin swings to the front the globe
 * eases to it and shows the same hover card the real dashboard shows on mouse
 * hover — driven by the animation instead of a cursor.
 */
export default function XorrisGlobe() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<Country | null>(null);

  useEffect(() => {
    const wrapEl = wrapRef.current;
    const canvas = canvasRef.current;
    const card = cardRef.current;
    if (!wrapEl || !canvas || !card) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let world: World | null = null;
    let disposed = false;
    let inView = true;
    let w = 0;
    let h = 0;
    let dpr = 1;

    let lon0 = -20; // centre longitude
    let lat0 = 16; // centre latitude (tilt)
    let mode: "spin" | "hold" = "spin";
    let holdUntil = 0;
    let holdTarget: Country | null = null;
    let lastShown: string | null = null;
    let last = 0;
    let raf = 0;

    fetch("/products/xorris/world.json")
      .then((r) => r.json())
      .then((d: World) => {
        if (!disposed) world = d;
      })
      .catch(() => {});

    const resize = () => {
      // clientWidth/Height are layout sizes, unaffected by the parent scale transform
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = wrapEl.clientWidth;
      h = wrapEl.clientHeight;
      canvas.width = Math.max(1, Math.round(w * dpr));
      canvas.height = Math.max(1, Math.round(h * dpr));
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
    };
    const ro = new ResizeObserver(resize);
    ro.observe(wrapEl);
    resize();

    const io = new IntersectionObserver(([e]) => {
      inView = e.isIntersecting;
    });
    io.observe(wrapEl);

    const project = (lat: number, lng: number, R: number, cx: number, cy: number) => {
      const phi = lat * RAD;
      const dl = (lng - lon0) * RAD;
      const p0 = lat0 * RAD;
      const cosPhi = Math.cos(phi);
      const x = cosPhi * Math.sin(dl);
      const y = Math.cos(p0) * Math.sin(phi) - Math.sin(p0) * cosPhi * Math.cos(dl);
      const z = Math.sin(p0) * Math.sin(phi) + Math.cos(p0) * cosPhi * Math.cos(dl);
      return { x: cx + R * x, y: cy - R * y, z };
    };

    const unit = (lat: number, lng: number) => {
      const phi = lat * RAD;
      const dl = (lng - lon0) * RAD;
      const p0 = lat0 * RAD;
      const cosPhi = Math.cos(phi);
      return {
        x: cosPhi * Math.sin(dl),
        y: Math.cos(p0) * Math.sin(phi) - Math.sin(p0) * cosPhi * Math.cos(dl),
        z: Math.sin(p0) * Math.sin(phi) + Math.cos(p0) * cosPhi * Math.cos(dl),
      };
    };

    const draw = (now: number) => {
      const dt = last ? Math.min(now - last, 64) : 16;
      last = now;

      if (!reduced) {
        if (mode === "spin") {
          lon0 = wrap(lon0 + SPIN_DEG_PER_MS * dt);
          lat0 += (16 - lat0) * 0.02;
          for (const c of GLOBE_COUNTRIES) {
            if (c.id !== lastShown && Math.abs(wrap(c.lng - lon0)) < 1.2) {
              mode = "hold";
              holdTarget = c;
              holdUntil = now + HOLD_MS;
              setActive(c);
              break;
            }
          }
        } else if (holdTarget) {
          lon0 += wrap(holdTarget.lng - lon0) * 0.08;
          lat0 += (12 + holdTarget.lat * 0.28 - lat0) * 0.06;
          if (now > holdUntil) {
            lastShown = holdTarget.id;
            holdTarget = null;
            mode = "spin";
            setActive(null);
          }
        }
      }

      if (inView && w > 0) {
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.clearRect(0, 0, w, h);
        const R = Math.min(w, h) * 0.44;
        const cx = w / 2;
        const cy = h / 2;

        // soft glow
        const glow = ctx.createRadialGradient(cx, cy, R * 0.9, cx, cy, R * 1.25);
        glow.addColorStop(0, "rgba(129,41,134,0.22)");
        glow.addColorStop(1, "rgba(129,41,134,0)");
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(cx, cy, R * 1.25, 0, Math.PI * 2);
        ctx.fill();

        // sphere
        const g = ctx.createRadialGradient(cx - R * 0.35, cy - R * 0.4, R * 0.1, cx, cy, R);
        g.addColorStop(0, "#9a3ea0");
        g.addColorStop(0.55, PLUM);
        g.addColorStop(1, PLUM_DARK);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(cx, cy, R, 0, Math.PI * 2);
        ctx.fill();

        if (world) {
          ctx.save();
          ctx.beginPath();
          ctx.arc(cx, cy, R, 0, Math.PI * 2);
          ctx.clip();

          // Fill each ring clipped to the visible hemisphere: edges that cross
          // the horizon are cut exactly at the limb, and the hidden stretch is
          // closed along the limb arc (no chords cutting across the sphere).
          const fillRings = (rs: Ring[], style: string) => {
            ctx.fillStyle = style;
            ctx.beginPath();
            const sx = (x: number) => cx + R * x;
            const sy = (y: number) => cy - R * y;
            for (const ring of rs) {
              const pts = ring.map(([lng, lat]) => unit(lat, lng));
              if (pts.every((q) => q.z <= 0)) continue;
              if (pts.every((q) => q.z > 0)) {
                pts.forEach((q, i) => (i === 0 ? ctx.moveTo(sx(q.x), sy(q.y)) : ctx.lineTo(sx(q.x), sy(q.y))));
                ctx.closePath();
                continue;
              }
              const path: { x: number; y: number; limb: boolean; enter: boolean }[] = [];
              for (let i = 0; i < pts.length; i++) {
                const q = pts[i];
                const n = pts[(i + 1) % pts.length];
                if (q.z > 0) path.push({ x: q.x, y: q.y, limb: false, enter: false });
                if (q.z > 0 !== n.z > 0) {
                  const k = q.z / (q.z - n.z);
                  const X = q.x + (n.x - q.x) * k;
                  const Y = q.y + (n.y - q.y) * k;
                  const len = Math.hypot(X, Y) || 1;
                  path.push({ x: X / len, y: Y / len, limb: true, enter: n.z > 0 });
                }
              }
              const start = path.findIndex((q) => q.limb && q.enter);
              if (start < 0) continue;
              for (let j = 0; j < path.length; j++) {
                const q = path[(start + j) % path.length];
                if (j === 0) ctx.moveTo(sx(q.x), sy(q.y));
                else ctx.lineTo(sx(q.x), sy(q.y));
                if (q.limb && !q.enter) {
                  const nx = path[(start + j + 1) % path.length];
                  const a0 = Math.atan2(sy(q.y) - cy, sx(q.x) - cx);
                  const a1 = Math.atan2(sy(nx.y) - cy, sx(nx.x) - cx);
                  let d = a1 - a0;
                  while (d > Math.PI) d -= Math.PI * 2;
                  while (d < -Math.PI) d += Math.PI * 2;
                  ctx.arc(cx, cy, R, a0, a1, d < 0);
                }
              }
              ctx.closePath();
            }
            ctx.fill();
          };
          const strokeLines = (rs: Ring[], style: string, width: number) => {
            ctx.lineWidth = width;
            ctx.strokeStyle = style;
            ctx.beginPath();
            for (const ring of rs) {
              let pen = false;
              for (const [lng, lat] of ring) {
                const p = project(lat, lng, R, cx, cy);
                if (p.z > 0) {
                  if (pen) ctx.lineTo(p.x, p.y);
                  else ctx.moveTo(p.x, p.y);
                  pen = true;
                } else pen = false;
              }
            }
            ctx.stroke();
          };

          fillRings(world.land, "rgba(255,255,255,0.2)");
          fillRings(Object.values(world.active).flat(), "rgba(255,255,255,0.18)");
          strokeLines(world.borders, "rgba(255,255,255,0.5)", Math.max(0.5, R * 0.004));
          strokeLines(world.land, "rgba(255,255,255,0.7)", Math.max(0.6, R * 0.005));
          ctx.restore();
        }

        // pins
        let cardPos: { x: number; y: number } | null = null;
        const pulse = (now % 1800) / 1800;
        for (const c of GLOBE_COUNTRIES) {
          const p = project(c.lat, c.lng, R, cx, cy);
          if (p.z <= 0.12) continue;
          const a = Math.min(1, (p.z - 0.12) / 0.3);
          const isHold = holdTarget?.id === c.id;
          const r = R * (isHold ? 0.034 : 0.026);
          ctx.globalAlpha = a;
          ctx.strokeStyle = `rgba(255,255,255,${0.7 * (1 - pulse)})`;
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.arc(p.x, p.y, r * (1.2 + pulse * 1.8), 0, Math.PI * 2);
          ctx.stroke();
          ctx.fillStyle = "#fff";
          ctx.beginPath();
          ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = PLUM_DARK;
          ctx.beginPath();
          ctx.arc(p.x, p.y, r * 0.42, 0, Math.PI * 2);
          ctx.fill();
          ctx.globalAlpha = 1;
          if (isHold) cardPos = { x: p.x, y: p.y - r };
        }

        if (cardPos) {
          const cw = card.offsetWidth;
          const ch = card.offsetHeight;
          const x = Math.min(Math.max(cardPos.x, cw / 2 + 6), w - cw / 2 - 6);
          const y = Math.max(cardPos.y - 12, ch + 6);
          card.style.transform = `translate(${x}px, ${y}px) translate(-50%, -100%)`;
        }
      }
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
    };
  }, []);

  return (
    <div ref={wrapRef} className={styles.wrap}>
      <canvas ref={canvasRef} className={styles.canvas} />
      <div ref={cardRef} className={`${styles.card} ${active ? styles.cardOn : ""}`}>
        {active && (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`/products/xorris/flags/${active.id}.svg`} alt="" className={styles.flag} />
            <span>
              <span className={styles.country}>{active.name}</span>
              <span className={styles.count}>
                {active.count} {active.count === 1 ? "number" : "numbers"}
              </span>
            </span>
          </>
        )}
      </div>
    </div>
  );
}
