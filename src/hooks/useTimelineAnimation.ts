import * as THREE from 'three';
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useThree, useFrame } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';

interface TimelineAnimationProps {
  target: React.RefObject<THREE.Mesh>;
  animations: {
    duration?: number;
    trigger?: number; // Scroll offset to trigger animation
    rotation?: { x?: number; y?: number; z?: number };
    position?: { x?: number; y?: number; z?: number };
    scale?: { x?: number; y?: number; z?: number };
    visible?: boolean;
  }[];
}

export const useTimelineAnimation = ({
  target,
  animations,
}: TimelineAnimationProps) => {
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const { gl } = useThree();
  const scroll = useScroll();

  useFrame(() => {
    timelineRef?.current?.seek(
      scroll.offset * timelineRef.current?.duration() || 0
    );
  });

  useLayoutEffect(() => {
    if (!target.current) return;

    timelineRef.current = gsap.timeline();

    for (const animation of animations) {
      const timelineSegment = gsap.timeline();

      timelineSegment.to(
        target.current.rotation,
        {
          ...animation.rotation,
          duration: animation.duration || 1,
        },
        0
      );

      timelineSegment.to(
        target.current.position,
        {
          ...animation.position,
          duration: animation.duration || 1,
        },
        0
      );

      timelineSegment.to(
        target.current.scale,
        {
          ...animation.scale,
          duration: animation.duration || 1,
        },
        0
      );

      timelineSegment.to(
        target.current,
        {
          visible: animation.visible !== undefined ? animation.visible : false,
          duration: animation.duration || 1,
        },
        0
      );

      if (animation.trigger !== undefined) {
        timelineRef.current.add(timelineSegment, animation.trigger);
      } else {
        timelineRef.current.add(timelineSegment, 0);
      }
    }

    return () => {
      timelineRef.current?.kill();
    };
  }, [target, gl.domElement.parentNode, animations]);

  return null;
};
