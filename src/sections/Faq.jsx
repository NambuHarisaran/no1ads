import ShinyText from '../components/ShinyText.jsx';
import Reveal from '../components/Reveal.jsx';
import faqs from '../data/faqs.js';

/**
 * Visible FAQ accordion. The same questions/answers feed the FAQPage
 * structured data injected at build time, so what users read matches what
 * search and AI engines index. Native <details> keeps it accessible and works
 * even before hydration.
 */
export default function Faq({ heading = 'Frequently Asked Questions' }) {
  return (
    <section className="faq-section" id="faq" aria-labelledby="faq-heading">
      <div className="container">
        <Reveal>
          <div className="section-label">
            <ShinyText text="QUESTIONS & ANSWERS" speed={5} color="#E87722" shineColor="#FFFFFF" />
          </div>
          <h2 className="faq-heading" id="faq-heading">{heading}</h2>
        </Reveal>
        <Reveal className="faq-list" stagger={80}>
          {faqs.map((f, i) => (
            <details className="faq-item" key={i} name="faq">
              <summary className="faq-q">
                <span>{f.q}</span>
                <span className="faq-icon" aria-hidden="true" />
              </summary>
              <div className="faq-a"><p>{f.a}</p></div>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
