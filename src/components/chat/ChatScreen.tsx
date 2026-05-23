import { useState } from 'react';
import { initialMessages } from '../../api/data';
import type { ChatMessage, QuickAction } from '../../types';

function QuickActionButton({ action }: { action: QuickAction }) {
  const iconMap: Record<string, React.ReactNode> = {
    search: <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-blue fill-none stroke-width-2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>,
    'map-pin': <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-blue fill-none stroke-width-2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
    message: <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-blue fill-none stroke-width-2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
  };
  return (
    <button className="flex items-center gap-4 px-[18px] py-[14px] rounded-xl bg-surface border-1.5 border-blue cursor-pointer">
      <div className="w-10 h-10 rounded-lg bg-blue-light flex items-center justify-center">
        {iconMap[action.icon] || iconMap.search}
      </div>
      <div>
        <div className="text-[14px] font-semibold text-dark">{action.title}</div>
        <div className="text-[12px] font-light text-gray">{action.subtitle}</div>
      </div>
    </button>
  );
}

export function ChatScreen() {
  const [messages] = useState<ChatMessage[]>(initialMessages);
  const [inputText, setInputText] = useState('');

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-surface">
        <div className="w-9" />
        <div className="text-center">
          <div className="text-[15px] font-semibold">AI Travel Assistant</div>
          <div className="text-[12px] text-green font-medium">● Online · Today</div>
        </div>
        <button className="w-9 h-9 flex items-center justify-center border-none bg-transparent cursor-pointer">
          <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-dark fill-none stroke-width-2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-5 py-4 flex flex-col gap-3 scrollbar-none">
        <div className="text-center text-[11px] text-gray py-1">10:30 AM</div>
        {messages.map(msg => (
          msg.type === 'quick-action' && msg.quickActions ? (
            <div key={msg.id} className="flex flex-col gap-2 self-start max-w-[85%]">
              {msg.quickActions.map(qa => <QuickActionButton key={qa.id} action={qa} />)}
            </div>
          ) : (
            <div key={msg.id} className={`max-w-[80%] px-3.5 py-2.5 rounded-xl text-[14px] leading-relaxed ${msg.sender === 'bot' ? 'bg-[#f3f4f6] text-dark self-start rounded-bl-sm font-normal' : 'bg-blue text-white self-end rounded-br-sm font-normal'}`}>
              {msg.text}
            </div>
          )
        ))}
      </div>

      {/* Input */}
      <div className="flex items-center gap-2.5 px-5 py-3 bg-surface border-t border-border">
        <div className="flex-1 h-10 rounded-[20px] border border-border px-4 text-[14px] text-gray bg-bg flex items-center">
          <input
            type="text"
            value={inputText}
            onChange={e => setInputText(e.target.value)}
            placeholder="Type your message..."
            className="w-full bg-transparent outline-none text-dark placeholder:text-gray"
          />
        </div>
        <button className="w-10 h-10 rounded-full bg-blue flex items-center justify-center border-none cursor-pointer">
          <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] stroke-white fill-none stroke-width-2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9"/></svg>
        </button>
      </div>
    </div>
  );
}
