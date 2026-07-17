// ─── YouTube Campaign Intelligence V2 — Data Layer ────────────────────
// Source: 138-channel dataset, validated campaign framework, benchmark library
// Updated: June 2026
// Philosophy: Curate, don't collect. Every data point earns its place.

// ─── Types ──────────────────────────────────────────────────────────────

export interface BenchmarkCard {
  stat: string;
  headline: string;
  supporting: string;
  accent: string;
}

export interface EvidenceStat {
  value: string;
  label: string;
  context: string;
}

export interface YouTubeAsset {
  videoId: string;
  title: string;
  views: string;
  date: string;
  format: 'short' | 'longform';
  role: 'Hero' | 'Short' | 'Support' | 'Discovery' | 'Return';
  formatBadge: string;
  thumbnail: string;
}

export interface FormatComparison {
  format: string;
  virginPct: number;
  marketPct: number;
  gap: string; // e.g. "+16.6%" or "-15.2%"
  insight: string;
  virginLeads: boolean;
}

export interface CaseStudy {
  id: string;
  name: string;
  behaviour: string;
  question: string;
  accent: string;
  tier: 'our' | 'virgin' | 'market';
  tierLabel: string;
  tagline: string;
  structure: string;
  outcome: string;
  benchmarkPosition: string;
  whyMatters: string;
  evidence: EvidenceStat[];
  assets: YouTubeAsset[];
  benchmarkComparison: {
    datasetLabel: string;
    datasetValue: string;
    datasetContext: string;
    artistValue: string;
    artistContext: string;
  };
  learning: string;
}

// ─── Design Tokens ──────────────────────────────────────────────────────

export const TOKENS = {
  INK: '#0E0E0E',
  PAPER: '#FAF7F2',
  CREAM: '#F6F1E7',
  SMOKE: '#8A847A',
  BONE: '#E8E3DA',
  WARM: '#4A4640',
  SIGNAL: '#FF4A1C',
  MINT: '#1FBE7A',
  SUN: '#FFD24C',
  ELECTRIC: '#2C25FF',
  BLUSH: '#FFD3C9',
} as const;

// ─── Opening Stats ──────────────────────────────────────────────────────

export const openingStats = [
  { value: '87', label: 'Active Campaigns' },
  { value: '138', label: 'Channels Analysed' },
  { value: '9', label: 'Benchmark Case Studies' },
  { value: '3', label: 'Tiers of Evidence' },
];

// ─── Section 1: Benchmark Cards ─────────────────────────────────────────
// "What healthier campaigns do differently"
// Each card: big benchmark, one sentence, small supporting stat

export const benchmarkCards: BenchmarkCard[] = [
  {
    stat: '85%',
    headline: 'Most campaigns stop after the hero upload.',
    supporting: 'Only 15% of channels build multi-format campaigns with structured follow-up.',
    accent: TOKENS.SIGNAL,
  },
  {
    stat: '15%',
    headline: 'Only 15% build structured multi-format follow-up.',
    supporting: 'The benchmark campaigns in this presentation are from that 15%.',
    accent: TOKENS.MINT,
  },
  {
    stat: '5→',
    headline: 'Growing campaigns build campaign moments, not isolated uploads.',
    supporting: 'Channels with 4+ content types appear in the top 8% of the dataset.',
    accent: TOKENS.ELECTRIC,
  },
  {
    stat: '37%',
    headline: 'Multi-format campaigns reduce hero dependency.',
    supporting: 'The strongest campaigns distribute over 60% of views across non-hero content.',
    accent: TOKENS.SUN,
  },
];

// ─── Section 2: Campaign Blueprint ──────────────────────────────────────

export const blueprintSteps = [
  {
    label: 'Shorts',
    purpose: 'Discovery & Anticipation',
    detail: 'Pre-release teasers that build audience expectation',
    icon: '◆',
    color: TOKENS.SUN,
  },
  {
    label: 'Hero',
    purpose: 'Campaign Anchor',
    detail: 'The primary content moment — MV, visualiser, or lead single',
    icon: '●',
    color: TOKENS.SIGNAL,
  },
  {
    label: 'Support',
    purpose: 'World Building',
    detail: 'BTS, acoustic, lyric video, live session — each with a distinct job',
    icon: '■',
    color: TOKENS.ELECTRIC,
  },
  {
    label: 'Audience Return',
    purpose: 'Re-engagement',
    detail: 'Remix, collaboration, format variation — reasons to come back',
    icon: '▲',
    color: TOKENS.MINT,
  },
  {
    label: 'Campaign Outcome',
    purpose: 'Sustained Attention',
    detail: 'Lower hero dependency, longer campaign span, more discovery surfaces',
    icon: '★',
    color: TOKENS.WARM,
  },
];

// ─── Virgin vs Market Format Comparison ─────────────────────────────────

