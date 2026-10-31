# Changelog

Newest first. Each entry with a restore tag can be undone with `git revert <tag>..<last commit>`.

## 2026-10-31: the first recovery lab

Restore tag: `restore/2026-10-31-before-homepage-repositioning`

- `/blog/ai-agent-blanked-26-files` gains a five-step browser lab on sample files, plus evidence labels,
  a correction, recovery steps and two tested guards (`570aac7`).
- The homepage features the lab under the hero, and its counts now say "30 AI tools" and "all 48 tools".
- The Prompt Simulator states beside the tool that it uses pattern matching, not a live model.
- The full lab was run on production at desktop and phone widths, including the destructive build,
  hash verification and reset: 44 checks passed, no JavaScript errors.
- Term of the day, dictionary descriptions and Article headlines keep their apostrophes and quotes,
  and term previews end at a sentence or word boundary. One shared helper, `site/src/data/plainText.js`,
  replaces the four copies that turned entities into spaces. Restore tag:
  `restore/2026-10-31-before-text-fix`.

## 2026-10-24: author byline and bio

Restore tag: `restore/2026-10-24-before-author-byline`

- Lessons, AI explainers and blog posts show "By Javier Paltro" and an "Updated" date, with
  Article/BlogPosting structured data naming the author (`2340a64`).
- /about has a "Who writes KB Cafe" section with the author's bio (`6c3fed6`).

## 2026-10-23: search indexing cleanup

Restore tags: `restore/2026-10-23-before-link-cleanup`, `restore/2026-10-23-before-noindex-plan`

- 123 short, utility or duplicate pages (dictionary entries, beginner chapters, pattern pages,
  general-purpose utilities, archives, site search) are `noindex, follow` and out of the sitemap,
  which now lists 123 URLs. All of them stay live (`329ce9b`).
- Footer reads "© 2026 KB Cafe"; the 404 page credits 1999 to the address.
- The StockTools build post was cut to the build story, with two links (`433ff19`).
- Legacy `/articles`, `/quality`, `/blogs.aspx`, `/network.aspx` and `/iBLOGthere4IM` URLs redirect to
  matching pages instead of the homepage (`ce4469e`).

## 2026-06 to 2026-09: launch and build-out

- Launched 2026-06-18: tools, reference lessons, Feeds, AI Explained, dictionary, beginner course,
  AI Patterns Library, blog, flashcards, legacy redirect map.
- 2026-08 to 09: entity fixes so search and AI engines read KB Cafe as a website, not a coffee shop.
