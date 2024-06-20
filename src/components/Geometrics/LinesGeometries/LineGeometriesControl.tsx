import {
  BufferGeometry,
  Float32BufferAttribute,
  MeshBasicMaterial,
} from 'three';
import { extend } from '@react-three/fiber';
import * as THREE from 'three';
import LinesGeometrics from './LinesGeometrics';
import { useTimelineAnimation } from '../../../hooks/useTimelineAnimation';

extend({ BufferGeometry, Float32BufferAttribute, MeshBasicMaterial });

type Geometries = {
  index: number[];
  vertex: Float32BufferAttribute;
  meshRef: React.RefObject<THREE.Mesh>;
  animations: {
    duration?: number;
    trigger?: number; // Scroll offset to trigger animation
    rotation?: { x?: number; y?: number; z?: number };
    position?: { x?: number; y?: number; z?: number };
    scale?: { x?: number; y?: number; z?: number };
    visible?: boolean;
  }[];
};

const GeometricsControl: React.FC<Geometries> = ({
  index,
  vertex,
  meshRef,
  animations,
}) => {
  useTimelineAnimation({
    target: meshRef,
    animations,
  });

  return (
    <>
      <LinesGeometrics meshRef={meshRef} indices={index} vertices={vertex} />
    </>
  );
};

export default GeometricsControl;