export const virginVsMarket: FormatComparison[] = [
  { format: 'Acoustic', virginPct: 22.0, marketPct: 5.4, gap: '+16.6%', insight: 'Strongest Virgin advantage. 4x more likely to publish acoustic versions.', virginLeads: true },
  { format: 'Visualiser', virginPct: 51.2, marketPct: 42.9, gap: '+8.4%', insight: 'Virgin leads in visualiser usage. Lower cost, high discovery value.', virginLeads: true },
  { format: 'Trailer / Teaser', virginPct: 12.2, marketPct: 3.6, gap: '+8.6%', insight: 'Virgin channels 3x more likely to use pre-release trailers.', virginLeads: true },
  { format: 'Shorts', virginPct: 48.8, marketPct: 46.4, gap: '+2.4%', insight: 'Near parity. Both groups underuse Shorts as campaign tools.', virginLeads: true },
  { format: 'Lyric Video', virginPct: 43.9, marketPct: 53.6, gap: '-9.7%', insight: 'Market leads. Lyric videos are the biggest format gap for Virgin.', virginLeads: false },
  { format: 'Live Session', virginPct: 63.4, marketPct: 78.6, gap: '-15.2%', insight: 'Biggest market advantage. Nearly 4 in 5 market channels publish live sessions.', virginLeads: false },
  { format: 'BTS', virginPct: 17.1, marketPct: 21.4, gap: '-4.4%', insight: 'Market slightly ahead. BTS content humanises campaigns.', virginLeads: false },
  { format: 'Music Video', virginPct: 76.8, marketPct: 76.8, gap: '0%', insight: 'Exact parity. Both groups treat MVs as the campaign foundation.', virginLeads: true },
];

// ─── Section 3 & 4: Case Studies ────────────────────────────────────────

