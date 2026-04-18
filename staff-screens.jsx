// ═══════════════════════════════════════════════════════════════
// WhatsLoyalty Staff — 6 pantallas + iconos compartidos
// ═══════════════════════════════════════════════════════════════

// ── TOKENS ──
const S = {
  green:'#00C851', greenDeep:'#00a843', greenDark:'#04200f', greenSoft:'#7EE2A8', greenWash:'#e8fdf0',
  ink:'#0A0F0C', ink2:'#1a201c', ink3:'#3d4540', ink4:'#6b7570', ink5:'#9aa39e',
  paper:'#F6F5F0', paper2:'#ECEAE1', paper3:'#E0DCCD', line:'#dcd9cc', line2:'#c8c4b3',
  red:'#E55A4B', amber:'#E0A330', blue:'#4A7A8C',
  sans:'"Inter Tight", -apple-system, system-ui, sans-serif',
  serif:'"Instrument Serif", "Times New Roman", serif',
  mono:'"JetBrains Mono", ui-monospace, monospace',
};

// ── ICONS (line, 24px) ──
const Ic = {
  qr: (c=S.ink, s=24) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="5.5" y="5.5" width="2" height="2"/><rect x="16.5" y="5.5" width="2" height="2"/><rect x="5.5" y="16.5" width="2" height="2"/><path d="M14 14h3v3M20 14v3M14 20h3M20 20v-3"/></svg>,
  phone: (c=S.ink, s=24) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/></svg>,
  check:(c=S.ink,s=24)=> <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7"/></svg>,
  gift:(c=S.ink,s=24)=> <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M4 12v9h16v-9M12 8v13M9 8a2 2 0 110-4c2 0 3 4 3 4s1-4 3-4a2 2 0 110 4"/></svg>,
  clock:(c=S.ink,s=24)=> <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>,
  home:(c=S.ink,s=24)=> <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11l9-8 9 8v10a1 1 0 01-1 1h-5v-7h-6v7H4a1 1 0 01-1-1V11z"/></svg>,
  user:(c=S.ink,s=24)=> <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-7 8-7s8 3 8 7"/></svg>,
  back:(c=S.ink,s=24)=> <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>,
  close:(c=S.ink,s=24)=> <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 6l12 12M18 6L6 18"/></svg>,
  flash:(c=S.ink,s=22)=> <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"/></svg>,
  gallery:(c=S.ink,s=22)=> <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="M21 15l-5-5L5 21"/></svg>,
  star:(c=S.ink,s=18)=> <svg width={s} height={s} viewBox="0 0 24 24" fill={c} stroke={c} strokeWidth="1" strokeLinejoin="round"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.7 7-6.3-3.8-6.3 3.8 1.7-7L2 9.5l7.1-.6z"/></svg>,
  sparkle:(c=S.green,s=18)=> <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M6 18l2.5-2.5M15.5 8.5L18 6"/></svg>,
  plus:(c=S.ink,s=20)=> <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg>,
  search:(c=S.ink,s=20)=> <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round"><circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/></svg>,
  arrow:(c=S.ink,s=20)=> <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>,
  dot:(c=S.green)=> <span style={{width:7,height:7,borderRadius:'50%',background:c,display:'inline-block'}}/>,
  undo:(c=S.ink,s=18)=> <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 14l-4-4 4-4"/><path d="M5 10h9a5 5 0 010 10h-2"/></svg>,
  coffee:(c=S.ink,s=20)=> <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 8h14v6a5 5 0 01-5 5H9a5 5 0 01-5-5V8z"/><path d="M18 10h2a2 2 0 010 4h-2"/><path d="M8 2v3M12 2v3"/></svg>,
  bell:(c=S.ink,s=20)=> <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 1112 0c0 7 3 7 3 10H3c0-3 3-3 3-10z"/><path d="M10 21a2 2 0 004 0"/></svg>,
};

// ═══════════════════════════════════════════════════════════════
// Chrome helpers
// ═══════════════════════════════════════════════════════════════
function StaffStatusBar({ dark=false }) {
  const c = dark ? '#fff' : S.ink;
  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'14px 30px 6px',fontFamily:S.sans,fontWeight:600,fontSize:15,color:c,position:'relative',zIndex:10}}>
      <span>9:41</span>
      <div style={{display:'flex',gap:6,alignItems:'center'}}>
        <svg width="17" height="11" viewBox="0 0 17 11"><rect x="0" y="6.5" width="3" height="4.5" rx=".7" fill={c}/><rect x="4.5" y="4.5" width="3" height="6.5" rx=".7" fill={c}/><rect x="9" y="2" width="3" height="9" rx=".7" fill={c}/><rect x="13.5" y="0" width="3" height="11" rx=".7" fill={c}/></svg>
        <svg width="15" height="11" viewBox="0 0 15 11"><path d="M7.5 3C9.6 3 11.4 3.8 12.8 5.1L13.8 4.1C12.1 2.5 9.9 1.5 7.5 1.5C5.1 1.5 2.9 2.5 1.2 4.1L2.2 5.1C3.6 3.8 5.4 3 7.5 3Z" fill={c}/><circle cx="7.5" cy="9" r="1.3" fill={c}/></svg>
        <svg width="24" height="11" viewBox="0 0 24 11"><rect x=".5" y=".5" width="20.5" height="10" rx="2.5" stroke={c} strokeOpacity=".4" fill="none"/><rect x="2" y="2" width="18" height="7" rx="1.5" fill={c}/><path d="M22 3.5v4c.7-.2 1.3-.9 1.3-2s-.6-1.8-1.3-2z" fill={c} fillOpacity=".5"/></svg>
      </div>
    </div>
  );
}

function HomeIndicator({ dark=false }) {
  return <div style={{position:'absolute',bottom:0,left:0,right:0,height:32,display:'flex',justifyContent:'center',alignItems:'flex-end',paddingBottom:9,pointerEvents:'none',zIndex:60}}>
    <div style={{width:134,height:5,borderRadius:100,background:dark?'rgba(255,255,255,.7)':'rgba(10,15,12,.3)'}}/>
  </div>;
}

