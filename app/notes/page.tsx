import Link from 'next/link';
import { getAllPosts } from '@/src/lib/markdown';

export default function NotesPage() {
  const posts = getAllPosts('notes');
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">学习笔记 📚</h1>
      <div className="space-y-3">
        {posts.map((p) => (
          <Link key={p.slug} href={`/notes/${p.slug}`}
            className="block bg-white rounded-lg p-4 shadow-sm hover:shadow transition">
            <div className="text-xs text-gray-500">{p.date}</div>
            <div className="font-semibold mt-1">{p.title}</div>
            {p.tags && <div className="mt-2 flex gap-1">{p.tags.map(t => <span key={t} className="text-xs bg-gray-100 px-2 py-0.5 rounded">#{t}</span>)}</div>}
          </Link>
        ))}
      </div>
    </div>
  );
}