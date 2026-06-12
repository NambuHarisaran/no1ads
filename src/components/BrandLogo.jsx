import { useState } from 'react';

/**
 * Renders a brand logo image from `src`. If the file is missing (or fails to
 * load), it falls back to a clean text wordmark so the layout never breaks and
 * the site looks complete before the real logo files are dropped in.
 *
 * Drop logo files into the matching /public folder using the documented slug
 * (e.g. public/clients/the-chennai-silks.webp) to replace the fallback.
 */
export default function BrandLogo({ src, name, className = '' }) {
  const [failed, setFailed] = useState(!src);

  if (failed) {
    return (
      <span className={`brand-logo brand-logo--text ${className}`} title={name}>
        {name}
      </span>
    );
  }

  return (
    <img
      className={`brand-logo brand-logo--img ${className}`}
      src={src}
      alt={name}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      draggable={false}
    />
  );
}
