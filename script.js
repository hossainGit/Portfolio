/* ═══ CURSOR ═══════════════════════════════════════ */
(function(){
  const dot=document.getElementById('cur'),ring=document.getElementById('cur-ring');
  if(!dot||!ring) return;
  let mx=-300,my=-300,rx=-300,ry=-300,alive=false;

  document.addEventListener('mousemove',e=>{
    mx=e.clientX; my=e.clientY;
    if(!alive){ rx=mx; ry=my; alive=true; dot.style.opacity='1'; ring.style.opacity='0.55'; }
    dot.style.transform=`translate(${mx-4.5}px,${my-4.5}px)`;
  });
  document.addEventListener('mouseleave',()=>{ alive=false; dot.style.opacity='0'; ring.style.opacity='0'; });

  (function loop(){
    if(alive){
      rx+=(mx-rx)*.13; ry+=(my-ry)*.13;
      const h=ring.offsetWidth/2;
      ring.style.transform=`translate(${rx-h}px,${ry-h}px)`;
    }
    requestAnimationFrame(loop);
  })();

  document.addEventListener('mousedown',()=>{
    dot.style.transform=`translate(${mx-4.5}px,${my-4.5}px) scale(1.9)`;
    ring.style.borderColor='rgba(200,169,110,.9)';
    ring.style.opacity='0.85';
  });
  document.addEventListener('mouseup',()=>{
    dot.style.transform=`translate(${mx-4.5}px,${my-4.5}px) scale(1)`;
    ring.style.borderColor='';
    ring.style.opacity=alive?'0.55':'0';
  });

  const HQ='a,button,.pc,.ftab,input,textarea,select';
  document.addEventListener('mouseover',e=>{ if(e.target.closest(HQ)){ ring.style.opacity='0.88'; ring.style.borderColor='rgba(200,169,110,.8)'; dot.style.opacity='0.4'; }});
  document.addEventListener('mouseout', e=>{ if(e.target.closest(HQ)){ ring.style.opacity=alive?'0.55':'0'; ring.style.borderColor=''; dot.style.opacity=alive?'1':'0'; }});
})();

/* ═══ SCROLL PROGRESS + NAV SHRINK ═════════════════ */
window.addEventListener('scroll',()=>{
  document.getElementById('sbar').style.width=
    (window.scrollY/(document.body.scrollHeight-window.innerHeight)*100)+'%';
  document.getElementById('nav').classList.toggle('sc',window.scrollY>60);
},{ passive:true });

/* ═══ REVEAL ON SCROLL ══════════════════════════════ */
const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('on'); });
},{threshold:0.1});
document.querySelectorAll('.rv,.rl').forEach(el=>obs.observe(el));

/* ═══ PROJECT FILTER ════════════════════════════════ */
function doFilter(cat,btn){
  document.querySelectorAll('.ftab').forEach(t=>t.classList.remove('on'));
  btn.classList.add('on');
  document.querySelectorAll('.pc').forEach(c=>{
    c.style.display=(cat==='all'||c.dataset.cat===cat)?'':'none';
  });
}

/* ═══ CONTACT FORM ══════════════════════════════════ */
function sendMsg(e){
  e.preventDefault();
  showToast("Message sent — I'll be in touch soon!");
  e.target.reset();
}

/* ═══ MOBILE NAV ═════════════════════════════════════ */
function toggleMobNav(){
  const nav=document.getElementById('mob-nav');
  const burger=document.getElementById('burger');
  const isOpen=nav.classList.toggle('open');
  burger.classList.toggle('open',isOpen);
  nav.setAttribute('aria-hidden',!isOpen);
  document.body.style.overflow=isOpen?'hidden':'';
}
function closeMobNav(){
  document.getElementById('mob-nav').classList.remove('open');
  document.getElementById('burger').classList.remove('open');
  document.body.style.overflow='';
}
// Close drawer on escape
document.addEventListener('keydown',e=>{
  if(e.key==='Escape') closeMobNav();
});

/* ═══ SKILLS ACCORDION (mobile) ═════════════════════ */
document.querySelectorAll('.sk-cat-name').forEach(label=>{
  label.addEventListener('click',()=>{
    // Only act as accordion on mobile
    if(window.innerWidth>900) return;
    const cat=label.closest('.sk-cat');
    cat.classList.toggle('expanded');
  });
});

/* ═══ SECRET ADMIN LOGIN ════════════════════════════ */
let sc=0,st;
function strigClick(){ sc++; clearTimeout(st); st=setTimeout(()=>sc=0,2000); if(sc>=5){sc=0;openLogin();} }
let kb='';
document.addEventListener('keydown',e=>{
  if(document.getElementById('lmodal').classList.contains('open')) return;
  kb+=e.key.toUpperCase(); if(kb.length>6) kb=kb.slice(-6);
  if(kb==='OPENME') openLogin();
});
function openLogin(){ document.getElementById('lmodal').classList.add('open'); document.getElementById('lu').focus(); }
function closeLogin(){
  document.getElementById('lmodal').classList.remove('open');
  document.getElementById('lerr').style.display='none';
  document.getElementById('lu').value=''; document.getElementById('lp').value='';
}
function doLogin(){
  const u=document.getElementById('lu').value.trim();
  const p=document.getElementById('lp').value;
  if(u==='admin'&&p==='admin123'){ closeLogin(); showToast('Welcome back, '+u+'.'); }
  else { document.getElementById('lerr').style.display='block'; document.getElementById('lp').value=''; }
}

/* ═══ TOAST ═════════════════════════════════════════ */
let tt;
function showToast(msg){
  const t=document.getElementById('toast'); t.textContent=msg; t.classList.add('show');
  clearTimeout(tt); tt=setTimeout(()=>t.classList.remove('show'),3200);
}