function TopBar({ title, back, onBack, right, dark=false, sub }) {
  const c = dark?'#fff':S.ink, c2 = dark?'rgba(255,255,255,.55)':S.ink4;
  return (
    <div style={{padding:'8px 16px 14px',display:'flex',alignItems:'center',gap:12,borderBottom:'1px solid '+(dark?'rgba(255,255,255,.08)':S.line)}}>
      {back && <button onClick={onBack} style={{width:38,height:38,borderRadius:12,background:dark?'rgba(255,255,255,.08)':'#fff',border:'1px solid '+(dark?'rgba(255,255,255,.1)':S.line),display:'grid',placeItems:'center',cursor:'pointer'}}>{Ic.back(c,20)}</button>}
      <div style={{flex:1,minWidth:0}}>
        {sub && <div style={{fontFamily:S.mono,fontSize:10,letterSpacing:'.14em',textTransform:'uppercase',color:c2,marginBottom:2}}>{sub}</div>}
        <div style={{fontFamily:S.sans,fontSize:19,fontWeight:600,color:c,lineHeight:1.1,letterSpacing:'-.01em'}}>{title}</div>
      </div>
      {right}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// SCREEN 1 — LOGIN / PIN
// ═══════════════════════════════════════════════════════════════
function LoginScreen({ onNext }) {
  const [pin, setPin] = React.useState('');
  const press = (n) => { if (pin.length < 4) { const p = pin + n; setPin(p); if (p.length === 4) setTimeout(()=>onNext&&onNext(),300); } };
  const del = () => setPin(pin.slice(0,-1));

  return (
    <div style={{height:'100%',display:'flex',flexDirection:'column',background:S.ink,color:'#fff',position:'relative',overflow:'hidden'}}>
      <div style={{position:'absolute',inset:0,background:'radial-gradient(circle at 70% 20%, rgba(0,200,81,.15), transparent 50%), radial-gradient(circle at 20% 80%, rgba(0,200,81,.1), transparent 45%)',pointerEvents:'none'}}/>
      <StaffStatusBar dark/>
      <div style={{flex:1,display:'flex',flexDirection:'column',padding:'40px 28px 20px',position:'relative',zIndex:1}}>
        <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:48}}>
          <div style={{width:30,height:30,borderRadius:8,background:S.green,display:'grid',placeItems:'center',color:S.greenDark,fontWeight:700,fontSize:15}}>W</div>
          <div style={{fontFamily:S.serif,fontSize:22,letterSpacing:'-.01em'}}>Whats<em style={{fontStyle:'italic',color:S.green}}>Loyalty</em></div>
          <span style={{marginLeft:'auto',fontFamily:S.mono,fontSize:10,letterSpacing:'.12em',color:'rgba(255,255,255,.5)'}}>STAFF</span>
        </div>

        <div style={{marginBottom:36}}>
          <div style={{fontFamily:S.mono,fontSize:11,letterSpacing:'.14em',color:S.green,marginBottom:10,display:'flex',alignItems:'center',gap:8}}>● CAFÉ MORENO · CHAMBERÍ</div>
          <div style={{fontSize:30,fontWeight:500,lineHeight:1.1,letterSpacing:'-.02em',marginBottom:10}}>Hola, <span style={{color:S.green}}>Javier</span>.</div>
          <div style={{fontSize:14,color:'rgba(255,255,255,.6)',lineHeight:1.45}}>Introduce tu PIN para empezar el turno.</div>
        </div>

        {/* Dots */}
        <div style={{display:'flex',justifyContent:'center',gap:18,marginBottom:44}}>
          {[0,1,2,3].map(i=> (
            <div key={i} style={{width:16,height:16,borderRadius:'50%',border:'1.5px solid '+(pin.length>i?S.green:'rgba(255,255,255,.25)'),background:pin.length>i?S.green:'transparent',transition:'all .2s'}}/>
          ))}
        </div>

        {/* Keypad */}
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:14,marginTop:'auto'}}>
          {[1,2,3,4,5,6,7,8,9].map(n=> (
            <button key={n} onClick={()=>press(n)} style={{height:62,borderRadius:18,background:'rgba(255,255,255,.06)',border:'1px solid rgba(255,255,255,.08)',color:'#fff',fontSize:26,fontWeight:400,fontFamily:S.sans,cursor:'pointer',transition:'background .15s'}} onMouseDown={e=>e.currentTarget.style.background='rgba(255,255,255,.12)'} onMouseUp={e=>e.currentTarget.style.background='rgba(255,255,255,.06)'}>{n}</button>
          ))}
          <button style={{height:62,borderRadius:18,background:'transparent',color:'rgba(255,255,255,.4)',fontSize:12,fontFamily:S.mono,letterSpacing:'.08em',cursor:'pointer'}}>OLVIDÉ</button>
          <button onClick={()=>press(0)} style={{height:62,borderRadius:18,background:'rgba(255,255,255,.06)',border:'1px solid rgba(255,255,255,.08)',color:'#fff',fontSize:26,cursor:'pointer'}}>0</button>
          <button onClick={del} style={{height:62,borderRadius:18,background:'transparent',color:'rgba(255,255,255,.6)',cursor:'pointer',display:'grid',placeItems:'center'}}>← <span style={{fontSize:11,fontFamily:S.mono,marginLeft:4}}>BORRAR</span></button>
        </div>
      </div>
      <HomeIndicator dark/>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// SCREEN 2 — HOME / SCANNER (principal)