export const caseStudies: CaseStudy[] = [
  // ─── TIER 1: OUR CAMPAIGNS ───────────────────────────────────────────
  {
    id: 'tove-lo',
    name: 'Tove Lo',
    behaviour: 'Campaign World Building',
    question: 'How do I build a world around one single?',
    accent: TOKENS.MINT,
    tier: 'our',
    tierLabel: 'Our Campaigns',
    tagline: 'Builds a campaign world around one song.',
    structure: 'Five distinct content types deployed around "I\'m your girl right?" across 23 days. The Official MV (1.5M views) establishes the visual world. The Visualiser offers an alternate cut. BTS humanises the process. Lyric Video creates a search-friendly discovery point. The Fcukers Remix brings in new audiences.',
    outcome: '5 content types across 23 days. 1.5M hero views on the Official MV. Multiple engagement surfaces for one release. The campaign demonstrates that a single doesn\'t need to be "one video and done."',
    benchmarkPosition: '5 content types places this campaign in the top 8% of the dataset. Most campaigns use just 2 types.',
    whyMatters: 'This campaign suggests that a single release can sustain 5+ pieces of content without audience fatigue, provided each format offers a genuinely different experience.',
    evidence: [
      { value: '1.5M', label: 'Hero views', context: 'Official MV anchors the campaign' },
      { value: '5', label: 'Content types', context: 'MV, BTS, Visualiser, Lyric, Remix' },
      { value: '23 days', label: 'Campaign span', context: 'sustained cadence from single release' },
      { value: 'Top 8%', label: 'Format diversity', context: 'vs dataset median of 2 formats' },
    ],
    assets: [
      {
        videoId: 'ERn_e8fiFPs',
        title: "I'm your girl right? (Official Video)",
        views: '1.5M',
        date: 'May 2026',
        format: 'longform',
        role: 'Hero',
        formatBadge: 'Official MV',
        thumbnail: 'https://i.ytimg.com/vi/ERn_e8fiFPs/mqdefault.jpg',
      },
      {
        videoId: 'GuKJIKSnOpc',
        title: "I'm your girl right? (Behind The Scenes)",
        views: '12K',
        date: 'Jun 2026',
        format: 'longform',
        role: 'Support',
        formatBadge: 'BTS',
        thumbnail: 'https://i.ytimg.com/vi/GuKJIKSnOpc/mqdefault.jpg',
      },
      {
        videoId: 'TfXUYACuik8',
        title: "I'm your girl right? (Her Cut) [Official Visualizer]",
        views: '37K',
        date: 'Jun 2026',
        format: 'longform',
        role: 'Support',
        formatBadge: 'Visualiser',
        thumbnail: 'https://i.ytimg.com/vi/TfXUYACuik8/mqdefault.jpg',
      },
      {
        videoId: 'l3rgXfuP32Q',
        title: "I'm your girl right? (Official Lyric Video)",
        views: '66K',
        date: 'Jun 2026',
        format: 'longform',
        role: 'Discovery',
        formatBadge: 'Lyric Video',
        thumbnail: 'https://i.ytimg.com/vi/l3rgXfuP32Q/mqdefault.jpg',
      },
      {
        videoId: 'irFABAPRycw',
        title: "I'm your girl right? (@Fcukers Remix) [Official Audio]",
        views: '13K',
        date: 'Jun 2026',
        format: 'longform',
        role: 'Return',
        formatBadge: 'Remix',
        thumbnail: 'https://i.ytimg.com/vi/irFABAPRycw/mqdefault.jpg',
      },
    ],
    benchmarkComparison: {
      datasetLabel: '138-Channel Benchmark',
      datasetValue: '85%',
      datasetContext: 'go silent after Day 7',
      artistValue: '5',
      artistContext: 'purposeful formats across 23 days',
    },
    learning: 'Every asset had a job. Every job expanded the campaign world.',
  },
  {
    id: 'gener8ion',
    name: 'GENER8ION',
    behaviour: 'Creative Efficiency',
    question: 'How do I maximise impact from limited assets?',
    accent: TOKENS.ELECTRIC,
    tier: 'our',
    tierLabel: 'Our Campaigns',
    tagline: 'Proves creative efficiency can beat volume.',
    structure: 'A Trailer Short (265K views) featuring Yung Lean front-loaded discovery before the STORM Official MV (14M views). LOVE & TEARS BTS (198K) sustained the campaign. LOVE & TEARS featuring Yannis Philippakis (1.5M) closed the arc as a second single.',
    outcome: '14M views on STORM starring Yung Lean from just 4 assets. 3.99M views per asset — 41x the dataset median of 97K.',
    benchmarkPosition: '3.99M views per asset places this in the top 5.7% of the dataset. Median is 97K views per asset.',
    whyMatters: 'This campaign suggests that a single strategically placed Short can function as a campaign trailer, generating anticipation before the main content.',
    evidence: [
      { value: '14M', label: 'Hero views', context: 'STORM starring Yung Lean' },
      { value: '3.99M', label: 'Views per asset', context: 'Top 5.7% of 87 active campaigns' },
      { value: '4', label: 'Total assets', context: 'fewest of any benchmark campaign' },
      { value: '41×', label: 'Above median', context: 'dataset median: 97K views/asset' },
    ],
    assets: [
      {
        videoId: 'di1E6JTuYRE',
        title: 'LOVE & TEARS - Album Trailer',
        views: '265K',
        date: 'May 2026',
        format: 'short',
        role: 'Short',
        formatBadge: 'Trailer Short',
        thumbnail: 'https://i.ytimg.com/vi/di1E6JTuYRE/mqdefault.jpg',
      },
      {
        videoId: 'x6_mbnsh6VU',
        title: 'GENER8ION - STORM starring Yung Lean',
        views: '14M',
        date: 'May 2026',
        format: 'longform',
        role: 'Hero',
        formatBadge: 'Official MV',
        thumbnail: 'https://i.ytimg.com/vi/x6_mbnsh6VU/mqdefault.jpg',
      },
      {
        videoId: 'Xoi7reIF2r8',
        title: 'GENER8ION - STORM (BTS) Starring Yung Lean',
        views: '198K',
        date: 'Jun 2026',
        format: 'longform',
        role: 'Support',
        formatBadge: 'BTS',
        thumbnail: 'https://i.ytimg.com/vi/Xoi7reIF2r8/mqdefault.jpg',
      },
      {
        videoId: '5NGIpXM8Cn0',
        title: 'GENER8ION - LOVE & TEARS featuring Yannis Philippakis',
        views: '1.5M',
        date: 'Jun 2026',
        format: 'longform',
        role: 'Return',
        formatBadge: 'Follow-up Single',
        thumbnail: 'https://i.ytimg.com/vi/5NGIpXM8Cn0/mqdefault.jpg',
      },
    ],
    benchmarkComparison: {
      datasetLabel: 'Dataset Median',
      datasetValue: '97K',
      datasetContext: 'views per asset',
      artistValue: '3.99M',
      artistContext: 'views per asset — 41× higher',
    },
    learning: 'Volume is not strategy. Four assets with precision placement outperformed campaigns with twenty.',
  },
  {
    id: 'french-the-kid',
    name: 'French The Kid',
    behaviour: 'Shorts as Campaign Architecture',
    question: 'How should I use Shorts in a campaign?',
    accent: TOKENS.SUN,
    tier: 'our',
    tierLabel: 'Our Campaigns',
    tagline: 'Uses Shorts as pre-release campaign signals.',
    structure: 'Three single releases — Ghosts (470K), Therapy (390K), Cocaine Clouds (2.7K) — each preceded by a dedicated Teaser Short. The Shorts function as announcements and engagement hooks, not repurposed clips from the MV. The pattern was repeated consistently across all three cycles.',
    outcome: 'Consistent Short-before-longform pattern across 3 releases. Each Short primed the audience for the following single. Ghosts MV reached 470K views, Therapy MV 390K.',
    benchmarkPosition: 'Only 17.2% of channels use any Shorts. Only 11.5% deploy a Shorts-before-longform pattern. French The Kid\'s three-cycle repetition is unique in the dataset.',
    whyMatters: 'This campaign suggests that Shorts can serve as structural campaign elements — specifically, as consistent pre-release announcements repeated across multiple releases.',
    evidence: [
      { value: '3×', label: 'Pattern repetition', context: 'Short → Single, repeated 3 times' },
      { value: 'Top 11%', label: 'Shorts-first strategy', context: 'only 11.5% use Shorts before longform' },
      { value: '3', label: 'Campaign cycles', context: 'Ghosts → Therapy → Cocaine Clouds' },
      { value: 'Unique', label: 'Consistency', context: 'no other channel repeats this pattern' },
    ],
    assets: [
      {
        videoId: '8ttG_f_4cYQ',
        title: 'French The Kid – Ghosts (Video Trailer)',
        views: '3K',
        date: 'May 2026',
        format: 'short',
        role: 'Short',
        formatBadge: 'Teaser Short',
        thumbnail: 'https://i.ytimg.com/vi/8ttG_f_4cYQ/mqdefault.jpg',
      },
      {
        videoId: 'Jnw_w6lBLBQ',
        title: 'French The Kid - Ghosts (Official Video)',
        views: '470K',
        date: 'May 2026',
        format: 'longform',
        role: 'Hero',
        formatBadge: 'Official MV',
        thumbnail: 'https://i.ytimg.com/vi/Jnw_w6lBLBQ/mqdefault.jpg',
      },
      {
        videoId: 'y6Cn2TucOS8',
        title: 'French The Kid – Therapy (Video Trailer)',
        views: '6.5K',
        date: 'Jun 2026',
        format: 'short',
        role: 'Short',
        formatBadge: 'Teaser Short',
        thumbnail: 'https://i.ytimg.com/vi/y6Cn2TucOS8/mqdefault.jpg',
      },
      {
        videoId: 'OaEgX8Qu16M',
        title: 'French The Kid - Therapy (Official Music Video)',
        views: '390K',
        date: 'Jun 2026',
        format: 'longform',
        role: 'Hero',
        formatBadge: 'Official MV',
        thumbnail: 'https://i.ytimg.com/vi/OaEgX8Qu16M/mqdefault.jpg',
      },
      {
        videoId: 'E1VJAWV_pX0',
        title: "French The Kid - 'Cocaine Clouds' Teaser",
        views: '2.6K',
        date: 'Jun 2026',
        format: 'short',
        role: 'Short',
        formatBadge: 'Teaser Short',
        thumbnail: 'https://i.ytimg.com/vi/E1VJAWV_pX0/mqdefault.jpg',
      },
      {
        videoId: 'd1ATtu2GP_g',
        title: 'French The Kid - Cocaine Clouds (Official Video)',
        views: '2.7K',
        date: 'Jun 2026',
        format: 'longform',
        role: 'Hero',
        formatBadge: 'Official MV',
        thumbnail: 'https://i.ytimg.com/vi/d1ATtu2GP_g/mqdefault.jpg',
      },
    ],
    benchmarkComparison: {
      datasetLabel: 'Most Campaigns',
      datasetValue: '0',
      datasetContext: 'Shorts used in campaign structure',
      artistValue: '3',
      artistContext: 'deliberate Short → Single sequences',
    },
    learning: 'Shorts aren\'t afterthoughts. They\'re campaign infrastructure — announcement moments that prime the audience.',
  },
  {
    id: 'k-trap',
    name: 'K-Trap',
    behaviour: 'Sustained Campaign Momentum',
    question: 'How do I keep a campaign alive across 60+ days?',
    accent: TOKENS.SIGNAL,
    tier: 'our',
    tierLabel: 'Our Campaigns',
    tagline: 'Uses collaborations to sustain a 96-day campaign.',
    structure: 'Multiple single releases across 96 days with G Herbo, Headie One, and Young Adz as collaboration bridges. CHANGE ft. G Herbo (880K) opened the arc. Mystery Box ft. Headie One (902K) sustained momentum. Can\'t Say No ft. Young Adz (241K) closed the campaign. BTS content accompanied each release.',
    outcome: '96-day campaign span — the longest structured campaign in the internal portfolio. 2M+ combined views across collaboration singles.',
    benchmarkPosition: '96-day span places this well beyond the top 5.7% of the dataset (87+ days). The median campaign span is 50 days. K-Trap\'s campaign is nearly double the median.',
    whyMatters: 'This campaign suggests that feature collaborations can function as campaign infrastructure — structural bridges that maintain momentum across extended timelines.',
    evidence: [
      { value: '3', label: 'Collaborators', context: 'G Herbo, Headie One, Young Adz' },
      { value: '96 days', label: 'Campaign span', context: 'Top 5.7% of dataset (87+ days)' },
      { value: '2M+', label: 'Combined views', context: 'across collaboration singles' },
      { value: '5', label: 'Assets', context: 'MVs + BTS content per release' },
    ],
    assets: [
      {
        videoId: 'nLu0bRgDSuQ',
        title: 'K-TRAP FT G HERBO - CHANGE (OFFICIAL VIDEO)',
        views: '880K',
        date: 'Apr 2026',
        format: 'longform',
        role: 'Hero',
        formatBadge: 'Official MV',
        thumbnail: 'https://i.ytimg.com/vi/nLu0bRgDSuQ/mqdefault.jpg',
      },
      {
        videoId: 'VVV8WOjESSE',
        title: 'K-TRAP FT. HEADIE ONE - MYSTERY BOX [MUSIC VIDEO]',
        views: '902K',
        date: 'May 2026',
        format: 'longform',
        role: 'Return',
        formatBadge: 'Collaboration MV',
        thumbnail: 'https://i.ytimg.com/vi/VVV8WOjESSE/mqdefault.jpg',
      },
      {
        videoId: 'gGfU3Xv7Mfc',
        title: 'K-Trap ft Headie One - Mystery Box - Behind The Scenes',
        views: '5.3K',
        date: 'May 2026',
        format: 'longform',
        role: 'Support',
        formatBadge: 'BTS',
        thumbnail: 'https://i.ytimg.com/vi/gGfU3Xv7Mfc/mqdefault.jpg',
      },
      {
        videoId: 'Z5vSpK5OMKs',
        title: "K-Trap; Young Adz - CAN'T SAY NO (Official Video)",
        views: '241K',
        date: 'Jun 2026',
        format: 'longform',
        role: 'Return',
        formatBadge: 'Collaboration MV',
        thumbnail: 'https://i.ytimg.com/vi/Z5vSpK5OMKs/mqdefault.jpg',
      },
      {
        videoId: '5hI9UgAMWAE',
        title: "K-Trap - Can't Say No Feat. Young Adz - Behind The Scenes",
        views: '2.9K',
        date: 'Jun 2026',
        format: 'longform',
        role: 'Support',
        formatBadge: 'BTS',
        thumbnail: 'https://i.ytimg.com/vi/5hI9UgAMWAE/mqdefault.jpg',
      },
    ],
    benchmarkComparison: {
      datasetLabel: 'Dataset Median',
      datasetValue: '50d',
      datasetContext: 'typical campaign span',
      artistValue: '96d',
      artistContext: 'sustained through collaboration bridges',
    },
    learning: 'Collaborations aren\'t bonus content. They\'re campaign infrastructure — bridges that sustain momentum between personal releases.',
  },
  {
    id: 'mary-in-the-junkyard',
    name: 'Mary in the Junkyard',
    behaviour: 'Developing Artist Excellence',
    question: 'What does a real campaign look like at small scale?',
    accent: TOKENS.WARM,
    tier: 'our',
    tierLabel: 'Our Campaigns',
    tagline: 'Shows multi-format structure works at developing scale.',
    structure: 'A developing artist deploying 4 content types across the Crash Landing and New Muscles campaign. Crash Landing MV (83K) opened the arc with a live session (8.4K). New Muscles MV (62K) renewed the campaign with another live session (4.7K). Mouse visualiser (5.3K) sustained the rollout over 3 months.',
    outcome: '4 content types deployed across a 3-month rollout. 62K hero views on New Muscles, 83K on Crash Landing. Campaign structure proportionally identical to a major-label campaign — the only difference is audience size.',
    benchmarkPosition: 'Median content types across the dataset is 2. At the developing artist tier (sub-100K subs), 4 content types is exceptionally rare.',
    whyMatters: 'This campaign suggests that multi-format campaign architecture is scale-independent. Format diversity correlates with lower hero dependency regardless of audience size.',
    evidence: [
      { value: '62K', label: 'Hero views', context: 'New Muscles — developing scale' },
      { value: '4', label: 'Content types', context: 'MV, Live Session, Visualiser, Audio' },
      { value: '83K', label: 'Crash Landing', context: 'previous single with same structure' },
      { value: '3 months', label: 'Sustained activity', context: 'not one burst, ongoing cadence' },
    ],
    assets: [
      {
        videoId: 'vYWFjdiSbPU',
        title: 'mary in the junkyard - Crash Landing (Official)',
        views: '83K',
        date: 'Apr 2026',
        format: 'longform',
        role: 'Hero',
        formatBadge: 'Official MV',
        thumbnail: 'https://i.ytimg.com/vi/vYWFjdiSbPU/mqdefault.jpg',
      },
      {
        videoId: 'n3wcUX7eWHQ',
        title: 'mary in the junkyard - Crash Landing (live session recording)',
        views: '8.4K',
        date: 'Apr 2026',
        format: 'longform',
        role: 'Support',
        formatBadge: 'Live Session',
        thumbnail: 'https://i.ytimg.com/vi/n3wcUX7eWHQ/mqdefault.jpg',
      },
      {
        videoId: 'k_bZX1E-yqI',
        title: 'New Muscles (Official Music video)',
        views: '62K',
        date: 'May 2026',
        format: 'longform',
        role: 'Hero',
        formatBadge: 'Official MV',
        thumbnail: 'https://i.ytimg.com/vi/k_bZX1E-yqI/mqdefault.jpg',
      },
      {
        videoId: 'ULH6uRAzMXM',
        title: 'mary in the junkyard - New Muscles (live session recording)',
        views: '4.7K',
        date: 'Jun 2026',
        format: 'longform',
        role: 'Support',
        formatBadge: 'Live Session',
        thumbnail: 'https://i.ytimg.com/vi/ULH6uRAzMXM/mqdefault.jpg',
      },
      {
        videoId: 'rMXL8ZfgTko',
        title: 'Mouse (visualiser)',
        views: '5.3K',
        date: 'Jun 2026',
        format: 'longform',
        role: 'Discovery',
        formatBadge: 'Visualiser',
        thumbnail: 'https://i.ytimg.com/vi/rMXL8ZfgTko/mqdefault.jpg',
      },
    ],
    benchmarkComparison: {
      datasetLabel: 'Most Developing Artists',
      datasetValue: '1–2',
      datasetContext: 'formats per release',
      artistValue: '4+',
      artistContext: 'formats across 3-month rollout',
    },
    learning: 'Campaign architecture is not a luxury. A developing artist can build the same structure as a major. The framework scales down.',
  },
  {
    id: 'angus-julia-stone',
    name: 'Angus & Julia Stone',
    behaviour: 'Creative Sequencing',
    question: 'How do I sustain one song across multiple weeks?',
    accent: '#8B5CF6', // Purple for distinction
    tier: 'our',
    tierLabel: 'Our Campaigns',
    tagline: 'Builds anticipation by releasing the MV last.',
    structure: '"Karaoke Bar" across 6 distinct formats over 29 days. Lyric Video (92K) launched first. Two Acoustic performances followed — Live in Byron Bay (36K) and Live in Tokyo (28K). Piano Version (23K) and a Sugarcane Mountain Studios live session (20K) deepened the world. The Official MV (540K) arrived last as the campaign\'s culmination, not its starting gun.',
    outcome: '6 uploads, 5 content types, 29-day span. The Official MV (540K views) received the highest single-asset views despite being released last — the 5 pre-MV formats built the audience that made it land.',
    benchmarkPosition: '5 content types places this in the top 8% of the dataset. The MV-last sequencing strategy is unique — no other campaign in 87 active channels releases the MV as the final major content piece.',
    whyMatters: 'This campaign suggests that the traditional MV-first release strategy may not be optimal in all cases. Format variation before the MV can build familiarity and amplify reception.',
    evidence: [
      { value: '540K', label: 'MV views', context: 'released last, after 5 other formats' },
      { value: '6', label: 'Total formats', context: 'Lyric, Acoustic, Piano, Live, MV' },
      { value: '5', label: 'Pre-MV assets', context: 'audience primed before hero drop' },
      { value: 'Inverted', label: 'Release order', context: 'MV last, not first' },
    ],
    assets: [
      {
        videoId: 'fzyZ6NIKjtM',
        title: 'Angus & Julia Stone - Karaoke Bar (Lyric Video)',
        views: '92K',
        date: 'May 2026',
        format: 'longform',
        role: 'Discovery',
        formatBadge: 'Lyric Video',
        thumbnail: 'https://i.ytimg.com/vi/fzyZ6NIKjtM/mqdefault.jpg',
      },
      {
        videoId: '8-Xjerd4D14',
        title: 'Angus & Julia Stone - Karaoke Bar Acoustic Video (Live in Byron Bay)',
        views: '36K',
        date: 'Jun 2026',
        format: 'longform',
        role: 'Support',
        formatBadge: 'Acoustic',
        thumbnail: 'https://i.ytimg.com/vi/8-Xjerd4D14/mqdefault.jpg',
      },
      {
        videoId: 'eJNNAYJzsK4',
        title: 'Angus & Julia Stone - Karaoke Bar Acoustic Performance (Live in Tokyo)',
        views: '28K',
        date: 'Jun 2026',
        format: 'longform',
        role: 'Support',
        formatBadge: 'Acoustic (Tokyo)',
        thumbnail: 'https://i.ytimg.com/vi/eJNNAYJzsK4/mqdefault.jpg',
      },
      {
        videoId: 'v5jGyEqOHnI',
        title: 'Angus & Julia Stone - Karaoke Bar (Piano Version)',
        views: '23K',
        date: 'Jun 2026',
        format: 'longform',
        role: 'Support',
        formatBadge: 'Piano Version',
        thumbnail: 'https://i.ytimg.com/vi/v5jGyEqOHnI/mqdefault.jpg',
      },
      {
        videoId: 'T7YsMzvelPc',
        title: 'Angus & Julia Stone - Karaoke Bar (Sugarcane Mountain Studios)',
        views: '20K',
        date: 'Jun 2026',
        format: 'longform',
        role: 'Support',
        formatBadge: 'Live Session',
        thumbnail: 'https://i.ytimg.com/vi/T7YsMzvelPc/mqdefault.jpg',
      },
      {
        videoId: 'QAFqzxnFZyE',
        title: 'Angus & Julia Stone - Karaoke Bar (Official Music Video)',
        views: '540K',
        date: 'Jun 2026',
        format: 'longform',
        role: 'Hero',
        formatBadge: 'Official MV',
        thumbnail: 'https://i.ytimg.com/vi/QAFqzxnFZyE/mqdefault.jpg',
      },
    ],
    benchmarkComparison: {
      datasetLabel: 'Most Campaigns',
      datasetValue: 'MV first',
      datasetContext: 'launch with the official video',
      artistValue: 'MV last',
      artistContext: 'build familiarity, then deliver the visual statement',
    },
    learning: 'The MV doesn\'t have to come first. Build familiarity through format variation, then let the official video arrive as the culmination.',
  },

  // ─── TIER 2: WIDER VIRGIN ────────────────────────────────────────────
  {
    id: 'ezra-collective',
    name: 'Ezra Collective',
    behaviour: 'Live Session as Campaign Spine',
    question: 'Can live sessions be the main event?',
    accent: '#E85D75', // Rose for Virgin tier
    tier: 'virgin',
    tierLabel: 'Wider Virgin',
    tagline: 'Makes live sessions the campaign spine.',
    structure: 'Dance, No One\'s Watching album campaign built around live performances. Abbey Road Sessions opened the arc. Royal Albert Hall live (57K) and We Love Green (7.6K) sustained it. Kano collaboration at Alexandra Palace (110K) drove a major peak. Only Love feat. Pa Salieu Official MV (135K) arrived as the campaign\'s visual statement.',
    outcome: '5+ live sessions from 4 venues. 135K views on the Official MV — but live sessions carry the campaign architecture, not the MV.',
    benchmarkPosition: '5 live sessions places this in the top 1.1% of the dataset (median: 0, max: 5). Ezra Collective is literally the most live-session-heavy campaign in 87 active channels.',
    whyMatters: 'This campaign suggests that live performance footage can function as primary campaign content — not supplementary material. Venue diversity creates natural format variation.',
    evidence: [
      { value: '5+', label: 'Live sessions', context: 'Abbey Road, Royal Albert Hall, Alexandra Palace, We Love Green' },
      { value: '135K', label: 'Official MV views', context: 'Only Love feat. Pa Salieu' },
      { value: '110K', label: 'Live highlight', context: 'with Kano at Alexandra Palace' },
      { value: '24', label: 'Total uploads', context: 'live-led campaign architecture' },
    ],
    assets: [
      {
        videoId: 'avZFcWpRQv4',
        title: "Dance; No One's Watching - Abbey Road Sessions",
        views: '12K',
        date: 'Dec 2025',
        format: 'longform',
        role: 'Support',
        formatBadge: 'Live Session',
        thumbnail: 'https://i.ytimg.com/vi/avZFcWpRQv4/mqdefault.jpg',
      },
      {
        videoId: 'moA2MGjIgfk',
        title: 'Ezra Collective - I Have A God feat. Zara McFarlane (Live at the Royal Albert Hall)',
        views: '57K',
        date: 'Apr 2026',
        format: 'longform',
        role: 'Support',
        formatBadge: 'Live Session',
        thumbnail: 'https://i.ytimg.com/vi/moA2MGjIgfk/mqdefault.jpg',
      },
      {
        videoId: 'Jih5_ZRlQqc',
        title: "Ezra Collective & Kano - 3 Wheel ups / P's and Q's (Live at Alexandra Palace)",
        views: '110K',
        date: 'May 2026',
        format: 'longform',
        role: 'Hero',
        formatBadge: 'Live Session',
        thumbnail: 'https://i.ytimg.com/vi/Jih5_ZRlQqc/mqdefault.jpg',
      },
      {
        videoId: '3ziixar3gqI',
        title: 'Ezra Collective - Only Love feat. Pa Salieu (Official Video)',
        views: '135K',
        date: 'Jun 2026',
        format: 'longform',
        role: 'Hero',
        formatBadge: 'Official MV',
        thumbnail: 'https://i.ytimg.com/vi/3ziixar3gqI/mqdefault.jpg',
      },
      {
        videoId: 'CrO0StTKDac',
        title: 'Ezra Collective - Hear My Cry (Live at We Love Green 2025)',
        views: '7.6K',
        date: 'Apr 2026',
        format: 'longform',
        role: 'Support',
        formatBadge: 'Live Session',
        thumbnail: 'https://i.ytimg.com/vi/CrO0StTKDac/mqdefault.jpg',
      },
    ],
    benchmarkComparison: {
      datasetLabel: 'Most Campaigns',
      datasetValue: '0',
      datasetContext: 'live sessions in campaign',
      artistValue: '5',
      artistContext: 'live sessions across 4 venues before MV',
    },
    learning: 'Live sessions can carry a campaign. The MV becomes the culmination, not the foundation.',
  },

  // ─── TIER 3: WIDER MARKET ────────────────────────────────────────────
  {
    id: 'olivia-rodrigo',
    name: 'Olivia Rodrigo',
    behaviour: 'Album Campaign at Scale',
    question: 'What does the full playbook look like?',
    accent: '#06B6D4', // Cyan for market tier
    tier: 'market',
    tierLabel: 'Wider Market',
    tagline: 'Shows the full album playbook at scale.',
    structure: 'Three MVs as campaign tentpoles: drop dead (40M), the cure (17M), stupid song (8.1M). Acoustic version of drop dead (3.1M) and SNL performance (5.2M) as support layers. 11 lyric videos giving every album track a visual home. Three-phase structure: lead single → album week → subsequent singles.',
    outcome: '40M views on drop dead alone. 30+ campaign assets including MVs, lyric videos, and broadcast performances.',
    benchmarkPosition: '6 content types is top 2.3% of the dataset (only 2 channels out of 87 hit 6 types). 37.2% hero dependency at this view count indicates genuine audience distribution.',
    whyMatters: 'This campaign suggests that album campaigns benefit from a three-phase structure and that batch lyric videos function as a catalogue — giving every track a visual home.',
    evidence: [
      { value: '40M', label: 'Lead single views', context: 'drop dead — Official MV' },
      { value: '30+', label: 'Campaign assets', context: 'MVs, lyric videos, performances, BTS' },
      { value: '11', label: 'Lyric videos', context: 'one per album track — full catalogue' },
      { value: '3', label: 'MVs', context: 'drop dead → the cure → stupid song' },
    ],
    assets: [
      {
        videoId: '78wrful9cVU',
        title: 'Olivia Rodrigo - drop dead (Official Music Video)',
        views: '40M',
        date: 'Apr 2026',
        format: 'longform',
        role: 'Hero',
        formatBadge: 'Official MV',
        thumbnail: 'https://i.ytimg.com/vi/78wrful9cVU/mqdefault.jpg',
      },
      {
        videoId: 'B402rKl4bUg',
        title: 'Olivia Rodrigo - the cure (Official Music Video)',
        views: '17M',
        date: 'May 2026',
        format: 'longform',
        role: 'Hero',
        formatBadge: 'Official MV',
        thumbnail: 'https://i.ytimg.com/vi/B402rKl4bUg/mqdefault.jpg',
      },
      {
        videoId: 'Rt9tW3cMLhI',
        title: 'Olivia Rodrigo - stupid song (Official Music Video)',
        views: '8.1M',
        date: 'Jun 2026',
        format: 'longform',
        role: 'Hero',
        formatBadge: 'Official MV',
        thumbnail: 'https://i.ytimg.com/vi/Rt9tW3cMLhI/mqdefault.jpg',
      },
      {
        videoId: 'f3zv0-zOqak',
        title: 'Olivia Rodrigo - drop dead (acoustic)',
        views: '3.1M',
        date: 'May 2026',
        format: 'longform',
        role: 'Support',
        formatBadge: 'Acoustic',
        thumbnail: 'https://i.ytimg.com/vi/f3zv0-zOqak/mqdefault.jpg',
      },
      {
        videoId: 'wwEUB7jqS88',
        title: 'Olivia Rodrigo - begged (Saturday Night Live 2026)',
        views: '5.2M',
        date: 'May 2026',
        format: 'longform',
        role: 'Support',
        formatBadge: 'Live Performance',
        thumbnail: 'https://i.ytimg.com/vi/wwEUB7jqS88/mqdefault.jpg',
      },
    ],
    benchmarkComparison: {
      datasetLabel: 'Dataset Median',
      datasetValue: '2',
      datasetContext: 'content types per campaign',
      artistValue: '6',
      artistContext: 'content types — top 2.3% of dataset',
    },
    learning: 'The full album playbook: MV tentpoles, batch lyric videos as catalogue, broadcast moments, and structured BTS. Every format has a purpose.',
  },
  {
    id: 'rolling-stones',
    name: 'The Rolling Stones',
    behaviour: 'Legacy Artist Format Adoption',
    question: 'Does format diversity work for legacy artists?',
    accent: '#DC2626', // Red for Stones
    tier: 'market',
    tierLabel: 'Wider Market',
    tagline: 'Proves format diversity is not generational.',
    structure: 'Foreign Tongues album campaign across 6 content types in 29 days. Album Trailer Short (411K) front-loaded discovery. In The Stars Official MV (4.9M) anchored the campaign with a Lyric Video (1.2M) and BTS (87K). Rough And Twisted Lyric Video (249K) and Visualiser (269K) extended the campaign beyond the lead single.',
    outcome: '4.9M views on In The Stars Official MV. 411K on the Album Trailer Short. 6 content types in 29 days — matching the format count of the most diverse campaigns in the dataset.',
    benchmarkPosition: '6 content types is top 2.3% of the dataset. Among 1M+ subscriber channels, 6 content types is exceptionally rare — most large channels rely on MV-only strategies.',
    whyMatters: 'This campaign suggests that legacy artists benefit from the same multi-format approach as newer acts — possibly more so, because their audience may discover content through different format preferences.',
    evidence: [
      { value: '4.9M', label: 'Lead single views', context: 'In The Stars — Official MV' },
      { value: '6+', label: 'Content types', context: 'MV, Lyric, BTS, Visualiser, Short, Audio' },
      { value: '29 days', label: 'Campaign span', context: 'sustained multi-format release' },
      { value: '411K', label: 'Trailer Short views', context: 'Album trailer as campaign signal' },
    ],
    assets: [
      {
        videoId: 'MrugmCIpAcA',
        title: 'The Rolling Stones - Foreign Tongues ; Album Trailer',
        views: '411K',
        date: 'May 2026',
        format: 'short',
        role: 'Short',
        formatBadge: 'Album Trailer',
        thumbnail: 'https://i.ytimg.com/vi/MrugmCIpAcA/mqdefault.jpg',
      },
      {
        videoId: 'oT5LwwEHgnc',
        title: 'The Rolling Stones - In The Stars (Official Video)',
        views: '4.9M',
        date: 'May 2026',
        format: 'longform',
        role: 'Hero',
        formatBadge: 'Official MV',
        thumbnail: 'https://i.ytimg.com/vi/oT5LwwEHgnc/mqdefault.jpg',
      },
      {
        videoId: 'F-F_oHOvBsM',
        title: 'The Rolling Stones - In The Stars (Official Lyric Video)',
        views: '1.2M',
        date: 'May 2026',
        format: 'longform',
        role: 'Discovery',
        formatBadge: 'Lyric Video',
        thumbnail: 'https://i.ytimg.com/vi/F-F_oHOvBsM/mqdefault.jpg',
      },
      {
        videoId: 'AS4-6Dip9KM',
        title: 'The Rolling Stones - In The Stars (Behind The Scenes)',
        views: '87K',
        date: 'Jun 2026',
        format: 'longform',
        role: 'Support',
        formatBadge: 'BTS',
        thumbnail: 'https://i.ytimg.com/vi/AS4-6Dip9KM/mqdefault.jpg',
      },
      {
        videoId: 'yd62VMHiijI',
        title: 'The Rolling Stones - Rough And Twisted (Official Lyric Video)',
        views: '249K',
        date: 'May 2026',
        format: 'longform',
        role: 'Discovery',
        formatBadge: 'Lyric Video',
        thumbnail: 'https://i.ytimg.com/vi/yd62VMHiijI/mqdefault.jpg',
      },
      {
        videoId: 'uIM6FotLWuA',
        title: 'The Rolling Stones - Rough And Twisted (Official Visualiser)',
        views: '269K',
        date: 'Jun 2026',
        format: 'longform',
        role: 'Support',
        formatBadge: 'Visualiser',
        thumbnail: 'https://i.ytimg.com/vi/uIM6FotLWuA/mqdefault.jpg',
      },
    ],
    benchmarkComparison: {
      datasetLabel: 'Most Legacy Artists',
      datasetValue: '1–2',
      datasetContext: 'content types (MV-only typical)',
      artistValue: '6',
      artistContext: 'content types — proving format diversity is not generational',
    },
    learning: 'Format diversity is not generational. The Rolling Stones use 6 content types in 29 days. If the Stones can do it, any artist can.',
  },
];

