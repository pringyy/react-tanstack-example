import React, { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { Mesh } from 'three';
import {boxBuffer}

function RotatingCube() {
  const cubeRef = useRef<Mesh>();

  useFrame((state) => {
    cubeRef.current!.rotation.x = cubeRef.current!.rotation.y += 0.01;
  });

  if (!cubeRef) return <>Error</>
  return (
    <mesh ref={cubeRef}>
      <boxBufferGeometry />
      <meshStandardMaterial />
    </mesh>
  );
}

export default RotatingCube;

package main

  