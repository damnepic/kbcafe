// Answers and headlines hold a little HTML and a few typographic entities. plain() turns them into
// readable text for meta descriptions, JSON-LD and short previews. Turning &rsquo; into a space
// printed "the internet s phonebook" on the homepage and in search metadata until 2026-10-31.
const ENTITIES = { rsquo: "'", lsquo: "'", rdquo: '"', ldquo: '"', amp: '&', middot: '·', nbsp: ' ' };

export const plain = (s) => (s || '')
  .replace(/<[^>]+>/g, '')
  .replace(/&([a-z]+);/g, (_, name) => ENTITIES[name] ?? ' ')
  .replace(/\s+/g, ' ')
  .trim();

// Shortens text for a preview: the whole text if it fits, else its last full sentence inside the
// limit, else a cut at a word boundary with an ellipsis. Never ends mid-word.
export const clip = (s, max) => {
  if (s.length <= max) return s;
  const cut = s.slice(0, max);
  const stop = Math.max(cut.lastIndexOf('. '), cut.lastIndexOf('? '), cut.lastIndexOf('! '));
  if (stop >= max / 2) return cut.slice(0, stop + 1);
  return cut.replace(/\s+\S*$/, '').replace(/[\s,;:(]+$/, '') + '…';
};
