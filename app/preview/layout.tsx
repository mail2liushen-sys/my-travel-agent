import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Device Preview',
};

export default function PreviewLayout({ children }: { children: React.ReactNode }) {
  // 预览页直接继承 RootLayout，但在这个页面里我们需要强制重新包装一层干净的 html/body 以避免冲突
  return (
    <div className="bg-gray-100 min-h-screen">
      {children}
    </div>
  );
}
