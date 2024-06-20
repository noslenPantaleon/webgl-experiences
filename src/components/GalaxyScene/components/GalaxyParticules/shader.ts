// export const vertexShader = `
//           varying vec2 vUv;
//           attribute float randomValue; // Random value for each vertex

//           void main() {
//             vUv = uv;
//             vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
//             gl_PointSize = mix(${minPointSize.toFixed(
//               1
//             )}, ${maxPointSize.toFixed(1)}, randomValue);
//             gl_Position = projectionMatrix * mvPosition;
//           }
//         `;

export const vertexShader = (minPointSize: number, maxPointSize: number) => {
  const vertext = `
      varying vec2 vUv;
      attribute float randomValue; // Random value for each vertex

      void main() {
        vUv = uv;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = mix(${minPointSize.toFixed(1)}, ${maxPointSize.toFixed(
    1
  )}, randomValue);
        gl_Position = projectionMatrix * mvPosition;
      }
    `;

  return vertext;
};
export const fragmentShader = `
          uniform float time;
          varying vec2 vUv;

          void main() {
            float strength = 0.5;
            float speed = 0.2; // Decrease speed with some randomness
            float offset = time * speed;
            float particlePhaseOffset =
              fract(sin(time + gl_FragCoord.x + gl_FragCoord.y) * 43758.5453) *
              0.5; // Random phase offset for each particle

            float intensity = smoothstep(
              0.5 - strength,
              0.5 + strength,
              sin(offset + length(vUv - 0.5) + particlePhaseOffset * 10.0)
            );
            float opacity = mix(0.7, 1.0, intensity);
            gl_FragColor = vec4(vec3(1.0), opacity); // Ensure intensity is at least 0.15
          }
        `;
