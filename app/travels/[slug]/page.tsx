import { getAllPosts, getPost } from '@/src/lib/markdown';
import TravelMapClient from '@/src/components/TravelMapClient';
import { notFound } from 'next/navigation';
import { MapPin } from 'lucide-react';


export const dynamicParams = false;
export async function generateStaticParams() {
  return getAllPosts('travels').map((p) => ({ slug: p.slug }));
}

export default async function TravelDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let data;
  try { data = await getPost('travels', slug); } catch { notFound(); }
  const { meta, html } = data!;
  const cover = meta.cover || meta.photos?.[0] || 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=2400';

  return (
    <>
      {/* 全屏封面 */}
      <section className="relative h-[85vh] w-full overflow-hidden grain">
        <div className="absolute inset-0 bg-cover bg-center vignette" style={{ backgroundImage: `url('${cover}')` }} />
        <div className="relative z-10 h-full flex flex-col justify-end max-w-5xl mx-auto px-8 pb-20 text-white">
          <div className="font-mono-ui text-xs tracking-[0.3em] opacity-80 mb-4">
            {meta.date} · <MapPin size={12} className="inline"/> {meta.locationName}
          </div>
          <h1 className="font-display text-6xl md:text-8xl leading-[0.95]">{meta.title}</h1>
          {meta.mood && (
            <div className="mt-6 font-serif italic text-xl opacity-90">心情 · {meta.mood}</div>
          )}
        </div>
      </section>

      {/* 正文 */}
      <article className="max-w-3xl mx-auto px-8 py-24">
        <div
          className="prose prose-lg prose-neutral font-serif prose-headings:font-display prose-headings:tracking-tight prose-p:leading-[2] max-w-none"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        {/* 照片画廊 */}
        {meta.photos && meta.photos.length > 0 && (
          <div className="mt-20 space-y-4">
            <div className="text-xs font-mono-ui tracking-[0.3em] text-[#c8553d] mb-6">GALLERY ——</div>
            <div className="grid grid-cols-2 gap-4">
              {meta.photos.map((src, i) => (
                <div
                  key={src}
                  className={`relative overflow-hidden ${i % 3 === 0 ? 'col-span-2 aspect-[16/9]' : 'aspect-[3/4]'}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt="" className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition duration-700" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 地图 */}
        {meta.location && (
          <div className="mt-20">
            <div className="text-xs font-mono-ui tracking-[0.3em] text-[#c8553d] mb-6">LOCATION ——</div>
            <TravelMapClient lat={meta.location[0]} lng={meta.location[1]} name={meta.locationName || ''} />
            <div className="mt-2 font-mono-ui text-xs text-gray-500 tracking-widest">
              {meta.location[0]}°N · {meta.location[1]}°E
            </div>
          </div>
        )}
      </article>
    </>
  );
}