import { Head } from 'vite-react-ssg';

const SITE_URL = 'https://no1ads.in';
const DEFAULT_IMAGE = `${SITE_URL}/assets/logo.png`;

/**
 * Per-page <head> manager. Renders title, description, canonical and the key
 * Open Graph / Twitter tags via vite-react-ssg's <Head>, so they are baked
 * into the prerendered static HTML (readable by AI crawlers and search bots
 * that don't execute JavaScript) and kept in sync during client navigation.
 */
export default function Seo({ title, description, path = '/', image = DEFAULT_IMAGE }) {
  const url = `${SITE_URL}${path}`;
  return (
    <Head>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href={url} />
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={image} />
    </Head>
  );
}
