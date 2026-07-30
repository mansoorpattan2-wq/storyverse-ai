import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Image as ImageIcon,
  Sparkles,
  TrendingUp,
  Palette,
  Layout,
  Type,
  Smile,
  CheckCircle2,
  Sliders,
  RefreshCw,
  Eye,
  Wand2,
  ArrowRightLeft
} from 'lucide-react';

export const ThumbnailStudioView: React.FC = () => {
  const [headlineText, setHeadlineText] = useState<string>('10X YOUR VIEWS');
  const [accentColor, setAccentColor] = useState<string>('#FFB800');
  const [bgStyle, setBgStyle] = useState<string>('Dark Cyber Grid');
  const [showFace, setShowFace] = useState<boolean>(true);
  const [showArrow, setShowArrow] = useState<boolean>(true);

  // A/B Test States
  const [ctrScoreA, setCtrScoreA] = useState<number>(11.8);
  const [ctrScoreB, setCtrScoreB] = useState<number>(8.2);

  const colors = ['#FFB800', '#5B4CFF', '#22C55E', '#EF4444', '#EC4899', '#06B6D4'];

  return (
    <div className="space-y-6 pb-12">
      {/* Module Header */}
      <div className="border-b border-slate-800 pb-5">
        <div className="flex items-center gap-2 text-xs font-bold text-[#FFB800] uppercase tracking-wider mb-1">
          <ImageIcon className="h-4 w-4" />
          <span>MODULE 4 • HIGH CTR VISUAL ENGINE</span>
        </div>
        <h1 className="text-2xl font-black text-white tracking-tight">AI Thumbnail Studio</h1>
        <p className="text-xs text-slate-400 mt-1">
          Design high-converting thumbnails with AI layout suggestions, color contrast analysis, face expression mapping, and instant CTR prediction.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Controls Column */}
        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-800 bg-[#111827]/90 p-6 shadow-xl space-y-4">
            <h3 className="text-sm font-bold text-white border-b border-slate-800 pb-3">Thumbnail Design Controls</h3>

            {/* Overlay Text */}
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">High-Contrast Text Overlay (Max 3-4 Words)</label>
              <input
                type="text"
                value={headlineText}
                onChange={(e) => setHeadlineText(e.target.value)}
                className="w-full rounded-xl border border-slate-800 bg-[#0B1020] px-3.5 py-2 text-xs text-white font-black uppercase focus:border-[#5B4CFF] focus:outline-none"
              />
            </div>

            {/* Accent Color Picker */}
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">Accent Focus Color</label>
              <div className="flex items-center gap-2">
                {colors.map((c) => (
                  <button
                    key={c}
                    onClick={() => setAccentColor(c)}
                    className={`h-8 w-8 rounded-xl transition-all ${
                      accentColor === c ? 'ring-2 ring-white scale-110' : 'opacity-70 hover:opacity-100'
                    }`}
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>
            </div>

            {/* Background Atmosphere */}
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">Background Style</label>
              <select
                value={bgStyle}
                onChange={(e) => setBgStyle(e.target.value)}
                className="w-full rounded-xl border border-slate-800 bg-[#0B1020] px-3 py-2 text-xs font-bold text-slate-200 focus:outline-none"
              >
                <option value="Dark Cyber Grid">🌌 Dark Cyber Grid (#0B1020)</option>
                <option value="High Contrast Split">⚡ High Contrast Split (Yellow/Black)</option>
                <option value="Neon Glow Studio">💡 Neon Glow Studio</option>
              </select>
            </div>

            {/* Toggles */}
            <div className="space-y-2 pt-2 border-t border-slate-800">
              <label className="flex items-center justify-between text-xs text-slate-300 font-semibold cursor-pointer">
                <span>Shocked / Expressive Face Avatar</span>
                <input
                  type="checkbox"
                  checked={showFace}
                  onChange={(e) => setShowFace(e.target.checked)}
                  className="rounded accent-[#5B4CFF]"
                />
              </label>

              <label className="flex items-center justify-between text-xs text-slate-300 font-semibold cursor-pointer">
                <span>Attention Grabber Red/Yellow Arrow</span>
                <input
                  type="checkbox"
                  checked={showArrow}
                  onChange={(e) => setShowArrow(e.target.checked)}
                  className="rounded accent-[#5B4CFF]"
                />
              </label>
            </div>
          </div>

          {/* AI Color & Face Guidelines */}
          <div className="rounded-3xl border border-slate-800 bg-[#111827]/90 p-6 shadow-xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-white border-b border-slate-800 pb-2">
              <Sparkles className="h-4 w-4 text-[#FFB800]" />
              <span>AI CTR Optimization Rules</span>
            </div>
            <div className="space-y-2 text-xs text-slate-300">
              <p className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#22C55E] shrink-0 mt-0.5" />
                <span>Text takes up 35% of thumbnail space (optimal legibility on mobile devices).</span>
              </p>
              <p className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#22C55E] shrink-0 mt-0.5" />
                <span>High emotion face on left increases click willingness by +24%.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Center & Right Preview Canvas Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Main Visual Canvas Mockup */}
          <div className="rounded-3xl border border-slate-800 bg-[#111827]/90 p-6 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <Eye className="h-4 w-4 text-[#8B5CF6]" />
                <h3 className="text-sm font-bold text-white">Live Visual Mockup Preview</h3>
              </div>
              <div className="flex items-center gap-1.5 rounded-full bg-[#22C55E]/15 px-3 py-1 text-xs font-bold text-[#22C55E] border border-[#22C55E]/30">
                <TrendingUp className="h-3.5 w-3.5" />
                <span>Predicted CTR: {ctrScoreA}% (High)</span>
              </div>
            </div>

            {/* Canvas Box (16:9 ratio) */}
            <div className="relative aspect-video w-full rounded-2xl border border-slate-700 bg-[#0B1020] overflow-hidden flex items-center justify-between p-6 shadow-2xl">
              {/* Background Ambient Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#111827] via-[#0B1020] to-[#1E1B4B] opacity-90" />
              <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[#5B4CFF]/25 blur-3xl" />

              {/* Text Overlay Left */}
              <div className="relative z-10 max-w-sm">
                <div
                  className="text-3xl sm:text-4xl font-black italic tracking-tighter uppercase leading-none drop-shadow-2xl"
                  style={{ color: accentColor }}
                >
                  {headlineText || '10X YOUR VIEWS'}
                </div>
                <div className="mt-2 text-xs font-bold text-white bg-black/60 px-3 py-1 rounded-md inline-block border border-white/20">
                  SECRET WORKFLOW REVEALED
                </div>
              </div>

              {/* Face & Arrow Right */}
              <div className="relative z-10 flex items-center gap-4">
                {showArrow && (
                  <div className="text-4xl font-black text-[#FFB800] animate-bounce">
                    ➔
                  </div>
                )}
                {showFace && (
                  <div className="relative h-32 w-32 rounded-2xl overflow-hidden ring-4 ring-[#5B4CFF] shadow-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80"
                      alt="Avatar"
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Thumbnail A/B Testing Simulator */}
          <div className="rounded-3xl border border-slate-800 bg-[#111827]/90 p-6 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <ArrowRightLeft className="h-4 w-4 text-[#FFB800]" />
                <h3 className="text-sm font-bold text-white">Thumbnail A/B Test Predictor</h3>
              </div>
              <span className="text-xs text-slate-400 font-semibold">Simulated YouTube Impressions: 50,000</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Option A */}
              <div className="rounded-2xl border border-[#22C55E]/40 bg-[#0B1020] p-4 space-y-2 relative">
                <span className="absolute top-3 right-3 rounded-full bg-[#22C55E] text-black text-[9px] font-black px-2 py-0.5">
                  WINNER
                </span>
                <div className="text-xs font-bold text-white">Variant A (High Emotion + Contrast Text)</div>
                <div className="text-2xl font-black text-[#22C55E]">{ctrScoreA}% Projected CTR</div>
                <p className="text-[11px] text-slate-400">
                  Estimated Views: <strong>142,000</strong> from 1M Impressions
                </p>
              </div>

              {/* Option B */}
              <div className="rounded-2xl border border-slate-800 bg-[#0B1020] p-4 space-y-2">
                <div className="text-xs font-bold text-slate-300">Variant B (Standard Text Only)</div>
                <div className="text-2xl font-black text-slate-400">{ctrScoreB}% Projected CTR</div>
                <p className="text-[11px] text-slate-400">
                  Estimated Views: <strong>84,000</strong> from 1M Impressions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
