import { Environment, OrbitControls, ScrollControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Camera from '../components/Commons/WebGl/Camera/Camera';
import { Model } from '../components/Commons/WebGl/Model/Model';

const BikeScroll = () => {
  return (
    <main>
      <Canvas>
        <ScrollControls pages={4} damping={0.25}>
          <Camera />
          <Model />
        </ScrollControls>
        <ambientLight intensity={1.6} />
        <Environment preset='sunset' />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </main>
  );
};

export default BikeScroll;
