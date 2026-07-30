import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Users2,
  Sparkles,
  PieChart as PieIcon,
  Globe,
  Brain,
  ThumbsUp,
  MessageSquare,
  Zap,
  Target
} from 'lucide-react';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis
} from 'recharts';

export const AudienceTwinView: React.FC = () => {
  const [testTopic, setTestTopic] = useState<string>('How AI Agents Will Replace 80% of Repetitive SaaS Code');
  const [simulatedReaction, setSimulatedReaction] = useState<any>({
    approvalRate: 94,
    topEmotion: 'Curiosity & Excitement',
    likelyComments: [
      '"Finally someone explained agentic workflows without 2 hours of fluff!"',
      '"Can you do a video on open-source agent tools next?"',
      '"Stealing this 3-step setup for my dev startup."'
    ],
    personaBreakdown: [
      { name: 'Senior Full-Stack Developers', segment: '38%', reaction: 'Deeply interested in schema & error handling groundings.' },
      { name: 'Tech Startup Founders & Solopreneurs', segment: '32%', reaction: 'Excited by 10x speed gains and reduced engineering burn.' },
      { name: 'Computer Science Students', segment: '20%', reaction: 'Eager for starter repo code links and tutorials.' },
      { name: 'Non-Technical Marketers', segment: '10%', reaction: 'Curious about no-code AI agent capabilities.' }
    ]
  });

  const DEMO_DATA = [
    { name: '18-24 Yrs', value: 32, fill: '#5B4CFF' },
    { name: '25-34 Yrs', value: 48, fill: '#8B5CF6' },
    { name: '35-44 Yrs', value: 14, fill: '#FFB800' },
    { name: '45+ Yrs', value: 6, fill: '#22C55E' },
  ];

  const LOCATION_DATA = [
    { country: 'India', pct: 38 },
    { country: 'United States', pct: 32 },
    { country: 'United Kingdom', pct: 14 },
    { country: 'Germany', pct: 9 },
    { country: 'Singapore', pct: 7 },
  ];

  return (
    <div className="space-y-6 pb-12">
      {/* Module Header */}
      <div className="border-b border-slate-800 pb-5">
        <div className="flex items-center gap-2 text-xs font-bold text-[#8B5CF6] uppercase tracking-wider mb-1">
          <Users2 className="h-4 w-4 text-[#22C55E]" />
          <span>MODULE 9 • BEHAVIORAL DIGITAL TWIN</span>
        </div>
        <h1 className="text-2xl font-black text-white tracking-tight">Audience Digital Twin</h1>
        <p className="text-xs text-slate-400 mt-1">
          Simulate audience reactions, comment tone, and segment willingness to watch before releasing your video.
        </p>
      </div>

      {/* Simulator Input Bar */}
      <div className="rounded-3xl border border-slate-800 bg-[#111827]/90 p-6 shadow-xl space-y-3">
        <label className="block text-xs font-bold text-slate-300">Simulate Topic Reaction on Audience Twin</label>
        <div className="flex gap-2">
          <input
            type="text"
            value={testTopic}
            onChange={(e) => setTestTopic(e.target.value)}
            className="flex-1 rounded-xl border border-slate-800 bg-[#0B1020] px-4 py-2.5 text-xs text-white focus:border-[#5B4CFF] focus:outline-none"
          />
          <button
            onClick={() => {
              // Refresh simulation
            }}
            className="flex items-center gap-2 rounded-xl bg-[#5B4CFF] px-4 py-2.5 text-xs font-bold text-white hover:bg-[#8B5CF6] transition-all"
          >
            <Brain className="h-4 w-4 text-[#FFB800]" />
            <span>Simulate Reaction</span>
          </button>
        </div>
      </div>

      {/* Simulation Results Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Reaction Breakdown */}
        <div className="lg:col-span-2 rounded-3xl border border-slate-800 bg-[#111827]/90 p-6 shadow-xl space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h3 className="text-sm font-bold text-white">Simulated Audience Persona Reactions</h3>
            <span className="rounded-full bg-[#22C55E]/15 px-3 py-1 text-xs font-bold text-[#22C55E]">
              {simulatedReaction.approvalRate}% Predicted Positive Approval
            </span>
          </div>

          <div className="space-y-3">
            {simulatedReaction.personaBreakdown.map((p: any, idx: number) => (
              <div key={idx} className="rounded-2xl border border-slate-800 bg-[#0B1020] p-3.5 text-xs space-y-1">
                <div className="flex items-center justify-between font-bold text-white">
                  <span>{p.name} ({p.segment} of audience)</span>
                  <span className="text-[#8B5CF6] font-mono">High Engagement</span>
                </div>
                <p className="text-slate-300 text-[11px]">{p.reaction}</p>
              </div>
            ))}
          </div>

          {/* Likely Comments */}
          <div className="pt-2">
            <span className="text-xs font-bold text-slate-300 block mb-2">Predicted Viewer Comments</span>
            <div className="space-y-1.5">
              {simulatedReaction.likelyComments.map((c: string, idx: number) => (
                <div key={idx} className="rounded-xl bg-slate-800/60 p-2.5 text-xs text-slate-300 italic">
                  💬 {c}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Demographics & Locations */}
        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-800 bg-[#111827]/90 p-6 shadow-xl space-y-3">
            <h3 className="text-sm font-bold text-white border-b border-slate-800 pb-2">Age Demographics</h3>
            <div className="h-44 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={DEMO_DATA} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={35} outerRadius={60}>
                    {DEMO_DATA.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ backgroundColor: '#0B1020', borderColor: '#334155', color: '#FFF' }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-[#111827]/90 p-6 shadow-xl space-y-3">
            <h3 className="text-sm font-bold text-white border-b border-slate-800 pb-2">Top Audience Locations</h3>
            <div className="space-y-2">
              {LOCATION_DATA.map((loc) => (
                <div key={loc.country} className="flex items-center justify-between text-xs">
                  <span className="text-slate-300 font-medium">{loc.country}</span>
                  <span className="font-bold text-[#FFB800]">{loc.pct}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
