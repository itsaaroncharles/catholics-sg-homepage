export type Evidence = {
  quote: string;
  tags: string[];
  source: string;
};

export type Insight = {
  id: string;
  title: string;
  summary: string;
  whyItMatters: string;
  implications: string[];
  evidenceStrength: 'Very high' | 'High' | 'Medium';
  tags: string[];
  evidence: Evidence[];
};

export type Persona = {
  id: string;
  name: string;
  archetype: string;
  description: string;
  jobs: string[];
  behaviours: string[];
  needs: string[];
  painPoints: string[];
  productImplications: string[];
};

export const researchMeta = {
  title: 'CatholicSG UXR Repository',
  source: 'CatholicSG 2023 UXR FigJam',
  sourceUrl: 'https://www.figma.com/board/OQgmvj3TlwOr3oRt79VXfT/-CatholicSG--UXR?node-id=0-1',
  scope: [
    'Discovery research',
    'Current and proposed user flows',
    'Customer journeys',
    'Pastoral services flows',
    'App critique',
    'Post-launch survey feedback',
    'Affinity mapping and synthesised insights',
    'Feature ideas and opportunity areas',
  ],
};

export const themes = [
  { name: 'Daily faith practice', description: 'Readings, reflections, prayer and devotions are embedded in users’ everyday spiritual routines.', strength: 'Very high' },
  { name: 'One-stop Catholic utility', description: 'Users value not needing to search parish sites or separate apps for Mass, prayer, information and formation.', strength: 'Very high' },
  { name: 'Old-app feature regression', description: 'Loss of prayers, Liturgy of the Hours, liturgical calendar, Order of Mass and confession guidance created strong dissatisfaction.', strength: 'Very high' },
  { name: 'Read, select, copy & share', description: 'Text interaction supports study, dictionary lookup, faith sharing and evangelisation—not merely convenience.', strength: 'High' },
  { name: 'Mass discovery', description: 'Cross-parish Mass schedules are a core practical job, especially for users with variable schedules or travel.', strength: 'Very high' },
  { name: 'Accessibility & readability', description: 'Users need genuinely flexible type sizing. Large type helps some users but excessive minimum sizes increase scrolling and reduce focus for others.', strength: 'High' },
  { name: 'Faith formation', description: 'Users repeatedly seek deeper explanations, RCIA material, saints, Scripture context and guidance for building a prayer life.', strength: 'High' },
  { name: 'Community & participation', description: 'Events, groups, prayer intentions and easier connection to ministries can turn the app from reference tool into Church participation layer.', strength: 'Medium' },
];

