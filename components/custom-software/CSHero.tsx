import Link from "next/link";
import styles from "./CSHero.module.css";
import AboutNavHeroBackground from "@/components/AboutNavHeroBackground";

export default function CSHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bgWrapper}>
        <div className={styles.desktopImage}>
          <svg
            preserveAspectRatio="xMidYMid slice"
            className={styles.bgSvg}
            width="1920"
            height="843"
            viewBox="0 0 1920 843"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#cs_clip0)">
              <rect width="1920" height="843" fill="url(#cs_paint0_linear)" />
              <g filter="url(#cs_filter0)">
                <circle cx="1460" cy="712" r="460" fill="#3CC4E5" fillOpacity="0.64" />
              </g>
              <g filter="url(#cs_filter1)">
                <circle cx="1798.5" cy="443.5" r="314.5" fill="#3CC4E5" fillOpacity="0.5" />
              </g>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                opacity="0.16"
                d="M2123.93 405.428L1625.04 448.449L1490.37 962.835L1218.64 962.835L1484.24 268.882L2281.56 169.746L2537.8 962.836L2247.37 962.835L2123.93 405.428ZM1792.82 585.171L1723.62 963.011L2014.05 963.011L1942.97 568.337L1792.82 585.171ZM1288.23 287.913L1106.28 315.97L732.2 963.16L987.092 963.16L1288.23 287.913Z"
                fill="url(#cs_paint1_linear)"
              />
            </g>
            <defs>
              <filter
                id="cs_filter0"
                x="865"
                y="117"
                width="1190"
                height="1190"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="67.5" result="effect1_foregroundBlur" />
              </filter>
              <filter
                id="cs_filter1"
                x="1348"
                y="129"
                width="901"
                height="901"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="68" result="effect1_foregroundBlur" />
              </filter>
              <linearGradient
                id="cs_paint0_linear"
                x1="1920"
                y1="-25.5455"
                x2="8.96"
                y2="861.4"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#02102C" />
                <stop offset="1" stopColor="#112244" />
              </linearGradient>
              <linearGradient
                id="cs_paint1_linear"
                x1="1625.04"
                y1="169.746"
                x2="1625.04"
                y2="963.16"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#112244" />
                <stop offset="1" stopColor="#112244" stopOpacity="0" />
              </linearGradient>
              <clipPath id="cs_clip0">
                <rect width="1920" height="843" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className={styles.mobileImage}>
          <svg
            preserveAspectRatio="xMidYMid slice"
            className={styles.bgSvg}
            width="375"
            height="1512"
            viewBox="0 0 375 1512"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#cs_mob_clip0)">
              <rect width="375" height="1512" fill="url(#cs_mob_paint0)" />
              <g filter="url(#cs_mob_filter0)">
                <circle cx="46" cy="819" r="150" fill="#3CC4E5" fillOpacity="0.48" />
              </g>
              <g filter="url(#cs_mob_filter1)">
                <circle cx="329" cy="1386" r="150" fill="#3CC4E5" fillOpacity="0.64" />
              </g>
            </g>
            <defs>
              <filter
                id="cs_mob_filter0"
                x="-329"
                y="444"
                width="750"
                height="750"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="62.5" result="effect1_foregroundBlur" />
              </filter>
              <filter
                id="cs_mob_filter1"
                x="-46"
                y="1011"
                width="750"
                height="750"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="62.5" result="effect1_foregroundBlur" />
              </filter>
              <linearGradient
                id="cs_mob_paint0"
                x1="375"
                y1="-45.8182"
                x2="-66.56"
                y2="40.29"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#02102C" />
                <stop offset="1" stopColor="#112244" />
              </linearGradient>
              <clipPath id="cs_mob_clip0">
                <rect width="375" height="1512" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>

      <AboutNavHeroBackground />

      <div className={styles.heroWrapper}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.breadcrumbs}>
              <Link href="/">Home</Link>
              <Link href="/services">Services</Link>
              <span>Software Product Development Company</span>
            </div>

            <h1 className={styles.title}>Software product development company</h1>

            <p className={styles.description}>
              Nexterse LLC delivers custom software product development for web, mobile, IoT,
              enterprise, and AI builds. Two lifecycles sit behind our work: a traditional SDLC for
              standard projects, and a proprietary ADLC for AI-led ones.
            </p>

            <div className={styles.points}>
              <div className={styles.pointsCol}>
                <p>ISO 27001 and ISO 9001 certified</p>
                <p>HIPAA enabling</p>
              </div>
              <div className={styles.pointsCol}>
                <p>PCI aligned</p>
                <p>GDPR aligned</p>
              </div>
              <div className={styles.pointsCol}>
                <p>OWASP coding-standards adherence</p>
              </div>
            </div>

            <div className={styles.ctaRow}>
              <a href="#get-modal-popup" className={styles.ctaButton}>
                Get in Touch
              </a>
              <div className={styles.ratings}>
                <p className={styles.ratingsLabel}>Clients rate our services</p>
                <div className={styles.ratingsBadge}>
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#FFAB00" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                  <span className={styles.ratingsScore}>5,0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
