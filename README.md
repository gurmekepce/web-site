# Saveur - Premium Catering Services Website

A modern, responsive one-page catering service website built with React, TypeScript, and Tailwind CSS. Features beautiful animations, smooth scrolling, and a professional design perfect for real-world deployment.

## Features

### 🎨 Design & User Experience
- **Modern Minimalist Design**: Clean layout with generous white space and elegant typography
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Smooth Animations**: Intersection observer-triggered fade-in animations throughout
- **Parallax Effects**: Hero section with parallax scrolling background
- **Interactive Elements**: Hover effects, micro-interactions, and smooth transitions

### 🧭 Navigation & Structure
- **Sticky Navigation**: Scroll-spy navigation with active section highlighting
- **Mobile Menu**: Collapsible hamburger menu for mobile devices
- **Smooth Scrolling**: Beautiful smooth scroll behavior between sections
- **Six Main Sections**: Hero, Services, About, Gallery, Testimonials, Contact

### ⚡ Performance & Optimization
- **Lazy Loading**: Images are lazy-loaded for optimal performance
- **Minimal Dependencies**: Built with minimal third-party packages
- **TypeScript**: Full type safety throughout the application
- **Modular Architecture**: Clean component structure for maintainability

### 📋 Key Components

#### Services Section
- Interactive service cards with hover effects
- Feature lists with pricing information
- Call-to-action buttons linking to contact form

#### Gallery
- Filterable image gallery with category tabs
- Smooth animations with staggered loading effects
- Professional catering photography

#### Testimonials
- Auto-playing testimonial slider with manual controls
- Star ratings and client information
- Smooth transitions between testimonials

#### Contact Form
- Comprehensive booking form with validation
- Real-time error handling and user feedback
- Form fields for event details and guest count
- Success message with auto-reset functionality

## Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd saveur-catering
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the website

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` directory.

## Project Structure

```
src/
├── components/           # React components
│   ├── common/          # Reusable components
│   │   ├── Button.tsx   # Customizable button component
│   │   └── Card.tsx     # Animated card component
│   ├── Header.tsx       # Navigation header with scroll-spy
│   ├── Hero.tsx         # Hero section with parallax
│   ├── Services.tsx     # Services showcase
│   ├── About.tsx        # About section with stats
│   ├── Gallery.tsx      # Filterable image gallery
│   ├── Testimonials.tsx # Testimonial slider
│   └── Contact.tsx      # Contact form with validation
├── data/
│   └── mockData.ts      # Sample data for services, testimonials, etc.
├── hooks/
│   ├── useIntersectionObserver.ts  # Animation trigger hook
│   └── useScrollSpy.ts  # Navigation active state hook
├── App.tsx              # Main application component
├── index.css            # Global styles and animations
└── main.tsx             # Application entry point
```

## Customization

### Brand Colors
The website uses a modern color palette that can be easily customized in `tailwind.config.js`:
- **Primary**: Orange (#F97316) - Used for CTAs and accents
- **Secondary**: Gray tones for text and backgrounds
- **Success/Warning/Error**: Standard semantic colors

### Content Updates
1. **Services**: Update the `services` array in `src/data/mockData.ts`
2. **Testimonials**: Modify the `testimonials` array with real client feedback
3. **Gallery**: Replace `galleryItems` with your own event photography
4. **Contact Info**: Update contact details in the `contactInfo` array

### Images
All images are sourced from Pexels with proper optimization. Replace with your own high-quality images:
- Hero background: Professional catering setup
- Service cards: Event-specific imagery
- Gallery: Your portfolio of catered events
- Testimonials: Client photos

## Technical Details

### Built With
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Full type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Vite** - Fast build tool and development server
- **Lucide React** - Beautiful, customizable icons

### Browser Support
- Chrome/Edge 88+
- Firefox 78+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Mobile 88+)

### Accessibility Features
- Semantic HTML structure
- Proper ARIA labels and roles
- Keyboard navigation support
- Focus management
- Screen reader friendly content
- High contrast ratios for text readability

## Deployment

The project can be deployed to any static hosting service:

### Netlify
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### Vercel
1. Import your repository to Vercel
2. Build settings are automatically detected
3. Deploy with one click

### Other Static Hosts
Build the project (`npm run build`) and upload the `dist` directory contents to your hosting service.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For questions or support, please contact:
- Email: hello@saveurcatering.com
- Phone: +1 (555) 123-4567

---

Built with ❤️ for exceptional catering experiences.