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

              <div className={`${styles.stack} ${styles["stack" + project.color.charAt(0).toUpperCase() + project.color.slice(1).toLowerCase()]}`}>
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
                  className={`${styles.cta} ${styles["cta" + project.color.charAt(0).toUpperCase() + project.color.slice(1).toLowerCase()]}`}
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {project.linkLabel}
                  <span className={styles.ctaArrow}>→</span>
                </a>

                {project.github && (
                  <a
                    className={styles.githubLink}
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    title="View Source Code on GitHub"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={styles.githubIcon}>
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
