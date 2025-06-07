import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Invention data
const inventionData = {
  'fire': {
    title: 'Fire',
    year: '~1.7 million years ago',
    icon: '/images/inventions/fire.webp',
    description: 'The controlled use of fire was one of humanity\'s most significant discoveries.',
    details: `
      <h3>Historical Impact</h3>
      <p>Fire allowed early humans to cook food, extending their digestive efficiency and enabling brain development. It provided warmth in cold climates, extending habitable regions. Fire also offered protection from predators and extended productive hours into the night.</p>
      
      <h3>How It Changed Everything</h3>
      <p>Cooking food made nutrients more accessible and killed harmful bacteria. The social aspect of gathering around fire fostered community bonds and storytelling traditions that became the foundation of human culture.</p>
    `
  },
  'stone-tools': {
    title: 'Stone Tools',
    year: '~2.6 million years ago',
    icon: '/images/inventions/stone-tools.webp',
    description: 'The first manufactured tools marked the beginning of technology.',
    details: `
      <h3>Evolution of Tool Making</h3>
      <p>Stone tools evolved from simple choppers to sophisticated hand axes. The Oldowan tradition (2.6 million years ago) involved basic stone knapping, while Acheulean tools (1.7 million years ago) showed advanced planning and symmetry.</p>
      
      <h3>Cultural Significance</h3>
      <p>Tool-making required learning, memory, and teaching—accelerating cognitive development. These tools enabled hunting larger prey, processing plant materials, and creating other tools, establishing the foundation for all future technology.</p>
    `
  },
  'cave-art': {
    title: 'Cave Art',
    year: '~40,000 years ago',
    icon: '/images/inventions/cave-art.webp',
    description: 'Humanity\'s first artistic expressions and symbolic communication.',
    details: `
      <h3>Artistic Revolution</h3>
      <p>Cave paintings in Lascaux, Altamira, and Chauvet represent humanity's first symbolic thinking. These weren't mere decorations but complex communications about hunting, seasons, and spiritual beliefs.</p>
      
      <h3>Cognitive Leap</h3>
      <p>Creating art required abstract thinking, planning, and the ability to represent reality symbolically. This cognitive leap enabled language development, storytelling, and the transmission of complex cultural knowledge across generations.</p>
    `
  },
  'printing-press': {
    title: 'Printing Press',
    year: '1440',
    icon: '/images/inventions/printing-press.webp',
    description: 'Gutenberg\'s movable type revolutionized knowledge sharing.',
    details: `
      <h3>The Knowledge Revolution</h3>
      <p>Before the printing press, books were hand-copied by scribes, making them expensive and rare. Gutenberg's innovation made books affordable and widely available, democratizing literacy and education.</p>
      
      <h3>Societal Impact</h3>
      <p>The printing press accelerated the Renaissance, enabled the Protestant Reformation, and laid groundwork for the Scientific Revolution. It standardized languages, spread new ideas rapidly, and fundamentally changed how knowledge was preserved and transmitted.</p>
    `
  },
  'telescope': {
    title: 'Telescope',
    year: '1608',
    icon: '/images/inventions/telescope.webp',
    description: 'Opened the cosmos to human observation and scientific discovery.',
    details: `
      <h3>Cosmic Perspective</h3>
      <p>Hans Lippershey's telescope was improved by Galileo, who discovered Jupiter's moons, lunar craters, and the phases of Venus. These observations provided evidence for the heliocentric model of the solar system.</p>
      
      <h3>Scientific Method</h3>
      <p>The telescope enabled empirical observation of celestial phenomena, strengthening the scientific method. It revealed that the universe was far larger and more complex than previously imagined, fundamentally changing humanity's place in the cosmos.</p>
    `
  },
  'microscope': {
    title: 'Microscope',
    year: '1590',
    icon: '/images/inventions/microscope.webp',
    description: 'Revealed the microscopic world and advanced medical understanding.',
    details: `
      <h3>The Invisible World</h3>
      <p>Zacharias Janssen's compound microscope revealed a previously invisible world of microorganisms. Anton van Leeuwenhoek's improvements led to the discovery of bacteria, blood cells, and sperm cells.</p>
      
      <h3>Medical Revolution</h3>
      <p>Microscopy enabled the development of germ theory, understanding of disease transmission, and advancement of medical treatments. It became fundamental to biology, medicine, and materials science.</p>
    `
  },
  'electricity': {
    title: 'Electricity',
    year: '1879',
    icon: '/images/inventions/electricity.webp',
    description: 'Edison\'s light bulb and electrical systems powered the modern world.',
    details: `
      <h3>Illuminating Progress</h3>
      <p>Thomas Edison's incandescent bulb, combined with his electrical distribution system, brought artificial light to cities and homes. This extended productive hours and improved quality of life dramatically.</p>
      
      <h3>Industrial Transformation</h3>
      <p>Electricity powered factories, enabling mass production and industrial automation. It facilitated communication through telegraph and telephone systems, and later enabled radio, television, and computers.</p>
    `
  },
  'internet': {
    title: 'Internet',
    year: '1969',
    icon: '/images/inventions/internet.webp',
    description: 'Connected humanity in an unprecedented global network.',
    details: `
      <h3>Global Connection</h3>
      <p>Starting as ARPANET, the internet evolved into a global network connecting billions of people. It revolutionized communication, commerce, education, and entertainment on an unprecedented scale.</p>
      
      <h3>Information Age</h3>
      <p>The internet democratized access to information, enabled remote work and learning, and created entirely new industries. It transformed how we shop, socialize, learn, and conduct business globally.</p>
    `
  },
  'space-travel': {
    title: 'Space Travel',
    year: '1957',
    icon: '/images/inventions/space-travel.webp',
    description: 'Sputnik launched the space age and human exploration beyond Earth.',
    details: `
      <h3>Beyond Earth\'s Boundaries</h3>
      <p>The Soviet Union's Sputnik 1 became the first artificial satellite, followed by Yuri Gagarin's historic orbital flight in 1961. The Apollo 11 moon landing in 1969 demonstrated humanity's ability to explore other worlds.</p>
      
      <h3>Technological Advancement</h3>
      <p>Space exploration drove innovations in materials science, computing, telecommunications, and medicine. Satellites now provide GPS navigation, weather forecasting, and global communications essential to modern life.</p>
    `
  },
  'ai': {
    title: 'Artificial Intelligence',
    year: '2020s+',
    icon: '/images/inventions/ai.webp',
    description: 'Machine learning systems that augment human capabilities.',
    details: `
      <h3>Cognitive Augmentation</h3>
      <p>Modern AI systems use deep learning and neural networks to perform tasks previously requiring human intelligence: image recognition, natural language processing, strategic game playing, and creative tasks.</p>
      
      <h3>Future Implications</h3>
      <p>AI is transforming healthcare with diagnostic assistance, education with personalized learning, transportation with autonomous vehicles, and scientific research with pattern recognition in vast datasets.</p>
    `
  },
  'quantum-computing': {
    title: 'Quantum Computing',
    year: '2010s+',
    icon: '/images/inventions/quantum-computing.webp',
    description: 'Harnessing quantum mechanics for exponential computational power.',
    details: `
      <h3>Quantum Advantage</h3>
      <p>Quantum computers use quantum bits (qubits) that can exist in multiple states simultaneously, enabling parallel processing of vast solution spaces. This offers exponential speedup for specific problems.</p>
      
      <h3>Revolutionary Applications</h3>
      <p>Quantum computing promises breakthroughs in cryptography, drug discovery, financial modeling, weather prediction, and optimization problems that are intractable for classical computers.</p>
    `
  },
  'space-colonization': {
    title: 'Space Colonization',
    year: '2030s+',
    icon: '/images/inventions/space-colonization.webp',
    description: 'Establishing permanent human settlements beyond Earth.',
    details: `
      <h3>Multi-Planetary Species</h3>
      <p>SpaceX, NASA, and other organizations are developing technologies for Mars colonization, including sustainable life support systems, in-situ resource utilization, and interplanetary transportation.</p>
      
      <h3>Survival Insurance</h3>
      <p>Space colonization serves as a backup for human civilization, protecting against existential risks while driving innovations in sustainability, closed-loop systems, and resource efficiency applicable to Earth.</p>
    `
  }
};

