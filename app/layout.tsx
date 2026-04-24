import type { Metadata } from 'next';
import './globals.css';
import Nav from '@/src/components/Nav';

export const metadata: Metadata = {
  title: 'Liu Shen · Field Notes',
  description: '一个关于旅行、此刻与远方的私人档案',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Noto+Serif+SC:wght@400;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <Nav />
        <main>{children}</main>
        <footer className="border-t border-black/10 py-12 text-center text-xs font-mono-ui text-gray-500 tracking-widest">
          © {new Date().getFullYear()} · LIU SHEN · FIELD NOTES
        </footer>
      </body>
    </html>
  );
}