// Valuable clients of Number One Ads, transcribed from the client wall.
// To show a real logo, drop a file at public/clients/<slug>.webp and set
// `logo: '/clients/<slug>.webp'` — until then a clean text wordmark renders
// automatically without firing 404 network requests (see BrandLogo + ClientsWall).
//
// sector: 'silks' | 'jewellery' | 'other'  (used only for grouping/filtering)

const clients = [
  { slug: 'anandam-silks', name: 'Anantham Silks', sector: 'silks' },
  { slug: 'thesi-anandam-silks', name: 'Theni Anantham Silks', sector: 'silks' },
  { slug: 'sri-radha-silks', name: 'Sri Radha Silks', sector: 'silks' },
  { slug: 'kumarappa-silks', name: 'Kumarappa Silks', sector: 'silks' },
  { slug: 'rk-silks', name: 'RK Silks', sector: 'silks' },
  { slug: 'the-chennai-silks', name: 'The Chennai Silks', sector: 'silks' },
  { slug: 'srikannan-silks', name: 'Srikannan Silks', sector: 'silks' },
  { slug: 'sri-aruna-silks', name: 'Sri Aruna Silks', sector: 'silks' },
  { slug: 'ramraj-cotton', name: 'Ramraj Cotton', sector: 'silks' },
  { slug: 'sri-kumarappa', name: 'Sri Kumarappa Silks', sector: 'silks' },
  { slug: 'thangamayil', name: 'Thangamayil Jewellery', sector: 'jewellery' },
  { slug: 'parani-silks', name: 'Parani Silks', sector: 'silks' },
  { slug: 'tulsi-diamonds', name: 'Tulsi Diamonds', sector: 'jewellery' },
  { slug: 'smj', name: 'SMJ Jewellers', sector: 'jewellery' },
  { slug: 'srj-seethaaram', name: 'SRJ Seethaaram Jewellers', sector: 'jewellery' },
  { slug: 'chakra-chains', name: 'Chakra Chains Jewellery', sector: 'jewellery' },
  { slug: 'sri-balagopalan', name: 'Sri Balagopalan Jewellery Mart', sector: 'jewellery' },
  { slug: 'sree-thangam', name: 'Sree Thangam Jewellery', sector: 'jewellery' },
  { slug: 'mankuzhali-jewellers', name: 'Mankuzhali Jewellers', sector: 'jewellery' },
  { slug: 'ovj-vasavi', name: 'OVJ Vasavi', sector: 'jewellery' },
  { slug: 'krt-thanga-maligai', name: 'KRT — K.R. Thanga Maligai', sector: 'jewellery' },
  { slug: 'sri-silver', name: 'Sri Silver', sector: 'jewellery' },
  { slug: 's-kumar-gold', name: 'S. Kumar Gold & Diamonds', sector: 'jewellery' },
  { slug: 'abc-gold', name: 'ABC Gold Palace', sector: 'jewellery' },
  { slug: 'saastha', name: 'Sastha Sesame Oil', sector: 'other' },
  { slug: 'jam-jam-spices', name: 'Jam Jam Spices', sector: 'other' },
  { slug: 'james-and-co', name: 'James & Co', sector: 'other' },
  { slug: 'preethi', name: 'Preethi', sector: 'other' },
  { slug: 'germanus-hotels', name: 'Germanus Hotels & Resorts', sector: 'other' },
  { slug: 'ibrizz-park', name: 'Ibrizz Park', sector: 'other' },
];

export default clients;
