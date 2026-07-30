import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Target,
  Plus,
  Calendar,
  CheckCircle2,
  Clock,
  Users,
  DollarSign,
  TrendingUp,
  FileText,
  BarChart3,
  Layers,
  ChevronRight,
  Filter,
  CheckSquare
} from 'lucide-react';
import { Campaign } from '../../types';

interface CampaignsViewProps {
  campaigns?: Campaign[];
}

export const CampaignsView: React.FC<CampaignsViewProps> = ({ campaigns = [] }) => {
  const [activeSubTab, setActiveSubTab] = useState<
    'dashboard' | 'builder' | 'timeline' | 'tasks' | 'deliverables' | 'team'
  >('dashboard');

  // Interactive Tasks state
  const [tasks, setTasks] = useState([
    { id: 't1', title: 'Script outline approval for YouTube integration', assignee: 'Aria Chen', deadline: 'Aug 02, 2026', done: true, priority: 'High' },
    { id: 't2', title: 'B-Roll asset capture & product unboxing shot', assignee: 'Devon Vance', deadline: 'Aug 05, 2026', done: false, priority: 'High' },
    { id: 't3', title: 'First draft video edit upload & timestamp check', assignee: 'Video Team', deadline: 'Aug 08, 2026', done: false, priority: 'Medium' },
    { id: 't4', title: 'Brand feedback review & escrow sign-off', assignee: 'Brand Manager', deadline: 'Aug 10, 2026', done: false, priority: 'Low' },
  ]);

  const toggleTask = (id: string) => {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Sub-navigation tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar border-b border-slate-800 pb-3">
        {[
          { id: 'dashboard', label: 'Campaign Dashboard', icon: Target },
          { id: 'builder', label: 'Campaign Builder', icon: Plus },
          { id: 'timeline', label: 'Timeline & Milestones', icon: Calendar },
          { id: 'tasks', label: 'Tasks & To-Dos', icon: CheckSquare },
          { id: 'deliverables', label: 'Deliverables & Proof', icon: FileText },
          { id: 'team', label: 'Team Members', icon: Users },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeSubTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveSubTab(tab.id as any)}
              className={`flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-semibold whitespace-nowrap transition-all ${
                isActive
                  ? 'bg-[#5B4CFF] text-white font-bold shadow-md shadow-[#5B4CFF]/20'
                  : 'bg-[#111827]/80 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              <Icon className={`h-4 w-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Campaign Dashboard Overview */}
      {activeSubTab === 'dashboard' && (
        <div className="space-y-6">
          {/* Top Metrics Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="rounded-2xl border border-slate-800/80 bg-[#111827] p-4 shadow-lg">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Active Campaigns</span>
                <Target className="h-4 w-4 text-[#5B4CFF]" />
              </div>
              <div className="text-2xl font-black text-white mt-2">4 Campaigns</div>
              <p className="text-[11px] text-[#22C55E] font-medium mt-1">↑ 2 launch next week</p>
            </div>

            <div className="rounded-2xl border border-slate-800/80 bg-[#111827] p-4 shadow-lg">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Total Budget Committed</span>
                <DollarSign className="h-4 w-4 text-[#FFB800]" />
              </div>
              <div className="text-2xl font-black text-white mt-2">$28,500</div>
              <p className="text-[11px] text-slate-400 mt-1">Escrow Secured</p>
            </div>

            <div className="rounded-2xl border border-slate-800/80 bg-[#111827] p-4 shadow-lg">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Deliverable Progress</span>
                <CheckCircle2 className="h-4 w-4 text-[#22C55E]" />
              </div>
              <div className="text-2xl font-black text-white mt-2">78% Complete</div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                <div className="bg-[#22C55E] h-full w-[78%]" />
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800/80 bg-[#111827] p-4 shadow-lg">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Target Reach</span>
                <TrendingUp className="h-4 w-4 text-[#8B5CF6]" />
              </div>
              <div className="text-2xl font-black text-white mt-2">1.2M Views</div>
              <p className="text-[11px] text-slate-400 mt-1">Across YT & Reels</p>
            </div>
          </div>

          {/* Active Campaigns Table/Cards */}
          <div className="rounded-2xl border border-slate-800 bg-[#111827] p-5 shadow-lg space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Campaign Roster & Status</h3>
              <button
                onClick={() => setActiveSubTab('builder')}
                className="flex items-center gap-1.5 rounded-xl bg-[#5B4CFF] px-3 py-1.5 text-xs font-bold text-white hover:bg-[#5B4CFF]/90 transition-all"
              >
                <Plus className="h-3.5 w-3.5" />
                <span>+ Launch New</span>
              </button>
            </div>

            <div className="space-y-3">
              {[
                { title: 'AI Developer Tool 2026 Launch', brand: 'Anvil Code AI', budget: '$12,000', status: 'In Progress', progress: 80, due: 'Aug 10, 2026' },
                { title: 'SaaS Productivity Short Series', brand: 'FlowState', budget: '$6,500', status: 'In Progress', progress: 45, due: 'Aug 18, 2026' },
                { title: 'Cybersecurity App Creator Blitz', brand: 'GuardNet', budget: '$10,000', status: 'Reviewing', progress: 95, due: 'Aug 04, 2026' },
              ].map((cmp, idx) => (
                <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between gap-4 rounded-xl border border-slate-800 bg-[#0B1020] p-4 text-xs">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm text-white">{cmp.title}</span>
                      <span className="rounded-full bg-[#5B4CFF]/20 px-2 py-0.5 text-[10px] font-bold text-[#8B5CF6]">
                        {cmp.status}
                      </span>
                    </div>
                    <p className="text-slate-400 text-[11px]">Sponsor: {cmp.brand} • Budget: <span className="text-[#FFB800] font-bold">{cmp.budget}</span></p>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="w-32 space-y-1">
                      <div className="flex justify-between text-[10px] text-slate-400">
                        <span>Progress</span>
                        <span>{cmp.progress}%</span>
                      </div>
                      <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-gradient-to-r from-[#5B4CFF] to-[#8B5CF6] h-full" style={{ width: `${cmp.progress}%` }} />
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-[10px] text-slate-500">Deadline</span>
                      <div className="font-bold text-slate-200 text-xs">{cmp.due}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tasks & Deliverables Sub-Tab */}
      {activeSubTab === 'tasks' && (
        <div className="rounded-2xl border border-slate-800 bg-[#111827] p-5 shadow-lg space-y-4">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider">Campaign Deliverable Tasks</h3>

          <div className="space-y-2">
            {tasks.map((task) => (
              <div
                key={task.id}
                onClick={() => toggleTask(task.id)}
                className={`flex items-center justify-between rounded-xl border p-3.5 text-xs transition-all cursor-pointer ${
                  task.done
                    ? 'border-slate-800 bg-[#0B1020]/60 opacity-60'
                    : 'border-slate-800 bg-[#0B1020] hover:border-[#5B4CFF]/50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={task.done}
                    onChange={() => {}}
                    className="h-4 w-4 rounded-md border-slate-700 bg-slate-800 text-[#5B4CFF] focus:ring-0 cursor-pointer"
                  />
                  <span className={`font-semibold ${task.done ? 'line-through text-slate-500' : 'text-slate-200'}`}>
                    {task.title}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-[11px] text-slate-400">{task.assignee}</span>
                  <span className="rounded-md bg-slate-800 px-2 py-0.5 text-[10px] font-mono text-slate-300">
                    {task.deadline}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Fallback for other campaign tabs */}
      {['builder', 'timeline', 'deliverables', 'team'].includes(activeSubTab) && (
        <div className="rounded-2xl border border-slate-800 bg-[#111827] p-8 text-center space-y-3">
          <Target className="h-8 w-8 text-[#5B4CFF] mx-auto" />
          <h3 className="text-base font-bold text-white capitalize">{activeSubTab} Management</h3>
          <p className="text-xs text-slate-400 max-w-md mx-auto">
            Manage your campaign specs, creator briefs, timelines, and deliverables seamlessly in real-time.
          </p>
        </div>
      )}
    </div>
  );
};
