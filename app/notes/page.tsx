import Link from 'next/link';
import { getAllPosts } from '@/src/lib/markdown';
import ScrollReveal from '@/src/components/ui/ScrollReveal';

export default function NotesPage() {
  const posts = getAllPosts('notes');
  return (
    <div className="max-w-4xl mx-auto px-8 pt-40 pb-24 min-h-screen">
      <ScrollReveal>
        <div className="text-xs font-mono-ui tracking-[0.3em] text-[#c8553d] mb-8">
          KNOWLEDGE ——
        </div>
        <h1 className="font-display text-7xl md:text-8xl leading-none mb-4">
          Notes<span className="text-[#c8553d]">.</span>
        </h1>
        <p className="text-gray-500 italic mb-16 font-serif text-lg">学习的碎片，记下才是自己的。</p>
      </ScrollReveal>

      <div className="space-y-2">
        {posts.map((p, i) => (
          <ScrollReveal key={p.slug} delay={i * 0.05} yOffset={20}>
            <Link
              href={`/notes/${p.slug}`}
              className="group flex items-baseline gap-6 py-5 border-b border-black/10 hover:border-[#c8553d] transition"
            >
              <span className="font-mono-ui text-xs text-gray-400 tracking-widest w-24 shrink-0">{p.date}</span>
              <span className="font-display text-2xl flex-1 group-hover:translate-x-2 group-hover:text-[#c8553d] transition">{p.title}</span>
              {p.tags && (
                <span className="font-mono-ui text-xs text-gray-400 uppercase tracking-widest">
                  {p.tags.slice(0,2).join(' · ')}
                </span>
              )}
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}