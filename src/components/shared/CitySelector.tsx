import { useApp } from '../../hooks/useApp';

export function CitySelector() {
  const { city, openCitySelector } = useApp();
  return (
    <button
      onClick={openCitySelector}
      className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm px-5 py-2.5 rounded-full shadow-[0_2px_16px_rgba(0,0,0,0.12)] text-[15px] font-semibold"
    >
      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] stroke-blue fill-none stroke-width-2"><polygon points="3 11 6 4 9 11"/><path d="M6 4v16"/></svg>
      {city.name}
      <span className="text-[10px] text-gray ml-0.5">▾</span>
    </button>
  );
}
