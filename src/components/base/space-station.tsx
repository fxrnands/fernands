// src/components/base/space-station.tsx
import { useGLTF } from "@react-three/drei";
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface Props {
  scrollY: number;
}

export default function SpaceStation({ scrollY }: Props) {
  const ref = useRef<any>(null);
  const { scene } = useGLTF("/models/space-station.glb");

  const basePosition = new THREE.Vector3(3, -1, 2);

  const [currentPos] = useState(() => basePosition.clone());

  const [motionParams] = useState(() => ({
    ampX: 0.6 + Math.random() * 0.4,
    ampY: 0.4 + Math.random() * 0.3,
    ampZ: 0.3 + Math.random() * 0.2,
    phaseX: Math.random() * Math.PI * 2,
    phaseY: Math.random() * Math.PI * 2,
    phaseZ: Math.random() * Math.PI * 2,
  }));

  useFrame(() => {
    if (ref.current) {
      const progress = Math.min(scrollY / 4000, 1);
      const t = progress * Math.PI * 2;

      const { ampX, ampY, ampZ, phaseX, phaseY, phaseZ } = motionParams;

      const offsetX = Math.sin(t + phaseX) * ampX;
      const offsetY = Math.cos(t + phaseY) * ampY;
      const offsetZ = Math.sin(t + phaseZ) * ampZ;

      const target = basePosition
        .clone()
        .add(new THREE.Vector3(offsetX, offsetY, offsetZ));

      currentPos.lerp(target, 0.05);
      ref.current.position.copy(currentPos);

      ref.current.rotation.y += 0.003;
      ref.current.rotation.x = Math.PI / 6;
    }
  });

  return <primitive ref={ref} object={scene} scale={0.08} />;
}
