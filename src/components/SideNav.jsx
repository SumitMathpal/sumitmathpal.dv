import { useEffect, useState } from "react";
import { sideNavItems } from "../data/portfolio";
import styles from "./SideNav.module.css";

const sectionIds = ["hero", "about", "experience", "skills", "projects"];

export default function SideNav() {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const update = () => {
      const mid = window.scrollY + window.innerHeight * 0.4;
      let idx = 0;
      sectionIds.forEach((id, i) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= mid) idx = i;
      });
      setActiveIdx(idx);
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div className={styles.sidenav}>
      {/* Vertical line track */}
      <div className={styles.track}>
        <div
          className={styles.fill}
          style={{ height: `${(activeIdx / (sideNavItems.length - 1)) * 100}%` }}
        />
      </div>

      {sideNavItems.map((item, i) => (
        <a
          key={item.label}
          href={item.href}
          className={`${styles.item} ${i === activeIdx ? styles.active : ""}`}
          title={item.label}
        >
          <span className={styles.dot} />
          <span className={styles.label}>{item.label}</span>
        </a>
      ))}
    </div>
  );
}
