import { useRef } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { TextureLoader } from 'three';
import * as THREE from 'three';

const Planet = (props: THREE.Mesh) => {
  const planetRef = useRef<THREE.Mesh>(null!);
  const planetRef2 = useRef<THREE.Mesh>(null!);
  const planetRef3 = useRef<THREE.Mesh>(null!);
  const cloudRef = useRef<THREE.Mesh>(null!);

  const [
    colorMap,
    normalMap,
    specularMap,
    clouds,
    colormap2,
    displacement2,
    roughness2,
  ] = useLoader(TextureLoader, [
    './models/textures/planet_surface_Normal-bl/planet_surface_Height.png',
    './models/textures/planet_surface_Normal-bl/planet_surface_Normal-ogl.png',
    './models/textures/planet_surface_Normal-bl/planet_surface_Metallic.png',
    './models/textures/planet_surface_Normal-bl/8k_earth_clouds.jpg',
    './models/textures/forest/forest_leaves_02_diffuse_4k.jpg',
    './models/textures/forest/forest_leaves_02_disp_4k.png',
    './models/textures/forest/forest_leaves_02_rough_4k.jpg',
  ]);

  useFrame(({ clock }) => {
    // Calculate the rotation angle based on time
    const elapsedTime = clock.getElapsedTime();
    const rotationSpeed = 0.03; // Adjust the rotation speed as needed
    const rotationX = Math.sin(elapsedTime * rotationSpeed);
    const rotationY = Math.cos(elapsedTime * rotationSpeed);

    planetRef.current.rotation.x = rotationX * 2;
    planetRef.current.rotation.y = rotationY * 2;

    planetRef2.current.rotation.x = rotationX * 2;
    planetRef2.current.rotation.y = rotationY * 2;

    planetRef3.current.rotation.x = rotationX;
    planetRef3.current.rotation.y = rotationY;

    cloudRef.current.rotation.x = rotationX;
    cloudRef.current.rotation.y = rotationY;
  });

  return (
    <>
      <pointLight color='#f6f3ea' position={[2, 0, -15]} intensity={0.5} />
      <mesh
        {...props}
        castShadow
        receiveShadow
        ref={planetRef}
        position={[-7, 1, -25]}
        scale={[0.2, 0.2, 0.2]}
      >
        <sphereGeometry args={[4, 32, 32]} />
        <meshPhongMaterial
          specularMap={specularMap}
          depthWrite={true}
          side={THREE.DoubleSide}
        />
        <meshStandardMaterial
          map={colorMap}
          normalMap={normalMap}
          metalness={0.4}
          roughness={0.8}
        />
      </mesh>

      <mesh
        {...props}
        castShadow
        receiveShadow
        ref={planetRef2}
        position={[-20, 10, -55]}
        scale={[2, 2, 2]}
      >
        <sphereGeometry args={[2, 64, 64]} />
        <meshPhongMaterial
          specularMap={specularMap}
          depthWrite={true}
          side={THREE.DoubleSide}
        />
        <meshStandardMaterial
          map={colormap2}
          normalMap={normalMap}
          metalness={0.4}
          displacementMap={displacement2}
          roughnessMap={roughness2}
        />
      </mesh>

      <mesh
        {...props}
        castShadow
        receiveShadow
        ref={planetRef3}
        position={[-5, 20, -200]}
        scale={[2, 2, 2]}
      >
        <sphereGeometry args={[2, 32, 32]} />
        <meshPhongMaterial
          specularMap={specularMap}
          depthWrite={true}
          side={THREE.DoubleSide}
        />
        <meshStandardMaterial
          map={colormap2}
          normalMap={normalMap}
          metalness={0.4}
          displacementMap={displacement2}
          roughnessMap={roughness2}
        />
      </mesh>

      <mesh
        {...props}
        ref={cloudRef}
        castShadow
        receiveShadow
        position={[-800, 0, -500]}
        scale={2}
      >
        <sphereGeometry args={[1.3, 32, 32]} />
        <meshPhongMaterial
          map={clouds}
          opacity={0.8}
          depthWrite={true}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
    </>
  );
};

export default Planet;
