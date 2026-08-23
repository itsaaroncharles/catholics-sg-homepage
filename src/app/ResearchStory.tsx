import { insights, opportunityAreas, personas, researchMeta, themes } from './uxrData';

const navy = '#071F57';
const cream = '#F7F2E8';
const green = '#2F7D5A';
const gold = '#B88419';

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#2F7D5A]">{children}</div>;
}

function SectionTitle({ eyebrow, children, sub }: { eyebrow: string; children: React.ReactNode; sub?: string }) {
  return (
    <div className="mb-8 max-w-[760px]">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="font-serif text-[34px] font-bold leading-[1.03] tracking-[-0.025em] text-[#071F57] md:text-[46px]">{children}</h2>
      {sub && <p className="mt-4 max-w-[700px] text-[15px] leading-7 text-[#45516A] md:text-[17px]">{sub}</p>}
    </div>
  );
}

function Quote({ children, source }: { children: React.ReactNode; source?: string }) {
  return (
    <blockquote className="rounded-[4px] border border-[#DDD7CA] bg-white px-5 py-5 shadow-[0_2px_0_rgba(7,31,87,0.03)]">
      <p className="font-serif text-[18px] font-semibold leading-[1.45] text-[#071F57]">“{children}”</p>
      {source && <footer className="mt-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#7B8497]">{source}</footer>}
    </blockquote>
  );
}

function MiniBar({ label, value }: { label: string; value: number }) {
  return (
    <div className="grid grid-cols-[150px_1fr_36px] items-center gap-3 text-[12px] text-[#34405A]">
      <span>{label}</span>
      <div className="h-[5px] overflow-hidden rounded-full bg-[#E4DED2]"><div className="h-full rounded-full bg-[#1261D7]" style={{ width: `${value}%` }} /></div>
      <span className="text-right font-semibold text-[#071F57]">{value}</span>
    </div>
  );
}

