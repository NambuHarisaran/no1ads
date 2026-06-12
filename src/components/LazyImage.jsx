import { useEffect, useRef, useState } from 'react';

/**
 * Lazy, blur-up image with skeleton.
 *
 * - Reserves space via aspect-ratio (w/h) so there is zero layout shift / CLS.
 * - Shows the inline LQIP base64 (blurred) immediately as a placeholder.
 * - Only sets the real `src` once the element nears the viewport
 *   (IntersectionObserver, 300px rootMargin) — images off-screen never load.
 * - Fades the real image in over the blur on decode.
 */
export default function LazyImage({ src, lqip, alt, w, h, className = '', sizes, eager = false }) {
  const ref = useRef(null);
  const [near, setNear] = useState(eager);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (eager) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setNear(true);
          io.disconnect();
        }
      },
      { rootMargin: '300px 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [eager]);

  return (
    <div
      ref={ref}
      className={`lazy-img ${loaded ? 'is-loaded' : ''} ${className}`}
      style={{
        aspectRatio: w && h ? `${w} / ${h}` : undefined,
        backgroundImage: lqip ? `url(${lqip})` : undefined,
      }}
    >
      {near && (
        <img
          src={src}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          sizes={sizes}
          onLoad={() => setLoaded(true)}
          draggable={false}
        />
      )}
    </div>
  );
}
