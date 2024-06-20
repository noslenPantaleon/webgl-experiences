import React, {
  useMemo,
  forwardRef,
  ForwardedRef,
  useRef,
  useEffect,
} from 'react';
import * as THREE from 'three';
import Cloud from '../Cloud/Cloud';
import Planet from '../Planet/Planet';
import { Html, Text } from '@react-three/drei';
import { fragmentShader, vertexShader } from './shader';

interface Props {
  forwardedRef: ForwardedRef<any>;
  minPointSize: number;
  maxPointSize: number;
}

const GalaxyParticles: React.FC<Props> = forwardRef(
  ({ forwardedRef, minPointSize, maxPointSize }, _) => {
    const shaderMaterial = useRef<THREE.ShaderMaterial>();
    const clock = useRef<THREE.Clock | undefined>();

    useEffect(() => {
      clock.current = new THREE.Clock();
      const animate = () => {
        if (shaderMaterial.current) {
          shaderMaterial.current.uniforms.time.value =
            clock.current?.getElapsedTime();
        }
        requestAnimationFrame(animate);
      };
      animate();
    }, []);

    const galaxyGeometry = useMemo(() => {
      const geometry = new THREE.BufferGeometry();
      const vertices = [];

      for (let i = 0; i < 1500; i++) {
        const x = Math.random() * 2000 - 1000;
        const y = Math.random() * 2000 - 1000;
        const z = Math.random() * 2000 - 1000;

        vertices.push(x, y, z);
      }

      geometry.setAttribute(
        'position',
        new THREE.Float32BufferAttribute(vertices, 3)
      );

      return geometry;
    }, []);

    useMemo(() => {
      shaderMaterial.current = new THREE.ShaderMaterial({
        vertexShader: vertexShader(minPointSize, maxPointSize),
        fragmentShader: fragmentShader,
        uniforms: {
          time: { value: 0 },
        },
        transparent: true,
        blending: THREE.AdditiveBlending,
      });

      const numPoints = 2500;
      const randomValues = new Float32Array(numPoints);
      for (let i = 0; i < numPoints; i++) {
        randomValues[i] = Math.random();
      }

      galaxyGeometry.setAttribute(
        'randomValue',
        new THREE.BufferAttribute(randomValues, 1)
      );
    }, []);

    return (
      <>
        <mesh>
          <points
            ref={forwardedRef}
            geometry={galaxyGeometry}
            material={shaderMaterial.current}
            receiveShadow
            castShadow
          >
            <Cloud />

            <Planet />
            <Text position={[0, 0, 0]}>hello world</Text>
            <Text position={[0, 0, -100]} maxWidth={15} anchorX='center'>
              Sabias que el universo se calcula que existe desde hace al menos
              13 000 millones de años
            </Text>
            <Text position={[0, 0, -200]} maxWidth={15}>
              y todo lo que vemos en el espacio está en el pasado
            </Text>
            <Text position={[0, 0, -300]} maxWidth={15}>
              Mercurio, Venus, La Tierra y Marte; Júpiter, Saturno, Urano y
              Neptuno.
            </Text>
            <Text position={[0, 0, -400]} maxWidth={15}>
              Estos son los 8 planetas que forman parte del sistema solar.
            </Text>
            <Text position={[0, 0, -500]} maxWidth={15}>
              La esfera perfecta del universo observable tiene unos 93 000
              millones de años luz de diámetro
            </Text>
          </points>
        </mesh>
      </>
    );
  }
);

export default GalaxyParticles;
