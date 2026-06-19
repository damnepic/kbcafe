// KB Cafe RSS feed (hand-rolled, no dependency). Syndicates the blog AND the
// What's New changelog (src/data/updates.js) so the feed stays fresh from shipping,
// not just blogging. Served at /feed.xml; /feed, /rss, /rss.xml rewrite here.
import { POSTS } from '../data/blog.js';
import { UPDATES } from '../data/updates.js';

const SITE = 'https://kbcafe.com';
const esc = (s: string) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const rfc822 = (iso: string) => {
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, d, 12)).toUTCString(); // noon UTC avoids TZ date drift
};
const abs = (u: string) => (/^https?:\/\//.test(u) ? u : SITE + u);

type Item = { title: string; link: string; guid: string; date: string; category: string; description: string };

const items: Item[] = [
  ...POSTS.map((p) => ({
    title: p.title, link: `${SITE}/blog/${p.slug}`, guid: `${SITE}/blog/${p.slug}`,
    date: p.date, category: p.tag, description: p.excerpt,
  })),
  ...UPDATES.map((u) => ({
    title: u.title, link: abs(u.url), guid: `${abs(u.url)}#${u.date}`,
    date: u.date, category: u.kind, description: u.summary,
  })),
].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));

export async function GET() {
  const body = items.map((it) => `
    <item>
      <title>${esc(it.title)}</title>
      <link>${esc(it.link)}</link>
      <guid isPermaLink="false">${esc(it.guid)}</guid>
      <pubDate>${rfc822(it.date)}</pubDate>
      <category>${esc(it.category)}</category>
      <description>${esc(it.description)}</description>
    </item>`).join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>KB Cafe</title>
    <link>${SITE}/</link>
    <atom:link href="${SITE}/feed.xml" rel="self" type="application/rss+xml" />
    <description>New tools, AI courses, guides, and posts from KB Cafe, an interactive AI knowledge base, freshly brewed.</description>
    <language>en-us</language>
    <lastBuildDate>${rfc822(items[0]?.date || '2026-06-18')}</lastBuildDate>${body}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
