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
  },

'wheel': {
  title: 'The Wheel',
  year: '~3500 BCE',
  icon: '/images/inventions/wheel.webp',
  description: 'Revolutionary circular frame that transformed transportation and machinery.',
  details: `
    <h3>Transportation Revolution</h3>
    <p>The wheel fundamentally changed how humans moved goods and themselves. Initially developed in Mesopotamia, it enabled the creation of carts, chariots, and eventually all wheeled vehicles.</p>
    
    <h3>Mechanical Applications</h3>
    <p>Beyond transportation, wheels powered pottery wheels, mill stones for grinding grain, and complex gear systems. This simple device became the foundation for countless mechanical innovations.</p>
    
    <h3>Societal Impact</h3>
    <p>The wheel accelerated trade, military conquest, and the spread of ideas across civilizations, fundamentally changing the pace of human development.</p>
  `
},

'agriculture': {
  title: 'Agriculture',
  year: '~10,000 BCE',
  icon: '/images/inventions/agriculture.webp',
  description: 'Domestication of plants and animals that enabled permanent settlements.',
  details: `
    <h3>The Neolithic Revolution</h3>
    <p>The transition from hunting and gathering to farming allowed humans to produce surplus food, leading to population growth and the first permanent settlements.</p>
    
    <h3>Crop Domestication</h3>
    <p>Early farmers selectively bred wild grasses like wheat, barley, and rice, gradually developing the high-yield crops that still feed the world today.</p>
    
    <h3>Foundation of Civilization</h3>
    <p>Agriculture freed humans from constant food search, enabling specialization of labor, social hierarchies, and the development of arts, writing, and governance.</p>
  `
},

'pottery': {
  title: 'Pottery',
  year: '~20,000 BCE',
  icon: '/images/inventions/pottery.webp',
  description: 'First technology to transform raw materials through heat and chemistry.',
  details: `
    <h3>Chemical Transformation</h3>
    <p>Pottery represents humanity's first mastery of chemical transformation, using fire to permanently change clay into waterproof containers and cooking vessels.</p>
    
    <h3>Food Storage Revolution</h3>
    <p>Clay vessels enabled long-term food storage, cooking of previously inedible foods, and transportation of liquids, dramatically improving nutrition and food security.</p>
    
    <h3>Cultural Expression</h3>
    <p>Decorated pottery became one of humanity's earliest art forms, with distinctive styles that help archaeologists understand ancient cultures and trade networks.</p>
  `
},

'language': {
  title: 'Language',
  year: '~50,000 BCE',
  icon: '/images/inventions/language.webp',
  description: 'Complex symbolic communication that enabled knowledge transfer.',
  details: `
    <h3>Symbolic Thinking</h3>
    <p>Language represents the development of abstract thinking, allowing humans to communicate complex ideas, share knowledge, and coordinate group activities.</p>
    
    <h3>Cultural Transmission</h3>
    <p>Spoken language enabled the transmission of knowledge across generations, allowing each generation to build upon previous discoveries and innovations.</p>
    
    <h3>Social Cooperation</h3>
    <p>Language facilitated complex social cooperation, planning, storytelling, and the development of shared beliefs and cultural practices.</p>
  `
},

'clothing': {
  title: 'Clothing',
  year: '~70,000 BCE',
  icon: '/images/inventions/cloth.webp',
  description: 'Protective garments that enabled human expansion into cold climates.',
  details: `
    <h3>Climate Adaptation</h3>
    <p>Clothing allowed humans to survive in cold climates, enabling migration to northern regions and high altitudes previously uninhabitable.</p>
    
    <h3>Textile Innovation</h3>
    <p>Early clothing involved weaving plant fibers and preparing animal skins, developing techniques for cutting, sewing, and treating materials that persist today.</p>
    
    <h3>Social Identity</h3>
    <p>Clothing became a means of social expression, indicating status, tribal affiliation, and personal identity within communities.</p>
  `
},

