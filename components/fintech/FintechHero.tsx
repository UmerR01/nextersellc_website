import s from "./FintechHero.module.css";

const HeroBg = () => (
  <svg
    preserveAspectRatio="xMidYMid slice"
    className={s.heroBgSvg}
    width="1920" height="879" viewBox="0 0 1920 879"
    fill="none" xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <g clipPath="url(#fin_clip0)">
      <rect width="1920" height="879" fill="url(#fin_grad0)" />
      <g opacity="0.42" filter="url(#fin_f0)">
        <circle cx="1560" cy="838" r="600" fill="#225BC5" />
      </g>
      <g opacity="0.3" filter="url(#fin_f1)">
        <circle cx="1803" cy="386" r="400" fill="#3CC4E5" />
      </g>
      <g opacity="0.14">
        <path fillRule="evenodd" clipRule="evenodd"
          d="M2123.93 473.428L1625.04 516.449L1490.37 1030.83L1218.64 1030.83L1484.24 336.882L2281.56 237.746L2537.8 1030.84L2247.37 1030.84L2123.93 473.428ZM1792.82 653.171L1723.62 1031.01L2014.05 1031.01L1942.97 636.337L1792.82 653.171ZM1288.23 355.913L1106.28 383.97L732.2 1031.16L987.092 1031.16L1288.23 355.913Z"
          fill="url(#fin_grad1)" />
      </g>
    </g>
    <defs>
      <filter id="fin_f0" x="690" y="-32" width="1740" height="1740" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="135" result="effect1_foregroundBlur" />
      </filter>
      <filter id="fin_f1" x="1133" y="-284" width="1340" height="1340" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="135" result="effect1_foregroundBlur" />
      </filter>
      <linearGradient id="fin_grad0" x1="1920" y1="-26.6364" x2="-36.6359" y2="791.368" gradientUnits="userSpaceOnUse">
        <stop stopColor="#02102C" />
        <stop offset="1" stopColor="#112244" />
      </linearGradient>
      <linearGradient id="fin_grad1" x1="1279.7" y1="1355" x2="1611.58" y2="-237.881" gradientUnits="userSpaceOnUse">
        <stop stopColor="#112244" />
        <stop offset="0.03" stopColor="#112244" />
        <stop offset="1" stopColor="#112244" stopOpacity="0" />
      </linearGradient>
      <clipPath id="fin_clip0">
        <rect width="1920" height="879" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const ServiceRating = () => (
  <div className={s.serviceRating} aria-label="Clients rate our services five out of five">
    <span className={s.ratingLabel}>Clients rate our services</span>
    <span className={s.ratingScore}>
      <span className={s.ratingStars} aria-hidden="true">★★★★★</span>
      <strong>5.0</strong>
    </span>
  </div>
);

export default function FintechHero() {
  return (
    <section className={s.hero}>
      <HeroBg />
      <div className={s.heroInner}>
        <nav className={s.heroBreadcrumbs} aria-label="Breadcrumb">
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <span>Financial software development</span>
        </nav>
        <h1 className={s.heroTitle}>
          Enterprise AI <span className={s.accent}>fintech</span> development &amp; infrastructure
        </h1>
        <p className={s.heroDescription}>
          Dual-engine engineering for institutional financial systems. Nexterse LLC provides custom fintech software development and builds financial platforms where deterministic transaction systems and AI-driven decision models operate as one controlled architecture.
        </p>
        <div className={s.heroPoints}>
          <div className={s.heroPoint}>Built for PCI-DSS, SOC2, and GDPR environments</div>
          <div className={s.heroPoint}>Quantitative machine learning models</div>
          <div className={s.heroPoint}>AI-driven KYC/AML pipelines</div>
        </div>
        <div className={s.heroButtons}>
          <a href="#get-modal-popup" className={`btn btn-accent ${s.btnPrimary}`}>Get a free quote</a>
          <ServiceRating />
        </div>
      </div>
    </section>
  );
}
