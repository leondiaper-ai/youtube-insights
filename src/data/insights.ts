// ─── YouTube Insights V5 — Static Data Layer ────────────────────────────
// Enriched: benchmark-backed case studies with rankings from 138-channel dataset
// V5: Language evolves from content/uploads → attention/campaign moments/audience return points
// Future: connect to Watcher API / Supabase for live data.

// ─── Headline Stats ──────────────────────────────────────────────────────

export const headlineStats = [
  { value: "138", label: "Channels analysed" },
  { value: "3,554", label: "Videos reviewed" },
  { value: "82", label: "Virgin-managed channels" },
  { value: "56", label: "Market benchmark channels" },
  { value: "7", label: "Campaigns manually reviewed" },
];

// ─── Follow-Up Breakdown ─────────────────────────────────────────────────

export const followUpSegments = [
  { pct: 41, label: "Silent", color: "#FF4A1C", desc: "Nothing after the hero asset. No follow-up. No audience return point." },
  { pct: 35, label: "Shorts Only", color: "#FFD24C", desc: "Shorts but no longform follow-up timed to releases." },
  { pct: 9, label: "Limited Longform", color: "#8A847A", desc: "One extra format. No structured sequence." },
  { pct: 15, label: "Multi-Format Rollout", color: "#1FBE7A", desc: "Multiple formats sequenced to create audience return moments." },
];

// ─── Confidence Tiers ───────────────────────────────────────────────────

export type ConfidenceLevel = 'high' | 'medium' | 'testing';

export const confidenceTiers: { level: ConfidenceLevel; label: string; color: string; items: string[] }[] = [
  {
    level: 'high', label: 'High Confidence', color: '#1FBE7A',
    items: [
      'Live sessions cluster among growing channels',
      'Multi-format campaigns outperform single-asset releases',
      'Campaign planning correlates with sustained attention',
    ],
  },
  {
    level: 'medium', label: 'Medium Confidence', color: '#FFD24C',
    items: [
      'Optimal spacing within the 7–14 day window',
      'Follow-up timing effect on sustained momentum',
    ],
  },
  {
    level: 'testing', label: 'Still Testing', color: '#8A847A',
    items: [
      'What drives subscriber conversion specifically',
      'Shorts-only follow-up impact on longform discovery',
      'Visualiser contribution to campaign momentum',
    ],
  },
];

// ─── Tove Lo Timeline ───────────────────────────────────────────────────

export const toveLoTimeline = [
  {
    day: 0, label: "Day 0", type: "Official MV",
    purpose: "Hero Moment", purposeDetail: "Capture attention",
    thumbnail_url: "https://i.ytimg.com/vi/placeholder/hqdefault.jpg",
    youtube_url: null, views: null,
  },
  {
    day: 9, label: "Day 9", type: "BTS + Visualiser",
    purpose: "World Expansion", purposeDetail: "Deepen the story",
    thumbnail_url: null, youtube_url: null, views: null,
  },
  {
    day: 16, label: "Day 16", type: "Lyric Video + Remix",
    purpose: "Discovery", purposeDetail: "Reach new audiences",
    thumbnail_url: null, youtube_url: null, views: null,
  },
  {
    day: 23, label: "Day 23", type: "Visualiser",
    purpose: "Return Moment", purposeDetail: "Give fans a reason to come back",
    thumbnail_url: null, youtube_url: null, views: null,
  },
];

export const toveLoEvidence = {
  benchmarkStats: [
    { value: 'Top 9%', label: 'Most varied campaign', context: 'of 138 channels analysed' },
    { value: '1.5×', label: 'More campaign moments than average', context: '7 vs 4.7 across the dataset' },
    { value: '7', label: 'Distinct campaign moments', context: 'Only 10% of channels reach this' },
    { value: '4', label: 'Audience return moments', context: 'Each planned before launch' },
  ],
  whyPicked: [
    'Top 9% content diversity (Rank 13 of 138)',
    '7 content formats used — 1.5x benchmark average',
    '6 pre-campaign assets before hero drop',
    '23-day rollout across OMV, BTS, Lyric, Remix, Visualiser',
  ],
  whyMatters: 'One of 14 channels using 7+ formats. Sequencing across weeks — not volume — drives sustained attention.',
  benchmarkContext: 'Benchmark average: 5.2 types. Top 10% threshold: 7+. Tove Lo uses 7 formats — a combination only 10% of channels match.',
};

