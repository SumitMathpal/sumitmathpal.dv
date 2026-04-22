import { useEffect, useRef } from "react";
import gsap from "gsap";
import { personalInfo } from "../data/portfolio";
import DownloadCvButton from "./DownloadCvButton";
import styles from "./Hero.module.css";

export default function Hero() {
  const { name, subtitle, stats, contact } = personalInfo;
  const heroRef  = useRef(null);
  const eyebrowRef = useRef(null);
  const headRef  = useRef(null);
  const roleRef  = useRef(null);
  const actRef   = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
    tl.fromTo(eyebrowRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 })
      .fromTo(headRef.current,    { opacity: 0, y: 40, skewY: 4 }, { opacity: 1, y: 0, skewY: 0, duration: 0.9 }, "-=0.3")
      .fromTo(roleRef.current,    { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, "-=0.5")
      .fromTo(actRef.current,     { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, "-=0.4")
      .fromTo(panelRef.current,
        { opacity: 0, x: 60, scale: 0.94 },
        { opacity: 1, x: 0, scale: 1, duration: 1.1, ease: "power3.out" },
        "-=0.9"
      );
  }, []);

  return (
    <section id="hero" className={styles.hero} ref={heroRef}>
      {/* Ambient glow blobs */}
      <div className={styles.glowBlue}  />
      <div className={styles.glowGreen} />

      <div className={styles.left}>
        <p className={styles.eyebrow} ref={eyebrowRef}>
          <span className={styles.eyebrowDot} />
          {subtitle}
        </p>

        <h1 className={styles.heading} ref={headRef}>
          Engineering
          <br />
          <em className={styles.italic}>Intelligent</em>
          <br />
          Systems
        </h1>

        <p className={styles.role} ref={roleRef}>
          Computer Science student at Aravali College with hands-on experience in
          ML model development and MERN stack engineering. Building solutions where
          data meets product.
        </p>

        <div className={styles.actions} ref={actRef}>
          <DownloadCvButton />
          <a className="btn btn-ghost" href={contact.github} target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
          <a className="btn btn-ghost" href={`mailto:${contact.email}`}>
            Contact ✉
          </a>
        </div>

        {/* Floating stat pills */}
        <div className={styles.floatingPills}>
          <div className={`${styles.pill} ${styles.pillBlue}`}>
            <span className={styles.pillDot}/>ML Engineering
          </div>
          <div className={`${styles.pill} ${styles.pillGreen}`}>
            <span className={styles.pillDot}/>MERN Stack
          </div>
          <div className={`${styles.pill} ${styles.pillOrange}`}>
            <span className={styles.pillDot}/>Open to Work
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.panelWrap} ref={panelRef}>
          {/* Decorative corner accents */}
          <div className={styles.cornerTL} />
          <div className={styles.cornerBR} />

          <div className={styles.panel}>
            <div className={styles.panelHeader}>
              <div className={styles.headerDots}>
                <span className={styles.dot} data-color="red" />
                <span className={styles.dot} data-color="yellow" />
                <span className={styles.dot} data-color="green" />
              </div>
              <span className={styles.panelTitle}>profile.json</span>
            </div>

            <div className={styles.panelBody}>
              {Object.entries({
                status:     { val: stats.status,     cls: "green",  label: "status" },
                location:   { val: stats.location,   cls: "",       label: "location" },
                education:  { val: stats.education,  cls: "blue",   label: "education" },
                experience: { val: stats.experience, cls: "",       label: "experience" },
                focus:      { val: stats.focus,      cls: "blue",   label: "focus" },
                stack:      { val: stats.stack,      cls: "orange", label: "stack" },
                phone:      { val: contact.phone,    cls: "",       label: "phone" },
              }).map(([, { val, cls, label }]) => (
                <div className={styles.statRow} key={label}>
                  <span className={styles.statKey}>"{label}"</span>
                  <span className={styles.statColon}>:</span>
                  <span className={`${styles.statValue} ${cls ? styles[cls] : ""}`}>
                    "{val}"
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.scrollHint}>
        <span>Scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
