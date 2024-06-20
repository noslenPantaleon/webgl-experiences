import { MutableRefObject } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

export const useMeshRotation = (
  meshRef: MutableRefObject<Mesh | null>,
  rotationSpeed: number
): void => {
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.cos(elapsedTime * rotationSpeed) * 2;
    }
  });
};
