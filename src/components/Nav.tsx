import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="sticky top-0 z-10 backdrop-blur bg-white/70 border-b">
      <div className="max-w-4xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="font-bold text-lg">🌍 刘深的旅行笔记</Link>
        <div className="flex gap-6 text-sm">
          <Link href="/travels" className="hover:text-blue-600">旅行</Link>
          <Link href="/notes" className="hover:text-blue-600">学习笔记</Link>
          <Link href="/about" className="hover:text-blue-600">关于我</Link>
        </div>
      </div>
    </nav>
  );
}