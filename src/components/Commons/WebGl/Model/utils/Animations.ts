import { Euler, Vector3, Color } from '@react-three/fiber';

type Scene = {
  rotation: Euler;
  position: Vector3;
  getObjectByName: any;
  Color?: Color;
};

export const Animations: React.FC<any> = (scene, camera) => {
  let AnimationsData: any[] = [];
  console.log('camera', camera);
  console.log('scene', scene);

  const bikeZoom = [
    // Html div
    // Restore previous animations

    {
      objectToAnimate: document.getElementById('page1'),
      properties: {
        opacity: 1,
        duration: 0.8,
      },
      timelinePoint: 0,
    },

    {
      objectToAnimate: document.getElementById('page1'),
      properties: {
        opacity: 0,
        duration: 0.8,
      },
      timelinePoint: 0.3,
    },

    {
      objectToAnimate: document.getElementById('page2'),
      properties: {
        opacity: 1,
        duration: 0.8,
      },
      timelinePoint: 1,
    },

    {
      objectToAnimate: document.getElementById('page2'),
      properties: {
        opacity: 0,
        duration: 0.8,
      },
      timelinePoint: 1.3,
    },

    {
      objectToAnimate: document.getElementById('page3'),
      properties: {
        opacity: 1,
        duration: 0.8,
      },
      timelinePoint: 2.5,
    },

    {
      objectToAnimate: document.getElementById('page3'),
      properties: {
        opacity: 1,
        duration: 0.8,
      },
      timelinePoint: 2.8,
    },

    {
      objectToAnimate: document.getElementById('page3'),
      properties: {
        opacity: 0,
        duration: 0.8,
      },
      timelinePoint: 3.2,
    },

    {
      objectToAnimate: document.getElementById('page4'),
      properties: {
        opacity: 1,
        duration: 0.8,
      },
      timelinePoint: 3.5,
    },

    // Controls, Camera, Camera zoom
    {
      objectToAnimate: camera.position,
      properties: {
        x: 0,
        y: 0,
        z: 2,
        duration: 0.8,
        ease: 'power3.inOut',
      },
      timelinePoint: 0.1,
    },

    {
      objectToAnimate: camera.position,
      properties: {
        x: 0,
        y: 0,
        z: 5,
        duration: 0.8,
        ease: 'power3.inOut',
      },
      timelinePoint: 1.5,
    },

    {
      objectToAnimate: camera.position,
      properties: {
        x: 0,
        y: 0,
        z: 2,
        duration: 0.8,
        ease: 'power3.inOut',
      },
      timelinePoint: 2.5,
    },

    {
      objectToAnimate: camera.position,
      properties: {
        x: 0,
        y: 0,
        z: 5,
        duration: 0.8,
        ease: 'power3.inOut',
      },
      timelinePoint: 3.3,
    },

    // {
    //   objectToAnimate: camera,
    //   properties: {
    //     zoom: 5,
    //     duration: 0.8,
    //     ease: 'power3.inOut',
    //     onUpdate: () => {
    //       camera.updateProjectionMatrix();
    //     },
    //   },
    //   timelinePoint: 0.8,
    // },

    // bike parts individual mesh animation in
    {
      objectToAnimate: scene.getObjectByName('Cylinder013').position,
      properties: {
        x: 2,
        y: -0.8,
        z: 0,
        duration: 0.8,
      },
      timelinePoint: 1.5,
    },

    {
      objectToAnimate: scene.getObjectByName('Gear006').position,
      properties: {
        x: 1,
        y: 0.2,
        z: 0,
        duration: 0.8,
      },
      timelinePoint: 1.5,
    },

    {
      objectToAnimate: scene.getObjectByName('Gear007').position,
      properties: {
        x: 2,
        y: -0.2,
        z: 0,
        duration: 0.8,
      },
      timelinePoint: 1.5,
    },

    {
      objectToAnimate: scene.getObjectByName('Circle004').position,
      properties: {
        x: -2,
        y: 0.5,
        z: 0,
        duration: 0.8,
      },
      timelinePoint: 1.5,
    },

    {
      objectToAnimate: scene.getObjectByName('Cylinder009').position,
      properties: {
        x: 1,
        y: 0.2,
        z: 0,
        duration: 0.8,
      },
      timelinePoint: 1.5,
    },

    {
      objectToAnimate: scene.getObjectByName('Cylinder007').position,
      properties: {
        x: 1.5,
        y: 0.6,
        z: 0,
        duration: 0.8,
      },
      timelinePoint: 1.5,
    },

    {
      objectToAnimate: scene.getObjectByName('chaingear004').position,
      properties: {
        x: 0.2,
        y: 1.1,
        z: 0,
        duration: 0.8,
      },
      timelinePoint: 1.5,
    },

    {
      objectToAnimate: scene.getObjectByName('Cylinder014').position,
      properties: {
        x: 0.3,
        y: 1.2,
        z: 0,
        duration: 0.8,
      },
      timelinePoint: 1.5,
    },

    {
      objectToAnimate: scene.getObjectByName('Plane').position,
      properties: {
        x: 0.3,
        y: 1.2,
        z: 0,
        duration: 0.8,
      },
      timelinePoint: 1.5,
    },

    {
      objectToAnimate: scene.getObjectByName('spiral').position,
      properties: {
        x: 0.7,
        y: 0.5,
        z: 0,
        duration: 0.8,
      },
      timelinePoint: 1.5,
    },

    {
      objectToAnimate: scene.getObjectByName('Cylinder017').position,
      properties: {
        x: 0.5,
        y: 0.1,
        z: 0,
        duration: 0.8,
      },
      timelinePoint: 1.5,
    },

    {
      objectToAnimate: scene.getObjectByName('Bezier').position,
      properties: {
        x: 0.4,
        y: 0.6,
        z: 0,
        duration: 0.8,
      },
      timelinePoint: 1.5,
    },

    {
      objectToAnimate: scene.getObjectByName('Circle006').position,
      properties: {
        x: 1,
        y: -0.2,
        z: 0,
        duration: 0.8,
      },
      timelinePoint: 1.5,
    },

    // bike parts individual mesh animation out
    {
      objectToAnimate: scene.getObjectByName('Cylinder013').position,
      properties: {
        x: 0.312,
        y: 0.843,
        z: -0.009,
        duration: 0.8,
      },
      timelinePoint: 3,
    },

    {
      objectToAnimate: scene.getObjectByName('Gear006').position,
      properties: {
        x: -0.588,
        y: 0.265,
        z: 0.03,
        duration: 0.8,
      },
      timelinePoint: 3,
    },

    {
      objectToAnimate: scene.getObjectByName('Gear007').position,
      properties: {
        x: -0.079,
        y: 0.231,
        z: 0.03,
        duration: 0.8,
      },
      timelinePoint: 3,
    },

    {
      objectToAnimate: scene.getObjectByName('Circle004').position,
      properties: {
        x: -0.588,
        y: 0.263,
        z: 0.007,
        duration: 0.8,
      },
      timelinePoint: 3,
    },

    {
      objectToAnimate: scene.getObjectByName('Cylinder009').position,
      properties: {
        x: 0.434,
        y: 0.526,
        z: -0.008,
        duration: 0.8,
      },
      timelinePoint: 3,
    },

    {
      objectToAnimate: scene.getObjectByName('Cylinder007').position,
      properties: {
        x: 0.387,
        y: 0.544,
        z: -0.009,
        duration: 0.8,
      },
      timelinePoint: 3,
    },

    {
      objectToAnimate: scene.getObjectByName('chaingear004').position,
      properties: {
        x: -0.079,
        y: 0.253,
        z: -0.007,
        duration: 0.8,
      },
      timelinePoint: 3,
    },

    {
      objectToAnimate: scene.getObjectByName('Cylinder014').position,
      properties: {
        x: 0.36,
        y: 0.845,
        z: -0.007,
        duration: 0.8,
      },
      timelinePoint: 3,
    },

    {
      objectToAnimate: scene.getObjectByName('Plane').position,
      properties: {
        x: 0,
        y: 0,
        z: 0,
        duration: 0.8,
      },
      timelinePoint: 3,
    },

    {
      objectToAnimate: scene.getObjectByName('spiral').position,
      properties: {
        x: 0,
        y: 0,
        z: 0,
        duration: 0.8,
      },
      timelinePoint: 3,
    },

    {
      objectToAnimate: scene.getObjectByName('Cylinder017').position,
      properties: {
        x: 0,
        y: 0,
        z: 0,
        duration: 0.8,
      },
      timelinePoint: 3,
    },

    {
      objectToAnimate: scene.getObjectByName('Bezier').position,
      properties: {
        x: 0,
        y: 0,
        z: 0,
        duration: 0.8,
      },
      timelinePoint: 3,
    },

    {
      objectToAnimate: scene.getObjectByName('Circle006').position,
      properties: {
        x: 0.59,
        y: 0.265,
        z: -0.007,
        duration: 0.8,
      },
      timelinePoint: 3,
    },

    // General group
  ];

  AnimationsData = [...AnimationsData, ...bikeZoom];

  const bikeZoomRotation = [
    // Restore previous animations

    // General group
    {
      objectToAnimate: scene.getObjectByName('generalGroup').rotation,
      properties: {
        x: 0,
        y: 4.5,
        z: 0,
        duration: 0.8,
        ease: 'power3.inOut',
      },
      timelinePoint: 1.3,
    },

    {
      objectToAnimate: scene.getObjectByName('generalGroup').rotation,
      properties: {
        x: 0,
        y: 0,
        z: 0,
        duration: 0.8,
        ease: 'power3.inOut',
      },
      timelinePoint: 3.3,
    },
  ];
  AnimationsData = [...AnimationsData, ...bikeZoomRotation];

  return AnimationsData;
};
