import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 500);
    camera.position.z = 40;

    // Particles
    const count = 800;
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const palette = [[0.1, 0.43, 0.83], [0.05, 0.54, 0.37], [0.77, 0.36, 0.1]];

    for (let i = 0; i < count; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * 160;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 100;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 80;
      const c = palette[Math.floor(Math.random() * 3)];
      const b = 0.1 + Math.random() * 0.18;
      col[i * 3] = c[0] * b; col[i * 3 + 1] = c[1] * b; col[i * 3 + 2] = c[2] * b;
    }

    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(col, 3));
    const mat = new THREE.PointsMaterial({ size: 0.13, vertexColors: true, transparent: true, opacity: 1 });
    const pts = new THREE.Points(geo, mat);
    scene.add(pts);

    // Grid lines
    const lm = new THREE.LineBasicMaterial({ color: 0x0D1F35, transparent: true, opacity: 0.35 });
    for (let i = -6; i <= 6; i++) {
      const g1 = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(-80, i * 8, -15), new THREE.Vector3(80, i * 8, -15)]);
      scene.add(new THREE.Line(g1, lm));
      const g2 = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(i * 13, -50, -15), new THREE.Vector3(i * 13, 50, -15)]);
      scene.add(new THREE.Line(g2, lm));
    }

    let mx = 0, my = 0;
    const onMouse = (e) => {
      mx = (e.clientX / window.innerWidth - 0.5) * 0.6;
      my = -(e.clientY / window.innerHeight - 0.5) * 0.4;
    };
    document.addEventListener("mousemove", onMouse);

    const onScroll = () => { camera.position.y = -window.scrollY * 0.005; };
    window.addEventListener("scroll", onScroll, { passive: true });

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    let animId;
    const tick = () => {
      animId = requestAnimationFrame(tick);
      const t = Date.now() * 0.00022;
      pts.rotation.y = t * 0.1 + mx * 0.05;
      pts.rotation.x = t * 0.04 + my * 0.03;
      renderer.render(scene, camera);
    };
    tick();

    return () => {
      cancelAnimationFrame(animId);
      document.removeEventListener("mousemove", onMouse);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed", inset: 0,
        zIndex: 0, pointerEvents: "none", opacity: 0.5,
      }}
    />
  );
}
