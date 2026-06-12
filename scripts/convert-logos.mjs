import sharp from 'sharp';

// Some downloaded logos ship with a baked-in checkerboard "transparency" that
// is actually opaque light-grey pixels. Key those out (neutral + light) so the
// logo sits cleanly on a white card, then trim to the artwork bounds.
async function dropCheckerboard(src, out, width) {
  const { data, info } = await sharp(src).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i], g = data[i + 1], b = data[i + 2];
    const mx = Math.max(r, g, b);
    const mn = Math.min(r, g, b);
    if (mx > 205 && mx - mn < 18) data[i + 3] = 0; // light + neutral => transparent
  }
  const o = await sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
    .trim()
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 92 })
    .toFile(out);
  console.log('OK', out, o.width + 'x' + o.height, o.size + 'b');
}

const A = 'public/assets/';
await dropCheckerboard(A + '464750fbdba7d80270bfbd5e5b3bd3eb.webp', 'public/partners/google.webp', 300);
await dropCheckerboard(A + 'meta-ads-logo-png.webp', 'public/partners/meta.webp', 320);
