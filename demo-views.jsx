// ═══════════════════════════════════════════════════════════════
// WhatsLoyalty Live Demo — 3 views (Client / Staff / Dashboard)
// Leen de WLDB y reaccionan en vivo.
// ═══════════════════════════════════════════════════════════════

const DS = {
  paper:'#F6F5F0', paper2:'#ECEAE1', paper3:'#E0DCCD',
  ink:'#0A0F0C', ink3:'#3d4540', ink4:'#6b7570', line:'#dcd9cc',
  green:'#00C851', greenDeep:'#00a843', greenDark:'#04200f', greenWash:'#e8fdf0',
  amber:'#E0A330', red:'#E55A4B',
  waGreen:'#008069', waDoodle:'#E5DDD5', waInk:'#111b21', waInk3:'#667781', waTime:'#8696a0',
  serif:'"Instrument Serif",serif', mono:'"JetBrains Mono",monospace', sans:'"Inter Tight",sans-serif',
};

function StatusBar({ dark }) {
  const c = dark?'#fff':DS.ink;
  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'12px 26px 6px',fontSize:13,fontWeight:600,color:c,fontFamily:DS.sans,position:'relative',zIndex:60}}>
      <span>9:41</span>
      <div style={{display:'flex',gap:5,alignItems:'center'}}>
        <svg width="15" height="10" viewBox="0 0 17 11"><rect x="0" y="6.5" width="3" height="4.5" rx=".7" fill={c}/><rect x="4.5" y="4.5" width="3" height="6.5" rx=".7" fill={c}/><rect x="9" y="2" width="3" height="9" rx=".7" fill={c}/><rect x="13.5" y="0" width="3" height="11" rx=".7" fill={c}/></svg>
        <svg width="22" height="10" viewBox="0 0 24 11"><rect x=".5" y=".5" width="20.5" height="10" rx="2.5" stroke={c} strokeOpacity=".5" fill="none"/><rect x="2" y="2" width="18" height="7" rx="1.5" fill={c}/></svg>
      </div>
    </div>
  );
}

function HomeBar({ dark }) {
  return <div style={{position:'absolute',bottom:0,left:0,right:0,height:28,display:'flex',justifyContent:'center',alignItems:'flex-end',paddingBottom:8,zIndex:70}}>
    <div style={{width:124,height:4,borderRadius:100,background:dark?'rgba(255,255,255,.7)':'rgba(10,15,12,.3)'}}/>
  </div>;
}

const Tick = () => <svg width="14" height="10" viewBox="0 0 17 11"><path d="M11.1 0.3L4.4 7L1.9 4.5L0 6.4L4.4 10.8L13 2.2L11.1 0.3Z M15.5 0.3L8.7 7L7.4 5.7L5.6 7.6L8.7 10.8L17.4 2.2L15.5 0.3Z" fill="#53bdeb" transform="translate(-1,0)"/></svg>;

