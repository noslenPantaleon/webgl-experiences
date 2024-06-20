import React, { useLayoutEffect, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { useScroll } from '@react-three/drei';

import gsap from 'gsap';

import GalaxyParticles from './components/GalaxyParticules/GalaxyParticules';

const GalaxyControls: React.FC = () => {
  const camera = useThree((state) => state.camera);
  const scroll = useScroll();
  const timeLineRef = useRef<gsap.core.Timeline | null>(null);
  const galaxyRef = useRef<THREE.Mesh | null>(null);

  useFrame(() => {
    timeLineRef.current?.seek(scroll.offset * timeLineRef.current.duration());
  });

  useLayoutEffect(() => {
    if (galaxyRef.current) {
      timeLineRef.current = gsap.timeline();

      timeLineRef.current.to(
        galaxyRef.current.position,
        {
          duration: 3,
          z: 600,
        },
        0
      );
    }
  }, [galaxyRef.current]);

  return (
    <GalaxyParticles
      forwardedRef={galaxyRef}
      minPointSize={0.5}
      maxPointSize={2}
    />
  );
};

export default GalaxyControls;
