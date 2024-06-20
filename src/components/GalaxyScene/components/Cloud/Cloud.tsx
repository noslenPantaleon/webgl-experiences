import React, { useRef, useMemo } from 'react';

import { useLoader, useFrame, extend } from '@react-three/fiber';
import * as THREE from 'three';
import { Object3D, TextureLoader, PlaneGeometry } from 'three';

extend({ PlaneGeometry });
interface CloudProps {}

const Cloud: React.FC<CloudProps> = () => {
  const tempObject = useMemo(() => new Object3D(), []);
  const ref = useRef<THREE.InstancedMesh>(null!);
  const texture = useLoader(
    TextureLoader,
    '/models/textures/smoke.png'
  ) as THREE.Texture;

  const particles = useMemo(() => {
    const cloudParticles = [];
    for (let p = 0; p < 5000; p++) {
      const positionX = Math.random() * 200 - 400;
      const positionZ = Math.random() * 500 - 500;
      const rotationZ = Math.random() * 2 * Math.PI;
      cloudParticles.push({
        positionX,
        positionZ,
        rotationZ,
      });
    }
    return cloudParticles;
  }, []);

  useFrame(() => {
    particles.forEach((particle, i) => {
      let { positionX, positionZ, rotationZ } = particle;
      tempObject.position.set(positionX, positionZ, positionZ);
      tempObject.rotation.set(0, 0, rotationZ);
      tempObject.updateMatrix();
      ref.current.setMatrixAt(i, tempObject.matrix);
    });
    particles.forEach((particle) => (particle.rotationZ -= 0.001));
    if (ref.current) {
      ref.current.instanceMatrix.needsUpdate = true;
    }
  });

  return (
    <instancedMesh ref={ref} args={[null as any, null as any, 50]}>
      <planeGeometry attach='geometry' args={[500, 500]} />
      <meshLambertMaterial
        attach='material'
        map={texture}
        depthWrite={false}
        color={'#9fe6ff'}
        transparent
        opacity={0.125}
      />

      <planeGeometry attach='geometry' args={[1500, 1500]} />
    </instancedMesh>
  );
};
export default Cloud;