// ─── Strategy Framework ──────────────────────────────────────────────────

export const strategyFramework = [
  {
    tier: "Emerging", goal: "Build Audience",
    artist_name: "mary in the junkyard", artist_slug: "mary-in-the-junkyard",
    desc: "Build a world fans want to return to",
    color: "#2C25FF",
  },
  {
    tier: "Developing", goal: "Build Momentum",
    artist_name: "French The Kid", artist_slug: "french-the-kid",
    desc: "Add depth to velocity",
    color: "#FF4A1C",
  },
  {
    tier: "Major Campaign", goal: "Sustain Attention",
    artist_name: "GENER8ION", artist_slug: "gener8ion",
    desc: "Turn one launch into a series of return moments",
    color: "#0E0E0E",
  },
  {
    tier: "Conversion", goal: "Convert Viewers",
    artist_name: "K-Trap", artist_slug: "k-trap",
    desc: "Timing over volume",
    color: "#FFD24C",
  },
];

// ─── Case Studies ────────────────────────────────────────────────────────

export type BenchmarkMetric = {
  value: string;       // e.g. "Rank 24", "29 days", "1.4x"
  label: string;       // e.g. "content diversity", "rollout length"
  context: string;     // e.g. "of 138 channels", "3 follow-up assets"
};

export type CaseStudy = {
  artist_name: string;
  artist_slug: string;
  category: string;           // artist tier label e.g. "Emerging Artist"
  categoryLabel: string;      // hero insight headline e.g. "Emerging Artist Blueprint"
  accent: string;
  thumbnail_url: string | null;
  campaignPattern: string;    // V5: memorable takeaway e.g. "Audience deepening"
  heroBenchmark: {
    value: string;     // the big number or stat
    insight: string;   // one-sentence benchmark insight
  };
  benchmarkMetrics: BenchmarkMetric[];  // exactly 3 supporting metrics
  watcherClassification: string;
  whyMatters: string;
  observations: string[];
  learning: string;
  action: string;
  campaign_type: string | null;
  release_date: string | null;
  youtube_url: string | null;
  assets: {
    asset_title: string;
    content_type: string;
    days_from_hero: number;
    youtube_url: string | null;
    thumbnail_url: string | null;
    views: number | null;
  }[];
};

