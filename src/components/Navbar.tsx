import React, { useState } from 'react';
import {
  Sparkles,
  Search,
  Bell,
  Plus,
  HelpCircle,
  CheckCircle2,
  TrendingUp,
  FileText,
  Briefcase,
  ChevronDown,
  UserCheck,
  Building2,
  Calendar
} from 'lucide-react';
import { UserRole, NotificationItem } from '../types';

interface NavbarProps {
  userRole: UserRole;
  setUserRole: (role: UserRole) => void;
  onOpenSearch: () => void;
  onOpenShortcuts: () => void;
  onOpenOnboarding: () => void;
  onQuickAction: (action: string) => void;
  notifications: NotificationItem[];
  onMarkNotificationsRead: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  userRole,
  setUserRole,
  onOpenSearch = () => {},
  onOpenShortcuts = () => {},
  onOpenOnboarding = () => {},
  onQuickAction = (_action?: string) => {},
  notifications = [],
  onMarkNotificationsRead = () => {},
}) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showCreateMenu, setShowCreateMenu] = useState(false);
  const [showRoleMenu, setShowRoleMenu] = useState(false);

  const unreadCount = (notifications || []).filter((n) => !n.read).length;

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-[#0B1020]/90 backdrop-blur-md px-4 py-3 text-slate-100 transition-all">
      <div className="mx-auto flex max-w-[1800px] items-center justify-between gap-4">
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#5B4CFF] via-[#8B5CF6] to-[#FFB800] p-[1px] shadow-lg shadow-[#5B4CFF]/20">
            <div className="flex h-full w-full items-center justify-center rounded-[11px] bg-[#0B1020]">
              <Sparkles className="h-5 w-5 text-[#FFB800] animate-pulse" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="bg-gradient-to-r from-white via-slate-100 to-[#94A3B8] bg-clip-text text-lg font-extrabold tracking-tight text-transparent">
                STORYVERSE
              </span>
              <span className="rounded-md bg-[#5B4CFF]/20 px-1.5 py-0.5 text-[10px] font-bold tracking-wide text-[#8B5CF6] border border-[#5B4CFF]/30">
                AI 3.6
              </span>
            </div>
            <p className="hidden sm:block text-[10px] font-medium text-slate-400">
              The AI Content Intelligence & Creator Economy OS
            </p>
          </div>
        </div>

        {/* Global Search & Role Switcher */}
        <div className="flex flex-1 max-w-xl items-center gap-3">
          {/* Cmd + K Search Trigger */}
          <button
            onClick={onOpenSearch}
            className="group flex flex-1 items-center gap-2 rounded-xl border border-slate-800 bg-[#111827]/80 px-3.5 py-2 text-xs text-slate-400 hover:border-[#5B4CFF]/50 hover:bg-[#111827] transition-all shadow-inner"
          >
            <Search className="h-4 w-4 text-slate-400 group-hover:text-[#8B5CF6] transition-colors" />
            <span className="hidden sm:inline">Search trends, scripts, creators, campaigns...</span>
            <span className="sm:hidden">Search...</span>
            <kbd className="ml-auto hidden md:inline-flex items-center gap-0.5 rounded border border-slate-700 bg-slate-800 px-1.5 py-0.5 text-[10px] font-mono text-slate-300">
              ⌘K
            </kbd>
          </button>

          {/* Role Selector Pill */}
          <div className="relative">
            <button
              onClick={() => setShowRoleMenu(!showRoleMenu)}
              className="flex items-center gap-2 rounded-xl border border-[#5B4CFF]/30 bg-[#5B4CFF]/10 px-3 py-2 text-xs font-semibold text-[#8B5CF6] hover:bg-[#5B4CFF]/20 transition-all"
            >
              {userRole === 'creator' && <UserCheck className="h-3.5 w-3.5 text-[#FFB800]" />}
              {userRole === 'brand' && <Building2 className="h-3.5 w-3.5 text-[#22C55E]" />}
              {userRole === 'agency_event' && <Calendar className="h-3.5 w-3.5 text-[#8B5CF6]" />}
              <span className="capitalize hidden md:inline">
                {userRole === 'creator' ? 'Creator OS' : userRole === 'brand' ? 'Brand / Business' : 'Event Organizer'}
              </span>
              <ChevronDown className="h-3 w-3 opacity-70" />
            </button>

            {showRoleMenu && (
              <div className="absolute right-0 mt-2 w-56 rounded-xl border border-slate-800 bg-[#111827] p-1.5 shadow-2xl z-50 animate-in fade-in zoom-in-95">
                <div className="px-2 py-1 text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                  Switch Workspace Mode
                </div>
                <button
                  onClick={() => {
                    setUserRole('creator');
                    setShowRoleMenu(false);
                  }}
                  className={`flex w-full items-center justify-between rounded-lg px-2.5 py-2 text-xs font-medium transition-all ${
                    userRole === 'creator'
                      ? 'bg-[#5B4CFF] text-white font-semibold'
                      : 'text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <UserCheck className="h-3.5 w-3.5" />
                    <span>Creator OS</span>
                  </div>
                  {userRole === 'creator' && <CheckCircle2 className="h-3.5 w-3.5 text-[#FFB800]" />}
                </button>
                <button
                  onClick={() => {
                    setUserRole('brand');
                    setShowRoleMenu(false);
                  }}
                  className={`flex w-full items-center justify-between rounded-lg px-2.5 py-2 text-xs font-medium transition-all ${
                    userRole === 'brand'
                      ? 'bg-[#5B4CFF] text-white font-semibold'
                      : 'text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Building2 className="h-3.5 w-3.5" />
                    <span>Brand / Business</span>
                  </div>
                  {userRole === 'brand' && <CheckCircle2 className="h-3.5 w-3.5 text-[#FFB800]" />}
                </button>
                <button
                  onClick={() => {
                    setUserRole('agency_event');
                    setShowRoleMenu(false);
                  }}
                  className={`flex w-full items-center justify-between rounded-lg px-2.5 py-2 text-xs font-medium transition-all ${
                    userRole === 'agency_event'
                      ? 'bg-[#5B4CFF] text-white font-semibold'
                      : 'text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>Event & Agency Hub</span>
                  </div>
                  {userRole === 'agency_event' && <CheckCircle2 className="h-3.5 w-3.5 text-[#FFB800]" />}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Right Actions & Utilities */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick + Create Menu */}
          <div className="relative">
            <button
              onClick={() => setShowCreateMenu(!showCreateMenu)}
              className="flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-[#5B4CFF] to-[#8B5CF6] px-3.5 py-2 text-xs font-bold text-white shadow-lg shadow-[#5B4CFF]/25 hover:opacity-90 active:scale-95 transition-all"
            >
              <Plus className="h-4 w-4" />
              <span className="hidden sm:inline">Create</span>
            </button>

            {showCreateMenu && (
              <div className="absolute right-0 mt-2 w-52 rounded-xl border border-slate-800 bg-[#111827] p-1.5 shadow-2xl z-50">
                <button
                  onClick={() => {
                    onQuickAction('story_builder');
                    setShowCreateMenu(false);
                  }}
                  className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-xs text-slate-200 hover:bg-[#5B4CFF]/20 hover:text-white transition-all"
                >
                  <FileText className="h-4 w-4 text-[#FFB800]" />
                  <div className="text-left">
                    <div className="font-semibold">Generate Script</div>
                    <div className="text-[10px] text-slate-400">Story Builder AI</div>
                  </div>
                </button>

                <button
                  onClick={() => {
                    onQuickAction('trend_hunter');
                    setShowCreateMenu(false);
                  }}
                  className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-xs text-slate-200 hover:bg-[#5B4CFF]/20 hover:text-white transition-all"
                >
                  <TrendingUp className="h-4 w-4 text-[#22C55E]" />
                  <div className="text-left">
                    <div className="font-semibold">Hunt Viral Trend</div>
                    <div className="text-[10px] text-slate-400">AI Trend Engine</div>
                  </div>
                </button>

                <button
                  onClick={() => {
                    onQuickAction('storyverse_connect');
                    setShowCreateMenu(false);
                  }}
                  className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-xs text-slate-200 hover:bg-[#5B4CFF]/20 hover:text-white transition-all"
                >
                  <Briefcase className="h-4 w-4 text-[#8B5CF6]" />
                  <div className="text-left">
                    <div className="font-semibold">Post Brand Campaign</div>
                    <div className="text-[10px] text-slate-400">StoryVerse Connect</div>
                  </div>
                </button>
              </div>
            )}
          </div>

          {/* Notifications Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-slate-800 bg-[#111827] text-slate-300 hover:border-slate-700 hover:text-white transition-all"
              title="Notifications"
            >
              <Bell className="h-4 w-4" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#FFB800] text-[9px] font-bold text-black ring-2 ring-[#0B1020]">
                  {unreadCount}
                </span>
              )}
            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 rounded-xl border border-slate-800 bg-[#111827] p-3 shadow-2xl z-50">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <span className="text-xs font-bold text-slate-200">Notifications</span>
                  {unreadCount > 0 && (
                    <button
                      onClick={onMarkNotificationsRead}
                      className="text-[10px] font-semibold text-[#8B5CF6] hover:underline"
                    >
                      Mark all as read
                    </button>
                  )}
                </div>

                <div className="mt-2 max-h-64 overflow-y-auto space-y-2">
                  {(notifications || []).map((n) => (
                    <div
                      key={n.id}
                      className={`rounded-lg p-2.5 text-xs transition-all border ${
                        n.read ? 'bg-slate-900/40 border-slate-800/60 text-slate-400' : 'bg-[#5B4CFF]/10 border-[#5B4CFF]/30 text-slate-200'
                      }`}
                    >
                      <div className="flex items-center justify-between font-bold text-xs mb-0.5">
                        <span className="text-white">{n.title}</span>
                        <span className="text-[9px] text-slate-400">{n.time}</span>
                      </div>
                      <p className="text-[11px] leading-relaxed text-slate-300">{n.message}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Shortcuts Info */}
          <button
            onClick={onOpenShortcuts}
            className="hidden sm:flex h-9 w-9 items-center justify-center rounded-xl border border-slate-800 bg-[#111827] text-slate-400 hover:border-slate-700 hover:text-white transition-all"
            title="Keyboard Shortcuts (?)"
          >
            <HelpCircle className="h-4 w-4" />
          </button>

          {/* User Profile Badge */}
          <button
            onClick={onOpenOnboarding}
            className="flex items-center gap-2 rounded-xl border border-slate-800 bg-[#111827] p-1.5 pr-3 hover:border-slate-700 transition-all"
          >
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
              alt="User"
              className="h-7 w-7 rounded-lg object-cover ring-1 ring-[#5B4CFF]"
            />
            <div className="hidden lg:block text-left">
              <div className="text-xs font-bold text-white leading-none">Aarav S.</div>
              <div className="text-[9px] text-[#22C55E] font-medium">Reputation: 98/100</div>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};
