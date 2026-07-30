import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  LineChart,
  TrendingUp,
  DollarSign,
  Eye,
  Users,
  Award,
  Sparkles,
  Calendar,
  Filter
} from 'lucide-react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar
} from 'recharts';

export const AnalyticsView: React.FC = () => {
  const [timeRange, setTimeRange] = useState<string>('30D');

  const MONTHLY_ANALYTICS = [
    { date: 'Jul 01', views: 32000, subscribers: 420, revenue: 240 },
    { date: 'Jul 05', views: 54000, subscribers: 680, revenue: 410 },
    { date: 'Jul 10', views: 89000, subscribers: 1200, revenue: 780 },
    { date: 'Jul 15', views: 124000, subscribers: 1850, revenue: 1150 },
    { date: 'Jul 20', views: 198000, subscribers: 2900, revenue: 1920 },
    { date: 'Jul 25', views: 280000, subscribers: 4100, revenue: 2800 },
    { date: 'Jul 30', views: 365000, subscribers: 5600, revenue: 3850 },
  ];

  const PLATFORM_REVENUE = [
    { platform: 'YouTube AdSense', amount: 3850, fill: '#FF0000' },
    { platform: 'StoryVerse Brand Deals', amount: 8500, fill: '#5B4CFF' },
    { platform: 'Affiliate Commissions', amount: 1420, fill: '#22C55E' },
    { platform: 'Community Memberships', amount: 980, fill: '#FFB800' },
  ];

  return (
    <div className="space-y-6 pb-12">
      {/* Module Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-[#8B5CF6] uppercase tracking-wider mb-1">
            <LineChart className="h-4 w-4 text-[#FFB800]" />
            <span>MODULE 10 • DEEP AUDIENCE & MONETIZATION INTELLIGENCE</span>
          </div>
          <h1 className="text-2xl font-black text-white tracking-tight">Advanced Analytics Dashboard</h1>
          <p className="text-xs text-slate-400 mt-1">
            Unified multi-channel performance timeline, audience growth velocity, CTR benchmarks, and revenue attribution.
          </p>
        </div>

        {/* Time Range Selector */}
        <div className="flex items-center gap-1 rounded-xl border border-slate-800 bg-[#111827] p-1">
          {['7D', '30D', '90D', '1Y'].map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
                timeRange === range
                  ? 'bg-[#5B4CFF] text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      {/* Top 4 Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="rounded-2xl border border-slate-800 bg-[#111827]/90 p-5 space-y-1 shadow-lg">
          <span className="text-xs font-bold text-slate-400 uppercase">Total Impressions</span>
          <div className="text-2xl font-black text-white">4,820,000</div>
          <div className="text-xs font-bold text-[#22C55E]">+31.2% this month</div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-[#111827]/90 p-5 space-y-1 shadow-lg">
          <span className="text-xs font-bold text-slate-400 uppercase">Average CTR</span>
          <div className="text-2xl font-black text-white">11.4%</div>
          <div className="text-xs font-bold text-[#22C55E]">2.4x Industry Avg (4.8%)</div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-[#111827]/90 p-5 space-y-1 shadow-lg">
          <span className="text-xs font-bold text-slate-400 uppercase">Subscribers Gained</span>
          <div className="text-2xl font-black text-white">+14,750</div>
          <div className="text-xs font-bold text-[#22C55E]">+4,200 from Shorts</div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-[#111827]/90 p-5 space-y-1 shadow-lg">
          <span className="text-xs font-bold text-slate-400 uppercase">Total Monthly Earnings</span>
          <div className="text-2xl font-black text-[#22C55E]">$14,750</div>
          <div className="text-xs font-bold text-slate-400">Includes $8.5k Brand Deals</div>
        </div>
      </div>

      {/* Main Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Performance Timeline Area Chart */}
        <div className="lg:col-span-2 rounded-3xl border border-slate-800 bg-[#111827]/90 p-6 shadow-xl space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-white">Views & Subscriber Growth Velocity</h3>
            <span className="text-xs text-[#8B5CF6] font-semibold">Updated 5m ago</span>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={MONTHLY_ANALYTICS}>
                <defs>
                  <linearGradient id="vGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#5B4CFF" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#5B4CFF" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="date" stroke="#64748B" fontSize={11} />
                <YAxis stroke="#64748B" fontSize={11} />
                <Tooltip contentStyle={{ backgroundColor: '#0B1020', borderColor: '#334155', color: '#FFF' }} />
                <Area type="monotone" dataKey="views" stroke="#5B4CFF" strokeWidth={3} fill="url(#vGrad)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Revenue Attribution Bar Chart */}
        <div className="rounded-3xl border border-slate-800 bg-[#111827]/90 p-6 shadow-xl space-y-4">
          <h3 className="text-sm font-bold text-white">Revenue Sources Attribution</h3>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={PLATFORM_REVENUE} layout="vertical">
                <XAxis type="number" stroke="#64748B" fontSize={10} />
                <YAxis dataKey="platform" type="category" stroke="#64748B" fontSize={10} width={110} />
                <Tooltip contentStyle={{ backgroundColor: '#0B1020', borderColor: '#334155', color: '#FFF' }} />
                <Bar dataKey="amount" fill="#22C55E" radius={[0, 6, 6, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};