export const caseStudies: CaseStudy[] = [
  {
    artist_name: "mary in the junkyard",
    artist_slug: "mary-in-the-junkyard",
    category: "Emerging Artist",
    categoryLabel: "Emerging Artist Blueprint",
    accent: "#2C25FF",
    thumbnail_url: null,
    campaignPattern: "Audience deepening",
    watcherClassification: "GROWING",
    heroBenchmark: {
      value: "7-14 day follow-through",
      insight: "Only case study artist who delivered content in the follow-through window — a behaviour rare across all 138 channels.",
    },
    benchmarkMetrics: [
      { value: "Rank 24", label: "content diversity", context: "of 138 channels (top 17%)" },
      { value: "29 days", label: "rollout length", context: "3 follow-up assets across 4 formats" },
      { value: "1 of 30", label: "Growing channels", context: "despite modest view counts" },
    ],
    whyMatters: 'Shows how smaller artists can build audience depth without relying on huge view counts.',
    observations: [
      "Each single gets a live session within 1–2 weeks",
      "Follow-through at Day 7–14 — rare across the full dataset",
      "Content serves fan deepening, not just discovery",
    ],
    learning: "The only case study artist delivering content in the 7–14 day window. Growing despite modest views. The pattern matters more than the numbers.",
    action: "Add one format per single — lyric video or visualiser. Pushes diversity into the top 10% with minimal extra production.",
    campaign_type: "single_cycle",
    release_date: null,
    youtube_url: null,
    assets: [
      { asset_title: "Crash Landing", content_type: "official_video", days_from_hero: 0, youtube_url: null, thumbnail_url: null, views: 83000 },
      { asset_title: "New Muscles MV", content_type: "official_video", days_from_hero: 12, youtube_url: null, thumbnail_url: null, views: 62000 },
      { asset_title: "Live Session", content_type: "live_session", days_from_hero: 21, youtube_url: null, thumbnail_url: null, views: 4700 },
      { asset_title: "Mouse Visualiser", content_type: "visualiser", days_from_hero: 32, youtube_url: null, thumbnail_url: null, views: 5100 },
    ],
  },
  {
    artist_name: "French The Kid",
    artist_slug: "french-the-kid",
    category: "Developing Artist",
    categoryLabel: "High Velocity Release Strategy",
    accent: "#FF4A1C",
    thumbnail_url: null,
    campaignPattern: "Momentum creation",
    watcherClassification: "WEAK_CONVERSION",
    heroBenchmark: {
      value: "4 release-week uploads",
      insight: "Highest release-week activity of any case study artist — strong velocity, but classified Weak Conversion despite the volume.",
    },
    benchmarkMetrics: [
      { value: "Rank 31", label: "upload volume", context: "of 138 channels (top 22%)" },
      { value: "1.4x", label: "support assets vs benchmark", context: "14 assets vs 9.8 average" },
      { value: "5 formats", label: "content types", context: "OMV, Shorts, Teasers, BTS, Other" },
    ],
    whyMatters: 'Shows that rapid release cadence can create project momentum, but needs post-release depth.',
    observations: [
      "4 release-week uploads — highest of any case study",
      "Campaign thinking focused on velocity, not post-release depth",
      "Weak Conversion classification despite strong volume",
    ],
    learning: "Already thinks in campaigns. The gap isn't volume — it's what happens after release week. Depth, not speed.",
    action: "Add one post-release asset per single. A sequencing refinement, not a strategy change.",
    campaign_type: "rapid_release",
    release_date: null,
    youtube_url: null,
    assets: [
      { asset_title: "Ready or Not MV", content_type: "official_video", days_from_hero: 0, youtube_url: null, thumbnail_url: null, views: 1700000 },
      { asset_title: "Ghosts MV", content_type: "official_video", days_from_hero: 2, youtube_url: null, thumbnail_url: null, views: 469000 },
      { asset_title: "Therapy MV", content_type: "official_video", days_from_hero: 4, youtube_url: null, thumbnail_url: null, views: 390000 },
      { asset_title: "Ready Or Not BTS", content_type: "bts", days_from_hero: 4, youtube_url: null, thumbnail_url: null, views: 15000 },
    ],
  },
  {
    artist_name: "GENER8ION",
    artist_slug: "gener8ion",
    category: "Major Campaign",
    categoryLabel: "Major Campaign Playbook",
    accent: "#0E0E0E",
    thumbnail_url: null,
    campaignPattern: "Attention stacking",
    watcherClassification: "GROWING",
    heroBenchmark: {
      value: "4.7M avg views/upload",
      insight: "Rank 21 of 138 channels by efficiency — achieved Growing classification with only 5 uploads, the lowest volume of any case study.",
    },
    benchmarkMetrics: [
      { value: "23.6M", label: "total campaign views", context: "Rank 43 of 138 channels" },
      { value: "Day 2", label: "BTS timing", context: "198K views — inside the attention window" },
      { value: "5 uploads", label: "total longform", context: "lowest of any case study artist" },
    ],
    whyMatters: 'Shows how big campaigns can become a series of moments rather than one launch spike.',
    observations: [
      "BTS at Day 2 captured the initial interest window",
      "Album trailer stacked at Day 2 alongside BTS",
      "LOVE & TEARS at Day 23 sustained the album cycle",
    ],
    learning: "More impact with 5 uploads than most channels get from 25. Each asset expanded the campaign world — BTS for depth, trailer for anticipation, follow-up single for sustained reach.",
    action: "Plan follow-up moments before launch. BTS within 48 hours. Follow-up single within 3 weeks. Multiple return moments from one campaign.",
    campaign_type: "album_campaign",
    release_date: null,
    youtube_url: null,
    assets: [
      { asset_title: "STORM MV", content_type: "official_video", days_from_hero: 0, youtube_url: null, thumbnail_url: null, views: 14000000 },
      { asset_title: "BTS", content_type: "bts", days_from_hero: 2, youtube_url: null, thumbnail_url: null, views: 198000 },
      { asset_title: "Album Trailer", content_type: "trailer", days_from_hero: 2, youtube_url: null, thumbnail_url: null, views: 265000 },
      { asset_title: "LOVE & TEARS", content_type: "official_video", days_from_hero: 23, youtube_url: null, thumbnail_url: null, views: 1500000 },
    ],
  },
  {
    artist_name: "K-Trap",
    artist_slug: "k-trap",
    category: "Conversion Challenge",
    categoryLabel: "Conversion Challenge",
    accent: "#FFD24C",
    thumbnail_url: null,
    campaignPattern: "Timing opportunity",
    watcherClassification: "WEAK_CONVERSION",
    heroBenchmark: {
      value: "Rank 12 of 138",
      insight: "Top 9% content diversity with 8 content types — but BTS lands at Day 30+ instead of Day 7-10, outside the attention window.",
    },
    benchmarkMetrics: [
      { value: "1.7x", label: "support assets vs benchmark", context: "17 assets vs 9.8 average" },
      { value: "Rank 29", label: "upload volume", context: "of 138 channels (top 21%)" },
      { value: "Day 30+", label: "BTS timing gap", context: "vs Day 7-10 attention window" },
    ],
    whyMatters: 'Shows that content volume alone does not automatically create subscriber growth.',
    observations: [
      "BTS-per-single pattern is consistent and repeatable",
      "More support assets than most Growing channels",
      "Timing gap: BTS at Day 30+ misses the attention window",
    ],
    learning: "The content exists. The instincts are right. The gap is timing — BTS lands at Day 30 instead of Day 7–10, after the audience has moved on.",
    action: "Pull BTS forward to Day 7–10. A scheduling fix, not a creation ask. Highest-leverage change available.",
    campaign_type: "single_cycle",
    release_date: null,
    youtube_url: null,
    assets: [
      { asset_title: "Mystery Box MV", content_type: "official_video", days_from_hero: 0, youtube_url: null, thumbnail_url: null, views: 902000 },
      { asset_title: "LA Vlog", content_type: "vlog", days_from_hero: 0, youtube_url: null, thumbnail_url: null, views: 19000 },
      { asset_title: "Change MV", content_type: "official_video", days_from_hero: 0, youtube_url: null, thumbnail_url: null, views: 879000 },
      { asset_title: "Mystery Box BTS", content_type: "bts", days_from_hero: 30, youtube_url: null, thumbnail_url: null, views: 5300 },
      { asset_title: "Can't Say No BTS", content_type: "bts", days_from_hero: 88, youtube_url: null, thumbnail_url: null, views: 2700 },
    ],
  },
  {
    artist_name: "The Snuts",
    artist_slug: "the-snuts",
    category: "Campaign Preparation Example",
    categoryLabel: "Campaign Planning Example",
    accent: "#1FBE7A",
    thumbnail_url: null,
    campaignPattern: "Campaign preparation",
    watcherClassification: "WEAK_CONVERSION",
    heroBenchmark: {
      value: "Rank 12 of 138",
      insight: "Top 9% follow-up support with 22 assets (2.2x benchmark) — the most structured support plan of any case study artist.",
    },
    benchmarkMetrics: [
      { value: "7 types", label: "content diversity", context: "Rank 30 of 138 (top 22%)" },
      { value: "6 formats", label: "active formats", context: "Lyric, Live, BTS, Acoustic, Shorts, OMV" },
      { value: "Pre-launch", label: "campaign planning", context: "timeline mapped before first asset" },
    ],
    whyMatters: 'Shows how planning before launch gives teams more control over the release window.',
    observations: [
      "Campaign timeline mapped in Coach before any content dropped",
      "6 content types including acoustic and live performance",
      "Multiple release windows planned in advance",
    ],
    learning: "Planning is one of the few variables fully in our control. The campaign world was mapped before the first asset dropped.",
    action: "Map every campaign timeline before launch. Hero → lyric Day 14 → live Day 20. Even a three-step sequence beats reactive uploads.",
    campaign_type: "album_campaign",
    release_date: null,
    youtube_url: null,
    assets: [
      { asset_title: "Summer Rain", content_type: "official_video", days_from_hero: 0, youtube_url: null, thumbnail_url: null, views: 177000 },
      { asset_title: "Motherlands Lyric", content_type: "lyric_video", days_from_hero: 19, youtube_url: null, thumbnail_url: null, views: 8700 },
      { asset_title: "Motherlands Live", content_type: "live", days_from_hero: 49, youtube_url: null, thumbnail_url: null, views: 1300 },
      { asset_title: "Album BTS", content_type: "bts", days_from_hero: 65, youtube_url: null, thumbnail_url: null, views: 535 },
      { asset_title: "Defibrillator Lyric", content_type: "lyric_video", days_from_hero: 77, youtube_url: null, thumbnail_url: null, views: 6300 },
    ],
  },
];

