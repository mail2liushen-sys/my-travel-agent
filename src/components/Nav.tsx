'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#faf8f5]/80 backdrop-blur-md border-b border-black/5' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto flex items-center justify-between px-8 py-5">
        <Link href="/" className="font-display text-xl tracking-tight">
          Liu Shen<span className="text-[#c8553d]">.</span>
        </Link>
        <div className="flex gap-10 text-xs font-mono-ui uppercase tracking-[0.2em]">
          <Link href="/travels" className="hover:text-[#c8553d] transition">Travels</Link>
          <Link href="/notes" className="hover:text-[#c8553d] transition">Notes</Link>
          <Link href="/about" className="hover:text-[#c8553d] transition">About</Link>
        </div>
      </div>
    </nav>
  );
}