// ═══════════════════════════════════════════════════════════════
function HomeScreen({ onScan, onRedeem, onHistory, onManual }) {
  return (
    <div style={{height:'100%',display:'flex',flexDirection:'column',background:'#000',color:'#fff',position:'relative',overflow:'hidden'}}>
      <StaffStatusBar dark/>

      {/* Top meta */}
      <div style={{padding:'6px 20px 12px',display:'flex',alignItems:'center',gap:10,position:'relative',zIndex:10}}>
        <div style={{width:34,height:34,borderRadius:10,background:'rgba(255,255,255,.12)',display:'grid',placeItems:'center',fontWeight:600,fontSize:13}}>J</div>
        <div style={{flex:1,minWidth:0}}>
          <div style={{fontFamily:S.mono,fontSize:9,letterSpacing:'.14em',color:'rgba(255,255,255,.5)'}}>TURNO DE HOY</div>
          <div style={{fontSize:13,fontWeight:500,display:'flex',alignItems:'center',gap:8}}>Javier · <span style={{color:S.green}}>84 ventas</span> <span style={{color:'rgba(255,255,255,.4)'}}>·</span> 847€</div>
        </div>
        <button style={{width:36,height:36,borderRadius:'50%',background:'rgba(255,255,255,.1)',border:'1px solid rgba(255,255,255,.1)',display:'grid',placeItems:'center',cursor:'pointer',position:'relative'}}>
          {Ic.bell('#fff',18)}
          <span style={{position:'absolute',top:6,right:7,width:8,height:8,borderRadius:'50%',background:S.green,border:'2px solid #000'}}/>
        </button>
      </div>

      {/* Scanner viewport */}
      <div style={{flex:1,position:'relative',margin:'0 16px',borderRadius:28,overflow:'hidden',background:'linear-gradient(135deg,#141d18 0%, #0a0f0c 50%, #0f2e1e 100%)'}}>
        {/* Simulated camera feed bg */}
        <div style={{position:'absolute',inset:0,background:'radial-gradient(circle at 30% 30%, rgba(0,200,81,.18), transparent 50%), radial-gradient(circle at 70% 80%, rgba(74,122,140,.15), transparent 50%)'}}/>
        <div style={{position:'absolute',inset:0,backgroundImage:`linear-gradient(transparent 0, transparent calc(100% - 1px), rgba(255,255,255,.04) calc(100% - 1px)), linear-gradient(90deg, transparent 0, transparent calc(100% - 1px), rgba(255,255,255,.04) calc(100% - 1px))`,backgroundSize:'24px 24px'}}/>

        {/* Corner brackets */}
        <div style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',width:220,height:220}}>
          {[[0,0,'left','top'],[0,0,'right','top'],[0,0,'left','bottom'],[0,0,'right','bottom']].map(([,,x,y],i)=>{
            const base = {position:'absolute',width:32,height:32,borderColor:S.green,borderStyle:'solid',borderWidth:0};
            const pos = {};
            if(x==='left') {pos.left=0; base.borderLeftWidth=3;}
            else {pos.right=0; base.borderRightWidth=3;}
            if(y==='top') {pos.top=0; base.borderTopWidth=3;}
            else {pos.bottom=0; base.borderBottomWidth=3;}
            return <div key={i} style={{...base,...pos,borderRadius:y==='top'?(x==='left'?'8px 0 0 0':'0 8px 0 0'):(x==='left'?'0 0 0 8px':'0 0 8px 0')}}/>;
          })}
          {/* Scan line animation */}
          <div style={{position:'absolute',left:14,right:14,top:'50%',height:2,background:`linear-gradient(90deg, transparent, ${S.green}, transparent)`,boxShadow:`0 0 12px ${S.green}`,animation:'scanline 2.2s ease-in-out infinite'}}/>
          {/* Mock QR in center */}
          <div style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',opacity:.22}}>
            <FakeQR size={140}/>
          </div>
        </div>

        {/* Flashlight chip */}
        <button style={{position:'absolute',top:16,right:16,width:44,height:44,borderRadius:'50%',background:'rgba(255,255,255,.08)',backdropFilter:'blur(8px)',border:'1px solid rgba(255,255,255,.15)',display:'grid',placeItems:'center',cursor:'pointer'}}>{Ic.flash('#fff',20)}</button>
        {/* Instruction */}
        <div style={{position:'absolute',bottom:28,left:'50%',transform:'translateX(-50%)',fontFamily:S.sans,fontSize:14,fontWeight:500,color:'#fff',textAlign:'center',whiteSpace:'nowrap'}}>
          <div style={{fontFamily:S.mono,fontSize:10,letterSpacing:'.14em',color:S.green,marginBottom:6}}>● BUSCANDO CÓDIGO</div>
          Pide al cliente su QR en WhatsApp
        </div>
      </div>

      {/* Mode toggle */}
      <div style={{padding:'12px 16px 0',display:'flex',justifyContent:'center'}}>
        <div style={{display:'flex',background:'rgba(255,255,255,.06)',border:'1px solid rgba(255,255,255,.08)',borderRadius:100,padding:3,gap:2}}>
          <button style={{padding:'8px 16px',borderRadius:100,background:S.green,color:S.greenDark,fontSize:12,fontWeight:600,display:'flex',alignItems:'center',gap:6,cursor:'pointer',border:'none',fontFamily:S.sans}}>{Ic.qr(S.greenDark,14)} Escanear QR</button>
          <button onClick={onManual} style={{padding:'8px 16px',borderRadius:100,background:'transparent',color:'rgba(255,255,255,.7)',fontSize:12,fontWeight:500,display:'flex',alignItems:'center',gap:6,cursor:'pointer',border:'none',fontFamily:S.sans}}>{Ic.phone('#fff',14)} Por teléfono</button>
        </div>
      </div>

      {/* Bottom actions */}
      <div style={{padding:'14px 16px 20px',display:'flex',gap:8}}>
        <button onClick={onRedeem} style={{flex:1,padding:'14px 12px',borderRadius:16,background:'rgba(255,255,255,.06)',border:'1px solid rgba(255,255,255,.1)',color:'#fff',fontFamily:S.sans,fontSize:13,fontWeight:500,cursor:'pointer',display:'flex',alignItems:'center',gap:10}}>
          <div style={{width:32,height:32,borderRadius:9,background:'rgba(255,197,66,.15)',display:'grid',placeItems:'center'}}>{Ic.gift(S.amber,18)}</div>
          <div style={{textAlign:'left'}}><div style={{fontSize:13,fontWeight:500}}>Canjear</div><div style={{fontSize:10,color:'rgba(255,255,255,.5)',fontFamily:S.mono,letterSpacing:'.05em'}}>RECOMPENSA</div></div>
        </button>
        <button onClick={onHistory} style={{flex:1,padding:'14px 12px',borderRadius:16,background:'rgba(255,255,255,.06)',border:'1px solid rgba(255,255,255,.1)',color:'#fff',fontFamily:S.sans,fontSize:13,fontWeight:500,cursor:'pointer',display:'flex',alignItems:'center',gap:10}}>
          <div style={{width:32,height:32,borderRadius:9,background:'rgba(255,255,255,.08)',display:'grid',placeItems:'center'}}>{Ic.clock('#fff',18)}</div>
          <div style={{textAlign:'left'}}><div style={{fontSize:13,fontWeight:500}}>Turno</div><div style={{fontSize:10,color:'rgba(255,255,255,.5)',fontFamily:S.mono,letterSpacing:'.05em'}}>HISTORIAL</div></div>
        </button>
      </div>

      <style>{`@keyframes scanline{0%,100%{transform:translateY(-96px);opacity:.3}50%{transform:translateY(96px);opacity:1}}`}</style>
      <HomeIndicator dark/>
    </div>
  );
}

