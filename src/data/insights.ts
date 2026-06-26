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
  { pct: 41, label: "Silent", color: "#FF4A1C", desc: "No Shorts, no longform, nothing uploaded after the hero." },
  { pct: 35, label: "Shorts Only", color: "#FFD24C", desc: "Shorts exist but no longform follow-up is timed around releases." },
  { pct: 9, label: "Limited Longform", color: "#8A847A", desc: "One additional longform content type, but no structured sequence." },
  { pct: 15, label: "Multi-Format Rollout", color: "#1FBE7A", desc: "Two or more content types timed in the follow-up window." },
];

// ─── Confidence Tiers ───────────────────────────────────────────────────

export type ConfidenceLevel = 'high' | 'medium' | 'testing';

export const confidenceTiers: { level: ConfidenceLevel; label: string; color: string; items: string[] }[] = [
  {
    level: 'high', label: 'High Confidence', color: '#1FBE7A',
    items: [
      'Live sessions appear consistently among growing channels',
      'Multi-format support observed across strongest campaigns',
      'Campaign planning correlates with sustained attention',
    ],
  },
  {
    level: 'medium', label: 'Medium Confidence', color: '#FFD24C',
    items: [
      'Asset spacing within the 7–14 day window',
      'Follow-up timing and its effect on momentum',
    ],
  },
  {
    level: 'testing', label: 'Still Testing', color: '#8A847A',
    items: [
      'Subscriber conversion drivers',
      'Shorts-only follow-up impact on longform',
      'Visualiser contribution to campaign momentum',
    ],
  },
];

// ─── Tove Lo Timeline ───────────────────────────────────────────────────

export const toveLoTimeline = [
  {
    day: 0, label: "Day 0", type: "Official MV",
    thumbnail_url: "https://i.ytimg.com/vi/placeholder/hqdefault.jpg",
    youtube_url: null, views: null,
  },
  {
    day: 9, label: "Day 9", type: "BTS + Visualiser",
    thumbnail_url: null, youtube_url: null, views: null,
  },
  {
    day: 16, label: "Day 16", type: "Lyric Video + Remix",
    thumbnail_url: null, youtube_url: null, views: null,
  },
  {
    day: 23, label: "Day 23", type: "Visualiser",
    thumbnail_url: null, youtube_url: null, views: null,
  },
];

export const toveLoEvidence = {
  whyPicked: [
    'Top 9% content diversity (Rank 13 of 138)',
    '7 content formats used — 1.5x benchmark average',
    '6 pre-campaign assets before hero drop',
    '23-day rollout across OMV, BTS, Lyric, Remix, Visualiser',
  ],
  whyMatters: 'One of 14 channels in our dataset using 7+ content formats. Shows how sequencing across multiple weeks — not volume — can drive sustained attention.',
  benchmarkContext: 'Benchmark average: 5.2 content types. Top 10% threshold: 7+ types. Tove Lo uses 7 formats including Visualiser, Remix, Lyric Video, and BTS — a combination only 10% of channels match.',
};

// ─── Strategy Framework ──────────────────────────────────────────────────

export const strategyFramework = [
  {
    tier: "Emerging", goal: "Build Audience",
    artist_name: "mary in the junkyard", artist_slug: "mary-in-the-junkyard",
    desc: "Give fans multiple reasons to return",
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
    desc: "Turn launches into series of moments",
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
    learning: "The only case study artist who delivered content in the 7–14 day window. Growing classification despite modest views suggests this pattern contributes to channel health.",
    action: "Test building around live sessions. Adding one format per single (lyric video or visualiser) could push content diversity into the top 10%.",
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
    learning: "French The Kid already thinks in campaigns. The gap is not volume but post-release support — adding depth to the existing velocity is the opportunity.",
    action: "Test adding one post-release asset per single (lyric video or live session) while maintaining the rapid cadence. A sequencing refinement, not a strategy change.",
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
    learning: "GENER8ION achieved more with 5 uploads than most channels achieve with 25. Planned campaign moments outperform upload frequency.",
    action: "Test planning follow-up moments before launch. BTS within 48 hours and a follow-up single within 3 weeks creates multiple attention peaks from a single campaign.",
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
    learning: "The content exists. The instincts are right. The observable gap is timing: BTS assets land at Day 30 instead of Day 7–10.",
    action: "Test pulling the BTS forward to Day 7–10. This is a scheduling fix, not a creation ask — the highest-leverage change available.",
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
    learning: "Planning is one of the few variables we can control. Whether it correlates with improved performance is what we are testing.",
    action: "Test mapping every campaign timeline before launch. Hero, lyric at Day 14, live at Day 20, BTS ongoing — even a simple three-step sequence is better than reactive uploads.",
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
    finding: "Upload cadence alone did not predict growth in our dataset. Cold channels included some of the highest-frequency uploaders.",
  },
  {
    assumption: "Most campaigns already follow up",
    finding: "Only 15% ran multi-format rollouts. 41% went completely silent after the hero asset.",
  },
  {
    assumption: "More content types automatically means stronger growth",
    finding: "Weak Conversion channels averaged more content types (5.5) than Growing channels (5.1). Diversity without timing did not appear to convert.",
  },
];

