import { personalInfo, education } from "../data/portfolio";
import styles from "./About.module.css";

export default function About() {
  const { bio, contact } = personalInfo;

  return (
    <section id="about" className="section">
      <span className={styles.stickyLabel}>01 · Profile</span>

      <div className="section-label reveal">
        <span className="section-num">01</span>
        <h2 className="section-title">Profile</h2>
        <div className="section-rule" />
      </div>

      <div className={styles.grid}>
        <div className={`${styles.body} reveal reveal-d1`}>
          {bio.map((p, i) => <p key={i} dangerouslySetInnerHTML={{ __html: p }} />)}

          <div className={styles.contactBlock}>
            <div className={styles.contactTitle}>Contact</div>
            {[
              { key: "Email",    val: <a href={`mailto:${contact.email}`}>{contact.email}</a> },
              { key: "Phone",    val: contact.phone },
              { key: "GitHub",   val: <a href={contact.github} target="_blank" rel="noreferrer">github.com/SumitMathpal</a> },
              { key: "LinkedIn", val: <a href={contact.linkedin} target="_blank" rel="noreferrer">linkedin.com/in/sumitmathpal</a> },
              { key: "Location", val: contact.location },
            ].map(({ key, val }) => (
              <div className={styles.contactItem} key={key}>
                <span className={styles.contactKey}>{key}</span>
                <span className={styles.contactVal}>{val}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={`${styles.eduStack} reveal reveal-d2`}>
          {education.map((edu) => (
            <div className={styles.eduItem} key={edu.degree}>
              <div className={`${styles.eduAccent} ${styles[edu.accent]}`} />
              <div className={styles.eduDegree}>{edu.degree}</div>
              <div className={styles.eduSchool}>{edu.field} · {edu.institution}</div>
              <div className={styles.eduPeriod}>{edu.period}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
