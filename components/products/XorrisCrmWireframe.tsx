"use client";

import XorrisFeatureCard from "./XorrisFeatureCard";
import { PhosphorIcon } from "./phosphorPaths";
import styles from "./XorrisCrmWireframe.module.css";

// Recreated from the real "My Contacts" panel/table
// (components/dashboard/contacts-panel.tsx + contacts-table.tsx): same
// header, and the same table columns — Name, Company, Phone Number, Email.
const ROWS = [
  { name: "Maya Chen", company: "Northwind Robotics", phone: "+1 (628) 555-0148", email: "maya@northwind.io" },
  { name: "Diego Alvarez", company: "Fenwick & Rye", phone: "+1 (415) 555-0122", email: "diego@fenwickrye.com" },
  { name: "Priya Nair", company: "Solace Freight", phone: "+1 (312) 555-0176", email: "priya@solacefreight.com" },
  { name: "Tom Hollis", company: "Bright Path Clinics", phone: "+1 (206) 555-0193", email: "tom@brightpath.com" },
  { name: "Elena Cruz", company: "Marbleworks Co.", phone: "+1 (773) 555-0161", email: "elena@marbleworks.com" },
  { name: "Sam Whitfield", company: "Harbor & Vine", phone: "+1 (503) 555-0134", email: "sam@harborvine.com" },
];

export default function XorrisCrmWireframe() {
  return (
    <XorrisFeatureCard
      title="My Contacts"
      cta={
        <div className={styles.headActions}>
          <span className={styles.search}>
            <PhosphorIcon name="MagnifyingGlass" />
            Search
          </span>
          <span className={styles.cta}>
            <PhosphorIcon name="Plus" />
            Add Contact
          </span>
        </div>
      }
    >
      <div className={styles.table}>
        <div className={styles.headRow}>
          <span>Name</span>
          <span>Company</span>
          <span>Phone Number</span>
          <span>Email</span>
        </div>
        {ROWS.map((r, i) => (
          <div key={r.name} className={styles.row} style={{ animationDelay: `${i * 0.1}s` }}>
            <span className={styles.nameCell}>
              <span className={styles.avatar}>{r.name[0]}</span>
              {r.name}
            </span>
            <span className={styles.muted}>{r.company}</span>
            <span className={styles.muted}>{r.phone}</span>
            <span className={styles.muted}>{r.email}</span>
          </div>
        ))}
      </div>
      <div className={styles.footer}>Showing {ROWS.length} of 128 contacts</div>
    </XorrisFeatureCard>
  );
}
