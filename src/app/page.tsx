'use client';

import { useState } from 'react';
import {
  headlineStats, followUpSegments, toveLoTimeline, toveLoEvidence,
  strategyFramework, caseStudies, benchmarks, diversityStats, corrections,
  frameworkTimeline, shortsLayer, successChecklist, openQuestions, futureRoadmap,
  takeaways, confidenceTiers, watcherThesis, attentionSection,
} from '@/data/insights';

// ─── Design Tokens ───────────────────────────────────────────────────────

const INK    = '#0E0E0E';
const PAPER  = '#FAF7F2';
const CREAM  = '#F6F1E7';
const SMOKE  = '#8A847A';
const BONE   = '#E8E3DA';
const WARM   = '#4A4640';
const SIGNAL = '#FF4A1C';
const MINT   = '#1FBE7A';
const SUN    = '#FFD24C';
const ELECTRIC = '#2C25FF';

// ─── Nav ─────────────────────────────────────────────────────────────────

const sections = [
  { id: 'hero', label: 'Intro' },
  { id: 'about', label: 'About' },
  { id: 'numbers', label: 'Numbers' },
  { id: 'tove-lo', label: 'Tove Lo' },
  { id: 'framework', label: 'Framework' },
  { id: 'case-studies', label: 'Cases' },
  { id: 'thesis', label: 'Thesis' },
  { id: 'benchmarks', label: 'Benchmarks' },
  { id: 'diversity', label: 'Multi-Format' },
  { id: 'confidence', label: 'Confidence' },
  { id: 'corrections', label: 'Mind Changed' },
  { id: 'playbook', label: 'Playbook' },
  { id: 'success', label: 'Success' },
  { id: 'testing', label: 'Testing' },
  { id: 'attention', label: 'Attention' },
  { id: 'takeaways', label: 'Takeaways' },
];

function StickyNav() {
  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'rgba(250, 247, 242, 0.92)', backdropFilter: 'blur(12px)',
      borderBottom: `1px solid ${BONE}`,
      padding: '10px 0',
    }}>
      <div style={{
        maxWidth: 1120, margin: '0 auto', padding: '0 24px',
        display: 'flex', gap: 4, overflowX: 'auto',
        scrollbarWidth: 'none',
      }}>
        {sections.map(s => (
          <a key={s.id} href={`#${s.id}`}
            className="nav-pill"
            style={{
              padding: '5px 12px', borderRadius: 20,
              fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.04em',
              color: WARM, textDecoration: 'none', whiteSpace: 'nowrap',
            }}
          >
            {s.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

// ─── Shared Components ───────────────────────────────────────────────────

function SectionShell({ id, children, dark }: { id: string; children: React.ReactNode; dark?: boolean }) {
  return (
    <section id={id} style={{
      background: dark ? INK : 'transparent',
      color: dark ? '#fff' : INK,
      padding: '80px 0',
    }}>
      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '0 24px' }}>
        {children}
      </div>
    </section>
  );
}

function Eyebrow({ children, color }: { children: React.ReactNode; color?: string }) {
  return (
    <div className="eyebrow" style={{ color: color || SMOKE, marginBottom: 12 }}>
      {children}
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="headline" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: 16 }}>
      {children}
    </h2>
  );
}

function Subtitle({ children, color }: { children: React.ReactNode; color?: string }) {
  return (
    <p style={{ fontSize: '1.1rem', color: color || SMOKE, maxWidth: 640, marginBottom: 40, lineHeight: 1.5 }}>
      {children}
    </p>
  );
}

function Card({ children, style, className }: { children: React.ReactNode; style?: React.CSSProperties; className?: string }) {
  return (
    <div className={`card-lift ${className || ''}`} style={{
      background: '#fff', borderRadius: 20,
      border: `1px solid ${BONE}`,
      padding: 28,
      ...style,
    }}>
      {children}
    </div>
  );
}

function DarkCard({ children, accent, style }: { children: React.ReactNode; accent?: string; style?: React.CSSProperties }) {
  return (
    <div style={{
      background: INK, borderRadius: 20,
      padding: 28, color: '#fff',
      borderLeft: accent ? `4px solid ${accent}` : undefined,
      ...style,
    }}>
      {children}
    </div>
  );
}

function BulletList({ items, color }: { items: string[]; color: string }) {
  return (
    <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
      {items.map(t => (
        <li key={t} style={{ fontSize: '0.88rem', color: WARM, paddingLeft: 14, position: 'relative', lineHeight: 1.5 }}>
          <span style={{ position: 'absolute', left: 0, color }}>·</span>{t}
        </li>
      ))}
    </ul>
  );
}

// ─── 1. HERO ─────────────────────────────────────────────────────────────

function Hero() {
  return (
    <SectionShell id="hero" dark>
      <div style={{ paddingTop: 40, paddingBottom: 20 }}>
        <Eyebrow color={SMOKE}>Virgin Music Group — YouTube Intelligence</Eyebrow>
        <h1 className="headline" style={{
          fontSize: 'clamp(2.5rem, 6vw, 4rem)',
          color: '#fff', marginBottom: 20,
          maxWidth: 700,
        }}>
          What We've Learned From 138 YouTube Channels
        </h1>
        <p style={{
          fontSize: '1.15rem', color: 'rgba(255,255,255,0.6)',
          maxWidth: 560, lineHeight: 1.5, marginBottom: 48,
        }}>
          Campaign design — not content volume — shapes channel growth.
        </p>
        <div style={{
          display: 'flex', gap: 12, flexWrap: 'wrap',
        }}>
          {headlineStats.map(s => (
            <div key={s.label} style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 14, padding: '16px 22px',
              minWidth: 140, flex: 1,
            }}>
              <div className="headline" style={{
                fontSize: '1.8rem', color: '#fff', marginBottom: 2,
              }}>
                {s.value}
              </div>
              <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.45)', fontWeight: 500 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
        <div style={{
          marginTop: 48, fontSize: '0.72rem', color: 'rgba(255,255,255,0.3)',
          fontWeight: 500,
        }}>
          June 2026
        </div>
      </div>
    </SectionShell>
  );
}

// ─── 2. ABOUT THIS ANALYSIS ─────────────────────────────────────────────

function About() {
  return (
    <SectionShell id="about">
      <Eyebrow>Methodology</Eyebrow>
      <SectionTitle>How We Got Here</SectionTitle>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20, marginBottom: 32 }}>
        <Card>
          <div className="eyebrow" style={{ color: ELECTRIC, marginBottom: 12 }}>Dataset</div>
          <BulletList color={ELECTRIC} items={[
            '138 channels: 82 Virgin-managed, 56 market benchmark',
            '3,554 videos reviewed across the full roster',
          ]} />
        </Card>
        <Card>
          <div className="eyebrow" style={{ color: MINT, marginBottom: 12 }}>Methodology</div>
          <BulletList color={MINT} items={[
            'Channel health classification, follow-up window analysis, multi-format scoring',
            '7 active campaigns manually validated against the data',
          ]} />
        </Card>
      </div>
      <div style={{
        background: CREAM, borderRadius: 14, padding: '18px 24px',
        borderLeft: `4px solid ${SUN}`,
        fontSize: '0.9rem', color: WARM, lineHeight: 1.6,
      }}>
        <strong style={{ color: INK }}>Important:</strong> Observed patterns, not YouTube rules.
        Starting points for campaign thinking, not proof of causation.
      </div>
    </SectionShell>
  );
}

