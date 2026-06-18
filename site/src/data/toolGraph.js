// Knowledge-graph edges for tools: each tool links to the concepts it teaches (learn),
// adjacent tools (related), and a sensible next step (next). Rendered at the bottom of
// every ToolPage so the tools form a graph, not a graveyard. Hrefs resolve against
// tools.js (tools), ai.js (explainers), and reference.js (references).
export const TOOL_GRAPH = {
  '/token-counter': {
    learn: ['/what-is-a-context-window'],
    related: ['/context-window-visualizer', '/context-budget-analyzer', '/llm-cost-calculator'],
    next: '/context-budget-analyzer',
  },
  '/context-window-visualizer': {
    learn: ['/what-is-a-context-window'],
    related: ['/token-counter', '/context-budget-analyzer', '/agent-memory-simulator'],
    next: '/context-budget-analyzer',
  },
  '/context-budget-analyzer': {
    learn: ['/what-is-a-context-window', '/what-is-rag'],
    related: ['/token-counter', '/context-window-visualizer', '/rag-chunking-visualizer'],
    next: '/rag-chunking-visualizer',
  },
  '/structured-output-builder': {
    learn: ['/what-are-structured-outputs', '/what-is-tool-calling'],
    related: ['/tool-call-visualizer', '/prompt-linter', '/mcp-config-generator'],
    next: '/tool-call-visualizer',
  },
  '/ai-pattern-explorer': {
    learn: ['/what-is-tool-calling', '/what-is-agent-memory'],
    related: ['/ai-pattern-builder', '/tool-call-visualizer'],
    next: '/ai-pattern-builder',
  },
  '/rag-chunking-visualizer': {
    learn: ['/what-is-rag', '/what-are-embeddings', '/what-is-a-vector-database'],
    related: ['/embedding-explorer', '/context-budget-analyzer'],
    next: '/embedding-explorer',
  },
  '/mcp-config-generator': {
    learn: ['/what-is-mcp', '/what-is-tool-calling'],
    related: ['/tool-call-visualizer', '/ai-pattern-builder'],
    next: '/tool-call-visualizer',
  },
  '/prompt-linter': {
    learn: ['/what-are-structured-outputs'],
    related: ['/prompt-x-ray', '/prompt-diff'],
    next: '/prompt-diff',
  },
  '/prompt-diff': {
    learn: ['/what-are-structured-outputs'],
    related: ['/prompt-linter', '/prompt-x-ray', '/token-counter'],
    next: '/prompt-x-ray',
  },
  '/prompt-x-ray': {
    learn: ['/what-are-structured-outputs'],
    related: ['/prompt-linter', '/prompt-diff'],
    next: '/prompt-linter',
  },
  '/llm-vram-calculator': {
    learn: ['/what-is-a-context-window'],
    related: ['/llm-cost-calculator', '/token-counter'],
    next: '/llm-cost-calculator',
  },
  '/llm-cost-calculator': {
    learn: ['/what-is-a-context-window'],
    related: ['/token-counter', '/context-budget-analyzer', '/llm-vram-calculator'],
    next: '/token-counter',
  },
  '/agent-memory-simulator': {
    learn: ['/what-is-agent-memory', '/what-is-rag', '/what-are-embeddings'],
    related: ['/context-window-visualizer', '/embedding-explorer', '/ai-pattern-builder'],
    next: '/embedding-explorer',
  },
  '/ai-pattern-builder': {
    learn: ['/what-is-tool-calling', '/what-is-agent-memory'],
    related: ['/ai-pattern-explorer', '/tool-call-visualizer', '/ai-architecture-generator'],
    next: '/ai-architecture-generator',
  },
  '/ai-stack-explainer': {
    learn: ['/what-is-rag', '/what-is-mcp', '/what-is-tool-calling'],
    related: ['/ai-architecture-generator', '/ai-pattern-builder'],
    next: '/ai-architecture-generator',
  },
  '/tool-call-visualizer': {
    learn: ['/what-is-tool-calling', '/what-is-mcp'],
    related: ['/structured-output-builder', '/mcp-config-generator', '/ai-pattern-builder'],
    next: '/structured-output-builder',
  },
  '/embedding-explorer': {
    learn: ['/what-are-embeddings', '/what-is-a-vector-database', '/what-is-rag'],
    related: ['/rag-chunking-visualizer', '/agent-memory-simulator'],
    next: '/rag-chunking-visualizer',
  },
  '/claim-checker': {
    learn: ['/what-are-structured-outputs', '/what-is-a-context-window'],
    related: ['/prompt-linter'],
    next: '/prompt-linter',
  },
  '/scope-sorter': {
    learn: [],
    related: ['/launch-rubric', '/ai-architecture-generator'],
    next: '/launch-rubric',
  },
  '/launch-rubric': {
    learn: [],
    related: ['/scope-sorter', '/ai-architecture-generator'],
    next: '/scope-sorter',
  },
  '/ai-architecture-generator': {
    learn: ['/what-is-rag', '/what-is-tool-calling'],
    related: ['/ai-stack-explainer', '/ai-pattern-builder', '/llm-cost-calculator'],
    next: '/ai-pattern-builder',
  },
};
