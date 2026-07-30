import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { TopNav } from './components/TopNav';
import { PageHeader } from './components/PageHeader';
import { Sidebar } from './components/Sidebar';
import { DashboardView } from './components/views/DashboardView';
import { TrendHunterView } from './components/views/TrendHunterView';
import { StoryBuilderView } from './components/views/StoryBuilderView';
import { MultiPlatformView } from './components/views/MultiPlatformView';
import { ThumbnailStudioView } from './components/views/ThumbnailStudioView';
import { VideoPlannerView } from './components/views/VideoPlannerView';
import { EngagementPredictorView } from './components/views/EngagementPredictorView';
import { CreatorWorkspaceView } from './components/views/CreatorWorkspaceView';
import { NovaCoachView } from './components/views/NovaCoachView';
import { AudienceTwinView } from './components/views/AudienceTwinView';
import { AnalyticsView } from './components/views/AnalyticsView';
import { StoryVerseConnectView } from './components/views/StoryVerseConnectView';
import { CreatorAcademyView } from './components/views/CreatorAcademyView';
import { CommunityView } from './components/views/CommunityView';
import { CampaignsView } from './components/views/CampaignsView';
import { SettingsView } from './components/views/SettingsView';

import {
  INITIAL_TRENDS,
  INITIAL_PROJECTS,
  INITIAL_CAMPAIGNS,
  INITIAL_CREATORS,
  INITIAL_COURSES,
  INITIAL_NOTIFICATIONS,
} from './data/mockData';
import { NavigationTab, UserRole, TopModule, TrendItem, WorkspaceProject, Campaign, NotificationItem } from './types';

const TAB_TO_TOP_MODULE: Record<string, TopModule> = {
  dashboard: 'home',
  trend_hunter: 'home',
  nova_coach: 'home',
  story_builder: 'studio',
  thumbnail_studio: 'studio',
  video_planner: 'studio',
  multi_platform: 'studio',
  creator_workspace: 'studio',
  script_generator: 'studio',
  analytics: 'analytics',
  engagement_predictor: 'analytics',
  audience_twin: 'analytics',
  storyverse_connect: 'marketplace',
  event_hub: 'marketplace',
  fraud_detection: 'marketplace',
  brand_challenges: 'community',
  community_feed: 'community',
  campaigns_manager: 'campaigns',
  creator_academy: 'academy',
  settings_general: 'settings',
};

const TOP_MODULE_DEFAULT_TAB: Record<TopModule, NavigationTab> = {
  home: 'dashboard',
  studio: 'story_builder',
  analytics: 'analytics',
  marketplace: 'storyverse_connect',
  campaigns: 'campaigns_manager',
  community: 'community_feed',
  academy: 'creator_academy',
  settings: 'settings_general',
};

