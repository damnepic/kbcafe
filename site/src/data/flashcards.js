// Flashcard decks, auto-built from the dictionary (one source of truth, like StoryBites derives decks from story data).
// Each deck references dictionary slugs; the card front is the term, the back is its one-sentence definition.
import { DICT, KIND_META } from './dictionary.js';

const byId = Object.fromEntries(DICT.map((t) => [t.slug, t]));
const plain = (s) => s.replace(/<[^>]+>/g, '').replace(/&rsquo;|&lsquo;/g, "'").replace(/&ldquo;|&rdquo;/g, '"')
  .replace(/&amp;/g, '&').replace(/&[a-z]+;/g, ' ').replace(/\s+/g, ' ').trim();
const card = (slug) => { const t = byId[slug]; return t ? { q: t.term, a: plain(t.answer), tag: KIND_META[t.kind].label, slug } : null; };

const SPECS = [
  { id: 'ai-fundamentals', label: 'AI fundamentals', blurb: 'The core words behind every AI tool, from tokens to RAG.',
    terms: ['llm', 'token', 'context-window', 'prompt', 'hallucination', 'model', 'temperature', 'inference', 'embedding', 'vector-database', 'rag', 'fine-tuning'] },
  { id: 'agents-and-mcp', label: 'AI agents & MCP', blurb: 'How AI goes from talking to doing: tools, agents, and the protocol that connects them.',
    terms: ['agent', 'tool-calling', 'mcp', 'coding-agent', 'structured-outputs', 'multimodal', 'context-rot', 'conversational-ai'] },
  { id: 'coding-with-ai', label: 'Coding with AI', blurb: 'The vocabulary of building software with AI, the words the tools assume you know.',
    terms: ['vibe-coding', 'training-cutoff', 'system-prompt', 'sandbox', 'api-key', 'dev-server', 'localhost', 'scaffolding', 'refactor', 'rollback'] },
  { id: 'web-and-coding-basics', label: 'Web & coding basics', blurb: 'The everyday terms that trip up beginners, defined in one plain sentence.',
    terms: ['api', 'git', 'commit', 'deploy', 'json', 'http', 'dns', 'domain', 'environment-variable', 'repository', 'build', 'terminal'] },
  { id: 'startup-and-saas', label: 'Startup & SaaS', blurb: 'The business shorthand every builder hears, from ARR to product-market fit.',
    terms: ['mvp', 'saas', 'arr', 'churn', 'ltv', 'cac', 'freemium', 'conversion-rate', 'product-market-fit'] },
];

export const DECKS = SPECS.map((s) => ({ id: s.id, label: s.label, blurb: s.blurb, cards: s.terms.map(card).filter(Boolean) }));
