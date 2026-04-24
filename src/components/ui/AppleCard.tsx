'use client';
import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface AppleCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hoverScale?: boolean;
}

export default function AppleCard({
  children,
  className = '',
  delay = 0,
  hoverScale = true,
}: AppleCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={hoverScale ? { scale: 0.98 } : {}}
      whileTap={hoverScale ? { scale: 0.95 } : {}}
      className={`bg-white rounded-[24px] md:rounded-[32px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] ${className}`}
    >
      {children}
    </motion.div>
  );
}
