import styles from "./PredictiveHero.module.css";

export default function PredictiveHero() {
  return (
    <section className={styles.section}>
      <div className={styles.bgWrapper} aria-hidden>
        <svg
          preserveAspectRatio="xMidYMid slice"
          className={styles.bgSvg}
          width="375"
          height="265"
          viewBox="0 0 375 265"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#pdm-clip0)">
            <rect width="375" height="265" fill="url(#pdm-grad0)" />
            <g opacity="0.04">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M-277.143 -354.726L-253.415 -79.5667L30.2935 -5.28967V144.58L-352.454 -1.91046L-407.133 -441.667L30.2935 -583V-422.814L-277.143 -354.726ZM-178.004 -172.109L30.3923 -133.939V-294.125L-187.289 -254.923L-178.004 -172.109ZM-341.957 106.195L-326.482 206.547L30.4742 412.873V272.287L-341.957 106.195Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M30.5391 -422.814L453.522 -344.41L468.997 -441.667L30.5391 -583V-422.814ZM226.556 -39.332L30.5391 -5.28851V144.582L214.176 75.4626L226.556 -39.332ZM30.5391 -294.125L444.237 -233.259L388.527 206.498L30.5391 412.823V272.238L284.329 154.632L311.152 -152.508L30.5391 -133.939V-294.125Z"
                fill="white"
              />
            </g>
            <g opacity="0.32" filter="url(#pdm-filter0)">
              <ellipse cx="61" cy="-88" rx="311" ry="312" transform="rotate(90 61 -88)" fill="#3CC4E5" />
            </g>
            <g opacity="0.32" filter="url(#pdm-filter1)">
              <ellipse cx="387" cy="454" rx="311" ry="312" transform="rotate(90 387 454)" fill="#3CC4E5" />
            </g>
            <g filter="url(#pdm-filter2)">
              <ellipse cx="114" cy="161.5" rx="103.5" ry="179" transform="rotate(90 114 161.5)" fill="url(#pdm-grad1)" />
            </g>
          </g>
          <defs>
            <filter id="pdm-filter0" x="-491" y="-639" width="1104" height="1102" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="120" result="effect1_foregroundBlur" />
            </filter>
            <filter id="pdm-filter1" x="-165" y="-97" width="1104" height="1102" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="120" result="effect1_foregroundBlur" />
            </filter>
            <filter id="pdm-filter2" x="-195" y="-72" width="618" height="467" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="65" result="effect1_foregroundBlur" />
            </filter>
            <linearGradient id="pdm-grad0" x1="375" y1="-8.03032" x2="-43.2661" y2="105.254" gradientUnits="userSpaceOnUse">
              <stop stopColor="#02102C" />
              <stop offset="1" stopColor="#112244" />
            </linearGradient>
            <linearGradient id="pdm-grad1" x1="217.5" y1="-28.3485" x2="-27.3212" y2="-1.25472" gradientUnits="userSpaceOnUse">
              <stop stopColor="#02102C" />
              <stop offset="1" stopColor="#112244" />
            </linearGradient>
            <clipPath id="pdm-clip0">
              <rect width="375" height="265" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>

      <div className={styles.heroWrapper}>
        <div className={styles.container}>
          <div className={styles.content}>
            <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
              <a href="/">Home</a>
              <a href="/services">Services</a>
              <span>Predictive Maintenance development</span>
            </nav>

            <h1 className={styles.title}>
              <span className={styles.titleAccent}>AI-powered Predictive Maintenance</span> software development
            </h1>

            <p className={styles.description}>
              We design and develop predictive maintenance systems for industrial environments with legacy equipment, edge deployment, and modern AIoT architecture. We build locally hosted ML models, connect brownfield assets through secure gateways, and transform vibration, thermal, acoustic, and operational data into reliable maintenance signals your team can act on.
            </p>

            <div className={styles.ctaRow}>
              <a href="#get-modal-popup" className={styles.ctaButton}>
                Get in Touch
              </a>
              <div className={styles.ratings}>
                <p className={styles.ratingsLabel}>Clients rate our services</p>
                <div className={styles.ratingsBadge}>
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#FFAB00" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
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
