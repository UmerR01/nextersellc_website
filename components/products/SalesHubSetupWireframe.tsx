"use client";

import { useEffect, useState } from "react";
import SalesHubFeatureCard from "./SalesHubFeatureCard";
import { PhosphorIcon } from "./phosphorPaths";
import { useReplay } from "./useReplay";
import styles from "./SalesHubSetupWireframe.module.css";

// Recreated from the real Company and Product forms
// (companies/form.html + product_form.html): the same company fields
// (Name, Branding Logo, Contact Person, Commission %, Policy Type) and
// the same product fields (Visa Holders, TPA, Visa Type, Rate
// Combination) that live-quoting is built on.
const COMPANY_FIELDS = ["Company Name", "Branding Logo", "Contact Person", "Commission %", "Policy Type"];
const PRODUCT_FIELDS = ["Product Name", "Visa Holders", "TPA", "Visa Type", "Rate Combination"];

export default function SalesHubSetupWireframe() {
  const { ref, cycle } = useReplay<HTMLDivElement>();
  const [checked, setChecked] = useState(0);
  const total = COMPANY_FIELDS.length + PRODUCT_FIELDS.length;

  useEffect(() => {
    setChecked(0);
  }, [cycle]);

  useEffect(() => {
    if (checked >= total) return;
    const id = setTimeout(() => setChecked((c) => c + 1), 260);
    return () => clearTimeout(id);
  }, [checked, total]);

  return (
    <div ref={ref}>
    <SalesHubFeatureCard
      key={cycle}
      title="Company & Product Setup"
      cta={
        <span className={styles.cta}>
          <PhosphorIcon name="Plus" />
          Add Company
        </span>
      }
    >
      <div className={styles.columns}>
        <div className={styles.panel}>
          <div className={styles.panelHead}>
            <PhosphorIcon name="Buildings" className={styles.panelIcon} />
            Company
          </div>
          {COMPANY_FIELDS.map((f, i) => (
            <div key={f} className={styles.row}>
              <span className={checked > i ? styles.check : styles.checkEmpty}>
                {checked > i && <PhosphorIcon name="CheckCircle" />}
              </span>
              {f}
            </div>
          ))}
        </div>
        <div className={styles.panel}>
          <div className={styles.panelHead}>
            <PhosphorIcon name="Package" className={styles.panelIcon} />
            Product
          </div>
          {PRODUCT_FIELDS.map((f, i) => {
            const idx = COMPANY_FIELDS.length + i;
            return (
              <div key={f} className={styles.row}>
                <span className={checked > idx ? styles.check : styles.checkEmpty}>
                  {checked > idx && <PhosphorIcon name="CheckCircle" />}
                </span>
                {f}
              </div>
            );
          })}
        </div>
      </div>

      <div className={`${styles.banner} ${checked >= total ? styles.bannerOn : ""}`}>
        <PhosphorIcon name="CheckCircle" />
        Ready for quotes. Every quote and rate table now pulls from this setup.
      </div>
    </SalesHubFeatureCard>
    </div>
  );
}
