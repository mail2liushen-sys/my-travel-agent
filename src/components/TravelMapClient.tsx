'use client';
import dynamic from 'next/dynamic';

const TravelMap = dynamic(() => import('./TravelMap'), { ssr: false });

export default function TravelMapClient(props: { lat: number; lng: number; name: string }) {
  return <TravelMap {...props} />;
}