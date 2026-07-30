import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  User,
  Building,
  Bell,
  CreditCard,
  ShieldCheck,
  Share2,
  Key,
  Palette,
  CheckCircle2,
  Copy,
  Eye,
  EyeOff,
  Sparkles,
  Save
} from 'lucide-react';

export const SettingsView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    'profile' | 'workspace' | 'notifications' | 'billing' | 'security' | 'integrations' | 'apikeys' | 'theme'
  >('profile');

  // Interactive Form State
  const [name, setName] = useState('Alex Rivera');
  const [handle, setHandle] = useState('@alex_storyverse');
  const [bio, setBio] = useState('Tech creator exploring AI workflows, developer tooling, and high-retention video production.');
  const [apiKey, setApiKey] = useState('sv_live_992837194827103948291');
  const [showKey, setShowKey] = useState(false);
  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleCopyKey = () => {
    navigator.clipboard.writeText(apiKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Sub-navigation tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar border-b border-slate-800 pb-3">
        {[
          { id: 'profile', label: 'Profile', icon: User },
          { id: 'workspace', label: 'Workspace', icon: Building },
          { id: 'notifications', label: 'Notifications', icon: Bell },
          { id: 'billing', label: 'Billing & Plan', icon: CreditCard },
          { id: 'security', label: 'Security', icon: ShieldCheck },
          { id: 'integrations', label: 'Integrations', icon: Share2 },
          { id: 'apikeys', label: 'API Keys', icon: Key },
          { id: 'theme', label: 'Theme & UI', icon: Palette },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
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

      {/* Save Toast Notice */}
      {saved && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 rounded-xl bg-[#22C55E]/20 border border-[#22C55E]/40 px-4 py-3 text-xs font-bold text-[#22C55E]"
        >
          <CheckCircle2 className="h-4 w-4" />
          <span>Workspace configuration & preferences updated successfully.</span>
        </motion.div>
      )}

      {/* Profile Settings */}
      {activeTab === 'profile' && (
        <div className="rounded-2xl border border-slate-800 bg-[#111827] p-6 shadow-lg space-y-6 max-w-3xl">
          <div className="flex items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80"
              alt="Avatar"
              className="h-16 w-16 rounded-2xl object-cover ring-2 ring-[#5B4CFF]"
            />
            <div>
              <button className="rounded-xl bg-[#5B4CFF]/20 border border-[#5B4CFF]/40 px-3.5 py-2 text-xs font-bold text-[#8B5CF6] hover:bg-[#5B4CFF] hover:text-white transition-all">
                Change Profile Photo
              </button>
              <p className="text-[11px] text-slate-500 mt-1">Recommended 400x400 PNG/JPG</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300">Display Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-xl border border-slate-800 bg-[#0B1020] px-3.5 py-2.5 text-xs text-white focus:border-[#5B4CFF] focus:outline-hidden"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300">Handle / Username</label>
              <input
                type="text"
                value={handle}
                onChange={(e) => setHandle(e.target.value)}
                className="w-full rounded-xl border border-slate-800 bg-[#0B1020] px-3.5 py-2.5 text-xs text-white focus:border-[#5B4CFF] focus:outline-hidden"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-300">Creator Bio</label>
            <textarea
              rows={3}
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="w-full rounded-xl border border-slate-800 bg-[#0B1020] p-3.5 text-xs text-white focus:border-[#5B4CFF] focus:outline-hidden"
            />
          </div>

          <button
            onClick={handleSave}
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#5B4CFF] to-[#8B5CF6] px-5 py-2.5 text-xs font-bold text-white shadow-md hover:brightness-110 transition-all"
          >
            <Save className="h-4 w-4" />
            <span>Save Profile</span>
          </button>
        </div>
      )}

      {/* API Keys */}
      {activeTab === 'apikeys' && (
        <div className="rounded-2xl border border-slate-800 bg-[#111827] p-6 shadow-lg space-y-5 max-w-3xl">
          <div>
            <h3 className="text-sm font-bold text-white">StoryVerse Developer API Key</h3>
            <p className="text-xs text-slate-400">Use this key for headless script generation, webhook triggers, and external analytics.</p>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-300">Live API Secret Key</label>
            <div className="flex items-center gap-2">
              <div className="flex-1 flex items-center justify-between rounded-xl border border-slate-800 bg-[#0B1020] px-3.5 py-2.5 text-xs font-mono text-slate-200">
                <span>{showKey ? apiKey : '••••••••••••••••••••••••••••••••••••'}</span>
                <button onClick={() => setShowKey(!showKey)} className="text-slate-400 hover:text-white">
                  {showKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>

              <button
                onClick={handleCopyKey}
                className="flex items-center gap-1.5 rounded-xl border border-slate-800 bg-[#0B1020] px-4 py-2.5 text-xs font-bold text-slate-200 hover:border-[#5B4CFF] transition-all"
              >
                {copied ? <CheckCircle2 className="h-4 w-4 text-[#22C55E]" /> : <Copy className="h-4 w-4" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Billing */}
      {activeTab === 'billing' && (
        <div className="rounded-2xl border border-slate-800 bg-[#111827] p-6 shadow-lg space-y-6 max-w-3xl">
          <div className="flex items-center justify-between">
            <div>
              <span className="rounded-full bg-[#5B4CFF]/20 px-3 py-1 text-xs font-bold text-[#8B5CF6]">
                CURRENT PLAN: STORYVERSE PRO
              </span>
              <h3 className="text-lg font-black text-white mt-2">$49 / month</h3>
              <p className="text-xs text-slate-400">Unlimited script generation, 10x retention simulations, and full marketplace access.</p>
            </div>
            <button className="rounded-xl bg-gradient-to-r from-[#5B4CFF] to-[#8B5CF6] px-4 py-2.5 text-xs font-bold text-white shadow-md hover:brightness-110 transition-all">
              Manage Subscription
            </button>
          </div>
        </div>
      )}

      {/* Fallback for remaining settings tabs */}
      {['workspace', 'notifications', 'security', 'integrations', 'theme'].includes(activeTab) && (
        <div className="rounded-2xl border border-slate-800 bg-[#111827] p-8 text-center space-y-3 max-w-2xl">
          <Building className="h-8 w-8 text-[#5B4CFF] mx-auto" />
          <h3 className="text-base font-bold text-white capitalize">{activeTab} Settings</h3>
          <p className="text-xs text-slate-400">
            Configure permissions, theme preferences, and multi-platform authentication tokens.
          </p>
        </div>
      )}
    </div>
  );
};
