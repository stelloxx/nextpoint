import { CitySelector } from '../shared/CitySelector';
import { places } from '../../api/data';

const mapLabels = [
  { text: 'CAMDEN TOWN', top: '12%', left: '22%' },
  { text: 'ST PANCRAS', top: '18%', left: '50%' },
  { text: 'BLOOMSBURY', top: '28%', left: '35%' },
  { text: 'HOLBORN', top: '35%', left: '55%' },
  { text: 'SOHO', top: '42%', left: '42%' },
  { text: 'ISLINGTON', top: '38%', left: '18%' },
  { text: 'COVENT GARDEN', top: '48%', left: '28%' },
  { text: 'WESTMINSTER', top: '55%', left: '45%' },
  { text: 'MAYFAIR', top: '52%', left: '62%' },
  { text: 'SOUTHWARK', top: '65%', left: '38%' },
];

const photoPins = [
  { top: '15%', left: '28%', img: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=120&h=120&fit=crop' },
  { top: '22%', left: '52%', img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=120&h=120&fit=crop' },
  { top: '28%', left: '38%', img: 'https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?w=120&h=120&fit=crop' },
  { top: '35%', left: '22%', img: 'https://images.unsplash.com/photo-1580997840893-6b4ecafa5cf7?w=120&h=120&fit=crop' },
  { top: '38%', left: '58%', img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=120&h=120&fit=crop' },
  { top: '45%', left: '32%', img: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=120&h=120&fit=crop' },
  { top: '48%', left: '65%', img: 'https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?w=120&h=120&fit=crop' },
  { top: '55%', left: '42%', img: 'https://images.unsplash.com/photo-1580997840893-6b4ecafa5cf7?w=120&h=120&fit=crop' },
  { top: '58%', left: '55%', img: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=120&h=120&fit=crop' },
  { top: '32%', left: '68%', img: 'https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?w=120&h=120&fit=crop' },
];

export function MapScreen() {
  return (
    <div className="absolute inset-0 flex flex-col">
      {/* Map background */}
      <div className="absolute inset-0 overflow-hidden">
        <img src="/map.png" alt="" className="w-full h-full object-cover opacity-85" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg/30 via-transparent to-transparent pointer-events-none" />
        {mapLabels.map(l => (
          <div key={l.text} className="absolute text-[10px] font-semibold text-[#7a7268] uppercase tracking-[0.5px] whitespace-nowrap" style={{ top: l.top, left: l.left }}>{l.text}</div>
        ))}
        {photoPins.map((p, i) => (
          <div key={i} className="absolute w-[52px] h-[52px] rounded-[10px] overflow-visible border-[2.5px] border-surface shadow-[0_3px_12px_rgba(0,0,0,0.25)] z-[5]" style={{ top: p.top, left: p.left }}>
            <img src={p.img} alt="" className="w-[52px] h-[52px] object-cover rounded-[10px]" />
            <div className="absolute -bottom-[14px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[8px] border-t-blue" />
            <div className="absolute -bottom-[20px] left-1/2 -translate-x-1/2 w-[10px] h-[10px] rounded-full bg-blue shadow-[0_0_0_2.5px_#fff,0_1px_4px_rgba(0,0,0,0.2)]" />
          </div>
        ))}
      </div>

      {/* Overlay UI */}
      <div className="relative z-10 flex-1 flex flex-col">
        {/* Top: City pill */}
        <div className="flex items-start justify-center pt-1.5 px-4">
          <CitySelector />
        </div>

        {/* Top-left: filter chips */}
        <div className="absolute left-4 top-[48px] flex flex-col gap-2">
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
        <div className="absolute right-4 top-[48px] flex flex-col gap-2.5">
          <button className="w-11 h-11 rounded-full bg-surface shadow-[0_2px_12px_rgba(0,0,0,0.06)] flex items-center justify-center border-none cursor-pointer">
            <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-dark fill-none stroke-width-2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
          </button>
          <button className="w-11 h-11 rounded-full bg-surface shadow-[0_2px_12px_rgba(0,0,0,0.06)] flex items-center justify-center border-none cursor-pointer">
            <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-dark fill-none stroke-width-2"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88"/></svg>
          </button>
        </div>

        {/* Bottom cards */}
        <div className="absolute bottom-[96px] left-4 right-4 flex gap-2.5 overflow-x-auto pb-1 z-20 scrollbar-none">
          {places.map(p => (
            <div key={p.id} className="min-w-[160px] h-[105px] rounded-2xl overflow-hidden relative flex-shrink-0 shadow-[0_3px_14px_rgba(0,0,0,0.15)]">
              <img src={p.imageUrl} alt="" className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 px-3.5 py-3 bg-gradient-to-t from-black/70 to-transparent text-white">
                <div className="text-[15px] font-bold">{p.name}</div>
                <div className="text-[12px] font-light opacity-90">{p.distance}</div>
              </div>
            </div>
          ))}
          {/* Identify card */}
          <div className="min-w-[135px] h-[105px] rounded-2xl bg-white/96 backdrop-blur-sm shadow-[0_3px_14px_rgba(0,0,0,0.12)] flex flex-col items-center justify-center gap-2 flex-shrink-0">
            <div className="w-[42px] h-[42px] rounded-full bg-blue flex items-center justify-center shadow-[0_2px_8px_rgba(79,108,247,0.3)]">
              <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-white fill-none stroke-width-2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
            </div>
            <span className="text-[13px] font-normal text-gray">Identify place</span>
          </div>
        </div>
      </div>
    </div>
  );
}
