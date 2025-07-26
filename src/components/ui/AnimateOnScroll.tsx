'use client';

import { motion, useInView } from 'framer-motion';
import { ReactNode, useRef } from 'react';

type AnimateOnScrollProps = {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
  once?: boolean;
};

export function AnimateOnScroll({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  once = true,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: 0.1 });

  const distance = 50;
  const directionMap = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
  };

  const initial = directionMap[direction];

  return (
    <motion.div
      ref={ref}
      initial={{ ...initial, opacity: 0 }}
      animate={isInView ? { x: 0, y: 0, opacity: 1 } : { ...initial, opacity: 0 }}
      transition={{
        duration: 0.6,
        delay: delay * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
