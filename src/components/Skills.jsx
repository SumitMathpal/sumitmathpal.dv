import { skills } from "../data/portfolio";
import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <span className={styles.stickyLabel}>03 · Skills</span>

      <div className="section-label reveal">
        <span className="section-num">03</span>
        <h2 className="section-title">Technical Skills</h2>
        <div className="section-rule" />
      </div>

      <div className={`${styles.grid} reveal reveal-d1`}>
        {skills.map((group) => (
          <div className={styles.cell} key={group.category}>
            <div className={`${styles.cellLabel} ${styles[group.color]}`}>
              {group.category}
            </div>
            <div className={styles.tags}>
              {group.items.map((item) => (
                <span className={styles.tag} key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
