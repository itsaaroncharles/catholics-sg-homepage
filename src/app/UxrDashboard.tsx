import { useMemo, useState } from 'react';
import { coverage, insights, opportunityAreas, personas, researchMeta, themes } from './uxrData';

type View = 'overview' | 'insights' | 'personas' | 'evidence' | 'opportunities' | 'coverage';

const nav: { id: View; label: string }[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'insights', label: 'Research insights' },
  { id: 'personas', label: 'Personas' },
  { id: 'evidence', label: 'Evidence' },
  { id: 'opportunities', label: 'Opportunities' },
  { id: 'coverage', label: 'Source coverage' },
];

const strengthTone: Record<string, string> = {
  'Very high': 'bg-emerald-50 text-emerald-700 border-emerald-200',
  High: 'bg-blue-50 text-blue-700 border-blue-200',
  Medium: 'bg-amber-50 text-amber-700 border-amber-200',
};

function Pill({ children }: { children: React.ReactNode }) {
  return <span className="inline-flex rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-600">{children}</span>;
}

function PageTitle({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="mb-8 max-w-4xl">
      <div className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">{eyebrow}</div>
      <h1 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">{title}</h1>
      <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">{description}</p>
    </div>
  );
}

function Stat({ value, label, detail }: { value: string; label: string; detail: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="text-3xl font-semibold tracking-tight text-slate-950">{value}</div>
      <div className="mt-1 text-sm font-semibold text-slate-800">{label}</div>
      <div className="mt-1 text-xs leading-5 text-slate-500">{detail}</div>
    </div>
  );
}