// ─── 3. THE STORY IN THREE NUMBERS ──────────────────────────────────────

function StoryInNumbers() {
  return (
    <SectionShell id="numbers" dark>
      <Eyebrow color="rgba(255,255,255,0.35)">Follow-up Behaviour</Eyebrow>
      <SectionTitle>Most campaigns launch. Few campaigns sustain.</SectionTitle>
      <Subtitle color="rgba(255,255,255,0.5)">138 channels. What happens after the hero asset drops.</Subtitle>

      {/* Stacked bar */}
      <div style={{ display: 'flex', borderRadius: 12, overflow: 'hidden', marginBottom: 48, height: 56 }}>
        {followUpSegments.map(seg => (
          <div key={seg.label} style={{
            width: `${seg.pct}%`, background: seg.color,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '0 8px',
          }}>
            <span style={{
              color: seg.label === 'Shorts Only' ? INK : '#fff',
              fontSize: seg.pct >= 30 ? '0.85rem' : '0.68rem',
              fontWeight: 700, whiteSpace: 'nowrap',
            }}>
              {seg.pct}% {seg.label}
            </span>
          </div>
        ))}
      </div>

      {/* Detail cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
        {followUpSegments.filter(s => s.pct >= 15).map(seg => (
          <div key={seg.label} style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 16, padding: 24,
            borderTop: `3px solid ${seg.color}`,
          }}>
            <div className="headline" style={{ fontSize: '2.5rem', color: seg.color, marginBottom: 4 }}>
              {seg.pct}%
            </div>
            <div style={{ fontSize: '1rem', fontWeight: 700, color: '#fff', marginBottom: 8 }}>
              {seg.label}
            </div>
            <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>
              {seg.desc}
            </div>
          </div>
        ))}
      </div>
      {/* V5 — Key insight callouts */}
      <div style={{
        marginTop: 32,
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16,
      }}>
        <div style={{
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 14, padding: '20px 24px',
          borderLeft: `4px solid ${MINT}`,
        }}>
          <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, margin: 0, fontWeight: 600 }}>
            The strongest channels weren&apos;t making more content. They were building multi-format campaigns with multiple audience return moments.
          </p>
        </div>
        <div style={{
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 14, padding: '20px 24px',
          borderLeft: `4px solid ${ELECTRIC}`,
        }}>
          <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, margin: 0, fontWeight: 600 }}>
            Most campaigns create one attention peak. Few create multiple audience return moments.
          </p>
        </div>
      </div>

    </SectionShell>
  );
}

// ─── 4. TOVE LO ─────────────────────────────────────────────────────────

function ToveLo() {
  const journeySteps = [
    { d: 0, purpose: 'Hero Moment', detail: 'Capture attention', format: 'Official MV', color: INK },
    { d: 9, purpose: 'World Expansion', detail: 'Deepen the story', format: 'BTS + Visualiser', color: ELECTRIC },
    { d: 16, purpose: 'Discovery', detail: 'Reach new audiences', format: 'Lyric Video + Remix', color: MINT },
    { d: 23, purpose: 'Return Moment', detail: 'Give fans a reason to come back', format: 'Visualiser', color: SIGNAL },
  ];

  return (
    <SectionShell id="tove-lo">
      <Eyebrow color={MINT}>What Good Looks Like</Eyebrow>
      <SectionTitle>Tove Lo</SectionTitle>
      <Subtitle>
        Not more campaign moments. Better ones — each with a clear job.
      </Subtitle>

      {/* EVIDENCE FIRST — Benchmark stats */}
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
        gap: 12, marginBottom: 32,
      }}>
        {toveLoEvidence.benchmarkStats.map((s, i) => (
          <div key={i} style={{
            background: '#fff', borderRadius: 16, border: `1px solid ${BONE}`,
            padding: '20px 16px', textAlign: 'center',
          }}>
            <div style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 900, color: MINT, letterSpacing: '-0.03em', lineHeight: 1 }}>
              {s.value}
            </div>
            <div style={{ fontSize: '0.78rem', fontWeight: 700, color: INK, marginTop: 6 }}>
              {s.label}
            </div>
            <div style={{ fontSize: '0.68rem', color: SMOKE, marginTop: 2 }}>
              {s.context}
            </div>
          </div>
        ))}
      </div>

      {/* CAMPAIGN JOURNEY — Light canvas timeline */}
      <Card style={{ padding: '32px 28px', marginBottom: 20 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
          <div className="eyebrow" style={{ color: MINT, margin: 0 }}>23-Day Campaign Journey</div>
          <div style={{ display: 'flex', gap: 8 }}>
            <span style={{ fontSize: '0.68rem', color: SMOKE }}>Every 7–9 days</span>
            <span style={{ fontSize: '0.68rem', color: SMOKE }}>·</span>
            <span style={{ fontSize: '0.68rem', color: SMOKE }}>4 campaign moments</span>
          </div>
        </div>

        {/* Journey track */}
        <div style={{ position: 'relative', paddingLeft: 28 }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute', left: 13, top: 8, bottom: 8,
            width: 2, background: `linear-gradient(${MINT}, ${SIGNAL})`,
          }} />

          {journeySteps.map((step, i) => (
            <div key={step.d} style={{
              display: 'grid', gridTemplateColumns: '56px 1fr',
              gap: 16, alignItems: 'start',
              position: 'relative', marginBottom: i < journeySteps.length - 1 ? 28 : 0,
            }}>
              {/* Dot */}
              <div style={{ position: 'absolute', left: -22, top: 4 }}>
                <div style={{
                  width: 14, height: 14, borderRadius: '50%',
                  background: step.color, border: '3px solid #fff',
                  boxShadow: `0 0 0 1px ${BONE}`,
                }} />
              </div>

              {/* Day label */}
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: SMOKE, paddingTop: 1 }}>
                Day {step.d}
              </div>

              {/* Content */}
              <div>
                <div style={{ fontSize: '1rem', fontWeight: 800, color: step.color, marginBottom: 2 }}>
                  {step.purpose}
                </div>
                <div style={{ fontSize: '0.82rem', color: INK, fontWeight: 500 }}>
                  {step.detail}
                </div>
                <div style={{ fontSize: '0.72rem', color: SMOKE, marginTop: 2 }}>
                  {step.format}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Benchmark comparison */}
        <div style={{
          marginTop: 28, paddingTop: 20,
          borderTop: `1px solid ${BONE}`,
        }}>
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr auto 1fr',
            gap: 16, alignItems: 'center',
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '0.68rem', color: SMOKE, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4 }}>
                Average Campaign
              </div>
              <div style={{ fontSize: '2rem', fontWeight: 900, color: BONE }}>4.7</div>
              <div style={{ fontSize: '0.75rem', color: SMOKE }}>campaign moments</div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
              <svg width="32" height="20" viewBox="0 0 32 20" fill="none">
                <path d="M4 10H28M28 10L22 4M28 10L22 16" stroke={MINT} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span style={{ fontSize: '0.72rem', fontWeight: 800, color: MINT }}>1.5×</span>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '0.68rem', color: MINT, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4 }}>
                Tove Lo
              </div>
              <div style={{ fontSize: '2rem', fontWeight: 900, color: MINT }}>7</div>
              <div style={{ fontSize: '0.75rem', color: SMOKE }}>campaign moments</div>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: 12, fontSize: '0.78rem', color: WARM, fontWeight: 500 }}>
            More moments gave audiences more reasons to return — each with a different job in the campaign.
          </div>
        </div>
      </Card>

      {/* THE LEARNING — One memorable thought */}
      <div style={{
        background: CREAM, borderRadius: 16, padding: '24px 28px',
        borderLeft: `4px solid ${MINT}`,
      }}>
        <div className="headline" style={{ fontSize: 'clamp(1rem, 2vw, 1.3rem)', color: INK, lineHeight: 1.3, marginBottom: 8 }}>
          Every asset had a job. Every job expanded the campaign world.
        </div>
        <div style={{ fontSize: '0.85rem', color: SMOKE, lineHeight: 1.5 }}>
          BTS to deepen the story. Lyric video to reach new audiences. Remix for reach. Visualiser to bring fans back.
        </div>
      </div>
    </SectionShell>
  );
}

