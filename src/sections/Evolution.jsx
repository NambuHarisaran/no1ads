import ShinyText from '../components/ShinyText.jsx';
import SplitText from '../components/SplitText.jsx';
import Reveal from '../components/Reveal.jsx';

const ERAS = [
  ['Print Era', 'Ink, paper, typography — where every brand story began.', '2000–2003'],
  ['Outdoor Era', 'Hoardings, roadshows, visibility — owning the streetscape.', '2003–2008'],
  ['Broadcast Era', 'TVC, film, photography — brands brought to life on screen.', '2008–2018'],
  ['Digital Era', 'Social, digital, data — precision storytelling at scale.', '2018–2023'],
  ['AI Era', 'Artificial intelligence — personalized, proactive marketing.', '2023–Present'],
];

const STACK_COLORS = ['#808080', '#9C7355', '#C57539', '#E87722', '#ff6a00'];  

export default function Evolution() {
  return (
    <section className="evolution-section">
      <div className="container">
        <div className="evolution-grid">
          <div className="evolution-left">
            <Reveal>
              <div className="section-label">
                <ShinyText text="THE EVOLUTION" speed={5} color="#E87722" shineColor="#FFFFFF" />
              </div>
              <h2 className="headline">
                <SplitText
                  text="How Advertising Has Changed. How We've Stayed Ahead."
                  splitType="chars"
                  delay={20}
                  duration={0.8}
                  ease="power4.out"
                  tag="span"
                />
              </h2>
            </Reveal>
            <Reveal className="era-cards" stagger={150}>
              {ERAS.map(([name, desc, years]) => (
                <article className="era-card" key={name}>
                  <div className="era-ghost">{years}</div>
                  <h3 className="era-name">
                    <ShinyText text={name} speed={4} color="#E87722" shineColor="#FFFFFF" />
                  </h3>
                  <p className="era-desc">{desc}</p>
                  <span className="era-line" />
                </article>
              ))}
            </Reveal>
          </div>
          <Reveal className="evolution-right" stagger={120} aria-hidden="true">
            {ERAS.map(([name], i) => (
              <span key={name} style={{ color: STACK_COLORS[i] }}>{name}</span>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
