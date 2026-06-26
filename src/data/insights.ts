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
  { pct: 35, label: "Shorts Only", color: "#FFD24C", desc: "Discovery layer active, but no deeper campaign moments to support." },
  { pct: 9, label: "Limited Longform", color: "#8A847A", desc: "One extra format. No structured sequence." },
  { pct: 15, label: "Multi-Format Campaign", color: "#1FBE7A", desc: "Multiple formats sequenced to create audience return moments." },
];

// ─── Confidence Tiers ───────────────────────────────────────────────────

export type ConfidenceLevel = 'high' | 'medium' | 'testing';

export const confidenceTiers: { level: ConfidenceLevel; label: string; color: string; items: string[] }[] = [
  {
    level: 'high', label: 'High Confidence', color: '#1FBE7A',
    items: [
      'Live sessions cluster among growing channels',
      'Multi-format campaigns create more audience return moments than single-asset releases',
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
    day: 13, label: "Day 13", type: "Behind the Scenes",
    purpose: "World Expansion", purposeDetail: "Deepen the story",
    thumbnail_url: null, youtube_url: null, views: null,
  },
  {
    day: 16, label: "Day 16", type: "Visualiser",
    purpose: "Audience Deepening", purposeDetail: "Alternate format, same world",
    thumbnail_url: null, youtube_url: null, views: null,
  },
  {
    day: 21, label: "Day 21", type: "Lyric Video",
    purpose: "Discovery Layer", purposeDetail: "Search-friendly entry point",
    thumbnail_url: null, youtube_url: null, views: null,
  },
  {
    day: 23, label: "Day 23", type: "Remix",
    purpose: "Return Moment", purposeDetail: "Reach new audiences",
    thumbnail_url: null, youtube_url: null, views: null,
  },
];

export const toveLoEvidence = {
  benchmarkStats: [
    { value: 'Top 9%', label: 'Multi-format campaign ranking', context: 'of 138 channels analysed' },
    { value: '5', label: 'Distinct format types', context: 'MV, BTS, Visualiser, Lyric, Remix' },
    { value: '23 days', label: 'Campaign rollout length', context: 'sustained cadence, not one burst' },
    { value: '4', label: 'Audience return moments', context: 'each planned before launch' },
  ],
  whyPicked: [
    'Top 9% multi-format campaign (Rank 13 of 138)',
    '5 campaign moments across 5 distinct formats',
    '23-day rollout across MV, BTS, Visualiser, Lyric, Remix',
    'Each asset had a clear purpose in the campaign world',
  ],
  whyMatters: 'Format diversity and deliberate spacing — not volume — drove sustained attention across 23 days.',
  benchmarkContext: 'Benchmark: 85% of campaigns go silent after Day 7. Tove Lo sustained 5 purposeful campaign moments across 23 days.',
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
    desc: "Campaign design over volume",
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
    campaignPattern: "Sustained album rollout",
    watcherClassification: "GROWING",
    heroBenchmark: {
      value: "76-day album rollout",
      insight: "A deliberate pre-release campaign building toward debut album Role Model Hermit — every single in a different format.",
    },
    benchmarkMetrics: [
      { value: "4+", label: "distinct video formats", context: "MV, acoustic, visualiser, live session" },
      { value: "Top 17%", label: "multi-format campaign", context: "Rank 24 of 138 channels" },
      { value: "Growing", label: "channel classification", context: "despite modest view counts" },
    ],
    whyMatters: 'Campaign design — not view counts — drove channel health. Monthly singles, each in a different format.',
    observations: [
      "Each single uses a different format — no repeats across the rollout",
      "View counts are modest but the sustained campaign pattern correlates with Growing classification",
    ],
    learning: "A sustained rollout with format variety — not a single viral moment — drove channel growth.",
    action: "Continue format variety across the album rollout. Each single gets a different visual treatment — the campaign world grows with every release.",
    campaign_type: "album_campaign",
    release_date: "2026-07-03",
    youtube_url: null,
    assets: [
      { asset_title: "Crash Landing MV", content_type: "official_video", days_from_hero: 0, youtube_url: null, thumbnail_url: null, views: 83000 },
      { asset_title: "Candelabra (Acoustic)", content_type: "acoustic", days_from_hero: 27, youtube_url: null, thumbnail_url: null, views: 12000 },
      { asset_title: "New Muscles MV", content_type: "official_video", days_from_hero: 55, youtube_url: null, thumbnail_url: null, views: 62000 },
      { asset_title: "Mouse Visualiser", content_type: "visualiser", days_from_hero: 76, youtube_url: null, thumbnail_url: null, views: 5100 },
    ],
  },
  {
    artist_name: "French The Kid",
    artist_slug: "french-the-kid",
    category: "Developing Artist",
    categoryLabel: "High Velocity Release Strategy",
    accent: "#FF4A1C",
    thumbnail_url: null,
    campaignPattern: "Pre-album momentum",
    watcherClassification: "WEAK_CONVERSION",
    heroBenchmark: {
      value: "49-day album campaign",
      insight: "Strong pre-album singles with high velocity — the question is what happens after the album drops.",
    },
    benchmarkMetrics: [
      { value: "2 singles", label: "pre-album campaign", context: "Ghosts → Therapy → album in 49 days" },
      { value: "469K", label: "lead single views", context: "Ghosts MV — strong opening velocity" },
      { value: "Weak", label: "conversion classification", context: "despite consistent view counts" },
    ],
    whyMatters: 'Shows strong pre-album instincts. The opportunity is extending the campaign beyond release day.',
    observations: [
      "Two singles building momentum toward album drop",
      "Strong view counts across multiple MVs — the audience is there",
      "Weak Conversion classification despite consistent velocity",
    ],
    learning: "The pre-album campaign shows strong instincts — multiple singles building toward the album. The opportunity is post-release depth: return moments after the album drops.",
    action: "Add post-album return moments — a live session, acoustic version, or remix. Extend the campaign beyond release day.",
    campaign_type: "album_campaign",
    release_date: "2026-06-19",
    youtube_url: null,
    assets: [
      { asset_title: "Ghosts MV", content_type: "official_video", days_from_hero: 0, youtube_url: null, thumbnail_url: null, views: 469000 },
      { asset_title: "Therapy MV", content_type: "official_video", days_from_hero: 19, youtube_url: null, thumbnail_url: null, views: 390000 },
      { asset_title: "Cocaine Clouds MV", content_type: "official_video", days_from_hero: 49, youtube_url: null, thumbnail_url: null, views: null },
    ],
  },
  {
    artist_name: "GENER8ION",
    artist_slug: "gener8ion",
    category: "Major Campaign",
    categoryLabel: "Major Campaign Playbook",
    accent: "#0E0E0E",
    thumbnail_url: null,
    campaignPattern: "Deliberate attention-building",
    watcherClassification: "GROWING",
    heroBenchmark: {
      value: "4.7M avg views/upload",
      insight: "Rank 21 of 138 channels by efficiency — achieved Growing classification with only 5 uploads across a deliberate 49-day campaign.",
    },
    benchmarkMetrics: [
      { value: "23.6M", label: "total campaign views", context: "Rank 43 of 138 channels" },
      { value: "49 days", label: "campaign span", context: "STORM to album launch — deliberate pacing" },
      { value: "5 uploads", label: "total longform", context: "lowest of any case study artist" },
    ],
    whyMatters: 'Shows how attention can be deliberately built across weeks — not compressed into one launch spike.',
    observations: [
      "BTS at Day 2 captured the initial interest window",
      "Album trailer at Day 28 rebuilt anticipation at the campaign midpoint",
      "LOVE & TEARS at Day 49 served as the album-week return moment",
    ],
    learning: "A 49-day campaign that built attention deliberately. BTS for depth, trailer for anticipation, title track for the return moment. More impact with 5 uploads than most channels get from 25.",
    action: "Plan the full campaign arc before launch. BTS within 48 hours. Anticipation-builder at the midpoint. Title track at album release. Multiple return moments from one campaign.",
    campaign_type: "album_campaign",
    release_date: "2026-06-12",
    youtube_url: null,
    assets: [
      { asset_title: "STORM MV", content_type: "official_video", days_from_hero: 0, youtube_url: null, thumbnail_url: null, views: 14000000 },
      { asset_title: "BTS", content_type: "bts", days_from_hero: 2, youtube_url: null, thumbnail_url: null, views: 198000 },
      { asset_title: "STORM II (Performance)", content_type: "performance", days_from_hero: 7, youtube_url: null, thumbnail_url: null, views: null },
      { asset_title: "Album Trailer", content_type: "trailer", days_from_hero: 28, youtube_url: null, thumbnail_url: null, views: 265000 },
      { asset_title: "LOVE & TEARS MV", content_type: "official_video", days_from_hero: 49, youtube_url: null, thumbnail_url: null, views: 1500000 },
    ],
  },
  {
    artist_name: "K-Trap",
    artist_slug: "k-trap",
    category: "Conversion Challenge",
    categoryLabel: "Conversion Challenge",
    accent: "#FFD24C",
    thumbnail_url: null,
    campaignPattern: "Rolling singles",
    watcherClassification: "WEAK_CONVERSION",
    heroBenchmark: {
      value: "Rank 12 of 138",
      insight: "Top 9% format diversity — more campaign moment types than most Growing channels — but each single exists in isolation.",
    },
    benchmarkMetrics: [
      { value: "1.7×", label: "more campaign moments than benchmark", context: "17 vs 9.8 average" },
      { value: "Top 9%", label: "format diversity", context: "8 campaign moment types" },
      { value: "Weak", label: "conversion classification", context: "despite volume exceeding Growing channels" },
    ],
    whyMatters: 'Shows that volume and variety alone do not convert. The missing piece is campaign design — connecting sequential releases into one world.',
    observations: [
      "Three standalone singles in 70 days, each with a different collaborator",
      "More campaign moments and format types than most Growing channels",
      "Each single exists in isolation — no connected campaign world",
    ],
    learning: "More content than most Growing channels. More format diversity. But each single exists in isolation. The opportunity is connecting sequential releases into a unified campaign world.",
    action: "Connect the next three singles into one campaign arc. Shared visual identity, cross-referencing assets, and a campaign narrative that ties them together.",
    campaign_type: "rolling_singles",
    release_date: null,
    youtube_url: null,
    assets: [
      { asset_title: "Change MV ft. G Herbo", content_type: "official_video", days_from_hero: 0, youtube_url: null, thumbnail_url: null, views: 879000 },
      { asset_title: "Mystery Box MV ft. Headie One", content_type: "official_video", days_from_hero: 15, youtube_url: null, thumbnail_url: null, views: 902000 },
      { asset_title: "Mystery Box BTS", content_type: "bts", days_from_hero: 23, youtube_url: null, thumbnail_url: null, views: 5300 },
      { asset_title: "Can't Say No MV ft. Young Adz", content_type: "official_video", days_from_hero: 70, youtube_url: null, thumbnail_url: null, views: 298000 },
    ],
  },
  {
    artist_name: "The Snuts",
    artist_slug: "the-snuts",
    category: "Campaign Preparation Example",
    categoryLabel: "Campaign Planning Example",
    accent: "#1FBE7A",
    thumbnail_url: null,
    campaignPattern: "Pre-mapped album rollout",
    watcherClassification: "WEAK_CONVERSION",
    heroBenchmark: {
      value: "Rank 12 of 138",
      insight: "Top 9% follow-up support with 22 campaign moments (2.2× benchmark) — the most structured campaign plan of any case study artist.",
    },
    benchmarkMetrics: [
      { value: "22", label: "total campaign moments", context: "2.2× the benchmark average" },
      { value: "6", label: "distinct format types", context: "OMV, Lyric, Live, Acoustic, Shorts, Session" },
      { value: "Pre-launch", label: "campaign timeline mapped", context: "every moment planned before first upload" },
    ],
    whyMatters: 'Shows how planning before launch gives teams more control over the release window.',
    observations: [
      "Campaign timeline mapped in Coach before any content dropped",
      "Multiple format extensions per single — live, session, and acoustic versions of Summer Rain",
      "139-day rollout toward October album, with monthly singles and sustained format variety",
    ],
    learning: "Planning is one of the few variables fully in our control. A 139-day album rollout with format extensions for every single.",
    action: "Map every campaign timeline before launch. Hero → live session Day 14 → lyric video Day 20. Even a three-step sequence beats reactive uploads.",
    campaign_type: "album_campaign",
    release_date: "2026-10-23",
    youtube_url: null,
    assets: [
      { asset_title: "Summer Rain OMV", content_type: "official_video", days_from_hero: 0, youtube_url: null, thumbnail_url: null, views: 177000 },
      { asset_title: "Summer Rain (Live at Beecraigs)", content_type: "live", days_from_hero: 16, youtube_url: null, thumbnail_url: null, views: 1300 },
      { asset_title: "Motherlands Lyric Video", content_type: "lyric_video", days_from_hero: 55, youtube_url: null, thumbnail_url: null, views: 8700 },
      { asset_title: "Defibrillator Lyric Video", content_type: "lyric_video", days_from_hero: 139, youtube_url: null, thumbnail_url: null, views: 6300 },
    ],
  },
];

