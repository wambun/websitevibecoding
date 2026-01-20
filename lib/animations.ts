import { Variants, Transition } from 'framer-motion';

// Custom cubic-bezier easing functions for premium feel
export const easings = {
  // Apple-style smooth easing
  smooth: [0.25, 0.1, 0.25, 1.0] as const,
  // Aggressive start, gentle end
  emphasis: [0.6, 0.05, 0.01, 0.9] as const,
  // Quick start, gradual slowdown
  decelerate: [0, 0, 0.2, 1] as const,
  // Slow start, quick end
  accelerate: [0.4, 0, 1, 1] as const,
  // Bouncy, playful
  bounce: [0.68, -0.55, 0.265, 1.55] as const,
};

// Framer Motion spring configurations
export const springs = {
  // Snappy, responsive - for buttons, icons
  snappy: { type: 'spring', stiffness: 400, damping: 30 } as Transition,
  // Gentle, elegant - for cards, sections
  gentle: { type: 'spring', stiffness: 120, damping: 20 } as Transition,
  // Bouncy for playful elements
  bouncy: { type: 'spring', stiffness: 300, damping: 15 } as Transition,
  // Very smooth for larger movements
  smooth: { type: 'spring', stiffness: 100, damping: 25 } as Transition,
  // Quick for micro-interactions
  quick: { type: 'spring', stiffness: 500, damping: 35 } as Transition,
};

// Stagger container for grid animations
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

// Enhanced item variants with spring physics
export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: springs.gentle,
  },
};

// Fade up animation for sections
export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easings.smooth,
    },
  },
};

// Fade in animation
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: easings.smooth,
    },
  },
};

// Scale up animation for cards
export const scaleUp: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: springs.gentle,
  },
};

// Slide in from left
export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -50
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: springs.smooth,
  },
};

// Slide in from right
export const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 50
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: springs.smooth,
  },
};

// Button hover animation props
export const buttonHover = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 },
  transition: springs.snappy,
};

// Card hover animation props
export const cardHover = {
  whileHover: {
    y: -4,
    transition: springs.snappy,
  },
};

// Icon hover animation props
export const iconHover = {
  whileHover: {
    scale: 1.1,
    rotate: 3
  },
  transition: springs.bouncy,
};

// Dropdown animation variants
export const dropdownVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: springs.snappy,
  },
  exit: {
    opacity: 0,
    y: 10,
    scale: 0.95,
    transition: {
      duration: 0.15,
    },
  },
};

// Accordion animation variants
export const accordionVariants: Variants = {
  hidden: {
    height: 0,
    opacity: 0
  },
  visible: {
    height: 'auto',
    opacity: 1,
    transition: {
      height: springs.gentle,
      opacity: { duration: 0.2, delay: 0.1 },
    },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: {
      height: springs.gentle,
      opacity: { duration: 0.15 },
    },
  },
};

// Parallax scroll helper
export const parallaxRange = (start: number, end: number) => ({
  inputRange: [0, 1],
  outputRange: [start, end],
});

// Viewport options for whileInView
export const viewportOnce = {
  once: true,
  margin: '-50px'
};

export const viewportRepeat = {
  once: false,
  margin: '-100px'
};
