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
    rel: { related: ["/what-is-tool-calling"], next: ["/what-is-tool-calling"] } },
  { nm: "What is tool calling (function calling)?", href: "/what-is-tool-calling", type: "explainer", tag: "Concept",
    ds: "How a model decides to call a function, returns structured arguments, and your code runs it, the basis of agents.",
    rel: { prereq: ["/what-are-structured-outputs"], related: ["/what-is-mcp"], next: ["/ai-patterns"] } },
  { nm: "What are structured outputs?", href: "/what-are-structured-outputs", type: "explainer", tag: "Concept",
    ds: "Making a model return JSON that matches a schema every time, vs JSON mode, and why it powers extraction and tool calls.",
    rel: { related: ["/structured-output-builder", "/what-is-tool-calling"], next: ["/what-is-tool-calling"] } },

  // ── Tools ──
  { nm: "Context Window Visualizer", href: "/context-window-visualizer", type: "tool", tag: "Tool",
    ds: "See how your system prompt, history, retrieved docs, and output fill a model's context budget.",
    rel: { related: ["/what-is-a-context-window"] } },
  { nm: "Structured Output Builder", href: "/structured-output-builder", type: "tool", tag: "Tool",
    ds: "Define fields once; generate the schema for OpenAI, Anthropic, Gemini, and plain JSON Schema.",
    rel: { related: ["/what-are-structured-outputs", "/what-is-tool-calling"] } },

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
];

// Titles for graph targets that aren't AI[] entries (hubs).
export const EXTRA_TITLES = {
  "/ai": "AI Explained",
  "/ai-patterns": "AI Patterns Library",
};

const TITLES = Object.fromEntries(AI.map(a => [a.href, a.nm]));
export const titleFor = (href) => TITLES[href] || EXTRA_TITLES[href] || href;
