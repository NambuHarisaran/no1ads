import { useState, lazy, Suspense } from 'react';
import ShinyText from '../components/ShinyText.jsx';
import SplitText from '../components/SplitText.jsx';
import Reveal from '../components/Reveal.jsx';
import LazyImage from '../components/LazyImage.jsx';
import gallery from '../data/gallery.json';

// Lightbox is code-split — its JS loads only when a visitor opens an image.
const Lightbox = lazy(() => import('../components/Lightbox.jsx'));

const INITIAL_BATCH = 12;
const LOAD_MORE_BATCH = 12;

export default function Gallery() {
  const [open, setOpen] = useState(null);
  const [visibleCount, setVisibleCount] = useState(INITIAL_BATCH);

  const visibleItems = gallery.slice(0, visibleCount);
  const hasMore = visibleCount < gallery.length;
  const remaining = gallery.length - visibleCount;

  function loadMore() {
    setVisibleCount(prev => Math.min(prev + LOAD_MORE_BATCH, gallery.length));
  }

  return (
    <section className="gallery-section" id="work">
      <div className="container">
        <Reveal>
          <div className="section-label">
            <ShinyText text="OUR WORK" speed={5} color="#E87722" shineColor="#FFFFFF" />
          </div>
          <h2 className="headline">
            <SplitText
              text="Built for Brands That Mean Business"
              splitType="chars"
              delay={25}
              duration={0.8}
              ease="power4.out"
              tag="span"
            />
          </h2>
          <p className="gallery-sub">
            A quarter-century of campaigns, festivals and storefronts — every piece designed, printed and installed in-house.
          </p>
        </Reveal>

        <div className="masonry">
          {visibleItems.map((item, i) => (
            <button
              key={item.slug}
              className="masonry-item"
              onClick={() => setOpen(i)}
              aria-label={`View ${item.title}`}
            >
              <LazyImage
                src={item.thumb}
                lqip={item.lqip}
                alt={item.title}
                w={item.w}
                h={item.h}
                sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 33vw"
              />
              <span className="masonry-overlay">
                <span className="masonry-view">View →</span>
              </span>
            </button>
          ))}
        </div>

        {hasMore && (
          <Reveal>
            <div className="gallery-load-more">
              <p className="gallery-load-more-count">
                Showing {visibleCount} of {gallery.length} projects
              </p>
              <button type="button" className="btn-orange" onClick={loadMore}>
                Load More ({Math.min(remaining, LOAD_MORE_BATCH)} more)
              </button>
            </div>
          </Reveal>
        )}
      </div>

      {open != null && (
        <Suspense fallback={null}>
          <Lightbox items={gallery} index={open} onClose={() => setOpen(null)} onNavigate={setOpen} />
        </Suspense>
      )}
    </section>
  );
}
