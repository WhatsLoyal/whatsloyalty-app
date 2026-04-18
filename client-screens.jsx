// ═══════════════════════════════════════════════════════════════
// WhatsLoyalty — Vista CLIENTE en WhatsApp (6 pantallas)
// Fondo doodle WA + header oficial + tarjetas del negocio
// ═══════════════════════════════════════════════════════════════

const CS = {
  // WhatsApp
  waGreen:'#008069', waGreenDark:'#06554a', waBubbleIn:'#ffffff', waBubbleOut:'#d9fdd3',
  waDoodle:'#E5DDD5', waInk:'#111b21', waInk2:'#3b4a54', waInk3:'#667781',
  waTick:'#53bdeb', waUnread:'#25D366', waTime:'#8696a0',
  // Loyalty brand
  green:'#00C851', greenDeep:'#00a843', greenDark:'#04200f', greenWash:'#e8fdf0',
  ink:'#0A0F0C', ink2:'#1a201c', ink3:'#3d4540', ink4:'#6b7570', ink5:'#9aa39e',
  paper:'#F6F5F0', paper2:'#ECEAE1', paper3:'#E0DCCD', line:'#dcd9cc',
  amber:'#E0A330', red:'#E55A4B',
  sans:'"Inter Tight", -apple-system, system-ui, sans-serif',
  serif:'"Instrument Serif", serif',
  mono:'"JetBrains Mono", ui-monospace, monospace',
};

// Doodle background (subtle pattern as SVG data URI)
const DOODLE_BG = `background: ${CS.waDoodle} url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'><g fill='none' stroke='%23d4cdc2' stroke-width='1' opacity='.6'><circle cx='20' cy='20' r='4'/><path d='M40 50 Q50 40 60 50 T80 50'/><path d='M100 20 l6 6 -6 6 -6 -6 z'/><circle cx='130' cy='70' r='3'/><path d='M20 100 q10 -6 20 0 t20 0'/><path d='M90 110 l4 4 4 -4'/><circle cx='60' cy='130' r='5'/><path d='M120 140 q8 -8 16 0'/></g></svg>") repeat;`;

// ── Status bar (dark text, light BG — over WA screens it's under chrome) ──
function CStatusBar({ dark=false, bg='transparent' }) {
  const c = dark ? '#fff' : CS.waInk;
  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'14px 30px 6px',fontFamily:CS.sans,fontWeight:600,fontSize:15,color:c,position:'relative',zIndex:60,background:bg}}>
      <span>9:41</span>
      <div style={{display:'flex',gap:6,alignItems:'center'}}>
        <svg width="17" height="11" viewBox="0 0 17 11"><rect x="0" y="6.5" width="3" height="4.5" rx=".7" fill={c}/><rect x="4.5" y="4.5" width="3" height="6.5" rx=".7" fill={c}/><rect x="9" y="2" width="3" height="9" rx=".7" fill={c}/><rect x="13.5" y="0" width="3" height="11" rx=".7" fill={c}/></svg>
        <svg width="15" height="11" viewBox="0 0 15 11"><path d="M7.5 3C9.6 3 11.4 3.8 12.8 5.1L13.8 4.1C12.1 2.5 9.9 1.5 7.5 1.5C5.1 1.5 2.9 2.5 1.2 4.1L2.2 5.1C3.6 3.8 5.4 3 7.5 3Z" fill={c}/><circle cx="7.5" cy="9" r="1.3" fill={c}/></svg>
        <svg width="24" height="11" viewBox="0 0 24 11"><rect x=".5" y=".5" width="20.5" height="10" rx="2.5" stroke={c} strokeOpacity=".4" fill="none"/><rect x="2" y="2" width="18" height="7" rx="1.5" fill={c}/></svg>
      </div>
    </div>
  );
}

function CHomeIndicator({ dark=false }) {
  return <div style={{position:'absolute',bottom:0,left:0,right:0,height:32,display:'flex',justifyContent:'center',alignItems:'flex-end',paddingBottom:9,pointerEvents:'none',zIndex:70}}>
    <div style={{width:134,height:5,borderRadius:100,background:dark?'rgba(255,255,255,.7)':'rgba(10,15,12,.3)'}}/>
  </div>;
}

// Tick marks (blue double-check)
const CTicks = ({c=CS.waTick}) => <svg width="16" height="11" viewBox="0 0 16 11"><path d="M11.1 0.3L4.4 7L1.9 4.5L0 6.4L4.4 10.8L13 2.2L11.1 0.3Z M15.5 0.3L8.7 7L7.4 5.7L5.6 7.6L8.7 10.8L17.4 2.2L15.5 0.3Z" fill={c} transform="translate(-1,0)"/></svg>;

// WA header (dark green) for chat screens
function CWAHeader({ brand='Café Moreno', sub='en línea', verified=true, onBack }) {
  return (
    <div style={{background:CS.waGreen,padding:'4px 8px 8px',display:'flex',alignItems:'center',gap:10}}>
      <button style={{background:'none',border:'none',padding:6,cursor:'pointer'}}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
      </button>
      <div style={{width:40,height:40,borderRadius:'50%',background:CS.ink,display:'grid',placeItems:'center',flexShrink:0,border:'2px solid rgba(255,255,255,.15)'}}>
        <div style={{fontFamily:CS.serif,fontSize:20,color:CS.green,letterSpacing:'-.01em'}}>C</div>
      </div>
      <div style={{flex:1,minWidth:0}}>
        <div style={{display:'flex',alignItems:'center',gap:4}}>
          <div style={{fontFamily:CS.sans,fontSize:15,fontWeight:500,color:'#fff',letterSpacing:'-.01em'}}>{brand}</div>
          {verified && <svg width="14" height="14" viewBox="0 0 24 24"><path fill="#fff" d="M23 12l-2.4-2.8.3-3.7-3.6-.8-1.9-3.2L12 3 8.6 1.5 6.7 4.7 3.1 5.5l.3 3.7L1 12l2.4 2.8-.3 3.7 3.6.8L8.6 22.5 12 21l3.4 1.5 1.9-3.2 3.6-.8-.3-3.7L23 12zm-12.4 4.6l-3.5-3.5 1.4-1.4 2.1 2.1 5.2-5.2 1.4 1.4-6.6 6.6z"/></svg>}
        </div>
        <div style={{fontSize:12,color:'rgba(255,255,255,.85)',marginTop:1}}>{sub}</div>
      </div>
      <button style={{background:'none',border:'none',padding:8,cursor:'pointer'}}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round"><path d="M23 7l-7 5 7 5V7zM14 5H3a2 2 0 00-2 2v10a2 2 0 002 2h11a2 2 0 002-2V7a2 2 0 00-2-2z"/></svg></button>
      <button style={{background:'none',border:'none',padding:8,cursor:'pointer'}}><svg width="20" height="20" viewBox="0 0 24 24" fill="#fff"><circle cx="12" cy="5" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="19" r="2"/></svg></button>
    </div>
  );
}