// ═══════════════════════════════════════════════
// CLIENT VIEW — WhatsApp chat con el negocio
// ═══════════════════════════════════════════════
function ClientView({ db }) {
  const c = db.customers.find(x => x.id === db.activeCustomerId);

  if (!c) {
    return (
      <div style={{height:'100%',background:DS.waDoodle,display:'flex',flexDirection:'column'}}>
        <StatusBar/>
        <div style={{background:DS.waGreen,padding:'8px 14px',color:'#fff',fontSize:15,fontWeight:500}}>WhatsApp</div>
        <div style={{flex:1,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',padding:30,textAlign:'center',color:DS.waInk3}}>
          <div style={{fontFamily:DS.serif,fontSize:28,color:DS.ink,marginBottom:8,letterSpacing:'-.02em'}}>Sin clientes <em style={{fontStyle:'italic',color:DS.greenDeep}}>todavía</em></div>
          <div style={{fontSize:13,lineHeight:1.5,maxWidth:220}}>Pulsa <b>＋ Dar de alta cliente</b> en la consola de abajo para empezar la demo.</div>
          <div style={{fontSize:30,color:DS.greenDeep,marginTop:14,animation:'bounce 1.8s infinite'}}>↓</div>
        </div>
        <HomeBar/>
      </div>
    );
  }

  return (
    <div style={{height:'100%',background:DS.waDoodle,display:'flex',flexDirection:'column'}}>
      <div style={{background:DS.waGreen}}>
        <StatusBar dark/>
        <div style={{padding:'4px 10px 8px',display:'flex',alignItems:'center',gap:8}}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          <div style={{width:34,height:34,borderRadius:'50%',background:DS.ink,display:'grid',placeItems:'center'}}>
            <span style={{fontFamily:DS.serif,fontSize:18,color:DS.green}}>{db.business.logo}</span>
          </div>
          <div style={{flex:1}}>
            <div style={{display:'flex',alignItems:'center',gap:3}}>
              <span style={{fontSize:14,fontWeight:500,color:'#fff'}}>{db.business.name}</span>
              <svg width="12" height="12" viewBox="0 0 24 24"><path fill="#fff" d="M23 12l-2.4-2.8.3-3.7-3.6-.8-1.9-3.2L12 3 8.6 1.5 6.7 4.7 3.1 5.5l.3 3.7L1 12l2.4 2.8-.3 3.7 3.6.8L8.6 22.5 12 21l3.4 1.5 1.9-3.2 3.6-.8-.3-3.7L23 12zm-12.4 4.6l-3.5-3.5 1.4-1.4 2.1 2.1 5.2-5.2 1.4 1.4-6.6 6.6z"/></svg>
            </div>
            <div style={{fontSize:11,color:'rgba(255,255,255,.85)'}}>en línea · {c.pts} pts</div>
          </div>
          <button onClick={()=>WLDB.requestRedeem(c.id)} style={{padding:'6px 10px',borderRadius:100,background:'rgba(255,255,255,.18)',border:'1px solid rgba(255,255,255,.3)',color:'#fff',fontFamily:DS.sans,fontSize:11,fontWeight:600,cursor:'pointer',display:'flex',alignItems:'center',gap:4}}>
            <span style={{fontSize:12}}>🎁</span> Canjear
          </button>
        </div>
      </div>

      <div style={{flex:1,overflowY:'auto',padding:'8px 8px 4px'}}>
        <div style={{display:'flex',justifyContent:'center',margin:'4px 0 8px'}}>
          <div style={{background:'rgba(225,245,254,.92)',padding:'4px 10px',borderRadius:8,fontSize:10,color:DS.waInk3,fontWeight:500}}>HOY</div>
        </div>

        {c.messages.map((m,i) => <Msg key={i} m={m} business={db.business}/>)}
      </div>

      <div style={{padding:'6px 8px 8px',display:'flex',gap:5}}>
        <div style={{flex:1,background:'#fff',borderRadius:22,padding:'7px 12px',fontSize:13,color:DS.waInk3}}>Mensaje</div>
        <div style={{width:38,height:38,borderRadius:'50%',background:DS.waGreen,display:'grid',placeItems:'center'}}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff"><path d="M12 2a3 3 0 013 3v6a3 3 0 11-6 0V5a3 3 0 013-3z"/></svg>
        </div>
      </div>
      <HomeBar/>
    </div>
  );
}

function Msg({ m, business }) {
  const base = {maxWidth:'85%',marginBottom:4};
  const bubble = {background:'#fff',borderRadius:'8px 8px 8px 2px',padding:'7px 10px 5px',boxShadow:'0 1px 1px rgba(0,0,0,.08)'};
  const time = <div style={{fontSize:9.5,color:DS.waTime,textAlign:'right',marginTop:2}}>{fmtTime(m.at)}</div>;

  if (m.type === 'welcome') return (
    <div style={base}>
      <div style={{...bubble, padding:5}}>
        <div style={{background:DS.ink,borderRadius:6,padding:'14px 14px',overflow:'hidden',position:'relative'}}>
          <div style={{position:'absolute',top:-20,right:-20,width:100,height:100,borderRadius:'50%',background:'radial-gradient(circle, rgba(0,200,81,.3), transparent 65%)'}}/>
          <div style={{fontFamily:DS.mono,fontSize:8.5,letterSpacing:'.18em',color:DS.green,position:'relative',marginBottom:4}}>BIENVENIDA · REGALO</div>
          <div style={{fontFamily:DS.serif,fontSize:28,color:'#fff',letterSpacing:'-.01em',lineHeight:1,position:'relative'}}>{m.pts} <em style={{fontStyle:'italic',color:DS.green}}>puntos</em></div>
          <div style={{fontSize:10,color:'rgba(255,255,255,.55)',position:'relative',marginTop:4}}>por apuntarte hoy</div>
        </div>
        <div style={{padding:'0 4px'}}>{time}</div>
      </div>
    </div>
  );

  if (m.type === 'qr') return (
    <div style={base}>
      <div style={{...bubble, padding:6}}>
        <div style={{background:'#fff',border:'1px solid '+DS.line,borderRadius:6,padding:'10px 10px 8px',textAlign:'center'}}>
          <div style={{fontFamily:DS.mono,fontSize:8.5,letterSpacing:'.14em',color:DS.ink4,marginBottom:6}}>QR-IDENTITY · ENSÉÑALO EN LA BARRA</div>
          <QRMini code={m.code} size={120}/>
          <div style={{fontFamily:DS.mono,fontSize:10,letterSpacing:'.18em',color:DS.ink,fontWeight:600,marginTop:6}}>{m.code}</div>
        </div>
        <div style={{padding:'0 4px'}}>{time}</div>
      </div>
    </div>
  );

  if (m.type === 'earn') return (
    <div style={base}>
      <div style={{...bubble, padding:5}}>
        <div style={{background:DS.greenWash,border:'1px solid rgba(0,200,81,.25)',borderRadius:6,padding:'12px 14px',position:'relative'}}>
          <div style={{display:'flex',alignItems:'center',gap:5,marginBottom:6}}>
            <div style={{width:18,height:18,borderRadius:'50%',background:DS.green,display:'grid',placeItems:'center'}}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={DS.greenDark} strokeWidth="3" strokeLinecap="round"><path d="M5 13l4 4L19 7"/></svg>
            </div>
            <div style={{fontFamily:DS.mono,fontSize:9,letterSpacing:'.14em',color:DS.greenDeep}}>PUNTOS AÑADIDOS</div>
          </div>
          <div style={{display:'flex',alignItems:'baseline',gap:6}}>
            <div style={{fontFamily:DS.serif,fontSize:38,color:DS.greenDark,letterSpacing:'-.02em',lineHeight:.9}}>+{m.pts}</div>
            <div style={{fontSize:11,color:DS.ink3}}>por {m.amount}€</div>
          </div>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:10,paddingTop:8,borderTop:'1px dashed rgba(0,168,67,.3)'}}>
            <span style={{fontSize:10,color:DS.ink3}}>Saldo</span>
            <span style={{fontFamily:DS.serif,fontSize:18,color:DS.ink}}>{m.balance} <em style={{fontStyle:'italic',color:DS.greenDeep}}>pts</em></span>
          </div>
        </div>
        <div style={{padding:'0 4px'}}>{time}</div>
      </div>
    </div>
  );

  if (m.type === 'redeemQR') return (
    <div style={base}>
      <div style={{...bubble, padding:5}}>
        <div style={{background:'#fff',border:'1.5px solid '+DS.amber,borderRadius:6,overflow:'hidden'}}>
          <div style={{background:DS.amber,color:DS.ink,padding:'8px 12px',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
            <div style={{fontFamily:DS.mono,fontSize:9,letterSpacing:'.18em',fontWeight:600}}>QR DE CANJE</div>
            <div style={{fontFamily:DS.mono,fontSize:9,letterSpacing:'.1em',opacity:.8}}>⏱ 5 min</div>
          </div>
          <div style={{padding:'10px 10px 8px',textAlign:'center'}}>
            <div style={{fontSize:11.5,color:DS.ink3,marginBottom:8,lineHeight:1.35}}>Enséñaselo <b>ahora mismo</b> al staff<br/>para elegir tu premio</div>
            <QRMini code={m.token} size={120}/>
            <div style={{fontFamily:DS.mono,fontSize:10,letterSpacing:'.18em',color:DS.ink,fontWeight:600,marginTop:6}}>{m.token}</div>
          </div>
        </div>
        <div style={{padding:'0 4px'}}>{time}</div>
      </div>
    </div>
  );

  if (m.type === 'redeemed') return (
    <div style={base}>
      <div style={{...bubble, padding:5}}>
        <div style={{background:'#fff',border:'1px solid '+DS.line,borderRadius:6,overflow:'hidden'}}>
          <div style={{background:DS.ink,color:'#fff',padding:'10px 12px',textAlign:'center'}}>
            <div style={{fontFamily:DS.mono,fontSize:8.5,letterSpacing:'.18em',color:DS.green}}>CANJE REALIZADO</div>
            <div style={{fontFamily:DS.serif,fontSize:18,marginTop:2,letterSpacing:'-.01em'}}>{m.reward}</div>
          </div>
          <div style={{padding:'10px 12px',textAlign:'center'}}>
            <div style={{fontSize:40,lineHeight:1}}>{m.emoji}</div>
            <div style={{display:'flex',justifyContent:'space-between',fontSize:11,marginTop:8,paddingTop:8,borderTop:'1px dashed '+DS.line}}>
              <span style={{color:DS.ink4}}>−{m.cost} pts</span>
              <span style={{fontFamily:DS.mono,color:DS.greenDeep,fontWeight:500}}>Saldo: {m.balance}</span>
            </div>
          </div>
        </div>
        <div style={{padding:'0 4px'}}>{time}</div>
      </div>
    </div>
  );

  return (
    <div style={base}>
      <div style={bubble}>
        <div style={{fontSize:13,lineHeight:1.4,color:DS.waInk}}>{m.text}</div>
        {time}
      </div>
    </div>
  );
}

function fmtTime(iso) {
  try { const d = new Date(iso); return ('0'+d.getHours()).slice(-2)+':'+('0'+d.getMinutes()).slice(-2); } catch(e){ return ''; }
}

function QRMini({ code='XXXX', size=120 }) {
  const cells = React.useMemo(() => {
    const N = 21, grid = [];
    for (let i=0;i<N;i++){ const row=[]; for (let j=0;j<N;j++){ const seed=code.charCodeAt((i*j+i+j)%code.length)||65; row.push(((i*13+j*7+seed)%100)>50?1:0); } grid.push(row); }
    return grid;
  }, [code]);
  const N = 21, cell = size/N;
  return (
    <div style={{width:size,height:size,position:'relative',margin:'0 auto'}}>
      <svg width={size} height={size} viewBox={`0 0 ${N} ${N}`} style={{display:'block'}}>
        {[[0,0],[0,N-7],[N-7,0]].map(([r,c],i)=>(
          <g key={i}>
            <rect x={c} y={r} width="7" height="7" fill={DS.ink} rx=".7"/>
            <rect x={c+1} y={r+1} width="5" height="5" fill="#fff"/>
            <rect x={c+2} y={r+2} width="3" height="3" fill={DS.ink}/>
          </g>
        ))}
        {cells.flatMap((row,i)=>row.map((v,j)=>{
          const isCorner=(i<7&&j<7)||(i<7&&j>N-8)||(i>N-8&&j<7);
          if (isCorner||!v) return null;
          return <rect key={i+'-'+j} x={j} y={i} width="1" height="1" fill={DS.ink}/>;
        }))}
      </svg>
      <div style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',width:24,height:24,borderRadius:6,background:DS.green,display:'grid',placeItems:'center',boxShadow:'0 0 0 3px #fff'}}>
        <span style={{fontFamily:DS.serif,fontSize:14,color:DS.greenDark}}>C</span>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════
// STAFF VIEW — App del staff
// ═══════════════════════════════════════════════
function StaffView({ db }) {
  const scan = db.customers.find(x => x.id === db.scanningCustomerId);
  const [amount, setAmount] = React.useState('');

  React.useEffect(() => { setAmount(''); }, [db.scanningCustomerId, db.staffMode]);

  // Intent de canje vivo (no expirado)
  const now = Date.now();
  const liveIntent = db.redeemIntent && new Date(db.redeemIntent.expiresAt).getTime() > now ? db.redeemIntent : null;
  const intentCust = liveIntent ? db.customers.find(x => x.id === liveIntent.customerId) : null;

  if (!scan) {
    return (
      <div style={{height:'100%',background:DS.paper,display:'flex',flexDirection:'column'}}>
        <StatusBar/>
        <div style={{padding:'8px 14px',borderBottom:'1px solid '+DS.line}}>
          <div style={{fontFamily:DS.mono,fontSize:9,letterSpacing:'.14em',color:DS.ink4}}>STAFF · JAVIER · TURNO MAÑANA</div>
          <div style={{fontFamily:DS.sans,fontSize:18,fontWeight:600,letterSpacing:'-.01em',marginTop:2}}>{db.business.name}</div>
        </div>

        {/* Aviso de intent de canje pendiente */}
        {liveIntent && intentCust && (
          <div style={{margin:'10px 14px 0',background:DS.amber,borderRadius:12,padding:'11px 13px',display:'flex',alignItems:'center',gap:10,boxShadow:'0 6px 20px rgba(224,163,48,.35)',animation:'pulseAmber 2s infinite'}}>
            <div style={{width:36,height:36,borderRadius:9,background:DS.ink,color:DS.amber,display:'grid',placeItems:'center',flexShrink:0}}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82zM7 7h.01"/></svg>
            </div>
            <div style={{flex:1,minWidth:0}}>
              <div style={{fontFamily:DS.mono,fontSize:9,letterSpacing:'.14em',color:DS.ink,opacity:.8}}>QUIERE CANJEAR · AHORA</div>
              <div style={{fontSize:13.5,fontWeight:600,color:DS.ink}}>{intentCust.name} · {intentCust.pts} pts</div>
            </div>
            <button onClick={()=>{ const r=WLDB.scanRedeemIntent(); if (!r.ok) window.wlToast('QR EXPIRADO','Pide al cliente que reenvíe'); }} style={{padding:'8px 12px',borderRadius:9,background:DS.ink,color:'#fff',border:'none',fontSize:11.5,fontWeight:600,fontFamily:DS.sans,cursor:'pointer'}}>Escanear →</button>
          </div>
        )}

        <div style={{padding:'14px 14px 0'}}>
          <div style={{fontFamily:DS.mono,fontSize:9.5,letterSpacing:'.12em',color:DS.ink4,marginBottom:8}}>ESCANEA EL QR DEL CLIENTE</div>
          <div style={{aspectRatio:'1',background:DS.ink,borderRadius:18,position:'relative',overflow:'hidden',marginBottom:12}}>
            <div style={{position:'absolute',inset:10,border:'1.5px solid rgba(0,200,81,.4)',borderRadius:12}}/>
            {[0,1,2,3].map(i => {
              const [t,l] = [[0,0],[0,'auto'],['auto',0],['auto','auto']][i];
              return <div key={i} style={{position:'absolute',top:t===0?18:'auto',bottom:t==='auto'?18:'auto',left:l===0?18:'auto',right:l==='auto'?18:'auto',width:22,height:22,borderTop:i<2?'2px solid '+DS.green:'none',borderBottom:i>=2?'2px solid '+DS.green:'none',borderLeft:(i%2)===0?'2px solid '+DS.green:'none',borderRight:(i%2)===1?'2px solid '+DS.green:'none',borderTopLeftRadius:i===0?6:0,borderTopRightRadius:i===1?6:0,borderBottomLeftRadius:i===2?6:0,borderBottomRightRadius:i===3?6:0}}/>;
            })}
            <div style={{position:'absolute',left:'8%',right:'8%',top:'50%',height:2,background:DS.green,boxShadow:'0 0 20px '+DS.green,animation:'scan 2s ease-in-out infinite'}}/>
            <div style={{position:'absolute',bottom:16,left:16,right:16,textAlign:'center',color:'rgba(255,255,255,.6)',fontSize:10,fontFamily:DS.mono,letterSpacing:'.12em'}}>ESPERANDO QR...</div>
          </div>

          <div style={{fontFamily:DS.mono,fontSize:9.5,letterSpacing:'.12em',color:DS.ink4,marginBottom:6}}>O ELIGE CLIENTE</div>
          <div style={{background:'#fff',borderRadius:12,border:'1px solid '+DS.line,maxHeight:180,overflow:'auto'}}>
            {db.customers.length === 0 && <div style={{padding:14,textAlign:'center',fontSize:12,color:DS.ink4}}>Ningún cliente todavía</div>}
            {db.customers.map((c,i) => (
              <button key={c.id} onClick={()=>WLDB.startScan(c.id,'earn')} style={{width:'100%',display:'flex',alignItems:'center',gap:10,padding:'9px 12px',background:'#fff',border:'none',borderTop:i?'1px solid '+DS.line:'none',cursor:'pointer',textAlign:'left',fontFamily:DS.sans}}>
                <div style={{width:28,height:28,borderRadius:'50%',background:DS.greenWash,display:'grid',placeItems:'center',fontFamily:DS.mono,fontSize:10,fontWeight:600,color:DS.greenDeep,border:'1px solid rgba(0,200,81,.25)'}}>{c.name.split(' ').map(w=>w[0]).join('').slice(0,2)}</div>
                <div style={{flex:1}}>
                  <div style={{fontSize:13,fontWeight:500}}>{c.name}</div>
                  <div style={{fontFamily:DS.mono,fontSize:9.5,color:DS.ink4}}>{c.code} · {c.pts} pts</div>
                </div>
                <div style={{fontSize:15,color:DS.greenDeep}}>›</div>
              </button>
            ))}
          </div>
        </div>
        <style>{`@keyframes scan{0%,100%{top:18%}50%{top:78%}} @keyframes pulseAmber{0%,100%{box-shadow:0 6px 20px rgba(224,163,48,.35)}50%{box-shadow:0 6px 28px rgba(224,163,48,.65)}}`}</style>
        <HomeBar/>
      </div>
    );
  }

  // Cliente escaneado — pantalla de acciones
  const isRedeemMode = db.staffMode === 'redeem';
  const canRedeem = db.rewards.filter(r=>r.active).map(r=>({...r,afford:scan.pts>=r.cost}));

  return (
    <div style={{height:'100%',background:DS.paper,display:'flex',flexDirection:'column'}}>
      <StatusBar/>
      <div style={{padding:'8px 14px',borderBottom:'1px solid '+DS.line,display:'flex',alignItems:'center',gap:8}}>
        <button onClick={()=>WLDB.clearScan()} style={{width:32,height:32,borderRadius:9,background:'#fff',border:'1px solid '+DS.line,display:'grid',placeItems:'center',cursor:'pointer'}}>←</button>
        <div style={{flex:1}}>
          <div style={{fontFamily:DS.mono,fontSize:9,letterSpacing:'.12em',color:isRedeemMode?DS.amber:DS.ink4}}>
            {isRedeemMode ? '🎁 MODO CANJE · VALIDANDO' : 'CLIENTE · VISITA Nº '+(scan.visits+1)}
          </div>
          <div style={{fontFamily:DS.sans,fontSize:16,fontWeight:600,letterSpacing:'-.01em'}}>{scan.name}</div>
        </div>
      </div>

      <div style={{flex:1,overflowY:'auto',padding:'12px 14px'}}>
        {/* Balance */}
        <div style={{background:isRedeemMode?DS.amber:DS.ink,color:isRedeemMode?DS.ink:'#fff',borderRadius:14,padding:'14px 16px',marginBottom:12,position:'relative',overflow:'hidden'}}>
          <div style={{position:'absolute',top:-20,right:-20,width:120,height:120,borderRadius:'50%',background:isRedeemMode?'radial-gradient(circle, rgba(10,15,12,.15), transparent 60%)':'radial-gradient(circle, rgba(0,200,81,.3), transparent 60%)'}}/>
          <div style={{fontFamily:DS.mono,fontSize:9,letterSpacing:'.14em',color:isRedeemMode?DS.ink:DS.green,position:'relative',opacity:isRedeemMode?.75:1}}>SALDO DISPONIBLE</div>
          <div style={{fontFamily:DS.serif,fontSize:44,letterSpacing:'-.02em',lineHeight:1,position:'relative',marginTop:2}}>{scan.pts} <em style={{fontStyle:'italic',color:isRedeemMode?DS.ink:DS.green}}>pts</em></div>
        </div>

        {/* Solo en modo earn */}
        {!isRedeemMode && (
          <div style={{background:'#fff',border:'1px solid '+DS.line,borderRadius:12,padding:'12px 14px',marginBottom:10}}>
            <div style={{fontFamily:DS.mono,fontSize:9,letterSpacing:'.12em',color:DS.ink4,marginBottom:8}}>SUMAR PUNTOS POR VENTA</div>
            <div style={{display:'flex',gap:6,marginBottom:10}}>
              {[5,10,15,25].map(v => (
                <button key={v} onClick={()=>setAmount(String(v))} style={{flex:1,padding:'9px',borderRadius:9,background:amount===String(v)?DS.ink:DS.paper,color:amount===String(v)?'#fff':DS.ink,border:'1px solid '+(amount===String(v)?DS.ink:DS.line),fontFamily:DS.mono,fontSize:12,fontWeight:500,cursor:'pointer'}}>{v}€</button>
              ))}
            </div>
            <input type="number" value={amount} onChange={e=>setAmount(e.target.value)} placeholder="Otra cantidad" style={{width:'100%',padding:'10px 12px',borderRadius:9,border:'1px solid '+DS.line,background:DS.paper,fontFamily:DS.sans,fontSize:13,marginBottom:8}}/>
            <button disabled={!amount} onClick={()=>{ const r=WLDB.addSale(scan.id, Number(amount)); if (r) { window.wlToast('+'+r.pts+' PTS', scan.name+' · saldo '+r.balance); setAmount(''); } }} style={{width:'100%',padding:'11px',borderRadius:10,background:amount?DS.green:DS.paper2,color:amount?DS.greenDark:DS.ink4,border:'none',fontFamily:DS.sans,fontSize:13,fontWeight:600,cursor:amount?'pointer':'not-allowed'}}>
              Sumar {amount?Math.round(Number(amount)*db.business.ratio):'—'} pts · enviar confirmación
            </button>
          </div>
        )}

        {/* Canjes */}
        <div style={{background:'#fff',border:'1px solid '+(isRedeemMode?DS.amber:DS.line),borderRadius:12,padding:'12px 14px',boxShadow:isRedeemMode?'0 0 0 3px rgba(224,163,48,.15)':'none'}}>
          <div style={{fontFamily:DS.mono,fontSize:9,letterSpacing:'.12em',color:isRedeemMode?DS.amber:DS.ink4,marginBottom:8,fontWeight:600}}>
            {isRedeemMode ? '🎁 ELIGE EL PREMIO A ENTREGAR' : 'CANJEAR PREMIO'}
          </div>
          {canRedeem.map(r => (
            <div key={r.id} style={{display:'flex',alignItems:'center',gap:10,padding:'8px 0',borderBottom:'1px solid '+DS.line,opacity:r.afford?1:.4}}>
              <div style={{width:30,height:30,borderRadius:8,background:r.afford?DS.greenWash:DS.paper2,display:'grid',placeItems:'center',fontSize:18,border:'1px solid '+(r.afford?'rgba(0,200,81,.25)':DS.line)}}>{r.emoji}</div>
              <div style={{flex:1}}>
                <div style={{fontSize:12.5,fontWeight:500}}>{r.name}</div>
                <div style={{fontFamily:DS.mono,fontSize:9.5,color:DS.ink4}}>{r.cost} pts {!r.afford && '· faltan '+(r.cost-scan.pts)}</div>
              </div>
              <button disabled={!r.afford} onClick={()=>{ const res=WLDB.redeemReward(scan.id, r.id); if(res.ok) window.wlToast('CANJE OK', r.name+' entregado'); }} style={{padding:'6px 12px',borderRadius:8,background:r.afford?(isRedeemMode?DS.amber:DS.green):'transparent',color:r.afford?DS.ink:DS.ink4,border:'1px solid '+(r.afford?(isRedeemMode?DS.amber:DS.green):DS.line),fontSize:11,fontWeight:600,fontFamily:DS.sans,cursor:r.afford?'pointer':'not-allowed'}}>Entregar</button>
            </div>
          ))}
        </div>
      </div>
      <HomeBar/>
    </div>
  );
}

// ═══════════════════════════════════════════════
// DASHBOARD VIEW — web
// ═══════════════════════════════════════════════
function DashView({ db }) {
  const events = db.eventLog || [];
  const now = Date.now();
  const liveIntent = db.redeemIntent && new Date(db.redeemIntent.expiresAt).getTime() > now ? db.redeemIntent : null;
  const intentCust = liveIntent ? db.customers.find(x => x.id === liveIntent.customerId) : null;

  return (
    <>
      <div className="dash-hdr">
        <div>
          <div style={{fontFamily:DS.mono,fontSize:10,letterSpacing:'.14em',color:DS.ink4}}>DASHBOARD · HOY</div>
          <div className="ttl">{db.business.name}</div>
        </div>
        <div style={{display:'flex',alignItems:'center',gap:6,fontFamily:DS.mono,fontSize:10,color:DS.greenDeep}}>
          <span style={{width:6,height:6,borderRadius:'50%',background:DS.green,animation:'blink 1.3s infinite'}}/>
          SINCRONIZADO
        </div>
      </div>

      {/* Intent pendiente */}
      {liveIntent && intentCust && (
        <div style={{background:DS.amber,color:DS.ink,borderRadius:12,padding:'10px 12px',marginBottom:12,display:'flex',alignItems:'center',gap:10,animation:'pulseAmberD 2s infinite'}}>
          <span style={{fontSize:18}}>🎁</span>
          <div style={{flex:1}}>
            <div style={{fontFamily:DS.mono,fontSize:9,letterSpacing:'.14em',opacity:.75}}>CANJE PENDIENTE DE VALIDAR</div>
            <div style={{fontSize:13,fontWeight:600}}>{intentCust.name} · {intentCust.pts} pts · código {liveIntent.token}</div>
          </div>
          <button onClick={()=>{ const r=WLDB.scanRedeemIntent(); if(!r.ok) window.wlToast('QR EXPIRADO','Pídele que reenvíe'); }} style={{padding:'7px 11px',borderRadius:8,background:DS.ink,color:'#fff',border:'none',fontSize:11,fontWeight:600,fontFamily:DS.sans,cursor:'pointer'}}>Validar</button>
        </div>
      )}

      <div className="kpi-grid">
        <div className="kpi"><div className="l">CLIENTES</div><div className="v">{db.customers.length}</div></div>
        <div className="kpi"><div className="l">VENTAS</div><div className="v">{db.dayStats.sales}<em> €</em></div></div>
        <div className="kpi"><div className="l">CANJES</div><div className="v">{db.dayStats.redemptions}</div></div>
      </div>

      <div style={{fontFamily:DS.mono,fontSize:10,letterSpacing:'.12em',color:DS.ink4,marginBottom:8,textTransform:'uppercase'}}>Clientes</div>
      <div className="cust-list" style={{maxHeight:180}}>
        {db.customers.length === 0 && (
          <div style={{padding:'24px 20px',textAlign:'center',color:DS.ink4,fontSize:13}}>
            <div style={{fontFamily:DS.serif,fontSize:20,color:DS.ink,marginBottom:4,letterSpacing:'-.01em'}}>Sin clientes</div>
            <div style={{fontSize:12}}>Da de alta el primero desde la consola</div>
          </div>
        )}
        {db.customers.map(c => (
          <div key={c.id} className={'cust-row' + (c.id===db.activeCustomerId?' active':'')} onClick={()=>WLDB.setActiveCustomer(c.id)}>
            <div className="av">{c.name.split(' ').map(w=>w[0]).join('').slice(0,2)}</div>
            <div>
              <div className="n">{c.name}</div>
              <div className="sub">{c.code} · {c.visits} visitas · {c.phone}</div>
            </div>
            <div className="pts">{c.pts}</div>
            <button className="scan-btn" onClick={(e)=>{ e.stopPropagation(); WLDB.startScan(c.id,'earn'); }}>📷 Escanear</button>
          </div>
        ))}
      </div>

      <div className="ev-feed" style={{flex:1,maxHeight:'none',display:'flex',flexDirection:'column',minHeight:0}}>
        <div className="ev-label" style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
          <span>● LOG DE TRANSACCIONES · EN VIVO</span>
          <span style={{color:DS.ink4,fontWeight:400}}>{events.length} eventos</span>
        </div>
        <div style={{flex:1,overflowY:'auto',minHeight:0}}>
          {events.length === 0 && <div style={{fontSize:11,color:DS.ink4,fontStyle:'italic',padding:'12px 4px'}}>— sin actividad todavía —</div>}
          {events.map(e => <EventRow key={e.id} e={e}/>)}
        </div>
      </div>

      <style>{`@keyframes pulseAmberD{0%,100%{box-shadow:0 0 0 0 rgba(224,163,48,.5)}50%{box-shadow:0 0 0 6px rgba(224,163,48,0)}} @keyframes evIn{from{opacity:0;transform:translateY(-4px);background:${DS.greenWash}}to{opacity:1;transform:translateY(0);background:transparent}}`}</style>
    </>
  );
}

function EventRow({ e }) {
  const map = {
    join:      { icon:'🎉', color:DS.greenDeep, label:'Alta',           text: e => `+${e.pts} pts bienvenida` },
    earn:      { icon:'＋', color:DS.greenDeep, label:'Venta',          text: e => `${e.amount}€  ·  +${e.pts} pts` },
    redeemRequest: { icon:'🎁', color:DS.amber,   label:'Pide canje',   text: e => `código ${e.token}` },
    redeem:    { icon:'✓',  color:DS.ink,       label:'Canje OK',      text: e => `${e.emoji||''} ${e.reward}  ·  −${e.cost} pts` },
  };
  const m = map[e.type] || { icon:'•', color:DS.ink4, label:e.type, text:()=>'' };
  return (
    <div style={{display:'grid',gridTemplateColumns:'auto auto 1fr auto',gap:8,alignItems:'center',padding:'7px 4px',borderBottom:'1px solid '+DS.line,fontFamily:DS.mono,fontSize:10.5,animation:'evIn .5s ease-out'}}>
      <span style={{color:DS.ink4,fontSize:10}}>{fmtTime(e.at)}</span>
      <span style={{width:20,height:20,borderRadius:5,background:m.color,color:'#fff',display:'grid',placeItems:'center',fontSize:10.5,fontFamily:DS.sans,fontWeight:600}}>{m.icon}</span>
      <span style={{color:DS.ink,fontFamily:DS.sans,fontSize:12,fontWeight:500,overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>
        <span style={{color:DS.ink4,fontFamily:DS.mono,fontSize:9.5,letterSpacing:'.08em',marginRight:6}}>{m.label.toUpperCase()}</span>
        {e.cust}
        <span style={{color:DS.ink4,marginLeft:6}}>·</span>
        <span style={{color:DS.ink4,marginLeft:6,fontSize:11}}>{m.text(e)}</span>
      </span>
    </div>
  );
}

Object.assign(window, { ClientView, StaffView, DashView });
