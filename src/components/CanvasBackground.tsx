"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Stars, Html, Sphere } from "@react-three/drei";
import * as THREE from "three";
import { useThree } from "@react-three/fiber";

const PROJECTS = [
  "RetailAssist", "SalesForge", "DocuMind", "NeuroGraph", "OmniRAG", 
  "Synthetica", "QuantumFlow", "Somnium", "Visionary"
];

function OrbitingProjects({ isMobile }: { isMobile: boolean }) {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {PROJECTS.map((title, i) => {
        const phi = Math.acos(-1 + (2 * i) / PROJECTS.length);
        const theta = Math.sqrt(PROJECTS.length * Math.PI) * phi;
        const radius = isMobile ? 3.8 : 5.5; 
        
        const x = radius * Math.cos(theta) * Math.sin(phi);
        const y = radius * Math.sin(theta) * Math.sin(phi);
        const z = radius * Math.cos(phi);

        return (
          <group key={i} position={[x, y, z]}>
            <Html center transform distanceFactor={isMobile ? 10 : 15}>
              <div className="text-[#ec4899] font-bold text-[8px] md:text-xs uppercase tracking-widest whitespace-nowrap px-2 py-1 rounded bg-black/60 border border-fuchsia-500/30 backdrop-blur-md"
                   style={{ textShadow: "0 4px 10px rgba(0,0,0,1)" }}>
                {title}
              </div>
            </Html>
            <mesh>
              <sphereGeometry args={[isMobile ? 0.05 : 0.08, 16, 16]} />
              <meshBasicMaterial color="#ec4899" />
            </mesh>
          </group>
        );
      })}
    </group>
  );
}

function RotatingCore() {
  const meshRef = useRef<THREE.Group>(null!);
  const wireRef = useRef<THREE.Mesh>(null!);
  const { size } = useThree();
  
  const isMobile = size.width < 768;
  const positionX = isMobile ? 0 : 5; // Centers perfectly on mobile

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.3;
    }
    if (wireRef.current) {
       wireRef.current.rotation.x -= delta * 0.1;
       wireRef.current.rotation.y -= delta * 0.15;
    }
  });

  return (
    <group position={[positionX, isMobile ? 2 : 0, 0]} ref={meshRef}>
      <Html center transform distanceFactor={10}>
        <div className="font-outfit font-black text-6xl text-white tracking-tighter mix-blend-screen"
             style={{ textShadow: "0 0 30px #d946ef, 0 0 60px #22d3ee" }}>
          specAI
        </div>
      </Html>

      <Sphere args={[1, 32, 32]} scale={1.2}>
        <meshBasicMaterial color="#a855f7" transparent opacity={0.15} wireframe />
      </Sphere>

      <mesh ref={wireRef} scale={isMobile ? 2 : 2.5}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial 
          color="#06b6d4" 
          emissive="#22d3ee" 
          emissiveIntensity={1.5} 
          wireframe 
          transparent
          opacity={0.4}
        />
      </mesh>
      
      <OrbitingProjects isMobile={isMobile} />
    </group>
  );
}

export default function CanvasBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-90 overflow-hidden" style={{ mixBlendMode: 'screen' }}>
      <Canvas camera={{ position: [0, 0, 15], fov: 45 }} gl={{ antialias: false, powerPreference: "high-performance" }}>
        <fog attach="fog" args={["#050014", 10, 30]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={2} color="#8b5cf6" />
        <directionalLight position={[-10, -10, -10]} intensity={1} color="#22d3ee" />
        
        <Stars radius={50} depth={50} count={3000} factor={4} saturation={1} fade speed={2} />
        
        <RotatingCore />
      </Canvas>
    </div>
  );
}