'bow-arrow': {
  title: 'Bow and Arrow',
  year: '~20,000 BCE',
  icon: '/images/inventions/bow-arrow.webp',
  description: 'Projectile weapon that revolutionized hunting and warfare.',
  details: `
    <h3>Hunting Efficiency</h3>
    <p>The bow and arrow allowed hunters to kill prey from a safe distance, increasing success rates and reducing danger from large animals.</p>
    
    <h3>Engineering Principles</h3>
    <p>This technology demonstrated understanding of elastic energy storage, aerodynamics, and projectile physics, laying groundwork for future engineering.</p>
    
    <h3>Military Revolution</h3>
    <p>Archery transformed warfare, giving skilled archers decisive advantages and influencing military tactics for thousands of years.</p>
  `
}, 

'compass': {
  title: 'Magnetic Compass',
  year: '1190',
  icon: '/images/inventions/compass.webp',
  description: 'Navigation instrument that enabled global exploration and trade.',
  details: `
    <h3>Age of Exploration</h3>
    <p>The magnetic compass made ocean navigation possible, enabling the Age of Exploration, discovery of new continents, and establishment of global trade routes.</p>
    
    <h3>Scientific Understanding</h3>
    <p>The compass led to early understanding of magnetism and Earth's magnetic field, contributing to the development of physics and navigation science.</p>
    
    <h3>Economic Impact</h3>
    <p>Reliable navigation opened new trade routes, connected distant economies, and laid the foundation for global commerce and cultural exchange.</p>
  `
},

'gunpowder': {
  title: 'Gunpowder',
  year: '1040',
  icon: '/images/inventions/gunpowder.webp',
  description: 'Explosive chemical mixture that transformed warfare and engineering.',
  details: `
    <h3>Military Revolution</h3>
    <p>Gunpowder weapons made traditional fortifications obsolete, changed battlefield tactics, and shifted the balance of power between nations and social classes.</p>
    
    <h3>Engineering Applications</h3>
    <p>Beyond warfare, gunpowder enabled mining through blasting, construction of tunnels and canals, and eventually powered the first rockets.</p>
    
    <h3>Chemical Knowledge</h3>
    <p>Creating gunpowder required understanding chemical reactions and proportions, advancing early chemistry and materials science.</p>
  `
},

'mechanical-clock': {
  title: 'Mechanical Clock',
  year: '1300',
  icon: '/images/inventions/clock.webp',
  description: 'Precise timekeeping device that regulated daily life and industry.',
  details: `
    <h3>Time Standardization</h3>
    <p>Mechanical clocks created the first accurate, standardized timekeeping, enabling coordination of activities, scheduled events, and synchronized work.</p>
    
    <h3>Precision Engineering</h3>
    <p>Clock-making required unprecedented precision in metalworking and gear design, advancing mechanical engineering and manufacturing techniques.</p>
    
    <h3>Industrial Foundation</h3>
    <p>Accurate timekeeping became essential for scientific experiments, astronomical observations, and later industrial processes requiring precise coordination.</p>
  `
},

'eyeglasses': {
  title: 'Eyeglasses',
  year: '1286',
  icon: '/images/inventions/glasses.webp',
  description: 'Vision correction that extended productive life and enabled detailed work.',
  details: `
    <h3>Vision Enhancement</h3>
    <p>Eyeglasses allowed people with poor vision to continue productive work, especially detailed crafts like reading, writing, and precision manufacturing.</p>
    
    <h3>Optical Science</h3>
    <p>Developing corrective lenses advanced understanding of optics, light refraction, and vision, leading to telescopes, microscopes, and cameras.</p>
    
    <h3>Knowledge Preservation</h3>
    <p>By extending the working lives of scholars and scribes, eyeglasses helped preserve and transmit knowledge during the Renaissance.</p>
  `
},

'double-entry-bookkeeping': {
  title: 'Double-Entry Bookkeeping',
  year: '1494',
  icon: '/images/inventions/double-entry-bookkeeping.webp',
  description: 'Accounting system that enabled modern business and banking.',
  details: `
    <h3>Financial Accuracy</h3>
    <p>Double-entry bookkeeping provided a systematic way to track financial transactions, reducing errors and fraud in business dealings.</p>
    
    <h3>Business Growth</h3>
    <p>Reliable accounting enabled larger, more complex businesses, international trade partnerships, and the development of modern banking systems.</p>
    
    <h3>Economic Analysis</h3>
    <p>Standardized accounting made it possible to analyze business performance, compare investments, and make data-driven financial decisions.</p>
  `
},

