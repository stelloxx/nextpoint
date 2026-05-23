import { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// ── Photo pin data (London landmarks) ────────────────────────────────
const photoPins = [
  { id: 1, lat: 51.5225, lng: -0.1555, img: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=120&h=120&fit=crop', label: "Regent's Park" },
  { id: 2, lat: 51.5330, lng: -0.1250, img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=120&h=120&fit=crop', label: 'Bloomsbury' },
  { id: 3, lat: 51.5150, lng: -0.1415, img: 'https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?w=120&h=120&fit=crop', label: 'Soho' },
  { id: 4, lat: 51.5075, lng: -0.1657, img: 'https://images.unsplash.com/photo-1580997840893-6b4ecafa5cf7?w=120&h=120&fit=crop', label: 'Hyde Park' },
  { id: 5, lat: 51.5100, lng: -0.1200, img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=120&h=120&fit=crop', label: 'Covent Garden' },
  { id: 6, lat: 51.5010, lng: -0.1420, img: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=120&h=120&fit=crop', label: 'Westminster' },
  { id: 7, lat: 51.5055, lng: -0.0900, img: 'https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?w=120&h=120&fit=crop', label: 'South Bank' },
  { id: 8, lat: 51.5390, lng: -0.1426, img: 'https://images.unsplash.com/photo-1580997840893-6b4ecafa5cf7?w=120&h=120&fit=crop', label: 'Camden' },
  { id: 9, lat: 51.5190, lng: -0.1270, img: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=120&h=120&fit=crop', label: "St Pancras" },
  { id: 10, lat: 51.5080, lng: -0.0950, img: 'https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?w=120&h=120&fit=crop', label: 'Tower Bridge' },
];

// ── Custom photo pin icon factory ────────────────────────────────────
function createPhotoPinIcon(imgUrl: string): L.DivIcon {
  return L.divIcon({
    className: 'photo-pin-wrapper',
    html: `
      <div class="photo-pin">
        <img src="${imgUrl}" alt="" />
        <div class="photo-pin-stem"></div>
        <div class="photo-pin-dot"></div>
      </div>
    `,
    iconSize: [52, 72],
    iconAnchor: [26, 72],
  });
}

// ── Map resize handler ──────────────────────────────────────────────
function MapResizeHandler() {
  const map = useMap();
  const initialized = useRef(false);
  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      setTimeout(() => map.invalidateSize(), 100);
    }
  }, [map]);
  return null;
}

// ── MapComponent ────────────────────────────────────────────────────
export function MapComponent() {
  const center: [number, number] = [51.5074, -0.1278]; // London
  const zoom = 15;

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      scrollWheelZoom={true}
      zoomControl={false}
      attributionControl={false}
      className="w-full h-full"
      style={{ background: '#e8e0d8' }}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        maxZoom={19}
      />
      <MapResizeHandler />
      {photoPins.map(pin => (
        <Marker
          key={pin.id}
          position={[pin.lat, pin.lng]}
          icon={createPhotoPinIcon(pin.img)}
        />
      ))}
    </MapContainer>
  );
}