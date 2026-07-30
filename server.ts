import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json({ limit: '10mb' }));

// Server-side Gemini AI initialization helper
function getGeminiClient() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
    return null;
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// Health endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString(), platform: 'StoryVerse AI' });
});

// 1. AI Trend Hunter Endpoint
app.post('/api/gemini/trends', async (req, res) => {
  try {
    const { category, region } = req.body;
    const ai = getGeminiClient();

    if (!ai) {
      // Fallback response with realistic data if key is missing or default
      return res.json({
        success: true,
        source: 'simulated',
        trends: [
          {
            id: 'trend-1',
            topic: 'AI Agents in Vertical SaaS',
            volume: '1.4M Searches',
            growth: '+240%',
            category: category || 'Tech & AI',
            region: region || 'Global',
            whyTrending: 'Major announcements around autonomous workflow orchestration and multi-agent systems are driving viral LinkedIn and YouTube discussions.',
            viralHashtags: ['#AIAgents', '#AutonomousAI', '#VerticalSaaS', '#CreatorEconomy'],
            competitorInsight: 'Top tech creators are breaking down agentic workflows into 60-second Reels showing live code vs no-code setups.',
            keywordDifficulty: 'Medium (64/100)',
            opportunityScore: 92
          },
          {
            id: 'trend-2',
            topic: 'Micro-Sponsorships for Niche Creators',
            volume: '890K Discussions',
            growth: '+180%',
            category: category || 'Creator Business',
            region: region || 'Global',
            whyTrending: 'Brands are shifting budget from macro influencers to hyper-engaged micro-creators with higher conversion rates.',
            viralHashtags: ['#MicroCreator', '#BrandDeals', '#CreatorMonetization', '#StoryVerse'],
            competitorInsight: 'High engagement videos highlight actual deal numbers, pitch templates, and contract negotiation breakdowns.',
            keywordDifficulty: 'Low (38/100)',
            opportunityScore: 96
          },
          {
            id: 'trend-3',
            topic: 'Cinematic Smartphone Video Editing',
            volume: '3.2M Views/day',
            growth: '+120%',
            category: category || 'Video Production',
            region: region || 'Global',
            whyTrending: 'New mobile editing AI tools and grading presets allow creators to shoot Netflix-quality visuals on iPhones.',
            viralHashtags: ['#CinematicMobile', '#ColorGrading', '#VideoEditing', '#Filmmaking'],
            competitorInsight: 'Before/After split screen hook comparisons achieve 85%+ retention in the first 3 seconds.',
            keywordDifficulty: 'High (82/100)',
            opportunityScore: 84
          }
        ]
      });
    }

    const prompt = `Generate 3 high-impact trending topics for content creators in category "${category || 'General'}" and region "${region || 'Global'}".
Return a JSON object with a key "trends" containing an array of items, each with:
- id (string)
- topic (string)
- volume (string e.g. "1.2M Searches")
- growth (string e.g. "+150%")
- category (string)
- region (string)
- whyTrending (2 sentence clear explanation of WHY it is viral)
- viralHashtags (array of 4 hashtags)
- competitorInsight (string)
- keywordDifficulty (string)
- opportunityScore (number 1-100)`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.6-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
      },
    });

    const data = JSON.parse(response.text || '{}');
    return res.json({ success: true, source: 'gemini', ...data });
  } catch (error: any) {
    console.error('Error in /api/gemini/trends:', error);
    res.status(500).json({ success: false, error: error.message || 'Failed to fetch AI trends' });
  }
});

