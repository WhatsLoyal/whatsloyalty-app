// ═══════════════════════════════════════════════════════════
// WhatsLoyalty — DB en memoria + features V2
// ═══════════════════════════════════════════════════════════

window.WL = window.WL || {};

const NOMBRES = ['Ane','Jon','Maite','Iker','Nerea','Xabi','Leire','Aitor','Miren','Unai','Eneko','Irati','Mikel','Oihana','Asier','Garazi','Markel','Amaia','Haritz','Naia','Oier','Uxue','Ibai','Lur','Ander','June','Erik','Nahia','Beñat','Izaro','Pablo','Lucia','Marta','Carlos','Sara'];
const APELLIDOS = ['Etxeberria','Aguirre','Bilbao','Iturbe','Mendizabal','Zulaika','Azkue','Olaizola','Goikoetxea','Urresti','Larrañaga','Ormazabal','Eskisabel','Beitia','Zabala','Aranburu','Lazkano','Goenaga','Erkoreka','Agirrezabal'];

function seedRand(seed) {
  let s = seed;
  return () => { s = (s * 9301 + 49297) % 233280; return s / 233280; };
}

function generateDemoCustomers(business, count = 30) {
  const rand = seedRand(business.id.charCodeAt(0) * 1000 + business.id.length);
  const customers = [];
  const now = Date.now();
  const DAY = 86400000;

  for (let i = 0; i < count; i++) {
    const nombre = NOMBRES[Math.floor(rand() * NOMBRES.length)];
    const apellido = APELLIDOS[Math.floor(rand() * APELLIDOS.length)];
    const phoneNum = 600000000 + Math.floor(rand() * 99999999);
    const daysAgo = Math.floor(rand() * 14);
    const joinedAt = now - daysAgo * DAY - Math.floor(rand() * DAY);

    const txCount = Math.max(1, Math.floor((14 - daysAgo) * rand() * 0.8) + 1);
    const transactions = [];
    let balance = business.welcome_points;

    transactions.push({
      id: `tx_${i}_w`, customer_id: `c_${business.id}_${i}`, business_id: business.id,
      type: 'welcome', amount: 0, points: business.welcome_points,
      created_at: joinedAt, note: 'Bienvenida',
    });

    for (let t = 0; t < txCount; t++) {
      const txDays = Math.floor(rand() * (daysAgo + 1));
      const txAt = joinedAt + txDays * DAY + Math.floor(rand() * DAY);
      if (txAt > now) continue;

      let type, amount, points;
      const roll = rand();

      if (roll < 0.85) {
        type = 'sale';
        if (business.sector === 'dental' || business.sector === 'podologia') {
          amount = 50 + Math.floor(rand() * 150); points = 1;
        } else if (business.sector === 'moda' || business.sector === 'infantil') {
          amount = 30 + Math.floor(rand() * 180); points = Math.floor(amount / business.ratio.spend);
        } else {
          amount = 5 + Math.floor(rand() * 40); points = Math.floor(amount / business.ratio.spend);
        }
        balance += points;
      } else if (roll < 0.95 && balance >= 80) {
        const reward = business.rewards.find(r => r.cost <= balance && r.cost > 0);
        if (!reward) continue;
        type = 'redeem'; amount = 0; points = -reward.cost; balance += points;
      } else continue;

      transactions.push({
        id: `tx_${i}_${t}`, customer_id: `c_${business.id}_${i}`, business_id: business.id,
        type, amount, points, created_at: txAt,
        note: type === 'redeem' ? `Canje: ${business.rewards.find(r => r.cost === -points)?.name || ''}` : '',
      });
    }

    transactions.sort((a, b) => a.created_at - b.created_at);
    const lastActivity = transactions[transactions.length - 1]?.created_at || joinedAt;
    const visits = transactions.filter(t => t.type === 'sale').length;

    customers.push({
      id: `c_${business.id}_${i}`,
      business_id: business.id,
      name: nombre, surname: apellido,
      phone: `+34 ${phoneNum}`,
      balance,
      joined_at: joinedAt,
      last_activity: lastActivity,
      transactions,
      total_spent: transactions.filter(t => t.type === 'sale').reduce((s,t) => s + t.amount, 0),
      visits,
      scratch_used: rand() < 0.7,
      spins_used: Math.floor(visits / (business.spin_every || 999)),
      spins_available: Math.max(0, Math.floor(visits / (business.spin_every || 999)) - Math.floor(visits / (business.spin_every || 999) * 0.6)),
      reviews_asked: rand() < 0.3,
      reviews_left: rand() < 0.15,
    });
  }

  return customers.sort((a,b) => b.last_activity - a.last_activity);
}

