import React from 'react';
import {
  LayoutDashboard,
  TrendingUp,
  Sparkles,
  Share2,
  Image as ImageIcon,
  Video,
  BarChart3,
  FolderKanban,
  Bot,
  Users2,
  LineChart,
  Briefcase,
  Trophy,
  ShieldCheck,
  GraduationCap,
  CalendarDays,
  Target,
  Globe,
  Settings
} from 'lucide-react';
import { NavigationTab, UserRole } from '../types';

interface SidebarProps {
  activeTab: NavigationTab;
  setActiveTab: (tab: NavigationTab) => void;
  userRole: UserRole;
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  setActiveTab,
  userRole,
}) => {
  const navSections = [
    {
      title: 'CREATOR SUITE',
      items: [
        { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, badge: 'Overview' },
        { id: 'trend_hunter', label: 'AI Trend Hunter', icon: TrendingUp, badge: 'Viral' },
        { id: 'story_builder', label: 'Story Builder AI', icon: Sparkles, badge: 'Script' },
        { id: 'multi_platform', label: 'Multi-Platform OS', icon: Share2 },
        { id: 'thumbnail_studio', label: 'Thumbnail Studio', icon: ImageIcon },
        { id: 'video_planner', label: 'Smart Video Planner', icon: Video },
        { id: 'engagement_predictor', label: 'Engagement Predictor', icon: BarChart3, badge: 'Predict' },
      ],
    },
    {
      title: 'WORKSPACE & INTELLIGENCE',
      items: [
        { id: 'creator_workspace', label: 'Creator Workspace', icon: FolderKanban },
        { id: 'nova_coach', label: 'Nova AI Coach', icon: Bot, badge: 'Mentor' },
        { id: 'audience_twin', label: 'Audience Digital Twin', icon: Users2 },
        { id: 'analytics', label: 'Advanced Analytics', icon: LineChart },
      ],
    },
    {
      title: 'CREATOR ECONOMY & CONNECT',
      items: [
        { id: 'storyverse_connect', label: 'StoryVerse Connect', icon: Briefcase, badge: 'Marketplace' },
        { id: 'campaigns_manager', label: 'Campaign Manager', icon: Target, badge: 'Deals' },
        { id: 'community_feed', label: 'Community & Guilds', icon: Globe },
        { id: 'event_hub', label: 'Event Promotion Hub', icon: CalendarDays },
        { id: 'brand_challenges', label: 'Brand Challenge Arena', icon: Trophy },
        { id: 'fraud_detection', label: 'Fraud Detection Audit', icon: ShieldCheck },
        { id: 'creator_academy', label: 'Creator Academy', icon: GraduationCap },
        { id: 'settings_general', label: 'Workspace Settings', icon: Settings },
      ],
    },
  ];

  return (
    <aside className="w-64 shrink-0 border-r border-slate-800/80 bg-[#0B1020]/95 flex flex-col justify-between py-4 px-3 text-slate-300 min-h-[calc(100vh-61px)] select-none">
      <div className="space-y-6">
        {navSections.map((section, idx) => (
          <div key={idx} className="space-y-1.5">
            <div className="px-3 text-[10px] font-bold tracking-widest text-slate-400 uppercase">
              {section.title}
            </div>
            {section.items.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id as NavigationTab)}
                  className={`group flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-[#5B4CFF] to-[#8B5CF6] text-white shadow-md shadow-[#5B4CFF]/20 font-bold'
                      : 'text-slate-400 hover:bg-[#111827] hover:text-slate-100'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className={`h-4 w-4 transition-transform group-hover:scale-110 ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-[#8B5CF6]'}`} />
                    <span className="truncate">{item.label}</span>
                  </div>
                  {item.badge && (
                    <span
                      className={`rounded-full px-2 py-0.5 text-[9px] font-bold tracking-wide uppercase ${
                        isActive
                          ? 'bg-white/20 text-white'
                          : 'bg-[#5B4CFF]/15 text-[#8B5CF6] group-hover:bg-[#5B4CFF]/30'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        ))}
      </div>

      {/* Sidebar Footer Widget */}
      <div className="mt-6 rounded-2xl border border-[#5B4CFF]/30 bg-gradient-to-b from-[#111827] to-[#0B1020] p-3.5 shadow-xl relative overflow-hidden">
        <div className="absolute -right-6 -bottom-6 h-20 w-20 rounded-full bg-[#5B4CFF]/15 blur-xl pointer-events-none" />
        <div className="flex items-center justify-between text-xs font-bold text-white mb-1">
          <div className="flex items-center gap-1.5">
            <span className="flex h-2 w-2 rounded-full bg-[#22C55E] animate-pulse" />
            <span>AI Reputation</span>
          </div>
          <span className="text-[#FFB800] font-black">98/100</span>
        </div>
        <p className="text-[11px] text-slate-400 mb-2.5 leading-snug">
          {userRole === 'creator'
            ? '100% Authentic Audience • 4 Active Collabs'
            : 'Verified Brand Sponsor • $25,000 Budget Active'}
        </p>
        <button
          onClick={() => setActiveTab('storyverse_connect')}
          className="w-full rounded-lg bg-[#5B4CFF]/20 border border-[#5B4CFF]/40 py-1.5 text-[11px] font-bold text-[#8B5CF6] hover:bg-[#5B4CFF] hover:text-white transition-all text-center"
        >
          {userRole === 'creator' ? 'Browse High-Paying Deals' : 'Launch New Campaign'}
        </button>
      </div>
    </aside>
  );
};