// 2. Story Builder AI Endpoint
app.post('/api/gemini/story-builder', async (req, res) => {
  try {
    const { topic, targetAudience, tone, format, platform } = req.body;
    const ai = getGeminiClient();

    if (!ai) {
      return res.json({
        success: true,
        source: 'simulated',
        hooks: [
          `Stop scrolling if you want to double your ${topic || 'content engagement'} without spending a dollar on ads.`,
          `99% of creators get this wrong about ${topic || 'building an audience'}. Here is the secret workflow...`,
          `I spent 30 days testing ${topic || 'AI tools'}, and the results surprised even top industry experts.`
        ],
        script: `[0:00 - 0:05] HOOK: "Stop scrolling if you want to master ${topic || 'your creator workflow'} in 2026!"\n\n[0:05 - 0:20] PROBLEM: "Most creators struggle with consistency because manual editing and scripting consume 15+ hours a week."\n\n[0:20 - 0:45] SOLUTION & STEPS:\n1. Audit your trending topics using AI Trend Hunter.\n2. Batch 5 multi-platform hooks in 3 minutes.\n3. Optimize thumbnails for 12%+ CTR.\n\n[0:45 - 1:00] CTA: "Save this reel and drop a comment below to get my free breakdown template!"`,
        storyboard: [
          { scene: 1, time: '0:00-0:05', visual: 'Fast cut close-up of creator pointing to dynamic screen chart overlaying 250% view surge.', audio: 'Energetic hook voiceover with low subtle bass thump impact.' },
          { scene: 2, time: '0:05-0:20', visual: 'Screen recording showing manual chaotic folder clutter transition into clean AI dashboard.', audio: 'Relatable problem narrative with smooth voice tone.' },
          { scene: 3, time: '0:20-0:45', visual: '3-part split step animation featuring high contrast typography and accent highlights.', audio: 'Upbeat step-by-step breakdown.' },
          { scene: 4, time: '0:45-1:00', visual: 'Creator smiling holding phone showing StoryVerse logo with animated Follow button pulse.', audio: 'Strong CTA with music fade out.' }
        ],
        cta: `Comment "${(topic || 'GROWTH').toUpperCase()}" and I'll send you the exact AI blueprint for free!`,
        thumbnailIdeas: [
          { textOverlay: '10X YOUR VIEWS', composition: 'Shocked face on left with high contrast yellow arrow pointing to exponential revenue chart', primaryColor: '#FFB800' },
          { textOverlay: 'THE AI SECRET', composition: 'Split screen: Dark chaotic timeline vs ultra clean 1-click workspace dashboard', primaryColor: '#5B4CFF' }
        ],
        title: `The Ultimate ${topic || 'Creator'} Framework (Steal This in 2026)`,
        description: `In this complete breakdown, we uncover how top creators use AI workflows to save 15+ hours per week while boosting reach and brand deals.`,
        hashtags: ['#StoryVerseAI', '#CreatorEconomy', '#ViralStrategy', '#ContentCreation', '#AITools'],
        voiceOverScript: `Stop scrolling if you want to master ${topic || 'your content workflow'}. Here are three game-changing steps you can start applying today...`
      });
    }

    const prompt = `You are a top viral content strategist for YouTube and Short-form video.
Topic: "${topic || 'Creator Monetization'}"
Target Audience: "${targetAudience || 'Emerging Creators & Marketers'}"
Tone: "${tone || 'High Energy, Insightful'}"
Format: "${format || 'Short-form Video (60s)'}"
Platform: "${platform || 'YouTube Shorts / Reels'}"

Return JSON with:
- hooks (array of 3 high-converting viral hooks)
- script (formatted script with timestamps, visual cues, and dialogue)
- storyboard (array of 4 scenes, each with scene, time, visual, audio)
- cta (strong Call To Action)
- thumbnailIdeas (array of 2 thumbnail concepts with textOverlay, composition, primaryColor)
- title (catchy title)
- description (SEO optimized description)
- hashtags (array of 5 hashtags)
- voiceOverScript (clean voice-over narration text)`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.6-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
      },
    });

    const data = JSON.parse(response.text || '{}');
    return res.json({ success: true, source: 'gemini', ...data });
  } catch (error: any) {
    console.error('Error in /api/gemini/story-builder:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// 3. Multi Platform Optimizer Endpoint
app.post('/api/gemini/multi-platform', async (req, res) => {
  try {
    const { baseContent } = req.body;
    const ai = getGeminiClient();

    if (!ai) {
      return res.json({
        success: true,
        source: 'simulated',
        platforms: {
          YouTube: {
            title: `🚀 ${baseContent || 'AI Creator Mastery'}: Step-by-Step Blueprint`,
            body: `Discover how to transform your content creation workflow using AI intelligence.\n\n📌 Timestamps:\n0:00 - Introduction\n0:45 - The Core AI Strategy\n2:15 - Multi-Platform Distribution\n3:30 - Final Verdict\n\n🔔 Subscribe for weekly growth breakdowns!`,
            hashtags: ['#YouTubeGrowth', '#ContentCreator', '#AITools', '#StoryVerse'],
            charCount: 280,
            tips: 'Add custom pinned comment with key lead magnet link.'
          },
          Instagram: {
            caption: `The game of content creation just changed forever ⚡️\n\n${baseContent || 'If you are still spending 20 hours a week manually editing and formatting posts, you are working harder, not smarter.'}\n\nSwipe left to see the full breakdown 👈\n\nSave this post for later 📌`,
            hashtags: ['#ReelsStrategy', '#CreatorLife', '#ViralReels', '#InstaGrowth', '#AIWorkflow'],
            charCount: 220,
            tips: 'Use trending audio under 10k uses for 3x algorithmic push.'
          },
          TikTok: {
            caption: `Wait till you see step 3... 🤫 ${baseContent || 'How top creators automate 80% of their video production without losing authenticity.'} #fyp #creatortips #aitools #viral`,
            hashtags: ['#fyp', '#creatortips', '#aitools', '#storyverse', '#viral'],
            charCount: 140,
            tips: 'Include native text overlay on top of video within first 1.5 seconds.'
          },
          LinkedIn: {
            post: `The creator economy isn't just about posting videos anymore—it's an operating system.\n\nHere is what we learned analyzing 500+ successful brand campaigns:\n\n1. Consistency beats production quality.\n2. Multi-platform adaptation doubles ROI.\n3. AI handles execution; humans handle vision.\n\n${baseContent || 'What is your biggest bottleneck in content creation right now?'}\n\nLet's discuss in the comments below 👇`,
            hashtags: ['#CreatorEconomy', '#DigitalMarketing', '#AIInnovation', '#Leadership'],
            charCount: 410,
            tips: 'Post without external links in main body; put link in first comment for 4x reach.'
          },
          X: {
            tweet: `🧵 Most creators fail because they create once and post once.\n\nTop 1% creators create once and optimize everywhere.\n\n${baseContent || 'Here is the 5-part AI stack scaling brands to 1M+ impressions monthly 👇'}`,
            hashtags: ['#BuildInPublic', '#AITools'],
            charCount: 195,
            tips: 'Format as a 5-tweet thread with high contrast image on tweet #1.'
          }
        }
      });
    }

    const prompt = `Adapt the following base content for multiple social media platforms (YouTube, Instagram, TikTok, LinkedIn, X/Twitter).
Base Content: "${baseContent}"

Return JSON with a key "platforms" containing customized entries for YouTube, Instagram, TikTok, LinkedIn, X.
Each entry should have:
- title or caption or post or tweet (formatted specifically for that platform's culture and limits)
- hashtags (array of relevant hashtags)
- charCount (number)
- tips (growth tip for posting on this platform)`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.6-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
      },
    });

    const data = JSON.parse(response.text || '{}');
    return res.json({ success: true, source: 'gemini', ...data });
  } catch (error: any) {
    console.error('Error in /api/gemini/multi-platform:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// 4. Nova AI Creator Coach Endpoint
app.post('/api/gemini/nova-coach', async (req, res) => {
  try {
    const { userMessage, history } = req.body;
    const ai = getGeminiClient();

    if (!ai) {
      return res.json({
        success: true,
        source: 'simulated',
        reply: `Hey! I'm **Nova**, your AI Creator Coach. 🚀\n\nRegarding your question: "${userMessage}"\n\nHere is my strategic advice:\n\n1. **First 3 Seconds Hook**: Ensure your visual motion changes within the first 1.8 seconds. Dynamic text popping on screen increases 30-second retention by up to 42%.\n2. **Story Structure**: Use the "Curiosity Gap" framework—state the payoff first, then show the step-by-step journey.\n3. **Monetization Angle**: Integrate brand mentions naturally at the 45% mark when viewer engagement peaks.\n\nWould you like me to analyze your latest video retention curve or draft a high-converting hook for your next post?`
      });
    }

    const systemInstruction = `You are Nova, an elite YouTube & Social Media Creator Coach with experience mentoring top creators scaling to millions of subscribers and multi-million dollar brand deals.
Provide specific, actionable, encouraging, and deeply tactical advice on retention, hooks, storytelling, algorithm shifts, video editing, and brand deal negotiations. Never give generic responses.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.6-flash',
      contents: `User asks: "${userMessage}"`,
      config: {
        systemInstruction,
      },
    });

    return res.json({ success: true, source: 'gemini', reply: response.text });
  } catch (error: any) {
    console.error('Error in /api/gemini/nova-coach:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// 5. AI Brand Match & Campaign Planner
app.post('/api/gemini/campaign-planner', async (req, res) => {
  try {
    const { campaignBrief, targetBudget, category } = req.body;
    const ai = getGeminiClient();

    if (!ai) {
      return res.json({
        success: true,
        source: 'simulated',
        strategy: `Launch a high-impact 3-tier creator campaign focused on authentic product integration across YouTube Shorts & Instagram Reels.`,
        budgetAllocation: [
          { tier: '2x Tier 1 Anchors (500k+ subscribers)', percentage: 50, amount: `$${((targetBudget || 10000) * 0.5).toLocaleString()}` },
          { tier: '5x Micro Specialists (50k-150k subscribers)', percentage: 35, amount: `$${((targetBudget || 10000) * 0.35).toLocaleString()}` },
          { tier: 'Community UGC Booster Reserve', percentage: 15, amount: `$${((targetBudget || 10000) * 0.15).toLocaleString()}` }
        ],
        timeline: '4-Week Campaign Execution (Week 1: Match & Contracts, Week 2: Content Creation, Week 3: Brand Approvals & Go-Live, Week 4: Analytics & Retargeting)',
        deliverables: ['2 YouTube Long-form Dedicated Integrations (60s)', '6 Instagram Reels / YouTube Shorts', '10 Raw UGC License Rights for Paid Ads'],
        kpis: [
          { metric: 'Estimated Impressions', target: '2.4M+' },
          { metric: 'Target Engagement Rate', target: '4.8%' },
          { metric: 'Expected CTR to Landing Page', target: '3.2%' },
          { metric: 'Estimated Blended CPM', target: '$12.50' }
        ],
        matchScore: 94
      });
    }

    const prompt = `You are a Senior Campaign Planner at a top Creator Economy Agency.
Campaign Brief: "${campaignBrief}"
Budget: "$${targetBudget || 10000}"
Category: "${category || 'Tech & Consumer'}"

Return JSON with:
- strategy (string summary)
- budgetAllocation (array of objects with tier, percentage, amount)
- timeline (string)
- deliverables (array of strings)
- kpis (array of objects with metric and target)
- matchScore (number 1-100)`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.6-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
      },
    });

    const data = JSON.parse(response.text || '{}');
    return res.json({ success: true, source: 'gemini', ...data });
  } catch (error: any) {
    console.error('Error in /api/gemini/campaign-planner:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`StoryVerse AI server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
