# KB Cafe

**A free AI knowledge base and toolkit for developers.** Client-side tools, plain-English explainers
on modern AI, and references on the fundamentals, written by Javier Paltro.

🔗 **[kbcafe.com](https://kbcafe.com)**

> Nothing is uploaded. Nothing is tracked. Everything runs in your browser.

---

## What's here

- **AI Explained**: context windows, MCP, RAG, embeddings, tool calling, structured outputs, agent
  loops, plus the AI Patterns Library and interactive tools (Context Window Visualizer, Embedding
  Explorer, Prompt X-Ray, RAG Chunking Visualizer and more).
- **Reference**: lessons on the fundamentals (JSON, HTTP, SMTP, DNS, git, OOP, concurrency, memory).
- **Tools**: browser-side developer utilities (JSON to TypeScript/Go, Base64, converters, formatters).
- **Feeds**: RSS, Atom and OPML tools, honoring the domain's RSS-era history.
- **Blog**: build stories, written first-person.

## Privacy by design

Every tool is plain client-side JavaScript. What you paste is processed locally and never sent to a
server, which is also why the tools work offline once loaded. No accounts. See
[/privacy](https://kbcafe.com/privacy).

## Tech

- [Astro](https://astro.build) (static) in `site/`, deployed on [Vercel](https://vercel.com)
- 100% client-side tool logic, no backend

## Run and check

```bash
cd site
npm install
npm run dev      # local dev server
npm run build    # static build to site/dist; must pass before any push
```

## Search indexing

- `site/src/data/noindex.js` is the one list of pages held out of search. Layout writes
  `noindex, follow` from it and the sitemap leaves the same pages out. Pages on it stay live.
- `site/src/data/lastmod.json` feeds the sitemap's dates and the "Updated" line in bylines.
  Regenerate it after content commits with `node scripts/gen-lastmod.cjs` (from `site/`), then commit it.
- `site/src/data/author.js` holds the byline name.

## Deploy

Push to `main`. Vercel builds from the `site` root directory. Check that the deployment is Ready,
then load a page or two live.

## Docs

- [CHANGELOG.md](./CHANGELOG.md): releases and their restore tags
- [site/README.md](./site/README.md): app commands and data files

## License

[MIT](./LICENSE). The tools are free to use and free to learn from.
