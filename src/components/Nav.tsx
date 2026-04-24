'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Compass, BookOpen, User } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Nav() {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/travels', label: 'Travels', icon: Compass },
    { href: '/notes', label: 'Notes', icon: BookOpen },
    { href: '/about', label: 'Profile', icon: User },
  ];

  return (
    <>
      {/* Desktop Header */}
      <header className="hidden md:block fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-8 py-4">
          <Link href="/" className="font-display text-xl font-bold tracking-tight text-[#1D1D1F]">
            LiuShen
          </Link>
          <div className="flex gap-8 text-[13px] font-semibold text-[#86868B]">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`transition-colors duration-200 ${
                  pathname === l.href ? 'text-[#1D1D1F]' : 'hover:text-[#1D1D1F]'
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </header>

      {/* Mobile Bottom Tab Bar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 glass pb-safe">
        <div className="flex justify-around items-center px-6 py-3">
          {links.map((l) => {
            const isActive = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`flex flex-col items-center gap-1 active-scale w-16 ${
                  isActive ? 'text-[#007AFF]' : 'text-[#86868B]'
                }`}
              >
                <div className="relative">
                  <l.icon size={24} strokeWidth={isActive ? 2.5 : 2} />
                  {isActive && (
                    <motion.div
                      layoutId="active-tab"
                      className="absolute -inset-2 bg-[#007AFF]/10 rounded-full -z-10"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </div>
                <span className="text-[10px] font-medium">{l.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
