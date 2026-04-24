import { MapPin, Mail, Camera, Plane } from 'lucide-react';

export default function About() {
  return (
    <article className="max-w-4xl mx-auto px-8 pt-40 pb-24">
      <div className="text-xs font-mono-ui tracking-[0.3em] text-[#c8553d] mb-8">
        ABOUT ——
      </div>
      <h1 className="font-display text-7xl md:text-8xl leading-none mb-12">
        你好，<br/>我是刘深<span className="text-[#c8553d]">.</span>
      </h1>

      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-6 text-lg leading-[1.9] text-gray-700">
          <p className="first-letter:font-display first-letter:text-7xl first-letter:float-left first-letter:mr-3 first-letter:leading-none first-letter:text-[#c8553d]">
            一个在字节白天写技术方案、夜里写旅行随笔的普通人。相信好的照片胜过一千字，也相信文字有照片拍不到的光。
          </p>
          <p>
            这个小站是我的"Field Notes"——田野笔记。记录旅行，也记录日常学习的碎片。没有广告、没有算法，只有我愿意反复翻看的内容。
          </p>
          <p className="font-serif italic text-xl text-gray-500 border-l-2 border-[#c8553d] pl-6 my-12">
            如果你也在路上，或许我们会在某个城市的街角擦肩而过。
          </p>
        </div>

        <div className="space-y-6 text-sm">
          <div>
            <div className="font-mono-ui text-xs text-gray-400 tracking-widest mb-2">BASED IN</div>
            <div className="flex items-center gap-2"><MapPin size={14}/> Shanghai, China</div>
          </div>
          <div>
            <div className="font-mono-ui text-xs text-gray-400 tracking-widest mb-2">CURRENTLY</div>
            <div className="flex items-center gap-2"><Plane size={14}/> 筹备 Hokkaido '26</div>
          </div>
          <div>
            <div className="font-mono-ui text-xs text-gray-400 tracking-widest mb-2">GEAR</div>
            <div className="flex items-center gap-2"><Camera size={14}/> Fujifilm X100V</div>
          </div>
          <div>
            <div className="font-mono-ui text-xs text-gray-400 tracking-widest mb-2">SAY HI</div>
            <div className="flex items-center gap-2"><Mail size={14}/> liushen@example.com</div>
          </div>
        </div>
      </div>
    </article>
  );
}