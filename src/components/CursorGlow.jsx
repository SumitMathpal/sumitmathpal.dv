import { useEffect, useRef } from "react";

/**
 * A soft cursor glow that follows the mouse — purely decorative.
 */
export default function CursorGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;
    let raf;
    let cx = window.innerWidth / 2;
    let cy = window.innerHeight / 2;
    let tx = cx, ty = cy;

    const onMove = (e) => { tx = e.clientX; ty = e.clientY; };
    document.addEventListener("mousemove", onMove);

    const animate = () => {
      cx += (tx - cx) * 0.1;
      cy += (ty - cy) * 0.1;
      if (glow) {
        glow.style.left = `${cx}px`;
        glow.style.top  = `${cy}px`;
      }
      raf = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      style={{
        position: "fixed",
        pointerEvents: "none",
        zIndex: 0,
        width: "500px",
        height: "500px",
        borderRadius: "50%",
        transform: "translate(-50%, -50%)",
        background: "radial-gradient(ellipse, rgba(43,139,232,0.045) 0%, transparent 70%)",
        transition: "none",
      }}
    />
  );
}
