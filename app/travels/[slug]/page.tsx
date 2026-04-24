import { getAllPosts, getPost } from '@/src/lib/markdown';
import Image from 'next/image';

export async function generateStaticParams() {
  return getAllPosts('travels').map((p) => ({ slug: p.slug }));
}
export const dynamicParams = false;

export default async function TravelDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { meta, html } = await getPost('travels', slug);

  return (
    <article className="bg-white rounded-xl p-8 shadow">
      <div className="text-sm text-gray-500">{meta.date} · 📍 {meta.locationName}</div>
      <h1 className="text-3xl font-bold mt-2 mb-4">{meta.title}</h1>
      {meta.mood && <div className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm mb-4">心情：{meta.mood}</div>}

      {/* 照片画廊 */}
      {meta.photos && meta.photos.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 my-6">
          {meta.photos.map((src) => (
            <div key={src} className="relative aspect-square">
              <Image src={src} alt="" fill className="object-cover rounded-lg" />
            </div>
          ))}
        </div>
      )}

      {/* 地理位置（简版：Google Maps 嵌入） */}
      {meta.location && (
        <div className="my-6">
          <iframe
            className="w-full h-72 rounded-lg border"
            src={`https://www.openstreetmap.org/export/embed.html?bbox=${meta.location[1]-0.05}%2C${meta.location[0]-0.05}%2C${meta.location[1]+0.05}%2C${meta.location[0]+0.05}&marker=${meta.location[0]}%2C${meta.location[1]}`}
          />
          <div className="text-xs text-gray-500 mt-1">经纬度：{meta.location[0]}, {meta.location[1]}</div>
        </div>
      )}

      <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  );
}