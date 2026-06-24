import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

function IconEmail() {
  return (
    <svg width={24} height={18} viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M21.8906 0.488281H2.10938C0.948656 0.488281 0 1.43277 0 2.59766V15.2539C0 16.4192 0.949266 17.3633 2.10938 17.3633H21.8906C23.0513 17.3633 24 16.4188 24 15.2539V2.59766C24 1.43248 23.0509 0.488281 21.8906 0.488281ZM21.5667 1.89453C20.8847 2.57877 12.874 10.6156 12.5449 10.9458C12.27 11.2215 11.7301 11.2217 11.4551 10.9458L2.43328 1.89453H21.5667ZM1.40625 14.9954V2.85617L7.45617 8.92578L1.40625 14.9954ZM2.43328 15.957L8.44894 9.92178L10.4592 11.9386C11.283 12.765 12.7174 12.7647 13.5409 11.9386L15.5511 9.92183L21.5667 15.957H2.43328ZM22.5938 14.9954L16.5438 8.92578L22.5938 2.85617V14.9954Z" fill="#3CC4E5"/>
    </svg>
  );
}

function IconPhone() {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M22.5262 16.8713C22.4865 16.8383 17.9948 13.6238 16.776 13.8345C16.1903 13.938 15.855 14.337 15.1838 15.1373C15.0758 15.2663 14.8155 15.5745 14.6145 15.7943C14.1902 15.6561 13.7764 15.4876 13.3762 15.2903C11.3104 14.2845 9.64124 12.6154 8.6355 10.5495C8.43815 10.1493 8.26972 9.73554 8.1315 9.31128C8.352 9.10953 8.661 8.84928 8.793 8.73828C9.58875 8.07078 9.98775 7.73553 10.0912 7.14903C10.3035 5.93478 7.0875 1.43928 7.0545 1.39878C6.90804 1.19107 6.7173 1.01847 6.49603 0.893444C6.27476 0.768413 6.02849 0.69407 5.775 0.675781C4.4715 0.675781 0.75 5.50278 0.75 6.31653C0.75 6.36378 0.81825 11.1668 6.741 17.1915C12.759 23.1075 17.562 23.1758 17.6092 23.1758C18.423 23.1758 23.25 19.4543 23.25 18.1508C23.2317 17.8972 23.1573 17.6509 23.0321 17.4296C22.907 17.2083 22.7342 17.0176 22.5262 16.8713ZM17.5267 21.6713C16.8713 21.6173 12.8407 21.0855 7.8015 16.1348C2.82525 11.0685 2.307 7.02678 2.25525 6.40053C3.23833 4.85751 4.42559 3.45455 5.78475 2.22978C5.81475 2.25978 5.8545 2.30478 5.9055 2.36328C6.94787 3.7862 7.84581 5.30948 8.586 6.91053C8.34529 7.15269 8.09088 7.38081 7.824 7.59378C7.41014 7.90912 7.03011 8.26653 6.69 8.66028L6.50775 8.91528L6.56175 9.22353C6.72047 9.91108 6.96356 10.5764 7.2855 11.2043C8.43892 13.5728 10.3528 15.4864 12.7215 16.6395C13.3493 16.9619 14.0146 17.2053 14.7023 17.364L15.0105 17.418L15.2655 17.2358C15.6607 16.8942 16.0196 16.5126 16.3365 16.0973C16.5712 15.8168 16.8855 15.4425 17.004 15.3368C18.6096 16.0762 20.1368 16.9753 21.5625 18.0203C21.6248 18.0728 21.6683 18.1133 21.6975 18.1395C20.4729 19.4991 19.0699 20.6866 17.5267 21.6698V21.6713Z" fill="#3CC4E5"/>
    </svg>
  );
}

const SOCIAL_ICONS = [
  { src: "/footer/icons/instagram-icon.svg", alt: "Instagram", href: "https://www.instagram.com/nextersepakistan/" },
  { src: "/footer/icons/linkedin-icon.svg", alt: "LinkedIn", href: "https://www.linkedin.com/company/nexterse/" },
  { src: "/footer/icons/facebook-app-round-icon.svg", alt: "Facebook", href: "https://www.facebook.com/nexterse/" },
  { src: "/footer/icons/x-social-media-logo-icon.svg", alt: "X (Twitter)", href: "https://x.com/nexterseinfo" },
];

const DESKTOP_BADGES = [
  { src: "/badges/ens-awards-1.png", alt: "Clutch Top 1000 Companies Global 2021" },
  { src: "/badges/ens-techimply-new.png", alt: "TechImply Top Mobile App Development Company", href: "https://www.techimply.com/" },
  { src: "/badges/ens-awards-3.png", alt: "Top Developers 2021" },
  { src: "/badges/ens-awards-4.png", alt: "Clutch Top WordPress Developers 2022" },
  { src: "/badges/ens-awards-5.png", alt: "Most Reviewed Web Developers" },
  { src: "/badges/ens-awards-6.png", alt: "Clutch 5.0" },
  { src: "/badges/ens-awards-7.png", alt: "eCommerce Development Top 10" },
];

