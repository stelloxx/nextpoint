import { useState, useCallback } from 'react';
import { AppContext } from './hooks/useApp';
import type { Screen, City } from './types';
import { cities } from './api/data';
import { BottomNav, MapScreen, ToursScreen, RoutesScreen, ChatScreen, ProfileScreen } from './components';

const defaultCity: City = cities[0];

export default function App() {
  const [activeScreen, setActiveScreen] = useState<Screen>('map');
  const [city, setCity] = useState<City>(defaultCity);
  const [citySelectorOpen, setCitySelectorOpen] = useState(false);

  const setScreen = useCallback((s: Screen) => setActiveScreen(s), []);
  const openCitySelector = useCallback(() => setCitySelectorOpen(true), []);
  const closeCitySelector = useCallback(() => setCitySelectorOpen(false), []);

  return (
    <AppContext.Provider value={{ activeScreen, city, citySelectorOpen, setScreen, setCity, openCitySelector, closeCitySelector }}>
      <div className="w-full min-h-screen relative bg-bg">
        <div className="relative overflow-hidden pb-[84px]">
          {activeScreen === 'map' && (
            <div className="absolute inset-0 flex flex-col">
              <MapScreen />
            </div>
          )}
          {activeScreen === 'tours' && (
            <div className="absolute inset-0 overflow-y-auto scrollbar-none flex flex-col">
              <ToursScreen />
            </div>
          )}
          {activeScreen === 'routes' && (
            <div className="absolute inset-0 flex flex-col">
              <RoutesScreen />
            </div>
          )}
          {activeScreen === 'chat' && (
            <div className="absolute inset-0 flex flex-col">
              <ChatScreen />
            </div>
          )}
          {activeScreen === 'profile' && (
            <div className="absolute inset-0 overflow-y-auto scrollbar-none flex flex-col">
              <ProfileScreen />
            </div>
          )}
        </div>
        <BottomNav />

        {/* City selector modal */}
        {citySelectorOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/30" onClick={closeCitySelector}>
            <div className="bg-surface rounded-2xl p-5 w-[280px] shadow-lg" onClick={e => e.stopPropagation()}>
              <div className="text-[16px] font-semibold mb-3">Select City</div>
              <div className="flex flex-col gap-2">
                {cities.map(c => (
                  <button
                    key={c.id}
                    onClick={() => { setCity(c); closeCitySelector(); }}
                    className={`text-left px-4 py-3 rounded-xl border-none cursor-pointer text-[14px] font-medium ${city.id === c.id ? 'bg-blue-light text-blue' : 'bg-bg text-dark'}`}
                  >
                    {c.name}, {c.country}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </AppContext.Provider>
  );
}
