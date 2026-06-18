// Generate the favicon set from the header cup logo (public/logo.png).
// Run: node scripts/gen-favicon.cjs
const sharp = require('sharp');
const _ico = require('png-to-ico');
const pngToIco = _ico.default || _ico;
const fs = require('fs');
const path = require('path');

const SRC = path.join(__dirname, '..', 'public', 'logo.png');
const OUT = path.join(__dirname, '..', 'public');
const CREAM = { r: 255, g: 252, b: 245, alpha: 1 }; // --cream #FFFCF5

// trimmed, tightly-cropped cup so it fills the icon canvas (best legibility at 16px)
async function transparentIcon(size) {
  return sharp(SRC)
    .trim()                                  // remove transparent border
    .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
}

// iOS adds rounded corners + shows transparency as black → give it a cream bg + a little padding
async function appleIcon(size) {
  const inner = Math.round(size * 0.84);
  const cup = await sharp(SRC).trim()
    .resize(inner, inner, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();
  return sharp({ create: { width: size, height: size, channels: 4, background: CREAM } })
    .composite([{ input: cup, gravity: 'center' }])
    .png()
    .toBuffer();
}

(async () => {
  const png16 = await transparentIcon(16);
  const png32 = await transparentIcon(32);
  const png48 = await transparentIcon(48);
  const png180 = await appleIcon(180);
  const png512 = await transparentIcon(512);

  fs.writeFileSync(path.join(OUT, 'favicon-16.png'), png16);
  fs.writeFileSync(path.join(OUT, 'favicon-32.png'), png32);
  fs.writeFileSync(path.join(OUT, 'apple-touch-icon.png'), png180);
  fs.writeFileSync(path.join(OUT, 'icon-512.png'), png512);

  const ico = await pngToIco([png16, png32, png48]);
  fs.writeFileSync(path.join(OUT, 'favicon.ico'), ico);

  // remove the old Astro scaffold favicon.svg so nothing references the wrong mark
  const svg = path.join(OUT, 'favicon.svg');
  if (fs.existsSync(svg)) fs.unlinkSync(svg);

  console.log('Generated: favicon.ico (16/32/48), favicon-16.png, favicon-32.png, apple-touch-icon.png (180, cream), icon-512.png');
})();
