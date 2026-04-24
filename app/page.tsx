import Link from 'next/link';
import { getAllPosts } from '@/src/lib/markdown';

const nextTrip = {
  destination: '北海道',
  date: '2026-07-15',
  note: '想看看夏天的富良野薰衣草',
};

export default function Home() {
  const travels = getAllPosts('travels').slice(0, 3);
  const days = Math.ceil((new Date(nextTrip.date).getTime() - Date.now()) / 86400000);

  return (
    <div className="space-y-12">
      {/* Hero */}
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">你好，我是刘深 👋</h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          一个喜欢在路上的人。这里记录我走过的城市、遇到的光、以及持续学习的点滴。
        </p>
      </section>

      {/* 下次旅行预告 */}
      <section className="bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-2xl p-8 shadow-lg">
        <div className="text-sm opacity-80 mb-2">✈️ 下一次启程</div>
        <div className="text-3xl font-bold mb-2">{nextTrip.destination}</div>
        <div className="text-lg opacity-90 mb-4">{nextTrip.note}</div>
        <div className="text-sm">
          出发日期：{nextTrip.date} · 距离出发还有 <span className="font-bold text-2xl">{days}</span> 天
        </div>
      </section>

      {/* 最近旅行 */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">最近的旅行</h2>
          <Link href="/travels" className="text-blue-600 text-sm">查看全部 →</Link>
        </div>
        {travels.length === 0 ? (
          <p className="text-gray-500">还没有旅行记录，快去 content/travels/ 添加吧！</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-4">
            {travels.map((t) => (
              <Link key={t.slug} href={`/travels/${t.slug}`}
                className="block bg-white rounded-xl p-5 shadow hover:shadow-md transition">
                <div className="text-xs text-gray-500">{t.date} · {t.locationName}</div>
                <div className="font-semibold mt-2">{t.title}</div>
                {t.mood && <div className="text-sm text-gray-600 mt-1">心情：{t.mood}</div>}
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}