export const insights: Insight[] = [
  {
    id: 'daily-ritual',
    title: 'CatholicSG is part of a daily spiritual ritual, not just an information app',
    summary: 'A large cluster of responses describes Mass readings, Scripture reflections, Rosary and devotions as daily or near-daily habits—often in the morning, during commutes, before Mass or as part of personal prayer.',
    whyItMatters: 'The product competes less with news/content apps and more with the user’s prayer routine. Reliability, continuity and low-friction access therefore matter disproportionately.',
    implications: [
      'Optimise the home experience for repeat daily use and immediate access to today’s spiritual content.',
      'Preserve continuity across days with yesterday/today/tomorrow and recent-history access.',
      'Treat outages, missing content and feature removals as interruptions to a spiritual habit, not ordinary feature defects.',
      'Consider a personalised daily prayer sequence rather than exposing content as unrelated modules.',
    ],
    evidenceStrength: 'Very high',
    tags: ['Readings', 'Reflections', 'Prayer', 'Habit'],
    evidence: [
      { quote: 'Mass Readings and Scripture Reflection I use it daily as my morning prayer.', tags: ['daily use'], source: 'Post-launch feedback' },
      { quote: 'I use the Mass Readings and Reflections everyday. Having it in an app simplifies looking for it.', tags: ['daily use', 'convenience'], source: 'Post-launch feedback' },
      { quote: 'As part of my regular prayer, I would recite my Rosary daily and then read the mass readings and reflections ... on the way to work (MRT).', tags: ['routine', 'commute'], source: 'Post-launch feedback' },
    ],
  },
  {
    id: 'one-stop',
    title: 'The strongest product proposition is “everything Catholic in one place”',
    summary: 'Users repeatedly value CatholicSG because it removes the need to search many parish websites, carry separate references or switch between multiple Catholic apps.',
    whyItMatters: 'Breadth is not automatically bloat here. A coherent one-stop experience is itself a user benefit when the information architecture makes frequent tasks easy to reach.',
    implications: [
      'Evaluate feature removal against the cost of forcing users back to fragmented external sources.',
      'Build a strong global search and category model rather than reducing content solely to make the app feel lean.',
      'Prioritise canonical diocesan information that is otherwise fragmented across parish sites.',
      'Use deep links to parish-owned content when central ownership is impractical, but keep discovery inside CatholicSG.',
    ],
    evidenceStrength: 'Very high',
    tags: ['One-stop', 'Information architecture', 'Parish'],
    evidence: [
      { quote: 'Very useful to have an app for everything Catholic.', tags: ['one-stop'], source: 'Post-launch feedback' },
      { quote: 'These are info which are quite hard to find if we have to go from one church website to another. So having info in 1 place is a good thing.', tags: ['fragmentation'], source: 'Post-launch feedback' },
      { quote: 'One stop whether for spiritual guidance or mundane admin.', tags: ['one-stop'], source: 'Post-launch feedback' },
    ],
  },
  {
    id: 'regression',
    title: 'The redesign improved presentation but created a perceived loss of capability',
    summary: 'Positive comments about the cleaner, more contemporary interface coexist with strong requests to restore functions from the old app. The tension is not “old design versus new design”; it is visual improvement versus functional regression.',
    whyItMatters: 'A visually successful redesign can still reduce product value if established high-frequency jobs disappear. The research strongly suggests that users distinguish aesthetics from usefulness.',
    implications: [
      'Maintain a feature-parity/regression checklist for redesigns.',
      'Prioritise restoration of high-frequency spiritual tools before net-new novelty features.',
      'Communicate where moved features live; some “missing” reports may be discoverability failures rather than true removals.',
      'Use analytics to distinguish low-discovery features from genuinely low-value features before removal.',
    ],
    evidenceStrength: 'Very high',
    tags: ['Old app', 'Regression', 'Redesign'],
    evidence: [
      { quote: 'I appreciate the clean look of this version but I thought the previous version worked quite well actually.', tags: ['redesign'], source: 'Post-launch feedback' },
      { quote: 'This new version while updated is not as comprehensive as the old one.', tags: ['feature regression'], source: 'Post-launch feedback' },
      { quote: 'I guess everything needs getting used to ... the liturgy calendars and the prayers are my most frequent use had gone.', tags: ['missing features'], source: 'Post-launch feedback' },
    ],
  },
  {
    id: 'read-share',
    title: 'Copy, selection and sharing are spiritual-study and evangelisation tools',
    summary: 'Users want selectable Scripture and reflections so they can look up unfamiliar words, quote passages, save reflections and share material with Catholics and non-Catholics.',
    whyItMatters: 'Disabling text interaction blocks multiple important jobs at once: learning, accessibility, memory, group faith sharing and evangelisation.',
    implications: [
      'Allow native text selection and copy wherever licensing permits.',
      'Provide explicit share actions with deep links to the exact reading/reflection.',
      'Support dictionary/lookup behaviour through native platform text selection.',
      'Preserve shareable URLs for yesterday/today/tomorrow content and archived reflections.',
    ],
    evidenceStrength: 'High',
    tags: ['Copy', 'Share', 'Evangelisation', 'Study'],
    evidence: [
      { quote: 'Please allow the words to be selected / copied and check with dictionary. I use this all the time especially for words which I want to know more in-depth of its meaning.', tags: ['dictionary', 'selection'], source: 'Post-launch feedback' },
      { quote: 'The scripture reflections cannot be shared in this new version ... allow copying so that we can share with others (non catholics).', tags: ['evangelisation'], source: 'Post-launch feedback' },
      { quote: 'I share this reflection with many non Catholics. There’s no link to copy & paste? Not friendly.', tags: ['sharing'], source: 'Post-launch feedback' },
    ],
  },
  {
    id: 'mass-discovery',
    title: 'Mass schedule discovery is a core mobility job across the whole archdiocese',
    summary: 'Users often attend churches outside their home parish because of work, family schedules, travel or changing availability. They want to answer “Where can I attend Mass at this time?” rather than browse church-by-church.',
    whyItMatters: 'The current mental model should be time-first and location-aware, not merely a directory of parishes.',
    implications: [
      'Support search by time window, day, language and area—not only parish.',
      'Offer a consolidated chronological view such as “8–9am: these churches”.',
      'Extend the same discovery model to confession where reliable data exists.',
      'Make parish details trustworthy; incorrect addresses or schedules undermine the utility of the entire feature.',
    ],
    evidenceStrength: 'Very high',
    tags: ['Mass', 'Parish', 'Schedules'],
    evidence: [
      { quote: 'Can select the church n timing to attend. But it will be good like before to have block timings ... Presently must navigate all 32 churches.', tags: ['time-first'], source: 'Post-launch feedback' },
      { quote: 'Awesome new app. very useful to find mass schedule suitable to sometimes erratic timeframe.', tags: ['variable schedule'], source: 'Post-launch feedback' },
      { quote: 'They tell me where and when are the masses. I would also like to know where and when are the confessions.', tags: ['mass', 'confession'], source: 'Post-launch feedback' },
    ],
  },
  {
    id: 'accessibility',
    title: 'Readability requires a range, not a single “accessible” large-font default',
    summary: 'The board contains repeated complaints that even the smallest available font was too large, causing excessive scrolling and loss of focus. At the same time, other respondents explicitly value large fonts and big buttons.',
    whyItMatters: 'Accessibility needs conflict when the product assumes one universal optimum. User-controlled scaling is the safer design principle.',
    implications: [
      'Offer a wider text-size range with a sensible default and persistent preference.',
      'Test dynamic type interactions against device accessibility settings to prevent runaway scaling.',
      'Keep controls obvious and reversible; several users reported enlarging text and being unable to reduce it.',
      'Measure reading density and scrolling burden on long-form Scripture content.',
    ],
    evidenceStrength: 'High',
    tags: ['Accessibility', 'Typography', 'Readability'],
    evidence: [
      { quote: 'The smallest font size is still a bit too big.', tags: ['font size'], source: 'Post-launch feedback' },
      { quote: 'The font size is too large even for the smallest available text size ... need a lot of scrolling ... I lose my focus on the mass readings.', tags: ['scrolling', 'focus'], source: 'Post-launch feedback' },
      { quote: 'Large fonts, big buttons, clear categories.', tags: ['positive accessibility'], source: 'Post-launch feedback' },
    ],
  },
  {
    id: 'formation',
    title: 'Users want CatholicSG to help them understand and grow, not only retrieve information',
    summary: 'Cardinal reflections are repeatedly described as nourishing, practical and faith-building. Requests for RCIA content, saints, Scripture explanation, memorisation and prayer guidance point to a broader formation need.',
    whyItMatters: 'The product can bridge the gap between “what is happening?” and “what does this mean for my faith?”—a differentiator that generic directories cannot provide.',
    implications: [
      'Treat formation as a content journey with progression, not a miscellaneous resource bucket.',
      'Connect readings to reflections, saints, liturgical context and related formation material.',
      'Create beginner-friendly pathways for new/re-engaging Catholics without diluting depth for mature users.',
      'Preserve trusted local voices and Singapore-specific reflections as a distinctive asset.',
    ],
    evidenceStrength: 'High',
    tags: ['Formation', 'Reflections', 'RCIA', 'Saints'],
    evidence: [
      { quote: 'I love our Cardinal’s daily Reflection, it is akin to my daily breakfast, cannot do without it.', tags: ['reflection'], source: 'Post-launch feedback' },
      { quote: 'I wonder if your RCIA lessons can also be made available online (in this App). It will be re-formation for us.', tags: ['RCIA'], source: 'Post-launch feedback' },
      { quote: 'Please include a short story of how the Saints of the day became saints.', tags: ['saints'], source: 'Post-launch feedback' },
    ],
  },
];

