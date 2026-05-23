import { createContext, useContext } from 'react';
import type { Screen, City } from '../types';

export interface AppState {
  activeScreen: Screen;
  city: City;
  citySelectorOpen: boolean;
}

export interface AppContextValue extends AppState {
  setScreen: (s: Screen) => void;
  setCity: (c: City) => void;
  openCitySelector: () => void;
  closeCitySelector: () => void;
}

export const AppContext = createContext<AppContextValue | null>(null);

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
