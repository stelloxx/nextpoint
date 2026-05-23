import { routes } from '../../api/data';
import type { Route } from '../../types';

const mapLabels = [
  { text: 'ISLINGTON', top: '15%', left: '30%' },
  { text: 'CLERKENWELL', top: '25%', left: '45%' },
  { text: 'BLOOMSBURY', top: '35%', left: '35%' },
  { text: 'HOLBORN', top: '42%', left: '50%' },
  { text: 'SOHO', top: '50%', left: '40%' },
];

const statusStyles: Record<string, { bg: string; text: string }> = {
  'completed': { bg: 'bg-green-bg', text: 'text-[#16a34a]' },
  'in-progress': { bg: 'bg-[#fef3c7]', text: 'text-[#d97706]' },
  'not-started': { bg: 'bg-[#f3f4f6]', text: 'text-gray' },
};

const statusLabels: Record<string, string> = {
  'completed': 'Completed',
  'in-progress': 'In Progress',
  'not-started': 'Not Started',
};

const iconColors: Record<string, { bg: string; stroke: string }> = {
  'completed': { bg: 'bg-green-bg', stroke: 'stroke-green' },
  'in-progress': { bg: 'bg-[#fef3c7]', stroke: 'stroke-[#d97706]' },
  'not-started': { bg: 'bg-[#f3f4f6]', stroke: 'stroke-gray' },
};

function RouteCard({ route }: { route: Route }) {
  const style = statusStyles[route.status];
  const icon = iconColors[route.status];
  return (
    <div className="bg-white/92 backdrop-blur-sm border-2 border-blue rounded-2xl p-4 flex gap-3.5 mb-3 shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
      <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${icon.bg}`}>
        <svg viewBox="0 0 24 24" className={`w-7 h-7 fill-none stroke-width-1.5 ${icon.stroke}`}><path d="M3 20l4-4 4 4 4-4 4 4 4-4"/><circle cx="7" cy="12" r="1.5"/><circle cx="17" cy="12" r="1.5"/></svg>
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between mb-1">
          <span className="text-[12px] text-gray">{route.date}</span>
          <span className={`inline-flex px-3 py-1 rounded-full text-[11px] font-medium ${style.bg} ${style.text}`}>{statusLabels[route.status]}</span>
        </div>
        <div className="text-[16px] font-bold mb-0.5">{route.name}</div>
        <div className="text-[13px] font-light text-gray mb-0.5">{route.stops} stops · {route.distance}</div>
        <div className="text-[13px] font-normal">{route.start} → {route.end}</div>
      </div>
    </div>
  );
}

export function RoutesScreen() {
  return (
    <div className="absolute inset-0 bg-[#e8e0d8]">
      {/* Map background */}
      <div className="absolute inset-0 overflow-hidden">
        <img src="/map.png" alt="" className="w-full h-full object-cover opacity-60" />
        {mapLabels.map(l => (
          <div key={l.text} className="absolute text-[10px] font-semibold text-[#7a7268] uppercase tracking-[0.5px] whitespace-nowrap" style={{ top: l.top, left: l.left }}>{l.text}</div>
        ))}
        {/* Route line */}
        <svg className="absolute top-0 left-0 w-full h-full z-[4]" viewBox="0 0 390 500">
          <path d="M180 80 L180 120 L200 200 L190 300 L195 380" stroke="#4F6CF7" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        {/* Route markers */}
        <div className="absolute w-7 h-7 rounded-full bg-blue text-white flex items-center justify-center text-[13px] font-bold z-[6] shadow-[0_2px_6px_rgba(79,108,247,0.4)]" style={{ top: '10%', left: '43%' }}>1</div>
        <div className="absolute w-7 h-7 rounded-full bg-blue text-white flex items-center justify-center text-[13px] font-bold z-[6] shadow-[0_2px_6px_rgba(79,108,247,0.4)]" style={{ top: '35%', left: '47%' }}>2</div>
        <div className="absolute w-7 h-7 rounded-full bg-blue text-white flex items-center justify-center text-[13px] font-bold z-[6] shadow-[0_2px_6px_rgba(79,108,247,0.4)]" style={{ top: '60%', left: '45%' }}>3</div>
      </div>

      {/* Content overlay */}
      <div className="relative z-20 flex-1 flex flex-col overflow-y-auto h-full scrollbar-none">
        <div className="flex items-center justify-between px-5 pt-3">
          <h1 className="font-display text-[32px] font-bold">Routes</h1>
          <button className="inline-flex items-center gap-1.5 px-4.5 py-2.5 rounded-full bg-blue text-white text-[14px] font-semibold border-none cursor-pointer shadow-[0_4px_16px_rgba(0,0,0,0.10)]">
            <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-white fill-none stroke-width-2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            New Route
          </button>
        </div>
        <div className="flex-1 min-h-[200px]" />
        <div className="px-5 pb-[100px]">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-[16px] font-semibold">My Routes</h3>
            <a href="#" className="text-[14px] font-semibold text-blue no-underline">See all ›</a>
          </div>
          {routes.map(r => <RouteCard key={r.id} route={r} />)}
        </div>
      </div>
    </div>
  );
}
