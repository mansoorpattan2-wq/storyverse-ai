import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  MessageSquare,
  Users,
  Calendar,
  Trophy,
  Award,
  Globe,
  Bell,
  Sparkles,
  Send,
  Heart,
  MessageCircle,
  Share2,
  TrendingUp,
  UserPlus,
  CheckCircle2,
  Flame,
  Plus
} from 'lucide-react';

export const CommunityView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    'feed' | 'groups' | 'events' | 'challenges' | 'leaderboards' | 'networking' | 'announcements'
  >('feed');

  // Interactive Discussion State
  const [posts, setPosts] = useState([
    {
      id: 'post-1',
      author: 'Aria Chen',
      handle: '@ariachen_tech',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      role: 'Top 1% Tech Creator',
      badge: 'Verified Master',
      time: '25m ago',
      content: 'Testing Gemini 3.6 script structure for 60-second YouTube Shorts. The retention curve holds at 89% when placing kinetic captions right after the 3-second hook!',
      likes: 142,
      comments: 38,
      shares: 12,
      liked: false,
      tags: ['#YouTubeShorts', '#Scripting', '#StoryVerseAI'],
    },
    {
      id: 'post-2',
      author: 'Devon Vance',
      handle: '@vance_visuals',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      role: 'Motion Graphics Lead',
      badge: 'PRO Creator',
      time: '1h ago',
      content: 'Just closed a $12,000 sponsorship through StoryVerse Connect! Huge shoutout to the brand team for instant escrow release upon video launch.',
      likes: 380,
      comments: 64,
      shares: 29,
      liked: true,
      tags: ['#Monetization', '#BrandDeals', '#StoryVerseConnect'],
    },
  ]);

  const [newPostText, setNewPostText] = useState('');

  const handleAddPost = () => {
    if (!newPostText.trim()) return;
    const newEntry = {
      id: `post-${Date.now()}`,
      author: 'You (Creator)',
      handle: '@you_storyverse',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
      role: 'Pro Member',
      badge: 'Rising Star',
      time: 'Just now',
      content: newPostText,
      likes: 1,
      comments: 0,
      shares: 0,
      liked: true,
      tags: ['#CommunityFeed', '#StoryVerseAI'],
    };
    setPosts([newEntry, ...posts]);
    setNewPostText('');
  };

  const toggleLike = (id: string) => {
    setPosts((prev) =>
      prev.map((p) => {
        if (p.id === id) {
          return { ...p, liked: !p.liked, likes: p.liked ? p.likes - 1 : p.likes + 1 };
        }
        return p;
      })
    );
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Sub-navigation tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar border-b border-slate-800 pb-3">
        {[
          { id: 'feed', label: 'Discussion Feed', icon: MessageSquare },
          { id: 'groups', label: 'Creator Groups', icon: Users },
          { id: 'events', label: 'Events & Meetups', icon: Calendar },
          { id: 'challenges', label: 'Brand Challenges', icon: Trophy },
          { id: 'leaderboards', label: 'Leaderboards', icon: Flame },
          { id: 'networking', label: 'Networking', icon: Globe },
          { id: 'announcements', label: 'Announcements', icon: Bell },
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

      {/* Main Tab Content */}
      {activeTab === 'feed' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Feed Column */}
          <div className="lg:col-span-2 space-y-4">
            {/* Create Post Card */}
            <div className="rounded-2xl border border-slate-800/80 bg-[#111827]/90 p-4 shadow-lg space-y-3">
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80"
                  alt="You"
                  className="h-9 w-9 rounded-full ring-2 ring-[#5B4CFF]"
                />
                <input
                  type="text"
                  value={newPostText}
                  onChange={(e) => setNewPostText(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleAddPost()}
                  placeholder="Share a script breakdown, algorithm insight, or project update..."
                  className="flex-1 rounded-xl border border-slate-800 bg-[#0B1020] px-4 py-2.5 text-xs text-slate-200 placeholder-slate-500 focus:border-[#5B4CFF] focus:outline-hidden transition-all"
                />
                <button
                  onClick={handleAddPost}
                  className="flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-[#5B4CFF] to-[#8B5CF6] px-4 py-2.5 text-xs font-bold text-white shadow-md hover:brightness-110 transition-all"
                >
                  <Send className="h-3.5 w-3.5" />
                  <span>Post</span>
                </button>
              </div>
            </div>

            {/* Posts List */}
            {posts.map((post) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-2xl border border-slate-800/80 bg-[#111827]/90 p-5 shadow-lg space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img src={post.avatar} alt={post.author} className="h-10 w-10 rounded-full object-cover ring-2 ring-[#5B4CFF]/40" />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-white">{post.author}</span>
                        <span className="text-xs text-slate-400">{post.handle}</span>
                        <span className="rounded-full bg-[#5B4CFF]/20 px-2 py-0.5 text-[10px] font-bold text-[#8B5CF6]">
                          {post.badge}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400">{post.role} • {post.time}</p>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-200 leading-relaxed">{post.content}</p>

                <div className="flex flex-wrap gap-1.5">
                  {post.tags.map((tag) => (
                    <span key={tag} className="rounded-md bg-slate-800/80 px-2 py-0.5 text-[10px] font-mono text-[#8B5CF6]">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-slate-800/60 text-xs text-slate-400">
                  <button
                    onClick={() => toggleLike(post.id)}
                    className={`flex items-center gap-1.5 font-semibold transition-colors ${
                      post.liked ? 'text-rose-400' : 'hover:text-white'
                    }`}
                  >
                    <Heart className={`h-4 w-4 ${post.liked ? 'fill-rose-400 text-rose-400' : ''}`} />
                    <span>{post.likes}</span>
                  </button>

                  <button className="flex items-center gap-1.5 font-semibold hover:text-white transition-colors">
                    <MessageCircle className="h-4 w-4 text-slate-400" />
                    <span>{post.comments} Comments</span>
                  </button>

                  <button className="flex items-center gap-1.5 font-semibold hover:text-white transition-colors">
                    <Share2 className="h-4 w-4 text-slate-400" />
                    <span>{post.shares} Shares</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Sidebar Widgets */}
          <div className="space-y-4">
            {/* Trending Groups */}
            <div className="rounded-2xl border border-slate-800/80 bg-[#111827]/90 p-4 shadow-lg space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Featured Guilds</h3>
                <span className="text-[10px] text-[#8B5CF6] font-bold">Explore All</span>
              </div>

              {[
                { name: 'AI Storytellers Collective', members: '4,280 Members', tag: 'Scripting' },
                { name: 'YouTube 100K Velocity Guild', members: '1,890 Members', tag: 'Shorts' },
                { name: 'Brand Sponsorship Insiders', members: '3,110 Members', tag: 'Deals' },
              ].map((g, i) => (
                <div key={i} className="flex items-center justify-between rounded-xl bg-[#0B1020] p-3 text-xs border border-slate-800">
                  <div>
                    <div className="font-bold text-white">{g.name}</div>
                    <div className="text-[10px] text-slate-400">{g.members}</div>
                  </div>
                  <button className="rounded-lg bg-[#5B4CFF]/20 px-2.5 py-1 text-[10px] font-bold text-[#8B5CF6] hover:bg-[#5B4CFF] hover:text-white transition-all">
                    Join
                  </button>
                </div>
              ))}
            </div>

            {/* Leaderboard Spotlight */}
            <div className="rounded-2xl border border-[#5B4CFF]/30 bg-gradient-to-br from-[#111827] to-[#0B1020] p-4 shadow-lg space-y-3">
              <div className="flex items-center gap-2">
                <Flame className="h-4 w-4 text-[#FFB800]" />
                <h3 className="text-xs font-bold text-white uppercase tracking-wider">Top Creator Ranking</h3>
              </div>

              {[
                { rank: '#1', name: 'Aria Chen', score: '99.4 Velocity', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100' },
                { rank: '#2', name: 'Marcus Sterling', score: '98.1 Velocity', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100' },
                { rank: '#3', name: 'Devon Vance', score: '97.8 Velocity', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100' },
              ].map((ldr) => (
                <div key={ldr.rank} className="flex items-center justify-between rounded-xl bg-[#0B1020] p-2.5 text-xs border border-slate-800">
                  <div className="flex items-center gap-2.5">
                    <span className="font-black text-[#FFB800] text-xs">{ldr.rank}</span>
                    <img src={ldr.avatar} alt={ldr.name} className="h-7 w-7 rounded-full object-cover" />
                    <span className="font-bold text-white">{ldr.name}</span>
                  </div>
                  <span className="font-mono text-[10px] font-bold text-[#22C55E]">{ldr.score}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Creator Groups Tab */}
      {activeTab === 'groups' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: 'AI Video Generators Lab', desc: 'Focusing on Runway Gen-3, Luma Dream Machine, and Midjourney hooks.', members: '5,420 members', category: 'AI Workflows' },
            { title: 'Tech Founders & Builders', desc: 'Sharing SaaS demos, devlogs, and organic growth playbooks.', members: '3,100 members', category: 'Growth' },
            { title: 'Shorts & Reels Editors Guild', desc: 'Premiere, CapCut, and DaVinci color grading & pacing secrets.', members: '8,920 members', category: 'Editing' },
            { title: 'Brand Deal Negotiators', desc: 'CPM benchmarks, contract terms, usage rights, and escrow tips.', members: '4,150 members', category: 'Monetization' },
          ].map((grp, idx) => (
            <div key={idx} className="rounded-2xl border border-slate-800 bg-[#111827] p-5 shadow-lg space-y-3 flex flex-col justify-between">
              <div>
                <span className="rounded-full bg-[#5B4CFF]/20 px-2.5 py-0.5 text-[10px] font-bold text-[#8B5CF6]">
                  {grp.category}
                </span>
                <h3 className="text-sm font-bold text-white mt-2">{grp.title}</h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">{grp.desc}</p>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-slate-800">
                <span className="text-[11px] text-slate-500">{grp.members}</span>
                <button className="rounded-xl bg-[#5B4CFF] px-3 py-1.5 text-xs font-bold text-white hover:bg-[#5B4CFF]/90 transition-all">
                  Join Guild
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Events Tab */}
      {activeTab === 'events' && (
        <div className="space-y-4">
          <div className="rounded-2xl border border-[#5B4CFF]/30 bg-gradient-to-r from-[#111827] via-[#0B1020] to-[#111827] p-6 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="space-y-2">
              <span className="rounded-md bg-[#22C55E]/20 px-2 py-0.5 text-[10px] font-bold text-[#22C55E]">
                LIVE CREATOR SUMMIT 2026
              </span>
              <h2 className="text-lg font-black text-white">StoryVerse Global AI Creator Keynote</h2>
              <p className="text-xs text-slate-400 max-w-xl">
                Join 10,000+ creators live as we reveal Gemini 3.6 automated story generation features & brand sponsorship matches.
              </p>
            </div>
            <button className="rounded-xl bg-gradient-to-r from-[#5B4CFF] to-[#8B5CF6] px-6 py-3 text-xs font-bold text-white shadow-lg hover:brightness-110 transition-all whitespace-nowrap">
              RSVP Free Spot
            </button>
          </div>
        </div>
      )}

      {/* Fallback for other community tabs */}
      {['challenges', 'leaderboards', 'networking', 'announcements'].includes(activeTab) && (
        <div className="rounded-2xl border border-slate-800 bg-[#111827] p-8 text-center space-y-3">
          <Sparkles className="h-8 w-8 text-[#FFB800] mx-auto animate-pulse" />
          <h3 className="text-base font-bold text-white capitalize">{activeTab} Module Active</h3>
          <p className="text-xs text-slate-400 max-w-md mx-auto">
            Live community algorithms are updated in real-time. Connect with top creators, participate in active challenges, and build your reputation.
          </p>
        </div>
      )}
    </div>
  );
};
