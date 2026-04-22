import { skills } from "../data/portfolio";
import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-label" data-gsap="reveal">
        <span className="section-num">03</span>
        <h2 className="section-title">Technical Skills</h2>
        <div className="section-rule" />
      </div>

      <div className={styles.grid} data-gsap="stagger">
        {skills.map((group) => (
          <div className={`${styles.cell} glass-card`} key={group.category}>
            <div className={styles.cellHeader}>
              <div className={`${styles.cellDot} ${styles[group.color]}`} />
              <div className={`${styles.cellLabel} ${styles[group.color]}`}>
                {group.category}
              </div>
            </div>
            <div className={styles.tags}>
              {group.items.map((item) => (
                <span className={`${styles.tag} ${styles["tag" + group.color.charAt(0).toUpperCase() + group.color.slice(1)]}`} key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
