import { Float32BufferAttribute } from 'three';

export const tetrahedronVertices = new Float32BufferAttribute(
  [
    0,
    1,
    0, // Vertex 0 (top)
    -1,
    -1,
    1, // Vertex 1 (bottom-front-left)
    1,
    -1,
    1, // Vertex 2 (bottom-front-right)
    0,
    -1,
    -1, // Vertex 3 (bottom-back)
  ],
  3
);