export const personas: Persona[] = [
  {
    id: 'daily-devotional',
    name: 'The Daily Devotional Catholic',
    archetype: 'Habitual spiritual user',
    description: 'Opens CatholicSG as part of a morning, commute or pre-Mass prayer routine. Readings and reflections are not occasional content; they structure the day.',
    jobs: ['Read today’s Mass readings', 'Reflect on Scripture', 'Pray familiar devotions', 'Prepare spiritually for Mass'],
    behaviours: ['Uses the app daily or near-daily', 'Returns to the same core content repeatedly', 'May read while commuting', 'Values yesterday/today/tomorrow access'],
    needs: ['Fast path to today', 'Reliable daily content', 'Readable long-form text', 'Recent history and continuity'],
    painPoints: ['Missing prayer content', 'Excessive scrolling', 'Unable to revisit or share reflections', 'Feature regressions disrupt routine'],
    productImplications: ['Daily home mode', 'Persistent prayer preferences', 'Recent-content history', 'Offline/resilient access where possible'],
  },
  {
    id: 'mass-planner',
    name: 'The Mobile Mass Planner',
    archetype: 'Schedule-driven cross-parish user',
    description: 'Chooses Mass based on where they are and when they are free. Home parish is not always the destination.',
    jobs: ['Find a Mass that fits a time window', 'Check another parish quickly', 'Plan around work/family/travel', 'Find confession or parish information'],
    behaviours: ['Moves between parishes', 'Searches by timing', 'Uses the app when plans change', 'May be a parent, freelancer, traveller or weekday Mass-goer'],
    needs: ['Time-first discovery', 'Accurate schedules', 'Area/language filters', 'Trustworthy parish details'],
    painPoints: ['Browsing all churches individually', 'Incorrect church information', 'Fragmented parish websites', 'No equivalent confession discovery'],
    productImplications: ['Chronological Mass finder', 'Map/area filtering', 'Data freshness indicators', 'Structured parish CMS'],
  },
  {
    id: 'faith-builder',
    name: 'The Faith Builder',
    archetype: 'Formation and understanding seeker',
    description: 'Uses CatholicSG to go beyond the text of Scripture and understand Catholic teaching, reflection and spiritual practice more deeply.',
    jobs: ['Understand Scripture', 'Learn Catholic teaching', 'Build a prayer life', 'Explore saints and liturgical context'],
    behaviours: ['Reads Cardinal reflections deeply', 'Looks up unfamiliar words or concepts', 'May revisit RCIA-style material', 'Values practical application'],
    needs: ['Contextual explanation', 'Progressive formation', 'Searchable resources', 'Links between Scripture and teaching'],
    painPoints: ['Content feels fragmented', 'Cannot select text for lookup', 'Formation material is hard to discover', 'Useful old content disappeared'],
    productImplications: ['Formation pathways', 'Related-content graph', 'Native text interaction', 'Beginner-to-deeper layers'],
  },
  {
    id: 'accessibility',
    name: 'The Readability-First User',
    archetype: 'User with strong display preferences',
    description: 'Needs the interface to adapt to their vision, device settings and reading comfort. This segment includes users who need larger type and users who need smaller type to reduce scrolling.',
    jobs: ['Read long passages comfortably', 'Adjust text without breaking layout', 'Navigate with clear targets', 'Maintain focus while reading'],
    behaviours: ['Changes font size', 'May rely on device accessibility settings', 'Reads long passages in-app', 'Notices density and contrast quickly'],
    needs: ['Wide type-size range', 'Reversible controls', 'Good line length and spacing', 'Robust dynamic type behaviour'],
    painPoints: ['Minimum text too large', 'Text becomes huge due to device settings', 'Cannot reduce size after increasing', 'Too much scrolling breaks concentration'],
    productImplications: ['User-controlled typography', 'Dynamic-type QA matrix', 'Reading-mode design', 'Accessibility settings preview'],
  },
  {
    id: 'multilingual-overseas',
    name: 'The Multilingual / Overseas Catholic',
    archetype: 'User crossing language or geographic boundaries',
    description: 'Uses CatholicSG because Singapore Catholic content, English readings or parish information remains useful even when they are abroad, visiting, or attending a Mass in another language.',
    jobs: ['Follow readings in a familiar language', 'Understand Mass while travelling', 'Find Singapore parish information', 'Stay connected to the local Church'],
    behaviours: ['May live outside Singapore', 'May attend Mandarin or other-language Masses', 'Uses English text as a comprehension aid', 'May be unable to register with Singapore-only identity assumptions'],
    needs: ['Language options', 'Guest-friendly access', 'Non-NRIC account pathways', 'Portable/shareable content'],
    painPoints: ['Registration barriers for foreigners', 'Language gaps', 'Local assumptions in identity flows', 'Difficulty following spoken readings'],
    productImplications: ['Guest mode', 'Inclusive account model', 'Bilingual reading support', 'Travel-friendly parish discovery'],
  },
  {
    id: 'connector',
    name: 'The Parish & Community Connector',
    archetype: 'Participation and evangelisation user',
    description: 'Uses digital content to connect people to parish life, groups, events, prayer and faith sharing—not only for private consumption.',
    jobs: ['Share reflections with others', 'Find events and retreats', 'Connect to ministries/groups', 'Pray for others and invite participation'],
    behaviours: ['Shares content in groups', 'May evangelise non-Catholic friends', 'Looks for retreats and activities', 'Values diocesan unity'],
    needs: ['Deep-link sharing', 'Events discovery', 'Group/ministry connections', 'Prayer-intention mechanisms with appropriate moderation'],
    painPoints: ['Cannot copy/share content', 'Groups are hard to discover', 'Events are fragmented', 'Feedback mechanisms feel cumbersome'],
    productImplications: ['Share-first content architecture', 'Community directory', 'Events aggregation', 'Simple feedback channel'],
  },
];

