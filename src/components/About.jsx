import { personalInfo, education } from "../data/portfolio";
import styles from "./About.module.css";

export default function About() {
  const { bio, contact } = personalInfo;

  return (
    <section id="about" className="section">
      <div className="section-label" data-gsap="reveal">
        <span className="section-num">01</span>
        <h2 className="section-title">Profile</h2>
        <div className="section-rule" />
      </div>

      <div className={styles.grid}>
        <div className={styles.body} data-gsap="slide-left">
          {bio.map((p, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
          ))}

          <div className={styles.contactBlock}>
            <div className={styles.contactTitle}>
              <span className={styles.contactTitleDot} />
              Get in touch
            </div>
            <div className={styles.contactGrid}>
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
        </div>

        <div className={styles.eduStack} data-gsap="slide-right">
          <div className={styles.eduTitle}>Education</div>
          {education.map((edu) => (
            <div className={`${styles.eduCard} glass-card`} key={edu.degree}>
              <div className={`${styles.eduAccentBar} ${styles[edu.accent]}`} />
              <div className={styles.eduContent}>
                <div className={styles.eduDegree}>{edu.degree}</div>
                <div className={styles.eduField}>{edu.field}</div>
                <div className={styles.eduMeta}>
                  <span className={styles.eduSchool}>{edu.institution}</span>
                  <span className={`${styles.eduPeriod} ${styles[edu.accent + "Badge"]}`}>
                    {edu.period}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
