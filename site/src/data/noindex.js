// Pages kept OUT of Google (noindex, follow) and out of the sitemap. They stay live, linked and
// usable; only search is told to skip them. Decided 2026-10-23, after Google moved 233 of 246 URLs
// to "Crawled - currently not indexed" on 2026-07-23 (a site-level quality call, not a fault).
// Rule: index only pages that stand on their own and offer something the established answers
// don't. Short template entries, commodity utilities and navigation duplicates wait here until
// they are deepened. To bring one back: deepen it, delete it from this file, request indexing.
// Read by Layout.astro (the robots meta) and astro.config.mjs (the sitemap filter).

// Whole sections: every page under the prefix, but not the hub itself (/dictionary stays indexed).
export const NOINDEX_PREFIXES = [
  '/dictionary/',    // 83 entries, median 123 words: definitions, not lessons
  '/beginner-ai/',   // course chapters of ~300 words; the /beginner-ai hub stays indexed
  '/ai-patterns/',   // pattern pages of ~185 words; the /ai-patterns hub stays indexed
];

// Exceptions inside those sections that Google already chose to index.
export const INDEX_EXCEPTIONS = new Set([
  '/dictionary/context-window',
]);

export const NOINDEX_PATHS = new Set([
  // general-purpose utilities that hundreds of sites offer, with little explanation around them
  '/case-converter', '/csv-to-json', '/json-to-go', '/yaml-to-json', '/sql-formatter',
  '/curl-to-code', '/htaccess-generator', '/dns-lookup', '/whois-lookup', '/jwt-decoder',
  '/cron-generator', '/email-deliverability-checker', '/learning-path-builder',
  // thin explainer
  '/automation-blueprints',
  // navigation, archives and internal search that duplicate the hubs
  '/search', '/map', '/menu', '/whats-new', '/skill-tree', '/resources', '/proof',
  // portfolio pages about our other businesses, not developer knowledge
  '/ai-business', '/blog/introducing-ai-business',
]);

export function isNoindexed(path) {
  const p = (path || '/').replace(/\/$/, '') || '/';
  if (INDEX_EXCEPTIONS.has(p)) return false;
  if (NOINDEX_PATHS.has(p)) return true;
  return NOINDEX_PREFIXES.some((pre) => p.startsWith(pre));
}
