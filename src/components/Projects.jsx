import { projects } from "../data/portfolio";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <span className={styles.stickyLabel}>04 · Projects</span>

      <div className="section-label reveal">
        <span className="section-num">04</span>
        <h2 className="section-title">Selected Projects</h2>
        <div className="section-rule" />
      </div>

      <div className={`${styles.list} reveal reveal-d1`}>
        {projects.map((project) => (
          <div className={styles.row} key={project.index}>
            <div className={`${styles.accent} ${styles[project.color]}`} />
            <div className={styles.index}>{project.index}</div>
            <div className={styles.content}>
              <div className={`${styles.stack} ${styles[project.color]}`}>
                {project.stack}
              </div>
              <div className={styles.name}>{project.name}</div>
              <ul className={styles.points}>
                {project.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
            <div className={styles.linkCol}>
              <a
                className={styles.cta}
                href={project.link}
                target="_blank"
                rel="noreferrer"
              >
                {project.linkLabel}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
