// ═══════════════════════════════════════════════════════════════
// WhatsLoyalty — Capa de datos compartida (simula backend)
// Todas las apps leen/escriben aquí. Eventos cross-tab vía 'storage'.
// ═══════════════════════════════════════════════════════════════

(function(){
  const KEY = 'wl_db_v1';
  const LISTENERS = new Set();

  const DEFAULT_DB = {
    business: {
      name: 'Café Moreno',
      logo: 'C',
      ratio: 2, // pts por euro
      welcomePts: 50,
    },
    rewards: [
      { id:'r1', emoji:'☕', name:'Café por la casa', cost:100, active:true },
      { id:'r2', emoji:'🥐', name:'Croissant',        cost:150, active:true },
      { id:'r3', emoji:'🍷', name:'Copa de vino',     cost:250, active:true },
      { id:'r4', emoji:'🍰', name:'Tarta del día',    cost:400, active:true },
    ],
    customers: [], // {id, name, phone, pts, visits, joinedAt, messages:[], history:[]}
    activeCustomerId: null, // el cliente "yo" en la vista cliente
    scanningCustomerId: null, // cuando el staff escanea, aparece aquí
    redeemIntent: null, // {customerId, createdAt, expiresAt} — cliente pidió canjear desde WhatsApp
    staffMode: 'earn', // 'earn' | 'redeem' — se setea tras escanear según QR
    dayStats: { sales:0, pts:0, redemptions:0 },
    eventLog: [], // log global {id, at, type, cust, pts?, amount?, reward?}
  };

  function load() {
    try { const raw = localStorage.getItem(KEY); if (raw) return JSON.parse(raw); } catch(e){}
    return JSON.parse(JSON.stringify(DEFAULT_DB));
  }
  function save(db) {
    localStorage.setItem(KEY, JSON.stringify(db));
    // notify same-tab listeners
    LISTENERS.forEach(fn => { try { fn(db); } catch(e){ console.error(e); } });
  }

  // cross-tab sync
  window.addEventListener('storage', e => {
    if (e.key === KEY) {
      const db = load();
      LISTENERS.forEach(fn => { try { fn(db); } catch(err){} });
    }
  });

  function pushEvent(db, ev) {
    const entry = { id:'e'+Date.now().toString(36)+Math.floor(Math.random()*100), at:new Date().toISOString(), ...ev };
    db.eventLog.unshift(entry);
    if (db.eventLog.length > 80) db.eventLog.length = 80;
    return entry;
  }

  const WLDB = {
    get() { return load(); },
    reset() { localStorage.removeItem(KEY); save(JSON.parse(JSON.stringify(DEFAULT_DB))); },
    subscribe(fn) { LISTENERS.add(fn); fn(load()); return () => LISTENERS.delete(fn); },

    // ── Actions ──
    // El cliente se auto-registra escaneando el QR del local
    selfRegister({ name, phone }) {
      const db = load();
      // el propio cliente inicia la conversación → flujo real WhatsApp
      const id = 'c' + Date.now().toString(36);
      const code = name.split(' ').map(w=>w[0]).join('').toUpperCase() + '-' + Math.floor(1000+Math.random()*9000);
      const now = new Date().toISOString();
      const cust = {
        id, name, phone, code,
        pts: db.business.welcomePts,
        visits: 0,
        joinedAt: now,
        messages: [
          { dir:'in', text:`¡Hola ${name.split(' ')[0]}! 👋 Gracias por unirte a ${db.business.name}. Aquí no mandamos spam — solo cosas bonitas ☕`, at: now },
          { dir:'in', type:'welcome', pts: db.business.welcomePts, at: now },
          { dir:'in', type:'qr', code, at: now },
        ],
        history: [
          { type:'welcome', pts: db.business.welcomePts, at: now, label:'Bienvenida' },
        ],
      };
      db.customers.unshift(cust);
      db.activeCustomerId = id;
      pushEvent(db, { type:'join', cust:name, custId:id, pts: db.business.welcomePts });
      save(db);
      return cust;
    },

    setActiveCustomer(id) {
      const db = load();
      db.activeCustomerId = id;
      save(db);
    },

    startScan(id, mode='earn') {
      const db = load();
      db.scanningCustomerId = id;
      db.staffMode = mode;
      save(db);
    },
    clearScan() {
      const db = load();
      db.scanningCustomerId = null;
      db.staffMode = 'earn';
      // si había un intent de canje pendiente para ese cliente, no lo borramos
      save(db);
    },

    addSale(customerId, amount) {
      const db = load();
      const c = db.customers.find(x => x.id === customerId);
      if (!c) return null;
      const pts = Math.round(amount * db.business.ratio);
      const now = new Date().toISOString();
      c.pts += pts;
      c.visits += 1;
      c.history.unshift({ type:'earn', amount, pts, at: now, label:'Venta' });
      c.messages.push({
        dir:'in', type:'earn', amount, pts, balance: c.pts, at: now,
      });
      db.dayStats.sales += amount;
      db.dayStats.pts += pts;
      pushEvent(db, { type:'earn', cust:c.name, custId:c.id, pts, amount });
      save(db);
      return { pts, balance: c.pts };
    },

    // Cliente pide canjear desde WhatsApp → se genera un QR temporal (intent)
    requestRedeem(customerId) {
      const db = load();
      const c = db.customers.find(x => x.id === customerId);
      if (!c) return null;
      const now = Date.now();
      const ttl = 5 * 60 * 1000; // 5 min
      const token = 'RDM-' + Math.floor(1000 + Math.random()*9000);
      const intent = { customerId, token, createdAt:new Date(now).toISOString(), expiresAt:new Date(now+ttl).toISOString() };
      db.redeemIntent = intent;
      // mensaje al cliente: "enséñale este QR"
      c.messages.push({
        dir:'in', type:'redeemQR', token, code:c.code, at:new Date(now).toISOString(), expiresAt:intent.expiresAt,
      });
      pushEvent(db, { type:'redeemRequest', cust:c.name, custId:c.id, token });
      save(db);
      return intent;
    },

    cancelRedeemIntent() {
      const db = load();
      db.redeemIntent = null;
      save(db);
    },

    // Staff escanea el QR de canje → pasa a modo "redeem"
    scanRedeemIntent() {
      const db = load();
      if (!db.redeemIntent) return { ok:false, reason:'none' };
      const now = Date.now();
      if (new Date(db.redeemIntent.expiresAt).getTime() < now) {
        db.redeemIntent = null;
        save(db);
        return { ok:false, reason:'expired' };
      }
      db.scanningCustomerId = db.redeemIntent.customerId;
      db.staffMode = 'redeem';
      save(db);
      return { ok:true };
    },

    redeemReward(customerId, rewardId) {
      const db = load();
      const c = db.customers.find(x => x.id === customerId);
      const r = db.rewards.find(x => x.id === rewardId);
      if (!c || !r) return { ok:false, reason:'not_found' };
      if (c.pts < r.cost) return { ok:false, reason:'insufficient', need: r.cost - c.pts };
      const now = new Date().toISOString();
      const prev = c.pts;
      c.pts -= r.cost;
      c.history.unshift({ type:'redeem', reward: r.name, emoji: r.emoji, pts: -r.cost, at: now, label:`Canje · ${r.name}` });
      c.messages.push({
        dir:'in', type:'redeemed', reward: r.name, emoji: r.emoji, cost: r.cost, prev, balance: c.pts, at: now,
      });
      db.dayStats.redemptions += 1;
      db.redeemIntent = null; // consumido
      db.staffMode = 'earn';
      pushEvent(db, { type:'redeem', cust:c.name, custId:c.id, reward:r.name, emoji:r.emoji, cost:r.cost });
      save(db);
      return { ok:true, balance: c.pts, reward: r };
    },

    progressTo(customerId) {
      const db = load();
      const c = db.customers.find(x => x.id === customerId);
      if (!c) return null;
      const affordable = db.rewards.filter(r => r.active).map(r => ({...r, missing: Math.max(0, r.cost - c.pts)}));
      const next = affordable.filter(r => r.missing > 0).sort((a,b) => a.missing - b.missing)[0] || affordable[0];
      return next;
    },
  };

  window.WLDB = WLDB;
})();