const MOBILE_BADGES = [
  { src: "/badges/ens-awards-1.png", alt: "Clutch Top 1000 Companies Global 2021" },
  { src: "/badges/ens-awards-2.png", alt: "Clutch Top Branding Agencies 2020" },
  { src: "/badges/ens-awards-3.png", alt: "Top Developers 2021" },
  { src: "/badges/ens-awards-4.png", alt: "Clutch Top WordPress Developers 2022" },
  { src: "/badges/ens-awards-5.png", alt: "Most Reviewed Web Developers" },
  { src: "/badges/ens-awards-6.png", alt: "Clutch 5.0" },
  { src: "/badges/ens-awards-7.png", alt: "eCommerce Development Top 10" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerBody} data-id="footer-body">
        <div className={styles.container}>

          {/* ══ DESKTOP LAYOUT ══ */}
          <div className={styles.desktopFooter}>

            {/* Row 1: Brand | Links | Policy */}
            <div className={`${styles.footerRow} ${styles.row1}`}>
              <div className={styles.colBrand}>
                <Image
                  src="/brand/nexters_logo_blue.png"
                  alt="Nexterse"
                  width={200}
                  height={52}
                  className={styles.footerLogo}
                />
                <p>
                  Nexterse LLC is a team of dedicated experts, selected to deliver
                  outstanding software solutions, enabling businesses to flourish
                  in the digital environment.
                </p>
              </div>
              <div className={styles.colLinks}>
                <h3>Useful Links</h3>
                <ul>
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/about-us">About Us</Link></li>
                  <li><Link href="/engagement-models-process">Engagement Models</Link></li>
                  <li><Link href="/blog">Blog</Link></li>
                  <li><Link href="/case-study">Case Study</Link></li>
                </ul>
              </div>
              <div className={styles.colPolicy}>
                <h3>Privacy &amp; Policy</h3>
                <ul>
                  <li><Link href="/terms-of-service">Terms of Use</Link></li>
                  <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                  <li><Link href="/confidentiality">Confidentiality</Link></li>
                </ul>
              </div>
            </div>

            {/* Row 2: Contact | India | USA */}
            <div className={`${styles.footerRow} ${styles.row2}`}>
              <div className={`${styles.colBrand} ${styles.colContact}`}>
                <h3>Get in Touch</h3>
                <ul>
                  <li>
                    <a href="mailto:info@nexterse.com" target="_blank" rel="noreferrer noopener">
                      <IconEmail />
                      info@nexterse.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:+13214912236" target="_blank" rel="noreferrer noopener">
                      <IconPhone />
                      +1 (321) 491-2236
                    </a>
                  </li>
                  <li>
                    <a href="tel:+971585122084" target="_blank" rel="noreferrer noopener">
                      <IconPhone />
                      +971 58 512 2084
                    </a>
                  </li>
                </ul>
              </div>
              <div className={styles.colLinks}>
                <h3><Image src="/footer/usa-flag.svg" alt="USA" width={28} height={20} className={styles.flag} unoptimized /> USA</h3>
                <ul>
                  <li>
                    <a href="https://maps.google.com/?q=7901+4th+St+N+%2327451+St.+Petersburg+FL+33702" target="_blank" rel="noreferrer noopener">
                      7901 4th St N #27451 St. Petersburg, FL, 33702, USA
                    </a>
                  </li>
                </ul>
              </div>
              <div className={styles.colPolicy}>
                <h3><Image src="/footer/united-arab-emirates-flag-icon.svg" alt="UAE" width={28} height={20} className={styles.flag} unoptimized /> UAE</h3>
                <ul>
                  <li>
                    <a href="https://maps.google.com/?q=Dubai+Silicon+Oasis+Dubai+United+Arab+Emirates" target="_blank" rel="noreferrer noopener">
                      Technopark, Mena Jabal Ali, Dubai Silicon Oasis, Dubai, United Arab Emirates
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Row 3: Follow Us | Certifications */}
            <div className={`${styles.footerRow} ${styles.row3}`}>
              <div className={styles.followBlock}>
                <h3>Follow Us:</h3>
                <ul className={styles.socialList}>
                  {SOCIAL_ICONS.map((icon) => (
                    <li key={icon.href}>
                      <a target="_blank" href={icon.href} rel="noreferrer noopener">
                        <Image
                          src={icon.src}
                          alt={icon.alt}
                          width={30}
                          height={30}
                          loading="lazy"
                          unoptimized
                        />
                      </a>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7250253552894283777"
                  target="_blank"
                  rel="noreferrer noopener"
                  className={styles.newsletterBtn}
                >
                  Subscribe on Our Linkedin Newsletter
                </a>
              </div>
              <div className={styles.certsBlock}>
                <h3>Certifications</h3>
                <ul className={styles.badgeList}>
                  {DESKTOP_BADGES.map((b) => (
                    <li key={b.src}>
                      <Image src={b.src} alt={b.alt} width={100} height={100} loading="lazy" unoptimized />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* ══ MOBILE LAYOUT ══ */}
          <div className={styles.mobileFooter}>
            <div className={styles.colBrand}>
              <Image
                src="/brand/nexters_logo_blue.png"
                alt="Nexterse"
                width={180}
                height={46}
                className={styles.footerLogo}
              />
              <p>
                Nexterse is a team of dedicated experts, selected to deliver
                outstanding software solutions, enabling businesses to flourish
                in the digital environment.
              </p>
            </div>

            <div className={styles.mobileAddresses}>
              <div className={styles.colLinks}>
                <h3><Image src="/footer/usa-flag.svg" alt="USA" width={28} height={20} className={styles.flag} unoptimized /> USA</h3>
                <ul>
                  <li>
                    <a href="https://maps.google.com/?q=7901+4th+St+N+%2327451+St.+Petersburg+FL+33702" target="_blank" rel="noreferrer noopener">
                      7901 4th St N #27451 St. Petersburg, FL, 33702, USA
                    </a>
                  </li>
                </ul>
              </div>
              <div className={styles.colPolicy}>
                <h3><Image src="/footer/united-arab-emirates-flag-icon.svg" alt="UAE" width={28} height={20} className={styles.flag} unoptimized /> UAE</h3>
                <ul>
                  <li>
                    <a href="https://maps.google.com/?q=Dubai+Silicon+Oasis+Dubai+United+Arab+Emirates" target="_blank" rel="noreferrer noopener">
                      Technopark, Mena Jabal Ali, Dubai Silicon Oasis, Dubai, United Arab Emirates
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className={`${styles.colBrand} ${styles.colContact}`}>
              <h3>Get in Touch</h3>
              <ul>
                <li>
                  <a href="tel:+13214912236" target="_blank" rel="noreferrer noopener">
                    <IconPhone /> +1 (321) 491-2236
                  </a>
                </li>
                <li>
                  <a href="tel:+971585122084" target="_blank" rel="noreferrer noopener">
                    <IconPhone /> +971 58 512 2084
                  </a>
                </li>
                <li>
                  <a href="mailto:info@nexterse.com" target="_blank" rel="noreferrer noopener">
                    <IconEmail /> info@nexterse.com
                  </a>
                </li>
              </ul>
            </div>

            <div className={styles.followBlock}>
              <h3>Follow Us:</h3>
              <ul className={styles.socialList}>
                {SOCIAL_ICONS.map((icon) => (
                  <li key={icon.href}>
                    <a target="_blank" href={icon.href} rel="noreferrer noopener">
                      <Image
                        src={icon.src}
                        alt={icon.alt}
                        width={30}
                        height={30}
                        loading="lazy"
                        unoptimized
                      />
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="https://www.linkedin.com/company/nexterse"
                target="_blank"
                rel="noreferrer noopener"
                className={styles.newsletterBtn}
              >
                Subscribe on Our Linkedin Newsletter
              </a>
            </div>

            <div className={styles.mobileLinkPolicy}>
              <div className={styles.colLinks}>
                <h3>Useful Links</h3>
                <ul>
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/about-us">About Us</Link></li>
                  <li><Link href="/engagement-models-process">Engagement Models</Link></li>
                  <li><Link href="/blog">Blog</Link></li>
                  <li><Link href="/case-study">Case Study</Link></li>
                </ul>
              </div>
              <div className={styles.colPolicy}>
                <h3>Privacy &amp; Policy</h3>
                <ul>
                  <li><Link href="/terms-of-service">Terms of Use</Link></li>
                  <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                  <li><Link href="/confidentiality">Confidentiality</Link></li>
                  <li><Link href="/sitemap">Sitemap</Link></li>
                </ul>
              </div>
            </div>

            <div className={styles.certsBlock}>
              <ul className={styles.badgeList}>
                {MOBILE_BADGES.map((b) => (
                  <li key={b.src}>
                    <Image src={b.src} alt={b.alt} width={100} height={100} loading="lazy" unoptimized />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── Footer Bottom Bar ── */}
          <div className={styles.footerBottom}>
            <p>© Copyright 2026 Nexterse LLC</p>
            <div className={styles.securityBox}>
              <Image
                src="/footer/dmca-protected-sml-img.png"
                alt="DMCA Protected"
                width={121}
                height={24}
                loading="lazy"
                unoptimized
              />
              <Image
                src="/footer/copyscape-icon.png"
                alt="Copyscape Protected"
                width={200}
                height={25}
                loading="lazy"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
