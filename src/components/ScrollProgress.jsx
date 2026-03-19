import { useEffect, useState } from "react";
import styles from "./ScrollProgress.module.css";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const doc = document.documentElement;
      const pct = (window.scrollY / (doc.scrollHeight - doc.clientHeight)) * 100;
      setProgress(Math.min(pct, 100));
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div className={styles.bar} style={{ width: `${progress}%` }} />
  );
}
