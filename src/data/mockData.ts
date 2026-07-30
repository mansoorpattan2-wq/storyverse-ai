import {
  CreatorProfile,
  Campaign,
  EventItem,
  WorkspaceProject,
  AcademyCourse,
  BrandChallenge,
  TrendItem,
  NotificationItem,
} from '../types';

export const INITIAL_CREATORS: CreatorProfile[] = [
  {
    id: 'creator-1',
    name: 'Aarav Sharma',
    handle: '@aaravtech',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    categories: ['Tech & AI', 'SaaS', 'Productivity'],
    rating: 4.9,
    reviewsCount: 38,
    engagementRate: 6.8,
    followersCount: '480K',
    primaryPlatform: 'YouTube',
    location: 'Bengaluru, India / Remote',
    pricing: '$2,500 / Reel',
    bio: 'Tech storyteller unraveling future AI tools, developer workflows, and hardware innovations.',
    reputationScore: 96,
    verified: true,
    languages: ['English', 'Hindi'],
    previousCollabs: ['Google', 'Notion', 'Canva', 'Samsung'],
    authenticityScore: 98,
  },
  {
    id: 'creator-2',
    name: 'Elena Rostova',
    handle: '@elena.design',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
    categories: ['Design', 'UX/UI', 'Creativity'],
    rating: 4.95,
    reviewsCount: 52,
    engagementRate: 8.2,
    followersCount: '720K',
    primaryPlatform: 'Instagram',
    location: 'London, UK',
    pricing: '$3,200 / Video',
    bio: 'Senior Design Director creating micro-lessons on UI principles, typography, and motion design.',
    reputationScore: 99,
    verified: true,
    languages: ['English'],
    previousCollabs: ['Adobe', 'Figma', 'Webflow', 'Linear'],
    authenticityScore: 99,
  },
  {
    id: 'creator-3',
    name: 'Marcus Vance',
    handle: '@marcus_builds',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    categories: ['Entrepreneurship', 'SaaS', 'Finance'],
    rating: 4.8,
    reviewsCount: 29,
    engagementRate: 5.4,
    followersCount: '310K',
    primaryPlatform: 'LinkedIn',
    location: 'San Francisco, USA',
    pricing: '$1,800 / Post',
    bio: 'Serial startup founder breaking down growth playbooks, fundraising, and B2B SaaS strategies.',
    reputationScore: 93,
    verified: true,
    languages: ['English'],
    previousCollabs: ['Stripe', 'HubSpot', 'Brex', 'Deel'],
    authenticityScore: 95,
  },
  {
    id: 'creator-4',
    name: 'Priya Nair',
    handle: '@priyacodes',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80',
    categories: ['Developer', 'AI Agents', 'Open Source'],
    rating: 4.88,
    reviewsCount: 41,
    engagementRate: 7.5,
    followersCount: '220K',
    primaryPlatform: 'YouTube',
    location: 'Hyderabad, India',
    pricing: '$1,500 / Video',
    bio: 'Full-stack AI developer creating live code walkthroughs, hackathon speed runs, and agent architecture guides.',
    reputationScore: 95,
    verified: true,
    languages: ['English', 'Telugu', 'Hindi'],
    previousCollabs: ['Supabase', 'Vercel', 'GitHub'],
    authenticityScore: 97,
  }
];