'movable-type': {
  title: 'Movable Type',
  year: '1450',
  icon: '/images/inventions/movable-type.webp',
  description: 'Reusable printing components that accelerated book production.',
  details: `
    <h3>Publishing Revolution</h3>
    <p>Movable type made book printing faster and more economical, dramatically increasing the availability of written knowledge and literacy rates.</p>
    
    <h3>Standardized Language</h3>
    <p>Printed books helped standardize spelling, grammar, and dialects, contributing to the development of modern national languages.</p>
    
    <h3>Information Spread</h3>
    <p>Rapid book production enabled the spread of scientific discoveries, religious reforms, and political ideas across Europe and beyond.</p>
  `
}, 

'steam-engine': {
  title: 'Steam Engine',
  year: '1712',
  icon: '/images/inventions/steam-engine.webp',
  description: 'Mechanical power source that launched the Industrial Revolution.',
  details: `
    <h3>Industrial Revolution</h3>
    <p>The steam engine provided reliable mechanical power independent of wind, water, or animal strength, enabling factories to operate anywhere and at any time.</p>
    
    <h3>Transportation Transform</h3>
    <p>Steam powered trains and ships revolutionized transportation, connecting distant regions and enabling rapid movement of people and goods.</p>
    
    <h3>Manufacturing Boom</h3>
    <p>Steam power enabled mass production, standardized manufacturing, and the growth of industrial cities that defined the modern world.</p>
  `
},

'telephone': {
  title: 'Telephone',
  year: '1876',
  icon: '/images/inventions/telephone.webp',
  description: 'Long-distance voice communication that connected the world.',
  details: `
    <h3>Instant Communication</h3>
    <p>The telephone enabled real-time voice communication across vast distances, revolutionizing business, personal relationships, and emergency services.</p>
    
    <h3>Global Network</h3>
    <p>Telephone networks created the first global communication infrastructure, laying the groundwork for modern telecommunications and the internet.</p>
    
    <h3>Social Impact</h3>
    <p>Telephones changed social interactions, enabled remote business operations, and helped coordinate complex industrial and governmental activities.</p>
  `
},

'automobile': {
  title: 'Automobile',
  year: '1885',
  icon: '/images/inventions/automobile.webp',
  description: 'Personal transportation that reshaped cities and society.',
  details: `
    <h3>Personal Mobility</h3>
    <p>Automobiles gave individuals unprecedented freedom of movement, enabling people to live farther from work and access previously unreachable areas.</p>
    
    <h3>Urban Development</h3>
    <p>Cars enabled suburban development, changed city planning, and created new industries from gas stations to shopping malls designed around automobile access.</p>
    
    <h3>Economic Engine</h3>
    <p>The automobile industry became a major economic force, driving innovations in manufacturing, materials science, and supply chain management.</p>
  `
},

'airplane': {
  title: 'Airplane',
  year: '1903',
  icon: '/images/inventions/airplane.webp',
  description: 'Powered flight that shrank the world and opened the skies.',
  details: `
    <h3>Aviation Age</h3>
    <p>The Wright brothers' first flight launched the aviation age, making rapid long-distance travel possible and connecting distant parts of the world.</p>
    
    <h3>Global Commerce</h3>
    <p>Air transportation enabled global business operations, international tourism, and rapid movement of goods and people across continents.</p>
    
    <h3>Military Impact</h3>
    <p>Aircraft transformed warfare, reconnaissance, and defense strategies, while also enabling humanitarian aid and disaster response.</p>
  `
},

