// Phone hero + mini UI screens for the Instagram campaign scenes

function PhoneHero({ children, rotate = 0, width = 170 }) {
  const h = width * 2.04;
  return (
    <div style={{
      width, height: h,
      background: '#1a1410',
      borderRadius: width * 0.18,
      padding: 6,
      boxShadow: `
        0 ${width*0.25}px ${width*0.35}px rgba(0,0,0,.35),
        0 ${width*0.08}px ${width*0.15}px rgba(0,0,0,.25),
        inset 0 0 0 1.5px rgba(255,255,255,.08)
      `,
      transform: `rotate(${rotate}deg)`,
      transformOrigin: 'center center',
    }}>
      <div style={{
        width: '100%', height: '100%',
        background: '#ECE5DD',
        borderRadius: width * 0.15,
        overflow: 'hidden',
        position: 'relative',
      }}>
        {/* Dynamic Island */}
        <div style={{
          position: 'absolute', top: 8, left: '50%', transform: 'translateX(-50%)',
          width: width * 0.32, height: width * 0.085,
          background: '#1a1410', borderRadius: 999, zIndex: 10,
        }}/>
        {/* Status bar */}
        <div style={{
          display:'flex', justifyContent:'space-between', alignItems:'center',
          padding: '10px 16px 0', fontSize: 9, fontWeight: 600, color:'#1a1410',
          fontFamily: '-apple-system, SF Pro Display, system-ui',
        }}>
          <span>9:41</span>
          <span style={{opacity:0}}>—</span>
          <span style={{fontSize: 8}}>●●●● 4G</span>
        </div>
        {children}
      </div>
    </div>
  );
}

// WhatsApp-style confirmation bubble
function MiniConfirm({ name, pts, balance, subject = 'café', accent = '#00a843' }) {
  return (
    <div style={{padding: '28px 8px 8px', fontFamily: '-apple-system, SF Pro Display, system-ui'}}>
      {/* Header */}
      <div style={{display:'flex',alignItems:'center',gap:6,paddingBottom:6,borderBottom:'1px solid rgba(0,0,0,.08)',marginBottom:10}}>
        <div style={{width:22,height:22,borderRadius:'50%',background:accent,display:'grid',placeItems:'center',color:'#fff',fontSize:10,fontWeight:700}}>●</div>
        <div style={{flex:1,minWidth:0}}>
          <div style={{fontSize:9,fontWeight:600,color:'#111',lineHeight:1.1}}>WhatsLoyalty</div>
          <div style={{fontSize:7,color:'#667781',lineHeight:1.1}}>en línea</div>
        </div>
      </div>
      {/* Incoming bubble */}
      <div style={{background:'#fff',borderRadius:8,padding:'7px 9px',marginBottom:6,boxShadow:'0 1px 1px rgba(0,0,0,.08)',maxWidth:'88%'}}>
        <div style={{fontSize:8,lineHeight:1.35,color:'#111'}}>
          ¡Hola <b>{name}</b>! 👋
        </div>
        <div style={{fontSize:8,lineHeight:1.35,color:'#111',marginTop:3}}>
          Tu <b>{subject}</b> de hoy{pts > 0 ? <> suma <b>+{pts} pts</b></> : ' está confirmado'}.
        </div>
        <div style={{fontSize:7,color:'#667781',textAlign:'right',marginTop:3}}>9:14</div>
      </div>
      {/* Balance card */}
      <div style={{background:'#fff',borderRadius:8,padding:'8px 9px',marginBottom:6,boxShadow:'0 1px 1px rgba(0,0,0,.08)',maxWidth:'88%'}}>
        <div style={{fontSize:6,letterSpacing:'.1em',color:'#667781',textTransform:'uppercase',marginBottom:3}}>TU SALDO</div>
        <div style={{fontSize:13,fontWeight:700,color:accent,lineHeight:1}}>{balance}</div>
        <div style={{height:3,background:'#e8e4d8',borderRadius:2,marginTop:5,overflow:'hidden'}}>
          <div style={{width:'80%',height:'100%',background:accent}}/>
        </div>
        <div style={{fontSize:7,color:'#667781',marginTop:4}}>Sigue sumando. Próxima recompensa cerca 🎁</div>
      </div>
      {/* Reply bubble */}
      <div style={{background:'#DCF8C6',borderRadius:8,padding:'6px 9px',marginLeft:'auto',maxWidth:'55%',boxShadow:'0 1px 1px rgba(0,0,0,.06)'}}>
        <div style={{fontSize:8,color:'#111'}}>¡Gracias! 💚</div>
        <div style={{fontSize:7,color:'#667781',textAlign:'right',marginTop:2}}>9:14 ✓✓</div>
      </div>
    </div>
  );
}

