import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { navLinks } from "../data/portfolio";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const navRef  = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]   = useState(false);

  useEffect(() => {
    // Entrance
    gsap.fromTo(
      navRef.current,
      { opacity: 0, y: -24 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.2 }
    );
    // Scroll detection
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <nav
        ref={navRef}
        className={`${styles.nav} ${scrolled ? styles.scrolled : ""} ${open ? styles.navOpen : ""}`}
      >
        <div className={styles.logo}>
          <span className={styles.logoAccent}>S</span>umit
          <span className={styles.logoDot}>.</span>
        </div>

        {/* Desktop links */}
        <ul className={styles.links}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className={styles.link}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className={`${styles.burger} ${open ? styles.burgerOpen : ""}`}
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <div className={styles.burgerInner}>
            <span /><span /><span />
          </div>
        </button>
      </nav>

      {/* Mobile drawer rendered as a sibling to prevent parent transform clipping */}
      {open && (
        <div className={styles.drawer}>
          {navLinks.map((link, idx) => (
            <a
              key={link.label}
              href={link.href}
              className={styles.drawerLink}
              style={{ "--i": idx }}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
