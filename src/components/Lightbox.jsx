import { useEffect, useState, useCallback, useRef } from 'react';

/**
 * Fullscreen image preview. Loads the high-res `full` image only when opened,
 * showing the LQIP blur until it decodes. Keyboard: ← → to navigate, Esc to close.
 * Touch: swipe left/right on mobile to navigate.
 */
export default function Lightbox({ items, index, onClose, onNavigate }) {
  const [loaded, setLoaded] = useState(false);
  const touchStartX = useRef(null);
  const item = index != null ? items[index] : null;

  const go = useCallback(
    delta => {
      if (index == null) return;
      const next = (index + delta + items.length) % items.length;
      setLoaded(false);
      onNavigate(next);
    },
    [index, items.length, onNavigate]
  );

  useEffect(() => {
    if (index == null) return;
    const onKey = e => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowRight') go(1);
      else if (e.key === 'ArrowLeft') go(-1);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [index, go, onClose]);

  if (item == null) return null;

  const handleTouchStart = e => {
    touchStartX.current = e.touches?.[0]?.clientX ?? null;
  };

  const handleTouchEnd = e => {
    if (touchStartX.current == null) return;
    const endX = e.changedTouches?.[0]?.clientX;
    if (endX != null) {
      const diff = touchStartX.current - endX;
      if (Math.abs(diff) > 45) {
        go(diff > 0 ? 1 : -1);
      }
    }
    touchStartX.current = null;
  };

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <button className="lightbox-close" aria-label="Close" onClick={onClose}>×</button>
      <button
        className="lightbox-nav lightbox-prev"
        aria-label="Previous"
        onClick={e => { e.stopPropagation(); go(-1); }}
      >‹</button>

      <figure className="lightbox-figure" onClick={e => e.stopPropagation()}>
        <div className="lightbox-imgwrap" style={{ backgroundImage: `url(${item.lqip})` }}>
          <img
            key={item.slug}
            src={item.full}
            alt={item.title}
            className={loaded ? 'is-loaded' : ''}
            onLoad={() => setLoaded(true)}
            draggable={false}
          />
          {!loaded && <span className="lightbox-spinner" aria-hidden="true" />}
        </div>
        <figcaption className="lightbox-caption">
          <span className="lightbox-title">{item.title}</span>
          <span className="lightbox-count">{index + 1} / {items.length}</span>
        </figcaption>
      </figure>

      <button
        className="lightbox-nav lightbox-next"
        aria-label="Next"
        onClick={e => { e.stopPropagation(); go(1); }}
      >›</button>
    </div>
  );
}
