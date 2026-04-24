import type { Metadata } from 'next';
import './globals.css';
import ClientLayout from '@/src/components/ClientLayout';

export const metadata: Metadata = {
  title: 'Liu Shen · Travel App',
  description: 'A personal travel archive.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className="antialiased selection:bg-[#007AFF] selection:text-white">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
