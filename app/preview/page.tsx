'use client';
import DeviceMockup from '@/src/components/ui/DeviceMockup';
import { useState, useEffect } from 'react';
import { Smartphone, Monitor } from 'lucide-react';
import Link from 'next/link';

export default function PreviewPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-4 relative z-[9999]">
      {/* 顶部控制栏 */}
      <div className="bg-white px-6 py-3 rounded-full shadow-sm mb-12 flex items-center gap-6">
        <div className="text-sm font-semibold text-gray-500 mr-4">Preview Mode</div>
        <div className="flex bg-gray-100 rounded-full p-1">
          <button className="bg-white shadow-sm text-black px-4 py-1.5 rounded-full text-xs font-semibold flex items-center gap-2">
            <Smartphone size={14} /> iPhone 15 Pro
          </button>
          <Link href="/" className="text-gray-500 hover:text-black px-4 py-1.5 rounded-full text-xs font-semibold flex items-center gap-2 transition">
            <Monitor size={14} /> Desktop
          </Link>
        </div>
      </div>

      {/* 手机壳模型 */}
      <DeviceMockup>
        <iframe 
          src="/" 
          className="w-full h-full border-none"
          title="App Preview"
        />
      </DeviceMockup>
      
      <div className="mt-8 text-xs font-mono-ui text-gray-400 tracking-widest text-center">
        INTERACTIVE PROTOTYPE
        <br/>
        Scroll inside the device to test gestures.
      </div>
    </div>
  );
}
