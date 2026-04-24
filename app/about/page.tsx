export default function About() {
  return (
    <div className="bg-white rounded-xl p-8 shadow">
      <h1 className="text-3xl font-bold mb-6">关于我 🙋</h1>
      <div className="space-y-4 text-gray-700 leading-relaxed">
        <p>大家好，我是<strong>刘深</strong>。</p>
        <p>白天是技术服务支持工程师，晚上是世界观察者。喜欢用相机和文字记录每一次旅行，也保持着对新技术的好奇心。</p>
        <p>这个小站是我的数字日记本，欢迎常来坐坐 ☕️</p>

        <h2 className="text-xl font-bold mt-8">兴趣</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>🌏 旅行（已解锁：日本、泰国、新加坡…）</li>
          <li>📸 街头摄影</li>
          <li>🤖 AI & Agent</li>
          <li>📚 持续学习</li>
        </ul>
      </div>
    </div>
  );
}