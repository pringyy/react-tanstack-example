import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import { Mesh, DoubleSide, BoxGeometry, MeshBasicMaterial, CylinderGeometry, ConeGeometry } from "three";

const F1Car: React.FC = () => {
  const carRef = useRef<Mesh>();
  const [speed, setSpeed] = useState(0.1);

  useFrame((state) => {
   
  });

  return (
    <mesh ref={carRef}>
      <boxGeometry args={[4, 2, 1]} />
      <meshBasicMaterial side={DoubleSide} />
      <mesh position={[2, 1, 0.5]}>
        <cylinderGeometry args={[0.5, 0.5, 2, 20]} />
        <meshBasicMaterial />
      </mesh>
      <mesh position={[-2, 1, 0.5]}>
        <cylinderGeometry args={[0.5, 0.5, 2, 20]} />
        <meshBasicMaterial />
      </mesh>
      <mesh position={[0, 1, -1]}>
        <coneGeometry args={[1, 2, 20]} />
        <meshBasicMaterial />
      </mesh>
    </mesh>
  );
};

const AnimatedF1Car: React.FC = () => {
  return (
    <Canvas>
      <ambientLight />
      <F1Car />
    </Canvas>
  );
};

export default AnimatedF1Car;