// ─── 5. STRATEGY FRAMEWORK ──────────────────────────────────────────────

function StrategyFramework() {
  return (
    <SectionShell id="framework">
      <Eyebrow>Campaign Thinking</Eyebrow>
      <SectionTitle>Same goal. Different campaign design.</SectionTitle>
      <Subtitle>Four approaches to building audience return moments.</Subtitle>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
        {strategyFramework.map(s => (
          <div key={s.tier} style={{
            background: '#fff', borderRadius: 20,
            border: `1px solid ${BONE}`,
            padding: 28,
            borderTop: `4px solid ${s.color}`,
          }}>
            <div className="eyebrow" style={{ color: s.color, marginBottom: 8 }}>{s.tier}</div>
            <div style={{ fontSize: '1.1rem', fontWeight: 800, color: INK, marginBottom: 6, letterSpacing: '-0.02em' }}>
              {s.goal}
            </div>
            <div style={{ fontSize: '0.82rem', color: ELECTRIC, fontWeight: 500, marginBottom: 12, fontStyle: 'italic' }}>
              {s.artist_name}
            </div>
            <div style={{ fontSize: '0.88rem', color: SMOKE, lineHeight: 1.5 }}>{s.desc}</div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

// ─── 6. CASE STUDIES ─────────────────────────────────────────────────────

function WatcherBadge({ classification }: { classification: string }) {
  const colorMap: Record<string, string> = {
    GROWING: MINT,
    WEAK_CONVERSION: SUN,
    UNDERFED: SIGNAL,
    COLD: SMOKE,
  };
  const labelMap: Record<string, string> = {
    GROWING: 'Growing',
    WEAK_CONVERSION: 'Weak Conversion',
    UNDERFED: 'Underfed',
    COLD: 'Cold',
  };
  const c = colorMap[classification] || SMOKE;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 5,
      padding: '3px 10px', borderRadius: 6,
      background: `${c}18`, border: `1px solid ${c}40`,
      fontSize: '0.68rem', fontWeight: 700, color: c,
      letterSpacing: '0.06em', textTransform: 'uppercase',
    }}>
      <span style={{ width: 6, height: 6, borderRadius: '50%', background: c }} />
      {labelMap[classification] || classification}
    </span>
  );
}

// ─── Case Study Visual Proofs ──────────────────────────────────────────

function VBadge({ v, c }: { v: string; c: string }) {
  return (
    <span style={{
      padding: '3px 10px', borderRadius: 6, background: `${c}15`,
      fontSize: '0.7rem', fontWeight: 700, color: c, letterSpacing: '0.04em',
    }}>{v}</span>
  );
}

function VisualProof({ title, headline, badges, accent, children }: {
  title: string; headline: string;
  badges: { v: string; c: string }[];
  accent: string; children: React.ReactNode;
}) {
  return (
    <div style={{
      background: INK, borderRadius: 16, padding: '24px 28px',
      marginBottom: 20, borderTop: `3px solid ${accent}`,
    }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
        marginBottom: 24, flexWrap: 'wrap', gap: 10,
      }}>
        <div className="eyebrow" style={{ color: accent }}>{title}</div>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          {badges.map(b => <VBadge key={b.v} v={b.v} c={b.c} />)}
        </div>
      </div>
      {children}
      <div style={{
        marginTop: 20, paddingTop: 14, borderTop: '1px solid rgba(255,255,255,0.08)',
        fontSize: '0.88rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.5, fontWeight: 500,
      }}>
        {headline}
      </div>
    </div>
  );
}

function MaryVisualProof({ accent }: { accent: string }) {
  const evidence = [
    { value: '1 of 138', label: 'Channels using the 7–14 day window', context: 'the rarest campaign behaviour in the dataset' },
    { value: 'Top 17%', label: 'Multi-format campaign', context: 'Rank 24 of 138 channels' },
    { value: '29 days', label: 'Campaign rollout', context: '4 campaign moments across 4 formats' },
    { value: 'Growing', label: 'Channel classification', context: 'despite modest view counts' },
  ];

  const journey = [
    { d: 0, purpose: 'Hero Moment', detail: 'Capture attention', format: 'Crash Landing MV · 83K views', color: accent },
    { d: 12, purpose: 'Audience Deepening', detail: 'Keep fans inside the follow-through window', format: 'New Muscles MV · 62K views', color: MINT },
    { d: 21, purpose: 'Audience Return Moment', detail: 'Give fans a reason to come back', format: 'Live Session · 4.7K views', color: SIGNAL },
    { d: 32, purpose: 'Campaign Extension', detail: 'Extend the campaign world', format: 'Mouse Visualiser · 5.1K views', color: SUN },
  ];

  return (
    <>
      {/* EVIDENCE FIRST — Benchmark stat cards */}
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
        gap: 10, marginBottom: 24,
      }}>
        {evidence.map((s, i) => (
          <div key={i} style={{
            background: '#fff', borderRadius: 14, border: `1px solid ${BONE}`,
            padding: '18px 14px', textAlign: 'center',
          }}>
            <div style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', fontWeight: 900, color: accent, letterSpacing: '-0.03em', lineHeight: 1 }}>
              {s.value}
            </div>
            <div style={{ fontSize: '0.72rem', fontWeight: 700, color: INK, marginTop: 6 }}>
              {s.label}
            </div>
            <div style={{ fontSize: '0.62rem', color: SMOKE, marginTop: 2 }}>
              {s.context}
            </div>
          </div>
        ))}
      </div>

      {/* CAMPAIGN JOURNEY — Light canvas, purpose-labeled */}
      <Card style={{ padding: '28px 24px', marginBottom: 20 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 22 }}>
          <div className="eyebrow" style={{ color: accent, margin: 0 }}>29-Day Campaign Journey</div>
          <div style={{ fontSize: '0.68rem', color: SMOKE }}>4 campaign moments · 4 formats</div>
        </div>

        {/* Journey track */}
        <div style={{ position: 'relative', paddingLeft: 28 }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute', left: 13, top: 8, bottom: 8,
            width: 2, background: `linear-gradient(${accent}, ${SUN})`,
          }} />

          {journey.map((step, i) => (
            <div key={step.d} style={{
              display: 'grid', gridTemplateColumns: '56px 1fr',
              gap: 16, alignItems: 'start',
              position: 'relative', marginBottom: i < journey.length - 1 ? 26 : 0,
            }}>
              {/* Dot */}
              <div style={{ position: 'absolute', left: -22, top: 4 }}>
                <div style={{
                  width: 14, height: 14, borderRadius: '50%',
                  background: step.color, border: '3px solid #fff',
                  boxShadow: `0 0 0 1px ${BONE}`,
                }} />
              </div>

              {/* Day label */}
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: SMOKE, paddingTop: 1 }}>
                Day {step.d}
              </div>

              {/* Content */}
              <div>
                <div style={{ fontSize: '1rem', fontWeight: 800, color: step.color, marginBottom: 2 }}>
                  {step.purpose}
                </div>
                <div style={{ fontSize: '0.82rem', color: INK, fontWeight: 500 }}>
                  {step.detail}
                </div>
                <div style={{ fontSize: '0.72rem', color: SMOKE, marginTop: 2 }}>
                  {step.format}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 7–14 day window callout */}
        <div style={{ marginTop: 24, paddingTop: 18, borderTop: `1px solid ${BONE}` }}>
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr auto 1fr',
            gap: 16, alignItems: 'center',
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '0.68rem', color: SMOKE, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4 }}>
                138-Channel Benchmark
              </div>
              <div style={{ fontSize: '2rem', fontWeight: 900, color: BONE }}>85%</div>
              <div style={{ fontSize: '0.75rem', color: SMOKE }}>go silent after Day 7</div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
              <svg width="32" height="20" viewBox="0 0 32 20" fill="none">
                <path d="M4 10H28M28 10L22 4M28 10L22 16" stroke={MINT} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span style={{ fontSize: '0.72rem', fontWeight: 800, color: MINT }}>Day 12</span>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '0.68rem', color: accent, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4 }}>
                Mary in the Junkyard
              </div>
              <div style={{ fontSize: '2rem', fontWeight: 900, color: accent }}>✓</div>
              <div style={{ fontSize: '0.75rem', color: SMOKE }}>campaign moment in the window</div>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: 12, fontSize: '0.78rem', color: WARM, fontWeight: 500 }}>
            The 7–14 day follow-through window is when most campaigns lose their audience. Mary delivered a second campaign moment at Day 12.
          </div>
        </div>
      </Card>

      {/* THE LEARNING — One memorable takeaway */}
      <div style={{
        background: CREAM, borderRadius: 14, padding: '22px 24px',
        borderLeft: `4px solid ${accent}`,
      }}>
        <div className="headline" style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.2rem)', color: INK, lineHeight: 1.3, marginBottom: 6 }}>
          Most campaigns disappear after release. Mary created audience return moments — and the channel grew.
        </div>
        <div style={{ fontSize: '0.82rem', color: SMOKE, lineHeight: 1.5 }}>
          The only artist in the dataset delivering content in the 7–14 day window — the period that 85% of campaigns miss entirely.
        </div>
      </div>
    </>
  );
}

