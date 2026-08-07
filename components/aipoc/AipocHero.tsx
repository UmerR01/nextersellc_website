import s from "./AipocHero.module.css";

const HERO_POINTS = [
  "Working prototype with a narrow, measurable success metric",
  "Security blueprint for deployment in a controlled environment",
  "Roadmap to production with scope and implementation phases",
];

const HeroBg = () => (
  <svg
    preserveAspectRatio="xMidYMid slice"
    className={s.heroBgSvg}
    width="1920" height="703" viewBox="0 0 1920 703"
    fill="none" xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <rect width="1920" height="703" fill="url(#aip_paint0)" />
    <g clipPath="url(#aip_clip0)">
      <rect width="1920" height="703" fill="url(#aip_paint0)" />
      <g opacity="0.08">
        <path fillRule="evenodd" clipRule="evenodd" d="M-845.628 744.916L-688.82 -101.049L-883.335 -131.999L-1166 744.916L-845.628 744.916ZM-78.6641 352.883L-10.577 744.917L289.163 744.916L150.925 377.643L-78.6641 352.883ZM-588.25 744.917L-466.518 -82.4796L412.996 28.9404L825.646 744.916L544.475 744.916L309.265 237.337L-305.016 183.69L-267.877 744.916L-588.25 744.917Z" fill="#3CC4E5" />
      </g>
      <g opacity="0.08">
        <path fillRule="evenodd" clipRule="evenodd" d="M874.988 -647.181L1388.56 -730.869L1655.22 -246.923L1928.98 -316.113L1484.69 -947.631L656.166 -844.49L599.943 19.784L892.548 -54.1681L874.988 -647.181ZM1254.33 -550.397L1420.26 -187.351L1127.66 -113.399L1098.77 -529.125L1254.33 -550.397ZM1687.01 -978.365L1877.46 -996.427L2419.14 -439.644L2162.34 -374.741L1687.01 -978.365Z" fill="#3CC4E5" />
        <path fillRule="evenodd" clipRule="evenodd" d="M892.663 -53.7166L1231.16 682.73L1060.64 755.898L600.059 20.2355L892.663 -53.7166ZM1683.65 127.297L1655.34 -246.473L1929.1 -315.663L1887.62 51.6869L1683.65 127.297ZM1127.73 -113.128L1429.9 614.455L2207.46 309.673L2419.08 -439.5L2162.28 -374.597L2064.62 143.284L1515.96 334.075L1420.34 -187.08L1127.73 -113.128Z" fill="#3CC4E5" />
      </g>
      <g filter="url(#aip_f0)">
        <ellipse cx="960" cy="401.5" rx="590" ry="289.5" fill="url(#aip_paint1)" />
      </g>
      <g opacity="0.32" filter="url(#aip_f1)">
        <circle cx="2010" cy="205" r="460" fill="#3CC4E5" />
      </g>
      <g opacity="0.32" filter="url(#aip_f2)">
        <circle cx="19" cy="691" r="460" fill="#3CC4E5" />
      </g>
    </g>
    <defs>
      <filter id="aip_f0" x="70" y="-188" width="1780" height="1179" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="135" result="effect1_foregroundBlur" />
      </filter>
      <filter id="aip_f1" x="1050" y="-755" width="1920" height="1920" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="136" result="effect1_foregroundBlur" />
      </filter>
      <filter id="aip_f2" x="-941" y="-269" width="1920" height="1920" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="136" result="effect1_foregroundBlur" />
      </filter>
      <linearGradient id="aip_paint0" x1="1920" y1="-21.3031" x2="114.684" y2="922.394" gradientUnits="userSpaceOnUse">
        <stop stopColor="#02102C" />
        <stop offset="1" stopColor="#112244" />
      </linearGradient>
      <linearGradient id="aip_paint1" x1="1550" y1="94.4545" x2="323.866" y2="572.726" gradientUnits="userSpaceOnUse">
        <stop stopColor="#02102C" />
        <stop offset="1" stopColor="#112244" />
      </linearGradient>
      <clipPath id="aip_clip0">
        <rect width="1920" height="703" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default function AipocHero() {
  return (
    <section className={s.hero}>
      <HeroBg />
      <div className={s.heroInner}>
        <nav className={s.heroBreadcrumbs} aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span className={s.breadcrumbSep}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path stroke="rgba(255,255,255,0.5)" strokeLinecap="square" d="m6 4 4 4-4 4" />
            </svg>
          </span>
          <a href="/services">Services</a>
          <span className={s.breadcrumbSep}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path stroke="rgba(255,255,255,0.5)" strokeLinecap="square" d="m6 4 4 4-4 4" />
            </svg>
          </span>
          <span>Proof of Concept development</span>
        </nav>
        <h1 className={s.heroTitle}>
          <span className={s.accent}>AI PoC</span> development services that prove ROI in 4 weeks
        </h1>
        <p className={s.heroDescription}>
          Nexterse LLC builds fixed-scope AI proofs of concept (PoCs). Each one gives you a working sandbox prototype, a cost-per-query model, a private deployment blueprint, and a roadmap for the next build. We set explicit success metrics, pressure-test the guardrails, and model what the system will cost to run in production.
        </p>
        <ul className={s.heroPoints}>
          {HERO_POINTS.map((point) => (
            <li key={point} className={s.heroPoint}>{point}</li>
          ))}
        </ul>
        <div className={s.heroButtons}>
          <a href="#get-modal-popup" className={`btn btn-accent ${s.btnPrimary}`}>Request a PoC blueprint</a>
          <div className={s.serviceRating} aria-label="Clients rate our services 5.0 out of 5">
            <p className={s.ratingLabel}>Clients rate our services</p>
            <div className={s.ratingScore}>
              <span className={s.ratingStars} aria-hidden>★★★★★</span>
              <strong>5,0</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
