import { Environment, ScrollControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Camera from '../components/Commons/WebGl/Camera/Camera';
import LineGeometriesControl from '../components/Geometrics/LinesGeometries/LineGeometriesControl';
import './geometries.css';
import { rhombusIndices } from '../components/Geometrics/LinesGeometries/utils/rhombus/rhombusIndices';
import { rhombusVertices } from '../components/Geometrics/LinesGeometries/utils/rhombus/rhombusVertices';
import { tetrahedronIndices } from '../components/Geometrics/LinesGeometries/utils/tetrahedron/tetrahedronIndices';
import { tetrahedronVertices } from '../components/Geometrics/LinesGeometries/utils/tetrahedron/tetrahedronVertices';

import { useRef } from 'react';
import * as THREE from 'three';
import { tetrahedronAnimations } from '../components/Geometrics/LinesGeometries/utils/tetrahedron/animations';
import { rhombusAnimations } from '../components/Geometrics/LinesGeometries/utils/rhombus/animations';

const Geometries = () => {
  const rhombusRef = useRef<THREE.Mesh>(null);
  const tetrahedron = useRef<THREE.Mesh>(null);

  return (
    <main className='geometryContainer'>
      <Canvas>
        <Camera />
        <ScrollControls pages={4} damping={0.25}>
          <LineGeometriesControl
            index={rhombusIndices}
            vertex={rhombusVertices}
            meshRef={rhombusRef}
            animations={rhombusAnimations}
            // rotationSpeed={0.05}
          />

          <LineGeometriesControl
            index={tetrahedronIndices}
            vertex={tetrahedronVertices}
            meshRef={tetrahedron}
            animations={tetrahedronAnimations}
            // rotationSpeed={0.05}
          />

          <ambientLight intensity={1.6} />
          <Environment preset='sunset' />
        </ScrollControls>
      </Canvas>
    </main>
  );
};

export default Geometries;