function FrenchVisualProof({ accent }: { accent: string }) {
  return (
    <VisualProof
      title="RELEASE-WEEK VELOCITY"
      headline="High activity. Weak conversion. The opportunity is depth, not volume."
      badges={[{ v: 'Weak Conversion', c: SUN }, { v: 'Top 22% volume', c: accent }]}
      accent={accent}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
            <div style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.5)', fontWeight: 700, letterSpacing: '0.06em', minWidth: 130 }}>FRENCH THE KID</div>
            <span className="headline" style={{ fontSize: '1.6rem', color: accent }}>4</span>
            <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)' }}>release-week uploads</span>
          </div>
          <div style={{ height: 28, borderRadius: 8, background: accent, width: '82%', position: 'relative' }}>
            <span style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', fontSize: '0.68rem', fontWeight: 700, color: '#fff' }}>
              Highest of any case study
            </span>
          </div>
        </div>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
            <div style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.2)', fontWeight: 700, letterSpacing: '0.06em', minWidth: 130 }}>BENCHMARK AVG</div>
            <span className="headline" style={{ fontSize: '1.6rem', color: 'rgba(255,255,255,0.25)' }}>~1</span>
            <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.2)' }}>release-week upload</span>
          </div>
          <div style={{ height: 28, borderRadius: 8, background: 'rgba(255,255,255,0.06)', width: '20%' }} />
        </div>
      </div>
    </VisualProof>
  );
}

function Gener8ionVisualProof({ accent }: { accent: string }) {
  return (
    <VisualProof
      title="CAMPAIGN EFFICIENCY"
      headline="More with 5 campaign moments than most channels achieve with 25 uploads. Multi-format campaigns outperform upload frequency."
      badges={[{ v: 'Growing', c: MINT }, { v: 'Top 15% views/upload', c: MINT }]}
      accent={accent}
    >
      <div style={{ display: 'flex', gap: 32, alignItems: 'flex-end' }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.3)', fontWeight: 700, letterSpacing: '0.06em', marginBottom: 10 }}>TOTAL UPLOADS</div>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 14 }}>
            <div style={{ height: 40, width: 48, borderRadius: 8, background: 'rgba(255,255,255,0.08)' }} />
            <div>
              <div className="headline" style={{ fontSize: '2.2rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1 }}>5</div>
              <div style={{ fontSize: '0.62rem', color: 'rgba(255,255,255,0.2)', marginTop: 2 }}>fewest of any case study</div>
            </div>
          </div>
        </div>
        <div style={{ paddingBottom: 16, color: 'rgba(255,255,255,0.12)', fontSize: '1.8rem', lineHeight: 1 }}>→</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '0.68rem', color: MINT, fontWeight: 700, letterSpacing: '0.06em', marginBottom: 10 }}>VIEWS PER UPLOAD</div>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 14 }}>
            <div style={{ height: 100, width: 48, borderRadius: 8, background: `linear-gradient(180deg, ${MINT}, ${MINT}66)` }} />
            <div>
              <div className="headline" style={{ fontSize: '2.2rem', color: MINT, lineHeight: 1 }}>4.7M</div>
              <div style={{ fontSize: '0.62rem', color: 'rgba(255,255,255,0.4)', marginTop: 2 }}>avg views per upload</div>
            </div>
          </div>
        </div>
      </div>
    </VisualProof>
  );
}

