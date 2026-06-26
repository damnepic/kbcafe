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
  mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.5 6.5 8.5 6 8.5-6"/></svg>`,
  globe: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/></svg>`,
};

// `desc` = one-line category definition. Segments are plain strings, or { t, s } where t is the
// anchor text and s is a dictionary slug; contextual interlinks to /dictionary, added ONLY where a
// genuine matching term exists (intuitive, not spammy). Surfaced under each heading on /tools.
export const CAT_META = {
  ai:       { label: 'AI',          bg: '#7657ff', icon: I.brackets, desc: ['Everything for building with ', { t: 'large language models', s: 'llm' }, ': ', { t: 'prompts', s: 'prompt' }, ', ', { t: 'tokens', s: 'token' }, ', ', { t: 'agents', s: 'agent' }, ', cost, and context.'] },
  json:     { label: 'JSON',        bg: '#ee4b2b', icon: I.braces,   desc: ['Generate types and convert ', { t: 'JSON', s: 'json' }, ', the data format behind most ', { t: 'APIs', s: 'api' }, ' and ', { t: 'schemas', s: 'schema' }, '.'] },
  encoding: { label: 'Encoding',    bg: '#e0911a', icon: I.hash,     desc: ['Encode, decode, and inspect ', { t: 'Base64', s: 'base64' }, ' and JWTs, the tokens behind ', { t: 'authentication', s: 'authentication' }, '.'] },
  convert:  { label: 'Converters',  bg: '#3478f6', icon: I.table,    desc: ['Convert between data formats like CSV, YAML, and JSON, and turn cURL commands into code.'] },
  text:     { label: 'Text',        bg: '#8a63ff', icon: I.doc,      desc: ['Format and clean up text and code, from messy SQL to naming conventions.'] },
  time:     { label: 'Time & Cron', bg: '#0f9f82', icon: I.clock,    desc: ['Build and read ', { t: 'cron', s: 'cron' }, ' schedules for recurring jobs, in plain English.'] },
  feeds:    { label: 'Feeds',       bg: '#f4842a', icon: I.rss,      desc: ['Validate, preview, and convert ', { t: 'RSS', s: 'rss' }, ' and Atom feeds, the open web’s syndication format.'] },
  email:    { label: 'Email',       bg: '#d63e1f', icon: I.mail,     desc: ['Check a ', { t: 'domain', s: 'domain' }, '’s email deliverability: SPF, DKIM, and DMARC.'] },
  network:  { label: 'Network',     bg: '#3478f6', icon: I.globe,    desc: ['Look up ', { t: 'DNS', s: 'dns' }, ' records and WHOIS data for any ', { t: 'domain', s: 'domain' }, '.'] },
};

// display order for grouped views
export const CAT_ORDER = ['ai', 'json', 'encoding', 'convert', 'text', 'time', 'feeds', 'email', 'network'];

// AI is 27 tools, so it gets sub-clusters (used by the /tools "smart rail" + grouped view)
export const AI_SUB_META = {
  prompting: { label: 'Prompting' },
  models:    { label: 'Models & cost' },
  agents:    { label: 'Agents & MCP' },
  build:     { label: 'Build & ship' },
};
export const AI_SUB_ORDER = ['prompting', 'models', 'agents', 'build'];
export const AI_SUB = {
  '/prompt-optimizer': 'prompting', '/prompt-builder': 'prompting', '/prompt-linter': 'prompting',
  '/prompt-diff': 'prompting', '/prompt-simulator': 'prompting', '/prompt-x-ray': 'prompting', '/good-vs-bad-prompts': 'prompting', '/ai-coding-prompt-builder': 'prompting',
  '/token-counter': 'models', '/context-window-visualizer': 'models', '/context-budget-analyzer': 'models',
  '/llm-vram-calculator': 'models', '/llm-cost-calculator': 'models', '/ai-profit-calculator': 'models',
  '/mcp-config-generator': 'agents', '/mcp-inspector': 'agents', '/ai-pattern-explorer': 'agents',
  '/ai-pattern-builder': 'agents', '/agent-memory-simulator': 'agents', '/tool-call-visualizer': 'agents',
  '/structured-output-builder': 'build', '/rag-chunking-visualizer': 'build', '/embedding-explorer': 'build',
  '/ai-stack-explainer': 'build', '/ai-architecture-generator': 'build', '/claim-checker': 'build',
  '/scope-sorter': 'build', '/launch-rubric': 'build',
};

// tools that get a "New" badge
export const NEW_TOOLS = ['/ai-coding-prompt-builder', '/mcp-inspector', '/ai-profit-calculator', '/prompt-optimizer', '/whois-lookup', '/dns-lookup', '/email-deliverability-checker', '/token-counter', '/context-budget-analyzer', '/rag-chunking-visualizer', '/mcp-config-generator', '/prompt-linter', '/prompt-diff', '/llm-vram-calculator', '/llm-cost-calculator', '/agent-memory-simulator', '/ai-pattern-builder', '/ai-stack-explainer', '/tool-call-visualizer', '/prompt-x-ray', '/embedding-explorer', '/claim-checker', '/scope-sorter', '/launch-rubric', '/ai-architecture-generator', '/prompt-simulator', '/prompt-builder', '/good-vs-bad-prompts'];
