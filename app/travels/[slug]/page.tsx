import { getAllPosts, getPost } from '@/src/lib/markdown';
import TravelMapClient from '@/src/components/TravelMapClient';
import { notFound } from 'next/navigation';
import { MapPin, Calendar, Camera } from 'lucide-react';
import AppleCard from '@/src/components/ui/AppleCard';
import ScrollReveal from '@/src/components/ui/ScrollReveal';

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
    <article className="max-w-[1024px] mx-auto px-0 md:px-8 pb-24">
      {/* 沉浸式头部 (Apple News Style) */}
      <section className="relative w-full h-[60vh] md:h-[70vh] md:rounded-[32px] overflow-hidden shadow-lg">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src={cover} 
          alt={meta.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 text-white">
          <div className="flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-wider opacity-90 mb-4">
            <span className="flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full">
              <Calendar size={14} /> {meta.date}
            </span>
            <span className="flex items-center gap-1.5 bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-full">
              <MapPin size={14} /> {meta.locationName}
            </span>
          </div>
          
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-4">
            {meta.title}
          </h1>
          
          {meta.mood && (
            <div className="text-lg md:text-xl font-medium opacity-90 text-white/90 max-w-2xl">
              {meta.mood}
            </div>
          )}
        </div>
      </section>

      {/* 阅读视图正文 */}
      <section className="px-6 md:px-12 py-12 md:py-20 max-w-3xl mx-auto bg-white md:bg-transparent">
        <ScrollReveal delay={0.2}>
          <div
            className="prose prose-lg md:prose-xl prose-slate font-sans prose-headings:font-display prose-headings:font-bold prose-headings:tracking-tight prose-p:leading-relaxed prose-a:text-[#007AFF] max-w-none text-[#1D1D1F]"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </ScrollReveal>
      </section>

      {/* 照片画廊 - 现代圆角网格 */}
      {meta.photos && meta.photos.length > 0 && (
        <section className="px-4 md:px-0 mt-12 md:mt-24">
          <ScrollReveal>
            <div className="flex items-center gap-2 text-xl font-bold text-[#1D1D1F] mb-6 px-2">
              <Camera size={24} className="text-[#007AFF]" />
              Gallery
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {meta.photos.map((src: string, i: number) => (
              <AppleCard 
                key={src} 
                delay={i * 0.1} 
                hoverScale={true}
                className={`relative overflow-hidden group ${
                  i === 0 ? 'col-span-2 md:col-span-2 aspect-[16/9]' : 
                  'col-span-1 aspect-square'
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={src} 
                  alt="Travel Gallery" 
                  className="absolute inset-0 w-full h-full object-cover" 
                />
              </AppleCard>
            ))}
          </div>
        </section>
      )}

      {/* 地图组件 - 高级感 */}
      {meta.location && (
        <section className="px-4 md:px-0 mt-16 md:mt-24">
          <ScrollReveal>
            <div className="flex items-center gap-2 text-xl font-bold text-[#1D1D1F] mb-6 px-2">
              <MapPin size={24} className="text-[#007AFF]" />
              Location
            </div>
          </ScrollReveal>
          
          <AppleCard delay={0.2} hoverScale={false} className="overflow-hidden">
            <TravelMapClient lat={meta.location[0]} lng={meta.location[1]} name={meta.locationName || ''} />
            <div className="p-6 bg-white flex justify-between items-center">
              <div>
                <div className="font-bold text-[#1D1D1F] text-lg">{meta.locationName}</div>
                <div className="text-sm font-medium text-[#86868B] mt-1">
                  {meta.location[0]}°N, {meta.location[1]}°E
                </div>
              </div>
              <div className="bg-[#F5F5F7] p-3 rounded-full text-[#007AFF]">
                <MapPin size={20} />
              </div>
            </div>
          </AppleCard>
        </section>
      )}
    </article>
  );
}
