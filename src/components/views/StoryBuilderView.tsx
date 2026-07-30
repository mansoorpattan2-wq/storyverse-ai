import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  FileText,
  Copy,
  Check,
  Send,
  Video,
  Share2,
  Volume2,
  Image as ImageIcon,
  Clock,
  Layers,
  Wand2,
  RefreshCw,
  Lightbulb
} from 'lucide-react';
import { NavigationTab } from '../../types';

interface StoryBuilderViewProps {
  initialTopic?: string;
  setActiveTab: (tab: NavigationTab) => void;
  onSendToMultiPlatform: (scriptText: string) => void;
}

export const StoryBuilderView: React.FC<StoryBuilderViewProps> = ({
  initialTopic = '',
  setActiveTab,
  onSendToMultiPlatform,
}) => {
  const [topic, setTopic] = useState<string>(initialTopic || 'AI Agents in Vertical SaaS');
  const [targetAudience, setTargetAudience] = useState<string>('Developers, Tech Founders & Marketers');
  const [tone, setTone] = useState<string>('High Energy & Insightful');
  const [format, setFormat] = useState<string>('Short-form Video (60s)');
  const [platform, setPlatform] = useState<string>('YouTube Shorts & Instagram Reels');
  const [loading, setLoading] = useState<boolean>(false);
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  // Generated State
  const [generatedResult, setGeneratedResult] = useState<any>({
    hooks: [
      `Stop scrolling if you want to double your code velocity without hiring more engineers.`,
      `99% of developers get this wrong about AI agents. Here is the 2026 architecture framework...`,
      `I tested 5 autonomous coding agents for 30 days, and the results shocked even Senior Google Tech Leads.`
    ],
    script: `[0:00 - 0:05] HOOK: "Stop scrolling if you want to automate 80% of your SaaS codebase!"\n\n[0:05 - 0:20] PROBLEM: "Most developers waste 15+ hours a week fighting boilerplate configuration and stubs."\n\n[0:20 - 0:45] SOLUTION & STEPS:\n1. Wire your schema directly into an AI agentic pipeline.\n2. Use multi-modal groundings for real-time error catching.\n3. Deploy cleanly in under 2 minutes.\n\n[0:45 - 1:00] CTA: "Comment AGENT below and I will send you my full open-source repo!"`,
    storyboard: [
      { scene: 1, time: '0:00-0:05', visual: 'Fast cut close-up pointing to dynamic screen chart showing 250% velocity spike.', audio: 'Energetic hook voiceover with bass drop impact.' },
      { scene: 2, time: '0:05-0:20', visual: 'Screen recording showing manual messy folder clutter transition to clean AI dashboard.', audio: 'Relatable problem narrative in confident tone.' },
      { scene: 3, time: '0:20-0:45', visual: '3-part split step animation featuring high contrast typography highlights.', audio: 'Upbeat step-by-step breakdown.' },
      { scene: 4, time: '0:45-1:00', visual: 'Creator holding phone with animated Follow button pulse.', audio: 'Strong CTA with background music fade.' }
    ],
    cta: `Comment "AGENT" and I'll send you the exact open-source starter kit for free!`,
    thumbnailIdeas: [
      { textOverlay: '10X CODE SPEED', composition: 'Shocked developer face with high contrast yellow arrow pointing to exponential chart', primaryColor: '#FFB800' },
      { textOverlay: 'NO MORE BUGS', composition: 'Split screen: Bugged dark IDE vs ultra clean automated terminal output', primaryColor: '#5B4CFF' }
    ],
    title: `How AI Agents Will Replace 80% of Repetitive SaaS Code (2026 Blueprint)`,
    description: `In this complete breakdown, we reveal how top software engineers and creators use autonomous AI agent workflows to ship 10x faster.`,
    hashtags: ['#StoryVerseAI', '#AIAgents', '#SaaS', '#Coding', '#DeveloperTools'],
    voiceOverScript: `Stop scrolling if you want to automate 80% of your repetitive code. Here are three game-changing steps you can start applying today...`
  });

  const handleGenerateScript = async () => {
    if (!topic) return;
    setLoading(true);
    try {
      const res = await fetch('/api/gemini/story-builder', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic, targetAudience, tone, format, platform }),
      });
      if (res.ok) {
        const data = await res.json();
        if (data && (data.success || data.script)) {
          setGeneratedResult(data);
          setLoading(false);
          return;
        }
      }
      throw new Error('API route unavailable');
    } catch (_err) {
      // Dynamic fallback generator
      const cleanTopic = topic.trim();
      const generated = {
        hooks: [
          `Stop scrolling if you want to master ${cleanTopic}!`,
          `99% of creators get this wrong about ${cleanTopic}. Here is the 2026 framework...`,
          `I tested ${cleanTopic} for 30 days, and the retention velocity shocked our whole team.`
        ],
        script: `[0:00 - 0:05] HOOK: "Stop scrolling if you want to master ${cleanTopic}!"\n\n[0:05 - 0:20] PROBLEM: "Most people in ${targetAudience} struggle with consistency and execution speed."\n\n[0:20 - 0:45] SOLUTION (${tone}):\n1. First, establish a clear framework tailored for ${platform}.\n2. Second, leverage modern AI workflows to accelerate delivery.\n3. Third, optimize for retention and repeat engagement.\n\n[0:45 - 1:00] CTA: "Save this video and comment '${cleanTopic.slice(0, 8).toUpperCase().replace(/[^A-Z]/g, 'GO')}' below for the full guide!"`,
        storyboard: [
          { scene: 1, time: '0:00-0:05', visual: `High energy visual hook focused on ${cleanTopic}`, audio: 'Upbeat voiceover with impact bass drop' },
          { scene: 2, time: '0:05-0:20', visual: 'Screen recording demonstrating common industry pitfalls', audio: 'Relatable problem narrative in confident tone' },
          { scene: 3, time: '0:20-0:45', visual: '3-part step visual with high contrast typography', audio: 'Step-by-step breakdown' },
          { scene: 4, time: '0:45-1:00', visual: 'On-screen call-to-action button pulse', audio: 'Strong CTA with background music fade' }
        ],
        cta: `Comment below to get the free starter kit for ${cleanTopic}!`,
        thumbnailIdeas: [
          { textOverlay: cleanTopic.toUpperCase().slice(0, 16) || '2026 MASTERCLASS', composition: 'Expressive creator face with high contrast yellow arrow', primaryColor: '#FFB800' },
          { textOverlay: '10X VELOCITY', composition: 'Split screen comparison with glowing neon highlights', primaryColor: '#5B4CFF' }
        ],
        title: `${cleanTopic}: The 2026 Masterclass (${format})`,
        description: `Everything you need to know about ${cleanTopic} tailored for ${targetAudience}.`,
        hashtags: [`#${cleanTopic.replace(/\s+/g, '')}`, '#StoryVerseAI', '#ViralContent', '#Growth2026'],
        voiceOverScript: `Stop scrolling if you want to master ${cleanTopic}. Here are three essential steps for ${targetAudience}...`
      };
      setGeneratedResult(generated);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string, sectionName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(sectionName);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="border-b border-slate-800 pb-5">
        <div className="flex items-center gap-2 text-xs font-bold text-[#8B5CF6] uppercase tracking-wider mb-1">
          <Sparkles className="h-4 w-4 text-[#FFB800]" />
          <span>MODULE 2 • CREATIVE SCRIPT GENERATOR</span>
        </div>
        <h1 className="text-2xl font-black text-white tracking-tight">Story Builder AI</h1>
        <p className="text-xs text-slate-400 mt-1">
          Turn any idea or viral trend into high-retention Hooks, Scripts, Storyboards, CTAs, and Thumbnail Concepts.
        </p>
      </div>

      {/* Input Controls Form */}
      <div className="rounded-3xl border border-slate-800 bg-[#111827]/90 p-6 shadow-xl space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1.5">Topic or Concept</label>
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="e.g. How AI Agents will change web development"
              className="w-full rounded-xl border border-slate-800 bg-[#0B1020] px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-[#5B4CFF] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1.5">Target Audience</label>
            <input
              type="text"
              value={targetAudience}
              onChange={(e) => setTargetAudience(e.target.value)}
              placeholder="e.g. Solopreneurs, Creators, Tech Founders"
              className="w-full rounded-xl border border-slate-800 bg-[#0B1020] px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-[#5B4CFF] focus:outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1.5">Tone & Style</label>
            <select
              value={tone}
              onChange={(e) => setTone(e.target.value)}
              className="w-full rounded-xl border border-slate-800 bg-[#0B1020] px-3 py-2 text-xs font-semibold text-slate-200 focus:outline-none"
            >
              <option value="High Energy & Insightful">⚡ High Energy & Insightful</option>
              <option value="Cinematic & Atmospheric">🎬 Cinematic & Atmospheric</option>
              <option value="Casual & Relatable">😊 Casual & Relatable</option>
              <option value="Direct & Educational">🧠 Direct & Educational</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1.5">Format</label>
            <select
              value={format}
              onChange={(e) => setFormat(e.target.value)}
              className="w-full rounded-xl border border-slate-800 bg-[#0B1020] px-3 py-2 text-xs font-semibold text-slate-200 focus:outline-none"
            >
              <option value="Short-form Video (60s)">📱 Short-form Video (60s)</option>
              <option value="YouTube Long-form (8-10m)">📺 YouTube Long-form (8-10m)</option>
              <option value="LinkedIn Text + Carousel">💼 LinkedIn Carousel Script</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1.5">Primary Platform</label>
            <select
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
              className="w-full rounded-xl border border-slate-800 bg-[#0B1020] px-3 py-2 text-xs font-semibold text-slate-200 focus:outline-none"
            >
              <option value="YouTube Shorts & Reels">YouTube Shorts & Instagram Reels</option>
              <option value="TikTok">TikTok</option>
              <option value="YouTube Dedicated">YouTube Long-form</option>
              <option value="LinkedIn">LinkedIn</option>
            </select>
          </div>
        </div>

        <button
          onClick={handleGenerateScript}
          disabled={loading || !topic}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#5B4CFF] via-[#8B5CF6] to-[#5B4CFF] py-3 text-xs font-black text-white shadow-xl shadow-[#5B4CFF]/25 hover:opacity-95 active:scale-98 transition-all disabled:opacity-50"
        >
          {loading ? <RefreshCw className="h-4 w-4 animate-spin" /> : <Wand2 className="h-4 w-4 text-[#FFB800]" />}
          <span>{loading ? 'Crafting High-Retention Story Arc...' : 'Generate Full Script & Storyboard'}</span>
        </button>
      </div>

      {/* Generated Outputs Grid */}
      {generatedResult && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Script & Storyboard Column (2 Cols) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Hooks Options */}
            <div className="rounded-3xl border border-slate-800 bg-[#111827]/90 p-6 shadow-xl space-y-3">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <Lightbulb className="h-4 w-4 text-[#FFB800]" />
                  <h3 className="text-sm font-bold text-white">3-Second Viral Hooks (Choose One)</h3>
                </div>
              </div>

              <div className="space-y-2">
                {generatedResult.hooks?.map((hook: string, i: number) => (
                  <div
                    key={i}
                    className="flex items-center justify-between rounded-2xl border border-slate-800 bg-[#0B1020] p-3 text-xs text-slate-200 hover:border-[#5B4CFF]/50 transition-all"
                  >
                    <span className="font-semibold text-slate-100">"{hook}"</span>
                    <button
                      onClick={() => copyToClipboard(hook, `hook-${i}`)}
                      className="p-1.5 rounded-lg bg-slate-800 hover:bg-[#5B4CFF] hover:text-white transition-all text-slate-400 shrink-0 ml-2"
                      title="Copy Hook"
                    >
                      {copiedSection === `hook-${i}` ? <Check className="h-3.5 w-3.5 text-[#22C55E]" /> : <Copy className="h-3.5 w-3.5" />}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Complete Script */}
            <div className="rounded-3xl border border-slate-800 bg-[#111827]/90 p-6 shadow-xl space-y-3">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-[#8B5CF6]" />
                  <h3 className="text-sm font-bold text-white">Full Formatted Script & Cues</h3>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => copyToClipboard(generatedResult.script, 'full-script')}
                    className="flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800 px-3 py-1.5 text-xs font-semibold text-slate-300 hover:bg-slate-700 transition-all"
                  >
                    {copiedSection === 'full-script' ? <Check className="h-3.5 w-3.5 text-[#22C55E]" /> : <Copy className="h-3.5 w-3.5" />}
                    <span>Copy Script</span>
                  </button>
                  <button
                    onClick={() => {
                      onSendToMultiPlatform(generatedResult.script);
                      setActiveTab('multi_platform');
                    }}
                    className="flex items-center gap-1.5 rounded-lg bg-[#5B4CFF] px-3 py-1.5 text-xs font-semibold text-white hover:bg-[#8B5CF6] transition-all"
                  >
                    <Share2 className="h-3.5 w-3.5" />
                    <span>Send to Multi-Platform OS</span>
                  </button>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-800/80 bg-[#0B1020] p-4 font-mono text-xs text-slate-300 leading-relaxed whitespace-pre-wrap max-h-80 overflow-y-auto">
                {generatedResult.script}
              </div>
            </div>

            {/* Storyboard Visualization */}
            <div className="rounded-3xl border border-slate-800 bg-[#111827]/90 p-6 shadow-xl space-y-3">
              <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
                <Layers className="h-4 w-4 text-[#22C55E]" />
                <h3 className="text-sm font-bold text-white">Smart Storyboard & Scene Flow</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {generatedResult.storyboard?.map((sc: any, idx: number) => (
                  <div key={idx} className="rounded-2xl border border-slate-800 bg-[#0B1020] p-3.5 text-xs space-y-2">
                    <div className="flex items-center justify-between font-bold text-[#8B5CF6]">
                      <span>Scene {sc.scene}</span>
                      <span className="text-[10px] text-slate-400 font-mono">{sc.time}</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">Visual:</span>
                      <p className="text-slate-200">{sc.visual}</p>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">Audio:</span>
                      <p className="text-slate-300">{sc.audio}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Title, CTA, Voice-over & Thumbnail Concepts */}
          <div className="space-y-6">
            {/* Title & Description */}
            <div className="rounded-3xl border border-slate-800 bg-[#111827]/90 p-6 shadow-xl space-y-3">
              <h3 className="text-sm font-bold text-white border-b border-slate-800 pb-2">SEO Title & Description</h3>

              <div>
                <label className="text-[10px] font-bold text-slate-400 uppercase">Recommended Title</label>
                <div className="rounded-xl border border-slate-800 bg-[#0B1020] p-2.5 text-xs font-bold text-white mt-1">
                  {generatedResult.title}
                </div>
              </div>

              <div>
                <label className="text-[10px] font-bold text-slate-400 uppercase">Description</label>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">{generatedResult.description}</p>
              </div>

              <div className="flex flex-wrap gap-1 pt-1">
                {generatedResult.hashtags?.map((h: string) => (
                  <span key={h} className="rounded bg-slate-800 px-2 py-0.5 text-[10px] font-mono text-slate-300">
                    {h}
                  </span>
                ))}
              </div>
            </div>

            {/* Thumbnail Ideas */}
            <div className="rounded-3xl border border-slate-800 bg-[#111827]/90 p-6 shadow-xl space-y-3">
              <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
                <ImageIcon className="h-4 w-4 text-[#FFB800]" />
                <h3 className="text-sm font-bold text-white">Thumbnail Concepts</h3>
              </div>

              <div className="space-y-3">
                {generatedResult.thumbnailIdeas?.map((thumb: any, idx: number) => (
                  <div key={idx} className="rounded-2xl border border-slate-800 bg-[#0B1020] p-3 text-xs space-y-1.5">
                    <div className="flex items-center justify-between font-bold text-white">
                      <span>"{thumb.textOverlay}"</span>
                      <span className="h-3 w-3 rounded-full" style={{ backgroundColor: thumb.primaryColor }} />
                    </div>
                    <p className="text-slate-400 text-[11px]">{thumb.composition}</p>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setActiveTab('thumbnail_studio')}
                className="w-full rounded-xl bg-slate-800 py-2 text-xs font-bold text-slate-200 hover:bg-[#5B4CFF] hover:text-white transition-all text-center"
              >
                Open Thumbnail Studio →
              </button>
            </div>

            {/* Voice-over Narration Script */}
            <div className="rounded-3xl border border-slate-800 bg-[#111827]/90 p-6 shadow-xl space-y-3">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <div className="flex items-center gap-2">
                  <Volume2 className="h-4 w-4 text-[#22C55E]" />
                  <h3 className="text-sm font-bold text-white">Clean Voice-Over Script</h3>
                </div>
                <button
                  onClick={() => copyToClipboard(generatedResult.voiceOverScript, 'vo-script')}
                  className="text-[10px] text-[#8B5CF6] font-bold hover:underline"
                >
                  {copiedSection === 'vo-script' ? 'Copied!' : 'Copy VO'}
                </button>
              </div>

              <p className="text-xs text-slate-300 italic leading-relaxed bg-[#0B1020] p-3 rounded-2xl border border-slate-800">
                "{generatedResult.voiceOverScript}"
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