function InsightCard({ insight, expanded, onToggle }: { insight: (typeof insights)[number]; expanded: boolean; onToggle: () => void }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <button onClick={onToggle} className="w-full p-5 text-left md:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="mb-3 flex flex-wrap gap-2">
              <span className={`rounded-full border px-2.5 py-1 text-xs font-semibold ${strengthTone[insight.evidenceStrength]}`}>{insight.evidenceStrength} evidence</span>
              {insight.tags.slice(0, 3).map(tag => <Pill key={tag}>{tag}</Pill>)}
            </div>
            <h3 className="text-lg font-semibold leading-7 text-slate-950">{insight.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{insight.summary}</p>
          </div>
          <span className="mt-1 shrink-0 text-xl text-slate-400">{expanded ? '−' : '+'}</span>
        </div>
      </button>
      {expanded && (
        <div className="border-t border-slate-100 bg-slate-50/60 px-5 py-5 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Why it matters</h4>
              <p className="mt-2 text-sm leading-6 text-slate-700">{insight.whyItMatters}</p>
              <h4 className="mt-5 text-xs font-bold uppercase tracking-wider text-slate-500">Product implications</h4>
              <ul className="mt-2 space-y-2 text-sm leading-6 text-slate-700">
                {insight.implications.map(item => <li key={item} className="flex gap-2"><span className="text-indigo-500">→</span><span>{item}</span></li>)}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Evidence</h4>
              <div className="mt-2 space-y-3">
                {insight.evidence.map((e, index) => (
                  <blockquote key={index} className="rounded-xl border border-slate-200 bg-white p-4">
                    <p className="text-sm leading-6 text-slate-700">“{e.quote}”</p>
                    <div className="mt-2 text-xs font-medium text-slate-400">{e.source}</div>
                  </blockquote>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </article>
  );
}

function Overview({ setView }: { setView: (v: View) => void }) {
  return (
    <>
      <PageTitle eyebrow="CatholicSG · UXR repository" title="Research that stays useful after the workshop ends." description="A living synthesis of CatholicSG discovery work, post-launch feedback, journeys, flows and product opportunities. Built to preserve evidence while making it usable for product decisions." />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <Stat value={`${insights.length}`} label="Core insights" detail="Evidence-backed themes currently synthesised" />
        <Stat value={`${personas.length}`} label="Behavioural personas" detail="Archetypes grounded in observed jobs and behaviours" />
        <Stat value={`${themes.length}`} label="Research themes" detail="Cross-cutting patterns across the board" />
        <Stat value={`${coverage.length}`} label="Source areas tracked" detail="Including image-only sections still being exhaustively archived" />
      </div>

      <div className="mt-8 grid gap-6 xl:grid-cols-[1.45fr_0.8fr]">
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">What the research is saying</div>
              <h2 className="mt-1 text-xl font-semibold text-slate-950">CatholicSG is infrastructure for everyday Catholic life</h2>
            </div>
            <button onClick={() => setView('insights')} className="shrink-0 rounded-lg bg-slate-950 px-3 py-2 text-xs font-semibold text-white">View insights</button>
          </div>
          <p className="mt-4 text-sm leading-6 text-slate-600">The strongest signal is not demand for novelty. Users repeatedly describe CatholicSG as the place they go to pray, prepare for Mass, understand Scripture, find a church and stay connected. The redesign’s clean interface was welcomed, but removal of mature spiritual utilities created a clear value gap.</p>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {themes.slice(0, 6).map(theme => (
              <div key={theme.name} className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-sm font-semibold text-slate-900">{theme.name}</h3>
                  <span className="text-[10px] font-bold uppercase tracking-wide text-slate-400">{theme.strength}</span>
                </div>
                <p className="mt-1.5 text-xs leading-5 text-slate-600">{theme.description}</p>
              </div>
            ))}
          </div>
        </section>

        <aside className="space-y-6">
          <section className="rounded-2xl border border-indigo-100 bg-indigo-50 p-6">
            <div className="text-xs font-bold uppercase tracking-wider text-indigo-600">North-star product idea</div>
            <h2 className="mt-2 text-xl font-semibold text-indigo-950">One Catholic companion, from prayer to participation.</h2>
            <p className="mt-3 text-sm leading-6 text-indigo-900/75">Design around real-life Catholic moments: morning prayer, preparing for Mass, finding a service, understanding the faith, sharing a reflection and connecting with the Church.</p>
          </section>
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Research scope</div>
            <div className="mt-3 flex flex-wrap gap-2">{researchMeta.scope.map(item => <Pill key={item}>{item}</Pill>)}</div>
          </section>
        </aside>
      </div>
    </>
  );
}

function InsightsView() {
  const [open, setOpen] = useState<string>(insights[0]?.id ?? '');
  const [filter, setFilter] = useState('All');
  const tags = ['All', ...Array.from(new Set(insights.flatMap(i => i.tags)))];
  const visible = filter === 'All' ? insights : insights.filter(i => i.tags.includes(filter));
  return (
    <>
      <PageTitle eyebrow="Synthesis" title="Research insights" description="Patterns are written as decision-ready insights: what we observed, why it matters, the evidence behind it and what it implies for CatholicSG." />
      <div className="mb-5 flex flex-wrap gap-2">{tags.map(tag => <button key={tag} onClick={() => setFilter(tag)} className={`rounded-full border px-3 py-1.5 text-xs font-semibold ${filter === tag ? 'border-slate-950 bg-slate-950 text-white' : 'border-slate-200 bg-white text-slate-600'}`}>{tag}</button>)}</div>
      <div className="space-y-4">{visible.map(insight => <InsightCard key={insight.id} insight={insight} expanded={open === insight.id} onToggle={() => setOpen(open === insight.id ? '' : insight.id)} />)}</div>
    </>
  );
}

function PersonasView() {
  const [selected, setSelected] = useState(personas[0]?.id ?? '');
  const persona = personas.find(p => p.id === selected) ?? personas[0];
  return (
    <>
      <PageTitle eyebrow="Behavioural segmentation" title="Personas grounded in jobs, not demographics" description="These archetypes describe recurring behaviours and needs visible in the research. A single person can move between personas depending on context." />
      <div className="grid gap-5 xl:grid-cols-[320px_1fr]">
        <div className="space-y-2">{personas.map(p => <button key={p.id} onClick={() => setSelected(p.id)} className={`w-full rounded-xl border p-4 text-left ${selected === p.id ? 'border-indigo-300 bg-indigo-50' : 'border-slate-200 bg-white hover:bg-slate-50'}`}><div className="text-sm font-semibold text-slate-950">{p.name}</div><div className="mt-1 text-xs text-slate-500">{p.archetype}</div></button>)}</div>
        {persona && <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <div className="text-xs font-bold uppercase tracking-wider text-indigo-600">{persona.archetype}</div>
          <h2 className="mt-1 text-2xl font-semibold text-slate-950">{persona.name}</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">{persona.description}</p>
          <div className="mt-7 grid gap-6 md:grid-cols-2">
            {[['Jobs to be done', persona.jobs], ['Observed behaviours', persona.behaviours], ['Needs', persona.needs], ['Pain points', persona.painPoints]].map(([title, items]) => <div key={title as string}><h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">{title as string}</h3><ul className="mt-2 space-y-2">{(items as string[]).map(item => <li key={item} className="flex gap-2 text-sm leading-6 text-slate-700"><span className="text-indigo-500">•</span>{item}</li>)}</ul></div>)}
          </div>
          <div className="mt-7 rounded-xl bg-slate-950 p-5 text-white"><h3 className="text-xs font-bold uppercase tracking-wider text-slate-300">Product implications</h3><div className="mt-3 grid gap-2 md:grid-cols-2">{persona.productImplications.map(item => <div key={item} className="text-sm leading-6 text-slate-100">→ {item}</div>)}</div></div>
        </section>}
      </div>
    </>
  );
}

function EvidenceView() {
  const [query, setQuery] = useState('');
  const evidence = useMemo(() => insights.flatMap(i => i.evidence.map(e => ({ ...e, insight: i.title, insightId: i.id }))), []);
  const filtered = evidence.filter(e => `${e.quote} ${e.insight} ${e.tags.join(' ')}`.toLowerCase().includes(query.toLowerCase()));
  return (
    <>
      <PageTitle eyebrow="Evidence library" title="Keep the voice of the user attached to the insight" description="Search the evidence currently encoded in the repository. The exhaustive archive will grow as image-only FigJam sections are transcribed and linked." />
      <div className="mb-5 rounded-xl border border-slate-200 bg-white p-2 shadow-sm"><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search quotes, topics or insight names…" className="w-full rounded-lg px-3 py-2 text-sm outline-none" /></div>
      <div className="grid gap-4 lg:grid-cols-2">{filtered.map((e, index) => <article key={`${e.insightId}-${index}`} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><div className="mb-3 flex flex-wrap gap-2">{e.tags.map(tag => <Pill key={tag}>{tag}</Pill>)}</div><blockquote className="text-base leading-7 text-slate-800">“{e.quote}”</blockquote><div className="mt-4 border-t border-slate-100 pt-3"><div className="text-xs font-semibold text-slate-700">Supports: {e.insight}</div><div className="mt-1 text-xs text-slate-400">{e.source}</div></div></article>)}</div>
    </>
  );
}

function OpportunitiesView() {
  return (
    <>
      <PageTitle eyebrow="Product direction" title="Opportunity areas" description="A research-led backlog ordered by how strongly the underlying need appears in the current evidence. Priority is directional and should be combined with feasibility, strategy and fresh validation." />
      <div className="space-y-3">{opportunityAreas.map((o, index) => <article key={o.title} className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:grid-cols-[72px_1fr] md:items-start"><div className={`flex h-12 w-12 items-center justify-center rounded-xl text-sm font-bold ${o.priority === 'P0' ? 'bg-rose-50 text-rose-700' : o.priority === 'P1' ? 'bg-amber-50 text-amber-700' : 'bg-slate-100 text-slate-600'}`}>{o.priority}</div><div><div className="text-xs font-semibold text-slate-400">Opportunity {String(index + 1).padStart(2, '0')}</div><h3 className="mt-1 text-lg font-semibold text-slate-950">{o.title}</h3><p className="mt-1 text-sm leading-6 text-slate-600">{o.detail}</p></div></article>)}</div>
    </>
  );
}

function CoverageView() {
  return (
    <>
      <PageTitle eyebrow="Research integrity" title="Source coverage" description="This view makes the repository honest about what has been extracted as native text and what still requires slice-by-slice visual review. It prevents a polished synthesis from being mistaken for a complete archive." />
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"><div className="grid grid-cols-[1.1fr_120px_1.5fr] gap-4 border-b border-slate-200 bg-slate-50 px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-500"><div>Source area</div><div>Status</div><div>Notes</div></div>{coverage.map(row => <div key={row.area} className="grid grid-cols-[1.1fr_120px_1.5fr] gap-4 border-b border-slate-100 px-5 py-4 text-sm last:border-0"><div className="font-medium text-slate-900">{row.area}</div><div><span className={`rounded-full px-2 py-1 text-xs font-semibold ${row.status === 'Extracted' || row.status === 'Mapped' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'}`}>{row.status}</span></div><div className="leading-6 text-slate-600">{row.note}</div></div>)}</div>
      <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900"><strong>Important:</strong> the dashboard is already useful as a synthesis, but “image review” rows must be completed before calling the repository exhaustive. The FigJam contains large screenshot-slice sections whose text is not represented as native FigJam nodes.</div>
    </>
  );
}

export default function UxrDashboard() {
  const [view, setView] = useState<View>('overview');
  const content = view === 'overview' ? <Overview setView={setView} /> : view === 'insights' ? <InsightsView /> : view === 'personas' ? <PersonasView /> : view === 'evidence' ? <EvidenceView /> : view === 'opportunities' ? <OpportunitiesView /> : <CoverageView />;
  return (
    <div className="min-h-screen bg-[#f7f8fb] text-slate-900">
      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-5 px-4 py-3 md:px-8">
          <div className="flex min-w-0 items-center gap-3"><div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-indigo-600 text-sm font-bold text-white">C</div><div className="min-w-0"><div className="truncate text-sm font-semibold text-slate-950">CatholicSG Research</div><div className="truncate text-xs text-slate-400">Living UXR repository</div></div></div>
          <div className="flex items-center gap-2"><a href={researchMeta.sourceUrl} target="_blank" rel="noreferrer" className="hidden rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600 sm:block">Open source FigJam ↗</a><a href="#app" className="rounded-lg bg-slate-950 px-3 py-2 text-xs font-semibold text-white">App prototype</a></div>
        </div>
      </header>
      <div className="mx-auto grid max-w-[1500px] md:grid-cols-[220px_1fr]">
        <aside className="border-r border-slate-200 bg-white md:min-h-[calc(100vh-65px)]"><nav className="sticky top-[65px] flex gap-2 overflow-x-auto p-3 md:block md:space-y-1 md:p-4">{nav.map(item => <button key={item.id} onClick={() => setView(item.id)} className={`shrink-0 rounded-lg px-3 py-2.5 text-left text-sm font-medium md:w-full ${view === item.id ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-950'}`}>{item.label}</button>)}</nav></aside>
        <main className="min-w-0 px-4 py-7 md:px-8 md:py-10 xl:px-12">{content}<footer className="mt-12 border-t border-slate-200 pt-5 text-xs leading-5 text-slate-400">Source: {researchMeta.source}. This dashboard separates synthesised findings from source-coverage status so future research can be added without losing provenance.</footer></main>
      </div>
    </div>
  );
}