'radio': {
  title: 'Radio',
  year: '1895',
  icon: '/images/inventions/radio.webp',
  description: 'Wireless communication that created mass media and global connection.',
  details: `
    <h3>Mass Communication</h3>
    <p>Radio enabled simultaneous communication to millions of people, creating the first mass media and shared cultural experiences.</p>
    
    <h3>Information Spread</h3>
    <p>Radio broadcasts provided news, education, and entertainment to remote areas, democratizing access to information and culture.</p>
    
    <h3>Wireless Foundation</h3>
    <p>Radio technology laid the groundwork for all wireless communications, from television to cellular phones and satellite communications.</p>
  `
},

'assembly-line': {
  title: 'Assembly Line',
  year: '1913',
  icon: '/images/inventions/assembly-line.webp',
  description: 'Manufacturing process that enabled mass production and affordability.',
  details: `
    <h3>Production Efficiency</h3>
    <p>The assembly line dramatically reduced manufacturing time and costs, making complex products like automobiles affordable to ordinary consumers.</p>
    
    <h3>Worker Specialization</h3>
    <p>Assembly lines enabled workers to specialize in specific tasks, increasing efficiency while reducing the skill requirements for manufacturing jobs.</p>
    
    <h3>Consumer Society</h3>
    <p>Mass production enabled the development of consumer culture, making a wide variety of goods accessible to the growing middle class.</p>
  `
},

'crispr': {
  title: 'CRISPR Gene Editing',
  year: '2012',
  icon: '/images/inventions/crispr.webp',
  description: 'Precise genetic modification tool revolutionizing medicine and biology.',
  details: `
    <h3>Genetic Precision</h3>
    <p>CRISPR allows scientists to edit genes with unprecedented precision, enabling treatment of genetic diseases and enhancement of crops and livestock.</p>
    
    <h3>Medical Breakthroughs</h3>
    <p>Gene editing promises cures for inherited diseases, cancer treatments, and organ regeneration, potentially extending human lifespan significantly.</p>
    
    <h3>Ethical Considerations</h3>
    <p>CRISPR raises important questions about genetic enhancement, equality, and the future of human evolution, requiring careful ethical consideration.</p>
  `
},

'renewable-energy': {
  title: 'Renewable Energy',
  year: '2000s+',
  icon: '/images/inventions/renewable-energy.webp',
  description: 'Sustainable power sources addressing climate change and energy security.',
  details: `
    <h3>Climate Solution</h3>
    <p>Solar, wind, and other renewable technologies offer pathways to reduce carbon emissions and combat climate change while meeting growing energy demands.</p>
    
    <h3>Energy Independence</h3>
    <p>Renewable energy reduces dependence on fossil fuel imports, enhancing national security and economic stability for many countries.</p>
    
    <h3>Technological Innovation</h3>
    <p>Advances in battery storage, smart grids, and efficiency are making renewable energy increasingly competitive with traditional power sources.</p>
  `
},

'autonomous-vehicles': {
  title: 'Autonomous Vehicles',
  year: '2020s+',
  icon: '/images/inventions/autonomous-vehicles.webp',
  description: 'Self-driving cars that promise safer, more efficient transportation.',
  details: `
    <h3>Safety Revolution</h3>
    <p>Autonomous vehicles could eliminate most traffic accidents caused by human error, potentially saving millions of lives annually.</p>
    
    <h3>Urban Transformation</h3>
    <p>Self-driving cars may reduce the need for parking spaces, enable new urban designs, and provide mobility to elderly and disabled individuals.</p>
    
    <h3>Economic Disruption</h3>
    <p>Autonomous vehicles will transform transportation industries, logistics, and urban planning while creating new economic opportunities.</p>
  `
},

'3d-printing': {
  title: '3D Printing',
  year: '2009+',
  icon: '/images/inventions/3d-printing.webp',
  description: 'Additive manufacturing enabling custom production and rapid prototyping.',
  details: `
    <h3>Manufacturing Revolution</h3>
    <p>3D printing enables on-demand production of complex parts without tooling, reducing waste and enabling mass customization.</p>
    
    <h3>Medical Applications</h3>
    <p>Bioprinting promises custom prosthetics, organ replacement, and personalized medical devices tailored to individual patients.</p>
    
    <h3>Distributed Production</h3>
    <p>3D printing could enable local production of goods, reducing transportation costs and environmental impact while enabling rapid innovation.</p>
  `
},

