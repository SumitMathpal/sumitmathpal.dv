import { useRef } from "react";
import { personalInfo } from "../data/portfolio";
import styles from "./DownloadCvButton.module.css";

export default function DownloadCvButton({ variant = "solid", children }) {
  const { contact } = personalInfo;
  const href = contact?.resume;
  const btnRef = useRef(null);

  if (!href) return null;

  const handleRipple = (e) => {
    const btn = btnRef.current;
    if (!btn) return;
    const ripple = document.createElement("span");
    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.cssText = `
      position: absolute;
      border-radius: 50%;
      width: ${size}px;
      height: ${size}px;
      left: ${e.clientX - rect.left - size / 2}px;
      top: ${e.clientY - rect.top - size / 2}px;
      background: rgba(255,255,255,0.2);
      transform: scale(0);
      animation: ripple 0.55s ease-out forwards;
      pointer-events: none;
    `;
    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  };

  const baseClass = variant === "ghost" ? "btn btn-ghost" : `btn btn-solid ${styles.btn}`;

  return (
    <a
      ref={btnRef}
      className={baseClass}
      href={href}
      download
      target="_blank"
      rel="noreferrer"
      onClick={handleRipple}
      style={{ position: "relative", overflow: "hidden" }}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
      {children || "Download CV"}
    </a>
  );
}
