const header=document.querySelector('.site-header');
const toggle=document.querySelector('.menu-toggle');
const drawer=document.querySelector('.drawer');
window.addEventListener('scroll',()=>header.classList.toggle('scrolled',window.scrollY>20));
toggle.addEventListener('click',()=>{const open=toggle.classList.toggle('active');toggle.setAttribute('aria-expanded',open);drawer.classList.toggle('open',open);drawer.setAttribute('aria-hidden',!open);document.body.style.overflow=open?'hidden':'';});
drawer.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{toggle.classList.remove('active');drawer.classList.remove('open');toggle.setAttribute('aria-expanded','false');drawer.setAttribute('aria-hidden','true');document.body.style.overflow='';}));
document.querySelectorAll('.faq-q').forEach(btn=>{btn.addEventListener('click',()=>{const ans=btn.nextElementSibling;const active=btn.classList.contains('is-open');document.querySelectorAll('.faq-q').forEach(b=>b.classList.remove('is-open'));document.querySelectorAll('.faq-a').forEach(a=>a.classList.remove('open'));if(!active){btn.classList.add('is-open');ans.classList.add('open');}})});
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.14});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

const backToTop=document.querySelector('.back-to-top');
window.addEventListener('scroll',()=>{if(backToTop)backToTop.classList.toggle('show',window.scrollY>420)});
if(backToTop){
  const easeInOutCubic = t => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  backToTop.addEventListener('click',(e)=>{
    e.preventDefault();

    const startY = window.pageYOffset;
    const duration = 950;
    const startTime = performance.now();

    const scrollAnimation = currentTime => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInOutCubic(progress);

      window.scrollTo(0, startY * (1 - eased));

      if(progress < 1){
        requestAnimationFrame(scrollAnimation);
      }
    };

    requestAnimationFrame(scrollAnimation);
  });
}
