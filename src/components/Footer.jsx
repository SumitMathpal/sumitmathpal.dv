import { personalInfo } from "../data/portfolio";
import styles from "./Footer.module.css";

export default function Footer() {
  const { contact } = personalInfo;
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} data-gsap="reveal">
      {/* Top divider with glow */}
      <div className={styles.divider} />

      <div className={styles.inner}>
        <div className={styles.brand}>
          <span className={styles.brandAccent}>S</span>umit
          <span className={styles.brandDot}>.</span>
          <span className={styles.brandSub}>Mathpal</span>
        </div>

        <div className={styles.tagline}>
          Engineering Intelligent Systems
        </div>

        <nav className={styles.links}>
          {[
            { label: "GitHub",   href: contact.github,                   external: true },
            { label: "LinkedIn", href: contact.linkedin,                 external: true },
            { label: "Email",    href: `mailto:${contact.email}`,        external: false },
          ].map(({ label, href, external }) => (
            <a
              key={label}
              href={href}
              className={styles.link}
              {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>

      <div className={styles.copy}>
        <span>© {year} Sumit Mathpal</span>
        <span className={styles.copyDot}>·</span>
        <span>Faridabad, Haryana, India</span>
        <span className={styles.copyDot}>·</span>
        <span>Built with React &amp; GSAP</span>
      </div>
    </footer>
  );
}