function KTrapVisualProof({ accent }: { accent: string }) {
  const max = 95;
  const pct = (d: number) => `${(d / max) * 100}%`;
  return (
    <VisualProof
      title="SUPPORT TIMING GAP"
      headline="The content exists. The opportunity is timing. Moving BTS from Day 30+ to Day 7-10 is a scheduling fix, not a creation ask."
      badges={[{ v: 'Top 9% diversity', c: accent }, { v: 'Weak Conversion', c: SUN }]}
      accent={accent}
    >
      <div style={{ position: 'relative', height: 88, marginBottom: 8 }}>
        {/* Full timeline track */}
        <div style={{ position: 'absolute', top: 24, left: 0, right: 0, height: 3, background: 'rgba(255,255,255,0.06)', borderRadius: 2 }} />
        {/* Recommended window — green zone */}
        <div style={{
          position: 'absolute', top: 10, left: pct(7), width: `${((14 - 7) / max) * 100}%`,
          height: 32, background: `${MINT}15`, borderRadius: 6, border: `1px solid ${MINT}30`,
        }}>
          <div style={{ position: 'absolute', top: -16, left: '50%', transform: 'translateX(-50%)', whiteSpace: 'nowrap', fontSize: '0.56rem', color: MINT, fontWeight: 700, letterSpacing: '0.04em' }}>
            RECOMMENDED WINDOW
          </div>
        </div>
        {/* Day 0 hero */}
        <div style={{ position: 'absolute', left: 0, top: 18, textAlign: 'center', transform: 'translateX(-50%)' }}>
          <div style={{ width: 14, height: 14, borderRadius: '50%', background: accent }} />
          <div style={{ marginTop: 4, fontSize: '0.56rem', color: 'rgba(255,255,255,0.4)' }}>Day 0</div>
          <div style={{ fontSize: '0.52rem', color: 'rgba(255,255,255,0.25)' }}>Hero</div>
        </div>
        {/* BTS Day 30 — late */}
        <div style={{ position: 'absolute', left: pct(30), top: 18, textAlign: 'center', transform: 'translateX(-50%)' }}>
          <div style={{ width: 14, height: 14, borderRadius: '50%', background: SIGNAL }} />
          <div style={{ marginTop: 4, fontSize: '0.56rem', color: SIGNAL, fontWeight: 600 }}>Day 30</div>
          <div style={{ fontSize: '0.52rem', color: 'rgba(255,255,255,0.3)' }}>BTS</div>
        </div>
        {/* BTS Day 88 — very late */}
        <div style={{ position: 'absolute', left: pct(88), top: 18, textAlign: 'center', transform: 'translateX(-50%)' }}>
          <div style={{ width: 14, height: 14, borderRadius: '50%', background: SIGNAL }} />
          <div style={{ marginTop: 4, fontSize: '0.56rem', color: SIGNAL, fontWeight: 600 }}>Day 88</div>
          <div style={{ fontSize: '0.52rem', color: 'rgba(255,255,255,0.3)' }}>BTS</div>
        </div>
        {/* Gap annotation */}
        <div style={{
          position: 'absolute', top: 56, left: pct(14),
          width: `${((30 - 14) / max) * 100}%`,
          borderBottom: `1px dashed ${SIGNAL}30`,
        }}>
          <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: 4, fontSize: '0.56rem', color: `${SIGNAL}88`, fontWeight: 600, whiteSpace: 'nowrap' }}>
            missed window
          </div>
        </div>
      </div>
    </VisualProof>
  );
}

function SnutsVisualProof({ accent }: { accent: string }) {
  const max = 82;
  const pct = (d: number) => `${(d / max) * 100}%`;
  const assets = [
    { d: 0, t: 'OMV' }, { d: 19, t: 'Lyric' }, { d: 49, t: 'Live' },
    { d: 65, t: 'BTS' }, { d: 77, t: 'Lyric' },
  ];
  return (
    <VisualProof
      title="PLANNED CAMPAIGN"
      headline="Campaign planning happened before launch day. Every asset had a purpose and a place in the sequence."
      badges={[{ v: '22 assets', c: accent }, { v: '2.2x benchmark', c: accent }, { v: '7 types', c: MINT }]}
      accent={accent}
    >
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: 6, padding: '4px 12px',
        borderRadius: 6, marginBottom: 16, background: `${accent}12`,
        border: `1px solid ${accent}25`, fontSize: '0.68rem', fontWeight: 700,
        color: accent, letterSpacing: '0.04em',
      }}>
        PRE-MAPPED IN COACH
      </div>
      <div style={{ position: 'relative', height: 56, marginLeft: 8 }}>
        <div style={{ position: 'absolute', top: 7, left: 0, width: pct(77), height: 3, background: accent, borderRadius: 2 }} />
        {assets.map(({ d, t }) => (
          <div key={d} style={{ position: 'absolute', left: pct(d), transform: 'translateX(-50%)', textAlign: 'center' }}>
            <div style={{ width: 14, height: 14, borderRadius: '50%', background: accent, margin: '0 auto' }} />
            <div style={{ marginTop: 4, fontSize: '0.58rem', color: 'rgba(255,255,255,0.4)' }}>Day {d}</div>
            <div style={{ fontSize: '0.55rem', color: accent, fontWeight: 700 }}>{t}</div>
          </div>
        ))}
      </div>
    </VisualProof>
  );
}

function CaseStudyVisual({ slug, accent }: { slug: string; accent: string }) {
  switch (slug) {
    case 'mary-in-the-junkyard': return <MaryVisualProof accent={accent} />;
    case 'french-the-kid': return <FrenchVisualProof accent={accent} />;
    case 'gener8ion': return <Gener8ionVisualProof accent={accent} />;
    case 'k-trap': return <KTrapVisualProof accent={accent} />;
    case 'the-snuts': return <SnutsVisualProof accent={accent} />;
    default: return null;
  }
}

function CaseStudies() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <SectionShell id="case-studies">
      <Eyebrow>Selected Examples</Eyebrow>
      <SectionTitle>Five artists. Five lessons.</SectionTitle>
      <Subtitle>
        Each chosen because the data reveals one specific, actionable insight.
      </Subtitle>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        {caseStudies.map(cs => {
          const isExpanded = expanded === cs.artist_slug;
          return (
            <div key={cs.artist_slug} style={{
              background: '#fff', borderRadius: 20,
              border: `1px solid ${BONE}`,
              borderLeft: `4px solid ${cs.accent}`,
              overflow: 'hidden',
            }}>
              {/* Header — always visible */}
              <button
                onClick={() => setExpanded(isExpanded ? null : cs.artist_slug)}
                style={{
                  width: '100%', background: 'none', border: 'none', cursor: 'pointer',
                  padding: '24px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  textAlign: 'left',
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: INK, letterSpacing: '-0.03em' }}>
                    {cs.artist_name}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '0.78rem', color: SMOKE, fontWeight: 500 }}>
                      {cs.category}
                    </span>
                    <WatcherBadge classification={cs.watcherClassification} />
                    <span style={{
                      display: 'inline-flex', alignItems: 'center',
                      padding: '3px 10px', borderRadius: 6,
                      background: `${cs.accent}12`, border: `1px solid ${cs.accent}30`,
                      fontSize: '0.68rem', fontWeight: 700, color: cs.accent === '#0E0E0E' ? WARM : cs.accent,
                      letterSpacing: '0.04em',
                    }}>
                      {cs.campaignPattern}
                    </span>
                  </div>
                </div>
                <div style={{
                  width: 32, height: 32, borderRadius: '50%',
                  background: CREAM, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transform: isExpanded ? 'rotate(180deg)' : 'rotate(0)',
                  transition: 'transform 0.2s ease',
                  flexShrink: 0,
                }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 5L7 9L11 5" stroke={INK} strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
              </button>

              {/* Expanded content */}
              {isExpanded && (
                <div style={{ padding: '0 28px 28px' }}>

                  {/* VISUAL PROOF — one visual per artist */}
                  <CaseStudyVisual slug={cs.artist_slug} accent={cs.accent} />

                  {/* CAMPAIGN TIMELINE — skip for Mary (handled in visual proof) */}
                  {cs.assets.length > 0 && cs.artist_slug !== 'mary-in-the-junkyard' && (
                    <div style={{ marginBottom: 28 }}>
                      <div className="eyebrow" style={{ color: SMOKE, marginBottom: 14 }}>Campaign Timeline</div>
                      <div style={{
                        display: 'flex', gap: 12, overflowX: 'auto',
                        paddingBottom: 6,
                      }}>
                        {cs.assets.map((a, i) => (
                          <div key={i} style={{
                            background: '#fff', borderRadius: 14, padding: '16px 20px',
                            minWidth: 170, flexShrink: 0,
                            border: `1px solid ${BONE}`,
                            borderTop: `4px solid ${cs.accent}`,
                          }}>
                            <div style={{ fontSize: '0.72rem', color: SMOKE, fontWeight: 700, marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                              Day {a.days_from_hero}
                            </div>
                            <div style={{ fontSize: '0.92rem', fontWeight: 700, color: INK, lineHeight: 1.3, marginBottom: 6 }}>
                              {a.asset_title}
                            </div>
                            {a.views && (
                              <div style={{ fontSize: '0.8rem', color: MINT, fontWeight: 600 }}>
                                {a.views >= 1_000_000 ? `${(a.views / 1_000_000).toFixed(1)}M views` : `${(a.views / 1_000).toFixed(0)}K views`}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* BOTTOM — 2 columns: observations + learning */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20, marginBottom: 20 }}>
                    <div>
                      <div className="eyebrow" style={{ color: SMOKE, marginBottom: 10 }}>What we observed</div>
                      <BulletList items={cs.observations.slice(0, 3)} color={cs.accent} />
                    </div>
                    <div>
                      <div className="eyebrow" style={{ color: SMOKE, marginBottom: 10 }}>The learning</div>
                      <p style={{ fontSize: '0.88rem', color: WARM, lineHeight: 1.6, margin: 0 }}>{cs.learning}</p>
                    </div>
                  </div>

                  {/* ACTION BOX — black */}
                  <div style={{
                    background: INK, borderRadius: 14, padding: '20px 24px',
                  }}>
                    <div className="eyebrow" style={{ color: MINT, marginBottom: 8 }}>What we'd test</div>
                    <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, margin: 0 }}>
                      {cs.action}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </SectionShell>
  );
}

// ─── 6b. WHAT WE STARTED TO SEE (Watcher Thesis) ───────────────────────

function WatcherThesisSection() {
  return (
    <SectionShell id="thesis" dark>
      <Eyebrow color={MINT}>The Emerging Pattern</Eyebrow>
      <SectionTitle>{watcherThesis.headline}</SectionTitle>
      <Subtitle color="rgba(255,255,255,0.5)">
        {watcherThesis.subhead}
      </Subtitle>

      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: 20, marginBottom: 40,
      }}>
        {watcherThesis.factors.map(f => (
          <div key={f.label} style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 20, padding: 28,
            borderTop: `4px solid ${MINT}`,
          }}>
            <div style={{
              display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
              marginBottom: 16,
            }}>
              <div className="eyebrow" style={{ color: MINT }}>{f.label}</div>
              <div style={{
                background: 'rgba(31,190,122,0.12)',
                borderRadius: 8, padding: '4px 10px',
                fontSize: '0.72rem', fontWeight: 700, color: MINT,
                letterSpacing: '0.04em',
              }}>
                {f.stat}
              </div>
            </div>
            <p style={{
              fontSize: '0.88rem', color: 'rgba(255,255,255,0.7)',
              lineHeight: 1.6, margin: 0,
            }}>
              {f.detail}
            </p>
            <div style={{
              marginTop: 12, fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)',
              fontWeight: 500,
            }}>
              {f.statLabel}
            </div>
          </div>
        ))}
      </div>

      {/* Closing line — visually prominent */}
      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.1)',
        paddingTop: 32,
      }}>
        <p className="headline" style={{
          fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
          color: MINT, maxWidth: 700,
          lineHeight: 1.3, margin: 0,
        }}>
          {watcherThesis.closingLine}
        </p>
      </div>
    </SectionShell>
  );
}