// ─── Cliente HTTP al Apps Script (modo LIVE) ──────────────
WL.api = {
  async call(action, payload) {
    if (!WL.CONFIG.APPS_SCRIPT_URL) throw new Error('APPS_SCRIPT_URL not configured');
    const body = { secret: WL.CONFIG.SHARED_SECRET, action, ...payload };
    // Content-Type text/plain evita el preflight CORS con Apps Script
    const r = await fetch(WL.CONFIG.APPS_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(body),
      redirect: 'follow',
    });
    if (!r.ok) throw new Error('HTTP ' + r.status);
    const data = await r.json();
    if (data.error) throw new Error(data.error);
    return data;
  },
};

WL.db = {
  _customers: null,
  _listeners: [],

  init() {
    if (this._customers) return;
    this._customers = {};
    WL.BUSINESSES.forEach(b => { this._customers[b.id] = generateDemoCustomers(b, 30); });
    try {
      const saved = localStorage.getItem('wl_live_db_v2');
      if (saved) {
        const parsed = JSON.parse(saved);
        Object.keys(parsed).forEach(bid => { if (this._customers[bid]) this._customers[bid] = parsed[bid]; });
      }
    } catch(e) {}
    // En LIVE mode: tirar del servidor en cuanto se pueda
    if (!WL.CONFIG.DEMO_MODE && WL.CONFIG.APPS_SCRIPT_URL) {
      this._refreshFromServer().catch(e => console.warn('[WL] initial sync fail', e));
    }
  },

  async _refreshFromServer() {
    if (WL.CONFIG.DEMO_MODE) return;
    const results = await Promise.all(WL.BUSINESSES.map(b =>
      WL.api.call('get_dashboard_data', { business_id: b.id })
        .then(r => ({ id: b.id, data: r }))
        .catch(e => ({ id: b.id, data: null, error: e.message }))
    ));
    results.forEach(({ id, data }) => {
      if (!data || !data.customers) return;
      // Reconstruir customers en el formato que espera la app
      const txByCustomer = {};
      (data.transactions || []).forEach(t => {
        (txByCustomer[t.customer_id] = txByCustomer[t.customer_id] || []).push({
          ...t,
          created_at: new Date(t.created_at).getTime(),
        });
      });
      this._customers[id] = (data.customers || []).map(c => ({
        id: c.id,
        business_id: c.business_id,
        name: c.name,
        surname: c.surname || '',
        phone: c.phone,
        balance: Number(c.balance) || 0,
        joined_at: new Date(c.joined_at).getTime(),
        last_activity: new Date(c.last_activity).getTime(),
        total_spent: Number(c.total_spent) || 0,
        visits: Number(c.visits) || 0,
        scratch_used: c.scratch_used === true || c.scratch_used === 'TRUE',
        spins_available: Number(c.spins_available) || 0,
        spins_used: 0,
        reviews_asked: false,
        reviews_left: c.reviews_left === true || c.reviews_left === 'TRUE',
        transactions: (txByCustomer[c.id] || []).sort((a,b) => a.created_at - b.created_at),
      }));
    });
    this._listeners.forEach(fn => fn());
  },

  _persist() {
    try { localStorage.setItem('wl_live_db_v2', JSON.stringify(this._customers)); } catch(e) {}
    this._listeners.forEach(fn => fn());
  },

  reset() {
    try { localStorage.removeItem('wl_live_db_v2'); } catch(e) {}
    this._customers = null; this.init();
    this._listeners.forEach(fn => fn());
  },

  onChange(fn) { this._listeners.push(fn); return () => { this._listeners = this._listeners.filter(f => f !== fn); }; },

  getCustomers(businessId) { this.init(); return this._customers[businessId] || []; },
  getCustomer(businessId, customerId) { return this.getCustomers(businessId).find(c => c.id === customerId); },

  addSale(businessId, customerId, amount) {
    const business = WL.getBusiness(businessId);
    const customer = this.getCustomer(businessId, customerId);
    if (!customer) return null;
    const points = (business.sector === 'dental' || business.sector === 'podologia') ? 1 : Math.floor(amount / business.ratio.spend);
    const tx = { id: 'tx_' + Date.now(), customer_id: customerId, business_id: businessId, type: 'sale', amount, points, created_at: Date.now(), note: '' };
    customer.transactions.push(tx);
    customer.balance += points;
    customer.total_spent += amount;
    customer.visits += 1;
    customer.last_activity = Date.now();
    if (business.spin_every && customer.visits > 0 && customer.visits % business.spin_every === 0) {
      customer.spins_available = (customer.spins_available || 0) + 1;
    }
    this._persist();
    // LIVE: replicar al servidor en background
    if (!WL.CONFIG.DEMO_MODE) {
      WL.api.call('add_sale', { business_id: businessId, customer_id: customerId, amount })
        .catch(e => console.warn('[WL] add_sale sync fail', e));
    }
    return { tx, spin_unlocked: business.spin_every && customer.visits % business.spin_every === 0 };
  },

  addRedeem(businessId, customerId, rewardId) {
    const business = WL.getBusiness(businessId);
    const customer = this.getCustomer(businessId, customerId);
    const reward = business.rewards.find(r => r.id === rewardId);
    if (!customer || !reward) return null;
    if (customer.balance < reward.cost) return { error: 'insufficient' };
    const tx = { id: 'tx_' + Date.now(), customer_id: customerId, business_id: businessId, type: 'redeem', amount: 0, points: -reward.cost, created_at: Date.now(), note: `Canje: ${reward.name}` };
    customer.transactions.push(tx);
    customer.balance -= reward.cost;
    customer.last_activity = Date.now();
    customer.reviews_asked = true;
    this._persist();
    if (!WL.CONFIG.DEMO_MODE) {
      WL.api.call('add_redeem', { business_id: businessId, customer_id: customerId, reward_id: rewardId })
        .catch(e => console.warn('[WL] add_redeem sync fail', e));
    }
    return { tx, ask_review: true };
  },

  addCustomer(businessId, name, phone) {
    const business = WL.getBusiness(businessId);
    const id = 'c_' + businessId + '_' + Date.now();
    const customer = {
      id, business_id: businessId, name, surname: '', phone,
      balance: business.welcome_points,
      joined_at: Date.now(), last_activity: Date.now(),
      transactions: [{ id: 'tx_' + Date.now(), customer_id: id, business_id: businessId, type: 'welcome', amount: 0, points: business.welcome_points, created_at: Date.now(), note: 'Bienvenida' }],
      total_spent: 0, visits: 0,
      scratch_used: false, spins_used: 0, spins_available: 0,
      reviews_asked: false, reviews_left: false,
    };
    this._customers[businessId].unshift(customer);
    this._persist();
    // LIVE: crear también en el servidor y sustituir id local por el del servidor
    if (!WL.CONFIG.DEMO_MODE) {
      WL.api.call('create_customer', { business_id: businessId, name, phone })
        .then(res => {
          if (res && res.customer_id && res.customer_id !== id) {
            // actualizar id localmente para futuras ops
            customer.id = res.customer_id;
            customer.transactions.forEach(t => t.customer_id = res.customer_id);
            this._persist();
          }
        })
        .catch(e => console.warn('[WL] create_customer sync fail', e));
    }
    return customer;
  },

  applyScratch(businessId, customerId, prize) {
    const customer = this.getCustomer(businessId, customerId);
    if (!customer || customer.scratch_used) return null;
    customer.scratch_used = true;
    if (prize.type === 'points') {
      customer.balance += prize.value;
      customer.transactions.push({ id: 'tx_' + Date.now(), customer_id: customerId, business_id: businessId, type: 'scratch', amount: 0, points: prize.value, created_at: Date.now(), note: `Rasca: ${prize.label}` });
    }
    this._persist();
    return prize;
  },

  applySpin(businessId, customerId, prize) {
    const customer = this.getCustomer(businessId, customerId);
    if (!customer || !customer.spins_available) return null;
    customer.spins_available -= 1;
    customer.spins_used = (customer.spins_used || 0) + 1;
    if (prize.type === 'points') customer.balance += prize.value;
    customer.transactions.push({ id: 'tx_' + Date.now(), customer_id: customerId, business_id: businessId, type: 'spin', amount: 0, points: prize.type === 'points' ? prize.value : 0, created_at: Date.now(), note: `Ruleta: ${prize.label}` });
    this._persist();
    return prize;
  },

  markReviewLeft(businessId, customerId) {
    const customer = this.getCustomer(businessId, customerId);
    if (!customer) return;
    customer.reviews_left = true;
    customer.balance += 20;
    customer.transactions.push({ id: 'tx_' + Date.now(), customer_id: customerId, business_id: businessId, type: 'review', amount: 0, points: 20, created_at: Date.now(), note: 'Reseña Google · +20 pts' });
    this._persist();
  },

  getStats(businessId) {
    const customers = this.getCustomers(businessId);
    const now = Date.now(); const DAY = 86400000; const WEEK = 7 * DAY;
    const allTx = customers.flatMap(c => c.transactions);
    const salesThisWeek = allTx.filter(t => t.type === 'sale' && now - t.created_at < WEEK);
    const salesLastWeek = allTx.filter(t => t.type === 'sale' && now - t.created_at >= WEEK && now - t.created_at < 2*WEEK);
    const redeemsThisWeek = allTx.filter(t => t.type === 'redeem' && now - t.created_at < WEEK);
    const newThisWeek = customers.filter(c => now - c.joined_at < WEEK);
    const revenueWeek = salesThisWeek.reduce((s,t) => s + t.amount, 0);
    const revenueLastWeek = salesLastWeek.reduce((s,t) => s + t.amount, 0);
    return {
      total_customers: customers.length,
      new_this_week: newThisWeek.length,
      sales_this_week: salesThisWeek.length,
      redeems_this_week: redeemsThisWeek.length,
      revenue_week: revenueWeek,
      revenue_prev_week: revenueLastWeek,
      revenue_change: revenueLastWeek ? ((revenueWeek - revenueLastWeek) / revenueLastWeek * 100) : 0,
      active_customers: customers.filter(c => now - c.last_activity < 14 * DAY).length,
      dormant_customers: customers.filter(c => now - c.last_activity >= 30 * DAY).length,
      reviews_asked: customers.filter(c => c.reviews_asked).length,
      reviews_left: customers.filter(c => c.reviews_left).length,
      spins_unlocked: customers.reduce((s,c) => s + (c.spins_available || 0), 0),
    };
  },

  getDailySeries(businessId, days = 14) {
    const customers = this.getCustomers(businessId);
    const allTx = customers.flatMap(c => c.transactions);
    const DAY = 86400000; const now = Date.now();
    const series = [];
    for (let i = days - 1; i >= 0; i--) {
      const d = new Date(now - i * DAY); d.setHours(0,0,0,0);
      const start = d.getTime(); const end = start + DAY;
      const dayTx = allTx.filter(t => t.created_at >= start && t.created_at < end);
      series.push({
        date: d,
        sales: dayTx.filter(t => t.type === 'sale').length,
        revenue: dayTx.filter(t => t.type === 'sale').reduce((s,t) => s + t.amount, 0),
        redeems: dayTx.filter(t => t.type === 'redeem').length,
      });
    }
    return series;
  },

  getActivityLog(businessId, limit = 20) {
    const customers = this.getCustomers(businessId);
    const allTx = customers.flatMap(c => c.transactions.map(t => ({ ...t, customer: c })));
    return allTx.sort((a,b) => b.created_at - a.created_at).slice(0, limit);
  },
};

WL.fmt = {
  money(n) { return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(n); },
  num(n) { return new Intl.NumberFormat('es-ES').format(n); },
  ago(ts) {
    const d = Date.now() - ts;
    if (d < 60000) return 'ahora';
    if (d < 3600000) return Math.floor(d / 60000) + ' min';
    if (d < 86400000) return Math.floor(d / 3600000) + 'h';
    if (d < 2592000000) return Math.floor(d / 86400000) + 'd';
    return Math.floor(d / 2592000000) + ' meses';
  },
  date(ts) { return new Date(ts).toLocaleDateString('es-ES', { day: 'numeric', month: 'short' }); },
  time(ts) { return new Date(ts).toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' }); },
};