export default function ResearchStory() {
  const evidenceCount = insights.reduce((n, insight) => n + insight.evidence.length, 0);
  const p0Count = opportunityAreas.filter((o) => o.priority === 'P0').length;

  return (
    <div className="min-h-screen bg-[#F7F2E8] text-[#071F57]" style={{ backgroundColor: cream }}>
      <header className="sticky top-0 z-50 border-b border-[#E4DED2]/90 bg-[#F7F2E8]/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1060px] items-center justify-between px-5 py-3 md:px-8">
          <a href="#research" className="text-[12px] font-extrabold tracking-[-0.01em] text-[#071F57]">CatholicSG · UXR</a>
          <div className="flex items-center gap-2 text-[11px] font-semibold">
            <a href="#research" className="rounded-full border border-[#071F57] px-3 py-1.5">Story</a>
            <a href="#uxr" className="rounded-full px-3 py-1.5 text-[#667086] hover:bg-white">Full repository ↗</a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1060px] px-5 pb-28 md:px-8">
        <section className="pb-24 pt-20 md:pb-32 md:pt-28">
          <Eyebrow>CatholicSG · Research synthesis · 2026</Eyebrow>
          <h1 className="max-w-[850px] font-serif text-[50px] font-bold leading-[0.96] tracking-[-0.045em] text-[#071F57] md:text-[78px]">
            CatholicSG isn’t just an app. It sits inside people’s faith lives.
          </h1>
          <p className="mt-7 max-w-[700px] text-[17px] leading-7 text-[#46516A] md:text-[19px]">
            Across discovery work, journeys, app critique and post-launch feedback, one pattern is consistent: people come to CatholicSG to pray, prepare for Mass, understand their faith and stay connected to the Church in Singapore.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
            {[
              [themes.length, 'core research themes'],
              [insights.length, 'synthesised insights'],
              [personas.length, 'behavioural archetypes'],
              [p0Count, 'immediate P0 priorities'],
            ].map(([n, label]) => (
              <div key={String(label)} className="rounded-[4px] border border-[#DDD7CA] bg-white p-5">
                <div className="font-serif text-[38px] font-bold leading-none text-[#071F57]">{n}</div>
                <div className="mt-2 text-[11px] font-semibold uppercase tracking-[0.09em] text-[#697386]">{label}</div>
              </div>
            ))}
          </div>
          <p className="mt-3 text-[10px] leading-5 text-[#858B97]">Counts describe the current synthesis layer, not the final number of raw FigJam responses. Screenshot-only research is still being exhaustively transcribed.</p>
        </section>

        <section className="border-t border-[#DDD7CA] py-20 md:py-28">
          <SectionTitle eyebrow="What we heard" sub="The strongest signal is not a request for novelty. It is a request for CatholicSG to support the things Catholics already do, more reliably and with less friction.">
            Three truths cut through the noise.
          </SectionTitle>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              ['01', 'Faith is habitual', 'Readings, reflections and prayer are woven into morning routines, commutes and preparation for Mass.'],
              ['02', 'Utility matters', 'Mass schedules and one-stop diocesan information solve practical problems that parish-by-parish browsing does not.'],
              ['03', 'Depth beats novelty', 'Many of the strongest complaints are about useful spiritual tools that disappeared, became harder to use or lost shareability.'],
            ].map(([n, title, body]) => (
              <article key={n} className="min-h-[220px] rounded-[4px] border border-[#DDD7CA] bg-white p-6">
                <div className="text-[11px] font-bold tracking-[0.12em] text-[#2F7D5A]">{n}</div>
                <h3 className="mt-8 font-serif text-[25px] font-bold leading-tight text-[#071F57]">{title}</h3>
                <p className="mt-3 text-[14px] leading-6 text-[#596277]">{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-[#DDD7CA] py-20 md:py-28">
          <SectionTitle eyebrow="Insight 01" sub="This changes how we should judge the product. A broken or missing daily-reading flow is not merely a content inconvenience; for some people it interrupts an established spiritual practice.">
            The app has become part of a daily prayer rhythm.
          </SectionTitle>
          <div className="grid gap-4 md:grid-cols-[1.1fr_.9fr]">
            <div className="rounded-[4px] border border-[#DDD7CA] bg-white p-6 md:p-8">
              <div className="mb-6 text-[11px] font-bold uppercase tracking-[0.12em] text-[#697386]">How the routine behaves</div>
              <div className="flex flex-wrap items-center gap-2">
                {['Open CatholicSG', 'Today’s readings', 'Reflection', 'Prayer / Rosary', 'Carry into the day'].map((step, i) => (
                  <div key={step} className="flex items-center gap-2">
                    <div className="rounded-[3px] border border-[#D9D4C8] bg-[#FAF8F3] px-3 py-3 text-[12px] font-semibold text-[#071F57]">{step}</div>
                    {i < 4 && <span className="text-[#9AA0AC]">→</span>}
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-[3px] bg-[#EEF4FF] p-4 text-[13px] leading-6 text-[#23436F]">
                <strong>Design implication:</strong> optimise the home experience for repeat daily use, continuity and immediate access to “today”, rather than treating every visit as fresh discovery.
              </div>
            </div>
            <Quote source="Post-launch feedback">Mass Readings and Scripture Reflection I use it daily as my morning prayer.</Quote>
          </div>
        </section>

        <section className="border-t border-[#DDD7CA] py-20 md:py-28">
          <SectionTitle eyebrow="Insight 02" sub="Users are not thinking in parish-directory terms. Their question is often simpler: “I’m free at this time — where can I go for Mass?”">
            Mass discovery should begin with time, not church names.
          </SectionTitle>
          <div className="grid gap-4 md:grid-cols-[.9fr_1.1fr]">
            <div className="rounded-[4px] border border-[#DDD7CA] bg-white p-6">
              <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#697386]">Current mental load</div>
              <div className="mt-6 space-y-3">
                <MiniBar label="Browse churches" value={92} />
                <MiniBar label="Compare timings" value={78} />
                <MiniBar label="Check location" value={56} />
                <MiniBar label="Choose Mass" value={28} />
              </div>
              <p className="mt-5 text-[10px] leading-5 text-[#858B97]">Illustrative task-load index to explain the journey; not survey percentages.</p>
            </div>
            <div className="grid gap-4">
              <Quote source="Post-launch feedback">Can select the church n timing to attend. But it will be good like before to have block timings ... Presently must navigate all 32 churches.</Quote>
              <div className="rounded-[4px] border border-[#DDD7CA] bg-white p-5">
                <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#2F7D5A]">Future model</div>
                <div className="mt-3 font-serif text-[22px] font-bold">Time → area → language → available churches</div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-[#DDD7CA] py-20 md:py-28">
          <SectionTitle eyebrow="Insight 03" sub="The redesign can be visually cleaner and still feel worse if it removes the capabilities people relied on. Users clearly separate aesthetics from usefulness.">
            The redesign improved presentation, but some users experienced functional regression.
          </SectionTitle>
          <div className="grid gap-4 md:grid-cols-2">
            <Quote source="Post-launch feedback">I appreciate the clean look of this version but I thought the previous version worked quite well actually.</Quote>
            <Quote source="Post-launch feedback">This new version while updated is not as comprehensive as the old one.</Quote>
          </div>
          <div className="mt-5 rounded-[4px] border border-[#DDD7CA] bg-white p-6">
            <div className="grid gap-6 md:grid-cols-3">
              {[
                ['Keep', 'Cleaner visual language and clearer presentation'],
                ['Restore', 'High-value prayer, liturgical and formation utilities'],
                ['Protect', 'Feature parity and discoverability during future redesigns'],
              ].map(([label, body]) => (
                <div key={label}>
                  <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#2F7D5A]">{label}</div>
                  <div className="mt-2 font-serif text-[19px] font-bold leading-snug">{body}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-[#DDD7CA] py-20 md:py-28">
          <SectionTitle eyebrow="Insight 04" sub="Copying a verse or reflection is not just a utility feature. It enables dictionary lookup, personal study, group sharing and evangelisation.">
            Sharing is part of how faith travels beyond the app.
          </SectionTitle>
          <div className="grid gap-4 md:grid-cols-[1fr_1fr]">
            <div className="rounded-[4px] border border-[#DDD7CA] bg-white p-7">
              <div className="flex flex-col gap-3">
                {['Select a passage', 'Look up a word', 'Copy a reflection', 'Share to a friend / group', 'Continue the conversation'].map((x, i) => (
                  <div key={x} className="flex items-center gap-4">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#071F57] text-[10px] font-bold text-white">{i + 1}</div>
                    <div className="text-[14px] font-semibold">{x}</div>
                  </div>
                ))}
              </div>
            </div>
            <Quote source="Post-launch feedback">The scripture reflections cannot be shared in this new version ... allow copying so that we can share with others (non catholics).</Quote>
          </div>
        </section>

        <section className="border-t border-[#DDD7CA] py-20 md:py-28">
          <SectionTitle eyebrow="Who we’re designing for" sub="These are behavioural archetypes, not demographic stereotypes. A single person can move between them depending on context.">
            Six modes of Catholic life keep appearing.
          </SectionTitle>
          <div className="grid gap-3 md:grid-cols-3">
            {personas.map((p, i) => (
              <article key={p.id} className="rounded-[4px] border border-[#DDD7CA] bg-white p-5">
                <div className="text-[10px] font-bold uppercase tracking-[0.13em] text-[#2F7D5A]">0{i + 1} · {p.archetype}</div>
                <h3 className="mt-3 font-serif text-[22px] font-bold leading-tight">{p.name}</h3>
                <p className="mt-3 text-[13px] leading-6 text-[#5A6377]">{p.description}</p>
                <div className="mt-5 border-t border-[#ECE8DF] pt-4 text-[11px] leading-5 text-[#667086]"><strong className="text-[#071F57]">Needs:</strong> {p.needs.slice(0, 3).join(' · ')}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-[#DDD7CA] py-20 md:py-28">
          <SectionTitle eyebrow="What the research points to" sub="The opportunity is not to make CatholicSG contain everything indiscriminately. It is to organise the things Catholics repeatedly need around clear jobs and moments.">
            A simpler product model emerges from the evidence.
          </SectionTitle>
          <div className="rounded-[4px] border border-[#DDD7CA] bg-white p-6 md:p-8">
            <div className="grid gap-4 md:grid-cols-4">
              {[
                ['Today', 'Readings · Reflection · Prayer', 'Daily spiritual rhythm'],
                ['Go', 'Mass · Confession · Parish', 'Practical Church utility'],
                ['Grow', 'Formation · Saints · RCIA', 'Understand the faith'],
                ['Connect', 'Events · Groups · Share', 'Participate and evangelise'],
              ].map(([title, contents, job]) => (
                <div key={title} className="rounded-[3px] bg-[#F7F8FB] p-5">
                  <div className="font-serif text-[25px] font-bold">{title}</div>
                  <div className="mt-2 text-[12px] font-semibold text-[#2F7D5A]">{contents}</div>
                  <div className="mt-6 text-[11px] leading-5 text-[#6A7282]">{job}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-[#DDD7CA] py-20 md:py-28">
          <SectionTitle eyebrow="Priority decisions" sub="The current synthesis suggests restoring and strengthening proven jobs before investing heavily in novelty features.">
            What should happen next.
          </SectionTitle>
          <div className="space-y-3">
            {opportunityAreas.map((o, i) => (
              <div key={o.title} className="grid gap-3 rounded-[4px] border border-[#DDD7CA] bg-white p-5 md:grid-cols-[64px_1fr_1.35fr] md:items-start">
                <div className={`w-fit rounded-full px-2.5 py-1 text-[10px] font-extrabold ${o.priority === 'P0' ? 'bg-[#FFF0D0] text-[#8A5A00]' : o.priority === 'P1' ? 'bg-[#EAF2FF] text-[#1250A5]' : 'bg-[#EEF0F3] text-[#596273]'}`}>{o.priority}</div>
                <div className="font-serif text-[18px] font-bold leading-snug">{o.title}</div>
                <div className="text-[13px] leading-6 text-[#5C6577]">{o.detail}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-[#DDD7CA] py-20 md:py-28">
          <SectionTitle eyebrow="Decision principles">
            Four rules to carry into design.
          </SectionTitle>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              ['01', 'Protect spiritual habits', 'Daily-use flows deserve the highest reliability and the shortest paths.'],
              ['02', 'Organise around intent', 'Start with what the person is trying to do, not how Church information happens to be stored.'],
              ['03', 'Depth before novelty', 'Restore proven value and make it excellent before adding attention-grabbing features.'],
              ['04', 'Accessibility means control', 'Give users a range of readable settings instead of assuming one font size works for everyone.'],
            ].map(([n, title, body]) => (
              <div key={n} className="rounded-[4px] border border-[#DDD7CA] bg-white p-6">
                <div className="text-[10px] font-bold tracking-[0.13em] text-[#2F7D5A]">{n}</div>
                <h3 className="mt-5 font-serif text-[24px] font-bold">{title}</h3>
                <p className="mt-2 text-[13px] leading-6 text-[#5C6577]">{body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-[#DDD7CA] pb-16 pt-20 md:pt-28">
          <Eyebrow>Where this goes</Eyebrow>
          <h2 className="max-w-[760px] font-serif text-[44px] font-bold leading-[0.98] tracking-[-0.035em] text-[#071F57] md:text-[66px]">The research gives us a direction. Now we turn it into decisions.</h2>
          <p className="mt-6 max-w-[680px] text-[16px] leading-7 text-[#556075]">This page is the stakeholder narrative. The full UXR repository keeps the detailed evidence, personas, insight rationale, opportunity backlog and source-coverage tracking behind it.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#uxr" className="rounded-[3px] bg-[#071F57] px-5 py-3 text-[12px] font-bold text-white">Explore the full research repository →</a>
            <a href={researchMeta.sourceUrl} target="_blank" rel="noreferrer" className="rounded-[3px] border border-[#071F57] px-5 py-3 text-[12px] font-bold text-[#071F57]">Open source FigJam ↗</a>
          </div>
          <div className="mt-16 flex flex-wrap items-center justify-between gap-3 border-t border-[#DDD7CA] pt-5 text-[10px] uppercase tracking-[0.1em] text-[#8B909B]">
            <span>CatholicSG UXR · stakeholder synthesis</span>
            <span>{evidenceCount}+ linked evidence excerpts in current synthesis</span>
          </div>
        </section>
      </main>
    </div>
  );
}
