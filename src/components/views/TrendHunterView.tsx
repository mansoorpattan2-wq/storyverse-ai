import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  TrendingUp,
  Globe2,
  Sparkles,
  RefreshCw,
  Search,
  Hash,
  Award,
  Zap,
  CheckCircle2,
  Share2,
  ArrowRight,
  Flame,
  HelpCircle,
  Eye
} from 'lucide-react';
import { TrendItem, NavigationTab } from '../../types';

interface TrendHunterViewProps {
  trends: TrendItem[];
  setTrends: React.Dispatch<React.SetStateAction<TrendItem[]>>;
  setActiveTab: (tab: NavigationTab) => void;
  onSendToStoryBuilder: (topic: string) => void;
}

export const TrendHunterView: React.FC<TrendHunterViewProps> = ({
  trends = [],
  setTrends,
  setActiveTab,
  onSendToStoryBuilder,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedRegion, setSelectedRegion] = useState<string>('Global');
  const [loading, setLoading] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Tech & AI', 'Creator Business', 'Video Production', 'Regional Trends', 'Finance', 'Design'];
  const regions = ['Global', 'India & SEA', 'US & North America', 'Europe', 'Latin America'];

  const handleRefreshTrends = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/gemini/trends', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ category: selectedCategory, region: selectedRegion }),
      });
      if (res.ok) {
        const data = await res.json();
        if (data && data.success && data.trends) {
          setTrends(data.trends);
          setLoading(false);
          return;
        }
      }
      throw new Error('API route unavailable');
    } catch (_err) {
      // Dynamic fallback trends
      setTrends([
        {
          id: `trend-ref-${Date.now()}-1`,
          topic: `${selectedCategory !== 'All' ? selectedCategory : 'AI Agents'} in Vertical Workflows`,
          volume: '2.4M searches/mo',
          growth: '+280% Velocity',
          category: selectedCategory !== 'All' ? selectedCategory : 'Tech & AI',
          region: selectedRegion,
          whyTrending: 'Autonomous task execution pipelines are replacing legacy manual dashboard setups across industry verticals.',
          viralHashtags: ['#AIAgents', '#Automation2026', '#DeveloperTools', '#StoryVerse'],
          competitorInsight: 'Only 8% of top channels are breaking down real code implementations vs generic high-level marketing slides.',
          keywordDifficulty: 'Low (High Opportunity)',
          opportunityScore: 96
        },
        {
          id: `trend-ref-${Date.now()}-2`,
          topic: 'High-Retention Short Form Pattern Interrupts',
          volume: '1.8M searches/mo',
          growth: '+195% Velocity',
          category: 'Video Production',
          region: selectedRegion,
          whyTrending: 'Short form algorithm updates now heavily reward mid-video retention curves above 85%.',
          viralHashtags: ['#ReelsStrategy', '#ShortsTips', '#CreatorEconomy'],
          competitorInsight: 'Adding kinetic text overlays on seconds 4, 12, and 22 increases completion rates by 3.2x.',
          keywordDifficulty: 'Medium',
          opportunityScore: 92
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const filteredTrends = (trends || []).filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesRegion = selectedRegion === 'Global' || item.region.includes(selectedRegion) || item.region === 'Global';
    const matchesSearch = item.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.whyTrending.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesRegion && matchesSearch;
  });

  return (
    <div className="space-y-6 pb-12">
      {/* Module Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-[#FFB800] uppercase tracking-wider mb-1">
            <Flame className="h-4 w-4" />
            <span>MODULE 1 • REAL-TIME INTELLIGENCE</span>
          </div>
          <h1 className="text-2xl font-black text-white tracking-tight">AI Trend Hunter</h1>
          <p className="text-xs text-slate-400 mt-1">
            Discover breaking viral topics, search spikes, and competitor insights before saturation. AI explains <strong>WHY</strong> it's trending.
          </p>
        </div>

        <button
          onClick={handleRefreshTrends}
          disabled={loading}
          className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#5B4CFF] to-[#8B5CF6] px-4 py-2.5 text-xs font-bold text-white shadow-lg shadow-[#5B4CFF]/20 hover:opacity-90 active:scale-95 transition-all disabled:opacity-50"
        >
          <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
          <span>{loading ? 'Analyzing Social Signals...' : 'AI Live Refresh'}</span>
        </button>
      </div>

      {/* Filter Controls Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 rounded-2xl border border-slate-800 bg-[#111827] p-3">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search keywords or topics..."
            className="w-full rounded-xl border border-slate-800 bg-[#0B1020] pl-9 pr-4 py-2 text-xs text-slate-200 placeholder-slate-500 focus:border-[#5B4CFF] focus:outline-none"
          />
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-lg px-3 py-1.5 text-[11px] font-bold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-[#5B4CFF] text-white shadow-md'
                  : 'bg-slate-800/80 text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Region Selector */}
        <div className="flex items-center gap-1.5 shrink-0 border-l border-slate-800 pl-3">
          <Globe2 className="h-4 w-4 text-[#8B5CF6]" />
          <select
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
            className="rounded-lg border border-slate-800 bg-[#0B1020] px-2.5 py-1.5 text-xs font-bold text-slate-200 focus:outline-none"
          >
            {regions.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Trends Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredTrends.map((trend, index) => (
          <motion.div
            key={trend.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="group rounded-3xl border border-slate-800 bg-[#111827]/90 p-6 shadow-xl hover:border-[#5B4CFF]/50 transition-all relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#5B4CFF]/10 blur-2xl group-hover:bg-[#5B4CFF]/20 transition-all" />

            <div>
              {/* Card Header Info */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-[#5B4CFF]/20 border border-[#5B4CFF]/30 px-2.5 py-0.5 text-[10px] font-bold text-[#8B5CF6]">
                    {trend.category}
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium">📍 {trend.region}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-extrabold text-[#22C55E]">
                  <TrendingUp className="h-4 w-4" />
                  <span>{trend.growth}</span>
                </div>
              </div>

              {/* Topic Title & Opportunity Meter */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="text-lg font-extrabold text-white group-hover:text-[#8B5CF6] transition-colors leading-snug">
                  {trend.topic}
                </h3>
                <div className="shrink-0 text-right">
                  <div className="text-[10px] font-bold text-slate-400 uppercase">Opportunity</div>
                  <div className="text-sm font-black text-[#FFB800]">{trend.opportunityScore}/100</div>
                </div>
              </div>

              {/* Search Volume & Difficulty */}
              <div className="flex items-center gap-4 text-xs text-slate-400 mb-4 pb-3 border-b border-slate-800/80">
                <div className="flex items-center gap-1">
                  <Eye className="h-3.5 w-3.5 text-slate-500" />
                  <span>{trend.volume}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Zap className="h-3.5 w-3.5 text-[#FFB800]" />
                  <span>Difficulty: {trend.keywordDifficulty}</span>
                </div>
              </div>

              {/* AI Explanation of WHY it's trending */}
              <div className="rounded-2xl border border-slate-800/80 bg-[#0B1020] p-4 text-xs space-y-2 mb-4">
                <div className="flex items-center gap-1.5 text-[#FFB800] font-bold">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>WHY IT IS TRENDING (AI Insight)</span>
                </div>
                <p className="text-slate-300 leading-relaxed">{trend.whyTrending}</p>
                <div className="pt-2 border-t border-slate-800/60 text-[11px] text-slate-400">
                  <strong className="text-slate-200">Competitor Hook:</strong> {trend.competitorInsight}
                </div>
              </div>

              {/* Viral Hashtags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {(trend.viralHashtags || []).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg bg-slate-800/80 px-2 py-1 text-[10px] font-mono text-slate-300 hover:text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Button */}
            <button
              onClick={() => {
                onSendToStoryBuilder(trend.topic);
                setActiveTab('story_builder');
              }}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#5B4CFF] to-[#8B5CF6] py-2.5 text-xs font-bold text-white shadow-md hover:opacity-90 active:scale-98 transition-all"
            >
              <Sparkles className="h-4 w-4 text-[#FFB800]" />
              <span>Generate Viral Script with Story Builder AI</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
