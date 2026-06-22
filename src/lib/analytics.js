// Thin, safe wrapper around GA4 (gtag) + Microsoft Clarity. Every helper is a
// no-op when analytics is not configured or when running during prerender
// (no `window`), so it is always safe to call from event handlers.
//
// The actual GA4 / Clarity script tags are injected by src/components/Analytics.jsx,
// gated behind the VITE_GA_ID / VITE_CLARITY_ID env vars.

export const GA_ID = import.meta.env.VITE_GA_ID || '';
export const CLARITY_ID = import.meta.env.VITE_CLARITY_ID || '';

/**
 * Send a custom event to whatever analytics is configured.
 * @param {string} name   Event name, e.g. 'generate_lead', 'call_click'.
 * @param {object} params Extra GA4 event parameters (location, service, …).
 */
export function track(name, params = {}) {
  if (typeof window === 'undefined' || !name) return;

  if (typeof window.gtag === 'function') {
    window.gtag('event', name, params);
  }
  // Clarity custom events take a single string label; tag the session too so
  // recordings can be filtered by what the visitor did.
  if (typeof window.clarity === 'function') {
    try {
      window.clarity('event', name);
    } catch {
      /* clarity not ready yet — ignore */
    }
  }
}
