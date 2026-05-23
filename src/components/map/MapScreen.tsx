import { CitySelector } from '../shared/CitySelector';
import { MapComponent } from './MapComponent';
import { places } from '../../api/data';

export function MapScreen() {
  return (
    <div className="absolute inset-0 flex flex-col">
      {/* Live Leaflet map */}
      <div className="absolute inset-0">
        <MapComponent />
      </div>

      {/* Overlay UI */}
      <div className="relative z-[1000] flex-1 flex flex-col pointer-events-none">
        {/* Top: City pill */}
        <div className="flex items-start justify-center pt-1.5 px-4 pointer-events-auto">
          <CitySelector />
        </div>

        {/* Top-left: filter chips */}
        <div className="absolute left-4 top-[48px] flex flex-col gap-2 pointer-events-auto">
          <div className="flex gap-2">
            <button className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-gradient-to-br from-[#a8e6cf]/75 to-[#88d8e8]/75 backdrop-blur-xl text-[12px] font-medium shadow-[0_2px_8px_rgba(0,0,0,0.1)] border-none cursor-pointer">
              <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-dark fill-none stroke-width-2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
              Saved
            </button>
            <button className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-gradient-to-br from-[#a8e6cf]/75 to-[#88d8e8]/75 backdrop-blur-xl text-[12px] font-medium shadow-[0_2px_8px_rgba(0,0,0,0.1)] border-none cursor-pointer">
              <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-dark fill-none stroke-width-2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"/></svg>
              Vibe <span className="text-[10px]">▾</span>
            </button>
          </div>
        </div>

        {/* Top-right: search + compass */}
        <div className="absolute right-4 top-[48px] flex flex-col gap-2.5 pointer-events-auto">
          <button className="w-11 h-11 rounded-full bg-surface shadow-[0_2px_12px_rgba(0,0,0,0.06)] flex items-center justify-center border-none cursor-pointer">
            <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-dark fill-none stroke-width-2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
          </button>
          <button className="w-11 h-11 rounded-full bg-surface shadow-[0_2px_12px_rgba(0,0,0,0.06)] flex items-center justify-center border-none cursor-pointer">
            <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-dark fill-none stroke-width-2"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88"/></svg>
          </button>
        </div>

        {/* Bottom cards */}
        <div className="absolute bottom-[96px] left-4 right-4 flex gap-2.5 overflow-x-auto pb-1 z-20 pointer-events-auto scrollbar-none">
          {places.map(p => (
            <div key={p.id} className="min-w-[160px] h-[105px] rounded-[18px] overflow-hidden relative flex-shrink-0 shadow-[0_3px_14px_rgba(0,0,0,0.15)]">
              <img src={p.imageUrl} alt="" className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 px-3.5 py-3 bg-gradient-to-t from-black/75 via-black/35 to-transparent text-white">
                <div className="text-[15px] font-bold">{p.name}</div>
                <div className="text-[12px] font-light opacity-90">{p.distance}</div>
              </div>
            </div>
          ))}
          {/* Identify card */}
          <div className="min-w-[135px] h-[105px] rounded-[18px] bg-white/96 backdrop-blur-sm shadow-[0_3px_14px_rgba(0,0,0,0.12)] flex flex-col items-center justify-center gap-2 flex-shrink-0">
            <div className="w-[46px] h-[46px] rounded-full bg-blue flex items-center justify-center shadow-[0_2px_8px_rgba(79,108,247,0.3)]">
              <svg viewBox="0 0 24 24" className="w-[22px] h-[22px] stroke-white fill-none stroke-width-2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
            </div>
            <span className="text-[13px] font-normal text-gray">Identify place</span>
          </div>
        </div>
      </div>
    </div>
  );
}