export const INITIAL_CAMPAIGNS: Campaign[] = [
  {
    id: 'camp-1',
    title: 'Launch Campaign: Next-Gen AI Developer Tools',
    brandName: 'StackFlow AI',
    brandLogo: '⚡',
    budget: '$15,000 Total Pool',
    numericBudget: 15000,
    category: 'Developer Tools & AI',
    deliverables: ['1 YouTube Dedicated Video (8-10m)', '3 Instagram Reels', '2 LinkedIn Posts'],
    location: 'Global / Remote',
    deadline: '2026-08-15',
    status: 'Open',
    applicantsCount: 28,
    matchScore: 96,
    description: 'Looking for tech and coding creators to showcase our new real-time AI code review engine. Demonstrate live refactoring and velocity gains.',
    targetAudience: 'Software Engineers, Engineering Managers, Tech Enthusiasts',
    perks: ['Free Enterprise Tier for 1 Year', '$2,500 Base per Creator', 'Performance Bonus for top 10k CTR']
  },
  {
    id: 'camp-2',
    title: 'Canva 2026 Design Creator Challenge',
    brandName: 'Canva',
    brandLogo: '🎨',
    budget: '$25,000 Prize Pool',
    numericBudget: 25000,
    category: 'Design & Visual Arts',
    deliverables: ['2 TikToks / Shorts featuring Magic Studio', '1 Carousel Post'],
    location: 'Global',
    deadline: '2026-08-20',
    status: 'Open',
    applicantsCount: 64,
    matchScore: 92,
    description: 'Showcase how Canva Magic Studio simplifies brand creation for non-designers. Creative, high-energy storytelling preferred.',
    targetAudience: 'Small Business Owners, Marketing Creators, Students, Designers',
    perks: ['VIP Badge', 'Annual Team Subscription', 'Feature on Canva Official Page']
  },
  {
    id: 'camp-3',
    title: 'Smart Audio Workspace Promotion',
    brandName: 'SoundWave Pro',
    brandLogo: '🎧',
    budget: '$8,000',
    numericBudget: 8000,
    category: 'Hardware & Tech',
    deliverables: ['1 Unboxing Reel', '1 YouTube Integration'],
    location: 'US & Europe',
    deadline: '2026-08-10',
    status: 'Open',
    applicantsCount: 19,
    matchScore: 88,
    description: 'Promote our noise-canceling studio wireless headphones built specifically for content creators and podcasters.',
    targetAudience: 'Podcasters, Video Editors, Music Producers',
    perks: ['Complimentary SoundWave Pro Headset ($499 value)', '15% Affiliate Commission']
  }
];

export const INITIAL_EVENTS: EventItem[] = [
  {
    id: 'evt-1',
    title: 'Global AI Hackathon 2026 (Bengaluru Edition)',
    organizer: 'BuildSpace & Google Cloud',
    logo: '🚀',
    eventType: 'Hackathon',
    location: 'KTPO Exhibition Center, Bengaluru & Hybrid',
    date: 'Aug 22 - Aug 24, 2026',
    stipendBudget: '$3,000 Creator Stipend Pool',
    slots: 10,
    appliedCount: 42,
    description: 'Recruiting 10 tech creators to vlog, interview winning teams, and run live podcasts during the world’s largest 48-hour AI hackathon.',
    requirements: ['Min 50k followers on YouTube/LinkedIn/X', 'Experience covering developer events', 'Provide live social coverage']
  },
  {
    id: 'evt-2',
    title: 'National College Tech Fest: TechSprint 2026',
    organizer: 'IIT Madras Entrepreneurship Cell',
    logo: '🏛️',
    eventType: 'College Event',
    location: 'Chennai, India',
    date: 'Sep 05 - Sep 07, 2026',
    stipendBudget: '₹1.5 Lakhs + All Expenses Paid',
    slots: 5,
    appliedCount: 31,
    description: 'Keynote speaker and content creator position to inspire 5,000+ engineering students on building solo AI startups.',
    requirements: ['Public speaking experience', 'Proven background in SaaS / AI', 'Active YouTube or Instagram handle']
  },
  {
    id: 'evt-3',
    title: 'Indie Creator Music & Film Festival',
    organizer: 'Neon Horizon Productions',
    logo: '🎵',
    eventType: 'Festival',
    location: 'Austin, Texas, USA',
    date: 'Oct 12 - Oct 14, 2026',
    stipendBudget: '$5,000 VIP Travel & Coverage',
    slots: 8,
    appliedCount: 18,
    description: 'Looking for lifestyle, filmmaking, and music creators to cover behind-the-scenes artist interviews and red carpet launches.',
    requirements: ['High video production quality', 'Focus on music/film/culture']
  }
];

