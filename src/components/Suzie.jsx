import * as THREE from "three";
import { useSprings, a } from "@react-spring/three";
import { useEffect } from "react";

export default function Suzie() {
  const length = 35;
  const colors = ["#2a9d8f", "#e9c46a", "#EE786E", "#f4a261", "#264653"];
  const data = Array.from({ length }, () => ({
    args: [0.1 + Math.random() * 9, 0.1 + Math.random() * 9, 10],
  }));
  const random = (i) => {
    const r = Math.random();
    return {
      position: [100 - Math.random() * 200, 100 - Math.random() * 200, i * 1.5],
      color: colors[Math.round(Math.random() * (colors.length - 1))],
      scale: [1 + r * 14, 1 + r * 14, 1],
      rotation: [
        0,
        0,
        THREE.MathUtils.degToRad(Math.round(Math.random()) * 45),
      ],
    };
  };

  const [springs, set] = useSprings(length, (i) => ({
    from: random(i),
    ...random(i),
    config: { mass: 20, tension: 150, friction: 50 },
  }));
  useEffect(
    () =>
      void setInterval(
        () => set((i) => ({ ...random(i), delay: i * 40 })),
        3000
      ),
    []
  );
  return data.map((d, index) => (
    <a.mesh key={index} {...springs[index]} castShadow receiveShadow>
      <boxBufferGeometry args={d.args} />
      <a.meshStandardMaterial
        color={springs[index].color}
        roughness={0.75}
        metalness={0.5}
      />
    </a.mesh>
  ));
}
