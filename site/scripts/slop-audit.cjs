// Anti-AI-slop audit for KB Cafe reference pages.
// Ports AstrologyBay's lib/article-validator.ts logic (generic families) and runs it
// over the prose of our .astro pages. Astrology-specific families are dropped (won't match dev prose).
const fs = require("fs");
const path = require("path");

const BANNED_PHRASES = [
  // Family 1: audience-targeting openers
  "for readers seeking","for readers interested in","for readers looking to","for those interested in",
  "for those looking to","for those who","for anyone interested","for anyone seeking","whether you're a",
  "whether you're new to","whether you're an experienced","whether you're seeking","whether you're looking",
  "whether you're curious","regardless of your","no matter your",
  // Family 2: self-referential narration
  "this article explores","this article examines","this article delves into","this article will explore",
  "this article will examine","this article will discuss","this guide covers","this guide explores",
  "this guide will help","this comprehensive guide","in this article","in this guide","in this piece",
  "in this post","throughout this article","throughout this guide","below we will","below we'll",
  "below we explore","below we examine","below we break down","let's dive into","let's explore",
  "let's take a look","let's take a closer look","let's delve into","let's break down","read on to discover",
  "read on to learn","keep reading to discover","stay tuned",
  // Family 4: empty hype/value
  "discover the secret","discover the secrets","discover the hidden","discover the truth","unlock the secret",
  "unlock the power","unlock the mystery","unlock the hidden","unleash the power","harness the power",
  "tap into","essential reading","essential guide","must-read","comprehensive look","complete guide",
  "ultimate guide","fascinating world","fascinating insight","intriguing world","captivating insight",
  "powerful insight","profound insight","remarkable insight","one of the most fascinating",
  "one of the most interesting","one of the most powerful","one of the most important",
  // Family 5: hedge/bridge tells
  "it's important to note","it's worth noting","it's worth mentioning","it's important to remember",
  "it's worth remembering","it's also important","it's also worth","keep in mind that","bear in mind that",
  "it should be noted","it should be remembered","as mentioned earlier","as previously mentioned",
  "as we mentioned","in summary","in conclusion","to summarize","to sum up","at the end of the day",
  "all in all","with that said","that being said","having said that","in essence",
  // Family 6: vague time references
  "in today's world","as we move forward","as we continue","looking ahead","going forward",
  // generic overused descriptors
  "incredibly powerful","remarkably accurate","perfect balance","delicate balance","seamless","robust solution",
  "in the digital age","ever-evolving","fast-paced world","game-changer","game changer",
];
const BANNED_OPENERS = [
  /^this article\b/i,/^this guide\b/i,/^this post\b/i,/^this piece\b/i,/^in this\b/i,/^throughout this\b/i,
  /^below we\b/i,/^let's\b/i,/^let us\b/i,/^now,? let's\b/i,/^read on\b/i,/^keep reading\b/i,/^stay tuned\b/i,
  /^as we (move|continue|go|begin|start|delve)/i,/^when it comes to\b/i,/^one of the most\b/i,
  /^there is something\b/i,/^there's something\b/i,/^have you ever wondered\b/i,/^picture this\b/i,
  /^imagine\b/i,/^whether you/i,/^for those\b/i,/^for anyone\b/i,/^for readers\b/i,
];

// Extract reader-facing prose from an .astro file: drop frontmatter, <style>, <script>,
// then turn block tags into paragraph breaks and strip remaining tags.
function extractProse(src) {
  let s = src;
  s = s.replace(/^---[\s\S]*?---/, "");                 // frontmatter
  s = s.replace(/<style[\s\S]*?<\/style>/gi, "");
  s = s.replace(/<script[\s\S]*?<\/script>/gi, "");
  s = s.replace(/<\/(p|li|h1|h2|h3|summary|figcaption|div)>/gi, "\n\n");
  s = s.replace(/<[^>]+>/g, " ");                          // remaining tags
  s = s.replace(/&rsquo;|&lsquo;/g, "'").replace(/&ldquo;|&rdquo;/g, '"')
       .replace(/&amp;/g, "&").replace(/&mdash;/g, "—").replace(/&middot;/g, "·")
       .replace(/&[a-z]+;/g, " ");
  return s;
}
function audit(file, klass) {
  const src = fs.readFileSync(file, "utf8");
  const text = extractProse(src);
  const haystack = text.toLowerCase();
  const paras = text.split(/\n{2,}/).map(p => p.replace(/\s+/g, " ").trim()).filter(p => p.length > 25);
  const words = text.split(/\s+/).filter(Boolean).length;
  const hits = [];
  for (const b of BANNED_PHRASES) if (haystack.includes(b)) hits.push(`banned-phrase: "${b}"`);
  for (const p of paras) {
    const first = (p.split(/[.!?]/)[0] || p).trim();
    for (const re of BANNED_OPENERS) if (re.test(first)) { hits.push(`banned-opener ${re}: "${first.slice(0,55)}…"`); break; }
  }
  const min = klass === "article" ? 400 : 0;
  if (words < min) hits.push(`word count ${words} < ${min}`);
  return { file: path.basename(file), words, paras: paras.length, hits };
}

