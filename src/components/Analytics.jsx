import { Head } from 'vite-react-ssg';

// IDs are inlined at build time. When unset, this component renders nothing, so
// no analytics runs in dev / preview or before the accounts are created.
const GA_ID = import.meta.env.VITE_GA_ID;
const CLARITY_ID = import.meta.env.VITE_CLARITY_ID;

/**
 * Injects GA4 (gtag.js) and Microsoft Clarity into the document <head> via
 * vite-react-ssg's <Head>, so the snippets are baked into the prerendered HTML
 * and load as early as possible. Both are independently optional.
 *
 * Custom events are sent through src/lib/analytics.js → track().
 */
export default function Analytics() {
  if (!GA_ID && !CLARITY_ID) return null;

  return (
    <Head>
      {GA_ID && <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />}
      {GA_ID && (
        <script>{`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');
`}</script>
      )}
      {CLARITY_ID && (
        <script>{`
(function(c,l,a,r,i,t,y){
  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "${CLARITY_ID}");
`}</script>
      )}
    </Head>
  );
}
