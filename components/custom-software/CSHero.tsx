import Link from "next/link";
import styles from "./CSHero.module.css";
import AboutNavHeroBackground from "@/components/AboutNavHeroBackground";

export default function CSHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bgWrapper}>
        <div className={styles.desktopImage}>
          <svg preserveAspectRatio="xMidYMid slice" className={styles.bgSvg} width="1920" height="703" viewBox="0 0 1920 703" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="1920" height="703" fill="url(#cs_d_paint0)" />
            <g clipPath="url(#cs_d_clip0)">
              <rect width="1920" height="703" fill="url(#cs_d_paint0)" />
              <g opacity="0.08">
                <path fillRule="evenodd" clipRule="evenodd" d="M-845.628 744.916L-688.82 -101.049L-883.335 -131.999L-1166 744.916L-845.628 744.916ZM-78.6641 352.883L-10.577 744.917L289.163 744.916L150.925 377.643L-78.6641 352.883ZM-588.25 744.917L-466.518 -82.4796L412.996 28.9404L825.646 744.916L544.475 744.916L309.265 237.337L-305.016 183.69L-267.877 744.916L-588.25 744.917Z" fill="#3CC4E5" />
              </g>
              <g opacity="0.08">
                <path fillRule="evenodd" clipRule="evenodd" d="M874.988 -647.181L1388.56 -730.869L1655.22 -246.923L1928.98 -316.113L1484.69 -947.631L656.166 -844.49L599.943 19.784L892.548 -54.1681L874.988 -647.181ZM1254.33 -550.397L1420.26 -187.351L1127.66 -113.399L1098.77 -529.125L1254.33 -550.397ZM1687.01 -978.365L1877.46 -996.427L2419.14 -439.644L2162.34 -374.741L1687.01 -978.365Z" fill="#3CC4E5" />
                <path fillRule="evenodd" clipRule="evenodd" d="M892.663 -53.7166L1231.16 682.73L1060.64 755.898L600.059 20.2355L892.663 -53.7166ZM1683.65 127.297L1655.34 -246.473L1929.1 -315.663L1887.62 51.6869L1683.65 127.297ZM1127.73 -113.128L1429.9 614.455L2207.46 309.673L2419.08 -439.5L2162.28 -374.597L2064.62 143.284L1515.96 334.075L1420.34 -187.08L1127.73 -113.128Z" fill="#3CC4E5" />
              </g>
              <g filter="url(#cs_d_f0)">
                <ellipse cx="960" cy="401.5" rx="590" ry="289.5" fill="url(#cs_d_paint1)" />
              </g>
              <g opacity="0.32" filter="url(#cs_d_f1)">
                <circle cx="2010" cy="205" r="460" fill="#3CC4E5" />
              </g>
              <g opacity="0.32" filter="url(#cs_d_f2)">
                <circle cx="19" cy="691" r="460" fill="#3CC4E5" />
              </g>
            </g>
            <defs>
              <filter id="cs_d_f0" x="70" y="-188" width="1780" height="1179" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="135" result="effect1_foregroundBlur" />
              </filter>
              <filter id="cs_d_f1" x="1050" y="-755" width="1920" height="1920" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="136" result="effect1_foregroundBlur" />
              </filter>
              <filter id="cs_d_f2" x="-941" y="-269" width="1920" height="1920" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="136" result="effect1_foregroundBlur" />
              </filter>
              <linearGradient id="cs_d_paint0" x1="1920" y1="-21.3031" x2="114.684" y2="922.394" gradientUnits="userSpaceOnUse">
                <stop stopColor="#02102C" />
                <stop offset="1" stopColor="#112244" />
              </linearGradient>
              <linearGradient id="cs_d_paint1" x1="1550" y1="94.4545" x2="323.866" y2="572.726" gradientUnits="userSpaceOnUse">
                <stop stopColor="#02102C" />
                <stop offset="1" stopColor="#112244" />
              </linearGradient>
              <clipPath id="cs_d_clip0">
                <rect width="1920" height="703" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className={styles.mobileImage}>
          <svg preserveAspectRatio="xMidYMid slice" className={styles.bgSvg} width="375" height="559" viewBox="0 0 375 559" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#cs_m_clip0)">
              <rect width="375" height="559" fill="url(#cs_m_paint0)" />
              <g opacity="0.48" filter="url(#cs_m_f0)">
                <circle cx="254" cy="592" r="200" fill="#3CC4E5" />
              </g>
              <g opacity="0.48" filter="url(#cs_m_f1)">
                <circle cx="450" cy="464" r="200" fill="#3CC4E5" />
              </g>
              <g opacity="0.04">
                <path fillRule="evenodd" clipRule="evenodd" d="M494.863 277.841L245.42 299.352L178.085 556.545L42.2216 556.545L175.021 209.568L573.679 160L701.803 556.545L556.587 556.545L494.863 277.841ZM329.311 367.713L294.708 556.633L439.924 556.633L404.386 359.296L329.311 367.713ZM77.0156 219.084L-13.9575 233.113L-201 556.708L-73.5534 556.708L77.0156 219.084Z" fill="url(#cs_m_paint1)" />
                <path fillRule="evenodd" clipRule="evenodd" d="M556.585 556.774L485.509 940.226L573.677 954.254L701.801 556.774L556.585 556.774ZM208.943 734.474L178.082 556.777L42.2183 556.777L104.877 723.251L208.943 734.474ZM439.928 556.779L384.75 931.813L-13.9071 881.31L-200.949 556.779L-73.5029 556.779L33.1111 786.85L311.546 811.166L294.712 556.779L439.928 556.779Z" fill="url(#cs_m_paint2)" />
              </g>
            </g>
            <defs>
              <filter id="cs_m_f0" x="-146" y="192" width="800" height="800" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur" />
              </filter>
              <filter id="cs_m_f1" x="50" y="64" width="800" height="800" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur" />
              </filter>
              <linearGradient id="cs_m_paint0" x1="375" y1="-16.9394" x2="-66.6674" y2="39.7691" gradientUnits="userSpaceOnUse">
                <stop stopColor="#02102C" />
                <stop offset="1" stopColor="#112244" />
              </linearGradient>
              <linearGradient id="cs_m_paint1" x1="336.884" y1="360.195" x2="339.506" y2="120.051" gradientUnits="userSpaceOnUse">
                <stop offset="0.325638" stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="cs_m_paint2" x1="372.84" y1="1019.42" x2="376.294" y2="567.487" gradientUnits="userSpaceOnUse">
                <stop offset="0.0301665" stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <clipPath id="cs_m_clip0">
                <rect width="375" height="559" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>

      <AboutNavHeroBackground />

      <div className={styles.heroWrapper}>
        <div className={styles.container}>
          <div className={styles.content}>
            <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span className={styles.breadcrumbSep}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path stroke="rgba(255,255,255,0.5)" strokeLinecap="square" d="m6 4 4 4-4 4" />
                </svg>
              </span>
              <Link href="/services">Services</Link>
              <span className={styles.breadcrumbSep}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path stroke="rgba(255,255,255,0.5)" strokeLinecap="square" d="m6 4 4 4-4 4" />
                </svg>
              </span>
              <span>Software Product Development Company</span>
            </nav>

            <h1 className={styles.title}>Software product development company</h1>

            <p className={styles.description}>
              Nexterse LLC delivers custom software product development for web, mobile,
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
