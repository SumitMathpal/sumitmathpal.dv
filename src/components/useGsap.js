import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BASE = { ease: "power3.out" };
const TRIGGER_START = "top 88%";
const TRIGGER_ACTIONS = "play none none none";

function makeTrigger(el) {
  return {
    trigger: el,
    start: TRIGGER_START,
    toggleActions: TRIGGER_ACTIONS,
  };
}

/**
 * Registers GSAP ScrollTrigger animations globally.
 * Supports: data-gsap="reveal" | "stagger" | "slide-left" | "slide-right"
 */
export function useGsapReveal() {
  useEffect(() => {
    let ctx = gsap.context(() => {

      // ── Fade + slide up ────────────────────────────
      gsap.utils.toArray("[data-gsap='reveal']").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 48, scale: 0.97 },
          { opacity: 1, y: 0, scale: 1, duration: 0.9, ...BASE,
            scrollTrigger: makeTrigger(el) }
        );
      });

      // ── Stagger children ───────────────────────────
      gsap.utils.toArray("[data-gsap='stagger']").forEach((el) => {
        gsap.fromTo(
          Array.from(el.children),
          { opacity: 0, y: 44, scale: 0.96 },
          { opacity: 1, y: 0, scale: 1, duration: 0.75, stagger: 0.13, ...BASE,
            scrollTrigger: makeTrigger(el) }
        );
      });

      // ── Slide from left ────────────────────────────
      gsap.utils.toArray("[data-gsap='slide-left']").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: -64 },
          { opacity: 1, x: 0, duration: 0.95, ...BASE,
            scrollTrigger: makeTrigger(el) }
        );
      });

      // ── Slide from right ───────────────────────────
      gsap.utils.toArray("[data-gsap='slide-right']").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: 64 },
          { opacity: 1, x: 0, duration: 0.95, ...BASE,
            scrollTrigger: makeTrigger(el) }
        );
      });

    });

    return () => ctx.revert();
  }, []);
}
