# CLAUDE.md — KB Cafe (kbcafe.com)

Project instructions for Claude Code. Read `architecture.md` for full strategy and rationale.

## What this is
**KB Cafe** — a developer's **knowledge base**, café-warm. Rebuilding kbcafe.com (won ~$500;
**possession 2026-06-14**), formerly Randy Morin's RSS-era dev site, carrying elite aged tech
authority (W3C, Apache, PHP, MSDN, Harvard, TechCrunch). **The backlinks are the asset.**
Two truths to hold: the authority is **quality, not volume** (the export was DA-30-filtered —
pull the real profile), and it shortcuts **trust, not competition** (6–18 month build, not a
fast-pass past MDN/StackOverflow/CodeBeautify).

## Brand (LOCKED)
- Wordmark: **KB Cafe** — both capitalized (KB = initialism for Knowledge Base). "**KB**" in
  coral, "Cafe" in ink.
- Logo = **coral bookmark with "KB" in cream** → identity mark (logo/favicon/anywhere small).
  **bookmark = identity.**
- Coffee cup + steam = **secondary flavor motif** (Today's pick, empty states, loading, 404).
  **cup = personality, never identity.**
- Aesthetic: warm developer-café (the differentiator vs. sterile competitors). Café voice:
  "freshly brewed," "on the menu," "Brew →." Shares yank.info's design family.
- Tokens: paper `#FBF4E9` · ink `#1E1813` · coral `#EE4B2B` · gold `#F4B423` · cream `#FFFCF5`;
  display **Bricolage Grotesque**, body **Hanken Grotesk**, mono **JetBrains Mono**. (Retune to
  yank.info's real tokens when available.) Working homepage: `kbcafe-homepage-v2.html`.

## Product = ONE site, FOUR pillars
1. **Tools** (spine) — client-side dev utilities; each a page in its own keyword cluster.
   Includes an **AI-tools category** (token counter, prompt tester, JSON-schema builder) = the
   2026 buzz wing.
2. **Reference (KB)** — cheat-sheets/explainers that feed users into the matching tool.
3. **Feeds** — RSS/feed tools; honors heritage, captures `/rss/` equity, bridges to yank.info.
4. **AI Library** — curated prompts + AI **skill files**; skills-led (see rules below).

## AI Library rules (CRITICAL)
- **Skills-led** (newer/defensible/blog-worthy) over prompts (commoditized, light-touch only).
- Skill files are **executable** → effectively software. **Never host blind open uploads.**
- **Curated-first, phased:** Phase 1 = curated, no uploads/backend (static). Phase 2 = curated
  submission (review-before-publish, **GitHub-linked, source-visible**). Phase 3 (only if it
  catches) = open community + accounts/voting.
- **Trust tiers in the UI from day one:** "✓ Reviewed by KB Cafe" vs "community-submitted,
  unverified — inspect before running."
- Disclaimer + ToS + risk modal are **necessary but NOT sufficient** — the real safeguard is the
  structure (curation + GitHub source + trust tiers + flagging). A disclaimer shifts liability;
  it does not prevent harm or protect reputation.

## Governing rules
- **Every old backlink URL must resolve** (restore or 301). Priority: `/rss/` → Feeds section.
  Also 301: `/Rmail.aspx`, `/iBLOGthere4iM/`, `/network.aspx`, `/search.aspx`. Map in
  `architecture.md` §6.
- **Stay in the developer/tech lane** (expired-domain-abuse policy).
- **Do NOT revive/impersonate Randy Morin's personal brand** (treat AI bios of him as unverified).
- Tools/Reference/Feeds + AI-Library-Phase-1 are **client-side, no backend**. Backend enters
  only at AI Library Phase 2–3.
- Every page needs real on-page content to rank.
- **Skip disavow** unless the Manual Actions report shows an action.

## Tech stack
- **Astro** (SSG); client-side tool logic. Deploy **Vercel**. One URL pattern: root `/<slug>`.

## Build order (ship, don't sprawl)
- **Phase 1 (launch):** Astro + brand; Tier-1 Tools + starter Reference + Feeds (preserve
  `/rss/`) + curated AI Library (no uploads); 301 map.
  - Tier-1 tools: json→typescript, cron generator, jwt decoder, csv⇄json, json→go,
    .htaccess gen, curl→code, yaml⇄json, sql formatter, case converter.
  - AI-tools wing: token counter, prompt tester, JSON-schema builder.
- **Phase 2:** long-tail Tools + Reference; curated submission for AI Library; validate keywords.
- **Phase 3 (if it catches):** open AI Library community; push Tools to head terms; weekly
  newsletter (retention); Pro/API; shared AI-distill engine with yank (once yank's backend exists).

## Monetization
Ads at volume → Pro tier → paid API for top tools → newsletter sponsorship. Never degrade free UX.

## Pre-launch checklist (after 2026-06-14)
- [ ] Verify in Google Search Console (Domain property → DNS TXT).
- [ ] Manual Actions report — skip disavow unless an action appears.
- [ ] `site:kbcafe.com` indexation check.
- [ ] Pull the **UNFILTERED** backlink profile; build the 301 map.
- [ ] Wayback crawl for old URL inventory (esp. `/rss/`).
- [ ] Validate Tier-1 keywords; submit sitemap.

## Status / key files
- Not in possession until 2026-06-14. Prep/design only (can scaffold Astro + build tool UIs).
- `architecture.md` — full strategy, four pillars, AI Library safety model, decision log.
- `kbcafe-homepage-v2.html` — working homepage (brand + design reference).
