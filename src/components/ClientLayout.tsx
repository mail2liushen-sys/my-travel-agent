'use client';
import { usePathname } from 'next/navigation';
import Nav from './Nav';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isPreview = pathname?.startsWith('/preview');

  if (isPreview) {
    return <main>{children}</main>;
  }

  return (
    <>
      <Nav />
      <main className="min-h-screen pt-12 pb-24 md:pb-12 md:pt-28 relative z-10">
        {children}
      </main>
    </>
  );
}
