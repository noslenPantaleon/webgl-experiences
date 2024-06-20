import React, { useState, useRef } from 'react';
import { Float, MeshWobbleMaterial, useGLTF } from '@react-three/drei';

import { ThreeElements } from '@react-three/fiber';
import THREE from 'three';
import { Html } from '@react-three/drei';

const Ship = (props: ThreeElements['mesh']) => {
  const [clicked, setClicked] = useState(false);

  const ref = useRef<THREE.Mesh>(null!);
  const model = useGLTF('../models/ship.glb');

  // useFrame(() => {
  //   ref.current.rotation.y += 0.002;
  // });
  return (
    <Float
      speed={1} // Animation speed, defaults to 1
      rotationIntensity={0.1}
      floatIntensity={0.2}
      floatingRange={[0, 3]}
    >
      <mesh>
        <hemisphereLight intensity={0.1} groundColor='blue' />
        <spotLight
          position={[35, 400, 500]}
          angle={0.12}
          penumbra={1}
          intensity={1}
          castShadow
          shadow-mapSize={1024}
        />

        {/* <Html
        transform
        occlude
        position={[1.2, 2.5, 1.5]}
        rotation={[0, -4.7, 0]}
        style={{ color: 'white' }}
      >
        {' '}
        <h1>hello</h1>
      </Html> */}
        <primitive
          {...props}
          ref={ref}
          object={model.scene}
          scale={3}
          onMouseOver={(event: EventTarget) => setClicked(!clicked)}
          rotation={[0, 180, 0]}
          position={[-210, 40, 720]}
          // onPointerOver={(event: EventTarget) => hover(true)}
          // onPointerOut={(event: EventTarget) => hover(false)}
        />
        <MeshWobbleMaterial factor={0.3} speed={0.4} />
      </mesh>
    </Float>
  );
};

export default Ship;