// ─── Benchmarks ──────────────────────────────────────────────────────────

export const benchmarks = [
  { metric: "Live Sessions", virgin: 48, market: 63, gap: -15, unit: "%", actionable: true, humanGap: "15 points behind market" },
  { metric: "Lyric Videos", virgin: 44, market: 54, gap: -10, unit: "%", actionable: true, humanGap: "10 points behind market" },
  { metric: "Multi-Format Rollout", virgin: 13, market: 18, gap: -5, unit: "%", actionable: true, humanGap: "5 points behind market" },
  { metric: "Content Diversity", virgin: 4.8, market: 4.6, gap: 0.2, unit: " avg types", actionable: false, humanGap: "Comparable" },
  { metric: "Visualisers", virgin: 65, market: 61, gap: 4, unit: "%", actionable: false, humanGap: "4 points ahead" },
  { metric: "BTS Content", virgin: 26, market: 30, gap: -4, unit: "%", actionable: false, humanGap: "4 points behind — within margin" },
];

// ─── Content Diversity ───────────────────────────────────────────────────

export const diversityStats = {
  topTenThreshold: 7,
  avgAllChannels: 4.7,
  growingAvg: 5.1,
  weakConversionAvg: 5.5,
};

// ─── What The Data Changed Our Mind About ───────────────────────────────

