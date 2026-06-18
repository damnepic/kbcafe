// The menu. Tools with a real `href` are live; `soon:true` are on the roadmap.
// Keep cat values in sync with the homepage filter chips.
export const TOOLS = [
  { cat:"json",     ctl:"JSON",        nm:"json → typescript", ds:"Paste JSON, get a typed TS interface.",            color:"c-coral", href:"/json-to-typescript" },
  { cat:"encoding", ctl:"Encoding",    nm:"jwt decoder",       ds:"Decode & inspect JSON Web Tokens.",                color:"c-ink",   href:"/jwt-decoder" },
  { cat:"time",     ctl:"Time & Cron", nm:"cron generator",    ds:"Build & read crontab expressions, in plain English.", color:"c-gold", href:"/cron-generator" },
  { cat:"convert",  ctl:"Converters",  nm:"csv ⇄ json",        ds:"Convert tabular data both ways, instantly.",       color:"c-cream", soon:true },
  { cat:"json",     ctl:"JSON",        nm:"json → go",         ds:"Generate Go structs from any JSON payload.",       color:"c-cream", soon:true },
  { cat:"convert",  ctl:"Apache",      nm:".htaccess gen",     ds:"Redirects & rewrite rules, the easy way.",         color:"c-ink",   heritage:true, soon:true },
  { cat:"convert",  ctl:"Converters",  nm:"curl → code",       ds:"Turn a cURL command into fetch, axios, or Python.", color:"c-gold", soon:true },
  { cat:"convert",  ctl:"Converters",  nm:"yaml ⇄ json",       ds:"Swap between YAML and JSON cleanly.",              color:"c-coral", soon:true },
  { cat:"text",     ctl:"Text",        nm:"sql formatter",     ds:"Beautify and standardize messy SQL.",             color:"c-coral", soon:true },
  { cat:"text",     ctl:"Text",        nm:"case converter",    ds:"camelCase, snake_case, kebab, PascalCase.",       color:"c-cream", soon:true },
  { cat:"feeds",    ctl:"Feeds",       nm:"rss validator",     ds:"Check any feed against the spec.",                color:"c-gold", heritage:true, soon:true },
  { cat:"feeds",    ctl:"Feeds",       nm:"opml converter",    ds:"Import, view & convert OPML subscription lists.",  color:"c-ink",   heritage:true, soon:true },
];
