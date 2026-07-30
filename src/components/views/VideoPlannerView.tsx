import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Video,
  Camera,
  Music,
  Scissors,
  Clock,
  Plus,
  Play,
  Layers,
  Sparkles,
  ChevronRight,
  SlidersHorizontal
} from 'lucide-react';

export const VideoPlannerView: React.FC = () => {
  const [videoTitle, setVideoTitle] = useState<string>('How AI Agents Will Replace 80% of Repetitive SaaS Code');
  const [musicMood, setMusicMood] = useState<string>('Cyberpunk / Deep House Synth (124 BPM)');

  const scenes = [
    {
      id: 1,
      time: '0:00 - 0:05',
      sceneName: 'Cold Hook',
      cameraAngle: 'Close-Up (Eye-Level)',
      bRoll: 'Fast cuts of chaotic bugged code turning into green success checkmarks.',
      transition: 'Whip Pan Right',
      editingNotes: 'Add bass drop sound effect at 0:02 mark. Pop text overlay "10X CODE SPEED".',
      voiceOver: 'Stop scrolling if you want to automate 80% of your repetitive code.'
    },
    {
      id: 2,
      time: '0:05 - 0:20',
      timeSpan: '15s',
      sceneName: 'The Friction Problem',
      cameraAngle: 'Medium Shot (3/4 Profile)',
      bRoll: 'Screen recording showing manual messy folder clutter transition to clean AI dashboard.',
      transition: 'Smooth Zoom In',
      editingNotes: 'Lower music volume by -6dB during voiceover. Subtle red glitch effect on "manual friction".',
      voiceOver: 'Most developers waste 15+ hours a week fighting boilerplate configuration.'
    },
    {
      id: 3,
      time: '0:20 - 0:45',
      timeSpan: '25s',
      sceneName: 'Step-by-Step AI Solution',
      cameraAngle: 'Over-the-Shoulder Monitor Angle',
      bRoll: 'Live terminal output running agentic build steps in split screen format.',
      transition: 'Quick Cross Dissolve',
      editingNotes: 'Highlight terminal steps with glowing yellow rectangle overlays.',
      voiceOver: 'Step 1: Wire your schema into the agentic API. Step 2: Enable real-time AI error catching.'
    },
    {
      id: 4,
      time: '0:45 - 1:00',
      timeSpan: '15s',
      sceneName: 'CTA & Community Pitch',
      cameraAngle: 'Direct Wide Shot',
      bRoll: 'Creator smiling holding phone showing StoryVerse logo with animated Follow button.',
      transition: 'Fade to Dark',
      editingNotes: 'Display clear subscribe handle and QR code on screen right.',
      voiceOver: 'Comment AGENT below and I will send you my full open-source starter repo for free!'
    }
  ];

  return (
    <div className="space-y-6 pb-12">
      {/* Module Header */}
      <div className="border-b border-slate-800 pb-5">
        <div className="flex items-center gap-2 text-xs font-bold text-[#8B5CF6] uppercase tracking-wider mb-1">
          <Video className="h-4 w-4 text-[#FFB800]" />
          <span>MODULE 5 • PRODUCTION TIMELINE</span>
        </div>
        <h1 className="text-2xl font-black text-white tracking-tight">Smart Video Planner</h1>
        <p className="text-xs text-slate-400 mt-1">
          Generate complete Scene Flow, Camera Angles, B-roll recommendations, Transitions, Editing Cues, and Music Mood for production teams.
        </p>
      </div>

      {/* Video Overview Card */}
      <div className="rounded-3xl border border-slate-800 bg-[#111827]/90 p-6 shadow-xl space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1.5">Project Video Title</label>
            <input
              type="text"
              value={videoTitle}
              onChange={(e) => setVideoTitle(e.target.value)}
              className="w-full rounded-xl border border-slate-800 bg-[#0B1020] px-3.5 py-2.5 text-xs text-white font-bold focus:border-[#5B4CFF] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1.5">Music & Audio Mood</label>
            <div className="flex items-center gap-2">
              <Music className="h-4 w-4 text-[#FFB800] shrink-0" />
              <input
                type="text"
                value={musicMood}
                onChange={(e) => setMusicMood(e.target.value)}
                className="w-full rounded-xl border border-slate-800 bg-[#0B1020] px-3.5 py-2.5 text-xs text-slate-200 focus:border-[#5B4CFF] focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scene Flow Timeline Breakdown */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <Layers className="h-4 w-4 text-[#22C55E]" />
            <span>Scene Breakdown Timeline (4 Scenes)</span>
          </h3>
          <span className="text-xs text-slate-400 font-medium">Total Duration: 60 Seconds</span>
        </div>

        <div className="space-y-4">
          {scenes.map((sc) => (
            <motion.div
              key={sc.id}
              whileHover={{ x: 2 }}
              className="rounded-3xl border border-slate-800 bg-[#111827]/90 p-5 shadow-xl space-y-3"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-[#5B4CFF] text-xs font-extrabold text-white">
                    0{sc.id}
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-white">{sc.sceneName}</h4>
                    <span className="text-[10px] font-mono text-slate-400">⏱️ {sc.time}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="rounded-lg bg-[#5B4CFF]/15 px-2.5 py-1 text-[10px] font-bold text-[#8B5CF6]">
                    🎥 {sc.cameraAngle}
                  </span>
                  <span className="rounded-lg bg-slate-800 px-2.5 py-1 text-[10px] font-bold text-slate-300">
                    ✂️ {sc.transition}
                  </span>
                </div>
              </div>

              {/* Scene Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="rounded-2xl border border-slate-800/80 bg-[#0B1020] p-3 space-y-1">
                  <span className="text-[10px] font-bold uppercase text-slate-400">B-Roll Footage Needed</span>
                  <p className="text-slate-200 leading-relaxed">{sc.bRoll}</p>
                </div>

                <div className="rounded-2xl border border-slate-800/80 bg-[#0B1020] p-3 space-y-1">
                  <span className="text-[10px] font-bold uppercase text-[#FFB800]">Editing Cues & Sound Effects</span>
                  <p className="text-slate-200 leading-relaxed">{sc.editingNotes}</p>
                </div>
              </div>

              {/* Voice-over snippet */}
              <div className="text-xs text-slate-300 italic bg-[#0B1020]/60 p-2.5 rounded-xl border border-slate-800/50">
                🗣️ "{sc.voiceOver}"
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
