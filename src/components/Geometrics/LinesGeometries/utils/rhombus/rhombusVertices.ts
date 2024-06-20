import { Float32BufferAttribute } from 'three';

export const rhombusVertices = new Float32BufferAttribute(
  [
    0,
    1,
    0, // 0
    1,
    0,
    0, // 1
    0,
    -1,
    0, // 2
    -1,
    0,
    0, // 3
    0,
    0,
    1, // 4
    0,
    0,
    -1, // 5
  ],
  3
);