export const INITIAL_PROJECTS: WorkspaceProject[] = [
  {
    id: 'proj-1',
    name: 'How AI Agents Will Replace 80% of Repetitive SaaS Code',
    platform: 'YouTube',
    status: 'Ready',
    lastModified: '10 mins ago',
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=300&auto=format&fit=crop&q=80',
    tags: ['#AI', '#SaaS', '#Coding'],
    dueDate: 'Tomorrow, 5:00 PM',
    targetViews: '150,000'
  },
  {
    id: 'proj-2',
    name: 'Top 5 Canva Typography Tricks Nobody Uses',
    platform: 'Instagram',
    status: 'Editing',
    lastModified: '2 hours ago',
    thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=300&auto=format&fit=crop&q=80',
    tags: ['#Design', '#Reels', '#Typography'],
    dueDate: 'Aug 02, 2026',
    targetViews: '500,000'
  },
  {
    id: 'proj-3',
    name: 'StackFlow AI Sponsorship Integration Draft',
    platform: 'YouTube',
    status: 'Scripting',
    lastModified: '1 day ago',
    thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&auto=format&fit=crop&q=80',
    tags: ['#Sponsor', '#StackFlow'],
    dueDate: 'Aug 05, 2026',
    targetViews: '80,000'
  }
];

export const INITIAL_TRENDS: TrendItem[] = [
  {
    id: 'trend-1',
    topic: 'AI Agents in Vertical SaaS',
    volume: '1.4M Searches',
    growth: '+240%',
    category: 'Tech & AI',
    region: 'Global',
    whyTrending: 'Major breakthroughs in multi-agent orchestration and autonomous coding pipelines are capturing developer and tech enthusiast attention globally.',
    viralHashtags: ['#AIAgents', '#AutonomousAI', '#VerticalSaaS', '#CreatorEconomy'],
    competitorInsight: 'Top tech channels are releasing 60-second side-by-side speed tests comparing manual vs agentic coding.',
    keywordDifficulty: 'Medium (64/100)',
    opportunityScore: 94
  },
  {
    id: 'trend-2',
    topic: 'Micro-Sponsorship Pitching Playbook',
    volume: '890K Discussions',
    growth: '+185%',
    category: 'Creator Business',
    region: 'Global',
    whyTrending: 'Brands are shifting budgets from macro influencers to hyper-engaged micro creators with 8%+ engagement rates.',
    viralHashtags: ['#MicroCreator', '#BrandDeals', '#CreatorMonetization', '#StoryVerse'],
    competitorInsight: 'Creators sharing exact cold pitch emails and contract terms are getting 4x average comment counts.',
    keywordDifficulty: 'Low (36/100)',
    opportunityScore: 98
  },
  {
    id: 'trend-3',
    topic: 'Cinematic Mobile Color Grading',
    volume: '3.2M Views/day',
    growth: '+120%',
    category: 'Video Production',
    region: 'Global',
    whyTrending: 'New LUT presets and mobile camera log formats allow creators to produce cinematic Netflix-style visuals directly on smartphones.',
    viralHashtags: ['#CinematicMobile', '#ColorGrading', '#VideoEditing', '#Filmmaking'],
    competitorInsight: 'Before/after visual split screen hooks retain 88% of viewers past the 5-second mark.',
    keywordDifficulty: 'High (81/100)',
    opportunityScore: 86
  },
  {
    id: 'trend-4',
    topic: 'Regional Vernacular AI Content Surge',
    volume: '4.8M Views/day',
    growth: '+310%',
    category: 'Regional Trends',
    region: 'India & SEA',
    whyTrending: 'High demand for tech, finance, and career advice explained in Hindi, Telugu, Tamil, and Bengali with localized cultural context.',
    viralHashtags: ['#VernacularContent', '#TechInHindi', '#TeluguCreators', '#StoryVerseIn'],
    competitorInsight: 'Regional creators adopting AI voiceovers and subtitles report 3.5x faster subscriber growth.',
    keywordDifficulty: 'Low (28/100)',
    opportunityScore: 99
  }
];