'brain-computer-interface': {
  title: 'Brain-Computer Interface',
  year: '2020s+',
  icon: '/images/inventions/brain-computer-interface.webp',
  description: 'Direct neural connection between brain and computers.',
  details: `
    <h3>Neural Enhancement</h3>
    <p>Brain-computer interfaces could enhance human cognitive abilities, enable direct thought-to-computer communication, and treat neurological conditions.</p>
    
    <h3>Medical Applications</h3>
    <p>BCIs offer hope for paralyzed patients to control devices with thoughts, restore lost senses, and treat depression and other mental health conditions.</p>
    
    <h3>Human-AI Collaboration</h3>
    <p>Direct brain-computer connections could enable seamless collaboration between human intelligence and artificial intelligence systems.</p>
  `
},

'fusion-energy': {
  title: 'Nuclear Fusion',
  year: '2030s+',
  icon: '/images/inventions/fusion-energy.webp',
  description: 'Clean, unlimited energy source mimicking the power of stars.',
  details: `
    <h3>Unlimited Clean Energy</h3>
    <p>Nuclear fusion promises virtually unlimited clean energy with no radioactive waste, potentially solving global energy needs and climate change.</p>
    
    <h3>Technological Challenge</h3>
    <p>Achieving controlled fusion requires temperatures of 100 million degrees and advanced magnetic containment, representing one of humanity's greatest engineering challenges.</p>
    
    <h3>Global Impact</h3>
    <p>Successful fusion power could transform global economics, eliminate energy poverty, and enable energy-intensive technologies like atmospheric carbon capture.</p>
  `
}
};

