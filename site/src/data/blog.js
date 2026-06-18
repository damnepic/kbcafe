// KB Cafe blog — a forward-looking dev blog (NOT a restore of the 450+ dated
// 2003-2009 posts, which stay as section redirects). Newest first.
export const POSTS = [
  { slug: "the-return-of-kb-cafe", title: "The Return of KB Cafe",
    date: "2026-06-18", tag: "News",
    excerpt: "kbcafe.com was a go-to developer resource in the early 2000s. Here's what it is now — and why we brought it back." },
  { slug: "rss-and-the-open-web-in-2026", title: "RSS Didn't Die — The Open Web Just Got Quiet",
    date: "2026-06-17", tag: "Open Web",
    excerpt: "Everyone declared RSS dead a decade ago. It's quietly running newsletters, podcasts, and the fediverse the whole time." },
  { slug: "rss-and-ai", title: "Feeds for Machines: RSS as the Structured Layer for AI",
    date: "2026-06-16", tag: "AI",
    excerpt: "LLMs are starving for clean, structured, permissioned content. A 25-year-old format turns out to be a good answer." },
];

export const fmtDate = (iso) => {
  const [y, m, d] = iso.split("-").map(Number);
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  return `${months[m - 1]} ${d}, ${y}`;
};
