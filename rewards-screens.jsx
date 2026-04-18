// ═══════════════════════════════════════════════════════════════
// WhatsLoyalty Staff — Gestión de PREMIOS (6 pantallas)
// Reutiliza tokens del sistema: paper + ink + green · Instrument Serif
// ═══════════════════════════════════════════════════════════════

const RS = {
  green:'#00C851', greenDeep:'#00a843', greenDark:'#04200f', greenWash:'#e8fdf0',
  ink:'#0A0F0C', ink2:'#1a201c', ink3:'#3d4540', ink4:'#6b7570', ink5:'#9aa39e',
  paper:'#F6F5F0', paper2:'#ECEAE1', paper3:'#E0DCCD', line:'#dcd9cc',
  red:'#E55A4B', amber:'#E0A330', blue:'#4A7A8C', purple:'#7A5AE0',
  sans:'"Inter Tight", -apple-system, system-ui, sans-serif',
  serif:'"Instrument Serif", "Times New Roman", serif',
  mono:'"JetBrains Mono", ui-monospace, monospace',
};

const RIc = {
  back:(c=RS.ink,s=20)=> <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>,
  plus:(c=RS.ink,s=18)=> <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg>,
  gift:(c=RS.ink,s=20)=> <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M4 12v9h16v-9M12 8v13M9 8a2 2 0 110-4c2 0 3 4 3 4s1-4 3-4a2 2 0 110 4"/></svg>,
  edit:(c=RS.ink,s=16)=> <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9M16.5 3.5a2.1 2.1 0 113 3L7 19l-4 1 1-4z"/></svg>,
  trash:(c=RS.ink,s=16)=> <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2M10 11v6M14 11v6M5 6l1 14a2 2 0 002 2h8a2 2 0 002-2l1-14"/></svg>,
  check:(c=RS.ink,s=16)=> <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7"/></svg>,
  close:(c=RS.ink,s=16)=> <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>,
  chevron:(c=RS.ink4,s=16)=> <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round"><path d="M9 6l6 6-6 6"/></svg>,
  sparkle:(c=RS.green,s=18)=> <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M6 18l2.5-2.5M15.5 8.5L18 6"/></svg>,
  clock:(c=RS.ink,s=16)=> <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>,
  drag:(c=RS.ink5,s=14)=> <svg width={s} height={s} viewBox="0 0 24 24" fill={c}><circle cx="9" cy="6" r="1.5"/><circle cx="15" cy="6" r="1.5"/><circle cx="9" cy="12" r="1.5"/><circle cx="15" cy="12" r="1.5"/><circle cx="9" cy="18" r="1.5"/><circle cx="15" cy="18" r="1.5"/></svg>,
  chart:(c=RS.ink,s=18)=> <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21V5M3 21h18M7 15v3M12 10v8M17 6v12"/></svg>,
  star:(c=RS.green,s=14)=> <svg width={s} height={s} viewBox="0 0 24 24" fill={c} stroke={c} strokeWidth="1"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.7 7-6.3-3.8-6.3 3.8 1.7-7L2 9.5l7.1-.6z"/></svg>,
};

// ── Status bar chrome (reutiliza) ──
function RStatusBar({ dark=false }) {
  const c = dark ? '#fff' : RS.ink;
  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'14px 30px 6px',fontFamily:RS.sans,fontWeight:600,fontSize:15,color:c,position:'relative',zIndex:10}}>
      <span>9:41</span>
      <div style={{display:'flex',gap:6,alignItems:'center'}}>
        <svg width="17" height="11" viewBox="0 0 17 11"><rect x="0" y="6.5" width="3" height="4.5" rx=".7" fill={c}/><rect x="4.5" y="4.5" width="3" height="6.5" rx=".7" fill={c}/><rect x="9" y="2" width="3" height="9" rx=".7" fill={c}/><rect x="13.5" y="0" width="3" height="11" rx=".7" fill={c}/></svg>
        <svg width="15" height="11" viewBox="0 0 15 11"><path d="M7.5 3C9.6 3 11.4 3.8 12.8 5.1L13.8 4.1C12.1 2.5 9.9 1.5 7.5 1.5C5.1 1.5 2.9 2.5 1.2 4.1L2.2 5.1C3.6 3.8 5.4 3 7.5 3Z" fill={c}/><circle cx="7.5" cy="9" r="1.3" fill={c}/></svg>
        <svg width="24" height="11" viewBox="0 0 24 11"><rect x=".5" y=".5" width="20.5" height="10" rx="2.5" stroke={c} strokeOpacity=".4" fill="none"/><rect x="2" y="2" width="18" height="7" rx="1.5" fill={c}/></svg>
      </div>
    </div>
  );
}

function RHomeIndicator({ dark=false }) {
  return <div style={{position:'absolute',bottom:0,left:0,right:0,height:32,display:'flex',justifyContent:'center',alignItems:'flex-end',paddingBottom:9,pointerEvents:'none',zIndex:60}}>
    <div style={{width:134,height:5,borderRadius:100,background:dark?'rgba(255,255,255,.7)':'rgba(10,15,12,.3)'}}/>
  </div>;
}

