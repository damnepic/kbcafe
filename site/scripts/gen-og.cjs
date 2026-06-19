// Generate branded Open Graph cards (1200x630) for the site + major pages.
// Each major page gets its own icon + accent. Renders an HTML template per spec
// via headless Edge, screenshots to public/og/<slug>.png. The default card
// (public/og.png) reflects the site's positioning as an interactive AI
// knowledge base: learn AI, build with it, get better answers.
//
//   node scripts/gen-og.cjs
//
// Requires Microsoft Edge (headless). Mirrors the og-card.html approach.
const fs = require('fs');
const path = require('path');
const os = require('os');
const { execFileSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const OUT_DIR = path.join(ROOT, 'public', 'og');
const LOGO = path.join(ROOT, 'public', 'logo.png').replace(/\\/g, '/');
const EDGE = 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';

fs.mkdirSync(OUT_DIR, { recursive: true });

// white stroke icons, consistent with the site's line style
const ICON = {
  book:     `<path d="M5 5a3 3 0 0 1 3-3h11v17H8a3 3 0 0 0-3 3V5Z"/><path d="M5 19a3 3 0 0 0 3 3h11"/>`,
  wrench:   `<path d="M15 3a6 6 0 0 0-5.7 7.9L3 17.2 6.8 21l6.3-6.3A6 6 0 1 0 15 3Z"/><path d="M15.5 8.5h.01"/>`,
  bookopen: `<path d="M12 6C10.5 4.8 8.4 4 6 4a8 8 0 0 0-3 .6v14A8 8 0 0 1 6 18c2.4 0 4.5.8 6 2 1.5-1.2 3.6-2 6-2a8 8 0 0 1 3 .6V4.6A8 8 0 0 0 18 4c-2.4 0-4.5.8-6 2Z"/><path d="M12 6v14"/>`,
  cap:      `<path d="M12 4 1.5 9 12 14l10.5-5L12 4Z"/><path d="M5 11v5c0 1.7 3.1 3 7 3s7-1.3 7-3v-5"/>`,
  window:   `<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 9h18"/>`,
  plug:     `<circle cx="6" cy="6" r="2.4"/><circle cx="6" cy="18" r="2.4"/><circle cx="18" cy="12" r="2.4"/><path d="M8 7l8 4M8 17l8-4"/>`,
  layers:   `<path d="M12 3 3 7.5 12 12l9-4.5L12 3Z"/><path d="M3 12.5 12 17l9-4.5M3 16.5 12 21l9-4.5"/>`,
  dots:     `<circle cx="7" cy="8" r="1.7"/><circle cx="16" cy="6" r="1.7"/><circle cx="18" cy="15" r="1.7"/><circle cx="9" cy="17" r="1.7"/><circle cx="12" cy="11" r="1.7"/>`,
  brackets: `<path d="M8.5 5 3.5 12l5 7M15.5 5l5 7-5 7"/>`,
  braces:   `<path d="M9 4.5c-2.2 0-1.4 4.5-4 4.5 2.6 0 1.8 4.5 4 4.5"/><path d="M15 4.5c2.2 0 1.4 4.5 4 4.5-2.6 0-1.8 4.5-4 4.5"/>`,
};

const FONTS = `<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Sora:wght@700;800&family=Hanken+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@600;700&display=swap" rel="stylesheet">`;

const BASE = `
  :root{--paper:#FBF4E9;--ink:#1E1813;--ink-soft:#574b3f;--coral:#EE4B2B;--gold:#F4B423;--coffee:#6F4E37}
  *{margin:0;padding:0;box-sizing:border-box}
  html,body{width:1200px;height:630px;overflow:hidden}
  body{background:var(--paper);font-family:"Hanken Grotesk",sans-serif;position:relative}
  body::before{content:"";position:absolute;inset:0;opacity:.5;pointer-events:none;
    background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.045'/%3E%3C/svg%3E")}
  .glow{content:"";position:absolute;top:-280px;left:50%;transform:translateX(-50%);
    width:1300px;height:760px;pointer-events:none;border-radius:50%;filter:blur(10px)}
  .brand-tl{position:absolute;top:46px;left:64px;display:flex;align-items:center;gap:12px;z-index:2}
  .brand-tl img{height:52px;width:auto;filter:drop-shadow(2px 3px 0 rgba(30,24,19,.16))}
  .brand-tl b{font-family:"Sora",sans-serif;font-weight:800;font-size:32px;letter-spacing:-.02em;color:var(--ink)}
  .url{position:absolute;bottom:44px;left:64px;font-family:"JetBrains Mono",monospace;font-weight:600;font-size:20px;color:var(--ink-soft)}
  .url b{color:var(--coral);font-weight:700}
`;

// per-page card: top-left brand, big icon tile + eyebrow + title, url bottom-left
function pageCard({ eyebrow, title, icon, accent }) {
  return `<!DOCTYPE html><html><head><meta charset="UTF-8">${FONTS}<style>${BASE}
    .glow{background:radial-gradient(ellipse at center, ${hex(accent, .26)}, ${hex(accent, .08)} 45%, transparent 72%)}
    .card{position:relative;z-index:1;width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;padding:0 64px;gap:30px}
    .tile{width:140px;height:140px;border-radius:34px;background:${accent};display:flex;align-items:center;justify-content:center;
      box-shadow:0 18px 40px ${hex(accent, .35)}}
    .tile svg{width:78px;height:78px;stroke:#fff;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
    .eyebrow{font-family:"JetBrains Mono",monospace;font-weight:700;font-size:22px;letter-spacing:.22em;text-transform:uppercase;color:${accent}}
    .title{font-family:"Sora",sans-serif;font-weight:800;font-size:64px;line-height:1.06;letter-spacing:-.02em;color:var(--ink);max-width:1000px}
  </style></head><body>
    <div class="glow"></div>
    <div class="brand-tl"><img src="file:///${LOGO}" alt=""><b>KB Cafe</b></div>
    <div class="card">
      <div class="tile"><svg viewBox="0 0 24 24">${icon}</svg></div>
      <div class="eyebrow">${eyebrow}</div>
      <div class="title">${title}</div>
    </div>
    <div class="url">kbcafe.com</div>
  </body></html>`;
}

// default card: centered logo + wordmark + tagline + chips
function defaultCard() {
  return `<!DOCTYPE html><html><head><meta charset="UTF-8">${FONTS}<style>${BASE}
    .glow{top:-300px;background:radial-gradient(ellipse at center,rgba(244,180,35,.34),rgba(244,132,42,.12) 44%,transparent 72%)}
    .card{position:relative;z-index:1;width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:40px 70px;gap:4px}
    .logo{height:176px;width:auto;filter:drop-shadow(3px 5px 0 rgba(30,24,19,.16));margin-bottom:14px}
    .wm{font-family:"Sora",sans-serif;font-weight:800;font-size:88px;letter-spacing:-.03em;line-height:1}
    .wm .kb{color:var(--coral)}.wm .cf{color:var(--ink)}
    .tag{font-family:"Sora",sans-serif;font-weight:800;font-size:40px;letter-spacing:-.02em;color:var(--ink);margin-top:22px}
    .mk{position:relative;white-space:nowrap;padding-bottom:.16em;
      background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 18' preserveAspectRatio='none'%3E%3Cpath d='M1 10 C 40 4 70 5 110 8 C 150 11 180 9 199 6 L 198 12 C 165 15 130 14 95 12 C 60 10 30 12 2 14 Z' fill='%236F4E37'/%3E%3C/svg%3E");
      background-repeat:no-repeat;background-position:center bottom;background-size:100% .32em}
    .sub{font-family:"Hanken Grotesk",sans-serif;font-weight:600;font-size:27px;color:var(--ink-soft);margin-top:18px}
    .chips{font-family:"JetBrains Mono",monospace;font-weight:700;font-size:18px;letter-spacing:.2em;text-transform:uppercase;color:var(--ink-soft);margin-top:34px}
    .chips b{color:var(--coral);margin:0 4px}
    .url2{position:absolute;bottom:36px;left:0;right:0;text-align:center;font-family:"JetBrains Mono",monospace;font-weight:600;font-size:18px;color:var(--ink-soft)}
    .url2 b{color:var(--coral)}
  </style></head><body>
    <div class="glow"></div>
    <div class="card">
      <img class="logo" src="file:///${LOGO}" alt="">
      <div class="wm"><span class="kb">KB</span> <span class="cf">Cafe</span></div>
      <div class="tag">The interactive <span class="mk">AI knowledge base.</span></div>
      <div class="sub">Learn how AI works, build with it, and get better answers.</div>
      <div class="chips">AI Explained<b>&middot;</b>Tools<b>&middot;</b>Reference<b>&middot;</b>Learn</div>
    </div>
    <div class="url2"><b>kbcafe.com</b></div>
  </body></html>`;
}

function hex(h, a) {
  const n = h.replace('#', '');
  const r = parseInt(n.slice(0, 2), 16), g = parseInt(n.slice(2, 4), 16), b = parseInt(n.slice(4, 6), 16);
  return `rgba(${r},${g},${b},${a})`;
}

const SPECS = [
  { out: 'ai',        accent: '#7657ff', eyebrow: 'AI Explained', title: 'Understand how modern AI actually works', icon: ICON.book },
  { out: 'tools',     accent: '#EE4B2B', eyebrow: 'The Toolbox',  title: 'Developer & AI tools, freshly brewed',      icon: ICON.wrench },
  { out: 'reference', accent: '#0f9f82', eyebrow: 'Reference',    title: 'Clear, no-fluff technical references',       icon: ICON.bookopen },
  { out: 'learn',     accent: '#F4842A', eyebrow: 'Learn',        title: 'Guided paths to learn AI, step by step',     icon: ICON.cap },
  { out: 'what-is-a-context-window',    accent: '#7657ff', eyebrow: 'AI Explained', title: 'What is a context window?', icon: ICON.window },
  { out: 'what-is-mcp',                 accent: '#0f9f82', eyebrow: 'AI Explained', title: 'What is MCP (Model Context Protocol)?', icon: ICON.plug },
  { out: 'what-is-rag',                 accent: '#3478f6', eyebrow: 'AI Explained', title: 'What is RAG (Retrieval-Augmented Generation)?', icon: ICON.layers },
  { out: 'what-are-embeddings',         accent: '#e0911a', eyebrow: 'AI Explained', title: 'What are embeddings?', icon: ICON.dots },
  { out: 'what-is-tool-calling',        accent: '#8a63ff', eyebrow: 'AI Explained', title: 'What is tool calling (function calling)?', icon: ICON.brackets },
  { out: 'what-are-structured-outputs', accent: '#0fb59b', eyebrow: 'AI Explained', title: 'What are structured outputs?', icon: ICON.braces },
];

function render(html, outPng) {
  const tmp = path.join(os.tmpdir(), `og-${Math.abs(hash(outPng))}.html`);
  fs.writeFileSync(tmp, html);
  execFileSync(EDGE, [
    '--headless=new', '--disable-gpu', '--hide-scrollbars',
    '--force-device-scale-factor=1', '--window-size=1200,630',
    '--virtual-time-budget=4000', `--screenshot=${outPng}`, `file:///${tmp.replace(/\\/g, '/')}`,
  ], { stdio: 'ignore' });
  fs.rmSync(tmp, { force: true });
}
function hash(s) { let h = 0; for (let i = 0; i < s.length; i++) { h = (h << 5) - h + s.charCodeAt(i) | 0; } return h; }

console.log('default og.png');
render(defaultCard(), path.join(ROOT, 'public', 'og.png'));
for (const s of SPECS) {
  console.log('og/' + s.out + '.png');
  render(pageCard(s), path.join(OUT_DIR, s.out + '.png'));
}
console.log('done:', 1 + SPECS.length, 'cards');
