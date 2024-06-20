import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function CameraRig({ children }: { children: React.ReactNode }) {
  const group = useRef<THREE.Group | null>(null);
  const pointer = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const canvas = document.querySelector('canvas');
      if (canvas) {
        const canvasRect = canvas.getBoundingClientRect();

        const mouseX = event.clientX - canvasRect.left;
        const mouseY = event.clientY - canvasRect.top;

        // Calculate the mouse position relative to the canvas
        pointer.current = {
          x: (mouseX / canvasRect.width) * 2 - 1,
          y: -(mouseY / canvasRect.height) * 2 + 1,
        };
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.x = pointer.current.y / 25;
      group.current.rotation.y = pointer.current.x / 5;
    }
  });

  return <group ref={group}>{children}</group>;
}
