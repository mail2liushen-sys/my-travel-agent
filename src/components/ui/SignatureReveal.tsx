'use client';
import { motion } from 'framer-motion';

export default function SignatureReveal({ text }: { text: string }) {
  return (
    <div className="mt-16 font-display text-3xl md:text-4xl text-[#c8553d] tracking-widest relative inline-block">
      {text}
      <motion.span 
        className="absolute -bottom-4 left-0 h-[1px] bg-[#c8553d]"
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      />
    </div>
  );
}
