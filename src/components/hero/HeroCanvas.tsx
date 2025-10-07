"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  Html,
  OrbitControls,
  Points,
  PointMaterial,
} from "@react-three/drei";
import * as React from "react";
import * as THREE from "three";

function Shape() {
  const materialRef = React.useRef<THREE.MeshStandardMaterial>(null);
  const meshRef = React.useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = React.useState(false);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const hue = (t * 12) % 360;
    if (materialRef.current) {
      materialRef.current.color.set(`hsl(${hue},70%,55%)`);
      materialRef.current.emissive.set(
        `hsl(${hue},50%,${hovered ? 0.3 : 0.1})`
      );
    }
    if (meshRef.current) {
      meshRef.current.rotation.y += hovered ? 0.02 : 0.005;
      meshRef.current.scale.setScalar(hovered ? 1.1 : 1);
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.6} floatIntensity={0.8}>
      <mesh
        ref={meshRef}
        castShadow
        receiveShadow
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <torusKnotGeometry args={[1.2, 0.35, 200, 16]} />
        <meshStandardMaterial
          ref={materialRef}
          metalness={0.3}
          roughness={0.2}
          emissiveIntensity={hovered ? 0.3 : 0.1}
        />
      </mesh>
    </Float>
  );
}

function StarField() {
  const ref = React.useRef<THREE.Points>(null);
  const [positions] = React.useState(() => {
    const arr = new Float32Array(1500 * 3);
    for (let i = 0; i < 1500; i++) {
      const r = 6;
      arr[i * 3 + 0] = (Math.random() - 0.5) * r * 2;
      arr[i * 3 + 1] = (Math.random() - 0.5) * r * 2;
      arr[i * 3 + 2] = (Math.random() - 0.5) * r * 2;
    }
    return arr;
  });
  useFrame(() => {
    if (!ref.current) return;
    ref.current.rotation.y += 0.0008;
    ref.current.rotation.x += 0.0002;
  });
  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color="#9ca3af"
        size={0.02}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

export function HeroCanvas() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }} shadows>
        <color attach="background" args={["#fafafa"]} />
        <hemisphereLight intensity={0.6} groundColor="#e5e5e5" />
        <directionalLight position={[5, 5, 5]} intensity={0.8} castShadow />
        <StarField />
        <group position={[0, 0, 0]}>
          <Shape />
        </group>
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.6}
        />
        <Html center className="sr-only">
          3D hero
        </Html>
      </Canvas>
    </div>
  );
}
