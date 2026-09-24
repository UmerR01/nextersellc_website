import Image from "next/image";
import { PHOSPHOR_PATHS } from "@/components/products/phosphorPaths";
import { TECH_STACK } from "./techStack";
import styles from "./BenefitIllustrations.module.css";

/** Full-bleed flat 2D illustrations for the Partner Benefits cards. Static
 * artwork sized to cover the whole card media box, like a PNG would. */

/** Tilted app-icon style tiles for popular modern tech stacks, filling the
 * whole card like a collage. */
const TILE = 74;
const ROT = [-14, 9, -7, 15, -18, 6, -11, 13, -5, 17, -13, 8];

export function TechStackIllustration() {
  const tiles = TECH_STACK.slice(0, 15).map((t, i) => {
    const row = Math.floor(i / 4);
    const col = i % 4;
    const x = col * 100 + (row % 2 ? 54 : 4);
    const y = row * 66 + 12;
    return { ...t, x, y, rot: ROT[i % ROT.length] };
  });
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className={styles.svg} aria-hidden>
      {tiles.map((t) => (
        <g key={t.name} transform={`translate(${t.x + TILE / 2} ${t.y + TILE / 2}) rotate(${t.rot})`}>
          <rect x={-TILE / 2} y={-TILE / 2} width={TILE} height={TILE} rx="17" fill={t.color} />
          <rect x={-TILE / 2} y={-TILE / 2} width={TILE} height={TILE} rx="17" fill="url(#techShine)" />
          <g transform="translate(-21 -21) scale(1.75)">
            <path d={t.d} fill="#fff" />
          </g>
        </g>
      ))}
      <defs>
        <linearGradient id="techShine" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0.22" />
          <stop offset="1" stopColor="#000" stopOpacity="0.18" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/** Xorris in the middle (iPhone), Joblynk left and SalesHub right, using
 * the products' own mobile screenshots. Everything is sized in container
 * units, so it scales with the card at any width. */
export function ProductsIllustration() {
  return (
    <div className={styles.phones}>
      <div className={`${styles.card} ${styles.cardLeft}`} style={{ aspectRatio: "317 / 562" }}>
        <Image src="/partner/mobile-joblynk.png" alt="" width={317} height={562} className={styles.shot} />
      </div>
      <div className={styles.phone}>
        <div className={styles.screen}>
          <div className={styles.status}>
            <span className={styles.time}>9:41</span>
            <span className={styles.island} />
            <span className={styles.icons}>
              <svg viewBox="0 0 18 12" fill="currentColor">
                <rect x="0" y="8" width="3" height="4" rx="0.8" />
                <rect x="5" y="5.5" width="3" height="6.5" rx="0.8" />
                <rect x="10" y="3" width="3" height="9" rx="0.8" />
                <rect x="15" y="0" width="3" height="12" rx="0.8" />
              </svg>
              <svg viewBox="0 0 16 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M1.5 4.2a9.5 9.5 0 0 1 13 0M4 7a6 6 0 0 1 8 0" />
                <circle cx="8" cy="10" r="1" fill="currentColor" stroke="none" />
              </svg>
              <svg viewBox="0 0 26 12" fill="none">
                <rect x="0.6" y="0.6" width="21" height="10.8" rx="3" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1.2" />
                <rect x="2.2" y="2.2" width="17.6" height="7.6" rx="1.8" fill="currentColor" />
                <rect x="23" y="4" width="2" height="4" rx="1" fill="currentColor" fillOpacity="0.4" />
              </svg>
            </span>
          </div>
          <Image src="/partner/mobile-xorris.png" alt="" width={314} height={560} className={styles.shot} />
        </div>
      </div>
      <div className={`${styles.card} ${styles.cardRight}`} style={{ aspectRatio: "1290 / 972" }}>
        <Image src="/partner/mobile-saleshub.png" alt="" width={1290} height={972} className={styles.shot} />
      </div>
    </div>
  );
}

// Stepped tiers (widest at the bottom) with a payout card underneath.
const TIERS = [
  { label: "Scale", icon: "Buildings", w: 100, fs: 8 },
  { label: "Market", icon: "Megaphone", w: 112, fs: 9 },
  { label: "Optimize", icon: "ChartBar", w: 126, fs: 10 },
  { label: "Launch", icon: "ArrowUpRight", w: 140, fs: 11.5 },
  { label: "Design", icon: "FileText", w: 156, fs: 13 },
  { label: "Integrate", icon: "GridFour", w: 172, fs: 14.5 },
  { label: "Build", icon: "Package", w: 190, fs: 17 },
] as const;
const PITCH = [14, 16, 18, 21, 24, 28];
const TIER_H = 34;
const BUILD_TOP = 150;

export function BusinessIllustration() {
  // y of each tier's top edge, walking up from Build.
  const tops: number[] = [];
  let y = BUILD_TOP;
  tops[6] = y;
  for (let i = 5; i >= 0; i--) {
    y -= PITCH[i];
    tops[i] = y;
  }
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid meet" className={styles.svg} aria-hidden>
      {TIERS.map((t, i) => {
        const x = 200 - t.w / 2;
        const isBuild = i === TIERS.length - 1;
        const shade = i / (TIERS.length - 1);
        const icon = t.fs + 2;
        return (
          <g key={t.label} className={styles.tier}>
            <rect x={x} y={tops[i]} width={t.w} height={TIER_H} rx="5" fill={isBuild ? "#3CC4E5" : `rgba(60,196,229,${0.14 + shade * 0.4})`} />
            <svg x={x + t.w / 2 - t.fs * 2.2} y={tops[i] + 4} width={icon} height={icon} viewBox="0 0 256 256">
              <path d={PHOSPHOR_PATHS[t.icon]} fill={isBuild ? "#02102c" : "#cfe6ee"} />
            </svg>
            <text x={x + t.w / 2 - t.fs * 2.2 + icon + 4} y={tops[i] + 4 + icon * 0.8} fontSize={t.fs} fill={isBuild ? "#02102c" : "#cfe6ee"} className={styles.tierText}>
              {t.label}
            </text>
          </g>
        );
      })}

      <g className={styles.payout}>
        <rect x="95" y="206" width="210" height="66" rx="10" fill="#fff" />
        <text x="109" y="225" fontSize="9" fill="#6b7a90" className={styles.tierText}>
          Pending commission
        </text>
        <line x1="109" y1="230" x2="196" y2="230" stroke="#c3cee2" strokeWidth="1" strokeDasharray="1 2" />
        <text x="109" y="252" fontSize="21" fontWeight="700" fill="#02102c" className={styles.tierText}>
          $4,820
        </text>
        <text x="109" y="265" fontSize="9" fill="#6b7a90" className={styles.tierText}>
          $86,340.00 this year
        </text>
      </g>
    </svg>
  );
}
