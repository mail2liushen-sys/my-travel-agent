import type { Metadata } from 'next';
import './globals.css';
import Nav from '@/src/components/Nav';

export const metadata: Metadata = {
  title: '刘深的旅行 & 学习笔记',
  description: '记录旅行的脚印与学习的轨迹',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen bg-gray-50 text-gray-900 antialiased">
        <Nav />
        <main className="max-w-4xl mx-auto px-6 py-10">{children}</main>
        <footer className="text-center text-sm text-gray-400 py-8">
          © {new Date().getFullYear()} 刘深 · Made with Next.js
        </footer>
      </body>
    </html>
  );
}