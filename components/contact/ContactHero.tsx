import Link from "next/link";
import styles from "./ContactHero.module.css";
import AboutNavHeroBackground from "@/components/AboutNavHeroBackground";

export default function ContactHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bgWrapper}>
        <div className={styles.desktopImage} />
        <div className={styles.mobileImage}>
          <svg preserveAspectRatio="xMidYMid slice" className={styles.bgSvg} width="375" height="265" viewBox="0 0 375 265" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#contact_mob_clip0)">
              <rect width="375" height="265" fill="url(#contact_mob_paint0)" />
              <g opacity="0.04">
                <path fillRule="evenodd" clipRule="evenodd" d="M-277.143 -354.726L-253.415 -79.5667L30.2935 -5.28967V144.58L-352.454 -1.91046L-407.133 -441.667L30.2935 -583V-422.814L-277.143 -354.726ZM-178.004 -172.109L30.3923 -133.939V-294.125L-187.289 -254.923L-178.004 -172.109ZM-341.957 106.197L-326.482 206.549L30.4743 412.874V272.289L-341.957 106.197Z" fill="white" />
                <path fillRule="evenodd" clipRule="evenodd" d="M30.5391 -422.814L453.522 -344.41L468.997 -441.667L30.5391 -583V-422.814ZM226.556 -39.3311L30.5391 -5.28754V144.583L214.176 75.4636L226.556 -39.3311ZM30.5391 -294.125L444.237 -233.259L388.527 206.498L30.5391 412.823V272.238L284.329 154.632L311.152 -152.508L30.5391 -133.939V-294.125Z" fill="white" />
              </g>
              <g opacity="0.32" filter="url(#contact_mob_f0)">
                <ellipse cx="61" cy="-88" rx="311" ry="312" transform="rotate(90 61 -88)" fill="#3CC4E5" />
              </g>
              <g opacity="0.32" filter="url(#contact_mob_f1)">
                <ellipse cx="387" cy="744" rx="311" ry="312" transform="rotate(90 387 744)" fill="#3CC4E5" />
              </g>
            </g>
            <defs>
              <filter id="contact_mob_f0" x="-551" y="-699" width="1224" height="1222" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur" />
              </filter>
              <filter id="contact_mob_f1" x="-225" y="133" width="1224" height="1222" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur" />
              </filter>
              <linearGradient id="contact_mob_paint0" x1="375" y1="-16.8182" x2="-66.5638" y2="40.2856" gradientUnits="userSpaceOnUse">
                <stop stopColor="#02102C" />
                <stop offset="1" stopColor="#112244" />
              </linearGradient>
              <clipPath id="contact_mob_clip0">
                <rect width="375" height="265" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>

      <AboutNavHeroBackground />
      <div className={styles.heroWrapper}>
        <div className={styles.container}>
          <div className={styles.inner}>
            <div className={styles.breadcrumbs}>
              <Link href="/">Home</Link>
              <span>Talk to our expert team!</span>
            </div>
            <h1 className={styles.title}>Talk to our expert team!</h1>
          </div>
        </div>
      </div>
    </section>
  );
}
