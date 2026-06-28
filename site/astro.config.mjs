// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readFileSync } from 'node:fs';

// Per-page lastmod for the sitemap, from a committed git-date map (regenerate with: node scripts/gen-lastmod.cjs).
// Committed because Vercel's shallow clone has no per-file history; falls back gracefully if the file is missing.
let LM = { exact: {}, prefix: {} };
try { LM = JSON.parse(readFileSync(new URL('./src/data/lastmod.json', import.meta.url), 'utf8')); } catch (e) {}
function lastmodFor(url) {
  let p;
  try { p = new URL(url).pathname.replace(/\/$/, '') || '/'; } catch (e) { return undefined; }
  if (LM.exact[p]) return LM.exact[p];
  let best;
  for (const pre in LM.prefix) { if (p === pre.replace(/\/$/, '') || p.startsWith(pre)) { if (!best || pre.length > best.len) best = { len: pre.length, d: LM.prefix[pre] }; } }
  return best ? best.d : undefined;
}

// https://astro.build/config
export default defineConfig({
  site: 'https://kbcafe.com',
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [sitemap({
    serialize(item) {
      const lm = lastmodFor(item.url);
      if (lm) item.lastmod = lm;   // priority/changefreq are ignored by Google, so we don't set them
      return item;
    },
  })],
});
