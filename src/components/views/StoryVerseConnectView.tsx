import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Briefcase,
  Users,
  Sparkles,
  Search,
  Filter,
  DollarSign,
  Star,
  CheckCircle2,
  ShieldCheck,
  Send,
  MessageSquare,
  FileText,
  Clock,
  Building2,
  Award,
  ChevronRight,
  Plus,
  Wand2,
  Lock
} from 'lucide-react';
import { Campaign, CreatorProfile, UserRole } from '../../types';

interface StoryVerseConnectViewProps {
  userRole: UserRole;
  campaigns: Campaign[];
  setCampaigns: React.Dispatch<React.SetStateAction<Campaign[]>>;
  creators: CreatorProfile[];
}

export const StoryVerseConnectView: React.FC<StoryVerseConnectViewProps> = ({
  userRole,
  campaigns = [],
  setCampaigns,
  creators = [],
}) => {
  const [activeTab, setActiveTab] = useState<'campaigns' | 'creators' | 'planner' | 'workspace'>('campaigns');
  const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>((campaigns && campaigns[0]) || null);
  const [selectedCreator, setSelectedCreator] = useState<CreatorProfile | null>((creators && creators[0]) || null);

  // Campaign Planner State
  const [plannerBrief, setPlannerBrief] = useState<string>('Launch campaign for our AI coding developer tool. We want high-retention YouTube & Reels integrations.');
  const [plannerBudget, setPlannerBudget] = useState<number>(10000);
  const [plannerCategory, setPlannerCategory] = useState<string>('Developer Tools & AI');
  const [loadingPlanner, setLoadingPlanner] = useState<boolean>(false);
  const [plannedCampaignResult, setPlannedCampaignResult] = useState<any>(null);

  // Apply Modal
  const [showApplyModal, setShowApplyModal] = useState<boolean>(false);
  const [pitchText, setPitchText] = useState<string>('');
  const [appliedSuccess, setAppliedSuccess] = useState<boolean>(false);

  const handleRunPlanner = async () => {
    if (!plannerBrief) return;
    setLoadingPlanner(true);
    try {
      const res = await fetch('/api/gemini/campaign-planner', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          campaignBrief: plannerBrief,
          targetBudget: plannerBudget,
          category: plannerCategory,
        }),
      });
      if (res.ok) {
        const data = await res.json();
        if (data && data.strategy) {
          setPlannedCampaignResult(data);
          setLoadingPlanner(false);
          return;
        }
      }
      throw new Error('API route unavailable');
    } catch (_err) {
      // Dynamic fallback campaign planner
      setPlannedCampaignResult({
        strategy: `Targeted 30-day creator campaign for ${plannerCategory}`,
        recommendedCreatorCount: Math.max(2, Math.round(plannerBudget / 3500)),
        estimatedImpressions: `${Math.round((plannerBudget / 1000) * 85)}K - ${Math.round((plannerBudget / 1000) * 160)}K`,
        estimatedConversions: `${Math.round((plannerBudget / 1000) * 12)} - ${Math.round((plannerBudget / 1000) * 35)} Signups`,
        suggestedBudgetAllocation: [
          { tier: 'Tier 1 Macro Creator (100K-500K)', percentage: '50%', purpose: 'Hero video integration + YouTube dedicated review' },
          { tier: 'Tier 2 Micro Creators (20K-80K)', percentage: '35%', purpose: 'High engagement Reels/Shorts native content' },
          { tier: 'Usage Rights & Whitelisting', percentage: '15%', purpose: 'Meta/TikTok paid ad spark boosting' }
        ],
        milestones: [
          'Week 1: Creator Onboarding & Briefing',
          'Week 2: Script Review & Asset Approval',
          'Week 3: Multi-Platform Publishing Wave',
          'Week 4: Performance Analytics & ROAS Audit'
        ]
      });
    } finally {
      setLoadingPlanner(false);
    }
  };

  const handleApplyToCampaign = () => {
    if (!selectedCampaign) return;
    setAppliedSuccess(true);
    setTimeout(() => {
      setAppliedSuccess(false);
      setShowApplyModal(false);
      setPitchText('');
    }, 2000);
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-[#8B5CF6] uppercase tracking-wider mb-1">
            <Briefcase className="h-4 w-4 text-[#FFB800]" />
            <span>NEW • CREATOR ECONOMY MARKETPLACE</span>
          </div>
          <h1 className="text-2xl font-black text-white tracking-tight">StoryVerse Connect</h1>
          <p className="text-xs text-slate-400 mt-1">
            Directly connect Creators with Brands, Businesses, Agencies, and Event Organizers using AI Brand Match & Escrow Contracts.
          </p>
        </div>

        {/* Navigation Mode Selector */}
        <div className="flex items-center gap-1.5 rounded-2xl border border-slate-800 bg-[#111827] p-1">
          <button
            onClick={() => setActiveTab('campaigns')}
            className={`rounded-xl px-3.5 py-2 text-xs font-bold transition-all ${
              activeTab === 'campaigns' ? 'bg-[#5B4CFF] text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            🎯 Brand Campaigns ({(campaigns || []).length})
          </button>
          <button
            onClick={() => setActiveTab('creators')}
            className={`rounded-xl px-3.5 py-2 text-xs font-bold transition-all ${
              activeTab === 'creators' ? 'bg-[#5B4CFF] text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            Verified Creators ({(creators || []).length})
          </button>
          <button
            onClick={() => setActiveTab('planner')}
            className={`rounded-xl px-3.5 py-2 text-xs font-bold transition-all ${
              activeTab === 'planner' ? 'bg-[#5B4CFF] text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            🤖 AI Campaign Planner
          </button>
          <button
            onClick={() => setActiveTab('workspace')}
            className={`rounded-xl px-3.5 py-2 text-xs font-bold transition-all ${
              activeTab === 'workspace' ? 'bg-[#5B4CFF] text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            💬 Deal Workspace
          </button>
        </div>
      </div>

      {/* 1. CAMPAIGNS TAB */}
      {activeTab === 'campaigns' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Campaign List Column (1 Col) */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Active Brand Opportunities</h3>

            {campaigns.map((camp) => (
              <div
                key={camp.id}
                onClick={() => setSelectedCampaign(camp)}
                className={`rounded-2xl border p-4 cursor-pointer transition-all ${
                  selectedCampaign?.id === camp.id
                    ? 'border-[#5B4CFF] bg-[#5B4CFF]/10 shadow-lg'
                    : 'border-slate-800 bg-[#111827]/80 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{camp.brandLogo}</span>
                    <span className="text-xs font-bold text-white">{camp.brandName}</span>
                  </div>
                  {camp.matchScore && (
                    <span className="rounded-full bg-[#5B4CFF]/20 border border-[#5B4CFF]/40 px-2 py-0.5 text-[10px] font-bold text-[#8B5CF6]">
                      {camp.matchScore}% AI Match
                    </span>
                  )}
                </div>

                <h4 className="text-xs font-bold text-slate-100 line-clamp-1">{camp.title}</h4>

                <div className="flex items-center justify-between mt-3 text-xs">
                  <span className="font-black text-[#22C55E]">{camp.budget}</span>
                  <span className="text-[10px] text-slate-400">{camp.applicantsCount} Applicants</span>
                </div>
              </div>
            ))}
          </div>

          {/* Selected Campaign Detailed Brief (2 Cols) */}
          {selectedCampaign && (
            <div className="lg:col-span-2 rounded-3xl border border-slate-800 bg-[#111827]/90 p-6 shadow-xl space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-800 text-2xl border border-slate-700">
                    {selectedCampaign.brandLogo}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-base font-extrabold text-white">{selectedCampaign.brandName}</h2>
                      <span className="rounded bg-[#22C55E]/15 px-2 py-0.5 text-[10px] font-bold text-[#22C55E]">
                        Verified Sponsor
                      </span>
                    </div>
                    <h3 className="text-sm text-slate-300 font-semibold">{selectedCampaign.title}</h3>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-xl font-black text-[#22C55E]">{selectedCampaign.budget}</div>
                  <div className="text-[10px] text-slate-400">Deadline: {selectedCampaign.deadline}</div>
                </div>
              </div>

              {/* Description */}
              <div>
                <span className="text-[10px] font-bold uppercase text-slate-400">Campaign Brief & Goal</span>
                <p className="text-xs text-slate-200 leading-relaxed mt-1">{selectedCampaign.description}</p>
              </div>

              {/* Deliverables */}
              <div>
                <span className="text-[10px] font-bold uppercase text-slate-400">Required Deliverables</span>
                <div className="flex flex-wrap gap-2 mt-1.5">
                  {selectedCampaign.deliverables.map((del, i) => (
                    <span key={i} className="rounded-xl border border-slate-800 bg-[#0B1020] px-3 py-1.5 text-xs text-slate-200 font-medium">
                      📦 {del}
                    </span>
                  ))}
                </div>
              </div>

              {/* Target Audience & Perks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="rounded-2xl border border-slate-800 bg-[#0B1020] p-4 text-xs space-y-1">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Target Audience Profile</span>
                  <p className="text-slate-200 font-semibold">{selectedCampaign.targetAudience}</p>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-[#0B1020] p-4 text-xs space-y-1">
                  <span className="text-[10px] font-bold text-[#FFB800] uppercase">Sponsorship Perks</span>
                  <ul className="text-slate-200 space-y-1 list-disc pl-4 text-[11px]">
                    {selectedCampaign.perks?.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <div className="text-xs text-slate-400">
                  ⚡ Escrow Payment Protection Enabled by StoryVerse
                </div>
                <button
                  onClick={() => setShowApplyModal(true)}
                  className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#5B4CFF] to-[#8B5CF6] px-6 py-2.5 text-xs font-extrabold text-white shadow-lg hover:opacity-90 transition-all"
                >
                  <Send className="h-4 w-4" />
                  <span>Submit Pitch Application</span>
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* 2. CREATORS TAB */}
      {activeTab === 'creators' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {creators.map((c) => (
            <div key={c.id} className="rounded-3xl border border-slate-800 bg-[#111827]/90 p-6 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={c.avatar} alt={c.name} className="h-12 w-12 rounded-2xl object-cover ring-2 ring-[#5B4CFF]" />
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-bold text-white">{c.name}</h3>
                      {c.verified && <CheckCircle2 className="h-4 w-4 text-[#22C55E]" />}
                    </div>
                    <span className="text-xs text-[#8B5CF6] font-semibold">{c.handle}</span>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-xs font-black text-[#FFB800]">⭐ {c.rating} ({c.reviewsCount})</div>
                  <div className="text-[10px] text-slate-400">Reputation: {c.reputationScore}/100</div>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">{c.bio}</p>

              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className="rounded-xl border border-slate-800 bg-[#0B1020] p-2">
                  <div className="text-[10px] text-slate-400">Followers</div>
                  <div className="font-bold text-white">{c.followersCount}</div>
                </div>
                <div className="rounded-xl border border-slate-800 bg-[#0B1020] p-2">
                  <div className="text-[10px] text-slate-400">Engagement</div>
                  <div className="font-bold text-[#22C55E]">{c.engagementRate}%</div>
                </div>
                <div className="rounded-xl border border-slate-800 bg-[#0B1020] p-2">
                  <div className="text-[10px] text-slate-400">Pricing</div>
                  <div className="font-bold text-[#FFB800]">{c.pricing}</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-1">
                {c.categories.map((cat) => (
                  <span key={cat} className="rounded bg-slate-800 px-2 py-0.5 text-[10px] font-bold text-slate-300">
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 3. AI CAMPAIGN PLANNER TAB */}
      {activeTab === 'planner' && (
        <div className="rounded-3xl border border-slate-800 bg-[#111827]/90 p-6 shadow-xl space-y-5">
          <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
            <Wand2 className="h-5 w-5 text-[#FFB800]" />
            <h3 className="text-base font-bold text-white">AI Campaign Strategy Generator (For Brands)</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2 space-y-1.5">
              <label className="text-xs font-bold text-slate-300">Campaign Brief & Vision</label>
              <textarea
                rows={3}
                value={plannerBrief}
                onChange={(e) => setPlannerBrief(e.target.value)}
                className="w-full rounded-2xl border border-slate-800 bg-[#0B1020] p-3 text-xs text-white focus:border-[#5B4CFF] focus:outline-none"
              />
            </div>

            <div className="space-y-3">
              <div>
                <label className="text-xs font-bold text-slate-300">Target Budget ($)</label>
                <input
                  type="number"
                  value={plannerBudget}
                  onChange={(e) => setPlannerBudget(Number(e.target.value))}
                  className="w-full rounded-xl border border-slate-800 bg-[#0B1020] px-3 py-2 text-xs text-white focus:border-[#5B4CFF] focus:outline-none"
                />
              </div>

              <button
                onClick={handleRunPlanner}
                disabled={loadingPlanner}
                className="w-full rounded-xl bg-[#5B4CFF] py-3 text-xs font-extrabold text-white hover:bg-[#8B5CF6] transition-all disabled:opacity-50"
              >
                {loadingPlanner ? 'Architecting Campaign Strategy...' : 'Generate AI Campaign Plan'}
              </button>
            </div>
          </div>

          {plannedCampaignResult && (
            <div className="rounded-2xl border border-slate-800 bg-[#0B1020] p-5 space-y-4">
              <h4 className="text-sm font-bold text-[#FFB800]">AI Generated Campaign Strategy</h4>
              <p className="text-xs text-slate-200 leading-relaxed">{plannedCampaignResult.strategy}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Target Deliverables</span>
                  {plannedCampaignResult.deliverables?.map((d: string, i: number) => (
                    <div key={i} className="text-xs text-slate-300">
                      • {d}
                    </div>
                  ))}
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Target KPIs</span>
                  {plannedCampaignResult.kpis?.map((k: any, i: number) => (
                    <div key={i} className="text-xs text-slate-300 flex justify-between">
                      <span>{k.metric}:</span>
                      <strong className="text-[#22C55E]">{k.target}</strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* 4. DEAL WORKSPACE TAB */}
      {activeTab === 'workspace' && (
        <div className="rounded-3xl border border-slate-800 bg-[#111827]/90 p-6 shadow-xl space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h3 className="text-sm font-bold text-white">Active Deal Contracts & Deliverables Workspace</h3>
            <span className="text-xs text-[#22C55E] font-bold">🔒 Escrow Funds Secured ($2,500)</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-slate-800 bg-[#0B1020] p-4 space-y-2">
              <span className="text-xs font-bold text-slate-300">Contract #CT-2026-8842</span>
              <p className="text-xs text-slate-400">StackFlow AI Sponsorship Agreement • Signed Jul 28</p>
              <div className="pt-2 text-xs text-[#22C55E] font-bold">Status: Deliverables Submitted, Awaiting Brand Approval</div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-[#0B1020] p-4 space-y-2">
              <span className="text-xs font-bold text-slate-300">Milestone Progress</span>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div className="bg-[#5B4CFF] h-full w-[75%]" />
              </div>
              <div className="text-[10px] text-slate-400 flex justify-between">
                <span>Script Approved</span>
                <span>Video Submitted</span>
                <span>Payment Escrow</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Pitch Modal */}
      {showApplyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="w-full max-w-lg rounded-3xl border border-slate-800 bg-[#111827] p-6 shadow-2xl space-y-4">
            <h3 className="text-base font-bold text-white">Apply for {selectedCampaign?.brandName} Campaign</h3>

            {appliedSuccess ? (
              <div className="py-8 text-center text-xs font-bold text-[#22C55E] space-y-2">
                <CheckCircle2 className="h-10 w-10 mx-auto text-[#22C55E] animate-bounce" />
                <p>Pitch Application Submitted Successfully!</p>
              </div>
            ) : (
              <>
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Your Creative Pitch & Video Angle</label>
                  <textarea
                    rows={4}
                    value={pitchText}
                    onChange={(e) => setPitchText(e.target.value)}
                    placeholder="Briefly describe how you will feature StackFlow AI in your upcoming video..."
                    className="w-full rounded-2xl border border-slate-800 bg-[#0B1020] p-3 text-xs text-white focus:border-[#5B4CFF] focus:outline-none"
                  />
                </div>

                <div className="flex items-center justify-end gap-2 pt-2">
                  <button
                    onClick={() => setShowApplyModal(false)}
                    className="rounded-xl px-4 py-2 text-xs font-bold text-slate-400 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleApplyToCampaign}
                    className="rounded-xl bg-[#5B4CFF] px-5 py-2 text-xs font-bold text-white hover:bg-[#8B5CF6]"
                  >
                    Send Pitch
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
