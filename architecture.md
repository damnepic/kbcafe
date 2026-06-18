# architecture.md — KB Cafe (kbcafe.com)

A developer's **knowledge base**, café-warm. Strategy, branding, and session-continuity
reference. Operational rules for Claude Code live in `CLAUDE.md`.

_Last updated: reflects locked branding (logo shipped), four-pillar plan, and the
corrected AI Library strategy after verifying the skills-marketplace landscape._

---

## 1. Background

`kbcafe.com` — won at auction (~$500, June 2026), **possession 2026-06-14**. It was Randy
Charles Morin's RSS-era developer site (~2003–2008): RMail (RSS-to-email), The RSS Blog, the
iBLOGthere4iM blog, RSS/Atom/OPML utilities, and an "award-winning blog network." Built on
.NET (`.aspx`).

Bought for its **backlink authority**, which is elite for a developer resource: links from
the W3C validator, Apache, the PHP bug tracker, Microsoft's MSDN dev blog (DA 98), Wikipedia,
Harvard blogs, TechCrunch, Google Groups, and UK academic domains. Clean, organic anchor
profile.

**Two honest caveats (do not over-rely on hype framing):**
- The audit sample was **filtered to DA 30+** (~500 links). The value is **quality, not
  volume** — it is NOT "thousands of feed backlinks." Pull the unfiltered profile after
  possession before trusting any numbers.
- The authority shortcuts the **trust** problem, NOT the **competition** problem. New tools
  rank *faster* on this domain than on a cold one — but it is not a fast-pass past entrenched
  competitors (MDN, DevDocs, Stack Overflow, CodeBeautify). Expect a 6–18 month build.

---

## 2. Brand (LOCKED)

- **Name / wordmark:** **KB Cafe** — both words capitalized (KB is an initialism for
  **Knowledge Base**; Cafe is part of the proper name). Style "**KB**" in coral, "Cafe" in
  ink. Spaced two-word form is canonical; `kbcafe.com` is the domain.
- **Meaning:** KB = Knowledge Base (the substance: tools + references). Cafe = the warm,
  approachable delivery (the flavor). "Knowledge base, freshly brewed."
- **Logo (SHIPPED):** a coral coffee **cup whose interior is an open book**, holding "KB" in
  ink, with a **gold bookmark ribbon** tail at the bottom. Fuses café + knowledge base into
  one mark. The working asset is a **transparent PNG** (`kbcafe-logo-transparent.png` /
  `-trimmed.png`), wired into the homepage. **Status:** good enough to ship; a clean vector
  (SVG) trace is the eventual "perfect" version (re-typeset "KB" in real Bricolage) — not
  blocking.
  - **Favicon companion:** the simpler **solid coral bookmark-with-KB** mark reads at 16px
    where the full cup mark does not. System: **fused cup = hero/header/social; bookmark =
    favicon/tiny.**
- **Logo origin note:** the cup mark was designed in ChatGPT (raster), then background made
  transparent. AI-generated raster → not strongly copyrightable; for a real ownable asset,
  have it redrawn/refined as vector by a human (Figma/designer) eventually. Fine for a young
  site now.
- **Aesthetic:** warm developer-café — paper-grain background, coffee-warm palette, friendly
  but precise. This warmth is the **differentiator** vs. sterile competitors (CodeBeautify,
  FreeFormatter). Café voice throughout: "freshly brewed," "on the menu," "Today's pick,"
  "Brew →."