// Categories
const eraInventions = {
  'stone-age': ['fire', 'stone-tools', 'cave-art'],
  'renaissance': ['printing-press', 'telescope', 'microscope'],
  'modern-age': ['electricity', 'internet', 'space-travel'],
  'future': ['ai', 'quantum-computing', 'space-colonization']
};

// 3D flip cards
function generateInventionCards() {
  console.log('Generating 3D flip invention cards...');
  
  Object.keys(eraInventions).forEach(eraId => {
    const inventionsGrid = document.querySelector(`#${eraId} .inventions-grid`);
    
    if (inventionsGrid) {
      inventionsGrid.innerHTML = '';
      
      eraInventions[eraId].forEach(inventionKey => {
        const invention = inventionData[inventionKey];
        
        if (invention) {
          const shortDetails = invention.details
            .replace(/<h3>.*?<\/h3>/g, '')
            .replace(/<[^>]*>/g, '')
            .split('.')[0] + '.';
          
          const cardHTML = `
            <div class="invention-card" data-invention="${inventionKey}">
              <div class="invention-card-inner">
                <div class="invention-card-front">
                  <img src="${invention.icon}" alt="${invention.title}" class="invention-photo">
                  <div class="invention-title">${invention.title}</div>
                  <div class="invention-year">${invention.year}</div>
                  <div class="invention-description">${invention.description}</div>
                  <div class="flip-indicator">Hover to flip →</div>
                </div>
                
                <div class="invention-card-back">
                  <div class="invention-detail-content">
                    <div class="invention-detail-icon">
                      <img src="${invention.icon}" alt="${invention.title}" style="width: 50px; height: 50px; border-radius: 8px; object-fit: cover;">
                    </div>
                    <div class="invention-detail-title">${invention.title}</div>
                    <div class="invention-detail-year">${invention.year}</div>
                    <div class="invention-detail-text">
                      ${shortDetails.length > 150 ? shortDetails.substring(0, 150) + '...' : shortDetails}
                      <br><br>
                      <strong style="color: #40e0d0;">Click for full details</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          `;
          
          inventionsGrid.innerHTML += cardHTML;
        }
      });
    }
  });
  
  console.log('3D flip invention cards generated successfully');
}

