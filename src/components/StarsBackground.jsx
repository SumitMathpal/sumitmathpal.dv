import { useEffect, useRef } from "react";

export default function StarsBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;

    // Handle screen resize
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initialize stars (adaptive to screen resolution)
    const starCount = Math.min(Math.floor((window.innerWidth * window.innerHeight) / 9000), 200);
    const stars = [];

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        radius: Math.random() * 1.2 + 0.3,
        baseOpacity: Math.random() * 0.6 + 0.2,
        twinkleSpeed: 0.005 + Math.random() * 0.015,
        phase: Math.random() * Math.PI * 2,
        parallaxSpeed: 0.05 + Math.random() * 0.08,
        driftSpeedX: (Math.random() - 0.5) * 0.03, // slow drift left/right
        driftSpeedY: Math.random() * 0.04 + 0.02,   // constant drift down
      });
    }

    let scrollY = window.scrollY;
    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Track mouse coordinates
    let mx = 0, my = 0;
    let targetMx = 0, targetMy = 0;
    let hasMouse = false;

    const onMouseMove = (e) => {
      targetMx = e.clientX;
      targetMy = e.clientY;
      hasMouse = true;
    };
    const onMouseLeave = () => {
      hasMouse = false;
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    // Draw & update loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Smooth mouse interpolation
      mx += (targetMx - mx) * 0.08;
      my += (targetMy - my) * 0.08;

      stars.forEach((star) => {
        // 1. Twinkle effect (phase changes over time)
        star.phase += star.twinkleSpeed;
        const currentOpacity = star.baseOpacity + Math.sin(star.phase) * 0.15;
        
        // 2. Slow constant drift
        star.x += star.driftSpeedX;
        star.y += star.driftSpeedY;

        // Wrap around bounds if star drifts off screen
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;

        // 3. Apply scroll parallax
        let currentY = star.y - scrollY * star.parallaxSpeed;
        // Keep inside canvas bounds
        currentY = (currentY % canvas.height + canvas.height) % canvas.height;
        let currentX = star.x;

        // 4. Mouse repulsion force
        if (hasMouse) {
          const dx = currentX - mx;
          const dy = currentY - my;
          const distSq = dx * dx + dy * dy;
          const maxDist = 130;
          if (distSq < maxDist * maxDist) {
            const dist = Math.sqrt(distSq);
            const force = (maxDist - dist) / maxDist; // 0 (far) to 1 (near)
            const angle = Math.atan2(dy, dx);
            const push = force * 20; // max push of 20 pixels
            currentX += Math.cos(angle) * push;
            currentY += Math.sin(angle) * push;
          }
        }

        ctx.beginPath();
        ctx.arc(currentX, currentY, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(248, 250, 252, ${Math.max(0.05, Math.min(currentOpacity, 1))})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        background: "transparent",
      }}
    />
  );
}