// WA input bar (bottom)
function CWAInput() {
  return (
    <div style={{padding:'8px 8px 10px',display:'flex',alignItems:'flex-end',gap:6,background:'transparent'}}>
      <div style={{flex:1,background:'#fff',borderRadius:24,padding:'8px 12px',display:'flex',alignItems:'center',gap:10}}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={CS.waInk3} strokeWidth="1.7"><circle cx="12" cy="12" r="9"/><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/></svg>
        <div style={{flex:1,fontSize:14,color:CS.waInk3}}>Mensaje</div>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={CS.waInk3} strokeWidth="1.7"><path d="M21.4 11.6a2 2 0 00-2.8-2.8L4 23.4a2 2 0 01-2.8-2.8L13.6 8.2a4 4 0 115.7 5.7l-9.9 9.9a6 6 0 11-8.5-8.5l9.9-9.9"/></svg>
        <svg width="22" height="22" viewBox="0 0 24 24" fill={CS.waInk3}><path d="M12 2a3 3 0 013 3v6a3 3 0 11-6 0V5a3 3 0 013-3zM19 11a1 1 0 112 0 9 9 0 01-8 8.9V22h-2v-2.1A9 9 0 013 11a1 1 0 112 0 7 7 0 0014 0z"/></svg>
      </div>
      <button style={{width:42,height:42,borderRadius:'50%',background:CS.waGreen,border:'none',display:'grid',placeItems:'center',cursor:'pointer'}}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-1 5h2v5h4l-5 5-5-5h4V7z" transform="rotate(-90 12 12)"/></svg>
      </button>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// 01 — CHAT LIST (notificación entrante)
// ═══════════════════════════════════════════════════════════════
function ChatListScreen() {
  const chats = [
    {n:'Café Moreno',m:'¡Bienvenido a nuestra casa! ☕ Te regalamos…',t:'9:41',u:1,pinned:true,verified:true,initial:'C',bg:CS.ink,col:CS.green,serif:true},
    {n:'Mamá',m:'¿Te acuerdas del cumple de la abuela?',t:'9:22',u:2,initial:'M',bg:'#E8B4B8'},
    {n:'Dani 🏀',m:'Tú: vale, nos vemos a las 7',t:'8:58',read:true,initial:'D',bg:'#A4C3B2'},
    {n:'Trabajo',m:'Laura: reunión movida a las 11',t:'8:30',u:5,initial:'T',bg:'#6B9080'},
    {n:'Supermercado Lara',m:'Tu pedido llega entre 18:00 y 20:00',t:'ayer',initial:'S',bg:'#CCE3DE'},
    {n:'Pablo',m:'📎 Foto',t:'ayer',read:true,initial:'P',bg:'#EAF4F4'},
    {n:'Uni · Proyecto',m:'Marcos: ¿tenéis las slides?',t:'ayer',initial:'U',bg:'#D7B29D'},
  ];

  return (
    <div style={{height:'100%',display:'flex',flexDirection:'column',background:'#fff'}}>
      <div style={{background:CS.waGreen,paddingBottom:0}}>
        <CStatusBar dark/>
        <div style={{padding:'6px 16px 10px',display:'flex',alignItems:'center',gap:14}}>
          <div style={{flex:1,fontFamily:CS.sans,fontSize:20,fontWeight:600,color:'#fff',letterSpacing:'-.01em'}}>WhatsApp</div>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M12 1v6M12 17v6M4.2 4.2l4.3 4.3M15.5 15.5l4.3 4.3M1 12h6M17 12h6M4.2 19.8l4.3-4.3M15.5 8.5l4.3-4.3"/></svg>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff"><circle cx="12" cy="5" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="19" r="2"/></svg>
        </div>
        <div style={{padding:'4px 16px 10px',display:'flex',gap:6}}>
          {['Todos','No leídos','Favoritos','Grupos'].map((t,i)=>(
            <div key={i} style={{padding:'6px 12px',borderRadius:100,background:i===0?'rgba(255,255,255,.2)':'transparent',color:'#fff',fontSize:12.5,fontWeight:i===0?600:400}}>{t}</div>
          ))}
        </div>
      </div>

      <div style={{flex:1,overflowY:'auto',background:'#fff'}}>
        {chats.map((c,i)=>(
          <div key={i} style={{display:'flex',gap:12,padding:'10px 16px',alignItems:'center',background:c.pinned?'#f7faf8':'#fff',borderBottom:'1px solid #f0f2f1',position:'relative'}}>
            {c.pinned && <div style={{position:'absolute',left:0,top:0,bottom:0,width:3,background:CS.green}}/>}
            <div style={{width:50,height:50,borderRadius:'50%',background:c.bg,display:'grid',placeItems:'center',flexShrink:0,color:c.col||'#fff',fontFamily:c.serif?CS.serif:CS.sans,fontSize:c.serif?26:18,fontWeight:c.serif?400:600,letterSpacing:c.serif?'-.01em':0}}>{c.initial}</div>
            <div style={{flex:1,minWidth:0}}>
              <div style={{display:'flex',alignItems:'center',gap:5,marginBottom:2}}>
                <div style={{fontFamily:CS.sans,fontSize:15.5,fontWeight:500,color:CS.waInk,letterSpacing:'-.01em'}}>{c.n}</div>
                {c.verified && <svg width="13" height="13" viewBox="0 0 24 24"><path fill={CS.green} d="M23 12l-2.4-2.8.3-3.7-3.6-.8-1.9-3.2L12 3 8.6 1.5 6.7 4.7 3.1 5.5l.3 3.7L1 12l2.4 2.8-.3 3.7 3.6.8L8.6 22.5 12 21l3.4 1.5 1.9-3.2 3.6-.8-.3-3.7L23 12zm-12.4 4.6l-3.5-3.5 1.4-1.4 2.1 2.1 5.2-5.2 1.4 1.4-6.6 6.6z"/></svg>}
              </div>
              <div style={{display:'flex',alignItems:'center',gap:4}}>
                {c.read && <CTicks/>}
                <div style={{fontSize:13.5,color:c.u?CS.waInk2:CS.waInk3,fontWeight:c.u?500:400,overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap',flex:1}}>{c.m}</div>
              </div>
            </div>
            <div style={{display:'flex',flexDirection:'column',alignItems:'flex-end',gap:4,flexShrink:0}}>
              <div style={{fontSize:11,color:c.u?CS.unread||CS.waUnread:CS.waTime,fontWeight:c.u?600:400}}>{c.t}</div>
              {c.u && <div style={{minWidth:20,height:20,borderRadius:'50%',background:CS.waUnread,color:'#fff',fontSize:11,fontWeight:700,display:'grid',placeItems:'center',padding:'0 6px'}}>{c.u}</div>}
              {c.pinned && <svg width="14" height="14" viewBox="0 0 24 24" fill={CS.waTime}><path d="M16 3.4l4.6 4.6-5 5 1 5.6-3.5 3.5-3.6-3.6L4 22l-1.3-1.3 5.6-5.5-3.6-3.6L8.2 8l5.6 1z"/></svg>}
            </div>
          </div>
        ))}
      </div>

      {/* Floating banner */}
      <div style={{position:'absolute',top:170,left:12,right:12,background:CS.ink,color:'#fff',borderRadius:14,padding:'11px 14px',display:'flex',alignItems:'center',gap:10,boxShadow:'0 8px 24px rgba(0,0,0,.25)',zIndex:5,animation:'slideDown .4s ease-out'}}>
        <div style={{width:32,height:32,borderRadius:9,background:CS.green,display:'grid',placeItems:'center',flexShrink:0}}>
          <div style={{fontFamily:CS.serif,fontSize:18,color:CS.greenDark}}>C</div>
        </div>
        <div style={{flex:1,minWidth:0}}>
          <div style={{fontSize:11,color:CS.green,fontFamily:CS.mono,letterSpacing:'.1em'}}>CAFÉ MORENO · AHORA</div>
          <div style={{fontSize:12.5,color:'#fff',marginTop:1,overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>¡Bienvenido! Te regalamos 50 pts ☕</div>
        </div>
      </div>

      <style>{`@keyframes slideDown{from{transform:translateY(-20px);opacity:0}to{transform:translateY(0);opacity:1}}`}</style>
      <CHomeIndicator/>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// 02 — WELCOME MESSAGE (primera conversación)
// ═══════════════════════════════════════════════════════════════
function WelcomeChatScreen() {
  return (
    <div style={{height:'100%',display:'flex',flexDirection:'column',background:CS.waDoodle,position:'relative'}}>
      <div style={{background:CS.waGreen}}>
        <CStatusBar dark/>
        <CWAHeader brand="Café Moreno" sub="Cuenta de empresa · en línea"/>
      </div>

      <div style={{flex:1,overflowY:'auto',padding:'10px 8px 4px',...{backgroundImage:`url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'><g fill='none' stroke='%23d4cdc2' stroke-width='1' opacity='.5'><circle cx='20' cy='20' r='3'/><path d='M40 50 Q50 40 60 50 T80 50'/><path d='M100 20 l5 5 -5 5 -5 -5 z'/><circle cx='130' cy='70' r='3'/><path d='M20 100 q10 -6 20 0 t20 0'/><circle cx='60' cy='130' r='4'/></g></svg>")`,backgroundRepeat:'repeat',backgroundColor:CS.waDoodle}}}>
        {/* Date chip */}
        <div style={{display:'flex',justifyContent:'center',margin:'4px 0 10px'}}>
          <div style={{background:'rgba(225,245,254,.92)',padding:'5px 12px',borderRadius:8,fontSize:11,color:CS.waInk2,fontWeight:500,boxShadow:'0 1px 1px rgba(0,0,0,.05)'}}>HOY</div>
        </div>

        {/* Encryption notice */}
        <div style={{display:'flex',justifyContent:'center',margin:'0 0 14px',padding:'0 20px'}}>
          <div style={{background:'#FDF4C4',padding:'8px 14px',borderRadius:8,fontSize:11,color:CS.waInk2,textAlign:'center',lineHeight:1.45,boxShadow:'0 1px 1px rgba(0,0,0,.05)',maxWidth:260}}>🔒 Los mensajes están cifrados de extremo a extremo.</div>
        </div>

        {/* Msg 1 — greeting */}
        <div style={{maxWidth:'85%',marginBottom:4}}>
          <div style={{background:CS.waBubbleIn,borderRadius:'8px 8px 8px 2px',padding:'8px 10px 6px',boxShadow:'0 1px 1px rgba(0,0,0,.08)',position:'relative'}}>
            <div style={{fontSize:14,lineHeight:1.4,color:CS.waInk}}>¡Hola Pablo! 👋</div>
            <div style={{fontSize:14,lineHeight:1.4,color:CS.waInk,marginTop:6}}>Gracias por unirte a <b>Café Moreno</b>. Aquí no mandamos spam — solo cosas bonitas ☕</div>
            <div style={{fontSize:10,color:CS.waTime,textAlign:'right',marginTop:3}}>9:41</div>
          </div>
        </div>

        {/* Msg 2 — rich welcome card */}
        <div style={{maxWidth:'88%',marginBottom:4}}>
          <div style={{background:CS.waBubbleIn,borderRadius:'8px 8px 8px 2px',padding:6,boxShadow:'0 1px 1px rgba(0,0,0,.08)',overflow:'hidden'}}>
            {/* Hero card */}
            <div style={{borderRadius:6,overflow:'hidden',position:'relative',background:CS.ink,padding:'18px 16px',marginBottom:6}}>
              <div style={{position:'absolute',top:-30,right:-30,width:140,height:140,borderRadius:'50%',background:'radial-gradient(circle, rgba(0,200,81,.3), transparent 65%)'}}/>
              <div style={{fontFamily:CS.mono,fontSize:9,letterSpacing:'.18em',color:CS.green,marginBottom:6,position:'relative'}}>BIENVENIDA · REGALO</div>
              <div style={{fontFamily:CS.serif,fontSize:32,color:'#fff',letterSpacing:'-.01em',lineHeight:1,marginBottom:2,position:'relative'}}>50 <em style={{fontStyle:'italic',color:CS.green}}>puntos</em></div>
              <div style={{fontSize:11,color:'rgba(255,255,255,.6)',position:'relative',marginTop:4}}>por apuntarte hoy · ~ 0,50 €</div>
            </div>
            <div style={{padding:'2px 6px 4px'}}>
              <div style={{fontSize:13.5,lineHeight:1.4,color:CS.waInk,marginBottom:8}}>Acabas de empezar. Con cada consumo sumas puntos y los cambias por cosas de la casa 🥐</div>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:6,marginBottom:4}}>
                <div style={{padding:'6px 8px',background:CS.greenWash,borderRadius:6,border:'1px solid rgba(0,200,81,.2)'}}>
                  <div style={{fontFamily:CS.mono,fontSize:9,color:CS.greenDeep,letterSpacing:'.08em'}}>100 PTS</div>
                  <div style={{fontSize:11,marginTop:2,color:CS.ink2}}>☕ Café gratis</div>
                </div>
                <div style={{padding:'6px 8px',background:CS.greenWash,borderRadius:6,border:'1px solid rgba(0,200,81,.2)'}}>
                  <div style={{fontFamily:CS.mono,fontSize:9,color:CS.greenDeep,letterSpacing:'.08em'}}>400 PTS</div>
                  <div style={{fontSize:11,marginTop:2,color:CS.ink2}}>🍰 Tarta del día</div>
                </div>
              </div>
            </div>
            <div style={{fontSize:10,color:CS.waTime,textAlign:'right',padding:'0 6px 2px'}}>9:41</div>
          </div>
        </div>

        {/* Msg 3 — CTA button card */}
        <div style={{maxWidth:'85%',marginBottom:4}}>
          <div style={{background:CS.waBubbleIn,borderRadius:'8px 8px 8px 2px',padding:'10px 12px 4px',boxShadow:'0 1px 1px rgba(0,0,0,.08)'}}>
            <div style={{fontSize:14,lineHeight:1.4,color:CS.waInk,marginBottom:10}}>Enseña tu carta en la barra y empezamos 👇</div>
            <div style={{borderTop:'1px solid #e9ece9',margin:'0 -12px'}}>
              <button style={{width:'100%',padding:'11px',background:'none',border:'none',color:'#027EB5',fontSize:14,fontWeight:500,fontFamily:CS.sans,cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',gap:6}}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#027EB5" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><path d="M14 14h7v7h-7z"/></svg>
                Abrir mi carta
              </button>
            </div>
            <div style={{fontSize:10,color:CS.waTime,textAlign:'right',marginTop:2}}>9:41</div>
          </div>
        </div>
      </div>

      <CWAInput/>
      <CHomeIndicator/>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// 03 — MY CARD / QR (mini-app / web abierta desde WA)
// ═══════════════════════════════════════════════════════════════
function MyCardScreen() {
  // Generate a QR-ish pattern
  const qrCells = React.useMemo(() => {
    const cells = [];
    const seed = 'PABLO2847';
    for (let i=0;i<25;i++) {
      const row = [];
      for (let j=0;j<25;j++) {
        const isCorner = (i<7&&j<7)||(i<7&&j>17)||(i>17&&j<7);
        if (isCorner) { row.push(0); continue; }
        const h = (i*31 + j*17 + seed.charCodeAt((i+j)%seed.length)) % 100;
        row.push(h > 48 ? 1 : 0);
      }
      cells.push(row);
    }
    return cells;
  }, []);

  return (
    <div style={{height:'100%',display:'flex',flexDirection:'column',background:CS.ink,color:'#fff',position:'relative',overflow:'hidden'}}>
      <CStatusBar dark/>

      {/* Ambient gradient */}
      <div style={{position:'absolute',top:-60,right:-80,width:260,height:260,borderRadius:'50%',background:'radial-gradient(circle, rgba(0,200,81,.35), transparent 65%)',pointerEvents:'none'}}/>
      <div style={{position:'absolute',bottom:-40,left:-60,width:200,height:200,borderRadius:'50%',background:'radial-gradient(circle, rgba(0,200,81,.2), transparent 65%)',pointerEvents:'none'}}/>

      {/* Top bar */}
      <div style={{padding:'4px 16px 10px',display:'flex',alignItems:'center',gap:10,position:'relative',zIndex:2}}>
        <button style={{width:36,height:36,borderRadius:10,background:'rgba(255,255,255,.08)',border:'1px solid rgba(255,255,255,.1)',display:'grid',placeItems:'center',cursor:'pointer'}}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>
        </button>
        <div style={{flex:1,textAlign:'center'}}>
          <div style={{fontFamily:CS.mono,fontSize:10,letterSpacing:'.16em',color:'rgba(255,255,255,.5)'}}>MI CARTA · CAFÉ MORENO</div>
        </div>
        <button style={{width:36,height:36,borderRadius:10,background:'rgba(255,255,255,.08)',border:'1px solid rgba(255,255,255,.1)',display:'grid',placeItems:'center',cursor:'pointer'}}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="19" r="1.5"/></svg>
        </button>
      </div>

      <div style={{flex:1,padding:'4px 16px 16px',position:'relative',zIndex:2,display:'flex',flexDirection:'column'}}>
        {/* Name + saldo */}
        <div style={{textAlign:'center',marginBottom:16}}>
          <div style={{fontFamily:CS.mono,fontSize:10,letterSpacing:'.14em',color:CS.green,marginBottom:4}}>PABLO · MIEMBRO DESDE HOY</div>
          <div style={{fontFamily:CS.serif,fontSize:56,letterSpacing:'-.02em',lineHeight:.95}}>50 <em style={{fontStyle:'italic',color:CS.green}}>puntos</em></div>
        </div>

        {/* QR card */}
        <div style={{background:'#fff',borderRadius:20,padding:18,position:'relative',marginBottom:14,boxShadow:'0 20px 40px rgba(0,0,0,.3)'}}>
          {/* Decorative corners */}
          <div style={{position:'absolute',top:10,left:10,width:18,height:18,borderTop:'2px solid '+CS.ink,borderLeft:'2px solid '+CS.ink,borderTopLeftRadius:6}}/>
          <div style={{position:'absolute',top:10,right:10,width:18,height:18,borderTop:'2px solid '+CS.ink,borderRight:'2px solid '+CS.ink,borderTopRightRadius:6}}/>
          <div style={{position:'absolute',bottom:10,left:10,width:18,height:18,borderBottom:'2px solid '+CS.ink,borderLeft:'2px solid '+CS.ink,borderBottomLeftRadius:6}}/>
          <div style={{position:'absolute',bottom:10,right:10,width:18,height:18,borderBottom:'2px solid '+CS.ink,borderRight:'2px solid '+CS.ink,borderBottomRightRadius:6}}/>

          {/* QR */}
          <div style={{width:'100%',aspectRatio:'1',background:'#fff',padding:8,display:'grid',gridTemplateColumns:'repeat(25,1fr)',gap:1,position:'relative'}}>
            {/* Finder patterns — 3 corners */}
            {[[0,0],[0,18],[18,0]].map(([r,c],i)=>(
              <React.Fragment key={i}>
                <div style={{gridColumn:`${c+1}/span 7`,gridRow:`${r+1}/span 7`,background:CS.ink,borderRadius:3,padding:5}}>
                  <div style={{width:'100%',height:'100%',background:'#fff',borderRadius:2,padding:5}}>
                    <div style={{width:'100%',height:'100%',background:CS.ink,borderRadius:1}}/>
                  </div>
                </div>
              </React.Fragment>
            ))}
            {/* Data modules */}
            {qrCells.flatMap((row,i)=>row.map((v,j)=>{
              const isCorner = (i<7&&j<7)||(i<7&&j>17)||(i>17&&j<7);
              if (isCorner) return null;
              return v ? <div key={i+'-'+j} style={{gridColumn:j+1,gridRow:i+1,background:CS.ink,borderRadius:1}}/> : null;
            }))}

            {/* Center logo */}
            <div style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',width:48,height:48,borderRadius:14,background:CS.green,display:'grid',placeItems:'center',boxShadow:'0 0 0 6px #fff'}}>
              <div style={{fontFamily:CS.serif,fontSize:28,color:CS.greenDark,letterSpacing:'-.01em'}}>C</div>
            </div>
          </div>

          <div style={{textAlign:'center',marginTop:10,paddingTop:10,borderTop:'1px dashed '+CS.line}}>
            <div style={{fontFamily:CS.mono,fontSize:11,letterSpacing:'.2em',color:CS.ink,fontWeight:600}}>ID · PABLO-2847</div>
            <div style={{fontSize:11,color:CS.ink4,marginTop:2}}>Enseña este código al camarero</div>
          </div>
        </div>

        {/* Progress to next reward */}
        <div style={{background:'rgba(255,255,255,.06)',border:'1px solid rgba(255,255,255,.1)',borderRadius:14,padding:'12px 14px',marginBottom:10}}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline',marginBottom:8}}>
            <div style={{fontSize:12,color:'rgba(255,255,255,.7)'}}>Te faltan para tu primer café</div>
            <div style={{fontFamily:CS.mono,fontSize:11,color:CS.green,fontWeight:500}}>50 / 100</div>
          </div>
          <div style={{height:6,background:'rgba(255,255,255,.08)',borderRadius:100,overflow:'hidden'}}>
            <div style={{height:'100%',width:'50%',background:`linear-gradient(90deg, ${CS.greenDeep}, ${CS.green})`,borderRadius:100,boxShadow:'0 0 10px rgba(0,200,81,.5)'}}/>
          </div>
        </div>

        {/* Tip */}
        <div style={{marginTop:'auto',textAlign:'center',fontSize:11,color:'rgba(255,255,255,.5)',letterSpacing:'.03em'}}>
          Pantalla al máximo brillo ✻ Actualizada cada 30 seg
        </div>
      </div>

      <CHomeIndicator dark/>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// 04 — 2ª VISITA · Puntos sumados (chat)
// ═══════════════════════════════════════════════════════════════
function SecondVisitScreen() {
  return (
    <div style={{height:'100%',display:'flex',flexDirection:'column',background:CS.waDoodle,position:'relative'}}>
      <div style={{background:CS.waGreen}}>
        <CStatusBar dark/>
        <CWAHeader brand="Café Moreno" sub="Cuenta de empresa · en línea"/>
      </div>

      <div style={{flex:1,overflowY:'auto',padding:'10px 8px 4px',backgroundImage:`url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'><g fill='none' stroke='%23d4cdc2' stroke-width='1' opacity='.5'><circle cx='20' cy='20' r='3'/><path d='M40 50 Q50 40 60 50 T80 50'/><circle cx='130' cy='70' r='3'/><path d='M20 100 q10 -6 20 0 t20 0'/></g></svg>")`,backgroundRepeat:'repeat',backgroundColor:CS.waDoodle}}>
        {/* Prev msgs preview */}
        <div style={{maxWidth:'75%',marginBottom:4,opacity:.7}}>
          <div style={{background:CS.waBubbleIn,borderRadius:'8px 8px 8px 2px',padding:'7px 10px 5px',boxShadow:'0 1px 1px rgba(0,0,0,.08)'}}>
            <div style={{fontSize:13,color:CS.waInk}}>¡Gracias por volver, Pablo! ☕</div>
            <div style={{fontSize:10,color:CS.waTime,textAlign:'right',marginTop:2}}>14:23</div>
          </div>
        </div>

        {/* Date chip small */}
        <div style={{display:'flex',justifyContent:'center',margin:'8px 0'}}>
          <div style={{background:'rgba(225,245,254,.92)',padding:'4px 10px',borderRadius:8,fontSize:10,color:CS.waInk2,fontWeight:500}}>HOY · 14:24</div>
        </div>

        {/* Points received card */}
        <div style={{maxWidth:'90%',marginBottom:4}}>
          <div style={{background:CS.waBubbleIn,borderRadius:'8px 8px 8px 2px',padding:5,boxShadow:'0 1px 1px rgba(0,0,0,.08)'}}>
            <div style={{background:CS.greenWash,borderRadius:6,padding:'14px 16px 12px',marginBottom:5,position:'relative',overflow:'hidden',border:'1px solid rgba(0,200,81,.25)'}}>
              <div style={{position:'absolute',inset:0,background:'radial-gradient(circle at 20% 20%, rgba(0,200,81,.15), transparent 60%)'}}/>

              <div style={{display:'flex',alignItems:'center',gap:6,marginBottom:10,position:'relative'}}>
                <div style={{width:22,height:22,borderRadius:'50%',background:CS.green,display:'grid',placeItems:'center'}}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={CS.greenDark} strokeWidth="3" strokeLinecap="round"><path d="M5 13l4 4L19 7"/></svg>
                </div>
                <div style={{fontFamily:CS.mono,fontSize:10,letterSpacing:'.14em',color:CS.greenDeep}}>PUNTOS AÑADIDOS</div>
              </div>

              <div style={{display:'flex',alignItems:'baseline',gap:8,position:'relative'}}>
                <div style={{fontFamily:CS.serif,fontSize:48,color:CS.greenDark,letterSpacing:'-.02em',lineHeight:.9}}>+32</div>
                <div style={{fontSize:13,color:CS.ink3}}>por 6,40 €</div>
              </div>

              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:12,paddingTop:10,borderTop:'1px dashed rgba(0,168,67,.3)',position:'relative'}}>
                <div style={{fontSize:11,color:CS.ink3}}>Saldo total</div>
                <div style={{fontFamily:CS.serif,fontSize:22,color:CS.ink,letterSpacing:'-.01em'}}>82 <em style={{fontStyle:'italic',color:CS.greenDeep}}>pts</em></div>
              </div>
            </div>

            <div style={{padding:'2px 8px 4px'}}>
              <div style={{fontSize:13.5,color:CS.waInk,lineHeight:1.4,marginBottom:6}}>¡Casi tienes tu primer café! ☕ <b>18 pts</b> más y es tuyo.</div>
              {/* Progress */}
              <div style={{height:6,background:'#eef1ee',borderRadius:100,overflow:'hidden',marginTop:8,marginBottom:2}}>
                <div style={{height:'100%',width:'82%',background:`linear-gradient(90deg, ${CS.greenDeep}, ${CS.green})`,borderRadius:100}}/>
              </div>
              <div style={{display:'flex',justifyContent:'space-between',fontFamily:CS.mono,fontSize:9.5,color:CS.ink4,marginTop:4}}>
                <span>82 pts</span>
                <span>☕ 100 pts</span>
              </div>
            </div>

            <div style={{fontSize:10,color:CS.waTime,textAlign:'right',padding:'2px 8px 2px'}}>14:24 <span style={{display:'inline-block',verticalAlign:'middle',marginLeft:2}}><CTicks/></span></div>
          </div>
        </div>

        {/* CTA */}
        <div style={{maxWidth:'80%',marginBottom:4}}>
          <div style={{background:CS.waBubbleIn,borderRadius:'8px 8px 8px 2px',padding:'8px 12px 4px',boxShadow:'0 1px 1px rgba(0,0,0,.08)'}}>
            <div style={{fontSize:13.5,color:CS.waInk,lineHeight:1.4}}>Mira tu saldo y los premios:</div>
            <div style={{borderTop:'1px solid #e9ece9',margin:'8px -12px 0'}}>
              <button style={{width:'100%',padding:'11px',background:'none',border:'none',color:'#027EB5',fontSize:14,fontWeight:500,fontFamily:CS.sans,cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',gap:6}}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#027EB5" strokeWidth="2"><path d="M15 3h6v6M14 10l7-7M10 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-5"/></svg>
                Ver mis puntos
              </button>
            </div>
            <div style={{fontSize:10,color:CS.waTime,textAlign:'right',marginTop:2}}>14:24 <span style={{display:'inline-block',verticalAlign:'middle',marginLeft:2}}><CTicks/></span></div>
          </div>
        </div>
      </div>

      <CWAInput/>
      <CHomeIndicator/>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// 05 — MIS PUNTOS (panel completo, mini-app abierta)
// ═══════════════════════════════════════════════════════════════
function MyPointsScreen() {
  const [tab, setTab] = React.useState('premios');
  const rewards = [
    {emoji:'☕',n:'Café por la casa',pts:100,available:false,almost:true},
    {emoji:'🥐',n:'Croissant',pts:150,available:false},
    {emoji:'🍷',n:'Copa de vino',pts:250,available:false},
    {emoji:'🍰',n:'Tarta del día',pts:400,available:false},
    {emoji:'🎁',n:'Brunch para 2',pts:800,available:false},
  ];
  const history = [
    {t:'Visita de hoy',d:'14:24 · 6,40 €',v:'+32',type:'earn'},
    {t:'Visita',d:'ayer · 4,90 €',v:'+25',type:'earn'},
    {t:'Bienvenida',d:'hace 3 días',v:'+50',type:'welcome'},
    {t:'Visita',d:'hace 3 días · 5,00 €',v:'+25',type:'earn'},
  ];

  return (
    <div style={{height:'100%',display:'flex',flexDirection:'column',background:CS.paper}}>
      <CStatusBar/>

      {/* Mini-app header */}
      <div style={{padding:'4px 16px 0',display:'flex',alignItems:'center',gap:10}}>
        <button style={{width:34,height:34,borderRadius:10,background:'#fff',border:'1px solid '+CS.line,display:'grid',placeItems:'center',cursor:'pointer'}}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={CS.ink} strokeWidth="2.2" strokeLinecap="round"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <div style={{flex:1,fontSize:11,color:CS.ink4,fontFamily:CS.mono,letterSpacing:'.1em'}}>🔒 cafemoreno.wl.app</div>
        <button style={{width:34,height:34,borderRadius:10,background:'#fff',border:'1px solid '+CS.line,display:'grid',placeItems:'center',cursor:'pointer'}}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={CS.ink} strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="19" r="1.5"/></svg>
        </button>
      </div>

      <div style={{flex:1,overflowY:'auto',padding:'14px 16px 0'}}>
        {/* Brand header */}
        <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:14}}>
          <div style={{width:42,height:42,borderRadius:11,background:CS.ink,display:'grid',placeItems:'center'}}>
            <div style={{fontFamily:CS.serif,fontSize:22,color:CS.green,letterSpacing:'-.01em'}}>C</div>
          </div>
          <div>
            <div style={{fontFamily:CS.sans,fontSize:15,fontWeight:500,letterSpacing:'-.01em'}}>Café Moreno</div>
            <div style={{fontSize:11,color:CS.ink4}}>Pablo · 2 visitas</div>
          </div>
        </div>

        {/* Hero balance */}
        <div style={{background:CS.ink,color:'#fff',borderRadius:18,padding:'18px 18px 16px',marginBottom:12,position:'relative',overflow:'hidden'}}>
          <div style={{position:'absolute',top:-30,right:-30,width:180,height:180,borderRadius:'50%',background:'radial-gradient(circle, rgba(0,200,81,.3), transparent 60%)'}}/>
          <div style={{position:'relative'}}>
            <div style={{fontFamily:CS.mono,fontSize:10,letterSpacing:'.14em',color:CS.green,marginBottom:4}}>MI SALDO</div>
            <div style={{fontFamily:CS.serif,fontSize:64,letterSpacing:'-.02em',lineHeight:.9,marginBottom:4}}>82 <em style={{fontStyle:'italic',color:CS.green}}>pts</em></div>
            <div style={{fontSize:12,color:'rgba(255,255,255,.6)'}}>equivalen a ~ 0,82 € de consumo</div>

            <div style={{display:'flex',gap:6,marginTop:14}}>
              <button style={{flex:1,padding:'10px',borderRadius:10,background:CS.green,color:CS.greenDark,border:'none',fontSize:12.5,fontWeight:600,fontFamily:CS.sans,cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',gap:6}}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={CS.greenDark} strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><path d="M14 14h7v7h-7z"/></svg>
                Mi carta
              </button>
              <button style={{flex:1,padding:'10px',borderRadius:10,background:'rgba(255,255,255,.08)',color:'#fff',border:'1px solid rgba(255,255,255,.12)',fontSize:12.5,fontWeight:500,fontFamily:CS.sans,cursor:'pointer'}}>Cómo sumar</button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div style={{display:'flex',gap:4,marginBottom:10,background:CS.paper2,padding:3,borderRadius:11,border:'1px solid '+CS.line}}>
          {[{id:'premios',l:'Premios'},{id:'historial',l:'Historial'},{id:'como',l:'Cómo sumar'}].map(t=>(
            <button key={t.id} onClick={()=>setTab(t.id)} style={{flex:1,padding:'7px',borderRadius:8,background:tab===t.id?'#fff':'transparent',border:'none',fontSize:12,fontWeight:500,fontFamily:CS.sans,color:tab===t.id?CS.ink:CS.ink4,cursor:'pointer',boxShadow:tab===t.id?'0 1px 2px rgba(0,0,0,.06)':'none'}}>{t.l}</button>
          ))}
        </div>

        {tab==='premios' && (
          <div style={{background:'#fff',border:'1px solid '+CS.line,borderRadius:14,overflow:'hidden',marginBottom:12}}>
            {rewards.map((r,i)=>{
              const pct = Math.min(100, Math.round(82/r.pts*100));
              return (
                <div key={i} style={{padding:'11px 12px',borderTop:i?'1px solid '+CS.line:'none',display:'grid',gridTemplateColumns:'auto 1fr auto',gap:10,alignItems:'center'}}>
                  <div style={{width:42,height:42,borderRadius:11,background:r.almost?CS.greenWash:CS.paper2,display:'grid',placeItems:'center',fontSize:22,border:'1px solid '+(r.almost?'rgba(0,200,81,.25)':CS.line)}}>{r.emoji}</div>
                  <div style={{minWidth:0}}>
                    <div style={{display:'flex',alignItems:'center',gap:6}}>
                      <div style={{fontSize:13.5,fontWeight:500}}>{r.n}</div>
                      {r.almost && <span style={{fontFamily:CS.mono,fontSize:8,letterSpacing:'.1em',color:CS.greenDeep,background:CS.greenWash,padding:'2px 6px',borderRadius:6,border:'1px solid rgba(0,200,81,.25)'}}>CERCA</span>}
                    </div>
                    <div style={{height:4,background:CS.paper2,borderRadius:100,marginTop:5,overflow:'hidden'}}>
                      <div style={{height:'100%',width:pct+'%',background:r.almost?CS.green:CS.ink4,borderRadius:100}}/>
                    </div>
                    <div style={{fontFamily:CS.mono,fontSize:9.5,color:CS.ink4,marginTop:3,letterSpacing:'.04em'}}>82 / {r.pts} PTS · te faltan {r.pts-82}</div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {tab==='historial' && (
          <div style={{background:'#fff',border:'1px solid '+CS.line,borderRadius:14,overflow:'hidden',marginBottom:12}}>
            {history.map((h,i)=>(
              <div key={i} style={{padding:'11px 14px',borderTop:i?'1px solid '+CS.line:'none',display:'flex',alignItems:'center',gap:12}}>
                <div style={{width:32,height:32,borderRadius:10,background:h.type==='welcome'?'#FDF4C4':CS.greenWash,display:'grid',placeItems:'center',border:'1px solid '+(h.type==='welcome'?'#e8d888':'rgba(0,200,81,.25)')}}>
                  {h.type==='welcome'?'🎁':'☕'}
                </div>
                <div style={{flex:1}}>
                  <div style={{fontSize:13,fontWeight:500}}>{h.t}</div>
                  <div style={{fontFamily:CS.mono,fontSize:10,color:CS.ink4,marginTop:1}}>{h.d}</div>
                </div>
                <div style={{fontFamily:CS.serif,fontSize:22,color:CS.greenDeep,letterSpacing:'-.01em'}}>{h.v}</div>
              </div>
            ))}
          </div>
        )}

        {tab==='como' && (
          <div style={{display:'flex',flexDirection:'column',gap:8,marginBottom:12}}>
            {[
              {ic:'☕',n:'Cada euro que consumes',d:'suma 2 puntos'},
              {ic:'🎂',n:'El día de tu cumple',d:'×3 durante 7 días'},
              {ic:'⏰',n:'Happy hour mar/mié 17–19h',d:'×1.5 puntos'},
              {ic:'👥',n:'Trae a un amigo',d:'+50 pts para los dos'},
            ].map((r,i)=>(
              <div key={i} style={{background:'#fff',border:'1px solid '+CS.line,borderRadius:12,padding:'12px 14px',display:'flex',alignItems:'center',gap:12}}>
                <div style={{width:40,height:40,borderRadius:10,background:CS.paper2,display:'grid',placeItems:'center',fontSize:20,border:'1px solid '+CS.line}}>{r.ic}</div>
                <div style={{flex:1}}>
                  <div style={{fontSize:13,fontWeight:500}}>{r.n}</div>
                  <div style={{fontFamily:CS.mono,fontSize:10,color:CS.greenDeep,marginTop:2}}>{r.d}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer note */}
        <div style={{fontSize:10.5,color:CS.ink4,textAlign:'center',lineHeight:1.5,margin:'4px 0 12px'}}>
          Los puntos no caducan · Responde <b>BAJA</b> en el chat para darte de baja
        </div>
      </div>

      <CHomeIndicator/>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// 06 — CANJE REALIZADO (chat + ticket)
// ═══════════════════════════════════════════════════════════════
function RedeemedScreen() {
  return (
    <div style={{height:'100%',display:'flex',flexDirection:'column',background:CS.waDoodle,position:'relative'}}>
      <div style={{background:CS.waGreen}}>
        <CStatusBar dark/>
        <CWAHeader brand="Café Moreno" sub="Cuenta de empresa · en línea"/>
      </div>

      <div style={{flex:1,overflowY:'auto',padding:'10px 8px 4px',backgroundImage:`url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'><g fill='none' stroke='%23d4cdc2' stroke-width='1' opacity='.5'><circle cx='20' cy='20' r='3'/><path d='M40 50 Q50 40 60 50 T80 50'/><circle cx='130' cy='70' r='3'/><path d='M20 100 q10 -6 20 0 t20 0'/></g></svg>")`,backgroundRepeat:'repeat',backgroundColor:CS.waDoodle}}>

        {/* Date chip */}
        <div style={{display:'flex',justifyContent:'center',margin:'4px 0 8px'}}>
          <div style={{background:'rgba(225,245,254,.92)',padding:'4px 10px',borderRadius:8,fontSize:10,color:CS.waInk2,fontWeight:500}}>HOY · 10:18</div>
        </div>

        {/* Congrats msg */}
        <div style={{maxWidth:'80%',marginBottom:4}}>
          <div style={{background:CS.waBubbleIn,borderRadius:'8px 8px 8px 2px',padding:'8px 10px 6px',boxShadow:'0 1px 1px rgba(0,0,0,.08)'}}>
            <div style={{fontSize:14,lineHeight:1.4,color:CS.waInk}}>¡Disfrútalo, Pablo! ☕</div>
            <div style={{fontSize:10,color:CS.waTime,textAlign:'right',marginTop:2}}>10:18</div>
          </div>
        </div>

        {/* Receipt ticket card */}
        <div style={{maxWidth:'90%',marginBottom:4}}>
          <div style={{background:CS.waBubbleIn,borderRadius:'8px 8px 8px 2px',padding:5,boxShadow:'0 1px 1px rgba(0,0,0,.08)'}}>

            {/* Ticket */}
            <div style={{background:'#fff',border:'1px solid '+CS.line,borderRadius:6,overflow:'hidden',position:'relative',marginBottom:5}}>
              {/* Perforation edges */}
              <div style={{position:'absolute',left:-5,top:100,bottom:70,width:10,background:'radial-gradient(circle, '+CS.waBubbleIn+' 4px, transparent 4px) 0 0 / 10px 14px'}}/>
              <div style={{position:'absolute',right:-5,top:100,bottom:70,width:10,background:'radial-gradient(circle, '+CS.waBubbleIn+' 4px, transparent 4px) 0 0 / 10px 14px'}}/>

              {/* Header band */}
              <div style={{background:CS.ink,color:'#fff',padding:'12px 14px',textAlign:'center',position:'relative',overflow:'hidden'}}>
                <div style={{position:'absolute',inset:0,background:'radial-gradient(circle at 70% 30%, rgba(0,200,81,.25), transparent 60%)'}}/>
                <div style={{fontFamily:CS.mono,fontSize:9,letterSpacing:'.2em',color:CS.green,marginBottom:2,position:'relative'}}>CANJE REALIZADO · #00143</div>
                <div style={{fontFamily:CS.serif,fontSize:22,letterSpacing:'-.01em',position:'relative'}}>Café <em style={{fontStyle:'italic',color:CS.green}}>por la casa</em></div>
              </div>

              {/* Body */}
              <div style={{padding:'14px 16px'}}>
                <div style={{textAlign:'center',marginBottom:12}}>
                  <div style={{fontSize:54,lineHeight:1,marginBottom:4}}>☕</div>
                  <div style={{fontFamily:CS.mono,fontSize:9,letterSpacing:'.14em',color:CS.ink4,marginTop:6}}>ENTREGADO POR JAVIER · 10:18</div>
                </div>

                {/* Barcode-like */}
                <div style={{display:'flex',gap:1,height:30,justifyContent:'center',marginBottom:8}}>
                  {Array.from({length:40}).map((_,i)=>{
                    const w = ((i*13 + 7) % 5) > 2 ? 2 : 1;
                    return <div key={i} style={{width:w,height:'100%',background:CS.ink}}/>;
                  })}
                </div>
                <div style={{textAlign:'center',fontFamily:CS.mono,fontSize:10,color:CS.ink3,letterSpacing:'.2em'}}>PABLO-2847-00143</div>
              </div>

              {/* Dashed separator */}
              <div style={{borderTop:'1px dashed '+CS.line,margin:'0 14px'}}/>

              {/* Summary rows */}
              <div style={{padding:'10px 14px 12px'}}>
                <div style={{display:'flex',justifyContent:'space-between',fontSize:12,marginBottom:4}}>
                  <span style={{color:CS.ink4}}>Saldo anterior</span>
                  <span style={{fontFamily:CS.mono,color:CS.ink}}>182 pts</span>
                </div>
                <div style={{display:'flex',justifyContent:'space-between',fontSize:12,marginBottom:4}}>
                  <span style={{color:CS.ink4}}>Canje</span>
                  <span style={{fontFamily:CS.mono,color:CS.red}}>−100 pts</span>
                </div>
                <div style={{display:'flex',justifyContent:'space-between',paddingTop:6,marginTop:4,borderTop:'1px solid '+CS.line}}>
                  <span style={{fontSize:12,color:CS.ink3,fontWeight:500}}>Saldo ahora</span>
                  <span style={{fontFamily:CS.serif,fontSize:18,color:CS.greenDeep,letterSpacing:'-.01em'}}>82 pts</span>
                </div>
              </div>
            </div>

            {/* Msg body */}
            <div style={{padding:'2px 8px 4px'}}>
              <div style={{fontSize:13,color:CS.waInk,lineHeight:1.4}}>Nos vemos pronto 👋 La casa invita cuando llegues a <b>1 000 pts</b>.</div>
            </div>

            <div style={{fontSize:10,color:CS.waTime,textAlign:'right',padding:'2px 8px 2px'}}>10:18 <span style={{display:'inline-block',verticalAlign:'middle',marginLeft:2}}><CTicks/></span></div>
          </div>
        </div>

        {/* Rating prompt */}
        <div style={{maxWidth:'80%',marginBottom:4}}>
          <div style={{background:CS.waBubbleIn,borderRadius:'8px 8px 8px 2px',padding:'10px 12px 8px',boxShadow:'0 1px 1px rgba(0,0,0,.08)'}}>
            <div style={{fontSize:13.5,color:CS.waInk,lineHeight:1.4,marginBottom:8}}>¿Qué tal estaba? Nos ayuda mucho saber:</div>
            <div style={{display:'flex',gap:4,justifyContent:'space-between'}}>
              {['😞','😐','🙂','😊','🤩'].map((e,i)=>(
                <button key={i} style={{flex:1,padding:'8px',borderRadius:10,background:i===3?CS.greenWash:CS.paper,border:'1px solid '+(i===3?'rgba(0,200,81,.4)':CS.line),fontSize:22,cursor:'pointer'}}>{e}</button>
              ))}
            </div>
            <div style={{fontSize:10,color:CS.waTime,textAlign:'right',marginTop:4}}>10:19</div>
          </div>
        </div>
      </div>

      <CWAInput/>
      <CHomeIndicator/>
    </div>
  );
}

Object.assign(window, { ChatListScreen, WelcomeChatScreen, MyCardScreen, SecondVisitScreen, MyPointsScreen, RedeemedScreen, CS });
