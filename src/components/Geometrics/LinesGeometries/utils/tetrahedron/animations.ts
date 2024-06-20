export const tetrahedronAnimations = [
  {
    duration: 1,
    rotation: { x: Math.PI / 6 },
    position: { y: 5 },
    trigger: 0.1, // Start at 20% scroll offset
  },
  {
    duration: 2,
    scale: { x: 1.5, y: 1.5, z: 1.5 },
    trigger: 0.5, // Start at 50% scroll offset
  },

  // {
  //   visible: false,
  //   trigger: 1, // Hide at 80% scroll offset
  // },
];