export const INITIAL_COURSES: AcademyCourse[] = [
  {
    id: 'course-1',
    title: 'The $10k/mo Brand Deal Masterclass',
    category: 'Brand Deals',
    duration: '2h 15m',
    level: 'Intermediate',
    lessonsCount: 12,
    rating: 4.9,
    thumbnail: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=300&auto=format&fit=crop&q=80',
    instructor: 'Aarav Sharma (480K Subs)',
    description: 'Learn how to construct media kits, price deliverables based on engagement, handle inbound emails, and close multi-video retainers.',
    modules: ['Pricing Psychology', 'Cold Emailing Brands', 'Media Kit Templates', 'Negotiating Usage Rights']
  },
  {
    id: 'course-2',
    title: 'High-Retention Short Form Storytelling',
    category: 'Storytelling',
    duration: '1h 45m',
    level: 'Beginner',
    lessonsCount: 8,
    rating: 4.95,
    thumbnail: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=300&auto=format&fit=crop&q=80',
    instructor: 'Elena Rostova (720K Followers)',
    description: 'Master 3-second visual hooks, pattern interrupts, audio pacing, and curiosity gaps to keep viewers watching past 100%.',
    modules: ['Visual Hooks 101', 'Audio Soundscapes', 'Curiosity Gaps', 'Pacing & Transitions']
  },
  {
    id: 'course-3',
    title: 'Automating Video Editing with AI Workflows',
    category: 'AI Workflows',
    duration: '3h 10m',
    level: 'Advanced',
    lessonsCount: 15,
    rating: 4.88,
    thumbnail: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=300&auto=format&fit=crop&q=80',
    instructor: 'StoryVerse AI Engineering Team',
    description: 'Build an automated assembly line for clipping long-form videos, generating animated captions, and rendering multi-platform formats.',
    modules: ['B-roll Auto Selection', 'Multi-Platform Export', 'AI Color Match', 'Thumbnail A/B Engine']
  }
];

export const INITIAL_CHALLENGES: BrandChallenge[] = [
  {
    id: 'chall-1',
    brand: 'Adobe Creative Cloud',
    brandLogo: '🅰️',
    title: '#AdobeReelMagic: Showcase 30-Sec Premiere AI Magic',
    prizePool: '$10,000 Cash + Adobe Max Pass',
    deadline: 'Aug 25, 2026',
    participantsCount: 142,
    rules: ['Must use Premiere Pro or Express AI tools', 'Include hashtag #AdobeReelMagic', 'Max duration 60 seconds'],
    hashtags: ['#AdobeReelMagic', '#PremierePro', '#StoryVerseChallenge'],
    bannerUrl: 'https://images.unsplash.com/photo-1542744094-3a3172720177?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'chall-2',
    brand: 'Google Gemini',
    brandLogo: '✨',
    title: '#BuildWithGemini: 1-Minute Developer Story',
    prizePool: '$15,000 + Google Cloud Credits',
    deadline: 'Sep 10, 2026',
    participantsCount: 215,
    rules: ['Demonstrate a practical app built using Gemini API', 'Screen recording + voiceover', 'Tag @StoryVerseAI'],
    hashtags: ['#BuildWithGemini', '#GeminiAPI', '#AIAgents'],
    bannerUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=80'
  }
];

export const INITIAL_NOTIFICATIONS: NotificationItem[] = [
  {
    id: 'notif-1',
    title: 'New Campaign Match! (96% Match)',
    message: 'StackFlow AI invited you to apply for "Next-Gen AI Developer Tools" ($15k pool).',
    time: '5 mins ago',
    read: false,
    type: 'campaign'
  },
  {
    id: 'notif-2',
    title: 'Trend Alert: "AI Agents in Vertical SaaS"',
    message: 'Topic gained +240% search velocity today. Tap to generate script.',
    time: '1 hour ago',
    read: false,
    type: 'trend'
  },
  {
    id: 'notif-3',
    title: 'Nova Coach Recommendation',
    message: 'Your latest video "How AI Agents Work" has a 12.4% CTR! Check retention tips.',
    time: '3 hours ago',
    read: true,
    type: 'ai'
  }
];
