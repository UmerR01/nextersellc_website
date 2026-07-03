import styles from "./InsightsHero.module.css";
import AboutNavHeroBackground from "@/components/AboutNavHeroBackground";

export default function InsightsHero() {
  return (
    <section className={styles.hero}>
      <AboutNavHeroBackground />
      {/* Desktop SVG bg */}
      <div className={styles.bgWrapper}>
        <div className={styles.desktopBg}>
          <svg
            preserveAspectRatio="xMidYMid slice"
            className={styles.bgSvg}
            width="1920"
            height="1080"
            viewBox="0 0 1920 1080"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#ins_clip0)">
              <rect width="1920" height="1080" fill="url(#ins_paint0)" />
              <g opacity="0.5" filter="url(#ins_filter0)">
                <circle cx="1460" cy="712" r="460" fill="#3CC4E5" />
              </g>
              <g opacity="0.5" filter="url(#ins_filter1)">
                <circle cx="1798.5" cy="443.5" r="314.5" fill="#3CC4E5" />
              </g>
              <g opacity="0.16">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2123.93 413.428L1625.04 456.449L1490.37 970.835L1218.64 970.835L1484.24 276.882L2281.56 177.746L2537.8 970.836L2247.37 970.835L2123.93 413.428ZM1792.82 593.171L1723.62 971.011L2014.05 971.011L1942.97 576.337L1792.82 593.171ZM1288.23 295.913L1106.28 323.97L732.196 971.161L987.089 971.161L1288.23 295.913Z"
                  fill="url(#ins_paint1)"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2247.37 971.295L2105.22 1738.2L2281.56 1766.25L2537.8 971.295L2247.37 971.295ZM1552.09 1326.69L1490.36 971.301L1218.64 971.301L1343.95 1304.25L1552.09 1326.69ZM2014.05 971.306L1903.7 1721.37L1106.38 1620.37L732.301 971.305L987.193 971.305L1200.42 1431.45L1757.29 1480.08L1723.62 971.306L2014.05 971.306Z"
                  fill="url(#ins_paint2)"
                />
              </g>
            </g>
            <defs>
              <filter id="ins_filter0" x="500" y="-248" width="1920" height="1920" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="135" result="effect1_foregroundBlur" />
              </filter>
              <filter id="ins_filter1" x="984" y="-371" width="1629" height="1629" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="136" result="effect1_foregroundBlur" />
              </filter>
              <linearGradient id="ins_paint0" x1="1920" y1="-32.7274" x2="-140.104" y2="668.244" gradientUnits="userSpaceOnUse">
                <stop stopColor="#02102C" />
                <stop offset="1" stopColor="#112244" />
              </linearGradient>
              <linearGradient id="ins_paint1" x1="1279.7" y1="1295" x2="1611.58" y2="-297.881" gradientUnits="userSpaceOnUse">
                <stop stopColor="#112244" />
                <stop offset="0.0301665" stopColor="#112244" />
                <stop offset="0.998737" stopColor="#112244" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="ins_paint2" x1="1808.01" y1="1372.46" x2="1779.68" y2="941.66" gradientUnits="userSpaceOnUse">
                <stop offset="0.325638" stopColor="#112244" />
                <stop offset="1" stopColor="#112244" stopOpacity="0" />
              </linearGradient>
              <clipPath id="ins_clip0">
                <rect width="1920" height="1080" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className={styles.mobileBg}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/insights/01_ui-ux-hero-bg-mobile.jpg"
            alt="Background"
            width={750}
            height={1446}
          />
        </div>
      </div>

      {/* Content */}
      <div className={styles.heroWrapper}>
        <div className="container">
          <div className={styles.content}>
            <div className={styles.breadcrumbs}>
              <a href="/">Home</a>
              <span>Guides &amp; Checklists Library</span>
            </div>
            <h1 className={styles.title}>Guides &amp; Checklists Library</h1>
            <div className={styles.description}>
              <p>
                Welcome to our guides, checklists and templates library. Here you can find useful
                materials that will help you to plan, develop and release the best software product.
              </p>
              <p>Drop us a line, if you need any additional checklist or guideline.</p>
            </div>
            <div className={styles.buttons}>
              <a href="#get-modal-popup" className={styles.btnPrimary}>
                <span>Get in touch</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
