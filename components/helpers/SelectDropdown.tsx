"use client";

import { useEffect, useId, useRef, useState } from "react";
import styles from "./SelectDropdown.module.css";

type SelectDropdownProps = {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
};

export default function SelectDropdown({ label, options, value, onChange, required = false }: SelectDropdownProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();

  useEffect(() => {
    const close = (event: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) setOpen(false);
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", close);
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("mousedown", close);
      document.removeEventListener("keydown", escape);
    };
  }, []);

  const choose = (option: string) => {
    onChange(option);
    setOpen(false);
  };

  return (
    <div className={`${styles.root} ${open ? styles.open : ""}`} ref={rootRef}>
      <button
        type="button"
        className={styles.trigger}
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        aria-controls={listId}
        aria-haspopup="listbox"
      >
        <span className={styles.label}>{label}{required && <b>*</b>}</span>
        <span className={styles.value}>{value}</span>
        <svg viewBox="0 0 20 20" aria-hidden="true"><path d="m5 12 5-5 5 5" /></svg>
      </button>

      {open && (
        <ul className={styles.options} id={listId} role="listbox" aria-label={label}>
          {options.map((option) => (
            <li key={option}>
              <button
                type="button"
                role="option"
                aria-selected={value === option}
                className={value === option ? styles.selected : ""}
                onClick={() => choose(option)}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
