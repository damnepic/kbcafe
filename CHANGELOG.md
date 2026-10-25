# Changelog

Newest first. Each entry with a restore tag can be undone with `git revert <tag>..<last commit>`.

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
