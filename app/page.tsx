import Link from 'next/link';
import { getAllPosts } from '@/src/lib/markdown';
import { MapPin, Calendar, ArrowRight, Image as ImageIcon, Map, BookOpen } from 'lucide-react';
import AppleCard from '@/src/components/ui/AppleCard';
import Counter from '@/src/components/ui/Counter';

const nextTrip = {
  destination: 'Hokkaido',
  destinationCN: '北海道',
  date: '2026-07-15',
  note: '看夏天的富良野，住一晚只有星星的旅馆。',
  coords: '43.0642°N · 141.3469°E',
  img: 'https://images.unsplash.com/photo-1580223573887-f133e9d80d19?w=1600&q=80',
};

export default function Home() {
  const travels = getAllPosts('travels').slice(0, 5);
  const notes = getAllPosts('notes').slice(0, 3);
  const days = Math.ceil((new Date(nextTrip.date).getTime() - Date.now()) / 86400000);

  return (
    <div className="max-w-[1024px] mx-auto px-4 sm:px-6 md:px-8 pt-4 md:pt-12 pb-24 space-y-12">
      {/* 头部问候 */}
      <header className="px-2">
        <div className="text-[13px] font-bold text-[#86868B] uppercase tracking-wider mb-1">
          {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
        </div>
        <h1 className="text-4xl md:text-5xl font-display text-[#1D1D1F]">
          Discovery
        </h1>
      </header>

      {/* App Store Today Style Featured Card */}
      <section>
        <AppleCard className="relative w-full aspect-[4/5] sm:aspect-[16/9] md:aspect-[21/9] group block" hoverScale={false}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={nextTrip.img} 
            alt={nextTrip.destination} 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80" />
          
          <div className="absolute top-6 left-6 right-6 flex justify-between items-start text-white">
            <div className="bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5">
              <Calendar size={14} /> Next Departure
            </div>
          </div>

          <div className="absolute bottom-6 md:bottom-10 left-6 right-6 md:left-10 md:right-10 text-white">
            <div className="font-semibold text-white/80 text-sm md:text-base mb-1">{nextTrip.destinationCN}</div>
            <h2 className="font-display text-4xl md:text-6xl mb-3">{nextTrip.destination}</h2>
            <p className="text-sm md:text-lg max-w-lg font-medium opacity-90 hidden sm:block mb-4">
              {nextTrip.note}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <div className="bg-white text-[#1D1D1F] px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                <Counter value={days} direction="down" /> Days Left
              </div>
              <div className="flex items-center gap-1.5 text-xs font-mono-ui bg-black/30 backdrop-blur-md px-3 py-2 rounded-full">
                <MapPin size={12} /> {nextTrip.coords}
              </div>
            </div>
          </div>
        </AppleCard>
      </section>

      {/* Bento Box Dashboard */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {/* Stat 1 */}
        <AppleCard delay={0.1} className="p-6 flex flex-col justify-between aspect-square">
          <div className="w-10 h-10 rounded-full bg-[#007AFF]/10 flex items-center justify-center text-[#007AFF] mb-4">
            <Map size={20} />
          </div>
          <div>
            <div className="text-4xl font-display text-[#1D1D1F] mb-1">
              <Counter value={12} />
            </div>
            <div className="text-[13px] font-semibold text-[#86868B]">Countries</div>
          </div>
        </AppleCard>

        {/* Stat 2 */}
        <AppleCard delay={0.2} className="p-6 flex flex-col justify-between aspect-square">
          <div className="w-10 h-10 rounded-full bg-[#FF9500]/10 flex items-center justify-center text-[#FF9500] mb-4">
            <ImageIcon size={20} />
          </div>
          <div>
            <div className="text-4xl font-display text-[#1D1D1F] mb-1">
              <Counter value={147} />
            </div>
            <div className="text-[13px] font-semibold text-[#86868B]">Photos</div>
          </div>
        </AppleCard>

        {/* Quick Note (Span 2) */}
        <AppleCard delay={0.3} className="col-span-2 p-6 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute -right-6 -bottom-6 opacity-[0.03] pointer-events-none">
            <ImageIcon size={180} />
          </div>
          <div className="text-[13px] font-semibold text-[#86868B] mb-2 flex items-center gap-2">
            LATEST NOTE <ArrowRight size={12} />
          </div>
          <Link href={`/notes/${notes[0]?.slug}`} className="block group">
            <h3 className="text-xl md:text-2xl font-bold text-[#1D1D1F] mb-2 line-clamp-2 group-hover:text-[#007AFF] transition-colors">
              {notes[0]?.title}
            </h3>
            <p className="text-[#86868B] text-sm line-clamp-2">
              Learning fragments and recent thoughts on technology and design.
            </p>
          </Link>
        </AppleCard>
      </section>

      {/* Horizontal Scroll (Recent Travels) */}
      <section>
        <div className="flex items-center justify-between px-2 mb-4">
          <h2 className="text-2xl font-bold text-[#1D1D1F]">Recent Journeys</h2>
          <Link href="/travels" className="text-[15px] font-semibold text-[#007AFF] hover:opacity-80 active-scale">
            See All
          </Link>
        </div>
        
        {/* 横向滚动容器 */}
        <div className="flex overflow-x-auto gap-4 md:gap-6 pb-8 -mx-4 px-4 md:mx-0 md:px-0 snap-x snap-mandatory hide-scrollbar">
          {travels.map((t, i) => (
            <Link 
              key={t.slug} 
              href={`/travels/${t.slug}`}
              className="snap-start shrink-0 w-[280px] md:w-[320px] active-scale"
            >
              <AppleCard delay={i * 0.1} className="h-[360px] md:h-[400px] relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={t.cover || t.photos?.[0] || 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=800'}
                  alt={t.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-white/70 mb-2">
                    {t.date}
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-1 leading-tight">
                    {t.title}
                  </h3>
                  <div className="text-sm text-white/80 flex items-center gap-1.5">
                    <MapPin size={12} /> {t.locationName}
                  </div>
                </div>
              </AppleCard>
            </Link>
          ))}
          {/* Spacer for right edge in scroll */}
          <div className="w-1 md:hidden shrink-0"></div>
        </div>
      </section>
    </div>
  );
}
