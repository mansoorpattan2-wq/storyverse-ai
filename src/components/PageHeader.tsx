import React from 'react';
import { ChevronRight, Sparkles, Plus, Share2, Download, Bot, Target, ShieldCheck, Settings } from 'lucide-react';
import { TopModule, NavigationTab } from '../types';

interface PageHeaderProps {
  activeTopTab: TopModule;
  activeTab: NavigationTab;
  setActiveTab: (tab: NavigationTab) => void;
  titleOverride?: string;
  subTitleOverride?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  activeTopTab,
  activeTab,
  setActiveTab,
  titleOverride,
  subTitleOverride,
}) => {
  // Module metadata dictionary
  const MODULE_METADATA: Record<TopModule, { name: string; iconName: string }> = {
    home: { name: 'Home', iconName: '🏠' },
    studio: { name: 'Creator Studio', iconName: '🎬' },
    analytics: { name: 'Analytics', iconName: '📈' },
    marketplace: { name: 'Marketplace', iconName: '🤝' },
    campaigns: { name: 'Campaigns', iconName: '📅' },
    community: { name: 'Community', iconName: '🌐' },
    academy: { name: 'Academy', iconName: '🎓' },
    settings: { name: 'Settings', iconName: '⚙' },
  };

  // Tab metadata dictionary
  const TAB_METADATA: Record<string, { title: string; desc: string }> = {
    dashboard: {
      title: 'Executive Overview',
      desc: 'Real-time performance analytics, viral trend signals, and AI recommendations.',
    },
    trend_hunter: {
      title: 'AI Trend Hunter',
      desc: 'Discover high-velocity topics, keyword search volumes, and viral video hooks.',
    },
    story_builder: {
      title: 'Story Builder AI',
      desc: 'Multi-format viral script generator with hooks, storyboards, and call-to-actions.',
    },
    multi_platform: {
      title: 'Multi-Platform OS',
      desc: 'Auto-format single master script into optimized posts for YouTube, TikTok, IG, LinkedIn & X.',
    },
    thumbnail_studio: {
      title: 'Thumbnail Studio',
      desc: 'AI-assisted high-CTR thumbnail composer with face contrast and headline overlays.',
    },
    video_planner: {
      title: 'Smart Video Planner',
      desc: 'Structure video pacing, retention interrupts, B-roll cues, and music sync.',
    },
    engagement_predictor: {
      title: 'Engagement Predictor',
      desc: 'Pre-publish simulation testing script retention velocity and click-through score.',
    },
    creator_workspace: {
      title: 'Creator Workspace',
      desc: 'Centralized project kanban, content calendar, brand kit assets, and task lists.',
    },
    nova_coach: {
      title: 'Nova AI Coach',
      desc: '24/7 strategic content mentor for script critiques, deal negotiation, and algorithm changes.',
    },
    audience_twin: {
      title: 'Audience Digital Twin',
      desc: 'Simulate audience responses and sentiment against synthetic demographic personas.',
    },
    analytics: {
      title: 'Advanced Analytics',
      desc: 'Cross-platform audience demographics, revenue velocity, and viral retention metrics.',
    },
    storyverse_connect: {
      title: 'StoryVerse Connect Marketplace',
      desc: 'Direct creator-brand sponsorship deals, escrow payments, and verified analytics.',
    },
    event_hub: {
      title: 'Event Promotion Hub',
      desc: 'Promote hackathons, college events, festivals, and product launches with verified creators.',
    },
    brand_challenges: {
      title: 'Brand Challenge Arena',
      desc: 'Join sponsored UGC challenges with instant prize pools and viral leaderboards.',
    },
    fraud_detection: {
      title: 'Fraud & Authenticity Audit',
      desc: 'AI verification auditing follower quality, comment authenticity, and bot detection.',
    },
    creator_academy: {
      title: 'Creator Academy',
      desc: 'Masterclass courses, AI workflows, and business guides curated by top 0.1% creators.',
    },
    community_feed: {
      title: 'Community & Groups',
      desc: 'Connect with fellow creators, share script drafts, and participate in daily challenges.',
    },
    campaigns_manager: {
      title: 'Campaign Manager',
      desc: 'End-to-end brand campaign tracking, deliverables, timelines, and creator rosters.',
    },
    settings_general: {
      title: 'Workspace Settings',
      desc: 'Manage workspace profile, team permissions, integrations, API keys, and security.',
    },
  };

  const topModuleObj = MODULE_METADATA[activeTopTab] || { name: 'Overview', iconName: '⚡' };
  const tabObj = TAB_METADATA[activeTab] || {
    title: titleOverride || 'Workspace',
    desc: subTitleOverride || 'Manage your StoryVerse AI workspace.',
  };

  const pageTitle = titleOverride || tabObj.title;
  const pageDesc = subTitleOverride || tabObj.desc;

  return (
    <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800/60 pb-4">
      {/* Breadcrumb & Title Block */}
      <div className="space-y-1">
        {/* Breadcrumb Path */}
        <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-400">
          <span className="hover:text-slate-200 transition-colors cursor-pointer" onClick={() => setActiveTab('dashboard')}>
            StoryVerse AI
          </span>
          <ChevronRight className="h-3 w-3 text-slate-600" />
          <span className="flex items-center gap-1 text-slate-300 font-bold">
            <span>{topModuleObj.iconName}</span>
            <span>{topModuleObj.name}</span>
          </span>
          <ChevronRight className="h-3 w-3 text-slate-600" />
          <span className="text-[#8B5CF6] font-bold truncate max-w-[180px] sm:max-w-none">
            {pageTitle}
          </span>
        </div>

        {/* Page Heading */}
        <div className="flex items-center gap-3">
          <h1 className="text-xl sm:text-2xl font-black tracking-tight text-white flex items-center gap-2">
            {pageTitle}
          </h1>
          <span className="rounded-full bg-[#5B4CFF]/15 px-2.5 py-0.5 text-[10px] font-bold text-[#8B5CF6] border border-[#5B4CFF]/30">
            Live
          </span>
        </div>
        <p className="text-xs text-slate-400 max-w-2xl leading-relaxed">{pageDesc}</p>
      </div>

      {/* Contextual Quick Actions */}
      <div className="flex items-center gap-2 shrink-0">
        {activeTopTab === 'studio' && (
          <button
            onClick={() => setActiveTab('story_builder')}
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#5B4CFF] to-[#8B5CF6] px-3.5 py-2 text-xs font-bold text-white shadow-md shadow-[#5B4CFF]/20 hover:brightness-110 transition-all"
          >
            <Sparkles className="h-3.5 w-3.5 text-[#FFB800]" />
            <span>+ Create Script</span>
          </button>
        )}

        {activeTopTab === 'analytics' && (
          <button
            onClick={() => setActiveTab('engagement_predictor')}
            className="flex items-center gap-2 rounded-xl border border-[#5B4CFF]/40 bg-[#5B4CFF]/15 px-3.5 py-2 text-xs font-bold text-[#8B5CF6] hover:bg-[#5B4CFF]/25 transition-all"
          >
            <Target className="h-3.5 w-3.5" />
            <span>Predict Engagement</span>
          </button>
        )}

        {activeTopTab === 'marketplace' && (
          <button
            onClick={() => setActiveTab('storyverse_connect')}
            className="flex items-center gap-2 rounded-xl bg-[#5B4CFF] px-3.5 py-2 text-xs font-bold text-white shadow-md hover:bg-[#5B4CFF]/90 transition-all"
          >
            <Plus className="h-3.5 w-3.5" />
            <span>Post Campaign Deal</span>
          </button>
        )}

        {activeTopTab === 'campaigns' && (
          <button
            onClick={() => setActiveTab('campaigns_manager')}
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#5B4CFF] to-[#8B5CF6] px-3.5 py-2 text-xs font-bold text-white shadow-md hover:brightness-110 transition-all"
          >
            <Plus className="h-3.5 w-3.5" />
            <span>+ New Campaign</span>
          </button>
        )}

        {activeTopTab === 'community' && (
          <button
            onClick={() => setActiveTab('community_feed')}
            className="flex items-center gap-2 rounded-xl bg-[#5B4CFF] px-3.5 py-2 text-xs font-bold text-white hover:bg-[#5B4CFF]/90 transition-all"
          >
            <Plus className="h-3.5 w-3.5" />
            <span>Start Discussion</span>
          </button>
        )}

        {activeTopTab === 'home' && (
          <button
            onClick={() => setActiveTab('nova_coach')}
            className="flex items-center gap-2 rounded-xl border border-[#5B4CFF]/30 bg-[#111827] px-3.5 py-2 text-xs font-bold text-slate-200 hover:border-[#5B4CFF] transition-all"
          >
            <Bot className="h-3.5 w-3.5 text-[#FFB800]" />
            <span>Ask Nova AI</span>
          </button>
        )}

        {activeTopTab === 'settings' && (
          <button
            onClick={() => alert('Settings saved successfully!')}
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#5B4CFF] to-[#8B5CF6] px-3.5 py-2 text-xs font-bold text-white shadow-md hover:brightness-110 transition-all"
          >
            <Settings className="h-3.5 w-3.5" />
            <span>Save Workspace</span>
          </button>
        )}
      </div>
    </div>
  );
};
