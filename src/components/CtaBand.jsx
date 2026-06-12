import { Link } from 'react-router-dom';
import ShinyText from './ShinyText.jsx';
import SplitText from './SplitText.jsx';
import Reveal from './Reveal.jsx';

/**
 * Reusable closing call-to-action band. `variant="orange"` renders the bold
 * brand-orange block; the default dark variant suits pages that already end on
 * a light section.
 */
export default function CtaBand({
  eyebrow = 'LET\'S BUILD SOMETHING ICONIC',
  title = 'Ready to make your brand impossible to ignore?',
  text = 'From a single signboard to a city-wide campaign — tell us where you want to be seen.',
  buttonLabel = 'Start a Project →',
  to = '/contact',
  variant = 'dark',
}) {
  return (
    <section className={`cta-band cta-band--${variant}`}>
      <div className="container">
        <Reveal className="cta-band-inner">
          <div className="section-label">
            <ShinyText
              text={eyebrow}
              speed={5}
              color={variant === 'orange' ? '#0D0D0D' : '#E87722'}
              shineColor={variant === 'orange' ? '#FFFFFF' : '#FFFFFF'}
            />
          </div>
          <h2 className="cta-band-title">
            <SplitText text={title} splitType="words" delay={40} duration={0.7} ease="power3.out" tag="span" />
          </h2>
          <p className="cta-band-text">{text}</p>
          <Link to={to} className={variant === 'orange' ? 'btn-dark' : 'btn-orange'}>
            {buttonLabel}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