export function App() {
  const [activeTab, setActiveTabState] = useState<NavigationTab>(() => {
    const savedTab = localStorage.getItem('storyverse_active_tab');
    return (savedTab as NavigationTab) || 'dashboard';
  });

  const [activeTopTab, setActiveTopTab] = useState<TopModule>(() => {
    const savedTop = localStorage.getItem('storyverse_active_top_tab');
    if (savedTop) return savedTop as TopModule;
    return TAB_TO_TOP_MODULE[activeTab] || 'home';
  });

  const [userRole, setUserRole] = useState<UserRole>('creator');
  const [sidebarCollapsed, setSidebarCollapsed] = useState<boolean>(false);

  // Shared Data State
  const [trends, setTrends] = useState<TrendItem[]>(INITIAL_TRENDS);
  const [projects, setProjects] = useState<WorkspaceProject[]>(INITIAL_PROJECTS);
  const [campaigns, setCampaigns] = useState<Campaign[]>(INITIAL_CAMPAIGNS);
  const [notifications, setNotifications] = useState<NotificationItem[]>(INITIAL_NOTIFICATIONS);

  // Workflow Handlers for Cross-Module Data Transfers
  const [initialStoryTopic, setInitialStoryTopic] = useState<string>('');
  const [initialMultiScript, setInitialMultiScript] = useState<string>('');

  // Synchronized Navigation Handler
  const handleSelectTab = (tab: NavigationTab) => {
    setActiveTabState(tab);
    localStorage.setItem('storyverse_active_tab', tab);
    const mappedTop = TAB_TO_TOP_MODULE[tab] || 'home';
    setActiveTopTab(mappedTop);
    localStorage.setItem('storyverse_active_top_tab', mappedTop);
  };

  const handleSelectTopTab = (topTab: TopModule) => {
    setActiveTopTab(topTab);
    localStorage.setItem('storyverse_active_top_tab', topTab);
    const currentMapped = TAB_TO_TOP_MODULE[activeTab];
    if (currentMapped !== topTab) {
      const defaultSub = TOP_MODULE_DEFAULT_TAB[topTab] || 'dashboard';
      setActiveTabState(defaultSub);
      localStorage.setItem('storyverse_active_tab', defaultSub);
    }
  };

  const handleSendToStoryBuilder = (topic: string) => {
    setInitialStoryTopic(topic);
    handleSelectTab('story_builder');
  };

  const handleSendToMultiPlatform = (scriptText: string) => {
    setInitialMultiScript(scriptText);
    handleSelectTab('multi_platform');
  };

  const handleMarkNotificationsRead = () => {
    setNotifications((prev) => (prev || []).map((n) => ({ ...n, read: true })));
  };

  return (
    <div className="min-h-screen bg-[#0B1020] text-slate-100 font-sans selection:bg-[#5B4CFF] selection:text-white flex flex-col">
      {/* Global Top Navbar */}
      <Navbar
        userRole={userRole}
        setUserRole={setUserRole}
        notifications={notifications}
        onMarkNotificationsRead={handleMarkNotificationsRead}
        onOpenSearch={() => handleSelectTab('trend_hunter')}
        onOpenShortcuts={() => {}}
        onOpenOnboarding={() => handleSelectTab('nova_coach')}
        onQuickAction={(tab) => handleSelectTab(tab as NavigationTab)}
      />

      {/* Sticky Module Navigation Bar below Header */}
      <TopNav activeTopTab={activeTopTab} onSelectTopTab={handleSelectTopTab} />

      {/* Main Container Layout */}
      <div className="flex flex-1">
        {/* Left Sidebar */}
        <Sidebar
          activeTab={activeTab}
          setActiveTab={handleSelectTab}
          collapsed={sidebarCollapsed}
          setCollapsed={setSidebarCollapsed}
          userRole={userRole}
        />

        {/* Main Workspace View Content */}
        <main
          className={`flex-1 transition-all duration-300 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto w-full overflow-y-auto ${
            sidebarCollapsed ? 'lg:ml-20' : 'lg:ml-64'
          }`}
        >
          {/* Breadcrumbs & Contextual Page Header */}
          <PageHeader
            activeTopTab={activeTopTab}
            activeTab={activeTab}
            setActiveTab={handleSelectTab}
          />

          {/* Smooth Page Animated Switcher */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
            >
              {activeTab === 'dashboard' && (
                <DashboardView
                  setActiveTab={handleSelectTab}
                  campaigns={campaigns}
                  projects={projects}
                  userRole={userRole}
                />
              )}

              {activeTab === 'trend_hunter' && (
                <TrendHunterView
                  trends={trends}
                  setTrends={setTrends}
                  setActiveTab={handleSelectTab}
                  onSendToStoryBuilder={handleSendToStoryBuilder}
                />
              )}

              {activeTab === 'story_builder' && (
                <StoryBuilderView
                  initialTopic={initialStoryTopic}
                  setActiveTab={handleSelectTab}
                  onSendToMultiPlatform={handleSendToMultiPlatform}
                />
              )}

              {activeTab === 'multi_platform' && (
                <MultiPlatformView initialScript={initialMultiScript} />
              )}

              {activeTab === 'thumbnail_studio' && <ThumbnailStudioView />}

              {activeTab === 'video_planner' && <VideoPlannerView />}

              {activeTab === 'engagement_predictor' && <EngagementPredictorView />}

              {(activeTab === 'creator_workspace' || (activeTab as string) === 'workspace') && (
                <CreatorWorkspaceView projects={projects} setProjects={setProjects} />
              )}

              {activeTab === 'nova_coach' && <NovaCoachView />}

              {activeTab === 'audience_twin' && <AudienceTwinView />}

              {activeTab === 'analytics' && <AnalyticsView />}

              {(activeTab === 'storyverse_connect' || (activeTab as string) === 'connect_marketplace') && (
                <StoryVerseConnectView
                  userRole={userRole}
                  campaigns={campaigns}
                  setCampaigns={setCampaigns}
                  creators={INITIAL_CREATORS}
                />
              )}

              {activeTab === 'campaigns_manager' && <CampaignsView campaigns={campaigns} />}

              {activeTab === 'community_feed' && <CommunityView />}

              {(activeTab === 'creator_academy' || (activeTab as string) === 'academy') && (
                <CreatorAcademyView courses={INITIAL_COURSES} />
              )}

              {activeTab === 'event_hub' && (
                <StoryVerseConnectView
                  userRole={userRole}
                  campaigns={campaigns}
                  setCampaigns={setCampaigns}
                  creators={INITIAL_CREATORS}
                />
              )}

              {activeTab === 'brand_challenges' && <CommunityView />}

              {activeTab === 'fraud_detection' && <AnalyticsView />}

              {activeTab === 'settings_general' && <SettingsView />}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

export default App;