// ─── Benchmarks ──────────────────────────────────────────────────────────

export const benchmarks = [
  { metric: "Live Sessions", virgin: 48, market: 63, gap: -15, unit: "%", actionable: true, humanGap: "15 points behind market" },
  { metric: "Lyric Videos", virgin: 44, market: 54, gap: -10, unit: "%", actionable: true, humanGap: "10 points behind market" },
  { metric: "Multi-Format Campaign", virgin: 13, market: 18, gap: -5, unit: "%", actionable: true, humanGap: "5 points behind market" },
  { metric: "Format Variety", virgin: 4.8, market: 4.6, gap: 0.2, unit: " avg formats", actionable: false, humanGap: "Comparable" },
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
    finding: "41% went silent after the hero. Only 15% ran multi-format campaigns.",
  },
  {
    assumption: "More formats = stronger growth",
    finding: "Weak Conversion channels averaged more formats (5.5) than Growing ones (5.1). Variety without timing didn't convert.",
  },
];

// ─── Campaign Framework Timeline ─────────────────────────────────────────

export const frameworkTimeline = [
  { window: "Day 0", type: "Hero Moment", desc: "The attention peak. Official MV or first-listen visualiser.", color: "#0E0E0E" },
  { window: "Day 3–7", type: "World Expansion", desc: "BTS, making-of, or alternate visual. Deepens the story.", color: "#2C25FF" },
  { window: "Day 7–14", type: "Search Layer", desc: "Lyric video or performance clip. Search-friendly entry point.", color: "#1FBE7A" },
  { window: "Day 14–21", type: "Return Moment", desc: "Live session, remix, or acoustic. A new reason to come back.", color: "#FF4A1C" },
];

