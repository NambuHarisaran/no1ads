// Single source of truth for business NAP (Name, Address, Phone) and contact
// data. Used by structured data (JSON-LD), the contact section, the footer and
// the lead CTAs. Update the two PLACEHOLDER values below with the real phone
// number and street address — everything else flows from here.

export const site = {
  name: 'Number One Ads',
  legalName: 'No.1 Tele Advertisers',
  url: 'https://no1ads.in',
  email: 'contact@no1ads.in',

  // Primary phone (international format) — used for click-to-call, WhatsApp
  // and structured data. Leave '' to hide click-to-call and omit from schema.
  phone: '+919843288864',
  // Optional secondary phone, shown alongside the primary in contact/footer.
  phoneSecondary: '+919843288863',
  // WhatsApp number (often same as phone). Leave '' to hide the WhatsApp CTA.
  whatsapp: '+919843288863',
  // Street address line(s). Leave '' to fall back to city-level only.
  streetAddress: '94/4A, Melakkal Main Road, Opp Jayabharath Housing, Kochadai',

  locality: 'Madurai',
  region: 'Tamil Nadu',
  postalCode: '625016',
  country: 'IN',
  geo: { latitude: 9.9252, longitude: 78.1198 },
  foundingYear: '2000',
  areaServed: 'Tamil Nadu, India',

  social: {
    facebook: 'https://www.facebook.com/no1teleadvertisors',
    instagram: 'https://www.instagram.com/no1teleadvertisers',
    youtube: 'https://www.youtube.com/@No1ads',
  },

  // Mon–Sat 09:30–19:00 is typical for the trade; adjust if needed.
  openingHours: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '09:30', closes: '19:00' },
  ],
};

// Pretty phone for display, e.g. '+91 98765 43210'. Defaults to the primary.
export function displayPhone(num = site.phone) {
  const p = (num || '').replace(/[^\d+]/g, '');
  const m = /^\+91(\d{5})(\d{5})$/.exec(p);
  return m ? `+91 ${m[1]} ${m[2]}` : num;
}

// wa.me link with a prefilled enquiry message.
export function whatsappLink(message = "Hi Number One Ads, I'd like to discuss a project.") {
  const num = site.whatsapp.replace(/[^\d]/g, '');
  return num ? `https://wa.me/${num}?text=${encodeURIComponent(message)}` : '';
}

export default site;