function RTopBar({ title, back, onBack, right, sub, dark=false }) {
  const c = dark?'#fff':RS.ink, c2 = dark?'rgba(255,255,255,.55)':RS.ink4;
  return (
    <div style={{padding:'8px 16px 14px',display:'flex',alignItems:'center',gap:12,borderBottom:'1px solid '+(dark?'rgba(255,255,255,.08)':RS.line)}}>
      {back && <button onClick={onBack} style={{width:38,height:38,borderRadius:12,background:dark?'rgba(255,255,255,.08)':'#fff',border:'1px solid '+(dark?'rgba(255,255,255,.1)':RS.line),display:'grid',placeItems:'center',cursor:'pointer'}}>{RIc.back(c,20)}</button>}
      <div style={{flex:1,minWidth:0}}>
        {sub && <div style={{fontFamily:RS.mono,fontSize:10,letterSpacing:'.14em',textTransform:'uppercase',color:c2,marginBottom:2}}>{sub}</div>}
        <div style={{fontFamily:RS.sans,fontSize:19,fontWeight:600,color:c,lineHeight:1.1,letterSpacing:'-.01em'}}>{title}</div>
      </div>
      {right}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// SCREEN 1 — CATÁLOGO DE PREMIOS
// ═══════════════════════════════════════════════════════════════
function RewardsListScreen({ onNew, onDetail, onRules, onQueue, onStats }) {
  const rewards = [
    {id:1, emoji:'☕', name:'Café por la casa', cost:100, value:'1,80€', stock:'∞', canjes:143, state:'on', trend:'+12%'},
    {id:2, emoji:'🥐', name:'Croissant de mantequilla', cost:150, value:'2,40€', stock:'∞', canjes:87, state:'on', trend:'+8%'},
    {id:3, emoji:'🍷', name:'Copa de vino', cost:250, value:'5,00€', stock:40, canjes:52, state:'on', trend:'+21%'},
    {id:4, emoji:'🍰', name:'Tarta del día', cost:400, value:'6,50€', stock:12, canjes:18, state:'on', trend:'−3%'},
    {id:5, emoji:'🎁', name:'Brunch para 2', cost:800, value:'28€', stock:4, canjes:3, state:'pause', trend:''},
    {id:6, emoji:'🧳', name:'Experiencia cata', cost:1500, value:'45€', stock:2, canjes:1, state:'draft', trend:''},
  ];

  return (
    <div style={{height:'100%',display:'flex',flexDirection:'column',background:RS.paper}}>
      <RStatusBar/>
      <RTopBar title="Catálogo de premios" sub="CAFÉ MORENO · 6 PREMIOS" right={
        <button onClick={onNew} style={{padding:'8px 12px',borderRadius:11,background:RS.ink,color:RS.paper,border:'none',fontSize:12,fontWeight:600,fontFamily:RS.sans,cursor:'pointer',display:'flex',alignItems:'center',gap:4}}>{RIc.plus(RS.paper,14)} Nuevo</button>
      }/>

      {/* Quick stats strip */}
      <div style={{padding:'12px 16px 0'}}>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:8}}>
          <button onClick={onQueue} style={{background:'#fff',border:'1px solid '+RS.line,borderRadius:12,padding:'10px 12px',textAlign:'left',cursor:'pointer',fontFamily:RS.sans}}>
            <div style={{fontFamily:RS.mono,fontSize:9,letterSpacing:'.1em',color:RS.ink4,marginBottom:2}}>COLA</div>
            <div style={{fontSize:18,fontWeight:600,color:RS.amber,display:'flex',alignItems:'center',gap:5}}>3 <span style={{width:6,height:6,borderRadius:'50%',background:RS.amber,animation:'blink 1.5s infinite'}}/></div>
            <div style={{fontSize:10,color:RS.ink4,marginTop:1}}>pendientes</div>
          </button>
          <div style={{background:'#fff',border:'1px solid '+RS.line,borderRadius:12,padding:'10px 12px'}}>
            <div style={{fontFamily:RS.mono,fontSize:9,letterSpacing:'.1em',color:RS.ink4,marginBottom:2}}>HOY</div>
            <div style={{fontSize:18,fontWeight:600}}>14 <span style={{fontSize:11,color:RS.greenDeep,fontFamily:RS.mono,fontWeight:500}}>+5</span></div>
            <div style={{fontSize:10,color:RS.ink4,marginTop:1}}>canjeados</div>
          </div>
          <button onClick={onStats} style={{background:'#fff',border:'1px solid '+RS.line,borderRadius:12,padding:'10px 12px',textAlign:'left',cursor:'pointer',fontFamily:RS.sans}}>
            <div style={{fontFamily:RS.mono,fontSize:9,letterSpacing:'.1em',color:RS.ink4,marginBottom:2}}>MES</div>
            <div style={{fontSize:18,fontWeight:600}}>304</div>
            <div style={{fontSize:10,color:RS.greenDeep,marginTop:1,fontFamily:RS.mono}}>↗ ver más</div>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div style={{padding:'14px 16px 10px',display:'flex',gap:6,alignItems:'center'}}>
        {[{t:'Activos',n:4,on:true},{t:'Pausados',n:1},{t:'Borradores',n:1}].map((x,i)=>(
          <button key={i} style={{padding:'7px 12px',borderRadius:100,background:x.on?RS.ink:'#fff',color:x.on?RS.paper:RS.ink3,border:x.on?'none':'1px solid '+RS.line,fontSize:12,fontWeight:500,fontFamily:RS.sans,cursor:'pointer',display:'flex',alignItems:'center',gap:6}}>{x.t} <span style={{fontFamily:RS.mono,fontSize:10,opacity:.7}}>{x.n}</span></button>
        ))}
        <button onClick={onRules} style={{marginLeft:'auto',padding:'7px 10px',borderRadius:100,background:'#fff',border:'1px dashed '+RS.line,color:RS.ink3,fontSize:11,fontFamily:RS.sans,cursor:'pointer',display:'flex',alignItems:'center',gap:4}}>{RIc.sparkle(RS.greenDeep,12)} Reglas</button>
      </div>

      {/* List */}
      <div style={{flex:1,overflowY:'auto',padding:'0 16px 16px'}}>
        <div style={{background:'#fff',borderRadius:14,border:'1px solid '+RS.line,overflow:'hidden'}}>
          {rewards.map((r,i)=>(
            <button key={r.id} onClick={()=>onDetail&&onDetail(r)} style={{display:'grid',gridTemplateColumns:'auto auto 1fr auto',gap:10,padding:'13px 12px 13px 10px',alignItems:'center',width:'100%',textAlign:'left',background:'#fff',border:'none',borderBottom:i<rewards.length-1?'1px solid '+RS.line:'none',borderBottomStyle:'solid',borderBottomWidth:i<rewards.length-1?1:0,borderBottomColor:RS.line,cursor:'pointer',fontFamily:RS.sans,opacity:r.state==='draft'?.55:1}}>
              <div style={{width:14,display:'grid',placeItems:'center'}}>{RIc.drag()}</div>
              <div style={{width:42,height:42,borderRadius:11,background:r.state==='on'?RS.greenWash:r.state==='pause'?RS.paper2:'#f7f5ee',display:'grid',placeItems:'center',fontSize:22,border:'1px solid '+(r.state==='on'?'rgba(0,200,81,.2)':RS.line)}}>{r.emoji}</div>
              <div style={{minWidth:0}}>
                <div style={{display:'flex',alignItems:'center',gap:6,marginBottom:2}}>
                  <div style={{fontSize:13.5,fontWeight:500,lineHeight:1.1}}>{r.name}</div>
                  {r.state==='pause' && <span style={{fontFamily:RS.mono,fontSize:8,letterSpacing:'.1em',color:RS.ink4,background:RS.paper2,padding:'2px 6px',borderRadius:6}}>PAUSADO</span>}
                  {r.state==='draft' && <span style={{fontFamily:RS.mono,fontSize:8,letterSpacing:'.1em',color:RS.ink4,background:'#f0ead6',padding:'2px 6px',borderRadius:6}}>BORRADOR</span>}
                </div>
                <div style={{fontFamily:RS.mono,fontSize:10,letterSpacing:'.03em',color:RS.ink4}}>
                  <span style={{color:RS.greenDeep,fontWeight:500}}>{r.cost} pts</span>
                  <span> · </span>
                  <span>valor {r.value}</span>
                  <span> · </span>
                  <span>stock {r.stock}</span>
                </div>
              </div>
              <div style={{textAlign:'right'}}>
                <div style={{fontSize:13,fontWeight:600}}>{r.canjes}</div>
                {r.trend && <div style={{fontSize:10,fontFamily:RS.mono,color:r.trend.startsWith('+')?RS.greenDeep:RS.red,marginTop:1}}>{r.trend}</div>}
              </div>
            </button>
          ))}
        </div>

        <div style={{marginTop:12,padding:'12px 14px',background:'#fff',border:'1px dashed '+RS.line,borderRadius:12,display:'flex',alignItems:'center',gap:10}}>
          {RIc.sparkle(RS.greenDeep,16)}
          <div style={{flex:1,fontSize:11.5,color:RS.ink3,lineHeight:1.4}}><b>Sugerencia:</b> tu premio estrella es <b>☕ Café por la casa</b>. Podrías subirlo a 120 pts sin perder tracción.</div>
        </div>
      </div>

      <style>{`@keyframes blink{50%{opacity:.4}}`}</style>
      <RHomeIndicator/>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// SCREEN 2 — DETALLE PREMIO
// ═══════════════════════════════════════════════════════════════
function RewardDetailScreen({ onBack, onEdit }) {
  const [active, setActive] = React.useState(true);
  return (
    <div style={{height:'100%',display:'flex',flexDirection:'column',background:RS.paper}}>
      <RStatusBar/>
      <RTopBar title="Café por la casa" sub="PREMIO · #01 DEL CATÁLOGO" back onBack={onBack} right={
        <button onClick={onEdit} style={{padding:'8px 12px',borderRadius:11,background:'#fff',color:RS.ink,border:'1px solid '+RS.line,fontSize:12,fontWeight:500,fontFamily:RS.sans,cursor:'pointer',display:'flex',alignItems:'center',gap:4}}>{RIc.edit(RS.ink,14)} Editar</button>
      }/>

      <div style={{flex:1,overflowY:'auto',padding:'14px 16px 0'}}>
        {/* Hero */}
        <div style={{background:'#fff',border:'1px solid '+RS.line,borderRadius:16,padding:18,marginBottom:12,position:'relative',overflow:'hidden'}}>
          <div style={{position:'absolute',top:-20,right:-20,width:140,height:140,borderRadius:'50%',background:'radial-gradient(circle, rgba(0,200,81,.12), transparent 70%)'}}/>
          <div style={{display:'flex',alignItems:'center',gap:14,marginBottom:14,position:'relative'}}>
            <div style={{width:64,height:64,borderRadius:18,background:RS.greenWash,display:'grid',placeItems:'center',fontSize:36,border:'1px solid rgba(0,200,81,.25)'}}>☕</div>
            <div>
              <div style={{fontFamily:RS.mono,fontSize:10,letterSpacing:'.14em',color:RS.greenDeep,marginBottom:3}}>PREMIO ESTRELLA</div>
              <div style={{fontFamily:RS.serif,fontSize:26,letterSpacing:'-.01em',lineHeight:1}}>100 <span style={{fontStyle:'italic',color:RS.greenDeep}}>puntos</span></div>
              <div style={{fontSize:12,color:RS.ink4,marginTop:3}}>Valor tienda: 1,80€ · Margen 62%</div>
            </div>
          </div>

          <div style={{display:'flex',alignItems:'center',gap:10,padding:'10px 12px',background:active?RS.greenWash:RS.paper2,border:'1px solid '+(active?'rgba(0,200,81,.25)':RS.line),borderRadius:10,position:'relative'}}>
            <div style={{flex:1}}>
              <div style={{fontSize:13,fontWeight:600,color:active?RS.greenDeep:RS.ink3}}>{active?'Visible para clientes':'Oculto'}</div>
              <div style={{fontSize:11,color:RS.ink4,marginTop:1}}>{active?'Aparece en /canje y en WhatsApp':'No aparece en el catálogo'}</div>
            </div>
            <button onClick={()=>setActive(!active)} style={{width:46,height:26,borderRadius:13,background:active?RS.green:RS.paper3,border:'none',cursor:'pointer',position:'relative',transition:'all .2s'}}>
              <span style={{position:'absolute',top:3,left:active?23:3,width:20,height:20,borderRadius:'50%',background:'#fff',boxShadow:'0 1px 3px rgba(0,0,0,.2)',transition:'all .2s'}}/>
            </button>
          </div>
        </div>

        {/* Stats grid */}
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8,marginBottom:12}}>
          {[
            {l:'CANJES · MES',v:'143',d:'+12% vs. feb'},
            {l:'TICKET MEDIO POST',v:'8,20€',d:'cliente vuelve'},
            {l:'STOCK',v:'∞',d:'sin límite'},
            {l:'VIGENCIA',v:'Todo el año',d:'sin fechas'},
          ].map((s,i)=>(
            <div key={i} style={{background:'#fff',border:'1px solid '+RS.line,borderRadius:12,padding:'10px 12px'}}>
              <div style={{fontFamily:RS.mono,fontSize:9,letterSpacing:'.12em',color:RS.ink4,marginBottom:4}}>{s.l}</div>
              <div style={{fontSize:18,fontWeight:600,letterSpacing:'-.01em'}}>{s.v}</div>
              <div style={{fontSize:10,color:RS.ink4,marginTop:2}}>{s.d}</div>
            </div>
          ))}
        </div>

        {/* Rules */}
        <div style={{background:'#fff',border:'1px solid '+RS.line,borderRadius:12,padding:14,marginBottom:12}}>
          <div style={{fontFamily:RS.mono,fontSize:10,letterSpacing:'.12em',color:RS.ink4,marginBottom:10}}>REGLAS DE USO</div>
          {[
            {l:'No acumulable con otras ofertas', on:true},
            {l:'Excluido fines de semana',         on:false},
            {l:'Solo clientes con 5+ visitas',     on:false},
            {l:'Máximo 1 por cliente / mes',       on:true},
          ].map((rule,i)=>(
            <div key={i} style={{display:'flex',alignItems:'center',gap:10,padding:'8px 0',borderTop:i?'1px solid '+RS.line:'none'}}>
              <div style={{width:18,height:18,borderRadius:5,background:rule.on?RS.green:RS.paper2,display:'grid',placeItems:'center',border:'1px solid '+(rule.on?RS.greenDeep:RS.line)}}>{rule.on&&RIc.check(RS.greenDark,12)}</div>
              <div style={{flex:1,fontSize:12.5,color:rule.on?RS.ink:RS.ink4}}>{rule.l}</div>
            </div>
          ))}
        </div>

        {/* Recent redemptions */}
        <div style={{background:'#fff',border:'1px solid '+RS.line,borderRadius:12,overflow:'hidden',marginBottom:12}}>
          <div style={{padding:'10px 14px',fontFamily:RS.mono,fontSize:10,letterSpacing:'.12em',color:RS.ink4,borderBottom:'1px solid '+RS.line}}>ÚLTIMOS CANJES</div>
          {[
            {n:'Pablo G.',t:'9:38',by:'Javier'},
            {n:'Ana Ruiz',t:'ayer 18:12',by:'Lucía'},
            {n:'Carlos C.',t:'ayer 14:03',by:'Javier'},
          ].map((x,i)=>(
            <div key={i} style={{display:'flex',alignItems:'center',gap:10,padding:'10px 14px',borderTop:i?'1px solid '+RS.line:'none'}}>
              <div style={{width:28,height:28,borderRadius:'50%',background:RS.greenWash,display:'grid',placeItems:'center',fontFamily:RS.mono,fontSize:10,fontWeight:600,color:RS.greenDeep,border:'1px solid rgba(0,200,81,.25)'}}>{x.n.split(' ').map(w=>w[0]).join('')}</div>
              <div style={{flex:1,fontSize:12.5}}>{x.n}</div>
              <div style={{fontFamily:RS.mono,fontSize:10,color:RS.ink4}}>{x.t} · {x.by}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{padding:'12px 16px 22px',background:RS.paper,borderTop:'1px solid '+RS.line,display:'flex',gap:8}}>
        <button style={{padding:'13px 16px',borderRadius:12,background:'#fff',border:'1px solid '+RS.line,color:RS.red,fontSize:12,fontWeight:500,fontFamily:RS.sans,cursor:'pointer',display:'flex',alignItems:'center',gap:6}}>{RIc.trash(RS.red,14)} Eliminar</button>
        <button onClick={onEdit} style={{flex:1,padding:'13px 16px',borderRadius:12,background:RS.ink,color:RS.paper,border:'none',fontSize:13,fontWeight:600,fontFamily:RS.sans,cursor:'pointer'}}>Editar premio →</button>
      </div>
      <RHomeIndicator/>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// SCREEN 3 — NUEVO / EDITOR
// ═══════════════════════════════════════════════════════════════
function RewardEditorScreen({ onBack, onSave }) {
  const [name, setName] = React.useState('Tarta del día');
  const [cost, setCost] = React.useState(400);
  const [emoji, setEmoji] = React.useState('🍰');
  const emojis = ['☕','🥐','🍷','🍰','🧁','🍪','🥂','🎁','⭐','🧳'];
  return (
    <div style={{height:'100%',display:'flex',flexDirection:'column',background:RS.paper}}>
      <RStatusBar/>
      <RTopBar title="Nuevo premio" sub="CATÁLOGO · BORRADOR" back onBack={onBack}/>

      <div style={{flex:1,overflowY:'auto',padding:'14px 16px 0'}}>
        {/* Icon + name */}
        <div style={{background:'#fff',border:'1px solid '+RS.line,borderRadius:14,padding:14,marginBottom:10}}>
          <div style={{fontFamily:RS.mono,fontSize:9,letterSpacing:'.12em',color:RS.ink4,marginBottom:8}}>ICONO</div>
          <div style={{display:'flex',gap:6,flexWrap:'wrap',marginBottom:14}}>
            {emojis.map(e=>(
              <button key={e} onClick={()=>setEmoji(e)} style={{width:38,height:38,borderRadius:10,background:emoji===e?RS.greenWash:RS.paper2,border:'1px solid '+(emoji===e?RS.greenDeep:RS.line),fontSize:20,cursor:'pointer'}}>{e}</button>
            ))}
          </div>
          <div style={{fontFamily:RS.mono,fontSize:9,letterSpacing:'.12em',color:RS.ink4,marginBottom:6}}>NOMBRE</div>
          <input value={name} onChange={e=>setName(e.target.value)} style={{width:'100%',padding:'10px 12px',borderRadius:10,border:'1px solid '+RS.line,fontFamily:RS.sans,fontSize:14,background:RS.paper}}/>
        </div>

        {/* Cost stepper */}
        <div style={{background:'#fff',border:'1px solid '+RS.line,borderRadius:14,padding:14,marginBottom:10}}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline',marginBottom:10}}>
            <div style={{fontFamily:RS.mono,fontSize:9,letterSpacing:'.12em',color:RS.ink4}}>COSTE EN PUNTOS</div>
            <div style={{fontSize:10,color:RS.ink4}}>~ {(cost/100).toFixed(1)}€ en consumo</div>
          </div>
          <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:10}}>
            <button onClick={()=>setCost(Math.max(50,cost-50))} style={{width:42,height:42,borderRadius:11,background:RS.paper2,border:'1px solid '+RS.line,fontSize:20,cursor:'pointer',fontFamily:RS.sans,color:RS.ink}}>−</button>
            <div style={{flex:1,textAlign:'center'}}>
              <div style={{fontFamily:RS.sans,fontSize:36,fontWeight:500,letterSpacing:'-.02em',lineHeight:1}}>{cost}</div>
              <div style={{fontSize:11,color:RS.ink4,marginTop:2}}>puntos</div>
            </div>
            <button onClick={()=>setCost(cost+50)} style={{width:42,height:42,borderRadius:11,background:RS.paper2,border:'1px solid '+RS.line,fontSize:20,cursor:'pointer',fontFamily:RS.sans,color:RS.ink}}>+</button>
          </div>
          <div style={{display:'flex',gap:5}}>
            {[100,200,400,800].map(n=>(
              <button key={n} onClick={()=>setCost(n)} style={{flex:1,padding:'6px',borderRadius:8,background:cost===n?RS.ink:'#fff',color:cost===n?RS.paper:RS.ink3,border:'1px solid '+(cost===n?RS.ink:RS.line),fontSize:11,fontWeight:500,fontFamily:RS.mono,cursor:'pointer'}}>{n}</button>
            ))}
          </div>
        </div>

        {/* Inline fields */}
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8,marginBottom:10}}>
          <div style={{background:'#fff',border:'1px solid '+RS.line,borderRadius:12,padding:'10px 12px'}}>
            <div style={{fontFamily:RS.mono,fontSize:9,letterSpacing:'.12em',color:RS.ink4,marginBottom:4}}>VALOR TIENDA</div>
            <div style={{display:'flex',alignItems:'baseline'}}><input defaultValue="6,50" style={{width:'100%',border:'none',fontFamily:RS.sans,fontSize:18,fontWeight:600,background:'transparent',outline:'none',padding:0,color:RS.ink}}/><span style={{color:RS.ink4,fontSize:14}}>€</span></div>
          </div>
          <div style={{background:'#fff',border:'1px solid '+RS.line,borderRadius:12,padding:'10px 12px'}}>
            <div style={{fontFamily:RS.mono,fontSize:9,letterSpacing:'.12em',color:RS.ink4,marginBottom:4}}>STOCK</div>
            <div style={{display:'flex',alignItems:'baseline'}}><input defaultValue="12" style={{width:'100%',border:'none',fontFamily:RS.sans,fontSize:18,fontWeight:600,background:'transparent',outline:'none',padding:0,color:RS.ink}}/><span style={{color:RS.ink4,fontSize:12,fontFamily:RS.mono,marginLeft:4}}>uds</span></div>
          </div>
        </div>

        {/* WA preview */}
        <div style={{background:'#E4DDCE',borderRadius:14,padding:14,marginBottom:12,border:'1px solid '+RS.line}}>
          <div style={{fontFamily:RS.mono,fontSize:9,letterSpacing:'.14em',color:RS.ink3,marginBottom:8}}>● VISTA PREVIA WHATSAPP</div>
          <div style={{background:'#fff',borderRadius:'12px 12px 12px 2px',padding:'10px 12px',fontSize:12.5,lineHeight:1.4,boxShadow:'0 1px 1px rgba(0,0,0,.06)'}}>
            ¡Hola! {emoji}<br/>Has desbloqueado un premio nuevo:<br/><b>{name}</b> — {cost} pts.
            <div style={{marginTop:8,padding:'8px 10px',background:RS.greenWash,borderRadius:8,border:'1px solid rgba(0,200,81,.25)'}}>
              <div style={{fontSize:20}}>{emoji}</div>
              <div style={{fontSize:11,fontWeight:600,marginTop:2}}>{name}</div>
              <div style={{fontSize:9,fontFamily:RS.mono,color:RS.greenDeep,marginTop:1}}>{cost} PUNTOS</div>
            </div>
            <div style={{fontSize:9,color:'#999',textAlign:'right',marginTop:4}}>9:41 ✓✓</div>
          </div>
        </div>
      </div>

      <div style={{padding:'12px 16px 22px',background:RS.paper,borderTop:'1px solid '+RS.line,display:'flex',gap:8}}>
        <button onClick={onBack} style={{padding:'13px 18px',borderRadius:12,background:'#fff',border:'1px solid '+RS.line,color:RS.ink3,fontSize:13,fontWeight:500,fontFamily:RS.sans,cursor:'pointer'}}>Cancelar</button>
        <button onClick={onSave} style={{flex:1,padding:'13px 18px',borderRadius:12,background:RS.green,color:RS.greenDark,border:'none',fontSize:13,fontWeight:600,fontFamily:RS.sans,cursor:'pointer',boxShadow:'0 4px 14px rgba(0,200,81,.3)'}}>Publicar premio →</button>
      </div>
      <RHomeIndicator/>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// SCREEN 4 — REGLAS Y MULTIPLICADORES
// ═══════════════════════════════════════════════════════════════
function RulesScreen({ onBack }) {
  return (
    <div style={{height:'100%',display:'flex',flexDirection:'column',background:RS.paper}}>
      <RStatusBar/>
      <RTopBar title="Reglas del programa" sub="ACUMULACIÓN · MULTIPLICADORES" back onBack={onBack}/>

      <div style={{flex:1,overflowY:'auto',padding:'14px 16px 0'}}>
        {/* Base ratio */}
        <div style={{background:RS.ink,color:'#fff',borderRadius:16,padding:'16px 18px',marginBottom:12,position:'relative',overflow:'hidden'}}>
          <div style={{position:'absolute',top:-20,right:-20,width:120,height:120,borderRadius:'50%',background:'radial-gradient(circle, rgba(0,200,81,.2), transparent 70%)'}}/>
          <div style={{fontFamily:RS.mono,fontSize:10,letterSpacing:'.14em',color:'rgba(255,255,255,.5)',marginBottom:4,position:'relative'}}>RATIO BASE</div>
          <div style={{display:'flex',alignItems:'center',gap:10,position:'relative'}}>
            <div style={{fontFamily:RS.serif,fontSize:32,letterSpacing:'-.01em'}}>1€</div>
            <div style={{fontFamily:RS.mono,fontSize:14,color:RS.green}}>→</div>
            <div style={{fontFamily:RS.serif,fontSize:32,letterSpacing:'-.01em',color:RS.green}}><em style={{fontStyle:'italic'}}>2</em> pts</div>
            <button style={{marginLeft:'auto',padding:'7px 12px',borderRadius:10,background:'rgba(255,255,255,.1)',border:'1px solid rgba(255,255,255,.15)',color:'#fff',fontSize:11,fontFamily:RS.sans,cursor:'pointer'}}>Cambiar</button>
          </div>
          <div style={{fontSize:11,color:'rgba(255,255,255,.55)',marginTop:6,position:'relative'}}>Cada euro consumido suma 2 puntos al cliente</div>
        </div>

        {/* Multipliers */}
        <div style={{fontFamily:RS.mono,fontSize:10,letterSpacing:'.14em',color:RS.ink4,marginBottom:8,textTransform:'uppercase'}}>Multiplicadores activos</div>
        <div style={{background:'#fff',border:'1px solid '+RS.line,borderRadius:14,overflow:'hidden',marginBottom:12}}>
          {[
            {ic:'🎂',n:'Cumpleaños',d:'×3 durante 7 días',col:RS.purple,on:true},
            {ic:'🌙',n:'Cliente dormido',d:'×2 si 21+ días sin venir',col:RS.amber,on:true},
            {ic:'⏰',n:'Happy hour',d:'×1.5 · mar, mié 17–19h',col:RS.blue,on:true},
            {ic:'👥',n:'Trae a un amigo',d:'+50 pts · ambos',col:RS.greenDeep,on:false},
          ].map((m,i)=>(
            <div key={i} style={{display:'grid',gridTemplateColumns:'auto 1fr auto',gap:12,padding:'12px 14px',alignItems:'center',borderTop:i?'1px solid '+RS.line:'none',opacity:m.on?1:.6}}>
              <div style={{width:36,height:36,borderRadius:10,background:RS.paper2,display:'grid',placeItems:'center',fontSize:18,border:'1px solid '+RS.line}}>{m.ic}</div>
              <div>
                <div style={{fontSize:13.5,fontWeight:500,marginBottom:1}}>{m.n}</div>
                <div style={{fontFamily:RS.mono,fontSize:10,color:m.col,letterSpacing:'.02em'}}>{m.d}</div>
              </div>
              <button style={{width:42,height:24,borderRadius:12,background:m.on?RS.green:RS.paper3,border:'none',cursor:'pointer',position:'relative'}}>
                <span style={{position:'absolute',top:3,left:m.on?21:3,width:18,height:18,borderRadius:'50%',background:'#fff',boxShadow:'0 1px 3px rgba(0,0,0,.2)',transition:'all .2s'}}/>
              </button>
            </div>
          ))}
        </div>

        {/* Levels */}
        <div style={{fontFamily:RS.mono,fontSize:10,letterSpacing:'.14em',color:RS.ink4,marginBottom:8,textTransform:'uppercase'}}>Niveles de fidelidad</div>
        <div style={{background:'#fff',border:'1px solid '+RS.line,borderRadius:14,padding:'4px 0',marginBottom:12}}>
          {[
            {n:'Curioso',r:'0–4 visitas',m:'×1',c:RS.ink4},
            {n:'Habitual',r:'5–14 visitas',m:'×1.2',c:RS.blue},
            {n:'Devoto',r:'15–29 visitas',m:'×1.5',c:RS.greenDeep},
            {n:'De la casa',r:'30+ visitas',m:'×2',c:RS.purple},
          ].map((lvl,i)=>(
            <div key={i} style={{display:'flex',alignItems:'center',gap:12,padding:'10px 14px',borderTop:i?'1px solid '+RS.line:'none'}}>
              <div style={{width:8,height:40,borderRadius:4,background:lvl.c}}/>
              <div style={{flex:1}}>
                <div style={{fontSize:13.5,fontWeight:500}}>{lvl.n}</div>
                <div style={{fontFamily:RS.mono,fontSize:10,color:RS.ink4}}>{lvl.r}</div>
              </div>
              <div style={{fontFamily:RS.serif,fontSize:22,color:lvl.c,letterSpacing:'-.01em'}}>{lvl.m}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{padding:'12px 16px 22px',background:RS.paper,borderTop:'1px solid '+RS.line}}>
        <button style={{width:'100%',padding:'13px 16px',borderRadius:12,background:RS.ink,color:RS.paper,border:'none',fontSize:13,fontWeight:600,fontFamily:RS.sans,cursor:'pointer'}}>Guardar cambios</button>
      </div>
      <RHomeIndicator/>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// SCREEN 5 — COLA DE CANJES PENDIENTES
// ═══════════════════════════════════════════════════════════════
function QueueScreen({ onBack }) {
  const queue = [
    {n:'Pablo Giménez',i:'PG',premio:'Café por la casa',emoji:'☕',pts:100,t:'ahora',vip:true},
    {n:'Marta Rodríguez',i:'MR',premio:'Tarta del día',emoji:'🍰',pts:400,t:'hace 2 min',vip:false},
    {n:'Carlos Cebrián',i:'CC',premio:'Copa de vino',emoji:'🍷',pts:250,t:'hace 5 min',vip:false},
  ];
  return (
    <div style={{height:'100%',display:'flex',flexDirection:'column',background:RS.paper}}>
      <RStatusBar/>
      <RTopBar title="Canjes pendientes" sub="● 3 ESPERANDO VALIDACIÓN" back onBack={onBack}/>

      <div style={{flex:1,overflowY:'auto',padding:'14px 16px 0'}}>
        {/* Live strip */}
        <div style={{background:RS.ink,color:'#fff',borderRadius:12,padding:'10px 14px',marginBottom:12,display:'flex',alignItems:'center',gap:10,position:'relative',overflow:'hidden'}}>
          <div style={{position:'absolute',inset:0,background:'radial-gradient(circle at 100% 50%, rgba(0,200,81,.2), transparent 60%)'}}/>
          <div style={{width:8,height:8,borderRadius:'50%',background:RS.green,animation:'blink 1.5s infinite',position:'relative'}}/>
          <div style={{fontFamily:RS.mono,fontSize:10,letterSpacing:'.14em',color:RS.green,position:'relative'}}>EN VIVO</div>
          <div style={{flex:1,fontSize:12,position:'relative'}}>Los canjes aparecen al escanear el QR del cliente</div>
        </div>

        {queue.map((q,i)=>(
          <div key={i} style={{background:'#fff',border:'1px solid '+RS.line,borderRadius:14,padding:14,marginBottom:8}}>
            <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:12}}>
              <div style={{position:'relative'}}>
                <div style={{width:44,height:44,borderRadius:'50%',background:RS.greenWash,display:'grid',placeItems:'center',fontFamily:RS.mono,fontSize:12,fontWeight:600,color:RS.greenDeep,border:'1px solid rgba(0,200,81,.25)'}}>{q.i}</div>
                {q.vip && <div style={{position:'absolute',bottom:-2,right:-2,width:18,height:18,borderRadius:'50%',background:RS.ink,display:'grid',placeItems:'center',border:'2px solid #fff'}}>{RIc.star(RS.green,10)}</div>}
              </div>
              <div style={{flex:1}}>
                <div style={{fontSize:14,fontWeight:500}}>{q.n}</div>
                <div style={{fontFamily:RS.mono,fontSize:10,color:RS.ink4,letterSpacing:'.02em'}}>{q.t} · saldo suficiente ✓</div>
              </div>
              <div style={{fontFamily:RS.mono,fontSize:10,color:RS.amber,background:'rgba(224,163,48,.12)',padding:'3px 8px',borderRadius:20,letterSpacing:'.1em'}}>PENDIENTE</div>
            </div>
            <div style={{background:RS.paper,borderRadius:10,padding:'10px 12px',display:'flex',alignItems:'center',gap:10,marginBottom:10,border:'1px solid '+RS.line}}>
              <div style={{width:36,height:36,borderRadius:10,background:'#fff',display:'grid',placeItems:'center',fontSize:20,border:'1px solid '+RS.line}}>{q.emoji}</div>
              <div style={{flex:1}}>
                <div style={{fontSize:13,fontWeight:500}}>{q.premio}</div>
                <div style={{fontFamily:RS.mono,fontSize:10,color:RS.greenDeep}}>−{q.pts} pts</div>
              </div>
            </div>
            <div style={{display:'flex',gap:6}}>
              <button style={{flex:1,padding:'10px',borderRadius:10,background:'#fff',border:'1px solid '+RS.line,color:RS.red,fontSize:12,fontWeight:500,fontFamily:RS.sans,cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',gap:4}}>{RIc.close(RS.red,14)} Rechazar</button>
              <button style={{flex:2,padding:'10px',borderRadius:10,background:RS.green,color:RS.greenDark,border:'none',fontSize:12,fontWeight:600,fontFamily:RS.sans,cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',gap:6}}>{RIc.check(RS.greenDark,14)} Entregar premio</button>
            </div>
          </div>
        ))}
      </div>
      <style>{`@keyframes blink{50%{opacity:.4}}`}</style>
      <RHomeIndicator/>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// SCREEN 6 — ANALÍTICA DE PREMIOS
// ═══════════════════════════════════════════════════════════════
function StatsScreen({ onBack }) {
  const ranking = [
    {e:'☕',n:'Café por la casa',c:143,p:47,w:85},
    {e:'🥐',n:'Croissant',c:87,p:28,w:55},
    {e:'🍷',n:'Copa de vino',c:52,p:17,w:35},
    {e:'🍰',n:'Tarta del día',c:18,p:6,w:12},
    {e:'🎁',n:'Brunch para 2',c:3,p:1,w:3},
  ];
  const total = 304;
  return (
    <div style={{height:'100%',display:'flex',flexDirection:'column',background:RS.paper}}>
      <RStatusBar/>
      <RTopBar title="Rendimiento de premios" sub="MARZO · MES EN CURSO" back onBack={onBack}/>

      <div style={{flex:1,overflowY:'auto',padding:'14px 16px 0'}}>
        {/* Hero KPIs */}
        <div style={{background:'#fff',border:'1px solid '+RS.line,borderRadius:16,padding:16,marginBottom:12}}>
          <div style={{fontFamily:RS.mono,fontSize:10,letterSpacing:'.14em',color:RS.ink4,marginBottom:6}}>CANJES TOTALES</div>
          <div style={{display:'flex',alignItems:'flex-end',gap:8,marginBottom:14}}>
            <div style={{fontFamily:RS.sans,fontSize:42,fontWeight:500,letterSpacing:'-.02em',lineHeight:1}}>{total}</div>
            <div style={{fontFamily:RS.mono,fontSize:11,color:RS.greenDeep,paddingBottom:6}}>↗ +18% vs. feb</div>
          </div>
          {/* Bar chart */}
          <div style={{display:'flex',alignItems:'flex-end',gap:4,height:60,marginBottom:4}}>
            {[38,42,51,34,48,55,36].map((v,i)=>(
              <div key={i} style={{flex:1,height:v+'%',background:i===6?RS.green:RS.paper3,borderRadius:'3px 3px 0 0',position:'relative'}}>
                {i===6 && <div style={{position:'absolute',top:-18,left:'50%',transform:'translateX(-50%)',fontSize:9,fontFamily:RS.mono,color:RS.greenDeep,fontWeight:600}}>55</div>}
              </div>
            ))}
          </div>
          <div style={{display:'flex',justifyContent:'space-between',fontFamily:RS.mono,fontSize:9,color:RS.ink4,letterSpacing:'.08em'}}>
            {['L','M','X','J','V','S','D'].map(d=><span key={d}>{d}</span>)}
          </div>
        </div>

        {/* Row KPIs */}
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:8,marginBottom:12}}>
          {[
            {l:'MARGEN',v:'63%',c:RS.greenDeep},
            {l:'COSTE MEDIO',v:'1,90€',c:RS.ink},
            {l:'TICKET POST',v:'+34%',c:RS.greenDeep},
          ].map((k,i)=>(
            <div key={i} style={{background:'#fff',border:'1px solid '+RS.line,borderRadius:12,padding:'10px 12px'}}>
              <div style={{fontFamily:RS.mono,fontSize:9,letterSpacing:'.1em',color:RS.ink4,marginBottom:4}}>{k.l}</div>
              <div style={{fontSize:18,fontWeight:600,color:k.c}}>{k.v}</div>
            </div>
          ))}
        </div>

        {/* Ranking */}
        <div style={{fontFamily:RS.mono,fontSize:10,letterSpacing:'.14em',color:RS.ink4,marginBottom:8,textTransform:'uppercase'}}>Ranking de premios</div>
        <div style={{background:'#fff',border:'1px solid '+RS.line,borderRadius:14,overflow:'hidden',marginBottom:12}}>
          {ranking.map((r,i)=>(
            <div key={i} style={{padding:'10px 14px',borderTop:i?'1px solid '+RS.line:'none'}}>
              <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:5}}>
                <div style={{width:20,fontFamily:RS.mono,fontSize:11,color:RS.ink4,fontWeight:600}}>#{i+1}</div>
                <div style={{fontSize:16}}>{r.e}</div>
                <div style={{flex:1,fontSize:13,fontWeight:500}}>{r.n}</div>
                <div style={{fontFamily:RS.mono,fontSize:11,color:RS.ink3}}>{r.c} · {r.p}%</div>
              </div>
              <div style={{height:4,background:RS.paper2,borderRadius:100,overflow:'hidden',marginLeft:30}}>
                <div style={{height:'100%',width:r.w+'%',background:i===0?RS.green:i<3?RS.greenDeep:RS.ink4,borderRadius:100}}/>
              </div>
            </div>
          ))}
        </div>

        {/* Insight */}
        <div style={{background:RS.greenWash,border:'1px solid rgba(0,200,81,.25)',borderRadius:12,padding:'12px 14px',marginBottom:12,display:'flex',alignItems:'flex-start',gap:10}}>
          {RIc.sparkle(RS.greenDeep,16)}
          <div style={{flex:1,fontSize:12,color:RS.ink2,lineHeight:1.45}}>
            <b style={{color:RS.greenDeep}}>Insight del mes</b><br/>
            Los clientes que canjean el <b>☕ Café</b> vuelven de media <b>2,3 veces</b> en las siguientes 3 semanas. Es tu anzuelo más rentable.
          </div>
        </div>
      </div>
      <RHomeIndicator/>
    </div>
  );
}

Object.assign(window, { RewardsListScreen, RewardDetailScreen, RewardEditorScreen, RulesScreen, QueueScreen, StatsScreen, RS, RIc });