// Client card (for podo / perros)
function MiniClient({ name, accent = '#00a843', visits = 5 }) {
  return (
    <div style={{padding: '28px 8px 8px', fontFamily: '-apple-system, SF Pro Display, system-ui'}}>
      <div style={{display:'flex',alignItems:'center',gap:6,paddingBottom:6,borderBottom:'1px solid rgba(0,0,0,.08)',marginBottom:10}}>
        <div style={{width:22,height:22,borderRadius:'50%',background:accent,display:'grid',placeItems:'center',color:'#fff',fontSize:10,fontWeight:700}}>●</div>
        <div style={{flex:1}}>
          <div style={{fontSize:9,fontWeight:600,color:'#111'}}>WhatsLoyalty</div>
          <div style={{fontSize:7,color:'#667781'}}>ficha cliente</div>
        </div>
      </div>
      <div style={{background:'#fff',borderRadius:10,padding:10,boxShadow:'0 1px 2px rgba(0,0,0,.08)'}}>
        <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:8}}>
          <div style={{width:28,height:28,borderRadius:'50%',background:accent,color:'#fff',display:'grid',placeItems:'center',fontSize:11,fontWeight:700}}>{name.charAt(0)}</div>
          <div>
            <div style={{fontSize:9,fontWeight:600,color:'#111',lineHeight:1.1}}>{name}</div>
            <div style={{fontSize:7,color:'#667781'}}>cliente VIP · 14 meses</div>
          </div>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:6,marginBottom:8}}>
          <div style={{background:'#F4F1EA',borderRadius:6,padding:'5px 6px'}}>
            <div style={{fontSize:5,letterSpacing:'.1em',color:'#667781',textTransform:'uppercase'}}>VISITAS</div>
            <div style={{fontSize:14,fontWeight:700,color:accent,lineHeight:1}}>{visits}</div>
          </div>
          <div style={{background:'#F4F1EA',borderRadius:6,padding:'5px 6px'}}>
            <div style={{fontSize:5,letterSpacing:'.1em',color:'#667781',textTransform:'uppercase'}}>GASTO</div>
            <div style={{fontSize:14,fontWeight:700,color:'#111',lineHeight:1}}>284€</div>
          </div>
        </div>
        <button style={{width:'100%',background:accent,color:'#fff',border:0,borderRadius:6,padding:'6px 0',fontSize:8,fontWeight:600,fontFamily:'inherit'}}>Escribir por WhatsApp →</button>
      </div>
      <div style={{marginTop:8,fontSize:7,color:'#667781',textAlign:'center'}}>Última visita: hace 23 días</div>
    </div>
  );
}

// History / activity feed (gym)
function MiniHistory({ accent = '#00C851' }) {
  const days = [
    {d:'HOY',t:'Clase completada',m:'420 kcal · 45min',on:true},
    {d:'MAR',t:'Crossfit · 18h',m:'PR squat 95kg',on:true},
    {d:'LUN',t:'Funcional AM',m:'Racha día 10 🔥',on:true},
    {d:'SÁB',t:'Yoga restaurativo',m:'60 min',on:false},
  ];
  return (
    <div style={{padding: '28px 8px 8px', fontFamily: '-apple-system, SF Pro Display, system-ui'}}>
      <div style={{display:'flex',alignItems:'center',gap:6,paddingBottom:6,borderBottom:'1px solid rgba(0,0,0,.08)',marginBottom:10}}>
        <div style={{width:22,height:22,borderRadius:'50%',background:accent,display:'grid',placeItems:'center',color:'#111',fontSize:10,fontWeight:800}}>F</div>
        <div style={{flex:1}}>
          <div style={{fontSize:9,fontWeight:600,color:'#111'}}>Forja Studio</div>
          <div style={{fontSize:7,color:'#667781'}}>vía WhatsLoyalty</div>
        </div>
      </div>
      <div style={{background:'#0a0f0c',color:'#fff',borderRadius:8,padding:'8px 9px',marginBottom:6}}>
        <div style={{fontSize:6,letterSpacing:'.12em',color:accent,textTransform:'uppercase',marginBottom:2}}>RACHA ACTUAL</div>
        <div style={{fontSize:22,fontWeight:700,color:accent,lineHeight:1,fontFamily:'Instrument Serif',fontStyle:'italic'}}>12 días</div>
        <div style={{fontSize:7,opacity:.7,marginTop:3}}>sin faltar. Próx. premio en 3 días.</div>
      </div>
      {days.map((x,i)=>(
        <div key={i} style={{display:'flex',alignItems:'center',gap:6,padding:'4px 0',borderTop:i?'1px solid rgba(0,0,0,.06)':0}}>
          <div style={{width:4,height:4,borderRadius:'50%',background:x.on?accent:'#ccc'}}/>
          <div style={{fontSize:6,letterSpacing:'.1em',color:'#667781',width:20}}>{x.d}</div>
          <div style={{flex:1,minWidth:0}}>
            <div style={{fontSize:8,fontWeight:600,color:'#111',lineHeight:1.1}}>{x.t}</div>
            <div style={{fontSize:6,color:'#667781'}}>{x.m}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

Object.assign(window, { PhoneHero, MiniConfirm, MiniClient, MiniHistory });
