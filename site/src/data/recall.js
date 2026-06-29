// One quick recall question per concept lesson, for the end-of-page "test yourself" CTA (#4).
// Shown only on pages listed here; funnels into the matching flashcard deck. Add more over time.
// Shape: '/href': { q, ok, distractors: [a, b], deck } where deck is a /flashcards?deck= id.
export const RECALL = {
  '/what-is-a-context-window': { q: 'A context window is measured in what unit?', ok: 'Tokens', distractors: ['Megabytes', 'Words'], deck: 'ai-fundamentals' },
  '/what-are-embeddings': { q: 'An embedding turns a piece of content into a...', ok: 'Vector of numbers that captures meaning', distractors: ['Compressed copy of the text', 'Row in a database'], deck: 'ai-fundamentals' },
  '/what-is-rag': { q: 'RAG improves answers by grounding the model in...', ok: 'Your own documents, retrieved at query time', distractors: ['A larger training run', 'A longer system prompt'], deck: 'ai-fundamentals' },
  '/what-is-agent-memory': { q: 'Why does a model seem to "forget" between calls?', ok: 'It is stateless, nothing persists on its own', distractors: ['It deletes old messages to save space', 'It runs out of storage'], deck: 'agents-and-mcp' },
  '/what-is-tool-calling': { q: 'In tool calling, who actually runs the function?', ok: 'Your code, the model only requests it', distractors: ['The model runs it itself', 'The user runs it manually'], deck: 'agents-and-mcp' },
  '/what-is-mcp': { q: 'MCP is best described as...', ok: 'A standard protocol for connecting AI to tools and data', distractors: ['A specific AI model', 'A programming language'], deck: 'agents-and-mcp' },
  '/what-are-structured-outputs': { q: 'Structured outputs make a model return...', ok: 'JSON that matches a schema, every time', distractors: ['Shorter answers', 'Plain text only'], deck: 'ai-fundamentals' },
  '/what-is-ai-orchestration': { q: 'Orchestration is the layer that...', ok: 'Coordinates models, tools, and steps into one pipeline', distractors: ['Makes a single model call', 'Writes the prompt for you'], deck: 'agents-and-mcp' },
};
