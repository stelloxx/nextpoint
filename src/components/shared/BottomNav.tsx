import { useApp } from '../../hooks/useApp';
import type { Screen } from '../../types';

const tabs: { screen: Screen; label: string; icon: React.ReactNode }[] = [
  { screen: 'tours', label: 'Tours', icon: <svg viewBox="0 0 24 24" className="w-[22px] h-[22px]"><path d="M9 18V5l12-2v13" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><circle cx="6" cy="18" r="3" fill="none" stroke="currentColor" strokeWidth="1.8"/><circle cx="18" cy="16" r="3" fill="none" stroke="currentColor" strokeWidth="1.8"/></svg> },
  { screen: 'routes', label: 'Routes', icon: <svg viewBox="0 0 24 24" className="w-[22px] h-[22px]"><circle cx="6" cy="6" r="3" fill="none" stroke="currentColor" strokeWidth="1.8"/><circle cx="6" cy="18" r="3" fill="none" stroke="currentColor" strokeWidth="1.8"/><line x1="6" y1="9" x2="6" y2="15" stroke="currentColor" strokeWidth="1.8"/><path d="M18 6a3 3 0 1 0 0 6 3 3 0 1 0 0-6z" fill="none" stroke="currentColor" strokeWidth="1.8"/><line x1="9" y1="18" x2="15" y2="18" stroke="currentColor" strokeWidth="1.8"/></svg> },
  { screen: 'map', label: 'Map', icon: <svg viewBox="0 0 24 24" className="w-[22px] h-[22px]"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/><line x1="8" y1="2" x2="8" y2="18" stroke="currentColor" strokeWidth="1.8"/><line x1="16" y1="6" x2="16" y2="22" stroke="currentColor" strokeWidth="1.8"/></svg> },
  { screen: 'chat', label: 'Chat', icon: <svg viewBox="0 0 24 24" className="w-[22px] h-[22px]"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { screen: 'profile', label: 'My Profile', icon: <svg viewBox="0 0 24 24" className="w-[22px] h-[22px]"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="7" r="4" fill="none" stroke="currentColor" strokeWidth="1.8"/></svg> },
];

export function BottomNav() {
  const { activeScreen, setScreen } = useApp();
  return (
    <nav className="absolute bottom-0 left-0 right-0 h-[84px] pb-[20px] bg-surface flex items-start justify-around pt-2 border-t border-border z-50">
      {tabs.map(({ screen, label, icon }) => {
        const active = activeScreen === screen;
        return (
          <button
            key={screen}
            onClick={() => setScreen(screen)}
            className={`flex flex-col items-center gap-[3px] cursor-pointer px-3.5 py-1 rounded-xl transition-colors ${active ? 'bg-blue-15' : ''}`}
          >
            <span className={`${active ? 'stroke-blue' : 'stroke-gray'}`}>{icon}</span>
            <span className={`text-[11px] font-medium ${active ? 'text-blue' : 'text-gray'}`}>{label}</span>
          </button>
        );
      })}
    </nav>
  );
}
