// Generates src/data/lastmod.json: a route -> last-git-commit-date map for the sitemap's <lastmod>.
// Run on a machine WITH full git history (Vercel does shallow clones, so we commit the result and read it at build).
// Static pages get an exact date; dynamic routes ([slug], [topic]) get a prefix date (their template/data file).
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const PAGES = path.join(ROOT, 'src', 'pages');
const exact = {};
const prefix = {};

function gitDate(file) {
  try {
    const d = execSync('git log -1 --format=%cI -- "' + file + '"', { cwd: ROOT, encoding: 'utf8' }).trim();
    return d ? d.slice(0, 10) : null; // YYYY-MM-DD is plenty for lastmod
  } catch (e) { return null; }
}
const later = (a, b) => (!a ? b : (a > b ? a : b));

function walk(dir) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    if (fs.statSync(full).isDirectory()) { walk(full); continue; }
    if (!/\.(astro|md|mdx)$/.test(name)) continue;
    const date = gitDate(full);
    if (!date) continue;
    const rel = path.relative(PAGES, full).replace(/\\/g, '/');
    let route = '/' + rel.replace(/\.(astro|md|mdx)$/, '');
    route = route.replace(/\/index$/, '') || '/';
    if (route.includes('[')) {
      const pre = route.slice(0, route.indexOf('['));   // e.g. /dictionary/ , /learn-ai-
      prefix[pre] = later(prefix[pre], date);
    } else {
      exact[route] = date;
    }
  }
}

walk(PAGES);
const out = { exact, prefix };
fs.writeFileSync(path.join(ROOT, 'src', 'data', 'lastmod.json'), JSON.stringify(out));
console.log('lastmod.json written: ' + Object.keys(exact).length + ' exact routes, ' + Object.keys(prefix).length + ' prefixes');
