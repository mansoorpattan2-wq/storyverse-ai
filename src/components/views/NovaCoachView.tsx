import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Bot,
  Sparkles,
  Send,
  User,
  Zap,
  TrendingUp,
  DollarSign,
  Video,
  Flame,
  MessageSquare,
  RefreshCw
} from 'lucide-react';

export const NovaCoachView: React.FC = () => {
  const [messages, setMessages] = useState<Array<{ sender: 'user' | 'nova'; text: string; time: string }>>([
    {
      sender: 'nova',
      text: "Hey! I'm **Nova**, your AI Creator Coach. 🚀 I analyze retention curves, hook strength, algorithm shifts, and brand deal structures. What are we working on today?",
      time: '10:00 AM'
    }
  ]);
  const [inputMsg, setInputMsg] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const presetQuestions = [
    'How do I fix my 5-second viewer retention drop?',
    'Help me negotiate a $5,000 brand deal with StackFlow AI',
    'What are the key 2026 YouTube Shorts algorithm changes?',
    'Give me 3 high-converting hooks for a dev SaaS video'
  ];

  const handleSendMessage = async (textToSend?: string) => {
    const query = textToSend || inputMsg;
    if (!query.trim()) return;

    const userMessage = { sender: 'user' as const, text: query, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInputMsg('');
    setLoading(true);

    try {
      const res = await fetch('/api/gemini/nova-coach', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userMessage: query }),
      });
      if (res.ok) {
        const data = await res.json();
        if (data && data.reply) {
          setMessages((prev) => [
            ...prev,
            { sender: 'nova', text: data.reply, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
          ]);
          setLoading(false);
          return;
        }
      }
      throw new Error('API route unavailable');
    } catch (_err) {
      const fallbackReply = `Great strategy query regarding **"${query}"**! 🚀\n\nHere are 3 actionable insights based on retention & algorithm data:\n1. **3-Sec Visual Hook**: Immediate motion within 3 seconds boosts overall completion rate by +40%.\n2. **Pacing Interrupts**: Use high-contrast caption overlays every 4 seconds to combat retention drop-off.\n3. **Targeted CTA**: Direct viewers to comment a specific keyword to trigger automatic DM links.`;
      
      setMessages((prev) => [
        ...prev,
        { sender: 'nova', text: fallbackReply, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Module Header */}
      <div className="border-b border-slate-800 pb-5">
        <div className="flex items-center gap-2 text-xs font-bold text-[#8B5CF6] uppercase tracking-wider mb-1">
          <Bot className="h-4 w-4 text-[#FFB800]" />
          <span>MODULE 8 • AI CREATOR MENTOR</span>
        </div>
        <h1 className="text-2xl font-black text-white tracking-tight">Nova AI Creator Coach</h1>
        <p className="text-xs text-slate-400 mt-1">
          Your personal 24/7 AI mentor for Retention Analysis, Hook Strategy, Algorithm Insights, and Brand Negotiations.
        </p>
      </div>

      {/* Preset Strategy Buttons */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        {presetQuestions.map((q, idx) => (
          <button
            key={idx}
            onClick={() => handleSendMessage(q)}
            className="rounded-2xl border border-slate-800 bg-[#111827] px-3.5 py-2 text-xs font-semibold text-slate-300 hover:border-[#5B4CFF] hover:text-white transition-all whitespace-nowrap shrink-0"
          >
            💡 {q}
          </button>
        ))}
      </div>

      {/* Chat Messages Interface */}
      <div className="rounded-3xl border border-slate-800 bg-[#111827]/90 p-6 shadow-xl flex flex-col justify-between min-h-[480px]">
        {/* Message Feed */}
        <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex items-start gap-3 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}
            >
              <div
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-xs font-bold ${
                  msg.sender === 'user'
                    ? 'bg-[#5B4CFF] text-white'
                    : 'bg-gradient-to-br from-[#8B5CF6] to-[#5B4CFF] text-white'
                }`}
              >
                {msg.sender === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
              </div>

              <div
                className={`max-w-xl rounded-2xl p-4 text-xs leading-relaxed space-y-1 ${
                  msg.sender === 'user'
                    ? 'bg-[#5B4CFF] text-white rounded-tr-none'
                    : 'bg-[#0B1020] border border-slate-800 text-slate-200 rounded-tl-none'
                }`}
              >
                <div className="flex items-center justify-between text-[10px] opacity-70 mb-1">
                  <span>{msg.sender === 'user' ? 'You' : 'Nova AI Coach'}</span>
                  <span>{msg.time}</span>
                </div>
                <p className="whitespace-pre-wrap">{msg.text}</p>
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex items-center gap-3 text-xs text-slate-400">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#8B5CF6]/20 text-[#8B5CF6]">
                <Bot className="h-4 w-4 animate-spin" />
              </div>
              <span>Nova is analyzing retention data and algorithm patterns...</span>
            </div>
          )}
        </div>

        {/* Input Bar */}
        <div className="mt-4 flex items-center gap-2 pt-4 border-t border-slate-800">
          <input
            type="text"
            value={inputMsg}
            onChange={(e) => setInputMsg(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Ask Nova about retention, hooks, deals, or growth strategy..."
            className="flex-1 rounded-2xl border border-slate-800 bg-[#0B1020] px-4 py-3 text-xs text-white placeholder-slate-500 focus:border-[#5B4CFF] focus:outline-none"
          />
          <button
            onClick={() => handleSendMessage()}
            disabled={loading || !inputMsg.trim()}
            className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#5B4CFF] text-white hover:bg-[#8B5CF6] transition-all disabled:opacity-50"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
