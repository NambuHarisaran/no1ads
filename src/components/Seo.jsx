import { useEffect } from 'react';

const SITE_URL = 'https://no1ads.in';
const DEFAULT_IMAGE = `${SITE_URL}/assets/logo.png`;

/**
 * Lightweight per-page <head> manager. Updates document.title, the meta
 * description, canonical link, and the key Open Graph / Twitter tags whenever a
 * route mounts. No external dependency — just imperative DOM updates in an
 * effect, which is plenty for a static SPA that is also prerender-friendly.
 */
function setMeta(attr, key, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

export default function Seo({ title, description, path = '/', image = DEFAULT_IMAGE }) {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;
    if (title) document.title = title;

    setMeta('name', 'description', description);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:image', image);
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', image);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);
  }, [title, description, path, image]);

  return null;
}