// ─── 7. BENCHMARKS ───────────────────────────────────────────────────────

function Benchmarks() {
  return (
    <SectionShell id="benchmarks">
      <Eyebrow>Virgin vs Market</Eyebrow>
      <SectionTitle>Two gaps worth closing.</SectionTitle>
      <Subtitle>Live sessions and lyric videos. Everything else is within margin.</Subtitle>

      <div style={{
        background: '#fff', borderRadius: 20,
        border: `1px solid ${BONE}`,
        overflow: 'hidden', marginBottom: 24,
      }}>
        {/* Header */}
        <div style={{
          display: 'grid', gridTemplateColumns: '2.5fr 1fr 1fr 2fr',
          padding: '14px 28px', background: INK, color: '#fff',
          fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
        }}>
          <div>Format</div>
          <div style={{ textAlign: 'center' }}>Virgin</div>
          <div style={{ textAlign: 'center' }}>Market</div>
          <div style={{ textAlign: 'right' }}>Difference</div>
        </div>
        {/* Rows */}
        {benchmarks.map((b, i) => (
          <div key={b.metric} style={{
            display: 'grid', gridTemplateColumns: '2.5fr 1fr 1fr 2fr',
            padding: '16px 28px', alignItems: 'center',
            background: i % 2 === 0 ? '#fff' : CREAM,
            borderBottom: i < benchmarks.length - 1 ? `1px solid ${BONE}` : undefined,
          }}>
            <div style={{ fontWeight: 600, color: INK, fontSize: '0.92rem' }}>
              {b.metric}
              {b.actionable && (
                <span style={{
                  display: 'inline-block', marginLeft: 8,
                  width: 6, height: 6, borderRadius: '50%', background: SIGNAL,
                  verticalAlign: 'middle',
                }} />
              )}
            </div>
            <div style={{ textAlign: 'center', fontSize: '0.92rem', color: WARM }}>
              {b.virgin}{b.unit}
            </div>
            <div style={{ textAlign: 'center', fontSize: '0.92rem', color: WARM }}>
              {b.market}{b.unit}
            </div>
            <div style={{
              textAlign: 'right', fontSize: '0.85rem', fontWeight: 600,
              color: b.gap >= 0 ? '#0C6A3F' : '#8A1F0C',
            }}>
              {b.humanGap}
            </div>
          </div>
        ))}
      </div>

      <div style={{
        background: CREAM, borderRadius: 14, padding: '18px 24px',
        borderLeft: `4px solid ${SIGNAL}`,
        fontSize: '0.9rem', color: WARM, lineHeight: 1.6,
      }}>
        <strong style={{ color: INK }}>Live sessions:</strong> 15 points behind market — an audience return moment we&apos;re not creating.
        <strong style={{ color: INK }}> Lyric videos:</strong> 10 points behind — a discovery layer half the market uses.
        <span style={{ color: SIGNAL, fontWeight: 600 }}> ●</span> = gap we&apos;d test first.
      </div>
    </SectionShell>
  );
}

// ─── 8. CONTENT DIVERSITY ────────────────────────────────────────────────

