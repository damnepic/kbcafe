// KB Cafe blog, a forward-looking dev blog (NOT a restore of the 450+ dated
// 2003-2009 posts, which stay as section redirects). Newest first.
export const POSTS = [
  { slug: "ai-agent-blanked-26-files", title: "How an AI Agent Blanked 26 Files, and the One Question That Saved Me",
    date: "2026-06-20", tag: "Build in Public",
    excerpt: "A postmortem: an AI coding agent null-wrote 26 of my source files. Why git only saved half, how I rebuilt the rest from build output and verified every byte, and the rule I locked in." },
  { slug: "building-the-prompt-optimizer", title: "How We Built the Prompt Optimizer: Six Tools Into One",
    date: "2026-06-19", tag: "Build in Public",
    excerpt: "We turned six focused prompt tools into one flagship, without deleting any of them. The real product decision behind composing tools into a mega-tool." },
  { slug: "introducing-ai-business", title: "Introducing AI Business, and Building in Public",
    date: "2026-06-19", tag: "Build in Public",
    excerpt: "We've opened a new section, AI Business, to cover the half of the journey nobody teaches honestly: getting traffic and making money. Plus our first case study is live." },
  { slug: "the-blog-that-lived-at-this-address", title: "The Blog That Used to Live at This Address",
    date: "2026-06-19", tag: "Open Web",
    excerpt: "Before KB Cafe was an AI knowledge base, this domain ran one of the early web's RSS blogs. The story of iBLOGthere4iM, and where it lives on." },
  { slug: "the-return-of-kb-cafe", title: "The Return of KB Cafe",
    date: "2026-06-18", tag: "News",
    excerpt: "kbcafe.com was a go-to developer resource in the early 2000s. Here's what it is now, and why we brought it back." },
  { slug: "rss-and-the-open-web-in-2026", title: "RSS Didn't Die, The Open Web Just Got Quiet",
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
