// ═══════════════════════════════════════════════════════════
// WhatsLoyalty — Config (identidad WL única para todos)
// ═══════════════════════════════════════════════════════════

window.WL = window.WL || {};

WL.CONFIG = {
  SHEET_ID: '1xfrCxVtNkywVZWeQUH5VK6LPv-bOs9qeS6fRqwOpS0E',
  APPS_SCRIPT_URL: 'https://script.google.com/macros/s/AKfycbwNC8SRldaFHZ1UMnLoNKVhTRLK7EnNQnQXv-GjkE6CvIeAVn0KD1G__6TU7HYp7_TDmw/exec',
  SHARED_SECRET: 'patata-caliente-27',
  DEMO_MODE: false,  // ← true = localStorage local · false = Google Sheet real
};

WL.THEME = {
  paper:    '#F6F5F0', paper2:   '#ECEAE1', paper3:   '#E0DCCD',
  ink:      '#0A0F0C', ink3:     '#3d4540', ink4:     '#6b7570',
  line:     '#dcd9cc', green:    '#00C851', greenDeep:'#00a843',
  greenDark:'#04200f', whatsapp: '#25D366',
};

WL.BUSINESSES = [
  {
    id: 'polka', name: 'Polka', tagline: 'Tasca · Parte Vieja', sector: 'tasca',
    city: 'San Sebastián', address: 'Calle Fermín Calbetón, 11',
    phone: '+34 943 42 XX XX', whatsapp: '+34 612 345 001',
    currency: 'puntos', ratio: { spend: 1, points: 1 }, welcome_points: 50,
    review_url: 'https://g.page/r/polka-donosti/review',
    rewards: [
      { id: 'pintxo', name: 'Pintxo del día', cost: 80, icon: '🍢' },
      { id: 'vino',   name: 'Copa de txakoli', cost: 120, icon: '🍷' },
      { id: 'racion', name: 'Ración a compartir', cost: 250, icon: '🫕' },
      { id: 'cena',   name: 'Cena para 2', cost: 600, icon: '🎉', featured: true },
    ],
    spin_every: 5,
    spin_prizes: [
      { label: '+10 pts', value: 10, type: 'points' },
      { label: 'Pintxo gratis', value: 'pintxo', type: 'reward' },
      { label: '+25 pts', value: 25, type: 'points' },
      { label: 'Copa txakoli', value: 'vino', type: 'reward' },
      { label: '+5 pts', value: 5, type: 'points' },
      { label: 'Sorpresa chef', value: 'sorpresa', type: 'special' },
    ],
  },
  {
    id: 'alai', name: 'Clínica Dental Alai', tagline: 'Salud dental · Irun', sector: 'dental',
    city: 'Irun', address: 'Avenida de Elizatxo, 24',
    phone: '+34 943 63 XX XX', whatsapp: '+34 612 345 002',
    currency: 'visitas', ratio: { spend: 1, points: 0 }, welcome_points: 1,
    review_url: 'https://g.page/r/alai-dental/review',
    rewards: [
      { id: 'limpieza', name: 'Limpieza gratis', cost: 4, icon: '🦷' },
      { id: 'blanqueo', name: 'Blanqueamiento -30%', cost: 6, icon: '✨' },
      { id: 'revision', name: 'Revisión + ortopantomografía', cost: 3, icon: '📋' },
    ],
    spin_every: 0, spin_prizes: [],
  },
  {
    id: 'chiquita', name: 'LaChiquita', tagline: 'Moda · Centro', sector: 'moda',
    city: 'San Sebastián', address: 'Calle San Marcial, 33',
    phone: '+34 943 42 XX XX', whatsapp: '+34 612 345 003',
    currency: 'puntos', ratio: { spend: 10, points: 1 }, welcome_points: 5,
    review_url: 'https://g.page/r/lachiquita/review',
    rewards: [
      { id: 'cumple',   name: '-15% en tu cumpleaños', cost: 0, icon: '🎂', auto: true },
      { id: 'preview',  name: 'Preview colección privada', cost: 10, icon: '👗' },
      { id: 'descuento',name: '-10% próxima compra', cost: 15, icon: '🛍️' },
      { id: 'personal', name: 'Personal shopper (1h)', cost: 40, icon: '✨', featured: true },
    ],
    spin_every: 5,
    spin_prizes: [
      { label: '-10%', value: 10, type: 'discount' },
      { label: '+5 pts', value: 5, type: 'points' },
      { label: 'Drop privado', value: 'preview', type: 'reward' },
      { label: '-20%', value: 20, type: 'discount' },
      { label: '+10 pts', value: 10, type: 'points' },
      { label: 'Regalo sorpresa', value: 'sorpresa', type: 'special' },
    ],
  },
  {
    id: 'littlemaria', name: 'Little Maria', tagline: 'Moda infantil · Loiola', sector: 'infantil',
    city: 'San Sebastián', address: 'Calle Loiola, 8',
    phone: '+34 943 42 XX XX', whatsapp: '+34 612 345 004',
    currency: 'puntos', ratio: { spend: 10, points: 1 }, welcome_points: 10,
    review_url: 'https://g.page/r/littlemaria/review',
    rewards: [
      { id: 'talla',    name: 'Aviso nueva talla', cost: 0, icon: '📏', auto: true },
      { id: 'body',     name: 'Body o camiseta gratis', cost: 20, icon: '👶' },
      { id: 'regalo',   name: 'Regalo cumple del peque', cost: 0, icon: '🎁', auto: true },
      { id: 'conjunto', name: '-20% conjunto completo', cost: 50, icon: '👗' },
    ],
    spin_every: 5,
    spin_prizes: [
      { label: 'Calcetines', value: 'calcetines', type: 'special' },
      { label: '+10 pts', value: 10, type: 'points' },
      { label: '-15%', value: 15, type: 'discount' },
      { label: 'Body gratis', value: 'body', type: 'reward' },
      { label: '+5 pts', value: 5, type: 'points' },
      { label: 'Sorpresa', value: 'sorpresa', type: 'special' },
    ],
  },
  {
    id: 'aita', name: 'Centro Podología Aita', tagline: 'Podología · Irun', sector: 'podologia',
    city: 'Irun', address: 'Calle Zubiaurre, 12',
    phone: '+34 943 63 XX XX', whatsapp: '+34 612 345 005',
    currency: 'sesiones', ratio: { spend: 1, points: 0 }, welcome_points: 0,
    review_url: 'https://g.page/r/aita-podo/review',
    rewards: [
      { id: 'quinta',     name: '5ª sesión gratis', cost: 4, icon: '🎁', featured: true },
      { id: 'plantillas', name: '-25% plantillas personalizadas', cost: 6, icon: '👣' },
      { id: 'revision',   name: 'Revisión anual gratuita', cost: 8, icon: '✅' },
    ],
    spin_every: 0, spin_prizes: [],
  },
];

WL.SCRATCH_PRIZES = [
  { id: 'p10', label: '+10 pts bonus', weight: 35, type: 'points', value: 10 },
  { id: 'p20', label: '+20 pts bonus', weight: 25, type: 'points', value: 20 },
  { id: 'p50', label: '+50 pts bonus', weight: 10, type: 'points', value: 50 },
  { id: 'gratis', label: 'Café/pintxo gratis 1ª visita', weight: 30, type: 'special', value: 'first_visit' },
];

WL.getBusiness = function(id) {
  return WL.BUSINESSES.find(b => b.id === id) || WL.BUSINESSES[0];
};

WL.urlParam = function(name) {
  const url = new URL(window.location.href);
  return url.searchParams.get(name);
};

WL.pickScratchPrize = function() {
  const total = WL.SCRATCH_PRIZES.reduce((s,p) => s + p.weight, 0);
  let r = Math.random() * total;
  for (const p of WL.SCRATCH_PRIZES) {
    r -= p.weight;
    if (r <= 0) return p;
  }
  return WL.SCRATCH_PRIZES[0];
};
