/**
 * Build-time image optimizer for Number One Ads.
 *
 * Source art in "website creatives" is print-resolution (up to ~15MB/file) and
 * must never be shipped raw. This script reads it once, emits web-optimized WebP
 * derivatives into public/, and writes JSON manifests the React app maps over.
 *
 * For every image it produces:
 *   - {slug}-thumb.webp  grid display   (max 720px, q72)
 *   - {slug}-full.webp   lightbox view  (max 1800px, q80)   [gallery only]
 *   - lqip               24px blurred base64 data URI (inline in manifest)
 *
 * The F: drive has shown CRC read errors, so every file read is guarded — an
 * unreadable source is skipped and logged, never fatal.
 *
 * Run: node scripts/optimize-images.mjs
 */
import sharp from 'sharp';
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const CREATIVES = path.join(ROOT, 'website creatives');
const GALLERY_SRC = path.join(CREATIVES, 'Sample Design');
const SERVICES_SRC = path.join(CREATIVES, 'Creatives', 'No1 ads Services Image');

const OUT_GALLERY = path.join(ROOT, 'public', 'gallery');
const OUT_SERVICES = path.join(ROOT, 'public', 'services');
const DATA_DIR = path.join(ROOT, 'src', 'data');

const IMG_RE = /\.(jpe?g|png)$/i;

// Service folder -> { title, blurb }. Order defines display order.
const SERVICE_META = {
  'design': { title: 'Creative Design', blurb: 'Brand-led print & digital artwork crafted to the last pixel.' },
  'LED Signage': { title: 'LED Signage', blurb: 'High-impact illuminated displays that command attention day and night.' },
  'Signage Boards': { title: 'Signage Boards', blurb: 'Durable storefront and directional boards built to brand spec.' },
  'ACP Elevation': { title: 'ACP Elevation', blurb: 'Premium aluminium composite façades that transform building fronts.' },
  'Exhibition Stall': { title: 'Exhibition Stalls', blurb: 'Show-stopping stall design and on-site execution end to end.' },
  'Roadshow': { title: 'Roadshow & Outdoor', blurb: 'Mobile brand activations that take your story to the streets.' },
  'In-Shop': { title: 'In-Shop Branding', blurb: 'Retail interiors and point-of-sale that turn footfall into sales.' },
  'Backlight Board': { title: 'Backlit Boards', blurb: 'Glowing backlit panels for unmissable nighttime visibility.' },
  'Pylon Branding': { title: 'Pylon Branding', blurb: 'Tall freestanding totems that anchor a brand to its location.' },
  'Lamp Post Branding': { title: 'Lamp Post Branding', blurb: 'Street-level pole media that builds repeated brand exposure.' },
  'Standee': { title: 'Standees', blurb: 'Portable promotional displays for launches, stores and events.' },
  'Signage': { title: 'Signage Solutions', blurb: 'Complete signage systems engineered for clarity and longevity.' },
  'Auto Back Branding': { title: 'Auto Back Branding', blurb: 'Vehicle-rear advertising that turns every commute into reach.' },
};

function slugify(s) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

async function safeMkdir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function readImage(file) {
  // Read into a buffer first so a CRC/IO error surfaces here and is catchable.
  const buf = await fs.readFile(file);
  return sharp(buf, { failOn: 'none' });
}

async function makeLqip(img) {
  const buf = await img
    .clone()
    .resize(24, 24, { fit: 'inside' })
    .webp({ quality: 40 })
    .toBuffer();
  return `data:image/webp;base64,${buf.toString('base64')}`;
}

async function emit(img, outFile, width, quality) {
  await img
    .clone()
    .rotate() // honour EXIF orientation
    .resize(width, null, { withoutEnlargement: true })
    .webp({ quality })
    .toFile(outFile);
}