function FakeQR({ size=160, fg='#fff', bg='transparent' }) {
  // deterministic mock qr grid
  const n = 21;
  const cells = [];
  const seed = 'whatsloyalty_marta_rodriguez_85pts';
  for (let r=0; r<n; r++) {
    for (let c=0; c<n; c++) {
      const i = r*n + c;
      const h = (seed.charCodeAt(i % seed.length) * 31 + i*7) % 100;
      cells.push({r,c,on: h < 50});
    }
  }
  // force 3 finder patterns
  const finders = [[0,0],[0,n-7],[n-7,0]];
  const isFinder = (r,c)=> finders.some(([fr,fc])=> r>=fr && r<fr+7 && c>=fc && c<fc+7);
  const s = size/n;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${n} ${n}`} style={{display:'block'}}>
      <rect width={n} height={n} fill={bg}/>
      {cells.filter(({r,c})=>!isFinder(r,c)).map(({r,c,on},i)=> on && <rect key={i} x={c} y={r} width="1" height="1" fill={fg}/>)}
      {finders.map(([r,c],i)=>(
        <g key={i} transform={`translate(${c} ${r})`}>
          <rect width="7" height="7" fill={fg}/>
          <rect x="1" y="1" width="5" height="5" fill={bg==='transparent'?'#000':bg}/>
          <rect x="2" y="2" width="3" height="3" fill={fg}/>
        </g>
      ))}
    </svg>
  );
}

// ═══════════════════════════════════════════════════════════════
// SCREEN 3 — CLIENT SHEET (post-scan)
// ═══════════════════════════════════════════════════════════════
function ClientScreen({ onConfirm, onBack, onRedeem }) {
  const [amount, setAmount] = React.useState('6,80');
  const press = (n) => {
    if (n === '←') { setAmount(a => a.length <= 1 ? '0' : a.slice(0,-1)); return; }
    if (n === ',') { if (!amount.includes(',')) setAmount(a => a + ','); return; }
    setAmount(a => a === '0' ? String(n) : a + n);
  };
  const points = Math.round(parseFloat(amount.replace(',','.')) * 2) || 0;

  return (
    <div style={{height:'100%',display:'flex',flexDirection:'column',background:S.paper,position:'relative'}}>
      <StaffStatusBar/>
      <TopBar title="Marta Rodríguez" sub="CLIENTE IDENTIFICADO · ● ONLINE" back onBack={onBack} right={<button style={{width:38,height:38,borderRadius:12,background:'#fff',border:'1px solid '+S.line,display:'grid',placeItems:'center',cursor:'pointer'}}>{Ic.close(S.ink,18)}</button>}/>

      <div style={{flex:1,overflowY:'auto',padding:'14px 16px 0'}}>
        {/* VIP alert */}
        <div style={{background:S.ink,color:'#fff',borderRadius:16,padding:'14px 16px',marginBottom:12,display:'flex',alignItems:'center',gap:12,position:'relative',overflow:'hidden'}}>
          <div style={{position:'absolute',inset:0,background:'radial-gradient(circle at 100% 0%, rgba(0,200,81,.2), transparent 60%)'}}/>
          <div style={{width:38,height:38,borderRadius:10,background:'rgba(0,200,81,.18)',display:'grid',placeItems:'center',position:'relative',zIndex:1}}>{Ic.star(S.green,20)}</div>
          <div style={{flex:1,position:'relative',zIndex:1}}>
            <div style={{fontFamily:S.mono,fontSize:9,letterSpacing:'.14em',color:S.green,marginBottom:2}}>● CLIENTE VIP</div>
            <div style={{fontSize:13.5,lineHeight:1.3}}><b>12 visitas este mes</b> · trátala bien 🙌</div>
          </div>
        </div>

        {/* Points card */}
        <div style={{background:'#fff',border:'1px solid '+S.line,borderRadius:16,padding:16,marginBottom:12}}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:12}}>
            <div>
              <div style={{fontFamily:S.mono,fontSize:10,letterSpacing:'.12em',color:S.ink4,marginBottom:4}}>SALDO ACTUAL</div>
              <div style={{fontFamily:S.sans,fontSize:32,fontWeight:500,letterSpacing:'-.02em',lineHeight:1}}>85<span style={{color:S.ink4,fontSize:18,fontWeight:400}}>/100</span></div>
              <div style={{fontSize:12,color:S.ink3,marginTop:4}}>15 puntos para el siguiente café gratis</div>
            </div>
            <div style={{textAlign:'right'}}>
              <div style={{fontFamily:S.mono,fontSize:10,letterSpacing:'.12em',color:S.ink4,marginBottom:4}}>ÚLTIMA VISITA</div>
              <div style={{fontSize:13,fontWeight:500}}>Hoy, 08:12</div>
              <div style={{fontSize:11,color:S.ink4}}>café · 3,50€</div>
            </div>
          </div>
          <div style={{height:6,background:S.paper2,borderRadius:100,overflow:'hidden'}}>
            <div style={{height:'100%',width:'85%',background:`linear-gradient(90deg, ${S.green} 0%, ${S.greenDeep} 100%)`,borderRadius:100}}/>
          </div>
        </div>

        {/* Amount input */}
        <div style={{background:'#fff',border:'1px solid '+S.line,borderRadius:16,padding:'16px 18px 14px',marginBottom:12}}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',marginBottom:4}}>
            <div style={{fontFamily:S.mono,fontSize:10,letterSpacing:'.12em',color:S.ink4}}>IMPORTE DE LA VENTA</div>
            <div style={{fontSize:11,color:S.ink4}}>1€ = 2 pts</div>
          </div>
          <div style={{display:'flex',alignItems:'baseline',justifyContent:'space-between'}}>
            <div style={{fontFamily:S.sans,fontSize:46,fontWeight:500,letterSpacing:'-.03em',lineHeight:1}}>{amount}<span style={{fontSize:24,color:S.ink4,marginLeft:4}}>€</span></div>
            <div style={{textAlign:'right'}}>
              <div style={{fontFamily:S.mono,fontSize:10,letterSpacing:'.12em',color:S.greenDeep,marginBottom:2}}>SUMARÁS</div>
              <div style={{fontSize:20,fontWeight:600,color:S.greenDeep}}>+{points} pts</div>
            </div>
          </div>
        </div>

        {/* Numpad */}
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:8,marginBottom:12}}>
          {[1,2,3,4,5,6,7,8,9,',',0,'←'].map(n=> (
            <button key={n} onClick={()=>press(n)} style={{height:52,borderRadius:12,background:'#fff',border:'1px solid '+S.line,fontSize:22,fontFamily:S.sans,fontWeight:400,color:S.ink,cursor:'pointer',transition:'all .1s'}} onMouseDown={e=>e.currentTarget.style.background=S.paper2} onMouseUp={e=>e.currentTarget.style.background='#fff'}>{n}</button>
          ))}
        </div>
      </div>

      {/* Actions bottom */}
      <div style={{padding:'12px 16px 22px',background:S.paper,borderTop:'1px solid '+S.line,display:'flex',gap:8}}>
        <button onClick={onRedeem} style={{padding:'14px 16px',borderRadius:14,background:'#fff',border:'1px solid '+S.line,color:S.ink3,fontSize:13,fontWeight:500,fontFamily:S.sans,cursor:'pointer',display:'flex',alignItems:'center',gap:6}}>{Ic.gift(S.ink3,18)} Canjear</button>
        <button onClick={onConfirm} style={{flex:1,padding:'14px 20px',borderRadius:14,background:S.green,color:S.greenDark,fontSize:14,fontWeight:600,fontFamily:S.sans,cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',gap:8,border:'none',boxShadow:'0 4px 14px rgba(0,200,81,.3)'}}>
          Sumar {points} puntos {Ic.arrow(S.greenDark,18)}
        </button>
      </div>
      <HomeIndicator/>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// SCREEN 4 — CONFIRMATION + WHATSAPP PREVIEW
// ═══════════════════════════════════════════════════════════════
function ConfirmScreen({ onHome }) {
  return (
    <div style={{height:'100%',display:'flex',flexDirection:'column',background:S.paper,position:'relative'}}>
      <StaffStatusBar/>

      {/* Top hero */}
      <div style={{padding:'24px 20px 20px',background:`linear-gradient(160deg, ${S.greenWash} 0%, ${S.paper} 80%)`,borderBottom:'1px solid '+S.line,position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',top:-30,right:-30,width:160,height:160,borderRadius:'50%',background:'radial-gradient(circle, rgba(0,200,81,.15), transparent 70%)'}}/>
        <div style={{display:'flex',alignItems:'center',gap:14,marginBottom:14,position:'relative'}}>
          <div style={{width:52,height:52,borderRadius:'50%',background:S.green,display:'grid',placeItems:'center',boxShadow:'0 8px 20px rgba(0,200,81,.35), 0 0 0 4px rgba(0,200,81,.15)',animation:'pop .5s ease'}}>
            {Ic.check(S.greenDark,26)}
          </div>
          <div>
            <div style={{fontFamily:S.mono,fontSize:10,letterSpacing:'.14em',color:S.greenDeep,marginBottom:2}}>● VENTA REGISTRADA</div>
            <div style={{fontSize:22,fontWeight:500,letterSpacing:'-.01em',lineHeight:1.1}}>+15 puntos para Marta</div>
          </div>
        </div>
        <div style={{display:'flex',gap:12,position:'relative'}}>
          <div style={{flex:1,padding:'10px 12px',background:'#fff',border:'1px solid '+S.line,borderRadius:10}}>
            <div style={{fontFamily:S.mono,fontSize:9,letterSpacing:'.12em',color:S.ink4,marginBottom:2}}>IMPORTE</div>
            <div style={{fontSize:16,fontWeight:600}}>6,80€</div>
          </div>
          <div style={{flex:1,padding:'10px 12px',background:'#fff',border:'1px solid '+S.line,borderRadius:10}}>
            <div style={{fontFamily:S.mono,fontSize:9,letterSpacing:'.12em',color:S.ink4,marginBottom:2}}>NUEVO SALDO</div>
            <div style={{fontSize:16,fontWeight:600}}>100 <span style={{color:S.greenDeep,fontSize:11,fontFamily:S.mono}}>¡LLENO!</span></div>
          </div>
        </div>
      </div>

      {/* WhatsApp preview */}
      <div style={{flex:1,overflowY:'auto',padding:'18px 16px 0'}}>
        <div style={{fontFamily:S.mono,fontSize:10,letterSpacing:'.14em',color:S.ink4,marginBottom:10,display:'flex',alignItems:'center',gap:8}}>{Ic.dot(S.green)} MENSAJE ENVIADO POR WHATSAPP · HACE 2 SEG</div>

        <div style={{background:'#E4DDCE',backgroundImage:"url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'><g fill='%23C6BFB0' fill-opacity='0.3'><path d='M8 12c1-2 3-2 5 0s1 4 0 5-3 0-5-1-1-2 0-4zM24 8c2 0 4 1 4 3s-1 3-3 3-3-1-3-3 0-2 2-3zM30 24c1 1 1 4 0 5s-4 0-4-2 0-4 2-4 1 0 2 1z'/></g></svg>\")",borderRadius:14,padding:'14px 12px',border:'1px solid '+S.line,marginBottom:14,display:'flex',flexDirection:'column',gap:6}}>
          {/* WA header sim */}
          <div style={{background:'#00A884',color:'#fff',margin:'-14px -12px 10px',padding:'10px 12px',borderRadius:'13px 13px 0 0',display:'flex',alignItems:'center',gap:10}}>
            <div style={{width:32,height:32,borderRadius:'50%',background:'#fff',display:'grid',placeItems:'center',color:S.greenDeep,fontWeight:700,fontSize:13}}>☕</div>
            <div><div style={{fontSize:12,fontWeight:500}}>Café Moreno</div><div style={{fontSize:10,color:'rgba(255,255,255,.8)'}}>empresa · en línea</div></div>
            <div style={{marginLeft:'auto',width:16,height:16,borderRadius:'50%',background:'#fff',display:'grid',placeItems:'center',color:S.greenDeep,fontWeight:700,fontSize:10}}>✓</div>
          </div>

          <div style={{alignSelf:'flex-start',maxWidth:'90%',background:'#fff',borderRadius:'12px 12px 12px 2px',padding:'9px 11px',fontSize:12.5,lineHeight:1.4,boxShadow:'0 1px 1px rgba(0,0,0,.06)'}}>
            ¡Hola Marta! ☕<br/>Gracias por tu café.<br/>Acabas de sumar <b style={{color:S.greenDeep}}>+15 puntos</b>.
            <div style={{fontSize:9,color:'#999',textAlign:'right',marginTop:3}}>9:41 ✓✓</div>
          </div>

          <div style={{background:'#fff',border:'1px solid rgba(0,200,81,.3)',borderRadius:10,padding:10,marginTop:2}}>
            <div style={{fontFamily:S.mono,fontSize:9,letterSpacing:'.1em',color:S.greenDeep,marginBottom:3}}>TU SALDO</div>
            <div style={{fontFamily:S.serif,fontSize:26,lineHeight:1,fontWeight:400}}>100 / 100 🎉</div>
            <div style={{marginTop:6,height:4,background:'#eee',borderRadius:100,overflow:'hidden'}}>
              <div style={{height:'100%',width:'100%',background:S.green,borderRadius:100}}/>
            </div>
            <div style={{fontSize:11,color:'#555',marginTop:5}}>¡Tu siguiente café va por la casa!</div>
          </div>

          <div style={{alignSelf:'flex-start',maxWidth:'90%',background:'#fff',borderRadius:'12px 12px 12px 2px',padding:'9px 11px',fontSize:12.5,lineHeight:1.4,boxShadow:'0 1px 1px rgba(0,0,0,.06)',marginTop:2}}>
            ¿Nos vemos el viernes? <b>Te guardamos tu mesa</b> 🙌
            <div style={{fontSize:9,color:'#999',textAlign:'right',marginTop:3}}>9:41 ✓✓</div>
          </div>
        </div>

        <div style={{display:'flex',alignItems:'center',gap:8,padding:'10px 14px',background:S.greenWash,border:'1px solid rgba(0,200,81,.2)',borderRadius:12,marginBottom:12}}>
          {Ic.sparkle(S.greenDeep,18)}
          <div style={{fontSize:12,color:S.ink2,lineHeight:1.4}}><b style={{color:S.greenDeep,fontWeight:600}}>Recuérdaselo</b> — acaba de completar los 100 puntos, dile que su café va gratis 🎁</div>
        </div>
      </div>

      <div style={{padding:'12px 16px 22px',background:S.paper,borderTop:'1px solid '+S.line,display:'flex',gap:8}}>
        <button style={{padding:'14px 18px',borderRadius:14,background:'#fff',border:'1px solid '+S.line,color:S.ink3,fontSize:13,fontWeight:500,fontFamily:S.sans,cursor:'pointer',display:'flex',alignItems:'center',gap:6}}>{Ic.undo(S.ink3)} Deshacer</button>
        <button onClick={onHome} style={{flex:1,padding:'14px 20px',borderRadius:14,background:S.ink,color:S.paper,fontSize:14,fontWeight:600,fontFamily:S.sans,cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',gap:8,border:'none'}}>
          Siguiente cliente {Ic.arrow(S.paper,18)}
        </button>
      </div>
      <style>{`@keyframes pop{0%{transform:scale(.4);opacity:0}60%{transform:scale(1.15);opacity:1}100%{transform:scale(1)}}`}</style>
      <HomeIndicator/>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// SCREEN 5 — REDEEM
// ═══════════════════════════════════════════════════════════════
function RedeemScreen({ onBack, onConfirm }) {
  return (
    <div style={{height:'100%',display:'flex',flexDirection:'column',background:'#000',color:'#fff',position:'relative'}}>
      <StaffStatusBar dark/>
      <TopBar dark title="Canjear recompensa" sub="PABLO GIMÉNEZ · VIP · 100 PUNTOS" back onBack={onBack}/>

      <div style={{flex:1,position:'relative',margin:'0 16px',borderRadius:24,overflow:'hidden',background:'linear-gradient(135deg, #1a1f1c 0%, #0a0f0c 100%)'}}>
        <div style={{position:'absolute',inset:0,background:'radial-gradient(circle at 50% 30%, rgba(224,163,48,.15), transparent 60%)'}}/>

        {/* Reward preview card */}
        <div style={{position:'absolute',top:20,left:16,right:16,background:'rgba(255,255,255,.06)',backdropFilter:'blur(8px)',border:'1px solid rgba(255,255,255,.1)',borderRadius:14,padding:'12px 14px',display:'flex',alignItems:'center',gap:12}}>
          <div style={{width:44,height:44,borderRadius:11,background:'rgba(224,163,48,.15)',display:'grid',placeItems:'center',fontSize:24}}>☕</div>
          <div style={{flex:1}}>
            <div style={{fontFamily:S.mono,fontSize:9,letterSpacing:'.14em',color:S.amber,marginBottom:2}}>RECOMPENSA</div>
            <div style={{fontSize:15,fontWeight:500,lineHeight:1.1}}>Café por la casa</div>
            <div style={{fontSize:11,color:'rgba(255,255,255,.55)',marginTop:2}}>100 puntos · valor 1,80€</div>
          </div>
          <div style={{fontFamily:S.mono,fontSize:10,color:S.green,letterSpacing:'.08em'}}>✓ VÁLIDO</div>
        </div>

        {/* Scanner brackets */}
        <div style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-40%)',width:210,height:210}}>
          {[['left','top'],['right','top'],['left','bottom'],['right','bottom']].map(([x,y],i)=>{
            const base = {position:'absolute',width:32,height:32,borderColor:S.amber,borderStyle:'solid',borderWidth:0};
            const pos = {};
            if(x==='left') {pos.left=0; base.borderLeftWidth=3;}
            else {pos.right=0; base.borderRightWidth=3;}
            if(y==='top') {pos.top=0; base.borderTopWidth=3;}
            else {pos.bottom=0; base.borderBottomWidth=3;}
            return <div key={i} style={{...base,...pos}}/>;
          })}
          <div style={{position:'absolute',left:14,right:14,top:'50%',height:2,background:`linear-gradient(90deg, transparent, ${S.amber}, transparent)`,boxShadow:`0 0 12px ${S.amber}`,animation:'scanline2 2s ease-in-out infinite'}}/>
          <div style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',opacity:.18}}>
            <FakeQR size={130}/>
          </div>
        </div>

        <div style={{position:'absolute',bottom:20,left:0,right:0,textAlign:'center'}}>
          <div style={{fontFamily:S.mono,fontSize:10,letterSpacing:'.14em',color:S.amber,marginBottom:4}}>● ESPERANDO CÓDIGO DE CANJE</div>
          <div style={{fontSize:13,color:'#fff'}}>Pide a Pablo su QR de recompensa</div>
        </div>
      </div>

      <div style={{padding:'14px 16px 22px',display:'flex',gap:8}}>
        <button onClick={onBack} style={{padding:'14px 18px',borderRadius:14,background:'rgba(255,255,255,.06)',border:'1px solid rgba(255,255,255,.1)',color:'#fff',fontSize:13,fontWeight:500,fontFamily:S.sans,cursor:'pointer'}}>Cancelar</button>
        <button onClick={onConfirm} style={{flex:1,padding:'14px 20px',borderRadius:14,background:S.amber,color:'#2a1d04',fontSize:14,fontWeight:600,fontFamily:S.sans,cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',gap:8,border:'none'}}>
          Canjear manualmente {Ic.arrow('#2a1d04',18)}
        </button>
      </div>
      <style>{`@keyframes scanline2{0%,100%{transform:translateY(-92px);opacity:.3}50%{transform:translateY(92px);opacity:1}}`}</style>
      <HomeIndicator dark/>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// SCREEN 6 — HISTORY / SHIFT
// ═══════════════════════════════════════════════════════════════
function HistoryScreen({ onBack }) {
  const [selected, setSelected] = React.useState(null);

  const ops = [
    {t:'9:41',name:'Marta Rodríguez',init:'MR',amt:'6,80€',pts:'+15',type:'sale',meta:'Café + tostada',badge:'VIP'},
    {t:'9:38',name:'Pablo Giménez',init:'PG',amt:'0€',pts:'−100',type:'redeem',meta:'Café por la casa',badge:'VIP'},
    {t:'9:34',name:'Álvaro Quintana',init:'AQ',amt:'4,20€',pts:'+10',type:'sale',meta:'Nuevo · bienvenida',badge:'NEW'},
    {t:'9:28',name:'Silvia Morán',init:'SM',amt:'12,50€',pts:'+25',type:'sale',meta:'Brunch × 2'},
    {t:'9:22',name:'Javier Mérida',init:'JM',amt:'8,00€',pts:'+16',type:'sale',meta:'Reactivado · 26 días',badge:'DOR'},
    {t:'9:15',name:'Carlos Cebrián',init:'CC',amt:'5,40€',pts:'+11',type:'sale',meta:'Café + zumo'},
    {t:'9:08',name:'Laura Muñoz',init:'LM',amt:'3,80€',pts:'+8',type:'sale',meta:'Café solo'},
  ];

  return (
    <div style={{height:'100%',display:'flex',flexDirection:'column',background:S.paper}}>
      <StaffStatusBar/>
      <TopBar title="Tu turno" sub="MARTES 18 MAR · 07:00–15:00" back onBack={onBack} right={<button style={{width:38,height:38,borderRadius:12,background:'#fff',border:'1px solid '+S.line,display:'grid',placeItems:'center',cursor:'pointer'}}>{Ic.search(S.ink,18)}</button>}/>

      {/* Summary card */}
      <div style={{padding:'14px 16px 0'}}>
        <div style={{background:S.ink,color:'#fff',borderRadius:16,padding:'18px 20px',position:'relative',overflow:'hidden'}}>
          <div style={{position:'absolute',inset:0,background:'radial-gradient(circle at 100% 0%, rgba(0,200,81,.18), transparent 55%)'}}/>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:14,position:'relative'}}>
            <div>
              <div style={{fontFamily:S.mono,fontSize:10,letterSpacing:'.14em',color:'rgba(255,255,255,.5)',marginBottom:4}}>VENTAS DEL TURNO</div>
              <div style={{fontFamily:S.sans,fontSize:38,fontWeight:500,letterSpacing:'-.02em',lineHeight:1}}>847<span style={{fontSize:20,color:S.green,marginLeft:2}}>€</span></div>
              <div style={{fontSize:12,color:'rgba(255,255,255,.6)',marginTop:4}}><span style={{color:S.green}}>↗ +23%</span> vs. martes medio</div>
            </div>
            <div style={{padding:'4px 10px',borderRadius:100,background:'rgba(0,200,81,.18)',color:S.green,fontFamily:S.mono,fontSize:10,letterSpacing:'.1em',display:'flex',alignItems:'center',gap:6}}>
              <span style={{width:6,height:6,borderRadius:'50%',background:S.green,animation:'blink 1.5s infinite'}}/> EN VIVO
            </div>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:10,paddingTop:14,borderTop:'1px solid rgba(255,255,255,.1)',position:'relative'}}>
            <div><div style={{fontFamily:S.mono,fontSize:9,letterSpacing:'.1em',color:'rgba(255,255,255,.5)',marginBottom:2}}>VENTAS</div><div style={{fontSize:20,fontWeight:500}}>84</div></div>
            <div><div style={{fontFamily:S.mono,fontSize:9,letterSpacing:'.1em',color:'rgba(255,255,255,.5)',marginBottom:2}}>TICKET</div><div style={{fontSize:20,fontWeight:500}}>10<span style={{color:S.green,fontSize:14,marginLeft:1}}>€</span></div></div>
            <div><div style={{fontFamily:S.mono,fontSize:9,letterSpacing:'.1em',color:'rgba(255,255,255,.5)',marginBottom:2}}>NUEVOS</div><div style={{fontSize:20,fontWeight:500}}>6</div></div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{padding:'16px 16px 10px',display:'flex',gap:6}}>
        {['Todas','Ventas','Canjes','Nuevos'].map((t,i)=>(
          <button key={t} style={{padding:'7px 14px',borderRadius:100,background:i===0?S.ink:'#fff',color:i===0?S.paper:S.ink3,border:i===0?'none':'1px solid '+S.line,fontSize:12,fontWeight:500,fontFamily:S.sans,cursor:'pointer'}}>{t}</button>
        ))}
      </div>

      {/* Ops list */}
      <div style={{flex:1,overflowY:'auto',padding:'0 16px 16px'}}>
        <div style={{background:'#fff',borderRadius:14,border:'1px solid '+S.line,overflow:'hidden'}}>
          {ops.map((op,i)=>(
            <button key={i} onClick={()=>setSelected(selected===i?null:i)} style={{display:'grid',gridTemplateColumns:'auto 1fr auto',gap:12,padding:'13px 14px',alignItems:'center',borderBottom:i<ops.length-1?'1px solid '+S.line:'none',background:selected===i?S.paper:'#fff',width:'100%',textAlign:'left',cursor:'pointer',border:'none',borderBottomStyle:'solid',borderBottomColor:i<ops.length-1?S.line:'transparent',borderBottomWidth:i<ops.length-1?1:0,fontFamily:S.sans}}>
              <div style={{position:'relative'}}>
                <div style={{width:38,height:38,borderRadius:'50%',background:op.type==='redeem'?'#f7ecd4':op.badge==='NEW'?'#eaf2f7':op.badge==='DOR'?'#f4e7d6':S.greenWash,color:op.type==='redeem'?'#8a5f1f':op.badge==='NEW'?S.blue:op.badge==='DOR'?'#b6802a':S.greenDeep,display:'grid',placeItems:'center',fontWeight:600,fontSize:12,border:'1px solid '+(op.type==='redeem'?'#e6cf9a':op.badge==='NEW'?'#c4d5de':op.badge==='DOR'?'#e6cf9a':'rgba(0,200,81,.3)')}}>{op.init}</div>
                {op.badge==='VIP' && <div style={{position:'absolute',bottom:-2,right:-2,width:16,height:16,borderRadius:'50%',background:S.ink,display:'grid',placeItems:'center',border:'2px solid #fff'}}>{Ic.star(S.green,10)}</div>}
              </div>
              <div style={{minWidth:0}}>
                <div style={{fontSize:13.5,fontWeight:500,lineHeight:1.2,marginBottom:2}}>{op.name}</div>
                <div style={{fontFamily:S.mono,fontSize:10,letterSpacing:'.04em',color:S.ink4,display:'flex',gap:8,alignItems:'center'}}>{op.t} · {op.meta}</div>
              </div>
              <div style={{textAlign:'right'}}>
                <div style={{fontSize:13,fontWeight:600,color:op.type==='redeem'?S.amber:S.ink}}>{op.amt}</div>
                <div style={{fontSize:11,color:op.type==='redeem'?S.red:S.greenDeep,fontWeight:500,fontFamily:S.mono}}>{op.pts} pts</div>
              </div>
            </button>
          ))}
        </div>

        {selected !== null && (
          <div style={{marginTop:10,background:'#fff',border:'1px solid '+S.line,borderRadius:12,padding:'12px 14px',display:'flex',gap:8}}>
            <button style={{flex:1,padding:'10px',borderRadius:10,background:S.paper2,border:'none',fontSize:12,fontFamily:S.sans,fontWeight:500,color:S.ink3,cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',gap:6}}>Ver detalle</button>
            <button style={{flex:1,padding:'10px',borderRadius:10,background:'rgba(229,90,75,.1)',border:'1px solid rgba(229,90,75,.3)',color:S.red,fontSize:12,fontFamily:S.sans,fontWeight:500,cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',gap:6}}>{Ic.undo(S.red,14)} Anular operación</button>
          </div>
        )}
      </div>

      <style>{`@keyframes blink{50%{opacity:.4}}`}</style>
      <HomeIndicator/>
    </div>
  );
}

// Expose
Object.assign(window, { LoginScreen, HomeScreen, ClientScreen, ConfirmScreen, RedeemScreen, HistoryScreen, FakeQR, StaffIc: Ic, S });