export const opportunityAreas = [
  { priority: 'P0', title: 'Restore high-value spiritual utilities', detail: 'Liturgy of the Hours / Divine Office, richer prayer library, liturgical calendar, Order of Mass, confession guidance and saints content.' },
  { priority: 'P0', title: 'Make Scripture and reflections truly usable', detail: 'Selectable text, copy, dictionary lookup, share links, archives and reading-friendly typography.' },
  { priority: 'P0', title: 'Reframe Mass discovery around time and place', detail: 'Search by time window, area, language and day; avoid forcing users to inspect parishes one by one.' },
  { priority: 'P1', title: 'Build a coherent daily faith journey', detail: 'Connect readings → reflection → prayer/devotion → formation, while preserving quick access for habitual users.' },
  { priority: 'P1', title: 'Create a formation layer', detail: 'RCIA-style learning, saints, liturgical context, Scripture explanation and structured pathways for faith growth.' },
  { priority: 'P1', title: 'Improve inclusion and account flexibility', detail: 'Support overseas/foreign users, privacy preferences and guest access without unnecessary identity friction.' },
  { priority: 'P2', title: 'Strengthen participation and community', detail: 'Events, retreats, ministries, groups, prayer intentions and simple feedback mechanisms.' },
];

export const coverage = [
  { area: 'Post-launch raw sticky-note feedback', status: 'Extracted', note: 'Large volume of text nodes is directly machine-readable from FigJam.' },
  { area: 'Post-launch synthesised themes', status: 'Mapped', note: 'Core themes represented in dashboard insights.' },
  { area: 'Font size / accessibility cluster', status: 'Mapped', note: 'Repeated fixed and unresolved typography feedback represented.' },
  { area: 'Pastoral services flows', status: 'Mapped', note: 'Flow structure is available; deeper operational synthesis can be added as a dedicated module.' },
  { area: 'Current flow / user flow screenshot slices', status: 'Image review', note: 'Stored as screenshot slices in FigJam and should be reviewed slice-by-slice for exhaustive archival.' },
  { area: 'Discovery insights screenshot slices', status: 'Image review', note: 'Requires visual extraction to preserve all details not represented as native FigJam text.' },
  { area: 'App critique screenshot slices', status: 'Image review', note: 'Requires visual extraction for exhaustive UI critique history.' },
  { area: 'Customer journey screenshot slices', status: 'Image review', note: 'Requires visual extraction for exhaustive journey-stage detail.' },
];
