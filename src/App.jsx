import { useState, useEffect } from "react";

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&display=swap');
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
@keyframes fadeUp{from{opacity:0;transform:translateY(26px)}to{opacity:1;transform:translateY(0)}}
@keyframes floatAnim{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}
.a1{animation:fadeUp .7s ease both}
.a2{animation:fadeUp .7s .18s ease both}
.a3{animation:fadeUp .7s .34s ease both}
.a4{animation:fadeUp .7s .5s ease both}
.floater{animation:floatAnim 5s ease-in-out infinite}
.fcard{transition:transform .3s ease,box-shadow .3s ease;cursor:default}
.fcard:hover{transform:translateY(-6px);box-shadow:0 24px 48px rgba(27,67,50,.1)!important}
`;

const C = {
  green:'#1B4332', gm:'#2D6A4F', gl:'#52B788',
  orange:'#E76F51', gold:'#F4A261', indigo:'#6366F1',
  bg:'#FAFAF5', surf:'#F0EDE8', text:'#0C1A12', muted:'#5C7268',
};

function Logo({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
      <rect x="5" y="26" width="46" height="28" rx="7" fill={C.green}/>
      <rect x="5" y="32" width="46" height="8" fill={C.gm}/>
      <rect x="37" y="33" width="12" height="8" rx="4" fill={C.gold}/>
      <circle cx="43" cy="37" r="3" fill="#E8B84B"/>
      <circle cx="21" cy="21" r="14" fill="#C07A3A"/>
      <ellipse cx="10" cy="8.5" rx="5.5" ry="7" fill="#C07A3A"/>
      <ellipse cx="10" cy="8.5" rx="3" ry="4.5" fill="#E8A87C"/>
      <ellipse cx="32" cy="8.5" rx="5.5" ry="7" fill="#C07A3A"/>
      <ellipse cx="32" cy="8.5" rx="3" ry="4.5" fill="#E8A87C"/>
      <circle cx="15.5" cy="20" r="3" fill="#1A0F00"/>
      <circle cx="26.5" cy="20" r="3" fill="#1A0F00"/>
      <circle cx="16.5" cy="19" r="1" fill="white"/>
      <circle cx="27.5" cy="19" r="1" fill="white"/>
      <ellipse cx="21" cy="25" rx="2.2" ry="1.5" fill="#7A3B0A"/>
      <path d="M18.5 27 Q21 28.8 23.5 27" stroke="#7A3B0A" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
      <circle cx="12" cy="23" r="3" fill="#E8A87C" opacity=".3"/>
      <circle cx="30" cy="23" r="3" fill="#E8A87C" opacity=".3"/>
    </svg>
  );
}

function Mockup() {
  const days = ['M','T','W','T','F','S','S'];
  const bars = [40,65,30,80,55,70,45];
  const txs = [
    {e:'🍜',n:'Mie Ayam',c:'Food',a:'-Rp 15.000',col:C.orange},
    {e:'🚌',n:'Transjakarta',c:'Transport',a:'-Rp 3.500',col:C.gold},
    {e:'💰',n:'Salary',c:'Income',a:'+Rp 5.000.000',col:C.gl},
  ];
  return (
    <div className="floater" style={{background:'white',borderRadius:24,padding:24,boxShadow:'0 32px 80px rgba(0,0,0,.13)',width:400,maxWidth:'100%'}}>
      <div style={{display:'flex',gap:6,marginBottom:18}}>
        {['#FF5F57','#FEBC2E','#28C840'].map(col=>(
          <div key={col} style={{width:11,height:11,borderRadius:'50%',background:col}}/>
        ))}
      </div>
      <div style={{background:`linear-gradient(135deg,${C.green},${C.gm})`,borderRadius:16,padding:'18px 22px',color:'white',marginBottom:14}}>
        <div style={{fontSize:11,opacity:.7}}>Total Balance</div>
        <div style={{fontSize:26,fontWeight:800,letterSpacing:'-1px',margin:'4px 0 14px'}}>Rp 12.450.000</div>
        <div style={{display:'flex',gap:24,fontSize:12}}>
          {[['Budget','Rp 5.000.000','white'],['Spent','Rp 2.340.000',C.gold],['Portfolio','+8.4%',C.gl]].map(([l,v,col])=>(
            <div key={l}><div style={{opacity:.7}}>{l}</div><div style={{fontWeight:600,color:col}}>{v}</div></div>
          ))}
        </div>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12,marginBottom:14}}>
        <div style={{background:'#F7FAF8',borderRadius:12,padding:14}}>
          <div style={{fontSize:10,color:C.muted,fontWeight:600,marginBottom:10}}>Weekly Expenses</div>
          <div style={{display:'flex',alignItems:'flex-end',gap:5,height:50}}>
            {bars.map((h,i)=>(
              <div key={i} style={{flex:1,height:`${h}%`,background:i===3?C.orange:C.gl,borderRadius:'3px 3px 0 0',opacity:i===3?1:.55}}/>
            ))}
          </div>
          <div style={{display:'flex',justifyContent:'space-between',marginTop:5,fontSize:8,color:'#9CA3AF'}}>
            {days.map((d,i)=><span key={i}>{d}</span>)}
          </div>
        </div>
        <div style={{background:'#F7FAF8',borderRadius:12,padding:14,display:'flex',flexDirection:'column',alignItems:'center'}}>
          <div style={{fontSize:10,color:C.muted,fontWeight:600,marginBottom:8,alignSelf:'flex-start'}}>By Category</div>
          <svg width="62" height="62" viewBox="0 0 62 62">
            <circle cx="31" cy="31" r="25" fill="none" stroke={C.gl} strokeWidth="11" strokeDasharray="62 95"/>
            <circle cx="31" cy="31" r="25" fill="none" stroke={C.orange} strokeWidth="11" strokeDasharray="37 120" strokeDashoffset="-62"/>
            <circle cx="31" cy="31" r="25" fill="none" stroke={C.gold} strokeWidth="11" strokeDasharray="22 135" strokeDashoffset="-99"/>
            <circle cx="31" cy="31" r="25" fill="none" stroke={C.indigo} strokeWidth="11" strokeDasharray="36 121" strokeDashoffset="-121"/>
            <text x="31" y="35" textAnchor="middle" fontSize="10" fontWeight="700" fill={C.green}>46%</text>
          </svg>
        </div>
      </div>
      <div style={{background:'#F7FAF8',borderRadius:12,padding:14,marginBottom:12}}>
        <div style={{fontSize:10,color:C.muted,fontWeight:600,marginBottom:10}}>Recent Transactions</div>
        {txs.map(t=>(
          <div key={t.n} style={{display:'flex',alignItems:'center',gap:10,padding:'6px 0',borderBottom:'1px solid rgba(0,0,0,.04)'}}>
            <span style={{fontSize:17}}>{t.e}</span>
            <div style={{flex:1}}>
              <div style={{fontSize:11,fontWeight:600,color:C.text}}>{t.n}</div>
              <div style={{fontSize:9,color:'#9CA3AF'}}>{t.c}</div>
            </div>
            <div style={{fontSize:11,fontWeight:700,color:t.col}}>{t.a}</div>
          </div>
        ))}
      </div>
      <div style={{background:`linear-gradient(135deg,${C.green},${C.gm})`,borderRadius:12,padding:'12px 14px',display:'flex',alignItems:'center',gap:10}}>
        <span style={{fontSize:18}}>🐿️</span>
        <div>
          <div style={{fontSize:9,color:'rgba(255,255,255,.6)',marginBottom:2}}>ToPay AI</div>
          <div style={{fontSize:11,color:'white',fontWeight:500}}>"You've used 47% of food budget — try cooking at home this week!"</div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [annual, setAnnual] = useState(false);

  useEffect(()=>{
    const fn = ()=>setScrolled(window.scrollY>50);
    window.addEventListener('scroll',fn);
    return ()=>window.removeEventListener('scroll',fn);
  },[]);

  const price = annual ? 'Rp 23.000' : 'Rp 29.000';
  const pricePer = annual ? '/bulan, tagih tahunan' : '/bulan';

  const features = [
    {icon:'🧾',title:'Smart Expense Tracking',desc:"Log setiap pengeluaran dalam hitungan detik. Kategorikan otomatis dan lihat ke mana uangmu pergi.",bg:'#EBF5EE'},
    {icon:'🤖',title:'AI Auto-Logging',desc:"Cukup ketik 'mie ayam 15rb cash' — AI ToPay langsung memparsing dan mencatatnya untukmu.",bg:'#FFF4ED'},
    {icon:'📈',title:'Portfolio Manager',desc:"Track BBCA.JK, AAPL, dan saham global lainnya. Nilai real-time dan grafik pertumbuhan investasi.",bg:'#EEF0FF'},
    {icon:'⏰',title:'Debt & Paylater Tracker',desc:"Tambahkan hutang dengan tanggal jatuh tempo. Dapatkan visual reminder sebelum terlambat bayar.",bg:'#FFF8ED'},
  ];

  const steps = [
    {n:'01',t:'Daftar Gratis',d:'Buat akun dengan Google atau Email dalam kurang dari satu menit.',icon:'🚀'},
    {n:'02',t:'Catat Keuanganmu',d:'Tambah pengeluaran, hutang, dan investasi secara manual atau lewat AI chat.',icon:'✍️'},
    {n:'03',t:'Tumbuh Lebih Pintar',d:'Dapatkan insight personal, laporan visual, dan data investasi real-time.',icon:'🌱'},
  ];

  const freeF = ['50 entri pengeluaran/bulan','Grafik dasar (pie & bar)','Pencatatan manual','1 instrumen portofolio','Email support'];
  const premF = ['Entri pengeluaran tak terbatas','AI Chatbot + NLP auto-logging','Portofolio instrumen tak terbatas','Harga saham real-time','Pengingat hutang & paylater','Analitik & ekspor lanjutan','Priority support'];

  const navBtn = (label, outline) => ({
    padding:'9px 20px', borderRadius:10, fontWeight:600, fontSize:13,
    cursor:'pointer', fontFamily:'inherit', transition:'all .2s',
    ...(outline
      ? {border:`1.5px solid ${C.green}`,background:'transparent',color:C.green}
      : {border:'none',background:C.green,color:'white',boxShadow:'0 4px 14px rgba(27,67,50,.3)'})
  });

  return (
    <>
      <style>{CSS}</style>
      <div style={{fontFamily:"'Sora',sans-serif",background:C.bg,color:C.text,overflowX:'hidden'}}>

        {/* ── NAV ── */}
        <nav style={{position:'fixed',top:0,left:0,right:0,zIndex:999,height:68,padding:'0 6%',display:'flex',alignItems:'center',justifyContent:'space-between',background:scrolled?'rgba(250,250,245,.96)':'transparent',backdropFilter:scrolled?'blur(12px)':'none',borderBottom:scrolled?'1px solid rgba(27,67,50,.08)':'none',transition:'all .3s ease'}}>
          <a href="#" style={{display:'flex',alignItems:'center',gap:10,textDecoration:'none'}}>
            <Logo size={34}/>
            <span style={{fontSize:20,fontWeight:800,color:C.green,letterSpacing:'-.5px'}}>
              To<span style={{color:C.orange}}>Pay</span>
            </span>
          </a>
          <div style={{display:'flex',gap:30,fontSize:14,fontWeight:500}}>
            {[['Fitur','#features'],['Cara Kerja','#how'],['Harga','#pricing']].map(([l,h])=>(
              <a key={l} href={h} style={{color:C.text,opacity:.7,textDecoration:'none'}}
                onMouseOver={e=>e.currentTarget.style.opacity='1'}
                onMouseOut={e=>e.currentTarget.style.opacity='.7'}>{l}</a>
            ))}
          </div>
          <div style={{display:'flex',gap:10}}>
            <button style={navBtn('Masuk',true)}
              onMouseOver={e=>{e.currentTarget.style.background=C.green;e.currentTarget.style.color='white'}}
              onMouseOut={e=>{e.currentTarget.style.background='transparent';e.currentTarget.style.color=C.green}}>
              Masuk
            </button>
            <button style={navBtn('Daftar',false)}
              onMouseOver={e=>e.currentTarget.style.background=C.gm}
              onMouseOut={e=>e.currentTarget.style.background=C.green}>
              Daftar Gratis
            </button>
          </div>
        </nav>

        {/* ── HERO ── */}
        <section style={{minHeight:'100vh',padding:'110px 6% 80px',display:'flex',alignItems:'center',gap:48,background:`linear-gradient(155deg,${C.bg} 55%,#E8F5EE 100%)`,position:'relative',overflow:'hidden',flexWrap:'wrap'}}>
          <div style={{position:'absolute',top:'8%',right:'3%',width:500,height:500,borderRadius:'50%',background:'radial-gradient(circle,rgba(82,183,136,.1) 0%,transparent 70%)',pointerEvents:'none'}}/>
          <div style={{position:'absolute',bottom:'12%',left:'-3%',width:300,height:300,borderRadius:'50%',background:'radial-gradient(circle,rgba(231,111,81,.07) 0%,transparent 70%)',pointerEvents:'none'}}/>

          <div style={{flex:'1 1 460px',maxWidth:560}}>
            <div className="a1" style={{display:'inline-flex',alignItems:'center',gap:8,background:'rgba(82,183,136,.12)',border:'1px solid rgba(82,183,136,.25)',padding:'6px 14px',borderRadius:20,marginBottom:24}}>
              <span>🐿️</span>
              <span style={{color:C.gm,fontSize:12,fontWeight:600,letterSpacing:'.5px',textTransform:'uppercase'}}>Smart Financial Planner</span>
            </div>
            <h1 className="a2" style={{fontSize:54,fontWeight:800,lineHeight:1.07,letterSpacing:'-2px',marginBottom:22,color:'#0C1A12'}}>
              Keuanganmu,<br/>
              <span style={{background:`linear-gradient(135deg,${C.green},${C.gl})`,WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>
                akhirnya tertata
              </span><br/>
              rapi.
            </h1>
            <p className="a3" style={{fontSize:16,color:C.muted,lineHeight:1.8,marginBottom:36,maxWidth:460}}>
              ToPay mencatat setiap rupiah, mengelola hutangmu, dan mengembangkan investasimu — didukung AI yang memahami cara kamu berbelanja.
            </p>
            <div className="a3" style={{display:'flex',gap:14,flexWrap:'wrap',marginBottom:44}}>
              <button style={{padding:'15px 30px',borderRadius:12,background:C.green,color:'white',fontWeight:700,fontSize:15,border:'none',cursor:'pointer',boxShadow:'0 8px 24px rgba(27,67,50,.28)',fontFamily:'inherit',transition:'all .2s'}}
                onMouseOver={e=>{e.currentTarget.style.background=C.gm;e.currentTarget.style.transform='translateY(-2px)'}}
                onMouseOut={e=>{e.currentTarget.style.background=C.green;e.currentTarget.style.transform='translateY(0)'}}>
                Mulai Gratis →
              </button>
              <button style={{padding:'15px 30px',borderRadius:12,background:'white',color:C.green,fontWeight:600,fontSize:15,border:`1.5px solid rgba(27,67,50,.15)`,cursor:'pointer',fontFamily:'inherit',transition:'all .2s'}}
                onMouseOver={e=>{e.currentTarget.style.borderColor=C.green;e.currentTarget.style.transform='translateY(-2px)'}}
                onMouseOut={e=>{e.currentTarget.style.borderColor='rgba(27,67,50,.15)';e.currentTarget.style.transform='translateY(0)'}}>
                ▶ Lihat Demo
              </button>
            </div>
            <div className="a4" style={{display:'flex',gap:36,flexWrap:'wrap'}}>
              {[['10K+','Pengguna Aktif'],['Rp 2,4M','Pengeluaran Dicatat'],['4.9★','Rating App']].map(([v,l])=>(
                <div key={l}><div style={{fontSize:22,fontWeight:800,color:C.green}}>{v}</div><div style={{fontSize:12,color:C.muted,marginTop:2}}>{l}</div></div>
              ))}
            </div>
          </div>
          <div style={{flex:'1 1 380px',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Mockup/>
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section id="features" style={{padding:'90px 6%',background:'white'}}>
          <div style={{textAlign:'center',marginBottom:56}}>
            <div style={{display:'inline-block',background:C.surf,color:C.muted,fontSize:12,fontWeight:600,padding:'5px 14px',borderRadius:20,letterSpacing:'.5px',textTransform:'uppercase',marginBottom:16}}>Fitur Unggulan</div>
            <h2 style={{fontSize:38,fontWeight:800,letterSpacing:'-1.5px',color:'#0C1A12',marginBottom:14,lineHeight:1.2}}>Semua yang kamu butuhkan<br/>untuk kontrol penuh.</h2>
            <p style={{fontSize:16,color:C.muted,maxWidth:460,margin:'0 auto',lineHeight:1.75}}>Dirancang untuk generasi muda Indonesia yang ingin cara lebih cerdas mengelola keuangan.</p>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))',gap:20,maxWidth:1080,margin:'0 auto'}}>
            {features.map(f=>(
              <div key={f.title} className="fcard" style={{background:'white',borderRadius:20,padding:28,border:'1px solid rgba(0,0,0,.06)',boxShadow:'0 4px 16px rgba(0,0,0,.04)'}}>
                <div style={{width:52,height:52,borderRadius:14,background:f.bg,display:'flex',alignItems:'center',justifyContent:'center',fontSize:24,marginBottom:20}}>{f.icon}</div>
                <h3 style={{fontSize:17,fontWeight:700,color:'#0C1A12',marginBottom:10}}>{f.title}</h3>
                <p style={{fontSize:14,color:C.muted,lineHeight:1.75}}>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section id="how" style={{padding:'90px 6%',background:C.bg}}>
          <div style={{textAlign:'center',marginBottom:60}}>
            <div style={{display:'inline-block',background:'rgba(82,183,136,.12)',color:C.gm,fontSize:12,fontWeight:600,padding:'5px 14px',borderRadius:20,letterSpacing:'.5px',textTransform:'uppercase',marginBottom:16}}>Cara Kerja</div>
            <h2 style={{fontSize:38,fontWeight:800,letterSpacing:'-1.5px',color:'#0C1A12',lineHeight:1.2}}>Bisa langsung dipakai<br/>dalam hitungan menit.</h2>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))',gap:32,maxWidth:880,margin:'0 auto'}}>
            {steps.map((s,i)=>(
              <div key={s.n} style={{textAlign:'center',padding:'32px 24px'}}>
                <div style={{fontSize:48,fontWeight:800,color:'rgba(27,67,50,.07)',lineHeight:1,marginBottom:12}}>{s.n}</div>
                <div style={{width:56,height:56,borderRadius:'50%',background:`linear-gradient(135deg,${C.green},${C.gl})`,display:'flex',alignItems:'center',justifyContent:'center',fontSize:22,margin:'0 auto 20px',boxShadow:`0 8px 20px rgba(27,67,50,.25)`}}>{s.icon}</div>
                <h3 style={{fontSize:18,fontWeight:700,color:'#0C1A12',marginBottom:10}}>{s.t}</h3>
                <p style={{fontSize:14,color:C.muted,lineHeight:1.75}}>{s.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── PRICING ── */}
        <section id="pricing" style={{padding:'90px 6%',background:'white'}}>
          <div style={{textAlign:'center',marginBottom:48}}>
            <div style={{display:'inline-block',background:C.surf,color:C.muted,fontSize:12,fontWeight:600,padding:'5px 14px',borderRadius:20,letterSpacing:'.5px',textTransform:'uppercase',marginBottom:16}}>Harga</div>
            <h2 style={{fontSize:38,fontWeight:800,letterSpacing:'-1.5px',color:'#0C1A12',marginBottom:20}}>Harga yang jujur &amp; transparan.</h2>
            <div style={{display:'inline-flex',alignItems:'center',gap:4,background:C.surf,padding:'5px 6px',borderRadius:24}}>
              {[['Bulanan',false],['Tahunan',true]].map(([l,v])=>(
                <button key={String(v)} onClick={()=>setAnnual(v)} style={{padding:'7px 20px',borderRadius:20,border:'none',background:(annual===v)?'white':'transparent',color:C.text,fontWeight:600,fontSize:13,cursor:'pointer',fontFamily:'inherit',boxShadow:(annual===v)?'0 2px 8px rgba(0,0,0,.08)':'none',transition:'all .2s'}}>
                  {l}{v && <span style={{color:C.gl,fontSize:11,marginLeft:4}}>Hemat 20%</span>}
                </button>
              ))}
            </div>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',gap:24,maxWidth:760,margin:'0 auto'}}>
            <div style={{background:C.surf,borderRadius:24,padding:'36px 32px',border:'1px solid rgba(0,0,0,.06)'}}>
              <div style={{fontSize:13,fontWeight:600,color:C.muted,letterSpacing:'.5px',textTransform:'uppercase',marginBottom:8}}>Free</div>
              <div style={{fontSize:40,fontWeight:800,color:'#0C1A12',letterSpacing:'-1px',marginBottom:4}}>Rp 0</div>
              <div style={{fontSize:13,color:C.muted,marginBottom:28}}>Selamanya gratis</div>
              <button style={{width:'100%',padding:'13px',borderRadius:12,border:`1.5px solid ${C.green}`,background:'transparent',color:C.green,fontWeight:700,fontSize:14,cursor:'pointer',fontFamily:'inherit',marginBottom:28,transition:'all .2s'}}
                onMouseOver={e=>{e.currentTarget.style.background=C.green;e.currentTarget.style.color='white'}}
                onMouseOut={e=>{e.currentTarget.style.background='transparent';e.currentTarget.style.color=C.green}}>
                Mulai Gratis →
              </button>
              {freeF.map(f=>(
                <div key={f} style={{display:'flex',alignItems:'center',gap:10,marginBottom:12}}>
                  <div style={{width:20,height:20,borderRadius:'50%',background:'rgba(82,183,136,.15)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:11,color:C.gl,flexShrink:0}}>✓</div>
                  <span style={{fontSize:14,color:C.muted}}>{f}</span>
                </div>
              ))}
            </div>
            <div style={{background:`linear-gradient(145deg,${C.green},#1F4E3A)`,borderRadius:24,padding:'36px 32px',position:'relative',overflow:'hidden',boxShadow:`0 24px 60px rgba(27,67,50,.3)`}}>
              <div style={{position:'absolute',top:16,right:16,background:C.gold,color:'white',fontSize:11,fontWeight:700,padding:'4px 10px',borderRadius:20}}>⭐ Popular</div>
              <div style={{position:'absolute',top:-40,right:-40,width:160,height:160,borderRadius:'50%',background:'rgba(255,255,255,.04)',pointerEvents:'none'}}/>
              <div style={{fontSize:13,fontWeight:600,color:'rgba(255,255,255,.6)',letterSpacing:'.5px',textTransform:'uppercase',marginBottom:8}}>Premium</div>
              <div style={{fontSize:40,fontWeight:800,color:'white',letterSpacing:'-1px',marginBottom:4}}>{price}</div>
              <div style={{fontSize:13,color:'rgba(255,255,255,.6)',marginBottom:28}}>{pricePer}</div>
              <button style={{width:'100%',padding:'13px',borderRadius:12,border:'none',background:C.gold,color:'white',fontWeight:700,fontSize:14,cursor:'pointer',fontFamily:'inherit',marginBottom:28,boxShadow:`0 6px 20px rgba(244,162,97,.4)`,transition:'all .2s'}}
                onMouseOver={e=>e.currentTarget.style.background='#F39240'}
                onMouseOut={e=>e.currentTarget.style.background=C.gold}>
                Upgrade Sekarang →
              </button>
              {premF.map(f=>(
                <div key={f} style={{display:'flex',alignItems:'center',gap:10,marginBottom:12}}>
                  <div style={{width:20,height:20,borderRadius:'50%',background:'rgba(255,255,255,.15)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:11,color:'rgba(255,255,255,.9)',flexShrink:0}}>✓</div>
                  <span style={{fontSize:14,color:'rgba(255,255,255,.85)'}}>{f}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA BANNER ── */}
        <section style={{padding:'80px 6%',background:`linear-gradient(135deg,${C.green},${C.gm})`,textAlign:'center',color:'white'}}>
          <div style={{fontSize:34,fontWeight:800,letterSpacing:'-1.5px',marginBottom:16,lineHeight:1.2}}>Siap kendalikan keuanganmu?<br/>Mulai gratis hari ini. 🐿️</div>
          <p style={{fontSize:16,opacity:.8,marginBottom:32,maxWidth:400,margin:'0 auto 32px',lineHeight:1.7}}>Bergabung bersama ribuan pengguna yang sudah lebih cerdas mengelola uang mereka dengan ToPay.</p>
          <button style={{padding:'16px 36px',borderRadius:12,background:'white',color:C.green,fontWeight:800,fontSize:16,border:'none',cursor:'pointer',fontFamily:'inherit',boxShadow:'0 8px 24px rgba(0,0,0,.2)',transition:'all .2s'}}
            onMouseOver={e=>e.currentTarget.style.transform='translateY(-3px)'}
            onMouseOut={e=>e.currentTarget.style.transform='translateY(0)'}>
            Daftar Sekarang — Gratis →
          </button>
        </section>

        {/* ── FOOTER ── */}
        <footer style={{background:'#0C1A12',padding:'56px 6% 28px',color:'rgba(255,255,255,.65)'}}>
          <div style={{display:'flex',justifyContent:'space-between',flexWrap:'wrap',gap:40,marginBottom:48}}>
            <div style={{maxWidth:280}}>
              <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:14}}>
                <Logo size={32}/><span style={{fontSize:20,fontWeight:800,color:'white',letterSpacing:'-.5px'}}>To<span style={{color:C.orange}}>Pay</span></span>
              </div>
              <p style={{fontSize:14,lineHeight:1.8,marginBottom:20}}>Perencana keuangan cerdas untuk generasi muda Indonesia. Catat, kelola, dan kembangkan uangmu.</p>
              <div style={{display:'flex',gap:10}}>
                {[['📸 Instagram','#'],['🎵 TikTok','#']].map(([l,h])=>(
                  <a key={l} href={h} style={{display:'flex',alignItems:'center',gap:6,background:'rgba(255,255,255,.08)',padding:'8px 14px',borderRadius:8,fontSize:13,color:'rgba(255,255,255,.7)',textDecoration:'none',transition:'background .2s'}}
                    onMouseOver={e=>e.currentTarget.style.background='rgba(255,255,255,.15)'}
                    onMouseOut={e=>e.currentTarget.style.background='rgba(255,255,255,.08)'}>{l}</a>
                ))}
              </div>
            </div>
            <div style={{display:'flex',gap:52,flexWrap:'wrap'}}>
              {[
                ['Produk',['Fitur','Cara Kerja','Harga','Changelog']],
                ['Perusahaan',['Tentang Kami','Blog','Karir','Kontak']],
                ['Legal',['Kebijakan Privasi','Syarat Layanan','Cookie Policy']],
              ].map(([title,links])=>(
                <div key={title}>
                  <div style={{color:'white',fontWeight:600,fontSize:14,marginBottom:16}}>{title}</div>
                  {links.map(l=>(
                    <a key={l} href="#" style={{display:'block',fontSize:14,color:'rgba(255,255,255,.55)',textDecoration:'none',marginBottom:10,transition:'color .2s'}}
                      onMouseOver={e=>e.currentTarget.style.color='white'}
                      onMouseOut={e=>e.currentTarget.style.color='rgba(255,255,255,.55)'}>{l}</a>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div style={{borderTop:'1px solid rgba(255,255,255,.08)',paddingTop:24,display:'flex',justifyContent:'space-between',alignItems:'center',fontSize:13,flexWrap:'wrap',gap:12}}>
            <span>© 2025 ToPay. Dibuat dengan 🐿️ untuk penabung cerdas.</span>
            <span>Made in Indonesia 🇮🇩</span>
          </div>
        </footer>

      </div>
    </>
  );
}
