import { type Transition, type Variants } from 'framer-motion'
import { useReducedMotion } from './useReducedMotion'

export const motionSpring: Transition = {
  type: 'spring',
  stiffness: 520,
  damping: 40,
  mass: 0.7,
}


export const fadeUp = (): Variants => ({
  hidden: { opacity: 0, y: 14, filter: 'blur(10px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { ...motionSpring, duration: 0.55 },
  },
})

export const fadeIn = (): Variants => ({
  hidden: { opacity: 0, filter: 'blur(10px)' },
  show: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: { ...motionSpring, duration: 0.45 },
  },
})

export const staggerContainer = (
  staggerChildren = 0.06,
  delayChildren = 0.08
): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
})

// Convenience hook to avoid scattered reduced-motion logic.
export function useMotionReduced() {
  return useReducedMotion()
}