function ContentDiversity() {
  return (
    <SectionShell id="diversity">
      <Eyebrow color={MINT}>Multi-Format Campaigns</Eyebrow>
      <SectionTitle>Format variety matters. Timing matters more.</SectionTitle>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, marginBottom: 32 }}>
        {/* Big stat — strengthened */}
        <DarkCard>
          <div className="headline" style={{ fontSize: '4.5rem', color: MINT, marginBottom: 8 }}>7+</div>
          <div style={{ fontSize: '1.15rem', fontWeight: 700, color: '#fff', marginBottom: 12 }}>
            formats = top 10% multi-format campaign
          </div>
          <div style={{
            display: 'flex', gap: 16, marginBottom: 16,
          }}>
            <div style={{
              flex: 1, background: 'rgba(255,255,255,0.06)',
              borderRadius: 10, padding: '12px 16px', textAlign: 'center',
            }}>
              <div style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.4)', fontWeight: 600, marginBottom: 4 }}>Average Channel</div>
              <div className="headline" style={{ fontSize: '1.6rem', color: 'rgba(255,255,255,0.7)' }}>{diversityStats.avgAllChannels}</div>
              <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)' }}>formats</div>
            </div>
            <div style={{
              flex: 1, background: 'rgba(31,190,122,0.12)',
              borderRadius: 10, padding: '12px 16px', textAlign: 'center',
            }}>
              <div style={{ fontSize: '0.68rem', color: MINT, fontWeight: 600, marginBottom: 4 }}>Top 10%</div>
              <div className="headline" style={{ fontSize: '1.6rem', color: MINT }}>7+</div>
              <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)' }}>formats</div>
            </div>
          </div>
          <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.5 }}>
            Most channels use 4–5 formats. The strongest use 7+. But variety alone doesn&apos;t convert.
          </div>
        </DarkCard>

        {/* Comparison */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Card style={{ borderLeft: `4px solid ${MINT}` }}>
            <div className="eyebrow" style={{ color: MINT, marginBottom: 8 }}>Growing Channels</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 8 }}>
              <span className="headline" style={{ fontSize: '2rem', color: MINT }}>{diversityStats.growingAvg}</span>
              <span style={{ fontSize: '0.85rem', color: SMOKE }}>avg formats</span>
            </div>
            <div style={{ height: 8, borderRadius: 4, background: BONE }}>
              <div style={{ height: 8, borderRadius: 4, background: MINT, width: `${(diversityStats.growingAvg / 10) * 100}%` }} />
            </div>
          </Card>
          <Card style={{ borderLeft: `4px solid ${SUN}` }}>
            <div className="eyebrow" style={{ color: '#9A6324', marginBottom: 8 }}>Weak Conversion Channels</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 8 }}>
              <span className="headline" style={{ fontSize: '2rem', color: SUN }}>{diversityStats.weakConversionAvg}</span>
              <span style={{ fontSize: '0.85rem', color: SMOKE }}>avg formats</span>
            </div>
            <div style={{ height: 8, borderRadius: 4, background: BONE }}>
              <div style={{ height: 8, borderRadius: 4, background: SUN, width: `${(diversityStats.weakConversionAvg / 10) * 100}%` }} />
            </div>
            <div style={{ fontSize: '0.78rem', color: SMOKE, fontStyle: 'italic', marginTop: 8 }}>
              More formats than Growing — variety alone did not appear to convert
            </div>
          </Card>
        </div>
      </div>

      <div style={{
        background: CREAM, borderRadius: 14, padding: '18px 24px',
        borderLeft: `4px solid ${SUN}`,
        fontSize: '0.9rem', color: WARM, lineHeight: 1.6,
      }}>
        <strong style={{ color: INK }}>The nuance:</strong> Weak Conversion channels used MORE formats
        than Growing ones. Variety created opportunity. Campaign design — sequencing and timing to create audience return moments — determined whether it converted.
      </div>
    </SectionShell>
  );
}

// ─── 8b. CONFIDENCE LEVELS ──────────────────────────────────────────────

