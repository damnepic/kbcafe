# KB Cafe

**A developer's knowledge base, café-warm.** Fast, private, client-side tools for developers, plus
clear explainers on the web, feeds, and modern AI infrastructure.

🔗 **[kbcafe.com](https://kbcafe.com)**

> Nothing is uploaded. Nothing is tracked. Everything runs in your browser.

---

## What's here

- **Tools** — JSON↔TypeScript/Go, JWT decoder, Base64, cron generator, CSV/YAML converters, SQL
  formatter, cURL→code, RSS/OPML tools, and more. All run entirely in the browser.
- **AI Explained** — clear references for modern AI infrastructure: context windows, MCP, RAG,
  embeddings, tool calling, structured outputs, plus an **AI Patterns Library** and interactive tools
  (Context Window Visualizer, Structured Output Builder, Pattern Explorer).
- **Reference** — evergreen explainers on the fundamentals (OOP, concurrency, memory, HTTP, SMTP…).
- **Feeds** — modern RSS / Atom / OPML tools.

## Privacy by design

Every tool is plain client-side JavaScript. When you paste JSON, a token, or a config, it is processed
locally and **never sent to a server** — which is also why the tools work offline once loaded. No
accounts, no sign-ups. See [/privacy](https://kbcafe.com/privacy).

## Tech

- [Astro](https://astro.build) (static), deployed on [Vercel](https://vercel.com)
- 100% client-side tool logic — no backend
- A couple of bundled, browser-side libraries (`js-yaml`, `sql-formatter`) for the parsers

## Run locally

```bash
cd site
npm install
npm run dev      # local dev server
npm run build    # static build → site/dist
```

## License

[MIT](./LICENSE) — the tools are free to use and free to learn from.
