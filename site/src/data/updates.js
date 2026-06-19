// What's New, the changelog that feeds the RSS feed and /whats-new.
// Newest first. Add ONE line whenever you ship something feed-worthy: a tool,
// a course/learning path, a guide, or a notable feature. Keep it honest, only
// real, user-facing changes (a typo fix shouldn't notify subscribers).
//
//   { date: 'YYYY-MM-DD', kind: 'Tool'|'Course'|'Guide'|'Feature', title, url, summary }
//
// `url` is a site path (e.g. '/rss-to-json') or a full URL. Dates are EST/EDT calendar days.
export const UPDATES = [
  { date: '2026-06-19', kind: 'Tool', title: 'Feed Preview', url: '/feed-preview',
    summary: 'Paste an RSS or Atom feed and read it as a clean, human-friendly list, fully in your browser.' },
  { date: '2026-06-19', kind: 'Tool', title: 'RSS → JSON', url: '/rss-to-json',
    summary: 'Turn any RSS or Atom feed into clean JSON for your app, no server round-trip.' },
  { date: '2026-06-18', kind: 'Feature', title: 'KB Cafe has its own RSS feed', url: '/feed.xml',
    summary: 'Fitting for an RSS-era domain: subscribe in any reader and new tools, courses, and posts arrive automatically.' },
  { date: '2026-06-18', kind: 'Course', title: 'Learn AI Agents', url: '/learn-ai-agents',
    summary: 'A free, hands-on path from idea to a working agent architecture, each step pairing a concept with a tool.' },
  { date: '2026-06-18', kind: 'Course', title: 'Learn AI Infrastructure', url: '/learn-ai-infrastructure',
    summary: 'The building blocks of modern AI, from context windows to agents, in order.' },
  { date: '2026-06-18', kind: 'Feature', title: 'Knowledge Map', url: '/map',
    summary: 'An interactive graph of every concept, tool, and lesson, and how they connect.' },
  { date: '2026-06-18', kind: 'Tool', title: 'Context Budget Analyzer', url: '/context-budget-analyzer',
    summary: 'See exactly what fills a model’s context window, ranked by the biggest offenders.' },
  { date: '2026-06-17', kind: 'Guide', title: 'AI Explained', url: '/ai',
    summary: 'Plain-English explainers for MCP, RAG, embeddings, tool calling, structured outputs, and more.' },
];
