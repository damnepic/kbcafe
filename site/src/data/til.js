// "Today I Learned": short, practical text + code snippets. Bite-sized, link-baity, SEO micro-content.
// body is HTML (prose + <pre class="code">). Keep each one genuinely useful and accurate. Newest first.
export const TILS = [
  {
    slug: 'estimate-tokens-without-an-api',
    title: 'Estimate tokens without calling an API',
    date: '2026-06-26', tag: 'AI',
    lede: 'Token counts drive cost, context limits, and truncation. You can ballpark them with arithmetic.',
    body: `<p>For English text, one <a class="kb-term" href="/dictionary/token">token</a> is roughly four characters, or about three quarters of a word. That is close enough to answer the only question that usually matters before you send a request: will this fit?</p>
<pre class="code">const estTokens = (s) => Math.ceil(s.length / 4);</pre>
<p>Use it to guard a request, trim context, or warn a user before they paste a novel. When you need the exact number, run the model's real tokenizer, which our <a href="/token-counter">Token Counter</a> does in your browser.</p>`,
  },
  {
    slug: 'make-a-model-return-json-you-can-trust',
    title: 'Make a model return JSON you can actually trust',
    date: '2026-06-26', tag: 'AI',
    lede: 'Asking for JSON in the prompt works until one stray sentence breaks your parser. There is a better way.',
    body: `<p>Telling a model to "reply in JSON" is a hope, not a guarantee. The reliable approach is <a href="/what-are-structured-outputs">structured outputs</a>: you hand the API a JSON Schema and the model is constrained to match it, field for field.</p>
<pre class="code">response_format: {
  type: "json_schema",
  json_schema: { name: "extract", schema: { /* your schema */ } }
}</pre>
<p>That is the difference between parsing whatever came back and getting exactly the shape you asked for. Build a schema for OpenAI, Anthropic, or Gemini with the <a href="/structured-output-builder">Structured Output Builder</a>.</p>`,
  },
  {
    slug: 'stream-a-model-response-in-the-browser',
    title: 'Stream a model response in the browser',
    date: '2026-06-26', tag: 'Coding',
    lede: 'Streaming feels instant because you render tokens as they arrive instead of waiting for the whole reply.',
    body: `<p>The pattern is a <code>fetch</code> whose body you read in a loop, decoding chunks as they land:</p>
<pre class="code">const res = await fetch(url, { method: "POST", body });
const reader = res.body.getReader();
const dec = new TextDecoder();
while (true) {
  const { value, done } = await reader.read();
  if (done) break;
  render(dec.decode(value));
}</pre>
<p>Most LLM APIs stream as Server-Sent Events, so each chunk is one or more <code>data:</code> lines you split on newlines and parse. The user sees the first words in well under a second, which is most of why streaming feels fast.</p>`,
  },
  {
    slug: 'stop-leaking-your-api-key',
    title: 'Stop leaking your API key',
    date: '2026-06-26', tag: 'Coding',
    lede: 'The two fastest ways to leak a key: put it in front-end code, or commit it. Both are avoidable.',
    body: `<p>An <a class="kb-term" href="/dictionary/api-key">API key</a> in client-side JavaScript is visible to anyone who opens dev tools, so calls that need a secret key belong on a server. For everything else, two habits keep keys out of git:</p>
<pre class="code"># .gitignore
.env
.env.local</pre>
<p>Keep keys in a <code>.env</code> file your code reads at runtime, and make sure <code>.env</code> is ignored <em>before</em> the first commit. If a key ever reaches a public repo, rotate it right away. Already committed? <code>.gitignore</code> will not untrack it; run <code>git rm --cached .env</code> first.</p>`,
  },
];
