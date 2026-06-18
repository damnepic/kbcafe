// Shared category metadata (color + icon + label) for the tool cards, used by
// the homepage showcase and the dedicated /tools page so they stay consistent.
const I = {
  brackets: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 5 3.5 12l5 7M15.5 5l5 7-5 7"/></svg>`,
  braces: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M9 4.5c-2.2 0-1.4 4.5-4 4.5 2.6 0 1.8 4.5 4 4.5"/><path d="M15 4.5c2.2 0 1.4 4.5 4 4.5-2.6 0-1.8 4.5-4 4.5"/></svg>`,
  hash: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 9h14M5 15h14M9 4 7.5 20M16.5 4 15 20"/></svg>`,
  table: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10h18M9 4v16"/></svg>`,
  doc: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 3h8l4 4v14H6z"/><path d="M9 12h6M9 16h6M9 8h2"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/></svg>`,
  rss: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><circle cx="5.5" cy="18.5" r="1.7" fill="currentColor" stroke="none"/><path d="M4 11a9 9 0 0 1 9 9"/><path d="M4 5a15 15 0 0 1 15 15"/></svg>`,
};

export const CAT_META = {
  ai:       { label: 'AI',          bg: '#7657ff', icon: I.brackets },
  json:     { label: 'JSON',        bg: '#ee4b2b', icon: I.braces },
  encoding: { label: 'Encoding',    bg: '#e0911a', icon: I.hash },
  convert:  { label: 'Converters',  bg: '#3478f6', icon: I.table },
  text:     { label: 'Text',        bg: '#8a63ff', icon: I.doc },
  time:     { label: 'Time & Cron', bg: '#0f9f82', icon: I.clock },
  feeds:    { label: 'Feeds',       bg: '#f4842a', icon: I.rss },
};

// display order for grouped views
export const CAT_ORDER = ['ai', 'json', 'encoding', 'convert', 'text', 'time', 'feeds'];

// tools that get a "New" badge
export const NEW_TOOLS = ['/token-counter', '/context-budget-analyzer', '/rag-chunking-visualizer', '/mcp-config-generator', '/prompt-linter', '/prompt-diff', '/llm-vram-calculator', '/llm-cost-calculator'];
