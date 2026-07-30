export type UserRole = 'creator' | 'brand' | 'agency_event';

export type TopModule =
  | 'home'
  | 'studio'
  | 'analytics'
  | 'marketplace'
  | 'campaigns'
  | 'community'
  | 'academy'
  | 'settings';

export type NavigationTab =
  | 'dashboard'
  | 'trend_hunter'
  | 'story_builder'
  | 'multi_platform'
  | 'thumbnail_studio'
  | 'video_planner'
  | 'engagement_predictor'
  | 'creator_workspace'
  | 'nova_coach'
  | 'audience_twin'
  | 'analytics'
  | 'storyverse_connect'
  | 'event_hub'
  | 'brand_challenges'
  | 'fraud_detection'
  | 'creator_academy'
  | 'community_feed'
  | 'campaigns_manager'
  | 'settings_general';

export interface CreatorProfile {
  id: string;
  name: string;
  handle: string;
  avatar: string;
  categories: string[];
  rating: number;
  reviewsCount: number;
  engagementRate: number;
  followersCount: string;
  primaryPlatform: 'YouTube' | 'Instagram' | 'TikTok' | 'LinkedIn' | 'X';
  location: string;
  pricing: string;
  bio: string;
  reputationScore: number;
  verified: boolean;
  languages: string[];
  previousCollabs: string[];
  authenticityScore: number;
}

export interface Campaign {
  id: string;
  title: string;
  brandName: string;
  brandLogo: string;
  budget: string;
  numericBudget: number;
  category: string;
  deliverables: string[];
  location: string;
  deadline: string;
  status: 'Open' | 'In Progress' | 'Completed';
  applicantsCount: number;
  matchScore?: number;
  description: string;
  targetAudience: string;
  perks: string[];
}

export interface EventItem {
  id: string;
  title: string;
  organizer: string;
  logo: string;
  eventType: 'College Event' | 'Hackathon' | 'Concert' | 'Startup Event' | 'Festival' | 'Movie Promotion' | 'Launch Event';
  location: string;
  date: string;
  stipendBudget: string;
  slots: number;
  appliedCount: number;
  description: string;
  requirements: string[];
}

export interface WorkspaceProject {
  id: string;
  name: string;
  platform: 'YouTube' | 'Instagram' | 'TikTok' | 'LinkedIn' | 'X';
  status: 'Idea' | 'Scripting' | 'Shooting' | 'Editing' | 'Ready' | 'Published';
  lastModified: string;
  thumbnail?: string;
  tags: string[];
  dueDate: string;
  targetViews?: string;
}

export interface AcademyCourse {
  id: string;
  title: string;
  category: 'Editing' | 'Brand Deals' | 'Storytelling' | 'Monetization' | 'Growth' | 'AI Workflows';
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  lessonsCount: number;
  rating: number;
  thumbnail: string;
  instructor: string;
  description: string;
  modules: string[];
}

export interface BrandChallenge {
  id: string;
  brand: string;
  brandLogo: string;
  title: string;
  prizePool: string;
  deadline: string;
  participantsCount: number;
  rules: string[];
  hashtags: string[];
  bannerUrl: string;
}

export interface TrendItem {
  id: string;
  topic: string;
  volume: string;
  growth: string;
  category: string;
  region: string;
  whyTrending: string;
  viralHashtags: string[];
  competitorInsight: string;
  keywordDifficulty: string;
  opportunityScore: number;
}

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
  type: 'campaign' | 'trend' | 'ai' | 'system';
}
