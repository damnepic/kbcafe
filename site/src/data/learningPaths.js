// Guided curricula, shared by /learn, the explainer "appears in" edges, and /map.
// Each step is an href to an explainer, a tool, or a hub. Order matters.
export const LEARNING_PATHS = [
  {
    id: 'infra', title: 'AI Infrastructure', shortTitle: 'AI Infrastructure', tag: 'Foundations',
    route: '/learn-ai-infrastructure', minutes: 35, outcome: 'I want to understand how AI systems work under the hood',
    blurb: 'The plumbing behind every AI feature: how text becomes tokens and vectors, and how models are grounded in real data.',
    intro: '<span class="lpp-primer-h">New to the lingo?</span> Every AI reads text as <a class="kb-term" href="/dictionary/token">tokens</a>, and only so many fit in its <a class="kb-term" href="/dictionary/context-window">context window</a> at once. To work with more, text is turned into <a class="kb-term" href="/dictionary/embedding">embeddings</a> and stored in a <a class="kb-term" href="/dictionary/vector-database">vector database</a> the model can search. Hover any underlined word for a quick definition, or click to learn more.',
    steps: ['/what-is-a-context-window', '/token-counter', '/what-are-embeddings', '/embedding-explorer', '/what-is-a-vector-database', '/what-is-rag', '/rag-chunking-visualizer'],
  },
  {
    id: 'agents', title: 'Build AI Agents', shortTitle: 'AI Agents', tag: 'Applied',
    route: '/learn-ai-agents', minutes: 55, outcome: 'I want to build an AI agent that takes actions',
    blurb: 'From a model that can only talk to a system that can act: tools, structured calls, patterns, memory, and how to architect it.',
    intro: '<span class="lpp-primer-h">New to the lingo?</span> An <a class="kb-term" href="/dictionary/agent">agent</a> is an AI that does not just answer but takes actions: it uses <a class="kb-term" href="/dictionary/tool-calling">tool calling</a> to run steps, returns <a class="kb-term" href="/dictionary/structured-outputs">structured outputs</a> your code can trust, and plugs into tools over <a class="kb-term" href="/dictionary/mcp">MCP</a>. Hover any underlined word for a quick definition, or click to learn more.',
    steps: ['/how-to-build-an-ai-agent', '/what-is-tool-calling', '/tool-call-visualizer', '/what-are-structured-outputs', '/structured-output-builder', '/ai-patterns', '/ai-pattern-builder', '/what-is-agent-memory', '/agent-memory-simulator', '/what-is-mcp', '/what-are-mcp-servers', '/mcp-config-generator', '/ai-architecture-generator'],
  },
  {
    id: 'prompting', title: 'Master Prompting', shortTitle: 'Prompting', tag: 'Craft',
    route: '/learn-prompting', minutes: 30, outcome: 'I want to get great answers out of AI',
    blurb: 'Write prompts that behave: see what they leave to chance, build them up, x-ray the anatomy, catch the smells, compare versions, study good vs bad, then put it all together in the Prompt Optimizer.',
    steps: ['/prompt-simulator', '/prompt-builder', '/prompt-x-ray', '/prompt-linter', '/prompt-diff', '/good-vs-bad-prompts', '/prompt-optimizer'],
  },
  {
    id: 'automate', title: 'Automate Work', shortTitle: 'Automation', tag: 'Applied',
    route: '/learn-ai-automation', minutes: 40, outcome: 'I want to automate work with AI',
    blurb: 'From manual busywork to systems that run themselves: the trigger-to-action model, the agents-vs-workflows-vs-RPA map, how automations fire, and how AI orchestrates the steps.',
    intro: '<span class="lpp-primer-h">New to the lingo?</span> Automation wires apps together: a <a class="kb-term" href="/dictionary/webhook">webhook</a> fires the instant something happens, an <a class="kb-term" href="/dictionary/api">API</a> lets the steps talk to each other, and an <a class="kb-term" href="/dictionary/agent">agent</a> can decide what to do next. Hover any underlined word for a quick definition, or click to learn more.',
    steps: ['/what-is-workflow-automation', '/automation-blueprints', '/cron-generator', '/webhooks-vs-polling', '/ai-agents-vs-workflows-vs-rpa', '/what-is-tool-calling', '/tool-call-visualizer', '/what-is-ai-orchestration', '/what-are-ai-loops', '/ai-architecture-generator'],
  },
  {
    id: 'coding', title: 'Coding with AI', shortTitle: 'Coding with AI', tag: 'Craft',
    route: '/learn-ai-coding', minutes: 35, outcome: 'I want to write real code with AI instead of fighting it',
    blurb: 'The method behind getting great code out of AI: the right mental model, the training cutoff, managing context, planning then dictating, and the prompt that ties it together. Build a real coding prompt as you go.',
    intro: '<span class="lpp-primer-h">New to the lingo?</span> A model can <a class="kb-term" href="/dictionary/hallucination">hallucinate</a> code that does not exist, and it knows nothing past its <a class="kb-term" href="/dictionary/training-cutoff">training cutoff</a>. You steer it with a clear <a class="kb-term" href="/dictionary/system-prompt">system prompt</a> inside its <a class="kb-term" href="/dictionary/context-window">context window</a>, and a <a class="kb-term" href="/dictionary/coding-agent">coding agent</a> can run and fix its own code. Hover any underlined word for a quick definition, or click to learn more.',
    steps: ['/how-to-write-code-with-ai', '/ai-coding-prompt-builder', '/what-is-a-context-window', '/context-window-visualizer', '/what-is-tool-calling'],
  },
];

// reverse helper: which paths include a given href
export const pathsWith = (href) => LEARNING_PATHS.filter(p => p.steps.includes(href));
