import { projects } from "../data/portfolio";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-label" data-gsap="reveal">
        <span className="section-num">04</span>
        <h2 className="section-title">Selected Projects</h2>
        <div className="section-rule" />
      </div>

      <div className={styles.grid} data-gsap="stagger">
        {projects.map((project) => (
          <div className={`${styles.card} glass-card`} key={project.index}>
            {/* Top bar accent */}
            <div className={`${styles.topBar} ${styles[project.color]}`} />

            <div className={styles.cardInner}>
              <div className={styles.indexBadge}>{project.index}</div>

              <div className={`${styles.stack} ${styles["stack" + project.color.charAt(0).toUpperCase() + project.color.slice(1)]}`}>
                {project.stack}
              </div>

              <div className={styles.name}>{project.name}</div>

              <ul className={styles.points}>
                {project.points.map((p, i) => (
                  <li key={i}>
                    <span className={`${styles.bullet} ${styles[project.color]}`}>▸</span>
                    {p}
                  </li>
                ))}
              </ul>

              <div className={styles.footer}>
                <a
                  className={`${styles.cta} ${styles["cta" + project.color.charAt(0).toUpperCase() + project.color.slice(1)]}`}
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {project.linkLabel}
                  <span className={styles.ctaArrow}>→</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
