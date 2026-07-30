import React from 'react';
import { motion } from 'motion/react';
import {
  Home,
  Clapperboard,
  BarChart3,
  Handshake,
  Target,
  Globe,
  GraduationCap,
  Settings,
} from 'lucide-react';
import { TopModule } from '../types';

interface TopNavProps {
  activeTopTab: TopModule;
  onSelectTopTab: (tab: TopModule) => void;
}

export const TOP_NAV_ITEMS: { id: TopModule; label: string; icon: React.ElementType; badge?: string }[] = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'studio', label: 'Creator Studio', icon: Clapperboard, badge: 'AI' },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  { id: 'marketplace', label: 'Marketplace', icon: Handshake, badge: 'Deals' },
  { id: 'campaigns', label: 'Campaigns', icon: Target },
  { id: 'community', label: 'Community', icon: Globe },
  { id: 'academy', label: 'Academy', icon: GraduationCap },
  { id: 'settings', label: 'Settings', icon: Settings },
];

export const TopNav: React.FC<TopNavProps> = ({ activeTopTab, onSelectTopTab }) => {
  return (
    <div className="sticky top-16 z-30 w-full border-b border-slate-800/80 bg-[#0B1020]/95 backdrop-blur-md px-4 py-1.5 transition-all select-none">
      <div className="mx-auto flex max-w-[1800px] items-center justify-between gap-2 overflow-x-auto no-scrollbar scroll-smooth">
        <nav className="flex items-center gap-1 sm:gap-2 py-0.5">
          {TOP_NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeTopTab === item.id;

            return (
              <button
                key={item.id}
                onClick={() => onSelectTopTab(item.id)}
                className={`relative flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-semibold transition-all whitespace-nowrap group ${
                  isActive
                    ? 'text-white font-bold'
                    : 'text-slate-400 hover:text-slate-100 hover:bg-[#111827]/60'
                }`}
              >
                {/* Active Background Pill with Framer Motion */}
                {isActive && (
                  <motion.div
                    layoutId="activeTopNavPill"
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#5B4CFF]/20 via-[#8B5CF6]/20 to-[#5B4CFF]/10 border border-[#5B4CFF]/40 shadow-sm shadow-[#5B4CFF]/10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}

                <Icon
                  className={`relative z-10 h-4 w-4 transition-transform group-hover:scale-110 ${
                    isActive ? 'text-[#FFB800]' : 'text-slate-400 group-hover:text-[#8B5CF6]'
                  }`}
                />
                <span className="relative z-10 tracking-tight">{item.label}</span>

                {item.badge && (
                  <span
                    className={`relative z-10 rounded-full px-1.5 py-0.2 text-[9px] font-bold tracking-wide uppercase ${
                      isActive
                        ? 'bg-[#5B4CFF] text-white shadow-xs'
                        : 'bg-slate-800 text-slate-400 group-hover:bg-[#5B4CFF]/20 group-hover:text-[#8B5CF6]'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}

                {/* Subtle active underline indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeTopNavUnderline"
                    className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-gradient-to-r from-[#5B4CFF] via-[#FFB800] to-[#8B5CF6]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
};
