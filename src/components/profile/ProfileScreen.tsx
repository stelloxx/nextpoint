import { profile, friends, activities } from '../../api/data';

export function ProfileScreen() {
  return (
    <div className="flex flex-col h-full overflow-y-auto scrollbar-none">
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-3">
        <h1 className="text-[22px] font-bold">My Profile</h1>
        <button className="w-9 h-9 flex items-center justify-center border-none bg-transparent cursor-pointer">
          <svg viewBox="0 0 24 24" className="w-[22px] h-[22px] stroke-dark fill-none stroke-width-2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
        </button>
      </div>

      {/* Profile card */}
      <div className="flex items-center gap-3.5 px-5 py-4">
        <div className="w-[72px] h-[72px] rounded-full overflow-hidden border-[2.5px] border-blue flex-shrink-0">
          <img src={profile.avatarUrl} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="text-[18px] font-bold">{profile.name}</span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-blue/8 text-blue text-[11px] font-semibold">⬡ PRO</span>
          </div>
          <div className="text-[14px] text-gray font-light">{profile.handle}</div>
          <div className="text-[12px] text-gray mt-0.5">Pro until {profile.proExpiry}</div>
        </div>
      </div>

      {/* Stats */}
      <div className="flex items-center justify-around px-5 py-3.5 border-y border-border">
        <div className="text-center">
          <div className="text-[20px] font-bold text-blue">{profile.tours}</div>
          <div className="text-[12px] text-gray font-light">Tours</div>
        </div>
        <div className="text-center">
          <div className="text-[20px] font-bold text-blue">{profile.checkins}</div>
          <div className="text-[12px] text-gray font-light">Check-ins</div>
        </div>
        <div className="text-center">
          <div className="text-[20px] font-bold text-blue">{profile.cities}</div>
          <div className="text-[12px] text-gray font-light">Cities</div>
        </div>
      </div>

      {/* Interests */}
      <div className="px-5 pt-4">
        <h3 className="text-[16px] font-semibold mb-2.5">Interests</h3>
        <div className="flex flex-wrap gap-2">
          {profile.interests.map(i => (
            <span key={i} className="inline-flex items-center px-3.5 py-2 rounded-full bg-surface border border-border/60 text-[14px] font-medium shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
              {i}
            </span>
          ))}
        </div>
      </div>

      {/* Friends */}
      <div className="px-5 pt-5">
        <div className="flex items-center justify-between mb-2.5">
          <h3 className="text-[16px] font-semibold">Friends</h3>
          <a href="#" className="text-[14px] font-semibold text-blue no-underline">See all</a>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-1 scrollbar-none">
          {friends.map(f => (
            <div key={f.id} className="flex flex-col items-center gap-1.5 flex-shrink-0">
              <div className="w-[52px] h-[52px] rounded-full overflow-hidden">
                <img src={f.avatarUrl} alt="" className="w-full h-full object-cover" />
              </div>
              <span className="text-[12px] font-medium text-gray">{f.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Activity */}
      <div className="px-5 pt-5 pb-[100px]">
        <div className="flex items-center justify-between mb-2.5">
          <h3 className="text-[16px] font-semibold">Activity</h3>
          <a href="#" className="text-[14px] font-semibold text-blue no-underline">See all</a>
        </div>
        <div className="flex flex-col gap-3">
          {activities.map(a => (
            <div key={a.id} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                <img src={a.friendAvatarUrl} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <div className="text-[14px]"><span className="font-semibold">{a.friendName}</span> {a.action}</div>
                <div className="text-[12px] text-gray font-light">{a.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
