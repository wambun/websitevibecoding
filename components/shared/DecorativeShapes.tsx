'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

interface DecorativeShapesProps {
  variant?: 'hero' | 'section' | 'cta';
  className?: string;
}

export function DecorativeShapes({ variant = 'section', className = '' }: DecorativeShapesProps) {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 50]);
  const y2 = useTransform(scrollY, [0, 500], [0, -30]);

  if (variant === 'hero') {
    return (
      <div className={`absolute inset-0 overflow-hidden -z-10 ${className}`}>
        <motion.div
          style={{ y: y1 }}
          className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute bottom-20 left-10 w-64 h-64 bg-teal-light/10 rounded-full blur-3xl"
        />
        {/* Geometric accents */}
        <svg className="absolute top-1/4 right-1/4 w-24 h-24 text-primary/5 hidden lg:block" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
        <div className="absolute bottom-1/4 left-1/4 w-16 h-16 border border-primary/5 rounded-full hidden lg:block" />
      </div>
    );
  }

  if (variant === 'cta') {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>
    );
  }

  // Default section variant
  return (
    <div className={`absolute inset-0 overflow-hidden -z-10 ${className}`}>
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-2xl" />
      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-teal-light/10 rounded-full blur-2xl" />
    </div>
  );
}
