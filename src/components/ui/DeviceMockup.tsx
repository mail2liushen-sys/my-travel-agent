'use client';
import { ReactNode } from 'react';

export default function DeviceMockup({ children }: { children: ReactNode }) {
  return (
    <div className="relative mx-auto border-gray-900 bg-black border-[12px] rounded-[3.5rem] h-[852px] w-[393px] shadow-[0_30px_60px_rgba(0,0,0,0.3)] ring-[4px] ring-gray-800/30">
      {/* Dynamic Island */}
      <div className="absolute top-0 inset-x-0 flex justify-center z-50 pointer-events-none">
        <div className="mt-2 w-[120px] h-[35px] bg-black rounded-full flex justify-between items-center px-4 shadow-[inset_0_1px_3px_rgba(255,255,255,0.1)]">
          {/* Speaker */}
          <div className="w-12 h-1.5 bg-[#111111] rounded-full"></div>
          {/* Camera */}
          <div className="w-3.5 h-3.5 bg-[#1a1a1a] rounded-full flex justify-center items-center">
             <div className="w-1.5 h-1.5 bg-[#112255] rounded-full opacity-60"></div>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[15px] top-[124px] rounded-l-lg"></div>
      <div className="h-[62px] w-[3px] bg-gray-800 absolute -left-[15px] top-[178px] rounded-l-lg"></div>
      <div className="h-[62px] w-[3px] bg-gray-800 absolute -left-[15px] top-[256px] rounded-l-lg"></div>
      <div className="h-[96px] w-[3px] bg-gray-800 absolute -right-[15px] top-[200px] rounded-r-lg"></div>

      {/* Screen */}
      <div className="rounded-[2.8rem] overflow-hidden w-full h-full bg-white relative">
        {children}
        
        {/* Home Indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[140px] h-[5px] bg-black/30 backdrop-blur-md rounded-full z-50 pointer-events-none"></div>
      </div>
    </div>
  );
}
