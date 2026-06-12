import Reveal from '../components/Reveal.jsx';

const BNI_MEMBER_URL =
  'https://bnimadurai.in/madurai-bni-chanakyaas/en-IN/memberdetails?encryptedMemberId=AHtWAzjKAR3ZABanIzloYg%3D%3D&cmsv3=true&name=Jaiganesh+A';

export default function BniBadge() {
  return (
    <section className="bni-section">
      <div className="container">
        <Reveal className="bni-card">
          <div className="bni-mark">
            <img src="/assets/bni.webp" alt="BNI — Business Network International" />
          </div>
          <div className="bni-body">
            <p className="bni-eyebrow">PROUD MEMBER · BNI CHANAKYAAS, MADURAI</p>
            <h3 className="bni-title">Backed by Madurai’s strongest business network</h3>
            <p className="bni-text">
              Number One Ads is an active member of BNI Chanakyaas, Madurai — a referral
              network of trusted local businesses. It’s how we connect our clients with the
              right partners, and how good work keeps coming back to us.
            </p>
            <a className="ghost-link" href={BNI_MEMBER_URL} target="_blank" rel="noreferrer">
              View our member profile →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
