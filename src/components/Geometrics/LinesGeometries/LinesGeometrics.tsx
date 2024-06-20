import React, { forwardRef, ForwardedRef } from 'react';
import { BufferGeometry, Float32BufferAttribute, Mesh } from 'three';

import { GradientTexture } from '@react-three/drei';

interface Props {
  meshRef: ForwardedRef<Mesh>;
  indices: number[];
  vertices: Float32BufferAttribute;
}

const Geometrics: React.FC<Props> = forwardRef(
  ({ meshRef, indices, vertices }, _) => {
    const geometry = new BufferGeometry();

    geometry.setIndex(indices);
    geometry.setAttribute('position', vertices);

    return (
      <>
        <mesh
          ref={meshRef}
          geometry={geometry}
          scale={[15, 15, 15]}
          rotation={[0, 0, 0]}
          position={[0, 0, -50]}
          receiveShadow
        >
          <meshBasicMaterial
            fog
            wireframe
            reflectivity={200}
            wireframeLinewidth={5}
            wireframeLinecap={'butt'}
          >
            <GradientTexture
              stops={[0, 0.8, 1, 0.8]}
              colors={['#08222b', '#103846', '#287089', '#9fe6ff']}
              size={2000}
            />
          </meshBasicMaterial>
        </mesh>
      </>
    );
  }
);

export default Geometrics;
