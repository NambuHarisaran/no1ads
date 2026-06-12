import { useState, useMemo, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import ShinyText from '../components/ShinyText.jsx';
import SplitText from '../components/SplitText.jsx';
import Reveal from '../components/Reveal.jsx';
import LazyImage from '../components/LazyImage.jsx';
import gallery from '../data/gallery.json';

// Lightbox is code-split — its JS loads only when a visitor opens an image.
const Lightbox = lazy(() => import('../components/Lightbox.jsx'));

const INITIAL_BATCH = 12;
const LOAD_MORE_BATCH = 12;

// Lightweight category inference from the creative's title.
const CATEGORIES = [
  ['All', () => true],
  ['Social Media', t => /social media|post/i.test(t)],
  ['Handbills & Print', t => /handbill|paper ad|broucher|brochure|poster/i.test(t)],
  ['Festive', t => /pongal|christmas|new year|republic|vinayagar|puthandu|akshaya|tamil new|labour day|maatu|diwali|chathurthi|thiruthi|festival/i.test(t)],
  ['Brand Design', t => /design|jewell|necklece|necklace|nechlece|mangalyam|ring|charm|spark|kruthi|anantham|swirl|minimal/i.test(t)],
];

/**
 * Reusable work grid + lightbox.
 *
 * Props:
 *  - showFilter  : render the category filter bar (Work page)
 *  - preview     : compact "featured" mode — caps items and shows a
 *                  "View all work" link instead of Load More (Home page)
 *  - heading/eyebrow/sub : section copy
 */
export default function Gallery({
  showFilter = false,
  preview = false,
  eyebrow = 'OUR WORK',
  heading = 'Built for Brands That Mean Business',
  sub = 'A quarter-century of campaigns, festivals and storefronts — every piece designed, printed and installed in-house.',
}) {
  const [open, setOpen] = useState(null);
  const [activeCat, setActiveCat] = useState('All');
  const [visibleCount, setVisibleCount] = useState(INITIAL_BATCH);

  const filtered = useMemo(() => {
    if (!showFilter || activeCat === 'All') return gallery;
    const match = CATEGORIES.find(([name]) => name === activeCat)?.[1] || (() => true);
    return gallery.filter(item => match(item.title));
  }, [showFilter, activeCat]);

  const cap = preview ? Math.min(visibleCount, 9) : visibleCount;
  const visibleItems = filtered.slice(0, cap);
  const hasMore = !preview && cap < filtered.length;
  const remaining = filtered.length - cap;

  function loadMore() {
    setVisibleCount(prev => Math.min(prev + LOAD_MORE_BATCH, filtered.length));
  }

  function selectCat(name) {
    setActiveCat(name);
    setVisibleCount(INITIAL_BATCH);
  }

  return (
    <section className="gallery-section" id="work">
      <div className="container">
        <Reveal>
          <div className="section-label">
            <ShinyText text={eyebrow} speed={5} color="#E87722" shineColor="#FFFFFF" />
          </div>
          <h2 className="headline">
            <SplitText
              text={heading}
              splitType="chars"
              delay={25}
              duration={0.8}
              ease="power4.out"
              tag="span"
            />
          </h2>
          <p className="gallery-sub">{sub}</p>
        </Reveal>

        {showFilter && (
          <div className="work-filter" role="tablist" aria-label="Filter work by category">
            {CATEGORIES.map(([name]) => (
              <button
                key={name}
                type="button"
                role="tab"
                aria-selected={activeCat === name}
                className={`work-filter-btn ${activeCat === name ? 'is-active' : ''}`}
                onClick={() => selectCat(name)}
              >
                {name}
              </button>
            ))}
          </div>
        )}

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

        {preview && (
          <Reveal>
            <div className="gallery-load-more">
              <Link to="/work" className="btn-orange">View All Work →</Link>
            </div>
          </Reveal>
        )}

        {hasMore && (
          <Reveal>
            <div className="gallery-load-more">
              <p className="gallery-load-more-count">
                Showing {visibleItems.length} of {filtered.length} projects
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
          <Lightbox items={visibleItems} index={open} onClose={() => setOpen(null)} onNavigate={setOpen} />
        </Suspense>
      )}
    </section>
  );
}
