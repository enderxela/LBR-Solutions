"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import type { Group } from "three";

const FRAME_COLOR = "#2a2f3a";
const BED_COLOR = "#15181f";
const PRIMARY_COLOR = "#ff6a1a";
const ACCENT_COLOR = "#29d6e8";

function PrinterModel() {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.08;
  });

  return (
    <group ref={groupRef}>
      {/* Socle */}
      <mesh position={[0, -0.9, 0]}>
        <boxGeometry args={[2.4, 0.12, 1.8]} />
        <meshStandardMaterial color={BED_COLOR} flatShading />
      </mesh>

      {/* Plateau d'impression */}
      <mesh position={[0, -0.8, 0]}>
        <boxGeometry args={[1.8, 0.06, 1.4]} />
        <meshStandardMaterial color={FRAME_COLOR} flatShading />
      </mesh>

      {/* Montant gauche */}
      <mesh position={[-1.05, 0, 0]}>
        <boxGeometry args={[0.12, 1.8, 0.12]} />
        <meshStandardMaterial color={FRAME_COLOR} flatShading />
      </mesh>

      {/* Montant droit */}
      <mesh position={[1.05, 0, 0]}>
        <boxGeometry args={[0.12, 1.8, 0.12]} />
        <meshStandardMaterial color={FRAME_COLOR} flatShading />
      </mesh>

      {/* Barre du portique (rail X) */}
      <mesh position={[0, 0.9, 0]}>
        <boxGeometry args={[2.4, 0.12, 0.12]} />
        <meshStandardMaterial color={FRAME_COLOR} flatShading />
      </mesh>

      {/* Tête d'extrusion */}
      <mesh position={[0, 0.65, 0.3]}>
        <boxGeometry args={[0.4, 0.3, 0.3]} />
        <meshStandardMaterial color={PRIMARY_COLOR} flatShading />
      </mesh>

      {/* Buse */}
      <mesh position={[0, 0.42, 0.3]} rotation={[Math.PI, 0, 0]}>
        <coneGeometry args={[0.08, 0.22, 16]} />
        <meshStandardMaterial color={PRIMARY_COLOR} flatShading />
      </mesh>

      {/* Objet en cours d'impression */}
      <mesh position={[0, -0.45, 0.3]} rotation={[0.3, 0.5, 0]}>
        <octahedronGeometry args={[0.35, 0]} />
        <meshStandardMaterial color={ACCENT_COLOR} flatShading />
      </mesh>

      {/* Bobine de filament */}
      <mesh position={[-1.05, 0.9, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.32, 0.1, 12, 32]} />
        <meshStandardMaterial color={ACCENT_COLOR} flatShading />
      </mesh>
    </group>
  );
}

export default function Printer3D() {
  return (
    <Canvas
      camera={{ position: [2.4, 1.6, 3.2], fov: 35 }}
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 5, 5]} intensity={1.2} />
      <pointLight position={[-3, 2, 2]} intensity={0.8} color={ACCENT_COLOR} />
      <pointLight position={[2, -2, 3]} intensity={0.5} color={PRIMARY_COLOR} />
      <PrinterModel />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={1.2}
        enableDamping
      />
    </Canvas>
  );
}