async function processGallery() {
  await safeMkdir(OUT_GALLERY);
  let entries;
  try {
    entries = await fs.readdir(GALLERY_SRC);
  } catch (e) {
    console.error('Cannot read gallery source:', e.message);
    return [];
  }
  const files = entries.filter(f => IMG_RE.test(f)).sort();
  const manifest = [];
  const skipped = [];
  const usedSlugs = new Set();

  for (const file of files) {
    const src = path.join(GALLERY_SRC, file);
    let slug = slugify(file.replace(IMG_RE, ''));
    // Distinct source files can collide on slug (e.g. "Post 3-01" vs "Post_3-01").
    // Keep slugs unique so output files and React keys never clash.
    if (usedSlugs.has(slug)) {
      let n = 2;
      while (usedSlugs.has(`${slug}-${n}`)) n++;
      slug = `${slug}-${n}`;
    }
    usedSlugs.add(slug);
    try {
      const img = await readImage(src);
      const meta = await img.metadata();
      // Skip tiny/low-res sources — keep the gallery premium.
      if ((meta.width || 0) < 500 && (meta.height || 0) < 500) {
        skipped.push(`${file} (low-res ${meta.width}x${meta.height})`);
        continue;
      }
      const oriented = meta.orientation && meta.orientation >= 5;
      const w = oriented ? meta.height : meta.width;
      const h = oriented ? meta.width : meta.height;

      await emit(img, path.join(OUT_GALLERY, `${slug}-thumb.webp`), 720, 72);
      await emit(img, path.join(OUT_GALLERY, `${slug}-full.webp`), 1800, 80);
      const lqip = await makeLqip(img);

      manifest.push({
        slug,
        title: prettyTitle(file),
        thumb: `/gallery/${slug}-thumb.webp`,
        full: `/gallery/${slug}-full.webp`,
        w,
        h,
        lqip,
      });
      process.stdout.write('.');
    } catch (e) {
      skipped.push(`${file} (${e.code || e.message})`);
    }
  }
  process.stdout.write('\n');
  if (skipped.length) console.warn(`Gallery skipped ${skipped.length}:`, skipped.join(', '));
  // Largest-area designs first = the most striking print pieces lead the grid.
  manifest.sort((a, b) => b.w * b.h - a.w * a.h);
  return manifest;
}

function prettyTitle(file) {
  let n = file.replace(IMG_RE, '');
  n = n.replace(/[_\-]+/g, ' ').replace(/\bcopy\b/gi, '').replace(/\b0?1\b/g, '').replace(/\s+/g, ' ').trim();
  if (!n || /^photo|^image|^\d+$/i.test(n)) return 'Creative Design';
  return n.replace(/\w\S*/g, t => t.charAt(0).toUpperCase() + t.slice(1));
}

async function pickServiceImage(dir, fileList) {
  // Try files in order until one reads cleanly (guards against CRC errors).
  for (const f of fileList) {
    try {
      const img = await readImage(path.join(dir, f));
      const meta = await img.metadata();
      if ((meta.width || 0) >= 500 || (meta.height || 0) >= 500) return { img, meta };
    } catch {
      /* try next */
    }
  }
  return null;
}

async function processServices() {
  await safeMkdir(OUT_SERVICES);
  const manifest = [];
  for (const folder of Object.keys(SERVICE_META)) {
    const dir = path.join(SERVICES_SRC, folder);
    let files;
    try {
      files = (await fs.readdir(dir)).filter(f => IMG_RE.test(f)).sort();
    } catch {
      console.warn(`Service folder missing: ${folder}`);
      continue;
    }
    const picked = await pickServiceImage(dir, files);
    if (!picked) {
      console.warn(`No readable image in: ${folder}`);
      continue;
    }
    const slug = slugify(folder);
    const { img, meta } = picked;
    const oriented = meta.orientation && meta.orientation >= 5;
    try {
      await emit(img, path.join(OUT_SERVICES, `${slug}.webp`), 900, 78);
      const lqip = await makeLqip(img);
      manifest.push({
        slug,
        title: SERVICE_META[folder].title,
        blurb: SERVICE_META[folder].blurb,
        image: `/services/${slug}.webp`,
        w: oriented ? meta.height : meta.width,
        h: oriented ? meta.width : meta.height,
        lqip,
        count: files.length,
      });
      process.stdout.write('.');
    } catch (e) {
      console.warn(`Failed service ${folder}: ${e.message}`);
    }
  }
  process.stdout.write('\n');
  return manifest;
}

async function main() {
  await safeMkdir(DATA_DIR);
  console.log('Optimizing gallery (Sample Design)...');
  const gallery = await processGallery();
  console.log(`  -> ${gallery.length} gallery images`);
  console.log('Optimizing services (No1 ads Services Image)...');
  const services = await processServices();
  console.log(`  -> ${services.length} services`);

  await fs.writeFile(path.join(DATA_DIR, 'gallery.json'), JSON.stringify(gallery, null, 2));
  await fs.writeFile(path.join(DATA_DIR, 'services.json'), JSON.stringify(services, null, 2));
  console.log('Manifests written to src/data/.');
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
