// KB Cafe RSS feed (hand-rolled, no dependency). Syndicates the blog.
// Served at /feed.xml; /feed, /rss, /rss.xml rewrite here (see vercel.json).
// Fitting, given kbcafe.com's RSS heritage.
import { POSTS } from '../data/blog.js';

const SITE = 'https://kbcafe.com';
const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const rfc822 = (iso: string) => {
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, d, 12)).toUTCString(); // noon UTC avoids TZ date drift
};

export async function GET() {
  const items = POSTS.map((p) => `
    <item>
      <title>${esc(p.title)}</title>
      <link>${SITE}/blog/${p.slug}</link>
      <guid isPermaLink="true">${SITE}/blog/${p.slug}</guid>
      <pubDate>${rfc822(p.date)}</pubDate>
      <category>${esc(p.tag)}</category>
      <description>${esc(p.excerpt)}</description>
    </item>`).join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>KB Cafe</title>
    <link>${SITE}/</link>
    <atom:link href="${SITE}/feed.xml" rel="self" type="application/rss+xml" />
    <description>Developer tools, quick references, and an interactive AI knowledge base, freshly brewed.</description>
    <language>en-us</language>
    <lastBuildDate>${rfc822(POSTS[0].date)}</lastBuildDate>${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
