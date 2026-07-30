import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  BarChart3,
  TrendingUp,
  Clock,
  Sparkles,
  Zap,
  Eye,
  ThumbsUp,
  MessageSquare,
  Share2,
  CheckCircle2,
  Sliders,
  Award
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

export const EngagementPredictorView: React.FC = () => {
  const [postingTime, setPostingTime] = useState<number>(18); // 18:00 (6 PM)
  const [hookStrength, setHookStrength] = useState<number>(90);
  const [thumbnailCTR, setThumbnailCTR] = useState<number>(11);
  const [videoLength, setVideoLength] = useState<number>(55); // seconds

  // Dynamic calculations based on sliders
  const multiplier = (postingTime === 18 || postingTime === 19 ? 1.3 : 0.9) * (hookStrength / 80) * (thumbnailCTR / 8);
  const projectedViews = Math.round(180000 * multiplier);
  const projectedWatchTime = Math.round((videoLength * 0.78 * projectedViews) / 60); // minutes
  const projectedReach = Math.round(projectedViews * 1.85);
  const projectedLikes = Math.round(projectedViews * 0.082);
  const projectedComments = Math.round(projectedViews * 0.014);
  const projectedShares = Math.round(projectedViews * 0.021);
  const confidenceScore = Math.min(99, Math.round(88 + (hookStrength > 85 ? 8 : 0)));

  const HOURLY_ENGAGEMENT = [
    { hour: '06:00', multiplier: 30 },
    { hour: '09:00', multiplier: 55 },
    { hour: '12:00', multiplier: 75 },
    { hour: '15:00', multiplier: 85 },
    { hour: '18:00 (Best)', multiplier: 100 },
    { hour: '21:00', multiplier: 90 },
    { hour: '24:00', multiplier: 40 },
  ];

  const RETENTION_CURVE = [
    { sec: '0s', retention: 100 },
    { sec: '3s (Hook)', retention: Math.round(hookStrength) },
    { sec: '15s', retention: Math.round(hookStrength * 0.88) },
    { sec: '30s', retention: Math.round(hookStrength * 0.78) },
    { sec: '45s', retention: Math.round(hookStrength * 0.72) },
    { sec: '60s (CTA)', retention: Math.round(hookStrength * 0.65) },
  ];

  return (
    <div className="space-y-6 pb-12">
      {/* Module Header */}
      <div className="border-b border-slate-800 pb-5">
        <div className="flex items-center gap-2 text-xs font-bold text-[#22C55E] uppercase tracking-wider mb-1">
          <BarChart3 className="h-4 w-4" />
          <span>MODULE 6 • ALGORITHMIC SIMULATOR</span>
        </div>
        <h1 className="text-2xl font-black text-white tracking-tight">AI Engagement Predictor</h1>
        <p className="text-xs text-slate-400 mt-1">
          Simulate video performance before publishing. Tweak posting times, hook power, and thumbnails to maximize algorithmic reach.
        </p>
      </div>

      {/* Interactive Controls & Score Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sliders Input Panel */}
        <div className="rounded-3xl border border-slate-800 bg-[#111827]/90 p-6 shadow-xl space-y-5">
          <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
            <Sliders className="h-4 w-4 text-[#8B5CF6]" />
            <h3 className="text-sm font-bold text-white">Simulation Variables</h3>
          </div>

          {/* Posting Time Slider */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-bold">
              <span className="text-slate-300">Target Posting Hour</span>
              <span className="text-[#FFB800]">{postingTime}:00 {postingTime === 18 ? '(Peak Slot 🔥)' : ''}</span>
            </div>
            <input
              type="range"
              min={6}
              max={24}
              step={1}
              value={postingTime}
              onChange={(e) => setPostingTime(Number(e.target.value))}
              className="w-full accent-[#5B4CFF] cursor-pointer"
            />
            <div className="text-[10px] text-slate-400">Peak algorithmic window: 18:00 - 20:00</div>
          </div>

          {/* Hook Strength Slider */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-bold">
              <span className="text-slate-300">First 3s Hook Power</span>
              <span className="text-[#22C55E]">{hookStrength}%</span>
            </div>
            <input
              type="range"
              min={50}
              max={100}
              step={1}
              value={hookStrength}
              onChange={(e) => setHookStrength(Number(e.target.value))}
              className="w-full accent-[#22C55E] cursor-pointer"
            />
            <div className="text-[10px] text-slate-400">Visual motion + curiosity gap score</div>
          </div>

          {/* Thumbnail CTR Slider */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-bold">
              <span className="text-slate-300">Thumbnail Projected CTR</span>
              <span className="text-[#8B5CF6]">{thumbnailCTR}%</span>
            </div>
            <input
              type="range"
              min={4}
              max={18}
              step={0.5}
              value={thumbnailCTR}
              onChange={(e) => setThumbnailCTR(Number(e.target.value))}
              className="w-full accent-[#8B5CF6] cursor-pointer"
            />
          </div>

          {/* Video Duration Slider */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-bold">
              <span className="text-slate-300">Video Length</span>
              <span className="text-slate-200">{videoLength} Seconds</span>
            </div>
            <input
              type="range"
              min={15}
              max={120}
              step={5}
              value={videoLength}
              onChange={(e) => setVideoLength(Number(e.target.value))}
              className="w-full accent-[#5B4CFF] cursor-pointer"
            />
          </div>
        </div>

        {/* Projected Metrics Outcome Cards */}
        <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-slate-800 bg-[#111827]/90 p-4 space-y-1 shadow-lg">
            <div className="flex items-center gap-1.5 text-xs text-slate-400">
              <Eye className="h-4 w-4 text-[#5B4CFF]" />
              <span>Projected Views</span>
            </div>
            <div className="text-2xl font-black text-white">{projectedViews.toLocaleString()}</div>
            <div className="text-[10px] text-[#22C55E] font-bold">+38% vs your avg</div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-[#111827]/90 p-4 space-y-1 shadow-lg">
            <div className="flex items-center gap-1.5 text-xs text-slate-400">
              <Clock className="h-4 w-4 text-[#FFB800]" />
              <span>Total Watch Time</span>
            </div>
            <div className="text-2xl font-black text-white">{projectedWatchTime.toLocaleString()} hrs</div>
            <div className="text-[10px] text-slate-400">78% Avg Completion</div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-[#111827]/90 p-4 space-y-1 shadow-lg">
            <div className="flex items-center gap-1.5 text-xs text-slate-400">
              <TrendingUp className="h-4 w-4 text-[#22C55E]" />
              <span>Total Reach</span>
            </div>
            <div className="text-2xl font-black text-white">{projectedReach.toLocaleString()}</div>
            <div className="text-[10px] text-slate-400">Unique Viewers</div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-[#111827]/90 p-4 space-y-1 shadow-lg">
            <div className="flex items-center gap-1.5 text-xs text-slate-400">
              <ThumbsUp className="h-4 w-4 text-blue-400" />
              <span>Estimated Likes</span>
            </div>
            <div className="text-2xl font-black text-white">{projectedLikes.toLocaleString()}</div>
            <div className="text-[10px] text-slate-400">8.2% Conversion</div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-[#111827]/90 p-4 space-y-1 shadow-lg">
            <div className="flex items-center gap-1.5 text-xs text-slate-400">
              <MessageSquare className="h-4 w-4 text-purple-400" />
              <span>Comments</span>
            </div>
            <div className="text-2xl font-black text-white">{projectedComments.toLocaleString()}</div>
            <div className="text-[10px] text-slate-400">High engagement</div>
          </div>

          <div className="rounded-2xl border border-[#5B4CFF]/40 bg-[#111827]/90 p-4 space-y-1 shadow-lg">
            <div className="flex items-center gap-1.5 text-xs text-slate-400">
              <Award className="h-4 w-4 text-[#FFB800]" />
              <span>AI Confidence</span>
            </div>
            <div className="text-2xl font-black text-[#FFB800]">{confidenceScore}%</div>
            <div className="text-[10px] text-[#22C55E] font-bold">Verified Algorithm</div>
          </div>
        </div>
      </div>

      {/* Visual Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Retention Curve Graph */}
        <div className="rounded-3xl border border-slate-800 bg-[#111827]/90 p-6 shadow-xl space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold text-white">Simulated Retention Curve</h3>
              <p className="text-xs text-slate-400">Viewer drop-off prediction across video duration</p>
            </div>
            <span className="text-xs font-bold text-[#22C55E]">65% Retention at CTA</span>
          </div>

          <div className="h-56 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={RETENTION_CURVE}>
                <defs>
                  <linearGradient id="retGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#22C55E" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#22C55E" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="sec" stroke="#64748B" fontSize={11} />
                <YAxis stroke="#64748B" fontSize={11} domain={[0, 100]} />
                <Tooltip contentStyle={{ backgroundColor: '#0B1020', borderColor: '#334155', color: '#FFF' }} />
                <Area type="monotone" dataKey="retention" stroke="#22C55E" strokeWidth={3} fill="url(#retGrad)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Best Posting Time Distribution */}
        <div className="rounded-3xl border border-slate-800 bg-[#111827]/90 p-6 shadow-xl space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold text-white">Best Posting Time Windows</h3>
              <p className="text-xs text-slate-400">Audience online activity density (24h clock)</p>
            </div>
            <span className="text-xs font-bold text-[#FFB800]">Optimal: 18:00 GMT</span>
          </div>

          <div className="h-56 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={HOURLY_ENGAGEMENT}>
                <XAxis dataKey="hour" stroke="#64748B" fontSize={10} />
                <YAxis stroke="#64748B" fontSize={10} />
                <Tooltip contentStyle={{ backgroundColor: '#0B1020', borderColor: '#334155', color: '#FFF' }} />
                <Bar dataKey="multiplier" fill="#5B4CFF" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};