export const corrections = [
  {
    assumption: "More uploads = more growth",
    finding: "Upload cadence alone didn't predict growth. Cold channels included the highest-frequency uploaders.",
  },
  {
    assumption: "Most campaigns already follow up",
    finding: "41% went silent after the hero. Only 15% ran multi-format rollouts.",
  },
  {
    assumption: "More content types = stronger growth",
    finding: "Weak Conversion channels averaged more types (5.5) than Growing ones (5.1). Diversity without timing didn't convert.",
  },
];

// ─── Campaign Framework Timeline ─────────────────────────────────────────

export const frameworkTimeline = [
  { window: "Day 0", type: "Hero Moment", desc: "The attention peak. Official MV or first-listen visualiser.", color: "#0E0E0E" },
  { window: "Day 3–7", type: "World Expansion", desc: "BTS, making-of, or alternate visual. Deepens the story.", color: "#2C25FF" },
  { window: "Day 7–14", type: "Discovery Layer", desc: "Lyric video or performance clip. Search-friendly entry point.", color: "#1FBE7A" },
  { window: "Day 14–21", type: "Return Moment", desc: "Live session, remix, or acoustic. A new reason to come back.", color: "#FF4A1C" },
];

// ─── Success Checklist ───────────────────────────────────────────────────

export const successChecklist = [
  { item: "Hero moment planned", desc: "MV or visualiser — the attention peak" },
  { item: "Follow-up sequence decided before launch", desc: "Not reactive. Pre-mapped." },
  { item: "Content in the 7–14 day window", desc: "The period 85% of campaigns miss" },
  { item: "Multiple content formats", desc: "BTS, lyric, live, or remix — each serves a different purpose" },
  { item: "Campaign extends beyond release week", desc: "Audience return moments in weeks 2–3" },
  { item: "Shorts support", desc: "Clips, teasers, or vertical edits for discovery" },
];

