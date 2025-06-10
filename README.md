# Timeline of Inventions 🚀

An interactive timeline showcasing humanity's greatest innovations from the Stone Age to the future. Built with **Vite** and **Vanilla JavaScript**. This project features 3D cards, GSAP animations, and a timeline scrubber—all without any frameworks.

![Timeline Preview](/public/Screenshot%202025-06-10%20at%2013-47-43%20Timeline%20of%20Inventions%20-%20Interactive%20History.png)

##  Features

### Interactive 3D Cards
- **Flip Cards**: Hover to reveal detailed information about each invention
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: GSAP-powered transitions and scroll-triggered effects

### Timeline Navigation
- **Interactive Scrubber**: Drag to navigate through different eras
- **Sidebar Navigation**: Quick jump to any historical period
- **Progress Indicators**: Visual feedback showing current position
- **Keyboard Support**: Full accessibility with keyboard navigation

### User Experience
- **Lazy Loading**: Optimized performance with background image lazy loading
- **Modal Details**: Click any invention for comprehensive information
- **Floating Particles**: Atmospheric background effects
- **Loading Animations**: Smooth transitions between states

### ♿ Accessibility
- **ARIA Labels**: Full screen reader support
- **Keyboard Navigation**: Tab through all interactive elements
- **Skip Links**: Quick navigation for assistive technologies
- **Focus Management**: Clear visual focus indicators
- **Reduced Motion**: Respects user motion preferences

## Live Demo

[View Live Demo](https://imaginative-lebkuchen-1027e9.netlify.app/)

## 🛠️ Technologies Used

- **Vite**: Fast build tool and development server
- **Vanilla JavaScript (ES6+)**: No frameworks, pure JavaScript
- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Styling with custom properties and animations
- **GSAP**: Animations and scroll triggers
- **Google Fonts**: Inter & Space Grotesk typography

### Keyboard Shortcuts
- `Tab` / `Shift+Tab`: Navigate through interactive elements
- `T`: Toggle timeline scrubber visibility
- `Escape`: Close modals or scrubber
- `Enter` / `Space`: Activate focused buttons

### Inventory Cards
- **Hover**: Flip cards to see summary information
- **Click**: Open detailed modal with full invention history

## 🏗️ Project Structure

```
inventions/
├── index.html              # Main HTML file
├── src/
│   ├── styles/
│   │   └── base.css        # Main stylesheet
│   └── js/
│       └── main.js         # Vanilla JavaScript functionality
├── public/
│   └── images/
│       ├── inventions/     # Invention card images
│       └──                 # Era background images
├── package.json            # Dependencies and scripts
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/leverh/inventions
   cd inventions
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🎨 Customization

### Adding New Inventions

1. **Update the invention data** in `src/js/main.js`:
   ```javascript
   const inventionData = {
     'your-invention': {
       title: 'The Invention',
       year: '2024',
       icon: '/images/inventions/your-invention.webp',
       description: 'Brief description...',
       details: `<h3>Section Title</h3><p>Detailed content...</p>`
     }
   };
   ```

2. **Add to era category**:
   ```javascript
   const eraInventions = {
     'new-era': ['the-invention', 'existing-invention']
   };
   ```

3. **Add invention image** to `public/images/inventions/`

### Styling Modifications

- **Colors**: Update CSS custom properties in `src/styles/base.css`
- **Fonts**: Modify font imports in HTML and CSS font-family declarations
- **Animations**: Adjust GSAP timeline configurations in `src/js/main.js`

##  Why Vite + Vanilla JavaScript?

This project shows that you don't always need heavy frameworks to create engaging, interactive web experiences. By using **Vite** with **Vanilla JavaScript**, we achieve:

- **Fast development** with Vite's hot module replacement
- **Lightweight bundle** with no framework overhead  
- **Direct DOM manipulation** for maximum performance
- **Easy deployment** with simple build process

## Key Features Explained

### Timeline Scrubber
The interactive scrubber allows users to:
- Drag to navigate through time periods
- Click era labels for quick jumps
- View current progress percentage
- Hide/show with keyboard shortcuts

### 3D Card System
Each invention card features:
- Front side with basic information
- Back side with detailed summary
- Smooth 3D flip animations
- Click-through to full modal details

### Accessibility Features
- Full ARIA label implementation
- Keyboard navigation support
- Screen reader compatibility
- Focus management for modals
- Skip links for efficient navigation

## Known Issues

- Timeline scrubber may need manual refresh on very slow connections
- 3D card animations may be reduced on low-performance devices
- Some background images may load slowly on first visit

## 📄 License

This project is licensed under the MIT License. Copy or share - I really don't care 🖖✌️

## 🙏 Acknowledgments

- **GSAP**: For animation capabilities
- **Google Fonts**: For typography (Inter & Space Grotesk)
- **Unsplash, Pexel, and Wikipedia**: For images
- **MDN Web Docs**: For accessibility guidelines and best practices

## 📧 Contact

**PixelSummit** - [https://pixelsummit.dev/](https://pixelsummit.dev/)

Project Link: [https://github.com/leverh/inventions](https://github.com/leverh/inventions)