export function StatusBar() {
  return (
    <div className="h-11 flex items-center justify-between px-7 text-sm font-semibold relative z-50">
      <span className="font-bold">9:41</span>
      <div className="flex gap-1.5 items-center">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M1 6l3-3 3 3M4 3v5M9 6l3-3 3 3M12 3v5"/></svg>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><circle cx="12" cy="20" r="1" fill="currentColor"/></svg>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><rect x="2" y="6" width="18" height="12" rx="2"/><rect x="4" y="8" width="10" height="8" rx="1" fill="currentColor" stroke="none"/><path d="M22 10v4"/></svg>
      </div>
    </div>
  );
}