// ─── Section 5: Playbook Principles ─────────────────────────────────────

export const playbookPrinciples = [
  {
    principle: 'Build campaign worlds.',
    detail: 'Every format should expand the story — not repeat it.',
    proof: 'Tove Lo: 5 formats, each with a different job.',
    color: TOKENS.MINT,
  },
  {
    principle: 'Create audience return.',
    detail: 'Plan reasons to come back, not just reasons to arrive.',
    proof: '85% of campaigns create one peak. The strongest create multiple.',
    color: TOKENS.ELECTRIC,
  },
  {
    principle: 'Treat Shorts as infrastructure.',
    detail: 'Pre-release teasers. Campaign trailers. Announcement moments.',
    proof: 'French The Kid: Short → Single, repeated 3 times.',
    color: TOKENS.SUN,
  },
  {
    principle: 'Give every format a purpose.',
    detail: 'If you can\'t explain why an asset exists, don\'t publish it.',
    proof: 'GENER8ION: 4 assets, 3.99M views each.',
    color: TOKENS.SIGNAL,
  },
  {
    principle: 'Plan campaigns, not uploads.',
    detail: 'The strongest campaigns were planned before day one.',
    proof: 'K-Trap: 96-day arc sustained through collaboration bridges.',
    color: TOKENS.WARM,
  },
  {
    principle: 'The framework scales down.',
    detail: 'Multi-format campaign architecture works at any audience size.',
    proof: 'Mary in the Junkyard: 4 formats at 62K hero views.',
    color: '#8B5CF6',
  },
];

// ─── Dataset Stats (for benchmark positioning) ──────────────────────────

export const datasetStats = {
  totalChannels: 138,
  activeChannels: 87,
  medianContentTypes: 2,
  meanContentTypes: 2.4,
  maxContentTypes: 6,
  medianHeroDep: 55.1,
  medianCampaignSpan: 50,
  medianViewsPerAsset: 97088,
  shortsAdoption: 17.2,
  shortsBefore: 11.5,
  structuredFollowUp: 6.9,
  multiFormatCampaigns: 15,
};
