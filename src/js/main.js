import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.era').forEach(section => {
    const content = section.querySelector('.content');
    const bg = section.querySelector('.background-layer');
    const sectionId = section.getAttribute('id');
    const navItem = document.querySelector(`[data-target='${sectionId}']`);

    gsap.fromTo(content,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'top 30%',
          scrub: true,
        }
      }
    );

    gsap.to(bg, {
      y: -100,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      }
    });

    if (navItem) {
      ScrollTrigger.create({
        trigger: section,
        start: 'top center',
        end: 'bottom center',
        toggleClass: { targets: navItem, className: 'active' },
        markers: false
      });
    }
  });

  document.querySelectorAll('.timeline-sidebar li').forEach(item => {
    item.addEventListener('click', () => {
      const targetId = item.getAttribute('data-target');
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  const intro = document.querySelector('.intro');
  if (intro) {
    gsap.to(intro, {
      opacity: 0,
      pointerEvents: 'none',
      duration: 1.5,
      scrollTrigger: {
        trigger: intro,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      }
    });
  }

  document.querySelectorAll('.content').forEach(content => {
    content.addEventListener('mouseenter', () => {
      gsap.to(content, { scale: 1.05, duration: 0.3 });
    });
    content.addEventListener('mouseleave', () => {
      gsap.to(content, { scale: 1, duration: 0.3 });
    });
  });
});
