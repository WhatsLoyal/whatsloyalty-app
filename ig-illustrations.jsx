// ═══════════════════════════════════════════════════════════════
// Ilustraciones editoriales para los 8 posts de Instagram
// Estilo: planos de color cálidos + figuras estilizadas + móvil con WhatsApp
// ═══════════════════════════════════════════════════════════════

// Paleta compartida editorial
const P = {
  skin: ['#E8B49A', '#C69177', '#8A5A3F', '#D99A7C', '#A67358', '#F0C7A8', '#6B4328'],
  hair: ['#2A1810', '#4A2C1A', '#1F1410', '#3D2817', '#8A6843', '#C4A676'],
  lip: '#B85443',
  phone: '#0A0F0C',
  phoneScreen: '#ECE5D9',
  whatsapp: '#00A884',
  green: '#00C851',
  eye: '#1a1410',
};

// ── Móvil con WhatsApp visible (reusable) ──
function PhoneProp({ x, y, scale=1, rot=0, glow=false }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot}) scale(${scale})`}>
      {glow && <circle r="60" fill={P.whatsapp} opacity=".12"/>}
      <rect x="-22" y="-38" width="44" height="76" rx="8" fill={P.phone}/>
      <rect x="-19" y="-33" width="38" height="66" rx="4" fill="#128C7E"/>
      {/* WhatsApp header */}
      <rect x="-19" y="-33" width="38" height="10" fill="#075E54"/>
      <circle cx="-13" cy="-28" r="2.5" fill="#fff"/>
      <rect x="-9" y="-29.5" width="16" height="1.5" rx=".5" fill="#fff" opacity=".9"/>
      <rect x="-9" y="-27" width="10" height="1" rx=".5" fill="#fff" opacity=".6"/>
      {/* message bubbles */}
      <rect x="-16" y="-19" width="22" height="8" rx="2" fill="#fff"/>
      <rect x="-14" y="-17" width="16" height="1" fill="#888"/>
      <rect x="-14" y="-15" width="12" height="1" fill="#888"/>
      <rect x="-4" y="-8" width="20" height="6" rx="2" fill="#DCF8C6"/>
      <rect x="-2" y="-6" width="14" height="1" fill="#555"/>
      {/* points card */}
      <rect x="-16" y="2" width="32" height="18" rx="3" fill="#fff" stroke={P.green} strokeWidth=".4"/>
      <text x="0" y="10" textAnchor="middle" fontSize="4" fontWeight="700" fill={P.green} fontFamily="Inter Tight">+15 PTS</text>
      <text x="0" y="15" textAnchor="middle" fontSize="2.8" fill="#666" fontFamily="Inter Tight">85 / 100</text>
      <rect x="-13" y="17" width="26" height="1.2" rx=".6" fill="#eee"/>
      <rect x="-13" y="17" width="22" height="1.2" rx=".6" fill={P.green}/>
      {/* home bar */}
      <rect x="-7" y="33" width="14" height="1" rx=".5" fill="#fff" opacity=".5"/>
    </g>
  );
}

// ── Rostro base ──
function Face({ tone=0, hair=0, hairStyle='short', glasses=false, beard=false, earring=false, hijab=false, smile=true }) {
  const sk = P.skin[tone], hr = P.hair[hair];
  return (
    <g>
      {/* neck */}
      <rect x="-10" y="24" width="20" height="14" fill={sk}/>
      <path d={`M-12 38 Q-12 30 -10 26 L10 26 Q12 30 12 38 Z`} fill={sk} opacity=".7"/>
      {/* face */}
      <ellipse cx="0" cy="8" rx="20" ry="25" fill={sk}/>
      {/* ears */}
      {!hijab && <>
        <ellipse cx="-20" cy="10" rx="3" ry="5" fill={sk}/>
        <ellipse cx="20" cy="10" rx="3" ry="5" fill={sk}/>
        {earring && <circle cx="20" cy="15" r="1.5" fill="#D4AF37"/>}
      </>}
      {/* hair */}
      {hijab ? (
        <path d="M-24 10 Q-28 -12 0 -18 Q28 -12 24 10 L26 24 Q0 28 -26 24 Z" fill={hr}/>
      ) : hairStyle === 'short' ? (
        <path d="M-20 -2 Q-22 -18 0 -20 Q22 -18 20 -2 Q18 -8 12 -10 Q6 -14 0 -14 Q-6 -14 -12 -10 Q-18 -8 -20 -2 Z" fill={hr}/>
      ) : hairStyle === 'bun' ? (
        <>
          <circle cx="0" cy="-16" r="6" fill={hr}/>
          <path d="M-20 -2 Q-22 -14 -14 -16 Q0 -12 14 -16 Q22 -14 20 -2 Q10 -6 0 -6 Q-10 -6 -20 -2 Z" fill={hr}/>
        </>
      ) : hairStyle === 'long' ? (
        <>
          <path d="M-22 -2 Q-24 -16 0 -20 Q24 -16 22 -2 L22 18 Q15 22 0 20 Q-15 22 -22 18 Z" fill={hr}/>
          <ellipse cx="0" cy="-14" rx="20" ry="8" fill={hr}/>
        </>
      ) : hairStyle === 'curly' ? (
        <>
          <circle cx="-14" cy="-8" r="6" fill={hr}/>
          <circle cx="-4" cy="-14" r="6" fill={hr}/>
          <circle cx="6" cy="-14" r="6" fill={hr}/>
          <circle cx="15" cy="-8" r="6" fill={hr}/>
          <circle cx="-18" cy="0" r="5" fill={hr}/>
          <circle cx="18" cy="0" r="5" fill={hr}/>
        </>
      ) : hairStyle === 'bald' ? null : (
        <path d="M-20 -2 Q-22 -18 0 -20 Q22 -18 20 -2 Q18 -8 12 -10 Q6 -14 0 -14 Q-6 -14 -12 -10 Q-18 -8 -20 -2 Z" fill={hr}/>
      )}
      {/* eyes */}
      <g fill={P.eye}>
        <ellipse cx="-7" cy="8" rx="1.2" ry="1.8"/>
        <ellipse cx="7" cy="8" rx="1.2" ry="1.8"/>
      </g>
      {/* brows */}
      <path d="M-10 4 Q-7 2.5 -4 4" stroke={hr} strokeWidth="1.2" fill="none" strokeLinecap="round"/>
      <path d="M4 4 Q7 2.5 10 4" stroke={hr} strokeWidth="1.2" fill="none" strokeLinecap="round"/>
      {/* nose */}
      <path d="M0 11 Q-1.5 15 0 17 Q1.5 15 0 11" fill={sk} stroke="#0004" strokeWidth=".3"/>
      {/* mouth */}
      {smile ? (
        <path d="M-5 20 Q0 24 5 20" stroke={P.lip} strokeWidth="1.6" fill="none" strokeLinecap="round"/>
      ) : (
        <path d="M-4 20 L4 20" stroke={P.lip} strokeWidth="1.4" strokeLinecap="round"/>
      )}
      {/* glasses */}
      {glasses && (
        <g fill="none" stroke="#1a1410" strokeWidth="1">
          <circle cx="-7" cy="8" r="4.5"/>
          <circle cx="7" cy="8" r="4.5"/>
          <line x1="-2.5" y1="8" x2="2.5" y2="8"/>
        </g>
      )}
      {/* beard */}
      {beard && (
        <path d="M-14 16 Q-12 26 0 30 Q12 26 14 16 Q10 22 0 22 Q-10 22 -14 16 Z" fill={hr} opacity=".85"/>
      )}
    </g>
  );
}

// ═══════════════════════════════════════════════════════════════
// POST 1 · CAFÉ MORENO — barista mujer sirviendo café
// ═══════════════════════════════════════════════════════════════
function Illust_Cafe() {
  return (
    <svg viewBox="0 0 400 500" style={{width:'100%',height:'100%',display:'block'}}>
      <defs>
        <linearGradient id="c-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#E8D4B8"/>
          <stop offset="1" stopColor="#C99A6B"/>
        </linearGradient>
        <linearGradient id="c-bar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3d2817"/>
          <stop offset="1" stopColor="#2a1810"/>
        </linearGradient>
      </defs>
      <rect width="400" height="500" fill="url(#c-bg)"/>
      {/* Subway tiles back wall */}
      <g opacity=".4">
        {[0,1,2,3].map(r=>[0,1,2,3,4,5,6].map(c=>(
          <rect key={r+'-'+c} x={c*58 - (r%2?29:0)} y={r*30} width="56" height="28" fill="#fff" stroke="#8B6343" strokeWidth=".5" opacity=".35"/>
        )))}
      </g>
      {/* Hanging lamp */}
      <line x1="280" y1="0" x2="280" y2="80" stroke="#1a1410" strokeWidth="1"/>
      <path d="M260 80 Q280 110 300 80 L295 95 Q280 105 265 95 Z" fill="#E0A330"/>
      <ellipse cx="280" cy="120" rx="40" ry="8" fill="#E0A330" opacity=".2"/>

      {/* Menu chalkboard */}
      <rect x="40" y="50" width="90" height="110" rx="4" fill="#1a1410"/>
      <text x="85" y="75" textAnchor="middle" fontSize="10" fill="#E8D4B8" fontFamily="Instrument Serif" fontStyle="italic">menú</text>
      <line x1="55" y1="82" x2="115" y2="82" stroke="#E8D4B8" strokeWidth=".5"/>
      {['café solo · 1,40','cortado · 1,60','flat white · 2,20','tostada · 2,80','brunch · 9,50'].map((t,i)=>(
        <text key={i} x="50" y={95+i*12} fontSize="6.5" fill="#E8D4B8" fontFamily="JetBrains Mono">{t}</text>
      ))}

      {/* Counter */}
      <rect x="0" y="340" width="400" height="160" fill="url(#c-bar)"/>
      <rect x="0" y="336" width="400" height="10" fill="#4A2C1A"/>
      <rect x="0" y="340" width="400" height="3" fill="#8A5A3F" opacity=".4"/>

      {/* Espresso machine silhouette behind */}
      <g transform="translate(320 280)">
        <rect x="-30" y="0" width="60" height="60" rx="4" fill="#C0C0C0"/>
        <rect x="-25" y="5" width="50" height="20" rx="2" fill="#1a1410"/>
        <circle cx="-10" cy="15" r="3" fill="#E55A4B"/>
        <circle cx="10" cy="15" r="3" fill="#00C851"/>
        <rect x="-8" y="40" width="16" height="14" fill="#1a1410"/>
      </g>

      {/* Barista — woman with bun */}
      <g transform="translate(160 260)">
        {/* apron body */}
        <rect x="-38" y="38" width="76" height="100" fill="#6B4328"/>
        <path d="M-38 38 L38 38 L32 150 L-32 150 Z" fill="#8A5A3F"/>
        {/* apron strap */}
        <rect x="-38" y="38" width="8" height="60" fill="#4A2C1A"/>
        <rect x="30" y="38" width="8" height="60" fill="#4A2C1A"/>
        {/* apron tie */}
        <rect x="-30" y="95" width="60" height="4" fill="#2A1810"/>
        {/* shirt visible at neck */}
        <rect x="-12" y="28" width="24" height="16" fill="#F0C7A8"/>
        {/* right arm holding phone */}
        <path d="M28 50 Q52 62 56 90" stroke="#6B4328" strokeWidth="14" fill="none" strokeLinecap="round"/>
        {/* left arm resting on counter */}
        <path d="M-28 50 Q-48 70 -52 95" stroke="#6B4328" strokeWidth="14" fill="none" strokeLinecap="round"/>
        {/* hand (right) */}
        <circle cx="58" cy="95" r="5" fill={P.skin[0]}/>
        {/* head */}
        <Face tone={0} hair={0} hairStyle="bun" earring/>
        {/* name tag */}
        <rect x="12" y="48" width="18" height="7" rx="1" fill="#fff"/>
        <text x="21" y="53" textAnchor="middle" fontSize="4.5" fill="#3d2817" fontFamily="Inter Tight" fontWeight="700">LUCÍA</text>
      </g>

      {/* Phone in barista's hand */}
      <PhoneProp x={220} y={355} scale={1.3} rot={-8} glow/>

      {/* Coffee cup on counter */}
      <g transform="translate(90 360)">
        <ellipse cx="0" cy="0" rx="20" ry="6" fill="#fff"/>
        <path d="M-20 0 L-18 30 Q-18 35 -12 35 L12 35 Q18 35 18 30 L20 0 Z" fill="#fff"/>
        <ellipse cx="0" cy="0" rx="16" ry="4" fill="#3d2817"/>
        {/* latte art heart */}
        <path d="M-6 -1 Q-6 -3 -3 -3 Q0 -3 0 0 Q0 -3 3 -3 Q6 -3 6 -1 Q6 2 0 4 Q-6 2 -6 -1 Z" fill="#E8D4B8" opacity=".7"/>
        <text x="0" y="22" textAnchor="middle" fontSize="5" fill="#C99A6B" fontFamily="Instrument Serif" fontStyle="italic">moreno</text>
      </g>

      {/* Customer silhouette back to camera, arm extended */}
      <g transform="translate(60 370)" opacity=".7">
        <ellipse cx="0" cy="50" rx="32" ry="55" fill="#4A7A8C"/>
        <circle cx="0" cy="5" r="15" fill={P.skin[2]}/>
        <path d="M-8 0 Q-12 -5 -12 -14 Q-2 -20 8 -14 Q10 -5 8 0" fill={P.hair[2]}/>
      </g>

      {/* Floating +pts chip */}
      <g transform="translate(320 170)">
        <rect x="-32" y="-14" width="64" height="28" rx="14" fill="#fff" stroke="#00C851" strokeWidth="1.5"/>
        <circle cx="-20" cy="0" r="6" fill="#00C851"/>
        <text x="-20" y="2.5" textAnchor="middle" fontSize="7" fill="#04200f" fontWeight="700" fontFamily="Inter Tight">✓</text>
        <text x="6" y="3" textAnchor="middle" fontSize="9" fontWeight="700" fontFamily="Inter Tight" fill="#0a0f0c">+15 pts</text>
      </g>

      {/* steam */}
      <g fill="none" stroke="#fff" strokeWidth="1.5" opacity=".5" strokeLinecap="round">
        <path d="M85 345 Q82 335 88 328 Q92 320 88 312"/>
        <path d="M95 345 Q98 335 92 328 Q88 320 92 312"/>
      </g>
    </svg>
  );
}

// ═══════════════════════════════════════════════════════════════
// POST 2 · CLÍNICA DENTAL — dentista hombre con paciente
// ═══════════════════════════════════════════════════════════════
function Illust_Dental() {
  return (
    <svg viewBox="0 0 400 500" style={{width:'100%',height:'100%',display:'block'}}>
      <defs>
        <linearGradient id="d-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#E8F0F2"/>
          <stop offset="1" stopColor="#B8D4DA"/>
        </linearGradient>
      </defs>
      <rect width="400" height="500" fill="url(#d-bg)"/>
      {/* Window */}
      <rect x="20" y="40" width="120" height="140" rx="4" fill="#D4E8ED" stroke="#fff" strokeWidth="3"/>
      <line x1="80" y1="40" x2="80" y2="180" stroke="#fff" strokeWidth="3"/>
      <line x1="20" y1="110" x2="140" y2="110" stroke="#fff" strokeWidth="3"/>
      {/* plant */}
      <g transform="translate(50 200)">
        <rect x="-12" y="0" width="24" height="18" fill="#8A5A3F"/>
        <path d="M-8 0 Q-18 -20 -10 -35 Q0 -40 6 -25 Q14 -15 10 0" fill="#5A7A4A"/>
        <path d="M-4 0 Q-2 -30 8 -38 Q16 -30 12 -10" fill="#6B8A5A"/>
      </g>
      {/* Shelf with supplies */}
      <rect x="180" y="80" width="200" height="6" fill="#fff"/>
      <g transform="translate(200 50)">
        <rect x="0" y="8" width="18" height="30" rx="2" fill="#E55A4B"/>
        <rect x="4" y="12" width="10" height="4" fill="#fff"/>
        <rect x="25" y="12" width="14" height="26" rx="2" fill="#4A7A8C"/>
        <rect x="45" y="5" width="22" height="33" rx="2" fill="#fff" stroke="#B8D4DA" strokeWidth="1"/>
        <path d="M50 15 L64 15 M50 22 L60 22 M50 29 L62 29" stroke="#4A7A8C" strokeWidth=".8"/>
      </g>

      {/* Dental chair */}
      <g transform="translate(120 280)">
        <rect x="-10" y="50" width="20" height="80" fill="#E0DCCD"/>
        <rect x="-60" y="130" width="120" height="40" rx="8" fill="#D8D4C2"/>
        {/* chair back */}
        <rect x="-35" y="-40" width="70" height="170" rx="14" fill="#E8E4D3"/>
        <rect x="-30" y="-40" width="60" height="160" rx="10" fill="#F0ECDA"/>
        {/* headrest */}
        <rect x="-22" y="-55" width="44" height="25" rx="10" fill="#E8E4D3"/>
      </g>

      {/* Patient lying on chair (head only visible) */}
      <g transform="translate(120 235)">
        <ellipse cx="0" cy="0" rx="18" ry="20" fill={P.skin[5]}/>
        <path d="M-18 -2 Q-20 -18 0 -20 Q20 -18 18 -2 Q10 -8 0 -8 Q-10 -8 -18 -2 Z" fill={P.hair[5]}/>
        <ellipse cx="-5" cy="2" rx="1" ry="1.5" fill={P.eye}/>
        <ellipse cx="5" cy="2" rx="1" ry="1.5" fill={P.eye}/>
        <path d="M-4 12 Q0 15 4 12" stroke={P.lip} strokeWidth="1.2" fill="none"/>
        {/* bib */}
        <rect x="-24" y="18" width="48" height="30" rx="2" fill="#4A7A8C"/>
        <path d="M-20 18 L20 18 L16 22 L-16 22 Z" fill="#3a6a7c"/>
      </g>

      {/* Dentist — man standing, holds phone */}
      <g transform="translate(260 320)">
        {/* body coat */}
        <rect x="-42" y="20" width="84" height="160" fill="#fff"/>
        <path d="M-42 20 L42 20 L36 180 L-36 180 Z" fill="#fff"/>
        {/* coat collar V */}
        <path d="M-10 20 L0 50 L10 20" fill="#B8D4DA"/>
        {/* scrubs under */}
        <rect x="-8" y="20" width="16" height="16" fill="#4A7A8C"/>
        {/* arms */}
        <path d="M-36 36 Q-50 55 -52 85" stroke="#fff" strokeWidth="20" fill="none" strokeLinecap="round"/>
        <path d="M36 36 Q50 40 58 70" stroke="#fff" strokeWidth="20" fill="none" strokeLinecap="round"/>
        <circle cx="60" cy="75" r="6" fill={P.skin[1]}/>
        {/* head */}
        <g transform="translate(0 0)">
          <Face tone={1} hair={2} hairStyle="short" glasses beard/>
        </g>
        {/* name tag on coat */}
        <rect x="-30" y="40" width="24" height="8" rx="1" fill="#E8F0F2"/>
        <text x="-18" y="46" textAnchor="middle" fontSize="4.5" fill="#4A7A8C" fontWeight="700" fontFamily="Inter Tight">DR. SAMI</text>
      </g>

      {/* Phone in dentist's hand */}
      <PhoneProp x={320} y={395} scale={1.4} rot={12} glow/>

      {/* Floating success chip */}
      <g transform="translate(90 80)">
        <rect x="-54" y="-16" width="108" height="32" rx="16" fill="#fff" stroke="#00C851" strokeWidth="1.5"/>
        <circle cx="-40" cy="0" r="7" fill="#00C851"/>
        <path d="M-43 0 L-41 2 L-37 -2" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <text x="12" y="3" textAnchor="middle" fontSize="9" fontWeight="600" fontFamily="Inter Tight" fill="#0a0f0c">Revisión agendada</text>
      </g>

      {/* Tooth floating icon */}
      <g transform="translate(340 140)">
        <path d="M0 -15 Q-14 -15 -14 -2 Q-14 8 -10 14 Q-6 20 -4 12 Q-2 6 0 6 Q2 6 4 12 Q6 20 10 14 Q14 8 14 -2 Q14 -15 0 -15 Z" fill="#fff" stroke="#4A7A8C" strokeWidth="1.2"/>
      </g>
    </svg>
  );
}

// ═══════════════════════════════════════════════════════════════
// POST 3 · PODÓLOGO — mujer podóloga con paciente mayor
// ═══════════════════════════════════════════════════════════════
function Illust_Podologo() {
  return (
    <svg viewBox="0 0 400 500" style={{width:'100%',height:'100%',display:'block'}}>
      <defs>
        <linearGradient id="p-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#F5E6D3"/>
          <stop offset="1" stopColor="#D9B48C"/>
        </linearGradient>
      </defs>
      <rect width="400" height="500" fill="url(#p-bg)"/>
      {/* Wall art frame */}
      <rect x="40" y="50" width="80" height="100" fill="#fff" stroke="#3d2817" strokeWidth="3"/>
      <circle cx="80" cy="90" r="18" fill="#E55A4B" opacity=".5"/>
      <rect x="55" y="115" width="50" height="25" fill="#4A7A8C" opacity=".4"/>
      {/* Shelf */}
      <rect x="240" y="80" width="140" height="4" fill="#8A5A3F"/>
      <g transform="translate(260 50)">
        <rect x="0" y="4" width="18" height="26" rx="2" fill="#fff" stroke="#8A5A3F" strokeWidth="1"/>
        <text x="9" y="20" textAnchor="middle" fontSize="4" fill="#8A5A3F" fontFamily="Inter Tight">RX</text>
        <rect x="25" y="10" width="16" height="20" rx="2" fill="#6B8A5A"/>
        <rect x="48" y="6" width="22" height="24" rx="2" fill="#E55A4B"/>
        <rect x="78" y="12" width="14" height="18" rx="2" fill="#E0A330"/>
      </g>

      {/* Treatment chair/stool */}
      <rect x="50" y="330" width="140" height="50" rx="8" fill="#F0ECDA"/>
      <rect x="50" y="330" width="140" height="8" rx="4" fill="#E8E0CA"/>

      {/* Patient elderly seated, foot extended */}
      <g transform="translate(110 260)">
        {/* body */}
        <rect x="-28" y="30" width="56" height="80" rx="4" fill="#B8A88E"/>
        {/* cardigan */}
        <path d="M-28 30 Q-36 50 -34 90 L-28 90 L-28 30 Z" fill="#A89878"/>
        <path d="M28 30 Q36 50 34 90 L28 90 L28 30 Z" fill="#A89878"/>
        {/* pearls */}
        <g fill="#fff">
          {[-6,-3,0,3,6].map((x,i)=>(<circle key={i} cx={x} cy="30" r="1.2"/>))}
        </g>
        {/* arm on lap */}
        <path d="M-22 60 Q-16 85 -8 90" stroke={P.skin[5]} strokeWidth="10" fill="none" strokeLinecap="round"/>
        {/* head */}
        <Face tone={5} hair={5} hairStyle="short" glasses/>
      </g>
      {/* Patient leg extended toward podologa */}
      <g transform="translate(180 390)">
        <path d="M0 0 L100 -10 L100 18 L0 28 Z" fill="#B8A88E"/>
        {/* sock off / foot */}
        <ellipse cx="115" cy="4" rx="16" ry="8" fill={P.skin[5]}/>
        <circle cx="125" cy="0" r="2" fill={P.skin[6]}/>
      </g>

      {/* Podologa kneeling with phone */}
      <g transform="translate(320 340)">
        {/* body scrub */}
        <path d="M-30 10 L30 10 L34 90 L-34 90 Z" fill="#6B8A5A"/>
        <rect x="-30" y="10" width="60" height="12" fill="#5A7A4A"/>
        {/* arms */}
        <path d="M-28 25 Q-48 30 -60 55" stroke="#6B8A5A" strokeWidth="16" fill="none" strokeLinecap="round"/>
        <path d="M28 25 Q20 55 10 75" stroke="#6B8A5A" strokeWidth="16" fill="none" strokeLinecap="round"/>
        {/* left hand near patient foot */}
        <circle cx="-62" cy="58" r="6" fill={P.skin[0]}/>
        {/* right hand on phone */}
        <circle cx="8" cy="78" r="5" fill={P.skin[0]}/>
        {/* head */}
        <Face tone={0} hair={0} hairStyle="long"/>
        {/* mask over mouth */}
        <rect x="-12" y="14" width="24" height="10" rx="3" fill="#4A7A8C" opacity=".85"/>
        <line x1="-12" y1="14" x2="-20" y2="8" stroke="#4A7A8C" strokeWidth=".8"/>
        <line x1="12" y1="14" x2="20" y2="8" stroke="#4A7A8C" strokeWidth=".8"/>
      </g>

      {/* Phone */}
      <PhoneProp x={320} y={425} scale={1.3} rot={-5} glow/>

      {/* QR sticker at reception-style floating */}
      <g transform="translate(60 400)">
        <rect x="-26" y="-26" width="52" height="52" rx="4" fill="#fff" stroke="#3d2817" strokeWidth="1.5"/>
        {/* mini QR pattern */}
        <g fill="#0a0f0c">
          <rect x="-22" y="-22" width="10" height="10"/>
          <rect x="-20" y="-20" width="6" height="6" fill="#fff"/>
          <rect x="-18" y="-18" width="2" height="2" fill="#0a0f0c"/>
          <rect x="12" y="-22" width="10" height="10"/>
          <rect x="14" y="-20" width="6" height="6" fill="#fff"/>
          <rect x="16" y="-18" width="2" height="2" fill="#0a0f0c"/>
          <rect x="-22" y="12" width="10" height="10"/>
          <rect x="-20" y="14" width="6" height="6" fill="#fff"/>
          <rect x="-18" y="16" width="2" height="2" fill="#0a0f0c"/>
          {Array.from({length:40}).map((_,i)=>{
            const r = Math.floor(i/8), c = i%8;
            if((r<3&&c<3)||(r<3&&c>4)||(r>4&&c<3)) return null;
            return <rect key={i} x={-10+c*3} y={-10+r*3} width="2" height="2" opacity={(r*3+c*7)%2?1:0}/>;
          })}
        </g>
      </g>

      {/* Floating appointment chip */}
      <g transform="translate(200 110)">
        <rect x="-70" y="-16" width="140" height="32" rx="16" fill="#0a0f0c"/>
        <circle cx="-56" cy="0" r="6" fill="#00C851"/>
        <text x="14" y="3" textAnchor="middle" fontSize="9" fontWeight="600" fontFamily="Inter Tight" fill="#fff">Próxima visita · 18 abr</text>
      </g>
    </svg>
  );
}

// ═══════════════════════════════════════════════════════════════
// POST 4 · TIENDA ROPA — dependienta con clienta en probador
// ═══════════════════════════════════════════════════════════════
function Illust_Tienda() {
  return (
    <svg viewBox="0 0 400 500" style={{width:'100%',height:'100%',display:'block'}}>
      <defs>
        <linearGradient id="t-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#F4E4E6"/>
          <stop offset="1" stopColor="#D9A8A8"/>
        </linearGradient>
      </defs>
      <rect width="400" height="500" fill="url(#t-bg)"/>
      {/* Rack of clothes back */}
      <rect x="20" y="90" width="180" height="4" fill="#3d2817"/>
      <rect x="20" y="70" width="4" height="30" fill="#3d2817"/>
      <rect x="196" y="70" width="4" height="30" fill="#3d2817"/>
      {/* Hangers + garments */}
      {[30,70,110,150].map((x,i)=>{
        const colors = ['#E55A4B','#4A7A8C','#E0A330','#6B8A5A'];
        return (
          <g key={i}>
            <path d={`M${x+10} 95 L${x+18} 90 L${x+26} 95`} stroke="#8A5A3F" strokeWidth="1.2" fill="none"/>
            <path d={`M${x+4} 100 Q${x+18} 110 ${x+32} 100 L${x+30} 180 Q${x+18} 195 ${x+6} 180 Z`} fill={colors[i]}/>
          </g>
        );
      })}

      {/* Mirror frame with reflection hint */}
      <rect x="260" y="70" width="110" height="200" rx="4" fill="#E8D4D6" stroke="#8A5A3F" strokeWidth="3"/>
      <rect x="268" y="78" width="94" height="184" rx="2" fill="#F4E4E6" opacity=".6"/>
      <ellipse cx="315" cy="150" rx="28" ry="50" fill="#C99A9A" opacity=".35"/>

      {/* Rug */}
      <ellipse cx="200" cy="450" rx="180" ry="18" fill="#C99A9A" opacity=".4"/>

      {/* Dependienta — mujer, pelo rizado */}
      <g transform="translate(130 310)">
        {/* dress blouse */}
        <path d="M-30 10 L30 10 L36 120 L-36 120 Z" fill="#E0A330"/>
        <path d="M-30 10 L30 10 L24 40 L-24 40 Z" fill="#C98820"/>
        {/* skirt lines */}
        <path d="M-34 70 L34 70 L36 120 L-36 120 Z" fill="#3d2817" opacity=".15"/>
        {/* arms */}
        <path d="M-26 20 Q-44 40 -40 70" stroke="#E0A330" strokeWidth="14" fill="none" strokeLinecap="round"/>
        <path d="M28 20 Q38 40 50 58" stroke="#E0A330" strokeWidth="14" fill="none" strokeLinecap="round"/>
        <circle cx="-42" cy="70" r="5" fill={P.skin[2]}/>
        <circle cx="52" cy="60" r="5" fill={P.skin[2]}/>
        <Face tone={2} hair={0} hairStyle="curly" earring/>
        {/* necklace */}
        <path d="M-8 28 Q0 36 8 28" stroke="#D4AF37" strokeWidth="1.2" fill="none"/>
      </g>

      {/* Phone in dependienta's hand */}
      <PhoneProp x={180} y={370} scale={1.2} rot={10} glow/>

      {/* Cliente saliendo del probador */}
      <g transform="translate(300 330)">
        {/* dress */}
        <path d="M-26 10 L26 10 L40 140 L-40 140 Z" fill="#4A7A8C"/>
        <path d="M-26 10 L26 10 L20 25 L-20 25 Z" fill="#3a6a7c"/>
        {/* arms */}
        <path d="M-22 20 Q-34 40 -38 68" stroke="#4A7A8C" strokeWidth="12" fill="none" strokeLinecap="round"/>
        <path d="M22 20 Q30 35 28 60" stroke="#4A7A8C" strokeWidth="12" fill="none" strokeLinecap="round"/>
        <Face tone={4} hair={3} hairStyle="long"/>
      </g>

      {/* Shopping bag */}
      <g transform="translate(70 410)">
        <path d="M-18 -20 L-18 20 L18 20 L18 -20 Z" fill="#1a1410"/>
        <path d="M-12 -20 Q-12 -28 0 -28 Q12 -28 12 -20" stroke="#1a1410" strokeWidth="2" fill="none"/>
        <text x="0" y="4" textAnchor="middle" fontSize="6" fill="#E0A330" fontFamily="Instrument Serif" fontStyle="italic">marea</text>
      </g>

      {/* Floating reward chip */}
      <g transform="translate(210 130)">
        <rect x="-62" y="-16" width="124" height="32" rx="16" fill="#fff" stroke="#E0A330" strokeWidth="1.5"/>
        <text x="-48" y="3" textAnchor="middle" fontSize="12" fontFamily="Instrument Serif" fontStyle="italic" fill="#C98820">-15%</text>
        <text x="16" y="3" textAnchor="middle" fontSize="8.5" fontWeight="600" fontFamily="Inter Tight" fill="#0a0f0c">por ser VIP</text>
      </g>
    </svg>
  );
}

// ═══════════════════════════════════════════════════════════════
// POST 5 · PELUQUERÍA CANINA — mujer con perro
// ═══════════════════════════════════════════════════════════════
function Illust_PeluCanina() {
  return (
    <svg viewBox="0 0 400 500" style={{width:'100%',height:'100%',display:'block'}}>
      <defs>
        <linearGradient id="pc-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#E0F0E8"/>
          <stop offset="1" stopColor="#8AB5A0"/>
        </linearGradient>
      </defs>
      <rect width="400" height="500" fill="url(#pc-bg)"/>

      {/* Wall tiles pattern dogs */}
      <g opacity=".25">
        {[0,1,2,3].map(r=>[0,1,2,3,4].map(c=>(
          <circle key={r+'-'+c} cx={40+c*80} cy={40+r*50} r="6" fill="#3d2817"/>
        )))}
      </g>
      {/* Sign */}
      <rect x="130" y="30" width="140" height="50" rx="4" fill="#fff" stroke="#3d2817" strokeWidth="2"/>
      <text x="200" y="55" textAnchor="middle" fontSize="16" fontFamily="Instrument Serif" fontStyle="italic" fill="#3d2817">Lomo & Lana</text>
      <text x="200" y="70" textAnchor="middle" fontSize="7" fontFamily="JetBrains Mono" letterSpacing="2" fill="#8A5A3F">PELUQUERÍA CANINA</text>

      {/* Grooming table */}
      <rect x="40" y="360" width="320" height="20" rx="4" fill="#C0C0C0"/>
      <rect x="60" y="380" width="8" height="120" fill="#8A8A8A"/>
      <rect x="332" y="380" width="8" height="120" fill="#8A8A8A"/>

      {/* DOG — fluffy white terrier */}
      <g transform="translate(170 320)">
        {/* body */}
        <ellipse cx="0" cy="20" rx="55" ry="32" fill="#F5F0E8"/>
        {/* tail */}
        <path d="M52 10 Q70 0 66 -14" stroke="#F5F0E8" strokeWidth="14" fill="none" strokeLinecap="round"/>
        {/* legs */}
        <rect x="-36" y="38" width="10" height="20" rx="4" fill="#F5F0E8"/>
        <rect x="26" y="38" width="10" height="20" rx="4" fill="#F5F0E8"/>
        {/* head */}
        <ellipse cx="-40" cy="-8" rx="26" ry="24" fill="#F5F0E8"/>
        {/* ears */}
        <path d="M-58 -24 Q-64 -36 -54 -34 L-48 -20" fill="#E0DCCD"/>
        <path d="M-26 -26 Q-20 -38 -30 -36 L-34 -22" fill="#E0DCCD"/>
        {/* eyes */}
        <circle cx="-48" cy="-10" r="2" fill="#0a0f0c"/>
        <circle cx="-34" cy="-10" r="2" fill="#0a0f0c"/>
        {/* nose */}
        <ellipse cx="-56" cy="-2" rx="3" ry="2.5" fill="#1a1410"/>
        {/* mouth */}
        <path d="M-56 2 Q-52 6 -48 4" stroke="#1a1410" strokeWidth="1" fill="none"/>
        <path d="M-56 2 Q-60 6 -64 4" stroke="#1a1410" strokeWidth="1" fill="none"/>
        {/* bow */}
        <g transform="translate(-40 -28)">
          <path d="M0 0 L-6 -4 L-6 4 Z" fill="#E55A4B"/>
          <path d="M0 0 L6 -4 L6 4 Z" fill="#E55A4B"/>
          <circle cx="0" cy="0" r="2" fill="#C94030"/>
        </g>
        {/* fluffy texture */}
        {[-20,0,20].map((x,i)=>(<circle key={i} cx={x} cy={30} r="8" fill="#fff" opacity=".5"/>))}
      </g>

      {/* Groomer — woman with phone and scissors hanging */}
      <g transform="translate(310 310)">
        <path d="M-28 10 L28 10 L32 130 L-32 130 Z" fill="#E55A4B"/>
        <rect x="-28" y="10" width="56" height="10" fill="#C94030"/>
        {/* apron */}
        <path d="M-24 30 L24 30 L28 110 L-28 110 Z" fill="#fff" opacity=".7"/>
        <path d="M-24 30 L24 30 L22 40 L-22 40 Z" fill="#F5F5F5"/>
        {/* arms */}
        <path d="M-26 22 Q-40 38 -46 62" stroke="#E55A4B" strokeWidth="14" fill="none" strokeLinecap="round"/>
        <path d="M26 22 Q34 40 30 60" stroke="#E55A4B" strokeWidth="14" fill="none" strokeLinecap="round"/>
        <circle cx="-48" cy="62" r="5" fill={P.skin[0]}/>
        <Face tone={0} hair={1} hairStyle="bun"/>
        {/* scissors on belt */}
        <g transform="translate(-10 70)">
          <circle cx="0" cy="0" r="3" fill="none" stroke="#8A8A8A" strokeWidth="1"/>
          <circle cx="6" cy="0" r="3" fill="none" stroke="#8A8A8A" strokeWidth="1"/>
          <path d="M3 -2 L14 -6" stroke="#8A8A8A" strokeWidth="1"/>
          <path d="M3 2 L14 6" stroke="#8A8A8A" strokeWidth="1"/>
        </g>
      </g>

      {/* Phone */}
      <PhoneProp x={270} y={385} scale={1.2} rot={-8} glow/>

      {/* Floating booking chip */}
      <g transform="translate(90 130)">
        <rect x="-58" y="-16" width="116" height="32" rx="16" fill="#0a0f0c"/>
        <text x="-40" y="2" textAnchor="middle" fontSize="10" fill="#00C851">🐕</text>
        <text x="10" y="3" textAnchor="middle" fontSize="9" fontWeight="600" fontFamily="Inter Tight" fill="#fff">Lomo · corte nº8</text>
      </g>

      {/* Hair clippings */}
      <g opacity=".55">
        {Array.from({length:12}).map((_,i)=>{
          const x = 100 + (i*23)%260, y = 380 + (i*13)%18;
          return <path key={i} d={`M${x} ${y} q${2+i%3} ${1+i%2} 0 4`} stroke="#E0DCCD" strokeWidth="1" fill="none"/>;
        })}
      </g>
    </svg>
  );
}

// ═══════════════════════════════════════════════════════════════
// POST 6 · PANADERÍA — padre e hijo panaderos
// ═══════════════════════════════════════════════════════════════
function Illust_Panaderia() {
  return (
    <svg viewBox="0 0 400 500" style={{width:'100%',height:'100%',display:'block'}}>
      <defs>
        <linearGradient id="pn-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#F4E4C6"/>
          <stop offset="1" stopColor="#D4A056"/>
        </linearGradient>
      </defs>
      <rect width="400" height="500" fill="url(#pn-bg)"/>

      {/* Wooden shelf with breads */}
      <rect x="0" y="120" width="400" height="8" fill="#8A5A3F"/>
      <rect x="0" y="128" width="400" height="3" fill="#6B4328"/>
      {/* breads on shelf */}
      <g transform="translate(0 90)">
        <ellipse cx="40" cy="30" rx="22" ry="15" fill="#C99456"/>
        <path d="M20 22 L60 22 M24 30 L56 30" stroke="#8A5A3F" strokeWidth="1" opacity=".6"/>
        <ellipse cx="100" cy="28" rx="26" ry="12" fill="#D4A056"/>
        <path d="M78 24 Q100 28 122 24" stroke="#8A5A3F" strokeWidth=".8" fill="none"/>
        {/* baguette */}
        <path d="M150 30 L240 20 Q244 30 240 40 L150 40 Q146 36 150 30 Z" fill="#E0A330"/>
        {[160,175,190,205,220].map((x,i)=>(<line key={i} x1={x} y1="22" x2={x+5} y2="38" stroke="#8A5A3F" strokeWidth=".8"/>))}
        {/* round loaf */}
        <circle cx="280" cy="30" r="18" fill="#C99456"/>
        <path d="M270 22 L290 22 M268 28 L292 28 M270 34 L290 34" stroke="#8A5A3F" strokeWidth=".7" opacity=".7"/>
        {/* croissants */}
        <path d="M330 22 Q345 18 360 22 Q355 28 350 28 Q345 32 340 30 Q335 32 330 28 Z" fill="#E0A330"/>
        <path d="M340 38 Q355 34 370 38 Q365 44 360 44 Q355 48 350 46 Q345 48 340 44 Z" fill="#E0A330"/>
      </g>
      {/* chalkboard price */}
      <rect x="30" y="180" width="60" height="40" rx="2" fill="#1a1410"/>
      <text x="60" y="198" textAnchor="middle" fontSize="8" fill="#F4E4C6" fontFamily="Instrument Serif" fontStyle="italic">hogaza</text>
      <text x="60" y="212" textAnchor="middle" fontSize="10" fill="#E0A330" fontFamily="JetBrains Mono" fontWeight="600">3,40€</text>

      {/* Counter */}
      <rect x="0" y="350" width="400" height="150" fill="#8A5A3F"/>
      <rect x="0" y="344" width="400" height="10" fill="#A97350"/>

      {/* Baker father */}
      <g transform="translate(140 300)">
        {/* apron */}
        <path d="M-36 10 L36 10 L40 140 L-40 140 Z" fill="#fff"/>
        <rect x="-36" y="10" width="72" height="8" fill="#E55A4B"/>
        {/* flour dust */}
        <g fill="#F0ECDA" opacity=".7">
          <circle cx="-15" cy="50" r="3"/>
          <circle cx="20" cy="70" r="4"/>
          <circle cx="-5" cy="90" r="2"/>
          <circle cx="25" cy="30" r="2"/>
        </g>
        {/* arms */}
        <path d="M-32 20 Q-46 45 -50 80" stroke="#fff" strokeWidth="18" fill="none" strokeLinecap="round"/>
        <path d="M32 20 Q42 40 46 70" stroke="#fff" strokeWidth="18" fill="none" strokeLinecap="round"/>
        <circle cx="48" cy="72" r="5.5" fill={P.skin[1]}/>
        <Face tone={1} hair={1} hairStyle="short" beard/>
        {/* baker cap */}
        <path d="M-20 -18 Q-24 -32 0 -34 Q24 -32 20 -18 Q15 -22 0 -22 Q-15 -22 -20 -18 Z" fill="#fff" opacity=".95"/>
      </g>

      {/* Baker son, smaller, next to father */}
      <g transform="translate(240 340)">
        <path d="M-24 10 L24 10 L28 100 L-28 100 Z" fill="#fff"/>
        <rect x="-24" y="10" width="48" height="6" fill="#E55A4B"/>
        <path d="M-22 18 Q-30 40 -32 60" stroke="#fff" strokeWidth="13" fill="none" strokeLinecap="round"/>
        <path d="M22 18 Q30 30 32 50" stroke="#fff" strokeWidth="13" fill="none" strokeLinecap="round"/>
        <g transform="scale(.85)">
          <Face tone={1} hair={1} hairStyle="short"/>
        </g>
      </g>

      {/* Phone on counter */}
      <PhoneProp x={310} y={400} scale={1.3} rot={-15} glow/>

      {/* Floating chip */}
      <g transform="translate(210 240)">
        <rect x="-70" y="-16" width="140" height="32" rx="16" fill="#fff" stroke="#E55A4B" strokeWidth="1.5"/>
        <text x="-50" y="2" textAnchor="middle" fontSize="12">🥖</text>
        <text x="20" y="3" textAnchor="middle" fontSize="8.5" fontWeight="600" fontFamily="Inter Tight" fill="#0a0f0c">5ª barra gratis</text>
      </g>

      {/* Bread in hand of son */}
      <g transform="translate(275 400)">
        <ellipse cx="0" cy="0" rx="18" ry="10" fill="#D4A056"/>
        <path d="M-12 -4 L12 -4" stroke="#8A5A3F" strokeWidth="1" opacity=".7"/>
      </g>
    </svg>
  );
}

// ═══════════════════════════════════════════════════════════════
// POST 7 · FISIOTERAPIA — fisio hablando con paciente mayor
// ═══════════════════════════════════════════════════════════════
function Illust_Fisio() {
  return (
    <svg viewBox="0 0 400 500" style={{width:'100%',height:'100%',display:'block'}}>
      <defs>
        <linearGradient id="f-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#EDE8DB"/>
          <stop offset="1" stopColor="#C7B89A"/>
        </linearGradient>
      </defs>
      <rect width="400" height="500" fill="url(#f-bg)"/>

      {/* Wall line */}
      <line x1="0" y1="240" x2="400" y2="240" stroke="#BFA87D" strokeWidth="1" opacity=".4"/>

      {/* Anatomy poster */}
      <rect x="260" y="60" width="100" height="130" rx="4" fill="#fff" stroke="#3d2817" strokeWidth="2"/>
      <g transform="translate(310 125)">
        {/* Silhouette */}
        <ellipse cx="0" cy="-35" rx="10" ry="12" fill="#E55A4B" opacity=".6"/>
        <rect x="-14" y="-23" width="28" height="36" rx="4" fill="#E55A4B" opacity=".6"/>
        <rect x="-10" y="13" width="8" height="30" fill="#E55A4B" opacity=".6"/>
        <rect x="2" y="13" width="8" height="30" fill="#E55A4B" opacity=".6"/>
      </g>
      <text x="310" y="205" textAnchor="middle" fontSize="7" fill="#8A5A3F" fontFamily="JetBrains Mono">ANATOMÍA</text>

      {/* Plant */}
      <g transform="translate(60 260)">
        <path d="M-8 0 Q-16 -24 -8 -40 Q0 -46 6 -30" fill="#6B8A5A"/>
        <path d="M0 0 Q4 -28 14 -40 Q20 -28 10 -10" fill="#7A9A68"/>
        <rect x="-10" y="0" width="20" height="18" fill="#8A5A3F"/>
      </g>

      {/* Treatment bench (foreground) */}
      <rect x="30" y="340" width="320" height="40" rx="6" fill="#4A7A8C"/>
      <rect x="30" y="340" width="320" height="6" fill="#5A8A9C"/>
      <rect x="50" y="380" width="8" height="90" fill="#1a1410"/>
      <rect x="322" y="380" width="8" height="90" fill="#1a1410"/>

      {/* Patient (elderly man) sitting on bench */}
      <g transform="translate(120 260)">
        {/* shirt */}
        <rect x="-26" y="30" width="52" height="70" rx="4" fill="#C49860"/>
        {/* pants */}
        <rect x="-26" y="100" width="52" height="30" fill="#3d2817"/>
        {/* arm */}
        <path d="M-22 40 Q-10 70 0 88" stroke="#C49860" strokeWidth="11" fill="none" strokeLinecap="round"/>
        <path d="M22 40 Q34 55 46 60" stroke="#C49860" strokeWidth="11" fill="none" strokeLinecap="round"/>
        <circle cx="48" cy="62" r="4.5" fill={P.skin[5]}/>
        {/* head */}
        <Face tone={5} hair={5} hairStyle="bald" beard glasses/>
      </g>

      {/* Fisio — mujer de pie, mostrando móvil */}
      <g transform="translate(260 270)">
        <path d="M-28 14 L28 14 L32 110 L-32 110 Z" fill="#4A7A8C"/>
        <rect x="-28" y="14" width="56" height="8" fill="#3a6a7c"/>
        {/* arms */}
        <path d="M-26 24 Q-42 50 -48 80" stroke="#4A7A8C" strokeWidth="13" fill="none" strokeLinecap="round"/>
        <path d="M26 24 Q18 55 6 80" stroke="#4A7A8C" strokeWidth="13" fill="none" strokeLinecap="round"/>
        {/* hand holding phone */}
        <circle cx="4" cy="82" r="5" fill={P.skin[3]}/>
        <circle cx="-50" cy="80" r="5" fill={P.skin[3]}/>
        <Face tone={3} hair={0} hairStyle="bun" hijab/>
      </g>

      {/* Phone shown between them */}
      <PhoneProp x={220} y={365} scale={1.45} rot={-4} glow/>

      {/* Calendar floating chip */}
      <g transform="translate(90 130)">
        <rect x="-70" y="-18" width="140" height="36" rx="18" fill="#0a0f0c"/>
        <rect x="-58" y="-10" width="20" height="20" rx="3" fill="#fff"/>
        <rect x="-58" y="-10" width="20" height="5" fill="#E55A4B"/>
        <text x="-48" y="5" textAnchor="middle" fontSize="8" fontWeight="700" fontFamily="Inter Tight" fill="#0a0f0c">22</text>
        <text x="22" y="-2" textAnchor="middle" fontSize="8" fontWeight="600" fontFamily="Inter Tight" fill="#fff">VIERNES 10:30</text>
        <text x="22" y="10" textAnchor="middle" fontSize="6.5" fontFamily="JetBrains Mono" fill="#00C851" letterSpacing="1">REC. AUTOMÁTICO</text>
      </g>
    </svg>
  );
}

// ═══════════════════════════════════════════════════════════════
// POST 8 · GIMNASIO — entrenadora personal tras clase
// ═══════════════════════════════════════════════════════════════
function Illust_Gym() {
  return (
    <svg viewBox="0 0 400 500" style={{width:'100%',height:'100%',display:'block'}}>
      <defs>
        <linearGradient id="g-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1a1f1c"/>
          <stop offset="1" stopColor="#0a0f0c"/>
        </linearGradient>
        <radialGradient id="g-spot" cx=".3" cy=".3" r=".8">
          <stop offset="0" stopColor="#00C851" stopOpacity=".3"/>
          <stop offset="1" stopColor="#00C851" stopOpacity="0"/>
        </radialGradient>
      </defs>
      <rect width="400" height="500" fill="url(#g-bg)"/>
      <rect width="400" height="500" fill="url(#g-spot)"/>

      {/* Neon sign */}
      <g transform="translate(200 60)">
        <rect x="-80" y="-22" width="160" height="44" rx="8" fill="none" stroke="#00C851" strokeWidth="1.5" opacity=".6"/>
        <text x="0" y="8" textAnchor="middle" fontSize="28" fontFamily="Instrument Serif" fontStyle="italic" fill="#00C851" style={{filter:'drop-shadow(0 0 8px #00C851)'}}>FORJA</text>
      </g>

      {/* Weight rack silhouette */}
      <g opacity=".6">
        <rect x="20" y="200" width="110" height="8" fill="#4A4A4A"/>
        <rect x="20" y="240" width="110" height="8" fill="#4A4A4A"/>
        <rect x="20" y="280" width="110" height="8" fill="#4A4A4A"/>
        <circle cx="40" cy="204" r="12" fill="#2A2A2A"/>
        <circle cx="40" cy="244" r="10" fill="#2A2A2A"/>
        <circle cx="40" cy="284" r="8" fill="#2A2A2A"/>
        <circle cx="110" cy="204" r="12" fill="#2A2A2A"/>
        <circle cx="110" cy="244" r="10" fill="#2A2A2A"/>
        <circle cx="110" cy="284" r="8" fill="#2A2A2A"/>
      </g>

      {/* Mirror showing class attendees blurred */}
      <rect x="200" y="130" width="180" height="160" rx="4" fill="#1a2420" stroke="#2A3A30" strokeWidth="2"/>
      <g opacity=".35">
        {[0,1,2,3,4].map(i=>(
          <g key={i} transform={`translate(${215+i*32} 220)`}>
            <ellipse cx="0" cy="-22" rx="6" ry="7" fill="#E8B49A"/>
            <rect x="-8" y="-14" width="16" height="24" rx="2" fill={['#E55A4B','#4A7A8C','#E0A330','#7A5AE0','#00C851'][i]} opacity=".6"/>
            <rect x="-8" y="10" width="6" height="16" fill="#1a1410"/>
            <rect x="2" y="10" width="6" height="16" fill="#1a1410"/>
          </g>
        ))}
      </g>

      {/* Floor line */}
      <line x1="0" y1="400" x2="400" y2="400" stroke="#2A3A30" strokeWidth="1"/>

      {/* Coach — mujer post-entreno, con botella y móvil */}
      <g transform="translate(130 300)">
        {/* tank top */}
        <path d="M-24 10 L24 10 L28 70 L-28 70 Z" fill="#00C851"/>
        <path d="M-16 10 Q-14 0 -12 -8" stroke="#00C851" strokeWidth="6" fill="none"/>
        <path d="M16 10 Q14 0 12 -8" stroke="#00C851" strokeWidth="6" fill="none"/>
        {/* sweat shimmer */}
        <g fill="#fff" opacity=".4">
          <ellipse cx="-8" cy="30" rx="1" ry="3"/>
          <ellipse cx="10" cy="45" rx="1" ry="2.5"/>
          <ellipse cx="0" cy="55" rx="1" ry="3"/>
        </g>
        {/* leggings */}
        <rect x="-24" y="70" width="48" height="80" fill="#1a1410"/>
        <line x1="-10" y1="70" x2="-10" y2="150" stroke="#00C851" strokeWidth="1" opacity=".5"/>
        {/* arms */}
        <path d="M-24 20 Q-40 40 -42 70" stroke="#E8B49A" strokeWidth="10" fill="none" strokeLinecap="round"/>
        <path d="M24 20 Q34 30 32 55" stroke="#E8B49A" strokeWidth="10" fill="none" strokeLinecap="round"/>
        {/* head */}
        <Face tone={0} hair={0} hairStyle="bun"/>
        {/* headphones */}
        <path d="M-18 -4 Q0 -22 18 -4" stroke="#1a1410" strokeWidth="3" fill="none"/>
        <circle cx="-18" cy="0" r="4" fill="#1a1410"/>
        <circle cx="18" cy="0" r="4" fill="#1a1410"/>
      </g>

      {/* Water bottle */}
      <g transform="translate(80 390)">
        <rect x="-8" y="-30" width="16" height="36" rx="2" fill="#fff" opacity=".8"/>
        <rect x="-6" y="-36" width="12" height="8" rx="1" fill="#00C851"/>
        <rect x="-6" y="-20" width="12" height="16" fill="#4A7A8C" opacity=".5"/>
      </g>

      {/* Phone */}
      <PhoneProp x={240} y={375} scale={1.4} rot={15} glow/>

      {/* Stats chip floating */}
      <g transform="translate(300 400)">
        <rect x="-58" y="-20" width="116" height="40" rx="8" fill="#0f1a14" stroke="#00C851" strokeWidth="1"/>
        <text x="-40" y="-4" textAnchor="middle" fontSize="7" fill="#00C851" fontFamily="JetBrains Mono" letterSpacing="1">RACHA</text>
        <text x="-40" y="12" textAnchor="middle" fontSize="14" fontWeight="700" fill="#fff" fontFamily="Inter Tight">12</text>
        <line x1="-10" y1="-16" x2="-10" y2="16" stroke="#2A3A30"/>
        <text x="22" y="-4" textAnchor="middle" fontSize="7" fill="#00C851" fontFamily="JetBrains Mono" letterSpacing="1">KCAL</text>
        <text x="22" y="12" textAnchor="middle" fontSize="14" fontWeight="700" fill="#fff" fontFamily="Inter Tight">420</text>
      </g>

      {/* Floating check chip */}
      <g transform="translate(100 140)">
        <rect x="-56" y="-14" width="112" height="28" rx="14" fill="#00C851"/>
        <circle cx="-44" cy="0" r="5" fill="#04200f"/>
        <path d="M-46 0 L-44 2 L-41 -2" stroke="#00C851" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <text x="12" y="3" textAnchor="middle" fontSize="8.5" fontWeight="700" fontFamily="Inter Tight" fill="#04200f">CLASE Nº 12 ✓</text>
      </g>
    </svg>
  );
}

Object.assign(window, {
  Illust_Cafe, Illust_Dental, Illust_Podologo, Illust_Tienda,
  Illust_PeluCanina, Illust_Panaderia, Illust_Fisio, Illust_Gym,
});
