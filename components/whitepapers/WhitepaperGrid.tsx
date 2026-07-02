import styles from "./WhitepaperGrid.module.css";

const PdfIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.6">
      <path d="M7.50002 20V6.25002C7.50002 5.9185 7.5 5 7.5 5C7.5 5 8.4185 5.00002 8.75002 5.00002H23.75L32.5 13.75V20" stroke="white" strokeWidth="1.5" strokeLinecap="square"/>
      <path d="M22.9883 5V13.75H31.7383" stroke="white" strokeWidth="1.5" strokeLinecap="square"/>
      <path d="M7.5 31.25H10C10.663 31.25 11.2989 30.9866 11.7678 30.5178C12.2366 30.0489 12.5 29.413 12.5 28.75C12.5 28.087 12.2366 27.4511 11.7678 26.9822C11.2989 26.5134 10.663 26.25 10 26.25H7.5V33.75" stroke="white" strokeWidth="1.5" strokeLinecap="square"/>
      <path d="M33.75 26.25H29.375V33.75" stroke="white" strokeWidth="1.5" strokeLinecap="square"/>
      <path d="M33.125 30.625H29.375" stroke="white" strokeWidth="1.5" strokeLinecap="square"/>
      <path d="M20 33.75C20.9946 33.75 21.9484 33.3549 22.6517 32.6517C23.3549 31.9484 23.75 30.9946 23.75 30C23.75 29.0054 23.3549 28.0516 22.6517 27.3483C21.9484 26.6451 20.9946 26.25 20 26.25H17.8125V33.75H20Z" stroke="white" strokeWidth="1.5" strokeLinecap="square"/>
    </g>
  </svg>
);

const ArrowIcon = () => (
  <span className={styles.arrow}>
    <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.94319e-08 8.59L3.59 5L-3.53625e-07 1.41L1 0.5L5.5 5L1 9.5L7.94319e-08 8.59Z" fill="#3CC4E5"/>
    </svg>
  </span>
);

const papers = [
  {
    gradient: "linear-gradient(259.16deg, #02102C -0.49%, #112244 100%)",
    imgTop: "/whitepapers/02_IoT-Ecosystem-front.jpg",
    imgTopAlt: "IoT Ecosystem front",
    imgBottom: "/whitepapers/02_IoT-Ecosystem-back.jpg",
    imgBottomAlt: "IoT Ecosystem back",
    title: "IoT 7 Components: Structure Overview",
    href: "#",
  },
  {
    gradient: "linear-gradient(280.31deg, #8F1500 -2.24%, #E45B44 76.47%)",
    imgTop: "/whitepapers/02_Top-1.jpg",
    imgTopAlt: "Complete Software Development Process in 14 Steps",
    imgBottom: "/whitepapers/02_Bottom-1.jpg",
    imgBottomAlt: "Complete Software Development Process in 14 Steps",
    title: "Mastering the Software Development Process: Our Methodology",
    href: "#",
  },
  {
    gradient: "linear-gradient(281.09deg, #003482 2.55%, #2F77D2 72.04%)",
    imgTop: "/whitepapers/01_6-stops-top.png",
    imgTopAlt: "6 stops banner with laptop on the background",
    imgBottom: "/whitepapers/01_6-stops-bottom.png",
    imgBottomAlt: "6 stops to best software development companies",
    title: "How to find the best software development partner",
    href: "#",
  },
  {
    gradient: "linear-gradient(259.16deg, #02102C -0.49%, #112244 100%)",
    imgTop: "/whitepapers/01_bsp-top.png",
    imgTopAlt: "Building SaaS top",
    imgBottom: "/whitepapers/01_bsp-bottom.png",
    imgBottomAlt: "Building SaaS contents",
    title: "Building SaaS platforms. Trends, challenges, our expertise",
    href: "#",
  },
  {
    gradient: "linear-gradient(280.31deg, #8F1500 -2.24%, #E45B44 76.47%)",
    imgTop: "/whitepapers/01_Estimation-top.png",
    imgTopAlt: "Sumatosoft software estimation banner",
    imgBottom: "/whitepapers/01_Estimation-bottom.png",
    imgBottomAlt: "Estimation contents",
    title: "Estimation of software development cost — process & techniques",
    href: "#",
  },
  {
    gradient: "linear-gradient(281.09deg, #36185F 2.55%, #7349AC 72.04%)",
    imgTop: "/whitepapers/01_Discovery-phase-top.png",
    imgTopAlt: "Discovery phase image",
    imgBottom: "/whitepapers/01_Discovery-phase-bottom.png",
    imgBottomAlt: "Discovery phase",
    title: "Discovery Phase: the business benefits it brings",
    href: "#",
  },
  {
    gradient: "linear-gradient(281.09deg, #36185F 2.55%, #7349AC 72.04%)",
    imgTop: "/whitepapers/11_Top-2.jpg",
    imgTopAlt: "Expert Guide Into the Design Process cover",
    imgBottom: "/whitepapers/11_Bottom-2.jpg",
    imgBottomAlt: "Expert Guide Into the Design Process background",
    title: "Expert Guide Into the Design Process",
    href: "#",
  },
];

export default function WhitepaperGrid() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {papers.map((paper, i) => (
            <div key={i} className={styles.col}>
              <a href={paper.href} className={styles.card}>
                <div
                  className={styles.preview}
                  style={{ background: paper.gradient }}
                >
                  <div className={styles.previewBg} />
                  <div className={styles.previewWrapper}>
                    <div className={styles.previewIcon}>
                      <PdfIcon />
                    </div>
                    <div className={styles.previewImages}>
                      <span className={`${styles.previewImage} ${styles.previewImageTop}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={paper.imgTop}
                          alt={paper.imgTopAlt}
                          loading="eager"
                        />
                      </span>
                      <span className={`${styles.previewImage} ${styles.previewImageBottom}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={paper.imgBottom}
                          alt={paper.imgBottomAlt}
                          loading="eager"
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <h2 className={styles.title}>{paper.title}</h2>
                <div className={styles.more}>
                  <div className={styles.learnMore}>
                    Learn more
                    <ArrowIcon />
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