// Shorts run alongside as a continuous discovery layer — not a separate campaign moment
export const shortsLayer = {
  label: "Discovery Layer",
  desc: "Shorts run throughout the campaign — clips, teasers, and vertical edits that introduce new audiences to the deeper campaign moments.",
  color: "#FFD24C",
};

// ─── Success Checklist ───────────────────────────────────────────────────

export const successChecklist = [
  { item: "Hero moment planned", desc: "MV or visualiser — the attention peak" },
  { item: "Follow-up sequence decided before launch", desc: "Not reactive. Pre-mapped." },
  { item: "Content in the 7–14 day window", desc: "The period 85% of campaigns miss" },
  { item: "Multiple campaign moments", desc: "BTS, lyric, live, or remix — each serves a different purpose in the campaign world" },
  { item: "Campaign extends beyond release week", desc: "Audience return moments in weeks 2–3" },
  { item: "Discovery layer active", desc: "Shorts running alongside — introducing new audiences to the campaign" },
];

// ─── Still Testing ───────────────────────────────────────────────────────

export const openQuestions = [
  "When the discovery layer (Shorts) runs alone, does it help or hinder deeper campaign moments?",
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
  subhead: "Growth appears when planning, timing, and format variety work together — not when any one of them works alone.",
  factors: [
    {
      label: "Format Variety",
      detail: "Weak Conversion channels averaged more formats (5.5) than Growing ones (5.1). Variety without timing didn't convert.",
      stat: "5.1 vs 5.5",
      statLabel: "Growing vs Weak Conversion avg formats",
    },
    {
      label: "Campaign Timing",
      detail: "Channels with content in the 7–14 day window clustered disproportionately in Growing. Content after Day 30 showed no observable benefit.",
      stat: "7–14 days",
      statLabel: "The follow-through window",
    },
    {
      label: "Follow-Up",
      detail: "41% went silent after the hero. Only 15% ran a multi-format campaign. The gap between something and nothing was larger than the gap between good and great.",
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
  closingLine: "Growth comes from building audience return moments — not from any single content decision.",
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
  { title: "Think in audience return moments, not uploads.", detail: "Spacing matters more than volume." },
  { title: "Build campaign worlds, not content lists.", detail: "BTS for depth, lyric for discovery, live for connection, remix for reach." },
];
