// Context-window reference for the Context Window Visualizer + the explainers.
//
// IMPORTANT (house rule: no fabricated/undated facts): these are ORDER-OF-MAGNITUDE
// size TIERS, not a live model spec sheet. Providers change real limits often, the
// example model names are illustrative only. Always verify a specific model's context
// limit against its provider's current docs. Update AS_OF when you revise this file.
export const AS_OF = 'June 2026';

// Size tiers don't go stale the way specific model numbers do. A "Custom" option
// lets anyone enter the exact number for whatever model they're using.
export const CONTEXT_TIERS = [
  { id: '8k',   tokens: 8192,    label: '8K  · small / older / many local models' },
  { id: '32k',  tokens: 32768,   label: '32K · mid-size models' },
  { id: '128k', tokens: 128000,  label: '128K · common large-model tier (GPT-4o-class)' },
  { id: '200k', tokens: 200000,  label: '200K · Claude-class' },
  { id: '1m',   tokens: 1000000, label: '1M · long-context tier (Gemini / Opus 1M / GPT-4.1-class)' },
  { id: '2m',   tokens: 2000000, label: '2M · very-long-context tier' },
];

// ~chars per token for rough English estimates. Real tokenization varies by model and
// content (code, non-English, and whitespace tokenize differently), so we always label
// the result an ESTIMATE.
export const CHARS_PER_TOKEN = 4;
export const estimateTokens = (text) => (text ? Math.ceil([...text].length / CHARS_PER_TOKEN) : 0);

// ILLUSTRATIVE price BANDS for the cost calculator — USD per 1,000,000 tokens.
// House rule: these are round-number TIERS reflecting common pricing as of AS_OF, NOT a
// live price sheet for any specific model. Providers change prices often; the calculator's
// fields are always editable. Always confirm the real price with your provider before relying
// on a number. Update AS_OF when revised.
export const PRICE_TIERS = [
  { id: 'nano',     label: 'Nano / cheapest tier',        in: 0.10, out: 0.40 },
  { id: 'mini',     label: 'Small / mini tier',           in: 0.50, out: 1.50 },
  { id: 'mid',      label: 'Mid / workhorse tier',        in: 3.00, out: 15.00 },
  { id: 'frontier', label: 'Frontier / large tier',       in: 15.00, out: 75.00 },
];
