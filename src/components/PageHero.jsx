import { Link } from 'react-router-dom';
import ShinyText from './ShinyText.jsx';
import SplitText from './SplitText.jsx';

/**
 * Standard inner-page header: breadcrumb, shiny eyebrow, split-animated title
 * and a supporting line. Keeps every sub-page visually consistent with Home.
 */
export default function PageHero({ eyebrow, title, subtitle, crumb }) {
  return (
    <header className="page-hero">
      <div className="page-hero-glow" aria-hidden="true" />
      <div className="container">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{crumb || title}</span>
        </nav>
        {eyebrow && (
          <div className="section-label page-hero-eyebrow">
            <ShinyText text={eyebrow} speed={5} color="#E87722" shineColor="#FFFFFF" />
          </div>
        )}
        <h1 className="page-hero-title">
          <SplitText
            text={title}
            splitType="chars"
            delay={18}
            duration={0.8}
            ease="power4.out"
            tag="span"
          />
        </h1>
        {subtitle && <p className="page-hero-sub">{subtitle}</p>}
      </div>
    </header>
  );
}
