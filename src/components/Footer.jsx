import { personalInfo } from "../data/portfolio";
import styles from "./Footer.module.css";

export default function Footer() {
  const { contact } = personalInfo;
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.brand}>
        Sumit <span>Mathpal</span>
      </div>

      <nav className={styles.nav}>
        <a href={contact.github} target="_blank" rel="noreferrer">GitHub</a>
        <a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <a href={`mailto:${contact.email}`}>Email</a>
        <a href={`tel:${contact.phone.replace(/\s/g, "")}`}>{contact.phone}</a>
      </nav>

      <div className={styles.copy}>
        © {year} Sumit Mathpal · Faridabad, Haryana, India
      </div>
    </footer>
  );
}
