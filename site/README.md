# kbcafe.com site

The Astro app behind [kbcafe.com](https://kbcafe.com). See the [root README](../README.md) for what the
site is, how indexing is controlled, and how to deploy.

| Command | Action |
| :-- | :-- |
| `npm install` | Install dependencies |
| `npm run dev` | Local dev server at `localhost:4321` |
| `npm run build` | Production build to `./dist/` |
| `node scripts/gen-lastmod.cjs` | Regenerate `src/data/lastmod.json` (sitemap and byline dates) |

Key data files in `src/data/`: `noindex.js` (pages held out of search and the sitemap), `author.js`
(byline name), `lastmod.json` (committed, because Vercel's shallow clone has no per-file history).
