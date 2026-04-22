import { experience } from "../data/portfolio";
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section-label" data-gsap="reveal">
        <span className="section-num">02</span>
        <h2 className="section-title">Experience</h2>
        <div className="section-rule" />
      </div>

      <div className={styles.timeline} data-gsap="stagger">
        {experience.map((exp) => (
          <div className={`${styles.card} glass-card`} key={exp.role}>
            {/* Timeline dot */}
            <div className={styles.timelineDot} />

            <div className={styles.header}>
              <div className={styles.roleWrap}>
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
                {exp.points.map((p, i) => (
                  <li key={i}>
                    <span className={styles.pointArrow}>→</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
