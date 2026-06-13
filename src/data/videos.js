// The Number One Ads YouTube catalogue — @No1ads.
// Each entry: { id, title }. The id is the YouTube video id, used to build
// both the watch link and the thumbnail (https://i.ytimg.com/vi/<id>/hqdefault.jpg).
//
// To add a new film, drop another { id, title } at the top. To feature it on
// the home "Ads We've Shot & Released" strip, add its id to FEATURED_IDS below.

export const CHANNEL_URL = 'https://www.youtube.com/@No1ads';

const videos = [
  { id: 'JDQDdAx1LA4', title: 'Theni Anantham Silks - ARANMANAI OPENING 60sec FINAL' },
  { id: 'uy_to39Cz9s', title: 'SRI RADHA SILKS 60 SEC DIWALI' },
  { id: '6OK6O4_j6RY', title: 'Sastha Sesame Oil — 20 Sec TVC' },
  { id: 'c5XBC1hpAmY', title: 'Sathish Thanganagai Maaligai — Reopening Ad' },
  { id: 'EGu1BRT6CkI', title: 'Tulsi Diamonds Opening — Madurai (English)' },
  { id: '_dQsFS3AyO4', title: 'Anantham Silks RMD — Christmas' },
  { id: 'Gm2qKPqHPDI', title: 'Theni Anantham Subhalaya — 60 Sec' },
  { id: 'COIL0igYBDQ', title: 'Oviya TMJL Ad' },
  { id: 'llhJKxIEJQI', title: 'Diwali Reel — AI Ad' },
  { id: 'J3fQOjynmxs', title: 'Ganapathy Mart — Christmas AI Ad' },
  { id: 'n0aEOi3-teM', title: 'Ganapathy Mart — Aadi Sale Ad Shoot' },
  { id: 'wl7GpyG3RnI', title: 'Behind The Scenes — Nutrifreaks' },
  { id: 'pi2L3tn3W6A', title: 'Sastha — CG Video' },
  { id: 'FP46q1Z0ufk', title: 'Manila Oil — 15 Sec' },
  { id: 'u2eZOlfgTOU', title: 'AI Ad Video Promotion' },
];

// Ids featured on the home page "Ads We've Shot & Released" strip — our
// strongest in-house productions.
const FEATURED_IDS = ['JDQDdAx1LA4', 'uy_to39Cz9s', '6OK6O4_j6RY'];

export function watchUrl(id) {
  return `https://www.youtube.com/watch?v=${id}`;
}

export function thumbUrl(id) {
  return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
}

export const featuredVideos = FEATURED_IDS
  .map(id => videos.find(v => v.id === id))
  .filter(Boolean);

export default videos;
