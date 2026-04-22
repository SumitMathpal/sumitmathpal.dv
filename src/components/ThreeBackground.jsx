import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: "high-performance" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    const scene = new THREE.Scene();

    // ── Camera Setup ──────────────────────────────────────────────
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1500);
    camera.position.z = 80;
    camera.position.y = 15;

    // ── 1. Fluid Particle Waves ───────────────────────────────────
    const waveParticles = 1200;
    const waveGeo = new THREE.BufferGeometry();
    const wavePos = new Float32Array(waveParticles * 3);
    const waveColors = new Float32Array(waveParticles * 3);

    // Color palette for waves
    const colorA = new THREE.Color(0x1A6FD4); // Blue
    const colorB = new THREE.Color(0x0E8A5F); // Green
    const colorC = new THREE.Color(0x9B6CF0); // Purple

    const size = 180;
    let i3 = 0;
    for (let i = 0; i < waveParticles; i++) {
      wavePos[i3] = (Math.random() - 0.5) * size;     // X
      wavePos[i3 + 1] = 0;                            // Y (Updated in render)
      wavePos[i3 + 2] = (Math.random() - 0.5) * size; // Z

      // Mix colors randomly
      const mixed = Math.random() > 0.5 ? colorA.clone().lerp(colorB, Math.random()) : colorB.clone().lerp(colorC, Math.random());
      
      waveColors[i3] = mixed.r;
      waveColors[i3 + 1] = mixed.g;
      waveColors[i3 + 2] = mixed.b;

      i3 += 3;
    }

    waveGeo.setAttribute('position', new THREE.BufferAttribute(wavePos, 3));
    waveGeo.setAttribute('color', new THREE.BufferAttribute(waveColors, 3));

    const waveMat = new THREE.PointsMaterial({
      size: 0.6,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending
    });
    const waveCloud = new THREE.Points(waveGeo, waveMat);
    waveCloud.position.y = -25;
    scene.add(waveCloud);

    // ── 2. Neural Plexus Network ───────────────────────────────────
    const plexusCount = 180;
    const plexusGeo = new THREE.BufferGeometry();
    const plexusPos = new Float32Array(plexusCount * 3);
    const plexusVel = []; // Velocities

    // The bounds where the plexus particles live
    const bounds = 60;
    for (let i = 0; i < plexusCount; i++) {
      plexusPos[i * 3] = (Math.random() - 0.5) * bounds;
      plexusPos[i * 3 + 1] = (Math.random() - 0.5) * bounds;
      plexusPos[i * 3 + 2] = (Math.random() - 0.5) * bounds;

      plexusVel.push({
        x: (Math.random() - 0.5) * 0.15,
        y: (Math.random() - 0.5) * 0.15,
        z: (Math.random() - 0.5) * 0.15
      });
    }

    plexusGeo.setAttribute('position', new THREE.BufferAttribute(plexusPos, 3));
    const plexusMat = new THREE.PointsMaterial({
      color: 0x2B8BE8,
      size: 1.2,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending
    });
    const plexusPoints = new THREE.Points(plexusGeo, plexusMat);
    scene.add(plexusPoints);

    // Lines to connect particles
    const maxConnections = (plexusCount * (plexusCount - 1)) / 2;
    const lineGeo = new THREE.BufferGeometry();
    const linePos = new Float32Array(maxConnections * 6);
    const lineOpacities = new Float32Array(maxConnections * 2);

    lineGeo.setAttribute('position', new THREE.BufferAttribute(linePos, 3).setUsage(THREE.DynamicDrawUsage));
    lineGeo.setAttribute('color', new THREE.BufferAttribute(lineOpacities, 3).setUsage(THREE.DynamicDrawUsage));

    const lineMat = new THREE.LineBasicMaterial({
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      transparent: true,
      depthWrite: false
    });
    const plexusLines = new THREE.LineSegments(lineGeo, lineMat);
    scene.add(plexusLines);

    // ── 3. Interaction & Parallax ──────────────────────────────────
    let mx = 0, my = 0, targetMx = 0, targetMy = 0;
    const onMouse = (e) => {
      targetMx = (e.clientX / window.innerWidth - 0.5) * 2;
      targetMy = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    document.addEventListener("mousemove", onMouse);

    const onScroll = () => {
      targetMy += window.scrollY * 0.001;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    // ── Render Loop ────────────────────────────────────────────────
    let animId;
    let time = 0;

    const tick = () => {
      animId = requestAnimationFrame(tick);
      time += 0.015;

      // Smooth mouse lerp
      mx += (targetMx - mx) * 0.05;
      my += (targetMy - my) * 0.05;

      // 1. Animate Wave plane
      const positions = waveCloud.geometry.attributes.position.array;
      for (let i = 0; i < waveParticles; i++) {
        const x = positions[i * 3];
        const z = positions[i * 3 + 2];
        // Mathematical wave interference pattern
        positions[i * 3 + 1] = Math.sin(x * 0.05 + time) * 3 + Math.cos(z * 0.05 + time * 0.8) * 3;
      }
      waveCloud.geometry.attributes.position.needsUpdate = true;
      waveCloud.rotation.y = time * 0.04 + mx * 0.1;

      // 2. Animate Plexus
      const pPos = plexusPoints.geometry.attributes.position.array;
      const connectDistanceSq = 14 * 14; 
      let lineIndex = 0;
      let colorIndex = 0;

      for (let i = 0; i < plexusCount; i++) {
        // Update positions using velocity
        pPos[i * 3] += plexusVel[i].x;
        pPos[i * 3 + 1] += plexusVel[i].y;
        pPos[i * 3 + 2] += plexusVel[i].z;

        // Bounce bounds
        if (pPos[i * 3] > bounds / 2 || pPos[i * 3] < -bounds / 2) plexusVel[i].x *= -1;
        if (pPos[i * 3 + 1] > bounds / 2 || pPos[i * 3 + 1] < -bounds / 2) plexusVel[i].y *= -1;
        if (pPos[i * 3 + 2] > bounds / 2 || pPos[i * 3 + 2] < -bounds / 2) plexusVel[i].z *= -1;

        // Check connections
        for (let j = i + 1; j < plexusCount; j++) {
          const dx = pPos[i * 3] - pPos[j * 3];
          const dy = pPos[i * 3 + 1] - pPos[j * 3 + 1];
          const dz = pPos[i * 3 + 2] - pPos[j * 3 + 2];
          const distSq = dx * dx + dy * dy + dz * dz;

          if (distSq < connectDistanceSq) {
            // Draw line
            linePos[lineIndex++] = pPos[i * 3];
            linePos[lineIndex++] = pPos[i * 3 + 1];
            linePos[lineIndex++] = pPos[i * 3 + 2];
            
            linePos[lineIndex++] = pPos[j * 3];
            linePos[lineIndex++] = pPos[j * 3 + 1];
            linePos[lineIndex++] = pPos[j * 3 + 2];

            // Intensity based on distance
            const alpha = 1.0 - (distSq / connectDistanceSq);
            const lineCol = new THREE.Color(0x9B6CF0).lerp(new THREE.Color(0x0E8A5F), alpha);

            lineOpacities[colorIndex++] = lineCol.r * alpha;
            lineOpacities[colorIndex++] = lineCol.g * alpha;
            lineOpacities[colorIndex++] = lineCol.b * alpha;

            lineOpacities[colorIndex++] = lineCol.r * alpha;
            lineOpacities[colorIndex++] = lineCol.g * alpha;
            lineOpacities[colorIndex++] = lineCol.b * alpha;
          }
        }
      }

      plexusPoints.geometry.attributes.position.needsUpdate = true;
      
      // Update line segments
      plexusLines.geometry.setDrawRange(0, lineIndex / 3);
      plexusLines.geometry.attributes.position.needsUpdate = true;
      plexusLines.geometry.attributes.color.needsUpdate = true;
      
      plexusPoints.rotation.y = time * 0.02 + mx * 0.2;
      plexusPoints.rotation.x = time * 0.01 - my * 0.2;
      plexusLines.rotation.y = time * 0.02 + mx * 0.2;
      plexusLines.rotation.x = time * 0.01 - my * 0.2;

      // Parallax Camera Adjustments
      camera.position.x += (mx * 8 - camera.position.x) * 0.02;
      camera.position.y += (15 + my * 4 - camera.position.y) * 0.02;
      camera.lookAt(0, 0, 0);

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
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        opacity: 0.85, // Stronger visibility
      }}
    />
  );
}
