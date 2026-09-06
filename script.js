const header=document.querySelector('.site-header');
const reveals=document.querySelectorAll('.reveal:not(.hero .reveal)');
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.14});
reveals.forEach(el=>observer.observe(el));
addEventListener('scroll',()=>header.classList.toggle('scrolled',scrollY>30),{passive:true});
const glow=document.querySelector('.cursor-glow');
addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px';glow.style.opacity='1'},{passive:true});
document.querySelector('.menu').addEventListener('click',e=>{const button=e.currentTarget;const open=button.getAttribute('aria-expanded')==='true';button.setAttribute('aria-expanded',String(!open));document.querySelector('nav').classList.toggle('mobile-open',!open)});
document.querySelector('#demo-form').addEventListener('submit',e=>{e.preventDefault();const toast=document.querySelector('.toast');toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),4000)});
if(matchMedia('(pointer:fine)').matches){document.querySelector('.hero').addEventListener('pointermove',e=>{const x=(e.clientX/innerWidth-.5)*8;const y=(e.clientY/innerHeight-.5)*8;const frame=document.querySelector('.hero-photo-frame');if(frame)frame.style.transform=`translate(${x}px,${y}px)`},{passive:true})}
