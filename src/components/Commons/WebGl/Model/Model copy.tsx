import React, { useRef, useLayoutEffect, useEffect } from 'react';
import { useGLTF, OrbitControls, useScroll } from '@react-three/drei';
import { useFrame, ThreeElements, useThree } from '@react-three/fiber';
import { gsap } from 'gsap';

interface Timeline {
  seek(time: number | string | null, supressEvents?: boolean): this;
}

export function Model(props: ThreeElements['mesh']) {
  const { nodes, materials }: any = useGLTF('/models/bike.glb');
  const scroollControl = useScroll();

  const timeline = useRef<Timeline>(null);
  const generalGroupRef = useRef<any>(!null);
  const controlsRef = useRef<any>(!null);
  const camera = useThree((state) => state.camera);

  const Cylinder013 = useRef<any>();
  const Gear006 = useRef<any>();
  const Sphere = useRef<any>();
  const Gear007 = useRef<any>();
  const Circle006 = useRef<any>();
  const Circle004 = useRef<any>();

  // Html div references
  // const page_1_ref = useRef<any>();
  // const page_2_ref = useRef<any>();
  // const page_3_ref = useRef<any>();

  // useLayoutEffect(() => {
  //   page_1_ref.current = document.getElementById('page1');
  //   page_2_ref.current = document.getElementById('page2');
  //   page_3_ref.current = document.getElementById('page3');
  // }, []);

  useLayoutEffect(() => {
    timeline.current = gsap.timeline();

    let AnimationsData: any[] = [];

    const bikeZoom = [
      {
        // Html div
        // Restore previous animations
        objectToAnimate: page_1_ref.current,
        properties: {
          opacity: 0,
          duration: 0.3,
        },
        timelinePoint: 0.5,
      },
      // html div
      {
        objectToAnimate: page_2_ref.current,
        properties: {
          opacity: 1,
          duration: 0.8,
        },
        timelinePoint: 1.3,
      },

      {
        objectToAnimate: page_3_ref.current,
        properties: {
          opacity: 1,
          duration: 0.8,
        },
        timelinePoint: 4,
      },
      // Controls, Camera, Camera zoom
      {
        objectToAnimate: controlsRef.current.target,
        properties: {
          y: 0.4,
          x: 0,
          z: 0,
          ease: 'power3.inOut',
        },
        timelinePoint: 0.8,
      },
      {
        objectToAnimate: camera.position,
        properties: {
          x: 0,
          y: 0,
          z: 8.3,
          duration: 0.8,
          ease: 'power3.inOut',
        },
        timelinePoint: 0.8,
      },
      {
        objectToAnimate: camera,
        properties: {
          zoom: 5,
          duration: 0.8,
          ease: 'power3.inOut',
          onUpdate: () => {
            camera.updateProjectionMatrix();
          },
        },
        timelinePoint: 0.8,
      },

      // individual mesh animation
      {
        objectToAnimate: Cylinder013.current.position,
        properties: {
          x: 2.96,
          y: -0.59,
          z: 0,
          duration: 0.8,
        },
        timelinePoint: 3,
      },

      {
        objectToAnimate: Gear006.current.position,
        properties: {
          x: 4,
          y: 0.2,
          z: 0,
          duration: 0.8,
        },
        timelinePoint: 3,
      },
      {
        objectToAnimate: Gear007.current.position,
        properties: {
          x: 4,
          y: 0.2,
          z: 0,
          duration: 0.8,
        },
        timelinePoint: 3,
      },

      {
        objectToAnimate: Circle006.current.position,
        properties: {
          x: 4,
          y: 0.2,
          z: 0,
          duration: 0.8,
        },
        timelinePoint: 3,
      },

      {
        objectToAnimate: Circle004.current.position,
        properties: {
          x: 5,
          y: 0.2,
          z: 0,
          duration: 0.8,
        },
        timelinePoint: 3,
      },

      {
        objectToAnimate: Sphere.current.position,
        properties: {
          x: 4,
          y: 0.2,
          z: 0,
          duration: 0.8,
        },
        timelinePoint: 3,
      },
      // General group
      {
        objectToAnimate: generalGroupRef.current.position,
        properties: {
          x: 0,
          y: 0,
          z: 0,
          duration: 0.8,
        },
        timelinePoint: 2.1,
      },
    ];
    AnimationsData = [...AnimationsData, ...bikeZoom];

    const bikeZoomRotation = [
      // Restore previous animations
      {
        objectToAnimate: page_2_ref.current,
        properties: {
          opacity: 0,
          duration: 0.3,
        },
        timelinePoint: 2.1,
      },

      // Controls, camera, camera zoom
      {
        objectToAnimate: controlsRef.current.target,
        properties: {
          x: -1.1,
          y: 0.4,
          z: 0,
          duration: 0.8,
          ease: 'power3.inOut',
        },
        timelinePoint: 2.2,
      },
      {
        objectToAnimate: camera.position,
        properties: {
          x: 0,
          y: 0.4,
          z: 10,
          duration: 0.8,
          ease: 'power3.inOut',
        },
        timelinePoint: 2.2,
      },
      {
        objectToAnimate: camera,
        properties: {
          ease: 'power3.inOut',
          duration: 0.8,
          onUpdate: () => {
            camera.updateProjectionMatrix();
          },
        },
        timelinePoint: 2.2,
      },
      // General group
      {
        objectToAnimate: generalGroupRef.current.rotation,
        properties: {
          x: 0,
          y: 4.5,
          z: 0,
          duration: 0.8,
          ease: 'power3.inOut',
        },
        timelinePoint: 2.5,
      },
      //html div
      {
        objectToAnimate: page_3_ref.current,
        properties: {
          opacity: 0,
          duration: 0.3,
        },
        timelinePoint: 2.8,
      },
    ];
    AnimationsData = [...AnimationsData, ...bikeZoomRotation];

    AnimationsData.map((animation) => {
      timeline.current.to(
        animation.objectToAnimate,
        {
          ...animation.properties,
        },
        animation.timelinePoint
      );
    });
  }, []);

  useFrame(() => {
    timeline.current.seek(scroollControl?.offset * timeline.current.duration());
  });

  return (
    <>
      <group {...props} dispose={null} ref={generalGroupRef}>
        <mesh
          name='BezierCurve'
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve.geometry}
          material={materials.breakwire}
          position={[0.37, 0.846, 0.103]}
        />
        <mesh
          name='BezierCurve001'
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve001.geometry}
          material={materials.breakwire}
          position={[0.37, 0.846, -0.115]}
        />
        <group name='chaingear004' position={[-0.079, 0.253, -0.007]}>
          <mesh
            name='Circle009'
            castShadow
            receiveShadow
            geometry={nodes.Circle009.geometry}
            material={materials.black}
          />
          <mesh
            name='Circle009_1'
            castShadow
            receiveShadow
            geometry={nodes.Circle009_1.geometry}
            material={materials['Brushed Aluminium Procedural']}
          />
        </group>
        <mesh
          name='Circle'
          castShadow
          receiveShadow
          geometry={nodes.Circle.geometry}
          material={materials.chain}
          position={[-0.283, 0.245, 0.044]}
        />
        <group
          name='Circle004'
          ref={Circle004}
          position={[-0.588, 0.263, -0.007]}
        >
          <mesh
            name='Circle011'
            castShadow
            receiveShadow
            geometry={nodes.Circle011.geometry}
            material={materials.chromefinish}
          />
          <mesh
            name='Circle011_1'
            castShadow
            receiveShadow
            geometry={nodes.Circle011_1.geometry}
            material={materials.Rubber}
          />
        </group>
        <group
          name='Circle006'
          ref={Circle006}
          position={[0.59, 0.265, -0.007]}
        >
          <mesh
            name='Circle010'
            castShadow
            receiveShadow
            geometry={nodes.Circle010.geometry}
            material={materials.chromefinish}
          />
          <mesh
            name='Circle010_1'
            castShadow
            receiveShadow
            geometry={nodes.Circle010_1.geometry}
            material={materials.Rubber}
          />
        </group>
        <mesh
          name='Cube001'
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials['Brushed Aluminium Procedural']}
          position={[-0.32, 0.728, -0.007]}
        />
        <mesh
          name='Cylinder001'
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={materials.black}
          position={[-0.501, 0.514, 0.001]}
        />
        <mesh
          name='Cylinder002'
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002.geometry}
          material={materials.black}
          position={[0.48, 0.504, -0.018]}
        />
        <mesh
          name='Cylinder003'
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003.geometry}
          material={materials.chromefinishgold}
          position={[0.48, 0.504, -0.018]}
        />
        <mesh
          name='Cylinder006'
          castShadow
          receiveShadow
          geometry={nodes.Cylinder006.geometry}
          material={materials.blue}
          position={[0.302, 0.686, -0.007]}
        />
        <group name='Cylinder007' position={[0.387, 0.544, -0.009]}>
          <mesh
            name='Cylinder015_1'
            castShadow
            receiveShadow
            geometry={nodes.Cylinder015_1.geometry}
            material={materials['Brushed Aluminium Procedural']}
          />
          <mesh
            name='Cylinder015_2'
            castShadow
            receiveShadow
            geometry={nodes.Cylinder015_2.geometry}
            material={materials.black}
          />
        </group>
        <group name='Cylinder009' position={[0.434, 0.526, -0.008]}>
          <mesh
            name='Cylinder011'
            castShadow
            receiveShadow
            geometry={nodes.Cylinder011.geometry}
            material={materials.black}
          />
          <mesh
            name='Cylinder011_1'
            castShadow
            receiveShadow
            geometry={nodes.Cylinder011_1.geometry}
            material={materials.chromefinish}
          />
        </group>
        <mesh
          name='Cylinder010'
          castShadow
          receiveShadow
          geometry={nodes.Cylinder010.geometry}
          material={materials.black}
          position={[-0.322, 0.754, -0.007]}
        />
        <group name='Cylinder013' position={[0.312, 0.843, -0.009]}>
          <mesh
            name='Cylinder006_1'
            castShadow
            receiveShadow
            geometry={nodes.Cylinder006_1.geometry}
            material={materials.black}
            ref={Cylinder013}
          />
          <mesh
            name='Cylinder006_2'
            castShadow
            receiveShadow
            geometry={nodes.Cylinder006_2.geometry}
            material={materials.Rubber2}
          />
        </group>
        <group name='Cylinder014' position={[0.36, 0.845, -0.007]}>
          <mesh
            name='Cylinder013_1'
            castShadow
            receiveShadow
            geometry={nodes.Cylinder013_1.geometry}
            material={materials.black}
          />
          <mesh
            name='Cylinder013_2'
            castShadow
            receiveShadow
            geometry={nodes.Cylinder013_2.geometry}
            material={materials.chromefinish}
          />
        </group>
        <mesh
          name='Cylinder015'
          castShadow
          receiveShadow
          geometry={nodes.Cylinder015.geometry}
          material={materials.black}
          position={[0.48, 0.504, -0.018]}
        />
        <group name='Cylinder016' position={[-0.501, 0.514, 0.001]}>
          <mesh
            name='Cylinder022'
            castShadow
            receiveShadow
            geometry={nodes.Cylinder022.geometry}
            material={materials.black}
          />
          <mesh
            name='Cylinder022_1'
            castShadow
            receiveShadow
            geometry={nodes.Cylinder022_1.geometry}
            material={materials.chromefinishgold}
          />
        </group>
        <mesh
          name='Cylinder017'
          castShadow
          receiveShadow
          geometry={nodes.Cylinder017.geometry}
          material={materials.chromefinish}
          position={[0.485, 0.512, -0.059]}
        />
        <mesh
          name='Cylinder018'
          castShadow
          receiveShadow
          geometry={nodes.Cylinder018.geometry}
          material={materials.chromefinish}
          position={[-0.505, 0.522, 0.041]}
        />
        <mesh
          name='Cylinder019'
          castShadow
          receiveShadow
          geometry={nodes.Cylinder019.geometry}
          material={materials.blue}
          position={[-0.036, 0.311, 0.031]}
        />
        <mesh
          name='Gear006'
          castShadow
          receiveShadow
          geometry={nodes.Gear006.geometry}
          material={materials.chromefinish2}
          position={[-0.588, 0.265, 0.03]}
          ref={Gear006}
        />
        <mesh
          name='Gear007'
          ref={Gear007}
          castShadow
          receiveShadow
          geometry={nodes.Gear007.geometry}
          material={materials.chromefinish2}
          position={[-0.079, 0.231, 0.03]}
        />
        <mesh
          name='Plane001'
          castShadow
          receiveShadow
          geometry={nodes.Plane001.geometry}
          material={materials.seat}
          position={[-0.322, 0.754, -0.007]}
        />
        <mesh
          name='Plane002'
          castShadow
          receiveShadow
          geometry={nodes.Plane002.geometry}
          material={materials.black}
          position={[-0.322, 0.753, -0.007]}
        />
        <mesh
          name='Plane003'
          castShadow
          receiveShadow
          geometry={nodes.Plane003.geometry}
          material={materials.chromefinish}
          position={[-0.08, 0.254, 0.014]}
        />
        <mesh
          name='Plane004'
          castShadow
          receiveShadow
          geometry={nodes.Plane004.geometry}
          material={materials.chromefinish}
          position={[-0.4, 0.254, 0.014]}
        />
        <mesh
          name='Sphere'
          castShadow
          ref={Sphere}
          receiveShadow
          geometry={nodes.Sphere.geometry}
          material={materials.chromefinish}
          position={[0.332, 0.85, -0.01]}
        />
        <mesh
          name='Spiral002'
          castShadow
          receiveShadow
          geometry={nodes.Spiral002.geometry}
          material={materials.chromefinish}
          position={[-0.328, 0.697, -0.006]}
        />
        <mesh
          name='Spiral003'
          castShadow
          receiveShadow
          geometry={nodes.Spiral003.geometry}
          material={materials.chromefinish}
          position={[0.332, 0.834, -0.01]}
        />
      </group>
      <ambientLight intensity={1.7} />
      <OrbitControls enableZoom={false} ref={controlsRef} />
    </>
  );
}

useGLTF.preload('/models/bike.glb');
