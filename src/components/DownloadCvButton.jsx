import { personalInfo } from "../data/portfolio";

export default function DownloadCvButton({ variant = "solid", children }) {
  const { contact } = personalInfo;
  const href = contact?.resume;

  if (!href) return null;

  const baseClass = variant === "ghost" ? "btn btn-ghost" : "btn btn-solid";

  return (
    <a
      className={baseClass}
      href={href}
      download
      target="_blank"
      rel="noreferrer"
    >
      {children || "Download CV"}
    </a>
  );
}

