import ShinyText from '../components/ShinyText.jsx';
import SplitText from '../components/SplitText.jsx';
import Reveal from '../components/Reveal.jsx';

const VALUES = [
  {
    no: '01',
    title: 'Trust first',
    body: 'A handshake in 2000 still means the same thing today. Most of our clients have stayed with us for over a decade — that is the only credential that matters.',
  },
  {
    no: '02',
    title: 'Craft, obsessively',
    body: 'Every pixel, every weld, every print pass is checked twice. We finish the work the way we would for our own brand, then once more.',
  },
  {
    no: '03',
    title: '360° under one roof',
    body: 'Design, print, fabrication and installation are all ours. No middlemen, no finger-pointing, no surprises on site.',
  },
  {
    no: '04',
    title: 'Always a step ahead',
    body: 'From hand-painted boards to AI-assisted campaigns, we have moved with every era of advertising — and led most of them locally.',
  },
];

export default function Values() {
  return (
    <section className="values-section">
      <div className="container values-layout">
        <div className="values-intro">
          <Reveal>
            <div className="section-label">
              <ShinyText text="WHAT WE STAND FOR" speed={5} color="#E87722" shineColor="#FFFFFF" />
            </div>
            <h2 className="values-headline">
              <SplitText
                text="Four things we refuse to compromise"
                splitType="chars"
                delay={18}
                duration={0.8}
                ease="power4.out"
                tag="span"
              />
            </h2>
            <p className="values-intro-text">
              Twenty-five years, every era of advertising — these are the constants that
              kept Madurai’s biggest brands coming back.
            </p>
          </Reveal>
        </div>

        <ol className="values-list">
          {VALUES.map(v => (
            <Reveal as="li" className="value-row" key={v.no}>
              <span className="value-row-no" aria-hidden="true">{v.no}</span>
              <div className="value-row-text">
                <h3 className="value-row-title">{v.title}</h3>
                <p className="value-row-body">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