// Lazy loading
function lazyLoadBackgrounds() {
  const lazyBgs = document.querySelectorAll('.lazy-bg');
  
  const bgObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('loaded');
        bgObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '50px'
  });

  lazyBgs.forEach(bg => {
    bgObserver.observe(bg);
  });
}

// Modal
function initModal() {
  const modal = document.getElementById('inventionModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  const closeModal = document.getElementById('closeModal');

  function attachModalEvents() {
    document.querySelectorAll('.invention-card').forEach(card => {
      card.addEventListener('click', (e) => {
        e.stopPropagation();
        
        const inventionKey = card.getAttribute('data-invention');
        const invention = inventionData[inventionKey];
        
        if (invention) {
          modalTitle.textContent = invention.title;
          modalBody.innerHTML = `
            <div style="text-align: center; margin-bottom: 2rem;">
              <img src="${invention.icon}" alt="${invention.title}" style="width: 120px; height: 120px; object-fit: cover; border-radius: 12px; margin-bottom: 1rem; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3); border: 2px solid rgba(64, 224, 208, 0.3);">
              <p style="color: #40e0d0; font-size: 1.2rem; margin-bottom: 0.5rem; font-weight: 600;">${invention.year}</p>
              <p style="font-style: italic; color: #aaa; font-size: 1.1rem;">${invention.description}</p>
            </div>
            <div style="text-align: left; line-height: 1.6;">
              ${invention.details}
            </div>
          `;
          modal.classList.add('active');
          document.body.style.overflow = 'hidden';
          
          const modalContent = modal.querySelector('.modal-content');
          modalContent.style.transform = 'scale(0.9) rotateY(-10deg)';
          modalContent.style.opacity = '0';
          
          setTimeout(() => {
            modalContent.style.transform = 'scale(1) rotateY(0deg)';
            modalContent.style.opacity = '1';
            modalContent.style.transition = 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
          }, 50);
        }
      });
      
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
      });
    });
  }

  function closeModalHandler() {
    const modalContent = modal.querySelector('.modal-content');
    modalContent.style.transform = 'scale(0.9) rotateY(10deg)';
    modalContent.style.opacity = '0';
    
    setTimeout(() => {
      modal.classList.remove('active');
      document.body.style.overflow = 'auto';
    }, 200);
  }
  
  closeModal.addEventListener('click', closeModalHandler);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModalHandler();
  });
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModalHandler();
  });

  return { attachModalEvents };
}

