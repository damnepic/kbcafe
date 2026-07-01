// The AI Explained pillar, canonical infrastructure explainers + AI dev tools.
// The heir to KB Cafe's old SMTP/POP3/Base64 references: foundational concepts people
// need to *explain*, not trend content. type: 'explainer' | 'tool' | 'pattern'.
//
// `rel` builds the knowledge graph (Wikipedia-style): prereq → this → next, plus related.
// Targets are hrefs (AI entries, or the hubs in EXTRA_TITLES below).
export const AI = [
  // ── Infrastructure explainers ──
  { nm: "What is a context window?", href: "/what-is-a-context-window", type: "explainer", tag: "Concept",
    ds: "The model's working memory, tokens, what fills it, why it runs out, and how to manage it.",
    rel: { related: ["/context-window-visualizer"], next: ["/what-are-embeddings"] } },
  { nm: "What are embeddings?", href: "/what-are-embeddings", type: "explainer", tag: "Concept",
    ds: "How content becomes a vector that captures meaning, the engine behind semantic search, RAG, and recommendations.",
    rel: { prereq: ["/what-is-a-context-window"], related: ["/what-is-rag"], next: ["/what-is-a-vector-database"] } },
  { nm: "What is a vector database?", href: "/what-is-a-vector-database", type: "explainer", tag: "Infra",
    ds: "Where embeddings live, fast nearest-neighbour search over millions of vectors, and the backbone of RAG.",
    rel: { prereq: ["/what-are-embeddings"], related: ["/what-is-rag"], next: ["/what-is-rag"] } },
  { nm: "What is RAG (Retrieval-Augmented Generation)?", href: "/what-is-rag", type: "explainer", tag: "Pattern",
    ds: "Grounding a model in your own documents at query time, embeddings, retrieval, and why it beats fine-tuning for facts.",
    rel: { prereq: ["/what-are-embeddings", "/what-is-a-vector-database"], related: ["/what-is-a-context-window"], next: ["/what-is-agent-memory"] } },
  { nm: "What is agent memory?", href: "/what-is-agent-memory", type: "explainer", tag: "Concept",
    ds: "Why an assistant 'remembers' or 'forgets', context vs short-term vs long-term memory, and how persistence is faked.",
    rel: { prereq: ["/what-is-a-context-window"], related: ["/what-is-rag"], next: ["/what-is-tool-calling"] } },
  { nm: "What is MCP (Model Context Protocol)?", href: "/what-is-mcp", type: "explainer", tag: "Protocol",
    ds: "The open standard for connecting AI apps to tools and data, the 'USB-C for AI tools.'",
    rel: { related: ["/what-is-tool-calling", "/what-are-mcp-servers"], next: ["/what-are-mcp-servers"] } },
  { nm: "What are MCP servers?", href: "/what-are-mcp-servers", type: "explainer", tag: "Protocol",
    ds: "The servers you actually plug in: files, databases, GitHub, the web, browsers. The categories that matter, real examples, and how to connect one.",
    rel: { prereq: ["/what-is-mcp"], related: ["/what-is-tool-calling", "/mcp-config-generator"], next: ["/mcp-config-generator"] } },
  { nm: "What is tool calling (function calling)?", href: "/what-is-tool-calling", type: "explainer", tag: "Concept",
    ds: "How a model decides to call a function, returns structured arguments, and your code runs it, the basis of agents.",
    rel: { prereq: ["/what-are-structured-outputs"], related: ["/what-is-mcp"], next: ["/ai-patterns"] } },
  { nm: "How to build an AI agent", href: "/how-to-build-an-ai-agent", type: "explainer", tag: "Agents",
    ds: "What actually turns a chatbot into an agent: a model plus tools plus a loop plus memory plus a stop. The five parts, the agent loop, the security you cannot skip, and a builder that writes your agent's spec.",
    rel: { prereq: ["/what-is-tool-calling"], related: ["/what-are-ai-loops", "/what-is-agent-memory", "/what-is-mcp"], next: ["/build-an-agentic-os"] } },
  { nm: "What are structured outputs?", href: "/what-are-structured-outputs", type: "explainer", tag: "Concept",
    ds: "Making a model return JSON that matches a schema every time, vs JSON mode, and why it powers extraction and tool calls.",
    rel: { related: ["/structured-output-builder", "/what-is-tool-calling"], next: ["/what-is-tool-calling"] } },
  { nm: "What is an AI hallucination?", href: "/what-is-an-ai-hallucination", type: "explainer", tag: "Concept",
    ds: "Why models state false things with total confidence, where the risk is highest, why you cannot trust the tone, and the concrete ways to reduce it.",
    rel: { related: ["/what-is-rag", "/what-are-ai-evals"], next: ["/what-are-ai-evals"] } },
  { nm: "What are reasoning models?", href: "/what-are-reasoning-models", type: "explainer", tag: "Concept",
    ds: "Models that think step by step before answering, trading speed and cost for accuracy on hard problems. Chain of thought, what it is great at, where it is wasted, and the tradeoffs.",
    rel: { prereq: ["/what-is-a-context-window"], related: ["/what-are-ai-loops"], next: ["/how-to-write-code-with-ai"] } },
  { nm: "What are AI evals?", href: "/what-are-ai-evals", type: "explainer", tag: "Practice",
    ds: "How to measure whether AI output is good enough: the dataset, the scorer, the metric, and the four ways to score (exact match, rubric, LLM-as-judge, human). The verify gate at scale.",
    rel: { prereq: ["/what-are-ai-loops"], related: ["/what-is-an-ai-hallucination", "/what-are-structured-outputs"] } },
  { nm: "Prompt injection and AI security", href: "/prompt-injection", type: "explainer", tag: "Security",
    ds: "Why a model cannot tell your instructions from text it just read, the lethal trifecta that makes agents dangerous, and the architecture-level defenses that actually contain it.",
    rel: { prereq: ["/what-is-tool-calling"], related: ["/what-are-mcp-servers", "/build-an-agentic-os"] } },

  // ── Tools ──
  { nm: "Context Window Visualizer", href: "/context-window-visualizer", type: "tool", tag: "Tool",
    ds: "See how your system prompt, history, retrieved docs, and output fill a model's context budget.",
    rel: { related: ["/what-is-a-context-window"] } },
  { nm: "Structured Output Builder", href: "/structured-output-builder", type: "tool", tag: "Tool",
    ds: "Define fields once; generate the schema for OpenAI, Anthropic, Gemini, and plain JSON Schema.",
    rel: { related: ["/what-are-structured-outputs", "/what-is-tool-calling"] } },

  // ── Coding with AI ──
  { nm: "How to write code with AI", href: "/how-to-write-code-with-ai", type: "explainer", tag: "Guide",
    ds: "A practical, no-hype method: set expectations, work around the training cutoff, manage context, plan then dictate, test everything, and know when to take over.",
    rel: { related: ["/what-is-a-context-window", "/what-is-tool-calling"], next: ["/ai-coding-prompt-builder"] } },
  { nm: "AI Coding Prompt Builder", href: "/ai-coding-prompt-builder", type: "tool", tag: "Tool",
    ds: "Assemble a precise coding prompt: pick plan-or-build mode, then toggle signature, types, tests, stable libraries, and fresh docs. Copy-paste ready.",
    rel: { related: ["/how-to-write-code-with-ai", "/context-window-visualizer"] } },

  // ── Automation explainers (fundamentals, AI-connected) ──
  { nm: "What is workflow automation?", href: "/what-is-workflow-automation", type: "explainer", tag: "Automation",
    ds: "The trigger-to-action model behind every automation, no-code tools like Zapier and n8n, and where AI fits.",
    rel: { related: ["/cron-generator", "/webhooks-vs-polling"], next: ["/ai-agents-vs-workflows-vs-rpa"] } },
  { nm: "AI agents vs workflows vs RPA", href: "/ai-agents-vs-workflows-vs-rpa", type: "explainer", tag: "Automation",
    ds: "Three ways to automate work and how they differ, who decides the steps: you, a UI script, or the model.",
    rel: { prereq: ["/what-is-workflow-automation"], related: ["/what-is-tool-calling"], next: ["/what-is-ai-orchestration"] } },
  { nm: "Webhooks vs polling", href: "/webhooks-vs-polling", type: "explainer", tag: "Automation",
    ds: "The two ways software learns that something happened, push vs ask, and the latency, cost, and reliability tradeoffs.",
    rel: { related: ["/what-is-workflow-automation", "/cron-generator"] } },
  { nm: "What is AI orchestration?", href: "/what-is-ai-orchestration", type: "explainer", tag: "Automation",
    ds: "The layer that coordinates models, tools, and data steps into one reliable pipeline, vs a single prompt, workflow, or agent.",
    rel: { prereq: ["/ai-agents-vs-workflows-vs-rpa"], related: ["/what-is-rag", "/what-is-tool-calling"], next: ["/ai-architecture-generator"] } },
  { nm: "What are AI loops?", href: "/what-are-ai-loops", type: "explainer", tag: "Automation",
    ds: "Giving a model a goal, a way to verify its own work, and a rule for when to stop, so it plans, does, checks, and iterates instead of answering one prompt at a time. The verify gate, when a loop is over-engineering, and a builder for your own.",
    rel: { prereq: ["/what-is-ai-orchestration"], related: ["/ai-patterns", "/what-is-agent-memory", "/what-is-tool-calling"], next: ["/how-to-write-code-with-ai"] } },
  { nm: "Automation Blueprint Explorer", href: "/automation-blueprints", type: "tool", tag: "Automation",
    ds: "Five real automation blueprints broken into clickable steps, trigger, action, AI, human, and integration.",
    rel: { prereq: ["/what-is-workflow-automation"], related: ["/cron-generator", "/ai-pattern-explorer"], next: ["/what-is-ai-orchestration"] } },
];

// Titles for graph targets that aren't AI[] entries (hubs).
export const EXTRA_TITLES = {
  "/ai": "AI Explained",
  "/ai-patterns": "AI Patterns Library",
};

const TITLES = Object.fromEntries(AI.map(a => [a.href, a.nm]));
export const titleFor = (href) => TITLES[href] || EXTRA_TITLES[href] || href;
