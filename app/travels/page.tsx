import Link from 'next/link';
import { getAllPosts } from '@/src/lib/markdown';

export default function TravelsPage() {
  const posts = getAllPosts('travels');
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">所有旅行 ✈️</h1>
      <div className="space-y-4">
        {posts.map((p) => (
          <Link key={p.slug} href={`/travels/${p.slug}`}
            className="block bg-white rounded-xl p-6 shadow hover:shadow-md transition">
            <div className="text-xs text-gray-500">{p.date} · 📍 {p.locationName}</div>
            <div className="text-xl font-semibold mt-2">{p.title}</div>
            {p.summary && <div className="text-gray-600 mt-2">{p.summary}</div>}
            {p.mood && <div className="text-sm text-blue-600 mt-2">心情：{p.mood}</div>}
          </Link>
        ))}
      </div>
    </div>
  );
}