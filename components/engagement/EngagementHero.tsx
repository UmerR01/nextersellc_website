import Link from "next/link";
import styles from "./EngagementHero.module.css";

export default function EngagementHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bgWrapper}>
        <div className={styles.desktopImage}>
          <svg preserveAspectRatio="xMidYMid slice" className={styles.bgSvg} width="1920" height="816" viewBox="0 0 1920 816" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#eng_clip0)">
              <rect width="1920" height="816" fill="url(#eng_paint0)" />
              <g opacity="0.08">
                <path fillRule="evenodd" clipRule="evenodd" d="M-845.628 857.916L-688.82 11.95L-883.335 -19L-1166 857.916L-845.628 857.916ZM-78.6641 465.883L-10.577 857.916L289.163 857.916L150.925 490.643L-78.6641 465.883ZM-588.25 857.916L-466.518 30.5199L412.996 141.94L825.646 857.916L544.475 857.916L309.265 350.336L-305.016 296.69L-267.877 857.916L-588.25 857.916Z" fill="#FF415C" />
              </g>
              <g opacity="0.08">
                <path fillRule="evenodd" clipRule="evenodd" d="M874.988 -647.181L1388.56 -730.869L1655.22 -246.923L1928.98 -316.113L1484.69 -947.631L656.166 -844.49L599.943 19.784L892.548 -54.1681L874.988 -647.181ZM1254.33 -550.397L1420.26 -187.351L1127.66 -113.399L1098.77 -529.125L1254.33 -550.397ZM1687.02 -978.365L1877.47 -996.427L2419.15 -439.644L2162.35 -374.741L1687.02 -978.365Z" fill="#FF415C" />
                <path fillRule="evenodd" clipRule="evenodd" d="M892.667 -53.7166L1231.16 682.73L1060.65 755.898L600.063 20.2355L892.667 -53.7166ZM1683.65 127.297L1655.34 -246.473L1929.1 -315.663L1887.62 51.6869L1683.65 127.297ZM1127.73 -113.128L1429.9 614.455L2207.47 309.673L2419.08 -439.5L2162.28 -374.597L2064.62 143.284L1515.97 334.075L1420.34 -187.08L1127.73 -113.128Z" fill="#FF415C" />
              </g>
              <g filter="url(#eng_filter0)">
                <ellipse cx="960" cy="458" rx="590" ry="346" fill="url(#eng_paint1)" />
              </g>
              <g opacity="0.26" filter="url(#eng_filter1)">
                <circle cx="2010" cy="205" r="460" fill="#FF415C" />
              </g>
              <g opacity="0.26" filter="url(#eng_filter2)">
                <circle cx="19" cy="804" r="460" fill="#FF415C" />
              </g>
            </g>
            <defs>
              <filter id="eng_filter0" x="130" y="-128" width="1660" height="1172" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="120" result="effect1_foregroundBlur" />
              </filter>
              <filter id="eng_filter1" x="1290" y="-515" width="1440" height="1440" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="130" result="effect1_foregroundBlur" />
              </filter>
              <filter id="eng_filter2" x="-701" y="84" width="1440" height="1440" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="130" result="effect1_foregroundBlur" />
              </filter>
              <linearGradient id="eng_paint0" x1="1920" y1="-24.7273" x2="8.96088" y2="835.898" gradientUnits="userSpaceOnUse">
                <stop stopColor="#02102C" />
                <stop offset="1" stopColor="#112244" />
              </linearGradient>
              <linearGradient id="eng_paint1" x1="1550" y1="91.0302" x2="273.299" y2="507.706" gradientUnits="userSpaceOnUse">
                <stop stopColor="#02102C" />
                <stop offset="1" stopColor="#112244" />
              </linearGradient>
              <clipPath id="eng_clip0">
                <rect width="1920" height="816" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className={styles.mobileImage}>
          <svg preserveAspectRatio="xMidYMid slice" className={styles.bgSvg} width="375" height="555" viewBox="0 0 375 555" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#eng_mob_clip0)">
              <rect width="375" height="555" fill="url(#eng_mob_paint0)" />
              <g opacity="0.04">
                <path fillRule="evenodd" clipRule="evenodd" d="M-277.143 -354.726L-253.415 -79.5667L30.2935 -5.28967V144.58L-352.454 -1.91046L-407.133 -441.667L30.2935 -583V-422.814L-277.143 -354.726ZM-178.004 -172.109L30.3923 -133.939V-294.125L-187.289 -254.923L-178.004 -172.109ZM-341.957 106.197L-326.482 206.549L30.4743 412.874V272.289L-341.957 106.197Z" fill="white" />
                <path fillRule="evenodd" clipRule="evenodd" d="M30.5391 -422.814L453.522 -344.41L468.997 -441.667L30.5391 -583V-422.814ZM226.556 -39.3311L30.5391 -5.28754V144.583L214.176 75.4636L226.556 -39.3311ZM30.5391 -294.125L444.237 -233.259L388.527 206.498L30.5391 412.823V272.238L284.329 154.632L311.152 -152.508L30.5391 -133.939V-294.125Z" fill="white" />
              </g>
              <g opacity="0.32" filter="url(#eng_mob_f0)">
                <ellipse cx="61" cy="-88" rx="311" ry="312" transform="rotate(90 61 -88)" fill="#FF415C" />
              </g>
              <g opacity="0.32" filter="url(#eng_mob_f1)">
                <ellipse cx="387" cy="744" rx="311" ry="312" transform="rotate(90 387 744)" fill="#FF415C" />
              </g>
              <g filter="url(#eng_mob_f2)">
                <ellipse cx="145" cy="270.5" rx="212.5" ry="145" transform="rotate(90 145 270.5)" fill="url(#eng_mob_paint1)" />
              </g>
            </g>
            <defs>
              <filter id="eng_mob_f0" x="-551" y="-699" width="1224" height="1222" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur" />
              </filter>
              <filter id="eng_mob_f1" x="-225" y="133" width="1224" height="1222" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur" />
              </filter>
              <filter id="eng_mob_f2" x="-150" y="-92" width="590" height="725" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="75" result="effect1_foregroundBlur" />
              </filter>
              <linearGradient id="eng_mob_paint0" x1="375" y1="-16.8182" x2="-66.5638" y2="40.2856" gradientUnits="userSpaceOnUse">
                <stop stopColor="#02102C" />
                <stop offset="1" stopColor="#112244" />
              </linearGradient>
              <linearGradient id="eng_mob_paint1" x1="357.5" y1="116.712" x2="-114.197" y2="249.02" gradientUnits="userSpaceOnUse">
                <stop stopColor="#02102C" />
                <stop offset="1" stopColor="#112244" />
              </linearGradient>
              <clipPath id="eng_mob_clip0">
                <rect width="375" height="555" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>

      <div className={styles.heroWrapper}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.breadcrumbs}>
              <Link href="/">Home</Link>
              <span>Engagement models &amp; process</span>
            </div>
            <h1 className={styles.title}>Flexible and client-oriented engagement models</h1>
            <div className={styles.description}>
              <p>Our engagement models are tailored to fit the diverse and dynamic needs of American businesses, offering flexibility, transparency, and efficiency, whether you&apos;re looking for a Fixed Price, Time &amp; Material, or a Dedicated Team approach.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
