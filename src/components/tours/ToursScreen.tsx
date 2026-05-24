import { CitySelector } from '../shared/CitySelector';
import { tours } from '../../api/data';
import type { Tour } from '../../types';

function TourCard({ tour }: { tour: Tour }) {
  const isFree = tour.price === null;
  return (
    <div className="rounded-2xl overflow-hidden relative h-[230px] shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
      <img src={tour.imageUrl} alt="" className="w-full h-full object-cover" />
      <div className="absolute top-3 left-3 right-3 flex justify-between items-start z-[2]">
        <span className="inline-flex items-center gap-1 bg-white/92 backdrop-blur-sm px-3 py-1.5 rounded-full text-[12px] font-medium">
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 stroke-blue fill-none stroke-width-2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          {tour.city}
        </span>
        <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-[13px] font-medium ${isFree ? 'bg-indigo/12 text-indigo' : 'bg-blue-light text-blue'}`}>
          {isFree ? '⬡ FREE' : `$${tour.price}`}
        </span>
      </div>
      <div className="absolute bottom-0 left-0 right-0 pt-8 pb-4 px-4 bg-gradient-to-t from-black/75 via-black/30 to-transparent text-white">
        <div className="text-[18px] font-bold leading-tight">{tour.name}</div>
        <div className="text-[13px] font-light opacity-90 mt-0.5">{tour.duration} · {tour.type}</div>
        <div className="text-[12px] font-normal opacity-80 mt-1">{tour.hashtags.map(h => `#${h}`).join(' ')}</div>
        <div className="absolute bottom-4 right-4 flex items-center gap-1 text-[14px] font-semibold text-white">
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-yellow stroke-none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"/></svg>
          {tour.rating}
        </div>
      </div>
    </div>
  );
}

const guides = [
  { name: 'All', avatar: null, isAll: true, selected: true },
  { name: 'Next Point', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop' },
  { name: '@mike', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop' },
  { name: '@sarah', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop' },
  { name: '@james', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop' },
  { name: '@emma', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop' },
];

export function ToursScreen() {
  return (
    <div className="flex flex-col h-full overflow-y-auto overflow-x-hidden scrollbar-none">
      {/* City selector */}
      <div className="flex justify-center pt-3 px-5">
        <CitySelector />
      </div>

      {/* Title + bell */}
      <div className="flex items-center justify-between px-5 pt-2.5">
        <h1 className="font-display text-[32px] font-bold">Tours</h1>
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-transparent border-none cursor-pointer">
          <svg viewBox="0 0 24 24" className="w-[22px] h-[22px] stroke-dark fill-none stroke-width-1.8"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
        </button>
      </div>

      {/* Search + filter */}
      <div className="flex gap-2.5 px-5 pt-3.5">
        <div className="flex-1 flex items-center gap-2.5 bg-surface border border-border rounded-xl px-4 h-[50px] shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
          <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] stroke-gray fill-none stroke-width-2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
          <span className="text-[14px] text-gray">Search tours…</span>
        </div>
        <button className="w-[50px] h-[50px] rounded-xl bg-surface border border-border shadow-[0_2px_12px_rgba(0,0,0,0.06)] flex items-center justify-center cursor-pointer">
          <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] stroke-dark fill-none stroke-width-2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
        </button>
      </div>

      {/* Filter pills */}
      <div className="flex gap-2.5 px-5 pt-3.5">
        <button className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full bg-surface border border-border text-[14px] font-medium shadow-[0_2px_12px_rgba(0,0,0,0.06)] cursor-pointer">
          <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-blue fill-none stroke-width-2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          Favorites
        </button>
        <button className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full bg-surface border border-border text-[14px] font-medium shadow-[0_2px_12px_rgba(0,0,0,0.06)] cursor-pointer">
          <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-blue fill-none stroke-width-2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          Downloaded
        </button>
      </div>

      {/* Guides */}
      <div className="px-5 pt-5">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-[16px] font-semibold">Guides</h3>
          <a href="#" className="text-[14px] font-semibold text-blue no-underline">More</a>
        </div>
        <div className="flex gap-3.5 overflow-x-auto pb-1 scrollbar-none">
          {guides.map((g, i) => (
            <div key={i} className={`flex flex-col items-center gap-1.5 flex-shrink-0 ${g.selected ? '' : ''}`}>
              <div className={`w-[60px] h-[60px] rounded-full overflow-hidden flex items-center justify-center ${g.isAll ? 'border-2.5 border-blue bg-blue-light' : 'border-2.5 border-transparent'}`}>
                {g.isAll ? (
                  <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-blue fill-none stroke-width-2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                ) : (
                  <img src={g.avatar!} alt="" className="w-full h-full object-cover" />
                )}
              </div>
              <span className={`text-[12px] font-medium ${g.selected ? 'text-blue font-semibold' : 'text-gray'}`}>{g.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="px-5 pt-5">
        <button className="w-full h-[54px] rounded-xl bg-blue text-white text-[16px] font-bold border-none cursor-pointer flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(0,0,0,0.10)]">
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white stroke-none"><path d="M12 2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2z"/></svg>
          Get Personal Recommendations →
        </button>
      </div>

      {/* Tour cards */}
      <div className="px-5 pt-5 pb-[100px] flex flex-col gap-4">
        {tours.map(t => <TourCard key={t.id} tour={t} />)}
      </div>
    </div>
  );
}
