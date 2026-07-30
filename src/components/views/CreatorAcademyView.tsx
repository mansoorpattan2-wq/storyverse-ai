import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  GraduationCap,
  BookOpen,
  Award,
  Play,
  CheckCircle2,
  Lock,
  Sparkles,
  Clock,
  Zap,
  TrendingUp,
  Flame,
  Star
} from 'lucide-react';
import { AcademyCourse } from '../../types';

interface CreatorAcademyViewProps {
  courses: AcademyCourse[];
}

export const CreatorAcademyView: React.FC<CreatorAcademyViewProps> = ({ courses = [] }) => {
  const [selectedCourse, setSelectedCourse] = useState<AcademyCourse | null>((courses && courses[0]) || null);

  return (
    <div className="space-y-6 pb-12">
      {/* Module Header */}
      <div className="border-b border-slate-800 pb-5">
        <div className="flex items-center gap-2 text-xs font-bold text-[#8B5CF6] uppercase tracking-wider mb-1">
          <GraduationCap className="h-4 w-4 text-[#FFB800]" />
          <span>NEW • CREATOR GROWTH & CERTIFICATION</span>
        </div>
        <h1 className="text-2xl font-black text-white tracking-tight">StoryVerse Academy & Playbooks</h1>
        <p className="text-xs text-slate-400 mt-1">
          Master algorithm shifts, retention mechanics, viral story structures, and brand deal negotiation with certified courses.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Course Catalog List (1 Col) */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Masterclass Courses</h3>

          {(courses || []).map((crs) => (
            <div
              key={crs.id}
              onClick={() => setSelectedCourse(crs)}
              className={`rounded-2xl border p-4 cursor-pointer transition-all ${
                selectedCourse?.id === crs.id
                  ? 'border-[#5B4CFF] bg-[#5B4CFF]/10 shadow-lg'
                  : 'border-slate-800 bg-[#111827]/80 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="rounded-full bg-[#8B5CF6]/20 border border-[#8B5CF6]/30 px-2 py-0.5 text-[10px] font-bold text-[#8B5CF6]">
                  {crs.level}
                </span>
                <span className="text-[10px] text-slate-400 font-mono">⏱️ {crs.duration}</span>
              </div>

              <h4 className="text-xs font-bold text-white line-clamp-2">{crs.title}</h4>

              <div className="flex items-center justify-between mt-3 text-[11px] text-slate-400">
                <span>By {crs.instructor}</span>
                <span className="text-[#22C55E] font-bold">⭐ {crs.rating}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Course Detail & Lessons Player (2 Cols) */}
        {selectedCourse && (
          <div className="lg:col-span-2 rounded-3xl border border-slate-800 bg-[#111827]/90 p-6 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="text-[10px] font-bold text-[#FFB800] uppercase tracking-wider">
                  Verified Masterclass Course
                </span>
                <h2 className="text-lg font-black text-white">{selectedCourse.title}</h2>
                <p className="text-xs text-slate-400">Instructor: {selectedCourse.instructor}</p>
              </div>

              {selectedCourse.certificateAvailable && (
                <div className="flex items-center gap-1.5 rounded-full bg-[#22C55E]/15 border border-[#22C55E]/30 px-3 py-1 text-xs font-bold text-[#22C55E]">
                  <Award className="h-4 w-4" />
                  <span>Includes StoryVerse Certificate</span>
                </div>
              )}
            </div>

            <p className="text-xs text-slate-200 leading-relaxed">{selectedCourse.description}</p>

            {/* Modules / Lessons List */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Course Curriculum & Modules</h3>

              <div className="space-y-2">
                {selectedCourse.modules?.map((mod, i) => (
                  <div
                    key={typeof mod === 'string' ? `${selectedCourse.id}-mod-${i}` : ((mod as any).id || i)}
                    className="flex items-center justify-between rounded-2xl border border-slate-800 bg-[#0B1020] p-3.5 text-xs hover:border-[#5B4CFF]/50 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-[#5B4CFF]/20 text-[#8B5CF6] font-bold">
                        {i + 1}
                      </div>
                      <div>
                        <div className="font-bold text-white">{typeof mod === 'string' ? mod : (mod as any).title}</div>
                        <span className="text-[10px] text-slate-400">Duration: {typeof mod === 'string' ? '15 mins' : (mod as any).duration}</span>
                      </div>
                    </div>

                    <button className="flex items-center gap-1.5 rounded-lg bg-[#5B4CFF] px-3 py-1.5 text-[11px] font-bold text-white hover:bg-[#8B5CF6]">
                      <Play className="h-3 w-3 fill-current" />
                      <span>Start Lesson</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
