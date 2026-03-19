import { navLinks } from "../data/portfolio";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        Sumit <span>Mathpal</span>
      </div>
      <ul className={styles.links}>
        {navLinks.map((link) => (
          <li key={link.label}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
