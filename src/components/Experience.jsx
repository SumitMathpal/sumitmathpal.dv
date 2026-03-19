import { experience } from "../data/portfolio";
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <span className={styles.stickyLabel}>02 · Experience</span>

      <div className="section-label reveal">
        <span className="section-num">02</span>
        <h2 className="section-title">Experience</h2>
        <div className="section-rule" />
      </div>

      {experience.map((exp) => (
        <div className={`${styles.card} reveal reveal-d1`} key={exp.role}>
          <div className={styles.header}>
            <div>
              <div className={styles.role}>{exp.role}</div>
              <div className={styles.company}>{exp.company}</div>
            </div>
            <div className={styles.meta}>
              <span className={styles.badge}>{exp.type}</span>
              <span className={styles.period}>{exp.period}</span>
            </div>
          </div>
          <div className={styles.body}>
            <ul className={styles.points}>
              {exp.points.map((p, i) => <li key={i}>{p}</li>)}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
}