const base = "C:/KBCafe/site/src/pages/";
const targets = [
  ["object-oriented-programming-concepts.astro", "article"],
  ["multithreading-explained.astro", "article"],
  ["memory-leaks-explained.astro", "article"],
  ["software-design-patterns.astro", "article"],
  ["smart-pointers-explained.astro", "article"],
  ["cpp-type-casting.astro", "article"],
  ["http-explained.astro", "article"],
  ["how-smtp-works.astro", "article"],
  ["pop3-vs-imap.astro", "article"],
  ["how-ping-works.astro", "article"],
  ["port-scanning-explained.astro", "article"],
  ["what-is-rss.astro", "article"],
  ["what-is-json.astro", "article"],
  ["what-is-xml.astro", "article"],
  ["cron-explained.astro", "article"],
  ["csharp.astro", "article"],
  ["email-deliverability.astro", "article"],
  ["dmarc-explained.astro", "article"],
  ["spf-explained.astro", "article"],
  ["dkim-explained.astro", "article"],
  ["email-deliverability-checker.astro", "tool"],
  ["what-is-dns.astro", "article"],
  ["dns-lookup.astro", "tool"],
  ["what-is-whois.astro", "article"],
  ["whois-lookup.astro", "tool"],
  ["ai-business.astro", "article"],
  ["case-studies/kbcafe.astro", "article"],
  ["blog/building-the-prompt-optimizer.astro", "article"],
  ["blog/introducing-ai-business.astro", "article"],
  ["blog/the-return-of-kb-cafe.astro", "article"],
  ["blog/rss-and-the-open-web-in-2026.astro", "article"],
  ["blog/rss-and-ai.astro", "article"],
  ["what-is-a-context-window.astro", "article"],
  ["what-is-mcp.astro", "article"],
  ["what-is-rag.astro", "article"],
  ["what-are-embeddings.astro", "article"],
  ["what-is-tool-calling.astro", "article"],
  ["what-are-structured-outputs.astro", "article"],
  ["what-is-agent-memory.astro", "article"],
  ["what-is-a-vector-database.astro", "article"],
  ["what-is-workflow-automation.astro", "article"],
  ["ai-agents-vs-workflows-vs-rpa.astro", "article"],
  ["webhooks-vs-polling.astro", "article"],
  ["what-is-ai-orchestration.astro", "article"],
  ["automation-blueprints.astro", "tool"],
  ["json-to-typescript.astro", "tool"],
  ["shell-scripting-explained.astro", "article"],
  ["ai.astro", "tool"],
  ["ai-patterns.astro", "tool"],
  ["ai-pattern-explorer.astro", "tool"],
  ["prompt-optimizer.astro", "tool"],
  ["ai-profit-calculator.astro", "tool"],
  ["mcp-inspector.astro", "tool"],
  ["context-window-visualizer.astro", "tool"],
  ["structured-output-builder.astro", "tool"],
  ["base64.astro", "tool"],
  ["feeds.astro", "tool"],
  ["reference.astro", "tool"],
  ["blog.astro", "tool"],
  ["ai.astro", "tool"],
  ["context-window-visualizer.astro", "tool"],
  ["case-converter.astro", "tool"],
  ["csv-to-json.astro", "tool"],
  ["json-to-go.astro", "tool"],
  ["yaml-to-json.astro", "tool"],
  ["sql-formatter.astro", "tool"],
  ["curl-to-code.astro", "tool"],
  ["htaccess-generator.astro", "tool"],
  ["rss-validator.astro", "tool"],
  ["opml-converter.astro", "tool"],
];
let bad = 0;
for (const [f, k] of targets) {
  const r = audit(base + f, k);
  const status = r.hits.length ? "✗ FAIL" : "✓ OK";
  if (r.hits.length) bad++;
  console.log(`${status}  ${r.file.padEnd(42)} words=${String(r.words).padStart(4)} paras=${String(r.paras).padStart(2)}`);
  r.hits.forEach(h => console.log("        - " + h));
}
console.log(`\n${bad === 0 ? "ALL CLEAN ✓" : bad + " file(s) with hits"}`);

// ── Em-dash ban: em dashes read as AI-written. Scan the whole src tree. ──
// En dashes (–) are allowed for ranges; only — / &mdash; are flagged.
const emFiles = [];
(function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p);
    else if (/\.(astro|js)$/.test(e.name)) {
      const n = (fs.readFileSync(p, "utf8").match(/—|&mdash;/g) || []).length;
      if (n) emFiles.push([path.relative("C:/KBCafe/site", p), n]);
    }
  }
})("C:/KBCafe/site/src");
if (emFiles.length) {
  console.log(`\n✗ EM DASHES FOUND in ${emFiles.length} file(s) — run: node scripts/dedash.cjs`);
  emFiles.forEach(([f, n]) => console.log(`        - ${f} (${n})`));
} else {
  console.log("Em-dash ban ✓  (0 found)");
}
