import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  FolderKanban,
  CalendarDays,
  CheckSquare,
  FileText,
  Upload,
  Plus,
  Play,
  Clock,
  Users,
  History,
  Tag,
  Palette,
  CheckCircle2,
  MoreVertical
} from 'lucide-react';
import { WorkspaceProject } from '../../types';

interface CreatorWorkspaceViewProps {
  projects: WorkspaceProject[];
  setProjects: React.Dispatch<React.SetStateAction<WorkspaceProject[]>>;
}

export const CreatorWorkspaceView: React.FC<CreatorWorkspaceViewProps> = ({
  projects = [],
  setProjects,
}) => {
  const [activeSubTab, setActiveSubTab] = useState<'projects' | 'calendar' | 'brandkit' | 'tasks'>('projects');
  const [showNewProjectModal, setShowNewProjectModal] = useState<boolean>(false);
  const [newProjName, setNewProjName] = useState<string>('');
  const [newProjPlatform, setNewProjPlatform] = useState<any>('YouTube');

  const [tasks, setTasks] = useState([
    { id: '1', title: 'Record B-roll for StackFlow AI integration', done: true, due: 'Today' },
    { id: '2', title: 'Finalize Thumbnail Variant A in Studio', done: false, due: 'Tomorrow' },
    { id: '3', title: 'Review contract for Canva Design Challenge', done: false, due: 'Aug 04' }
  ]);

  const handleCreateProject = () => {
    if (!newProjName) return;
    const newProject: WorkspaceProject = {
      id: `proj-${Date.now()}`,
      name: newProjName,
      platform: newProjPlatform,
      status: 'Scripting',
      lastModified: 'Just now',
      tags: ['#New', '#AI'],
      dueDate: 'Aug 10, 2026'
    };
    if (setProjects) {
      setProjects([newProject, ...(projects || [])]);
    }
    setNewProjName('');
    setShowNewProjectModal(false);
  };

  const toggleTask = (id: string) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Module Header */}
      <div className="border-b border-slate-800 pb-5">
        <div className="flex items-center gap-2 text-xs font-bold text-[#8B5CF6] uppercase tracking-wider mb-1">
          <FolderKanban className="h-4 w-4" />
          <span>MODULE 7 • OPERATING SYSTEM WORKSPACE</span>
        </div>
        <h1 className="text-2xl font-black text-white tracking-tight">Creator Workspace</h1>
        <p className="text-xs text-slate-400 mt-1">
          Central hub for projects, asset storage, editorial calendar, brand kit guidelines, task checklists, and team collaboration.
        </p>
      </div>

      {/* Sub Tabs Navigation */}
      <div className="flex items-center justify-between gap-4 border-b border-slate-800 pb-2">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveSubTab('projects')}
            className={`flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-bold transition-all ${
              activeSubTab === 'projects'
                ? 'bg-[#5B4CFF] text-white shadow-md'
                : 'bg-slate-800/60 text-slate-400 hover:text-white'
            }`}
          >
            <FolderKanban className="h-4 w-4" />
            <span>Projects ({(projects || []).length})</span>
          </button>

          <button
            onClick={() => setActiveSubTab('calendar')}
            className={`flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-bold transition-all ${
              activeSubTab === 'calendar'
                ? 'bg-[#5B4CFF] text-white shadow-md'
                : 'bg-slate-800/60 text-slate-400 hover:text-white'
            }`}
          >
            <CalendarDays className="h-4 w-4" />
            <span>Content Calendar</span>
          </button>

          <button
            onClick={() => setActiveSubTab('brandkit')}
            className={`flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-bold transition-all ${
              activeSubTab === 'brandkit'
                ? 'bg-[#5B4CFF] text-white shadow-md'
                : 'bg-slate-800/60 text-slate-400 hover:text-white'
            }`}
          >
            <Palette className="h-4 w-4" />
            <span>Brand Kit & Assets</span>
          </button>

          <button
            onClick={() => setActiveSubTab('tasks')}
            className={`flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-bold transition-all ${
              activeSubTab === 'tasks'
                ? 'bg-[#5B4CFF] text-white shadow-md'
                : 'bg-slate-800/60 text-slate-400 hover:text-white'
            }`}
          >
            <CheckSquare className="h-4 w-4" />
            <span>Tasks Checklist</span>
          </button>
        </div>

        {activeSubTab === 'projects' && (
          <button
            onClick={() => setShowNewProjectModal(true)}
            className="flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-[#5B4CFF] to-[#8B5CF6] px-3.5 py-2 text-xs font-bold text-white shadow-md hover:opacity-90 transition-all"
          >
            <Plus className="h-4 w-4" />
            <span>New Project</span>
          </button>
        )}
      </div>

      {/* Projects Grid View */}
      {activeSubTab === 'projects' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(projects || []).map((proj) => (
            <motion.div
              key={proj.id}
              whileHover={{ y: -3 }}
              className="rounded-3xl border border-slate-800 bg-[#111827]/90 p-5 shadow-xl space-y-3 flex flex-col justify-between"
            >
              <div>
                {/* Thumbnail Preview */}
                <div className="relative aspect-video w-full rounded-2xl bg-slate-800 overflow-hidden mb-3">
                  {proj.thumbnail ? (
                    <img src={proj.thumbnail} alt={proj.name} className="h-full w-full object-cover" />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-slate-500">
                      <Play className="h-8 w-8" />
                    </div>
                  )}
                  <span className="absolute top-3 left-3 rounded-md bg-black/70 backdrop-blur-md px-2 py-0.5 text-[10px] font-bold text-white">
                    {proj.platform}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-white line-clamp-2">{proj.name}</h3>
                <p className="text-[11px] text-slate-400 mt-1">Last edited {proj.lastModified}</p>

                <div className="flex flex-wrap gap-1 mt-3">
                  {proj.tags.map((t) => (
                    <span key={t} className="rounded bg-slate-800 px-2 py-0.5 text-[10px] font-mono text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-slate-800/80">
                <span className="text-xs text-slate-400 font-medium">Due {proj.dueDate}</span>
                <span
                  className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold ${
                    proj.status === 'Ready'
                      ? 'bg-[#22C55E]/20 text-[#22C55E]'
                      : 'bg-[#5B4CFF]/20 text-[#8B5CF6]'
                  }`}
                >
                  {proj.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Content Calendar Tab */}
      {activeSubTab === 'calendar' && (
        <div className="rounded-3xl border border-slate-800 bg-[#111827]/90 p-6 shadow-xl space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h3 className="text-sm font-bold text-white">August 2026 Editorial Publishing Calendar</h3>
            <span className="text-xs text-[#22C55E] font-bold">4 Scheduled Releases</span>
          </div>

          <div className="grid grid-cols-7 gap-2 text-center text-xs font-bold text-slate-400 border-b border-slate-800 pb-2">
            <div>MON</div><div>TUE</div><div>WED</div><div>THU</div><div>FRI</div><div>SAT</div><div>SUN</div>
          </div>

          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: 28 }).map((_, i) => (
              <div
                key={i}
                className={`min-h-[70px] rounded-2xl border p-2 text-xs flex flex-col justify-between ${
                  i === 1
                    ? 'border-[#5B4CFF] bg-[#5B4CFF]/10'
                    : i === 5
                    ? 'border-[#FFB800] bg-[#FFB800]/10'
                    : 'border-slate-800 bg-[#0B1020]'
                }`}
              >
                <span className="font-bold text-slate-400 text-[10px]">{i + 1}</span>
                {i === 1 && <span className="text-[9px] font-bold text-[#8B5CF6] truncate">YT: AI Agents</span>}
                {i === 5 && <span className="text-[9px] font-bold text-[#FFB800] truncate">Reel: Canva</span>}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Brand Kit Tab */}
      {activeSubTab === 'brandkit' && (
        <div className="rounded-3xl border border-slate-800 bg-[#111827]/90 p-6 shadow-xl space-y-4">
          <h3 className="text-sm font-bold text-white border-b border-slate-800 pb-3">Brand Kit Guidelines</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-slate-800 bg-[#0B1020] p-4 space-y-2">
              <span className="text-xs font-bold text-slate-300">Brand Primary Colors</span>
              <div className="flex items-center gap-2 pt-1">
                <div className="h-8 w-8 rounded-xl bg-[#5B4CFF]" title="#5B4CFF" />
                <div className="h-8 w-8 rounded-xl bg-[#8B5CF6]" title="#8B5CF6" />
                <div className="h-8 w-8 rounded-xl bg-[#FFB800]" title="#FFB800" />
                <div className="h-8 w-8 rounded-xl bg-[#0B1020] border border-slate-700" title="#0B1020" />
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-[#0B1020] p-4 space-y-2">
              <span className="text-xs font-bold text-slate-300">Typography Pairings</span>
              <p className="text-xs font-extrabold text-white">Plus Jakarta Sans (Display) + Inter (Body)</p>
            </div>
          </div>
        </div>
      )}

      {/* Tasks Tab */}
      {activeSubTab === 'tasks' && (
        <div className="rounded-3xl border border-slate-800 bg-[#111827]/90 p-6 shadow-xl space-y-4">
          <h3 className="text-sm font-bold text-white border-b border-slate-800 pb-3">Tasks Checklist</h3>

          <div className="space-y-2">
            {tasks.map((task) => (
              <div
                key={task.id}
                onClick={() => toggleTask(task.id)}
                className="flex items-center justify-between rounded-2xl border border-slate-800 bg-[#0B1020] p-3 text-xs cursor-pointer hover:border-[#5B4CFF]/50 transition-all"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle2
                    className={`h-4 w-4 ${task.done ? 'text-[#22C55E]' : 'text-slate-600'}`}
                  />
                  <span className={task.done ? 'line-through text-slate-500' : 'text-slate-200'}>
                    {task.title}
                  </span>
                </div>
                <span className="text-[10px] text-slate-400 font-mono">Due {task.due}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* New Project Modal */}
      {showNewProjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-[#111827] p-6 shadow-2xl space-y-4">
            <h3 className="text-base font-bold text-white">Create New Workspace Project</h3>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">Project Name</label>
              <input
                type="text"
                value={newProjName}
                onChange={(e) => setNewProjName(e.target.value)}
                placeholder="e.g. Next-Gen AI Code Walkthrough"
                className="w-full rounded-xl border border-slate-800 bg-[#0B1020] px-3.5 py-2 text-xs text-white focus:border-[#5B4CFF] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">Platform</label>
              <select
                value={newProjPlatform}
                onChange={(e) => setNewProjPlatform(e.target.value)}
                className="w-full rounded-xl border border-slate-800 bg-[#0B1020] px-3 py-2 text-xs font-bold text-slate-200 focus:outline-none"
              >
                <option value="YouTube">YouTube</option>
                <option value="Instagram">Instagram Reels</option>
                <option value="TikTok">TikTok</option>
                <option value="LinkedIn">LinkedIn</option>
              </select>
            </div>

            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                onClick={() => setShowNewProjectModal(false)}
                className="rounded-xl px-4 py-2 text-xs font-bold text-slate-400 hover:text-white"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateProject}
                className="rounded-xl bg-[#5B4CFF] px-4 py-2 text-xs font-bold text-white hover:bg-[#8B5CF6]"
              >
                Create Project
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