// Animations
function initEnhancedAnimations() {
  console.log('Starting enhanced animations with 3D cards...');

  const tl = gsap.timeline();
  tl.to('#mainTitle', { opacity: 1, y: 0, duration: 1.2, ease: 'power2.out' })
    .to('#subtitle', { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }, '-=0.6')
    .to('.scroll-indicator', { opacity: 1, duration: 0.8 }, '-=0.4');

  gsap.to('.timeline-sidebar li', {
    opacity: 1,
    x: 0,
    duration: 0.8,
    stagger: 0.15,
    delay: 2.5,
    ease: 'back.out(1.7)'
  });

  document.querySelectorAll('.era').forEach((section, index) => {
    const mainContent = section.querySelector('.main-content');
    const inventionsGrid = section.querySelector('.inventions-grid');
    const bg = section.querySelector('.background-layer');
    const sectionId = section.getAttribute('id');
    const navItem = document.querySelector(`[data-target='${sectionId}']`);
    const progressDot = document.querySelector(`[data-era='${sectionId}']`);

    if (mainContent) {
      gsap.fromTo(mainContent,
        { y: 80, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 75%',
            end: 'top 25%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }

    if (inventionsGrid) {
      gsap.fromTo(inventionsGrid,
        { x: 60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            end: 'top 30%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      const cards = inventionsGrid.querySelectorAll('.invention-card');
      cards.forEach((card, cardIndex) => {
        gsap.fromTo(card,
          { 
            y: 60, 
            opacity: 0, 
            rotationX: -15,
            scale: 0.9
          },
          {
            y: 0,
            opacity: 1,
            rotationX: 0,
            scale: 1,
            duration: 0.8,
            delay: cardIndex * 0.15,
            ease: 'back.out(1.4)',
            scrollTrigger: {
              trigger: inventionsGrid,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          }
        );
        
        gsap.to(card, {
          y: -5,
          duration: 2 + Math.random() * 2,
          ease: 'power2.inOut',
          yoyo: true,
          repeat: -1,
          delay: cardIndex * 0.3
        });
      });
    }

    if (bg) {
      gsap.to(bg, {
        y: -100,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5
        }
      });
    }

    if (navItem && progressDot) {
      ScrollTrigger.create({
        trigger: section,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => {
          navItem.classList.add('active');
          progressDot.classList.add('active');
        },
        onLeave: () => {
          navItem.classList.remove('active');
          progressDot.classList.remove('active');
        },
        onEnterBack: () => {
          navItem.classList.add('active');
          progressDot.classList.add('active');
        },
        onLeaveBack: () => {
          navItem.classList.remove('active');
          progressDot.classList.remove('active');
        }
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
  }

  const intro = document.querySelector('.intro');
  if (intro) {
    gsap.to(intro, {
      opacity: 0.2,
      scale: 0.9,
      ease: 'none',
      scrollTrigger: {
        trigger: intro,
        start: 'top top',
        end: 'bottom top',
        scrub: 2
      }
    });
  }
}

// Main
function initializeEnhancedTimeline() {
  console.log('Initializing enhanced timeline...');

  generateInventionCards();
  lazyLoadBackgrounds();

  const modal = initModal();
  modal.attachModalEvents();
  
  const loadingScreen = document.getElementById('loading');

  window.addEventListener('load', () => {
    setTimeout(() => {
      if (loadingScreen) {
        loadingScreen.classList.add('fade-out');
        setTimeout(() => {
          initEnhancedAnimations();
        }, 1000);
      }
    }, 2000);
  });

  if (document.readyState === 'complete') {
    setTimeout(() => {
      if (loadingScreen) {
        loadingScreen.classList.add('fade-out');
        setTimeout(() => {
          initEnhancedAnimations();
        }, 1000);
      }
    }, 2000);
  }

  // Navigation
  document.querySelectorAll('.timeline-sidebar li, .progress-dot').forEach(item => {
    item.addEventListener('click', () => {
      const targetId = item.getAttribute('data-target') || item.getAttribute('data-era');
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Particles
  function createParticles() {
    const particlesContainer = document.getElementById('particles');
    
    if (particlesContainer) {
      for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (Math.random() * 15 + 15) + 's';
        particlesContainer.appendChild(particle);
      }
    }
  }

  setTimeout(createParticles, 3000);

  // Content hover effects
  document.querySelectorAll('.main-content').forEach(content => {
    content.addEventListener('mouseenter', () => {
      gsap.to(content, { 
        scale: 1.02, 
        y: -5,
        duration: 0.4,
        ease: 'power2.out'
      });
    });
    
    content.addEventListener('mouseleave', () => {
      gsap.to(content, { 
        scale: 1, 
        y: 0,
        duration: 0.4,
        ease: 'power2.out'
      });
    });
  });
}

console.log('GSAP imported successfully:', gsap);
console.log('ScrollTrigger imported successfully:', ScrollTrigger);

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeEnhancedTimeline);
} else {
  initializeEnhancedTimeline();
}