- **Design tokens (from the homepage build; retune to yank.info's real tokens when available):**
  - Palette: paper `#FBF4E9`, ink `#1E1813`, coral `#EE4B2B`, orange `#F4842A`, gold `#F4B423`,
    cream `#FFFCF5`.
  - Type: display **Bricolage Grotesque**, body **Hanken Grotesk**, mono **JetBrains Mono**
    (mono for tool names / code).
- **Family:** shares yank.info's visual language (wordmark + hero input + warm card grid) so
  the portfolio reads as siblings. Working homepage reference: `kbcafe-homepage-v5.html`.

---

## 3. Product: a four-pillar knowledge base

KB Cafe is **one product with four pillars**, not four products. The tools hub is the spine;
the others extend it.

1. **Tools** — the spine. Fast, clean, **client-side** developer utilities (formatters,
   converters, validators, generators). Highest "used + referenced." Each tool is an
   independent page targeting its own keyword cluster; growth = ship another tool; it compounds
   like a product portfolio. **Includes a deliberate AI-tools category** (token counter, prompt
   tester, JSON-mode/schema builder, embedding helpers) — the best shot at being *blogged
   about* in 2026, contained as a wing rather than a separate site.
2. **Reference (KB)** — cheat-sheets, explainers, and quick references (e.g. HTTP status codes,
   "what is a JWT," cron syntax). The SEO long-tail that *feeds users into the matching tool*.
   This is the literal "Knowledge Base" in the name.
3. **Feeds** — modern RSS/feed tools (validator, OPML, RSS-to-JSON, feed preview). Honors the
   domain's heritage, captures the `/rss/` link equity, and is the **relevant bridge to
   yank.info** ("turn this into shareable quote cards").
4. **AI Library** — a *curated* collection of prompts + AI agent skill links. **Re-scoped from
   a marketplace ambition to a small curated/editorial feature** (see §4 — the marketplace
   window is closed). Optional, not core.

Differentiation = quality + warmth: genuinely better tools (fast, no ad-vomit, works offline,
privacy-first, keyboard-friendly) in a warm café identity, against cold utility clones.

---

## 4. AI Library — RE-SCOPED (marketplace ambition dropped)

**What changed:** earlier this pillar was pitched as a bold, first-mover skills marketplace.
Verification (web search, June 2026) killed that thesis — the skills-marketplace land grab is
**already over**:
- **skills.sh** — Vercel-backed, launched Jan 2026, npm-style `npx skills add` installer
  across Claude Code / Codex / Cursor. A serious, funded incumbent.
- Plus **SkillsMP, ClaudeSkills.info, Agensi (80/20 creator payments + security scans),
  LobeHub (100k+ skills), agentskill.sh**, and vendor catalogs (NVIDIA, OpenAI). ~8 known
  marketplaces by April 2026.
- The category is explicitly framed as "GitHub/Hugging Face for agents." Moats are network
  effects (leaderboards, install counts, creator payments) a late solo entrant can't replicate.
- **Safety reality:** a 22,511-skill audit found ~140,963 issues (6.3/skill); Snyk's
  ToxicSkills research found **prompt injection in 36%** of skills tested. Skill files are
  **executable** — hosting unreviewed uploads = being a software-download site that never
  looked at the software.

**Therefore — do NOT build a skills marketplace.** Instead:
- **Publish onto existing rails.** Author high-quality skills (frontend-design, tool-building
  expertise — there's proven demand: "frontend-design" already lists on SkillsMP/LobeHub) and
  **publish them to skills.sh / SkillsMP with attribution back to KB Cafe.** Distribution on
  their rails, brand-building on yours, backlinks home.
- **Optional curated editorial layer:** a small "best skills / prompts for X" guide that links
  *out* to the established marketplaces — be the *guide to* the ecosystem, not a competitor in
  it. Low effort, still link-worthy.
- **If any contribution ever happens:** prompts can be light-touch; **skills must never be
  blind open upload** (executable = software). GitHub-linked + source-visible + trust-tiered
  ("✓ reviewed" vs "unverified") + disclaimer/ToS — and a disclaimer is *necessary but not
  sufficient* (it shifts liability, doesn't prevent harm or protect reputation).

Net: AI Library = a modest, curated, distribute-on-others'-rails feature. The AI-*tools*
category (token counter, prompt tester, etc.) is a *different, still-open* space and stays in
the Tools pillar.

---

## 5. Honest path ranking (success · usability · referenced · used · monetized)

1. **Tools hub + strong AI-tools section** — highest probability across ALL five metrics. Tools
   give durable used/referenced/ranks; the AI-tools wing gives 2026 buzz/blog-ability without
   betting the domain on a hype cycle.
2. **Reference (KB)** — strong SEO long-tail, feeds the tools. First-class pillar.
3. **Feeds** — heritage + yank bridge + quick-ranking low-competition pocket. Keep modest.
4. **AI Library** — now a small curated/publish feature (§4), not a core bet.
5. **Newsletter** — weak as a core product; valid only as a **Phase-3 retention layer** ("new
   tools + best dev links, weekly"). Do not lead with it.
6. **Pure data/scraper SaaS** — rejected as core: backend-heavy, slow to monetize, SEO wasted
   behind login. Light version = the Feeds tools only.

**Biggest real risk:** spreading across the domain portfolio and shipping nothing. The most
asymmetric move is picking ONE and getting it live. KB Cafe is now branded + designed; the next
milestone is **deployed and live**, not more planning.

---

## 6. URL structure & equity preservation

Old backlink-bearing URLs **must resolve** (restore or 301):
- `/rss/` → REBUILD as the **Feeds** section landing (most on-topic equity — preserve).
- `/rss/rss2smtp.aspx`, `/rss/usm.html`, `/rss/rssfeedstate.html`, `/rss/atom.xsd.xml` → 301 to
  nearest modern feed tool.
- `/Rmail.aspx` → 301 to RSS feed validator / feed tool.
- `/iBLOGthere4iM/` → 301 to `/blog` or homepage.
- `/network.aspx`, `/search.aspx` → 301 to the tool index / homepage.

New pages: clean modern slugs, one consistent pattern (recommend root `/<slug>`). Build the
full 301 map from the **unfiltered** export + a Wayback crawl before launch.

---

## 7. Tech stack

- **Astro** (SSG): each tool/page statically rendered, shared layout/nav/SEO, client-side JS for
  tool logic. Keeps the single-file-tool spirit while scaling to hundreds of pages. (11ty ok.)
- **Tools / Reference / Feeds: all client-side, no backend** (privacy: "nothing leaves your
  browser"; cheap; infinitely scalable).
- **AI Library: static** (curated links/content) — no backend.
- Deploy: Vercel. Per-page SEO: unique title/meta/H1, explainer + examples (required to rank),
  internal links to sibling tools.

---

## 8. Monetization (scales with traffic)

Ads at volume (EthicalAds / AdSense) → **Pro tier** (no ads, batch, saved snippets, larger
limits) → **paid API** for top tools (recurring) → optional **newsletter** sponsorship as
retention matures. Tools stay free/fast first; monetization never degrades core UX.

---

## 9. SEO & safety guardrails

- **Stay in the developer/tech lane** (expired-domain-abuse policy — repurposing aged authority
  to unrelated content = penalty risk).
- **Do NOT revive or impersonate Randy Morin's personal brand.** Build a fresh KB Cafe identity;
  name-anchored links still pass domain authority. (Treat any AI-sourced biography of him as
  unverified.)
- **Skip disavow** unless the Manual Actions report shows an action.
- Every page needs genuine on-page content to rank.
- **AI Library:** never host blind-uploaded executable skills; if contributions ever open,
  trust-tier the UI + GitHub-linked source + disclaimer (per §4).

---

## 10. Build order (phased — ship, don't sprawl)

- **Phase 1 (launch):** Astro scaffold + brand (KB Cafe, cup logo, homepage). Ship Tier-1
  **Tools** + a starter set of **Reference** pages + the **Feeds** section (preserving `/rss/`)
  + a small **curated AI Library** (links out, no uploads). Implement the 301 map. Get it live
  and capturing equity.
  - Tier-1 tools: json→typescript, cron generator, jwt decoder, csv⇄json, json→go,
    .htaccess generator, curl→code, yaml⇄json, sql formatter, case converter.
  - AI-tools wing: token counter, prompt tester, JSON-schema/JSON-mode builder.
- **Phase 2:** expand Tools across the long tail + more Reference; publish authored skills to
  skills.sh/SkillsMP with attribution home; validate keywords (Ahrefs/Ubersuggest).
- **Phase 3:** weekly newsletter (retention); consider Pro/API; layer the AI distill engine
  shared with yank once yank's backend exists.

---

## 11. Open items / decisions pending

- [ ] Possession 2026-06-14. Prep/design only until then (can scaffold Astro + build tool UIs).
- [ ] Pull the **unfiltered** backlink profile; build the 301 map.
- [ ] Wayback crawl for old URL inventory (esp. `/rss/`).
- [ ] Validate Tier-1 tool keywords.
- [ ] Confirm URL pattern (root `/<slug>` recommended).
- [ ] Retune fonts/palette to yank.info's real tokens.
- [ ] Logo polish (optional, non-blocking): vector trace + re-typeset "KB" in Bricolage; make a
      dark-background variant; finalize favicon (bookmark mark).
- [ ] ThumbCrafted note: PNG transparent-export bug (RGBA flatten → black fill) still reproduces;
      fix in the tool. Current logo transparency was done manually.

---

## 12. Decision log

- Won kbcafe.com at auction, ~$500 (June 2026); funded from the tyrese.com exit.
- **KB = Knowledge Base** (settled). Wordmark **KB Cafe**, both capitalized, KB in coral.
- **Logo = coral cup + open-book interior + "KB" + gold bookmark ribbon** (the fused mark,
  ChatGPT-designed, made transparent, SHIPPED as PNG). **Bookmark-with-KB = favicon companion.**
  Vector trace deferred (non-blocking).
- Aesthetic: warm developer-café; shares yank.info's design family.
- Product = **four pillars**: Tools (spine, + AI-tools wing) · Reference (KB) · Feeds (heritage
  + yank bridge) · AI Library (curated, re-scoped).
- **AI Library marketplace ambition DROPPED** after verifying skills.sh (Vercel) + ~7 other
  marketplaces already own the category; safety data (36% prompt-injection) confirms executable
  uploads are high-risk. New plan: publish onto existing rails + optional curated guide.
- Rejected: nostalgic RSS-only site (too little traffic); placeholder+redirect to yank (wastes
  standalone authority); pure scraper SaaS as core (backend-heavy); newsletter as core (retention
  layer only); skills marketplace (window closed).
- Corrected inflated AI-sourced claims: quality not "thousands" of links; authority shortcuts
  trust, not competition.

---

## 13. Project files (this design phase)

- `kbcafe-homepage-v5.html` — current working homepage (transparent cup logo wired in, live
  tool filter, four-pillar nav). Supersedes v1–v4.
- `kbcafe-logo-transparent.png` — full 1254px transparent cup logo (social/general use).
- `kbcafe-logo-transparent-trimmed.png` — tight-cropped transparent logo (header/favicon use).
- `kbcafe-architecture.md` (this file) + `kbcafe-CLAUDE.md` — strategy + Claude Code rules.
