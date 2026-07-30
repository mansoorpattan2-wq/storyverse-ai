import React from 'react';
import { motion } from 'motion/react';
import {
  TrendingUp,
  Sparkles,
  DollarSign,
  Eye,
  ArrowUpRight,
  Play,
  Briefcase,
  ChevronRight,
  Bot,
  Flame,
  CheckCircle2,
  Calendar,
  Layers
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
import { UserRole, NavigationTab, Campaign, WorkspaceProject } from '../../types';

interface DashboardViewProps {
  userRole: UserRole;
  setActiveTab: (tab: NavigationTab) => void;
  campaigns: Campaign[];
  projects: WorkspaceProject[];
}

const PERFORMANCE_DATA = [
  { day: 'Mon', views: 42000, revenue: 320, engagement: 6.2 },
  { day: 'Tue', views: 68000, revenue: 580, engagement: 7.1 },
  { day: 'Wed', views: 95000, revenue: 840, engagement: 8.4 },
  { day: 'Thu', views: 124000, revenue: 1120, engagement: 7.8 },
  { day: 'Fri', views: 189000, revenue: 1650, engagement: 9.2 },
  { day: 'Sat', views: 240000, revenue: 2100, engagement: 9.8 },
  { day: 'Sun', views: 310000, revenue: 2850, engagement: 10.4 },
];

export const DashboardView: React.FC<DashboardViewProps> = ({
  userRole,
  setActiveTab,
  campaigns,
  projects,
}) => {
  return (
    <div className="space-y-6 pb-12">
      {/* Top Banner */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#111827] p-6 shadow-2xl"
      >
        <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-[#5B4CFF]/20 blur-3xl" />
        <div className="absolute -left-10 -bottom-10 h-48 w-48 rounded-full bg-[#8B5CF6]/20 blur-3xl" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#5B4CFF]/40 bg-[#5B4CFF]/10 px-3 py-1 text-xs font-bold text-[#8B5CF6] mb-3">
              <Sparkles className="h-3.5 w-3.5 text-[#FFB800] animate-spin" />
              <span>AI Content Intelligence OS Active</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Welcome back, <span className="bg-gradient-to-r from-white via-slate-100 to-[#8B5CF6] bg-clip-text text-transparent">Alex Rivera</span> 👋
            </h1>
            <p className="mt-1 text-xs sm:text-sm text-[#94A3B8] max-w-xl leading-relaxed">
              {userRole === 'creator'
                ? 'Your AI models identified 3 trending topics gaining +240% reach today. Your audience engagement is up 18.4%.'
                : 'Your brand campaigns reached 1.2M targeted viewers across 4 creator partnerships this week.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setActiveTab('trend_hunter')}
              className="flex items-center gap-2 rounded-lg bg-[#5B4CFF] px-4 py-2 text-xs font-bold text-white uppercase tracking-wider shadow-lg shadow-[#5B4CFF]/30 hover:bg-[#4C3CE0] active:scale-95 transition-all"
            >
              <Flame className="h-4 w-4 text-[#FFB800]" />
              <span>Deep Scan</span>
            </button>
            <button
              onClick={() => setActiveTab('storyverse_connect')}
              className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold text-slate-200 hover:border-[#5B4CFF] hover:text-white transition-all"
            >
              <Briefcase className="h-4 w-4 text-[#22C55E]" />
              <span>{userRole === 'creator' ? 'Marketplace Deals' : 'Manage Campaigns'}</span>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Primary Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4">
        
        {/* Module 1: AI Trend Hunter (Large Bento Card - lg:col-span-8) */}
        <section className="lg:col-span-8 bg-[#111827] rounded-2xl border border-white/5 p-6 flex flex-col justify-between hover:border-white/10 transition-all">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-lg font-semibold flex items-center gap-2 text-white">
                <span className="text-[#FFB800]">✦</span> AI Trend Hunter
              </h2>
              <p className="text-xs text-[#94A3B8]">Viral opportunities surfacing in the last 60 minutes</p>
            </div>
            <button
              onClick={() => setActiveTab('trend_hunter')}
              className="px-3 py-1.5 bg-[#5B4CFF] text-white text-[10px] font-bold rounded-lg uppercase tracking-wider hover:bg-[#4C3CE0] transition-colors"
            >
              Deep Scan
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div
              onClick={() => setActiveTab('trend_hunter')}
              className="bg-[#0B1020] p-4 rounded-xl border border-white/5 hover:border-[#5B4CFF]/40 cursor-pointer transition-all"
            >
              <div className="text-[#22C55E] text-xs font-bold mb-1">+420%</div>
              <div className="text-sm font-semibold mb-1 text-white">#SpatialAudio</div>
              <div className="text-[10px] text-[#94A3B8]">Trending on TikTok & X</div>
            </div>

            <div
              onClick={() => setActiveTab('trend_hunter')}
              className="bg-[#0B1020] p-4 rounded-xl border border-white/5 hover:border-[#5B4CFF]/40 cursor-pointer transition-all"
            >
              <div className="text-[#22C55E] text-xs font-bold mb-1">+280%</div>
              <div className="text-sm font-semibold mb-1 text-white">Eco-Minimalism</div>
              <div className="text-[10px] text-[#94A3B8]">Search volume spike</div>
            </div>

            <div
              onClick={() => setActiveTab('trend_hunter')}
              className="bg-[#0B1020] p-4 rounded-xl border border-white/5 hover:border-[#FFB800]/40 cursor-pointer transition-all"
            >
              <div className="text-[#FFB800] text-xs font-bold mb-1">Breaking</div>
              <div className="text-sm font-semibold mb-1 text-white">NextGen Reels</div>
              <div className="text-[10px] text-[#94A3B8]">Algorithm shift detected</div>
            </div>

            <div
              onClick={() => setActiveTab('trend_hunter')}
              className="bg-[#0B1020] p-4 rounded-xl border border-white/5 hover:border-[#5B4CFF]/40 cursor-pointer transition-all"
            >
              <div className="text-[#22C55E] text-xs font-bold mb-1">+195%</div>
              <div className="text-sm font-semibold mb-1 text-white">AI Storytelling</div>
              <div className="text-[10px] text-[#94A3B8]">High engagement ROI</div>
            </div>
          </div>
        </section>

        {/* Module 2: Engagement Predictor (lg:col-span-4) */}
        <section
          onClick={() => setActiveTab('engagement_predictor')}
          className="lg:col-span-4 bg-[#111827] rounded-2xl border border-white/5 p-6 flex flex-col justify-between cursor-pointer hover:border-white/10 transition-all"
        >
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold text-white">Engagement Predictor</h2>
            <span className="text-[10px] font-bold text-[#8B5CF6] bg-[#5B4CFF]/15 px-2 py-0.5 rounded uppercase">Live</span>
          </div>

          <div className="flex-1 flex flex-col justify-center items-center py-2">
            <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#5B4CFF] to-[#8B5CF6] mb-1">
              94.2
            </div>
            <p className="text-[10px] text-[#94A3B8] mb-4 uppercase tracking-widest font-bold">AI Confidence Score</p>
            
            <div className="w-full flex items-end justify-between h-16 gap-1 px-4">
              <div className="w-3 bg-white/10 h-1/4 rounded-t"></div>
              <div className="w-3 bg-white/10 h-2/5 rounded-t"></div>
              <div className="w-3 bg-[#5B4CFF] h-3/4 rounded-t shadow-[0_0_15px_rgba(91,76,255,0.4)]"></div>
              <div className="w-3 bg-[#5B4CFF] h-full rounded-t shadow-[0_0_15px_rgba(91,76,255,0.6)]"></div>
              <div className="w-3 bg-white/10 h-3/5 rounded-t"></div>
              <div className="w-3 bg-white/10 h-2/3 rounded-t"></div>
              <div className="w-3 bg-white/10 h-2/5 rounded-t"></div>
            </div>
          </div>

          <div className="pt-3 border-t border-white/5 space-y-1">
            <div className="flex justify-between items-center">
              <span className="text-xs text-[#94A3B8]">Viral Probability</span>
              <span className="text-xs font-bold text-[#22C55E]">High (94.2%)</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-[#94A3B8]">Estimated Reach</span>
              <span className="text-xs font-bold text-white">1.2M - 1.8M</span>
            </div>
          </div>
        </section>

        {/* Module 3: Creator Workspace Pipeline (lg:col-span-5) */}
        <section className="lg:col-span-5 bg-[#111827] rounded-2xl border border-white/5 p-6 flex flex-col justify-between hover:border-white/10 transition-all">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-white">Active Workspace</h2>
            <div className="flex -space-x-2">
              <div className="w-6 h-6 rounded-full border border-[#111827] bg-[#5B4CFF] flex items-center justify-center text-[8px] font-bold text-white">JD</div>
              <div className="w-6 h-6 rounded-full border border-[#111827] bg-[#8B5CF6] flex items-center justify-center text-[8px] font-bold text-white">SM</div>
              <div className="w-6 h-6 rounded-full border border-[#111827] bg-[#94A3B8] flex items-center justify-center text-[8px] font-bold text-white">+3</div>
            </div>
          </div>

          <div className="space-y-3">
            <div
              onClick={() => setActiveTab('creator_workspace')}
              className="p-3.5 rounded-xl bg-white/5 border border-white/5 hover:border-white/20 cursor-pointer transition-all"
            >
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-semibold text-white">The Future of AI Shorts</span>
                <span className="px-2 py-0.5 bg-[#FFB800]/20 text-[#FFB800] text-[10px] font-bold rounded uppercase">Rendering</span>
              </div>
              <div className="w-full bg-[#0B1020] h-1.5 rounded-full">
                <div className="bg-[#FFB800] h-1.5 rounded-full transition-all" style={{ width: '75%' }}></div>
              </div>
            </div>

            <div
              onClick={() => setActiveTab('creator_workspace')}
              className="p-3.5 rounded-xl bg-white/5 border border-white/5 hover:border-white/20 cursor-pointer transition-all"
            >
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-semibold text-white">Luxe Travel Vlog #14</span>
                <span className="px-2 py-0.5 bg-[#5B4CFF]/20 text-[#8B5CF6] text-[10px] font-bold rounded uppercase">Optimizing</span>
              </div>
              <div className="w-full bg-[#0B1020] h-1.5 rounded-full">
                <div className="bg-[#5B4CFF] h-1.5 rounded-full transition-all" style={{ width: '40%' }}></div>
              </div>
            </div>

            <div
              onClick={() => setActiveTab('story_builder')}
              className="p-3 rounded-xl bg-white/5 border border-white/10 border-dashed hover:border-[#5B4CFF] hover:bg-[#5B4CFF]/10 cursor-pointer transition-all text-center"
            >
              <span className="text-xs font-medium text-[#94A3B8] hover:text-white">+ New StoryVerse Project</span>
            </div>
          </div>
        </section>

        {/* Module 4: Connect Marketplace (lg:col-span-3) */}
        <section
          onClick={() => setActiveTab('storyverse_connect')}
          className="lg:col-span-3 bg-gradient-to-br from-[#5B4CFF] to-[#8B5CF6] rounded-2xl p-6 flex flex-col justify-between cursor-pointer shadow-xl hover:opacity-95 transition-all text-white"
        >
          <div>
            <h2 className="text-white font-bold text-lg leading-tight mb-1">Connect Marketplace</h2>
            <p className="text-white/80 text-xs mb-4">AI-matched opportunities for your profile.</p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-3 bg-white/20 p-2.5 rounded-xl backdrop-blur-sm">
              <div className="w-8 h-8 rounded-lg bg-white/40 flex items-center justify-center font-extrabold text-xs">Ad</div>
              <div>
                <div className="text-xs font-bold text-white">Adobe Creative</div>
                <div className="text-[10px] text-white/80">$5,000 Campaign</div>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/20 p-2.5 rounded-xl backdrop-blur-sm">
              <div className="w-8 h-8 rounded-lg bg-white/40 flex items-center justify-center font-extrabold text-xs">N</div>
              <div>
                <div className="text-xs font-bold text-white">Notion Global</div>
                <div className="text-[10px] text-white/80">$12,500 Retainer</div>
              </div>
            </div>
          </div>
        </section>

        {/* Module 5: Nova Coach Insights (lg:col-span-4) */}
        <section className="lg:col-span-4 bg-[#111827] rounded-2xl border border-white/5 p-6 flex flex-col justify-between hover:border-white/10 transition-all">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-[#5B4CFF]/20 text-[#8B5CF6]">
                <Bot className="h-4 w-4" />
              </div>
              <h3 className="text-sm font-bold text-white">Nova AI Coach Insights</h3>
            </div>
            <span className="text-[10px] font-bold text-[#22C55E]">Live</span>
          </div>

          <div className="space-y-2.5 text-xs">
            <div className="bg-[#0B1020] p-3 rounded-xl border border-white/5">
              <div className="text-[#FFB800] font-bold text-[11px] mb-1">🔥 Hook Opportunity</div>
              <p className="text-[#94A3B8] leading-relaxed">"AI Agents in SaaS" is spiking on LinkedIn. Post script in next 3 hrs for 3x reach.</p>
            </div>
            <div className="bg-[#0B1020] p-3 rounded-xl border border-white/5">
              <div className="text-[#22C55E] font-bold text-[11px] mb-1">💰 Sponsorship Alert</div>
              <p className="text-[#94A3B8] leading-relaxed">StackFlow AI matched your audience profile. Expected payout: $2,500.</p>
            </div>
          </div>

          <button
            onClick={() => setActiveTab('nova_coach')}
            className="mt-3 w-full py-2 bg-white/5 rounded-lg border border-white/10 text-xs font-bold text-slate-200 hover:bg-[#5B4CFF] hover:text-white transition-all"
          >
            Ask Nova Anything →
          </button>
        </section>

        {/* Module 6: Live Performance Timeline (lg:col-span-12) */}
        <section className="lg:col-span-12 bg-[#111827] rounded-2xl border border-white/5 p-6 hover:border-white/10 transition-all">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-widest text-[#94A3B8]">Live Performance Timeline</h2>
              <p className="text-xs text-slate-400 mt-0.5">Views & Revenue trajectory driven by AI Trend Engine</p>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#5B4CFF]"></div>
                <span className="text-xs font-medium text-slate-300">Views</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFB800]"></div>
                <span className="text-xs font-medium text-slate-300">Revenue</span>
              </div>
            </div>
          </div>

          <div className="h-44 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={PERFORMANCE_DATA}>
                <defs>
                  <linearGradient id="viewsGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#5B4CFF" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#5B4CFF" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#FFB800" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#FFB800" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="day" stroke="#64748B" fontSize={11} />
                <YAxis stroke="#64748B" fontSize={11} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#0B1020',
                    borderColor: '#334155',
                    borderRadius: '12px',
                    color: '#FFF',
                  }}
                />
                <Area type="monotone" dataKey="views" stroke="#5B4CFF" strokeWidth={3} fillOpacity={1} fill="url(#viewsGrad)" />
                <Area type="monotone" dataKey="revenue" stroke="#FFB800" strokeWidth={2} fillOpacity={1} fill="url(#revGrad)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 mt-4 border-t border-white/5 pt-4">
            <div className="text-center border-r border-white/5">
              <div className="text-xs text-[#94A3B8] mb-1">CTR</div>
              <div className="text-sm sm:text-base font-bold text-white">8.4%</div>
            </div>
            <div className="text-center sm:border-r border-white/5">
              <div className="text-xs text-[#94A3B8] mb-1">Avg Watch</div>
              <div className="text-sm sm:text-base font-bold text-white">4:21</div>
            </div>
            <div className="text-center border-r border-white/5 mt-3 sm:mt-0">
              <div className="text-xs text-[#94A3B8] mb-1">RPM</div>
              <div className="text-sm sm:text-base font-bold text-[#22C55E]">$12.50</div>
            </div>
            <div className="text-center mt-3 sm:mt-0">
              <div className="text-xs text-[#94A3B8] mb-1">Engagement</div>
              <div className="text-sm sm:text-base font-bold text-white">18%</div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

