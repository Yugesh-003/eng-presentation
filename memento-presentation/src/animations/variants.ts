import { Variants } from 'framer-motion';

/* ---- Shared entrance variants ----------------------------- */

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
  },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4 } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  exit:   { opacity: 0, transition: { duration: 0.4 } },
};

export const fadeBlur: Variants = {
  hidden:  { opacity: 0, filter: 'blur(12px)' },
  visible: { opacity: 1, filter: 'blur(0px)', transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } },
  exit:    { opacity: 0, filter: 'blur(8px)',  transition: { duration: 0.5 } },
};

export const slideInLeft: Variants = {
  hidden:  { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } },
  exit:    { opacity: 0, x: -40, transition: { duration: 0.4 } },
};

export const slideInRight: Variants = {
  hidden:  { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } },
  exit:    { opacity: 0, x: 40, transition: { duration: 0.4 } },
};

export const scaleIn: Variants = {
  hidden:  { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
  exit:    { opacity: 0, scale: 0.95, transition: { duration: 0.4 } },
};

export const staggerContainer: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

export const staggerFast: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};

export const staggerSlow: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.3 } },
};

/* ---- Slide page transitions ----------------------------- */
export const slideTransition = {
  initial:  { opacity: 0, filter: 'blur(10px)' },
  animate:  { opacity: 1, filter: 'blur(0px)',  transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] } },
  exit:     { opacity: 0, filter: 'blur(8px)',   transition: { duration: 0.45, ease: 'easeIn' } },
};

export const pushLeftTransition = {
  initial:  { opacity: 0, x: '8%' },
  animate:  { opacity: 1, x: '0%', transition: { duration: 0.65, ease: [0.76, 0, 0.24, 1] } },
  exit:     { opacity: 0, x: '-8%', transition: { duration: 0.4 } },
};
