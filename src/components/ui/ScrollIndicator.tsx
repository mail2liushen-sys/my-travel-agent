'use client';
import { motion } from 'framer-motion';

export default function ScrollIndicator() {
  return (
    <div className="absolute right-8 bottom-24 flex flex-col items-center gap-4 text-[10px] font-mono-ui tracking-[0.3em] opacity-60 hover:opacity-100 transition-opacity">
      <span style={{ writingMode: 'vertical-rl' }}>SCROLL</span>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        className="w-[1px] h-12 bg-current"
      />
    </div>
  );
}
