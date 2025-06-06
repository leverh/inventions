console.log('Main.js loaded successfully');

function waitForGSAP() {
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    console.log('GSAP loaded from CDN');
    gsap.registerPlugin(ScrollTrigger);
    initializeTimeline();
  } else {
    console.log('Waiting for GSAP...');
    setTimeout(waitForGSAP, 100);
  }
}

waitForGSAP();

function initializeTimeline() {
  console.log('Initializing timeline...');

  const loadingScreen = document.getElementById('loading');
  console.log('Loading screen found:', !!loadingScreen);

  window.addEventListener('load', () => {
    console.log('Window loaded, starting fade out sequence');
    setTimeout(() => {
      if (loadingScreen) {
        loadingScreen.classList.add('fade-out');
        console.log('Added fade-out class to loading screen');
        setTimeout(() => {
          initAnimations();
        }, 1000);
      } else {
        console.log('No loading screen found, starting animations immediately');
        initAnimations();
      }
    }, 1500);
  });

  if (document.readyState === 'complete') {
    console.log('Document already complete, starting timer');
    setTimeout(() => {
      if (loadingScreen) {
        loadingScreen.classList.add('fade-out');
        setTimeout(() => {
          initAnimations();
        }, 1000);
      } else {
        initAnimations();
      }
    }, 1500);
  }

  function initAnimations() {
    console.log('Starting animations...');
    
    const mainTitle = document.getElementById('mainTitle');
    const subtitle = document.getElementById('subtitle');
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    console.log('Main title found:', !!mainTitle);
    console.log('Subtitle found:', !!subtitle);
    console.log('Scroll indicator found:', !!scrollIndicator);

    if (mainTitle && subtitle) {
      const tl = gsap.timeline();
      tl.to(mainTitle, { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        ease: 'power2.out',
        onComplete: () => console.log('Title animation complete')
      })
      .to(subtitle, { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        ease: 'power2.out',
        onComplete: () => console.log('Subtitle animation complete')
      }, '-=0.5');

      if (scrollIndicator) {
        tl.to(scrollIndicator, { 
          opacity: 1, 
          duration: 0.5,
          onComplete: () => console.log('Scroll indicator animation complete')
        }, '-=0.3');
      }
    }

    const sidebarItems = document.querySelectorAll('.timeline-sidebar li');
    console.log('Sidebar items found:', sidebarItems.length);
    
    if (sidebarItems.length > 0) {
      gsap.to(sidebarItems, {
        opacity: 1,
        x: 0,
        duration: 0.6,
        stagger: 0.1,
        delay: 2,
        ease: 'power2.out',
        onComplete: () => console.log('Sidebar animations complete')
      });
    }

    const eras = document.querySelectorAll('.era');
    console.log('Era sections found:', eras.length);

    eras.forEach((section, index) => {
      const content = section.querySelector('.content');
      const bg = section.querySelector('.background-layer');
      const sectionId = section.getAttribute('id');
      const navItem = document.querySelector(`[data-target='${sectionId}']`);

      console.log(`Era ${index + 1} - ID: ${sectionId}, Content: ${!!content}, BG: ${!!bg}, NavItem: ${!!navItem}`);

      if (content) {
        gsap.fromTo(content,
          { y: 100, opacity: 0, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 70%',
              end: 'top 30%',
              toggleActions: 'play none none reverse',
              onEnter: () => console.log(`Era ${sectionId} content animated in`),
              onLeave: () => console.log(`Era ${sectionId} content animated out`)
            }
          }
        );
      }

      if (bg) {
        gsap.to(bg, {
          y: -150,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
          }
        });
      }

      if (navItem) {
        ScrollTrigger.create({
          trigger: section,
          start: 'top center',
          end: 'bottom center',
          toggleClass: { targets: navItem, className: 'active' },
          onEnter: () => console.log(`Nav item active: ${sectionId}`),
          onLeave: () => console.log(`Nav item inactive: ${sectionId}`)
        });
      }
    });

    const progressFill = document.getElementById('progressFill');
    if (progressFill) {
      ScrollTrigger.create({
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        onUpdate: self => {
          progressFill.style.width = (self.progress * 100) + '%';
        }
      });
      console.log('Progress bar initialized');
    }

    const intro = document.querySelector('.intro');
    if (intro) {
      gsap.to(intro, {
        opacity: 0.3,
        scale: 0.95,
        ease: 'none',
        scrollTrigger: {
          trigger: intro,
          start: 'top top',
          end: 'bottom top',
          scrub: 1
        }
      });
      console.log('Intro fade out initialized');
    }

    console.log('All animations initialized successfully');
  }

  const cursor = document.getElementById('cursor');
  if (cursor) {
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    function animateCursor() {
      cursorX += (mouseX - cursorX) * 0.1;
      cursorY += (mouseY - cursorY) * 0.1;
      cursor.style.left = cursorX + 'px';
      cursor.style.top = cursorY + 'px';
      requestAnimationFrame(animateCursor);
    }
    animateCursor();

    document.querySelectorAll('li, .content, h1, h2').forEach(el => {
      el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });

    console.log('Custom cursor initialized');
  }

  document.querySelectorAll('.timeline-sidebar li').forEach(item => {
    item.addEventListener('click', () => {
      const targetId = item.getAttribute('data-target');
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        console.log(`Navigated to: ${targetId}`);
      }
    });
  });

  function createParticles() {
    const particlesContainer = document.getElementById('particles');
    
    if (particlesContainer) {
      for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particlesContainer.appendChild(particle);
      }
      console.log('Particles created');
    }
  }

  setTimeout(createParticles, 3000);

  document.querySelectorAll('.content').forEach(content => {
    content.addEventListener('mouseenter', () => {
      gsap.to(content, { 
        scale: 1.05, 
        y: -10,
        duration: 0.3,
        ease: 'power2.out'
      });
    });
    
    content.addEventListener('mouseleave', () => {
      gsap.to(content, { 
        scale: 1, 
        y: 0,
        duration: 0.3,
        ease: 'power2.out'
      });
    });
  });

  console.log('Content hover effects initialized');
}