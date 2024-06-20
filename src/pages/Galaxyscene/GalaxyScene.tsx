import { Canvas } from '@react-three/fiber';
import { Html, PerspectiveCamera, ScrollControls } from '@react-three/drei';
import GalaxyControls from '../../components/GalaxyScene/GalaxyControls';
import { Suspense } from 'react';
import CanvasLoader from '../../components/Commons/WebGl/CanvasLoader/Loader';
import './galaxyScene.css';

const GalaxyScene: React.FC = () => {
  return (
    <main className='sectionContainer'>
      <Canvas>
        <Suspense fallback={<CanvasLoader />}>
          <PerspectiveCamera position={[0, 0, 30]} fov={70} filmOffset={50} />
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <pointLight color={0x555555} position={[0, 0, 0]} intensity={2} />
          <ScrollControls pages={2} damping={0.25}>
            <GalaxyControls />
            {/* <Html center>
              <section className='container'>
                <div>
                  <h1>Welcome to the Galaxy</h1>

                  <p>
                    We are a team with strong skills to build apps fast and
                    scalable with reusable components.
                  </p>
                </div>
              </section>
            </Html> */}
          </ScrollControls>
        </Suspense>
      </Canvas>
    </main>
  );
};

export default GalaxyScene;
