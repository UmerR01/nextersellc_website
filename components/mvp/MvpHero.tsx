import s from "./MvpPage.module.css";

const HeroBg = () => (
  <svg
    preserveAspectRatio="xMidYMid slice"
    className={s.heroBgSvg}
    width="1920" height="879" viewBox="0 0 1920 879"
    fill="none" xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <g clipPath="url(#mvp_clip0)">
      <rect width="1920" height="879" fill="url(#mvp_grad0)" />
      <g opacity="0.4" filter="url(#mvp_f0)">
        <circle cx="1560" cy="838" r="600" fill="#3CC4E5" />
      </g>
      <g opacity="0.25" filter="url(#mvp_f1)">
        <circle cx="1803" cy="386" r="400" fill="#3CC4E5" />
      </g>
      <g opacity="0.14">
        <path fillRule="evenodd" clipRule="evenodd"
          d="M2123.93 473.428L1625.04 516.449L1490.37 1030.83L1218.64 1030.83L1484.24 336.882L2281.56 237.746L2537.8 1030.84L2247.37 1030.84L2123.93 473.428ZM1792.82 653.171L1723.62 1031.01L2014.05 1031.01L1942.97 636.337L1792.82 653.171ZM1288.23 355.913L1106.28 383.97L732.2 1031.16L987.092 1031.16L1288.23 355.913Z"
          fill="url(#mvp_grad1)" />
      </g>
    </g>
    <defs>
      <filter id="mvp_f0" x="690" y="-32" width="1740" height="1740" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="135" result="effect1_foregroundBlur" />
      </filter>
      <filter id="mvp_f1" x="1133" y="-284" width="1340" height="1340" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="135" result="effect1_foregroundBlur" />
      </filter>
      <linearGradient id="mvp_grad0" x1="1920" y1="-26.6364" x2="-36.6359" y2="791.368" gradientUnits="userSpaceOnUse">
        <stop stopColor="#02102C" />
        <stop offset="1" stopColor="#112244" />
      </linearGradient>
      <linearGradient id="mvp_grad1" x1="1279.7" y1="1355" x2="1611.58" y2="-237.881" gradientUnits="userSpaceOnUse">
        <stop stopColor="#112244" />
        <stop offset="0.03" stopColor="#112244" />
        <stop offset="1" stopColor="#112244" stopOpacity="0" />
      </linearGradient>
      <clipPath id="mvp_clip0">
        <rect width="1920" height="879" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const ClutchStars = () => (
  <svg width="187" height="48" viewBox="0 0 187 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={s.clutchSvg}>
    <text x="0" y="16" fill="white" fontSize="14" fontFamily="Inter Tight, sans-serif">Clutch.io</text>
    {[7, 25.5, 43.8, 62, 80.2].map((cx, i) => (
      <path key={i} d={`M${cx}.33 37.74l3.04 1.93c.39.25.87-.12.76-.57l-.88-3.46c-.02-.1-.02-.2.01-.29.03-.09.09-.17.16-.24l2.73-2.27c.36-.3.18-.9-.28-.93l-3.56-.23c-.1-.01-.19-.04-.27-.1-.08-.06-.14-.14-.17-.23l-1.33-3.34a.39.39 0 00-.36-.25.39.39 0 00-.36.25l-1.33 3.34c-.03.09-.09.17-.17.23-.08.06-.17.09-.27.1l-3.56.23c-.46.03-.64.63-.28.93l2.73 2.27c.08.06.13.15.16.24.03.09.04.19.02.29l-.81 3.21c-.14.54.43.98.9.68l2.83-1.79c.08-.05.17-.08.27-.08.1 0 .19.03.27.08z`}
        fill="#FFA000" stroke="#FFA000" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
    ))}
    <text x="100" y="40" fill="#FFA000" fontSize="18" fontFamily="Inter Tight, sans-serif" fontWeight="600">5.0</text>
  </svg>
);

export default function MvpHero() {
  return (
    <section className={`${s.hero} ${s.ptLarge} ${s.pbLarge}`}>
      <HeroBg />
      <div className={`${s.container} ${s.heroInner}`}>
        <nav className={s.heroBreadcrumbs} aria-label="Breadcrumb">
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <span>MVP development</span>
        </nav>
        <h1 className={s.heroTitle}>
          <span className={s.accent}>MVP </span>software development for AI products &amp; core business
        </h1>
        <p className={s.heroDescription}>
          Build the first release on the architecture you can keep. Nexterse LLC helps SaaS teams, enterprise product groups, and founders launch MVPs that test demand, prove technical fit, and set up the next phase without demo-only shortcuts.
        </p>
        <div className={s.heroPoints}>
          <div className={s.heroPoint}>AI and IoT MVPs</div>
          <div className={s.heroPoint}>AI copilots, search, document workflows, and internal tools</div>
          <div className={s.heroPoint}>Dual-engine engineering</div>
        </div>
        <div className={s.heroButtons}>
          <a href="/contact" className={s.btnPrimary}>Free quote</a>
          <ClutchStars />
        </div>
      </div>
    </section>
  );
}
