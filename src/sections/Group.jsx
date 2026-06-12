import ShinyText from '../components/ShinyText.jsx';
import SplitText from '../components/SplitText.jsx';
import Reveal from '../components/Reveal.jsx';
import BrandLogo from '../components/BrandLogo.jsx';
import group from '../data/group.js';

export default function Group() {
  return (
    <section className="group-section" id="group">
      <div className="container">
        <Reveal className="group-head">
          <div className="section-label">
            <ShinyText text="ONE GROUP, THREE SPECIALISTS" speed={5} color="#E87722" shineColor="#FFFFFF" />
          </div>
          <h2 className="group-headline">
            <SplitText
              text="The Number One Ads Group"
              splitType="chars"
              delay={18}
              duration={0.8}
              ease="power4.out"
              tag="span"
            />
          </h2>
          <p className="group-intro">
            Three companies under one roof — so a single brief can move from idea to artwork
            to fabricated signage to bus media without ever leaving the family.
          </p>
        </Reveal>

        <div className="group-rows">
          {group.map((co, i) => {
            const Inner = (
              <>
                <span className="group-row-index" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                <span className="group-row-logo">
                  <BrandLogo src={co.logo || `/group/${co.slug}.webp`} name={co.name} className="group-logo" />
                </span>
                <span className="group-row-main">
                  <span className="group-row-tagline">{co.tagline}</span>
                  <span className="group-row-desc">{co.description}</span>
                </span>
                <span className="group-row-link">
                  {co.external ? 'Visit website' : 'You are here'}
                  <span className="group-row-arrow" aria-hidden="true">→</span>
                </span>
              </>
            );
            return co.external ? (
              <Reveal as="a" className="group-row" key={co.slug} href={co.url} target="_blank" rel="noreferrer">
                {Inner}
              </Reveal>
            ) : (
              <Reveal className="group-row group-row--current" key={co.slug}>
                {Inner}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
