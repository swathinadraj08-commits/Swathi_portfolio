"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function generateSphere() {
  const positions = new Float32Array(1200 * 3);
  for (let i = 0; i < 1200; i++) {
    const r = 10 * Math.cbrt(Math.random());
    const theta = Math.random() * 2 * Math.PI;
    const phi = Math.acos(2 * Math.random() - 1);
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
  }
  return positions;
}

function Starfield() {
  const ref = useRef<THREE.Points>(null);
  const [sphere] = useState(() => generateSphere());

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 25;
      ref.current.rotation.y -= delta / 35;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#cbd5e1"
          size={0.012}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  );
}

export default function GlobalCanvas() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none bg-gradient-to-b from-[#05060A] via-[#080b14] to-[#05060A]">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <Starfield />
      </Canvas>
    </div>
  );
}
