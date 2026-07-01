import Link from "next/link";
import styles from "./TestimonialsHero.module.css";

export default function TestimonialsHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bg}>
        <div className={styles.desktopImage}>
          <svg
            preserveAspectRatio="xMidYMid slice"
            className={styles.bgSvg}
            width="1920"
            height="720"
            viewBox="0 0 1920 720"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#tClip)">
              <rect width="1920" height="720" fill="url(#tBg)" />
              <g opacity="0.08">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M-845.628 761.916L-688.82 -84.0499L-883.335 -115L-1166 761.916L-845.628 761.916ZM-78.6641 369.883L-10.577 761.916L289.163 761.916L150.925 394.643L-78.6641 369.883ZM-588.25 761.916L-466.518 -65.4801L412.996 45.9399L825.646 761.916L544.475 761.916L309.265 254.336L-305.016 200.69L-267.877 761.916L-588.25 761.916Z"
                  fill="#FF415C"
                />
              </g>
              <g opacity="0.08">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M874.988 -647.181L1388.56 -730.869L1655.22 -246.923L1928.98 -316.113L1484.69 -947.631L656.166 -844.49L599.943 19.784L892.548 -54.1681L874.988 -647.181ZM1254.33 -550.397L1420.26 -187.351L1127.66 -113.399L1098.77 -529.125L1254.33 -550.397ZM1687.02 -978.365L1877.47 -996.427L2419.15 -439.644L2162.35 -374.741L1687.02 -978.365Z"
                  fill="#FF415C"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M892.667 -53.7166L1231.16 682.73L1060.65 755.898L600.063 20.2355L892.667 -53.7166ZM1683.65 127.297L1655.34 -246.473L1929.1 -315.663L1887.62 51.6869L1683.65 127.297ZM1127.73 -113.128L1429.9 614.455L2207.47 309.673L2419.08 -439.5L2162.28 -374.597L2064.62 143.284L1515.97 334.075L1420.34 -187.08L1127.73 -113.128Z"
                  fill="#FF415C"
                />
              </g>
              <g filter="url(#tBlur1)">
                <ellipse cx="960" cy="410" rx="590" ry="298" fill="url(#tEllipse)" />
              </g>
              <g opacity="0.26" filter="url(#tBlur2)">
                <circle cx="2010" cy="205" r="460" fill="#FF415C" />
              </g>
              <g opacity="0.26" filter="url(#tBlur3)">
                <circle cx="19" cy="708" r="460" fill="#FF415C" />
              </g>
            </g>
            <defs>
              <filter id="tBlur1" x="130" y="-128" width="1660" height="1076" filterUnits="userSpaceOnUse">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="120" result="effect1" />
              </filter>
              <filter id="tBlur2" x="1290" y="-515" width="1440" height="1440" filterUnits="userSpaceOnUse">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="130" result="effect1" />
              </filter>
              <filter id="tBlur3" x="-701" y="-12" width="1440" height="1440" filterUnits="userSpaceOnUse">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="130" result="effect1" />
              </filter>
              <linearGradient id="tBg" x1="1920" y1="-21.8182" x2="96.4218" y2="908.918" gradientUnits="userSpaceOnUse">
                <stop stopColor="#02102C" />
                <stop offset="1" stopColor="#112244" />
              </linearGradient>
              <linearGradient id="tEllipse" x1="1550" y1="93.9393" x2="314.692" y2="562.046" gradientUnits="userSpaceOnUse">
                <stop stopColor="#02102C" />
                <stop offset="1" stopColor="#112244" />
              </linearGradient>
              <clipPath id="tClip">
                <rect width="1920" height="720" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className={styles.mobileImage}>
          <svg
            preserveAspectRatio="xMidYMid slice"
            width="375"
            height="409"
            viewBox="0 0 375 409"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "100%", height: "100%" }}
          >
            <g clipPath="url(#tMClip)">
              <rect width="375" height="409" fill="url(#tMBg)" />
              <g opacity="0.32" filter="url(#tMBlur1)">
                <ellipse cx="61" cy="-88" rx="311" ry="312" transform="rotate(90 61 -88)" fill="#FF415C" />
              </g>
              <g opacity="0.32" filter="url(#tMBlur2)">
                <ellipse cx="387" cy="598" rx="311" ry="312" transform="rotate(90 387 598)" fill="#FF415C" />
              </g>
              <g filter="url(#tMBlur3)">
                <ellipse cx="145" cy="233.5" rx="175.5" ry="145" transform="rotate(90 145 233.5)" fill="url(#tMEllipse)" />
              </g>
            </g>
            <defs>
              <filter id="tMBlur1" x="-551" y="-699" width="1224" height="1222" filterUnits="userSpaceOnUse">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="150" result="effect1" />
              </filter>
              <filter id="tMBlur2" x="-225" y="-13" width="1224" height="1222" filterUnits="userSpaceOnUse">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="150" result="effect1" />
              </filter>
              <filter id="tMBlur3" x="-150" y="-92" width="590" height="651" filterUnits="userSpaceOnUse">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="75" result="effect1" />
              </filter>
              <linearGradient id="tMBg" x1="375" y1="-12.394" x2="-60.5362" y2="64.0363" gradientUnits="userSpaceOnUse">
                <stop stopColor="#02102C" />
                <stop offset="1" stopColor="#112244" />
              </linearGradient>
              <linearGradient id="tMEllipse" x1="320.5" y1="79.7121" x2="-78.3138" y2="172.1" gradientUnits="userSpaceOnUse">
                <stop stopColor="#02102C" />
                <stop offset="1" stopColor="#112244" />
              </linearGradient>
              <clipPath id="tMClip">
                <rect width="375" height="409" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>

      <div className={styles.heroWrapper}>
        <div className={styles.container}>
          <div className={styles.inner}>
            <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>Testimonials</span>
            </nav>

            <h1 className={styles.title}>
              You shouldn&apos;t believe our words.<br />
              See what our <span className={styles.titleBlue}>Clients</span> say.
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
