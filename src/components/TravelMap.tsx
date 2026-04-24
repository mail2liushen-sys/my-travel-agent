'use client';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// 高级自定义地标图标
const customIcon = L.divIcon({
  className: 'custom-map-marker',
  html: `
    <div style="
      width: 24px; 
      height: 24px; 
      background-color: #c8553d; 
      border-radius: 50%; 
      border: 3px solid white; 
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
      display: flex;
      align-items: center;
      justify-content: center;
    ">
      <div style="width: 6px; height: 6px; background-color: white; border-radius: 50%;"></div>
    </div>
  `,
  iconSize: [24, 24],
  iconAnchor: [12, 12],
  popupAnchor: [0, -12],
});

export default function TravelMap({
  lat, lng, name,
}: { lat: number; lng: number; name: string }) {
  return (
    <div className="relative w-full h-[500px] bg-gray-100 rounded-lg overflow-hidden group">
      <MapContainer
        center={[lat, lng]}
        zoom={13}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={false}
        zoomControl={false}
      >
        {/* 使用 CartoDB Positron 提供更简洁的高级地图样式 */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        <Marker position={[lat, lng]} icon={customIcon}>
          <Popup className="custom-popup">
            <div className="font-mono-ui tracking-widest text-xs font-bold text-gray-800 p-1">
              {name}
            </div>
          </Popup>
        </Marker>
      </MapContainer>
      
      {/* 装饰性遮罩 */}
      <div className="absolute inset-0 border border-black/10 rounded-lg pointer-events-none z-[1000]" />
    </div>
  );
}
