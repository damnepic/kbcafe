// Guided curricula, shared by /learn, the explainer "appears in" edges, and /map.
// Each step is an href to an explainer, a tool, or a hub. Order matters.
export const LEARNING_PATHS = [
  {
    id: 'infra', title: 'AI Infrastructure', tag: 'Foundations',
    blurb: 'The plumbing behind every AI feature: how text becomes tokens and vectors, and how models are grounded in real data.',
    steps: ['/what-is-a-context-window', '/token-counter', '/what-are-embeddings', '/embedding-explorer', '/what-is-a-vector-database', '/what-is-rag', '/rag-chunking-visualizer'],
  },
  {
    id: 'agents', title: 'Build AI Agents', tag: 'Applied',
    blurb: 'From a model that can only talk to a system that can act: tools, structured calls, patterns, memory, and how to architect it.',
    steps: ['/what-is-tool-calling', '/tool-call-visualizer', '/what-are-structured-outputs', '/structured-output-builder', '/ai-patterns', '/ai-pattern-builder', '/what-is-agent-memory', '/agent-memory-simulator', '/what-is-mcp', '/mcp-config-generator', '/ai-architecture-generator'],
  },
  {
    id: 'prompting', title: 'Master Prompting', tag: 'Craft',
    blurb: 'Write prompts that behave: understand their anatomy, catch the smells, compare versions, and respect the context budget.',
    steps: ['/what-are-structured-outputs', '/prompt-x-ray', '/prompt-linter', '/prompt-diff', '/what-is-a-context-window', '/context-budget-analyzer'],
  },
];

// reverse helper: which paths include a given href
export const pathsWith = (href) => LEARNING_PATHS.filter(p => p.steps.includes(href));