// Categories
const eraInventions = {
  'stone-age': ['fire', 'stone-tools', 'cave-art', 'wheel', 'agriculture', 'pottery', 'language', 'clothing', 'bow-arrow'],
  'renaissance': ['printing-press', 'telescope', 'microscope', 'compass', 'gunpowder', 'mechanical-clock', 'eyeglasses', 'double-entry-bookkeeping', 'movable-type'],
  'modern-age': ['electricity', 'internet', 'space-travel', 'steam-engine', 'telephone', 'automobile', 'airplane', 'radio', 'assembly-line'],
  'future': ['ai', 'quantum-computing', 'space-colonization', 'crispr', 'renewable-energy', 'autonomous-vehicles', '3d-printing', 'brain-computer-interface', 'fusion-energy']
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
          // Text truncation logic
          let shortDetails = invention.details
            .replace(/<h3>.*?<\/h3>/g, '')
            .replace(/<[^>]*>/g, '')
            .trim();

          const sentences = shortDetails.split(/[.!?]+/).filter(s => s.trim().length > 0);
          
          if (sentences.length > 0) {
            let truncatedText = sentences[0].trim();

            if (truncatedText.length < 50 && sentences.length > 1) {
              truncatedText += '. ' + sentences[1].trim();
            }

            if (truncatedText.length > 120) {
              truncatedText = truncatedText.substring(0, 120).trim();
              const lastSpace = truncatedText.lastIndexOf(' ');
              if (lastSpace > 80) {
                truncatedText = truncatedText.substring(0, lastSpace);
              }
              truncatedText += '...';
            } else {
              truncatedText += '.';
            }
            
            shortDetails = truncatedText;
          } else {
            shortDetails = invention.description.substring(0, 100) + '...';
          }
          
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
                      ${shortDetails}
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

// Timeline Scrubber Class
class TimelineScrubber {
  constructor() {
    this.scrubber = document.getElementById('timelineScrubber');
    this.track = document.getElementById('scrubberTrack');
    this.progress = document.getElementById('scrubberProgress');
    this.handle = document.getElementById('scrubberHandle');
    this.labels = document.querySelectorAll('.scrubber-label');
    this.currentEraDisplay = document.getElementById('currentEra');
    this.progressText = document.getElementById('progressText');
    this.closeBtn = document.getElementById('scrubberClose');
    
    this.isDragging = false;
    this.currentProgress = 0;
    this.isVisible = false;
    this.userManuallyHidden = false; // Track if user manually closed it
    
    this.eras = [
      { id: 'stone-age', name: 'Stone Age', start: 0, end: 0.25 },
      { id: 'renaissance', name: 'Renaissance', start: 0.25, end: 0.5 },
      { id: 'modern-age', name: 'Modern Age', start: 0.5, end: 0.75 },
      { id: 'future', name: 'Future', start: 0.75, end: 1 }
    ];
    
    this.initEvents();
    setTimeout(() => {
      if (!this.userManuallyHidden) {
        this.show();
      }
    }, 5000);
  }
  
  initEvents() {
    if (!this.scrubber || !this.track || !this.handle) {
      console.error('Timeline scrubber elements not found');
      return;
    }

    // Handle dragging
    if (this.handle) {
      this.handle.addEventListener('mousedown', this.onDragStart.bind(this));
      this.handle.addEventListener('touchstart', this.onDragStart.bind(this), { passive: false });
    }
    
    // Track clicking
    if (this.track) {
      this.track.addEventListener('click', this.onTrackClick.bind(this));
    }
    
    // Label clicking
    if (this.labels && this.labels.length > 0) {
      this.labels.forEach(label => {
        label.addEventListener('click', () => {
          const eraId = label.getAttribute('data-era');
          this.navigateToEra(eraId);
        });
      });
    }
    
    // Close button
    if (this.closeBtn) {
      console.log('Close button found, adding event listener');
      this.closeBtn.addEventListener('click', (e) => {
        console.log('Close button clicked');
        e.preventDefault();
        e.stopPropagation();
        this.userManuallyHidden = true;
        this.hide();
      });
    } else {
      console.error('Close button not found - ID: scrubberClose');
      const fallbackCloseBtn = document.querySelector('.scrubber-close') || 
                              document.querySelector('#scrubberClose') ||
                              document.querySelector('[class*="close"]');
      if (fallbackCloseBtn) {
        console.log('Found fallback close button');
        fallbackCloseBtn.addEventListener('click', (e) => {
          console.log('Fallback close button clicked');
          e.preventDefault();
          e.stopPropagation();
          this.userManuallyHidden = true;
          this.hide();
        });
      }
    }
    
    // Global mouse events
    document.addEventListener('mousemove', this.onDrag.bind(this));
    document.addEventListener('mouseup', this.onDragEnd.bind(this));
    document.addEventListener('touchmove', this.onDrag.bind(this), { passive: false });
    document.addEventListener('touchend', this.onDragEnd.bind(this));
    
    // Scroll to update progress
    window.addEventListener('scroll', this.updateFromScroll.bind(this));
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      // Shift+Tab to toggle scrubber
      if (e.key === 'Tab' && e.shiftKey) {
        e.preventDefault();
        this.toggle();
      }
      // 'T' key to toggle scrubber
      if (e.key === 't' || e.key === 'T') {
        this.toggle();
      }
      // Escape key to close scrubber
      if (e.key === 'Escape' && this.isVisible) {
        this.hide();
      }
    });
  }
  
  onDragStart(e) {
    this.isDragging = true;
    this.handle.classList.add('dragging');
    e.preventDefault();
    
    // Pulse effect
    this.handle.classList.add('pulsing');
  }
  
  onDrag(e) {
    if (!this.isDragging) return;
    
    const rect = this.track.getBoundingClientRect();
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const progress = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    
    this.setProgress(progress);
    this.navigateToProgress(progress);
  }
  
  onDragEnd() {
    if (!this.isDragging) return;
    
    this.isDragging = false;
    this.handle.classList.remove('dragging', 'pulsing');
  }
  
  onTrackClick(e) {
    if (this.isDragging) return;
    
    const rect = this.track.getBoundingClientRect();
    const progress = (e.clientX - rect.left) / rect.width;
    this.setProgress(Math.max(0, Math.min(1, progress)));
    this.navigateToProgress(progress);
  }
  
  setProgress(progress) {
    this.currentProgress = progress;
    this.progress.style.width = (progress * 100) + '%';
    this.handle.style.left = (progress * 100) + '%';
    
    // Update active label
    const currentEra = this.getCurrentEra(progress);
    this.updateActiveLabel(currentEra);
    this.updateProgressDisplay(progress, currentEra);
  }
  
  getCurrentEra(progress) {
    return this.eras.find(era => progress >= era.start && progress < era.end) || this.eras[this.eras.length - 1];
  }
  
  updateActiveLabel(currentEra) {
    this.labels.forEach(label => {
      const isActive = label.getAttribute('data-era') === currentEra.id;
      label.classList.toggle('active', isActive);
    });
  }
  
  updateProgressDisplay(progress, currentEra) {
    this.currentEraDisplay.textContent = currentEra.name;
    this.progressText.textContent = Math.round(progress * 100) + '% Complete';
  }
  
  navigateToProgress(progress) {
    const currentEra = this.getCurrentEra(progress);
    const eraElement = document.getElementById(currentEra.id);
    
    if (eraElement) {
      // Smooth scroll
      eraElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      });
    }
  }
  
  navigateToEra(eraId) {
    const era = this.eras.find(e => e.id === eraId);
    if (era) {
      const progress = era.start + (era.end - era.start) * 0.5; // Middle of era
      this.setProgress(progress);
      this.navigateToProgress(progress);

      this.handle.classList.add('pulsing');
      setTimeout(() => {
        this.handle.classList.remove('pulsing');
      }, 1500);
    }
  }
  
  updateFromScroll() {
    if (this.isDragging) return;

    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollProgress = Math.max(0, Math.min(1, scrollTop / docHeight));
    
    this.setProgress(scrollProgress);
  }
  
  show() {
    if (this.isVisible) return;
    
    console.log('Showing timeline scrubber');
    this.isVisible = true;
    this.scrubber.classList.add('visible', 'animate-in');

    setTimeout(() => {
      this.updateFromScroll();
    }, 500);
  }
  
  hide() {
    if (!this.isVisible) return;
    
    console.log('Hiding timeline scrubber');
    this.isVisible = false;
    this.scrubber.classList.remove('visible', 'animate-in');

    setTimeout(() => {
      this.showReopenHint();
    }, 500);
  }
  
  toggle() {
    if (this.isVisible) {
      this.userManuallyHidden = true;
      this.hide();
    } else {
      this.userManuallyHidden = false;
      this.show();
    }
  }

  showReopenHint() {
    const hint = document.createElement('div');
    hint.style.cssText = `
      position: fixed;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(64, 224, 208, 0.9);
      color: #000;
      padding: 0.8rem 1.5rem;
      border-radius: 25px;
      font-size: 0.9rem;
      font-weight: 600;
      z-index: 1001;
      box-shadow: 0 4px 15px rgba(64, 224, 208, 0.4);
      opacity: 0;
      transition: opacity 0.3s ease;
    `;
    hint.textContent = 'Press "T" to reopen timeline scrubber';
    
    document.body.appendChild(hint);
    
    // Animate in
    setTimeout(() => hint.style.opacity = '1', 100);

    setTimeout(() => {
      hint.style.opacity = '0';
      setTimeout(() => {
        if (hint.parentNode) {
          hint.parentNode.removeChild(hint);
        }
      }, 300);
    }, 3000);
  }
}

// Initialize timeline scrubber
function initTimelineScrubber() {
  setTimeout(() => {
    const scrubberElement = document.getElementById('timelineScrubber');
    if (!scrubberElement) {
      console.error('Timeline scrubber HTML not found');
      return;
    }
    
    const timelineScrubber = new TimelineScrubber();

    window.timelineScrubber = timelineScrubber;
    
    console.log('Timeline scrubber initialized');
  }, 2000);
}

// Main initialization function
function initializeEnhancedTimeline() {
  console.log('Initializing enhanced timeline...');

  generateInventionCards();
  initTimelineScrubber();
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