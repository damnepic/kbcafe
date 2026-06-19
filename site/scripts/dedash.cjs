// Replace em dashes site-wide with grammatically correct punctuation.
// Overused em dashes read as AI-written; this swaps them for colons (term: definition)
// and commas (asides), then cleans up. En dashes (– ranges) are left alone.
const fs = require('fs'), path = require('path');
const EM = '—'; // — (em dash). NOT – (– en dash, kept for ranges)

const files = [];
(function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p);
    else if (/\.(astro|js)$/.test(e.name)) files.push(p);
  }
})('src');

const dash = '(?:' + EM + '|&mdash;)';
let totalRemoved = 0, changed = 0;
for (const f of files) {
  const before = fs.readFileSync(f, 'utf8');
  let s = before;
  // 1. "<strong>Term</strong> — definition" / "<code>x</code> — ..." -> colon
  s = s.replace(new RegExp('(</(?:strong|code)>)\\s*' + dash + '\\s*', 'g'), '$1: ');
  // 2. any other spaced em dash -> comma
  s = s.replace(new RegExp('\\s*' + dash + '\\s*', 'g'), ', ');
  // 3. cleanups
  s = s
    .replace(/,\s*([,;])/g, '$1')                                      // ", ," -> "," (only ,/; — NOT ,. (rgba alpha) or ,: ,! (CSS selectors / !important))
    .replace(/\(\s*,\s*/g, '(').replace(/,\s*\)/g, ')')                // "(, " / ", )"
    .replace(/:\s*,\s*/g, ': ')                                        // ": , " -> ": "
    .replace(/,\s*(<\/(?:p|li|h[1-6]|span|a|strong|em|summary|div)>)/g, '$1'); // trailing comma before close tag
  if (s !== before) {
    totalRemoved += (before.match(new RegExp(dash, 'g')) || []).length;
    changed++;
    fs.writeFileSync(f, s);
  }
}
console.log(`em dashes removed across ${changed} files: ${totalRemoved}`);
console.log('remaining em dashes:', files.reduce((n, f) => n + (fs.readFileSync(f, 'utf8').match(new RegExp(dash, 'g')) || []).length, 0));
