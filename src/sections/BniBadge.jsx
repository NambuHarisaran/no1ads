import Reveal from '../components/Reveal.jsx';

const BNI_MEMBER_URL =
  'https://bnimadurai.in/madurai-bni-chanakyaas/en-IN/memberdetails?encryptedMemberId=AHtWAzjKAR3ZABanIzloYg%3D%3D&cmsv3=true&name=Jaiganesh+A';

const associations = [
  { src: '/assets/bni.webp', alt: 'BNI — Business Network International' },
  { src: '/assets/yes.png', alt: 'Association we are a proud member of' },
  { src: '/assets/abc.jpg', alt: 'Association we are a proud member of' },
];

export default function BniBadge() {
  return (
    <section className="bni-section">
      <div className="container">
        <Reveal className="bni-card">
          <div className="bni-marks">
            {associations.map(a => (
              <div className="bni-mark" key={a.src}>
                <img src={a.src} alt={a.alt} />
              </div>
            ))}
          </div>
          <div className="bni-body">
            <p className="bni-eyebrow">PROUD MEMBER · BNI CHANAKYAAS, MADURAI</p>
            <h3 className="bni-title">Backed by Madurai’s strongest business networks</h3>
            <a className="ghost-link" href={BNI_MEMBER_URL} target="_blank" rel="noreferrer">
              View our member profile →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
