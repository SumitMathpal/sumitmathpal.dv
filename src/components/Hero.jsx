import { personalInfo } from "../data/portfolio";
import DownloadCvButton from "./DownloadCvButton";
import styles from "./Hero.module.css";

export default function Hero() {
  const { name, subtitle, stats, contact } = personalInfo;

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.left}>
        <p className={styles.eyebrow}>{subtitle}</p>
        <h1 className={styles.heading}>
          Engineering<br />
          <em>Intelligent</em><br />
          Systems
        </h1>
        <p className={styles.role}>
          Computer Science student at Aravali College with hands-on experience in
          ML model development and MERN stack engineering. Building solutions where
          data meets product.
        </p>
        <div className={styles.actions}>
          <DownloadCvButton />
          <a className="btn btn-ghost" href={contact.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="btn btn-ghost" href={`mailto:${contact.email}`}>
            {contact.email}
          </a>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.panel}>
          <div className={styles.panelHeader}>Profile Overview</div>
          {Object.entries({
            Status:     { val: stats.status,     cls: "green" },
            Location:   { val: stats.location,   cls: "" },
            Education:  { val: stats.education,  cls: "" },
            Experience: { val: stats.experience, cls: "" },
            Focus:      { val: stats.focus,      cls: "blue" },
            Stack:      { val: stats.stack,      cls: "orange" },
            Phone:      { val: contact.phone,    cls: "" },
          }).map(([label, { val, cls }]) => (
            <div className={styles.statRow} key={label}>
              <span className={styles.statLabel}>{label}</span>
              <span className={`${styles.statValue} ${cls ? styles[cls] : ""}`}>{val}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.scrollHint}>
        <span>Scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