// ─── Still Testing ───────────────────────────────────────────────────────

export const openQuestions = [
  "Does Shorts-only follow-up help or hinder longform?",
  "What's the optimal spacing within the follow-up window?",
  "Do lyric videos drive subscriber conversion or just search traffic?",
  "What drives subscriber conversion specifically?",
];

export const futureRoadmap = [
  "YouTube Studio integration for real-time data",
  "Watcher integration for live campaign tracking",
  "Campaign outcome tracking and attribution",
  "Long-term subscriber conversion benchmarks",
  "Seasonal pattern detection across genres",
];

// ─── What We Started to See (Watcher Thesis) ────────────────────────────

export const watcherThesis = {
  headline: "No single metric predicts growth.",
  subhead: "Growth appears when planning, timing, and content diversity work together — not when any one of them works alone.",
  factors: [
    {
      label: "Content Mix",
      detail: "Weak Conversion channels averaged more content types (5.5) than Growing ones (5.1). Diversity without timing didn't convert.",
      stat: "5.1 vs 5.5",
      statLabel: "Growing vs Weak Conversion avg types",
    },
    {
      label: "Campaign Timing",
      detail: "Channels with content in the 7–14 day window clustered disproportionately in Growing. Content after Day 30 showed no observable benefit.",
      stat: "7–14 days",
      statLabel: "The follow-through window",
    },
    {
      label: "Follow-Up",
      detail: "41% went silent after the hero. Only 15% ran a multi-format rollout. The gap between something and nothing was larger than the gap between good and great.",
      stat: "41%",
      statLabel: "Silent after hero asset",
    },
    {
      label: "Release Planning",
      detail: "Channels with pre-mapped campaign timelines clustered in healthier classifications. Correlation, not causation — but consistent.",
      stat: "Consistent",
      statLabel: "Correlation with channel health",
    },
  ],
  closingLine: "Growth comes from building return moments — not from any single content decision.",
};

// ─── Attention Is The Scarce Resource ────────────────────────────────────

export const attentionSection = {
  headline: "Attention is the scarce resource.",
  subhead: "The content already exists. The opportunity is how it works together.",
  points: [
    { label: "Plan earlier", detail: "Follow-up sequence decided before the hero drops." },
    { label: "Sequence better", detail: "Multiple attention peaks, not one spike." },
    { label: "Extend attention", detail: "The 7–14 day window. 85% of campaigns miss it." },
    { label: "Connect moments", detail: "Each asset gives audiences a reason to return." },
  ],
  closingThesis: "The opportunity isn't more content. It's building campaign worlds that give audiences reasons to return.",
};

// ─── Final Takeaways ─────────────────────────────────────────────────────

export const takeaways = [
  { title: "Plan follow-up before launch.", detail: "Campaign design starts in planning, not reaction." },
  { title: "Add live sessions.", detail: "15 points behind market. Low cost, high return value." },
  { title: "Add lyric videos.", detail: "10 points behind market. A discovery layer half the market already uses." },
  { title: "Think in return moments, not uploads.", detail: "Spacing matters more than volume." },
  { title: "Build campaign worlds, not content lists.", detail: "BTS for depth, lyric for discovery, live for connection, remix for reach." },
];
