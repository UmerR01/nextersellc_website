import styles from "./AboutNavHeroBackground.module.css";

export default function AboutNavHeroBackground() {
  return (
    <div className={styles.background} aria-hidden="true">
      <svg className={styles.desktop} viewBox="0 0 1920 703" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="aboutNavBase" x1="1920" y1="-21" x2="115" y2="922" gradientUnits="userSpaceOnUse">
            <stop stopColor="#02102C" />
            <stop offset="1" stopColor="#112244" />
          </linearGradient>
          <radialGradient id="aboutNavGlowLeft">
            <stop stopColor="#3CC4E5" stopOpacity=".34" />
            <stop offset="1" stopColor="#3CC4E5" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="aboutNavGlowRight">
            <stop stopColor="#3CC4E5" stopOpacity=".3" />
            <stop offset="1" stopColor="#3CC4E5" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="1920" height="703" fill="url(#aboutNavBase)" />
        <ellipse cx="20" cy="690" rx="640" ry="560" fill="url(#aboutNavGlowLeft)" />
        <ellipse cx="1940" cy="120" rx="620" ry="560" fill="url(#aboutNavGlowRight)" />
        <g fill="#3CC4E5" opacity=".08">
          <path d="M-180 703 48-46l465 72 378 677H610L363 214l-302-27 24 516Z" />
          <path d="m866-420 508-83 294 527 302-76-183-277 189-19 423 438-257 65-106-283-546 190-96-521-293 74 318 766-171 73L788-281Z" />
        </g>
      </svg>

      <svg className={styles.mobile} viewBox="0 0 375 559" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="aboutNavMobileBase" x1="375" y1="-17" x2="-67" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#02102C" />
            <stop offset="1" stopColor="#112244" />
          </linearGradient>
          <radialGradient id="aboutNavMobileGlow">
            <stop stopColor="#3CC4E5" stopOpacity=".5" />
            <stop offset="1" stopColor="#3CC4E5" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="375" height="559" fill="url(#aboutNavMobileBase)" />
        <circle cx="350" cy="540" r="310" fill="url(#aboutNavMobileGlow)" />
        <g fill="#fff" opacity=".04">
          <path d="m495 278-250 21-67 258H42l133-347 399-50 128 397H557Z" />
          <path d="M557 557 486 940l88 14 128-397H557ZM209 734l-31-177H42l63 166Z" />
        </g>
      </svg>
    </div>
  );
}