// ─── Campaign Framework Timeline ─────────────────────────────────────────

export const frameworkTimeline = [
  { window: "Day 0", type: "Hero Asset", desc: "Official music video or first-listen visualiser", color: "#0E0E0E" },
  { window: "Day 3–7", type: "BTS / Visualiser", desc: "Behind-the-scenes or alternate visual treatment", color: "#2C25FF" },
  { window: "Day 7–14", type: "Lyric Video", desc: "Search-friendly lyric content or performance clip", color: "#1FBE7A" },
  { window: "Day 14–21", type: "Live / Remix / Acoustic", desc: "Live session, remix, or acoustic version", color: "#FF4A1C" },
];

// ─── Success Checklist ───────────────────────────────────────────────────

export const successChecklist = [
  { item: "Hero asset", desc: "Official music video or visualiser" },
  { item: "Shorts support", desc: "Clips, teasers, or vertical edits" },
  { item: "Follow-up plan", desc: "Content sequence decided before launch" },
  { item: "Additional longform asset", desc: "BTS, lyric video, live session, or remix" },
  { item: "Community support", desc: "Premieres, pinned comments, community posts" },
  { item: "Campaign extends beyond release week", desc: "Content dropping in weeks 2–3, not just day one" },
];

// ─── Still Testing ───────────────────────────────────────────────────────

export const openQuestions = [
  "Does Shorts-only follow-up help or hinder longform performance?",
  "What's the optimal asset spacing within the follow-up window?",
  "Do lyric videos drive subscriber conversion or just search traffic?",
  "What is the impact of visualisers on campaign momentum?",
  "What drives subscriber conversion specifically?",
  "How do album rollouts differ from single campaigns?",
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
  headline: "The strongest channels combine multiple behaviours consistently.",
  subhead: "No single metric predicts success. No single content type predicts growth. Channel health appears when multiple behaviours align.",
  factors: [
    {
      label: "Content Mix",
      detail: "Growing channels averaged 5.1 content types. But Weak Conversion channels averaged 5.5. Diversity alone did not predict growth — it had to be paired with timing and intent.",
      stat: "5.1 vs 5.5",
      statLabel: "Growing vs Weak Conversion avg types",
    },
    {
      label: "Campaign Timing",
      detail: "Channels with content in the 7–14 day follow-through window appeared disproportionately in the Growing classification. Late follow-up (Day 30+) showed no observable benefit.",
      stat: "7–14 days",
      statLabel: "Observed follow-through window",
    },
    {
      label: "Follow-Up",
      detail: "41% of campaigns went completely silent after the hero asset. Only 15% ran a multi-format rollout. The gap between doing something and doing nothing appeared larger than the gap between good and great.",
      stat: "41%",
      statLabel: "Silent after hero asset",
    },
    {
      label: "Release Planning",
      detail: "Channels where campaigns appeared planned (pre-mapped timelines, sequenced assets) clustered in healthier classifications. We cannot prove causation, but the correlation was consistent.",
      stat: "Consistent",
      statLabel: "Correlation with channel health",
    },
  ],
  closingLine: "Growth appears to come from creating more opportunities for audiences to return — not from any single content decision.",
};

// ─── Attention Is The Scarce Resource ────────────────────────────────────

export const attentionSection = {
  headline: "Attention is the scarce resource.",
  subhead: "Most teams already have content. Most opportunities come from designing how that content works together.",
  points: [
    { label: "Plan earlier", detail: "Decide the follow-up sequence before the hero drops." },
    { label: "Sequence better", detail: "Space assets to create multiple attention peaks, not one." },
    { label: "Extend attention", detail: "Use the 7–14 day window — the period most campaigns miss." },
    { label: "Connect moments", detail: "Each asset should give audiences a reason to return." },
  ],
  closingThesis: "The biggest opportunity isn't making more content. It's designing campaigns that create more opportunities for audiences to return.",
};

// ─── Final Takeaways ─────────────────────────────────────────────────────

export const takeaways = [
  { title: "Plan follow-up before launch.", detail: "Decide what comes after the hero asset before it drops. Campaign design starts in planning, not in reaction." },
  { title: "Add more live sessions.", detail: "Live sessions create an additional audience return point. Our biggest observed gap — low cost, high fan value." },
  { title: "Add more lyric videos.", detail: "Lyric videos create another entry point into the campaign. A search-friendly destination nearly half the market uses." },
  { title: "Think in attention peaks, not content pieces.", detail: "Spacing appeared to matter more than volume. Each asset should create a reason for audiences to come back." },
  { title: "Think in campaigns, not uploads.", detail: "Think in audience return points, not asset counts. Every piece of content should have a purpose and a place in the sequence." },
];
