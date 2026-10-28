import { Head } from 'vite-react-ssg';
import ShinyText from '../components/ShinyText.jsx';
import Reveal from '../components/Reveal.jsx';
import faqs from '../data/faqs.js';
import site from '../data/siteConfig.js';

const faqSchema = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${site.url}/#faq`,
  mainEntity: faqs.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});

/**
 * Visible FAQ accordion. The same questions/answers feed the FAQPage
 * structured data injected via <Head> only on pages that visibly render <Faq />,
 * matching Google's structured data guidelines.
 */
export default function Faq({ heading = 'Frequently Asked Questions' }) {
  return (
    <section className="faq-section" id="faq" aria-labelledby="faq-heading">
      <Head>
        <script type="application/ld+json">{faqSchema}</script>
      </Head>
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
