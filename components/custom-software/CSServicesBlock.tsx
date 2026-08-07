import Link from "next/link";
import styles from "./CSServicesBlock.module.css";

const SERVICES = [
  {
    href: "/services/enterprise-software-development",
    icon: "/custom-software/03_Enterprises-01.svg",
    title: "Enterprise software development",
    description:
      "We build platforms for the messy core of a large business: many users, strict access rules, heavy compliance, and integrations with systems that will not be replaced. We modernize what is worth keeping and rebuild what is holding the operation back.",
    linkText: "Enterprise software development",
  },
  {
    href: "/services/mobile-app-development",
    icon: "/custom-software/04_AI-for-existing-mobile-apps-02.svg",
    title: "Mobile app development",
    description:
      "We build native iOS and Android apps, plus cross-platform builds when that suits the budget. Designers and mobile engineers work side by side, with the focus on interfaces people understand on the first try and performance that holds up on the devices people carry.",
    linkText: "Mobile application development",
  },
  {
    href: "/services/web-app-development",
    icon: "/custom-software/03_Traditional-software-03.svg",
    title: "Web application development",
    description:
      "We build web applications that stay fast as traffic and data grow, and that fit the systems you already run. Security and scalability are designed from the architecture phase.",
    linkText: "Custom web development",
  },
];

export default function CSServicesBlock() {
  return (
    <section id="cs-services" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          Software product development{" "}
          <span className={styles.accent}>services</span>
        </h2>
        <div className={styles.grid}>
          {SERVICES.map((service) => (
            <Link key={service.href} href={service.href} className={styles.card}>
              <div className={styles.iconWrap}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={service.icon}
                  alt={service.title}
                  width={72}
                  height={72}
                  className={styles.icon}
                  loading="lazy"
                />
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.description}</p>
              <span className={styles.cardLink}>
                {service.linkText}
                <span className={styles.linkArrow} aria-hidden />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
