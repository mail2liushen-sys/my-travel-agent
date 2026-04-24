import Link from 'next/link';
import { getAllPosts } from '@/src/lib/markdown';
import ScrollReveal from '@/src/components/ui/ScrollReveal';

export default function TravelsPage() {
  const posts = getAllPosts('travels');
  return (
    <div className="max-w-6xl mx-auto px-8 pt-40 pb-24 min-h-screen">
      <ScrollReveal>
        <div className="text-xs font-mono-ui tracking-[0.3em] text-[#c8553d] mb-8">
          INDEX ——
        </div>
        <h1 className="font-display text-7xl md:text-8xl leading-none mb-16">
          All Travels<span className="text-[#c8553d]">.</span>
        </h1>
      </ScrollReveal>

      <div className="border-t border-black/20">
        {posts.map((p, i) => (
          <ScrollReveal key={p.slug} delay={i * 0.05} yOffset={20}>
            <Link
              href={`/travels/${p.slug}`}
              className="group grid grid-cols-12 gap-4 py-8 border-b border-black/10 items-baseline hover:bg-black/[0.02] transition px-4 -mx-4"
            >
              <div className="col-span-1 font-mono-ui text-xs text-gray-400">
                N°{String(i + 1).padStart(2, '0')}
              </div>
              <div className="col-span-2 font-mono-ui text-xs text-gray-500 tracking-widest">
                {p.date}
              </div>
              <div className="col-span-5 font-display text-3xl group-hover:text-[#c8553d] group-hover:translate-x-2 transition">
                {p.title}
              </div>
              <div className="col-span-3 text-sm text-gray-600 italic">
                {p.locationName}
              </div>
              <div className="col-span-1 text-right font-mono-ui text-xs text-gray-400">→</div>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}