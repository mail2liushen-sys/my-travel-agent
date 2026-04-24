import Link from 'next/link';
import { getAllPosts } from '@/src/lib/markdown';
import { ArrowUpRight, MapPin } from 'lucide-react';

const nextTrip = {
  destination: 'Hokkaido',
  destinationCN: '北海道',
  date: '2026-07-15',
  note: '去看夏天的富良野，想住一晚只有星星的旅馆。',
  coords: '43.0642°N · 141.3469°E',
};

const stats = [
  { n: '12', label: 'Countries' },
  { n: '38', label: 'Cities' },
  { n: '147', label: 'Films Shot' },
  { n: '∞', label: 'Moments' },
];

export default function Home() {
  const travels = getAllPosts('travels').slice(0, 3);
  const days = Math.ceil((new Date(nextTrip.date).getTime() - Date.now()) / 86400000);

  return (
    <>
      {/* Hero 全屏封面 */}
      <section className="relative h-screen w-full overflow-hidden grain">
        <div
          className="absolute inset-0 bg-cover bg-center vignette"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1528164344705-47542687000d?w=2400&q=80')" }}
        />
        <div className="relative z-10 h-full flex flex-col justify-end max-w-6xl mx-auto px-8 pb-24 text-white">
          <div className="font-mono-ui text-xs tracking-[0.3em] opacity-80 mb-6">
            ISSUE 001 · SPRING 2026
          </div>
          <h1 className="font-display text-7xl md:text-9xl leading-[0.95] mb-6">
            Field<br/>Notes<span className="text-[#c8553d]">.</span>
          </h1>
          <p className="max-w-md text-lg opacity-90 font-serif italic">
            &ldquo;走过的每一条街，都会在某个失眠的夜里，再走一遍。&rdquo;
          </p>
          <div className="mt-10 flex gap-8 text-xs font-mono-ui tracking-widest opacity-70">
            <span>SCROLL</span>
            <span>↓</span>
          </div>
        </div>
      </section>

      {/* 数据墙 */}
      <section className="max-w-6xl mx-auto px-8 py-24 border-b border-black/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-6xl md:text-7xl">{s.n}</div>
              <div className="mt-2 text-xs font-mono-ui uppercase tracking-widest text-gray-500">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 下次旅行预告 —— 杂志封面式 */}
      <section className="max-w-6xl mx-auto px-8 py-24">
        <div className="text-xs font-mono-ui tracking-[0.3em] text-[#c8553d] mb-8">
          NEXT DEPARTURE ——
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-end">
          <div>
            <div className="font-mono-ui text-sm text-gray-500 mb-4">{nextTrip.date}</div>
            <h2 className="font-display text-7xl md:text-8xl leading-none">{nextTrip.destination}</h2>
            <div className="mt-4 font-serif text-2xl text-gray-700">{nextTrip.destinationCN}</div>
            <p className="mt-8 text-lg text-gray-600 leading-relaxed max-w-md">
              {nextTrip.note}
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs font-mono-ui text-gray-500">
              <MapPin size={14} /> {nextTrip.coords}
            </div>
          </div>
          <div className="text-right">
            <div className="text-xs font-mono-ui tracking-widest text-gray-500 mb-2">
              COUNTDOWN
            </div>
            <div className="font-display text-[10rem] md:text-[14rem] leading-none text-[#c8553d]">
              {days}
            </div>
            <div className="text-xs font-mono-ui tracking-widest text-gray-500">
              DAYS TO GO
            </div>
          </div>
        </div>
      </section>

      {/* 最近旅行 —— 不对齐网格，制造杂志感 */}
      <section className="max-w-6xl mx-auto px-8 py-24 border-t border-black/10">
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="text-xs font-mono-ui tracking-[0.3em] text-gray-500 mb-4">
              RECENT JOURNEYS
            </div>
            <h2 className="font-display text-5xl">最近的脚印</h2>
          </div>
          <Link href="/travels" className="group flex items-center gap-2 text-sm font-mono-ui">
            VIEW ALL
            <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
          </Link>
        </div>

        <div className="grid md:grid-cols-12 gap-8">
          {travels.map((t, i) => (
            <Link
              key={t.slug}
              href={`/travels/${t.slug}`}
              className={`group block ${
                i === 0 ? 'md:col-span-7' : i === 1 ? 'md:col-span-5 md:mt-24' : 'md:col-span-6'
              }`}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-gray-200 mb-4">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url('${t.cover || t.photos?.[0] || 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=1200'}')`,
                  }}
                />
                <div className="absolute top-4 left-4 text-white font-mono-ui text-xs tracking-widest mix-blend-difference">
                  N° {String(i + 1).padStart(2, '0')}
                </div>
              </div>
              <div className="flex items-baseline justify-between">
                <div className="font-mono-ui text-xs text-gray-500 tracking-widest">
                  {t.date} · {t.locationName}
                </div>
              </div>
              <h3 className="font-display text-3xl mt-2 group-hover:text-[#c8553d] transition">
                {t.title}
              </h3>
              {t.mood && (
                <div className="mt-3 text-sm italic text-gray-600">— {t.mood}</div>
              )}
            </Link>
          ))}
        </div>
      </section>

      {/* 签名区 */}
      <section className="max-w-6xl mx-auto px-8 py-32 text-center border-t border-black/10">
        <div className="font-serif italic text-3xl md:text-4xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
          &ldquo;我不是在旅行，就是在去旅行的路上。&rdquo;
        </div>
        <div className="mt-8 font-display text-2xl text-[#c8553d]">— Liu Shen</div>
      </section>
    </>
  );
}