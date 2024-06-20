import React, { Suspense, useEffect, useState, FC, useRef } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';

import { ThreeElements } from '@react-three/fiber';
import THREE from 'three';

const Model = (props: ThreeElements['mesh']) => {
  const [clicked, click] = useState(false);
  const [hovered, hover] = useState(false);
  const ref = useRef(null!);
  const model = useGLTF('../models/astronaut.glb');

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='white' />
      <spotLight
        position={[0, -10, 0]}
        angle={0.12}
        penumbra={1}
        intensity={hovered ? 2 : 1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        {...props}
        ref={ref}
        object={model.scene}
        scale={clicked ? 1.5 : 1.4}
        onClick={(event: EventTarget) => click(!clicked)}
        rotation={[0, 1.8, 0]}
        position={[0, -3.5, 0]}
        onPointerOver={(event: EventTarget) => hover(true)}
        onPointerOut={(event: EventTarget) => hover(false)}
      />
    </mesh>
  );
};

export default Model;
