import gsap from 'gsap';

declare module 'gsap' {
  interface TweenVars {
    rotation?: { y?: number; x?: number; z?: number };
    position?: { x?: number; z?: number };
    scale?: { z?: number; x?: number; y?: number };
    visible?: boolean;
    duration?: number;
  }
}