function ConfidenceLevels() {
  return (
    <SectionShell id="confidence">
      <Eyebrow>How Confident Are We</Eyebrow>
      <SectionTitle>We&apos;re more sure about some things than others.</SectionTitle>
      <Subtitle>
        Graded by how consistently each pattern appeared across 138 channels.
      </Subtitle>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
        {confidenceTiers.map(tier => (
          <div key={tier.level} style={{
            background: tier.level === 'high' ? INK : '#fff',
            color: tier.level === 'high' ? '#fff' : INK,
            borderRadius: 20, padding: 28,
            border: tier.level !== 'high' ? `1px solid ${BONE}` : undefined,
            borderTop: `4px solid ${tier.color}`,
          }}>
            <div style={{
              display: 'inline-block', padding: '3px 10px',
              borderRadius: 6, marginBottom: 16,
              background: tier.level === 'high'
                ? 'rgba(31,190,122,0.15)'
                : tier.level === 'medium'
                  ? 'rgba(255,210,76,0.2)'
                  : 'rgba(138,132,122,0.15)',
              fontSize: '0.72rem', fontWeight: 700,
              letterSpacing: '0.08em', textTransform: 'uppercase',
              color: tier.color,
            }}>
              {tier.label}
            </div>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {tier.items.map(item => (
                <li key={item} style={{
                  fontSize: '0.9rem',
                  color: tier.level === 'high' ? 'rgba(255,255,255,0.8)' : WARM,
                  paddingLeft: 14, position: 'relative', lineHeight: 1.5,
                }}>
                  <span style={{ position: 'absolute', left: 0, color: tier.color }}>·</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

// ─── 9. WHAT THE DATA CHANGED OUR MIND ABOUT ───────────────────────────

function WhatTheDataChanged() {
  return (
    <SectionShell id="corrections">
      <Eyebrow color={SIGNAL}>Honest Corrections</Eyebrow>
      <SectionTitle>Three things we got wrong.</SectionTitle>
      <Subtitle>What we assumed vs. what 138 channels showed us.</Subtitle>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {corrections.map((c, i) => (
          <div key={i} style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto 1fr',
            gap: 16, alignItems: 'stretch',
          }}>
            <Card style={{ borderLeft: `4px solid ${SIGNAL}` }}>
              <div className="eyebrow" style={{ color: SIGNAL, marginBottom: 8 }}>Assumption</div>
              <div style={{ fontSize: '1.05rem', fontWeight: 700, color: INK, lineHeight: 1.4 }}>
                {c.assumption}
              </div>
            </Card>
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: 40,
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke={SMOKE} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <DarkCard accent={MINT}>
              <div className="eyebrow" style={{ color: MINT, marginBottom: 8 }}>Finding</div>
              <div style={{ fontSize: '0.92rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.5 }}>
                {c.finding}
              </div>
            </DarkCard>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

// ─── 10. CAMPAIGN FRAMEWORK ─────────────────────────────────────────────

function CampaignFramework() {
  return (
    <SectionShell id="playbook">
      <Eyebrow color={MINT}>Example Campaign Framework</Eyebrow>
      <SectionTitle>A campaign is four audience return moments.</SectionTitle>
      <Subtitle>
        Not four uploads. Four reasons for audiences to come back.
      </Subtitle>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 12 }}>
        {frameworkTimeline.map((step, i) => (
          <Card key={i} style={{ borderTop: `4px solid ${step.color}` }}>
            <div className="eyebrow" style={{ color: step.color, marginBottom: 8 }}>{step.window}</div>
            <div style={{ fontSize: '1rem', fontWeight: 700, color: INK, marginBottom: 6 }}>
              {step.type}
            </div>
            <div style={{ fontSize: '0.85rem', color: SMOKE, lineHeight: 1.5 }}>
              {step.desc}
            </div>
          </Card>
        ))}
      </div>

      {/* Discovery Layer — Shorts running continuously alongside */}
      <div style={{
        background: `${shortsLayer.color}18`, borderRadius: 10,
        padding: '12px 20px', marginBottom: 32,
        borderLeft: `3px solid ${shortsLayer.color}`,
        display: 'flex', alignItems: 'center', gap: 12,
      }}>
        <div style={{
          background: shortsLayer.color, borderRadius: 6,
          padding: '4px 10px', fontSize: '0.72rem', fontWeight: 700,
          color: INK, textTransform: 'uppercase', letterSpacing: '0.05em',
          whiteSpace: 'nowrap',
        }}>
          {shortsLayer.label}
        </div>
        <div style={{ fontSize: '0.85rem', color: WARM, lineHeight: 1.5 }}>
          {shortsLayer.desc}
        </div>
      </div>

      <div style={{
        background: INK, borderRadius: 14, padding: '18px 24px',
        fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', fontStyle: 'italic',
        lineHeight: 1.5,
      }}>
        Based on observed patterns. Treat as starting points, not rules.
      </div>

      <div style={{
        marginTop: 24, background: CREAM, borderRadius: 14,
        padding: '20px 24px', borderLeft: `4px solid ${MINT}`,
      }}>
        <p style={{ fontSize: '1rem', fontWeight: 700, color: INK, lineHeight: 1.5, margin: '0 0 8px' }}>
          Every layer has a job. The campaign is built by how they work together.
        </p>
        <p style={{ fontSize: '0.88rem', color: WARM, lineHeight: 1.6, margin: 0 }}>
          Hero for attention. BTS for depth. Shorts for discovery. Lyric for search. Live for connection.
        </p>
      </div>
    </SectionShell>
  );
}

// ─── 11. WHAT SUCCESS LOOKS LIKE ─────────────────────────────────────────

function SuccessSection() {
  return (
    <SectionShell id="success">
      <Eyebrow color={MINT}>Campaign Readiness</Eyebrow>
      <SectionTitle>What Success Looks Like</SectionTitle>
      <Subtitle>
        The strongest campaigns ticked most of these. You don&apos;t need all of them.
      </Subtitle>

      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 16,
      }}>
        {successChecklist.map((item, i) => (
          <div key={i} style={{
            display: 'flex', gap: 16, alignItems: 'flex-start',
            background: '#fff', borderRadius: 16,
            border: `1px solid ${BONE}`, padding: '20px 24px',
          }}>
            <div style={{
              width: 28, height: 28, borderRadius: 8,
              border: `2px solid ${MINT}`, flexShrink: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginTop: 2,
            }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7L6 10L11 4" stroke={MINT} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <div style={{ fontSize: '0.95rem', fontWeight: 700, color: INK, marginBottom: 2 }}>
                {item.item}
              </div>
              <div style={{ fontSize: '0.82rem', color: SMOKE, lineHeight: 1.5 }}>
                {item.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

// ─── 12. STILL TESTING ───────────────────────────────────────────────────

function StillTesting() {
  return (
    <SectionShell id="testing">
      <Eyebrow>Work in Progress</Eyebrow>
      <SectionTitle>What We're Still Testing</SectionTitle>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
        <Card style={{ borderTop: `4px solid ${SUN}` }}>
          <div className="eyebrow" style={{ color: '#9A6324', marginBottom: 16 }}>Open Questions</div>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
            {openQuestions.map(q => (
              <li key={q} style={{ fontSize: '0.9rem', color: WARM, paddingLeft: 18, position: 'relative', lineHeight: 1.5 }}>
                <span style={{
                  position: 'absolute', left: 0, top: 6,
                  width: 8, height: 8, borderRadius: '50%',
                  background: SUN, opacity: 0.5,
                }} />
                {q}
              </li>
            ))}
          </ul>
        </Card>
        <DarkCard>
          <div className="eyebrow" style={{ color: MINT, marginBottom: 16 }}>Future Development</div>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
            {futureRoadmap.map(r => (
              <li key={r} style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.75)', paddingLeft: 18, position: 'relative', lineHeight: 1.5 }}>
                <span style={{
                  position: 'absolute', left: 0, top: 6,
                  width: 8, height: 8, borderRadius: '50%',
                  background: MINT, opacity: 0.5,
                }} />
                {r}
              </li>
            ))}
          </ul>
        </DarkCard>
      </div>
    </SectionShell>
  );
}

// ─── 12b. ATTENTION IS THE SCARCE RESOURCE ──────────────────────────────

function AttentionSection() {
  return (
    <SectionShell id="attention">
      <Eyebrow color={SIGNAL}>The Core Insight</Eyebrow>
      <SectionTitle>{attentionSection.headline}</SectionTitle>
      <Subtitle>{attentionSection.subhead}</Subtitle>

      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: 16, marginBottom: 40,
      }}>
        {attentionSection.points.map((p, i) => (
          <Card key={i} style={{ borderTop: `4px solid ${SIGNAL}` }}>
            <div style={{
              width: 36, height: 36, borderRadius: '50%',
              background: `${SIGNAL}15`, display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: 14,
            }}>
              <span style={{ color: SIGNAL, fontWeight: 800, fontSize: '0.9rem' }}>{i + 1}</span>
            </div>
            <div style={{ fontSize: '1rem', fontWeight: 700, color: INK, marginBottom: 6 }}>
              {p.label}
            </div>
            <div style={{ fontSize: '0.88rem', color: SMOKE, lineHeight: 1.5 }}>
              {p.detail}
            </div>
          </Card>
        ))}
      </div>

      <DarkCard accent={SIGNAL}>
        <p className="headline" style={{
          fontSize: 'clamp(1.1rem, 2.2vw, 1.5rem)',
          color: '#fff', lineHeight: 1.4, margin: 0,
        }}>
          {attentionSection.closingThesis}
        </p>
      </DarkCard>
    </SectionShell>
  );
}

// ─── 13. FINAL TAKEAWAYS ─────────────────────────────────────────────────

function FinalTakeaways() {
  return (
    <SectionShell id="takeaways" dark>
      <Eyebrow color="rgba(255,255,255,0.35)">Actions</Eyebrow>
      <SectionTitle>Five Things We'd Test Tomorrow</SectionTitle>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 60 }}>
        {takeaways.map((t, i) => (
          <div key={i} style={{
            display: 'flex', gap: 20, alignItems: 'flex-start',
          }}>
            <div style={{
              width: 44, height: 44, borderRadius: '50%',
              background: MINT, display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0, marginTop: 2,
            }}>
              <span style={{ color: INK, fontWeight: 800, fontSize: '1.1rem' }}>{i + 1}</span>
            </div>
            <div>
              <div style={{ fontSize: '1.15rem', fontWeight: 700, color: '#fff', marginBottom: 4 }}>
                {t.title}
              </div>
              <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)' }}>
                {t.detail}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Final statement */}
      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.1)',
        paddingTop: 48,
      }}>
        <div className="headline" style={{
          fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)',
          color: '#fff', marginBottom: 12,
          maxWidth: 700,
        }}>
          The biggest opportunity isn&apos;t making more content.
        </div>
        <div className="headline" style={{
          fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)',
          color: MINT,
          maxWidth: 700,
          marginBottom: 16,
        }}>
          It&apos;s building multi-format campaign worlds that give audiences reasons to return.
        </div>
        <div style={{
          fontSize: '0.95rem', color: 'rgba(255,255,255,0.4)',
          maxWidth: 600, lineHeight: 1.5,
        }}>
          The clearest pattern across 138 channels and 3,554 videos.
        </div>
        <div style={{
          marginTop: 40, fontSize: '0.78rem', color: 'rgba(255,255,255,0.25)',
        }}>
          138 channels · 3,554 videos · June 2026
        </div>
      </div>
    </SectionShell>
  );
}

// ─── PAGE ────────────────────────────────────────────────────────────────

export default function YouTubeInsightsPage() {
  return (
    <main>
      <StickyNav />
      <Hero />
      <About />
      <StoryInNumbers />
      <ToveLo />
      <StrategyFramework />
      <CaseStudies />
      <WatcherThesisSection />
      <Benchmarks />
      <ContentDiversity />
      <ConfidenceLevels />
      <WhatTheDataChanged />
      <CampaignFramework />
      <SuccessSection />
      <StillTesting />
      <AttentionSection />
      <FinalTakeaways />
    </main>
  );
}
