// Guided curricula, shared by /learn, the explainer "appears in" edges, and /map.
// Each step is an href to an explainer, a tool, or a hub. Order matters.
export const LEARNING_PATHS = [
  {
    id: 'infra', title: 'AI Infrastructure', shortTitle: 'AI Infrastructure', tag: 'Foundations',
    route: '/learn-ai-infrastructure', minutes: 35, outcome: 'I want to understand how AI systems work under the hood',
    blurb: 'The plumbing behind every AI feature: how text becomes tokens and vectors, and how models are grounded in real data.',
    steps: ['/what-is-a-context-window', '/token-counter', '/what-are-embeddings', '/embedding-explorer', '/what-is-a-vector-database', '/what-is-rag', '/rag-chunking-visualizer'],
  },
  {
    id: 'agents', title: 'Build AI Agents', shortTitle: 'AI Agents', tag: 'Applied',
    route: '/learn-ai-agents', minutes: 55, outcome: 'I want to build an AI agent that takes actions',
    blurb: 'From a model that can only talk to a system that can act: tools, structured calls, patterns, memory, and how to architect it.',
    steps: ['/what-is-tool-calling', '/tool-call-visualizer', '/what-are-structured-outputs', '/structured-output-builder', '/ai-patterns', '/ai-pattern-builder', '/what-is-agent-memory', '/agent-memory-simulator', '/what-is-mcp', '/mcp-config-generator', '/ai-architecture-generator'],
  },
  {
    id: 'prompting', title: 'Master Prompting', shortTitle: 'Prompting', tag: 'Craft',
    route: '/learn-prompting', minutes: 30, outcome: 'I want to get great answers out of AI',
    blurb: 'Write prompts that behave: see what they leave to chance, build them up, x-ray the anatomy, catch the smells, compare versions, and study good vs bad.',
    steps: ['/prompt-simulator', '/prompt-builder', '/prompt-x-ray', '/prompt-linter', '/prompt-diff', '/good-vs-bad-prompts'],
  },
  {
    id: 'automate', title: 'Automate Work', shortTitle: 'Automation', tag: 'Applied',
    route: '/learn-ai-automation', minutes: 40, outcome: 'I want to automate work with AI',
    blurb: 'From manual busywork to systems that run themselves: the trigger-to-action model, the agents-vs-workflows-vs-RPA map, how automations fire, and how AI orchestrates the steps.',
    steps: ['/what-is-workflow-automation', '/automation-blueprints', '/cron-generator', '/webhooks-vs-polling', '/ai-agents-vs-workflows-vs-rpa', '/what-is-tool-calling', '/tool-call-visualizer', '/what-is-ai-orchestration', '/ai-architecture-generator'],
  },
];

// reverse helper: which paths include a given href
export const pathsWith = (href) => LEARNING_PATHS.filter(p => p.steps.includes(href));
