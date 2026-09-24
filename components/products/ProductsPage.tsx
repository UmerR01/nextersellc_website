"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PRODUCTS } from "./productsData";
import ProductWireframe from "./ProductWireframe";
import styles from "./ProductsPage.module.css";

const CATEGORIES = ["All", ...PRODUCTS.map((p) => p.category)];

export default function ProductsPage() {
  const [active, setActive] = useState("All");
  const shown = PRODUCTS.filter((p) => active === "All" || p.category === active);

  return (
    <>
      <section className={styles.intro}>
        <div className={`${styles.wrapperMain} container`}>
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span>Products</span>
          </nav>

          <h1 className={styles.pageTitle}>
            Products that we have <span className={styles.accent}>developed</span>
          </h1>
          <p className={styles.lead}>
            Software we build and run ourselves. Pick the one that fits your team, or use them together.
          </p>

          <div className={styles.chips} role="tablist" aria-label="Filter products">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                type="button"
                role="tab"
                aria-selected={active === c}
                className={`btn ${active === c ? "btn-accent" : "btn-outline"}`}
                onClick={() => setActive(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.dark}>
        <div className="container">
          {shown.map((p, i) => (
            <article
              key={p.slug}
              className={`${styles.row} ${i % 2 === 1 ? styles.rowReverse : ""}`}
            >
              <div className={styles.media}>
                {p.images ? (
                  <div className={styles.shot}>
                    <Image src={p.images.hero} alt={`${p.name} app`} fill sizes="(max-width: 900px) 100vw, 50vw" className={styles.shotImg} />
                  </div>
                ) : (
                  <ProductWireframe kind={p.wireframe} name={p.name} colors={p.colors} />
                )}
              </div>
              <div className={styles.text}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.logo} alt={`${p.name} logo`} className={styles.logo} />
                <h2 className={styles.name}>
                  {p.name} <span style={{ color: p.theme.accent }}>{p.suffix}</span>
                </h2>
                <p className={styles.desc}>{p.description}</p>
                <ul className={styles.tags}>
                  {p.chips.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
                <Link href={`/products/${p.slug}`} className="btn btn-accent">
                  Explore
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
