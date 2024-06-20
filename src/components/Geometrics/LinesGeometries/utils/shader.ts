import { extend } from '@react-three/fiber';
import * as THREE from 'three';
import { shaderMaterial } from '@react-three/drei';

// Custom shader material for gradient
const GradientLineMaterial = shaderMaterial(
  {
    color: new THREE.Color(),
    resolution: new THREE.Vector2(),
  },
  `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
      `,
  `
      uniform vec3 color;
      uniform vec2 resolution;
      varying vec2 vUv;
      void main() {
        gl_FragColor = vec4(mix(color, vec3(1.0), vUv.y), 1.0);
      }
      `
);
extend({ GradientLineMaterial });
