// AI Patterns Library — design patterns for AI systems, the "Refactoring Guru of AI."
// One data file drives the pattern pages, the hub, and the interactive Pattern Explorer.
export const PATTERNS = [
  {
    slug: 'reflection', name: 'Reflection', tag: 'Quality',
    tagline: 'The model critiques its own output, then improves it.',
    whatItIs: "Reflection runs the model over its own work. It generates a first answer, is then prompted to critique that answer against explicit criteria, and finally revises based on the critique — optionally looping until the result is good enough. The same model plays author and editor.",
    flow: [
      'Generate an initial answer',
      'Critique it — what is wrong, missing, or weak?',
      'Revise the answer to fix the critique',
      'Optionally repeat until it passes',
    ],
    strengths: [
      'Catches mistakes the first pass misses',
      'Noticeably better code, writing, and reasoning',
      'Simple to add — no extra tools required',
    ],
    weaknesses: [
      'Two to three times the tokens, latency, and cost',
      'Can over-edit and second-guess a good answer',
      'The critic shares the author’s blind spots',
    ],
    whenToUse: "Complex outputs where a second pass clearly helps — drafting code, long-form writing, multi-step reasoning. Skip it for simple lookups where the first answer is already reliable.",
    examplePrompt: "Here is your draft answer:\n<draft>\n\nCritique it: list specific errors, gaps, and weaknesses.\nThen write an improved version that fixes each one.",
    related: ['verification', 'judge'],
  },
  {
    slug: 'router', name: 'Router', tag: 'Control flow',
    tagline: 'The model classifies the request and routes it to the right path.',
    whatItIs: "A router inspects the incoming request and decides which tool, model, or sub-chain should handle it, then dispatches to that path. A cheap model can handle easy work while a strong model is reserved for hard cases, and each category gets a focused, specialized chain.",
    flow: [
      'Receive the request',
      'Classify it — intent, difficulty, or domain',
      'Route to the matching tool, model, or sub-chain',
      'Run that path and return the result',
    ],
    strengths: [
      'Cost control — small model for easy, big only when needed',
      'Specialization — a tuned path per category',
      'Keeps each downstream prompt focused',
    ],
    weaknesses: [
      'A wrong route cascades into a wrong answer',
      'More moving parts and an added failure point',
      'Routing logic needs its own maintenance',
    ],
    whenToUse: "Heterogeneous workloads — support that is part FAQ, part billing, part bug report — or cost optimization across a mix of easy and hard queries.",
    examplePrompt: "Classify this request into exactly one label: [billing, technical, account, other].\nReply with only the label.\n\nRequest: <text>",
    related: ['judge', 'reflection'],
  },
  {
    slug: 'judge', name: 'Judge', tag: 'Evaluation',
    tagline: 'One model evaluates another’s output against a rubric (LLM-as-judge).',
    whatItIs: "A judge model scores or compares outputs against defined criteria — a pass/fail, a numeric score, or a pick-the-better-of-two. It is the backbone of automated evaluation and of best-of-N selection, where you generate several candidates and keep the one the judge rates highest.",
    flow: [
      'Define the criteria or rubric',
      'Generate one or more candidate outputs',
      'Ask the judge model to score or compare them',
      'Use the verdict — gate, rank, or pick best-of-N',
    ],
    strengths: [
      'Scales evaluation without human raters',
      'Best-of-N: generate several, keep the judged best',
      'Applies a consistent rubric every time',
    ],
    weaknesses: [
      'The judge is not ground truth — it has biases',
      'A vague rubric produces noisy verdicts',
      'Judging is itself a model call to validate',
    ],
    whenToUse: "Eval pipelines, quality gates before an answer ships, and ranking multiple candidates. Pair it with a clear rubric and spot-check the judge against human ratings.",
    examplePrompt: "Score the answer below from 1–5 for factual accuracy and relevance, using this rubric:\n<rubric>\n\nReturn the score and a one-line reason.\n\nAnswer: <text>",
    related: ['verification', 'reflection'],
  },
  {
    slug: 'verification', name: 'Verification', tag: 'Reliability',
    tagline: 'Check the claims before responding.',
    whatItIs: "Verification adds a fact-checking step before the answer is final. The system extracts the claims an answer makes and verifies each one — against retrieved sources, a recalculation, or an explicit check — then corrects or flags anything it cannot support before responding.",
    flow: [
      'Draft an answer',
      'Extract its factual claims',
      'Verify each against sources, a calculation, or a check',
      'Correct or drop unsupported claims, then respond',
    ],
    strengths: [
      'Cuts hallucinations on factual answers',
      'Produces citations and grounded confidence',
      'Catches arithmetic and logic slips',
    ],
    weaknesses: [
      'Extra cost and latency per claim',
      'Only as good as the sources it checks against',
      'Can still pass a subtly wrong claim',
    ],
    whenToUse: "High-stakes or factual answers — research, anything cited, numbers that matter. Overkill for casual conversation where being wrong is cheap.",
    examplePrompt: "For each factual claim in the draft, mark it Supported or Unsupported using only the provided sources.\nThen rewrite the answer to drop or correct every unsupported claim.\n\nSources: <docs>\nDraft: <text>",
    related: ['judge', 'reflection'],
  },
  {
    slug: 'human-in-the-loop', name: 'Human-in-the-Loop', tag: 'Safety',
    tagline: 'The agent requests human approval before it acts.',
    whatItIs: "For consequential actions, the agent pauses and surfaces what it intends to do, waiting for a human to approve, edit, or reject before executing. It keeps a person accountable for irreversible steps while still letting the agent do the planning and the safe work autonomously.",
    flow: [
      'Agent plans an action (send, delete, charge, deploy)',
      'Pause and surface the proposed action to a human',
      'Human approves, edits, or rejects it',
      'Execute only on approval — and log the decision',
    ],
    strengths: [
      'Safety on irreversible, high-impact actions',
      'Accountability and a clear audit trail',
      'Builds trust in autonomous systems',
    ],
    weaknesses: [
      'Slower — gated on human availability',
      'Approval fatigue if overused',
      'Needs a flow to surface decisions clearly',
    ],
    whenToUse: "Destructive or irreversible actions, and anything touching money, production, or external parties. Reserve auto-execution for safe, reversible steps.",
    examplePrompt: "Before any action that sends a message, spends money, or deletes data, output a PROPOSED ACTION block describing it and stop.\nProceed only after an explicit “approve”.",
    related: ['router', 'verification'],
  },
];

export const patternBySlug = (slug) => PATTERNS.find(p => p.slug === slug);
