import ShinyText from '../components/ShinyText.jsx';
import SplitText from '../components/SplitText.jsx';
import Reveal from '../components/Reveal.jsx';

const STEPS = [
  ['01', 'Discover', 'We learn your brand, audience and goals — and walk the actual site or market before a single line is drawn.'],
  ['02', 'Design', 'Concepts, artwork and 3D mock-ups. You see exactly how it will look before anything is produced.'],
  ['03', 'Produce', 'Print, fabrication, LED and ACP work happen in-house with materials chosen to last in Tamil Nadu weather.'],
  ['04', 'Install & sustain', 'Our crew installs on-site and stays on call for maintenance, refreshes and the next campaign.'],
];

export default function Process() {
  return (
    <section className="process-section">
      <div className="container">
        <Reveal className="process-head">
          <div className="section-label">
            <ShinyText text="HOW WE WORK" speed={5} color="#E87722" shineColor="#FFFFFF" />
          </div>
          <h2 className="process-headline">
            <SplitText
              text="From brief to installed — one team, four moves"
              splitType="chars"
              delay={16}
              duration={0.8}
              ease="power4.out"
              tag="span"
            />
          </h2>
        </Reveal>

        <Reveal className="process-track" stagger={140}>
          {STEPS.map(([num, title, body]) => (
            <div className="process-step" key={num}>
              <span className="process-step-index" aria-hidden="true">{num}</span>
              <span className="process-node" aria-hidden="true" />
              <h3 className="process-step-title">{title}</h3>
              <p className="process-step-body">{body}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
