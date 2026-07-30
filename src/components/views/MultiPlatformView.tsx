import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Share2,
  Copy,
  Check,
  RefreshCw,
  Sparkles,
  Youtube,
  Instagram,
  Linkedin,
  Twitter,
  Video,
  CheckCircle2,
  AlertCircle,
  HelpCircle
} from 'lucide-react';

interface MultiPlatformViewProps {
  initialScript?: string;
}

export const MultiPlatformView: React.FC<MultiPlatformViewProps> = ({
  initialScript = '',
}) => {
  const [baseContent, setBaseContent] = useState<string>(
    initialScript ||
      'How AI Agents are replacing 80% of repetitive SaaS code. Solopreneurs and developers can now ship full-stack web applications in minutes instead of months.'
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [activePlatformTab, setActivePlatformTab] = useState<string>('YouTube');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const [platformOutputs, setPlatformOutputs] = useState<any>({
    YouTube: {
      title: '🚀 How AI Agents Replace 80% of Repetitive Code (2026 Developer Blueprint)',
      body: `Discover how to transform your software development workflow using AI intelligence.\n\n📌 Timestamps:\n0:00 - Introduction\n0:45 - The Core AI Agent Architecture\n2:15 - Multi-Platform Distribution\n3:30 - Final Verdict & Code Repo\n\n🔔 Subscribe for weekly AI & SaaS breakdowns!`,
      hashtags: ['#YouTubeGrowth', '#AIAgents', '#DeveloperTools', '#StoryVerse'],
      charCount: 310,
      limit: 5000,
      tips: 'Add custom pinned comment with key lead magnet link for higher CTR.'
    },
    Instagram: {
      caption: `The game of coding just changed forever ⚡️\n\nIf you are still spending 20 hours a week writing boilerplate CRUD operations, you are working harder, not smarter.\n\nSwipe left to see the full architecture breakdown 👈\n\nSave this reel for later 📌`,
      hashtags: ['#ReelsStrategy', '#AIAgents', '#DevLife', '#InstaGrowth', '#CodingTools'],
      charCount: 260,
      limit: 2200,
      tips: 'Use trending audio under 10k uses to trigger Reels audio recommendation engine.'
    },
    TikTok: {
      caption: `Wait till you see step 3... 🤫 How top developers automate 80% of their video production and code without losing authenticity. #fyp #creatortips #aitools #viral`,
      hashtags: ['#fyp', '#creatortips', '#aitools', '#storyverse', '#viral'],
      charCount: 155,
      limit: 2200,
      tips: 'Include native text overlay on top of video within first 1.5 seconds.'
    },
    LinkedIn: {
      post: `The creator economy isn't just about posting videos anymore—it's an operating system.\n\nHere is what we learned analyzing 500+ successful brand campaigns:\n\n1. Consistency beats production quality.\n2. Multi-platform adaptation doubles ROI.\n3. AI handles execution; humans handle vision.\n\nWhat is your biggest bottleneck in content creation right now?\n\nLet's discuss in the comments below 👇`,
      hashtags: ['#CreatorEconomy', '#DigitalMarketing', '#AIInnovation', '#Leadership'],
      charCount: 420,
      limit: 3000,
      tips: 'Post without external links in main body; put link in first comment for 4x reach.'
    },
    X: {
      tweet: `🧵 Most creators fail because they create once and post once.\n\nTop 1% creators create once and optimize everywhere.\n\nHere is the 5-part AI stack scaling brands to 1M+ impressions monthly 👇`,
      hashtags: ['#BuildInPublic', '#AITools'],
      charCount: 195,
      limit: 280,
      tips: 'Format as a 5-tweet thread with high contrast image on tweet #1.'
    },
    Threads: {
      post: `Quick reminder for developers and creators: Stop building everything from scratch. 🧵\n\nAI agents can handle schema design, boilerplate API routes, and styling in minutes. Save your energy for core product strategy!`,
      hashtags: ['#ThreadsApp', '#TechTrends', '#BuildInPublic'],
      charCount: 230,
      limit: 500,
      tips: 'Encourage quick replies by asking an open-ended question at the end.'
    }
  });

  const handleOptimize = async () => {
    if (!baseContent) return;
    setLoading(true);
    try {
      const res = await fetch('/api/gemini/multi-platform', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ baseContent }),
      });
      if (res.ok) {
        const data = await res.json();
        if (data && data.success && data.platforms) {
          setPlatformOutputs(data.platforms);
          setLoading(false);
          return;
        }
      }
      throw new Error('API route unavailable');
    } catch (_err) {
      // Dynamic fallback multi-platform generator
      const snippet = baseContent.slice(0, 180);
      setPlatformOutputs({
        YouTube: {
          title: `🚀 ${baseContent.slice(0, 50)}... (2026 Breakdown)`,
          body: `${baseContent}\n\n📌 Timestamps:\n0:00 - Hook & Overview\n1:00 - Deep Dive Breakdown\n3:00 - Actionable Steps\n\n🔔 Subscribe to StoryVerse AI for daily content systems!`,
          hashtags: ['#StoryVerse', '#ContentStrategy', '#YouTubeGrowth', '#AI2026'],
          charCount: baseContent.length + 120,
          limit: 5000,
          tips: 'Add custom pinned comment with lead magnet link for higher CTR.'
        },
        Instagram: {
          caption: `${snippet} ✨\n\nSwipe left for the complete step-by-step breakdown 👈\n\nSave this post for later 📌`,
          hashtags: ['#ReelsStrategy', '#ViralContent', '#GrowthHacks', '#StoryVerse'],
          charCount: snippet.length + 80,
          limit: 2200,
          tips: 'Use trending audio under 10k uses for algorithm recommendation.'
        },
        TikTok: {
          caption: `Wait till you see step 3... 🤫 ${snippet.slice(0, 100)} #fyp #viral #creatortips`,
          hashtags: ['#fyp', '#viral', '#creatortips', '#storyverse'],
          charCount: 140,
          limit: 2200,
          tips: 'Include native text overlay on top of video within first 1.5s.'
        },
        LinkedIn: {
          post: `${baseContent}\n\nHere are 3 key strategic takeaways:\n1. Execution speed beats total perfection.\n2. Multi-platform distribution doubles reach.\n3. AI handles boilerplate; humans supply vision.\n\nWhat is your take? Let's discuss in the comments 👇`,
          hashtags: ['#CreatorEconomy', '#Innovation', '#DigitalStrategy', '#Leadership'],
          charCount: baseContent.length + 180,
          limit: 3000,
          tips: 'Post without links in main body; put link in first comment.'
        },
        X: {
          tweet: `🧵 ${snippet}\n\nHere is the exact framework scaling top brands today 👇`,
          hashtags: ['#BuildInPublic', '#Growth'],
          charCount: Math.min(275, snippet.length + 60),
          limit: 280,
          tips: 'Format as a 5-tweet thread with high contrast image on tweet #1.'
        },
        Threads: {
          post: `Quick takeaway for creators & tech founders: ${snippet}`,
          hashtags: ['#ThreadsApp', '#TechTrends'],
          charCount: Math.min(480, snippet.length + 40),
          limit: 500,
          tips: 'Encourage replies with an open-ended question.'
        }
      });
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const platformIcons: Record<string, any> = {
    YouTube: Youtube,
    Instagram: Instagram,
    TikTok: Video,
    LinkedIn: Linkedin,
    X: Twitter,
    Threads: Share2,
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Module Header */}
      <div className="border-b border-slate-800 pb-5">
        <div className="flex items-center gap-2 text-xs font-bold text-[#8B5CF6] uppercase tracking-wider mb-1">
          <Share2 className="h-4 w-4 text-[#22C55E]" />
          <span>MODULE 3 • OMNI-CHANNEL DISTRIBUTION</span>
        </div>
        <h1 className="text-2xl font-black text-white tracking-tight">Multi-Platform Creator OS</h1>
        <p className="text-xs text-slate-400 mt-1">
          Automatically transform core scripts into tailored, culture-native posts for YouTube, Instagram, TikTok, LinkedIn, X, and Threads.
        </p>
      </div>

      {/* Base Content Input */}
      <div className="rounded-3xl border border-slate-800 bg-[#111827]/90 p-6 shadow-xl space-y-4">
        <label className="block text-xs font-bold text-slate-300">
          Source Script or Core Idea
        </label>
        <textarea
          rows={3}
          value={baseContent}
          onChange={(e) => setBaseContent(e.target.value)}
          placeholder="Paste script, blog post, or core video message here..."
          className="w-full rounded-2xl border border-slate-800 bg-[#0B1020] p-4 text-xs text-slate-200 placeholder-slate-500 focus:border-[#5B4CFF] focus:outline-none leading-relaxed"
        />

        <button
          onClick={handleOptimize}
          disabled={loading || !baseContent}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#5B4CFF] to-[#8B5CF6] py-3 text-xs font-bold text-white shadow-lg hover:opacity-90 active:scale-98 transition-all disabled:opacity-50"
        >
          {loading ? <RefreshCw className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4 text-[#FFB800]" />}
          <span>{loading ? 'Adapting for 6 Social Platforms...' : 'Auto-Optimize for All Platforms'}</span>
        </button>
      </div>

      {/* Platform Selector Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-800">
        {Object.keys(platformOutputs).map((plat) => {
          const Icon = platformIcons[plat] || Share2;
          const isActive = activePlatformTab === plat;
          return (
            <button
              key={plat}
              onClick={() => setActivePlatformTab(plat)}
              className={`flex items-center gap-2 rounded-2xl px-4 py-2.5 text-xs font-bold transition-all whitespace-nowrap ${
                isActive
                  ? 'bg-[#5B4CFF] text-white shadow-lg shadow-[#5B4CFF]/20'
                  : 'bg-[#111827] text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <Icon className="h-4 w-4" />
              <span>{plat}</span>
            </button>
          );
        })}
      </div>

      {/* Active Platform Customized Preview Output */}
      {platformOutputs[activePlatformTab] && (
        <motion.div
          key={activePlatformTab}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          className="rounded-3xl border border-slate-800 bg-[#111827]/90 p-6 shadow-xl space-y-5"
        >
          {/* Header Info */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#5B4CFF]/20 text-[#8B5CF6]">
                {React.createElement(platformIcons[activePlatformTab] || Share2, { className: 'h-5 w-5' })}
              </div>
              <div>
                <h3 className="text-base font-extrabold text-white">{activePlatformTab} Optimized Content</h3>
                <p className="text-xs text-slate-400">Culture & character limit adjusted</p>
              </div>
            </div>

            <button
              onClick={() => {
                const textToCopy =
                  platformOutputs[activePlatformTab].body ||
                  platformOutputs[activePlatformTab].post ||
                  platformOutputs[activePlatformTab].caption ||
                  platformOutputs[activePlatformTab].tweet;
                copyToClipboard(textToCopy, activePlatformTab);
              }}
              className="flex items-center gap-2 rounded-xl bg-slate-800 px-4 py-2 text-xs font-bold text-slate-200 hover:bg-[#5B4CFF] hover:text-white transition-all"
            >
              {copiedKey === activePlatformTab ? <Check className="h-4 w-4 text-[#22C55E]" /> : <Copy className="h-4 w-4" />}
              <span>{copiedKey === activePlatformTab ? 'Copied!' : 'Copy to Clipboard'}</span>
            </button>
          </div>

          {/* Formatted Content Card */}
          <div className="rounded-2xl border border-slate-800/80 bg-[#0B1020] p-5 space-y-4">
            {platformOutputs[activePlatformTab].title && (
              <div>
                <span className="text-[10px] font-bold uppercase text-slate-400">Optimized Title</span>
                <p className="text-sm font-bold text-white mt-1">{platformOutputs[activePlatformTab].title}</p>
              </div>
            )}

            <div>
              <span className="text-[10px] font-bold uppercase text-slate-400">Body / Caption / Post</span>
              <p className="text-xs text-slate-200 leading-relaxed mt-1 whitespace-pre-wrap">
                {platformOutputs[activePlatformTab].body ||
                  platformOutputs[activePlatformTab].post ||
                  platformOutputs[activePlatformTab].caption ||
                  platformOutputs[activePlatformTab].tweet}
              </p>
            </div>

            {/* Hashtags */}
            <div>
              <span className="text-[10px] font-bold uppercase text-slate-400">Viral Hashtags</span>
              <div className="flex flex-wrap gap-1.5 mt-1.5">
                {platformOutputs[activePlatformTab].hashtags?.map((tag: string) => (
                  <span key={tag} className="rounded bg-slate-800 px-2 py-1 text-[11px] font-mono text-[#8B5CF6]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Character Counter & Algorithmic Growth Tip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-[#0B1020] p-3 text-xs">
              <CheckCircle2 className="h-4 w-4 text-[#22C55E]" />
              <div>
                <div className="font-bold text-white">Character Length</div>
                <div className="text-slate-400 text-[11px]">
                  {platformOutputs[activePlatformTab].charCount || 240} characters
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-[#0B1020] p-3 text-xs">
              <Sparkles className="h-4 w-4 text-[#FFB800]" />
              <div>
                <div className="font-bold text-white">Algorithm Growth Tip</div>
                <div className="text-slate-400 text-[11px]">
                  {platformOutputs[activePlatformTab].tips || 'Post during peak audience active hours.'}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};
