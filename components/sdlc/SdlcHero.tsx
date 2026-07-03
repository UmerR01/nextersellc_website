import styles from "./SdlcHero.module.css";
import AboutNavHeroBackground from "@/components/AboutNavHeroBackground";

export default function SdlcHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bgWrapper} aria-hidden>
        <div className={styles.desktopBg}>
          <svg
            preserveAspectRatio="xMidYMid slice"
            className={styles.bgSvg}
            width="1920"
            height="739"
            viewBox="0 0 1920 739"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#sdlc-hero-clip0)">
              <rect width="1920" height="739" fill="url(#sdlc-hero-grad0)" />
              <g opacity="0.08">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M-845.628 780.916L-688.82 -65.05L-883.335 -96L-1166 780.916L-845.628 780.916ZM-78.6641 388.883L-10.577 780.916L289.163 780.916L150.925 413.643L-78.6641 388.883ZM-588.25 780.916L-466.518 -46.4801L412.996 64.9399L825.646 780.916L544.475 780.916L309.265 273.336L-305.016 219.69L-267.877 780.916L-588.25 780.916Z"
                  fill="#3CC4E5"
                />
              </g>
              <g opacity="0.08">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M874.988 -647.181L1388.56 -730.869L1655.22 -246.923L1928.98 -316.113L1484.69 -947.631L656.166 -844.49L599.943 19.784L892.548 -54.1681L874.988 -647.181ZM1254.33 -550.397L1420.26 -187.351L1127.66 -113.399L1098.77 -529.125L1254.33 -550.397ZM1687.02 -978.365L1877.47 -996.427L2419.15 -439.644L2162.35 -374.741L1687.02 -978.365Z"
                  fill="#3CC4E5"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M892.667 -53.7166L1231.16 682.73L1060.65 755.898L600.063 20.2355L892.667 -53.7166ZM1683.65 127.297L1655.34 -246.473L1929.1 -315.663L1887.62 51.6869L1683.65 127.297ZM1127.73 -113.128L1429.9 614.455L2207.47 309.673L2419.08 -439.5L2162.28 -374.597L2064.62 143.284L1515.97 334.075L1420.34 -187.08L1127.73 -113.128Z"
                  fill="#3CC4E5"
                />
              </g>
              <g filter="url(#sdlc-hero-f0)">
                <ellipse cx="960" cy="419.5" rx="590" ry="307.5" fill="url(#sdlc-hero-grad1)" />
              </g>
              <g opacity="0.26" filter="url(#sdlc-hero-f1)">
                <circle cx="2010" cy="205" r="460" fill="#3CC4E5" />
              </g>
              <g opacity="0.26" filter="url(#sdlc-hero-f2)">
                <circle cx="19" cy="727" r="460" fill="#3CC4E5" />
              </g>
            </g>
            <defs>
              <filter id="sdlc-hero-f0" x="130" y="-128" width="1660" height="1095" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="120" result="effect1_foregroundBlur" />
              </filter>
              <filter id="sdlc-hero-f1" x="1290" y="-515" width="1440" height="1440" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="130" result="effect1_foregroundBlur" />
              </filter>
              <filter id="sdlc-hero-f2" x="-701" y="7" width="1440" height="1440" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="130" result="effect1_foregroundBlur" />
              </filter>
              <linearGradient id="sdlc-hero-grad0" x1="1920" y1="-22.394" x2="77.0893" y2="894.026" gradientUnits="userSpaceOnUse">
                <stop stopColor="#02102C" />
                <stop offset="1" stopColor="#112244" />
              </linearGradient>
              <linearGradient id="sdlc-hero-grad1" x1="1550" y1="93.3636" x2="305.184" y2="550.5" gradientUnits="userSpaceOnUse">
                <stop stopColor="#02102C" />
                <stop offset="1" stopColor="#112244" />
              </linearGradient>
              <clipPath id="sdlc-hero-clip0">
                <rect width="1920" height="739" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className={styles.mobileBg}>
          <svg
            preserveAspectRatio="xMidYMid slice"
            className={styles.bgSvg}
            width="375"
            height="507"
            viewBox="0 0 375 507"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#sdlc-hero-clip-mob)">
              <rect width="375" height="507" fill="url(#sdlc-hero-grad0-mob)" />
              <g opacity="0.32" filter="url(#sdlc-hero-f0-mob)">
                <ellipse cx="61" cy="-88" rx="311" ry="312" transform="rotate(90 61 -88)" fill="#3CC4E5" />
              </g>
              <g opacity="0.32" filter="url(#sdlc-hero-f1-mob)">
                <ellipse cx="387" cy="696" rx="311" ry="312" transform="rotate(90 387 696)" fill="#3CC4E5" />
              </g>
              <g filter="url(#sdlc-hero-f2-mob)">
                <ellipse cx="145" cy="246.5" rx="188.5" ry="145" transform="rotate(90 145 246.5)" fill="url(#sdlc-hero-grad1-mob)" />
              </g>
            </g>
            <defs>
              <filter id="sdlc-hero-f0-mob" x="-551" y="-699" width="1224" height="1222" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur" />
              </filter>
              <filter id="sdlc-hero-f1-mob" x="-225" y="85" width="1224" height="1222" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur" />
              </filter>
              <filter id="sdlc-hero-f2-mob" x="-150" y="-92" width="590" height="677" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="75" result="effect1_foregroundBlur" />
              </filter>
              <linearGradient id="sdlc-hero-grad0-mob" x1="375" y1="-15.3637" x2="-65.1281" y2="46.9432" gradientUnits="userSpaceOnUse">
                <stop stopColor="#02102C" />
                <stop offset="1" stopColor="#112244" />
              </linearGradient>
              <linearGradient id="sdlc-hero-grad1-mob" x1="333.5" y1="92.7121" x2="-91.5298" y2="198.466" gradientUnits="userSpaceOnUse">
                <stop stopColor="#02102C" />
                <stop offset="1" stopColor="#112244" />
              </linearGradient>
              <clipPath id="sdlc-hero-clip-mob">
                <rect width="375" height="507" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>

      <AboutNavHeroBackground />
      <div className={styles.heroWrapper}>
        <div className="container">
          <div className={styles.wrapper}>
            <div className={styles.breadcrumbs}>
              <a href="/">Home</a>
              <span className={styles.breadcrumbSep}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path stroke="rgba(255,255,255,0.5)" strokeLinecap="square" d="m6 4 4 4-4 4" />
                </svg>
              </span>
              <span>Software Development Lifecycle (SDLC)</span>
            </div>

            <h1 className={styles.title}>
              Software development <span className={styles.accent}>lifecycle</span>
            </h1>

            <div className={styles.description}>
              <p>
                Nexterse will take you through every stage of the software development life cycle
                (SDLC) – from a business analysis stage through UX/UI and application development
                to deployment and ongoing support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
